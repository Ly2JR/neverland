---
title: ToggleButton 按钮
date: 2024-03-18
star: 5
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

添加`xmlns:nl="http://ilyl.life"`声明

## 按钮样式

```xml
<ToggleButton nl:ButtonAssist.Type="Primary"
              Content="Primary"
              Style="{StaticResource ToggleButtonAsButtonStyle}" />
```

`ToggleButton`添加`ToggleButtonAsButtonStyle`样式应用，样式效果与`Button`一致，详情请看[Button](./button.md)说明。

## 默认样式

```xml
<ToggleButton nl:ButtonAssist.Size="Small"
                Style="{StaticResource ToggleButtonAsSwitchStyle}" />
<ToggleButton nl:ButtonAssist.Size="Default"
                Style="{StaticResource ToggleButtonAsSwitchStyle}" />
<ToggleButton nl:ButtonAssist.Size="Large"
                Style="{StaticResource ToggleButtonAsSwitchStyle}" />
```

`ToggleButton`添加`ToggleButtonAsSwitchStyle`样式应用。

### Size属性

通过`ButtonAssist.Size`控制ToggleButton大小,默认提供三种效果选项`Small`、`Default`以及`Large`

![ToggleButtonAsSwitchStyle](https://nas.ilyl.life:8092/wpf-theme/toggle-button/toggle-button.gif)