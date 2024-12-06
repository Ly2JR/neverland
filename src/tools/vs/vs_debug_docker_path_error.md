---
title: VS调试Docker路径无效
date: 2024-12-6
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - Visual Studio
  - Docker
---

VS调试Docker时，提示调试程序路径“...\vsdbg\vs2017u5”无效。

找到`vs2017u5`文件夹，发现是空的，按照[路径存在的问题](./vs_debug_docker_exist.md)处理，Docker能正常启动运行，但是不能调试，说明版本不对。

打开PowerShell

输入`cd "C:\Users\XXX\AppData\Local\Temp\`

然后运行`./GetVsDbg.ps1 -Version vs2017u5 -RuntimeID linux-x64 -InstallPath "C:\Users\XXX\vsdbg\vs2017u5"`

显示出版本信息

```bash
Info: Using vsdbg version '17.12.11102.1'
Info: Using Runtime ID 'linux-x64'
Info: C:\\Users\\XXX\\vsdbg\vs2017u5 exists, deleting.
```

然后按照路径存在的问题下载正确的包即可。
