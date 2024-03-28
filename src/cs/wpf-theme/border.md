---
title: Border 边框
date: 2024-02-2
star: 2
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - WPF主题控件
---


仿[Element Plus](https://element-plus.org/zh-CN/component/border.html)的一款WPF主题控件。

::: tip
需要应用`BorderDefaultStyle`样式生效
:::

## 圆角

我们提供了以下几种圆角样式，以供选择。

|Radius|Value|
|:-|:-|
|No Radius|0|
|Small Radius|2|
|Large Radius|4|
|Round Radius|20|

![Radius](https://nas.ilyl.life:8092/wpf-theme/border/border-radius.png)

```xml
<Border Width="160"
        nl:BorderElementAttached.Radius="None"
        Style="{StaticResource BorderDefaultStyle}">
    <TextBlock HorizontalAlignment="Center" Text="Radius=None" />
</Border>
<Border Width="160"
        nl:BorderElementAttached.Radius="SmallRadius"
        Style="{StaticResource BorderDefaultStyle}">
    <TextBlock HorizontalAlignment="Center" Text="Radius=Small" />
</Border>
<Border Width="160"
        nl:BorderElementAttached.Radius="LargeRadius"
        Style="{StaticResource BorderDefaultStyle}">
    <TextBlock HorizontalAlignment="Center" Text="Radius=Large" />
</Border>
<Border Width="160"
        nl:BorderElementAttached.Radius="RoundRadius"
        Style="{StaticResource BorderDefaultStyle}">
    <TextBlock HorizontalAlignment="Center" Text="Radius=Round" />
</Border>
```

另外提供`AutoRoundRadius`选择，根据高度自动计算

![AutoRound](https://nas.ilyl.life:8092/wpf-theme/border/border-auto-radius.png)

```xml
<Border Width="160"
        Height="60"
        nl:BorderElementAttached.Radius="AutoRoundRadius"
        Style="{StaticResource BorderDefaultStyle}">
    <TextBlock HorizontalAlignment="Center"
            VerticalAlignment="Center"
            Text="Radius=AutoRound" />
</Border>
```

## 虚拟边框

使用`BorderColor`更改虚拟边框颜色

![Dash](https://nas.ilyl.life:8092/wpf-theme/border/border-dash.png)

```xml
<Border Width="160"
        nl:BorderElementAttached.IsDashed="True"
        Style="{StaticResource BorderDefaultStyle}">
    <TextBlock Text="IsDashed=True" />
</Border>
<Border Width="160"
        HorizontalAlignment="Center"
        nl:BorderElementAttached.BorderColor="Red"
        nl:BorderElementAttached.IsDashed="True"
        Style="{StaticResource BorderDefaultStyle}">
    <TextBlock HorizontalAlignment="Center" Text="BorderColor=Red" />
</Border>
```

## 阴影

提供了以下几种投影样式，以供选择。

|Shadow|Value|
|:-|:-|
|Basic Shadow|Basic|
|Light  Shadow|Light|
|Lighter  Shadow|Lighter|
|Dark  Shadow|Dark|

![Shadow](https://nas.ilyl.life:8092/wpf-theme/border/border-shadow.png)

```xml
<Border Width="160"
        HorizontalAlignment="Center"
        nl:BorderElementAttached.Shadow="Basic"
        Style="{StaticResource BorderDefaultStyle}">
    <TextBlock HorizontalAlignment="Center" Text="Shadow=Basic" />
</Border>
<Border Width="160"
        HorizontalAlignment="Center"
        nl:BorderElementAttached.Shadow="Light"
        Style="{StaticResource BorderDefaultStyle}">
    <TextBlock HorizontalAlignment="Center" Text="Shadow=Light" />
</Border>
<Border Width="160"
        HorizontalAlignment="Center"
        nl:BorderElementAttached.Shadow="Lighter"
        Style="{StaticResource BorderDefaultStyle}">
    <TextBlock HorizontalAlignment="Center" Text="Shadow=Lighter" />
</Border>
<Border Width="160"
        HorizontalAlignment="Center"
        nl:BorderElementAttached.Shadow="Dark"
        Style="{StaticResource BorderDefaultStyle}">
    <TextBlock HorizontalAlignment="Center" Text="Shadow=Dark" />
</Border>
```
