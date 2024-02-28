---
title: 字符串和指针转换
date: 2024-02-28
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
  - C++
---

## 字符串转指针

### [Marshal](https://learn.microsoft.com/zh-cn/dotnet/api/system.runtime.interopservices.marshal?view=net-8.0)

引用`using System.Runtime.InteropServices;`，具体查看C++提供的字符集编码

```cs{3}
using System.Runtime.InteropServices;

var str = "Hello World";
var strPtr=Marshal.StringToHGlobalUni(str);
```

## [Marshal.Copy](https://learn.microsoft.com/zh-cn/dotnet/api/system.runtime.interopservices.marshal.copy?view=net-8.0)

```cs{4-6}
using System.Runtime.InteropServices;
var str = "Hello World\0";

var byteStr = Encoding.Unicode.GetBytes(str);
IntPtr strPtr = Marshal.AllocHGlobal(byteStr.Length);
Marshal.Copy(byteStr, 0, strPtr, byteStr.Length);
```

## 指针转字符串

### [Marshal.PtrToStringUni](https://learn.microsoft.com/zh-cn/dotnet/api/system.runtime.interopservices.marshal.ptrtostringuni?view=net-6.0)

```cs{5}
using System.Runtime.InteropServices;

var str = "Hello World";
var strPtr=Marshal.StringToHGlobalUni(str);
var readStr = Marshal.PtrToStringUni(strPtr);
Console.WriteLine(readStr)
```

### [Encoding](https://learn.microsoft.com/zh-cn/dotnet/api/system.text.encoding?view=net-8.0)

```cs{6-8}
using System.Runtime.InteropServices;

var str = "Hello World";
var strPtr=Marshal.StringToHGlobalUni(str);

byte[] bytes = new byte[22];
Marshal.Copy(strPtr, bytes, 0, 22);
var readStr = Encoding.Unicode.GetString(bytes);
Console.WriteLine(readStr)
```

同理，其他类型也可以通过`Marshal.Copy`进行二进制编码转换
