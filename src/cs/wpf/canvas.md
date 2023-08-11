---
title: 墨迹画布
date: 2023-08-11
editLink: false
footer: false
isOriginal: true
dir:
    order: 9
order: 9
category:
  - C#
tag:
  - WPF
---

WPF提供[数字墨迹](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/advanced/getting-started-with-ink?view=netframeworkdesktop-4.8),简单几行代码就可以运行

```xml
 <Grid>
     <InkCanvas/>
 </Grid>
```

![InkCanvas](https://nas.ilyl.life:8092/wpf/canvas_1.gif =420x200)

## 右击放大

```xml
 <Grid>
     <InkCanvas Name="myInkCanvas" MouseRightButtonUp="RightMouseUpHandler"/>
 </Grid>
```

```cs
 private void RightMouseUpHandler(object sender,
                          System.Windows.Input.MouseButtonEventArgs e)
 {
     Matrix m = new Matrix();
     m.Scale(1.1d, 1.1d);
     ((InkCanvas)sender).Strokes.Transform(m, true);
 }
```

![放大](https://nas.ilyl.life:8092/wpf/canvas_2.gif =420x200)

## 编辑模式

[EditingModel](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.controls.inkcanvas.editingmode?view=windowsdesktop-7.0)提供编辑模式

```xml
<Window.Resources>
    <local:NameList x:Key="NameListData" />
</Window.Resources>
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="*" />
        <RowDefinition Height="6*" />
    </Grid.RowDefinitions>
    <StackPanel VerticalAlignment="Center" Orientation="Horizontal">
        <TextBlock HorizontalAlignment="Center" Text="画笔:" />
        <ComboBox
            Width="300"
            ItemsSource="{Binding Source={StaticResource NameListData}}"
            SelectedItem="{Binding EditingModel}" />
    </StackPanel>
    <InkCanvas
        Name="myInkCanvas"
        Grid.Row="1"
        EditingMode="{Binding EditingModel}">
        <TextBlock>Show text here.</TextBlock>
    </InkCanvas>
</Grid>
```

```cs
 public class CanvasWindowViewModel : INotifyPropertyChanged
 {
     public event PropertyChangedEventHandler PropertyChanged;

     private string _editingModel;

     public string EditingModel { get { return _editingModel; } set { _editingModel = value;
             PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(EditingModel)));
         } }
 }
```

```cs
public class NameList:ObservableCollection<string>{
    public NameList():base() {
        var names = typeof(InkCanvasEditingMode).GetFields(BindingFlags.Public | BindingFlags.Static).Select(f => f.Name);
        foreach (var name in names)
        {
            Add(name);
        }
    }
}
```

![EditingModel](https://nas.ilyl.life:8092/wpf/canvas_3.gif =420x200)

## [画笔](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.controls.inkcanvas.defaultdrawingattributes?view=windowsdesktop-7.0)

```xml
<UserControl.Resources>
    <ResourceDictionary>
        <x:Array x:Key="MyEditingModes" Type="{x:Type InkCanvasEditingMode}">
            <x:Static Member="InkCanvasEditingMode.Ink" />
            <x:Static Member="InkCanvasEditingMode.Select" />
            <x:Static Member="InkCanvasEditingMode.EraseByPoint" />
            <x:Static Member="InkCanvasEditingMode.EraseByStroke" />
        </x:Array>
        <x:Array x:Key="MyDrawingAttributes" Type="{x:Type DrawingAttributes}">
            <DrawingAttributes
                Width="3"
                Height="3"
                FitToCurve="true"
                Color="Black" />
            <DrawingAttributes
                Width="5"
                Height="5"
                FitToCurve="false"
                Color="Blue" />
            <DrawingAttributes
                Width="7"
                Height="7"
                FitToCurve="true"
                Color="Red" />
            <DrawingAttributes
                Width="5"
                Height="5"
                FitToCurve="false"
                Color="SpringGreen" />
            <DrawingAttributes
                Width="10"
                Height="30"
                IgnorePressure="True"
                IsHighlighter="True"
                StylusTip="Rectangle"
                Color="Orchid" />
        </x:Array>
        <DataTemplate DataType="{x:Type DrawingAttributes}">
            <Border Width="80" Height="{Binding Path=Height}">
                <Border.Background>
                    <SolidColorBrush Color="{Binding Path=Color}" />
                </Border.Background>
            </Border>
        </DataTemplate>
    </ResourceDictionary>
</UserControl.Resources>
<Grid>
    <Grid.ColumnDefinitions>
        <ColumnDefinition Width="2*" />
        <ColumnDefinition Width="2*" />
        <ColumnDefinition Width="11*" />
    </Grid.ColumnDefinitions>
    <ListBox
        Name="lbDrawingAttributes"
        Grid.Column="0"
        Canvas.Left="450"
        Canvas.Top="150"
        Width="100"
        Height="100"
        ItemsSource="{StaticResource MyDrawingAttributes}" />
    <ListBox
        Name="lbEditingMode"
        Grid.Column="1"
        Canvas.Left="450"
        Canvas.Top="0"
        Width="100"
        Height="100"
        ItemsSource="{StaticResource MyEditingModes}" />
    <InkCanvas
        Grid.Column="2"
        Background="DarkSlateBlue"
        DefaultDrawingAttributes="{Binding ElementName=lbDrawingAttributes, Path=SelectedItem}"
        EditingMode="{Binding ElementName=lbEditingMode, Path=SelectedItem}">
    </InkCanvas>
</Grid>
```

![DrawingAttributes](https://nas.ilyl.life:8092/wpf/canvas_4.gif =420x200)
