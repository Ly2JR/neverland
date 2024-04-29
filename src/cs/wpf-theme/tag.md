---
title: Tag 标签
date: 2024-04-26
star: 2
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

由`Type`属性来选择Tag的类型

![tag](https://nas.ilyl.life:8092/wpf-theme/tag/tag.png)

```xml
<nl:Tag Type="Primary">Tag 1</nl:Tag>
<nl:Tag Type="Success">Tag 2</nl:Tag>
<nl:Tag Type="Info">Tag 3</nl:Tag>
<nl:Tag Type="Warning">Tag 4</nl:Tag>
<nl:Tag Type="Danger">Tag 5</nl:Tag>
```

## 可移除标签

设置`IsClosable`属性可以定义一个标签是否可移除。 它接受一个 Boolean。 当 Tag 被移除时会触发 close 事件。

![isclosable](https://nas.ilyl.life:8092/wpf-theme/tag/tag-isclosable.gif)

```xml
<nl:Tag IsClosable="True" Type="Primary" Close="Tag_Close">Tag 1</nl:Tag>
<nl:Tag IsClosable="True" Type="Success">Tag 2</nl:Tag>
<nl:Tag IsClosable="True" Type="Info">Tag 3</nl:Tag>
<nl:Tag IsClosable="True" Type="Warning">Tag 4</nl:Tag>
<nl:Tag IsClosable="True" Type="Danger">Tag 5</nl:Tag>
```

```cs
private void Tag_Close(object sender, RoutedEventArgs e)
{
    MessageBox.Show("确定要删除吗");
}
```

## 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

使用`size`属性来设置额外尺寸, 可选值包括 large, default 或 small,默认`Default`

![size](https://nas.ilyl.life:8092/wpf-theme/tag/tag-size.png)

```xml
<nl:Tag IsClosable="True" Size="Large" Type="Primary">
    Tag 1
</nl:Tag>
<nl:Tag IsClosable="True" Size="Default" Type="Success">
    Tag 2
</nl:Tag>
<nl:Tag IsClosable="True" Size="Small" Type="Info">
    Tag 3
</nl:Tag>
```

## 主题

Tag 组件提供了三个不同的主题：dark、light 和 plain。

通过设置`Theme`属性来改变主题，默认为 light。

![theme](https://nas.ilyl.life:8092/wpf-theme/tag/tag-theme.png)

```xml
<nl:Tag Theme="Dark" Type="Primary">Tag 1</nl:Tag>
<nl:Tag Theme="Dark" Type="Success">Tag 2</nl:Tag>
<nl:Tag Theme="Dark" Type="Info">Tag 3</nl:Tag>
<nl:Tag Theme="Dark" Type="Warning">Tag 4</nl:Tag>
<nl:Tag Theme="Dark" Type="Danger">Tag 5</nl:Tag>

<nl:Tag Type="Primary">Tag 1</nl:Tag>
<nl:Tag Type="Success">Tag 2</nl:Tag>
<nl:Tag Type="Info">Tag 3</nl:Tag>
<nl:Tag Type="Warning">Tag 4</nl:Tag>
<nl:Tag Type="Danger">Tag 5</nl:Tag>

<nl:Tag Theme="Plain" Type="Primary">Tag 1</nl:Tag>
<nl:Tag Theme="Plain" Type="Success">Tag 2</nl:Tag>
<nl:Tag Theme="Plain" Type="Info">Tag 3</nl:Tag>
<nl:Tag Theme="Plain" Type="Warning">Tag 4</nl:Tag>
<nl:Tag Theme="Plain" Type="Danger">Tag 5</nl:Tag>
```

## 圆形标签

Tag 可以向按钮组件一样变为完全圆形。

通过设置`IsRound`属性来改变是否圆形

![isround](https://nas.ilyl.life:8092/wpf-theme/tag/tag-isround.png)

```xml
<nl:Tag IsRound="True" Theme="Dark" Type="Primary">Tag 1</nl:Tag>
<nl:Tag IsRound="True" Theme="Dark" Type="Success">Tag 2</nl:Tag>
<nl:Tag IsRound="True" Theme="Dark" Type="Info">Tag 3</nl:Tag>
<nl:Tag IsRound="True" Theme="Dark" Type="Warning">Tag 4</nl:Tag>
<nl:Tag IsRound="True" Theme="Dark" Type="Danger">Tag 5</nl:Tag>

<nl:Tag IsRound="True" Type="Primary">Tag 1</nl:Tag>
<nl:Tag IsRound="True" Type="Success">Tag 2</nl:Tag>
<nl:Tag IsRound="True" Type="Info">Tag 3</nl:Tag>
<nl:Tag IsRound="True" Type="Warning">Tag 4</nl:Tag>
<nl:Tag IsRound="True" Type="Danger">Tag 5</nl:Tag>

<nl:Tag IsRound="True" Theme="Plain" Type="Primary">Tag 1</nl:Tag>
<nl:Tag IsRound="True" Theme="Plain" Type="Success">Tag 2</nl:Tag>
<nl:Tag IsRound="True" Theme="Plain" Type="Info">Tag 3</nl:Tag>
<nl:Tag IsRound="True" Theme="Plain" Type="Warning">Tag 4</nl:Tag>
<nl:Tag IsRound="True" Theme="Plain" Type="Danger">Tag 5</nl:Tag>
```