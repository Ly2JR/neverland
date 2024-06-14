---
title: 材料出库单
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![材料出库单](https://nas.ilyl.life:8092/yonyou/voucher.gif)

## 资源符

`materialout`

## 新增

`create`

### 新增参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|bomfirst|long||false|bomfirst|
|id|long||false|自动编号|
|bmotran|long||false|自动编号|
|cvouchtype|string||false|单据类型|
|cwhcode|string||false|仓库编码|
|cdefine15|int||false|表头自定义项15|
|cdefine16|double||false|表头自定义项16|
|vt_id|long||false|模版号|
|imquantity|double||false|产量|
|dchkdate|date||false|检验日期|
|bhyvouch|string||false|是否委外业务单据|
|cchkperson|string||false|检验员|
|cpspcode|string||false|产品编码|
|ddate|date||true|出库日期|
|cmpocode|string||false|订单号|
|isourcerowno|double||false|来源单行号|
|iavaquantity|string||false|可用量|
|iavanum|string||false|可用件数|
|ipresentnum|string||false|现存件数|
|ufts|string||false|时间戳|
|chinvsn|string||false|序列号|
|iproorderid|string||false|生产订单ID|
|cvencode|string||false|委外商编码|
|cvenabbname|string||false|委外商|
|cproinvaddcode|string||false|存货代码|
|cbuscode|string||false|业务号|
|ccode|string||true|出库单号|
|crdcode|string||false|出库类别编码|
|ireturncount|string||false|ireturncount|
|iverifystate|string||false|iverifystate|
|iswfcontrolled|string||false|iswfcontrolled|
|hcinvdefine1|string||false|存货自定义项1|
|hcinvdefine2|string||false|存货自定义项2|
|hcinvdefine3|string||false|存货自定义项3|
|hcinvdefine4|string||false|存货自定义项4|
|hcinvdefine5|string||false|存货自定义项5|
|hcinvdefine6|string||false|存货自定义项6|
|hcinvdefine7|string||false|存货自定义项7|
|hcinvdefine8|string||false|存货自定义项8|
|hcinvdefine9|string||false|存货自定义项9|
|hcinvdefine10|string||false|存货自定义项10|
|hcinvdefine11|long||false|存货自定义项11|
|cdepcode|string||false|部门编码|
|hcinvdefine12|long||false|存货自定义项12|
|hcinvdefine13|double||false|存货自定义项13|
|hcinvdefine14|double||false|存货自定义项14|
|hcinvdefine15|date||false|存货自定义项15|
|hcinvdefine16|date||false|存货自定义项16|
|cinvstd|string||false|规格型号|
|csysbarcode|string||false|单据条码|
|cpersoncode|string||false|业务员编码|
|cprobatch|string||false|生产批号|
|chandler|string||false|审核人|
|cmemo|string||false|备注|
|caccounter|string||false|记账人|
|cinvname|string||false|产品名称|
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
|cwhname|string||true|仓库|
|cdepname|string||false|部门|
|cpersonname|string||false|业务员|
|crdname|string||false|出库类别|
|csource|string||false|单据来源|
|ipresent|string||false|现存量|
|itopsum|string||false|最高库存量|
|ilowsum|string||false|最低库存量|
|isafesum|string||false|安全库存量|
|cbustype|string||false|业务类型|
|dveridate|date||false|审核日期|
|cdefine11|string||false|表头自定义项11|
|cdefine12|string||false|表头自定义项12|
|cdefine13|string||false|表头自定义项13|
|cdefine14|string||false|表头自定义项14|
|cmodifyperson|string||false|修改人|
|dmodifydate|date||false|修改日期|
|dnmaketime|date||false|制单时间|
|dnmodifytime|date||false|修改时间|
|dnverifytime|date||false|审核时间|
|cbaccounter|string|entry|false|记账人|
|bcosting|string|entry|false|是否核算|
|isotype|string|entry|false|需求跟踪方式|
|autoid|long|entry|false|子表ID号|
|id|long|entry|false|与主表关联项|
|cinvcode|string|entry|true|材料编码|
|cinvaddcode|string|entry|false|材料代码|
|cinvname|string|entry|false|材料名称|
|cinvstd|string|entry|false|规格型号|
|cinvm_unit|string|entry|false|主计量单位|
|cinva_unit|string|entry|false|库存单位|
|creplaceitem|string|entry|false|替换件|
|cposition|string|entry|false|货位编码|
|cbatchproperty5|double|entry|false|批次属性5|
|iinvsncount|long|entry|false|序列号个数|
|cfree5|string|entry|false|存货自由项5|
|cfree6|string|entry|false|存货自由项6|
|iavaquantity|double|entry|false|可用量|
|cbatchproperty6|string|entry|false|批次属性6|
|cbatchproperty7|string|entry|false|批次属性7|
|iavanum|double|entry|false|可用件数|
|cfree7|string|entry|false|存货自由项7|
|cfree8|string|entry|false|存货自由项8|
|ipresent|double|entry|false|现存量|
|ipresentnum|double|entry|false|现存件数|
|cbatchproperty8|string|entry|false|批次属性8|
|cbatchproperty9|string|entry|false|批次属性9|
|cfree9|string|entry|false|存货自由项9|
|cfree10|string|entry|false|存货自由项10|
|cbatchproperty10|date|entry|false|批次属性10|
|isredoutquantity|double|entry|false|对应蓝字出库单退回数量|
|isredoutnum|double|entry|false|对应蓝字出库单退回件数|
|ipesotype|string|entry|false|需求跟踪方式|
|ipesodid|string|entry|false|销售订单子表|
|cpesocode|string|entry|false|需求跟踪号|
|ipesoseq|string|entry|false|需求跟踪行号|
|bsupersede|string|entry|false|替代料|
|isupersedeqty|double|entry|false|替代数量|
|isupersedempoids|double|entry|false|被替代料生产订单子表id|
|imoallocatesubid|double|entry|false|替代料子表subid|
|cinvoucherlineid|string|entry|false|源单行ID|
|cinvouchercode|string|entry|false|源单号|
|cinvouchertype|string|entry|false|源单类型|
|cdefine28|string|entry|false|表体自定义项7|
|csourcemocode|string|entry|false|源订单号|
|isourcemodetailsid|long|entry|false|源订单子表标识|
|coutvouchtype|string|entry|false|对应蓝字出库单类型|
|invstd|string|entry|false|产品规格|
|cbmemo|string|entry|false|备注|
|applycode|string|entry|false|子件补料申请单号|
|cplanlotcode|string|entry|false|计划批号|
|bcanreplace|string|entry|false|可替代|
|taskguid|string|entry|false|taskguid|
|cinvouchtype|string|entry|false|对应入库单类型|
|coutvouchid|string|entry|false|对应蓝字出库单id|
|cdefine29|string|entry|false|表体自定义项8|
|cdefine30|string|entry|false|表体自定义项9|
|cdefine31|string|entry|false|表体自定义项10|
|cinvdefine1|string|entry|false|存货自定义项1|
|iposflag|string|entry|false|已分配货位|
|boutmaterials|string|entry|false|表外领料|
|cdefine32|string|entry|false|表体自定义项11|
|cdefine33|string|entry|false|表体自定义项12|
|cdefine36|date|entry|false|表体自定义项15|
|cdefine37|date|entry|false|表体自定义项16|
|cinvdefine4|string|entry|false|存货自定义项4|
|cinvdefine5|string|entry|false|存货自定义项5|
|cinvdefine6|string|entry|false|存货自定义项6|
|cinvdefine7|string|entry|false|存货自定义项7|
|cinvdefine8|string|entry|false|存货自定义项8|
|cinvdefine9|string|entry|false|存货自定义项9|
|cinvdefine2|string|entry|false|存货自定义项2|
|productinids|long|entry|false|productinids|
|cinvdefine10|string|entry|false|存货自定义项10|
|cinvdefine11|int|entry|false|存货自定义项11|
|cinvdefine12|int|entry|false|存货自定义项12|
|cinvdefine13|double|entry|false|存货自定义项13|
|cinvdefine14|double|entry|false|存货自定义项14|
|cinvdefine15|date|entry|false|存货自定义项15|
|cinvdefine16|date|entry|false|存货自定义项16|
|cinvouchcode|string|entry|false|对应入库单号|
|cbarcode|string|entry|false|条形码|
|inquantity|double|entry|false|应发数量|
|cinvdefine3|string|entry|false|存货自定义项3|
|innum|double|entry|false|应发件数|
|dmadedate|date|entry|false|生产日期|
|impoids|long|entry|false|生产订单子表ID|
|imassdate|long|entry|false|保质期|
|cassunit|string|entry|false|库存单位码|
|cbatchproperty1|double|entry|false|批次属性1|
|cfree1|string|entry|false|存货自由项1|
|cbvencode|string|entry|false|供应商编码|
|cvenname|string|entry|false|供应商|
|cposname|string|entry|false|货位|
|corufts|string|entry|false|对应单据时间戳|
|cbinvsn|string|entry|false|序列号|
|strowguid|string|entry|false|rowguid|
|itrids|double|entry|false|特殊单据子表标识|
|cbatchproperty2|double|entry|false|批次属性2|
|cfree2|string|entry|false|存货自由项2|
|cbatch|string|entry|false|批号|
|iinvexchrate|double|entry|false|换算率|
|cdefine34|int|entry|false|表体自定义项13|
|cdefine35|int|entry|false|表体自定义项14|
|cmassunit|string|entry|false|保质期单位|
|isodid|string|entry|false|销售订单子表ID|
|csocode|string|entry|false|需求跟踪号|
|isoseq|string|entry|false|需求跟踪行号|
|cmocode|string|entry|false|生产订单号|
|imoseq|long|entry|false|生产订单行号|
|cmolotcode|string|entry|false|生产批号|
|iopseq|string|entry|false|工序行号|
|inum|double|entry|false|件数|
|crejectcode|string|entry|false|不良品处理单号|
|cdemandmemo|string|entry|false|需求分类代号说明|
|iordertype|string|entry|false|来源订单类型|
|iorderdid|long|entry|false|来源订单子表ID|
|iordercode|string|entry|false|来源订单号|
|iorderseq|string|entry|false|来源订单行号|
|copdesc|string|entry|false|工序说明|
|cmworkcentercode|string|entry|false|工作中心编码|
|cmworkcenter|string|entry|false|工作中心|
|invcode|string|entry|false|产品编码|
|invname|string|entry|false|产品|
|dmsdate|date|entry|false|核销日期|
|isquantity|double|entry|false|累计核销数量|
|iexpiratdatecalcu|string|entry|false|有效期推算方式|
|cexpirationdate|string|entry|false|有效期至|
|dexpirationdate|date|entry|false|有效期计算项|
|cciqbookcode|string|entry|false|手册号|
|ismaterialfee|double|entry|false|累计核销金额|
|iomomid|long|entry|false|委外用料表ID|
|ibondedsumqty|string|entry|false|累计保税处理抽取数量|
|cservicecode|string|entry|false|服务单号|
|applydid|long|entry|false|applydid|
|comcode|string|entry|false|委外订单号|
|iquantity|double|entry|false|数量|
|iomodid|long|entry|false|委外订单子表ID|
|cwhpersoncode|string|entry|false|库管员编码|
|cwhpersonname|string|entry|false|库管员名称|
|cvmivencode|string|entry|false|代管商代码|
|cvmivenname|string|entry|false|代管商|
|bvmiused|string|entry|false|代管消耗标识|
|iunitcost|double|entry|false|单价|
|ivmisettlequantity|double|entry|false|代管挂账确认单数量|
|ivmisettlenum|double|entry|false|代管挂账确认单件数|
|imaids|string|entry|false|领料申请单子表id|
|cbsysbarcode|string|entry|false|单据行条码|
|iprice|double|entry|false|金额|
|ipunitcost|double|entry|false|计划单价|
|ipprice|double|entry|false|计划金额|
|dvdate|date|entry|false|失效日期|
|cobjcode|string|entry|false|成本对象编码|
|cname|string|entry|false|项目|
|irowno|string|entry|false|行号|
|isoutquantity|double|entry|false|累计出库数量|
|isoutnum|double|entry|false|累计出库件数|
|ifquantity|double|entry|false|实际数量|
|ifnum|double|entry|false|实际件数|
|cvouchcode|string|entry|false|对应入库单id|
|cdefine22|string|entry|false|表体自定义项1|
|cdefine23|string|entry|false|表体自定义项2|
|cdefine24|string|entry|false|表体自定义项3|
|cdefine25|string|entry|false|表体自定义项4|
|cdefine26|double|entry|false|表体自定义项5|
|cdefine27|double|entry|false|表体自定义项6|
|citemcode|string|entry|false|项目编码|
|citem_class|string|entry|false|项目大类编码|
|citemcname|string|entry|false|项目大类名称|
|cbatchproperty3|double|entry|false|批次属性3|
|cfree3|string|entry|false|存货自由项3|
|cfree4|string|entry|false|存货自由项4|
|cbatchproperty4|double|entry|false|批次属性4|

### 新增示例

::: tabs
@tab 请求

```json
{
    "materialout": {
        "brdflag": "0",
        "cvouchtype": "11",
        "cwhcode": "02",
        "crdcode": "21",
        "cdepcode": "0302",
        "cwhname": "PC机材料仓库",
        "cdepname": "销售部",
        "crdname": "领料出库",
        "csource": "库存",
        "cbustype": "领料",
        "entry": [{
                "cinvcode": "010204",
                "cinvname": "大容量存储器",
                "cassunit": "0501",
                "iquantity": "1.0000000000",
                "irowno": "2"
            },
            {
                "cinvcode": "01021001",
                "cinvname": "蓝牙耳机",
                "iquantity": "1.0000000000",
                "irowno": "1"
            }
        ]
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
const string RESOURCE="materialout/delete";
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
private const RESOURCE as String="materialout/delete"
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
const string RESOURCE="materialout/verify";
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
private const RESOURCE as String="materialout/verify"
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
const string RESOURCE="materialout/unverify";
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
private const RESOURCE as String="materialout/unverify"
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
