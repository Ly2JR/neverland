---
title: Docker私有仓库
date: 2023-07-17
editLink: false
footer: false
isOriginal: true
category:
  - DOCKER
---

为了使用自己开发的[阿里云解析](aliyun_ddns.md)而生。

同时解决无法登录及发布Docker Hub的问题。

包括SSL、基本认证、Docker Registry UI、删除镜像内容。

更多的配置可在[Docker Resistry](https://docs.docker.com/registry/deploying/)和[Docker Resistry UI](https://github.com/Joxit/docker-registry-ui)找到。

## docker-compose.yml

- `第8行`：Registry UI的域名SSL证书目录
- `第9行`: 自己的Nginx配置文件
- `第13行`: Registry的URL地址
- `第29行`: Registry的仓库存储目录
- `第30行`: Registry的域名SSL证书目录
- `第31行`: Registry的基本认证目录
- `第33行`: Registry允许跨域访问的地址

```yml{8-9,13,29-31,33}
version: '3.8'

services:
  registry-ui:
    container_name: REGISTRY_UI
    image: 'joxit/docker-registry-ui:2.5.2'
    volumes:
      - <SSL证书目录>:/etc/nginx/certs
      - <nginx的conf.d配置目录>:/etc/nginx/conf.d/
    ports:
      - 443:443
     environment:
      - NGINX_PROXY_PASS_URL=<REGISTRY的URL>
      - SHOW_CATALOG_NB_TAGS=false
      - DELETE_IMAGES=true
      - REGISTRY_TITLE=Neverland
      - SINGLE_REGISTRY=true
      - CATALOG_MIN_BRANCHES=1
      - CATALOG_MAX_BRANCHES=1
      - CATALOG_ELEMENTS_LIMIT=1000
      - SHOW_CONTENT_DIGEST=true
      - TAGLIST_PAGE_SIZE=100
    depends_on:
      - registry
  registry:
    container_name: REGISTRY
    image: 'registry:2.8.2'
    volumes:
      - <Registry存储目录>:/var/lib/registry
      - <Registry SSL证书目录>:/certs
      - <Registry 用户认证目录>:/auth
    environment:
      - REGISTRY_HTTP_HEADERS_Access-Control-Allow-Origin=[<Docker Registry UI地址>]
      - REGISTRY_HTTP_ADDR=0.0.0.0:443
      - REGISTRY_HTTP_TLS_CERTIFICATE=/certs/docker.pem
      - REGISTRY_HTTP_TLS_KEY=/certs/docker.key
      - REGISTRY_AUTH=htpasswd
      - REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm
      - REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd
      - REGISTRY_HTTP_HEADERS_Access-Control-Allow-Methods=['HEAD', 'GET', 'OPTIONS', 'DELETE']
      - REGISTRY_HTTP_HEADERS_Access-Control-Allow-Credentials=['true']
      - REGISTRY_HTTP_HEADERS_Access-Control-Expose-Headers=['Docker-Content-Digest']
      - REGISTRY_STORAGE_DELETE_ENABLED=true
      - REGISTRY_HTTP_HEADERS_Access-Control-Allow-Headers-Control-Allow-Headers=['Authorization', 'Accept', 'Cache-Control']
      - REGISTRY_HTTP_HEADERS_X-Content-Type-Options=[nosniff]
      - Access-Control-Max-Age=[1728000]
    ports:
      - 443:443  
```

## [Docker Registry](https://docs.docker.com/registry/deploying/)

### 拉取Registry

```bash
docker pull registry:latest
```

### 启动Registry

```bash
docker run -d \
  --restart=always \
  --name registry \
  -p 5000:5000 \
  registry:latest
```

### 预览Registry

```bash
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

### [修改配置(`不安全`)](https://docs.docker.com/registry/insecure/)

打开`daemon.json`文件或者在Docker Desktop的`Docker Engine`添加如下配置，SSL无需此配置。

```json
"insecure-registries": [
    "http://127.0.0.1:5000"
],
```

### 跨域

```bash
-e REGISTRY_HTTP_HEADERS_Access-Control-Allow-Origin="['*']"
```

### 添加Docker Registry SSL

证书从服务提供商获取，[示例](../nas/domain.md#ssl)

`.crt`证书大部分包含中间证书，所以这里用`.pem`来代替

```bash {4-7}
docker run -d \
  --restart=always \
  --name registry \
  -v "$(pwd)"/certs:/certs \
  -e REGISTRY_HTTP_ADDR=0.0.0.0:443 \
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.pem \
  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \
  -p 443:443 \
  registry:2
```

### [添加认证](https://docs.docker.com/registry/deploying/#restricting-access)

::: tip

只用Docker界面配置时，可以将保存的用户密码文件`auth`目录挂载即可。

:::

步骤按官网如下:

1. 为用户创建一个密码文件，其中包含一个条目，密码：testusertestpassword

    ```bash
    mkdir auth
    docker run \
      --entrypoint htpasswd \
      httpd:2 -Bbn testuser testpassword > auth/htpasswd
    ```

    在 Windows 上，请确保输出文件已正确编码：

    ```bash
    docker run --rm --entrypoint htpasswd httpd:2 -Bbn testuser testpassword | Set-Content -Encoding ASCII auth/htpasswd
    ```

2. 停止注册表。

    ```bash
    docker container stop registry
    ```

3. 使用基本身份验证启动注册表。

    ```bash {5-8}
    docker run -d \
      -p 5000:5000 \
      --restart=always \
      --name registry \
      -v "$(pwd)"/auth:/auth \
      -e "REGISTRY_AUTH=htpasswd" \
      -e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm" \
      -e REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd \
      -v "$(pwd)"/certs:/certs \
      -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \
      -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \
      registry:2
    ```

4. 尝试从注册表中提取镜像，或将镜像推送到注册表。 这些命令失败。

5. 登录到注册表。

    ```bash
    docker login myregistrydomain.com:5000
    ```

    提供第一步中的用户名和密码。

    测试您现在可以从注册表中提取镜像或将镜像推送到 注册表

## [Docker Registry UI](https://github.com/Joxit/docker-registry-ui)

### 拉取Docker Registry UI

```bash
docker pull joxit/docker-registry-ui
```

### 启动Docker Registry UI

```bash
docker run -d -p 8080:80 -e REGISTRY_URL=http://localhost:5000 --name docker-registry-ui joxit/docker-registry-ui
```

### 预览Docker Registry UI

浏览器输入`http//localhost:8080`

![docker-registry-ui](https://nas.ilyl.life:8092/docker/docker-registry-ui.png)

### 添加Docker Registry UI SSL

内部使用`nginx`代理，配置`.conf`文件即可，其中需要改动的地方以高亮显示。

`5-6行`：对应的证书位置

`18行`：对应Docker Registry 访问地址

`26行`：对应Docker Registry UI访问地址

```bash {5-6,18,26}
server {
  listen              443 ssl;
  ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers         HIGH:!aNULL:!MD5;
  ssl_certificate     /etc/nginx/certs/fullchain.pem;
  ssl_certificate_key /etc/nginx/certs/privkey.key;
  root /usr/share/nginx/html;

  # disable any limits to avoid HTTP 413 for large image uploads
  client_max_body_size 0;

  location /v2 {
      # Do not allow connections from docker 1.5 and earlier
      # docker pre-1.6.0 did not properly set the user agent on ping, catch "Go *" user agents
      if ($http_user_agent ~ "^(docker\/1\.(3|4|5(.[0-9]-dev))|Go ).*$" ) {
          return 404;
      }
      proxy_pass http://registry:5000;
  }
}

server {
  listen 80;
  location /  {
    # Force HTTPS
    return 301 https://$host$request_uri;
  }
}
```

## 上传镜像

### 标记镜像

[Docker tag](https://docs.docker.com/engine/reference/commandline/tag/)

```bash
docker tag ali.ddns-image 127.0.0.1:5000/ali.ddns-image:v1
```

### 推送镜像

[Docker push](https://docs.docker.com/engine/reference/commandline/push/)，将本地镜像推送到`registry`仓库中

```bash
docker push 127.0.0.1:5000/ali.ddns-image:v1
```

### 拉取镜像

删除本地已有镜像，从私有仓库拉取

```bash
docker pull 127.0.0.1:5000/ali.ddns-image:v1
```

### Docker Registry

```bash
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

![docker-registry-ui](https://nas.ilyl.life:8092/docker/docker-registry-ui2.png)
