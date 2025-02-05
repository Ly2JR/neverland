---
title: U8 仓库档案
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![仓库档案](https://nas.ilyl.life:8092/yonyou/u8/as/warehouse.gif)

## 资源符

`warehouse`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|仓库编码|
|name|string||是|仓库名称|
|depart_code|string||是|所属部门|
|address|string||否|仓库地址|
|phone|string||否|电话|
|person|string||否|负责人|
|valuestyle|string||是|计价方式|
|cWareGroupCode|string||否|仓库核算组|
|cFactoryCode|string||否|工厂|
|whmanage|string||否|是否货位管理|
|ration|string||否|资金定额|
|memo|string||否|备注|
|barcode|string||否|对应条形码中的编码|
|bmrp|string||否|是否参与需求计划运算|
|brop|string||否|是否参与ROP计算|
|iwhproperty|string||否|仓库属性|
|bcontrolserial|string||否|控制序列号|
|bincost|string||否|记入成本|
|binavailcalcu|string||否|纳入可用量计算|
|bproxywh|string||否|代管仓|
|isaconmode|string||否|销售可用量控制方式|
|iexconmode|string||否|出口可用量控制方式|
|istconmode|string||否|库存可用量控制方式|
|bbondedwh|string||否|是否保税仓|
|bwhasset|string||否|资产仓|
|fwhquota|string||否|配额%|
|dWhEndDate|string||否|停用日期|
|bshop|string||否|门店|
|bchecksubitemcost|bool||否|是否核算分项成本|
|cPickPos|bool||否|拣货货位|
|bEB|bool||否|电商仓|
|cProvince|bool||否|省或直辖市|
|cCity|bool||否|市|
|cCounty|bool||否|区县|

## 示例

::: tabs
@tab 新增

```json
{
    "warehouse": {
        "code": "99",
        "name": "测试仓",
        "valuestyle": "全月平均法",
        "cFactoryCode": "001"
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
