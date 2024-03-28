---
title: 概述
breadcrumb: false
article: false
editLink: false
footer: false
category:
  - WPF主题控件
---

::: tip
仿照[element plus](https://element-plus.org/zh-CN/guide/design.html)的一款wpf主题控件
:::

免费开源的[MaterialDesignInXamlToolkit](https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit)和[HandyControl](https://github.com/HandyOrg/HandyControl)以及其他的控件等等非常不错。

## 指南

1. 引用`NeverlandTheme.Wpf.dll`

2. App.xaml添加资源引用

    ```xml
    <Application.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="pack://application:,,,/NeverlandTheme.Wpf;component/Themes/Generic.xaml" />
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Application.Resources>
    ```

3. MainWindow.xaml添加声明

    ```xml
    xmlns:nl="http:ilyl.life"
    ```
