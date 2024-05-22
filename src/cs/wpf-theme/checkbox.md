---
title: CheckBox 多选框
date: 2024-05-21
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

单独使用可以表示两种状态之间的切换。

`CheckBoxGroup`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用`Value`绑定`string[]` 类型的变量即可

![checkbox](https://nas.ilyl.life:8092/wpf-theme/checkbox/checkbox.gif)

```xml
<CheckBox nl:CheckBoxAssist.Size="Large" Content="Option 1" />
<CheckBox nl:CheckBoxAssist.Size="Large" Content="Option 2"/>
<CheckBox Content="Option 1" />
<CheckBox Content="Option 2" />
<CheckBox nl:CheckBoxAssist.Size="Small" Content="Option 1" IsEnabled="False" />
<CheckBox nl:CheckBoxAssist.Size="Small" Content="Option 2" IsEnabled="False" />
```

## 禁用状态

多选框不可用状态

设置`IsEnabled`属性即可

![isenabled](https://nas.ilyl.life:8092/wpf-theme/checkbox/checkbox-isenabled.gif)

```xml
<CheckBox Content="Disabled" IsEnabled="False" />
<CheckBox Content="Not disabled" />
```

## 中间状态

设置`IsThreeState`属性为`True`

![isthreestate](https://nas.ilyl.life:8092/wpf-theme/checkbox/checkbox-isthreestate.gif)

```xml
<CheckBox
    Content="Check All"
    IsChecked="{Binding IsChecked}"
    IsThreeState="True" />
<nl:CheckBoxGroup Grid.Row="1" Value="{Binding CheckBoxGroupValues}">
    <i:Interaction.Triggers>
        <i:EventTrigger EventName="Change">
            <i:InvokeCommandAction Command="{Binding CheckBoxGroupChangeCommand}" PassEventArgsToCommand="True" />
        </i:EventTrigger>
    </i:Interaction.Triggers>
    <CheckBox Content="Shanghai" />
    <CheckBox Content="Beijing" />
    <CheckBox Content="Guangzhou" />
    <CheckBox Content="Shenzhen" />
</nl:CheckBoxGroup>
```

```cs
[ObservableProperty]
private bool? _isChecked;

[ObservableProperty]
private string[]? _checkBoxGroupValues;

partial void OnIsCheckedChanged(bool? value)
{
    if(value.HasValue&& value.Value == true)
    {
        CheckBoxGroupValues = new string[4] { "Shanghai", "Beijing", "Guangzhou", "Shenzhen" };
    }
    else
    {
        CheckBoxGroupValues = new string[4];
    }
}

[RelayCommand]
private async Task CheckBoxGroupChange(CheckBoxGroupEventArgs? e)
{
    if (e is null) return;
    if(e.Values is not null )
    {
        if (e.Values.Length >= 0 && e.Values.Length < 4)
        {
            IsChecked = null;
        }
        else if (e.Values.Length == 4)
        {
            IsChecked = true;
        }
    }
    await Task.CompletedTask;
}
```

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

![checkboxgroup](https://nas.ilyl.life:8092/wpf-theme/checkbox/checkboxgroup.gif)

```xml
<x:Array x:Key="CheckBoxGroupValue" Type="{x:Type system:String}">
    <system:String>Option A</system:String>
    <system:String>selected and disabled</system:String>
</x:Array>

<nl:CheckBoxGroup
    Value="{StaticResource CheckBoxGroupValue}">
    <CheckBox Content="Option A" />
    <CheckBox Content="Option B" />
    <CheckBox Content="Option C" />
    <CheckBox Content="disabled" IsEnabled="False" />
    <CheckBox Content="selected and disabled" IsEnabled="False" />
</nl:CheckBoxGroup>
```

## 按钮样式

按钮样式的多选组合

对`CheckBox`控件，添加`CheckBoxAsButtonStyle`样式应用即可。

![button](https://nas.ilyl.life:8092/wpf-theme/checkbox/checkbox-button.gif)

```xml
<nl:CheckBoxGroup Size="Large">
    <CheckBox Content="Shanghai" Style="{StaticResource CheckBoxAsButtonStyle}" />
    <CheckBox Content="Beijing" Style="{StaticResource CheckBoxAsButtonStyle}" />
    <CheckBox Content="Guangzhou" Style="{StaticResource CheckBoxAsButtonStyle}" />
    <CheckBox Content="Shenzhen" Style="{StaticResource CheckBoxAsButtonStyle}" />
</nl:CheckBoxGroup>

<nl:CheckBoxGroup>
    <CheckBox Content="Shanghai" Style="{StaticResource CheckBoxAsButtonStyle}" />
    <CheckBox Content="Beijing" Style="{StaticResource CheckBoxAsButtonStyle}" />
    <CheckBox Content="Guangzhou" Style="{StaticResource CheckBoxAsButtonStyle}" />
    <CheckBox Content="Shenzhen" Style="{StaticResource CheckBoxAsButtonStyle}" />
</nl:CheckBoxGroup>

<nl:CheckBoxGroup Size="Small">
    <CheckBox Content="Shanghai" Style="{StaticResource CheckBoxAsButtonStyle}" />
    <CheckBox Content="Beijing" Style="{StaticResource CheckBoxAsButtonStyle}" />
    <CheckBox Content="Guangzhou" Style="{StaticResource CheckBoxAsButtonStyle}" />
    <CheckBox Content="Shenzhen" Style="{StaticResource CheckBoxAsButtonStyle}" />
</nl:CheckBoxGroup>
```

## 带有边框

通过`CheckBoxAssist`附件设置`IsBorder`属性可以渲染为带有边框的多选框。

![isborder](https://nas.ilyl.life:8092/wpf-theme/checkbox/checkbox-isborder.gif)

```xml
<CheckBox nl:CheckBoxAssist.IsBorder="True" nl:CheckBoxAssist.Size="Large" Content="Option 1" />
<CheckBox nl:CheckBoxAssist.IsBorder="True" nl:CheckBoxAssist.Size="Large" Content="Option 2" />
<CheckBox nl:CheckBoxAssist.IsBorder="True" Content="Option 1" />
<CheckBox nl:CheckBoxAssist.IsBorder="True" Content="Option 2" />
<CheckBox nl:CheckBoxAssist.IsBorder="True" nl:CheckBoxAssist.Size="Small" Content="Option 1" IsEnabled="False" />
<CheckBox nl:CheckBoxAssist.IsBorder="True" nl:CheckBoxAssist.Size="Small" Content="Option 2" IsEnabled="False" />
```