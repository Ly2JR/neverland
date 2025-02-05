---
title: U8 常用摘要
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![常用摘要](https://nas.ilyl.life:8092/yonyou/u8/as/digest.gif)

## 资源符

`digest`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|id|string||否|自动编号|
|code|string||否|常用摘要编码|
|text|string||否|常用摘要正文|
|subjectcode|string||否|相关科目编码|

## 示例

::: tabs
@tab 新增

```json
{
    "digest": {
        "code": "00",
        "text": "产品销售收入",
        "subjectcode": "2181"
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
