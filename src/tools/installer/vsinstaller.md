---
title: VS打包工具
date: 2023-10-7
category:
  - 打包
isOriginal: true
editLink: false
footer: false
copy: true
---

VS提供打包工具[Microsoft Visual Studio Installer Projects 2022](https://marketplace.visualstudio.com/items?itemName=visualstudioclient.MicrosoftVisualStudio2022InstallerProjects)在打包.net framework 4.8框架下的Signalr应用时，安装后提示：`Invalid negotiation response received.`

解决方案如下：

1. 排除主项目输出的依赖文件`System.Buffers.dll`和`System.Numerics.Vectors.dll`
2. 手动添加`System.Buffers.dll`和`System.Numerics.Vectors.dll`
