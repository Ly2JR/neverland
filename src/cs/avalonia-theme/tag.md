---
title: Tag 标签
date: 2025-04-21
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - Avalonia
  - Avalonia主题控件
---

## 基础用法

由`Classes`属性来选择Tag的类型

![Classes](https://image.ilyl.life:8443/avalonia-theme/tag/tag.png)

```xml
<nl:Tag>Tag 0</nl:Tag>
<nl:Tag Classes="Primary">Tag 1</nl:Tag>
<nl:Tag Classes="Success">Tag 2</nl:Tag>
<nl:Tag Classes="Info">Tag 3</nl:Tag>
<nl:Tag Classes="Warning">Tag 4</nl:Tag>
<nl:Tag Classes="Danger">Tag 5</nl:Tag>
```

## 可移除标签

设置`IsClosed`属性可以定义一个标签是否可移除。 它接受一个 Boolean。 当 Tag 被移除时会触发 close 事件。

![IsClosed](https://image.ilyl.life:8443/avalonia-theme/tag/tag-isclosed.gif)

```xml
<nl:Tag IsClosed="True" Classes="Primary" Close="Tag_Close">Tag 1</nl:Tag>
<nl:Tag IsClosed="True" Classes="Success">Tag 2</nl:Tag>
<nl:Tag IsClosed="True" Classes="Info">Tag 3</nl:Tag>
<nl:Tag IsClosed="True" Classes="Warning">Tag 4</nl:Tag>
<nl:Tag IsClosed="True" Classes="Danger">Tag 5</nl:Tag>
```

```cs
private void Tag_Close(object sender, RoutedEventArgs e)
{
    MessageBox.Show("确定要删除吗");
}
```
