---
title: 采购入库单
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

## 资源符

`purchasein`
  
## 新增

`create`

### 新增参数

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|dcreditstart|date||false|立账日|
|cvenpuomprotocolname|string||false|收付款协议名称|
|cvenfullname|string||false|供应商全称|
|cvenpuomprotocol|string||false|收付款协议编码|
|icreditperiod|long||false|账期|
|dgatheringdate|date||false|到期日|
|bcredit|string||false|是否为立账单据|
|id|long||false|自动编号|
|cvouchtype|string||false|单据类型|
|cbustype|string||false|业务类型|
|csource|string||false|单据来源|
|darvdate|date||false|到货日期|
|cchkcode|string||false|检验单号|
|dchkdate|date||false|检验日期|
|cchkperson|string||false|检验员|
|iavaquantity|string||false|可用量|
|iavanum|string||false|可用件数|
|ipresentnum|string||false|现存件数|
|gspcheck|string||false|gsp复核标志|
|cgcroutecode|string||false|协同路线编码|
|cgcroutename|string||false|协同路线名称|
|cbuscode|string||false|业务号|
|cwhcode|string||false|仓库编码|
|ufts|string||false|时间戳|
|chinvsn|string||false|序列号|
|bpufirst|string||false|采购期初标志|
|ipurorderid|string||false|采购订单ID|
|ipurarriveid|string||false|采购到货单ID|
|iarriveid|string||false|到货单ID|
|isalebillid|string||false|进口发票号|
|itaxrate|double||false|税率|
|iexchrate|double||false|汇率|
|cexch_name|string||true|币种|
|idiscounttaxtype|string||false|扣税类别|
|ireturncount|string||false|ireturncount|
|iverifystate|string||false|iverifystate|
|iswfcontrolled|string||false|iswfcontrolled|
|bomfirst|string||false|委外期初标志|
|cwhname|string||true|仓库|
|ddate|date||true|入库日期|
|iflowid|long||false|流程模式ID|
|cflowname|string||false|流程模式描述|
|csysbarcode|string||false|单据条码|
|ccode|string||true|入库单号|
|crdcode|string||false|入库类别编码|
|crdname|string||false|入库类别|
|cdepcode|string||false|部门编码|
|cdepname|string||false|部门|
|cpersoncode|string||false|业务员编码|
|cpersonname|string||false|业务员|
|cptcode|string||false|采购类型编码|
|cptname|string||false|采购类型|
|cvencode|string||false|供货单位编码|
|cvenabbname|string||true|供货单位|
|cordercode|string||false|订单号|
|carvcode|string||false|到货单号|
|cbillcode|string||false|发票id|
|cmemo|string||false|备注|
|chandler|string||false|审核人|
|caccounter|string||false|记账人|
|cmaker|string||false|制单人|
|cdefine1|string||false|表头自定义项1|
|cdefine2|string||false|表头自定义项2|
|cdefine3|string||false|表头自定义项3|
|cdefine4|date||false|表头自定义项4|
|cdefine5|int||false|表头自定义项5|
|cdefine6|date||false|表头自定义项6|
|cdefine7|double||false|表头自定义项7|
|cdefine8|string||false|表头自定义项8|
|cdefine9|string||false|表头自定义项9|
|cdefine10|string||false|表头自定义项10|
|ipresent|string||false|现存量|
|isafesum|string||false|安全库存量|
|itopsum|string||false|最高库存量|
|ilowsum|string||false|最低库存量|
|dveridate|date||false|审核日期|
|cdefine11|string||false|表头自定义项11|
|cdefine12|string||false|表头自定义项12|
|cdefine13|string||false|表头自定义项13|
|cdefine14|string||false|表头自定义项14|
|cdefine15|int||false|表头自定义项15|
|cdefine16|double||false|表头自定义项16|
|vt_id|long||false|模版号|
|cmodifyperson|string||false|修改人|
|dmodifydate|date||false|修改日期|
|dnmaketime|date||false|制单时间|
|dnmodifytime|date||false|修改时间|
|dnverifytime|date||false|审核时间|
|isotype|string|entry|false|需求跟踪方式|
|isumbillquantity|double|entry|false|累计开票数量|
|cbaccounter|string|entry|false|记账人|
|bcosting|string|entry|false|是否核算|
|impcost|string|entry|false|最高进价|
|autoid|long|entry|false|自动编号|
|id|long|entry|false|与收发记录主表关联项|
|cinvcode|string|entry|true|存货编码|
|cinvaddcode|string|entry|false|存货代码|
|cinvname|string|entry|false|存货名称|
|cinvstd|string|entry|false|规格型号|
|cinvm_unit|string|entry|false|主计量单位|
|cinva_unit|string|entry|false|库存单位|
|cinvccode|string|entry|false|所属分类码|
|iinvsncount|long|entry|false|序列号个数|
|creworkmocode|string|entry|false|返工订单号|
|ireworkmodetailsid|long|entry|false|返工订单子表标识|
|iproducttype|string|entry|false|产出品类型|
|cmaininvcode|string|entry|false|对应主产品|
|imainmodetailsid|long|entry|false|主产品订单子表标识|
|isharematerialfee|double|entry|false|分摊材料费|
|cbmemo|string|entry|false|备注|
|iFaQty|double|entry|false|转资产数量|
|isTax|double|entry|false|累计结算税额|
|cinvouchtype|string|entry|false|对应入库单类型|
|idebitids|long|entry|false|借入借出单子表id|
|imergecheckautoid|string|entry|false|检验单子表ID|
|outcopiedquantity|string|entry|false|已复制数量|
|gcupid|long|entry|false|协同生单上游单据ID|
|gcupids|long|entry|false|协同生单上游单据明细IDs|
|gcsourceid|long|entry|false|协同路线起始单据ID|
|gcsourceids|long|entry|false|协同路线起始单据IDs|
|cplanlotcode|string|entry|false|计划批号|
|taskguid|string|entry|false|taskguid|
|bgift|string|entry|false|赠品|
|iinvexchrate|double|entry|false|换算率|
|iposflag|string|entry|false|已分配货位|
|gcupcardnum|string|entry|false|协同生单上游单据CardNumber|
|inum|double|entry|false|件数|
|cbvencode|string|entry|false|供应商编码|
|cvenname|string|entry|false|供应商|
|imassdate|long|entry|false|保质期|
|dmadedate|date|entry|false|生产日期|
|cassunit|string|entry|false|库存单位码|
|cbatch|string|entry|false|批号|
|iarrsid|string|entry|false|采购到货单子表标识|
|corufts|string|entry|false|时间戳|
|cposname|string|entry|false|货位|
|cbinvsn|string|entry|false|序列号|
|strowguid|string|entry|false|rowguid|
|cgspstate|double|entry|false|检验状态|
|scrapufts|string|entry|false|不合格品时间戳|
|ccheckcode|string|entry|false|检验单号|
|icheckidbaks|string|entry|false|检验单子表id|
|crejectcode|string|entry|false|不良品处理单号|
|cbatchproperty1|double|entry|false|批次属性1|
|cfree1|string|entry|false|存货自由项1|
|irejectids|string|entry|false|不良品处理单id|
|ccheckpersoncode|string|entry|false|检验员编码|
|ccheckpersonname|string|entry|false|检验员|
|dcheckdate|date|entry|false|检验日期|
|cmassunit|string|entry|false|保质期单位|
|ioritaxcost|double|entry|false|原币含税单价|
|ioricost|double|entry|false|原币单价|
|iorimoney|double|entry|false|原币金额|
|ioritaxprice|double|entry|false|原币税额|
|iorisum|double|entry|false|原币价税合计|
|itaxrate|double|entry|false|税率|
|cfree2|string|entry|false|存货自由项2|
|cbatchproperty2|double|entry|false|批次属性2|
|itaxprice|double|entry|false|本币税额|
|isum|double|entry|false|本币价税合计|
|btaxcost|double|entry|false|单价标准|
|cpoid|string|entry|false|订单号|
|strcontractid|string|entry|false|合同号|
|strcode|string|entry|false|合同标的编码|
|imaterialfee|double|entry|false|材料费|
|iprocesscost|double|entry|false|加工费单价|
|iprocessfee|double|entry|false|加工费|
|dmsdate|date|entry|false|核销日期|
|iaprice|double|entry|false|暂估金额|
|ismaterialfee|double|entry|false|累计结算材料费|
|isprocessfee|double|entry|false|累计结算加工费|
|iomodid|long|entry|false|委外订单子表ID|
|cveninvcode|string|entry|false|供应商存货编码|
|cveninvname|string|entry|false|供应商存货名称|
|isodid|string|entry|false|销售订单子表ID|
|csocode|string|entry|false|需求跟踪号|
|isoseq|string|entry|false|需求跟踪行号|
|cvmivencode|string|entry|false|代管商代码|
|cvmivenname|string|entry|false|代管商|
|ipunitcost|double|entry|false|计划单价/售价|
|bvmiused|string|entry|false|代管消耗标识|
|cbarvcode|string|entry|false|到货单号|
|dbarvdate|date|entry|false|到货日期|
|cdemandmemo|string|entry|false|需求分类代号说明|
|iordertype|string|entry|false|来源订单类型|
|iorderdid|long|entry|false|来源订单子表ID|
|iordercode|string|entry|false|来源订单号|
|iorderseq|string|entry|false|来源订单行号|
|ivmisettlequantity|double|entry|false|代管挂账确认单数量|
|ivmisettlenum|double|entry|false|代管挂账确认单件数|
|iexpiratdatecalcu|string|entry|false|有效期推算方式|
|cexpirationdate|string|entry|false|有效期至|
|dexpirationdate|date|entry|false|有效期计算项|
|cciqbookcode|string|entry|false|手册号|
|ibondedsumqty|string|entry|false|累计保税处理抽取数量|
|iOldPartId|long|entry|false|降级前物料编码|
|fOldQuantity|double|entry|false|降级前数量|
|ipprice|double|entry|false|计划金额/售价金额|
|cbsysbarcode|string|entry|false|单据行条码|
|dvdate|date|entry|false|失效日期|
|cvouchcode|string|entry|false|对应入库单id|
|iquantity|double|entry|false|数量|
|iunitcost|double|entry|false|本币单价|
|dsdate|date|entry|false|结算日期|
|itax|double|entry|false|税额|
|isnum|double|entry|false|累计结算件数|
|imoney|double|entry|false|累计结算金额|
|isoutquantity|double|entry|false|累计出库数量|
|isoutnum|double|entry|false|累计出库件数|
|ifnum|double|entry|false|实际件数|
|ifquantity|double|entry|false|实际数量|
|iprice|double|entry|false|本币金额|
|cinvdefine1|string|entry|false|存货自定义项1|
|cinvdefine2|string|entry|false|存货自定义项2|
|cinvdefine3|string|entry|false|存货自定义项3|
|creplaceitem|string|entry|false|替换件|
|cposition|string|entry|false|货位编码|
|irowno|string|entry|false|行号|
|cdefine22|string|entry|false|表体自定义项1|
|cdefine23|string|entry|false|表体自定义项2|
|cdefine24|string|entry|false|表体自定义项3|
|cdefine25|string|entry|false|表体自定义项4|
|cdefine26|double|entry|false|表体自定义项5|
|cdefine27|double|entry|false|表体自定义项6|
|isquantity|double|entry|false|累计结算数量|
|iposid|long|entry|false|订单子表ID|
|facost|double|entry|false|暂估单价|
|citemcode|string|entry|false|项目编码|
|citem_class|string|entry|false|项目大类编码|
|cname|string|entry|false|项目名称|
|citemcname|string|entry|false|项目大类名称|
|cfree3|string|entry|false|存货自由项3|
|cbatchproperty3|double|entry|false|批次属性3|
|cbatchproperty4|double|entry|false|批次属性4|
|cfree4|string|entry|false|存货自由项4|
|cfree5|string|entry|false|存货自由项5|
|cbatchproperty5|double|entry|false|批次属性5|
|cbatchproperty6|string|entry|false|批次属性6|
|cfree6|string|entry|false|存货自由项6|
|cfree7|string|entry|false|存货自由项7|
|cbatchproperty7|string|entry|false|批次属性7|
|cbatchproperty8|string|entry|false|批次属性8|
|cfree8|string|entry|false|存货自由项8|
|cfree9|string|entry|false|存货自由项9|
|cbatchproperty9|string|entry|false|批次属性9|
|cfree10|string|entry|false|存货自由项10|
|cbatchproperty10|date|entry|false|批次属性10|
|cdefine28|string|entry|false|表体自定义项7|
|iimosid|string|entry|false|iimosid|
|iimbsid|string|entry|false|iimbsid|
|cdefine29|string|entry|false|表体自定义项8|
|cdefine30|string|entry|false|表体自定义项9|
|cdefine31|string|entry|false|表体自定义项10|
|cdefine32|string|entry|false|表体自定义项11|
|cdefine33|string|entry|false|表体自定义项12|
|cdefine34|int|entry|false|表体自定义项13|
|cdefine35|int|entry|false|表体自定义项14|
|cdefine36|date|entry|false|表体自定义项15|
|cdefine37|date|entry|false|表体自定义项16|
|cinvdefine4|string|entry|false|存货自定义项4|
|cinvdefine5|string|entry|false|存货自定义项5|
|cinvdefine6|string|entry|false|存货自定义项6|
|cinvdefine7|string|entry|false|存货自定义项7|
|cinvdefine8|string|entry|false|存货自定义项8|
|cinvdefine9|string|entry|false|存货自定义项9|
|cinvdefine10|string|entry|false|存货自定义项10|
|cinvdefine11|int|entry|false|存货自定义项11|
|cinvdefine12|int|entry|false|存货自定义项12|
|cinvdefine13|double|entry|false|存货自定义项13|
|cinvdefine14|double|entry|false|存货自定义项14|
|cinvdefine15|date|entry|false|存货自定义项15|
|cinvdefine16|date|entry|false|存货自定义项16|
|cinvouchcode|string|entry|false|对应入库单号|
|cbarcode|string|entry|false|条形码|
|inquantity|double|entry|false|应收数量|
|innum|double|entry|false|应收件数|
|icheckids|long|entry|false|检验单子表ID|

