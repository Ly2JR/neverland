---
title: 连续的日期
date: 2023-06-19
dir.order: 1
order: 1
editLink: false
footer: false
isOriginal: true
category:
  - 数据库
tag:
  - mssql
---

```sql
select convert(nvarchar(10),dateadd(day,number,'2021-01-01'),121) as dt
from master.dbo.spt_values  
where type ='P' and number <=DATEDIFF(day, '2021-01-01',   '2021-12-31')
```
