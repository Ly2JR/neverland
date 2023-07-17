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

### 生成映像

```.NET CLI
docker build -t xxx -f Dockerfile .
```

### 创建容器

```.NET CLI
docker create --name [xxx容器] [xxx映像]
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
