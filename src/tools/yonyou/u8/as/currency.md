---
title: U8 外币设置
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![外币设置](https://nas.ilyl.life:8092/yonyou/u8/as/currency.gif)

## 资源符

  `currency`
  
## 操作符

  `create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|id|string||否|自动编号|
|code|string||否|币种编码|
|name|string||否|币种名称|
|caltype|string||否|折算方式|
|precision|string||否|小数位数|
|error|string||否|最大误差|
|otherused|string||否|其它系统是否使用|

## 示例

::: tabs
@tab 新增

```json
{
    "currency": {
        "code": "EURO",
        "name": "欧元",
        "caltype": "1",
        "precision": "5",
        "error": "0.00005"
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
