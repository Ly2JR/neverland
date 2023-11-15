# node 构建
FROM node:21.2.0-alpine as build-stage
# 署名
LABEL maintainer="乌龙茶有点甜 <982474256@qq.com>"
# 指定目录
WORKDIR /neverland
# 安装nginx
# RUN apt-get update \
#     && apt-get install -y nginx
# 将当前所有目录拷贝到工作目录
COPY . /neverland
# 设置 node 阿里镜像
RUN npm config set registry https://registry.npm.taobao.org
# 设置--max-old-space-size
ENV NODE_OPTIONS=--max-old-space-size=16384
# 设置阿里镜像、pnpm、依赖
RUN npm install pnpm -g && \
    pnpm install
# 编译
CMD ["pnpm", "run", "docs:build"]
# node部分结束
RUN echo "🎉 编 🎉 译 🎉 成 🎉 功 🎉"
# nginx 部署
FROM nginx:1.25.3-alpine as production-stage
# # 拷贝编译后的文件
COPY --from=build-stage /neverland/src/.vuepress/dist /usr/share/nginx/html
# 配置nginx
COPY --from=build-stage /neverland/nginx.conf /etc/nginx/conf.d/default.conf
# 加载SSL证书
COPY --from=build-stage /neverland/certs /usr/share/certs
# 提供服务端口
EXPOSE 80
RUN echo "🎉 架 🎉 设 🎉 成 🎉 功 🎉"