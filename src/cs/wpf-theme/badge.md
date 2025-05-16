---
title: Badge 徽章
date: 2024-04-25
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

可以用来展示新消息的数量。

数量值接受String。通过`Type`属性控制颜色，默认`Danger`

![badge](https://image.ilyl.life:8443/wpf-theme/badge/badge.png)

```xml
<Button nl:Badge.IsShow="True" nl:Badge.Value="1">
    Danger
</Button>
<Button
    nl:Badge.IsShow="True"
    nl:Badge.Type="Primary"
    nl:Badge.Value="2">
    Primary
</Button>
<Button
    nl:Badge.IsShow="True"
    nl:Badge.Type="Success"
    nl:Badge.Value="3">
    Success
</Button>
<Button
    nl:Badge.IsShow="True"
    nl:Badge.Type="Warning"
    nl:Badge.Value="4">
    Warning
</Button>
```

## 最大值

你还可以自定义最大值

由`Max`属性定义，接受`int`值，默认`99`

![max](https://image.ilyl.life:8443/wpf-theme/badge/badge-max.png)

```xml
<Button
    nl:Badge.IsShow="True"
    nl:Badge.Type="Info"
    nl:Badge.Value="100">
    Info
</Button>
```

## 自定义显示内容

你也可以展示除数字以外你想要展示的任何值。

![news](https://image.ilyl.life:8443/wpf-theme/badge/badge-new.png)

```xml
<nl:Tag nl:Badge.IsShow="True" nl:Badge.Value="new">
    News
</nl:Tag>
```

## 小红点

通过一个小红点标记来告知用户有新内容。

使用`IsDot`属性。 是个布尔值。

![isdot](https://image.ilyl.life:8443/wpf-theme/badge/badge-isdot.png)

```xml
<nl:Tag nl:Badge.IsDot="True" nl:Badge.IsShow="True" Type="Danger">
    Danger
</nl:Tag>
<nl:Tag nl:Badge.IsDot="True" nl:Badge.IsShow="True" nl:Badge.Type="Primary" Type="Primary">
    Primary
</nl:Tag>
<nl:Tag nl:Badge.IsDot="True" nl:Badge.IsShow="True" nl:Badge.Type="Success" Type="Success">
    Success
</nl:Tag>
<nl:Tag nl:Badge.IsDot="True" nl:Badge.IsShow="True" nl:Badge.Type="Warning" Type="Warning">
    Warning
</nl:Tag>
```

## 偏移量

设置徽章点的偏移，格式是[左，顶部]， 代表状态点从左侧和默认位置顶部的偏移。

![offset](https://image.ilyl.life:8443/wpf-theme/badge/badge-offset.png)

```xml
<Button nl:Badge.IsDot="True" nl:Badge.IsShow="True" nl:Badge.Offset="10,5">
    Offset
</Button>
```

## 为零是否显示

设置`ShowZero`属性，控制当值未零时是否显示徽章

![showzero](https://image.ilyl.life:8443/wpf-theme/badge/badge-showzero.gif)

```xml
<CheckBox
    x:Name="Checkbox"
    HorizontalAlignment="Center"
    VerticalAlignment="Center"
    nl:Badge.IsShow="True"
    nl:Badge.ShowZero="{Binding ElementName=Checkbox, Path=IsChecked}"
    nl:Badge.Value="0">
    ShowZero
</CheckBox>
```