---
title: U8 通用接口
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
---

## U8下载

[U818.0](https://pan.yonyou.com/s/8sqHQcYvQB0) 提取密码：`f8x0`

[U816.5](https://pan.yonyou.com/web/share.html?hash=gYGfikoyRCQ) 提取密码：`tpcv`

[U816.1](https://pan.yonyou.com/web/share.html?hash=j7UAr9kQQD4)

[U816.0](https://pan.yonyou.com/web/share.html?hash=9w7J6vYT5A) 提取密码：`kn6l`

[U815.1](https://pan.yonyou.com/web/share.html?hash=Keu5uoGRFg)

[U815.0](https://pan.yonyou.com/web/share.html?hash=Ovm1JV8gTrk)

[U813.0](https://pan.yonyou.com/web/share.html?hash=zIgn57b7QrQ)

[U812.51](https://pan.yonyou.com/web/share.html?hash=k33cyw9LTZo)

[U812.5](https://pan.yonyou.com/web/share.html?hash=XqSYBCpGR1o)

[行业插件](http://pan.yonyou.com/s/ucX519hcTeo) 提取密码：`qo10`

## 通用接口

  通用支持yonyou U8 10.1及以上版本

## 定制开发

  定制开发支持yonyou U8 10.1及以上版本，涉及`门户按钮`、`档案`、`单据`、`预警`、`定时`、`打包`等常用开发功能。

## JSON数据基本结构

::: tip
其他特殊结构请参考具体示例
:::

::: tabs
@tab 档案

```json
{
  "资源符": {
    "字段1": "字段1值",
    "字段2": "字段2值",
    "字段3": "字段3值",
    "...": "..."
  }
}
```

@tab 单据

```json
{
  "资源符": {
    "表头字段1": "表头字段1值",
    "表头字段2": "表头字段2值",
    "表头字段3": "表头字段3值",
    "...": "...",
    "entry": [{
      "表体字段1": "表体字段1值",
      "表体字段2": "表体字段2值",
      "表体字段3": "表体字段3值",
      "...": "..."
    }, {
      "表体字段1": "表体字段1值",
      "表体字段2": "表体字段2值",
      "表体字段3": "表体字段3值",
      "...": "..."
    }, {
      "...": "..."
    }]
  }
}
```

:::

## 资源符

`create`：新增

`edit`：修改

`delete`：删除

`verify`：审核

`unverify`：弃审

其他个别资源符查看对应文档

## 返回参数

|参数|类型|描述|
|:-|:-|:-|
|errcode|string|错误码|
|errmsg|string|错误描述|
|id|string|单据ID|
|tradeid|string|唯一号|

## 错误码

|返回码|返回消息|
|:-|:-|
|0|成功|
|10002|不支持的操作|
|10010|获取默认模板失败|
|18000|内部错误|
|18001|服务错误|
|18002|客户端错误|
|18003|服务未启动|
|19000|无效的身份验证|
|19999|意外的错误|
|20000|单据加载失败|
|20001|单据新增失败|
|20002|单据修改失败|
|20003|单据删除失败|
|20004|单据审核失败|
|20005|单据弃审失败|

## 如何使用

::: tabs

@tab csharp

```cs
//引用NPK.dll文件
using NPK;

//服务码
const string CORPCODE
="XXX";
//授权码
const string CROPLICENSE="XXX";
//服务器IP地址
const string ADDRESS="127.0.0.1";
//账套号
const string ACCOUNT="999";
// 资源符/操作符
const string RESOURCE="XXX/XXX";
//审核，弃审，删除需要的单据ID
var id=1000000001;
//新增，修改需要提交的数据
var jsonData="XXX";
//唯一号
var tradeid=Guid.NewGuid().ToString("N");
//声明客户端
var client=new NPClient();
//本地调用
var result=client.InvokeLocal(CORPCODE
,CROPLICENSE,RESOURCE,tradeid,jsonData,id,"",ADDRESS,ACCOUNT);
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
'资源符/操作符
private const RESOURCE as String="XXX/XXX"
'审核，弃审，删除需要的单据ID
dim id as Long
id=1000000001
'新增，修改需要提交的数据
dim jsonData as String
jsonData="XXX"
'唯一号
dim tradeid as String
tradeid=Format(now,"yyyyMMddHHmmss") '演示用
'客户端声明
dim client as Object
set client=CreateObject("NPK.NPClient");
'本地调用
dim sRet as String
sRet=client.InvokeLocal(CORPCODE
,CROPLICENSE,RESOURCE,tradeid,jsonData,id,"",ADDRESS,ACCOUNT);
Msgbox sRet
```

:::
