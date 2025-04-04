---
title: 部署
date: 2023-06-17
isOriginal: true
category:
  - 工具箱
tag:
  - 部署
editLink: false
footer: false
copy: true
---

## PC端IIS部署

::: tip
域名默认是80端口可以不输入，其他端口需要加上端口号

Https默认443端口可以不输入，其他端口需要加上端口号
:::

### 普通网站

1. 在`D`盘新建文件夹`test`，放入一张图片`1.jpg`

2. 打开IIS，选择网站右击，点击新建网站，网站名称随便输入，例如`test`，物理路径选择`D:\test`，其他默认，确认后多出一个`test`的网站

    ::: tip
    `Default Web Site`默认80端口，可以将相关资源放在该目录下，这里将其停止
    :::

    ![新建网站](https://image.ilyl.life:8443/network/iis1.png)

3. 右击`test`选择`管理网站`、选择`浏览`，浏览器出现`Web 服务器被配置为不列出此目录的内容。`，通过`目录浏览`启用它即可，这里不这么做，在浏览器地址之后输入`/1.jpg`，显示图片

    ::: tip
    出现问题不要慌，IIS默认为网站服务的，地址之后隐藏了一个首页地址`Index.html`
    :::

    ![新建网站](https://image.ilyl.life:8443/network/iis2.png)

4. 防火墙出入站规则，添加当前网站的端口

5. 在浏览器中将`localhost`替换成`域名`，回车确认

### SSL加密

申请过免费SSL证书通过之后，下载相应文件，选择IIS

1. 打开`IIS`，找到`服务器证书`，导入下载的SSL证书

    ![服务器证书](https://image.ilyl.life:8443/network/iis3.png)

2. 选择部署的网站`test`，选择`编辑绑定`，看到类型http。新添加一个，选择类型https，下方SSL证书选择导入的`服务器证书`

    ![设置SSL](https://image.ilyl.life:8443/network/iis4.png)

3. 浏览器输入`https://localhost/1.jpg`，显示图片，但是提示不安全，将`localhost`替换成域名，一切完美

### 重定向

这里同时支持普通地址和Https认证

但是之后网站全部变成了Https，那么如何设置只输入域名而自动跳转到Https？

以IIS为例

1. 下载[Web平台组件](https://learn.microsoft.com/en-us/iis/install/web-platform-installer/web-platform-installer-v4-command-line-webpicmdexe-rtw-release)

    ![Web平台组件](https://image.ilyl.life:8443/network/iis5.png)

2. 在`Web平台组件`搜索[Url重定向](https://www.iis.net/downloads/microsoft/url-rewrite)并下载

    ![Url重定向](https://image.ilyl.life:8443/network/iis6.png)

3. 配置Url重定向

    ![Url重定向](https://image.ilyl.life:8443/network/iis11.png)

    1. 添加规则

        ![添加规则](https://image.ilyl.life:8443/network/iis7.png)

        ![空白规则](https://image.ilyl.life:8443/network/iis8.png)

    2. 名称：`https`
    3. 匹配URL：模式(T)：`(.*)`
    4. 条件：

        条件输入(C)：`{HTTPS}`

        模式(T)：`^OFF$`

        其他默认

        ![条件输入](https://image.ilyl.life:8443/network/iis9.png)

    5. 操作：

        操作类型(Y)：`重定向`

        重定向URL：`https://{HTTP_HOST}/{R:1}`

        重定向URL：`已找到(302)`

        ![操作](https://image.ilyl.life:8443/network/iis10.png)

## NAS端docker部署

NAS里没有IIS，用的Window系统除外，在NAS里找到Docker，下载NGINX镜像。

::: tip
主要是关于`NGINX`的配置，可以现在桌面端或者是Docker里配置完成之后，在进入NAS里进行配置。
:::

### Docker部署普通网站

1. 添加容器选择`Nginx`
2. 将网站目录添加到对应`Nginx`配置目录
3. 映射端口
4. 配置NAS端口防火墙
5. 配置光猫或者路由器转口转发

### Docker部署SSL网站

准备好证书文件，从哪里申请的就从哪里下载，关于[NGINX SSL配置](https://nginx.org/en/docs/http/ngx_http_ssl_module.html)。

步骤同上`Docker部署普通网站`，额外调整`*.conf`配置文件。

本网站Docker示例：

```bash
server {
    listen 443 ssl; 
    # 更改自己的域名
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

    # Force HTTPS，更改自己的域名
    return 301 https://blog.ilyl.life:8088;
  }
}
```
