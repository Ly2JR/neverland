---
title: 群晖镜像删除
date: 2024-10-18
editLink: false
footer: false
isOriginal: true
category:
  - SSH
---

私有仓库下载的镜像在页面上无法删除时

开启SSH端口

打开SSH端口防火墙

登陆SSH

```bash
ssh user@ip -p port
```

输入账号密码

切换root

```bash
sudo -i
```

查看所有镜像

```bash
docker images -a
```

删除镜像

```bash
docker rmi XXX
```