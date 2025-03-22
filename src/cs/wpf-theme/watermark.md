---
title: Watermark 水印
date: 2024-09-09
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - WPF主题控件
---

## 基础用法

![watermark](https://image.ilyl.life:8443/wpf-theme/watermark/watermark.png)

```xml
<Grid nl:Watermark.IsShow="True" />
```

## 图片水印

![watermark](https://image.ilyl.life:8443/wpf-theme/watermark/watermark-image.png)

```xml
 <Grid
     nl:Watermark.ContentHeight="80"
     nl:Watermark.ContentWidth="180"
     nl:Watermark.FontColor="Orange"
     nl:Watermark.FontSize="15"
     nl:Watermark.FontStyle="Italic"
     nl:Watermark.FontWeight="Bold"
     nl:Watermark.Gap="100"
     nl:Watermark.Geometry="{StaticResource watermark_icon}"
     nl:Watermark.IsShow="True"
     nl:Watermark.Rotate="23">
     <TextBlock
         HorizontalAlignment="Center"
         VerticalAlignment="Center"
         FontSize="48"
         Foreground="Blue"
         Text="Hello World" />
 </Grid>
```