---
title: 交易单位档案
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![交易单位档案](https://nas.ilyl.life:8092/yonyou/unitdoc.gif)

## 资源符

`unitdoc`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|cunitid|string||是|交易方编号|
|cunitname|string||是|交易方名称|
|cunitsname|string||否|交易方简称|
|cclass|string||是|交易方分类编号|
|ccusid|string||否|客户编码|
|csupid|string||否|供应商编码|
|caddress|string||否|联系地址|
|cpostcode|string||否|邮政编码|
|ctelephone|string||否|电话|
|ctelefax|string||否|传真|
|cbp|string||否|呼机|
|cmobiletele|string||否|手机|
|cemail|string||否|Email地址|
|clinkman|string||否|联系人|
|cremark|string||否|备注|
|cbankcode|string||否|对应科目编码|
|cdepid|string||否|对应部门编码|
|cpersonid|string||否|对应人员编码|

## 示例

::: tabs
@tab 新增

```json
{
    "unitdoc": {
        "cunitid": "0001",
        "cunitname": "个人",
        "cunitsname": "个人",
        "cclass": "00",
        "ccusid": "",
        "csupid": "",
        "caddress": "",
        "cpostcode": "",
        "ctelephone": "",
        "ctelefax": "",
        "cbp": "",
        "cmobiletele": "",
        "cemail": "",
        "clinkman": "",
        "cremark": "",
        "cdepid": "",
        "cpersonid": ""
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
