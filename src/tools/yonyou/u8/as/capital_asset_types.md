---
title: U8资产类别
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![资产类别](https://nas.ilyl.life:8092/yonyou/u8/as/capitalassettypes.gif)

## 资源符

`capitalassettypes`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|assettypeno|string||是|资产类别编码|
|assettypename|string||是|资产类别名称|
|deprmethodnum|string||否|折旧方法编码|
|deprtype|string||否|计提属性编码|
|dblbvrate|float||否|净残值率|
|unit|float||否|计量单位|
|life|float||否|使用年限|
|modelid|float||否|卡片样式|
|assetsubjectnum|float||否|固定资产入账科目|
|deprtotalsubjectnum|float||否|累计折旧入账科目|
|decpresubjectnum|float||否|减值准备入账科目|
|bnotcanretdecvalue|bool||是|不允许转回减值准备|
|cleanupsubjectnum|bool||否|资产清理入账科目|
|bnewassetdepr|bool||否|新增当月计提折旧|
|deprsubjectbytype|bool||否|按资产类别默认折旧科目|

## 示例

::: tabs
@tab 新增

```json
{
    "capitalassettypes": {
        "assettypeno": "014",
        "assettypename": "电脑",
        "deprmethodnum": "3",
        "deprtype": "0",
        "life": "99",
        "modelid": "0",
        "bnotcanretdecvalue": "1",
        "bnewassetdepr": "0"
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
