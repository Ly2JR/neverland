---
title: 水印
date: 2023-11-15
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
---

微软官方文档提供了一个Textbox的[水印示例](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/controls/how-to-add-a-watermark-to-a-textbox?view=netframeworkdesktop-4.8)

升级改造，利用触发器实现相同效果

![watermark](https://nas.ilyl.life:8092/wpf/watermark.gif)

```xml
 <TextBox>
     <TextBox.Style>
         <Style TargetType="TextBox">
             <Style.Triggers>
                 <Trigger Property="Text" Value="">
                     <Setter Property="Background">
                         <Setter.Value>
                             <VisualBrush
                                 AlignmentX="Left"
                                 AlignmentY="Center"
                                 Stretch="None">
                                 <VisualBrush.Visual>
                                     <TextBlock
                                         Background="Transparent"
                                         FontSize="14"
                                         Foreground="Silver">
                                         这是水印
                                     </TextBlock>
                                 </VisualBrush.Visual>
                             </VisualBrush>
                         </Setter.Value>
                     </Setter>
                 </Trigger>
             </Style.Triggers>
         </Style>
     </TextBox.Style>
 </TextBox>
```
