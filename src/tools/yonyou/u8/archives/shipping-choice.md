---
title: 发运方式
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![发运方式](https://nas.ilyl.life:8092/yonyou/u8/shippingchoice.gif)

## 资源符

`shippingchoice`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|发运方式编码|
|name|string||是|发运方式名称|
|cscenname|string||否|发运方式英文名称|

## 示例

::: tabs
@tab 新增

```json
{
    "shippingchoice": {
        "code": "05",
        "name": "自提",
        "cscenname":"Self Mention"
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
