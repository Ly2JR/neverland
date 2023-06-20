---
title: 启动虚拟化错误
date: 2023-05-23
dir.order: 1
order: 1
editLink: false
footer: false
isOriginal: true
category:
  - VMware
---

启动虚拟机出现"此主机支持Intel VT-x,但Intel VT-x处于禁用状态"

## 原因

电脑没有开启虚拟化,进入BIOS开启即可。

## 解决方式

::: tip

1. 不同电脑进入BIOS按键不一样，常见的有`F2`、`F12`、`F10`以及它们的组合键`Fn`+`F2`...

2. 不同电脑BIOS也不一样，需要自己查找，总体上是相差不大。

:::

1. 重启电脑,`F2`进入BIOS界面
2. 找到`高级`选项,有的主板需要`F7`进入后才能找到
3. 找到包含`Virtualization`的选项，将`Disabled`改为`Enabled`
4. 保存配置并重启
