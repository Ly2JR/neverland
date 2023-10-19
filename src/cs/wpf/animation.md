---
title: 动画
date: 2023-10-19
dir.order: 1
editLink: false
footer: false
isOriginal: true
dir:
    order: 12
order: 12
category:
  - C#
tag:
  - WPF
---

WPF可以样式里添加触发器和动画，实现更好的效果。

以Image鼠标移动和移除效果为例

```xml
 <Image Width="32"
        Height="32"
        Panel.ZIndex="1000"
        Cursor="Hand"
        Source="pack://application:,,,/XXX;component/Resources/Logo.png">
     <Image.Style>
         <Style TargetType="{x:Type Image}">
             <Style.Setters>
                 <Setter Property="Opacity" Value="0.3" />
             </Style.Setters>
             <Style.Triggers>
                 <Trigger Property="IsMouseOver" Value="True">
                     <Trigger.EnterActions>
                         <BeginStoryboard>
                             <Storyboard>
                                 <DoubleAnimation Storyboard.TargetProperty="Opacity"
                                                  To="1"
                                                  Duration="0:0:1" />
                             </Storyboard>
                         </BeginStoryboard>
                     </Trigger.EnterActions>
                     <Trigger.ExitActions>
                         <BeginStoryboard>
                             <Storyboard>
                                 <DoubleAnimation Storyboard.TargetProperty="Opacity"
                                                  To="0.25"
                                                  Duration="0:0:1" />
                             </Storyboard>
                         </BeginStoryboard>
                     </Trigger.ExitActions>
                 </Trigger>
             </Style.Triggers>
         </Style>
     </Image.Style>
 </Image>
```
