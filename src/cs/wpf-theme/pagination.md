---
title: Pagination 分页
date: 2024-05-08
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

![pagination](https://nas.ilyl.life:8092/wpf-theme/pagination/pagination.gif)

```xml
<nl:Pagination Total="50" />
<nl:Pagination Total="1000" />
```

## 设置最大页码按钮数

默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。 通过`PagerCount` 属性可以设置最大页码按钮数。

![pagercount](https://nas.ilyl.life:8092/wpf-theme/pagination/pagination-pagercount.gif)

```xml
<nl:Pagination PageSize="20" PagerCount="11" Total="1000" />
```

## 带有背景色的分页

设置`IsBackground`属性可以为分页按钮添加背景色。

![isbackground](https://nas.ilyl.life:8092/wpf-theme/pagination/pagination-isbackground.gif)

```xml
<nl:Pagination IsBackground="True" Total="1000" />
```

## 小型分页

在空间有限的情况下，可以使用简单的小型分页。

只需要设置`IsSmall` 属性为 true 即可让分页变小。

![issmall](https://nas.ilyl.life:8092/wpf-theme/pagination/pagination-issmall.gif)

```xml
<nl:Pagination IsSmall="True" Total="50" />
<nl:Pagination IsBackground="True" IsSmall="True" Total="50" />
```

## 当只有一页时隐藏分页

当只有一页时，通过设置 hide-on-single-page 属性来隐藏分页。

![hidden](https://nas.ilyl.life:8092/wpf-theme/pagination/pagination-hidden.gif)

```xml
<ToggleButton x:Name="ToggleButton"  Style="{StaticResource ToggleButtonAsSwitchStyle}" />
<nl:Pagination HideOnSinglePage="{Binding ElementName=ToggleButton, Path=IsChecked}" Total="5" />
```