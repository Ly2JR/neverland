---
title: 软件更新
date: 2023-06-28
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - 异步编程
---

之前一篇[下载](./download.md)用控制台演示了下载的功能，而本次更新是在这基础上加了UI界面实现软件更新的功能，[源代码地址](https://github.com/Ly2JR/wpf-samples/tree/main/src/update)。

受[异步编程](https://learn.microsoft.com/zh-cn/archive/msdn-magazine/2014/april/async-programming-patterns-for-asynchronous-mvvm-applications-commands)启发，借用了大量代码。

![更新](https://nas.ilyl.life:8092/wpf/update.gif =420x200)

- [x] 更新日志说明
- [x] 显示进度条
- [x] 显示文件大小
- [x] 显示下载速度
- [x] 显示下载时间
- [x] 支持批量更新文件
- [x] 支持文件下载重命名
- [x] 支持文件下载后删除重名文件
- [x] 支持相同文件重复下载自动重命名
- [ ] 更多功能扩展`update.xml`配置文件

::: tip
`Environment.Exit(0);` 用于退出程序

`Process` 用于启动其他程序
:::

虽说是更新，本质还是下载，更新又跟程序设计有关，例如：

1. 本身就一个exe程序

    更新就是替换本身，先退出在启动新的程序

2. 主程序是一个exe程序，其他为dll文件，像[模块化](./plugin.md)一样

   主程序exe不动，而是直接更新替换dll文件

3. 启动器，程序及相关dll

   同2类似，只是多个启动器，启动器不变，更新相关dll

更新首先要有一个信息源用来比对，需要更新哪些内容，这里以`IIS`的本身`80`端口服务器，用`xml`来做文件更新配置文件，相关更新文件放在`80`端口目录下

## 配置文件

配置文件按实际需求进行额外扩展。

```xml
<?xml version="1.0" encoding="utf-8" ?>
<update>
  <file name="iisstart" suffix="htm"/>
  <file name="iisstart" suffix="png"/>
  <file name="test" suffix="exe"/>
  <logs>
    <log>1.更新html文件</log>
    <log>2.更新图片</log>
    <log>3.更新主程序</log>
  </logs>
</update>
```

[读取XML文件](../../tools/csharp/xml.md):

```cs
using System.Xml;

const string UpdateUrl = "http://localhost:80/update.xml";
var updateXml = new XmlDocument();
updateXml.Load(UpdateUrl);

var logs = updateXml.SelectNodes("update/logs/log");
if (logs != null)
{
    foreach (XmlNode log in logs)
    {
        var logTxt = log.InnerText;
        Console.WriteLine(logTxt);
    }
}

var files = updateXml.SelectNodes("update/file");
if (files == null) return;
foreach (XmlNode file in files)
{
    var name = file.Attributes["name"].Value;
    var suffix = file.Attributes["suffix"].Value;
    Console.WriteLine($"{name}.{suffix}");
}
```

## 更新本身

对应场景一，就一个主程序。

![更新自身](https://nas.ilyl.life:8092/wpf/update1.gif =420x200)

将`update`项目文件拷贝到需要更新的程序目录下，这里为`WindowsFormsApp1`项目的Bin目录下。[源码地址](https://github.com/Ly2JR/wpf-samples/tree/main/src/WindowsFormsApp1)

### 调整配置文件

1. 添加`delete`属性，用来判断当前下载的文件是覆盖还是累加。
2. 添加`autorun`属性，用来判断下载的文件在全部下载完成之后是否自动启动，并退出下载器

```xml
<?xml version="1.0" encoding="utf-8" ?>
<update>
  <file name="WindowsFormsApp1" suffix="exe" delete="1" autorun="1"/>
  <logs>
    <log>1.更新主程序</log>
  </logs>
</update>
```

### 调整下载器

默认是手动点击执行的，需要扩展下，支持自动执行和实现自动启动及退出功能。

因为下载器是用WPF开发，所以需要在`App.xaml.cs`文件里，重写`OnStartup`方法，用来接受启动参数，这里为`adl`。

下载器用来接受参数部分

```cs{6}
protected override void OnStartup(StartupEventArgs e)
{
    if (e.Args != null && e.Args.Length>0)
    {
        var args = e.Args;
        Consts.AutoDownLoad = args.Contains(Consts.AutoDownloadArg);
    }
    base.OnStartup(e);
}
```

`MainWindowViewModel.cs`用于自动下载和自动启动并退出自身，额外声明了一个`FindishedList`属性用来存储已经下载完成的记录，用于判别文件是否全部下载完成，自动启动并退出自身需要在全部下载完成之后执行。

```cs{1,6,10}
public ObservableCollection<string> FinishedList = new ObservableCollection<string>();

public MainWindowViewModel()
{
    Operations = new ObservableCollection<CountUrlBytesViewModel>();
    FinishedList.CollectionChanged += FinishedList_CollectionChanged;
    RunCommand = new DelegateComand(Run);
    if (Consts.AutoDownLoad)
    {
        Task.Factory.StartNew(Run);
    }
}
```

当已经下载完成的记录等于需要下载的文件记录，则启动程序并退出自身

```cs {5,8-12,14}
private void FinishedList_CollectionChanged(object? sender, System.Collections.Specialized.NotifyCollectionChangedEventArgs e)
{
    if (e.Action == System.Collections.Specialized.NotifyCollectionChangedAction.Add)
    {
        if (!autoRun) return;
        if (FinishedList.Count == Operations.Count)
        {
            var info = new ProcessStartInfo
            {
                FileName = $"{AppDomain.CurrentDomain.BaseDirectory}/{name}.{suffix}",
            };
            Process.Start(info);

            Environment.Exit(0);
        }
    }
}
```

下载部分，新增了是删除文件还是重命名文件的判断，根据配置文件`delete`来区分

```cs
private async Task<string> DownloadAndCountBytesAsync(string name,string suffix,CancellationToken token = new CancellationToken(),bool deleteOld=false)
{
  ...
  var savePath = Environment.CurrentDirectory;
  var saveFileName = FileName;
  if (!deleteOld)
  {
      var files = Directory.GetFiles(savePath, searchPattern, SearchOption.TopDirectoryOnly);
      var hasFiles = files.Count();
      if (hasFiles > 0)
      {
          saveFileName = $"{name}({hasFiles}).{suffix}";
      }
  }
  else
  {
      File.Delete($"{savePath}/{FileName}");
  }
  savePath += $"/{saveFileName}";
  ...
}
```

## 更新模块化文件

对应场景二，主程序就是一个exe显示，其他业务逻辑或者资源文件分开，只更新这些文件即可。[源代码地址](https://github.com/Ly2JR/wpf-samples/tree/main/src/demo)

![更新模块化文件](https://nas.ilyl.life:8092/wpf/update2.gif =420x200)

因为Prism模块，在已经加载模块化文件后无法卸载，这是无解的。所以在程序启动时进行检查。

::: tip
正常来说主程序exe也可以更新，但是通常不这么做，如有可能还是用场景三的方式来更新。
:::

## 启动器，更新主程序及模块化文件

对应场景三，是场景二的升级版本,既更新了主程序也更新了其他文件，详情参考[COM](../../tools/csharp/com.md)。

![VB调用.NET Core](https://nas.ilyl.life:8092/wpf/update3.gif =420x200)
