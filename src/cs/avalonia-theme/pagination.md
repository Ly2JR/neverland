---
title: Pagination 分页
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

![pagination](https://image.ilyl.life:8443/avaloniaui-theme/pagination/avalonia-pagination.gif)

```xml
<nl:Pagination Total="10" />
<nl:Pagination Total="1000" />
<nl:Pagination PageSize="20" PagerCount="11"Total="1000" />
<nl:Pagination CurrentChanged="Pagination_CurrentChanged" PageSize="20" PagerCount="11" Total="1000" />
```

## 设置最大页码按钮数

默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。 通过`PagerCount` 属性可以设置最大页码按钮数。

```xml
<nl:Pagination PageSize="20" PagerCount="11" Total="1000" />
```
