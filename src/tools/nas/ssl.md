---
title: SSL证书申请
date: 2025-06-03
isOriginal: true
category:
  - 工具箱
tag:
  - 证书
  - SSL
editLink: false
footer: false
copy: true
---

现在网站基本都要SSL证书了。

好消息是有的DNS服务商可以申请免费的证书，如阿里云的20个。

坏消息是每个免费证书的有效期只有三个月，对于需要大量证书，是一个比较麻烦的问题。

好消息是可以使用[Let's Encrypt](https://letsencrypt.org/zh-cn/)进行申请。

坏消息是`Let's Encrypt`需要80端口。

好消息是可以使用[lego](https://github.com/go-acme/lego)进行签发。

以Windows 10，进行[lego阿里云DNS签发](https://go-acme.github.io/lego/dns/alidns/)证书为例。

下载lego二进制文件[lego_v4.28.1_windows_amd64](https://github.com/go-acme/lego/releases)安装。

将文件夹目录放在系统环境变量目录下，或者直接在目录下使用`cmd`。

```bash
$env:ALICLOUD_ACCESS_KEY="abcdefghijklmnopqrstuvwx"
$env:ALICLOUD_SECRET_KEY="your-secret-key"
lego --email="you@example.com" --dns alidns --d="*.example.com" -d="example.com" run
```

```cmd
set ALICLOUD_ACCESS_KEY="abcdefghijklmnopqrstuvwx"
set ALICLOUD_SECRET_KEY="your-secret-key"
lego --email="you@example.com" --dns alidns --d="*.example.com" -d="example.com" run
```

在`.lego\certificates`目录下出现你要申请证书
