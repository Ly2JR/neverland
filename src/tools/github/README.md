---
title: Github无法访问
date: 2024-01-19
editLink: false
footer: false
category:
  - 工具箱
tag:
  - Github
---


1. 浏览器打开[https://sites.ipaddress.com/github.com/](https://sites.ipaddress.com/github.com/)

2. 往下浏览到`DNS Resource Records`部分，显示

    ```txt
    github.com IN A 140.82.112.3
    ```

3. 打开`hosts`文件,路径`C:\Windows\System32\drivers\etc\hosts`
4. 在结尾处添加`github` dns映射,并保存

    ```txt
    # github
    140.82.112.3 github.com
    ```

    ::: warning
    提示没有权限或者错误时

    右击属性\安全\添加当前角色
    :::

5. 打开`cmd`，运行`ipconfig/flushdns`
