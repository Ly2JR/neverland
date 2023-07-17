---
title: Docker
icon: vscode-icons:file-type-docker2
breadcrumb: false
article: false
index: false
editLink: false
footer: false
---

## 命令

[Docker Cli](https://docs.docker.com/engine/reference/commandline/docker/

### 生成映像

```.NET CLI
docker build -t xxx -f Dockerfile .
```

### 创建容器

```.NET CLI
docker create --name [xxx容器] [xxx映像]
```

### 创建环境变量容器

示例：

```.NET CLI
docker run --name neverland.ali.ddns  --env=DOTNET_EnableDiagnostics=0 --env=ALIKID=YourKey --env=ALIKSCT=YourKeySecret --env=ALIDOMAIN=ilyl.life --env=ALITTL=600  -d ali.ddns-image
```

### 启动容器

```.NET CLI
docker start xxx容器
```

### 列出所有容器

```.NET CLI
docker ps -a
```

### 停止容器

```.NET CLI
docker stop xxx容器
```

### 删除容器

```.NET CLI
docker rm xxx容器
```

### 删除映像

```.NET CLI
docker rmi xxx映像
```

### 删除.NET映像

```.NET CLI
docker rmi mcr.microsoft.com/dotnet/aspnet:7.0
```
