---
title: 按钮组权限
date: 2024-01-03
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - 权限
---

在WPF中按钮组常用，按钮组权限相应的也需要。

除了通过后台或者代码的方式实现之外，也可以使用转换器的方式实现，对于按钮不多的时候非常适用。

![按钮权限切换](https://nas.ilyl.life:8092/wpf/button-group-auth.gif)

以常见的操作按钮`新增`、`修改`、`删除`、`保存`、`查询`五个按钮为例。

### 区分按钮状态

首先区分这些按钮有哪几种状态，这里只有`正常`和`编辑`两种状态。

```cs
public enum ButtonGroupEnum
{
    Normal,
    Edit,
}
```

### 区分每种状态下的按钮状态

可用：蓝色边框
禁用：红色边框

1. 正常状态

    可用： `新增`、`编辑`、`删除`、`查询`
    禁用： `保存`

2. 编辑状态

    可用： `保存`
    禁用： `新增`、`编辑`、`删除`、`查询`

### 设置按钮权限

1. 设置按钮样式

    ```xml
    <Style x:Key="ButtonStyle" TargetType="{x:Type Button}">
        <Setter Property="Foreground" Value="#1371c3" />
        <Setter Property="Cursor" Value="Hand" />
        <Setter Property="HorizontalAlignment" Value="Center" />
        <Setter Property="VerticalAlignment" Value="Center" />
        <Setter Property="Margin" Value="5,0" />
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="{x:Type Button}">
                    <Border
                        x:Name="PART_Border"
                        Width="32"
                        Height="28"
                        BorderBrush="#1371c3"
                        BorderThickness="1"
                        CornerRadius="3">
                        <ContentPresenter HorizontalAlignment="{TemplateBinding HorizontalAlignment}" VerticalAlignment="{TemplateBinding VerticalAlignment}" />
                    </Border>
                    <ControlTemplate.Triggers>
                        <Trigger Property="IsEnabled" Value="False">
                            <Setter TargetName="PART_Border" Property="BorderBrush" Value="red" />
                            <Setter Property="TextElement.Foreground" Value="Red" />
                        </Trigger>
                    </ControlTemplate.Triggers>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>
    ```

2. 设置按钮转换器

    这里使用`IMultiValueConverter`进行转换，控制按钮的`IsEnabled`属性。

    因为这里只有两种状态，需要三个参数：

    第一个参数是当前按钮组的状态(`正常`或`编辑`)

    第二个参数是当`正常`状态时，控制按钮的`IsEnabled`状态

    第三个参数是当`编辑`状态时，控制按钮的`IsEnabled`状态

    ```cs
    public class ButtonGroupConverter : IMultiValueConverter
    {
        public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
        {
            if (values[0] is ButtonGroupEnum status)
            {
                switch (status)
                {
                    case ButtonGroupEnum.Normal:
                        if (values[1] is string normal)
                        {
                            if (normal == "1") return true;
                        }
                        break;
                    case ButtonGroupEnum.Edit:
                        if (values[2] is string edit)
                        {
                            if (edit == "1") return true;
                        }
                        break;
                }
            }
            return false;
        }

        public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
    ```

3. 设置按钮组对于的VM

    ```cs
    public class ButtonGroupViewModel : INotifyPropertyChanged
    {
        private ButtonGroupEnum _status = ButtonGroupEnum.Normal;
        public ButtonGroupEnum Status { get { return _status; } set { _status = value;
                OnPropertyChanged(nameof(Status));
            } }

        public ICommand ButtonRunCommand { get; private set; }

        public ButtonGroupViewModel()
        {
            ButtonRunCommand = new RelayCommand<ButtonGroupEnum>((status) =>
            {
                Status = status;
            }, (s) => { return true; });
        }

        public event PropertyChangedEventHandler? PropertyChanged;
        private void OnPropertyChanged(string propName)
        {
            if (this.PropertyChanged != null)
            {
                this.PropertyChanged(this, new PropertyChangedEventArgs(propName));
            }
        }
    }
    ```

4. 应用按钮组并设置权限

    ```xml
    <StackPanel Orientation="Horizontal">
        <Button
            Command="{Binding ButtonRunCommand}"
            CommandParameter="{x:Static vm:ButtonGroupEnum.Edit}"
            Style="{StaticResource ButtonStyle}">
            <Button.IsEnabled>
                <MultiBinding Converter="{StaticResource ButtonGroupConverter}">
                    <Binding Path="Status" />
                    <Binding Source="1" />
                    <Binding Source="0" />
                </MultiBinding>
            </Button.IsEnabled>
            新增
        </Button>
        <Button
            Command="{Binding ButtonRunCommand}"
            CommandParameter="{x:Static vm:ButtonGroupEnum.Normal}"
            Style="{StaticResource ButtonStyle}">
            <Button.IsEnabled>
                <MultiBinding Converter="{StaticResource ButtonGroupConverter}">
                    <Binding Path="Status" />
                    <Binding Source="1" />
                    <Binding Source="0" />
                </MultiBinding>
            </Button.IsEnabled>
            删除
        </Button>
        <Button
            Command="{Binding ButtonRunCommand}"
            CommandParameter="{x:Static vm:ButtonGroupEnum.Edit}"
            Style="{StaticResource ButtonStyle}">
            <Button.IsEnabled>
                <MultiBinding Converter="{StaticResource ButtonGroupConverter}">
                    <Binding Path="Status" />
                    <Binding Source="1" />
                    <Binding Source="0" />
                </MultiBinding>
            </Button.IsEnabled>
            修改
        </Button>
        <Button
            Command="{Binding ButtonRunCommand}"
            CommandParameter="{x:Static vm:ButtonGroupEnum.Normal}"
            Style="{StaticResource ButtonStyle}">
            <Button.IsEnabled>
                <MultiBinding Converter="{StaticResource ButtonGroupConverter}">
                    <Binding Path="Status" />
                    <Binding Source="0" />
                    <Binding Source="1" />
                </MultiBinding>
            </Button.IsEnabled>
            保存
        </Button>
        <Button
            Command="{Binding ButtonRunCommand}"
            CommandParameter="{x:Static vm:ButtonGroupEnum.Normal}"
            Style="{StaticResource ButtonStyle}">
            <Button.IsEnabled>
                <MultiBinding Converter="{StaticResource ButtonGroupConverter}">
                    <Binding Path="Status" />
                    <Binding Source="1" />
                    <Binding Source="0" />
                </MultiBinding>
            </Button.IsEnabled>
            查询
        </Button>
    </StackPanel>
    ```
