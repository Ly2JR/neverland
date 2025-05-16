---
title: Tag 标签
date: 2025-05-16
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - AvaloniaUI
  - AvaloniaUI主题控件
---

## 基础用法

由`Classes`样式类设置Tag的类型，默认提供`Primary`、`Success`、`Info`、`Warning`、`Danger`

![tag](https://image.ilyl.life:8443/avaloniaui-theme/tag/avalonia-tag.png)

```xml
<nl:Tag>Tag 0</nl:Tag>
<nl:Tag Classes="Primary">Tag 1</nl:Tag>
<nl:Tag Classes="Success">Tag 2</nl:Tag>
<nl:Tag Classes="Info">Tag 3</nl:Tag>
<nl:Tag Classes="Warning">Tag 4</nl:Tag>
<nl:Tag Classes="Danger">Tag 5</nl:Tag>
```

## 可移除标签

设置`Closable`属性可以定义一个标签是否可移除。当 Tag 被移除时会触发`Closed`事件。

```xml
<nl:Tag Classes="Danger Closable" Closed="Tag_Closed">Tag 5</nl:Tag>
```

```cs
private void Tag_Close(object sender, RoutedEventArgs e)
{
    MessageBox.Show("删除Tag");
}
```
