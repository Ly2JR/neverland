---
title: 像素格式
date: 2023-06-16
dir.order: 1
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - FFMPEG
---

## 参数

`BitsPerPixel`：根据色度类型获取用于像素的位数

`NumberOfPlanes`：获取像素平面数

`Pitches`：获取每个像素平面的间距大小数组

`Lines`：获取每个像素平面的扫描线（高度）数组

`PlaneSizes`：获取像素平面大小的数组

## 像素格式

### AV_PIX_FMT_YUV420P

`I420`：与`YV12`相同，但是V和U互换

```cs
BitsPerPixel = 12;
NumberOfPlanes = 3;
Pitches = new int[3] { Width, Width / 2, Width / 2 };
Lines = new int[3] { Height, Height / 2, Height / 2 };
PlaneSizes = new int[3] { Width * Height, Width * Height / 4, Width * Height / 4 };
```

[I420AVideoFrame](https://wiki.videolan.org/YUV/#I420)转换，来源格式`AV_PIX_FMT_YUV420P`,目标格式`AV_PIX_FMT_BGRA`

```cs
aVFrame.linesize[0] = videoFrame.strideY;
aVFrame.linesize[1] = videoFrame.strideU;
aVFrame.linesize[2] = videoFrame.strideV;
aVFrame.data[0] = (byte*)videoFrame.dataY;
aVFrame.data[1] = (byte*)videoFrame.dataU;
aVFrame.data[2] = (byte*)videoFrame.dataV;
```

### AV_PIX_FMT_GRAY8

`Y800`：8 bits per pixel gray scale bitmap

```cs
BitsPerPixel = 8;
NumberOfPlanes = 1;
Pitches = new int[1] { Width };
Lines = new int[1] { Height };
PlaneSizes = new int[1] { Width * Height };
```

### AV_PIX_FMT_NV12

`NV12`：12 bits per pixel planar format with Y plane and interleaved UV plane

```cs
BitsPerPixel = 12;
NumberOfPlanes = 2;
Pitches = new int[2] { Width, Width };
Lines = new int[2] { Height, Height / 2 };
PlaneSizes = new int[2] { Width * Height, Width * Height / 2 };
```

### AV_PIX_FMT_NV21

`NV21`：12 bits per pixel planar format with Y plane and interleaved VU plane

```cs
BitsPerPixel = 12;
NumberOfPlanes = 2;
Pitches = new int[2] { Width, Width };
Lines = new int[2] { Height, Height / 2 };
PlaneSizes = new int[2] { Width * Height, Width * Height / 2 };
```

### AV_PIX_FMT_UYVY422

`UYVY`：16 bits per pixel packed UYVY array

```cs
BitsPerPixel = 16;
NumberOfPlanes = 1;
Pitches = new int[1] { Width * 2 };
Lines = new int[1] { Height };
PlaneSizes = new int[1] { Width * Height * 2 };
```

### AV_PIX_FMT_YUV410P

`Y410`：9 bits per pixel planar format

### AV_PIX_FMT_YUV411P

`Y411`：12 bits per pixel YUV 4:1:1 planar format

### AV_PIX_FMT_YUV444P

`YUV`：24 bits per pixel packed with 8 bits for each of the Y, U and V values

```cs
BitsPerPixel = 24;
NumberOfPlanes = 3;
Pitches = new int[3] { Width, Width, Width };
Lines = new int[3] { Height, Height, Height };
PlaneSizes = new int[3] { Width * Height, Width * Height, Width * Height };
```

### AV_PIX_FMT_YUYV422

`YUY2`：16 bits per pixel packed YUYV array

```cs
BitsPerPixel = 16;
NumberOfPlanes = 1;
Pitches = new int[1] { Width * 2 };
Lines = new int[1] { Height };
PlaneSizes = new int[1] { Width * Height * 2 };
```

### AV_PIX_FMT_YUV420P

`YV12`：12 bits per pixel planar format with Y plane followed by V and U planes

```cs
BitsPerPixel = 12;
NumberOfPlanes = 3;
Pitches = new int[3] { Width, Width / 2, Width / 2 };
Lines = new int[3] { Height, Height / 2, Height / 2 };
PlaneSizes = new int[3] { Width * Height, Width * Height / 4, Width * Height / 4 };
```

### AV_PIX_FMT_GRAY16BE

`Y16`：16 bits per pixel gray scale bitmap

```cs
BitsPerPixel = 16;
NumberOfPlanes = 1;
Pitches = new int[1] { Width * 2 };
Lines = new int[1] { Height };
PlaneSizes = new int[1] { Width * Height * 2 };
```

### AV_PIX_FMT_BGR24

`RGB24`：24 bits per pixel blue, green and red

```cs
BitsPerPixel = 24;
NumberOfPlanes = 1;
Pitches = new int[1] { Width * 3 };
Lines = new int[1] { Height };
PlaneSizes = new int[1] { Pitches[0] * Lines[0] };
```

`Format24bppRgb`

### AV_PIX_FMT_RGBA

`RGBA`：32 bits per pixel blue, green, red and alpha

```cs
BitsPerPixel = 32;
NumberOfPlanes = 1;
Pitches = new int[1] { Width * 4 };
Lines = new int[1] { Height };
PlaneSizes = new int[1] { Pitches[0] * Lines[0] };
```

### AV_PIX_FMT_ARGB

`ARGB`：32 bits per pixel alpha, blue, green, and red

```cs
BitsPerPixel = 32;
NumberOfPlanes = 1;
Pitches = new int[1] { Width * 4 };
Lines = new int[1] { Height };
PlaneSizes = new int[1] { Pitches[0] * Lines[0] };
```

### AV_PIX_FMT_GRAY8

`Format8bppIndexed`

### AV_PIX_FMT_BGRA

`Format32bppArgb`
