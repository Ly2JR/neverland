---
title: 交易单位分类
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![交易单位分类](https://nas.ilyl.life:8092/yonyou/u8/unitclass.gif)

## 资源符

`unitclass`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|cclassid|string||是|类别编码|
|cclassname|string||是|类别名称|

## 示例

::: tabs
@tab 新增

```json
{
    "unitclass": {
        "cclassid": "00",
        "cclassname": "外包",
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
