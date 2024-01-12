---
title: WPF主题
breadcrumb: false
article: false
index: false
editLink: false
footer: false
---

::: tip
仿照[element plus](https://element-plus.org/zh-CN/guide/design.html)的一款wpf主题控件
:::

免费开源的[MaterialDesignInXamlToolkit](https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit)和[HandyControl](https://github.com/HandyOrg/HandyControl)以及其他的控件等等非常不错。

但是直接应用在项目中又有一些局限，所以重新实现。

一方面是学习总结，加深影响。

另外一方面是需要不断的提炼，使用，才能有一个好的产品。

## 指南

1. 引用`Neverland.Wpf.dll`

2. App.xaml添加资源引用

    ```xml
    <Application.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="pack://application:,,,/Neverland.Wpf;component/Themes/Light.xaml" />
                <ResourceDictionary Source="pack://application:,,,/Neverland.Wpf;component/Themes/Generic.xaml" />
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Application.Resources>
    ```

3. MainWindow.xaml添加声明

    ```xml
    xmlns:nl="http:ilyl.life"
    ```
