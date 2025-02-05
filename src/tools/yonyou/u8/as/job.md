---
title: U8 职位档案
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![职位档案](https://nas.ilyl.life:8092/yonyou/u8/as/job.gif)

## 资源符

`job`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|jobcode|string||是|职位编码|
|jobname|string||是|职位名称|
|depcode|string||是|所属部门|
|suporior|string||否|直接上级|
|builddate|string||否|成立日期|
|abortdate|string||否|撤销日期|
|jobseries|string||是|职位序列|
|jobrank|string||是|职位等级|
|worksumm|string||是|工作概要|
|jobrankclasscode|string||是|职级分类|
|jobrankbegin|string||是|职级范围起|
|jobrankend|string||是|职级范围止|
|jobgradebegin|string||是|职等范围起|
|jobgradeend|string||是|职等范围止|

## 示例

::: tabs
@tab 新增

```json
{
    "job": {
        "jobcode": "9901",
        "jobname": "测试",
        "depcode": "99",
        "suporior": "",
        "builddate": "2015-12-01",
        "abortdate": "",
        "jobseries": "C",
        "jobrank": "1",
        "worksumm": "",
        "jobrankclasscode": "01",
        "jobrankbegin": "M1",
        "jobrankend": "M1",
        "jobgradebegin": "4",
        "jobgradeend": "4"
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
