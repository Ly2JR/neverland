---
title: 海康视频
icon: logos:pingy
date: 2023-06-15
dir.order: 1
star : 2
editLink: false
footer: false
isOriginal: true
category:
  - WPF
tag:
  - FFMPEG
  - 海康视频
---

## 环境

默认都是最新的版本

- [Visual Studio 2022](https://visualstudio.microsoft.com/zh-hans/downloads/)

- [.NET Framework 4.8](https://dotnet.microsoft.com/zh-cn/download/dotnet-framework/net48)

- [.NET 7](https://dotnet.microsoft.com/zh-cn/download/dotnet/7.0)

为什么会出现两个.NET框架？.NET Framework 4.8是为UI准备，并且是通过PictureBox的方式使用。使用第二种方式可以全部改为.NET 7

## 软件包

::: tip
`海康SDK`必须

集成到Winform：海康SDK提供的demo就是Winform

集成到WPF：也可以使用Winform的方式，但是不推荐，现在使用另外一种方式，需要使用FFMPEG，ReactiveUI可选，但是既然上了WPF，那么就装上它。
:::

1. [海康SDK](https://open.hikvision.com/download/5cda567cf47ae80dd41a54b3?type=10)
2. [FFMPEG](https://ffmpeg.org/)
3. [ReactiveUI](https://www.reactiveui.net/)

## 集成到Winform

海康本身提供了Winfrom的示例，注意的是将`头文件`文件夹下的所有文件拷贝到项目目录下，记得项目和拷贝的文件分`x86`和`x64`

## 集成到WPF

### PictureBox方式

::: tip

WPF控件没有句柄,通过[WindowsFormsIntegration](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.forms.integration?view=windowsdesktop-6.0)实现WPF与Winform互操作

反之通过[ElementHost](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.forms.integration.elementhost?view=windowsdesktop-6.0)托管WPF控件

:::

通过PictureBox就是用的传统Winform方式，但是毕竟[WPF](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/introduction-to-wpf?view=netframeworkdesktop-4.8)和[Winform](https://learn.microsoft.com/zh-cn/dotnet/desktop/winforms/?view=netframeworkdesktop-4.8)是两种不同的程序方式，需要适配下。

1. 引用程序集`System.Windows.Forms`和`WindowsFormsIntegration`

    ```xaml
    xmlns:wf="clr-namespace:System.Windows.Forms;assembly=System.Windows.Forms"
    xmlns:wfi="clr-namespace:System.Windows.Forms.Integration;assembly=WindowsFormsIntegration"
    ```

2. Nuget包添加`Microsoft.Xaml.Behaviors.Wpf`

    添加行为[命名空间](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/advanced/xaml-namespaces-and-namespace-mapping-for-wpf-xaml?view=netframeworkdesktop-4.8)

    ```xaml
    xmlns:i="http://schemas.microsoft.com/xaml/behaviors"
    ```

3. 添加`PictureBox`控件

    ```xaml
    <wfi:WindowsFormsHost>
        <wf:PictureBox x:Name="videoPictureBox"/>
    </wfi:WindowsFormsHost>
    ```

4. 播放

    这里使用Wpf中的`behaviors`,将`PictureBox`控件本身当作参数传递即可。

    ```xaml
     <Button Content="句柄预览">
          <i:Interaction.Triggers>
              <i:EventTrigger EventName="Click">
                  <i:InvokeCommandAction Command="{Binding PlayCommand}" CommandParameter="{Binding ElementName=videoPictureBox}" />
              </i:EventTrigger>
          </i:Interaction.Triggers>
      </Button>
    ```

### Image方式

![WPF无句柄预览](https://nas.ilyl.life:8092/wpf_hk_p2.gif =420x200)

#### 关键点

- FFMPEG
- 视频格式

FFMPEG很强大，但相关资料非常少。

从NuGet上下载`FFmpeg.AutoGen`，如果能跑通提供的[官方示例](https://github.com/Ruslan-B/FFmpeg.AutoGen/tree/master/FFmpeg.AutoGen.Example)，问题已经解决了60%，在了解相关视频格式问题，已经完成了30%，剩下10%通过[github](https://github.com/)和[stackoverflow](https://stackoverflow.com/)找相关问题或者案例。

::: tip
WPF通过[Application.Current.Dispatcher.CheckAccess](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.threading.dispatcher.checkaccess?view=windowsdesktop-7.0)来判断线程

Winform则通过[Control.InvokeRequired](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.forms.control.invokerequired?view=windowsdesktop-7.0&viewFallbackFrom=net-7.0)
:::

1. 使用[WriteableBitmap](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.media.imaging.writeablebitmap?view=windowsdesktop-6.0)作为Image的数据源

    ::: tabs

    @tab Views

    ```xaml
    <Image
          RenderOptions.BitmapScalingMode="HighQuality"
          Source="{Binding VedioSource}"
          Stretch="Fill"
          UseLayoutRounding="True" />
    ```

    @tab ViewModels

    ```cs
    private ImageSource _vedioSource = null;
    public ImageSource VedioSource
    {
        get { return _vedioSource; }
        set
        {
            _vedioSource = value;
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(VedioSource)));
        }
    }
    ```

    :::

    ::: warning
    - WriteableBitmap需要在UI线程上声明

    - 在写入WriteableBitmap时需要判断线程
    :::

2. 使用海康回调模式，自己解码

3. 通过FFmpeg提供的`sws_scale`进行转换

    ::: warning
    虽然`FFmpeg.AutoGen`提供了C#版本，但是FFmpeg参数问题还需要自己处理，例如常见的[Intptr与指针转换](../utility/intptr-to-pointer.md)

    注意：别忘了释放指针，否则 :bomb:
    :::

## 总结

如果只是单纯的展示，那么PictureBox是一种不错的方式。

更近一步的话，会发现两个常见小问题，更多问题见[官方文档](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/advanced/wpf-and-windows-forms-interoperation?view=netframeworkdesktop-4.8#layout-support):

1. 放大缩小窗体时，出现白色闪烁问题。

    ![WPF句柄预览缩放问题](https://nas.ilyl.life:8092/wpf_hk_p1.gif =420x200)

2. 使用WPF控件无法放在PictureBox顶层。

    ![WPF句柄预览叠加问题](https://nas.ilyl.life:8092/wpf_hk_issue2.png =420x200)

为了解决这两个问题，使用Image方式是一种更好的方法。

但这里没有贴更多的代码及具体实现，但是过程及注意事项如上所示。

其一视频是个很深的学问;

其二代码由原来的几百行缩减到几十行，当然是托了`FFMPEG`的福;

其三这里只是简单的预览视频，更多的操作及问题，后续遇见在写 :smile:

推荐一个[WPF视频播放器示例](https://github.com/unosquare/ffmediaelement)
