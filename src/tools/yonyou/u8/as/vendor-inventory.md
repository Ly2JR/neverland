---
title: 供应商存货对照表
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![供应商存货对照表](https://nas.ilyl.life:8092/yonyou/u8/as/venandinv.gif)

## 资源符

`venandinv`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|cvencode|string||是|供应商编码|
|cinvcode|string||是|存货编码|
|cquanlity|string||否|供货品质|
|fquota|string||否|配额|
|fadvdate|string||否|提前期|
|cdepcode|string||否|部门编码|
|cpersoncode|string||否|采购员|
|cveninvcode|string||是|供应商存货编码|
|iteststyle|string||否|检验方式|
|idtmethod|string||否|抽检方案|
|fdtrate|string||否|抽检率|
|fdtnum|string||否|抽检量|
|cdtunit|string||否|检验计量单位|
|idtstyle|string||否|抽检方式|
|iqtmethod|string||否|质量检验方案|
|isuppproperty|string||否|供应类型|
|fmaxsuppnum|string||否|最大交货量|
|fminsuppnum|string||否|最小交货量|
|cveninvname|string||是|供应商存货名称|
|idtlevel|string||否|检验水平|
|cdtaql|string||否|AQL|
|fsupplybatch|string||否|供应批量|
|ftotalquota|string||否|累计配额总量|
|ffinishrateup|string||否|实际完成率上限(%)|
|ftopcost|string||否|最高进价|
|crulecode|string||否|自定义抽检规则|
|drohsenddate|string||否|ROHS认证失效日期|

## 示例

::: tabs
@tab 新增

```json
{
    "venandinv": {
        "cvencode": "01002",
        "cinvcode": "01019002063",
        "fadvdate": "122",
        "isuppproperty": "1"
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
