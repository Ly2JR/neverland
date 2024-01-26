---
title: 墨迹画布
date: 2023-08-11
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
---

WPF提供[数字墨迹](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/advanced/getting-started-with-ink?view=netframeworkdesktop-4.8)，简单几行代码就可以运行，[源代码地址](https://github.com/Ly2JR/wpf-samples/tree/main/src/InkCanvasDemo)

```xml
 <InkCanvas/>
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

## [编辑模式](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.controls.inkcanvas.editingmode?view=windowsdesktop-7.0)

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
        Width="100"
        Height="100"
        ItemsSource="{StaticResource MyDrawingAttributes}" />
    <ListBox
        Name="lbEditingMode"
        Grid.Column="1"
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

![画笔](https://nas.ilyl.life:8092/wpf/canvas_4.gif =420x200)

## [手写识别](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/advanced/handwriting-recognition?view=netframeworkdesktop-4.8)

::: tip
`Microsoft.Ink.dll`在`\Program Files\Common Files\Microsoft Shared\Ink`中找到
:::

```cs
using Microsoft.Ink;

using (MemoryStream ms = new MemoryStream())
{
    theInkCanvas.Strokes.Save(ms);
    var myInkCollector = new InkCollector();
    var ink = new Ink();
    ink.Load(ms.ToArray());

    using (RecognizerContext context = new RecognizerContext())
    {
        if (ink.Strokes.Count > 0)
        {
            context.Strokes = ink.Strokes;
            RecognitionStatus status;

            var result = context.Recognize(out status);

            if (status == RecognitionStatus.NoError)
                textBox1.Text = result.TopString;
            else
                MessageBox.Show("Recognition failed");
        }
        else
        {
            MessageBox.Show("No stroke detected");
        }
    }
}
```

![手写识别](https://nas.ilyl.life:8092/wpf/canvas_5.gif =420x200)

## 画直线

1. 设置InvCanvas.EditingModel=None
2. 使用MVVM模式时，引入`Microsoft.Xaml.Behaviors.Wpf`包，将代码迁移到ViewModel中
3. 需要三个基本事件`MouseLeftButtonUp`、`MouseMove`、`MouseLeftButtonDown`,由于MouseLeftButtonDown不触发，调整为PreviewMouseLeftButtonDown。

```xml
<InkCanvas
    EditingMode="None">
    <i:Interaction.Triggers>
        <i:EventTrigger EventName="PreviewMouseLeftButtonDown">
            <i:CallMethodAction MethodName="PreviewMouseLeftButtonDown" TargetObject="{Binding}" />
        </i:EventTrigger>

        <i:EventTrigger EventName="MouseLeftButtonUp">
            <i:CallMethodAction MethodName="MouseLeftButtonUp" TargetObject="{Binding}" />
        </i:EventTrigger>

        <i:EventTrigger EventName="MouseMove">
            <i:CallMethodAction MethodName="MouseMove" TargetObject="{Binding}" />
        </i:EventTrigger>
    </i:Interaction.Triggers>
</InkCanvas>
```

`36-40行代码`：这里用来处理画直线、箭头、矩形、圆形的部分，其余一致

```cs{36-40}
  /// <summary>
  /// 起始点
  /// </summary>
  private Point _startPoint;
  /// <summary>
  /// 最后的画笔
  /// </summary>
  private Stroke? _drawerLastStroke=null;
  /// <summary>
  /// 开始绘画标识
  /// </summary>
  private bool _isDrawing=false;

  public void PreviewMouseLeftButtonDown(object sender, MouseButtonEventArgs e)
  {
      if (sender is InkCanvas main&&e.LeftButton==MouseButtonState.Pressed)
      {
          _startPoint = e.GetPosition(main);
          _isDrawing = true;
          _drawerLastStroke = null;
      }
  }

  public void MouseLeftButtonUp(object sender, MouseButtonEventArgs e)
  {
      _isDrawing = false;
  }

  public void MouseMove(object sender, MouseEventArgs e)
  {
      if (!_isDrawing) return;
      if (sender is InkCanvas main&&e.LeftButton==MouseButtonState.Pressed)
      {
          var endPoint = e.GetPosition(main);

          List<Point> pointList = new List<Point>
          {
              new Point(_startPoint.X, _startPoint.Y),
              new Point(endPoint.X, endPoint.Y),
          };

          StylusPointCollection point = new StylusPointCollection(pointList);
          var stroke = new Stroke(point) ;

          if (_drawerLastStroke != null)
          {
              main.Strokes.Remove(_drawerLastStroke);
          }

          main.Strokes.Add(stroke);

          _drawerLastStroke = stroke;
      }
  }
```

![画直线](https://nas.ilyl.life:8092/wpf/canvas_6.gif =420x200)

## 画箭头

画箭头与画直线大部分重合，只要在终点出处理画出箭头的形状即可。

```cs
 double w = 15, h = 15;
 double theta = Math.Atan2(_startPoint.Y - endPoint.Y, _startPoint.X - endPoint.X);
 double sint = Math.Sin(theta);
 double cost = Math.Cos(theta);

 List<Point> pointList = new List<Point>
 {
     new Point(_startPoint.X, _startPoint.Y),
     new Point(endPoint.X , endPoint.Y),
     new Point(endPoint.X + (w*cost - h*sint), endPoint.Y + (w*sint + h*cost)),
     new Point(endPoint.X,endPoint.Y),
     new Point(endPoint.X + (w*cost + h*sint), endPoint.Y - (h*cost - w*sint)),
 };
```

![画箭头](https://nas.ilyl.life:8092/wpf/canvas_7.gif =420x200)

## 画矩形

画矩形与画直线大部分重合，只要在终点出处理画出矩形的形状即可。

```cs
 List<Point> pointList = new List<Point>
 {
     new Point(_startPoint.X, _startPoint.Y),
     new Point(_startPoint.X, endPoint.Y),
     new Point(endPoint.X, endPoint.Y),
     new Point(endPoint.X, _startPoint.Y),
     new Point(_startPoint.X, _startPoint.Y),
 };
```

![画箭头](https://nas.ilyl.life:8092/wpf/canvas_8.gif =420x200)

## 画圆形

画圆形与画直线大部分重合，只要在终点出处理画出圆形的形状即可。

```cs
 double a = 0.5 * (endPoint.X - _startPoint.X);
 double b = 0.5 * (endPoint.Y - _startPoint.Y);
 List<Point> pointList = new List<Point>();
 for (double r = 0; r <= 2 * Math.PI; r = r + 0.01)
 {
     pointList.Add(new Point(0.5 * (_startPoint.X + endPoint.X) + a * Math.Cos(r), 0.5 * (_startPoint.Y + endPoint.Y) + b * Math.Sin(r)));
 }
```

![画圆形](https://nas.ilyl.life:8092/wpf/canvas_9.gif =420x200)

## 添加文本

添加文本与画矩形大部分重合，只要在`MouseLeftButtonUp`里处理添加文本框显示即可。

```cs
  public void MouseLeftButtonUp(object sender, MouseButtonEventArgs e)
  {
      if (sender is InkCanvas main)
      {
          main.Strokes.Remove(_drawerLastStroke);
          var endPoint = e.GetPosition(main);
          var textBox = new TextBox()
          {
              TextWrapping= TextWrapping.Wrap,
          };
          textBox.Width = Math.Abs(endPoint.X - _startPoint.X);
          textBox.Height = Math.Abs(endPoint.Y - _startPoint.Y);
          if (textBox.Width <= 100 || textBox.Height <= 40)
          {
              textBox.Width = 100;
              textBox.Height = 40;
          }
          InkCanvas.SetLeft(textBox, Math.Min(_startPoint.X, endPoint.X));
          InkCanvas.SetTop(textBox, Math.Min(_startPoint.Y, endPoint.Y));
          main.Children.Add(textBox);
          textBox.Focus();
      }

      _isDrawing = false;
      _drawerLastStroke = null;
  }
```

![添加文本](https://nas.ilyl.life:8092/wpf/canvas_10.gif =420x200)

## 保存画布

```cs
 var saveFileDialog = new Microsoft.Win32.SaveFileDialog()
 {
     DefaultExt =".png" ,
     Filter = "PNG(*.png)|*png",
 };
 var dialog= saveFileDialog.ShowDialog();
 if (dialog != true) return;

 using (var file = saveFileDialog.OpenFile())
 {
     var rtb = new RenderTargetBitmap((int)main.ActualWidth, (int)main.ActualHeight, 96d, 96d, PixelFormats.Pbgra32);
     rtb.Render(main);
     
     var encoder = new PngBitmapEncoder();
     encoder.Frames.Add(BitmapFrame.Create(rtb));
     encoder.Save(file);
 }
```
