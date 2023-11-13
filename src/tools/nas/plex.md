---
title: Plex证书无效
date: 2023-11-13
isOriginal: true
category:
  - 工具箱
tag:
  - Plex
editLink: false
footer: false
copy: true
---

Plex最新版本，使用自定义证书发现无论如何都识别不到。相关问题在[官方论坛](https://forums.plex.tv/t/plex-media-server-1-32-0-6918-custom-certificate-must-be-regenerated-with-new-openssl-arguments/837643)讨论过，解决方式如下。

## 解决方式

1. 下载并安装[OPENSSL](https://www.openssl.org/source/),由于Windows需要自己编译而无法直接安装,需要安装[windows OPENSSL](https://slproweb.com/products/Win32OpenSSL.html)，默认路径`C:\Program Files\OpenSSL-Win64`
2. 下载域名证书`*.pem`和`*.key`两个文件
3. 打开OPENSSL安装目录，输入`cmd`
4. 输入转换`openssl pkcs12 -export -out new.pfx -certpbe AES-256-CBC -keypbe AES-256-CBC -macalg SHA256 -inkey domain.key -in domain.pem -password pass:?????`
5. 生成新的`new.pfx`文件
6. 在Plex设置里找到`网络`
7. 在自定义证书位置输入新的`*.pfx`证书位置
8. 在自定义证书加密密钥输入`pass:???`pass后的密钥
9. 在自定义证书域输入自己的域名
10. 在自定义服务器访问URL输入自己的Plex服务器URL路径
11. 点击保存修改
12. 重启Plex服务

## 示例

以群晖NAS和Windows64为例

1. 从阿里云或者腾讯等厂商下载域名证书，例如域名为`mydomain.com`下载的域名证书为`mydomain.com.pem`和`mydomain.com.key`两个证书文件,放到Windows`C:\`目录下
2. 安装Windows OPENSSL,打开OPENSSL安装目录`Bin`，默认路径`C:\Program Files\OpenSSL-Win64`，在地址栏，删除`C:\Program Files\OpenSSL-Win64\bin`输入`cmd`
3. 录入`openssl pkcs12 -export -out c:\mydomain.pfx -certpbe AES-256-CBC -keypbe AES-256-CBC -macalg SHA256 -inkey c:\mydomain.key -in c:\mydomain.pem -password pass:mydomainpass`,并回车，在C盘目录下生成`mydomain.pfx`
4. 将`mydomain.pfx`文件上次到NAS文件夹中，例如`certs`文件夹下
5. 登录Plex，打开设置，找到网络
6. 在自定义证书位置输入`/volume1/certs/mydomain.pfx`
7. 在自定义证书加密密钥输入`mydomainpass`
8. 在自定义证书域输入`mydoamin`
9. 在自定义服务器访问输入`https://mydomain.com:32400`
10. 点击保存修改
11. 在套件中心停用Plex并重启
