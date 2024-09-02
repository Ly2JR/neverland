---
title: 原因码档案
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![原因码档案](https://nas.ilyl.life:8092/yonyou/u8/as/reason.gif)

## 资源符

`reason`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||否|编码|
|name|string||否|名称|
|Reasontype|string||否|所属类型|
|ReasonMemo|string||否|说明|

## 示例

::: tabs
@tab 新增

```json
{
    "reason": {
        "code": "00",
        "name": "无原因",
        "Reasontype": "3"
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
