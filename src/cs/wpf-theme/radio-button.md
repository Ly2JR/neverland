---
title: RadioButton 按钮
date: 2024-03-18
star: 4
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
<RadioButton nl:ButtonAssist.Type="Primary"
              Content="Primary"
              Style="{StaticResource RadioButtonAsButtonStyle}" />
```

`RadioButton`添加`RadioButtonAsButtonStyle`样式应用，样式效果与`Button`一致，详情请看[Button](./button.md)说明。

## 默认样式

```xml
<RadioButton Content="Primary" Style="{StaticResource RadioButtonStyle}" />
```

`RadioButton`添加`RadioButtonStyle`样式应用。

![RadioButtonStyle](https://nas.ilyl.life:8092/wpf-theme/radio-button/radio-button.gif)