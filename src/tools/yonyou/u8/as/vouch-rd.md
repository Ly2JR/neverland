---
title: 单据类型与收发类别对照表
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![单据类型与收发类别对照表](https://nas.ilyl.life:8092/yonyou/u8/as/vouchandrd.gif)

## 资源符

`vouchandrd`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|cvbtid|string||否|单据业务类型|
|cvrrcode|string||否|收类别编码|
|cvrscode|string||否|发类别编码|

## 示例

::: tabs
@tab 新增

```json
{
    "vouchandrd": {
        "cvbtid": "0101",
        "cvrrcode": "11"
    }
}
```

@tab- 响应

```json
{
    "errcode": "0",
    "errmsg": "",
    "id": "",
    "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::
