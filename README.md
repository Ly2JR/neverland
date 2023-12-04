# NEVERLAND

## 简介

一个基于 VuePress 的个人博客，主要记录日常生活、开发问题和一些笔记。

## 环境

### 开发工具

[VSCode](https://code.visualstudio.com/)

### 软件工具

[Vuepress](https://v2.vuepress.vuejs.org/zh/)

[Vuerepss Theme Hope](https://theme-hope.vuejs.press/zh/)

[Docker](https://www.docker.com/)

## 安装使用

- 获取代码

```command
git clone https://github.com/ly2jr/neverland.git
```

- 安装依赖

```command
cd neverland

pnpm install
```

- 开发预览

```command
pnpm docs:dev
```

- 打包部署

```command
pnpm docs:build
```

## docker

### 开发预览

```command
docker compose up
```

### 生产部署

- 将SSL证书拷贝到`certs`目录下

- 更改`nginx.conf`配置，替换成自己的域名

 ```conf
 server {
     listen 443 ssl; 
     #更改自己的域名
     server_name blog.ilyl.life; 
     ssl_certificate /usr/share/certs/blog.pem;  
     ssl_certificate_key /usr/share/certs/blog.key;
     ssl_session_timeout 5m;
     ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
     ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
     ssl_prefer_server_ciphers on;

     location / {
         root /usr/share/nginx/html;
         index index.html;
     }
 }

 server {
    listen 80;
    location /  {

        # Force HTTPS,更改自己的域名
        return 301 https://blog.ilyl.life:8088;
    }
 }
 ```

- 生成docker

```command
docker build -t blog -f Dockerfile .
```
