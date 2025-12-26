---
title: Notification 提示
date: 2025-05-16
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - AvaloniaUI
  - AvaloniaUI主题控件
---

## 基础用法

更改了默认的`INotification`显示样式

![notification](https://image.ilyl.life:8443/avaloniaui-theme/notification/avalonia-notification.gif)

```cs
WindowNotificationManager manager=new WindowNotificationManager();
manager.Position = NotificationPosition.TopRight;
manager.Show(new Notification("标题", "This is message"),NotificationType.Information, TimeSpan.FromSeconds(3));
```
