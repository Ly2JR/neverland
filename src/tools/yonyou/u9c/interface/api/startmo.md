---
title: 开工
date: 2024-08-26
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.ISV.MO.MOSV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 开工

```cs
List<ISV.MO.MOOperateParamDTOData> StartMo(string org,string moDocNo,decimal qty,string startManager)
{
    UFIDA.U9.ISV.MO.Proxy.StartMoProxy proxy = new ISV.MO.Proxy.StartMoProxy();
    proxy.MOOperateParamDTOs = new List<ISV.MO.MOOperateParamDTOData>();
    var input=new ISV.MO.MOOperateParamDTOData();
    input.Org = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.Org.Code = org;
    input.OperateOn = DateTime.Now;
    input.MODocNo = moDocNo;
    input.OperateQty = qty;
    input.OperateBy = startManager;
    input.OperateType = true;
    proxy.MOOperateParamDTOs.Add(input);
    return proxy.Do();
}
```