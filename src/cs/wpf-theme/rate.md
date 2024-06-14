---
title: Rate 评分
date: 2024-06-14
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

评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。


![rate](https://nas.ilyl.life:8092/wpf-theme/rate/rate.gif)

```xml
<nl:Rate/>
```

![color](https://nas.ilyl.life:8092/wpf-theme/rate/rate-color.gif)

```xml
<x:Array x:Key="Colors" Type="{x:Type Brush}">
    <SolidColorBrush>#99A9BF</SolidColorBrush>
    <SolidColorBrush>#F7BA2A</SolidColorBrush>
    <SolidColorBrush>#FF9900</SolidColorBrush>
</x:Array>

<nl:Rate Colors="{StaticResource Colors}" />
```

## 尺寸

![size](https://nas.ilyl.life:8092/wpf-theme/rate/rate-size.gif)

```xml
<nl:Rate Size="Large" />
<nl:Rate />
<nl:Rate Size="Small" />
```

## 允许半选

属性`AllowHalf`允许出现半星

![allowhalf](https://nas.ilyl.life:8092/wpf-theme/rate/rate-allowhalf.gif)

```xml
 <nl:Rate AllowHalf="True" />
```

## 辅助文字

用辅助文字直接地表达对应分数

为组件设置`IsShowText` 属性会在右侧显示辅助文字。 通过设置 texts 可以为每一个分值指定对应的辅助文字。 texts 为一个数组，长度应等于最大值 max。

![isshowtext](https://nas.ilyl.life:8092/wpf-theme/rate/rate-isshowtext.gif)

```xml
<x:Array x:Key="Texts" Type="{x:Type system:String}">
    <system:String>oops</system:String>
    <system:String>disappointed</system:String>
    <system:String>normal</system:String>
    <system:String>good</system:String>
    <system:String>great</system:String>
</x:Array>

<nl:Rate IsShowText="True" Texts="{StaticResource Texts}" />
```