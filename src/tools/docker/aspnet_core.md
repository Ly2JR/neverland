---
title: Docker部署ASP.NET Core
date: 2025-02-20
editLink: false
footer: false
isOriginal: true
category:
  - DOCKER
tag:
  - images
  - ASP.NET Core
  - ASP.NET Core Https
  - NET9
---

利用VS创建的默认ASP.NET Core项目并启用`Https`和`Docker`

无论在VS里调试还是Docker里调试，`http`和`https`都正常

但是部署在服务器，使用真正的域名和`HTTPS`，发现`HTTPS`始终连接不上，但`HTTP`正常。

一个最简单真正能运行[Docker Compose 与HTTPS](https://learn.microsoft.com/zh-cn/aspnet/core/security/docker-compose-https?view=aspnetcore-9.0)的docker-compose.yml

代码示例直接VS默认创建即可

```yml{5,6,9-11}
services:
  webapi:
    image: 'webapi:latest'
    ports:
      - 5000:8080
      - 5001:8081
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - ASPNETCORE_URLS=https://+:8081;http://+:8080
      - ASPNETCORE_Kestrel__Certificates__Default__Password=<your_pfx_password>
      - ASPNETCORE_Kestrel__Certificates__Default__Path=/app/.aspnet/https/your_ssl_pfx.pfx
    volumes:
      - your_ssl_pfx.pfx:/app/.aspnet/https/your_ssl_pfx.pfx:ro
```

Docker内的ASP.NET Core默认端口为[http:8080和https:8081](https://learn.microsoft.com/zh-cn/dotnet/core/compatibility/containers/8.0/aspnet-port)。
 
`5000:8080`将HTTP的8080端口映射到主机的5000端口。

`5001:8081`将HTTPS的8080端口映射到主机的5001端口。

外网访问地址:`https://domain.com:5001`或`http://domain.com:500`

[ASPNETCORE_URLS](https://learn.microsoft.com/zh-cn/aspnet/core/fundamentals/servers/kestrel/endpoints?view=aspnetcore-9.0)绑定到`8080`和`8081`上，不写或者其他都有问题

`ASPNETCORE_Kestrel__Certificates__Default__Password`pfx证书密码

`ASPNETCORE_Kestrel__Certificates__Default__Path`pfx存储路径，查看docker文件,`root`无法访问

::: warning
Docker挂载本地文件夹需要授权`Everyone`，否则提示没有权限访问证书文件
:::
