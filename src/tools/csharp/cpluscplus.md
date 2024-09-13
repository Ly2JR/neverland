---
title: 调用C++
date: 2024-02-27
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
  - C++
---

::: tip
参考资料[与非托管代码进行交互操作](https://learn.microsoft.com/zh-cn/dotnet/framework/interop/)
:::

## [数据类型对照](https://learn.microsoft.com/zh-cn/dotnet/framework/interop/marshalling-data-with-platform-invoke)

|Windows API中的非托管类型|[非托管C语言类型](https://learn.microsoft.com/zh-cn/cpp/cpp/data-type-ranges?view=msvc-170)|[托管类型](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/built-in-types)|描述|
|:-|:-|:-|:-|
|VOID|void|System.Void|应用于不返回值的函数|
|HANDLE|void*|System.IntPtr或System.UIntPtr|在32位Windows操作系统上为32位、在64位Windows操作系统上为64位|
|BYTE|usigned char|System.Byte|8位|
|SHORT|short|System.Int16|16位|
|WORD|usigned short|System.UInt16|16位|
|INT|int|System.Int16|32位|
|UINT|unsigned int|System.UInt32|32位|
|LONG|long|System.Int32|32位|
|BOOL|long|System.Boolean或System.Int32|32位|
|DWORD|unsigned long|System.UInt32|32位|
|ULONG|unsigned long|System.UInt32|32位|
|CHAR|char|System.Char|用ANSI修饰|
|WCHAR|wchar_t|System.Char|用Unicode修饰|
|LPSTR|char *|System.String或System.Text.StringBuilder|用ANSI修饰|
|LPCSTR|const char *|System.String或System.Text.StringBuilder|用ANSI修饰|
|LPWSTR|wchar_t *|System.String或System.Text.StringBuilder|用Unicode修饰|
|LPCWSTR|const wchar_t *|System.String|用Unicode修饰|
|FLOAT|float|System.Single|32位|
|DOUBLE|double|System.Double|64位|

## C++动态连接库

### 声明头文件

创建头文件`HelloCplusPlus.h`

通过[__declspec(dllexport)](https://learn.microsoft.com/zh-cn/cpp/build/exporting-from-a-dll-using-declspec-dllexport?view=msvc-170)导出DLL文件

分为函数导出、类导出、静态类导出以及[extern "C"](https://learn.microsoft.com/zh-cn/cpp/cpp/extern-cpp?view=msvc-170#extern-c-and-extern-c-function-declarations)导出

```c++
#pragma once

#ifndef  HelloCPlusPlusDll

#define  HelloCPlusPlusDll

//宏定义导出
#ifdef  HelloCPlusPlusDll
#define HelloCPlusPlusDll __declspec(dllexport)//导出
#else
#define HelloCPlusPlusDll __declspec(dllimport)//导入
#endif

HelloCPlusPlusDll int __stdcall Add(int, int);

extern "C" {
    HelloCPlusPlusDll  int __stdcall Sub(int, int);

    HelloCPlusPlusDll const wchar_t* __stdcall ReadString();

    HelloCPlusPlusDll void __stdcall Reset();

    HelloCPlusPlusDll const wchar_t* __stdcall WriteString(const wchar_t* input);

    HelloCPlusPlusDll const char* __stdcall WriteString2(const char* input);
}

class HelloCPlusPlusDll C
{
public:
    static int Mul(int, int);
};

class HelloCPlusPlusDll S
{
public:
    int Div(int, int);
};

#endif
```

### 实现头文件

创建源文件`HelloCplusPlus.cpp`

```c++
#include "HelloCPlusPlus.h"
#include <iostream>
#include <wchar.h>

using namespace std;

int Add(int a, int b) {
    return a + b;
}

int Sub(int a, int b) {
    return a - b;
}

wchar_t Hello[16]=L"Hello";
char Hello2[16] = "Hello";

const wchar_t* ReadString()
{
    return Hello;
}

void  Reset()
{
    fill(begin(Hello)+5,end(Hello),0);
    fill(begin(Hello2) + 5, end(Hello2), 0);
}

const wchar_t* WriteString(const wchar_t* input)
{
    wcscat_s(Hello,16,input);
    return Hello;
}

const char* WriteString2(const char* input)
{
    strcat_s(Hello2,16, input);
    return Hello2;
}

int C::Mul(int a, int b) {
    return a * b;
}

int S::Div(int a, int b) {
    return a / b;
}
```

### 编译

在`配置属性\常规\配置类型`改为`动态库(.dll)`

### 查看导出类型

安装VS后，打开`Developer Command Prompt for VS2022`，利用[dumpbin](https://learn.microsoft.com/zh-cn/cpp/build/reference/dumpbin-reference?view=msvc-170)查看定义

输入`dumpbin /exports project1.dll`

![导出定义](https://nas.ilyl.life:8092/cplusplus/dumpbin.png)

发现通过`extern "C"`导出的名称与定义一致，这也是C#调用C++提升找不到入口点的原因之一

## 调用

::: warning
C++字符串以`\0`结尾，多占一位
:::

### CPlusPlus调用

1. 新建控制台项目
2. 新建`include`文件夹，拷贝`HelloCPlusPlus.h`头文件
3. 新建`libs`文件夹，拷贝生成的`lib`、`dll`文件
4. 打开`配置属性\VC++目录\`在`包含目录`添加`include`文件夹
5. 打开`配置属性\链接器\常规`下的`附加库目录`添加`libs`文件夹
6. 打开`配置属性\链接器\输入`下的`附加依赖项`添加`project.lib`文件

::: tip
可以不配置链接器，直接引用项目即可
:::

```c++
#include <iostream>
#include<HelloCPlusPlus.h>
using namespace std;
int main()
{
    int a= Add(1, 2);
    cout << "1+2="<< a << endl;

    int a1 = Sub(2, 1);
    cout << "2-1="<<a1 << endl;

    C helloC;
    int a2 = helloC.Mul(2, 3);
    cout << "2*3=" << a2 << endl;

    S helloS;
    int a3 = helloS.Div(4, 2);
    cout << "4/2=" <<a3 << endl;

    const wchar_t* str= ReadString();
    wcout << "ReadString:" << str << endl;

    const wchar_t* input1 = L" World";
    const wchar_t* str1 = WriteString(input1);
    wcout << "WriteString:" << str1 <<" Length:" << wcslen(str1) << endl;

    const char input2[] = " World1234";
    const char* str2 = WriteString2(input2);
    cout << "WriteString2:" << str2 << " Length:" << strnlen_s(str2,16) << endl;
}

//输出
//1+2=3
//2-1=1
//2*3=6
//4/2=2
//ReadString:Hello
//WriteString:Hello World Length:11
//WriteString2:Hello World1234 Length:15
```

### CSharp调用

使用[DllImport](https://learn.microsoft.com/zh-cn/dotnet/framework/interop/consuming-unmanaged-dll-functions)访问非托管函数

引用`using System.Runtime.InteropServices;`

```cs
using System.Runtime.InteropServices;
using System.Text;

short a = Add(1, 2);
Console.WriteLine($"1+2={a}");

short a1 = Sub(2, 1);
Console.WriteLine($"2-1={a1}");

short a2 = Mul(2, 3);
Console.WriteLine($"2*3={a2}");

short a3 = Div(4, 2);
Console.WriteLine($"4/2={a3}");

IntPtr readPtr1 = ReadString();
//方式一：指针转换字符串
var readValue1 = Marshal.PtrToStringUni(readPtr1); 
//方式二：通过字节数组转换
//byte[] bytes1 = new byte[16];
//Marshal.Copy(readPtr1, bytes1, 0, 16);
//var readValue1 = Encoding.Unicode.GetString(bytes1);
Console.WriteLine("ReadString:"+readValue1);

//方式一:通过指针转换
//var writeValue2 = " World";
//var writePtr2=Marshal.StringToHGlobalUni(writeValue2);
//方式二:通过字节转换，末尾需要`\0`
var writeValue2 = " World\0";
var byteStr2 = Encoding.Unicode.GetBytes(writeValue2);
IntPtr writePtr2 = Marshal.AllocHGlobal(byteStr2.Length);
Marshal.Copy(byteStr2, 0, writePtr2, byteStr2.Length);
IntPtr readPtr2 = WriteString(writePtr2);
var readValue2 = Marshal.PtrToStringUni(readPtr2);
Console.WriteLine("WriteString:" + readValue2 + " Length:"+readValue2.Length);

//WriteStringAs和WriteString使用同一个操作进行拼接，超出上限需要重置
Reset();

string writeValue3 = " World12";
var readValuePtr3 = WriteStringAs(writeValue3);
var readValue3 = Marshal.PtrToStringUni(readValuePtr3);
Console.WriteLine("WriteString:" + readValue3 + " Length:"+readValue2.Length);

var writeValue4 = " World1234";
var writeValuePtr4 = Marshal.StringToHGlobalAnsi(writeValue4);
IntPtr readValuePtr4 = WriteString2(writeValuePtr4);
var readValue4 = Marshal.PtrToStringAnsi(readValuePtr4);
Console.WriteLine("WriteString2:" + readValue4 + " Length:"+readValue2.Length);

Marshal.FreeHGlobal(readPtr1);
Marshal.FreeHGlobal(readPtr2);
Marshal.FreeHGlobal(readValuePtr3);
Marshal.FreeHGlobal(readValuePtr4);

[DllImport(@".\lib\Project1.dll",CharSet =CharSet.Unicode, EntryPoint = "?Add@@YAHHH@Z")]
static extern short Add(short a, short b);
[DllImport(@".\lib\Project1.dll", CharSet = CharSet.Unicode)]
static extern short Sub(short a, short b);
[DllImport(@".\lib\Project1.dll", CharSet = CharSet.Unicode, EntryPoint = "?Mul@C@@SAHHH@Z")]
static extern short Mul(short a, short b);
[DllImport(@".\lib\Project1.dll", CharSet = CharSet.Unicode, EntryPoint = "?Div@S@@QEAAHHH@Z")]
static extern short Div(short a, short b);
[DllImport(@".\lib\Project1.dll", CharSet = CharSet.Unicode)]
static extern IntPtr ReadString();
[DllImport(@".\lib\Project1.dll", CharSet = CharSet.Unicode)]
static extern IntPtr WriteString(IntPtr input);
[DllImport(@".\lib\Project1.dll", CharSet = CharSet.Unicode,EntryPoint = "WriteString")]
static extern IntPtr WriteStringAs(string input);
[DllImport(@".\lib\Project1.dll", CharSet = CharSet.Unicode)]
static extern IntPtr WriteString2(IntPtr input);
[DllImport(@".\lib\Project1.dll", CharSet = CharSet.Unicode)]
static extern void Reset();

//输出
//1+2=3
//2-1=1
//2*3=6
//4/2=0
//ReadString:Hello
//WriteString:Hello World Length:11
//WriteString:Hello World12 Length:13
//WriteString2:Hello World1234 Length:15
```

C#的`WriteString`和`WriteStringAs`方法都是调用C++的`WriteString`，通过[EntryPoint](https://learn.microsoft.com/zh-cn/dotnet/framework/interop/specifying-an-entry-point)更改入口点名称。它们唯一的区别在于形参参数传递，一个通过`IntPtr`，一个通过`string`，返回结果`string`无效。

发现`Div`函数输出结果不正确，[调试C#与C++代码](https://learn.microsoft.com/zh-cn/visualstudio/debugger/how-to-debug-managed-and-native-code?view=vs-2022)发现传递两个参数，结果C++代码接收的参数多一个，调整代码

```cs
var a3 = Div(0,4, 2);
Console.WriteLine($"4/2={a3}");

[DllImport(@".\lib\Project1.dll", CharSet = CharSet.Unicode, EntryPoint = "?Div@S@@QEAAHHH@Z")]
static extern short Div(short i,short a, short b);

//输出
//4/2=2
```

结果按预期输出，C#是无法直接调用C++类，需要进行包装处理，但是为什么多加一个参数可以? 。
