---
title: U8 货位档案
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![货位档案](https://nas.ilyl.life:8092/yonyou/u8/as/position.gif)

## 资源符

`position`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|货位编码|
|name|string||否|货位名称|
|grade|string||是|编码级次|
|end_flag|string||否|是否末级|
|warehouse_code|string||是|仓库编码|
|maxcubage|string||否|最大体积|
|maxweight|string||否|最大重量|
|remark|string||否|备注|
|barcode|string||否|对应条形码中的编码|

## 示例

::: tabs
@tab 新增

```json
{
    "position": {
        "code": "40-G-0-0-0",
        "name": "40号库D发货区货位",
        "grade": "2",
        "end_flag": "1",
        "warehouse_code": "50",
        "maxcubage":"",
        "maxweight":"",
        "remark":"",
        "barcode":""
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
