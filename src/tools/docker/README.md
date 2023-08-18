---
title: 概述
# icon: vscode-icons:file-type-docker2
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

```.NET CLI
docker logout
```

## 登录

```.NET CLi
docker login XXX
```

## 生成镜像

[docker build](https://docs.docker.com/engine/reference/commandline/build/)

```.NET CLI
docker build -t ali.ddns-image -f Dockerfile .
```

## 创建容器

[docker create](https://docs.docker.com/engine/reference/commandline/create/)

```.NET CLI
docker create --name neverland/ali.ddns ali.ddns-image
```

## 创建环境变量容器

[docker run](https://docs.docker.com/engine/reference/commandline/run/)

```.NET CLI
docker run --name neverland/ali.ddns  --env=DOTNET_EnableDiagnostics=0 --env=ALIKID=111 --env=ALIKSCT=111 --env=ALIDOMAIN=ilyl.life --env=ALITTL=600  -d ali.ddns-image
```

## 启动容器

[docker start](https://docs.docker.com/engine/reference/commandline/start/)

```.NET CLI
docker start xxx容器
```

## 列出所有容器

[docker ps](https://docs.docker.com/engine/reference/commandline/ps/)

```.NET CLI
docker ps -a
```

## 停止容器

[docker stop](https://docs.docker.com/engine/reference/commandline/stop/)

```.NET CLI
docker stop neverland/ali.ddns
```

## 删除容器

[docker rm](https://docs.docker.com/engine/reference/commandline/rm/)

```.NET CLI
docker rm neverland/ali.ddns
```

## 删除镜像

[docker rmi](https://docs.docker.com/engine/reference/commandline/rmi/)

::: tabs

@tab 删除云解析镜像

```.NET CLI
docker rmi ali.ddns-image
```

@tab 删除.NET 镜像

```.NET CLI
docker rmi mcr.microsoft.com/dotnet/aspnet:7.0
```

:::

## 私有仓库

### 注销

```.NET CLI
docker logout
```

### 登录账号

```.NET CLI
docker login 127.0.0.1:5000/ali.ddns:v1
```

### 标记镜像

[Docker tag](https://docs.docker.com/engine/reference/commandline/tag/)

```.NET CLI
docker tag ali.ddns-image 127.0.0.1:5000/ali.ddns:v1
```

### 上传镜像

[Docker push](https://docs.docker.com/engine/reference/commandline/push/)

```.NET CLI
docker push 127.0.0.1:5000/ali.ddns:v1
```
