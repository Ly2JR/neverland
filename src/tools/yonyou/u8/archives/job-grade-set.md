---
title: 职等设置
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![职等设置](https://nas.ilyl.life:8092/yonyou/jobgradeset.gif)

## 资源符

`jobgradeset`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|jobgradecode|string||是|职等编码|
|jobgradename|string||是|职等名称|
|maxpaypoint|string||否|薪点上限|
|minpaypoint|string||否|薪点下限|

## 示例

::: tabs
@tab 新增

```json
{
    "jobgradeset": {
        "jobgradecode": "10",
        "jobgradename": "十职等",
        "maxpaypoint": "",
        "minpaypoint": ""
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
