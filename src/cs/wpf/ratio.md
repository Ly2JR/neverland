---
title: 画面比例
date: 2023-08-10
dir.order: 1
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - FFMPEG
  - 海康视频
---

之前使用WPF配合FFMPEG进行转码显示海康视频，本次将转码的视频近一步处理，按指定比例显示。

## 屏幕比

屏幕比例即屏幕的宽度和高度的比例。

常见的有:`4:3`,`16:9`。

这里需要用到它们的比值即：

`4:3`: 4/3=1.33D

`16:9`:16/9=1.77D

## 转换方式

当视频源固定按指定屏幕比显示转换有两种方式：

1. 使用FFMPEG进行转换时同时更改输出大小
2. 通过布局调整显示的大小

优缺点各自取舍。

例如：当预览按指定屏幕比显示时，两种方式都没问题，当对预览的视频进行截图或者录像时就产生差异。

这里又涉及到另外一个问题，[Image.Stretch](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.controls.image.stretch?view=windowsdesktop-7.0)属性，[Stretch枚举](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.media.stretch?view=windowsdesktop-7.0#system-windows-media-stretch-uniform)效果。

上部分显示视频通过装饰器调整显示比例，下部分视频为原始视频大小,只调整了Stretch模式。

1. `Stretch="None"`：Image比输出源区域小，不能完整的显示视频源大小

    ![Stretch="None"](https://nas.ilyl.life:8092/wpf/none.gif =420x200)

2. `Stretch="Fill"`：Image能完整的显示视频源大小，但是区分不了屏幕比

    ![Stretch="Fill"](https://nas.ilyl.life:8092/wpf/fill.gif =420x200)

3. `Stretch="Uniform"`：Image能完整的显示视频源大小，也能区分屏幕比，但是需要调整视频源大小

    ![Stretch="Uniform"](https://nas.ilyl.life:8092/wpf/uniform.gif =420x200)

4. `Stretch="UniformToFill"`：Image能完整的显示视频源大小，但是区分不了屏幕比

    ![Stretch="UniformToFill"](https://nas.ilyl.life:8092/wpf/uniformtofill.gif =420x200)

这里通过布局的方式，完成最终屏蔽比显示

![屏幕比](https://nas.ilyl.life:8092/wpf/ratio.gif =420x200)

### 布局

通过布局调整屏幕比显示效果，即视频的输出源不变、只改变显示的数据源大小。

以视频源的宽度`640`，高度`360`为例：

|模式|屏幕比|宽度|高度|
|:-|:-|:-|:-|
|横向拉伸|`16:9`|640|360|
|横向拉伸|`4:3`|`478`|360|
|纵向拉伸|`16:9`|640|360|
|纵向拉伸|`4:3`|640|`480`|

其中，黑色部分是显示的区域，绿色部分为视频输出显示的区域。

![屏幕比布局](https://nas.ilyl.life:8092/wpf/ratio_layout.gif =420x200)

关键在于[Decorator](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.controls.decorator?view=windowsdesktop-7.0)装饰器

```xml{5,11}
<Border
    Name="Grid_Container"
    Grid.Column="1"
    Background="Black">
    <theme:RatioBox Ratio="{Binding Ratio}">
        <Border Background="Green">
            <Image
                Panel.ZIndex="1"
                RenderOptions.BitmapScalingMode="HighQuality"
                Source="{Binding VedioSource}"
                Stretch="Fill"
                UseLayoutRounding="True" />
        </Border>
    </theme:RatioBox>
</Border>
```

```cs{25-32,49-59}
 public class RatioBox : Decorator
 {
     public double Ratio
     {
         get { return (double)GetValue(RatioProperty); }
         set { SetValue(RatioProperty, value); }
     }

     public static readonly DependencyProperty RatioProperty =
         DependencyProperty.Register("Ratio", typeof(double), typeof(RatioBox)
             , new FrameworkPropertyMetadata(double.NaN, 
                 FrameworkPropertyMetadataOptions.AffectsMeasure | FrameworkPropertyMetadataOptions.AffectsArrange));

     protected override Size MeasureOverride(Size constraint)
     {
         if (double.IsNaN(Ratio))
         {
             return base.MeasureOverride(constraint);
         }
         else
         {
             UIElement child = Child;
             if (child != null)
             {
                 double h = constraint.Height;
                 double w = h * Ratio;
                 if (w > constraint.Width)
                 {
                     w = constraint.Width;
                     h = w / Ratio;
                 }
                 child.Measure(new Size(w, h));
             }
             return new Size();
         }
     }

     protected override Size ArrangeOverride(Size arrangeSize)
     {
         if (double.IsNaN(Ratio))
         {
             return base.ArrangeOverride(arrangeSize);
         }
         else
         {
             UIElement child = Child;
             if (child != null)
             {
                 double h = arrangeSize.Height;
                 double w = h * Ratio;
                 if (w > arrangeSize.Width)
                 {
                     w = arrangeSize.Width;
                     h = w / Ratio;
                 }
                 double x = (arrangeSize.Width - w) / 2;
                 double y = (arrangeSize.Height - h) / 2;
                 var cb = new Rect(x, y, w, h);
                 child.Arrange(cb);
             }
             return arrangeSize;
         }
     }
 }
```

### FFMPEG

通过调整`AVFrame`类型的参数即可，改变输出源大小。
