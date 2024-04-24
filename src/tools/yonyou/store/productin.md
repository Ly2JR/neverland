---
title: 产成品入库单
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

`productin`
  
## 新增

`create`

### 新增参数

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|id|long||false|自动编号|
|cvouchtype|string||false|单据类型|
|cwhcode|string||false|仓库编码|
|cdefine15|int||false|表头自定义项15|
|cdefine16|double||false|表头自定义项16|
|vt_id|long||false|模版号|
|dchkdate|date||false|检验日期|
|cchkperson|string||false|检验员|
|cmpocode|string||false|生产订单号|
|iavaquantity|string||false|可用量|
|iavanum|string||false|可用件数|
|ipresentnum|string||false|现存件数|
|ddate|date||true|入库日期|
|ufts|string||false|时间戳|
|chinvsn|string||false|序列号|
|iverifystate|string||false|iverifystate|
|iswfcontrolled|string||false|iswfcontrolled|
|iproorderid|string||false|生产订单ID|
|ireturncount|string||false|ireturncount|
|csysbarcode|string||false|单据条码|
|ccode|string||true|入库单号|
|crdcode|string||false|入库类别编码|
|cdepcode|string||false|部门编码|
|cpersoncode|string||false|业务员编码|
|cprobatch|string||false|生产批号|
|chandler|string||false|审核人|
|cmemo|string||false|备注|
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
|cwhname|string||true|仓库|
|cdepname|string||false|部门|
|cpersonname|string||false|业务员|
|crdname|string||false|入库类别|
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
|isotype|string|entry|false|需求跟踪方式|
|cbaccounter|string|entry|false|记账人|
|bcosting|string|entry|false|是否核算|
|autoid|long|entry|false|子表ID号|
|id|long|entry|false|与主表关联项|
|cinvcode|string|entry|true|产品编码|
|cinvaddcode|string|entry|false|产品代码|
|cinvname|string|entry|false|产品名称|
|cinvstd|string|entry|false|规格型号|
|cinvm_unit|string|entry|false|主计量单位|
|cfree4|string|entry|false|存货自由项4|
|cbatchproperty4|double|entry|false|批次属性4|
|cbatchproperty5|double|entry|false|批次属性5|
|cfree5|string|entry|false|存货自由项5|
|cbatchproperty6|string|entry|false|批次属性6|
|cfree6|string|entry|false|存货自由项6|
|cfree7|string|entry|false|存货自由项7|
|cbatchproperty7|string|entry|false|批次属性7|
|cbatchproperty8|string|entry|false|批次属性8|
|cfree8|string|entry|false|存货自由项8|
|cfree9|string|entry|false|存货自由项9|
|cbatchproperty9|string|entry|false|批次属性9|
|cbatchproperty10|date|entry|false|批次属性10|
|cbmemo|string|entry|false|备注|
|cinvouchtype|string|entry|false|对应入库单类型|
|outcopiedquantity|string|entry|false|已复制数量|
|cfree10|string|entry|false|存货自由项10|
|cplanlotcode|string|entry|false|计划批号|
|taskguid|string|entry|false|taskguid|
|iinvsncount|long|entry|false|已指定序列号量|
|cdefine28|string|entry|false|表体自定义项7|
|cdefine29|string|entry|false|表体自定义项8|
|cdefine30|string|entry|false|表体自定义项9|
|cinva_unit|string|entry|false|库存单位|
|cdefine31|string|entry|false|表体自定义项10|
|iposflag|string|entry|false|已分配货位|
|cdefine32|string|entry|false|表体自定义项11|
|cdefine33|string|entry|false|表体自定义项12|
|cdefine36|date|entry|false|表体自定义项15|
|cdefine37|date|entry|false|表体自定义项16|
|cinvdefine4|string|entry|false|存货自定义项4|
|cinvdefine5|string|entry|false|存货自定义项5|
|cinvdefine6|string|entry|false|存货自定义项6|
|cinvdefine7|string|entry|false|存货自定义项7|
|cinvdefine8|string|entry|false|存货自定义项8|
|creplaceitem|string|entry|false|替换件|
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
|cposition|string|entry|false|货位编码|
|inquantity|double|entry|false|应收数量|
|innum|double|entry|false|应收件数|
|dmadedate|date|entry|false|生产日期|
|impoids|long|entry|false|生产订单子表ID|
|icheckids|long|entry|false|检验单子表ID|
|cbvencode|string|entry|false|供应商编码|
|cvenname|string|entry|false|供应商|
|imassdate|long|entry|false|保质期|
|cinvdefine1|string|entry|false|存货自定义项1|
|cassunit|string|entry|false|库存单位码|
|corufts|string|entry|false|对应单据时间戳|
|cbinvsn|string|entry|false|序列号|
|strowguid|string|entry|false|rowguid|
|cinvdefine2|string|entry|false|存货自定义项2|
|cposname|string|entry|false|货位|
|cinvdefine3|string|entry|false|存货自定义项3|
|cfree1|string|entry|false|存货自由项1|
|cbatchproperty1|double|entry|false|批次属性1|
|cdefine34|int|entry|false|表体自定义项13|
|cdefine35|int|entry|false|表体自定义项14|
|ccheckcode|string|entry|false|检验单号|
|icheckidbaks|string|entry|false|检验单子表id|
|crejectcode|string|entry|false|不良品处理单号|
|irejectids|string|entry|false|不良品处理单id|
|ccheckpersonname|string|entry|false|检验员|
|dcheckdate|date|entry|false|检验日期|
|ccheckpersoncode|string|entry|false|检验员编码|
|cmassunit|string|entry|false|保质期单位|
|cfree2|string|entry|false|存货自由项2|
|cbatchproperty2|double|entry|false|批次属性2|
|isodid|string|entry|false|销售订单子表ID|
|iordertype|string|entry|false|来源订单类型|
|iorderdid|long|entry|false|来源订单子表ID|
|iordercode|string|entry|false|来源订单号|
|iorderseq|string|entry|false|来源订单行号|
|cdemandmemo|string|entry|false|需求分类代号说明|
|csocode|string|entry|false|需求跟踪号|
|isoseq|string|entry|false|需求跟踪行号|
|cmocode|string|entry|false|生产订单号|
|imoseq|string|entry|false|生产订单行号|
|cmolotcode|string|entry|false|生产批号|
|iexpiratdatecalcu|string|entry|false|有效期推算方式|
|cexpirationdate|string|entry|false|有效期至|
|dexpirationdate|date|entry|false|有效期计算项|
|iopseq|string|entry|false|工序行号|
|copdesc|string|entry|false|工序说明|
|cciqbookcode|string|entry|false|手册号|
|ibondedsumqty|string|entry|false|累计保税处理抽取数量|
|cservicecode|string|entry|false|服务单号|
|cmworkcentercode|string|entry|false|工作中心编码|
|cmworkcenter|string|entry|false|工作中心|
|cbatch|string|entry|false|批号|
|brelated|long|entry|false|是否联副产品|
|cvmivencode|string|entry|false|代管商代码|
|cvmivenname|string|entry|false|代管商|
|bvmiused|string|entry|false|代管消耗标识|
|ivmisettlequantity|double|entry|false|代管挂账确认单数量|
|ivmisettlenum|double|entry|false|代管挂账确认单件数|
|cbsysbarcode|string|entry|false|单据行条码|
|iinvexchrate|double|entry|false|换算率|
|inum|double|entry|false|件数|
|iquantity|double|entry|false|数量|
|iunitcost|double|entry|false|单价|
|iprice|double|entry|false|金额|
|ipunitcost|double|entry|false|计划单价|
|ipprice|double|entry|false|计划金额|
|dvdate|date|entry|false|失效日期|
|isoutquantity|double|entry|false|累计出库数量|
|isoutnum|double|entry|false|累计出库件数|
|irowno|string|entry|false|行号|
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
|cname|string|entry|false|项目|
|citem_class|string|entry|false|项目大类编码|
|citemcname|string|entry|false|项目大类名称|
|cfree3|string|entry|false|存货自由项3|
|cbatchproperty3|double|entry|false|批次属性3|

### 新增示例

::: tabs

@tab 请求

```json
{
    "productin": {
        "brdflag": "1",
        "cvouchtype": "10",
        "cwhcode": "04",
        "crdcode": "12",
        "cdepcode": "0501",
        "cwhname": "成品库",
        "cdepname": "一车间",
        "crdname": "产成品入库",
        "csource": "库存",
        "cbustype": "成品入库",
        "entry": [{
            "cinvcode": "999-PCBA",
            "cinvname": "999-PCBA",
            "iquantity": "1.0000000000",
            "irowno": "1"
        }, {
            "cinvcode": "B010-0237001",
            "cinvname": "888-PCBA",
            "cinvstd": "已贴片/V1.0(单模)",
            "iquantity": "2.0000000000",
            "irowno": "2"
        }]
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
const string RESOURCE="productin/delete";
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
private const RESOURCE as String="productin/delete"
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
const string RESOURCE="productin/verify";
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
private const RESOURCE as String="productin/verify"
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
const string RESOURCE="productin/unverify";
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
private const RESOURCE as String="productin/unverify"
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
