---
title: 域名
date: 2023-06-17
dir.order: 4
order: 4
isOriginal: true
category:
  - 工具箱
tag:
  - 域名
  - SSL
editLink: false
footer: false
copy: true
---

云服务器虽然可以公网访问，但是无法向外发布，通过域名可以解决

## 域名

::: warning
域名需要ICP备案和公安备案
:::

::: tip
域名在哪里购买都行，但是完整的流程需要域名、备案、SSL、DNS解析
:::

以阿里云为例，可以在[万网](https://wanwang.aliyun.com/)选择自己喜欢的域名，或自己注册。

## DNS

在[域名控制台](https://dc.console.aliyun.com/)下找到当前域名

进入`管理`，万网购买的默认`vip1.alidns.com/vip2.alidns.com`，非万网DNS自己配置。

![域名](https://nas.ilyl.life:8092/network/domain1.png)

![域名DNS](https://nas.ilyl.life:8092/network/domain2.png)

### 解析IP地址

::: tip
TTL：也就是这个时间之后才能知道，域名是否能访问你的公网IP地址
:::

在[域名控制台](https://dc.console.aliyun.com/)下找到当前域名

进入`解析`，添加记录，IPv6开通方式，检查[宽带](./broadband.md)、[光猫](./ont.md)、[路由器](./router.md)

记录类型：选择`AAAA-将域名指向一个IPV6地址`，没有开通IPv6就选择`A-将域名指向一个IPV4地址`

主机记录方式：选择`*`

记录值：填写[公网地址](https://www.test-ipv6.com/)，根据记录类型写入相应的IPv6或IPv4

![IP解析](https://nas.ilyl.life:8092/network/domain3.png)

### 验证

在[域名控制台](https://dc.console.aliyun.com/)下找到当前域名

进入`解析`，点击`生效检测`

## SSL

::: tip
免费SSL证书每年20个，对个人来说足够使用
:::

![SSL证书](https://nas.ilyl.life:8092/network/ssl1.png)

在[数字证书管理服务](https://yundun.console.aliyun.com/)里SSL证书,选择`免费证书`,申请通过即可。

通过时自动会在DNS里添加一条主机记录为`_dnsauth`的信息。
