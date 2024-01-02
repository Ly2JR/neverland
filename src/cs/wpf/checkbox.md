---
title: 自定义Checkbox
date: 2023-11-08
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - 自定义控件
---

自定义控件多种多样

## 改颜色

![改颜色](https://nas.ilyl.life:8092/wpf/controls/checkbox1.gif)

这里使用两个Border来实现Checkbox的外观和选中的效果

最外层的Border样式

```xml
 <Border
     Width="14"
     Height="14"
     Margin="1"
     Background="#4F9BFF"
     BorderBrush="#4F9BFF">
 </Border>
```

最里层的"√"也是使用Border,并对它进行旋转

```xml
<Border
    Width="11"
    Height="5"
    BorderBrush="White"
    BorderThickness="0,2,2,0">
    <Border.RenderTransform>
        <TransformGroup>
            <RotateTransform Angle="130" />
            <TranslateTransform X="11" Y="-1" />
        </TransformGroup>
    </Border.RenderTransform>
</Border>
```

模板样式

```xml
<Border
    Width="14"
    Height="14"
    Margin="1"
    Background="#4F9BFF"
    BorderBrush="#4F9BFF">
    <Border
        Width="11"
        Height="5"
        BorderBrush="White"
        BorderThickness="0,2,2,0">
        <Border.RenderTransform>
            <TransformGroup>
                <RotateTransform Angle="130" />
                <TranslateTransform X="11" Y="-1" />
            </TransformGroup>
        </Border.RenderTransform>
    </Border>
</Border>
```

Checkbox最终重写模板

```xml
<CheckBox>
    <CheckBox.Style>
        <Style TargetType="{x:Type CheckBox}">
            <Setter Property="Width" Value="14" />
            <Setter Property="Height" Value="14" />
            <Setter Property="Cursor" Value="Hand" />
            <Setter Property="Template">
                <Setter.Value>
                    <ControlTemplate TargetType="CheckBox">
                        <Border
                            x:Name="PART_BORDER"
                            Width="{TemplateBinding Width}"
                            Height="{TemplateBinding Height}"
                            Background="White"
                            BorderBrush="#4F9BFF"
                            BorderThickness="1">
                            <Border
                                x:Name="PART_SELECTED"
                                Width="10"
                                Height="5"
                                BorderBrush="White"
                                BorderThickness="0,2,2,0"
                                Visibility="Collapsed">
                                <Border.RenderTransform>
                                    <TransformGroup>
                                        <RotateTransform Angle="130" />
                                        <TranslateTransform X="{Binding Path=Width, ElementName=PART_SELECTED}" Y="-1" />
                                    </TransformGroup>
                                </Border.RenderTransform>
                            </Border>
                        </Border>
                        <ControlTemplate.Triggers>
                            <Trigger Property="IsChecked" Value="True">
                                <Setter TargetName="PART_BORDER" Property="Background" Value="#4F9BFF" />
                                <Setter TargetName="PART_BORDER" Property="BorderThickness" Value="0" />
                                <Setter TargetName="PART_SELECTED" Property="Visibility" Value="Visible" />
                            </Trigger>
                        </ControlTemplate.Triggers>
                    </ControlTemplate>
                </Setter.Value>
            </Setter>
        </Style>
    </CheckBox.Style>
</CheckBox>
```
