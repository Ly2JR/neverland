---
title: Breadcrumb 面包屑
date: 2024-05-07
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

在`nl-breadcrumb` 中使用 `nl-breadcrumb-item` 标签表示从首页开始的每一级。 该组件接受一个 String 类型的参数 separator来作为分隔符。 默认值为 '/'。

![breadcrumb](https://nas.ilyl.life:8092/wpf-theme/breadcrumb/breadcrumb.png)

```xml
 <nl:Breadcrumb>
     <nl:BreadcrumbItem To="/">homepage</nl:BreadcrumbItem>
     <nl:BreadcrumbItem To="/">promotion management</nl:BreadcrumbItem>
     <nl:BreadcrumbItem>promotion list</nl:BreadcrumbItem>
     <nl:BreadcrumbItem>promotion detail</nl:BreadcrumbItem>
 </nl:Breadcrumb>
```

## 图片分隔符

通过设置`SeparatorIcon`可使用相应的图形作为分隔符。

![icon](https://nas.ilyl.life:8092/wpf-theme/breadcrumb/breadcrumb-icon.png)

```xml
<Geometry x:Key="SeparatorIcon">M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z</Geometry>

<nl:Breadcrumb
    SeparatorIcon="{StaticResource SeparatorIcon}">
    <nl:BreadcrumbItem To="/">homepage</nl:BreadcrumbItem>
    <nl:BreadcrumbItem To="/">promotion management</nl:BreadcrumbItem>
    <nl:BreadcrumbItem>promotion list</nl:BreadcrumbItem>
    <nl:BreadcrumbItem>promotion detail</nl:BreadcrumbItem>
</nl:Breadcrumb>
```

## 路由跳转

通过设置`To`属性实现路由跳转功能

![to](https://nas.ilyl.life:8092/wpf-theme/breadcrumb/breadcrumb-to.gif)

```xml
<nl:Breadcrumb
    Goto="{Binding GotoCommand}">
    <nl:BreadcrumbItem To="pack://application:,,,/Neverland.Demo;component/Views/HomePage.xaml">homepage</nl:BreadcrumbItem>
    <nl:BreadcrumbItem To="pack://application:,,,/Neverland.Demo;component/Views/PromotionManagementPage.xaml">promotion management</nl:BreadcrumbItem>
    <nl:BreadcrumbItem>promotion list</nl:BreadcrumbItem>
    <nl:BreadcrumbItem>promotion detail</nl:BreadcrumbItem>
</nl:Breadcrumb>

<Frame x:Name="MainFrame" NavigationUIVisibility="Hidden" />
```

```cs
public BreadcrumbView()
{
    InitializeComponent();
    this.DataContext = new BreadcrumbViewModel(MainFrame);
}

public partial class BreadcrumbViewModel:DependencyObject
{
    private readonly Frame _mainFrame;
    public BreadcrumbViewModel(Frame frame)
    {
        _mainFrame = frame;
    }

    [RelayCommand]
    public Task Goto(Uri to)
    {
        if (_mainFrame is not null)
        {
            _mainFrame.Navigate(to);
        }
        return Task.CompletedTask;
    }
}
```
