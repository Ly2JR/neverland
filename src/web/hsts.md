---
title: Edge浏览器HSTS验证
date: 2026-05-25
editLink: false
footer: false
isOriginal: true
category:
  - Edge浏览器
---

有时网站SSL证书失效，浏览提示`NET::ERR_CERT_COMMON_NAME_INVALID`...因为网站使用的是HSTS...

这时在浏览器地址输入`edge://net-internals/#hsts`

在`Delete domain security policies`里填写`域名`进行`Delete`
