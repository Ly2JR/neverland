---
title: COM
date: 2023-07-06
dir.order: 1
order: 1
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - COM
---

[Com激活说明](https://github.com/dotnet/runtime/blob/main/docs/design/features/COM-activation.md)

| Server | Client | Current Support |
| --- | --- | :---: |
| COM* | .NET Core | Yes |
| .NET Core | COM* | Yes |
| .NET Core | .NET Core | Yes |
| .NET Framework | .NET Core | No |
| .NET Core | .NET Framework | No |

* “COM”用于表示除 .NET 以外的任何 COM 环境（例如 C/C++）。

## VB与NET Framework

![VB与NetFramework](https://nas.ilyl.life:8092/com/com1.gif =420x200)

反射和直接引用都可以，[源代码地址](https://github.com/Ly2JR/wpf-samples/tree/main/src/ComDemo)

### 定义GUID

```cs
public sealed class ContractGuids
{
    public const string ServerClass = "XXXX-XXX-XXX-XXXX";
    public const string ServerInferface = "XXXX-XXX-XXX-XXXX";
}
```

### 公开服务接口

```cs
[ComVisible(true)]
[Guid(ContractGuids.ServerInferface)]
[InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
public interface IServer
{
    void StartWin();
}
```

### 实现服务接口

```cs
[ComVisible(true)]
[Guid(ContractGuids.ServerClass)]
public class Server : IServer
{
    public void StartWin()
    {
        var login=new FrmLogin();
        login.ShowDialog();
    }
}
```

同时勾选项目属性`为COM互操作注册`，生成一个带`xxx.tlb`的文件

或者使用[Regasm.exe](https://learn.microsoft.com/zh-cn/dotnet/framework/tools/regasm-exe-assembly-registration-tool)

```shell
regasm xxx.dll /tlb:xxx.tlb
```

如无法找到，需要加上`/codebase`，即`regasm xxx.dll /tlb:xxx.tlb /codebase`

### 客户端调用

::: tabs

@tab vb

```vb
Dim obj As Object
'方式一：引用
'Set obj = New DemoWin_Plugin.Server
'obj.startwin

'方式二：反射
Set obj = CreateObject("DemoWin.Plugin.Server")
obj.startwin
```

@tab csharp

```cs
var comType = Type.GetTypeFromCLSID(Guid.Parse(ContractGuids.ServerClass));
var active = System.Activator.CreateInstance(comType) as IServer;
active.StartWin();
```

:::

## NET CORE与NET CORE

[NET Core Com](https://learn.microsoft.com/zh-cn/dotnet/core/native-interop/expose-components-to-com#sample)
