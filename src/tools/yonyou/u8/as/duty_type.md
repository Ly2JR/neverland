---
title: U8 职务类别
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![职务类别](https://image.ilyl.life:8443/yonyou/u8/as/dutytype.gif)

## 资源符

`dutytype`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|代码|
|name|string||是|代码名称|
|simplename|string||是|简称|
|simplespell|string||否|简拼|
|levels|string||否|代码级别|
|pcodeid|string||否|上级代码|
|sysflag|string||是|系统/自定义标志|
|childflag|string||是|是否有下级代码|
|hideflag|string||是|显示/隐藏|
|memo|string||是|备注|

## 示例

::: tabs
@tab 新增

```json
{
    "dutytype": {
        "code": "1",
        "name": "运维职务",
        "simplename": "运维职务",
        "simplespell": "YWZW",
        "pcodeid": "",
        "hideflag": "1",
        "memo": ""
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
