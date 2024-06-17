---
title: 凭证类别
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![凭证类别](https://nas.ilyl.life:8092/yonyou/u8/dsign.gif)

## 资源符

`dsign`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|i_id|string||否|唯一标识|
|type|string||否|凭证类别字|
|order_code|string||否|凭证类别排序号|
|type_name|string||否|凭证类别名称|
|other_use_flag|string||否|其它系统是否使用|

## 示例

::: tabs
@tab 新增

```json
{
    "dsign": {
        "type": "贷",
        "order_code": "1",
        "type_name": "贷款凭证"
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
