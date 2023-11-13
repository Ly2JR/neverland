---
title: NPM更新
date: 2023-11-13
editLink: false
footer: false
isOriginal: true
category:
  - Web
---

经常会出现NPM升级的问题，无论是全局升级`npm up -g npm@latest`还是局部升级`npm up npm@latest`

升级成功，但是查询版本号时`npm -v`还是老版本。

网上很多说路径问题，但是怎么改都无效，其实该问题在[npm升级](https://docs.npmjs.com/try-the-latest-stable-version-of-npm#upgrading-on-windows)文档已说明。

操作方式如下：

1. 在系统环境变量`PATH`中，添加`%appdata%\npm`和`%ProgramFiles%\nodejs`路径。
2. 删除`%ProgramFiles%\nodejs\npm`和`%ProgramFiles%\nodejs\npm.cmd`路径，如果存在的话。
3. 使用`cmd管理员`运行模式,输入`cd %ProgramFiles%\nodejs`定位到执行目录，在执行`npm install npm@latest`进行升级即可。
