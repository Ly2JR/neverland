---
title: 群晖MariaDB10
date: 2023-08-19
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag: 
  - Mariadb
  - 群晖
---

MarialDB10安装后，提示`1130`

1. NAS->控制面板->终端机和SNMP->终端机->勾选`启动SSH功能`
2. `cmd`输入`ssh your_user@your_domain -p <your_port>`
3. 进入Mariadb目录，`volume1`为安装目录

    ```bash
    cd /volume1/@appstore/MariaDB10/usr/local/mariadb10.11/bin
    ```

    如果不能直接进入,一般是`mariadb10`的版本问题，使用`ls`查看当前文件夹,

4. 进入marialdb，输入以下命令，之后输入密码

    ```bash
    ./mysql -u root -p
    ```

    登录成功显示`MariaDB[(none)]>`

5. 切换数据库

    ```bash
    use mysql
    ```

6. 更改管理员`root`host，忽略提示`Duplicate entry '%-root' for key 'PRIMARY'`

    ```bash
    update user set host='%' where user='root';
    ```

    如果提示`ERROR 1356 (HY000)`错误,使用以下授权

    ```bash
     rename user 'root'@'localhost' to '<your_new_name>'@'&';
    ```

7. 更新权限

    ```cmd
    FLUSH PRIVILEGES;
    ```

8. 开启MarialDB端口防火墙

9. 设置端口转发

## 设置新用户

```bash
create user 'your_user'@'your_ip' identified by 'your_password';
```

## 授权新用户指定数据库

```bash
grant all privileges on database_name.your_new_database to 'your_user'@'your_password';
```
