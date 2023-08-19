---
title: Mariadb
date: 2023-08-19
dir.order: 2
order: 2
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag: 
  - Mariadb
---

如何开通外网？

1. NAS->控制面板->终端机和SNMP->终端机->勾选`启动SSH功能`
2. 利用Xshell登录系统
3. 进入Mariadb目录,`volume1`为安装目录

    ```cmd
    cd /volume1/@appstore/MariaDB10/usr/local/mariadb10/bin
    ```

4. 进入marialdb,输入以下命令，之后输入密码，登录成功显示`MariaDB[(none)]>`

    ```cmd
    ./mysql -u root -p
    ```

5. 切换数据库

    ```cmd
    use mysql
    ```

6. 更改管理员`root`host，忽略提示`Duplicate entry '%-root' for key 'PRIMARY'`

    ```cmd
    update user set host='%' where user='root';
    ```

7. 更新权限

    ```cmd
    FLUSH PRIVILEGES;
    ```

8. 开启MarialDB端口防火墙

9. 设置端口转发
