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