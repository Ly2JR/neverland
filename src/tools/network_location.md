---
title: 如何删除网络位置历史记录
date: 2024-04-03
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - 网络位置
---

在`我的电脑`右击`添加一个网络位置`，当需要删除时，直接删除该文件正常。但是再次添加网络位置时，会保留之前的历史记录。

如果想删除网络位置的历史记录

1、`Win`+`R`输入`regedit`打开注册表

2、打开路径`计算机\HKEY_CURRENT_USER`

3、继续找到`\Software\Microsoft\Windows\CurrentVersion\Explorer`

4、最终在`\PublishingWizard\AddNetworkPlace\AddNetPlace\LocationMRU`

5、直接删除即可，再次浏览发现没有了


