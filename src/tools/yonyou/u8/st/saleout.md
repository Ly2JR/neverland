---
title: U8 销售出库单
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

`saleout`
  
## 参照

`create`

### 参照参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|id|long||false|ID|
|cvouchtype|string||false|单据类型|
|cvouchname|string||false|单据类名|
|cbustype|string||false|业务类型|
|dveridate|date||false|审核日期|
|cdefine11|string||false|表头自定义项11|
|cdefine12|string||false|表头自定义项12|
|cdefine13|string||false|表头自定义项13|
|cdefine14|string||false|表头自定义项14|
|cdefine15|int||false|表头自定义项15|
|cdefine16|double||false|表头自定义项16|
|csourcels|string||false|单据来源|
|cinspector|string||false|验货人|
|dinspecttime|date||false|验货时间|
|vt_id|long||false|模版号|
|dchkdate|date||false|检验日期|
|ccusdefine1|string||false|客户自定义项1|
|ccusdefine2|string||false|客户自定义项2|
|ccusdefine3|string||false|客户自定义项3|
|ccusdefine4|string||false|客户自定义项4|
|ccusdefine5|string||false|客户自定义项5|
|ccusdefine6|string||false|客户自定义项6|
|ccusdefine7|string||false|客户自定义项7|
|ccusdefine8|string||false|客户自定义项8|
|ccusdefine9|string||false|客户自定义项9|
|ccusdefine12|long||false|客户自定义项12|
|ccusdefine13|double||false|客户自定义项13|
|ccusdefine14|double||false|客户自定义项14|
|ccusdefine15|date||false|客户自定义项15|
|ccusdefine16|date||false|客户自定义项16|
|ccusdefine10|string||false|客户自定义项10|
|ccusdefine11|long||false|客户自定义项11|
|cweighter|string||false|称重人|
|cgcroutecode|string||false|协同路线编码|
|cgcroutename|string||false|协同路线名称|
|febweight|double||false|重量|
|cinvoicecompany|string||false|开票单位编码|
|cinvoicecompanyabbname|string||false|开票单位简称|
|cebweightunit|string||false|重量单位|
|dweighttime|date||false|称重时间|
|cchkperson|string||false|检验员|
|iavaquantity|string||false|可用量|
|cebexpresscode|string||false|快递单号|
|bscanexpress|string||false|是否确认快递单号|
|iavanum|string||false|可用件数|
|ipresentnum|string||false|现存件数|
|cbuscode|string||false|业务号|
|gspcheck|string||false|gsp复核标志|
|csource|string||false|单据来源|
|ufts|string||false|时间戳|
|chinvsn|string||false|序列号|
|cchkcode|string||false|检验单号|
|iverifystate|string||false|iverifystate|
|iswfcontrolled|string||false|iswfcontrolled|
|cshipaddress|string||false|发货地址|
|ccusperson|string||false|客户联系人|
|ccusphone|string||false|客户电话|
|ccushand|string||false|客户手机|
|ccusaddress|string||false|客户地址|
|contactphone|string||false|客户联系人电话|
|contactmobile|string||false|客户联系人手机|
|cdeliverunit|string||false|收货单位|
|ccontactname|string||false|收货单位联系人|
|cofficephone|string||false|收货单位联系人电话|
|cmobilephone|string||false|收货单位联系人手机|
|cpsnophone|string||false|业务员电话|
|cpsnmobilephone|string||false|业务员手机|
|cwhcode|string||false|仓库编码|
|caddcode|string||false|发货地址编码|
|ireturncount|string||false|ireturncount|
|cwhname|string||true|仓库|
|iflowid|long||false|流程模式ID|
|cflowname|string||false|流程模式描述|
|ccusname|string||false|客户名称|
|csysbarcode|string||false|单据条码|
|ddate|date||true|出库日期|
|ccode|string||true|出库单号|
|crdcode|string||false|出库类别编码|
|crdname|string||false|出库类别|
|cdepcode|string||false|部门编码|
|cdepname|string||false|销售部门|
|cpersoncode|string||false|业务员编码|
|cpersonname|string||false|业务员|
|cstcode|string||false|销售类型编码|
|cstname|string||false|销售类型|
|ccuscode|string||false|客户编码|
|ccusabbname|string||true|客户|
|cvencode|string||false|供应商代码|
|cbillcode|string||false|发票id|
|cdlcode|string||false|发货单id|
|cmemo|string||false|备注|
|cmaker|string||false|制单人|
|caccounter|string||false|记账人|
|ipresent|string||false|现存量|
|cvenabbname|string||false|供应商|
|chandler|string||false|审核人|
|isafesum|string||false|安全库存量|
|itopsum|string||false|最高库存量|
|ilowsum|string||false|最低库存量|
|cdefine1|string||false|表头自定义项1|
|cdefine2|string||false|表头自定义项2|
|cdefine3|string||false|表头自定义项3|
|cdefine4|date||false|表头自定义项4|
|cdefine5|int||false|表头自定义项5|
|cdefine6|date||false|表头自定义项6|
|cdefine7|double||false|表头自定义项7|
|cdefine8|string||false|表头自定义项8|
|cdefine9|string||false|表头自定义项9|
|cmodifyperson|string||false|修改人|
|dmodifydate|date||false|修改日期|
|dnmaketime|date||false|制单时间|
|dnmodifytime|date||false|修改时间|
|dnverifytime|date||false|审核时间|
|cdefine10|string||false|表头自定义项10|
|isotype|string|entry|false|需求跟踪方式|
|stockupid|string|entry|false|stockupid|
|cbaccounter|string|entry|false|记账人|
|bcosting|string|entry|false|是否核算|
|id|long|entry|false|ID|
|cinvcode|string|entry|true|存货编码|
|cinvaddcode|string|entry|false|存货代码|
|cinvname|string|entry|false|存货名称|
|cinvstd|string|entry|false|规格型号|
|cfree1|string|entry|false|存货自由项1|
|cbatchproperty1|double|entry|false|批次属性1|
|cbatchproperty2|double|entry|false|批次属性2|
|cfree2|string|entry|false|存货自由项2|
|cbatch|string|entry|false|批号|
|cinva_unit|string|entry|false|库存单位|
|inum|double|entry|false|件数|
|iinvsncount|long|entry|false|序列号个数|
|fsettleqty|double|entry|false|累计开票数量|
|fretqtywkp|double|entry|false|未开票退货数量|
|fretqtyykp|double|entry|false|已开票退货数量|
|iavaquantity|double|entry|false|可用量|
|iavanum|double|entry|false|可用件数|
|ipresent|double|entry|false|现存量|
|ipresentnum|double|entry|false|现存件数|
|ipesotype|string|entry|false|需求跟踪方式|
|ipesodid|string|entry|false|销售订单子表|
|cpesocode|string|entry|false|需求跟踪号|
|ipesoseq|string|entry|false|需求跟踪行号|
|idebitids|long|entry|false|借入借出单子表id|
|cbmemo|string|entry|false|备注|
|cinvouchtype|string|entry|false|对应入库单类型|
|coutvouchid|string|entry|false|对应蓝字出库单id|
|coutvouchtype|string|entry|false|对应蓝字出库单类型|
|isredoutquantity|double|entry|false|对应蓝字出库单退回数量|
|isredoutnum|double|entry|false|对应蓝字出库单退回件数|
|gcsourceid|long|entry|false|协同路线起始单据ID|
|gcsourceids|long|entry|false|协同路线起始单据IDs|
|taskguid|string|entry|false|taskguid|
|iinvexchrate|double|entry|false|换算率|
|iposflag|string|entry|false|已分配货位|
|cdefine36|date|entry|false|表体自定义项15|
|cdefine37|date|entry|false|表体自定义项16|
|cinvdefine15|date|entry|false|存货自定义项15|
|cinvdefine16|date|entry|false|存货自定义项16|
|cinvm_unit|string|entry|false|主计量单位|
|iquantity|double|entry|false|数量|
|iunitcost|double|entry|false|单价|
|corufts|string|entry|false|对应单据时间戳|
|cbinvsn|string|entry|false|序列号|
|strowguid|string|entry|false|rowguid|
|scrapufts|string|entry|false|不合格品时间戳|
|cmassunit|string|entry|false|保质期单位|
|strcontractid|string|entry|false|合同号|
|strcode|string|entry|false|合同标的编码|
|igrossweight|double|entry|false|毛重|
|inetweight|double|entry|false|净重|
|iprice|double|entry|false|金额|
|ccusinvcode|string|entry|false|客户存货编码|
|ccusinvname|string|entry|false|客户存货名称|
|isodid|string|entry|false|销售订单子表ID|
|csocode|string|entry|false|需求跟踪号|
|isoseq|string|entry|false|需求跟踪行号|
|cvmivencode|string|entry|false|代管商代码|
|cvmivenname|string|entry|false|代管商|
|bvmiused|string|entry|false|代管消耗标识|
|ivmisettlequantity|double|entry|false|代管挂账确认单数量|
|ivmisettlenum|double|entry|false|代管挂账确认单件数|
|ipunitcost|double|entry|false|计划单价/售价|
|ipprice|double|entry|false|计划金额/售价金额|
|dvdate|date|entry|false|失效日期|
|cbdlcode|string|entry|false|发货单号|
|cdemandmemo|string|entry|false|需求分类代号说明|
|iordertype|string|entry|false|来源订单类型|
|iorderdid|long|entry|false|来源订单子表ID|
|iordercode|string|entry|false|来源订单号|
|iorderseq|string|entry|false|来源订单行号|
|iexpiratdatecalcu|string|entry|false|有效期推算方式|
|cexpirationdate|string|entry|false|有效期至|
|dexpirationdate|date|entry|false|有效期计算项|
|cciqbookcode|string|entry|false|手册号|
|ibondedsumqty|string|entry|false|累计保税处理抽取数量|
|cbsysbarcode|string|entry|false|单据行条码|
|cposition|string|entry|false|货位编码|
|creplaceitem|string|entry|false|替换件|
|cinvdefine1|string|entry|false|存货自定义项1|
|cinvdefine2|string|entry|false|存货自定义项2|
|cinvdefine3|string|entry|false|存货自定义项3|
|autoid|long|entry|false|其他入库单编号|
|cvouchcode|string|entry|false|对应入库单id|
|isoutquantity|double|entry|false|累计出库数量|
|isoutnum|double|entry|false|累计出库件数|
|cdefine22|string|entry|false|表体自定义项1|
|cdefine23|string|entry|false|表体自定义项2|
|cdefine24|string|entry|false|表体自定义项3|
|cdefine25|string|entry|false|表体自定义项4|
|cdefine26|double|entry|false|表体自定义项5|
|cdefine27|double|entry|false|表体自定义项6|
|citemcode|string|entry|false|项目编码|
|cname|string|entry|false|项目|
|citem_class|string|entry|false|项目大类编码|
|idlsid|long|entry|false|发货单子表ID|
|isbsid|long|entry|false|发票子表ID|
|isendquantity|long|entry|false|发货数量|
|irowno|string|entry|false|行号|
|isendnum|long|entry|false|发货件数|
|citemcname|string|entry|false|项目大类名称|
|iensid|double|entry|false|委托子表id|
|cfree3|string|entry|false|存货自由项3|
|cbatchproperty3|double|entry|false|批次属性3|
|cbatchproperty4|double|entry|false|批次属性4|
|cfree4|string|entry|false|存货自由项4|
|cbatchproperty5|double|entry|false|批次属性5|
|cfree5|string|entry|false|存货自由项5|
|cfree6|string|entry|false|存货自由项6|
|cbatchproperty6|string|entry|false|批次属性6|
|cbatchproperty7|string|entry|false|批次属性7|
|cfree7|string|entry|false|存货自由项7|
|cfree8|string|entry|false|存货自由项8|
|cbatchproperty8|string|entry|false|批次属性8|
|cfree9|string|entry|false|存货自由项9|
|cbatchproperty9|string|entry|false|批次属性9|
|cbatchproperty10|date|entry|false|批次属性10|
|cfree10|string|entry|false|存货自由项10|
|cdefine28|string|entry|false|表体自定义项7|
|cdefine29|string|entry|false|表体自定义项8|
|cdefine30|string|entry|false|表体自定义项9|
|cdefine31|string|entry|false|表体自定义项10|
|cdefine32|string|entry|false|表体自定义项11|
|cdefine33|string|entry|false|表体自定义项12|
|cdefine34|int|entry|false|表体自定义项13|
|cdefine35|int|entry|false|表体自定义项14|
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
|cinvouchcode|string|entry|false|对应入库单号|
|cbarcode|string|entry|false|条形码|
|inquantity|double|entry|false|应发数量|
|innum|double|entry|false|应发件数|
|dmadedate|date|entry|false|生产日期|
|icheckids|long|entry|false|检验单子表ID|
|cbvencode|string|entry|false|供应商编码|
|cvenname|string|entry|false|供应商|
|imassdate|long|entry|false|保质期|
|bgsp|string|entry|false|是否质检|
|cgspstate|double|entry|false|检验状态|
|cassunit|string|entry|false|库存单位码|
|cposname|string|entry|false|货位|

