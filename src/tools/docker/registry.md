---
title: 私有仓库
date: 2023-07-17
dir.order: 2
order: 2
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - DOCKER
---

为了部署使用自己开发的[阿里云解析](aliyun-ddns.md)而做，解决无法登录，及无法发布到Hub Docker的问题。

映像:`ali.ddns-image`

容器:`neverland/ali.ddns`

## [Docker Registry](https://docs.docker.com/registry/deploying/)

::: tip
存储位置：`/var/lib/registry/`

证书位置：`/certs/`

跨域配置：-e REGISTRY_HTTP_HEADERS_Access-Control-Allow-Origin="['*']"
:::

### 拉取Registry

```command prompt
docker pull registry:latest
```

### 启动Registry

```command prompt
docker run -d -p 5000:5000 -e REGISTRY_HTTP_HEADERS_Access-Control-Allow-Origin="['*']" --restart=always --name registry registry:latest
```

### 预览Registry

```command prompt
curl http://127.0.0.1:5000/v2/_catalog
```

返回:

```text{3}
StatusCode        : 200
StatusDescription : OK
Content           : {"repositories":[]}

RawContent        : HTTP/1.1 200 OK
                    Docker-Distribution-Api-Version: registry/2.0
                    X-Content-Type-Options: nosniff
                    Content-Length: 25
                    Content-Type: application/json; charset=utf-8
                    Date: ... GMT...
Forms             : {}
Headers           : {[Docker-Distribution-Api-Version, registry/2.0], [X-Content-Type-Options, nosniff], [Content-Length, 25], [Content-Type, application/json; charset=utf-8]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : System.__ComObject
RawContentLength  : 25
```

### [修改配置](https://docs.docker.com/registry/insecure/)

打开`daemon.json`文件或者在Docker Desktop的`Docker Engine`添加如下配置

```json
"insecure-registries": [
    "http://127.0.0.1:5000"
],
```

## [Docker Registry UI](https://helm.joxit.dev/charts/docker-registry-ui/)

### 拉取Docker Registry UI

```command prompty
docker pull joxit/docker-registry-ui
```

### 启动Docker Registry UI

```command prompty
docker run -d -p 8080:80 -e REGISTRY_URL=http://localhost:5000 --name docker-registry-ui joxit/docker-registry-ui
```

### 预览Docker Registry UI

浏览器输入`http//localhost:8080`

![docker-registry-ui](https://nas.ilyl.life:8092/docker/docker-registry-ui.png =420x200)

## 上传映像

### 标记映像

[Docker tag](https://docs.docker.com/engine/reference/commandline/tag/)

```command prompt
docker tag ali.ddns-image 127.0.0.1:5000/ali.ddns-image:v1
```

### 推送镜像

[Docker push](https://docs.docker.com/engine/reference/commandline/push/)，将本地映像推送到`registry`仓库中

```command prompt
docker push 127.0.0.1:5000/ali.ddns-image:v1
```

### 拉取映像

删除本地已有映像，从私有仓库拉取

```command prompt
docker pull 127.0.0.1:5000/ali.ddns-image:v1
```

## 验证

### Docker Registry

```command prompt
curl http://127.0.0.1:5000/v2/_catalog
```

返回：

```text{3}
StatusCode        : 200
StatusDescription : OK
Content           : {"repositories":["ali.ddns-image"]}

RawContent        : HTTP/1.1 200 OK
                    Docker-Distribution-Api-Version: registry/2.0
                    X-Content-Type-Options: nosniff
                    Content-Length: 25
                    Content-Type: application/json; charset=utf-8
                    Date: ... GMT...
Forms             : {}
Headers           : {[Docker-Distribution-Api-Version, registry/2.0], [X-Content-Type-Options, nosniff], [Content-Length, 25], [Content-Type, application/json; charset=utf-8]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : System.__ComObject
RawContentLength  : 25
```

### Docker-Registry-UI

浏览器输入`http//localhost:8080`

![docker-registry-ui](https://nas.ilyl.life:8092/docker/docker-registry-ui2.png =420x200)
