---
title: U8 凭证
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![凭证](https://image.ilyl.life:8443/yonyou/u8/gl/voucher.gif)

## 资源符

`voucher`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|voucher_type|string||是|凭证类别|
|fiscal_year|number||是|凭证所属的会计年度，不填写取当前年|
|accounting_period|number||是|所属的会计期间，不填写取当前月份|
|voucher_id|string||否|凭证号|
|date|date||否|制单日期|
|enter|string||否|制单人名称|
|cashier|string||否|出纳名称|
|attachment_number|number||否|附单据数|
|voucher_making_system|string||否|外部系统类型|
|reserve2|string||否|外部凭证业务号|
|account_code|string|entry|否|科目编码|
|abstract|string|entry|否|摘要|
|currency|string|entry|否|币种，默认人民币|
|unit_price|number|entry|否|单价,在科目有数量核算时，填写此项|
|exchange_rate1|number|entry|否|汇率1，主辅币核算时使用，NC用户使用|
|exchange_rate2|number|entry|否|汇率2，折本汇率，U8用户使用|
|quantity|number|entry|否|借方数量,在科目有数量核算时，填写此项|
|primary_amount|number|entry|否|原币借方发生额|
|secondary_amount|number|entry|否|辅币借方发生额|
|natural_currency|number|entry|是|本币借方发生额*与本币贷方发生额不能同时为空|
|dept_id|string|entry/auxiliary|否|部门|
|personnel_id|string|entry/auxiliary|否|人员|
|cust_id|string|entry/auxiliary|否|客户|
|supplier_id|string|entry/auxiliary|否|供应商|
|item_class|string|entry/auxiliary|否|项目大类|
|item_id|string|entry/auxiliary|否|项目档案|
|operator|string|entry/auxiliary|否|业务员|
|self_define1|string|entry/auxiliary|否|自定义字段1|
|self_define2|string|entry/auxiliary|否|自定义字段2|
|self_define3|string|entry/auxiliary|否|自定义字段3|
|self_define4|string|entry/auxiliary|否|自定义字段4|
|self_define5|string|entry/auxiliary|否|自定义字段5|
|self_define6|string|entry/auxiliary|否|自定义字段6|
|self_define7|string|entry/auxiliary|否|自定义字段7|
|self_define8|string|entry/auxiliary|否|自定义字段8|
|self_define9|string|entry/auxiliary|否|自定义字段9|
|self_define10|string|entry/auxiliary|否|自定义字段10|
|self_define11|string|entry/auxiliary|否|自定义字段11|
|self_define12|string|entry/auxiliary|否|自定义字段12|
|self_define13|string|entry/auxiliary|否|自定义字段13|
|self_define14|string|entry/auxiliary|否|自定义字段14|
|self_define15|string|entry/auxiliary|否|自定义字段15|
|self_define16|string|entry/auxiliary|否|自定义字段16|
|cexch_name|number|entry/cash_flow|否|币种|
|RowGuid|string|entry/cash_flow|否|行标识|
|iYPeriod|date|entry/cash_flow|否|年期间|
|iyear|date|entry/cash_flow|否|年|
|csign|number|entry/cash_flow|否|凭证类别字|
|nd_s|number|entry/cash_flow|否|数量借方|
|md_f|number|entry/cash_flow|否|外币借方|
|ccode|number|entry/cash_flow|否|科目编码|
|md|number|entry/cash_flow|否|借方金额|
|cCashItem|string|entry/cash_flow|否|现金项目|
|cash_item|string|entry/cash_flow|否|现金项目|
|natural_currency|string|entry/cash_flow|是|本币借方发生额*与本币贷方发生额不能同时为空|
|cdept_id|string|entry/cash_flow|否|部门|
|cperson_id|string|entry/cash_flow|否|人员|
|ccus_id|string|entry/cash_flow|否|客户|
|csup_id|string|entry/cash_flow|否|供应商|
|citem_class|string|entry/cash_flow|否|项目大类|
|citem_id|string|entry/cash_flow|否|项目档案|
|cDefine1|string|entry/cash_flow|否|自定义字段1|
|cDefine2|string|entry/cash_flow|否|自定义字段2|
|cDefine3|string|entry/cash_flow|否|自定义字段3|
|cDefine4|string|entry/cash_flow|否|自定义字段4|
|cDefine5|string|entry/cash_flow|否|自定义字段5|
|cDefine6|string|entry/cash_flow|否|自定义字段6|
|cDefine7|string|entry/cash_flow|否|自定义字段7|
|cDefine8|string|entry/cash_flow|否|自定义字段8|
|cDefine9|string|entry/cash_flow|否|自定义字段9|
|cDefine10|string|entry/cash_flow|否|自定义字段10|
|cDefine11|string|entry/cash_flow|否|自定义字段11|
|cDefine12|string|entry/cash_flow|否|自定义字段12|
|cDefine13|string|entry/cash_flow|否|自定义字段13|
|cDefine14|string|entry/cash_flow|否|自定义字段14|
|cDefine15|string|entry/cash_flow|否|自定义字段15|
|cDefine16|string|entry/cash_flow|否|自定义字段16|

## 示例

::: tabs
@tab 新增

```json
{
    "voucher": {
        "voucher_type": "记",
        "fiscal_year": "2015",
        "accounting_period": "1",
        "voucher_id": "999",
        "attachment_number": "0",
        "date": "2015-01-31",
        "enter": "demo",
        "cashier": "",
        "signature": "",
        "checker": "",
        "posting_date": "",
        "posting_person": "",
        "voucher_making_system": "",
        "memo1": "",
        "memo2": "",
        "reserve1": "",
        "reserve2": "",
        "revokeflag": "",
        "entry": [{
                "entry_id": "1",
                "account_code": "1131",
                "abstract": "其他应收单",
                "primary_debit_amount": "0",
                "natural_debit_currency": "600",
                "credit_quantity": "0",
                "primary_credit_amount": "0",
                "natural_credit_currency": "0"
            },
            {
                "entry_id": "2",
                "account_code": "1001",
                "abstract": "交通费",
                "exchange_rate2": "0",
                "debit_quantity": "0",
                "primary_debit_amount": "0",
                "natural_debit_currency": "0",
                "credit_quantity": "0",
                "primary_credit_amount": "0",
                "natural_credit_currency": "400",
                "cash_flow": {
                    "cash_item": "03",
                    "natural_debit_currency": "0.00",
                    "natural_credit_currency": "400.00",
                    "cCashItem": "03",
                    "md": "0",
                    "mc": "500",
                    "ccode": "1001",
                    "md_f": "0",
                    "mc_f": "0",
                    "nd_s": "0",
                    "nc_s": "0",
                    "dbill_date": "2015-01-31",
                    "csign": "记",
                    "iyear": "2015",
                    "iYPeriod": "201501",
                }
            },
            {
                "entry_id": "3",
                "account_code": "1001",
                "abstract": "交通费",
                "exchange_rate2": "0",
                "debit_quantity": "0",
                "primary_debit_amount": "0",
                "natural_debit_currency": "0",
                "credit_quantity": "0",
                "primary_credit_amount": "0",
                "natural_credit_currency": "200",
                "cash_flow": {
                    "cash_item": "03",
                    "natural_debit_currency": "0.00",
                    "natural_credit_currency": "200.00",
                    "cCashItem": "03",
                    "md": "0",
                    "mc": "100",
                    "ccode": "1001",
                    "md_f": "0",
                    "mc_f": "0",
                    "nd_s": "0",
                    "nc_s": "0",
                    "dbill_date": "2015-01-31",
                    "csign": "记",
                    "iyear": "2015",
                    "iYPeriod": "201501",
                }
            }
        ]
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
