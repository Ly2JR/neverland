---
title: Divider 分隔符
date: 2025-05-16
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - AvaloniaUI
  - AvaloniaUI主题控件
---

## 基础用法

对不同段落的文本进行分割。

![divider](https://image.ilyl.life:8443/avaloniaui-theme/divider/avalonia-divider.png)

```xml
 <Border
     Margin="0,12"
     Padding="24"
     BorderBrush="#dcdfe6"
     BorderThickness="1">
     <StackPanel>
         <TextBlock VerticalAlignment="Center">
             What you are you do not see, what you see is your shadow.
         </TextBlock>
         <nl:Divider Content="Rabindranath Tagore" Position="Left" />
         <TextBlock VerticalAlignment="Center">
             My wishes are fools, they shout across thy song, my Master. Let me but listen.
         </TextBlock>
         <nl:Divider>
             <PathIcon
                 Width="10"
                 Height="10"
                 Foreground="Black">
                 <PathIcon.Data>
                     <StreamGeometry>M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z</StreamGeometry>
                 </PathIcon.Data>
             </PathIcon>
         </nl:Divider>
         <TextBlock VerticalAlignment="Center">
             I cannot choose the best. The best chooses me.
         </TextBlock>
         <nl:Divider Content="Rabindranath Tagore" Position="Right" />
     </StackPanel>
 </Border>
```
