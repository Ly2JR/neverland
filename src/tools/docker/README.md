---
title: 概述
breadcrumb: false
article: false
editLink: false
footer: false
category:
  - DOCKER
---

[Docker Cli](https://docs.docker.com/engine/reference/commandline/docker/)

以[阿里云解析](aliyun-ddns.md)为例，镜像:`ali.ddns-image`，容器:`neverland/ali.ddns`

## 注销登录

```bash
docker logout
```

## 登录

```bash
docker login XXX
```

## 生成镜像

[docker build](https://docs.docker.com/engine/reference/commandline/build/)

```bash
docker build -t ali.ddns-image -f Dockerfile .
```

## 拉取镜像

```bash
docker pull ali.ddns-image:latest
```

## 创建容器

[docker create](https://docs.docker.com/engine/reference/commandline/create/)

```bash
docker create --name neverland/ali.ddns ali.ddns-image
```

## 创建环境变量容器

[docker run](https://docs.docker.com/engine/reference/commandline/run/)

```bash
docker run --name neverland/ali.ddns  --env=DOTNET_EnableDiagnostics=0 --env=ALIKID=111 --env=ALIKSCT=111 --env=ALIDOMAIN=ilyl.life --env=ALITTL=600  -d ali.ddns-image
```

## 启动容器

[docker start](https://docs.docker.com/engine/reference/commandline/start/)

```bash
docker start xxx容器
```

## 列出所有容器

[docker ps](https://docs.docker.com/engine/reference/commandline/ps/)

```bash
docker ps -a
```

## 停止容器

[docker stop](https://docs.docker.com/engine/reference/commandline/stop/)

```bash
docker stop neverland/ali.ddns
```

## 删除容器

[docker rm](https://docs.docker.com/engine/reference/commandline/rm/)

```bash
docker rm neverland/ali.ddns
```

## 删除镜像

[docker rmi](https://docs.docker.com/engine/reference/commandline/rmi/)

::: tabs

@tab 删除云解析镜像

```bash
docker rmi ali.ddns-image
```

@tab 删除.NET 镜像

```bash
docker rmi mcr.microsoft.com/dotnet/aspnet:7.0
```

:::

## [docker compose](https://docs.docker.com/reference/cli/docker/compose/)

```bash
docker compose -f c:\\docker-compose.yml -p aliyun-ddns up -d
```

## 私有仓库

### 注销

```bash
docker logout
```

### 登录账号

```bash
docker login 127.0.0.1:5000/ali.ddns:v1
```

### 标记镜像

[Docker tag](https://docs.docker.com/engine/reference/commandline/tag/)

```bash
docker tag ali.ddns-image 127.0.0.1:5000/ali.ddns:v1
```

### 上传镜像

[Docker push](https://docs.docker.com/engine/reference/commandline/push/)

```bash
docker push 127.0.0.1:5000/ali.ddns:v1
```
