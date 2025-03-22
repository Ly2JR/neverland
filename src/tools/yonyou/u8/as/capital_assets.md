---
title: U8 固定资产卡片
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![固定资产卡片](https://image.ilyl.life:8443/yonyou/u8/as/capitalasserts.gif)

## 资源符

`capitalasserts`
  
## 操作符

  `create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|assetno|string||是|资产编号|
|assetname|string||是|固定资产名称|
|typeno|string||是|类别编码|
|originalvalue|float||是|原值|
|startusedate|float||是|开始使用日期|
|currency|float||是|币种名称|
|foreigncurrencynumber|float||是|外币原值|
|exchangerate|float||否|汇率|
|worktotal|float||是|工作总量|
|workunit|float||否|工作量单位|
|accwork|float||是|累计工作量|
|accdepr|float||是|累计折旧|
|usedmonths|float||是|已使用月份|
|accountaddmannerno|float||是|增加方式编号|
|status|float||是|使用状况编号|
|depreciationmanner|float||是|折旧方法编号|
|life|float||是|可使用月份|
|netleftvalue|float||是|净残值|
|netleftvaluerate|float||是|净残值率|
|style|float||否|规格型号|
|buildingarea|float||否|建筑面积|
|buildingquantity|float||否|间(座)数|
|machinequantity|float||否|电机数量|
|machinewatt|float||否|电机功率|
|reservesite|float||否|存放地点|
|decvalue|float||否|减值准备金额|
|sgroupnum|float||否|资产组编码|
|addtax|float||否|增值税|
|skeeper|float||否|保管人|
|cVenCode|float||否|供应商编码|
|cVenName|float||否|供应商名称|
|dPurDate|float||否|采购日期|
|sSeriesNum|float||否|序列号|
|sCommodityCode|float||否|商品码|
|assetno|float|entry|否|商品码|
|deptno|float|entry|否|部门编号|
|deptscale|float|entry|否|部门编号|
|depreciationitemno|float|entry|否|部门编号|
|depreciationitemname|float|entry|否|部门编号|
|relativeprojectno|float|entry|否|部门编号|
|relativeprojectname|float|entry|否|部门编号|
|relativecItemclsId|float|entry|否|部门编号|
|sourceNum|float|entry|否|部门编号|
|sourceScale|float|entry|否|部门编号|
|ProScale|float|entry|否|部门编号|

## 示例

::: tabs
@tab 新增

```json
{
    "capitalasserts": {
        "assetno": "01200009",
        "assetname": "电脑",
        "typeno": "03",
        "originalvalue": "3000000",
        "startusedate": "2014-01-01",
        "currency": "人民币",
        "exchangerate": "1",
        "usedmonths": "12",
        "accountaddmannerno": "102",
        "status": "1001",
        "depreciationmanner": "1",
        "life": "20",
        "reservesite": "一号厂区",
        "skeeper": "demo",
        "entry": {
            "assetno": "01200009",
            "deptno": "01",
            "deptscale": "1"
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
