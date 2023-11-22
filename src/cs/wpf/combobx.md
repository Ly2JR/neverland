---
title: ComboBox
date: 2023-11-22
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - Behaviors
---

ComboxBox如何在VM中触发事件。

引入[Microsoft.Xaml.Behaviors.Wpf](https://github.com/Microsoft/XamlBehaviorsWpf)

在当前根节点下添加如下声明`xmlns:i="http://schemas.microsoft.com/xaml/behaviors"`

```xml
<ComboBox x:Name="ComBo"
        DisplayMemberPath="Text"
        ItemsSource="{Binding Items}">
    <i:Interaction.Triggers>
        <i:EventTrigger EventName="SelectionChanged">
            <i:InvokeCommandAction Command="{Binding TextChanged}" CommandParameter="{Binding ElementName=ComBo, Path=SelectedItem}" />
        </i:EventTrigger>
    </i:Interaction.Triggers>
</ComboBox>
```
