---
title: 常用命令
date: 2024-10-14
dir.order: 1
order: 1
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
git remote add orgin http://XXXX.git
```

## 删除url

```bash
git remote remove orgin
```

## 推送

```bash
git push orgin main
```

## 拉取

```bash
git pull orgin main
```

## 更改远程url

```bash
git remote set-url origin http://xxx.git
```