---
title: Divider 分割线
date: 2024-03-29
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - WPF主题控件
---

## 基础用法

对不同段落的文本进行分割。

![divider](https://nas.ilyl.life:8092/wpf-theme/divider/divider.png)

```xml
<Border Padding="24"
        BorderBrush="#dcdfe6"
        BorderThickness="1">
    <StackPanel>
        <TextBlock VerticalAlignment="Center">
            I sit at my window this morning where the world like a passer-by stops
            for a moment, nods to me and goes.
        </TextBlock>
        <nl:Divider />
        <TextBlock VerticalAlignment="Center">
            There little thoughts are the rustle of leaves; they have their whisper
            of joy in my mind.
        </TextBlock>
    </StackPanel>
</Border>
```

## 设置文案

可以在分割线上自定义文本内容。

![content](https://nas.ilyl.life:8092/wpf-theme/divider/divider-content.png)

```xml
<Border Margin="0,12"
        Padding="24"
        BorderBrush="#dcdfe6"
        BorderThickness="1">
    <StackPanel>
        <TextBlock VerticalAlignment="Center">
            What you are you do not see, what you see is your shadow.
        </TextBlock>
        <nl:Divider Content="Rabindranath Tagore" ContentPosition="Left" />
        <TextBlock VerticalAlignment="Center">
            My wishes are fools, they shout across thy song, my Master. Let me but listen.
        </TextBlock>
        <nl:Divider>
            <Path Width="10"
                Height="10"
                Data="{StaticResource star-icon}"
                Fill="Black"
                Stretch="Fill" />
        </nl:Divider>
        <TextBlock VerticalAlignment="Center">
            I cannot choose the best. The best chooses me.
        </TextBlock>
        <nl:Divider Content="Rabindranath Tagore" ContentPosition="Right" />
    </StackPanel>
</Border>
```

## 虚线

您可以设置分隔符的样式，提供`Dashed`、`Dotted`两种。

![style](https://nas.ilyl.life:8092/wpf-theme/divider/divider-style.png)

```xml
<Border Margin="0,12"
        Padding="24"
        BorderBrush="#dcdfe6"
        BorderThickness="1">
    <StackPanel>
        <TextBlock VerticalAlignment="Center">
            What language is thine, O sea?
        </TextBlock>
        <nl:Divider BorderStyle="Dashed" />
        <TextBlock VerticalAlignment="Center">
            The language of eternal question.
        </TextBlock>
        <nl:Divider BorderStyle="Dotted" />
        <TextBlock VerticalAlignment="Center">
            What language is thy answer, O sky?
        </TextBlock>
        <nl:Divider />
        <TextBlock VerticalAlignment="Center">
            The language of eternal silence.
        </TextBlock>
    </StackPanel>
</Border>
```

## 垂直分割线

![vertical](https://nas.ilyl.life:8092/wpf-theme/divider/divider-vertical.png)

```xml
<Border Margin="0,12"
        Padding="24"
        BorderBrush="#dcdfe6"
        BorderThickness="1">
    <StackPanel Orientation="Horizontal">
        <TextBlock VerticalAlignment="Center" Text="Rain" />
        <nl:Divider Direction="Vertical" />
        <TextBlock VerticalAlignment="Center" Text="Home" />
        <nl:Divider Direction="Vertical" />
        <TextBlock VerticalAlignment="Center" Text="Grass" />
    </StackPanel>
</Border>
```
