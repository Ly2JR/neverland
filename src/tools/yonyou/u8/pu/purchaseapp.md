---
title: 请购单
date: 2024-09-05
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![请购单](https://nas.ilyl.life:8092/yonyou/u8/pu/purchaseapp.gif)

## 资源符

`purchaseapp`

## 新增

`create`

### 新增参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|ccode|string||true|单据号号|
|ddate|datetime|true|日期|
|cptcode|string||true|采购类型编码|
|cbustype|string||true|业务类型|
|cdepcode|string||true|请购部门编码|
|cpersoncode|string||false|请购人员编码|
|cmarker|string||true|制单人|
|cmaketime|datetime|false|制单时间|
|cmemo|string||否|备注|
|cdefine1|string||false|表头自定义项1|
|cdefine2|string||false|表头自定义项2|
|cdefine3|string||false|表头自定义项3|
|cdefine4|datetime||false|表头自定义项4|
|cdefine5|int||false|表头自定义项5|
|cdefine6|datetime||false|表头自定义项6|
|cdefine7|float||false|表头自定义项7|
|cdefine8|string||false|表头自定义项8|
|cdefine9|string||false|表头自定义项9|
|cdefine10|string||false|表头自定义项10|
|cdefine11|string||false|表头自定义项11|
|cdefine12|string||false|表头自定义项12|
|cdefine13|string||false|表头自定义项13|
|cdefine14|string||false|表头自定义项14|
|cdefine15|int||false|表头自定义项15|
|cdefine16|float||false|表头自定义项16|
|cvencode|string||true|供应商编码|
|cinvcode|string|entry|true|存货编码|
|fquantity|float|entry|true|数量|
|cexch_name|string|entry|true|币种|
|fnum|int|entry|true|件数|
|ipertaxrate|float|entry|true|税率|
|iexchrate|float|entry|true|汇率|
|darrivedate|datetime|entry|true|建议订货日期|
|drequirdate|datetime|entry|true|需求日期|
|ivouchrowno|int|entry|true|行号|
|ioricost|float|entry|false|原币无税单价|
|ioritaxcost|float|entry|false|原币含税单价|
|iorimoney|float|entry|false|原币无税金额|
|ioritaxprice|float|entry|false|原币税额|
|iorisum|float|entry|false|原币价税合计|
|funitprice|float|entry|false|本币无税单价|
|ftaxprice|float|entry|false|本币含税单价|
|imoney|float|entry|false|本币无税金额|
|itaxprice|float|entry|false|本币税额|
|fmoney|float|entry|false|本币价税合计|
|cdefine22|string|entry|false|表体自定义项1|
|cdefine23|string|entry|false|表体自定义项2|
|cdefine24|string|entry|false|表体自定义项3|
|cdefine25|string|entry|false|表体自定义项4|
|cdefine26|float|entry|false|表体自定义项5|
|cdefine27|float|entry|false|表体自定义项6|
|cdefine29|string|entry|false|表体自定义项8|
|cdefine30|string|entry|false|表体自定义项9|
|cdefine31|string|entry|false|表体自定义项10|
|cdefine32|string|entry|false|表体自定义项11|
|cdefine33|string|entry|false|表体自定义项12|
|cdefine34|int|entry|false|表体自定义项13|
|cdefine35|int|entry|false|表体自定义项14|
|cdefine36|DateTime|entry|false|表体自定义项15|
|cdefine37|DateTime|entry|false|表体自定义项16|



### 新增示例

::: tabs
@tab 请求

```json
{
    "purchaseorder":
    {
        "cpoid": "202040042",
        "cvencode": "01002",
        "cptcode": "03",
        "cbustype": "普通采购",
        "cexch_name": "人民币",
        "nflat": 1.0,
        "idiscounttaxtype": 0,
        "itaxrate": 13.0,
        "cdepcode": "0401",
        "dpodate": "2015-01-01 00:00:00",
        "cmemo": "测试",
        "cmaker": "demo",
        "entry":
        [
            {
                "cinvcode": "0107002",
                "iquantity": 10.0,
                "inum": 0,
                "iunitprice": 61.9469,
                "itaxprice": 70.0,
                "inatunitprice": 61.9469,
                "inatmoney": 619.47,
                "inattax": 80.5310,
                "inatsum": 700.00,
                "imoney": 619.47,
                "itax": 80.5310,
                "isum": 700.00,
                "ipertaxrate": 13.0,
                "darrivedate": "2015-01-02 00:00:00",
                "ivouchrowno": 1
            },
            {
                "cinvcode": "0107003",
                "iquantity": 11.0,
                "inum": 0,
                "iunitprice": 10.6195,
                "itaxprice": 12.0,
                "inatunitprice": 10.6195,
                "inatmoney": 116.81,
                "inattax": 15.1858,
                "inatsum": 132.00,
                "imoney": 116.81,
                "itax": 15.1858,
                "isum": 132.00,
                "ipertaxrate": 13.0,
                "darrivedate": "2015-01-02 00:00:00",
                "ivouchrowno": 2
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

## 修改

`edit`

::: tip
修改参数同新增参数,可以比新增参数少
:::

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|editprop|string|entry|是|M修改,D删除,A新增|

### 修改示例

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
const string RESOURCE="purchaseapp/edit";
//修改单据ID
var id=1000000001;
//修改的json数据
var editJson="XXX";
//唯一号
var tradeid=Guid.NewGuid().ToString("N");
//声明客户端
var client=new NPClient();
//本地调用
var result=client.InvokeLocal(CORPCODE,CORPLICENSE,RESOURCE,tradeid,editJson,id,"",ADDRESS,ACCOUNT);
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
private const RESOURCE as String="purchaseapp/delete"
'单据ID
dim id as Long
id=1000000001
'修改的json数据
dim editJson as string 
editJson="XXX";
'唯一号
dim tradeid as String
tradeid=Format(now,"yyyyMMddHHmmss") '演示用
'客户端声明
dim client as Object
set client=CreateObject("NPK.NPClient");
'本地调用
dim sRet as String
sRet=client.InvokeLocal(CORPLICENSE,CORPLICENSE,RESOURCE,tradeid,editJson,id,"",ADDRESS,ACCOUNT);
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
const string RESOURCE="purchaseapp/delete";
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
private const RESOURCE as String="purchaseapp/delete"
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
const string RESOURCE="purchaseapp/verify";
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
private const RESOURCE as String="purchaseapp/verify"
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
const string RESOURCE="purchaseapp/unverify";
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
private const RESOURCE as String="purchaseapp/unverify"
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
