---
title: 数值精度
date: 2024-12-16
editLink: false
footer: false
isOriginal: true
category:
  - 精度
tag:
  - C#
---

一般数值保留几位小数位，然后四舍五入。

通常会用[标准数字格式化](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/standard-numeric-format-strings)或者[Round](https://learn.microsoft.com/zh-cn/dotnet/api/system.math.round?view=net-8.0)来处理即可。

但是有时会出现特别的数值保留。

## 按值舍入

与四舍五入类型，但是具体舍入值不是`5`而是定制值。

例如，原值`3.1415926`，精度保留`1`位小数，舍入值`4`，则处理后的值为`3.2`

## 全部进位

小数指定精度后的值，只要不为`0`都进一位。

例如，原值`3.1415926`，精度保留`2`位小数，则处理后的值为`3.15`

## 全部舍位

只保留精度小数的值，舍去后面的所有值，也忽略四舍五入。

例如，原值`3.1415926`，精度保留`3`位小数，则处理后的值为`3.141`

## 代码实现

```cs
decimal Round(decimal qty, int precision,int type,char typeValue='5')
{
    if (qty <= 0M) return 0M;
    if (type != 1)
    {
        var addPrecision = 0M;
        switch (precision)
        {
            case 1: addPrecision = 0.1M; break;
            case 2: addPrecision = 0.01M; break;
            case 3: addPrecision = 0.001M; break;
            case 4: addPrecision = 0.0001M; break;
            case 5: addPrecision = 0.00001M; break;
            case 6: addPrecision = 0.000001M; break;
            case 7: addPrecision = 0.0000001M; break;
            case 8: addPrecision = 0.00000001M; break;
            case 9: addPrecision = 0.000000001M; break;
        }
        var over = false;
        var qtyString = qty.ToString().Split('.');
        if (qtyString.Length == 2)
        {
            for (var i = precision; i < qtyString[1].Length; i++)
            {
                char precisionNextValue = qtyString[1][precision];
                if (type == 0)
                {
                    var curChar = qtyString[1][i];
                    if (curChar != '0')
                    {
                        over = true;
                        break;
                    }
                }
                else if (type == 2 && precisionNextValue >= typeValue)
                {
                    over = true;
                    break;
                }
            }
        }
        if (over)
        {
            qty += addPrecision;
        }
    }
    var v = (decimal)Math.Pow(10, precision);
    return Math.Truncate(qty * v) / v;
}
//output
//原值    精度    进位值  舍位值   按值舍入值      舍入值
//1.001   3       1.001   1.001   1.001           4
//1.0011  3       1.002   1.001   1.001           4
//1.0012  3       1.002   1.001   1.001           4
//1.0013  3       1.002   1.001   1.001           4
//1.0014  3       1.002   1.001   1.002           4
//1.0015  3       1.002   1.001   1.002           4
//1.0016  3       1.002   1.001   1.002           4
//1.0017  3       1.002   1.001   1.002           4
//1.0018  3       1.002   1.001   1.002           4
//1.0019  3       1.002   1.001   1.002           4
```
