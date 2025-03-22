---
title: U8 存货档案
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![存货档案](https://image.ilyl.life:8443/yonyou/u8/as/inventory.gif)

## 资源符

`inventory`
  
## 操作符

`create`

## 参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|unitgroup_type|bool||是|计量单位组类别|
|unitgroup_code|bool||是|计量单位组编码|
|puunit_code|bool||否|采购默认计量单位编码|
|saunit_code|bool||否|销售默认计量单位编码|
|stunit_code|bool||否|库存默认计量单位编码|
|caunit_code|bool||否|成本默认计量单位编码|
|unitgroup_name|bool||否|计量单位组名称|
|ccomunitname|bool||否|主计量单位名称|
|puunit_name|bool||否|采购默认计量单位名称|
|saunit_name|bool||否|销售默认计量单位名称|
|stunit_name|bool||否|库存默认计量单位名称|
|caunit_name|bool||否|成本默认计量单位名称|
|puunit_ichangrate|bool||否|采购默认计量单位换算率|
|saunit_ichangrate|bool||否|销售默认计量单位换算率|
|stunit_ichangrate|bool||否|库存默认计量单位换算率|
|caunit_ichangrate|bool||否|成本默认计量单位换算率|
|check_frequency|bool||否|盘点周期单位|
|frequency|bool||否|盘点周期|
|check_day|bool||否|盘点日|
|lastcheck_date|bool||否|上次盘点日期|
|wastage|bool||否|合理损耗率|
|solitude|bool||否|是否单独存放|
|enterprise|bool||否|生产企业|
|address|bool||否|产地|
|file|bool||否|批准文号|
|brand|bool||否|注册商标|
|checkout_no|bool||否|合格证号|
|licence|bool||否|许可证号|
|specialties|bool||否|特殊存货标志|
|defwarehouse|bool||否|默认仓库|
|salerate|bool||否|销售加成率|
|advanceDate|bool||否|累计提前期|
|currencyName|bool||否|通用名称|
|ProduceAddress|bool||否|生产地点|
|produceNation|bool||否|生产国别|
|RegisterNo|bool||否|进口药品注册证号|
|EnterNo|bool||否|入关证号|
|PackingType|bool||否|包装规格|
|EnglishName|bool||否|英文名|
|PropertyCheck|bool||否|是否质检|
|PreparationType|bool||否|剂型|
|Commodity|bool||否|注册商品批件|
|RecipeBatch|bool||否|处方药|
|NotPatentName|bool||否|国际非专利名|
|cAssComunitCode|bool||否|辅计量单位编码|
|ROPMethod|bool||否|再订货点确定方法|
|SubscribePoint|bool||否|再订货点|
|BatchRule|bool||否|批量规则|
|AssureProvideDays|bool||否|保证供应天数|
|VagQuantity|bool||否|日均耗量|
|TestStyle|bool||否|检验方式|
|DTMethod|bool||否|抽检方案|
|DTRate|bool||否|抽检率|
|DTNum|bool||否|抽检量|
|DTUnit|bool||否|检验计量单位|
|DTStyle|bool||否|抽检方式|
|QTMethod|bool||否|质量检验方案|
|bPlanInv|bool||否|是否计划品|
|bProxyForeign|bool||否|是否委外|
|bFeatureMatch|bool||否|特征选配|
|bATOModel|bool||否|是否ATO模型|
|bCheckItem|bool||否|是否选项类|
|bPTOModel|bool||否|是否PTO模型|
|bequipment|bool||否|是否备件|
|cProductUnit|bool||否|生产计量单位|
|fOrderUpLimit|bool||否|订货超额上限|
|cMassUnit|bool||否|保质期单位|
|fRetailPrice|bool||否|零售价格|
|cInvDepCode|bool||否|生产部门|
|iAlterAdvance|bool||否|变动提前期|
|fAlterBaseNum|bool||否|变动基数|
|cPlanMethod|bool||否|计划方法|
|bMPS|bool||否|是否MPS件|
|bROP|bool||否|是否ROP件|
|bRePlan|bool||否|是否重复计划|
|cSRPolicy|bool||否|供需政策|
|bBillUnite|bool||否|是否令单合并|
|iSupplyDay|bool||否|供应期间|
|fSupplyMulti|bool||否|供应倍数|
|fMinSupply|bool||否|最低供应量|
|bCutMantissa|bool||否|是否切除尾数|
|cInvPersonCode|bool||否|计划员|
|iInvTfId|bool||否|时栅代号|
|cEngineerFigNo|bool||否|工程图号|
|bInTotalCost|bool||否|成本累计否|
|iSupplyType|bool||否|供应类型|
|bConfigFree1|bool||否|结构性自由项1|
|bConfigFree2|bool||否|结构性自由项2|
|bConfigFree3|bool||否|结构性自由项3|
|bConfigFree4|bool||否|结构性自由项4|
|bConfigFree5|bool||否|结构性自由项5|
|bConfigFree6|bool||否|结构性自由项6|
|bConfigFree7|bool||否|结构性自由项7|
|bConfigFree8|bool||否|结构性自由项8|
|bConfigFree9|bool||否|结构性自由项9|
|bConfigFree10|bool||否|结构性自由项10|
|iDTLevel|bool||否|检验水平|
|cDTAQL|bool||否|AQL|
|bOutInvDT|bool||否|是否发货检验|
|bPeriodDT|bool||否|是否周期检验|
|cDTPeriod|bool||否|检验周期|
|bBackInvDT|bool||否|是否退货检验|
|iEndDTStyle|bool||否|产品抽检方式|
|bDTWarnInv|bool||否|保质期存货是否检验|
|fBackTaxRate|bool||否|退税率|
|cCIQCode|bool||否|海关代码|
|cWGroupCode|bool||否|重量计量组|
|cWUnit|bool||否|重量单位|
|fGrossW|bool||否|毛重|
|cVGroupCode|bool||否|体积计量组|
|cVUnit|bool||否|体积单位|
|fLength|bool||否|长（CM）|
|fWidth|bool||否|宽（CM）|
|fHeight|bool||否|高（CM）|
|cpurpersoncode|bool||否|采购员|
|iBigMonth|bool||否|不大于月|
|iBigDay|bool||否|不大于天|
|iSmallMonth|bool||否|不小于月|
|iSmallDay|bool||否|不小于天|
|cshopunit|bool||否|零售计量单位|
|bimportmedicine|bool||否|是否进口药品|
|bfirstbusimedicine|bool||否|是否首营药品|
|bforeexpland|bool||否|预测展开|
|cinvplancode|bool||否|计划品|
|fconvertrate|bool||否|转换因子|
|dreplacedate|bool||否|替换日期|
|binvmodel|bool||否|模型|
|iimptaxrate|bool||否|进项税率|
|iexptaxrate|bool||否|出口税率|
|bexpsale|bool||否|外销|
|idrawbatch|bool||否|领料批量|
|bcheckbsatp|bool||否|检查售前ATP|
|cinvprojectcode|bool||否|售前ATP方案|
|itestrule|bool||否|检验规则|
|crulecode|bool||否|自定义抽检规则|
|bcheckfree1|bool||否|核算自由项1|
|bcheckfree2|bool||否|核算自由项2|
|bcheckfree3|bool||否|核算自由项3|
|bcheckfree4|bool||否|核算自由项4|
|bcheckfree5|bool||否|核算自由项5|
|bcheckfree6|bool||否|核算自由项6|
|bcheckfree7|bool||否|核算自由项7|
|bcheckfree8|bool||否|核算自由项8|
|bcheckfree9|bool||否|核算自由项9|
|bcheckfree10|bool||否|核算自由项10|
|bbommain|bool||否|允许BOM母件|
|bbomsub|bool||否|允许BOM子件|
|bproductbill|bool||否|允许生产订单|
|icheckatp|bool||否|检查ATP|
|iinvatpid|bool||否|ATP规则|
|iplantfday|bool||否|计划时栅天数|
|ioverlapday|bool||否|重叠天数|
|fmaxsupply|bool||否|最高供应量|
|bpiece|bool||否|计件|
|bsrvitem|bool||否|服务项目|
|bsrvfittings|bool||否|服务配件|
|fminsplit|bool||否|最小分割量|
|bspecialorder|bool||否|客户订单专用|
|btracksalebill|bool||否|销售跟单|
|fbuyexcess|bool||否|请购超额上限|
|isurenesstype|bool||否|安全库存方法|
|idatetype|bool||否|期间类型|
|idatesum|bool||否|期间数|
|idynamicsurenesstype|bool||否|动态安全库存方法|
|ibestrowsum|bool||否|覆盖天数|
|ipercentumsum|bool||否|百分比|
|binbyprocheck|bool||否|是否依据产品检验结果入库|
|irequiretrackstyle|bool||否|需求跟踪方式|
|ibomexpandunittype|bool||否|BOM展开单位|
|iexpiratdatecalcu|bool||否|有效期推算方式 |
|bpurpricefree1|bool||否|采购定价自由项1|
|bpurpricefree2|bool||否|采购定价自由项2|
|bpurpricefree3|bool||否|采购定价自由项3|
|bpurpricefree4|bool||否|采购定价自由项4|
|bpurpricefree5|bool||否|采购定价自由项5|
|bpurpricefree6|bool||否|采购定价自由项6|
|bpurpricefree7|bool||否|采购定价自由项7|
|bpurpricefree8|bool||否|采购定价自由项8|
|bpurpricefree9|bool||否|采购定价自由项9|
|bpurpricefree10|bool||否|采购定价自由项10|
|bompricefree1|bool||否|委外定价自由项1|
|bompricefree2|bool||否|委外定价自由项2|
|bompricefree3|bool||否|委外定价自由项3|
|bompricefree4|bool||否|委外定价自由项4|
|bompricefree5|bool||否|委外定价自由项5|
|bompricefree6|bool||否|委外定价自由项6|
|bompricefree7|bool||否|委外定价自由项7|
|bompricefree8|bool||否|委外定价自由项8|
|bompricefree9|bool||否|委外定价自由项9|
|bompricefree10|bool||否|委外定价自由项10|
|bsalepricefree1|bool||否|销售定价自由项1|
|bsalepricefree2|bool||否|销售定价自由项2|
|bsalepricefree3|bool||否|销售定价自由项3|
|bsalepricefree4|bool||否|销售定价自由项4|
|bsalepricefree5|bool||否|销售定价自由项5|
|bsalepricefree6|bool||否|销售定价自由项6|
|bsalepricefree7|bool||否|销售定价自由项7|
|bsalepricefree8|bool||否|销售定价自由项8|
|bsalepricefree9|bool||否|销售定价自由项9|
|bsalepricefree10|bool||否|销售定价自由项10|
|finvoutuplimit|bool||否|发货允超上限|
|bbondedinv|bool||否|是否保税品|
|bbatchcreate|bool||否|是否建立批次档案|
|bbatchproperty1|bool||否|是否启用批次属性1|
|bbatchproperty2|bool||否|是否启用批次属性2|
|bbatchproperty3|bool||否|是否启用批次属性3|
|bbatchproperty4|bool||否|是否启用批次属性4|
|bbatchproperty5|bool||否|是否启用批次属性5|
|bbatchproperty6|bool||否|是否启用批次属性6|
|bbatchproperty7|bool||否|是否启用批次属性7|
|bbatchproperty8|bool||否|是否启用批次属性8|
|bbatchproperty9|bool||否|是否启用批次属性9|
|bbatchproperty10|bool||否|是否启用批次属性10|
|bcontrolfreerange1|bool||否|是控制自由项取值范围1|
|bcontrolfreerange2|bool||否|是控制自由项取值范围2|
|bcontrolfreerange3|bool||否|是控制自由项取值范围3|
|bcontrolfreerange4|bool||否|是控制自由项取值范围4|
|bcontrolfreerange5|bool||否|是控制自由项取值范围5|
|bcontrolfreerange6|bool||否|是控制自由项取值范围6|
|bcontrolfreerange7|bool||否|是控制自由项取值范围7|
|bcontrolfreerange8|bool||否|是控制自由项取值范围8|
|bcontrolfreerange9|bool||否|是控制自由项取值范围9|
|bcontrolfreerange10|bool||否|是控制自由项取值范围10|
|finvciqexch|bool||否|海关单位换算率|
|iwarrantyperiod|bool||否|保修期限|
|iwarrantyunit|bool||否|保修期单位|
|bmaintenance|bool||否|保养管理|
|imaintenancecycle|bool||否|保养周期|
|imaintenancecycleunit|bool||否|保养周期单位|
|binvkeypart|bool||否|是否关键物料|
|iacceptearlydays|bool||否|允许提前天数|
|fcurllaborcost|bool||否|本阶标准人工费用|
|fcurlvarmanucost|bool||否|本阶标准变动制造费用|
|fcurlfixmanucost|bool||否|本阶标准固定制造费用|
|fcurlomcost|bool||否|本阶标准委外加工费|
|fnextllaborcost|bool||否| 前阶标准人工费用|
|fnextlvarmanucost|bool||否|前阶标准变动制造费用|
|fnextlfixmanucost|bool||否|前阶标准固定制造费用|
|fnextlomcost|bool||否|前阶标准委外加工费|
|dinvcreatedatetime|bool||否|建档日期|
|bpuquota|bool||否|参与配额|
|binvrohs|bool||否|ROHS物料|
|fprjmatlimit|bool||否|采购数量上限|
|bprjmat|bool||否|是否工程物料|
|binvasset|bool||否|资产仓|
|bsrvproduct|bool||否|服务产品|
|iacceptdelaydays|bool||否|允许延后天数|
|cInvMnemCode|bool||否|助记码|
|iPlanCheckDay|bool||否|计划检验天数|
|iMaterialsCycle|bool||否|用料周期|
|idrawtype|bool||否|申请领料标识|
|bSCkeyProjections|bool||否|投产推算关键子件|
|iSupplyPeriodType|bool||否|供应期间类型|
|iTimeBucketId|bool||否|时格id|
|iAvailabilityDate|bool||否|可用日期|
|fmaterialcost|bool||否|标准材料费用|
|inearrejectdays|bool||否|失效期临近拒收天数|
|bimport|bool||否|是否进口|
|bsuitretail|bool||否|是否适用零售|
|bcoupon|bool||否|礼券|
|bstorecard|bool||否|储值卡|
|bprocessproduct|bool||否|店内加工产品|
|bprocessmaterial|bool||否|店内加工材料|
|froundfactor|bool||否|舍入因子|
|bchecksubitemcost|bool||否|是否核算分项成本|
|bconsiderfreestock|bool||否|是否考虑自由库存|
|breceiptbydt|bool||否|是否依据来料检验结果入库|
|bkccutmantissa|bool||否|领料是否切除尾数|
|iPlanDefault|bool||否|计划默认属性|
|iPFBatchQty|bool||否|流转卡批量|
|iAllocatePrintDgt|bool||否|子件用料打印精度|
|bCheckBatch|bool||否|批次核算|
|bMngOldpart|bool||否|管理旧件|
|iOldpartMngRule|bool||否|旧件管理规则|
|partid|bool|entry|否|自增量|
|invcode|bool|entry|否|存货编码|
|free1|bool|entry|否|自由项1|
|free2|bool|entry|否|自由项2|
|free3|bool|entry|否|自由项3|
|free4|bool|entry|否|自由项4|
|free5|bool|entry|否|自由项5|
|free6|bool|entry|否|自由项6|
|free7|bool|entry|否|自由项7|
|free8|bool|entry|否|自由项8|
|free9|bool|entry|否|自由项9|
|free10|bool|entry|否|自由项10|
|safeqty|bool|entry|否|安全库存|
|minqty|bool|entry|否|最低供应量|
|mulqty|bool|entry|否|供应倍数|
|fixqty|bool|entry|否|固定供应量|
|cbasengineerfigno|bool|entry|否|工程图号|
|fbasmaxsupply|bool|entry|否|最高供应量|
|isurenesstype|bool|entry|否|安全库存方法|
|idatetype|bool|entry|否|期间类型|
|idatesum|bool|entry|否|期间数|
|idynamicsurenesstype|bool|entry|否|动态安全库存方法|
|ibestrowsum|bool|entry|否|覆盖天数|
|ipercentumsum|bool|entry|否|百分比|
|bfreestop|bool|entry|否|停用|

## 示例

::: tabs
@tab 新增

```json
{
    "inventory": {
        "code": "9901",
        "name": "存货名称",
        "sort_code": "99",
        "main_measure": "0101",
        "unitgroup_code": "01",
        "cPlanMethod": "R",
        "cSRPolicy": "PE",
        "iSupplyType":"2",
        "start_date":"2015-12-01",
        "entry": [{
            "invcode": "9901"
        }]
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
