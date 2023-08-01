---
title: 私有仓库
date: 2023-07-17
dir.order: 2
order: 2
editLink: false
footer: false
isOriginal: true
category:
  - DOCKER
---

为了部署使用自己开发的[阿里云解析](aliyun-ddns.md)而做，解决无法登录，以及无法发布到Hub Docker的问题。

## 完整配置示例

该配置包括SSL、基本认证、Docker Registry UI内容。

更多的配置可在[Docker Resistry](https://docs.docker.com/registry/deploying/)和[Docker Resistry UI](https://github.com/Joxit/docker-registry-ui)找到

### Docker Registry

- 文件挂载

|宿主路径|容器路径|说明|
|:-|:-|:-|
|<自定义仓库目录>|`/var/lib/registry`|Docker Registry 仓库目录,挂载到宿主目录下|
|<自定义SSL证书目录>|`/certs`|Docker Registry SSL证书存放位置|
|<自定义认证目录>|`/auth`|Docker Registry 身份安装存放位置|

- Docker环境变量

|变量|值|说明|
|:-|:-|:-|
|`REGISTRY_HTTP_ADDR`|`0.0.0.0:443`|SSL需要|
|`REGISTRY_HTTP_TLS_CERTIFICATE`|挂载后的文件|SSL需要|
|`REGISTRY_HTTP_TLS_KEY`|挂载在后的文件|SSL需要|
|`REGISTRY_HTTP_HEADERS_Access-Control-Allow-Origin`|`['`<自定义UI地址>`']`|Docker Resitry UI需要，或者`*`|
|`REGISTRY_AUTH`|`htpasswd`|身份验证需要|
|`REGISTRY_AUTH_HTPASSWD_REALM`|`Registry Realm`|身份验证需要|
|`REGISTRY_AUTH_HTPASSWD_PATH`|`/auth/htpasswd`|身份验证需要,自定义认证挂载的Docker目录|
|`REGISTRY_HTTP_HEADERS_Access-Control-Allow-Methods`|`[HEAD,GET,OPTIONS,DELETE]`|Docker Resitry UI需要|
|`REGISTRY_HTTP_HEADERS_Access-Control-Allow-Credentials`|`[true]`|Docker Resitry UI需要|
|`REGISTRY_HTTP_HEADERS_Access-Control-Allow-Headers-Control-Allow-Headers`|`[Authorization,Accept,Cache-Control]`|Docker Resitry UI需要|
|`REGISTRY_HTTP_HEADERS_Access-Control-Expose-Headers`|`[Docker-Content-Digest]`|Docker Resitry UI需要|

### Docker Registry UI

- 文件挂载

|宿主路径|容器路径|说明|
|:-|:-|:-|
|<自定义nginx.conf配置文件>|`/etc/nginx/conf.d/default.conf`|Docker Registry UI配置文件,[参考文件](#添加docker-registry-ui-ssl)|
|<自定义SSL证书目录>|`/etc/nginx/certs`|Docker Registry UI SSL证书存放位置|

- Docker环境变量

|变量|值|说明|
|:-|:-|:-|
|`REGISTRY_URL`|<Docker Registry 地址>|Docker Resitry访问地址|

## [Docker Registry](https://docs.docker.com/registry/deploying/)

### 拉取Registry

```command prompt
docker pull registry:latest
```

### 启动Registry

```command prompt
docker run -d \
  --restart=always \
  --name registry \
  -p 5000:5000 \
  registry:latest
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

### [修改配置(`不安全`)](https://docs.docker.com/registry/insecure/)

打开`daemon.json`文件或者在Docker Desktop的`Docker Engine`添加如下配置，SSL无需此配置。

```json
"insecure-registries": [
    "http://127.0.0.1:5000"
],
```

### 跨域

```command prompt
-e REGISTRY_HTTP_HEADERS_Access-Control-Allow-Origin="['*']"
```

### 添加Docker Registry SSL

证书从服务提供商获取，[示例](../nas/domain.md#ssl)

`.crt`证书大部分包含中间证书,所以这里用`.pem`来代替

```command prompt {4-7}
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

    ```command prompt
    mkdir auth
    docker run \
      --entrypoint htpasswd \
      httpd:2 -Bbn testuser testpassword > auth/htpasswd
    ```

    在 Windows 上，请确保输出文件已正确编码：

    ```command prompt
    docker run --rm --entrypoint htpasswd httpd:2 -Bbn testuser testpassword | Set-Content -Encoding ASCII auth/htpasswd
    ```

2. 停止注册表。

    ```command prompt
    docker container stop registry
    ```

3. 使用基本身份验证启动注册表。

    ```command prompt{5-8}
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

    ```command prompt
    docker login myregistrydomain.com:5000
    ```

    提供第一步中的用户名和密码。

    测试您现在可以从注册表中提取镜像或将镜像推送到 注册表

## [Docker Registry UI](https://github.com/Joxit/docker-registry-ui)

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

### 添加Docker Registry UI SSL

内部使用`nginx`代理，配置`.conf`文件即可,其中需要改动的地方以高亮显示。

`5-6行`:对应的证书位置

`18行`:对应Docker Registry 访问地址

`26行`:对应Docker Registry UI访问地址

```conf {5-6,18,26}
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

```command prompt
docker tag ali.ddns-image 127.0.0.1:5000/ali.ddns-image:v1
```

### 推送镜像

[Docker push](https://docs.docker.com/engine/reference/commandline/push/)，将本地镜像推送到`registry`仓库中

```command prompt
docker push 127.0.0.1:5000/ali.ddns-image:v1
```

### 拉取镜像

删除本地已有镜像，从私有仓库拉取

```command prompt
docker pull 127.0.0.1:5000/ali.ddns-image:v1
```

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
