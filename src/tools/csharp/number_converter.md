---
title: 数字金额转换大写
date: 2024-11-07
editLink: false
footer: false
isOriginal: false
category:
  - 工具箱
tag:
  - C#
---

扩展包[Visual Studio International Feature Pack 2.0](https://www.microsoft.com/zh-cn/download/details.aspx?id=18970)提供一些本地化的辅助。

::: warning
.NET Core和.NET Framework有语言特性区域差异，只支持`.NET Framework`
:::

```cs
using Microsoft.International.Formatters;
using System.Globalization;


Console.WriteLine("The number of 12345 with Normal format and Chinese-Simplified is: " + InternationalNumericFormatter.FormatWithCulture("Ln", 12345, null, new CultureInfo("zh-CHS")));
Console.WriteLine("The number of 12345 with Normal format and Chinese-Traditional is: " + InternationalNumericFormatter.FormatWithCulture("Lc", 12345, null, new CultureInfo("zh-CHT")));

//The number of 12345 with Normal format and Chinese-Simplified is: 一万二千三百四十五
//The number of 12345 with Currency format and Chinese-Traditional is: 壹萬貳仟參佰肆拾伍
```

## 查看[特性区域](https://learn.microsoft.com/zh-cn/dotnet/api/system.globalization.cultureinfo.isneutralculture?view=net-8.0)

```cs
foreach (CultureInfo ci in CultureInfo.GetCultures(CultureTypes.AllCultures))
{
    if (ci.TwoLetterISOLanguageName == "zh")
    {
        Console.Write("{0,-7} {1,-40}", ci.Name, ci.EnglishName);
        if (ci.IsNeutralCulture)
        {
            Console.WriteLine(": neutral");
            }
        else
        {
            Console.WriteLine(": specific");
        }
    }
}
/**  
.NET Framewrok特性区域
zh-CHS  Chinese (Simplified)                    : neutral
zh-TW   Chinese (Taiwan)                        : specific
zh-CN   Chinese (People's Republic of China)    : specific
zh-HK   Chinese (Hong Kong S.A.R.)              : specific
zh-SG   Chinese (Singapore)                     : specific
zh-MO   Chinese (Macao S.A.R.)                  : specific
zh-CHT  Chinese (Traditional)                   : neutral

.NET Core特性区域
zh      Chinese                                 : neutral
zh-Hans Chinese (Simplified)                    : neutral
zh-Hans-CN Chinese (Simplified, China)             : specific
zh-Hans-HK Chinese (Simplified, Hong Kong SAR)     : specific
zh-Hans-MO Chinese (Simplified, Macao SAR)         : specific
zh-Hans-SG Chinese (Simplified, Singapore)         : specific
zh-Hant Chinese (Traditional)                   : neutral
zh-Hant-HK Chinese (Traditional, Hong Kong SAR)    : specific
zh-Hant-MO Chinese (Traditional, Macao SAR)        : specific
zh-Hant-TW Chinese (Traditional, Taiwan)           : specific
**/
```