### 参照示例

::: tabs
@tab 参照销售发货单生成销售出库单

```json
{
    "saleout": {
        "brdflag": "0",
        "cvouchtype": "32",
        "cvouchname": "销售出库单",
        "cbustype": "分期收款",
        "cbuscode": "0000000004",
        "csource": "发货单",
        "cwhcode": "30",
        "cwhname": "PC原材料仓",
        "crdcode": "22",
        "crdname": "销售出库",
        "cdepcode": "0302",
        "cdepname": "销售部",
        "cpersoncode": "00040",
        "cpersonname": "崔可",
        "cstcode": "01",
        "cstname": "普通销售",
        "ccuscode": "0215",
        "cdefine1": "崔可",
        "cinvoicecompany": "0215",
        "cinvoicecompanyabbname": "鹏程电子",
        "cdlcode":"1000000007",
        "entry": {
            "cinvcode": "01019002065",
            "cinvname": "硬盘-1000G",
            "iquantity": "50.0000000000",
            "idlsid": "1000000009",
            "cbdlcode": "0000000004",
            "iordertype": "1",
            "iorderdid": "1000000077",
            "iordercode": "0000000029",
            "iorderseq": "1",
            "irowno": "1",
            "ipesodid": "1000000077",
            "ipesotype": "1",
            "cpesocode": "0000000029",
            "ipesoseq": "1"
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

## 发货单推单

`pulldispatch`

### 发货单退单示例

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
const string RESOURCE="saleout/pulldispatch";
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
private const RESOURCE as String="saleout/pulldispatch"
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
sRet=client.InvokeLocal(CORPCODE,CORPLICENSE,RESOURCE,tradeid,"",id,"",ADDRESS,ACCOUNT);
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
const string RESOURCE="saleout/delete";
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
private const RESOURCE as String="saleout/delete"
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
const string RESOURCE="saleout/verify";
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
private const RESOURCE as String="saleout/verify"
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
const string RESOURCE="saleout/unverify";
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
private const RESOURCE as String="saleout/unverify"
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
