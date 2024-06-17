---
title: 采购类型
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![采购类型](https://nas.ilyl.life:8092/yonyou/u8/purchasetype.gif)

## 资源符

`purchasetype`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|采购类型编码|
|name|string||是|采购类型名称|
|rstype_code|string||是|入库类别编码|
|bdefau|string||否|是否默认值|
|bpfdefault|string||否|是否委外默认值|
|bptmps_mrp|string||否|是否列入MPS/MRP计划|

## 示例

::: tabs
@tab 新增

```json
{
    "purchasetype": {
        "code": "00",
        "name": "线下采购",
        "rstype_code": "11",
        "bdefau": "0",
        "bpfdefault":"0"
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
