---
title: 光猫
icon: bxs:cat
date: 2023-05-20
isOriginal: true
dir.order: 2
category:
  - 网络
tag:
  - 光猫
  - HG8245
editLink: false
footer: false
copy: true
---

## IPv4改造

::: tip
访问地址在光猫设备的背面，这只是`普通账户`
:::

将光猫的IPv4改造支持IPv6时，首先看提供的光猫本身是不是自带IPv6，进入光猫访问地址，查看选项有没有IPv6相关内容。

但是，很多光猫设备都是老款，只支持IPv4，这时就需要买个`支持IPv6的路由器`。

### 获取超级管理员

以华为光猫，型号HG8245为例；

::: tip
`telnet`在控制面板/启用或关闭Windows功能，勾选Telnet客户端
:::

打开`cmd`命令，输入`telnet 192.168.1.1`;

显示`Login:`，输入`root`;

显示`Password`,输入`admin`;

显示`WAP>`,输入`shell`;

显示`WAP(Doprea Linux) #`,输入`cd /mnt/jffs2`;

显示`WAP(Doprea Linux) #`,输入`grep telecomadmin hw_tree.xml`;

显示`.....Password="XXXXXXX".....`;

记住该密码。

### 设置光猫

![光猫设置](https://nas.ilyl.life:8092/wan.jpg)

使用账户`telcomadmin`,密码是刚刚获取到的登录设备。

找到网络/宽带设置,对所有WAN口参数配置，进行拍照`备份`；

找到默认`2_INTETNET_B_VID`的连接名，进行删除,记得`备份`;

新键

使能WAN连接:`勾选`

连接类型:`桥接`

服务列表:`INTERNET`

使能VLAN:`勾选`

VLAN ID:与之前配置的值一致

桥类型:`IP桥接`

至此，光猫IPv4改造支持IPv6完成。
