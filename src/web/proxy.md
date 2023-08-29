---
title: 反向代理
date: 2023-08-24
editLink: false
footer: false
isOriginal: true
category:
  - Web
tag:
  - IIS
  - 反向代理
  - 跨域
---

第三方`Https`接口不支持跨域，前端又想调用。

在Vite开发环境中，`vite.config.ts`配置了[代理](https://cn.vitejs.dev/config/server-options.html#server-proxy)正常访问，如下，但是生产环境又不行了...

```ts{5,6,9}
export default defineApplicationConfig({
  overrides: {
    server: {
      proxy: {
        '/proxy-api': {
          target: 'XXXXXXXXXX',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/proxy-api`), ''),
        },
      },
    },
  },
});
```

因此需要部署支持反向代理及跨域。

## 相关资料

[IIS反向代理](https://learn.microsoft.com/en-us/iis/extensions/url-rewrite-module/reverse-proxy-rule-template)
[IIS出站规则](https://learn.microsoft.com/en-us/iis/extensions/url-rewrite-module/creating-outbound-rules-for-url-rewrite-module)

## IIS反向代理

### 安装IIS插件

1. [Application Request Routing](https://www.iis.net/downloads/microsoft/application-request-routing)

2. [Url-Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite)

![根节点下显示](<https://nas.ilyl.life:8092/deploy/iis_proxy1.png> =420x200)

### 启动反向代理

1. 进入`Application Request Routing`
2. 点击右边`Server Proxy Settings...`
3. 勾选`Enable proxy`
4. 勾选`Keep alive`

![启动反向代理](<https://nas.ilyl.life:8092/deploy/iis_proxy12.png> =420x200)

### 新建网站

1. 选择网站右击添加网站
2. 输入`网站名称`
3. 选择`物理路径`,(选择一个空文件夹即可)
4. 设置`端口`后确认

### URL重写

1. 点击新建网站
2. 进入`Url 重写`

![URL 重写](<https://nas.ilyl.life:8092/deploy/iis_proxy.png> =420x200)

#### 入站规则

1. 输入`名称`
2. 匹配URL
    1. 请求的URL(R:):`与模式匹配`
    2. 模式:`^(.*)`

    ![匹配URL](<https://nas.ilyl.life:8092/deploy/iis_proxy2.png> =420x200)

3. 条件:
    1. 逻辑分组(G):`全部匹配`
    2. 条件输入(C):`{HTTPS}s`
    3. 检查输入字符串是否:`与模式匹配`
    4. 模式(T):`on(s)|offs`

    ![条件](<https://nas.ilyl.life:8092/deploy/iis_proxy3.png> =420x200)

4. 操作
    1. 操作类型(Y):`重写`
    2. 重写URL(L):`输入需要代理的地址`/{R:1}

    ![操作](<https://nas.ilyl.life:8092/deploy/iis_proxy4.png> =420x200)

5. 点击应用

![URL重写规则](<https://nas.ilyl.life:8092/deploy/iis_proxy5.png> =420x200)

#### 出站规则

1. 新建`Access-Control-Allow-Origin`出站规则
   1. 匹配范围:`服务器变量`
   2. 变量名称：`RESPONSE_Access-Control-Allow-Origin`
   3. 使用(S):`通配符`
   4. 模式(T):`.*`
   5. 操作属性值:`{HTTP_ORIGIN}`

    ![Access-Control-Allow-Origin](<https://nas.ilyl.life:8092/deploy/iis_proxy7.png> =420x200)

2. 新建`Access-Control-Allow-Methods`出站规则
   1. 匹配范围:`服务器变量`
   2. 变量名称：`RESPONSE_Access-Control-Allow-Methods`
   3. 使用(S):`通配符`
   4. 模式(T):`*`
   5. 操作属性值:`{HTTP_Access-Control-Request-Method}`

    ![Access-Control-Allow-Methods](<https://nas.ilyl.life:8092/deploy/iis_proxy8.png> =420x200)

3. 新建`Access-Control-Allow-Headers`出站规则
   1. 匹配范围:`服务器变量`
   2. 变量名称：`RESPONSE_Access-Control-Allow-Headers`
   3. 使用(S):`通配符`
   4. 模式(T):`*`
   5. 操作属性值:`{HTTP_Access-Control-Request-Headers}`

    ![Access-Control-Allow-Methods](<https://nas.ilyl.life:8092/deploy/iis_proxy9.png> =420x200)

4. 新建`Access-Control-Allow-Credentials`出站规则
   1. 匹配范围:`服务器变量`
   2. 变量名称：`RESPONSE_Access-Control-Allow-Credentials`
   3. 使用(S):`通配符`
   4. 模式(T):`*`
   5. 操作属性值:`true`

    ![Access-Control-Allow-Methods](<https://nas.ilyl.life:8092/deploy/iis_proxy10.png> =420x200)

5. 新建`Access-Control-Max-Age`出站规则
   1. 匹配范围:`服务器变量`
   2. 变量名称：`RESPONSE_Access-Control-Max-Age`
   3. 使用(S):`通配符`
   4. 模式(T):`*`
   5. 操作属性值:`3600`

    ![Access-Control-Allow-Methods](<https://nas.ilyl.life:8092/deploy/iis_proxy11.png> =420x200)

### 快捷方式

1. 修改`11行代码高亮处`替换成需要代理的网站
2. 将以下xml文件保存为`web.config`
3. 直接替换新建网站或者本地网址目录下的`web.config`文件
4. 重启IIS

```xml{11}
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="proxy">
                    <match url="^(.*)" />
                    <action type="Rewrite" url="https://www.XXXXXXX.com/{R:1}" />
                </rule>
            </rules>
            <outboundRules>
                <rule name="Origin" patternSyntax="Wildcard">
                    <match serverVariable="RESPONSE_Access-Control-Allow-Origin" pattern=".*" />
                    <action type="Rewrite" value="{HTTP_ORIGIN}" />
                </rule>
                <rule name="Methods" patternSyntax="Wildcard">
                    <match serverVariable="RESPONSE_Access-Control-Allow-Methods" pattern="*" />
                    <action type="Rewrite" value="{HTTP_Access-Control-Request-Method}" />
                </rule>
                <rule name="Headers" patternSyntax="Wildcard">
                    <match serverVariable="RESPONSE_Access-Control-Allow-Headers" pattern="*" />
                    <action type="Rewrite" value="{HTTP_Access-Control-Request-Headers}" />
                </rule>
                <rule name="Credentials" patternSyntax="Wildcard">
                    <match serverVariable="RESPONSE_Access-Control-Allow-Credentials" pattern="*" />
                    <action type="Rewrite" value="true" />
                </rule>
                <rule name="Max-Age" patternSyntax="Wildcard">
                    <match serverVariable="RESPONSE_Access-Control-Max-Age" pattern="*" />
                    <action type="Rewrite" value="3600" />
                </rule>
            </outboundRules>
        </rewrite>
    </system.webServer>
</configuration>

```

## Nginx反向代理

打开默认的`nginx.conf`配置,如下

取消注释`56-58行代码`,填写需要代理的地址即可。

例如本地服务地址`localhost`,需要访问`www.a.com/b.php`

57行代码调整为`proxy_pass www.a.com/b.php`

接口调用`localhost/b.php`即可

```conf{56-58}
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        location ~ \.php$ {
           proxy_pass    127.0.0.1:80;
        }

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }

    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
}
```
