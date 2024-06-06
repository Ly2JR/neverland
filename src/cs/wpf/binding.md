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

![绑定控件值](https://nas.ilyl.life:8092/wpf/binding/binding1.gif)

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

![双向绑定控件值](https://nas.ilyl.life:8092/wpf/binding/binding2.gif)

当添加`Binding`的[Mode](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.binding.mode?view=windowsdesktop-8.0#system-windows-data-binding-mode)和[UpdateSourceTrigger](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.binding.updatesourcetrigger?view=windowsdesktop-8.0)属性时,实现了双向`Binding`

## 静态绑定

```xml
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

### 绑定自身

```xml
<TextBlock Width="160" Height="160" Background="Orange" Text="{Binding RelativeSource={RelativeSource Mode=Self}, Path=Background}" />
```

![绑定自身](https://nas.ilyl.life:8092/wpf/binding/binding4.png)

### 绑定父元素

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

![绑定父元素](https://nas.ilyl.life:8092/wpf/binding/binding5.png)

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

![绑定上一个数据](https://nas.ilyl.life:8092/wpf/binding/binding6.png)

## 绑定模板

```xml{4-7,18-20}
<Label
    Width="100"
    Height="50"
    HorizontalContentAlignment="Center"
    VerticalContentAlignment="Center"
    BorderBrush="Purple"
    BorderThickness="2"
    Content="示例文本"
    Foreground="Orange">
    <Label.Style>
        <Style TargetType="{x:Type Label}">
            <Setter Property="Template">
                <Setter.Value>
                    <ControlTemplate TargetType="{x:Type Label}">
                        <Border
                            Padding="2"
                            BorderBrush="AliceBlue"
                            BorderThickness="{Binding RelativeSource={RelativeSource Mode=FindAncestor, AncestorType={x:Type Label}}, Path=BorderThickness}">
                            <Border BorderBrush="{TemplateBinding BorderBrush}" BorderThickness="{TemplateBinding BorderThickness}">
                                <ContentPresenter HorizontalAlignment="{Binding RelativeSource={RelativeSource Mode=TemplatedParent}, Path=HorizontalContentAlignment}" />
                            </Border>
                        </Border>
                    </ControlTemplate>
                </Setter.Value>
            </Setter>
        </Style>
    </Label.Style>
</Label>
```

![模板绑定](https://nas.ilyl.life:8092/wpf/binding/binding7.png)

`第4行高亮`：设置了左右居中，重写了模板，20行处使用查找绑定`TemplatedParent`进行关联

`第5行高亮`：设置了上下居中，重写了模板，但是没有任何关联，因此失效

`第6、7行高亮`：设置`Label`的边框颜色和宽度,并使用`TemplateBinding`应用到了新模板上，18行代码处

`第18行高亮`：使用使用查找绑定边框宽度，与`TemplateBinding`相比代码量高了很多

`第19行高亮`：使用使用`TemplateBinding`绑定边框宽度，与`FindAncestor`相比代码少了很多

`第20行高亮`：使用使用`TemplatedParent`绑定边框宽度，与`TemplateBinding`相比代码量多了一些，但是这才是原型，简化后就是[TemplateBinding](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/advanced/templatebinding-markup-extension?view=netframeworkdesktop-4.8)

## [Converter](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/data/how-to-convert-bound-data?view=netframeworkdesktop-4.8)

能直接`bingding`数据的地方不多，除了重写模板，大部分都需要`Converter`进行数据转换处理。

```xml
<UserControl.Resources>
    <x:Array x:Key="demo" Type="{x:Type vm:KeyValueItem}">
        <vm:KeyValueItem Key="Red" Value="Red" />
        <vm:KeyValueItem Key="Orange" Value="Orange" />
        <vm:KeyValueItem Key="Purple" Value="Purple" />
    </x:Array>
</UserControl.Resources>
<StackPanel Orientation="Vertical">
    <Border Height="30" Background="{Binding ElementName=Colors, Path=SelectedItem.Value}" />
    <ListBox
        x:Name="Colors"
        DisplayMemberPath="Key"
        ItemsSource="{StaticResource demo}"
        SelectedValuePath="Value" />
</StackPanel>
```

![转换器](https://nas.ilyl.life:8092/wpf/binding/binding8.gif)

这里直接能用`Red`来显示具体颜色，是系统自动做了处理，将颜色值改为数字,并添加转换器。

```xml{4-7,11,12}
 <UserControl.Resources>
     <converter:ColorConverter x:Key="ColorConverter" />
     <x:Array x:Key="demo" Type="{x:Type vm:KeyValueItem}">
         <vm:KeyValueItem Key="Unknow" Value="000" />
         <vm:KeyValueItem Key="Red" Value="111" />
         <vm:KeyValueItem Key="Orange" Value="222" />
         <vm:KeyValueItem Key="Purple" Value="333" />
     </x:Array>
 </UserControl.Resources>
 <StackPanel Orientation="Vertical">
     <Border Height="30" Background="{Binding ElementName=Colors, Path=SelectedItem.Value, Converter={StaticResource ColorConverter}}" />
     <TextBlock Text="{Binding ElementName=Colors, Path=SelectedItem.Value}" />
     <ListBox
         x:Name="Colors"
         DisplayMemberPath="Key"
         ItemsSource="{StaticResource demo}"
         SelectedValuePath="Value" />
 </StackPanel>
```

```cs{0}
public class ColorConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        if(value is string color)
        {
            switch (color)
            {
                case "111":
                    return Brushes.Red;
                case "222":
                    return Brushes.Orange;
                case "333":
                    return Brushes.Purple;
            }
        }
        return Brushes.Black;
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}
```

![自定义转换器](https://nas.ilyl.life:8092/wpf/binding/binding9.gif)

::: tip
自定义转换器需要添加到`xmlns`声明上，才能在`XAML`里使用
:::

`第11行代码`：在绑定后加了一个`Converter`，将自定义转换器绑定上,根据选中的`Value`值转换成具体的颜色

`第12行代码`：显示了选中的具体`Value`值，是无法显示颜色的，因此加上转换器进行转换。

## [MultiBinding](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.multibinding?view=windowsdesktop-8.0)

多重绑定常与转换器结合使用，将多个值转换为目标单一值。

具体示例可以参考[按钮权限](./static-button-auth.md)

## [IMultiValueConverter](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.imultivalueconverter?view=windowsdesktop-8.0&viewFallbackFrom=net-8.0)

存在`Binding`、`MultiBinding`、`IValueConverter`，那么肯定也存在`IMultiValueConverter`。

具体示例可以参考[按钮权限](./static-button-auth.md)
