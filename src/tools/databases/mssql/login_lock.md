---
title: SqlServer登录锁定
date: 2025-02-08
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - MSSQL
  - 锁定
---

由于更改或者删除了Windows账户，导致无论是`Windows身份验证`还是`SQL Server身份验证`登录SSMS都登录不上，提示`登录已锁定`。

## 配置Sql Server Configuration Manager

1. 打开`Sql Server Configuration Manager`
2. 选择`SQL Server服务`
3. 找到`SQL Server(MSSQLSERVER)服务`，右击，选`属性`
4. 在`SQL Server(MSSQLSERVER)属性`页面里，找到`启动参数`，`指定启动参数`添加`-m`
5. 重新启动`SQL Server(MSSQLSERVER)`

## 设置新用户

1. 使用`Windows身份验证`登录
2. 打开`安全性\登录名`，删除旧的Windows用户
3. 选择`登录名`右击`新建登录名`，`搜索`添加当前Windows登录用户
4. 在`常规`选择页，启用`SQL Server身份验证`，输入新密码
5. 在`服务器角色`选择页，选择`public`和`sysadmin`

## 解锁sa登录锁定

1. 使用`Windows身份验证`登录
2. 打开`安全性\登录名`，选择`sa`右击`属性`
3. 在`状态`选择页，去掉`登录已锁定`

## 恢复配置

同上，去掉启动参数`-m`，重启服务即可。