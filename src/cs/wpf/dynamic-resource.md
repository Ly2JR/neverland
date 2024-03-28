---
title: 动态资源
date: 2024-02-21
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
---

通过[DynamicResource](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/advanced/dynamicresource-markup-extension?view=netframeworkdesktop-4.8)可以实现本地资源的替换，实现多语切换或者主题切换功能。

![动态资源](https://nas.ilyl.life:8092/wpf/dynamic-resource.gif)

## 定义资源文件

一个Key为`Hello`的键值对模拟多语切换

一个Key为`ButtonBackground`的键值对模拟主题切换

### 中文资源文件

```xml{5,6}
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:sys="clr-namespace:System;assembly=mscorlib">
    <sys:String x:Key="Hello">您好</sys:String>
    <SolidColorBrush x:Key="ButtonBackground" Color="Orange"></SolidColorBrush>
</ResourceDictionary>
```

### 英文资源文件

```xml{5,6}
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:sys="clr-namespace:System;assembly=mscorlib">
    <sys:String x:Key="Hello">Hello</sys:String>
    <SolidColorBrush x:Key="ButtonBackground" Color="Purple" />
</ResourceDictionary>
```

## 引用资源文件

默认引用`zh-cn.xaml`资源文件

```xml{5-11}
<Application
    x:Class="WpfApp1.App"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <Application.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="pack://application:,,,/WpfApp1;component/Themes/zh-cn.xaml" />
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Application.Resources>
</Application>
```

## 页面

`13行代码高亮`：绑定Key为`ButtonBackground`的资源，模拟主题切换

`27行代码高亮`：绑定Key为`Hello`的资源，模拟多语切换

`29行代码高亮`：实现切换功能

```xml{13,27-29}
<UserControl
    x:Class="WpfApp1.Views.SwitchView"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    d:DesignHeight="450"
    d:DesignWidth="800"
    mc:Ignorable="d">
    <UserControl.Resources>
        <Style x:Key="SwitchButton" TargetType="{x:Type Button}">
            <Setter Property="OverridesDefaultStyle" Value="True" />
            <Setter Property="Background" Value="{DynamicResource ButtonBackground}" />
            <Setter Property="Template">
                <Setter.Value>
                    <ControlTemplate TargetType="{x:Type Button}">
                        <Border Background="{TemplateBinding Background}">
                            <ContentPresenter />
                        </Border>
                    </ControlTemplate>
                </Setter.Value>
            </Setter>
        </Style>
    </UserControl.Resources>
    <Grid>
        <StackPanel>
            <TextBlock Text="{DynamicResource Hello}" />
            <Button Content="按钮" Style="{StaticResource SwitchButton}" />
            <Button Click="Button_Click" Content="切换" />
        </StackPanel>
    </Grid>
</UserControl>
```

## 切换功能

`Application.Current.Resources.MergedDictionaries`显示当前使用的所有资源

```cs{16,17}
private void Button_Click(object sender, RoutedEventArgs e)
{
    var sourceXaml= Application.Current.Resources.MergedDictionaries.FirstOrDefault(it=>it.Source.Segments.Contains("zh-cn.xaml"));
    var targetXaml = Application.Current.Resources.MergedDictionaries.FirstOrDefault(it => it.Source.Segments.Contains("en.xaml"));
    Uri addSource = null;
    if(sourceXaml is null && targetXaml is not null)
    {
        sourceXaml = targetXaml;
        addSource = new Uri($"pack://application:,,,/WpfApp1;component/Themes/zh-cn.xaml");
    }
    else if(targetXaml is null)
    {
        addSource = new Uri($"pack://application:,,,/WpfApp1;component/Themes/en.xaml");
    }

    Application.Current.Resources.MergedDictionaries.Remove(sourceXaml);
    Application.Current.Resources.MergedDictionaries.Add(new ResourceDictionary() { Source = addSource });

    Application.Current.MainWindow?.OnApplyTemplate();
}
```
