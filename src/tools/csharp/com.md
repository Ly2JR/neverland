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

反射和直接引用都可以，[示例源代码地址](https://github.com/Ly2JR/wpf-samples/tree/main/src/ComDemo)

1. `DemoWin.Client`：NetFramework Winform客户端，调用`DemoWin.Contract`和`DemoCore.Contract`服务
2. `DemoVB.Client`：VB客户端，调用`DemoWin.Contract`服务
3. `DemoWin.Contract`：Net Framework公开服务
4. `DemoWin.Plugin`：Net Framework服务实现
5. `DemoCore.Client`：NetCore WPF客户端
6. `DemoCore.Contract`：NetCore和Net Framework公开服务
7. `DemoCore.Plugin`：NetCore和Net Framework服务实现

## VB与.NET Framework

![VB与NetFramework](https://nas.ilyl.life:8092/com/com1.gif =420x200)

### 定义GUID

```cs
public sealed class ContractGuids
{
    public const string ServerClass = "XXXX-XXX-XXX-XXXX";
    public const string ServerInterface = "XXXX-XXX-XXX-XXXX";
}
```

### 公开服务接口

```cs
[ComVisible(true)]
[Guid(ContractGuids.ServerInterface)]
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

set obj=nothing
```

@tab csharp

```cs
var comType = Type.GetTypeFromCLSID(Guid.Parse(ContractGuids.ServerClass));
var active = System.Activator.CreateInstance(comType) as IServer;
active.StartWin();
```

:::

## .NET Core与.NET Core

[官网示例NET Core Com](https://learn.microsoft.com/zh-cn/dotnet/core/native-interop/expose-components-to-com#sample)

![NETCore与NETCore](https://nas.ilyl.life:8092/com/com2.gif =420x200)

与上诉流程类型，部分差异

### 公开服务接口差异

这里使用的是WPF作为页面展示，`编辑项目文件`添加`<UseWPF>true</UseWPF>`，使接口能返回`Window`供客户端使用

```cs
[ComVisible(true)]
[Guid(ContractGuids.ServerInterface)]
[InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
public interface IServer
{
    Window StartWin();
}
```

### 实现服务接口差异

这里使用的是WPF作为页面展示

`编辑项目文件`添加`<EnableComHosting>true</EnableComHosting>`，生成`xxxx.comhost.dll`文件。

使用[regsvr32](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/regsvr32)对`xxx.comhost.dll`进行注册。

`编辑项目文件`添加`<EnableRegFreeCom>true</EnableRegFreeCom>`，生成`XXXX..X.manifest`清单文件。

```cs{7}
[ComVisible(true)]
[Guid(ContractGuids.ServerClass)]
public class Server : IServer
{
    public Window StartCore()
    {
        return new MainView();
    }
}
```

### 客户端调用差异

```cs
// The following classes are typically defined in a PIA, but for this example
// are being defined here to simplify the scenario.
namespace Activation
{
    /// <summary>
    /// Managed definition of CoClass
    /// </summary>
    [ComImport]
    [CoClass(typeof(ServerClass))]
    [Guid(ContractGuids.ServerInterface)] // By TlbImp convention, set this to the GUID of the parent interface
    internal interface Server : IServer
    {
    }

    /// <summary>
    /// Managed activation for CoClass
    /// </summary>
    [ComImport]
    [Guid(ContractGuids.ServerClass)]
    internal class ServerClass
    {
    }
}
```

直接使用

```cs
var caller = new Server();
var mainView= caller.StartCore();
mainView.ShowDialog();
Application.Current.MainWindow = mainView;
```

## .NET Framework与.NET Core

![NETFramework与NETCore](https://nas.ilyl.life:8092/com/com3.gif =420x200)

无法使用.NET Core与.NET Core代理的方式调用，但是可以使用反射

### .Net Core支持多框架

为了使`DemoCore.Contract`同时`.NET Core`和`.NET Framework`，默认新建的是.NET Core类库项目。

在[.NET Core与.Net Core Com调用](#net-core与net-core)部分添加了`UseWPF`使其支持WPF，继续`编辑项目文件`，

将`<TargetFramework>net7.0-windows</TargetFramework>`

改成`<TargetFrameworks>net7.0-windows;net48</TargetFrameworks>`，

关闭项目，重新打开即可。

```cs
var comType = Type.GetTypeFromCLSID(Guid.Parse(DemoCore.Contract.ContractGuids.ServerClass));
var active = System.Activator.CreateInstance(comType) as DemoCore.Contract.IServer;
//var sum=active.Sum(2,5);
//MessageBox.Show(sum.ToString());
var mainView=active.StartCore();
mainView.ShowDialog();
```
