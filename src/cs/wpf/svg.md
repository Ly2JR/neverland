---
title: SVG
date: 2023-10-16
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - SVG
---

在WPF中使用`SVG`文件，一种是安装第三方包[SharpVectors.Wpf](https://github.com/ElinamLLC/SharpVectors)，直接包裹即可。

::: tip
路径格式:pack://application:,,,/XXX;component/Resources/XXX.svg
:::

```xml{3,6}
<window 
  ...
  xmlns:svgc="http://sharpvectors.codeplex.com/svgc/"
>
 <svgc:SvgViewbox IsHitTestVisible="False"
                  Source="{Binding SvgUrl}" />
```

另一种将SVG转换为PATH，对于复杂的SVG，可以使用提供的[SvgXaml](https://github.com/ElinamLLC/SvgXaml)进行转换，将转换的xaml文件拷贝包装为`DrawingImage`。

```xml
<ResourceDictionary ...
                    xmlns:PresentationOptions="http://schemas.microsoft.com/winfx/2006/xaml/presentation/options">
    <DrawingImage x:Key="HomeSvg" PresentationOptions:Freeze="true">
        <DrawingImage.Drawing>
            <DrawingGroup x:Name="DrawingLayer">
                <DrawingGroup.ClipGeometry>
                    <RectangleGeometry Rect="0,0,24,24" />
                </DrawingGroup.ClipGeometry>
                <GeometryDrawing Brush="#979797">
                    <GeometryDrawing.Geometry>
                        <PathGeometry Figures="M12.707,2.293A1,1,0,0,0,11.293,2.293L4.293,9.293 2.293,11.293A1,1,0,1,0,3.707,12.707L4,12.414 4,19A3,3,0,0,0,7,22L17,22A3,3,0,0,0,20,19L20,12.414 20.293,12.707A1,1,0,0,0,21.707,11.293L12.707,2.293z" FillRule="EvenOdd" />
                    </GeometryDrawing.Geometry>
                </GeometryDrawing>
            </DrawingGroup>
        </DrawingImage.Drawing>
    </DrawingImage>
</ResourceDictionary>
```

```xml
 <Image Width="18"
        Height="18"
        Cursor="Hand"
        Source="{StaticResource HomeSvg}" />
```
