---
title: U8 费用项目
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![费用项目](https://nas.ilyl.life:8092/yonyou/u8/as/expenseitem.gif)

## 资源符

`expenseitem`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|费用项目编号|
|name|string||是|费用项目名称|
|memo|string||否|备注|
|cexpccode|string||否|费用项目分类编码|
|iexptaxrate|string||否|税率(%)|
|iexpprofititem|string||否|盈亏项目|
|ccode|string||否|科目|
|direction|string||否|方向|
|budgetitemcode|string||否|项目费用编码|
|budgetitemname|string||否|项目费用|
|operationtypecode|string||否|业务类型编码|
|operationtypename|string||否|业务类型名称|
|issubsidy|string||否|是否补助|

## 示例

::: tabs
@tab 新增

```json
{
    "expenseitem": {
        "code": "60",
        "name": "员工培训",
        "cexpccode": "6"
    }
}
```

@tab 响应

```json
{
    "errcode": "0",
    "errmsg": "",
    "id": "",
    "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::
