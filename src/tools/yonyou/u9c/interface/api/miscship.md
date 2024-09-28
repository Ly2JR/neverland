---
title: 杂发
date: 2024-08-03
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.CBO.PubSV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 新增

```cs
ISV.MiscShipISV.IC_MiscShipmentDTOData Create(string docType,string ownerOrg,string benefitDept,string wh,string whMan,string item,decimal qty
){
    var findOrg = Base.Organization.Organization.FindByCode(ownerOrg);
    if (findOrg == null) throw new Exception($"货主组织[{ownerOrg}]不存在");

    var findWh = UFIDA.U9.CBO.SCM.Warehouse.Warehouse.FindByCode(findOrg, wh);
    if (findWh == null) throw new Exception($"货主组织[{ownerOrg}]仓库[{wh}]不存在");

    var findWhMan = UFIDA.U9.CBO.HR.Operator.Operators.FindByCode(whMan);
    if (findWhMan == null) throw new Exception($"库管员[{wh}]不存在");

    //表头
    var input =new ISV.MiscShipISV.IC_MiscShipmentDTOData();
    input.BusinessDate = DateTime.Now;
    input.MiscShipDocType = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.MiscShipDocType.Code = docType;
    input.Org = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.Org.Code = ownerOrg;
    input.BenefitOrg = findOrg.ID;
    //表体
    input.MiscShipLs = new List<ISV.MiscShipISV.IC_MiscShipmentLDTOData>();
    var findItemMaster = ItemMaster.Finder.Find("Org=@Org and Code1=@Code", new OqlParam[] { new OqlParam(findOrg.ID), new OqlParam(item) });
    if (findItemMaster == null) throw new Exception($"料品[{item}]不存在");

    var newLine = new ISV.MiscShipISV.IC_MiscShipmentLDTOData();
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
    input.MiscShipLs.Add(newLine);
    return input;
}
```

## 新增

```cs
List<CBO.Pub.Controller.CommonArchiveDataDTOData> Create(ISV.MiscShipISV.IC_MiscShipmentDTOData input)
{
    UFIDA.U9.ISV.MiscShipISV.Proxy.CommonCreateMiscShipProxy proxy = new ISV.MiscShipISV.Proxy.CommonCreateMiscShipProxy();
    proxy.MiscShipmentDTOList = new List<ISV.MiscShipISV.IC_MiscShipmentDTOData>();
    proxy.MiscShipmentDTOList.Add(input);
    return proxy.Do();
}
```

## 审核

```cs
void Approve(CBO.Pub.Controller.CommonArchiveDataDTOData input){
    UFIDA.U9.ISV.MiscShipISV.Proxy.CommonApproveMiscShipSVProxy proxy = new ISV.MiscShipISV.Proxy.CommonApproveMiscShipSVProxy();
    proxy.MiscShipmentKeyList = new List<CBO.Pub.Controller.CommonArchiveDataDTOData>();
    proxy.MiscShipmentKeyList.Add(input);
    proxy.Do();
}
```