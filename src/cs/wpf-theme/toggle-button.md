---
title: Switch 开关
date: 2024-03-18
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - WPF主题控件
---

## 按钮样式

::: tip
添加`ToggleButtonAsButtonStyle`样式应用
:::

```xml
<ToggleButton nl:ButtonAssist.Type="Primary" 
              Content="Primary" 
              Style="{StaticResource ToggleButtonAsButtonStyle}" />
```

样式效果与`Button`一致，详情请看[Button](./button.md)说明。

## Switch样式

::: tip
添加`ToggleButtonAsSwitchStyle`样式应用
:::

### 颜色

使用`SwitchOffBackground`和`SwitchOnBackground`属性控制切换背景颜色

![SwitchBackground](https://image.ilyl.life:8443/wpf-theme/toggle-button/togglebutton-color.gif)

```xml
<ToggleButton Style="{StaticResource ToggleButtonAsSwitchStyle}" />

<ToggleButton nl:ToggleButtonAssist.SwitchOffBackground="#ff4949"
              nl:ToggleButtonAssist.SwitchOnBackground="#13ce66"
              IsChecked="True"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />
```

### 尺寸

通过`Size`控制ToggleButton大小，默认提供三种效果选项`Small`、`Default`以及`Large`

![Size](https://image.ilyl.life:8443/wpf-theme/toggle-button/togglebutton-size.gif)

```xml
<ToggleButton nl:ToggleButtonAssist.ActiveText="Open"
              nl:ToggleButtonAssist.InactiveText="Close"
              nl:ToggleButtonAssist.Size="Large"
              IsChecked="True"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />

<ToggleButton nl:ToggleButtonAssist.ActiveText="Open"
              nl:ToggleButtonAssist.InactiveText="Close"
              IsChecked="True"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />

<ToggleButton nl:ToggleButtonAssist.ActiveText="Open"
              nl:ToggleButtonAssist.InactiveText="Close"
              nl:ToggleButtonAssist.Size="Small"
              IsChecked="True"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />
```

### 文字描述

使用`ActiveText`属性与`InactiveText`属性来设置开关的文字描述。

![text](https://image.ilyl.life:8443/wpf-theme/toggle-button/togglebutton-text.gif)

```xml
<ToggleButton nl:ToggleButtonAssist.ActiveText="Pay by month"
              nl:ToggleButtonAssist.InactiveText="Pay by year"
              IsChecked="True"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />

 <ToggleButton nl:ToggleButtonAssist.ActiveText="Pay by month"
               nl:ToggleButtonAssist.InactiveText="Pay by year"
               nl:ToggleButtonAssist.SwitchOffBackground="#ff4949"
               nl:ToggleButtonAssist.SwitchOnBackground="#13ce66"
               IsChecked="True"
               Style="{StaticResource ToggleButtonAsSwitchStyle}" />
```

使用`InlinePrompt`属性来控制文本是否显示在点内。

![InlinePrompt](https://image.ilyl.life:8443/wpf-theme/toggle-button/togglebutton-inlineprompt.gif)

```xml
<ToggleButton nl:ToggleButtonAssist.ActiveText="是"
              nl:ToggleButtonAssist.InactiveText="否"
              nl:ToggleButtonAssist.InlinePrompt="True"
              IsChecked="True"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />

<ToggleButton nl:ToggleButtonAssist.ActiveText="Y"
              nl:ToggleButtonAssist.InactiveText="N"
              nl:ToggleButtonAssist.InlinePrompt="True"
              nl:ToggleButtonAssist.SwitchOffBackground="#ff4949"
              nl:ToggleButtonAssist.SwitchOnBackground="#13ce66"
              IsChecked="True"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />

<ToggleButton Width="60"
              nl:ToggleButtonAssist.ActiveText="超出内容"
              nl:ToggleButtonAssist.InactiveText="超出内容"
              nl:ToggleButtonAssist.InlinePrompt="True"
              IsChecked="True"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />

<ToggleButton nl:ToggleButtonAssist.ActiveText="完整展示多个内容"
              nl:ToggleButtonAssist.InactiveText="多个内容"
              nl:ToggleButtonAssist.InlinePrompt="True"
              nl:ToggleButtonAssist.Size="Large"
              nl:ToggleButtonAssist.SwitchOffBackground="#ff4949"
              nl:ToggleButtonAssist.SwitchOnBackground="#13ce66"
              IsChecked="True"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />
```

### 显示自定义图标

使用`InactiveIcon`和`ActiveIcon`属性来添加图标。 使用`InlinePrompt`属性来控制图标显示在点内。

![icon](https://image.ilyl.life:8443/wpf-theme/toggle-button/togglebutton-icon.gif)

```xml
<ToggleButton nl:ToggleButtonAssist.ActiveIcon="{DynamicResource check-icon}"
              nl:ToggleButtonAssist.InactiveIcon="{DynamicResource close-icon}"
              IsChecked="True"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />

<ToggleButton nl:ToggleButtonAssist.ActiveIcon="{DynamicResource check-icon}"
              nl:ToggleButtonAssist.InactiveIcon="{DynamicResource close-icon}"
              nl:ToggleButtonAssist.InlinePrompt="True"
              IsChecked="True"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />
```

### 禁用状态

设置原生`IsEnabled`属性，接受一个Boolean，设置false即可禁用。

![isenabled](https://image.ilyl.life:8443/wpf-theme/toggle-button/togglebutton-isenabled.gif)

```xml
<ToggleButton IsChecked="True"
              IsEnabled="False"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />

<ToggleButton IsChecked="True"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />
```

### 加载状态

设置`Loading`属性，接受一个Boolean，设置true即加载中状态。

![loading](https://image.ilyl.life:8443/wpf-theme/toggle-button/togglebutton-loading.gif)

```xml
<ToggleButton nl:ToggleButtonAssist.Loading="True"
              IsChecked="True"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />

<ToggleButton nl:ToggleButtonAssist.Loading="True" 
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />
```

### 自定义动作图标

使用`InactiveActionIcon`和`ActiveActionIcon`属性来添加图标。

![ActionIcon](https://image.ilyl.life:8443/wpf-theme/toggle-button/togglebutton-actionicon.gif)

```xml
<ToggleButton nl:ToggleButtonAssist.ActiveActionIcon="{DynamicResource active-action-icon}"
              nl:ToggleButtonAssist.InactiveActionIcon="{DynamicResource inactive-action-icon}"
              Style="{StaticResource ToggleButtonAsSwitchStyle}" />
```
