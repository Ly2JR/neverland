---
title: Docker部署Bitwarden
date: 2025-02-20
editLink: false
footer: false
isOriginal: true
category:
  - Docker
tag:
  - Bitwarden
  - HTTPS
---

[Bitwarden](https://bitwarden.com/help/install-and-deploy-unified-beta/)私有部署文档

一个简单真实的`HTTPS Bitwarden`Docker-compose.yml

```yml
services:
  bitwarden-self-host:
    image: 'bitwarden/self-host:2025.2.1-beta'
    restart: always
    ports:
      - 5000:8443
    mem_limit: 500m
    volumes:
      - /bitwarden:/etc/bitwarden
    environment:
      - BW_PORT_HTTPS=8443
      - ASPNETCORE_HTTP_PORTS=8433
      - BW_DOMAIN=<your_domain>
      # Database
      - BW_DB_PROVIDER=sqlite
      - BW_DB_FILE=/etc/bitwarden/bitwarden.sqlite3
      # SSL
      - BW_ENABLE_SSL=true
      - BW_SSL_CERT=<your_domain.pem>
      - BW_SSL_KEY=<your_domain.key>
      # Reqiured
      - BW_INSTALLATION_ID=<your_id>
      - BW_INSTALLATION_KEY=<your_key>
```

`BW_INSTALLATION_ID`和`BW_INSTALLATION_KEY`[申请地址](https://bitwarden.com/host/)

## HTTPS浏览器插件正常，移动端登录不了

Bitwarden移动端登录提示无法验证服务器证书的问题，是因为配置的SSL证书不对

利用[What's My Chain Cert?](https://whatsmychaincert.com/)进行验证是否正确
