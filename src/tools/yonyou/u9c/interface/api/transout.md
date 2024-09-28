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

## 调出数据

```cs
ISV.TransferOutISV.IC_TransferOutDTOData Create(string docType, string transOutOrg,string transOutWh，string transInOrg, string transInWh, string item, decimal qty)
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
    return input;
}
```

## 参照调拨申请单

没有标准`ISV`接口，使用`BP`实现

### 引用

主要引用三个文件`UFIDA.U9.InvDoc.InvDocBP.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

### 代码

```cs
/// <summary>
/// 调拨申请单转调出单
/// 这是一行的数据，多行就循环多次
/// </summary>
/// <param name="srcDoc">调拨申请单号</param>
/// <param name="srcDocId">调拨申请单行ID</param>
/// <param name="transOutWh">转出存储地点</param>
/// <param name="transInWh">转入存储地点</param>
/// <param name="qty">数量</param>
/// <returns>返回调出单数据</returns>
List<InvDoc.TransferApply.TransApplyToTransOutResultDTO> RefTransApplyToTransOut(string srcDoc,long srcDocId,string transOutWh,string transInWh,decimal qty)
{
    input = new List<InvDoc.TransferApply.TransApplyToTransOutDTO>();
    var srcDoc = Convert.ToString(h["SrcDoc"]);
    var findTransferApply= UFIDA.U9.InvDoc.TransferApply.TransferApply.Finder.Find("DocNo=@DocNo and Status=2",new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(srcDoc) });
    if (findTransferApply == null) throw new Exception($"找不到调拨申请单号[{srcDoc}]或该单号不是审核状态");

    var findTransOutWh = UFIDA.U9.CBO.SCM.Warehouse.Warehouse.FindByCode(findTransferApply.TransferOutOrg,transOutWh);
    if (findTransOutWh == null) throw new Exception($"组织[{findTransferApply.TransferOutOrg.Name}]转出存储地点[{transOutWh}]不存在");

    var findTransInWh = UFIDA.U9.CBO.SCM.Warehouse.Warehouse.FindByCode(findTransferApply.TransferInOrg, transInWh);
    if (findTransInWh == null) throw new Exception($"组织[{findTransferApply.TransferInOrg.Name}]转入存储地点[{transInWh}]不存在");

    foreach (var row in findTransferApply.TransApplyLines)
    {
        if (row.ID == srcDocID)
        {
            var newItem = new InvDoc.TransferApply.TransApplyToTransOutDTO();
            newItem.TransApplyLineKey = row.Key.ID;
            newItem.SubTransApplyToTransOutDTOs = new List<InvDoc.TransferApply.SubTransApplyToTransOutDTO>();
            var line = new InvDoc.TransferApply.SubTransApplyToTransOutDTO();
            line.ItemInfo = new ItemInfo();
            line.ItemInfo.ItemCode = row.ItemInfo.ItemCode;
            line.TransInWh = findTransInWh.ID;
            line.TransOutWh = findTransOutWh.ID;
            line.TransOutQty = qty;
            line.OwnerOrg = new Base.Organization.Organization.EntityKey(findTransferApply.TransferOutOrg.ID);
            line.TransOutBusDate = DateTime.Now;
            line.TransApplyToTransOutDTO = new InvDoc.TransferApply.TransApplyToTransOutDTO();
            line.TransApplyToTransOutDTO.TransApplyLineKey = row.Key.ID;
            newItem.SubTransApplyToTransOutDTOs.Add(line);
            input.Add(newItem);
        }
    }

    //制单
    UFIDA.U9.InvDoc.TransferApply.TransApplyToTransOutBP proxy = new InvDoc.TransferApply.TransApplyToTransOutBP();
    proxy.TransApplyToTransOutDTOs = input;
    return proxy.Do();
}
```

## 新增

```cs
List<CommonArchiveDataDTOData> Create(ISV.TransferOutISV.IC_TransferOutDTOData input)
{
    UFIDA.U9.ISV.TransferOutISV.Proxy.CreateTransferOutSRVProxy proxy = new ISV.TransferOutISV.Proxy.CreateTransferOutSRVProxy();
    proxy.TransferOutDOCList = new List<ISV.TransferOutISV.IC_TransferOutDTOData>();
    proxy.TransferOutDOCList.Add(input);
    return proxy.Do();
}
```

## 提交

```cs
void Submit(CommonArchiveDataDTOData input)
{
    UFIDA.U9.ISV.TransferOutISV.Proxy.TransferOutBatchCommitSRVProxy proxy = new ISV.TransferOutISV.Proxy.TransferOutBatchCommitSRVProxy();
    proxy.DocList = new List<CommonArchiveDataDTOData>();
    proxy.DocList.Add(input);
    proxy.Do();
}       
```

## 审核

```cs
void Approve(CommonArchiveDataDTOData input)
{
    UFIDA.U9.ISV.TransferOutISV.Proxy.TransferOutBatchApproveSRVProxy proxy = new ISV.TransferOutISV.Proxy.TransferOutBatchApproveSRVProxy();
    proxy.DocList = new List<CommonArchiveDataDTOData>();
    proxy.DocList.Add(input);
    proxy.Do();
}
```