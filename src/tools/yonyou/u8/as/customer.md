---
title: U8 客户档案
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![客户档案](https://nas.ilyl.life:8092/yonyou/u8/as/customer.gif)

## 资源符

`customer`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|客户编码|
|name|string||是|客户名称|
|abbrname|string||否|客户简称|
|cCusMnemCode|string||否|助记码|
|sort_code|string||是|所属分类码|
|domain_code|string||是|所属地区码|
|industry|string||否|所属行业|
|address|string||否|地址|
|postcode|string||否|邮政编码|
|tax_reg_code|string||否|纳税人登记号|
|bank_open|string||否|开户银行|
|bank_acc_number|string||否|银行账号|
|seed_date|string||是|发展日期|
|legal_man|string||否|法人|
|email|string||否|Email地址|
|contact|string||否|联系人|
|phone|string||否|电话|
|fax|string||否|传真|
|bp|string||否|QQ号|
|mobile|string||否|手机|
|spec_operator|string||是|专管业务员|
|discount_rate|string||否|扣率|
|credit_rank|string||是|信用等级|
|credit_amount|string||否|信用额度|
|credit_deadline|string||否|信用期限|
|pay_condition|string||否|付款条件|
|devliver_site|string||否|发货地址|
|deliver_mode|string||否|发货方式|
|head_corp_code|string||是|客户总公司编码|
|deli_warehouse|string||否|发货仓库|
|super_dept|string||是|分管部门|
|ar_rest|string||否|应收余额|
|last_tr_date|string||否|最后交易日期|
|last_tr_amount|string||否|最后交易金额|
|last_rec_date|string||否|最后收款日期|
|last_rec_amount|string||否|最后收款金额|
|end_date|string||否|停用日期|
|tr_frequency|string||否|使用频度|
|self_define1|string||否|自定义项1|
|self_define2|string||否|自定义项2|
|self_define3|string||否|自定义项3|
|pricegrade|string||否|价格级别|
|CreatePerson|string||否|建档人|
|ModifyPerson|string||否|变更人|
|ModifyDate|string||否|变更日期|
|auth_class|string||否|所属权限分类|
|self_define4|string||否|自定义项4|
|self_define5|string||否|自定义项5|
|self_define6|string||否|自定义项6|
|self_define7|string||否|自定义项7|
|self_define8|string||否|自定义项8|
|self_define9|string||否|自定义项9|
|self_define10|string||否|自定义项10|
|self_define11|string||否|自定义项11|
|self_define12|string||否|自定义项12|
|self_define13|string||否|自定义项13|
|self_define14|string||否|自定义项14|
|self_define15|string||否|自定义项15|
|self_define16|string||否|自定义项16|
|InvoiceCompany|string||否|开票单位|
|Credit|string||否|是否控制信用额度|
|CreditByHead|string||否|是否按总公司控制信用额度|
|CreditDate|string||否|是否控制信用期限|
|LicenceDate|string||否|营业执照是否期限管理|
|LicenceSDate|string||否|营业执照起始日期|
|LicenceEDate|string||否|营业执照到期日期|
|LicenceADays|string||否|营业执照预警天数|
|LicenceRange|string||否|营业执照经营范围|
|LicenceNo|string||否|营业执照注册号|
|BusinessDate|string||否|经营许可证是否期限管理|
|BusinessSDate|string||否|经营许可证起始日期|
|BusinessEDate|string||否|经营许可证到期日期|
|BusinessADays|string||否|经营许可证预警天数|
|CusBusinessRange|string||否|经营许可证经营范围|
|CusBusinessNo|string||否|经营许可证号|
|CusGSPSDate|string||否|GSP认证起始日期|
|CusGSPEDate|string||否|GSP认证到期日期|
|CusGSPADays|string||否|GSP认证预警天数|
|CusGSPAuthRange|string||否|GSP认证经营范围|
|CusGSPAuthNo|string||否|GSP认证证书号|
|Proxy|string||否|法人委托书是否期限管理|
|ProxySDate|string||否|法人委托书起始日期|
|ProxyEDate|string||否|法人委托书到期日期|
|ProxyADays|string||否|法人委托书预警天数|
|Memo|string||否|备注|
|bLimitSale|string||否|是否限销|
|cCusCountryCode|string||否|国家|
|cCusEnName|string||否|英文名称|
|cCusEnAddr1|string||否|英文地址1|
|cCusEnAddr2|string||否|英文地址2|
|cCusEnAddr3|string||否|英文地址3|
|cCusEnAddr4|string||否|英文地址4|
|cCusPortCode|string||否|目的港|
|cPrimaryVen|string||否|主要承运商|
|fCommisionRate|string||否|佣金比率(%)|
|fInsueRate|string||否|保险费率(%)|
|bHomeBranch|string||否|是否有分支机构|
|cBranchAddr|string||否|分支机构地址|
|cBranchPhone|string||否|分支机构电话|
|cBranchPerson|string||否|分支机构联系人|
|cCusTradeCCode|string||否|行业编码|
|CustomerKCode|string||否|客户级别|
|bCusState|string||否|客户状态|
|ccusbankcode|string||否|所属银行|
|cRelVendor|string||否|对应供应商编码|
|ccusexch_name|string||否|币种|
|bshop|string||否|是否门店|
|bOnGPinStore|string||否|门店收款|
|bcusdomestic|string||否|国内|
|bcusoverseas|string||否|国外|
|bserviceattribute|string||否|服务|
|ccuscreditcompany|string||否|信用单位|
|ccussaprotocol|string||否|销售默认收付款协议|
|ccusexprotocol|string||否|出口默认收付款协议|
|ccusotherprotocol|string||否|其他应收单收付款协议|
|ccusimagentprotocol|string||否|代理进口默认收付款协议|
|fcusdiscountrate|string||否|直营专柜结算扣率|
|ccussscode|string||否|结算方式|
|ccusmngtypecode|string||否|客户管理类型编码|
|brequestsign|string||否|签回|
|fExpense|string||否||
|fApprovedExpense|string||否||
|dTouchedTime|string||否||
|dRecentlyInvoiceTime|string||否||
|dRecentlyQuoteTime|string||否||
|dRecentlyActivityTime|string||否||
|dRecentlyChanceTime|string||否||
|dRecentlyContractTime|string||否||
|cLtcCustomerCode|string||否||
|bTransFlag|string||否||
|cLtcPerson|string||否||
|dLtcDate|string||否||
|cLocationSite|string||否||
|iCusTaxRate|string||否||
|cProvince|string||否||
|cCity|string||否||
|cCounty|string||否||
|cCreditAddCode|string||否||
|cRegCash|string||否||
|dDepBeginDate|string||否||
|iEmployeeNum|string||否||
|cURL|string||否||

## 示例

::: tabs
@tab 新增

```json
{
    "customer": {
        "code": "99",
        "name": "测试客户",
        "abbrname": "测试客户",
        "sort_code": "98",
        "contact": "demo",
        "ccusmngtypecode": "999",
        "ccusexch_name": "人民币",
        "seed_date":"2021-03-09"
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
