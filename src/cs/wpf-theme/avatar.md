---
title: Avatar 头像
date: 2024-03-28
star: 5
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

使用`Shape`和`Size`属性来设置Avatar的形状和大小。

![circle](https://nas.ilyl.life:8092/wpf-theme/avatar/avatar-circle.png)

```xml
<nl:Avatar Size="Large" Src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
<nl:Avatar Src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
<nl:Avatar Size="Small" Src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
```

![square](https://nas.ilyl.life:8092/wpf-theme/avatar/avatar-square.png)

```xml
<nl:Avatar Shape="Square"
          Size="Large"
          Src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
<nl:Avatar Shape="Square" Src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
<nl:Avatar Shape="Square"
          Size="Small"
          Src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
```

## 展示类型

支持使用图片，图标或者文字作为Avatar。

![type](https://nas.ilyl.life:8092/wpf-theme/avatar/avatar-type.png)

```xml
<nl:Avatar Icon="{StaticResource user-icon}" />
<nl:Avatar Src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
<nl:Avatar>user</nl:Avatar>
```

## 回退行为

图片加载失败时的回退行为。

![error](https://nas.ilyl.life:8092/wpf-theme/avatar/avatar-error.gif)

```xml
<nl:Avatar OnError="{Binding onErrorCommand}" Src="{Binding AvatarUrl}" />
```

```cs
[ObservableProperty]
private string? _avatarUrl="https://empty";

[RelayCommand]
private void onError()
{
    AvatarUrl = "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png";
}
```

## 适应容器

当使用图片作为用户头像时，设置该图片如何在容器中展示。与`Stretch`属性一致。

![stretch](https://nas.ilyl.life:8092/wpf-theme/avatar/avatar-stretch.gif)

```xml
<nl:Avatar Width="100"
          Height="100"
          Shape="Square"
          Src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          Stretch="None" />
<nl:Avatar Width="100"
          Height="100"
          Shape="Square"
          Src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          Stretch="Fill" />
<nl:Avatar Width="100"
          Height="100"
          Shape="Square"
          Src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          Stretch="Uniform" />
<nl:Avatar Width="100"
          Height="100"
          Shape="Square"
          Src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          Stretch="UniformToFill" />
```
