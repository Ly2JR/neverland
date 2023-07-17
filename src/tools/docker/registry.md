---
title: 私有仓库
date: 2023-07-17
dir.order: 2
order: 2
editLink: false
footer: false
isOriginal: true
category:
  - Docker
tag:
  - Registry
---

为了部署使用自己开发的[阿里云解析](aliyun-ddns.md)而做，映像:`ali.ddns-image`，容器:`neverland/ali.ddns`

## 私有Docker库

[registry](https://docs.docker.com/registry/)，存储位置`/var/lib/registry/`，证书`/certs/`

### 拉取Registry

```.NET CLI
docker pull registry
```

### 启动Registry

```.NET CLI
docker run -d -p 5000:5000 --restart=always --name registry registry:latest
```

### 预览Registry

打开浏览器输入`127.0.0.1:5000`或`127.0.0.1:5000/v2_catalog`

::: tip
127.0.0.1:5000: 不显示任何东西

127.0.0.1:5000/v2_catalog :
`{
    "repositories": []
}`
:::

因此有了`Docker Registry uI`

### 修改配置

打开`daemon.json`文件或者在Docker Desktop的`Docker Engine`天下如下配置

```json
"insecure-registries": [
    "http://127.0.0.1:5000"
],
```

### 标记映像

[Docker tag](https://docs.docker.com/engine/reference/commandline/tag/)

```.NET CLI
docker tag ali.ddns-image 127.0.0.1:5000/ali.ddns:v1
```

### 推送镜像

将本地映像推送到`registry`仓库中

[Docker push](https://docs.docker.com/engine/reference/commandline/push/)

```.NET CLI
docker push 127.0.0.1:5000/ali.ddns:v1
```

验证：浏览器输入[http://127.0.0.1:5000/v2/_catalog](http://127.0.0.1:5000/v2/_catalog)

返回：

```json
{
    "repositories": [
        "ali.ddns"
    ]
}
```

### 拉取映像

删除本地已有映像，从私有仓库拉取

```.NET CLI
docker pull 127.0.0.1:5000/ali.ddns:v1
```

## Docker Registry UI

### 拉取Registry UI

### 启动Registry UI

### 预览Registry UI
