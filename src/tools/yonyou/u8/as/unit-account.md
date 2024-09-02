---
title: 交易单位账号
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![交易单位账号](https://nas.ilyl.life:8092/yonyou/u8/as/unitacc.gif)

## 资源符

`unitacc`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|caccountnumber|string||是|银行账号|
|cpayunitid|string||是|交易方编号|
|bisdefault|string||否|是否默认账号|
|cbankid|string||是|所属银行|
|cbankname|string||否|开户行|
|caccname|string||否|账户名称|
|cprinvince|string||否|省自治区|
|ccity|string||否|市县|

## 示例

::: tabs
@tab 新增

```json
{
    "unitacc": {
        "caccountnumber": "11123123",
        "cpayunitid": "0001",
        "bisdefault": "1",
        "cbankid": "00002",
        "cbankname": "南京银行",
        "caccname": "个人",
        "cprinvince": "",
        "ccity": ""
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
