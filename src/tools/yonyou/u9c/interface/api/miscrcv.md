---
title: 杂收
date: 2024-08-03
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.ISV.MiscRcvISV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 新增

```cs
List<CBO.Pub.Controller.CommonArchiveDataDTOData> Create(string docType,string ownerOrg,string benefitDept,string wh,string whMan,string item,decimal qty
){
    var findOrg = Base.Organization.Organization.FindByCode(ownerOrg);
    if (findOrg == null) throw new Exception($"货主组织[{ownerOrg}]不存在");

    var findWh = UFIDA.U9.CBO.SCM.Warehouse.Warehouse.FindByCode(findOrg, wh);
    if (findWh == null) throw new Exception($"货主组织[{ownerOrg}]仓库[{wh}]不存在");

    var findWhMan = UFIDA.U9.CBO.HR.Operator.Operators.FindByCode(whMan);
    if (findWhMan == null) throw new Exception($"库管员[{wh}]不存在");

    var input = new ISV.MiscRcvISV.IC_MiscRcvDTOData();
    input.BusinessDate = DateTime.Now;
    input.MiscRcvDocType = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.MiscRcvDocType.Code = docType;
    input.Org = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.Org.Code = ownerOrg;
    input.BenefitOrg = findOrg.ID;
    input.WhMan = findWhMan.ID;

    //表体
    input.MiscRcvTransLs = new List<ISV.MiscRcvISV.IC_MiscRcvTransLsDTOData>();
    var findItemMaster = ItemMaster.Finder.Find("Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(findOrg.ID), new OqlParam(item) });
    if (findItemMaster == null) throw new Exception($"料品[{item}]不存在");

    var newLine = new ISV.MiscRcvISV.IC_MiscRcvTransLsDTOData();
    newLine.BenefitDept = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.BenefitDept.Code = benefitDept;
    newLine.BenefitOrg = findOrg.ID;
    newLine.BenefitOwnerOrg = findOrg.ID;
    newLine.BenefitWh = findWh.ID;
    newLine.StoreUOMQty = qty;
    newLine.CostUOMQty = qty;
    newLine.OwnerOrg = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.OwnerOrg.Code = findOrg.Code;
    newLine.StoreType = 4;
    newLine.StoreUOM = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.StoreUOM.Code = findItemMaster.InventoryUOM.Code;
    newLine.Wh = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.Wh.Code = findWh.Code;
    newLine.WhMan = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.WhMan.Code = findWhMan.Code;
    newLine.ItemInfo = new ItemInfoData();
    newLine.ItemInfo.ItemCode = findItemMaster.Code;
    newLine.FinishedItemGrade = -1;
    newLine.CostPrice = 1;
    input.MiscRcvTransLs.Add(newLine);

    UFIDA.U9.ISV.MiscRcvISV.Proxy.CommonCreateMiscRcvProxy proxy = new ISV.MiscRcvISV.Proxy.CommonCreateMiscRcvProxy();
    proxy.MiscRcvDTOList = new List<ISV.MiscRcvISV.IC_MiscRcvDTOData>();
    proxy.MiscRcvDTOList.Add(input);
    return proxy.Do();
}
```

## 审核

```cs
void Approve(CBO.Pub.Controller.CommonArchiveDataDTOData key){
    UFIDA.U9.ISV.MiscRcvISV.Proxy.CommonApproveMiscRcvProxy proxy = new ISV.MiscRcvISV.Proxy.CommonApproveMiscRcvProxy();
    proxy.MiscRcvKeys = new List<CBO.Pub.Controller.CommonArchiveDataDTOData>();
    proxy.MiscRcvKeys.Add(key);
    proxy.Do();
}
```