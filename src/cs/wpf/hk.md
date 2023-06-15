---
title: 海康视频
icon: logos:pingy
date: 2023-06-15
dir.order: 1
editLink: false
footer: false
isOriginal: true
category:
  - WPF
tag:
  - ReactiveUI
  - FFMPEG
  - 海康视频
---

## 开发包

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

### 使用PictureBox

::: tip

WPF控件没有句柄,通过[WindowsFormsIntegration](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.forms.integration?view=windowsdesktop-6.0)实现WPF与Winform互操作

反之通过[ElementHost](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.forms.integration.elementhost?view=windowsdesktop-6.0)托管WPF控件 :smile:

:::

通过PictureBox就是用的传统Winform方式，但是毕竟WPF和Winform是两种方式，需要适配下。

1. 引用`System.Windows.Forms`

    ```xaml
    xmlns:wf="clr-namespace:System.Windows.Forms;assembly=System.Windows.Forms"
    xmlns:wfi="clr-namespace:System.Windows.Forms.Integration;assembly=WindowsFormsIntegration"
    ```

2. 添加`PictureBox`

    ```xaml
    <wfi:WindowsFormsHost>
        <wf:PictureBox x:Name="videoPictureBox"/>
    </wfi:WindowsFormsHost>
    ```

3. 播放

    这里使用Wpf中的`behaviors`,将`PictureBox`控件本身当作参数传递即可。

### 使用Image
