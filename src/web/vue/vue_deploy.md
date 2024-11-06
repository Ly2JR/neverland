---
title: Vue部署
date: 2024-04-28
editLink: false
footer: false
isOriginal: true
category:
  - Web
---

Vue部署到Docker有两种模式

## Docker部署

先将Web项目`Build`之后，生成的部署文件在`dist`目录下拷贝到Docker中进行部署

```dockerfile
# node 构建
FROM node:22.0.0-alpine as build-stage
# 署名
LABEL maintainer="乌龙茶有点甜 <982474256@qq.com>"
# 指定目录
WORKDIR /web
# 将当前所有目录拷贝到工作目录
COPY . /web
# nginx 部署
FROM nginx:1.25.5-alpine as production-stage
# 拷贝编译后的文件
COPY --from=build-stage /web /usr/share/nginx/html
# 提供服务端口
EXPOSE 80
RUN echo "🎉 架 🎉 设 🎉 成 🎉 功 🎉"
```

## Docker编译部署

将整个Web项目拷贝到Docker中，在Docker中进行编译部署，具体参考本博客[Dockerfile](https://github.com/Ly2JR/neverland/blob/main/Dockerfile)文件
