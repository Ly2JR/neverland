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

以[阿里云解析](aliyun-ddns.md)为例，镜像：`ali.ddns-image`，容器：`neverland/ali.ddns`

## 注销登录

```bash
docker logout
```

## 登录

```bash
docker login XXX
```

## [docker build](https://docs.docker.com/engine/reference/commandline/build/)生成镜像

```bash
docker build -t ali.ddns-image -f Dockerfile .
```

## [docker pull](https://docs.docker.com/reference/cli/docker/image/pull/)拉取镜像

```bash
docker pull ali.ddns-image:latest
```

## [docker create](https://docs.docker.com/engine/reference/commandline/create/)创建容器

```bash
docker create --name neverland/ali.ddns ali.ddns-image
```

## [docker run](https://docs.docker.com/engine/reference/commandline/run/)创建环境变量容器

```bash
docker run --name neverland/ali.ddns  --env=DOTNET_EnableDiagnostics=0 --env=ALIKID=111 --env=ALIKSCT=111 --env=ALIDOMAIN=ilyl.life --env=ALITTL=600  -d ali.ddns-image
```

## [docker start](https://docs.docker.com/engine/reference/commandline/start/)启动容器

```bash
docker start xxx容器
```

## [docker ps](https://docs.docker.com/engine/reference/commandline/ps/)列出所有容器

```bash
docker ps -a
```

## [docker stop](https://docs.docker.com/engine/reference/commandline/stop/)停止容器

```bash
docker stop neverland/ali.ddns
```

## [docker rm](https://docs.docker.com/engine/reference/commandline/rm/)删除容器

```bash
docker rm neverland/ali.ddns
```

## [docker rmi](https://docs.docker.com/engine/reference/commandline/rmi/)删除镜像

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

### [docker tag](https://docs.docker.com/engine/reference/commandline/tag/)标记镜像

```bash
docker tag ali.ddns-image 127.0.0.1:5000/ali.ddns:v1
```

### [docker push](https://docs.docker.com/engine/reference/commandline/push/)上传镜像

```bash
docker push 127.0.0.1:5000/ali.ddns:v1
```
