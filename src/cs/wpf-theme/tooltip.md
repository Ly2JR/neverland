---
title: Tooltip 文字提示
date: 2024-04-30
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

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用 content 属性来决定 hover 时的提示信息。 由 `Placement` 属性决定展示效果： Placement属性值为：[方向]-[对齐位置]；四个方向：top、left、right、bottom；三种对齐位置：start，end默认为空。 如 placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

![tooltip](https://image.ilyl.life:8443/wpf-theme/tooltip/tooltip.gif)

```xml
<nl:ToolTip Placement="TopStart" TipContent="Top Start prompts info">
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Top Start</Button>
</nl:ToolTip>
<nl:ToolTip Placement="Top" TipContent="Top Center prompts info">
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Top</Button>
</nl:ToolTip>
<nl:ToolTip Placement="TopEnd" TipContent="Top End prompts info">
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Top End</Button>
</nl:ToolTip>

<nl:ToolTip Placement="BottomStart" TipContent="Bottom Start prompts info">
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Bottom Start</Button>
</nl:ToolTip>
<nl:ToolTip Placement="Bottom" TipContent="Bottom Center prompts info">
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Bottom</Button>
</nl:ToolTip>
<nl:ToolTip Placement="BottomEnd" TipContent="Bottom Center prompts info">
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Bottom End</Button>
</nl:ToolTip>

<nl:ToolTip Placement="LeftStart" TipContent="Left Start prompts info">
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Left Start</Button>
</nl:ToolTip>
<nl:ToolTip Placement="Left" TipContent="Left Center prompts info">
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Left</Button>
</nl:ToolTip>
<nl:ToolTip Placement="LeftEnd" TipContent="Left End prompts info">
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Left End</Button>
</nl:ToolTip>

<nl:ToolTip Placement="RightStart" TipContent="Right Start prompts info">
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Right Start</Button>
</nl:ToolTip>
<nl:ToolTip Placement="Right" TipContent="Right Center prompts info">
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Right</Button>
</nl:ToolTip>

<nl:ToolTip Placement="RightEnd" TipContent="Right End prompts info">
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Right End</Button>
</nl:ToolTip>
```

## 主题

ToolTip组件内置了两个主题:`Dark`和`Light`。

通过设置`Theme`属性来修改主题，默认为`Dark`

![theme](https://image.ilyl.life:8443/wpf-theme/tooltip/tooltip-theme.gif)

```xml
<nl:ToolTip
    Placement="TopStart"
    Theme="Light"
    TipContent="Top Start prompts info">
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Top Start</Button>
</nl:ToolTip>
```

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式

![multi](https://image.ilyl.life:8443/wpf-theme/tooltip/tooltip-multi.gif)

```xml
<nl:ToolTip
    Placement="Top">
    <nl:ToolTip.TipContent>
        <TextBlock>
            <Run Text="multiple lines" />
            <LineBreak />
            <Run Text="second line" />
        </TextBlock>
    </nl:ToolTip.TipContent>
    <Button HorizontalAlignment="Center" VerticalAlignment="Center">Top</Button>
</nl:ToolTip>
```