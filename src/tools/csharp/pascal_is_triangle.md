---
title: 杨辉三角
date: 2024-11-07
editLink: false
footer: false
isOriginal: false
category:
  - 工具箱
tag:
  - C#
---

```cs
yanghui(10)
/* 杨辉三角
          1
         1 1
        1 2 1
       1 3 3 1
      1 4 6 4 1
     1 5 10 10 5 1
    1 6 15 20 15 6 1
   1 7 21 35 35 21 7 1
  1 8 28 56 70 56 28 8 1
 1 9 36 84 126 126 84 36 9 1
 */
```

```cs
static void yanghui(int value)
{
    if (value < 3) return ;
    int[,] arry = new int[value, value];
    for (int i = 0; i < value; i++)
    {
        string str = "";
        str = str.PadLeft(value - i);
        Console.Write(str);
        for (int j = 0; j <= i; j++)
        {
            if (i == j || j == 0)
                arry[i, j] = 1;
            else
                arry[i, j] = arry[i - 1, j - 1] + arry[i - 1, j];
            Console.Write(arry[i, j] + " ");
        }
        Console.WriteLine();
    }
}
```