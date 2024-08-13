---
title: 形态转换
date: 2024-08-13
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.ISV.TransferFormISV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 新增

```cs
List<CBO.Pub.Controller.CommonArchiveDataDTOData> Create(string docType,string ownerOrg,string fromWh,string fromItem,decimal fromQty,string toWh,string toItem,decimal toQty)
{
    var input =new ISV.TransferFormISV.IC_TransferFormDTOData();
    var findOrg = Base.Organization.Organization.FindByCode(ownerOrg);
    if (findOrg == null) throw new Exception($"货主组织[{ownerOrg}]不存在");

    var sob = UFIDA.U9.Base.SOB.SetofBooks.Finder.Find("Org=@Org and Effective.IsEffective=1 and Effective.EffectiveDate<=getdate() and Effective.DisableDate>=getdate()", new OqlParam[] { new OqlParam(findOrg.ID) });
    if (sob == null) throw new Exception($"没有获取到组织账簿[{ownerOrg}]");

    var sap = UFIDA.U9.Base.SOB.SOBAccountingPeriod.Finder.Find("SetofBooks.ID=@SetofBooks and DisplayName=@DisplayName", new OqlParam[] { new OqlParam(sob.ID), new OqlParam(DateTime.Now.ToString("yyyy-MM")) });
    if (sap == null) throw new Exception($"没有获取到账簿会计期间[{ownerOrg}]");

    input.TransferFormTransType = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.TransferFormTransType.Code = docType;
    input.BussinessDate = DateTime.Now;
    input.Org = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.Org.Code = ownerOrg;

    //var sob= UFIDA.U9.Base.SOB.SOBAccountingPeriod.Finder.Find();
    input.SOBAccountPeriod = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.SOBAccountPeriod.Code = sap.Code;
    input.TransferFormLine = new List<ISV.TransferFormISV.IC_TransferFormLDTOData>();

    var newLine = new ISV.TransferFormISV.IC_TransferFormLDTOData();
    newLine.TransferFormSubLine = new List<ISV.TransferFormISV.IC_TransferFormSLDTOData>();
    

    var findFromItemMaster = ItemMaster.Finder.Find("Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(findOrg.ID), new OqlParam(fromItem) });
    if (findFromItemMaster == null) throw new Excepiton($"料号:{item}不存在");

    newLine.ItemInfo = new ItemInfoData();
    newLine.ItemInfo.ItemCode = findFromItemMaster.Code;
    newLine.OwnOrg = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.OwnOrg.Code = findOrg.Code;
    newLine.Wh = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.Wh.Code = fromwh;
    newLine.StoreType = 4;
    newLine.IsCostDependent = true;
    newLine.StoreUOMQty = fromQty;
    newLine.CostUOMQty = fromQty;
    newLine.TransferType = 0;

    var findToItemMaster = ItemMaster.Finder.Find("Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(findOrg.ID), new OqlParam(toItem) });
    if (findToItemMaster == null) throw new Excepiton($"料号:{item}不存在");
    var subLine = new ISV.TransferFormISV.IC_TransferFormSLDTOData();
    subLine.ItemInfo = new ItemInfoData();
    subLine.ItemInfo.ItemCode = findToItemMaster.Code;
    subLine.OwnOrg = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    subLine.OwnOrg.Code = findOrg.Code;
    subLine.Wh = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    subLine.Wh.Code = toWh;
    subLine.StoreType = 4;
    subLine.StoreUOMQty = toQty;
    subLine.CostUOMQty = toQty;
    subLine.TransferType = 1;
    newLine.TransferFormSubLine.Add(subLine);
    input.TransferFormLine.Add(newLine);

    UFIDA.U9.ISV.TransferFormISV.Proxy.CommonCreateTransferFormSRVProxy proxy = new ISV.TransferFormISV.Proxy.CommonCreateTransferFormSRVProxy();
    proxy.TransferFormDTOList = new List<ISV.TransferFormISV.IC_TransferFormDTOData>();
    proxy.TransferFormDTOList.Add(input);
    return proxy.Do();
}

```

## 提交

```cs
void Approve(CBO.Pub.Controller.CommonArchiveDataDTOData input){
    UFIDA.U9.ISV.TransferFormISV.Proxy.CommonCommitTransferFormSRVProxy proxy = new ISV.TransferFormISV.Proxy.CommonCommitTransferFormSRVProxy();
    proxy.QueryList = new List<CBO.Pub.Controller.CommonArchiveDataDTOData>();
    proxy.QueryList.Add(input);
    proxy.Do();
}
```

## 审核

```cs
void Approve(CBO.Pub.Controller.CommonArchiveDataDTOData input){
    UFIDA.U9.ISV.TransferFormISV.Proxy.CommonApprovedTransferFormSRVProxy proxy = new ISV.TransferFormISV.Proxy.CommonApprovedTransferFormSRVProxy();
    proxy.QueryList = new List<CBO.Pub.Controller.CommonArchiveDataDTOData>();
    proxy.QueryList.Add(input);
    proxy.Do();
}
```