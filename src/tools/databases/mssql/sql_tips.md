---
title: SQL技巧
date: 2024-11-05
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - MSSQL
---

## 比较两个表是否相等

使用[checksum_agg](https://learn.microsoft.com/zh-cn/sql/t-sql/functions/checksum-agg-transact-sql?view=sql-server-ver16)和[binary_checksum](https://learn.microsoft.com/zh-cn/sql/t-sql/functions/binary-checksum-transact-sql?view=sql-server-ver16)比较两个表是否相等

```sql
select checksum_agg(binary_checksum(*)) from table
```

```sql
Create Proc CheckTableEquals
(
	@tableName1 nvarchar(20)='',
	@tableName2 nvarchar(20)=''
)
as
	declare @hash1 int=-1
	declare @hash2 int=-2
	declare @sSql nvarchar(200);
	set @sSql=N'select @hash1=checksum_agg(binary_checksum(*)) from '+@tableName1
	exec sp_executesql @sSql,N'@hash1 int out',@hash1 out
	set @sSql=N'select @hash2=checksum_agg(binary_checksum(*)) from '+@tableName2
	exec sp_executesql @sSql,N'@hash2 int out',@hash2 out
	if @hash1=@hash2 
		select '相等'
	else
		select '不相等'
go
```

## 连续的日期

```sql
select convert(nvarchar(10),dateadd(day,number,'2021-01-01'),121) as dt
from master.dbo.spt_values  
where type ='P' and number <=DATEDIFF(day, '2021-01-01',   '2021-12-31')
```

## 数据分页

### `offset`...`rows fetch next`...`rows only`

::: tip
Sql Server 2012及以上才可以使用
:::

```sql
select * from Persons order by FirstName offset 10 rows fetch next 10 rows only;
```

### ROW_NUMBER

```sql
select *, ROW_NUMBER() over(order by FirstName) as row from Persons
```

## 姓氏排序

使用[Chinese_PRC_Stroke_ci_as](https://learn.microsoft.com/zh-cn/sql/relational-databases/collations/collation-and-unicode-support?view=sql-server-ver16)排序

排序前:

|姓名|
|:-|
|周一|
|吴二|
|王三|
|赵死|
|钱五|

```sql
Select * From Table Order By Name Collate Chinese_PRC_Stroke_ci_as  
```

排序后:

|姓名|
|:-|
|王三|
|吴二|
|周一|
|赵四|
|钱五|

## 与表相关的视图、存储过程、函数

```sql
select a.* from sysobjects a
inner join syscoMMents b on a.id = b.id 
where b.text like '%table%'
```

## 重命名数据库

使用[sp_renamedb](https://learn.microsoft.com/zh-cn/sql/relational-databases/system-stored-procedures/sp-renamedb-transact-sql?view=sql-server-ver16)

```sql
sp_renamedb 'old_name', 'new_name' 
```

## 查看表的所有字段

```sql
select name from syscolumns where id=object_id('table')
```

## 只复制表结构不复制数据

```sql
select top 0 * into TableCopy from Table
```

## 分区视图

创建分库表

```sql
create table tempdb.dbo.t_10(
id int primary key check(id between 1 and 10),name varchar(10))

create table master.dbo.t_20(
id int primary key check(id between 11 and 20),name varchar(10))

create table model.dbo.t_30(
id int primary key check(id between 21 and 30),name varchar(10))
go
```

创建总视图

```sql
create View v_t
as
	select * from tempdb.dbo.t_10
	union all
	select * from master.dbo.t_20
	union all
	select * from model.dbo.t_30
go
```

添加数据

```sql
insert v_t select 1 ,'aa'
union all select 2 ,'bb'
union all select 11,'cc'
union all select 12,'dd'
union all select 21,'ee'
union all select 22,'ff'
```

更新数据

```sql
update v_t set name=name+'_更新' where right(id,1)=1
```

查询数据

```sql
select * from v_t 
```

## 树形数据查询

建表

```sql
create table temp
( 
	id int primary key  identity(1,1),
	pid int, --子节点
	name nvarchar(20),
) 
```

模拟数据

|ID|PID|Name|
|:-|:-|:-|
|1|0|中国
|2|1|北京
|3|1|上海
|4|1|江苏
|5|4|苏州
|6|6|常熟
|7|4|南京
|8|4|无锡

找到指定节点的末级

```sql
create function Fn_ExpandNode
(
	@id int --父节点
) returns @Ret table(id int,level int)
as
	begin
		declare @l int=0 --默认层级0
		insert @Ret select @id,@l
		while @@rowcount>0
			begin
				set @l=@l+1
				insert @Ret select a.id,@l
				from tb a
				inner join @Ret b
				on a.pid=b.id
				where b.level=@l-1
			end
		return
	end
go
```

显示树形结果

```sql
select a.*,b.[level] 层次 from temp a
inner join Fn_ExpandNode(1) b 
on a.[id]=b.[id]
```

|ID|PID|Name|层次|
|:-|:-|:-|:-|
|1|0|中国|0|
|2|1|北京|1|
|3|1|上海|1|
|4|1|江苏|1|
|5|4|苏州|2|
|6|5|常熟|3|
|7|4|南京|2|
|8|4|无锡|2|

## 链接服务器

```sql
EXEC master.dbo.sp_addlinkedserver @server = N'127.0.0.1', @srvproduct=N'SQL Server'
EXEC master.dbo.sp_addlinkedsrvlogin @rmtsrvname=N'127.0.0.1',@useself=N'False',@locallogin=NULL,@rmtuser=N'sa',@rmtpassword='########'
GO
EXEC master.dbo.sp_serveroption @server=N'127.0.0.1', @optname=N'collation compatible', @optvalue=N'false'
GO
EXEC master.dbo.sp_serveroption @server=N'127.0.0.1', @optname=N'data access', @optvalue=N'true'
GO
EXEC master.dbo.sp_serveroption @server=N'127.0.0.1', @optname=N'dist', @optvalue=N'false'
GO
EXEC master.dbo.sp_serveroption @server=N'127.0.0.1', @optname=N'pub', @optvalue=N'false'
GO
EXEC master.dbo.sp_serveroption @server=N'127.0.0.1', @optname=N'rpc', @optvalue=N'true'
GO
EXEC master.dbo.sp_serveroption @server=N'127.0.0.1', @optname=N'rpc out', @optvalue=N'true'
GO
EXEC master.dbo.sp_serveroption @server=N'127.0.0.1', @optname=N'sub', @optvalue=N'false'
GO
EXEC master.dbo.sp_serveroption @server=N'127.0.0.1', @optname=N'connect timeout', @optvalue=N'0'
GO
EXEC master.dbo.sp_serveroption @server=N'127.0.0.1', @optname=N'collation name', @optvalue=null
GO
EXEC master.dbo.sp_serveroption @server=N'127.0.0.1', @optname=N'lazy schema validation', @optvalue=N'false'
GO
EXEC master.dbo.sp_serveroption @server=N'127.0.0.1', @optname=N'query timeout', @optvalue=N'0'
GO
EXEC master.dbo.sp_serveroption @server=N'127.0.0.1', @optname=N'use remote collation', @optvalue=N'true'
GO
EXEC master.dbo.sp_serveroption @server=N'127.0.0.1', @optname=N'remote proc transaction promotion', @optvalue=N'true'
GO
```
