---
title: Docker部署ShowDoc
date: 2026-06-10
editLink: false
footer: false
isOriginal: true
category:
  - Docker
tag:
  - ShowDoc
---

## 环境

[Show Doc Github地址](https://github.com/star7th/showdoc)

[官方Docker安装方式](https://www.showdoc.com.cn/help/65610)

::: warning

使用最新的latest进行拉取

```cmd
docker pull star7th/showdoc:latest
```
:::

## docker-compose.yaml

```yaml{9,11}
services:
  showdoc:
    container_name: ShowDoc
    image: 'star7th/showdoc:latest'
    restart: always
    environment:
      IN_CHINA: true
    ports:
      - 4999:80
    volumes:
      - X:\\showdoc:/var/www/html
    tty: true
```

## 问题

1. 使用`/var/www/html`而不是`/showdoc_data/html`
2. `https`问题，默认有个三个端口`80`、`443`、`9000`，正常反向代理`80`即可。如果没有反向代理，需要配置`nginx.conf`
3. 挂载路径需要`everyone`权限