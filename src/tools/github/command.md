---
title: 常用命令
date: 2024-10-14
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - Github
---

## 查看配置

```bash
git config --list
```

### 配置ssl

::: tip
出现`SSL certificate problem:unable to get local issuer certificate`错误时使用
:::

Https证书:`XXX.crt`

```bash
git config --global http.sslCAInfo X:\\XXX.crt
```

如果是低版本的Git,可以关闭ssl验证

```bash
git config --global http.sslVerify false
```

`gitlab`如果与其他冲突产生证书问题

```bash
git config --global http.sslBackend schannel
```

## 配置accesstoken

access token:`xxxxxxx`

```bash
git config --global url."https://oauth2:xxxxxxx@nas.ilyl.life".insteadof "https://nas.ilyl.life"
```

## 配置全局用户

```bash
git config --global user.name xxx
```

## 配置全局邮箱

```bash
git config --global user.email xxx
```

## 删除全局配置

```bash
git config --global user.name
```

## 创建仓库

```bash
git init -b main
```

## 查看分支

```bash
git branch -v
```

## 重命名分支

```bash
git branch -m <new-branch>
```

## 删除分支

```bash
git branch -d <old-branch>
```

## 添加文件

```bash
git add .
```

## 添加注释

```bash
git commit -m '注释'
```

## 查看远程

```bash
git remote -v
```

## 添加url

```bash
git remote add origin https://XXXX.git
```

## 删除url

```bash
git remote remove origin
```

## 推送

```bash
git push origin main
```

## 拉取

```bash
git pull origin main
```

## 更改远程url

```bash
git remote set-url origin https://xxx.git
```

## 指定分支克隆

```bash
git clone -b <new branch> https://xxx.git
```

## 代理

如果有科学上网工具，配置代理端口`1`即可

```bash
git config --global http.proxy http://127.0.0.1:1
git config --global https.proxy http://127.0.0.1:1
```