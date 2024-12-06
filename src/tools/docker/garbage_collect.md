---
title: Docker垃圾回收
date: 2024-12-6
editLink: false
footer: false
isOriginal: true
category:
  - DOCKER
tag:
  - 垃圾回收
---

在搭建私有Registry之后，配置了`REGISTRY_STORAGE_DELETE_ENABLED:true`可以了删除，虽然通过UI进行删除，但是还会提示你运行垃圾回收

::: tip
config.yml位置：/etc/distribution/config.yml
:::

## 查看容器

```bash
docker ps
```

先查看容器，找到`registry`容器ID

## 进入Resistry容器

```bash
docker exec -it registryContainerID /bin/sh
```

## 查看Resitry文件大小

```bash
du -sh /var/lib/registry
```

## 执行垃圾回收

```bash
registry garbage-collect /etc/distribution/config.yml
```

## 退出容器

```bash
exit
```

