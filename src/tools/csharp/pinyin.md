---
title: 汉字转拼音
date: 2024-11-07
editLink: false
footer: false
isOriginal: false
category:
  - 工具箱
tag:
  - C#
---

扩展包[Visual Studio International Feature Pack 1.0](http://download.microsoft.com/download/5/7/3/57345088-ACF8-4E9B-A9A7-EBA35452DEF2/vsintlpack1.zip)提供一些本地化的辅助。

```cs
using Microsoft.International.Converters.PinYinConverter;

char zh = '啊';
ChineseChar chineseChar = new ChineseChar(zh);
Console.WriteLine("{0}的笔画：{1}",zh, chineseChar.StrokeNumber);
Console.WriteLine("{0}的拼音：{1}",zh,string.Join(" ",chineseChar.Pinyins));

//output
//啊的笔画：10
//啊的拼音：A1 A2 A3 A4 A5
```