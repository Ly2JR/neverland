# ==================== 构建阶段 ====================
FROM node:24.22.3-trixie-slim AS build-stage

LABEL maintainer="乌龙茶有点甜 <ly2jr@outlook.com>"

# HUSKY=0/CI=true：跳过 husky 的 git hooks 安装（镜像里没有 .git）
# 镜像源默认官方 npm registry（实测各网络环境可达）；
# 阿里源的 tarball CDN(cdn.npmmirror.com) 在部分 Docker 网络下不通，勿设为默认。
# 如需切换：--build-arg NPM_REGISTRY=https://registry.npmmirror.com
ARG NPM_REGISTRY=https://registry.npmjs.org
ENV HUSKY=0 \
    CI=true \
    NODE_OPTIONS=--max-old-space-size=16384 \
    npm_config_registry=${NPM_REGISTRY}

WORKDIR /neverland

# 固定 pnpm 版本（与本地 lockfile 一致），保证构建可复现
RUN npm install -g pnpm@12.18.0

# 第一步：只拷贝依赖清单，最大化利用层缓存
# 只要 lockfile 不变，改动源码就不会重新安装依赖
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# pnpm store 走 BuildKit 缓存挂载：下载缓存不写入镜像层，重复构建秒级命中
# --trust-lockfile：跳过 pnpm 12 的 supply-chain 校验 pass。
#   该 pass 会对 lockfile 里每个依赖逐条查 registry metadata 重新校验
#   minimumReleaseAge/trustPolicy，实测 1230 条耗时 7m36s，是构建变慢主因。
#   lockfile 已提交在仓库中且配合 --frozen-lockfile 不会被改写，构建环境视为可信即可跳过；
#   本地开发不传此参数，仍保留完整校验。
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --trust-lockfile

# 第二步：拷贝源码并构建
COPY src ./src

# 构建，并对文本类资源做 gzip 预压缩（gzip 默认删除原文件）
# 注意：保留 .html 不压缩 —— nginx 的目录首页(index)依赖真实的 index.html，
# 压缩掉会导致访问 / 时 403。JS/CSS/SVG 等由 nginx gzip_static + gunzip 模块处理，
# 支持 gzip 的直接返回压缩版，不支持的由 nginx 自动解压，兼顾体积与兼容性
RUN pnpm docs:build && \
    find src/.vuepress/dist -type f \
      \( -name '*.js' -o -name '*.css' -o -name '*.svg' \
         -o -name '*.xml' -o -name '*.txt' -o -name '*.webmanifest' \) \
      -exec gzip -9 {} +

# 最后拷贝生产阶段所需的 nginx 配置：放在构建之后，
# 这样仅修改 nginx 配置时不会触发整站重新构建
# 证书不再打入镜像 —— 域名与 HTTPS 由外层反向代理负责
COPY nginx.conf ./nginx.conf

RUN echo "🎉 编 🎉 译 🎉 成 🎉 功 🎉"

# ==================== 生产阶段 ====================
FROM nginx:1.31.8-alpine-slim AS production-stage

# 清除基础镜像自带的默认站点文件（nginx 欢迎页/错误页），避免残留 index.html 干扰
RUN rm -rf /usr/share/nginx/html/*

# 仅拷贝运行时必需：静态站点 + nginx 配置（不再含 SSL 证书）
# 构建阶段（node + node_modules）不会进入最终镜像
COPY --from=build-stage /neverland/src/.vuepress/dist /usr/share/nginx/html
COPY --from=build-stage /neverland/nginx.conf /etc/nginx/conf.d/default.conf

# 容器内只监听 80，TLS 由外层反向代理终结
EXPOSE 80

RUN echo "🎉 架 🎉 设 🎉 成 🎉 功 🎉"
