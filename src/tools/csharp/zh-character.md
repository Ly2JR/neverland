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

以`GB2312`编码表为例，共6835个汉字。

::: tip
[.NET Core不直接支持GB2312](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/character-encoding#net-core-encoding-support)

Nuget需要引用[System.Text.Encoding.CodePages](https://www.nuget.org/packages/System.Text.Encoding.CodePages/)

并且注册`Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);`
:::

通常所知一个`一个汉字=2Byte`，在`GB2312`中，汉字的范围在高位`B0`~`F7`,低位`A1`~`F4`

`GB2312`第一个汉字`啊`，用2Byte标表示为`B0A1`,最后一个汉字`齄`表示`F7FE`

特殊区域`D7F0`~`D7F9`

```cs
using System.Security.Cryptography;
using System.Text;
//注册
Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
//十六进制字符串种子
string[] hexSeed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
//一个汉字十六进制显示范围
//例如：啊=B0A1=[176,161]
//特别区域`D7F9`
Tuple<int, int, int, int>[] zhHans = [
    new Tuple<int,int,int,int>(11,16,0,0),
    new Tuple<int,int,int,int>(0,16,15,8),
    new Tuple<int,int,int,int>(10,16,0,0),
    new Tuple<int,int,int,int>(0,16,15,15),
];

//打印GB2312
// List<string> strings = new List<string>();
// for (var i = 11; i < 16; i++)
// {
//     var cha = string.Empty;
//     cha = hexSeed[i];
//     var max2 = i == 15 ? 8 : 16;
//     for (var j = 0; j < max2; j++)
//     {
//         var c2 = hexSeed[j];
//         var temp2 = cha;
//         temp2 += c2;
//         for (var k = 10; k < 16; k++)
//         {
//             var c3 = hexSeed[k];
//             var temp3 = temp2;
//             temp3 += c3;
//             var max4 = 16;
//             if (temp3 == "D7F")
//             {
//                 max4 = 10;
//             }
//             else
//             {
//                max4= k == 15 ? 15 : 16;
//             }
//             for (var z = 0; z < max4; z++)
//             {
//                 var c4 = hexSeed[z];
//                 var temp4 = temp3;
//                 temp4 += c4;
//                 strings.Add(temp4);
//                 Console.Write(temp4+" ");
//             }
//             Console.WriteLine();
//         }
//         Console.WriteLine();
//     }
// }
// Console.WriteLine($"汉字共:{strings.Count}个");

var zh = GetZhHans(10);
Console.Write(zh);

string GetZhHans(int len)
{
    // 获取GB2312编码页（表） 
    Encoding encoding = Encoding.GetEncoding("GB2312");
    var sb = new StringBuilder();
    for (var i = 0; i < len; i++)
    {
        byte[] bytes = GeneratorZhHans();
        var str = encoding.GetString(bytes, 0, bytes.Length);
        sb.Append(str);
    }
    return sb.ToString();
}

//随机一个十六进制的汉字
byte[] GeneratorZhHans()
{
    byte[] charBytes = new byte[2];
    var sb = new StringBuilder();
    var index = -1;
    foreach (var zh in zhHans)
    {
        if (sb.ToString().Equals("D7F"))
        {
            index = RandomNumberGenerator.GetInt32(10);
        }
        else
        {
            if (zh.Item3 != 0 && zh.Item3 == index)
            {
                index = RandomNumberGenerator.GetInt32(zh.Item4);
            }
            else
            {
                index = RandomNumberGenerator.GetInt32(zh.Item1, zh.Item2);
            }
        }
        var value = hexSeed[index];
        sb.Append(value);
    }
    //十六进制字符串
    var buffer = sb.ToString();
    //十六进制字符串转16进制
    for (var i = 0; i < buffer.Length / 2; i++)
    {
        var charHexStr = buffer.Substring(i * 2, 2);
        byte charByte = Convert.ToByte(charHexStr, 16);
        charBytes[i] = charByte;
    }
    return charBytes;
}
```