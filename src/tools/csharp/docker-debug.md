---
title: VS调试Docker
date: 2024-01-16
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
  - Docker
---

VS进行Docker调试时，半天卡住不动，查看日志显示`vs2017u5 exists,deleting.`

```cmd
>Info: Using vsdbg version '17.8.11212.2'
>Info: Using Runtime ID 'linux-x64'
>Info: c:\用户\admin\vsdbg\vs2017u5 exists,deleting.
```

## 解决方法

1. 下载文件`vsdbg-linux-x64.zip`，替换自动的版本号

    链接：`https://vsdebugger.azureedge.net/vsdbg-17-8-11212-2/vsdbg-linux-x64.zip`

2. 下载文件`vsdbg-linux-musl-x64`，替换自动的版本号

    链接`https://vsdebugger.azureedge.net/vsdbg-17-8-11212-2/vsdbg-linux-musl-x64.zip`

3. 打开`vsdbg`目录,新建`vs2017u5`文件夹

4. 将`vsdbg-linux-x64.zip`解压到`vs2017u5`文件夹下

5. 将`vsdbg-linux-musl-x64.zip`解压到`vs2017u5/linux-musl-x64`文件夹下

6. 重启VS
