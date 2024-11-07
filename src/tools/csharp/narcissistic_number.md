---
title: 水仙花数
date: 2024-11-07
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
---

水仙花数是指一个3位数，它的每个数位上的数字的 3次幂之和等于它本身。例如：$1^{3} + 5^{3}+ 3^{3} = 153$

```cs
int bai = 0; int shi = 0; int ge = 0; int baiyushu = 0;
for (int i = 100; i < 1000; i++)
{
    bai = i / 100;
    baiyushu = i % 100;
    shi = baiyushu / 10;
    ge = baiyushu % 10;
    if (i == bai * bai * bai + shi * shi * shi + ge * ge * ge)
    {
        Console.WriteLine("水仙花数：" + i);
    }
}
//output
//水仙花数：153
//水仙花数：370
//水仙花数：371
//水仙花数：407
```