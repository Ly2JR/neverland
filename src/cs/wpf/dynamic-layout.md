---
title: 不等布局
date: 2023-10-20
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
---

WPF提供了控件样式，供自己定制化需求。

但是有个别特殊需求时，需要在重复生成时控件,显示不同的效果或者大小。

以海康视频布局，一分屏、四分屏、六分屏为例。

![不等布局](https://nas.ilyl.life:8092/wpf/hik_layout.gif =420x200)

## 通过代码方式

通过代码方式进行布局,不在WPF范围考虑之内。

## 通过固定布局的方式

通过写固定的一分屏，四分屏，六分屏三种用户控件，这种也不再考虑范围之内

## 通过Style方式

为了批量生成，利用[ItemsControl](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.controls.itemscontrol?view=windowsdesktop-7.0)或者[ListBox](https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/controls/listbox-styles-and-templates?view=netframeworkdesktop-4.8)控件进行样式调整。

因为`ListBox`带`IsSelected`属性，利用这个进行改造。

::: tip
使用了Prism
:::

1. 定义模型`VideoModel.cs`

    ```cs
    public class VideoModel:BindableBase{
        private int _index = 0;
        public int Index
        {
            get { return _index; }
            set { SetProperty(ref _index, value); }
        }

        private string _playImg = "";
        public string PlayImg
        {
            get { return _playImg; }
            set { SetProperty(ref _playImg, value); }
        }

        ...
    }
    ```

2. 绑定模型`MainViewModel.cs`

    ```cs
    public class MainViewModel{
         public ObservableCollection<VideoModel> Items { get;private set; }

         public MainViewModel(){
             Items = new ObservableCollection<VideoModel>();
         }
    }
    ```

3. 基本布局,主页面`MainView.xmal`

    ```xml
    <Grid>
        <ListBox  ItemsSource="{Binding Items}"/>
    </Grid>
    ```

4. 添加`DataTemplate`，设计显示样式

    ::: warning
    这里有两个关键点，代码高亮处。
    1. 使用`Grid`进行布局，为了切换默认图片和实际视频播放
    2. `Grid`使用了`Transparent`透明背景色，解决当选中时修改边框颜色不生效的问题
    :::

    ```xml{2}
    <DataTemplate x:Key="VideoItemTemplate" DataType="{x:Type ListBoxItem}">
        <Grid Background="Transparent">
            <TextBlock Text="{Binding Index}" />
            <Image Width="48"
                Height="48"
                HorizontalAlignment="Center"
                VerticalAlignment="Center"
                Source="{Binding PlayImg}"/>
        </Grid>
    </DataTemplate>
    ```

5. 添加`ItemsPanelTemplate`，设置Item容器

    ::: tip
    使用`Grid`作为Item的容器，并设置六行六列，正好同时满足1、4、6分屏的需求。
    :::

    ```xml
    <ItemsPanelTemplate x:Key="VideoItemPanelTemplate">
        <Grid>
            <Grid.ColumnDefinitions>
                <ColumnDefinition />
                <ColumnDefinition />
                <ColumnDefinition />
                <ColumnDefinition />
                <ColumnDefinition />
                <ColumnDefinition />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition />
                <RowDefinition />
                <RowDefinition />
                <RowDefinition />
                <RowDefinition />
                <RowDefinition />
            </Grid.RowDefinitions>
        </Grid>
    </ItemsPanelTemplate>
    ```

6. 设置`ListBoxItem`样式,添加边框及选择效果

   ```xml
    <Style x:Key="VideoItemContainerStyle" TargetType="{x:Type ListBoxItem}">
        <Setter Property="Cursor" Value="Hand" />
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="{x:Type ListBoxItem}">
                    <Border x:Name="PART_HIK_BORDER"
                            BorderBrush="{StaticResource #979797}"
                            BorderThickness="1">
                        <ContentPresenter />
                    </Border>
                    <ControlTemplate.Triggers>
                        <Trigger Property="IsSelected" Value="True">
                            <Setter TargetName="PART_HIK_BORDER" Property="BorderBrush" Value="Red" />
                        </Trigger>
                    </ControlTemplate.Triggers>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>
    ```

7. 应用`ListBox`，最终布局`MainView.xaml`

    ```xml
    <Grid>
        <ListBox ItemContainerStyle="{StaticResource VideoItemContainerStyle}"
             ItemTemplate="{StaticResource VideoItemTemplate}"
             ItemsPanel="{StaticResource VideoItemPanelTemplate}"
             ItemsSource="{Binding Items}" />
    </Grid>
    ```

8. 调试效果

   实际运行发现并没有达到要求，全部挤在了`0行0列`中。

   理论没有问题，关键是如果将每个数据模板内容，放在指定的行列中。

   只要添加几行代码进行位置绑定即可

9. 完善`ListBoxItem`样式

   ::: tip
   `Grid`的`Row`、`RowSpan`、`Column`、`ColumnSpan`为依赖属性，可以绑定VM

   `Binding`中的`Row`、`RowSpan`、`Column`、`ColumnSpan`为`VideoModel.cs`的属性。
   :::

   ```xml{2-5}
   <Style x:Key="VideoItemContainerStyle" TargetType="{x:Type ListBoxItem}">
        <Setter Property="Grid.Row" Value="{Binding Row}" />
        <Setter Property="Grid.RowSpan" Value="{Binding RowSpan}" />
        <Setter Property="Grid.Column" Value="{Binding Column}" />
        <Setter Property="Grid.ColumnSpan" Value="{Binding ColumnSpan}" />
       ...
    </Style>
   ```

## 其他方式

与通过`Grid`进行分割布局类似。也是利用`ListBox`进行改造。

问题在于如何修改每个内容的实际大小。

这个可以利用继承`Panel`类，通过`ArrangeOverride`和`MeasureOverride`方法计算，绘制出实际的大小。
