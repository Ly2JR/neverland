---
title: 销售类型
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![销售类型](https://nas.ilyl.life:8092/yonyou/saletype.gif)

## 资源符

`saletype`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|销售类型编码|
|name|string||是|销售类型名称|
|rstype_code|string||是|出库类别|
|bdefau|string||否|是否默认值|
|bstmps_mrp|string||否|是否列入MPS/MRP计划|

## 示例

::: tabs
@tab 新增

```json
{
    "saletype": {
        "code": "12",
        "name": "线下销售",
        "rstype_code": "22",
        "bdefau": "0"
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
