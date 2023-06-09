---
title: 转换
icon: octicon:issue-closed-16
date: 2023-06-08
dir.order: 2
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - StructLayout
  - Intptr
---

[Intptr](https://learn.microsoft.com/zh-cn/dotnet/api/system.intptr?view=net-7.0)与[StructLayout](https://learn.microsoft.com/zh-cn/dotnet/api/system.runtime.interopservices.structlayoutattribute?view=net-6.0)转换

```cs
using System.Runtime.InteropServices;
public static IntPtr StructToIntPtr<T>(T info) where T : struct
{
    int size = Marshal.SizeOf(info);
    IntPtr intPtr = Marshal.AllocHGlobal(size);
    Marshal.StructureToPtr(info, intPtr, false);
    return intPtr;
}

public static T IntptrToStruct<T>(IntPtr intPtr) where T : struct
{
    return (T)Marshal.PtrToStructure(intPtr, typeof(T));
}
```
