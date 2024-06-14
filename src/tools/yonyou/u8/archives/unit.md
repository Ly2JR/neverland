---
title: 计量单位
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![计量单位](https://nas.ilyl.life:8092/yonyou/unit.gif)

## 资源符

`unit`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|计量单位编码|
|name|string||是|计量单位名称|
|group_code|string||是|计量单位组编码|
|barcode|string||否|对应条形码中的编码|
|main_flag|string||否|主计量单位标志|
|changerate|string||否|换算率|
|portion|string||否|合理浮动比例|
|SerialNum|string||否|辅计量单位序号|
|censingular|string||否|英文名称单数|
|cenplural|string||否|英文名称复数|
|cunitrefinvcode|string||否|对应存货编码|

## 示例

::: tabs
@tab 新增

```json
{
    "unit": {
        "code": "0001",
        "name": "g",
        "group_code": "00",
        "main_flag": "1",
        "changerate": 1000
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
