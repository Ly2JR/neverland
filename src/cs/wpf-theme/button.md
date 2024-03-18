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
  - WPF主题控件
---


仿[Element Plus](https://element-plus.org/zh-CN/component/button.html)的一款WPF主题控件。

::: tip
Button 按钮全局生效
:::

常用的操作按钮

## 基础用法

使用`type`、`isplain`、`isround` 和 `iscircle` 来定义按钮的样式。

### Type属性

![type属性](https://nas.ilyl.life:8092/wpf-theme/button/button-type.gif)

```xml
<Button Content="Default" />
<Button nl:ButtonAssist.Type="Primary" Content="Primary" />
<Button nl:ButtonAssist.Type="Success" Content="Success" />
<Button nl:ButtonAssist.Type="Info" Content="Info" />
<Button nl:ButtonAssist.Type="Warning" Content="Warning" />
<Button nl:ButtonAssist.Type="Danger" Content="Danger" />
```

### IsPlain属性

![isplain属性](https://nas.ilyl.life:8092/wpf-theme/button/button-isplain.gif)

```xml
<Button nl:ButtonAssist.IsPlain="True" Content="Default" />
<Button nl:ButtonAssist.IsPlain="True"
        nl:ButtonAssist.Type="Primary"
        Content="Primary" />
<Button nl:ButtonAssist.IsPlain="True"
        nl:ButtonAssist.Type="Success"
        Content="Success" />
<Button nl:ButtonAssist.IsPlain="True"
        nl:ButtonAssist.Type="Info"
        Content="Info" />
<Button nl:ButtonAssist.IsPlain="True"
        nl:ButtonAssist.Type="Warning"
        Content="Warning" />
<Button nl:ButtonAssist.IsPlain="True"
        nl:ButtonAssist.Type="Danger"
        Content="Danger" />
```

### IsRound属性

![isround属性](https://nas.ilyl.life:8092/wpf-theme/button/button-isround.gif)

```xml
<Button nl:ButtonAssist.IsRound="True" Content="Default" />
<Button nl:ButtonAssist.IsRound="True"
        nl:ButtonAssist.Type="Primary"
        Content="Primary" />
<Button nl:ButtonAssist.IsRound="True"
        nl:ButtonAssist.Type="Success"
        Content="Success" />
<Button nl:ButtonAssist.IsRound="True"
        nl:ButtonAssist.Type="Info"
        Content="Info" />
<Button nl:ButtonAssist.IsRound="True"
        nl:ButtonAssist.Type="Warning"
        Content="Warning" />
<Button nl:ButtonAssist.IsRound="True"
        nl:ButtonAssist.Type="Danger"
        Content="Danger" />
```

### IsCircle属性

![iscircle属性](https://nas.ilyl.life:8092/wpf-theme/button/button-iscircle.gif)

```xml
<Button nl:ButtonAssist.IsRound="True" Content="Default" />
<Button nl:ButtonAssist.IsRound="True"
        nl:ButtonAssist.Type="Primary"
        Content="Primary" />
<Button nl:ButtonAssist.IsRound="True"
        nl:ButtonAssist.Type="Success"
        Content="Success" />
<Button nl:ButtonAssist.IsRound="True"
        nl:ButtonAssist.Type="Info"
        Content="Info" />
<Button nl:ButtonAssist.IsRound="True"
        nl:ButtonAssist.Type="Warning"
        Content="Warning" />
<Button nl:ButtonAssist.IsRound="True"
        nl:ButtonAssist.Type="Danger"
        Content="Danger" />
```

## 禁用状态

你可以使用原生的`IsEnabled`属性来定义按钮是否被禁用。

使用`IsEnabled`属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

![isenabled属性](https://nas.ilyl.life:8092/wpf-theme/button/button-isenabled.gif)

```xml
 <Button Content="Default" IsEnabled="False" />
 <Button nl:ButtonAssist.Type="Primary"
         Content="Primary"
         IsEnabled="False" />
 <Button nl:ButtonAssist.Type="Success"
         Content="Success"
         IsEnabled="False" />
 <Button nl:ButtonAssist.Type="Info"
         Content="Info"
         IsEnabled="False" />
 <Button nl:ButtonAssist.Type="Warning"
         Content="Warning"
         IsEnabled="False" />
 <Button nl:ButtonAssist.Type="Danger"
         Content="Danger"
         IsEnabled="False" />
```

## 文字按钮

### 没有边框和背景色的按钮

![istext](https://nas.ilyl.life:8092/wpf-theme/button/button-istext.gif)

```xml
<Button nl:ButtonAssist.IsText="True" Content="Default" />
<Button nl:ButtonAssist.IsText="True"
        nl:ButtonAssist.Type="Primary"
        Content="Primary" />
<Button nl:ButtonAssist.IsText="True"
        nl:ButtonAssist.Type="Success"
        Content="Success" />
<Button nl:ButtonAssist.IsText="True"
        nl:ButtonAssist.Type="Info"
        Content="Info" />
<Button nl:ButtonAssist.IsText="True"
        nl:ButtonAssist.Type="Warning"
        Content="Warning" />
<Button nl:ButtonAssist.IsText="True"
        nl:ButtonAssist.Type="Danger"
        Content="Danger" />
```

### 背景色总是存在

![istextbg](https://nas.ilyl.life:8092/wpf-theme/button/button-istext-background-always-on.gif)

```xml
 <Button nl:ButtonAssist.IsText="True"
         nl:ButtonAssist.IsTextBg="True"
         Content="Default" />
 <Button nl:ButtonAssist.IsText="True"
         nl:ButtonAssist.IsTextBg="True"
         nl:ButtonAssist.Type="Primary"
         Content="Primary" />
 <Button nl:ButtonAssist.IsText="True"
         nl:ButtonAssist.IsTextBg="True"
         nl:ButtonAssist.Type="Success"
         Content="Success" />
 <Button nl:ButtonAssist.IsText="True"
         nl:ButtonAssist.IsTextBg="True"
         nl:ButtonAssist.Type="Info"
         Content="Info" />
 <Button nl:ButtonAssist.IsText="True"
         nl:ButtonAssist.IsTextBg="True"
         nl:ButtonAssist.Type="Warning"
         Content="Warning" />
 <Button nl:ButtonAssist.IsText="True"
         nl:ButtonAssist.IsTextBg="True"
         nl:ButtonAssist.Type="Danger"
         Content="Danger" />
```

### 禁用文本按钮

![IsEnabled](https://nas.ilyl.life:8092/wpf-theme/button/button-istext-disabled.gif)

```xml
 <Button nl:ButtonAssist.IsText="True"
         Content="Default"
         IsEnabled="False" />
 <Button nl:ButtonAssist.IsText="True"
         nl:ButtonAssist.Type="Primary"
         Content="Primary"
         IsEnabled="False" />
 <Button nl:ButtonAssist.IsText="True"
         nl:ButtonAssist.Type="Success"
         Content="Success"
         IsEnabled="False" />
 <Button nl:ButtonAssist.IsText="True"
         nl:ButtonAssist.Type="Info"
         Content="Info"
         IsEnabled="False" />
 <Button nl:ButtonAssist.IsText="True"
         nl:ButtonAssist.Type="Warning"
         Content="Warning"
         IsEnabled="False" />
 <Button nl:ButtonAssist.IsText="True"
         nl:ButtonAssist.Type="Danger"
         Content="Danger"
         IsEnabled="False" />
```

## 图标按钮

### 图标

![icon](https://nas.ilyl.life:8092/wpf-theme/button/button-icon.gif)

```xml
<Button nl:ButtonAssist.Icon="{StaticResource query_icon}" />
<Button nl:ButtonAssist.Icon="{StaticResource edit_icon}"
        nl:ButtonAssist.IconColor="Red"
        nl:ButtonAssist.Type="Primary" />
<Button nl:ButtonAssist.Icon="{StaticResource right_icon}" nl:ButtonAssist.Type="Success" />
<Button nl:ButtonAssist.Icon="{StaticResource message_icon}" nl:ButtonAssist.Type="Info" />
<Button nl:ButtonAssist.Icon="{StaticResource star_icon}" nl:ButtonAssist.Type="Warning" />
<Button nl:ButtonAssist.Icon="{StaticResource delete_icon}" nl:ButtonAssist.Type="Danger" />
```

### 图标和文字

![icon-text](https://nas.ilyl.life:8092/wpf-theme/button/button-icon-text.gif)

```xml
 <Button nl:ButtonAssist.Icon="{StaticResource query_icon}" Content="Default" />
 <Button nl:ButtonAssist.Icon="{StaticResource edit_icon}"
         nl:ButtonAssist.IconColor="Red"
         nl:ButtonAssist.Type="Primary"
         Content="Primary" />
 <Button nl:ButtonAssist.Icon="{StaticResource right_icon}"
         nl:ButtonAssist.Type="Success"
         Content="Success" />
 <Button nl:ButtonAssist.Icon="{StaticResource message_icon}"
         nl:ButtonAssist.Type="Info"
         Content="Info" />
 <Button nl:ButtonAssist.Icon="{StaticResource star_icon}"
         nl:ButtonAssist.Type="Warning"
         Content="Warning" />
 <Button nl:ButtonAssist.Icon="{StaticResource delete_icon}"
         nl:ButtonAssist.Type="Danger"
         Content="Danger" />
```

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 size 属性额外配置尺寸，可使用 large和small两种值

![size](https://nas.ilyl.life:8092/wpf-theme/button/button-size.gif)

![size](https://nas.ilyl.life:8092/wpf-theme/button/button-size2.gif)

```xml
 <Button nl:ButtonAssist.Icon="{StaticResource query_icon}"
         nl:ButtonAssist.IsCircle="True"
         nl:ButtonAssist.Size="Large" />
 <Button nl:ButtonAssist.Icon="{StaticResource query_icon}"
         nl:ButtonAssist.IsCircle="True"
         nl:ButtonAssist.Size="Default" />
 <Button nl:ButtonAssist.Icon="{StaticResource query_icon}"
         nl:ButtonAssist.IsCircle="True"
         nl:ButtonAssist.Size="Small" />
 <Button nl:ButtonAssist.Icon="{StaticResource query_icon}"
         nl:ButtonAssist.Size="Large"
         Content="Default" />
 <Button nl:ButtonAssist.Icon="{StaticResource edit_icon}"
         nl:ButtonAssist.IconColor="Red"
         nl:ButtonAssist.Size="Default"
         nl:ButtonAssist.Type="Primary"
         Content="Primary" />
 <Button nl:ButtonAssist.Icon="{StaticResource right_icon}"
         nl:ButtonAssist.Size="Small"
         nl:ButtonAssist.Type="Success"
         Content="Success" />
 <Button nl:ButtonAssist.Size="Large"
         nl:ButtonAssist.Type="Info"
         Content="Info" />
 <Button nl:ButtonAssist.Size="Default"
         nl:ButtonAssist.Type="Warning"
         Content="Warning" />
 <Button nl:ButtonAssist.Size="Small"
         nl:ButtonAssist.Type="Danger"
         Content="Danger" />
```

## 虚线边框

![isdash](https://nas.ilyl.life:8092/wpf-theme/button/button-isdash.gif)

```xml
<Button nl:ButtonAssist.IsDash="True" Content="Default" />
<Button nl:ButtonAssist.IsDash="True"
        nl:ButtonAssist.Type="Primary"
        Content="Primary" />
<Button nl:ButtonAssist.IsDash="True"
        nl:ButtonAssist.Type="Success"
        Content="Success" />
<Button nl:ButtonAssist.IsDash="True"
        nl:ButtonAssist.Type="Info"
        Content="Info" />
<Button nl:ButtonAssist.IsDash="True"
        nl:ButtonAssist.Type="Warning"
        Content="Warning" />
<Button nl:ButtonAssist.IsDash="True"
        nl:ButtonAssist.Type="Danger"
        Content="Danger" />
```
