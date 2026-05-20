---
title: Avalonia导航
date: 2026-05-20
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - Avalonia
---

Avalonia在`12.X`版本中新加了[NavigationPage](https://docs.avaloniaui.net/controls/navigation/navigationpage)控件，可以直接使用提供的导航功能。

但是在`11.X`中没有导航，也是可以自定义实现导航效果。

## 12.X

演示一下`12.X`的导航功能。

![NavigationPage](https://image.ilyl.life:8443/avalonia/navigationpage/NavigationPage.gif)

新建Avalonia项目。

::: tabs

@tab MainView.axaml

```xml{2-8}
<UserControl ...>
<Grid RowDefinitions="*,Auto">
    <NavigationPage x:Name="hostNavigationPage"></NavigationPage>
    <StackPanel Grid.Row="1" Orientation="Horizontal">
        <Button Content="Go to One Page" Click="Button_One_Click" Margin="5"/>
        <Button Content="Go to Two Page" Click="Button_Two_Click" Margin="5"/>
    </StackPanel>
</Grid>
</UserControl>
```

@tab MainView.axaml.cs

```cs
 private async void Button_One_Click(object? sender, Avalonia.Interactivity.RoutedEventArgs e)
 {
    await hostNavigationPage.PushAsync(new OnePage());
 }
 private async void Button_Two_Click(object? sender, Avalonia.Interactivity.RoutedEventArgs e)
 {
    await hostNavigationPage.PushAsync(new TwoPage());
 }
```

:::

### 问题

系统自带的导航功能有几个问题。

1. 没有导航参数，需要自己实现
2. 在`MVVM`模式下，导航页的`PushAsync(Page page)`方式传递的是`Page`页面，而不是`ViewModel`。

## 11.X

Avalonia的导航与`Winform`和`WPF`的写法类似。

在`Winform`和`WPF`中可以使用`UserControl`进行直接替换，或者集成第三方框架如`Prism`实现。

如何自定义实现导航效果。

看一个简单的自定义导航，在原基础上扩展。

::: tabs

@tab MainView.axaml

```xml{4}
<UserControl ...>
  <Grid RowDefinitions="*,Auto" ColumnDefinitions="*,*">
      <NavigationPage x:Name="hostNavigationPage"></NavigationPage>
      <ContentControl Grid.Column="1" x:Name="hostContentControl"></ContentControl>
      <StackPanel Grid.Row="1" Grid.ColumnSpan="2" Orientation="Horizontal">
          <Button Content="Go to One Page" Click="Button_One_Click" Margin="5"/>
          <Button Content="Go to Two Page" Click="Button_Two_Click" Margin="5"/>
      </StackPanel>
  </Grid>
</UserControl>
```

@tab MainView.axaml.cs

```cs{4,9}
 private async void Button_One_Click(object? sender, Avalonia.Interactivity.RoutedEventArgs e)
 {
    await hostNavigationPage.PushAsync(new OnePage());
    hostContentControl.Content = new OnePage();
 }
 private async void Button_Two_Click(object? sender, Avalonia.Interactivity.RoutedEventArgs e)
 {
    await hostNavigationPage.PushAsync(new TwoPage());
    hostContentControl.Content = new TwoPage();
 }
```
:::

![简单导航](https://image.ilyl.life:8443/avalonia/navigationpage/SimpleNavigation.gif)

### 自定义导航实现

要实现能用的导航，需要有几个关键的功能。

1. 导航
2. 返回
3. 传参

根据简单导航效果，不难看出只要扩展就能实现一个通用的导航功能。

#### 自定义导航控件

定义一个导航页

::: tabs

@tab MainView.xaml

```xml{3}
<Grid RowDefinitions="*,Auto" ColumnDefinitions="*,*">
    <NavigationPage x:Name="hostNavigationPage"></NavigationPage>
    <avaloniaapplication1:NavigationHost Grid.Column="1" x:Name="hostNavigation"></avaloniaapplication1:NavigationHost>
    <StackPanel Grid.Row="1" Grid.ColumnSpan="2" Orientation="Horizontal">
        <Button Content="Go to One Page" Click="Button_One_Click" Margin="5"/>
        <Button Content="Go to Two Page" Click="Button_Two_Click" Margin="5"/>
    </StackPanel>
</Grid>
```

@tab MainView.xaml.cs

```cs
private async void Button_One_Click(object? sender, Avalonia.Interactivity.RoutedEventArgs e)
{
  await hostNavigationPage.PushAsync(new OnePage());
    hostNavigation.NavigateTo("OnePage");
}
private async void Button_Two_Click(object? sender, Avalonia.Interactivity.RoutedEventArgs e)
{
  await hostNavigationPage.PushAsync(new TwoPage());
    hostNavigation.NavigateTo("TwoPage");
}
```

@tab NavigationHost.xaml

```xml
<Grid RowDefinitions="Auto,*">
    <StackPanel Orientation="Horizontal" IsVisible="{Binding ElementName=hostContentControl,Path=Content, Converter={x:Static ObjectConverters.IsNotNull}}">
        <Button Content="返回" Click="Button_Click"></Button>
        <TextBlock x:Name="pageTitle" Text="标题"></TextBlock>
    </StackPanel>
    <TransitioningContentControl  Grid.Row="1" x:Name="hostContentControl">
        <TransitioningContentControl.PageTransition>
            <PageSlide Orientation="Horizontal" Duration="0:00:00.500" />
        </TransitioningContentControl.PageTransition>
    </TransitioningContentControl>
</Grid>
```

@tab HostNavigation.xaml.cs

```cs
 private static Stack<string> _cachePages = new();
 private static Dictionary<string, ContentPage> _simpleDi = new Dictionary<string, ContentPage>() {
     {"OnePage",new OnePage()},
     {"TwoPage",new TwoPage()},
 };

 private void GetPage(string pageName, Dictionary<string, object>? parameters)
 {
     pageTitle.Text = pageName;
     if (_simpleDi.ContainsKey(pageName))
     {
         _cachePages.Push(pageName);
         hostContentControl.Content = _simpleDi[pageName];
     }
     else
     {
         hostContentControl.Content = new ContentPage() { Content = new TextBlock() { Text = "Page not found" } };
     }
 }

 public void NavigateTo(string pageName, Dictionary<string, object>? parameters = null)
 {
     GetPage(pageName, parameters);
 }


 public void GoBack()
 {
     if (_cachePages.Count > 1)
     {
         _cachePages.Pop(); 
         var previousPage = _cachePages.Peek();
         GetPage(previousPage, null);
     }
 }

 private void Button_Click(object? sender, Avalonia.Interactivity.RoutedEventArgs e)
 {
     GoBack();
 }
```

:::

![自定义导航](https://image.ilyl.life:8443/avalonia/navigationpage/NavigationHost.gif)

#### 高级

一般会配合`MVVM`模式进行开发，因此可以进行扩展，原理相同。

配合`MVVM`模式一般会使用`DI`依赖注入，这样根据页面编码就能找到页面的ViewModel。

然后`ViewLocator`视图定位器会将`ViewModel`转换为`View`。

在多页面切换或者导航时，可以使用消息传递。

