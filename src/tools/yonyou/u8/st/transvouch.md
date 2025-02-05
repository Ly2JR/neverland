---
title: U8 调拨单
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

`transvouch`
  
## 新增调拨单

`create`

## 新增参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|csource|string||false|单据来源|
|dtvdate|date||true|日期|
|ctvcode|string||true|单据号|
|codepcode|string||false|转出部门编码|
|cidepcode|string||false|转入部门编码|
|cirdcode|string||false|入库类别编码|
|parentscrp|double||false|母件损耗率(%)|
|cbustype|string||false|业务类型|
|csourcecodels|string||false|零售来源单号|
|iavaquantity|double||false|可用量|
|iavanum|double||false|可用件数|
|cordcode|string||false|出库类别编码|
|ctvmemo|string||false|备注|
|ufts|string||false|时间戳|
|chinvsn|string||false|序列号|
|iproorderid|string||false|生产订单ID|
|cordertype|string||false|订单类型|
|ctranrequestcode|string||false|调拨申请单号|
|cinvname|string||false|产品名称|
|cversion|string||false|版本号/替代标识|
|bomid|string||false|bomid|
|cfree1|string||false|自由项1|
|cfree2|string||false|自由项2|
|cfree3|string||false|自由项3|
|cfree4|string||false|自由项4|
|cfree5|string||false|自由项5|
|cfree6|string||false|自由项6|
|cpersoncode|string||false|经手人编码|
|cfree7|string||false|自由项7|
|cfree8|string||false|自由项8|
|cfree9|string||false|自由项9|
|cfree10|string||false|自由项10|
|itransflag|string||false|调拨方向|
|ireturncount|string||false|ireturncount|
|iverifystate|string||false|iverifystate|
|iswfcontrolled|string||false|iswfcontrolled|
|csysbarcode|string||false|单据条码|
|cdefine1|string||false|表头自定义项1|
|cdefine2|string||false|表头自定义项2|
|cdefine3|string||false|表头自定义项3|
|cdefine4|date||false|表头自定义项4|
|cdefine5|int||false|表头自定义项5|
|cdefine6|date||false|表头自定义项6|
|cdefine7|double||false|表头自定义项7|
|cdefine9|string||false|表头自定义项9|
|cdefine8|string||false|表头自定义项8|
|cdefine10|string||false|表头自定义项10|
|caccounter|string||false|记账人|
|cmaker|string||false|制单人|
|cdepname|string||false|转入部门|
|cpersonname|string||false|经手人|
|cdepname_1|string||false|转出部门|
|crdname|string||false|入库类别|
|crdname_1|string||false|出库类别|
|cowhcode|string||false|转出仓库编码|
|ciwhcode|string||false|转入仓库编码|
|cwhname|string||true|转出仓库|
|cwhname_1|string||true|转入仓库|
|iamount|string||false|现存量|
|isafesum|string||false|安全库存量|
|itopsum|string||false|最高库存量|
|ilowsum|string||false|最低库存量|
|id|long||false|远程编号|
|vt_id|long||false|模版号|
|cverifyperson|string||false|审核人|
|dverifydate|date||false|审核日期|
|cpspcode|string||false|产品结构|
|cmpocode|string||false|订单号|
|iquantity|double||false|产量|
|btransflag|long||false|是否传递|
|cdefine11|string||false|表头自定义项11|
|cdefine12|string||false|表头自定义项12|
|cdefine13|string||false|表头自定义项13|
|cdefine14|string||false|表头自定义项14|
|cdefine15|int||false|表头自定义项15|
|cdefine16|double||false|表头自定义项16|
|cmodifyperson|string||false|修改人|
|dmodifydate|date||false|修改日期|
|dnmaketime|date||false|制单时间|
|dnmodifytime|date||false|修改时间|
|dnverifytime|date||false|审核时间|
|issotype|string|entry|false|需求跟踪方式|
|idsodid|string|entry|false|目标销售订单子表ID|
|cdsocode|string|entry|false|目标需求跟踪号|
|idsoseq|string|entry|false|目标需求跟踪行号|
|idsotype|string|entry|false|目标需求跟踪方式|
|bcosting|string|entry|false|是否核算|
|issodid|string|entry|false|销售订单子表ID|
|csocode|string|entry|false|需求跟踪号|
|isoseq|string|entry|false|需求跟踪行号|
|cinvcode|string|entry|true|存货编码|
|cinvaddcode|string|entry|false|存货代码|
|cinvname|string|entry|false|存货名称|
|cinvstd|string|entry|false|规格型号|
|cinvm_unit|string|entry|false|主计量单位|
|cfree1|string|entry|false|存货自由项1|
|cfree2|string|entry|false|存货自由项2|
|cbvencode|string|entry|false|供应商编码|
|iinvsncount|long|entry|false|序列号个数|
|cvenname|string|entry|false|供应商|
|imassdate|long|entry|false|保质期|
|taskguid|string|entry|false|taskguid|
|cinvouchtype|string|entry|false|对应入库单类型|
|cbsourcecodels|string|entry|false|零售来源单号|
|cmolotcode|string|entry|false|生产批号|
|ipresent|double|entry|false|现存量|
|ipresentnum|double|entry|false|现存件数|
|iavaquantity|double|entry|false|可用量|
|iavanum|double|entry|false|可用件数|
|cinvoucherlineid|string|entry|false|源单行ID|
|cinvouchercode|string|entry|false|源单号|
|cinvouchertype|string|entry|false|源单类型|
|cassunit|string|entry|false|库存单位码|
|cbmemo|string|entry|false|备注|
|dmadedate|date|entry|false|生产日期|
|ctvbatch|string|entry|false|批号|
|itvnum|double|entry|false|件数|
|autoid|string|entry|false|自动编号|
|iinvexchrate|double|entry|false|换算率|
|strowguid|string|entry|false|rowguid|
|cbinvsn|string|entry|false|序列号|
|corufts|string|entry|false|对应单据时间戳|
|cmassunit|string|entry|false|保质期单位|
|itrids|long|entry|false|调拨申请单子表ID|
|igrossweight|double|entry|false|毛重|
|inetweight|double|entry|false|净重|
|cinposname|string|entry|false|调入货位|
|cinposcode|string|entry|false|调入货位编码|
|coutposname|string|entry|false|调出货位|
|coutposcode|string|entry|false|调出货位编码|
|cvmivencode|string|entry|false|代管商代码|
|cvmivenname|string|entry|false|代管商|
|itvquantity|double|entry|false|数量|
|itvacost|double|entry|false|单价|
|csdemandmemo|string|entry|false|需求分类代号说明|
|cddemandmemo|string|entry|false|目标需求分类代号说明|
|imoids|long|entry|false|imoids|
|comcode|string|entry|false|委外订单号|
|cmocode|string|entry|false|生产订单号|
|invcode|string|entry|false|产品编码|
|invname|string|entry|false|产品|
|imoseq|string|entry|false|生产订单行号|
|iomids|long|entry|false|iomids|
|iexpiratdatecalcu|string|entry|false|有效期推算方式|
|cexpirationdate|string|entry|false|有效期至|
|dexpirationdate|date|entry|false|有效期计算项|
|cciqbookcode|string|entry|false|手册号|
|cbsysbarcode|string|entry|false|单据行条码|
|itvaprice|double|entry|false|金额|
|itvpcost|double|entry|false|计划单价/售价|
|itvpprice|double|entry|false|计划金额/售价金额|
|cinva_unit|string|entry|false|库存单位|
|ddisdate|date|entry|false|失效日期|
|cposition|string|entry|false|货位编码|
|creplaceitem|string|entry|false|替换件|
|cinvdefine1|string|entry|false|存货自定义项1|
|cinvdefine2|string|entry|false|存货自定义项2|
|irowno|string|entry|false|行号|
|cinvdefine3|string|entry|false|存货自定义项3|
|rdsid|long|entry|false|对应入库单id|
|ctvcode|string|entry|false|单据号|
|cdefine22|string|entry|false|表体自定义项1|
|cbatchproperty7|string|entry|false|批次属性7|
|cbatchproperty8|string|entry|false|批次属性8|
|cbatchproperty9|string|entry|false|批次属性9|
|cbatchproperty6|string|entry|false|批次属性6|
|cdefine23|string|entry|false|表体自定义项2|
|cdefine24|string|entry|false|表体自定义项3|
|cdefine25|string|entry|false|表体自定义项4|
|cdefine26|double|entry|false|表体自定义项5|
|cbatchproperty1|double|entry|false|批次属性1|
|cbatchproperty2|double|entry|false|批次属性2|
|cbatchproperty3|double|entry|false|批次属性3|
|cbatchproperty4|double|entry|false|批次属性4|
|cbatchproperty5|double|entry|false|批次属性5|
|cdefine27|double|entry|false|表体自定义项6|
|citemcode|string|entry|false|项目编码|
|cname|string|entry|false|项目|
|citem_class|string|entry|false|项目大类编码|
|fsalecost|double|entry|false|零售单价|
|fsaleprice|double|entry|false|零售金额|
|citemcname|string|entry|false|项目大类名称|
|cfree3|string|entry|false|存货自由项3|
|cfree4|string|entry|false|存货自由项4|
|cfree5|string|entry|false|存货自由项5|
|cfree6|string|entry|false|存货自由项6|
|cfree7|string|entry|false|存货自由项7|
|cfree8|string|entry|false|存货自由项8|
|cfree9|string|entry|false|存货自由项9|
|cfree10|string|entry|false|存货自由项10|
|cinvouchcode|string|entry|false|对应入库单号|
|cbarcode|string|entry|false|条形码|
|cdefine28|string|entry|false|表体自定义项7|
|cdefine29|string|entry|false|表体自定义项8|
|cdefine30|string|entry|false|表体自定义项9|
|cdefine31|string|entry|false|表体自定义项10|
|cdefine32|string|entry|false|表体自定义项11|
|cdefine33|string|entry|false|表体自定义项12|
|cdefine34|int|entry|false|表体自定义项13|
|cdefine35|int|entry|false|表体自定义项14|
|cdefine36|date|entry|false|表体自定义项15|
|cbatchproperty10|date|entry|false|批次属性10|
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
|impoids|long|entry|false|生产订单子表Id|

### 新增示例

::: tabs
@tab 请求

```json
{
    "transvouch": {
        "csource": "1",
        "cowhcode": "04",
        "ciwhcode": "03",
        "cwhname": "成品库",
        "cwhname_1": "半成品库",
        "itransflag": "正向",
        "entry": [{
            "cinvname": "TEH500S-INT01C普通型交换机",
            "cinvstd": "TEH500S-INT01C",
            "itvquantity": "1.0000000000",
            "cinvcode": "F010-3300209",
            "irowno": "1"
        }, {
            "cinvname": "出口器具",
            "itvquantity": "1.0000000000",
            "cinva_unit": "件",
            "cinvcode": "fx",
            "cassunit": "0203",
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
const string RESOURCE="transvouch/delete";
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
private const RESOURCE as String="transvouch/delete"
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
const string RESOURCE="transvouch/verify";
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
private const RESOURCE as String="transvouch/verify"
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
const string RESOURCE="transvouch/unverify";
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
private const RESOURCE as String="transvouch/unverify"
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
