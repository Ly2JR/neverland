---
title: 地区分类
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![地区分类](https://nas.ilyl.life:8092/yonyou/districtclass.gif)

## 资源符

`districtclass`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|地区编码|
|name|string||是|地区名称|
|sort|string||是|编码级次|
|endflag|string||否|是否末级|

## 示例

::: tabs
@tab 新增

```json
{
    "districtclass": {
        "code": "000000002",
        "name": "南京",
        "sort": "3",
        "endflag": "1"
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
