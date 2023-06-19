---
title: 结算方式
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![结算方式](https://nas.ilyl.life:8092/yonyou/balancetype.gif)

## 资源符

`balancetype`

## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|结算方式编码|
|name|string||是|结算方式名称|
|flag|bool||是|是否票据管理|
|code_rank|bool||否|编码级次|
|end_rank_flag|bool||否|是否末级|
|issbilltype|bool||否|对应票据类型|
|bPortalSettle|bool||否|允许门户结算|
|iNEInBillType|bool||是|对应网报支付方式|

## 示例

::: tabs
@tab 新增

```json
{
    "balancetype":{
    "code":"601",
    "name":"花呗",
    "flag":"0",
    "code_rank":"2",
    "end_rank_flag":"1",
    "issbilltype":"3"
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
