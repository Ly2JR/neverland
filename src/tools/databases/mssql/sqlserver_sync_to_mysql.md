---
title: 同步MySQL
date: 2023-06-19

editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - Sql Server
  - MySQL Server
  - 数据同步
---

## 说明

::: tip
使用MSSQL数据库自带的功能，配置即可实现双向同步
:::

## 下载

[MySql传送门](https://dev.mysql.com/downloads/installer/)

[MySql ODBC传送门](https://dev.mysql.com/downloads/connector/odbc/)

## 防火墙

::: tip
MySql:3306端口
:::

## MySql流程

::: warning
如果直接对目标表操作请忽略全部步骤，直接查看Sql Server流程
:::

### 中间库

该方式以中间库、表为中心流转，比较繁琐。

::: tip
中间库名：TempDataBase

中间表名：SnapLink

目标表名：Snap
:::

- 表结构

|字段|类型|描述|
|:-|:-|:-|
|tag|varchar|标签|
|datetime|datetime|时间|
|cvalue|decimal|数据|

- 脚本

::: tip
中间表和目标表结构保持一致
:::

::: tabs

@tab 中间库

```sql
Create database TempDataBase;
```

@tab 中间表

```sql
Create table `snap`(
    `tag`       varchar(100) character set utf8mb4 collate utf8mb4_0900_ai_ci null default null,
    `datetime`  datetime null default null,
    `cvalue`    decimal(18,2) null default null
)
```

:::

- 中间库账号

::: tabs
@tab 创建账号

```sql
CREATE USER 'demo'@'192.168.1.121' IDENTIFIED BY 'demo';
```

@tab 删除账号

```sql
DROP USER 'demo'@'192.168.1.121';
```

@tab 账号授权

```sql
GRANT SELECT ON TempDataBase.snap to 'demo'@'192.168.1.121'
```

@tab 刷新权限

```sql
flush privileges;
```

:::

- 远程访问表

::: tip
FEDEATED引擎规则：scheme://user_name[:password]@host_name[:port_num]/db_name/tbl_name
:::

```sql
Create table `snaplink`(
    `tag`       varchar(100) character set utf8mb4 collate utf8mb4_0900_ai_ci null default null,
    `datetime`  datetime null default null,
    `cvalue`    decimal(18,2) null default null
)ENGINE=FEDERATED CONNECTION='mysql://demo:demo@192.168.1.104:3306/TempDataBase/snap'
```

- 存储过程

```sql
delimiter $$
create procedure proc_upload_to_temp()
begin
  update snap,snaplink set snap.datetime=snaplink.datetime,
  snap.cvalue=snaplink.cvalue
  where snap.tag=snaplink.tag
end
delimiter;
```

- 调度

```sql
CREATE EVENT IF NOT EXISTS upload_to_temp_event
ON SCHEDULE EVERY 15 MINUTE
ON COMPLETION PRESERVE ENABLE
DO CALL proc_upload_to_temp();
```

### 事件

::: tabs

@tab 查看事件

```sql
SHOW events;
```

@tab 开启

```sql
ALTER EVENT upload_to_temp ENABLE;
```

@tab 关闭

```sql
ALTER EVENT upload_to_temp DISABLE;
```

@tab 删除

```sql
DROP EVENT IF EXISTS upload_to_temp;
```

:::

### 调度

::: tabs

@tab 查看调度

```sql
SHOW VARIABLES LIKE 'EVENT_SCHEDULER';
```

@tab 开启

```sql
SET GLOBAL EVENT_SCHEDULER = ON;
```

@tab 关闭

```sql
SET GLOBAL EVENT_SCHEDULER = OFF;
```

:::

### 查看引擎

```sql
SHOW ENGINES;
```

- 启用FEDERATED

  - 文件路径

    默认 C:\ProgramData\MySQL\MySQL Server 8.0\my.ini

  - 添加引擎

    文件末尾添加**federated**

  - 重启mysql服务

## Sql Server 流程

### 配置ODBC

- 打开ODBC

    搜索`ODBC`

- 添加系统数据源

    `系统DSN`->`添加`->`MySQL ODBC 8.0 Unicode Driver`

- 配置系统数据源

::: tip
TCP/IP Server 为目标库或中间库的IP和端口
:::

中间库配置示例:

```txt
|Data Srouce Name |MySql        |
|Description      |MySql        |
|TCP/IP Server    |192.168.1.104|
|Port             |3306         |
|User             |demo         |
|Password         |demo         |
|Database         |TempDataBase |
```

### 配置链接服务器

- 新建链接服务器

  路径：`服务器对象`->`链接服务器`;
  选中右击新建

- 配置链接服务器

常规:

```txt
|链接服务器(N)     |MySql                                     |
|服务器类型        |其他数据源                                 |
|提供程序(p)       |Microsoft OLE DB Provider for ODBC Drivers|
|数据源            |MySql                                     |
```

安全性:

```txt
|远程登录(R)       |demo  |
|使用密码(P)       |demo  |
```
