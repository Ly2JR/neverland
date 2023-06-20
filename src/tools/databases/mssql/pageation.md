---
title: 分页
date: 2023-06-19
dir.order: 2
order: 2
editLink: false
footer: false
isOriginal: true
category:
  - 数据库
tag:
  - mssql
---

## `offset`...`rows fetch next`...`rows only`

::: tip
Sql Server 2012及以上才可以使用
:::

```sql
select * from Persons order by FirstName offset 10 rows fetch next 10 rows only;
```

## ROW_NUMBER

```sql
select *, ROW_NUMBER() over(order by FirstName) as row from Persons
```
