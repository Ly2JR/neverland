---
title: U8 客户联系人
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![客户联系人](https://image.ilyl.life:8443/yonyou/u8/as/customerlinker.gif)

## 资源符

`customerlinker`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|code|string||是|联系人编码|
|name|string||是|联系人名称|
|title|string||是|称呼|
|of_customer|string||是|所属客户|
|sex|string||是|性别|
|birthday|string||是|生日|
|native|string||是|籍贯|
|position|string||是|职务|
|direct_leader|string||是|直接上级|
|mobile|string||是|移动电话|
|office_phone|string||是|办公电话|
|family_phone|string||是|家庭电话|
|bp|string||是|传呼|
|email|string||是|电子邮件|
|web|string||是|个人网址|
|work_address|string||是|工作地址|
|postcode|string||是|邮编|
|marriage|string||是|婚姻状况|
|family_member|string||是|家庭主要成员|
|family_address|string||是|家庭地址|
|favorite|string||是|个人爱好|
|be_main_linker|string||是|是否主要联系人|
|charge_person|string||是|负责人|
|memo|string||是|备注|
|founder|string||是|建档人|
|fondertime|string||是|建档时间|
|change_person|string||是|变更人|
|change_time|string||是|变更时间|
|self_define1|string||是|自定义项1|
|self_define2|string||是|自定义项2|
|self_define3|string||是|自定义项3|
|self_define4|string||是|自定义项4|
|self_define5|string||是|自定义项5|
|self_define6|string||是|自定义项6|
|self_define7|string||是|自定义项7|
|self_define8|string||是|自定义项8|
|self_define9|string||是|自定义项9|
|self_define10|string||是|自定义项10|
|self_define11|string||是|自定义项11|
|self_define12|string||是|自定义项12|
|self_define13|string||是|自定义项13|
|self_define14|string||是|自定义项14|
|self_define15|string||是|自定义项15|
|self_define16|string||是|自定义项16|

## 示例

::: tabs
@tab 新增

```json
{
    "customerlinker": {
        "code": "00000000",
        "name": "demo",
        "title": "0001",
        "sex": "0",
        "be_main_linker": "1",
        "founder": "demo",
        "fondertime": "2015-12-01",
        "bDefaultCon": "1",
        "cConDepart": "0301"
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
