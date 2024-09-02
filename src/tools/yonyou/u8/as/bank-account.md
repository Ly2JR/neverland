---
title: 银行对账单
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![银行对账单](https://nas.ilyl.life:8092/yonyou/u8/as/bankacc.gif)

## 资源符

`bankacc`

## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|date|string||否|银行对账单日期|
|subjectcode|string||否|科目编码|
|balancetype|string||否|结算方式|
|balanceno|string||否|结算号|
|debitorcredit|string||否|方向|
|money|string||否|金额|
|balance|string||否|余额|
|flag|string||否|对帐标志|
|beginflag|string||否|期初标志|
|bdelete|string||否|是否核销|

## 示例

::: tabs
@tab 新增

```json
{
    "bankacc":{
        "date":"2016-01-01",
        "subjectcode":"100201",
        "balancetype":"1",
        "balanceno":"99",
        "debitorcredit":"贷",
        "money":"200",
        "balance":"",
        "flag":"",
        "beginflag":"",
        "bdelete":""
    }
}
```

@tab 响应

```json
{
    "errcode":"0",
    "errmsg":"",
    "id":"",
    "tradeid":"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::