### 新增示例

::: tabs
@tab 默认

```json
{
    "purchasein": {
        "brdflag": "1",
        "cvouchtype": "01",
        "cbustype": "普通采购",
        "csource": "库存",
        "cwhcode": "50",
        "cwhname": "电商总仓",
        "cdepcode": "0401",
        "cdepname": "采购部",
        "cvencode": "01002",
        "cvenabbname": "辰环手机配件",
        "itaxrate": "17.000000",
        "iexchrate": "1",
        "entry": [{
                "cinvcode": "0333",
                "cinvname": "华为荣耀X2",
                "iquantity": "100.0000000000",
                "cfree9": "银色",
                "cfree10": "32G",
                "irowno": "1"
            },
            {
                "cinvcode": "0333",
                "cinvname": "华为荣耀X2",
                "cinvm_unit": "台",
                "iquantity": "100.0000000000",
                "cfree9": "银色",
                "cfree10": "64G",
                "irowno": "2"
            }
        ]
    }
}
```

@tab 参照到货单

```json
{
    "purchasein": {
        "brdflag": "1",
        "cvouchtype": "01",
        "cbustype": "普通采购",
        "csource": "采购到货单",
        "cwhcode": "09",
        "cwhname": "备件库",
        "cdepcode": "0401",
        "cdepname": "采购部",
        "cvencode": "03006",
        "cvenabbname": "迈拓科技",
        "carvcode": "0000000018",
        "cdefine1": "傅奇",
        "iexchrate": "1",
        "itaxrate": "17",
        "cexch_name": "人民币",
        "cordercode": "0000000019",
        "darvdate": "2015-01-01",
        "ipurarriveid": "1000000023",
        "entry": {
            "cinvcode": "09004",
            "iquantity": "1.0000000000",
            "iarrsid": "1000000034",
            "iposid": "1000000043",
            "cpoid": "0000000019",
            "cbarvcode": "0000000018",
            "irowno": "1"
        }
    }
}
```

