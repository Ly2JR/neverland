---
title: 存货货位对照表
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![存货货位对照表](https://nas.ilyl.life:8092/yonyou/invandpos.gif)

## 资源符

`invandpos`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|cinvcode|string||是|存货编码|
|cposcode|string||是|货位编码|
|iprior|string||否|优先顺序|

## 示例

::: tabs
@tab 新增

```json
{
    "invandpos": {
        "cinvcode": "01019002063",
        "cposcode": "40-G-0-0-0",
        "iprior": "1"
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
