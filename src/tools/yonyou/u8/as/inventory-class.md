---
title: 存货分类
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![存货分类](https://nas.ilyl.life:8092/yonyou/u8/as/inventoryclass.gif)

## 资源符

`inventoryclass`

## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|存货分类编码|
|name|string||是|存货分类名称|
|rank|string||是|存货分类编码级次|
|end_rank_flag|string||否|末级标志|
|econo_sort_code|string||否|所属经济分类编码|
|barcode|string||是|对应条形码中的编码|

## 示例

::: tabs
@tab 新增

```json
{
    "inventoryclass":{
        "code":"99",
        "name":"存货分类",
        "rank":1,
        "end_rank_flag":1,
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
