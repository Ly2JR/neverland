---
title: 批次档案
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![批次档案](https://nas.ilyl.life:8092/yonyou/batchproperty.gif)

## 资源符

`batchproperty`

## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|cinvcode|string||是|存货编码|
|cbatch|string||否|批号 |
|cfree1|string||否|自由项1|
|cfree2|string||否|自由项2|
|cfree3|string||否|自由项3|
|cfree4|string||否|自由项4|
|cfree5|string||否|自由项5|
|cfree6|string||否|自由项6|
|cfree7|string||否|自由项7|
|cfree8|string||否|自由项8|
|cfree9|string||否|自由项9|
|cfree10|string||否|自由项10|
|cbatchproperty1|string||否|属性1|
|cbatchproperty2|string||否|属性2|
|cbatchproperty3|string||否|属性3|
|cbatchproperty4|string||否|属性4|
|cbatchproperty5|string||否|属性5|
|cbatchproperty6|string||否|属性6|
|cbatchproperty7|string||否|属性7|
|cbatchproperty8|string||否|属性8|
|cbatchproperty9|string||否|属性9|
|cbatchproperty10|string||否|属性10|

## 示例

::: tabs
@tab 新增

```json
{
    "batchproperty":{
        "cinvcode":"01019002063",
        "cbatch":"201512010001"
    }
}
```

@tab 响应

```json
{
    "errcode":"0",
    "errmsg":"",
    "id":"",
    "tradeid":"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::
