---
title: 哥德巴赫猜想
date: 2024-11-07
editLink: false
footer: false
isOriginal: false
category:
  - 工具箱
tag:
  - C#
---

`哥德巴赫猜想`：任何一个≥6之偶数，都可以表示成两个[奇质数](https://baike.baidu.com/item/%E5%A5%87%E8%B4%A8%E6%95%B0/492763#1)之和

```cs
bool suc = IsGdbhArith(24);
if (suc)
{
    Console.WriteLine("{0}能写成两个素数的和，所以其符合哥德巴赫猜想。", 24);
}
else
{
    Console.WriteLine("猜想错误");
}
//output
//24=1+23
//24=5+19
//24=7+17
//24=11+13
//24能写成两个素数的和，所以其符合哥德巴赫猜想。
```

## 检查一个数是否是素数

```cs
static bool IsPrimeNumber(int num)
{
    if (num == 1 || num == 2) //判断输入的数字是否是1或者2
    {
        return true;
    }
    int sqr = Convert.ToInt32(Math.Sqrt(num));//对要判断的数字进行开方运算
    for (var i = sqr; i >= 2; i--)//对开方后的数字进行循环
    {
        if (num % i == 0)//对要判断的数字和指定数字进行求余运算
        {
            return false;//如果余数为0不是素数
        }
    }
    return true;
}
```

## 判断是否是哥德巴赫猜想

```cs
static bool IsGdbhArith(int bum)
{
    bool flag = false;
    if (bum % 2 == 0 && bum > 6)//对要判断的数字进行判断大于6的偶数
    {
        for (var i = 1; i <= bum / 2; i++)
        {
            bool b1 = IsPrimeNumber(i);//判断i是否为素数
            bool b2 = IsPrimeNumber(bum - i);//判断intnum-i是否为素数
            if (b1 & b2)
            {
                Console.WriteLine("{0}={1}+{2}", bum, i, bum - i);
                flag = true;
            }
        }
    }
    return flag;
}
```