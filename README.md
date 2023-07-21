# NEVERLAND

## 简介

一个基于 VuePress 的个人博客，主要记录日常生活、开发问题和一些笔记。

## 环境

### 开发工具

[VSCode](https://code.visualstudio.com/)

### 软件工具

[Vuepress](https://v2.vuepress.vuejs.org/zh/)

[Vuerepss Theme Hope](https://theme-hope.vuejs.press/zh/)

[Docker](https://www.docker.com/)

### 部署工具

NAS

## 安装使用

- 获取代码

```command
git clone https://github.com/ly2jr/neverland.git
```

- 安装依赖

```command
cd neverland

pnpm install
```

- 运行

```command
pnpm docs:dev
```

- 打包

```command
pnpm docs:build
```

## docker

dockerFile位于项目根目录下，支持差异化部署

nginx.conf位于项目更目录下，支持差异化部署

### SSL

1. 将`*.key`和`*.pem`的证书放在当前目录`certs`下
2. 将`nginx.conf`下的443端口对应的`server_name`改为自己的域名

### 构建镜像

```command
docker build -t neverland -f Docker .
```
