---
title: 供应商档案
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![供应商档案](https://nas.ilyl.life:8092/yonyou/vendor.gif)

## 资源符

`vendor`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|供应商编码|
|name|string||是|供应商名称|
|abbrname|string||否|供应商简称|
|sort_code|string||是|所属分类码|
|domain_code|string||是|所属地区码|
|industry|string||否|所属行业|
|address|string||否|地址|
|postcode|string||否|邮政编码|
|tax_reg_code|string||否|纳税人登记号|
|bank_open|string||否|开户银行|
|bank_acc_number|string||否|银行帐号|
|seed_date|string||是|发展日期|
|legal_man|string||否|法人|
|phone|string||否|电话|
|fax|string||否|传真|
|email|string||否|Email地址|
|contact|string||否|联系人|
|bp|string||否|呼机|
|mobile|string||否|手机|
|spec_operator|string||是|专管业务员|
|discount_rate|string||否|扣率|
|credit_rank|string||是|信用等级|
|credit_amount|string||否|信用额度|
|credit_deadline|string||否|信用期限|
|pay_condition|string||否|付款条件|
|receive_site|string||否|到货地址|
|receive_mode|string||否|到货方式|
|head_corp_code|string||是|供应商总公司编码|
|rec_warehouse|string||否|到货仓库|
|super_dept|string||是|分管部门|
|ap_rest|string||否|应付余额|
|last_tr_date|string||否|最后交易日期|
|last_tr_money|string||否|最后交易金额|
|last_pay_date|string||否|最后付款日期|
|last_pay_amount|string||否|最后付款金额|
|end_date|string||否|停用日期|
|tr_frequency|string||否|使用频度|
|tax_in_price_flag|string||否|单价是否含税|
|CreatePerson|string||否|建档人|
|ModifyPerson|string||否|变更人|
|ModifyDate|string||否|变更日期|
|auth_class|string||否|所属权限分类|
|barcode|string||否|对应条形码中的编码|
|self_define1|string||否|自定义项1|
|self_define2|string||否|自定义项2|
|self_define3|string||否|自定义项3|
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
|RegistFund|string||否|注册资金|
|EmployeeNum|string||否|员工人数|
|GradeABC|string||否|ABC等级|
|Memo|string||否|备注|
|LicenceDate|string||否|营业执照是否期限管理|
|LicenceSDate|string||否|营业执照起始日期|
|LicenceEDate|string||否|营业执照到期日期|
|LicenceADays|string||否|营业执照预警天数|
|cLicenceRange|string||否|营业执照经营范围|
|BusinessDate|string||否|经营许可证是否期限管理|
|BusinessSDate|string||否|经营许可证起始日期|
|BusinessEDate|string||否|经营许可证到期日期|
|BusinessADays|string||否|经营许可证预警天数|
|cBusinessRange|string||否|许可证范围|
|ProxyDate|string||否|法人委托书是否期限管理|
|ProxySDate|string||否|法人委托书起始日期|
|ProxyEDate|string||否|法人委托书到期日期|
|ProxyADays|string||否|法人委托书预警天数|
|PassGMP|string||否|是否通过GMP认证|
|bvencargo|string||否|是否货物|
|bproxyforeign|string||否|是否委外|
|bvenservice|string||否|是否服务|
|cVenTradeCCode|string||否|行业编码|
|cvenbankcode|string||否|所属银行|
|cRelCustomer|string||否|对应客户编码|
|cvenexch_name|string||否|币种|
|ivengsptype|string||否|企业类型|
|ivengspauth|string||否|GMP-GSP认证情况|
|cvengspauthno|string||否|GMP-GSP认证证书号|
|cVenGSPRange|string||否|GMP-GSP认证范围|
|dVenGSPEDate|string||否|GMP-GSP证书到期日期|
|dVenGSPSDate|string||否|GMP-GSP证书生效日期|
|iVenGSPADays|string||否|GMP-GSP证书预警天数|
|cvenbusinessno|string||否|生产/经营许可证号|
|cvenlicenceno|string||否|营业执照注册号|
|bvenoverseas|string||否|国外|
|bvenaccperiodmng|string||否|账期管理|
|cvenpuomprotocol|string||否|采购/委外收付款协议|
|cvenotherprotocol|string||否|其他应付单收付款协议|
|cvencountrycode|string||否|国家|
|cvenenname|string||否|英文名称|
|cvenenaddr1|string||否|英文地址1|
|cvenenaddr2|string||否|英文地址2|
|cvenenaddr3|string||否|英文地址3|
|cvenenaddr4|string||否|英文地址4|
|cvenportcode|string||否|起运港|
|cvenprimaryven|string||否|主要承运商|
|fvencommisionrate|string||否|佣金比率（％）|
|fveninsuerate|string||否|保险费率（％）|
|bvenhomebranch|string||否|国内分支机构|
|cvenbranchaddr|string||否|分支机构地址|
|cvenbranchphone|string||否|分支机构电话|
|cvenbranchperson|string||否|分支机构联系人|
|cvensscode|string||否|结算方式|
|comwhcode|string||否|默认委外仓|
|cvencmprotocol|string||否|合同默认收付款协议|
|cvenimprotocol|string||否|进口收付款协议|
|iventaxrate|string||否|税率|
|dvencreatedatetime|string||否|建档日期|
|cVenMnemCode|string||否|助记码|
|cvenbankall|string||否|供应商银行|

## 示例

::: tabs
@tab 新增

```json
{
    "vendor":{
        "code":"99",
        "name":"供应商名称",
        "abbrname":"供应商简称",
        "sort_code":"98",
        "bvencargo":"1",
        "seed_date":"2015-12-01",
        "cvenexch_name":"人民币"
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
