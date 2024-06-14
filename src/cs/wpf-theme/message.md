---
title: Message 消息提示
date: 2024-05-04
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

从顶部出现，3 秒后自动消失。

![message](https://nas.ilyl.life:8092/wpf-theme/message/message.gif)

```xml
<Button
    Command="{Binding ShowMessageCommand}"
    Content="Show Message" />
```

```cs
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;

[RelayCommand]
private void ShowMessage()
{
    NlMessage.Show(new NlMessageInfo() { 
        Message= "This is a message."
    });
}
```

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，默认为info。 此时正文内容以 message 的值传入。 同时，我们也为 Message 的各种 type 注册了方法。

![type](https://nas.ilyl.life:8092/wpf-theme/message/message-type.gif)

```xml
<Button Command="{Binding ShowMessageCommand}" 
    Content="Show Message" />
<Button
    nl:ButtonAssist.Type="Success"
    Command="{Binding SuccessMessageCommand}"
    Content="Success" />
<Button
    nl:ButtonAssist.Type="Warning"
    Command="{Binding WarningMessageCommand}"
    Content="Warning" />
<Button
    nl:ButtonAssist.Type="Danger"
    Command="{Binding ErrorMessageCommand}"
    Content="Error" />
```

```cs
[RelayCommand]
private void ShowMessage()
{
    NlMessage.Show(new NlMessageInfo() { 
        Message= "This is a message."
    });
}

[RelayCommand]
private void SuccessMessage()
{
    NlMessage.Show(new NlMessageInfo()
    {
        Message= "Congrats, this is a success message.",
        Type= MessageEnum.Success,
    });
}

[RelayCommand]
private void WarningMessage()
{
    NlMessage.Show(new NlMessageInfo()
    { 
        Message= "Warning, this is a warning message.",
        Type= MessageEnum.Warning
    });
}

[RelayCommand]
private void ErrorMessage()
{
    NlMessage.Show(new NlMessageInfo()
    {
        Message= "Oops, this is a error message.",
        Type = MessageEnum.Error
    });
}
```

## 是否纯色

设置`IsPlain`为Plain背景

![isplain](https://nas.ilyl.life:8092/wpf-theme/message/message-isplain.gif)

```xml
<Button Command="{Binding ShowMessageCommand}" 
    Content="Show Message" />
<Button
    nl:ButtonAssist.Type="Success"
    Command="{Binding SuccessMessageCommand}"
    Content="Success" />
<Button
    nl:ButtonAssist.Type="Warning"
    Command="{Binding WarningMessageCommand}"
    Content="Warning" />
<Button
    nl:ButtonAssist.Type="Danger"
    Command="{Binding ErrorMessageCommand}"
    Content="Error" />
```

```cs
[RelayCommand]
private void ShowMessage()
{
    NlMessage.Show(new NlMessageInfo() { 
        Message= "This is a message.",
        IsPlain= true,
    });
}

[RelayCommand]
private void SuccessMessage()
{
    NlMessage.Show(new NlMessageInfo()
    {
        Message= "Congrats, this is a success message.",
        Type= MessageEnum.Success,
        IsPlain = true,
    });
}

[RelayCommand]
private void WarningMessage()
{
    NlMessage.Show(new NlMessageInfo()
    { 
        Message= "Warning, this is a warning message.",
        Type= MessageEnum.Warning,
        IsPlain = true,
    });
}

[RelayCommand]
private void ErrorMessage()
{
    NlMessage.Show(new NlMessageInfo()
    {
        Message= "Oops, this is a error message.",
        Type = MessageEnum.Error,
        IsPlain = true,
    });
}
```

## 可关闭的消息提示

可以添加关闭按钮。

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `ShowClose` 设置为 true 此外，和 Notification 一样，Message 拥有可控的 `Duration`， 默认的关闭时间为 `3000` 毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。

![showclose](https://nas.ilyl.life:8092/wpf-theme/message/message-showclose.gif)

```xml
<Button Command="{Binding ShowMessageCommand}" 
    Content="Show Message" />
<Button
    nl:ButtonAssist.Type="Success"
    Command="{Binding SuccessMessageCommand}"
    Content="Success" />
<Button
    nl:ButtonAssist.Type="Warning"
    Command="{Binding WarningMessageCommand}"
    Content="Warning" />
<Button
    nl:ButtonAssist.Type="Danger"
    Command="{Binding ErrorMessageCommand}"
    Content="Error" />
```

```cs
[RelayCommand]
private void ShowMessage()
{
    NlMessage.Show(new NlMessageInfo() { 
        Message= "This is a message.",
        ShowClose= true,
    });
}

[RelayCommand]
private void SuccessMessage()
{
    NlMessage.Show(new NlMessageInfo()
    {
       Message= "Congrats, this is a success message.",
       Type= MessageEnum.Success,
       ShowClose = true,
    });
}

[RelayCommand]
private void WarningMessage()
{
    NlMessage.Show(new NlMessageInfo()
    { 
       Message= "Warning, this is a warning message.",
       Type= MessageEnum.Warning,
       ShowClose = true,
    });
}

[RelayCommand]
private void ErrorMessage()
{
    NlMessage.Show(new NlMessageInfo()
    {
        Message= "Oops, this is a error message.",
        Type = MessageEnum.Error,
        ShowClose = true,
    });
}
```

## 分组消息合并

合并相同内容的消息。

设置`IsGroup`为 true，内容相同的 message 将被合并。

![isgroup](https://nas.ilyl.life:8092/wpf-theme/message/message-isgroup.gif)

```xml
<Button Command="{Binding ShowMessageCommand}" 
    Content="Show Message" />
<Button
    nl:ButtonAssist.Type="Success"
    Command="{Binding SuccessMessageCommand}"
    Content="Success" />
<Button
    nl:ButtonAssist.Type="Warning"
    Command="{Binding WarningMessageCommand}"
    Content="Warning" />
<Button
    nl:ButtonAssist.Type="Danger"
    Command="{Binding ErrorMessageCommand}"
    Content="Error" />
```

```cs
[RelayCommand]
private void ShowMessage()
{
    NlMessage.Show(new NlMessageInfo() { 
        Message= "This is a message.",
        IsGroup= true,
    });
}

[RelayCommand]
private void SuccessMessage()
{
    NlMessage.Show(new NlMessageInfo()
    {
       Message= "Congrats, this is a success message.",
       Type= MessageEnum.Success,
       IsGroup = true,
    });
}

[RelayCommand]
private void WarningMessage()
{
    NlMessage.Show(new NlMessageInfo()
    { 
       Message= "Warning, this is a warning message.",
       Type= MessageEnum.Warning,
       IsGroup = true,
    });
}

[RelayCommand]
private void ErrorMessage()
{
    NlMessage.Show(new NlMessageInfo()
    {
        Message= "Oops, this is a error message.",
        Type = MessageEnum.Error,
        IsGroup = true,
    });
}
```