---
title: Docker部署Calibre-Web
date: 2025-03-03
editLink: false
footer: false
isOriginal: true
category:
  - Docker
tag:
  - Calibre-Web
  - HTTPS
---

## Docker安装

在Windows使用Docker安装，按官方[docker-compose](https://github.com/linuxserver/docker-calibre-web?tab=readme-ov-file#docker-compose-recommended-click-here-for-more-info)安装即可

```yml{6,7,9,10,12,13,15}
services:
  calibre-web:
    image: linuxserver/calibre-web:0.6.25
    container_name: calibre-web
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - DOCKER_MODS=linuxserver/mods:universal-calibre #optional
      - OAUTHLIB_RELAX_TOKEN_SCOPE=1 #optional
    volumes:
      - /path/to/calibre-web/data:/config
      - /path/to/calibre/library:/books
    ports:
      - 8083:8083
    restart: unless-stopped
```

其中两个可选可以去掉

## 问题点

::: tip
出现各种问题按以下设置即可解决
:::


1. 默认安装是没有数据库`metadata.db`的，[metadata.db下载地址](https://drive.usercontent.google.com/download?id=189tv5i5SNT6rivLLLvCmC2JeLtODmSS1&export=download)或者安装[Calibre](https://calibre-ebook.com/zh_CN/download)PC端，找到`metadata.db`，需要手动放在`/books`目录下

2. 在Linux环境Docker部署时`/books`和`/config`映射的文件需要添加`Everyone`和`http`权限
3. `/books`和`/config`映射的文件夹位置不能一致，即在同一个父文件夹下
4. `PUID`和`PGID`按部署实际账户填写

    进入`bash`查看`PUID`和`PGID`

    ```bash
    id root
    ```
5. `TZ`是时区，例如`TZ=Asia/Shanghai`
6. 默认`8083`端口，非SSL，部署成功后，登录界面，服务器配置`ssl`，将`domain.pem`和`domain.key`放在`/config`目录下，填写ssl路径
   