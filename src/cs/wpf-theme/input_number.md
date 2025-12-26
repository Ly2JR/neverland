---
title: Input Number 数字输入框
date: 2024-04-28
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

`Max`和`Min`限制输入的最大值和最小值，`Text`绑定变量String类型。

![input-number](https://image.ilyl.life:8443/wpf-theme/input-number/input-number.gif)

```xml
<nl:InputNumber Width="150" Max="10" Min="1" Text="1" />
```

## 禁用状态

`IsEnabled`属性接受一个`bool`，设置`False`即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置`Min`属性和`Max`属性，默认最小值为`0`

![isenabled](https://image.ilyl.life:8443/wpf-theme/input-number/input-number-isenabled.gif)

```xml
<nl:InputNumber Width="150" IsEnabled="False" Max="10" Min="1" Text="1" />
```

## 步进

允许定义递增递减的步进控制

设置`Step`属性可以控制步长

![step](https://image.ilyl.life:8443/wpf-theme/input-number/input-number-step.gif)

```xml
<nl:InputNumber  Width="150" Step="2" Text="5"/>
```

## 严格步进

`StepStrictly`属性接受一个`bool`。如果这个属性被设置为`True`，则只能输入步进的倍数

![stepstrictly](https://image.ilyl.life:8443/wpf-theme/input-number/input-number-stepstrictly.gif)

```xml
<nl:InputNumber Width="150" Step="2" Text="2" StepStrictly="True"/>
```

## 精度

设置`Precision`属性可以控制数值的精度，接受一个`int`，默认`0`

![precision](https://image.ilyl.life:8443/wpf-theme/input-number/input-number-precision.gif)

```xml
<nl:InputNumber Width="150" Max="10" Precision="2" Step="0.1" Text="1" />
```

## 不同输入尺寸

使用`Size`属性额外配置尺寸，可选的尺寸大小为`Large`或`Small`

![size](https://image.ilyl.life:8443/wpf-theme/input-number/input-number-size.png)

```xml
<nl:InputNumber Width="150" Size="Large" Text="1" />
<nl:InputNumber Width="150" Text="2" />
<nl:InputNumber Width="150" Size="Small" Text="3" />
```

## 按钮位置

设置`ControlsPosition`属性可以控制按钮位置。

![controlsposition](https://image.ilyl.life:8443/wpf-theme/input-number/input-number-controlsposition.gif)

```xml
<nl:InputNumber Width="150" ControlsPosition="Right" Size="Large" Text="1" />
<nl:InputNumber Width="150" ControlsPosition="Right" Text="2" />
<nl:InputNumber Width="150" ControlsPosition="Right" Size="Small" Text="3" />
```

## 自定义图标

使用`DecreaseIcon`和`IncreaseIcon`设置自定义图标。

![icon](https://image.ilyl.life:8443/wpf-theme/input-number/input-number-icon.gif)

```xml
<nl:InputNumber Width="150" Text="1" />

<nl:InputNumber Width="150" Text="1" />

<nl:InputNumber
    Width="150"
    ControlsPosition="Right"
    DecreaseIcon="{DynamicResource --nl-inputnumber-decrease-arrow-icon}"
    IncreaseIcon="{DynamicResource --nl-inputnumber-increase-arrow-icon}"
    Text="1" />

<nl:InputNumber
    Width="150"
    ControlsPosition="Right"
    DecreaseIcon="{DynamicResource --nl-inputnumber-decrease-icon}"
    IncreaseIcon="{DynamicResource --nl-inputnumber-increase-icon}"
    Text="1" />
```
