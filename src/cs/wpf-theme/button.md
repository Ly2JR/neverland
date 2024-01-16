---
title: Button 按钮
date: 2024-01-12
dir.order: 1
editLink: false
footer: false
isOriginal: true
dir:
    order: 10
order: 10
category:
  - C#
tag:
  - WPF
  - 主题控件
---


仿[Element Plus](https://element-plus.org/zh-CN/component/button.html)的一款WPF主题控件。

::: tip
Button 按钮全局生效
:::

常用的操作按钮

## 基础用法

使用`type`、`isplain`、`isround` 和 `iscircle` 来定义按钮的样式。

### Type属性

![type属性](https://nas.ilyl.life:8092/wpf-theme/button/button-type.gif =800x50)

```xml
<Button Content="Default" />
<Button nl:ButtonElementAttached.Type="Primary" Content="Primary" />
<Button nl:ButtonElementAttached.Type="Success" Content="Success" />
<Button nl:ButtonElementAttached.Type="Info" Content="Info" />
<Button nl:ButtonElementAttached.Type="Warning" Content="Warning" />
<Button nl:ButtonElementAttached.Type="Danger" Content="Danger" />
```

### IsPlain属性

![isplain属性](https://nas.ilyl.life:8092/wpf-theme/button/button-isplain.gif =800x50)

```xml
<Button nl:ButtonElementAttached.IsPlain="True" Content="Default" />
<Button nl:ButtonElementAttached.IsPlain="True"
        nl:ButtonElementAttached.Type="Primary"
        Content="Primary" />
<Button nl:ButtonElementAttached.IsPlain="True"
        nl:ButtonElementAttached.Type="Success"
        Content="Success" />
<Button nl:ButtonElementAttached.IsPlain="True"
        nl:ButtonElementAttached.Type="Info"
        Content="Info" />
<Button nl:ButtonElementAttached.IsPlain="True"
        nl:ButtonElementAttached.Type="Warning"
        Content="Warning" />
<Button nl:ButtonElementAttached.IsPlain="True"
        nl:ButtonElementAttached.Type="Danger"
        Content="Danger" />
```

### IsRound属性

![isround属性](https://nas.ilyl.life:8092/wpf-theme/button/button-isround.gif =800x50)

```xml
<Button nl:ButtonElementAttached.IsRound="True" Content="Default" />
<Button nl:ButtonElementAttached.IsRound="True"
        nl:ButtonElementAttached.Type="Primary"
        Content="Primary" />
<Button nl:ButtonElementAttached.IsRound="True"
        nl:ButtonElementAttached.Type="Success"
        Content="Success" />
<Button nl:ButtonElementAttached.IsRound="True"
        nl:ButtonElementAttached.Type="Info"
        Content="Info" />
<Button nl:ButtonElementAttached.IsRound="True"
        nl:ButtonElementAttached.Type="Warning"
        Content="Warning" />
<Button nl:ButtonElementAttached.IsRound="True"
        nl:ButtonElementAttached.Type="Danger"
        Content="Danger" />
```

### IsCircle属性

![iscircle属性](https://nas.ilyl.life:8092/wpf-theme/button/button-iscircle.gif =800x50)

```xml
<Button nl:ButtonElementAttached.IsRound="True" Content="Default" />
<Button nl:ButtonElementAttached.IsRound="True"
        nl:ButtonElementAttached.Type="Primary"
        Content="Primary" />
<Button nl:ButtonElementAttached.IsRound="True"
        nl:ButtonElementAttached.Type="Success"
        Content="Success" />
<Button nl:ButtonElementAttached.IsRound="True"
        nl:ButtonElementAttached.Type="Info"
        Content="Info" />
<Button nl:ButtonElementAttached.IsRound="True"
        nl:ButtonElementAttached.Type="Warning"
        Content="Warning" />
<Button nl:ButtonElementAttached.IsRound="True"
        nl:ButtonElementAttached.Type="Danger"
        Content="Danger" />
```

## 禁用状态

::: info
`IsEnabled`禁用时，鼠标的光标效果未实现，待解决
:::

你可以使用原生的`IsEnabled`属性来定义按钮是否被禁用。

使用`IsEnabled`属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

![isenabled属性](https://nas.ilyl.life:8092/wpf-theme/button/button-isenabled.gif =800x50)

```xml
 <Button Content="Default" IsEnabled="False" />
 <Button nl:ButtonElementAttached.Type="Primary"
         Content="Primary"
         IsEnabled="False" />
 <Button nl:ButtonElementAttached.Type="Success"
         Content="Success"
         IsEnabled="False" />
 <Button nl:ButtonElementAttached.Type="Info"
         Content="Info"
         IsEnabled="False" />
 <Button nl:ButtonElementAttached.Type="Warning"
         Content="Warning"
         IsEnabled="False" />
 <Button nl:ButtonElementAttached.Type="Danger"
         Content="Danger"
         IsEnabled="False" />
```

## 文字按钮

没有边框和背景色的按钮。

![istext](https://nas.ilyl.life:8092/wpf-theme/button/button-istext.gif =800x50)

```xml
<Button nl:ButtonElementAttached.IsText="True" Content="Default" />
<Button nl:ButtonElementAttached.IsText="True"
        nl:ButtonElementAttached.Type="Primary"
        Content="Primary" />
<Button nl:ButtonElementAttached.IsText="True"
        nl:ButtonElementAttached.Type="Success"
        Content="Success" />
<Button nl:ButtonElementAttached.IsText="True"
        nl:ButtonElementAttached.Type="Info"
        Content="Info" />
<Button nl:ButtonElementAttached.IsText="True"
        nl:ButtonElementAttached.Type="Warning"
        Content="Warning" />
<Button nl:ButtonElementAttached.IsText="True"
        nl:ButtonElementAttached.Type="Danger"
        Content="Danger" />
```
