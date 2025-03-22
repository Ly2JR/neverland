---
title: 设计时数据
date: 2023-11-17
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
---

官方文档提供了[设计模式](https://learn.microsoft.com/zh-cn/archive/msdn-magazine/2010/july/design-patterns-problems-and-solutions-with-model-view-viewmodel)和[XAML设计时示例数据](https://learn.microsoft.com/zh-cn/visualstudio/xaml-tools/xaml-design-time-sample-data?view=vs-2022)

还有一种常用的设计时预览

```xml
d:DataContext="{d:DesignInstance Type={x:Type vm:MainWindowViewModel},
                                 IsDesignTimeCreatable=True}"
```

![design](https://image.ilyl.life:8443/wpf/design.png)
