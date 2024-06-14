---
title: 银行档案
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![银行档案](https://nas.ilyl.life:8092/yonyou/aa_bank.gif)

## 资源符

`aa_bank`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|银行编码|
|name|string||是|银行名称|
|bindfixlen|string||否|个人账号是否定长|
|iindaccnolen|string||否|个人账号长度|
|iindautoinputlen|string||否|自动带出的个人账号长度|
|cindunitcode|string||否|单位编码|
|bcomdfixlen|string||否|企业账号是否定长|
|icomaccnolen|string||否|企业账号长度|
|i_id|string||否|银行标识|

## 示例

::: tabs
@tab 新增

```json
{
    "aa_bank": {
        "code": "00000",
        "name": "中国南京银行",
        "bindfixlen": "0",
        "iindaccnolen": "11",
        "iindautoinputlen": "0",
        "bcomdfixlen": "0",
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
