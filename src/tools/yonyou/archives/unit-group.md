---
title: 计量单位组
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![计量单位组](https://nas.ilyl.life:8092/yonyou/unitgroup.gif)

## 资源符

`unitgroup`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|计量单位组编码|
|name|string||是|计量单位组名称|
|type|string||是|组类别|
|cgrprelinvcode|string||否|对应存货编码|
|bdefaultgroup|string||否|是否默认组|

## 示例

::: tabs
@tab 新增

```json
{
    "unitgroup": {
        "code": "00",
        "name": "公斤",
        "type": "1",
        "cgrprelinvcode": ""
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
