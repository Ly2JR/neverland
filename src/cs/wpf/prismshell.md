---
title: Prism多Shell
date: 2023-10-18
dir.order: 1
editLink: false
footer: false
isOriginal: true
dir:
    order: 11
order: 11
category:
  - C#
tag:
  - WPF
  - Prism
---

使用Prism时，一个最常见的问题就是登录与主页面切换，启用只有一个Shell，如何切换到另外一个Shell。

## Application.Current.MainWindow

通过Application.Current.MainWindow切换登录和主页面

`LoginView`为登录页面

`ShellView`为主页面

1. 在Bootstrapper里设置登录页面启动

    ```cs
    protected override DependencyObject CreateShell()
    {
        return Container.Resolve<LoginView>();
    }
    ```

2. 登录成功后

    ::: warning
    代码高亮处缺少时，无法使用IRegionManager中的导航功能
    :::

    ```cs{2,3}
    var shellView = _container.Resolve<ShellView>();
    RegionManager.SetRegionManager(shellView, _regionManager);
    RegionManager.UpdateRegions();
    Application.Current.MainWindow.Hide();
    Application.Current.MainWindow = shellView;
    shellView.Show();
    ```

## Region

通过Region添加LoginView和MainView

`LoginView`为登录布局

`MainView`为主页面布局

`ShellView`为主页面

1. 在Bootstrapper里设置Shell页面启动

    ```cs
    protected override DependencyObject CreateShell()
    {
        return Container.Resolve<ShellView>();
    }
    ```

2. ShellView页面

    ```xml
    <Window x:Class="Regions.Views.MainWindow"
            xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
            xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
            xmlns:prism="http://prismlibrary.com/"
            Title="Shell"
            Width="525"
            Height="350">
        <Grid>
            <ContentControl prism:RegionManager.RegionName="ContentRegion" />
        </Grid>
    </Window>
    ```

3. 登录成功后

    ::: warning
    无法在VM构造函数里直接使用`_regionManager.Regions["ContentRegion"]`

    可以替换为`_regionManager.RegisterViewWithRegion("ContentRegion", typeof(MainView))`
    :::

    ```cs
    var region = _regionManager.Regions["ContentRegion"];
    var hasView = region.GetView(nameof(MainView));
    var mainView=_region.Resolve<MainView>()
    if (hasView == null)
    {
        region.Add(mainView, nameof(MainView));
    }
    else
    {
        region.Activate(hasView);
    }
    ```

一个潜在的问题在于，登录布局页面与主页面布局大小可能不一致。但是启动时的Shell大小已定。

这里可以使用`IEventAggregator`，让Shell来调整页面大小。

## InitializeShell

`LoginView`为登录页面

`ShellView`为主页面

1. 在Bootstrapper里设置Shell页面启动

    ```cs
    protected override DependencyObject CreateShell()
    {
        return Container.Resolve<ShellView>();
    }
    ```

2. 在Bootstrapper里初始化Shell,设置登录页启动

    ```cs
    protected override void InitializeShell(DependencyObject shell)
    {
        var login = new LoginView();
        if (login.DataContext is LoginViewModel ctx)
        {
            ctx.LoginResult += (bool ret,string message) =>
            {
                if (ret)
                {
                    base.InitializeShell(shell);
                }
                else
                {
                    MessageBox.Show(message);
                }
            };
        }
        if (login.ShowDialog() != true)
        {
            Application.Current.Shutdown(-1);
        }
    }
    ```
