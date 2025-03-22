---
title: Autocomplete 自动补全输入框
date: 2024-05-12
star: 2
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

当激活时给出建议

![autocomplete](https://image.ilyl.life:8443/wpf-theme/autocomplete/autocomplete.gif)

```xml
<nl:Autocomplete
    DisplayMemberPath="Key"
    IsClearable="True"
    ItemsSource="{Binding Items}"
    Placeholder="Please Input"
    SelectedValuePath="Key" />
```

当输入时给出建议

![input](https://image.ilyl.life:8443/wpf-theme/autocomplete/autocomplete-input.gif)

```xml
<nl:Autocomplete
    DisplayMemberPath="Key"
    IsClearable="True"
    IsTriggerOnFocus="False"
    ItemsSource="{Binding Items}"
    Placeholder="Please Input"
    SelectedValuePath="Key" >
    <i:Interaction.Triggers>
        <i:EventTrigger EventName="FeatchSuggestions">
            <i:InvokeCommandAction Command="{Binding SuggestionsCommand}" PassEventArgsToCommand="True" />
        </i:EventTrigger>
    </i:Interaction.Triggers>
</nl:Autocomplete>
```

```cs
public ObservableCollection<KeyValuePair<string,string>> Items { get; set; } = new ObservableCollection<KeyValuePair<string, string>>();

[ObservableProperty]
private bool isLoading;

private readonly List<KeyValuePair<string, string>> Datas = new List<KeyValuePair<string, string>>()
{
    new KeyValuePair<string, string>("Wpf Data", "Hello1 Wpf Data"),
    new KeyValuePair<string, string>("Winform Data", "Hello2 Winform Data"),
    new KeyValuePair<string, string>("WCF Data", "Hello3 WCF Data"),
    new KeyValuePair<string, string>("MVC Data", "Hello4 MVC Data"),
    new KeyValuePair<string, string>("ASP.NET Data", "Hello5 ASP.NET Data"),
};

[RelayCommand(AllowConcurrentExecutions = true)]
private async Task OnSuggestionsAsync(AutocompleteEventArgs? arg)
{
    if (arg is null) return;
    Items.Clear();
    if (string.IsNullOrEmpty(arg.QueryString))
    {
        foreach(var data in Datas)
        {
            Items.Add(data);
        }
    }
    else
    {
        var finds= Datas.FindAll(item => item.Key.Contains(arg.QueryString,System.StringComparison.CurrentCultureIgnoreCase));
        foreach (var data in finds)
        {
            Items.Add(data);
        }
    }
}
```

## 自定义模板

自定义如何显示输入建议

`Suffix`自定义输入框尾部内容。`ItemTemplate`自定义显示内容

![define](https://image.ilyl.life:8443/wpf-theme/autocomplete/autocomplete-define.gif)

```xml
<DataTemplate x:Key="DefineSuffix">
    <Path
        Width="10"
        Height="10"
        Fill="Red"
        Stretch="Fill">
        <Path.Data>
            <GeometryGroup>
                <PathGeometry Figures="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z" />
                <PathGeometry Figures="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z" />
            </GeometryGroup>
        </Path.Data>
    </Path>
</DataTemplate>

<DataTemplate x:Key="DefineDataTemplate">
    <StackPanel Orientation="Vertical">
        <TextBlock FontSize="14" Text="{Binding Key}" />
        <TextBlock
            Margin="0,10"
            FontSize="12"
            Text="{Binding Value}" />
    </StackPanel>
</DataTemplate>

<nl:Autocomplete
    ItemTemplate="{StaticResource DefineDataTemplate}"
    ItemsSource="{Binding Items}"
    Placeholder="Please Input"
    SelectedValuePath="Value"
    Suffix="{StaticResource DefineSuffix}" />
```

## 远程搜索

从服务端搜索数据，`IsLoading`属性显示加载动画，`FeatchSuggestions`事件自定义处理显示数据

::: tip
Nuget:[Microsoft.Xaml.Behaviors.Wpf](https://www.nuget.org/packages/Microsoft.Xaml.Behaviors.Wpf/1.1.77?_src=template)

xmlns:i="http://schemas.microsoft.com/xaml/behaviors"
:::

![loading](https://image.ilyl.life:8443/wpf-theme/autocomplete/autocomplete-loading.gif)

```xml
<nl:Autocomplete
    IsClearable="True"
    IsLoading="{Binding IsLoading}"
    ItemTemplate="{StaticResource DefineDataTemplate}"
    ItemsSource="{Binding Items}"
    Placeholder="请输入"
    SelectedValuePath="Value">
    <i:Interaction.Triggers>
        <i:EventTrigger EventName="FeatchSuggestions">
            <i:InvokeCommandAction Command="{Binding SuggestionsCommand}" PassEventArgsToCommand="True" />
        </i:EventTrigger>
    </i:Interaction.Triggers>
</nl:Autocomplete>
```

```cs
public ObservableCollection<KeyValuePair<string,string>> Items { get; set; } = new ObservableCollection<KeyValuePair<string, string>>();

[ObservableProperty]
private bool isLoading;

private readonly List<KeyValuePair<string, string>> Datas = new List<KeyValuePair<string, string>>()
{
    new KeyValuePair<string, string>("Wpf Data", "Hello1 Wpf Data"),
    new KeyValuePair<string, string>("Winform Data", "Hello2 Winform Data"),
    new KeyValuePair<string, string>("WCF Data", "Hello3 WCF Data"),
    new KeyValuePair<string, string>("MVC Data", "Hello4 MVC Data"),
    new KeyValuePair<string, string>("ASP.NET Data", "Hello5 ASP.NET Data"),
};

[RelayCommand(AllowConcurrentExecutions = true)]
private async Task OnSuggestionsAsync(AutocompleteEventArgs? arg)
{
    if (arg is null) return;
    IsLoading = true;
    Items.Clear();
    if (string.IsNullOrEmpty(arg.QueryString))
    {
        foreach(var data in Datas)
        {
            Items.Add(data);
        }
    }
    else
    {
        var finds= Datas.FindAll(item => item.Key.Contains(arg.QueryString,System.StringComparison.CurrentCultureIgnoreCase));
        foreach (var data in finds)
        {
            Items.Add(data);
        }
    }
    
    await Task.Delay(Random.Shared.Next(1200,3000));
    IsLoading = false;
}
```
