---
title: 路由器
icon: material-symbols:router
date: 2023-05-22
dir.order: 3
category:
  - 网络
tag:
  - 路由器
lastUpdated: false
editLink: false
footer: false
copy: true
---

## 启用IPv6

以小米路由器为例

连接小米路由器Wifi时，在向导里，输入`宽带账户`、`宽带密码`，按流程配置完成之后，确认是否能连接到外网。

确认能上网之后，找到`常用设置`/`上网设置`

工作模式切换选择`在路由器工作模式和中继工作模式之间进行切换`

IPv6网络设置`开启`

**重新**选择`Native`

自动配置DNS

点击保存,至此配置完成。

## 检测IPv6

::: tip
`240e`是电信Ipv6外网地址前缀

`2408`是联通IPv6外网地址前缀

`2409`是移动/铁通IPv6外网地址前缀
:::

进入`cmd`输入`ipconfig`，查看Ipv6地址

进入[IPv6 Test](https://www.test-ipv6.com/index.html.zh_CN)进行检测。
