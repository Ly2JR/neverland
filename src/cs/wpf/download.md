---
title: 下载
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
dir:
    order: 4
order: 4
category:
  - C#
tag:
  - WPF
---

下载时太快UI不显示时，可以加个延时，代码高亮处。

![下载](https://nas.ilyl.life:8092/wpf/download.gif =420x200)

```cs {93}
//主机地址
const string BASE_URL = "http://localhost:80/";
//文件大小Byte
const int ByteSize = 1024;
//文件大小Kb
const int KByteSize = 1024 * 1024;
//缓存大小
const int DEFAULT_BUFFER_SIZE = 1024;
//下载文件长度
string FileLength = "";
//已下载文件长度
string CurrentLength = "";
//下载文件最大进度
int MaxProgress = 0;
//已下载文件当前进度
int CurrentProgress = 0;

Console.WriteLine("任意键开始下载...");
Console.ReadKey();

await ExecuteDownFileAsync("iisstart.png");

async Task ExecuteDownFileAsync(string fileName, CancellationToken token = new CancellationToken())
{
    var url = $"{BASE_URL}{fileName}";
    var uri = new Uri(url);
    using (var httpClient = new HttpClient())
    {
        var response = await httpClient.GetAsync(uri, token).ConfigureAwait(false);
        if (!response.IsSuccessStatusCode) return;
        var allFileLength = response.Content.Headers.ContentLength;
        if (!allFileLength.HasValue) return;

        if (allFileLength < ByteSize)
        {
            FileLength = $"{allFileLength}B";
            MaxProgress = (int)allFileLength;
        }
        else if (allFileLength > KByteSize)
        {
            FileLength = $"{allFileLength.Value / KByteSize:F2}MB";
            MaxProgress = (int)allFileLength / 1000;
        }
        else
        {
            FileLength = $"{allFileLength.Value / ByteSize:F2}KB";
            MaxProgress = (int)allFileLength / 1000;
        }
        var title = $"正在下载:{url}\t文件大小:{FileLength}\t";
        Console.Write(title);
        var savePath = $"{Environment.CurrentDirectory}/{fileName}";
        if (File.Exists(savePath))
        {
            File.Delete(savePath);
        }
        var stream = await response.Content.ReadAsStreamAsync().ConfigureAwait(false);
        if (stream == null) return;
        using (var fileStream = new FileStream(savePath, FileMode.Create, FileAccess.Write))
        {
            using (var streamReader = new StreamReader(stream))
            {
                var bufferByte = new byte[DEFAULT_BUFFER_SIZE];
                int startByte = 0;

                while (allFileLength > 0)
                {
                    var downByte = await stream.ReadAsync(bufferByte, 0, bufferByte.Length, token);
                    if (downByte == 0) break;

                    fileStream.Position = startByte;
                    
                    await fileStream.WriteAsync(bufferByte, 0, downByte, token);

                    startByte += downByte;
                    allFileLength -= downByte;

                    if (startByte < ByteSize)
                    {
                        CurrentLength = $"{startByte}";
                        CurrentProgress = startByte;
                    }
                    else if (startByte > KByteSize)
                    {
                        CurrentLength = $"{startByte / KByteSize:F2}MB";
                        CurrentProgress = startByte / 1000;
                    }
                    else
                    {
                        CurrentLength = $"{startByte / ByteSize:F2}KB";
                        CurrentProgress = startByte / 1000;
                    }
                    Console.SetCursorPosition(title.Length+18, 0);
                    Console.Write($"已完成:{CurrentLength}");
                    await Task.Delay(100);
                }
            }
            fileStream.Flush();
        }
    }
}
```
