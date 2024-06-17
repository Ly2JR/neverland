---
title: 会计科目
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![会计科目](https://nas.ilyl.life:8092/yonyou/u8/code.gif)

## 资源符

`code`
  
## 操作符

`create`

## 请求参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|id|string||否|自动编号|
|type|string||否|科目类型|
|type_ename|string||否|科目类型英文名称|
|analysis_type|string||否|财务分析类型|
|analysis_type_ename|string||否|财务分析类型英文名称|
|code|string||否|科目编码|
|name|string||否|科目名称|
|ename|string||否|科目英文名称|
|grade|string||否|科目级次|
|prop|string||否|科目性质|
|acclist_style|string||否|帐页格式|
|acclist_style_ename|string||否|帐页格式英文名称|
|ac_assist|string||否|科目助记码|
|fc_name|string||否|外币名称|
|measure_unit|string||否|计量单位|
|person_acc|string||否|个人往来核算|
|cust_acc|string||否|客户往来核算|
|supplier_acc|string||否|供应商往来核算|
|dept_acc|string||否|部门核算|
|item_acc|string||否|项目核算|
|item_category|string||否|项目大类|
|date_acc|string||否|日记帐|
|bank_acc|string||否|银行帐|
|sum_flag|string||否|是否汇总打印|
|end_item_flag|string||否|是否末级科目|
|exchange_flag|string||否|是否参与汇兑损益计算|
|cash_acc_flag|string||否|是否现金科目|
|bank_acc_flag|string||否|是否银行科目|
|bacc_enable_flag|string||否|银行账科目是否启用|
|bacc_balance_way|string||否|银行账科目对账方向|
|bacc_begin|string||否|银行账科目启用日期|
|bacc_end|string||否|银行账科目对账截止日期|
|period_pl|string||否|期间损益|
|acc_seal_flag|string||否|科目是否封存|
|ctrled_acc|string||否|受控科目|
|other_use_flag|string||否|其它系统是否使用|
|self_define1|string||否|自定义字段1|
|self_define2|string||否|自定义字段2|
|self_define3|string||否|自定义字段3|
|self_define4|string||否|自定义字段4|
|self_define5|string||否|自定义字段5|
|self_define6|string||否|自定义字段6|
|self_define7|string||否|自定义字段7|
|self_define8|string||否|自定义字段8|
|self_define9|string||否|自定义字段9|
|self_define10|string||否|自定义字段10|
|self_define11|string||否|自定义字段11|
|self_define12|string||否|自定义字段12|
|self_define13|string||否|自定义字段13|
|self_define14|string||否|自定义字段14|
|self_define15|string||否|自定义字段15|
|self_define16|string||否|自定义字段16|
|itemtype|string||否|在建工程项目科目类型|
|proj_balance|string||否|是否工程结算科目|
|cashitem|string||否|是否常用现金流量科目|

## 示例

::: tabs
@tab 新增

```json
{
    "code": {
        "type": "资产",
        "type_ename": "ZC",
        "analysis_type": "",
        "analysis_type_ename": "",
        "code": "1000",
        "name": "现金",
        "ename": "现金eng",
        "grade": "1",
        "prop": "1",
        "acclist_style": "金额式",
        "acclist_style_ename": "JES",
        "ac_assist": "",
        "fc_name": "",
        "measure_unit": "",
        "person_acc": "0",
        "cust_acc": "0",
        "supplier_acc": "0",
        "dept_acc": "0",
        "item_acc": "0",
        "item_category": "",
        "date_acc": "1",
        "bank_acc": "0",
        "sum_flag": "",
        "end_item_flag": "1",
        "exchange_flag": "0",
        "cash_acc_flag": "1",
        "bank_acc_flag": "0",
        "bacc_enable_flag": "0",
        "bacc_balance_way": "1",
        "bacc_begin": "",
        "bacc_end": "",
        "period_pl": "",
        "acc_seal_flag": "0",
        "ctrled_acc": "",
        "other_use_flag": "0",
        "itemtype": "0",
        "proj_balance": "0",
        "cashitem": "1"
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
