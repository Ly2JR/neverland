---
title: 家庭影院
date: 2024-01-08
isOriginal: true
category:
  - 工具箱
tag:
  - TV
editLink: false
footer: false
copy: true
---

现在智能电视非常普及，但是很多频道需要收费，一种是需要开通IPTV，另外一种就是各个APP里的会员，但是其他端与TV端还不通用。

没钱的话就想办法自己搭建服务了。

以[plex](plex.md)作为服务端，客户端使用[Kodi](https://kodi.tv/)

## 安装KODI

启用智能电视里的`允许安装未知应用`。

下载[Kodi v21.1 (Omega)](https://kodi.tv/download/android/)，选择`ARMV7A (32BIT)`，拷贝到U盘。

在TV端选择U盘，选择`Kodi`进行安装。

## 配置Kodi中文

::: tip
如果只有英文，没有`Chinese-Simple`供选择，请等待下载，稍后再试
:::

坐上角中间配置按钮。

选择`Interface settings`。

选择`Skin`项，点击`Fonts`更改字体为`Arial based`，缺少这步直接设置中文会出现乱码。

选择`Regional`项，点击`Language`更改为`Chinese-Simple`。

选择`Regional`项，点击`Character set`更改为`GB2312`。

## 安装Plex for kodi

::: tip
直接在Kodi里搜索`plex`插件安装成功后，会出现无法启动的错误
:::

安装[pannal提供的plex插件](https://github.com/pannal/plex-for-kodi/blob/master/README.md)

先安装[repository.dontpanic-0.2.6-1.zip](https://pannal.github.io/dontpanickodi/)

将`repository.dontpanic-0.2.6-1.zip`下载拷贝到U盘

打开Kodi，选择插件，找到从ZIP安装，选择`repository.dontpanic-0.2.6-1.zip`

`repository.dontpanic-0.2.6-1.zip`安装好之后，找到`repository.dontpanic-0.2.6-1.zip`插件，点击等待下载

`dontpanic`下载完成，打开，从这里选择最新的plex安装即可。

## 启动plex

首次启动plex时，需要登录关联，电脑端打开`https://plex.tv/link`即可，输入电视端的4位验证码

## 关于plex找不到电视节目问题

查看[命名规则](https://support.plex.tv/articles/naming-and-organizing-your-movie-media-files/)

放在`/TV Shows`文件夹下，以最近的电视剧`繁华`第一集举例。

`/TV Shows/繁华/繁华S01E01.mkv`

在PLEX服务端添加媒体库，选择电视节目，选择`/TV Shows`目录。