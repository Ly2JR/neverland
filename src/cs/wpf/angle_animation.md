---
title: 旋转动画
date: 2024-01-25
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - 动画
---

在做主题控件时，涉及到了`Loading`加载控件，无从下手，本着学习的目的，参考了[HandryOrg](https://handyorg.github.io/handycontrol/extend_controls/loading/index.html)。

发现HC的Loading是通过代码方式实现，为了学习以及简化的目的，通过XAML方式一步一步梳理。

![Loading](https://nas.ilyl.life:8092/wpf/controls/loading/loading-animation.gif)

## 添加[Canvas](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/controls/canvas?view=netframeworkdesktop-4.8)

[ClipToBounds](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.uielement.cliptobounds?view=windowsdesktop-8.0)裁剪多余的部分

```xml
<Canvas
    Width="100"
    Height="100"
    Background="Gray"
    ClipToBounds="True">
</Canvas>
```

## 添加圆点

```xml
<Ellipse
    Width="10"
    Height="10"
    Fill="Red" />
```

如何让这个点进行圆形运动，并且各个点运动轨迹有重力感？

除了利用[路径运动](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/graphics-multimedia/how-to-animate-an-object-along-a-path-double-animation?view=netframeworkdesktop-4.8)。

`HC`使用了`旋转`的方式，圆点不管怎么旋转还是圆点。

因此，在圆点外包装一层`Border`，设置`Border`大小与`Canvas`一致，设置`Ellipse`在`Border`中下方。

```xml
<Border
    Width="100"
    Height="100"
    BorderBrush="Purple"
    BorderThickness="1">
    <Ellipse
        Width="10"
        Height="10"
        HorizontalAlignment="Center"
        VerticalAlignment="Bottom"
        Fill="Red" />
</Border>
```

![基本元素](https://nas.ilyl.life:8092/wpf/controls/loading/loading-step1.png)

通过[RenderTransformOrigin](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.uielement.rendertransformorigin?view=windowsdesktop-8.0)属性设置旋转的中心点。

```xml{6-8}
 <Border
     Width="100"
     Height="100"
     BorderBrush="Purple"
     BorderThickness="1">
     <Border.RenderTransformOrigin>
         <Point X="0.5" Y="0.5" />
     </Border.RenderTransformOrigin>
     <Ellipse
         Width="10"
         Height="10"
         HorizontalAlignment="Center"
         VerticalAlignment="Bottom"
         Fill="Red" />
 </Border>
```

通过[RenderTransform](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/graphics-multimedia/transforms-overview?view=netframeworkdesktop-4.8)属性设置旋转角度

```xml{6-10}
 <Border
     Width="100"
     Height="100"
     BorderBrush="Purple"
     BorderThickness="1">
     <Border.RenderTransform>
         <TransformGroup>
             <RotateTransform Angle="30" />
         </TransformGroup>
     </Border.RenderTransform>
     <Border.RenderTransformOrigin>
         <Point X="0.5" Y="0.5" />
     </Border.RenderTransformOrigin>
     <Ellipse
         Width="10"
         Height="10"
         HorizontalAlignment="Center"
         VerticalAlignment="Bottom"
         Fill="Red" />
 </Border>
```

![旋转30°](https://nas.ilyl.life:8092/wpf/controls/loading/loading-step2.png)

通过改变`Angle`的值，产生了让圆点按圆形运动的效果，并且WPF支持动画。

## 匀速运动

通过动画更改`Angle`的值，产生圆点运动的效果。

这里用到[Storyboard](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/graphics-multimedia/storyboards-overview?view=netframeworkdesktop-4.8)和[DoubleAnimationUsingKeyFrames](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/graphics-multimedia/how-to-animate-a-double-by-using-key-frames?view=netframeworkdesktop-4.8)

因为要让圆点能产生重力感，就需要对关键帧的进行精确的控制。

[LinearDoubleKeyFrame](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.media.animation.lineardoublekeyframe?view=windowsdesktop-8.0)让圆点按线性运动

`Storyboard.TargetName="PART_Dot1"`：附加属性设置需要动画的目标元素

`Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)"`：附加属性设置目标元素下的具体属性

`<LinearDoubleKeyFrame KeyTime="0" Value="0" />`：设置在`0`秒时，圆点的`Angle`的角度为`0`

`<LinearDoubleKeyFrame KeyTime="00:00:4" Value="720" />`：设置在`4`秒时，圆点的`Angle`的角度为`720`

```xml{3-5}
<Storyboard
    RepeatBehavior="Forever">
    <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot1" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
        <LinearDoubleKeyFrame KeyTime="0" Value="0" />
        <LinearDoubleKeyFrame KeyTime="00:00:4" Value="720" />
    </DoubleAnimationUsingKeyFrames>
</Storyboard>
```

![旋转动画](https://nas.ilyl.life:8092/wpf/controls/loading/loading-step3.gif)

按照第一个点，在添加其他4个点，并且设置每个点的初始角度。

```xml{9,30,51,72,93}
<Border
    x:Name="PART_Dot1"
    Width="100"
    Height="100"
    BorderBrush="Purple"
    BorderThickness="1">
    <Border.RenderTransform>
        <TransformGroup>
            <RotateTransform Angle="0" />
        </TransformGroup>
    </Border.RenderTransform>
    <Border.RenderTransformOrigin>
        <Point X="0.5" Y="0.5" />
    </Border.RenderTransformOrigin>
    <Ellipse
        Width="10"
        Height="10"
        HorizontalAlignment="Center"
        VerticalAlignment="Bottom"
        Fill="Red" />
</Border>
<Border
    x:Name="PART_Dot2"
    Width="100"
    Height="100"
    BorderBrush="Blue"
    BorderThickness="1">
    <Border.RenderTransform>
        <TransformGroup>
            <RotateTransform Angle="-20" />
        </TransformGroup>
    </Border.RenderTransform>
    <Border.RenderTransformOrigin>
        <Point X="0.5" Y="0.5" />
    </Border.RenderTransformOrigin>
    <Ellipse
        Width="10"
        Height="10"
        HorizontalAlignment="Center"
        VerticalAlignment="Bottom"
        Fill="Orange" />
</Border>
<Border
    x:Name="PART_Dot3"
    Width="100"
    Height="100"
    BorderBrush="Green"
    BorderThickness="1">
    <Border.RenderTransform>
        <TransformGroup>
            <RotateTransform Angle="-40" />
        </TransformGroup>
    </Border.RenderTransform>
    <Border.RenderTransformOrigin>
        <Point X="0.5" Y="0.5" />
    </Border.RenderTransformOrigin>
    <Ellipse
        Width="10"
        Height="10"
        HorizontalAlignment="Center"
        VerticalAlignment="Bottom"
        Fill="Yellow" />
</Border>
<Border
    x:Name="PART_Dot4"
    Width="100"
    Height="100"
    BorderBrush="Orange"
    BorderThickness="1">
    <Border.RenderTransform>
        <TransformGroup>
            <RotateTransform Angle="-60" />
        </TransformGroup>
    </Border.RenderTransform>
    <Border.RenderTransformOrigin>
        <Point X="0.5" Y="0.5" />
    </Border.RenderTransformOrigin>
    <Ellipse
        Width="10"
        Height="10"
        HorizontalAlignment="Center"
        VerticalAlignment="Bottom"
        Fill="Green" />
</Border>
<Border
    x:Name="PART_Dot5"
    Width="100"
    Height="100"
    BorderBrush="Red"
    BorderThickness="1">
    <Border.RenderTransform>
        <TransformGroup>
            <RotateTransform Angle="-80" />
        </TransformGroup>
    </Border.RenderTransform>
    <Border.RenderTransformOrigin>
        <Point X="0.5" Y="0.5" />
    </Border.RenderTransformOrigin>
    <Ellipse
        Width="10"
        Height="10"
        HorizontalAlignment="Center"
        VerticalAlignment="Bottom"
        Fill="Blue" />
</Border>
```

![其余圆点](https://nas.ilyl.life:8092/wpf/controls/loading/loading-step4.png)

按上面步骤设置每个点的动画。

![圆点运动](https://nas.ilyl.life:8092/wpf/controls/loading/loading-step5.gif)

### 初具成效

移除每个`Border`的边框及颜色，设置`Canvas`的`ClipToBounds`为`True`

因此要对每个圆点的动画进行微调，设置每个圆点动画在零时的角度与初始角度一致

```xml{4,11,18,25,32}
<Storyboard
    RepeatBehavior="Forever">
    <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot1" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
        <LinearDoubleKeyFrame KeyTime="0" Value="0" />
        <LinearDoubleKeyFrame KeyTime="00:00:4" Value="720" />
    </DoubleAnimationUsingKeyFrames>
</Storyboard>
<Storyboard
    RepeatBehavior="Forever">
    <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot2" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
        <LinearDoubleKeyFrame KeyTime="0" Value="-20" />
        <LinearDoubleKeyFrame KeyTime="00:00:4" Value="720" />
    </DoubleAnimationUsingKeyFrames>
</Storyboard>
<Storyboard
    RepeatBehavior="Forever">
    <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot3" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
        <LinearDoubleKeyFrame KeyTime="0" Value="-40" />
        <LinearDoubleKeyFrame KeyTime="00:00:4" Value="720" />
    </DoubleAnimationUsingKeyFrames>
</Storyboard>
<Storyboard
    RepeatBehavior="Forever">
    <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot4" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
        <LinearDoubleKeyFrame KeyTime="0" Value="-60" />
        <LinearDoubleKeyFrame KeyTime="00:00:4" Value="720" />
    </DoubleAnimationUsingKeyFrames>
</Storyboard>
<Storyboard
    RepeatBehavior="Forever">
    <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot5" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
        <LinearDoubleKeyFrame KeyTime="0" Value="-80" />
        <LinearDoubleKeyFrame KeyTime="00:00:4" Value="720" />
    </DoubleAnimationUsingKeyFrames>
</Storyboard>
```

![初具效果](https://nas.ilyl.life:8092/wpf/controls/loading/loading-step6.gif)

发现在运动一段时间后，圆点重叠了，虽然每个点的动画在起时时角度不一样，但是在终止时间4秒的角度都是`720`度。

因此需要调整每个圆点在`4`秒时的角度，设置`RepeatBehavior`为`Forever`，这样动画开始点与结束点形成完整闭环并重复运行

```xml{5,12,19,26,33}
<Storyboard
    RepeatBehavior="Forever">
    <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot1" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
        <LinearDoubleKeyFrame KeyTime="0" Value="0" />
        <LinearDoubleKeyFrame KeyTime="00:00:4" Value="720" />
    </DoubleAnimationUsingKeyFrames>
</Storyboard>
<Storyboard
    RepeatBehavior="Forever">
    <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot2" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
        <LinearDoubleKeyFrame KeyTime="0" Value="-20" />
        <LinearDoubleKeyFrame KeyTime="00:00:4" Value="700" />
    </DoubleAnimationUsingKeyFrames>
</Storyboard>
<Storyboard
    RepeatBehavior="Forever">
    <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot3" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
        <LinearDoubleKeyFrame KeyTime="0" Value="-40" />
        <LinearDoubleKeyFrame KeyTime="00:00:4" Value="680" />
    </DoubleAnimationUsingKeyFrames>
</Storyboard>
<Storyboard
    RepeatBehavior="Forever">
    <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot4" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
        <LinearDoubleKeyFrame KeyTime="0" Value="-60" />
        <LinearDoubleKeyFrame KeyTime="00:00:4" Value="660" />
    </DoubleAnimationUsingKeyFrames>
</Storyboard>
<Storyboard
    RepeatBehavior="Forever">
    <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot5" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
        <LinearDoubleKeyFrame KeyTime="0" Value="-80" />
        <LinearDoubleKeyFrame KeyTime="00:00:4" Value="640" />
    </DoubleAnimationUsingKeyFrames>
</Storyboard>
```

![优化后](https://nas.ilyl.life:8092/wpf/controls/loading/loading-step7.gif)

## 加减速运动

在初期动画中，设置了圆点动画在`4秒`的时间线性转动`720度`。

因此进一步的细分，并添加[EasingDoubleKeyFrame](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/graphics-multimedia/easing-functions?view=netframeworkdesktop-4.8)实现缓动动画，并且利用[PowerEase](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.media.animation.powerease?view=windowsdesktop-8.0)实现加速与减速效果。

圆点起点在下方，顺时针运动。

`0秒`:圆点角度为`0°`。即0秒时圆点在正下方0°方向

`0.4秒`:圆点角度为`180°`。即在0.4秒时在0°方向从下往上顺时针减速运动到在正上方180°方向

`1.6秒`:圆点角度为`220°`。即在1.4秒时在正上方180°方向线性运动到右上方220°方向

`2秒`:圆点角度为`360°`。即在2秒时在右上方220°方向顺时针加速运动到正下方0°方向

`2.4秒`:圆点角度为`540°`。即在2.4秒时，第二圈开始，在0°方向从下往上顺时针减速运动到在正上方180°方向

`3.6秒`:圆点角度为`580°`。即在3.6秒时，第二圈开始，在正上方180°方向线性运动到右上方220°方向

`4秒`:圆点角度为`720°`。即在4秒时，第二圈开始，在右上方220°方向顺时针加速运动到正下方0°方向

```xml{4,5,10,11,16,21,22}
 <Storyboard
     RepeatBehavior="Forever">
     <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot1" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
         <LinearDoubleKeyFrame KeyTime="0" Value="0" />
         <EasingDoubleKeyFrame KeyTime="00:00:0.4" Value="180">
             <EasingDoubleKeyFrame.EasingFunction>
                 <PowerEase EasingMode="EaseOut" />
             </EasingDoubleKeyFrame.EasingFunction>
         </EasingDoubleKeyFrame>
         <LinearDoubleKeyFrame KeyTime="00:00:1.6" Value="220" />
         <EasingDoubleKeyFrame KeyTime="00:00:2" Value="360">
             <EasingDoubleKeyFrame.EasingFunction>
                 <PowerEase EasingMode="EaseIn" />
             </EasingDoubleKeyFrame.EasingFunction>
         </EasingDoubleKeyFrame>
         <EasingDoubleKeyFrame KeyTime="00:00:2.4" Value="540">
             <EasingDoubleKeyFrame.EasingFunction>
                 <PowerEase EasingMode="EaseOut" />
             </EasingDoubleKeyFrame.EasingFunction>
         </EasingDoubleKeyFrame>
         <LinearDoubleKeyFrame KeyTime="00:00:3.6" Value="580" />
         <EasingDoubleKeyFrame KeyTime="00:00:4" Value="720">
             <EasingDoubleKeyFrame.EasingFunction>
                 <PowerEase EasingMode="EaseIn" />
             </EasingDoubleKeyFrame.EasingFunction>
         </EasingDoubleKeyFrame>
     </DoubleAnimationUsingKeyFrames>
 </Storyboard>
```

其他四个点也是一样设置，注意每个原点的角度。

![加减速运动](https://nas.ilyl.life:8092/wpf/controls/loading/loading-step8.gif)

### 设置启动时间

虽然所有圆点的角度不一样，但是所有的动画开始时间一致。

因此正对每个圆点添加启动时间，最前面的先启动，每个圆点运动间隔`0.12秒`

`圆点1`:启动时间`0秒`

`圆点2`:启动时间`0.12秒`

`圆点3`:启动时间`0.24秒`

`圆点4`:启动时间`0.36秒`

`圆点5`:启动时间`0.48秒`

```xml{3}
<Storyboard
    x:Key="Dot2"
    BeginTime="00:00:0.12"
    RepeatBehavior="Forever">
    <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot2" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
        <LinearDoubleKeyFrame KeyTime="0" Value="-20" />
        <EasingDoubleKeyFrame KeyTime="00:00:0.4" Value="160">
            <EasingDoubleKeyFrame.EasingFunction>
                <PowerEase EasingMode="EaseOut" />
            </EasingDoubleKeyFrame.EasingFunction>
        </EasingDoubleKeyFrame>
        <LinearDoubleKeyFrame KeyTime="00:00:1.6" Value="200" />
        <EasingDoubleKeyFrame KeyTime="00:00:2" Value="340">
            <EasingDoubleKeyFrame.EasingFunction>
                <PowerEase EasingMode="EaseIn" />
            </EasingDoubleKeyFrame.EasingFunction>
        </EasingDoubleKeyFrame>
        <EasingDoubleKeyFrame KeyTime="00:00:2.4" Value="520">
            <EasingDoubleKeyFrame.EasingFunction>
                <PowerEase EasingMode="EaseOut" />
            </EasingDoubleKeyFrame.EasingFunction>
        </EasingDoubleKeyFrame>
        <LinearDoubleKeyFrame KeyTime="00:00:3.6" Value="560" />
        <EasingDoubleKeyFrame KeyTime="00:00:4" Value="700">
            <EasingDoubleKeyFrame.EasingFunction>
                <PowerEase EasingMode="EaseIn" />
            </EasingDoubleKeyFrame.EasingFunction>
        </EasingDoubleKeyFrame>
    </DoubleAnimationUsingKeyFrames>
</Storyboard>
```

![先后加减速运动](https://nas.ilyl.life:8092/wpf/controls/loading/loading-step9.gif)

### 关键帧动画

通过[ObjectAnimationUsingKeyFrames](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/graphics-multimedia/how-to-animate-an-object-by-using-key-frames?view=netframeworkdesktop-4.8)对元素对象进行动画处理。

之前动画是在`4秒`内运动两圈，因此继续添加动画效果，由于不显示圆点，相当于吞噬效果，因此所有点的`隐藏`、`显示`、`隐藏时间`都相同

`0.12秒`：圆点显示

`4秒`：圆点不显示，即运动两圈后隐藏

`4.4秒`：圆点不显示，即运动两圈后隐藏`0.4`秒

设置所有圆点初始状态隐藏

```xml{5}
 <Border
     x:Name="PART_Dot3"
     Width="100"
     Height="100"
     Visibility="Collapsed">
     <Border.RenderTransform>
         <TransformGroup>
             <RotateTransform Angle="-40" />
         </TransformGroup>
     </Border.RenderTransform>
     <Border.RenderTransformOrigin>
         <Point X="0.5" Y="0.5" />
     </Border.RenderTransformOrigin>
     <Ellipse
         Width="10"
         Height="10"
         HorizontalAlignment="Center"
         VerticalAlignment="Bottom"
         Fill="Yellow" />
 </Border>
```

```xml
<ObjectAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot3" Storyboard.TargetProperty="(UIElement.Visibility)">
  <DiscreteObjectKeyFrame KeyTime="00:00:0.12">
     <DiscreteObjectKeyFrame.Value>
         <Visibility>Visible</Visibility>
     </DiscreteObjectKeyFrame.Value>
 </DiscreteObjectKeyFrame>
 <DiscreteObjectKeyFrame KeyTime="00:00:4">
     <DiscreteObjectKeyFrame.Value>
         <Visibility>Collapsed</Visibility>
     </DiscreteObjectKeyFrame.Value>
 </DiscreteObjectKeyFrame>
 <DiscreteObjectKeyFrame KeyTime="00:00:4.4">
     <DiscreteObjectKeyFrame.Value>
         <Visibility>Collapsed</Visibility>
     </DiscreteObjectKeyFrame.Value>
 </DiscreteObjectKeyFrame>
</ObjectAnimationUsingKeyFrames>
```

![运动动画](https://nas.ilyl.life:8092/wpf/controls/loading/loading-step10.gif)

## 完整示例

```xml
<UserControl ...>
    <UserControl.Resources>
        <Storyboard
            x:Key="Dot1"
            BeginTime="00:00:00"
            RepeatBehavior="Forever">
            <DoubleAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot1" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[0].(RotateTransform.Angle)">
                <LinearDoubleKeyFrame KeyTime="0" Value="0" />
                <EasingDoubleKeyFrame KeyTime="00:00:0.4" Value="180">
                    <EasingDoubleKeyFrame.EasingFunction>
                        <PowerEase EasingMode="EaseOut" />
                    </EasingDoubleKeyFrame.EasingFunction>
                </EasingDoubleKeyFrame>
                <LinearDoubleKeyFrame KeyTime="00:00:1.6" Value="220" />
                <EasingDoubleKeyFrame KeyTime="00:00:2" Value="360">
                    <EasingDoubleKeyFrame.EasingFunction>
                        <PowerEase EasingMode="EaseIn" />
                    </EasingDoubleKeyFrame.EasingFunction>
                </EasingDoubleKeyFrame>
                <EasingDoubleKeyFrame KeyTime="00:00:2.4" Value="540">
                    <EasingDoubleKeyFrame.EasingFunction>
                        <PowerEase EasingMode="EaseOut" />
                    </EasingDoubleKeyFrame.EasingFunction>
                </EasingDoubleKeyFrame>
                <LinearDoubleKeyFrame KeyTime="00:00:3.6" Value="580" />
                <EasingDoubleKeyFrame KeyTime="00:00:4" Value="720">
                    <EasingDoubleKeyFrame.EasingFunction>
                        <PowerEase EasingMode="EaseIn" />
                    </EasingDoubleKeyFrame.EasingFunction>
                </EasingDoubleKeyFrame>
            </DoubleAnimationUsingKeyFrames>
            <ObjectAnimationUsingKeyFrames Storyboard.TargetName="PART_Dot1" Storyboard.TargetProperty="(UIElement.Visibility)">
                <DiscreteObjectKeyFrame KeyTime="00:00:0.12">
                    <DiscreteObjectKeyFrame.Value>
                        <Visibility>Visible</Visibility>
                    </DiscreteObjectKeyFrame.Value>
                </DiscreteObjectKeyFrame>
                <DiscreteObjectKeyFrame KeyTime="00:00:4">
                    <DiscreteObjectKeyFrame.Value>
                        <Visibility>Collapsed</Visibility>
                    </DiscreteObjectKeyFrame.Value>
                </DiscreteObjectKeyFrame>
                <DiscreteObjectKeyFrame KeyTime="00:00:4.36">
                    <DiscreteObjectKeyFrame.Value>
                        <Visibility>Collapsed</Visibility>
                    </DiscreteObjectKeyFrame.Value>
                </DiscreteObjectKeyFrame>
            </ObjectAnimationUsingKeyFrames>
        </Storyboard>
        <!--其他四个动画-->
    </UserControl.Resources>
    <Grid>
        <Canvas
        x:Name="PART_Container"
        Width="100"
        Height="100"
        Background="Gray"
        ClipToBounds="True">
        <Border
            x:Name="PART_Dot1"
            Width="100"
            Height="100"
            Visibility="Collapsed">
            <Border.RenderTransform>
                <TransformGroup>
                    <RotateTransform Angle="0" />
                </TransformGroup>
            </Border.RenderTransform>
            <Border.RenderTransformOrigin>
                <Point X="0.5" Y="0.5" />
            </Border.RenderTransformOrigin>
            <Ellipse
                Width="10"
                Height="10"
                HorizontalAlignment="Center"
                VerticalAlignment="Bottom"
                Fill="Red" />
        </Border>
        <!--其他四个点-->
        <Canvas.Triggers>
            <EventTrigger RoutedEvent="Loaded" SourceName="PART_Container">
                <BeginStoryboard x:Name="PART_Dot1Storyboard" Storyboard="{StaticResource Dot1}" />
            </EventTrigger>
            <EventTrigger RoutedEvent="Unloaded" SourceName="PART_Container">
                <StopStoryboard BeginStoryboardName="PART_Dot1Storyboard" />
            </EventTrigger>
        </Canvas.Triggers>
    </Canvas>
   </Grid>
</UserControl>
```

## 小结

使用XAML实现动画效果，但存在很多代码重复。
