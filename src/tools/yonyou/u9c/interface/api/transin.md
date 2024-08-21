---
title: 调入
date: 2024-08-13
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.ISV.TransferInISV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 新增

```cs
List<CommonArchiveDataDTOData> Create(string docType, string transInOrg, string transOutOrg, string item, decimal qty, string transInWh, string transOutWh)
{
    var findInOrg = Base.Organization.Organization.FindByCode(transInOrg);
    if (findInOrg == null) throw new Exception($"调入组织[{transInOrg}]不存在");

    var findItemMaster = ItemMaster.Finder.Find("Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(findInOrg.ID), new OqlParam(item) });
    if (findItemMaster == null) throw new Exception($"料号[{item}]不存在");
    
    //表头
    var input = new IC_TransferInDTOData();
    input.BusinessDate = DateTime.Now;
    input.TransInDocType = new CommonArchiveDataDTOData();
    input.TransInDocType.Code = docType;
    input.Org = new CommonArchiveDataDTOData();
    input.Org.Code = transInOrg;
    //表体
    input.TransInLines = new List<IC_TransInLineDTOData>();
    var newLine = new IC_TransInLineDTOData();
    newLine.ItemInfo = new ItemInfoData();
    newLine.ItemInfo.ItemCode = findItemMaster.Code;
    newLine.StoreUOMQty = qty;
    newLine.CostUOMQty = qty;
    newLine.TransInWh = new CommonArchiveDataDTOData();
    newLine.TransInWh.Code = transInWh;
    newLine.TransInOwnerOrg = new CommonArchiveDataDTOData();
    newLine.TransInOwnerOrg.Code = transInOrg;
    newLine.TransInSubLines = new List<IC_TransInSubLineDTOData>();

    var subLine = new IC_TransInSubLineDTOData();
    subLine.CostUOMQty = qty;
    subLine.StoreUOMQty = qty;
    subLine.TransOutOrg = new CommonArchiveDataDTOData();
    subLine.TransOutOrg.Code = transOutOrg;
    subLine.TransOutOwnerOrg = new CommonArchiveDataDTOData();
    subLine.TransOutOwnerOrg.Code = transOutOrg;
    subLine.TransOutWh = new CommonArchiveDataDTOData();
    subLine.TransOutWh.Code = transOutWh;
    newLine.TransInSubLines.Add(subLine);
    input.TransInLines.Add(newLine);

    UFIDA.U9.ISV.TransferInISV.Proxy.CommonCreateTransferInSVProxy proxy = new ISV.TransferInISV.Proxy.CommonCreateTransferInSVProxy();
    proxy.TransferInDTOList = new List<IC_TransferInDTOData>();
    proxy.TransferInDTOList.Add(input);
    return proxy.Do();
}
```

## 提交

```cs
void Submit(CommonArchiveDataDTOData key)
{
    UFIDA.U9.ISV.TransferInISV.Proxy.TransferInBatchCommitSRVProxy proxy = new ISV.TransferInISV.Proxy.TransferInBatchCommitSRVProxy();
    proxy.DocList = new List<CommonArchiveDataDTOData>();
    proxy.DocList.Add(key);
    proxy.Do();
}       
```

## 审核

```cs
void Approve(CommonArchiveDataDTOData key)
{
   UFIDA.U9.ISV.TransferInISV.Proxy.TransferInBatchApproveSRVProxy proxy = new ISV.TransferInISV.Proxy.TransferInBatchApproveSRVProxy();
    proxy.DocList = new List<CommonArchiveDataDTOData>();
    proxy.DocList.Add(key);
    proxy.Do();
}
```