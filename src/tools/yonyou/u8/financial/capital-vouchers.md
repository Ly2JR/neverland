---
title: 固定资产变动单
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![固定资产变动单](https://nas.ilyl.life:8092/yonyou/capitalvouchers.gif)

## 资源符

`capitalvouchers`
  
## 操作符

`create`

## 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|vouchertype|string||是|变动单类型|
|assetno|string||是|资产编号|
|voucherdata|string||是|变动内容|
|currency|string||是|币种名称|
|exchangerate|string||是|汇率|
|memreason|string||是|变动原因|
|siteafter|string||是|变动后存放地点|
|worktotal|string||是|工作总量|
|accwork|string||是|累计工作量|
|workunit|string||是|工作量单位|
|transdate|string||是|变动日期|
|transperiod|string||是|变动期间|
|operator|string||是|经手人|
|assetno|string|deptscale|是|资产编号|
|deptno|string|deptscale|是|部门编号|
|deptscale|string|deptscale|是|使用比例|
|depreciationitemno|string|deptscale|是|对应折旧科目编码|
|depreciationitemname|string|deptscale|是|对应折旧科目名称|
|relativeprojectno|string|deptscale|是|对应项目编码|
|relativeprojectname|string|deptscale|是|对应项目名称|
|relativecItemclsId|string|deptscale|是|项目大类|
|assetno|string|entry\deptscale|是||
|deptno|string|entry\deptscale|是||
|deptscale|string|entry\deptscale|是||
|depreciationitemno|string|entry\deptscale|是||
|depreciationitemname|string|entry\deptscale|是||
|relativeprojectno|string|entry\deptscale|是||
|relativeprojectname|string|entry\deptscale|是||
|relativecItemclsId|string|entry\deptscale|是||
|sourceno|string|entry\sourcescale|是|对应折旧科目编码|
|sourcescale|string|entry\sourcescale|是|对应折旧科目编码|

## 示例

::: tabs
@tab 新增

```json
{
    "capitalvouchers": {
        "vouchertype": "1",
        "assetno": "90300001",
        "voucherdata": "50000",
        "currency": "人民币",
        "exchangerate": "1",
        "memreason": "05年末计提",
        "worktotal": "0",
        "accwork": "0",
        "transdate": "2015-01-13",
        "transperiod": "01",
        "operator": "demo",
        "entry": {
            "sourcescale": {
                "sourceno": "",
                "sourcescale": ""
            }
        }
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
