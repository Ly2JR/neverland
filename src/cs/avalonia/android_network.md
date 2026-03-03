---
title: 无网络真机调试
date: 2026-03-03
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - Avalonia
  - Android
---

没有网络的情况下，PC和Android真机可以进行联调。

1. Android真机通过USB链接到PC机上。
2. Android真机`个人热点`打开`USB网络共享`

这样Android真机就可以和PC的服务通信了。如果PC服务在虚拟机上，如VMWare。

在`VMWare`软件的`虚拟机设置`中找到`网络配置器`,选择`桥接模式`即可。

这样Android真机就可以和PC里的虚拟机服务通信。
