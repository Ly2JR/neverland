---
title: U8 成套件
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![成套件](https://image.ilyl.life:8443/yonyou/u8/as/assembly.gif)

## 资源符

  `assembly`

## 操作符

  `create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|assemblycode|string||是|套装件编码|
|fittingcode|string||否|单件编码|
|fittingquantity|float||否|单件数量|
|fittingnumber|float||否|单件件数|
|fittingcost|float||否|单件成本|
|fittingprice|float||否|单件单价|
|cAComunitCode|float||否|辅计量单位编码|

## 示例

::: tabs
@tab 新增

```json
{
  "assembly": {
    "assemblycode": "01019002063",
    "fittingcode": "01019002065",
    "fittingquantity": "1",
    "fittingnumber": "1",
    "fittingcost": "1",
    "fittingprice": "1",
    "cAComunitCode": ""
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
