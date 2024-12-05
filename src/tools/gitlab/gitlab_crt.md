---
title: Gitlab证书更新
date: 2024-12-05
editLink: false
footer: false
isOriginal: true
category:
  - Gitlab
---

Gitlab部署请参考[这里](../docker/gitlab.md)

Gitlab证书更新需要`*.crt`和`*.key`

|服务器类型|证书格式|
|:-|:-|
|Nginx|pem/key|
|Tomact|pfx|
|Apache|crt/key|
|IIS|pfx|
|JKS|jks|
|其他|pem/key|
|根证书下载|crt/crt|

直接使用`Apache`服务器类型的证书即可，下载证书有三个`domain.key`、`domain_chain.crt`、`domain_public.crt`

在Gitlab的配置里使用`domain_public.crt`即可

```yml
nginx['ssl_certificate']='/etc/gitlab/ssl/domain_public.crt'
nginx['ssl_certificate_key']='/etc/gitlab/ssl/domain.key'
```