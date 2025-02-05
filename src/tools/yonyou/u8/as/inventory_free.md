---
title: U8 存货自由项对照表
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![存货自由项对照表](https://nas.ilyl.life:8092/yonyou/u8/as/invandfree.gif)

## 资源符

`invandfree`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|cinvcode|string||是|存货编码|
|cudid|string||否|自由项ID|
|cudvalue|string||否|自由项值|

## 示例

::: tabs
@tab 新增

```json
{
    "invandfree": {
        "cinvcode": "01019002063",
        "cudid": "34",
        "cudvalue": "黑色"
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
