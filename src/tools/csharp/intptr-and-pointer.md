---
title: 托管指针转换指针
date: 2023-06-15
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
  - C++
---

[Intptr](https://learn.microsoft.com/zh-cn/dotnet/api/system.intptr?view=net-7.0)与[指针](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/unsafe-code)转换，涉及两个方法[Marshal.AllocHGlobal](https://learn.microsoft.com/zh-cn/dotnet/api/system.runtime.interopservices.marshal.allochglobal?view=net-6.0)和[Marshal.FreeHGlobal](https://learn.microsoft.com/zh-cn/dotnet/api/system.runtime.interopservices.marshal.freehglobal?view=net-6.0#system-runtime-interopservices-marshal-freehglobal(system-intptr))，他们成对出现。

::: tip
注意勾选项目属性里的`不安全代码`
:::

```cs
using System.Runtime.InteropServices;

int a = 1;
Console.WriteLine(a);
unsafe
{
    IntPtr a_ptr = Marshal.AllocHGlobal(a * sizeof(byte));
    byte* c = (byte*)a_ptr.ToPointer();
    *c = 2;
    Marshal.FreeHGlobal(a_ptr);
    Console.WriteLine(*c);
}
Console.WriteLine(a);

//输出
//1
//2
//1
```
