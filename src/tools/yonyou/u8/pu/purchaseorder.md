---
title: 采购订单
date: 2024-09-02
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U8+
---

![采购订单](https://nas.ilyl.life:8092/yonyou/u8/pu/purchaseorder.gif)

## 资源符

`purchaseorder`

## 新增

`create`

### 新增参数说明

|参数|类型|参数路径|是否必填|描述|
|:-|:-|:-|:-|:-|
|cpoid|string||true|采购订单号|
|dpodate|datetime||true|日期|
|cptcode|string||true|采购类型编码|
|cbustype|string||true|业务类型|
|cexch_name|string||true|币种|
|nflat|float||true|汇率|
|itaxrate|float||true|税率|
|cdepcode|string||true|部门编码|
|cvencode|string||true|供应商编码|
|idiscounttaxtype|int||true|扣税类别|
|cmarker|string||true|制单人|
|cmemo|string||否|备注|
|cpoid|string||false|采购订单号|
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
|cinvcode|string|entry|true|存货编码|
|iquantity|float|entry|true|数量|
|inum|int|entry|true|件数|
|ipertaxrate|float|entry|true|税率|
|darrivedate|datetime|entry|true|计划到货日期|
|ivouchrowno|int|entry|true|行号|
|iunitprice|float|entry|false|原币无税单价|
|imoney|float|entry|false|原币无税金额|
|itax|float|entry|false|原币税额|
|isum|float|entry|false|原币价税合计|
|inatunitprice|float|entry|false|本币无税单价|
|inatmoney|float|entry|false|本币无税金额|
|inattax|float|entry|false|本币税额|
|inatsum|float|entry|false|本币价税合计
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
