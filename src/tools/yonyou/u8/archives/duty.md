---
title: 职务类别
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![职务类别](https://nas.ilyl.life:8092/yonyou/u8/duty.gif)

## 资源符

`duty`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|dutycode|string||是|职务编码|
|dutyname|string||是|职务名称|
|series|string||是|职务类别|
|dutysumm|string||否|职务概要|
|dutylev|string||否|职务级别|
|begindate|string||是|设立日期|
|enddate|string||是|撤销日期|

## 示例

::: tabs
@tab 新增

```json
{
    "duty": {
        "dutycode": "1",
        "dutyname": "测试",
        "dutysumm": "",
        "series": "8",
        "dutylev": "01",
        "begindate": "2015-12-01",
        "enddate": ""
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
