---
title: U8 客户分类
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![客户分类](https://nas.ilyl.life:8092/yonyou/u8/as/customerclass.gif)

## 资源符

`customerclass`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|客户分类编码|
|name|string||是|客户分类名称|
|rank|string||是|客户分类编码级次|
|end_rank_flag|string||否|末级标志|

## 示例

::: tabs
@tab 新增

```json
{
    "customerclass":{
        "code":"98",
        "name":"测试",
        "rank":"1",
        "end_rank_flag":"1"
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
