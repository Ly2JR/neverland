---
title: 调出
date: 2024-08-21
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.ISV.TransferOutISV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 新增

```cs
List<CommonArchiveDataDTOData> Create(string docType, string transOutOrg,string transOutWh，string transInOrg, string transInWh, string item, decimal qty)
{
    var findOutOrg = Base.Organization.Organization.FindByCode(transOutOrg);
    if (findOutOrg == null) throw new Exception($"调出组织[{transOutOrg}]不存在");

    var findItemMaster = ItemMaster.Finder.Find("Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(findOutOrg.ID), new OqlParam(item) });
    if (findItemMaster == null) throw new Exception($"料品[{item}]不存在");
    //表头
    input = new ISV.TransferOutISV.IC_TransferOutDTOData();
    input.BusinessDate = DateTime.Now;
    input.TransOutDocType = new CommonArchiveDataDTOData();
    input.TransOutDocType.Code = docType;
    input.Org = new CommonArchiveDataDTOData();
    input.Org.Code = transOutOrg;
    //表体
    input.TransOutLines = new List<ISV.TransferOutISV.IC_TransOutLineDTOData>();   
    var newLine = new ISV.TransferOutISV.IC_TransOutLineDTOData();
    newLine.Memo = bMemo;
    newLine.CreatedBy = createdBy;
    newLine.ItemInfo = new CommonArchiveDataDTOData();
    newLine.ItemInfo.Code = findItemMaster.Code;
    newLine.StoreUOMQty = qty;
    newLine.CostUOMQty = qty;
    newLine.CostPrice = 1m;
    newLine.TransOutWh = new CommonArchiveDataDTOData();
    newLine.TransOutWh.Code = transOutWh;
    newLine.TransOutOwnerOrg = new CommonArchiveDataDTOData();
    newLine.TransOutOwnerOrg.Code = transOutOrg;
    newLine.TransOutSubLines = new List<ISV.TransferOutISV.IC_TransOutSubLineDTOData>();

    var subLine = new ISV.TransferOutISV.IC_TransOutSubLineDTOData();
    subLine.CostUOMQty = qty;
    subLine.StoreUOMQty = qty;
    subLine.TransInOrg = new CommonArchiveDataDTOData();
    subLine.TransInOrg.Code = transInOrg;
    subLine.TransInOwnerOrg = new CommonArchiveDataDTOData();
    subLine.TransInOwnerOrg.Code = transInOrg;
    subLine.TransInWh = new CommonArchiveDataDTOData();
    subLine.TransInWh.Code = transInWh;
    newLine.TransOutSubLines.Add(subLine);
    input.TransOutLines.Add(newLine);

    UFIDA.U9.ISV.TransferOutISV.Proxy.CreateTransferOutSRVProxy proxy = new ISV.TransferOutISV.Proxy.CreateTransferOutSRVProxy();
    proxy.TransferOutDOCList = new List<ISV.TransferOutISV.IC_TransferOutDTOData>();
    proxy.TransferOutDOCList.Add(input);
    return proxy.Do();
}
```

## 提交

```cs
void Submit(CommonArchiveDataDTOData key)
{
    UFIDA.U9.ISV.TransferOutISV.Proxy.TransferOutBatchCommitSRVProxy proxy = new ISV.TransferOutISV.Proxy.TransferOutBatchCommitSRVProxy();
    proxy.DocList = new List<CommonArchiveDataDTOData>();
    proxy.DocList.Add(key);
    proxy.Do();
}       
```

## 审核

```cs
void Approve(CommonArchiveDataDTOData key)
{
    UFIDA.U9.ISV.TransferOutISV.Proxy.TransferOutBatchApproveSRVProxy proxy = new ISV.TransferOutISV.Proxy.TransferOutBatchApproveSRVProxy();
    proxy.DocList = new List<CommonArchiveDataDTOData>();
    proxy.DocList.Add(key);
    proxy.Do();
}
```