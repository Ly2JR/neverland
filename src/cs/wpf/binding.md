---
title: Binding
date: 2024-01-31
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
---

WPF中[Binding](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/data/?view=netdesktop-8.0)随处可见,简化代码量，整理一些常用的示例供参考。

## 绑定控件

```xml{2,5,6}
<Slider
    x:Name="Slider"
    Maximum="100"
    Minimum="0" />
<TextBlock Text="{Binding ElementName=Slider, Path=Value}" />
<TextBox Text="{Binding ElementName=Slider, Path=Value}" />
```

![绑定控件值](https://nas.ilyl.life:8092/wpf/binding/binding1.gif =200x200)

`TextBlock`和`TextBox`的`Text`属性`Binding`到`Slider`控件的`Value`属性。`Slider`值变动，`TextBlock`和`TextBox`的值跟着变动。

更改`TextBox`的值,`Slider`控件值并没有跟着变动。

```xml{6}
<Slider
    x:Name="Slider"
    Maximum="100"
    Minimum="0" />
<TextBlock Text="{Binding ElementName=Slider, Path=Value}" />
<TextBox Text="{Binding ElementName=Slider, Path=Value, Mode=TwoWay,UpdateSourceTrigger=PropertyChanged}" />
```

![双向绑定控件值](https://nas.ilyl.life:8092/wpf/binding/binding2.gif =200x200)

当添加`Binding`的[Mode](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.binding.mode?view=windowsdesktop-8.0#system-windows-data-binding-mode)和[UpdateSourceTrigger](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.binding.updatesourcetrigger?view=windowsdesktop-8.0)属性时,实现了双向`Binding`

## 静态绑定

```tip
xmlns:sys="clr-namespace:System;assembly=mscorlib"
```

```xml
<UserControl.Resources>
     <sys:String x:Key="demo">测试数据</sys:String>
     <vm:KeyValueItem
         x:Key="ItemDemo"
         Key="123"
         Value="456" />
 </UserControl.Resources>
<StackPanel Orientation="Vertical">
     <TextBlock Text="{Binding Source={StaticResource demo}}" />
     <TextBlock Text="{Binding Source={StaticResource ItemDemo}, Path=Key}" />
     <TextBlock Text="{Binding Source={StaticResource ItemDemo}, Path=Value}" />
</StackPanel>
```

![静态绑定](https://nas.ilyl.life:8092/wpf/binding/binding3.png =600x200)

[Source](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.binding.source?view=windowsdesktop-8.0)属性提供对象的绑定,一般用在静态,[Path](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.binding.path?view=windowsdesktop-8.0)绑定需要的对象属性值

## 查找绑定

[RelativeSource](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.relativesource?view=windowsdesktop-8.0)用于没有设置`x:Name`的控件，常用于自定义模板。

[FindAncestor](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.relativesourcemode?view=windowsdesktop-8.0)用于查找父元素，常与`AncestoryType`、`AncestorLevel`配合。

[AncestorType](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/advanced/relativesource-markupextension?view=netframeworkdesktop-4.8)用于查找父元素类型

[AncestorLevel](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.relativesource.ancestorlevel?view=windowsdesktop-8.0#system-windows-data-relativesource-ancestorlevel)当父元素存在多个相同的元素时，指定具体哪一个，默认0，从当前元素往上查找。

### 查找自身

```xml
<TextBlock Width="160" Height="160" Background="Orange" Text="{Binding RelativeSource={RelativeSource Mode=Self}, Path=Background}" />
```

![绑定自身](https://nas.ilyl.life:8092/wpf/binding/binding4.png =200x200)

### 查找父元素

查找绑定常用自定义控件，自定义模板常用套娃示例

```xml{14-17}
 <Border
     Width="160"
     Height="160"
     Background="Purple">
     <Border
         Width="140"
         Height="140"
         Background="Red">
         <Button
             Width="120"
             Height="120"
             Background="Orange">
             <StackPanel Orientation="Vertical">
                 <TextBlock Text="{Binding RelativeSource={RelativeSource Mode=FindAncestor, AncestorType={x:Type Button}}, Path=Background}" />
                 <TextBlock Text="{Binding RelativeSource={RelativeSource Mode=FindAncestor, AncestorType={x:Type Border}}, Path=Background}" />
                 <TextBlock Text="{Binding RelativeSource={RelativeSource Mode=FindAncestor, AncestorType={x:Type Border}, AncestorLevel=2}, Path=Background}" />
                 <TextBlock Text="{Binding RelativeSource={RelativeSource Mode=FindAncestor, AncestorType={x:Type Border}, AncestorLevel=3}, Path=Background}" />
             </StackPanel>
         </Button>
     </Border>
 </Border>
```

![绑定父元素](https://nas.ilyl.life:8092/wpf/binding/binding5.png =200x200)

`4行高亮`：查找的是`Button`所以值为`Orange`(`#FFFFA500`)

`5行高亮`：查找的是`Border`,应该是`Red`(`#FFFF0000`),但实际值为`#FFFFA500`，分析`Button`控件样式，发现内置`Border`

`6行高亮`：查找的是`Button`，`AncestorLevel`为`2`,所以值为`Red`(`#FFFF0000`)

`7行高亮`：查找的是`Button`，`AncestorLevel`为`3`,所以值为`Purple`(`#FF800080`)

## 查找上一个数据

还没有遇到使用场景...

```xml
<UserControl.Resources>
    <x:Array x:Key="demo" Type="{x:Type vm:KeyValueItem}">
        <vm:KeyValueItem Key="111" Value="444" />
        <vm:KeyValueItem Key="222" Value="555" />
        <vm:KeyValueItem Key="333" Value="666" />
    </x:Array>
</UserControl.Resources>
<ItemsControl ItemsSource="{StaticResource demo}">
    <ItemsControl.ItemTemplate>
        <DataTemplate>
            <StackPanel Orientation="Vertical">
                <TextBlock Foreground="Orange" Text="{Binding}" />
                <TextBlock Foreground="Red" Text="{Binding RelativeSource={RelativeSource Mode=PreviousData}, Path=Key}" />
            </StackPanel>
        </DataTemplate>
    </ItemsControl.ItemTemplate>
</ItemsControl>
```

![绑定上一个数据](https://nas.ilyl.life:8092/wpf/binding/binding6.png =200x200)

## [MultiBinding](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.multibinding?view=windowsdesktop-8.0)

多重绑定常与转换器结合使用，将多个值转换为目标单一值。

具体示例可以参考[按钮权限](./static-button-auth.md)
