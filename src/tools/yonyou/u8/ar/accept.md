---
title: U8 收款单
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![收款单](https://image.ilyl.life:8443/yonyou/u8/ar/accept.gif)

## 资源符

`accept`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|vouchtype|string||是|单据类型|
|vouchcode|string||是|单据编号|
|vouchdate|string||是|单据日期|
|period|string||是|期间|
|customercode|string||是|客商编码|
|departmentcode|string||是|部门编码|
|personcode|string||是|职员编码|
|itemclasscode|string||是|项目大类编号|
|itemcode|string||是|项目编码|
|itemname|string||是|项目名称|
|orderid|string||是|订单号|
|balancecode|string||是|结算方式|
|notecode|string||是|应收应付票据编号|
|digest|string||否|摘要|
|oppositebankcode|string||否|银行帐号|
|foreigncurrency|string||是|币种|
|currencyrate|string||否|汇率|
|amount|string||否|本币金额|
|originalamount|string||否|原币金额|
|operator|string||是|录入人|
|balanceitemcode|string||否|科目编码(结算科目)|
|flag|string||否|应收应付标志|
|sitemcode|string||否|结算项目|
|oppositebankname|string||否|对方单位银行名称|
|bankname|string||否|本单位银行名称|
|bankaccount|string||否|本单位银行账号|
|define1|string||否|自定义项1|
|define2|string||否|自定义项2|
|define3|string||否|自定义项3|
|define4|string||否|自定义项4|
|define5|string||否|自定义项5|
|define6|string||否|自定义项6|
|define7|string||否|自定义项7|
|define8|string||否|自定义项8|
|define9|string||否|自定义项9|
|define10|string||否|自定义项10|
|define11|string||否|自定义项11|
|define12|string||否|自定义项12|
|define13|string||否|自定义项13|
|define14|string||否|自定义项14|
|define15|string||否|自定义项15|
|define16|string||否|自定义项16|
|ccontracttype|string||否|合同类型|
|ccontractid|string||否|合同号|
|iamount_s|string||否|数量|
|startflag|string||否|期初标志|
|mainid|string|entry|否|主子表关联|
|type|string|entry|否|款项类型|
|customercode|string|entry|否|客商编码|
|originalamount|string|entry|否|原币金额|
|amount|string|entry|否|本币金额|
|itemcode|string|entry|否|科目|
|projectclass|string|entry|否|项目大类编号|
|project|string|entry|否|项目编号|
|departmentcode|string|entry|否|部门编码|
|personcode|string|entry|否|职员编码|
|orderid|string|entry|否|订单号|
|itemname|string|entry|否|项目名称|
|ccontype|string|entry|否|合同类型|
|cconid|string|entry|否|合同号|
|iamt_s|string|entry|否|数量|
|iramt_s|string|entry|否|剩余数量|
|define22|string|entry|否|表体自定义项1|
|define23|string|entry|否|表体自定义项2|
|define24|string|entry|否|表体自定义项3|
|define25|string|entry|否|表体自定义项4|
|define26|string|entry|否|表体自定义项5|
|define27|string|entry|否|表体自定义项6|
|define28|string|entry|否|表体自定义项7|
|define29|string|entry|否|表体自定义项8|
|define30|string|entry|否|表体自定义项9|
|define31|string|entry|否|表体自定义项10|
|define32|string|entry|否|表体自定义项11|
|define33|string|entry|否|表体自定义项12|
|define34|string|entry|否|表体自定义项13|
|define35|string|entry|否|表体自定义项14|
|define36|string|entry|否|表体自定义项15|
|define37|string|entry|否|表体自定义项16|

## 示例

::: tabs
@tab 请求

```json
{
    "accept": {
        "vouchtype": "48",
        "vouchdate": "2015-01-01",
        "period": "01",
        "customercode": "011501",
        "balancecode": "201",
        "oppositebankcode": "9879879656",
        "foreigncurrency": "人民币",
        "currencyrate": "1",
        "amount": "2500",
        "originalamount": "2500",
        "operator": "demo",
        "flag": "AR",
        "oppositebankname": "光大银行",
        "entry": {
            "type": "0",
            "customercode": "011501",
            "originalamount": "2500",
            "amount": "2500",
            "iamt_s": "0",
            "iramt_s": "0",
            "define22": "123"
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
