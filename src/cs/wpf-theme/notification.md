---
title: Notification 通知
date: 2024-05-06
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

 在最简单的情况下，你可以通过设置`Title` 和`Message` 属性来设置通知的标题和正文内容。 默认情况下，通知在4500毫秒后自动关闭，但你可以通过设置 `Duration` 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 `Duration` 接收一个 Int，单位为毫秒。

![notification](https://image.ilyl.life:8443/wpf-theme/notification/notification.gif)

```xml
<Button Command="{Binding Open1Command}" Content="closes automatically" />
<Button Command="{Binding Open2Command}" Content="Won't close automatically" />
```

```cs
 [RelayCommand]
 private void Open1()
 {
     NlNotification.Show(new NlNotificationInfo()
     {
         Title="Title",
         Message= "This is a reminder",
     });
 }

 [RelayCommand]
 private void Open2()
 {
     NlNotification.Show(new NlNotificationInfo()
     {
         Title = "Prompt",
         Message = "This is a message that does not automatically close",
         Duration=0,
     });
 }
```

## 不同类型的通知

我们提供了四种不同类型的提醒框：success、warning、info 和error。

![type](https://image.ilyl.life:8443/wpf-theme/notification/notification-type.gif)

```xml
<Button Command="{Binding SuccessCommand}" Content="Success" />
<Button Command="{Binding WarningCommand}" Content="Warning" />
<Button Command="{Binding InfoCommand}" Content="Info" />
<Button Command="{Binding ErrorCommand}" Content="Error" />
```

```cs
[RelayCommand]
private void Success()
{
    NlNotification.Show(new NlNotificationInfo()
    {
        Title = "Success",
        Message = "This is success message",
        Type = NotificationEnum.Success,
    });
}

[RelayCommand]
private void Warning()
{
    NlNotification.Show(new NlNotificationInfo()
    {
        Title = "Warning",
        Message = "This is Warning message",
        Type = NotificationEnum.Warning,
    });
}

[RelayCommand]
private void Info()
{
    NlNotification.Show(new NlNotificationInfo()
    {
        Title = "Info",
        Message = "This is Info message",
        Type = NotificationEnum.Info,
    });
}

[RelayCommand]
private void Error()
{
    NlNotification.Show(new NlNotificationInfo()
    {
        Title = "Error",
        Message = "This is Error message",
        Type = NotificationEnum.Error,
    });
}
```

## 自定义消息弹出的位置

可以让`Notification` 从屏幕四角中的任意一角弹出

使用`Position` 属性设置 Notification 的弹出位置， 支持四个选项：top-right、top-left、bottom-right 和 bottom-left， 默认为 top-right。

![position](https://image.ilyl.life:8443/wpf-theme/notification/notification-position.gif)

```xml
<Button Command="{Binding TopRightCommand}" Content="TopRight" />
<Button Command="{Binding BottomRightCommand}" Content="BottomRight" />
<Button Command="{Binding BottomLeftCommand}" Content="BottomLeft" />
<Button Command="{Binding TopLeftCommand}" Content="TopLeft" />
```

```cs
[RelayCommand]
private void TopRight()
{
    NlNotification.Show(new NlNotificationInfo()
    {
        Title = "Custom Position",
        Message = "I'm at the top right corner",
        Position= NotificationPositionEnum.TopRight,
    });
}

[RelayCommand]
private void BottomRight()
{
    NlNotification.Show(new NlNotificationInfo()
    {
        Title = "Custom Position",
        Message = "I'm at the bottom right corner",
        Position = NotificationPositionEnum.BottomRight,
    });
}

[RelayCommand]
private void BottomLeft()
{
    NlNotification.Show(new NlNotificationInfo()
    {
        Title = "Custom Position",
        Message = "I'm at the bottom left corner",
        Position = NotificationPositionEnum.BottomLeft,
    });
}

[RelayCommand]
private void TopLeft()
{
    NlNotification.Show(new NlNotificationInfo()
    {
        Title = "Custom Position",
        Message = "I'm at the top left corner",
        Position = NotificationPositionEnum.TopLeft,
    });
}
```

## 有位置偏移的通知栏

能够设置偏移量来使 Notification 偏移默认位置。

Notification 提供设置偏移量的功能，通过设置 `Offset` 字段，可以使弹出的消息距屏幕边缘偏移一段距离。 注意在同一时刻，每一个的 Notification 实例应当具有一个相同的偏移量。

![offset](https://image.ilyl.life:8443/wpf-theme/notification/notification-offset.gif)

```xml
<Button Command="{Binding OffsetCommand}" Content="Notification with offset" />
```

```cs
[RelayCommand]
private void Offset()
{
    NlNotification.Success(new NlNotificationInfo()
    {
        Title = "Success",
        Message = "This is a success message",
        Offset=100,
    });
}
```

## 隐藏关闭按钮

通知的关闭按钮可以被设置为隐藏。

将`ShowClose` 属性设置为 false 即可隐藏关闭按钮

![showclose](https://image.ilyl.life:8443/wpf-theme/notification/notification-showclose.gif)

```xml
<Button Command="{Binding HiddenCloseButtonCommand}" Content="Hide close button" />
```

```cs
[RelayCommand]
private void HiddenCloseButton()
{
    NlNotification.Success(new NlNotificationInfo()
    {
        Title = "Info",
        Message = "This is a message without close button",
        ShowClose=false,
    });
}
```
