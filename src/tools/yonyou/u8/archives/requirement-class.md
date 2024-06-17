---
title: 需求分类
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![需求分类](https://nas.ilyl.life:8092/yonyou/u8/requirementclass.gif)

## 资源符

`requirementclass`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|crclasscode|string||是|需求分类代号|
|crclassname|string||是|需求分类说明|
|dstopdate|string||否|停用日期|

## 示例

::: tabs
@tab 新增

```json
{
    "requirementclass": {
        "crclasscode": "0000000000",
        "crclassname": "电商订单交易编号",
        "dstopdate": "2015-12-01"
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
