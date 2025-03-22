---
title: U8 本单位开户银行
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![本单位开户银行](https://image.ilyl.life:8443/yonyou/u8/as/bank.gif)

## 资源符

`bank`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|银行编号|
|name|string||是|开户银行名称|
|account|string||是|银行帐号|
|flag|string||否|暂封标志|
|cbankcode|string||否|所属银行|
|caccname|string||是|账户名称|
|copenaccaddr|string||否|开户银行地址|
|cprovincename|string||否|省/自治区|
|ccountyname|string||否|市/县|
|ccurrencyname|string||否|币种|
|dopenaccdate|string||否|开户日期|
|ccustomerno|string||否|客户编号|
|corgno|string||否|机构号|
|cunionbankno|string||否|联行号|
|isignflag|string||否|签约标志|
|bpwdmng|string||否|进行密码管理|
|iCcbAccountType|string||否|建行账号属性|
|cTradeAddCode|string||否|交易代码|
|iAccProperty|string||否|账户属性|
|cCode|string||否|对应科目|
|fCurBalance|string||否|当前余额|
|cBankDefine1|string||是|自定义项1|
|cBankDefine2|string||是|自定义项2|
|cBankDefine3|string||是|自定义项3|
|cBankDefine4|string||是|自定义项4|
|cBankDefine5|string||是|自定义项5|
|cBankDefine6|string||是|自定义项6|
|cBankDefine7|string||是|自定义项7|
|cBankDefine8|string||是|自定义项8|
|cBankDefine9|string||是|自定义项9|
|cBankDefine10|string||是|自定义项10|
|cBankDefine11|string||是|自定义项11|
|cBankDefine12|string||是|自定义项12|
|cBankDefine13|string||是|自定义项13|
|cBankDefine14|string||是|自定义项14|
|cBankDefine15|string||是|自定义项15|
|cBankDefine16|string||是|自定义项16|

## 示例

::: tabs
@tab 新增

```json
{
    "bank": {
        "code": "07",
        "name": "中国南京银行",
        "account": "622202210200",
        "flag": "0",
        "cbankcode": "01",
        "caccname": "环球电脑公司",
        "cprovincename": "江苏",
        "ccountyname": "南京",
        "ccurrencyname": "人民币",
        "dopenaccdate": "2015-12-01"
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
