---
title: 人员档案
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![人员档案](https://nas.ilyl.life:8092/yonyou/person.gif)

## 资源符

`person`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|人员编码|
|name|string||是|人员名称|
|cPsn_NameEN|string||否|英文名|
|JobNumber|string||否|工号|
|cpsnproperty|string||是|人员属性|
|rsex|string||否|性别|
|rEmployState|string||否|雇佣状态|
|rpersontype|string||否|人员类别|
|EmploymentForm|string||否|用工形式|
|cdutyclass|string||否|班组|
|cjobcode|string||否|职位|
|cjobgradecode|string||否|职等|
|cjobrankcode|string||否|职级|
|rIDType|string||否|证件类型|
|vIDNo|string||否|证件号码|
|bpsnperson|string||否|是否业务员|
|cdept_num|string||否|行政部门|
|cpsnbankcode|string||否|银行|
|cpsnaccount|string||否|账号|
|dbirthdate|string||否|出生日期|
|cpsnmobilephone|string||否|手机号|
|cpsnfphone|string||否|家庭电话|
|cpsnophone|string||否|办公电话|
|cpsninphone|string||否|内线电话|
|cpsnemail|string||否|Email地址|
|cpsnfaddr|string||否|家庭住址|
|cpsnpostcode|string||否|邮政编码|
|cpsnpostaddr|string||否|通讯地址|
|cpsnqqcode|string||否|QQ号|
|cpsnurl|string||否|个人网址|
|cpsnoseat|string||否|工位|
|cdepcode|string||否|业务或费用部门|
|fcreditquantity|string||否|信用额度|
|icredate|string||否|信用天数|
|ccregrade|string||否|信用等级|
|dpvaliddate|string||否|生效日期|
|dpinvaliddate|string||否|失效日期|
|rNativePlace|string||否|籍贯 |
|rNational|string||否|民族|
|rhealthStatus|string||否|健康状况|
|rMarriStatus|string||否|婚姻状况|
|MPicture|string||否|照片|
|rPerResidence|string||否|户籍|
|vAliaName|string||否|曾用名|
|dJoinworkDate|string||否|参加工作时间|
|dEnterDate|string||否|进入本行业时间|
|dRegularDate|string||否|转正定级时间|
|vSSNo|string||否|社会保障号|
|dEnterUnitDate|string||否|进入本单位时间|
|bProbation|string||否|是否试用人员|

## 示例

::: tabs
@tab 新增

```json
{
    "person":{
        "code":"9901",
        "name":"测试人员",
        "cpsnmobilephone":"18698085765",
        "rEmployState":"10",
        "cdept_num":"99",
        "rIDType":"1",
        "rpersontype":"10",
        "rpersontypename":"正式员工",
        "rsex":"1"
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
