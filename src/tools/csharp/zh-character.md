---
title: 随机生成汉字
date: 2023-08-23
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
---

随机生成汉字一种是通过内置字符，但是汉字很多，普通验证码就是这种方式。

另外一种是通过[字符编码](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/character-encoding)

以`GB2312`编码表为例。

::: tip
[.NET Core不直接支持GB2312](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/character-encoding#net-core-encoding-support)

Nuget需要引用[System.Text.Encoding.CodePages](https://www.nuget.org/packages/System.Text.Encoding.CodePages/)

并且注册`Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);`
:::

通常所知一个`一个汉字=2Byte`，在`GB2312`中，汉字的范围在高位`B0`~`F7`,低位`A1`~`F4`

`GB2312`第一个汉字`啊`，用2Byte标表示为`B0A1`,最后一个汉字`齄`表示`F7FE`


```cs
//十六进制显示内容
private string[] hexSeed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
//汉字十六进制显示范围
//啊=B0A1=[176,161]
private readonly Tuple<int, int,int,int>[] zhHans = new[]{
    new Tuple<int,int,int,int>(12,16,0,0),  
    new Tuple<int,int,int,int>(0,1,16,7),
    new Tuple<int,int,int,int>(11,16,0,0),
    new Tuple<int,int,int,int>(0,16,16,4),
};

public string GetZhHans(int len)
{
    // 获取GB2312编码页（表） 
    Encoding encoding = Encoding.GetEncoding("GB2312");
    var sb = new StringBuilder();
    for (var i = 0; i < len; i++)
    {
        byte[] bytes = this.GeneratorZhHans();
        var str = encoding.GetString(bytes, 0, bytes.Length);
        sb.Append(str);
    }
    return sb.ToString();
}

  private byte[] GeneratorZhHans()
  {
      byte[] charBytes = new byte[2];           
      var sb=new StringBuilder();
      foreach(var zh in zhHans)
      {
          int index = Random.Shared.Next(zh.Item1, zh.Item2);
          if (zh.Item3!=0&& zh.Item3 == index)
          {
              index = Random.Shared.Next(0, zh.Item4);
          }
          var value = hexSeed[index];
          sb.Append(value);
      }
      var buffer = sb.ToString();
      for(var i = 0; i < buffer.Length / 2; i++)
      {
          var charHexStr=buffer.Substring(i * 2, 2);
          byte charByte = Convert.ToByte(charHexStr, 16);
          charBytes[i] = charByte;
      }
      return charBytes;
  }
```