@tab 响应

```json
{
    "errcode": "0",
    "errmsg": "",
    "id": "1000000001",
    "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

## 删除

`delete`

### 删除示例

::: tabs
@tab csharp

```cs
//引用NPK.dll文件
using NPK;

//服务码
const string CORPCODE="XXX";
//授权码
const string CORPLICENSE="XXX";
//服务器IP地址
const string ADDRESS="127.0.0.1";
//账套号
const string ACCOUNT="999";
//资源
const string RESOURCE="purchasein/delete";
//单据ID
var id=1000000001;
//唯一号
var tradeid=Guid.NewGuid().ToString("N");
//声明客户端
var client=new NPClient();
//本地调用
var result=client.InvokeLocal(CORPCODE,CORPLICENSE,RESOURCE,tradeid,"",id,"",ADDRESS,ACCOUNT);
Console.WriteLine(result);
```

@tab vb

```vb
'服务码
private const CORPCODE as String="XXX"
'授权码
private const CORPLICENSE as String="XXX"
'服务器IP地址
private const ADDRESS as String="127.0.0.1"
'账套号
private const ACCOUNT as String="999"
'资源
private const RESOURCE as String="purchasein/delete"
'单据ID
dim id as Long
id=1000000001
'唯一号
dim tradeid as String
tradeid=Format(now,"yyyyMMddHHmmss") '演示用
'客户端声明
dim client as Object
set client=CreateObject("NPK.NPClient");
'本地调用
dim sRet as String
sRet=client.InvokeLocal(CORPLICENSE,CORPLICENSE,RESOURCE,tradeid,"",id,"",ADDRESS,ACCOUNT);
Msgbox sRet
```

@tab 响应

```json
{
    "errcode": "0",
    "errmsg": "",
    "id": "1000000001",
    "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

## 审核

`verify`

### 审核示例

::: tabs
@tab csharp

```cs
//引用NPK.dll文件
using NPK;

//服务码
const string CORPCODE="XXX";
//授权码
const string CORPLICENSE="XXX";
//服务器IP地址
const string ADDRESS="127.0.0.1";
//账套号
const string ACCOUNT="999";
//资源
const string RESOURCE="purchasein/verify";
//单据ID
var id=1000000001;
//唯一号
var tradeid=Guid.NewGuid().ToString("N");
//声明客户端
var client=new NPClient();
//本地调用
var result=client.InvokeLocal(CORPCODE,CORPLICENSE,RESOURCE,tradeid,"",id,"",ADDRESS,ACCOUNT);
Console.WriteLine(result);
```

@tab vb

```vb
'服务码
private const CORPCODE as String="XXX"
'授权码
private const CORPLICENSE as String="XXX"
'服务器IP地址
private const ADDRESS as String="127.0.0.1"
'账套号
private const ACCOUNT as String="999"
'资源
private const RESOURCE as String="purchasein/verify"
'单据ID
dim id as Long
id=1000000001
'唯一号
dim tradeid as String
tradeid=Format(now,"yyyyMMddHHmmss") '演示用
'客户端声明
dim client as Object
set client=CreateObject("NPK.NPClient");
'本地调用
dim sRet as String
sRet=client.InvokeLocal(CROP,CORPSECRET,RESOURCE,tradeid,"",id,"",ADDRESS,ACCOUNT);
Msgbox sRet
```

@tab 响应

```json
{
    "errcode": "0",
    "errmsg": "",
    "id": "1000000001",
    "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::

## 弃审

`unverify`

### 弃审示例

::: tabs
@tab csharp

```cs
//引用NPK.dll文件
using NPK;

//服务码
const string CORPCODE="XXX";
//授权码
const string CORPLICENSE="XXX";
//服务器IP地址
const string ADDRESS="127.0.0.1";
//账套号
const string ACCOUNT="999";
//资源
const string RESOURCE="purchasein/unverify";
//单据ID
var id=1000000001;
//唯一号
var tradeid=Guid.NewGuid().ToString("N");
//声明客户端
var client=new NPClient();
//本地调用
var result=client.InvokeLocal(CORPCODE,CORPLICENSE,RESOURCE,tradeid,"",id,"",ADDRESS,ACCOUNT);
Console.WriteLine(result);
```

@tab vb

```vb
'服务码
private const CORPCODE as String="XXX"
'授权码
private const CORPLICENSE as String="XXX"
'服务器IP地址
private const ADDRESS as String="127.0.0.1"
'账套号
private const ACCOUNT as String="999"
'资源
private const RESOURCE as String="purchasein/unverify"
'单据ID
dim id as Long
id=1000000001
'唯一号
dim tradeid as String
tradeid=Format(now,"yyyyMMddHHmmss") '演示用
'客户端声明
dim client as Object
set client=CreateObject("NPK.NPClient");
'本地调用
dim sRet as String
sRet=client.InvokeLocal(CROP,CORPSECRET,RESOURCE,tradeid,"",id,"",ADDRESS,ACCOUNT);
Msgbox sRet
```

@tab 响应

```json
{
    "errcode": "0",
    "errmsg": "",
    "id": "1000000001",
    "tradeid": "3eb76146-c94b-4b4b-87ef-40ac1087f9ba"
}
```

:::
