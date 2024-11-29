---
title: TabControl
date: 2023-11-22
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - Prism
---

- [x] TabControl如何添加Tab页?
- [x] TabControl如何删除Tab页?
- [x] IsNavigationTarget的用途？
- [x] 如何关闭全部Tab页?
- [x] 多个Tab页如何同时接收消息?
- [x] 如何指定Tab页接收消息？
- [x] 关闭Tab页后消息为何还能接收？

![TabControl](https://nas.ilyl.life:8092/wpf/tabcontrol.gif)

## TabControl如何添加Tab页

![添加](https://nas.ilyl.life:8092/wpf/tabcontrol1.gif)

实现TabControl动态添加，需要用到Prism的区域管理

```xml
 <TabControl
    prism:RegionManager.RegionName="ContentRegion"
    ItemContainerStyle="{StaticResource CloseTabStyle}" />
```

在TabControl里重新设置`ItemContainerStyle`实现关闭功能和Header显示

```xml{6-8}
<Style x:Key="CloseTabStyle" TargetType="{x:Type TabItem}">
     <Setter Property="Template">
         <Setter.Value>
             <ControlTemplate TargetType="{x:Type TabItem}">
                 <StackPanel Orientation="Horizontal">
                     <TextBlock Text="{Binding DataContext.Title}" />
                     <Button Command="{Binding DataContext.CloseTabCommand}"
                             CommandParameter="{Binding}"
                             Content="关闭" />
                 </StackPanel>
             </ControlTemplate>
         </Setter.Value>
     </Setter>
</Style>
```

在`PrismApplication`类注册需要导航的用户控件，VM中需要继承`INavigationAware`

```cs
 protected override void RegisterTypes(IContainerRegistry containerRegistry)
 {
     containerRegistry.RegisterForNavigation<ViewA, ViewAViewModel>();
     containerRegistry.RegisterForNavigation<ViewB, ViewBViewModel>();
 }
```

通过`IRegionManager`接口的`RequestNavigate`方法进行TabItem添加

```cs
 private void Navigate(string navigatePath)
 {
     if (navigatePath == null) return;
     var region = _regionManager.Regions["ContentRegion"];
     _regionManager.RequestNavigate("ContentRegion", navigatePath, NavigationComplete);
 }

 private void NavigationComplete(NavigationResult result)
 {
     System.Windows.MessageBox.Show(String.Format("Navigation to {0} complete. ", result.Context.Uri));
 }
```

## TabControl如何删除Tab页

![删除](https://nas.ilyl.life:8092/wpf/tabcontrol2.gif)

::: tip
在ItemContainerStyle设置关闭和在用户控件里添加关闭有什么区别?

ItemContainerStyle中的`CommandParameter="{Binding}"`为当前页面`View`

而用户控件里的`CommandParameter="{Binding}"`为当前页面的`ViewModel`
:::

在重写样式`ItemContainerStyle`设置了`CloseTabCommand`方法

在VM中如下实现

```cs
private void CloseTab(object obj)
{
    var region = _regionManger.Regions["ContentRegion"];
    region.Remove(obj);
}
```

## IsNavigationTarget的用途

![IsNavigationTarget](https://nas.ilyl.life:8092/wpf/tabcontrol3.gif)

当IsNavigationTarget为`True`时，无论请求导航多少次，View和ViewModel始终为同一个实例。

当IsNavigationTarget为`False`时，请求导航多少次，View和ViewModel就有多少个。

## 如何关闭全部Tab页

![全部关闭](https://nas.ilyl.life:8092/wpf/tabcontrol4.gif)

`IRegion`接口提供`RemoveAll`方法

通过`IEventAggregator`将关闭所有Tab页的消息分发

当多个Tab页时，可以提取为功能基类进行消息处理

VM基类:

```cs
public BaseViewModel(IEventAggregator eventAggregator, IRegionManager regionManger)
{
    _eventAggregator.GetEvent<PubSubEvent<int>>().Subscribe(TabControlHandler);
}

private void TabControlHandler(int i)
{
    var region = _regionManger.Regions["ContentRegion"];
    region.RemoveAll();
}
```

Tab页VM子类:

```cs
public ViewAViewModel(IEventAggregator eventAggregator, IRegionManager regionManager) : base(eventAggregator,regionManager)
{
}
```

## 多个Tab页同时接收消息

![同时接收消息](https://nas.ilyl.life:8092/wpf/tabcontrol5.gif)

如全部关闭Tab页类型，提取为公共基类，通过`IEventAggregator`订阅公共消息。

## 指定Tab页接收消息

![指定接收消息](https://nas.ilyl.life:8092/wpf/tabcontrol6.gif)

如果没有提取公共类，那么通过`IEventAggregator`的`Subscribe`和`Unsubscribe`即可。

如果提取了公共类，`Subscribe`重载方法进行消息过滤即可。

消息载体:

```cs
public class Message
{
    /// <summary>
    ///  空值:全部接收
    ///  否则，指定接收
    /// </summary>
    public string Receiver { get; set; }

    //内容
    public string Content { get; set; }
}
```

消息订阅:

```cs
public BaseViewModel(IEventAggregator eventAggregator)
{
    eventAggregator.GetEvent<PubSubEvent<Message>>().Subscribe(Receive, Filter);
}

private bool Filter(Message msg){
    if (string.IsNullOrEmpty(msg.Receiver)) return true;
    return msg.Receiver == me;
}
```

- 关闭Tab页后取消订阅

在关闭事件中添加`Unsubscribe`方法取消订阅

```cs{3}
private void CloseTab(object obj)
{
    _eventAggregator.GetEvent<PubSubEvent<int>>().Unsubscribe(TabControlHandler);
    var region = _regionManger.Regions["ContentRegion"];
    region.Remove(obj);
}
```
