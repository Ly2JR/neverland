---
title: Button 按钮
date: 2024-01-12
star: 2
dir.order: 1
editLink: false
footer: false
isOriginal: true
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

### 没有边框和背景色的按钮

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

### 背景色总是存在

![istextbg](https://nas.ilyl.life:8092/wpf-theme/button/button-istext-background-always-on.gif =800x50)

```xml
 <Button nl:ButtonElementAttached.IsText="True"
         nl:ButtonElementAttached.IsTextBg="True"
         Content="Default" />
 <Button nl:ButtonElementAttached.IsText="True"
         nl:ButtonElementAttached.IsTextBg="True"
         nl:ButtonElementAttached.Type="Primary"
         Content="Primary" />
 <Button nl:ButtonElementAttached.IsText="True"
         nl:ButtonElementAttached.IsTextBg="True"
         nl:ButtonElementAttached.Type="Success"
         Content="Success" />
 <Button nl:ButtonElementAttached.IsText="True"
         nl:ButtonElementAttached.IsTextBg="True"
         nl:ButtonElementAttached.Type="Info"
         Content="Info" />
 <Button nl:ButtonElementAttached.IsText="True"
         nl:ButtonElementAttached.IsTextBg="True"
         nl:ButtonElementAttached.Type="Warning"
         Content="Warning" />
 <Button nl:ButtonElementAttached.IsText="True"
         nl:ButtonElementAttached.IsTextBg="True"
         nl:ButtonElementAttached.Type="Danger"
         Content="Danger" />
```

### 禁用文本按钮

![IsEnabled](https://nas.ilyl.life:8092/wpf-theme/button/button-istext-disabled.gif =800x50)

```xml
 <Button nl:ButtonElementAttached.IsText="True"
         Content="Default"
         IsEnabled="False" />
 <Button nl:ButtonElementAttached.IsText="True"
         nl:ButtonElementAttached.Type="Primary"
         Content="Primary"
         IsEnabled="False" />
 <Button nl:ButtonElementAttached.IsText="True"
         nl:ButtonElementAttached.Type="Success"
         Content="Success"
         IsEnabled="False" />
 <Button nl:ButtonElementAttached.IsText="True"
         nl:ButtonElementAttached.Type="Info"
         Content="Info"
         IsEnabled="False" />
 <Button nl:ButtonElementAttached.IsText="True"
         nl:ButtonElementAttached.Type="Warning"
         Content="Warning"
         IsEnabled="False" />
 <Button nl:ButtonElementAttached.IsText="True"
         nl:ButtonElementAttached.Type="Danger"
         Content="Danger"
         IsEnabled="False" />
```

## 图标按钮

### 图标

![icon](https://nas.ilyl.life:8092/wpf-theme/button/button-icon.gif =800x50)

```xml
<Button nl:ButtonElementAttached.Icon="{StaticResource query_icon}" />
<Button nl:ButtonElementAttached.Icon="{StaticResource edit_icon}"
        nl:ButtonElementAttached.IconColor="Red"
        nl:ButtonElementAttached.Type="Primary" />
<Button nl:ButtonElementAttached.Icon="{StaticResource right_icon}" nl:ButtonElementAttached.Type="Success" />
<Button nl:ButtonElementAttached.Icon="{StaticResource message_icon}" nl:ButtonElementAttached.Type="Info" />
<Button nl:ButtonElementAttached.Icon="{StaticResource star_icon}" nl:ButtonElementAttached.Type="Warning" />
<Button nl:ButtonElementAttached.Icon="{StaticResource delete_icon}" nl:ButtonElementAttached.Type="Danger" />
```

### 图标和文字

![icon-text](https://nas.ilyl.life:8092/wpf-theme/button/button-icon-text.gif =800x50)

```xml
 <Button nl:ButtonElementAttached.Icon="{StaticResource query_icon}" Content="Default" />
 <Button nl:ButtonElementAttached.Icon="{StaticResource edit_icon}"
         nl:ButtonElementAttached.IconColor="Red"
         nl:ButtonElementAttached.Type="Primary"
         Content="Primary" />
 <Button nl:ButtonElementAttached.Icon="{StaticResource right_icon}"
         nl:ButtonElementAttached.Type="Success"
         Content="Success" />
 <Button nl:ButtonElementAttached.Icon="{StaticResource message_icon}"
         nl:ButtonElementAttached.Type="Info"
         Content="Info" />
 <Button nl:ButtonElementAttached.Icon="{StaticResource star_icon}"
         nl:ButtonElementAttached.Type="Warning"
         Content="Warning" />
 <Button nl:ButtonElementAttached.Icon="{StaticResource delete_icon}"
         nl:ButtonElementAttached.Type="Danger"
         Content="Danger" />
```

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 size 属性额外配置尺寸，可使用 large和small两种值

![size](https://nas.ilyl.life:8092/wpf-theme/button/button-size.gif =400x50)

![size](https://nas.ilyl.life:8092/wpf-theme/button/button-size2.gif =800x50)

```xml
 <Button nl:ButtonElementAttached.Icon="{StaticResource query_icon}"
         nl:ButtonElementAttached.IsCircle="True"
         nl:ButtonElementAttached.Size="Large" />
 <Button nl:ButtonElementAttached.Icon="{StaticResource query_icon}"
         nl:ButtonElementAttached.IsCircle="True"
         nl:ButtonElementAttached.Size="Default" />
 <Button nl:ButtonElementAttached.Icon="{StaticResource query_icon}"
         nl:ButtonElementAttached.IsCircle="True"
         nl:ButtonElementAttached.Size="Small" />
 <Button nl:ButtonElementAttached.Icon="{StaticResource query_icon}"
         nl:ButtonElementAttached.Size="Large"
         Content="Default" />
 <Button nl:ButtonElementAttached.Icon="{StaticResource edit_icon}"
         nl:ButtonElementAttached.IconColor="Red"
         nl:ButtonElementAttached.Size="Default"
         nl:ButtonElementAttached.Type="Primary"
         Content="Primary" />
 <Button nl:ButtonElementAttached.Icon="{StaticResource right_icon}"
         nl:ButtonElementAttached.Size="Small"
         nl:ButtonElementAttached.Type="Success"
         Content="Success" />
 <Button nl:ButtonElementAttached.Size="Large"
         nl:ButtonElementAttached.Type="Info"
         Content="Info" />
 <Button nl:ButtonElementAttached.Size="Default"
         nl:ButtonElementAttached.Type="Warning"
         Content="Warning" />
 <Button nl:ButtonElementAttached.Size="Small"
         nl:ButtonElementAttached.Type="Danger"
         Content="Danger" />
```

## 虚线边框

![isdash](https://nas.ilyl.life:8092/wpf-theme/button/button-isdash.gif =800x50)

```xml
<Button nl:ButtonElementAttached.IsDash="True" Content="Default" />
<Button nl:ButtonElementAttached.IsDash="True"
        nl:ButtonElementAttached.Type="Primary"
        Content="Primary" />
<Button nl:ButtonElementAttached.IsDash="True"
        nl:ButtonElementAttached.Type="Success"
        Content="Success" />
<Button nl:ButtonElementAttached.IsDash="True"
        nl:ButtonElementAttached.Type="Info"
        Content="Info" />
<Button nl:ButtonElementAttached.IsDash="True"
        nl:ButtonElementAttached.Type="Warning"
        Content="Warning" />
<Button nl:ButtonElementAttached.IsDash="True"
        nl:ButtonElementAttached.Type="Danger"
        Content="Danger" />
```
