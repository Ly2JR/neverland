---
title: Alert 提示
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

Alert组件不属于浮层元素，不会自动消失或关闭。

Alert组件提供四种类型，由`Classes`样式类指定，分为`Info`、`Success`、`Warning`、`Error`，默认`Info`。

![alert](https://image.ilyl.life:8443/avaloniaui-theme/alert/avalonia-alert.png)

```xml
<nl:Alert Title="Info alert" />
<nl:Alert Title="Success alert" AlertIcon="{StaticResource alert_on_regular}" Classes="Success Closable" />
<nl:Alert Title="Warning alert" Classes="Warning ShowIcon" />
<nl:Alert Title="Error alert" Classes="Error ShowIcon Closable" CloseText="关闭" Closed="Alert_Closed" />
<nl:Alert Title="提示" Classes="Error ShowIcon Closable" Description="Error alert" />
```

## 自定义关闭按钮

你可以自定义关闭按钮为文字或其他符号。

你可以设置`Classes`样式类`Closable`显示关闭，`CloseText`显示文本关闭，当Alert 组件被关闭时会触发`Closed`事件。

```xml
<nl:Alert Title="Error alert" Classes="Error ShowIcon Closable" CloseText="关闭" Closed="Alert_Closed" />
<nl:Alert Title="提示" Classes="Error ShowIcon Closable" Description="Error alert" />
```

```cs
private void Alert_Closed(object sender, RoutedEventArgs e)
{
    MessageBox.Show("Hello World");
}
```

## 使用图标

你可以通过为Alert组件添加图标来提高可读性。

通过追加设置`Classes`样式类`ShowIcon`属性来显示Alert的Icon，提供`AlertIcon`属性，添加自定义图标。

这能更有效地向用户展示你的显示意图。

```xml
<nl:Alert Title="Success alert" AlertIcon="{StaticResource alert_on_regular}" Classes="Success Closable" />
<nl:Alert Title="Warning alert" Classes="Warning ShowIcon" />
```

## 文字描述

为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。

除了必填的`Title`属性外，你可以设置`Description`属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。

```xml
<nl:Alert Title="提示" Classes="Error ShowIcon Closable" Description="Error alert" />
```
