---
title: 字符格式化
date: 2023-06-28
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
---

[StringFormat](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.bindingbase.stringformat?view=windowsdesktop-7.0)和[ContentStringFormat](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.controls.contentcontrol.contentstringformat?view=windowsdesktop-7.0)的区别，示例代码高亮显示。

![格式显示](https://nas.ilyl.life:8092/wpf/stringformat.png =420x200)

代码示例:

```xaml {34,36}
<Window
    xmlns:sys="clr-namespace:System;assembly=mscorlib"
    ...>
    <Window.Resources>
        <sys:String x:Key="k1">1000</sys:String>
        <sys:String x:Key="k2">2000</sys:String>
    </Window.Resources>
    <Grid>
        <Grid.RowDefinitions>
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="30" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
        </Grid.RowDefinitions>
        <TextBlock Grid.Row="0" Text="{StaticResource k1}" />
        <TextBlock Grid.Row="1">
            <TextBlock.Text>
                <MultiBinding StringFormat="{}{0} -- {1}">
                    <Binding Source="{StaticResource k1}" />
                    <Binding Source="{StaticResource k2}" />
                </MultiBinding>
            </TextBlock.Text>
        </TextBlock>
        <TextBlock Grid.Row="2">
            <Run Text="{StaticResource k1}" />
            <Run Text="--" />
            <Run Text="{StaticResource k2}" />
        </TextBlock>
        <TextBlock Grid.Row="3" Text="{Binding Source={StaticResource k1}, StringFormat={}{0} -- 123}" />
        <Label Grid.Row="5" Content="{Binding Source={StaticResource k2}, StringFormat={}{0}}" />
        <Label Grid.Row="6" Content="{Binding Source={StaticResource k2}, StringFormat={}{0}---321}" />
        <Label
            Grid.Row="7"
            Content="{Binding Source={StaticResource k2}}"
            ContentStringFormat="{}{0}---321" />
    </Grid>
</Window>
```
