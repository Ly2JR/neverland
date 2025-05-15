---
title: 概述
breadcrumb: false
article: false
editLink: false
footer: false
category:
  - Avalonia主题控件
---

::: tip
仿照[element plus](https://element-plus.org/zh-CN/guide/design.html)的一款Avalonia主题控件
:::

由原先的WPF控件，迁移到Avalonia

## 指南

1. 引用`Neverland.Avalonia.dll`

2. app.axaml添加声明

```xml
<Application xmlns:nl="https://ilyl.life/avaloniaui">
    <Application.Styles>
        <nl:Theme />
    </Application.Styles>
</Application>
```
