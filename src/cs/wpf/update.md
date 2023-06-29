---
title: 更新
date: 2023-06-28
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - 异步编程
---

之前一篇[下载](./download.md)用控制台演示了下载的功能，而本次更新是在这基础上加了UI界面实现软件更新的功能，[源代码地址](https://github.com/Ly2JR/wpf-samples/tree/main/update)。

受[异步编程](https://learn.microsoft.com/zh-cn/archive/msdn-magazine/2014/april/async-programming-patterns-for-asynchronous-mvvm-applications-commands)启发，借用了大量代码。

![更新](https://nas.ilyl.life:8092/wpf/update.gif =420x200)

虽说是更新，本质还是下载，更新又跟程序设计有关，例如：

1. 本身就一个exe程序

    更新就是替换本身，先退出在启动新的程序

2. 主程序是一个exe程序，其他为dll文件，像[模块化](./plugin.md)一样

   主程序exe不动，而是直接更新替换dll文件

3. 启动器，程序及相关dll

   同2类似，只是多个启动器，启动器不变，更新相关dll

更新首先要有一个信息源用来比对，需要更新哪些内容，这里以`IIS`的本身`80`端口服务器，用`xml`来做文件更新配置文件，相关更新文件放在`80`端口目录下

## 配置文件

```xml
<?xml version="1.0" encoding="utf-8" ?>
<update>
  <file name="iisstart" suffix="htm"/>
  <file name="iisstart" suffix="png"/>
  <file name="test" suffix="exe"/>
  <logs>
    <log>1.更新html文件</log>
    <log>2.更新图片</log>
    <log>3.更新主程序</log>
  </logs>
</update>
```

## 更新程序本身

## 更新程序dll

## 启动器，更新dll
