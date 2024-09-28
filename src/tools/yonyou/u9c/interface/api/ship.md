---
title: 标准出货
date: 2024-07-30
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.ISV.SM.SDIndustryChainSV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 无来源

```cs
/// <summary>
/// 无来源发货
/// </summary>
/// <param name="operatingOrg">营运组织编码</param>
/// <param name="shipperOrg">货主组织</param>
/// <param name="docType">单据类型</param>
/// <param name="customer">客户编码</param>
/// <param name="wh">仓库编码</param>
/// <param name="itemCode">料品编码</param>
/// <param name="qty">数量</param>
/// <returns></returns>
ISV.SM.ShipDTOForIndustryChainData Create(string operatingOrg, string shipperOrg, string docType, string customer, string wh, string itemCode, decimal qty, bool isInnerShipment)
{
    var findOperatingOrg = Base.Organization.Organization.FindByCode(operatingOrg);
    if (findOperatingOrg == null) throw new Exception($"营运组织编码[{operatingOrg}]不存在");

    var findShipperOrg = Base.Organization.Organization.FindByCode(shipperOrg);
    if (findShipperOrg == null) throw new Exception($"货主组织编码[{shipperOrg}]不存在");

    var findDocType = UFIDA.U9.SM.Ship.ShipDocType.FindByCode(findOperatingOrg, docType);
    if (findDocType == null) throw new Exception($"营运组织编码[{operatingOrg}],单据类型[{docType}]不存在");

    var findCustomer = Customer.FindByCode(findShipperOrg, customer);
    if (findCustomer == null) throw new Exception($"客户编码[{customer}]不存在");

    var findItemMaster = UFIDA.U9.CBO.SCM.Item.ItemMaster.Finder.Find("Code=@Code", new OqlParam[] { new OqlParam(itemCode) });
    if (findItemMaster == null) throw new Exception($"料品[{itemCode}]不存在");

    var findWh = FindWarehouse(findShipperOrg, wh);
    if (findWh == null) throw new Exception($"货主组织[{findShipperOrg.Code}]仓库编码[{wh}]不存在");

    //表头
    var input = new ISV.SM.ShipDTOForIndustryChainData();
    input.DocumentType = new CommonArchiveDataDTOData()
    {
        ID = findDocType.ID
    };
    input.Org = new CommonArchiveDataDTOData()
    {
        Code = findShipperOrg.Code
    };
    input.OperatingOrg = new CommonArchiveDataDTOData()
    {
        Code = findOperatingOrg.Code
    };
    input.ShipOrg = new CommonArchiveDataDTOData()
    {
        Code = findShipperOrg.Code
    };
    input.OrderBy = new CommonArchiveDataDTOData()
    {
        Code = findCustomer.Code
    };
    input.SettlementOrg = new CommonArchiveDataDTOData()
    {
        Code = findShipperOrg.Code,
    };
    input.InvoiceOrg = new CommonArchiveDataDTOData()
    {
        Code = findShipperOrg.Code,
    };
    input.BusinessDate = DateTime.Now;
    input.IsPriceIncludeTax = findCustomer.IsTaxPrice;
    input.SrcDocType = 0;//无来源
    input.ReceivableTerm.ID = findCustomer.RecervalTerm.ID;//收款条件
    input.InvoiceAccording.Code = findDocType.InvoiceAccording.Code;//开票依据
    input.IsInnerShipment = isInnerShipment;//内部直运
    UFIDA.U9.CBO.SCM.BalanceRoute.BalanceRoute findBalanceRout = null; //结算路径
    if (input.IsInnerShipment)
    {
        findBalanceRout = UFIDA.U9.CBO.SCM.BalanceRoute.BalanceRoute.Finder.Find(" DocTypeEnum=1 and FromOrg=@FromOrg and ToOrg=@ToOrg", new OqlParam[] { new OqlParam(findShipperOrg.ID), new OqlParam(findOperatingOrg.ID) });
        if (findBalanceRout == null) throw new Exception($"调出货主[{findShipperOrg.Code}]调入货主[{findOperatingOrg.Code}]跨货主出货结算路径未找到");
    }
    //表体
    var newLine = new ISV.SM.ShipLineDTOForIndustryChainData();
    if (input.IsInnerShipment)
    {
        if (findBalanceRout != null)
        {
            newLine.BalanceRoute.Code = findBalanceRout.Code;
            newLine.BalanceRouteName = findBalanceRout.Name;
            newLine.BalanceRouteDesc = findBalanceRout.Description;
        }
    }
    newLine.SrcDocType = 0;
    newLine.SOOwnedOrg.Code = findShipperOrg.Code;
    newLine.AccountOrg.Code = input.AccountOrg.Code;
    newLine.ShipperOrg.Code = findShipperOrg.Code;
    newLine.ReceivableTerm.Code = findShipperOrg.Code;
    newLine.IsPriceIncludeTax = input.IsPriceIncludeTax;
    newLine.TaxSchedule.ID = input.TaxSchedule.ID;

    newLine.WH.Code = findWh.Code;
    newLine.OrderPriceTC = 1M;
    newLine.FinallyPriceTC = 1M;
    newLine.TaxRate = 0.13M;

    newLine.TotalMoneyTC = newLine.FinallyPriceTC * qty;

    newLine.ItemInfo.ItemID = findItemMaster.ID;
    if (SMTools.IsNotNull(findItemMaster.InventoryUOM))
    {
        newLine.InvUom.ID = findItemMaster.InventoryUOM.ID;
    }
    if (SMTools.IsNotNull(findItemMaster.CostUOM))
    {
        newLine.CostUom.ID = findItemMaster.CostUOM.ID;
    }
    if (SMTools.IsNotNull(findItemMaster.PriceUOM))
    {
        newLine.PriceUom.ID = findItemMaster.PriceUOM.ID;
    }
    if (SMTools.IsNotNull(findItemMaster.WeightUom))
    {
        newLine.WeightUom.ID = findItemMaster.WeightUom.ID;
    }
    newLine.ShipQtyInvAmount = qty;
    newLine.PlanQtyTUAmount = qty;
    newLine.ShipQtyTUAmount = qty;
    return input;
}
```

## 参照销售订单

```cs
/// <summary>
/// 参照销售订单出货
/// </summary>
/// <param name="operatingOrg">营运组织编码</param>
/// <param name="shipperOrg">货主组织编码</param>
/// <param name="docType">单据类型编码</param>
/// <param name="srcDoc">销售订单号</param>
/// <param name="srcDocId">销售订单来源ID</param>
/// <param name="customer">客户编码</param>
/// <param name="wh">仓库编码</param>
/// <param name="qty">数量</param>
/// <param name="isInnerShipment">是否内部直运</param>
/// <returns></returns>
ISV.SM.ShipDTOForIndustryChainData Create(string operatingOrg, string shipperOrg, string docType, string srcDoc, long srcDocId, string customer, string wh, decimal qty, bool isInnerShipment)
{
    var findOperatingOrg = Base.Organization.Organization.FindByCode(operatingOrg);
    if (findOperatingOrg == null) throw new Exception($"营运组织编码[{operatingOrg}]不存在");

    var findShipperOrg = Base.Organization.Organization.FindByCode(shipperOrg);
    if (findShipperOrg == null) throw new Exception($"货主组织编码[{shipperOrg}]不存在");

    var findDocType = UFIDA.U9.SM.Ship.ShipDocType.FindByCode(findOperatingOrg, docType);
    if (findDocType == null) throw new Exception($"营运组织编码[{operatingOrg}],单据类型[{docType}]不存在");

    var findCustomer = Customer.FindByCode(findShipperOrg, customer);
    if (findCustomer == null) throw new Exception($"客户编码[{customer}]不存在");

    var input = new ISV.SM.ShipDTOForIndustryChainData();
    input.DocumentType = new CommonArchiveDataDTOData()
    {
        ID = findDocType.ID
    };
    input.Org = new CommonArchiveDataDTOData()
    {
        Code = findShipperOrg.Code
    };
    input.OperatingOrg = new CommonArchiveDataDTOData()
    {
        Code = findOperatingOrg.Code
    };
    input.ShipOrg = new CommonArchiveDataDTOData()
    {
        Code = findShipperOrg.Code
    };
    input.OrderBy = new CommonArchiveDataDTOData()
    {
        Code = findCustomer.Code
    };
    input.Seller = new CommonArchiveDataDTOData();
    input.SaleDept = new CommonArchiveDataDTOData();
    input.AC = new CommonArchiveDataDTOData();
    input.SettlementOrg = new CommonArchiveDataDTOData();
    input.InvoiceOrg = new CommonArchiveDataDTOData();
    input.AccountOrg = new CommonArchiveDataDTOData();

    input.TaxSchedule = new CommonArchiveDataDTOData();
    input.ShipLines = new List<ISV.SM.ShipLineDTOForIndustryChainData>();
    input.ReceivableTerm = new CommonArchiveDataDTOData();
    input.ConfirmAccording = new CommonArchiveDataDTOData();
    input.InvoiceAccording = new CommonArchiveDataDTOData();
    input.KeepAccountsPeriod = new CommonArchiveDataDTOData();

    input.InvoiceAccording.Code = findDocType.InvoiceAccording.Code;//开票依据
    input.IsInnerShipment = isInnerShipment;//内部直运
    input.BusinessDate = DateTime.Now;
    input.IsPriceIncludeTax = findCustomer.IsTaxPrice;

    UFIDA.U9.CBO.SCM.BalanceRoute.BalanceRoute findBalanceRout = null; //结算路径
    if (input.IsInnerShipment)
    {
        findBalanceRout = UFIDA.U9.CBO.SCM.BalanceRoute.BalanceRoute.Finder.Find(" DocTypeEnum=1 and FromOrg=@FromOrg and ToOrg=@ToOrg", new OqlParam[] { new OqlParam(findShipperOrg.ID), new OqlParam(findOperatingOrg.ID) });
        if (findBalanceRout == null) throw new Exception($"调出货主[{findShipperOrg.Code}]调入货主[{findOperatingOrg.Code}]跨货主出货结算路径未找到");
    }
    //表体
    var first = false;

    var findWh = UFIDA.U9.CBO.SCM.Warehouse.Warehouse.FindByCode(findShipperOrg, wh);
    if (findWh == null) throw new Exception($"货主组织[{findShipperOrg.Code}]仓库编码[{wh}]不存在");

    var newLine = new ISV.SM.ShipLineDTOForIndustryChainData();
    newLine.AC = new CommonArchiveDataDTOData();
    newLine.AccountOrg = new CommonArchiveDataDTOData();
    newLine.AssociatedParentKey = new CBO.SCM.Item.ItemMasterData();
    newLine.BalanceRoute = new CommonArchiveDataDTOData();
    newLine.BillToSite = new CommonArchiveDataDTOData();
    newLine.BomOwner = new CommonArchiveDataDTOData();
    newLine.ConfirmAccording = new CommonArchiveDataDTOData();
    newLine.ConfirmTerm = new CommonArchiveDataDTOData();
    newLine.ContractOwnedOrg = new CommonArchiveDataDTOData();
    newLine.CostBaseUom = new CommonArchiveDataDTOData();
    newLine.CostUom = new CommonArchiveDataDTOData();
    newLine.CreditObj = new CommonArchiveDataDTOData();
    newLine.FAS = new CBO.SCM.Item.ItemInfoData();
    newLine.HandleDept = new CommonArchiveDataDTOData();
    newLine.IncomeConfirmTermKey_SKey = new UFSoft.UBF.Business.BusinessEntity.EntityKey();
    newLine.InvBaseUom = new CommonArchiveDataDTOData();
    newLine.InvMainUOM = new CommonArchiveDataDTOData();
    newLine.InvoiceAccording = new CommonArchiveDataDTOData();
    newLine.InvUom = new CommonArchiveDataDTOData();
    newLine.ItemInfo = new CBO.SCM.Item.ItemInfoData();
    newLine.KitItemInfo = new CBO.SCM.Item.ItemInfoData();
    newLine.KitItemManufacturer = new CommonArchiveDataDTOData();
    newLine.LotInfo = new LotInfoData();
    newLine.Manufacturer = new CommonArchiveDataDTOData();
    newLine.OriginalItemBaseUom = new CommonArchiveDataDTOData();
    newLine.OriginalItemUom = new CommonArchiveDataDTOData();
    newLine.OriginalManufacturer = new CommonArchiveDataDTOData();
    newLine.Payer = new CommonArchiveDataDTOData();
    newLine.PayerSite = new CommonArchiveDataDTOData();
    newLine.PriceBaseUom = new CommonArchiveDataDTOData();
    newLine.PriceUom = new CommonArchiveDataDTOData();
    newLine.ProcessItem = new CBO.SCM.Item.ItemInfoData();
    newLine.ProcessMFC = new CommonArchiveDataDTOData();
    newLine.ProcessSubUom = new CommonArchiveDataDTOData();
    newLine.ProcessUOM = new CommonArchiveDataDTOData();
    newLine.Project = new CommonArchiveDataDTOData();
    newLine.ReceivableTerm = new CommonArchiveDataDTOData();
    newLine.SaleDept = new CommonArchiveDataDTOData();
    newLine.Seiban = new CommonArchiveDataDTOData();
    newLine.Seller = new CommonArchiveDataDTOData();
    newLine.Ship = new ShipDTOForIndustryChainData();
    newLine.SrcDocOwnedOrg = new CommonArchiveDataDTOData();
    newLine.ShipmentRule = new CommonArchiveDataDTOData();
    newLine.ShipperOrg = new CommonArchiveDataDTOData();
    newLine.ShipToSite = new CommonArchiveDataDTOData();
    newLine.SOOwnedOrg = new CommonArchiveDataDTOData();
    newLine.StageWH = new CommonArchiveDataDTOData();
    newLine.Supplier = new CommonArchiveDataDTOData();
    newLine.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
    newLine.Task = new CommonArchiveDataDTOData();
    newLine.TaxSchedule = new CommonArchiveDataDTOData();
    newLine.TradeBaseUom = new CommonArchiveDataDTOData();
    newLine.TradeUom = new CommonArchiveDataDTOData();
    newLine.TradeUom2 = new CommonArchiveDataDTOData();
    newLine.TradeUom2Associate_SKey = new UFSoft.UBF.Business.BusinessEntity.EntityKey();
    newLine.TransMode = new CommonArchiveDataDTOData();
    newLine.VolumeUom = new CommonArchiveDataDTOData();
    newLine.WeightUom = new CommonArchiveDataDTOData();
    newLine.WH = new CommonArchiveDataDTOData();
    newLine.WhMan = new CommonArchiveDataDTOData();
    newLine.SrcDocOwnedOrg = new CommonArchiveDataDTOData();

    newLine.InvoiceAccording.Code = input.InvoiceAccording.Code;
    if (input.IsInnerShipment)
    {
        if (findBalanceRout != null)
        {
            newLine.BalanceRoute.Code = findBalanceRout.Code;
            newLine.BalanceRouteName = findBalanceRout.Name;
            newLine.BalanceRouteDesc = findBalanceRout.Description;
        }
    }
    //来源销售订单
    if (!string.IsNullOrEmpty(srcDoc) && srcDocId > 0L)
    {
        input.SrcDocType = 1;
        input.IsNoSOShipment = false;
        input.IsInnerShipment = true;
        newLine.IsInnerShipment = true;
        SOShipline line = SOShipline.Finder.Find("SOLine.Org=@Org and SOLine.SO.DocNo=@SrcDoc and SOLine.ID=@SrcDocId and SOLine.SO.OrderBy.Code=@Customer",
        new OqlParam[] { new OqlParam(findOperatingOrg.ID), new OqlParam(srcDoc), new OqlParam(srcDocId), new OqlParam(findCustomer.Code) });
        if (SMTools.IsNull(line)) throw new Exception($"找不到客户[{customer}],销售订单[{srcDoc}],子行ID[{srcDocId}]");
        if (!first)
        {
            input.IsNoCreditCheck = line.SOLine.SO.IsCreditCheck;       //信用是否免检
            input.KeepAccountsPeriod.ID = line.SOLine.SO.KeepAccountPeriod.ID;
            if (SMTools.IsNotNull(line.SOLine.SO.Seller))
            {
                input.Seller.Code = line.SOLine.SO.Seller.Code;
            }
            if (SMTools.IsNotNull(line.SOLine.SO.SaleDepartment))
            {
                input.SaleDept.Code = line.SOLine.SO.SaleDepartment.Code;
            }
            if (SMTools.IsNotNull(line.SOLine.SO.AC))
            {
                input.AC.Code = line.SOLine.SO.AC.Code;
            }
            if (line.SOLine.SO.InnerSupersede != null)
            {
                input.InnerSupersedeEnum = line.SOLine.SO.InnerSupersede.Value;
            }
            if (SMTools.IsNotNull(line.SOLine.SO.BalanceOrgKey))
            {
                input.SettlementOrg.ID = line.SOLine.SO.BalanceOrgKey.ID;
            }
            if (SMTools.IsNotNull(line.SOLine.SO.InvoiceOrgKey))   //开票组织
            {
                input.InvoiceOrg.ID = line.SOLine.SO.InvoiceOrgKey.ID;
            }
            if (line.ShipMode != null)
            {
                input.ShipMode = line.ShipMode.Value;
            }
            if (line.SOLine.SO.PriceList > 0)
            {
                input.PriceList = line.SOLine.SO.PriceList;
            }
            if (SMTools.IsNotNull(line.SOLine.SO.AccountOrgKey))
            {
                input.AccountOrg.Code = line.SOLine.SO.AccountOrg.Code;
            }
            if (SMTools.IsNotNull(line.SOLine.SO.TaxSchedule))
            {
                input.TaxSchedule.Code = line.SOLine.SO.TaxSchedule.Code;
            }
            if (line.SOLine.SO.DemandType != null)
            {
                input.DemandCode = line.SOLine.SO.DemandType.Value;
            }
            if (line.SOLine.SO.BusinessType != null)
            {
                input.BizType = line.SOLine.SO.BusinessType.Value;
            }
            if (SMTools.IsNotNull(line.SOLine.RecTerm))
            {
                input.ReceivableTerm.Code = line.SOLine.RecTerm.Code;
            }
            if (SMTools.IsNotNull(line.SOLine.SO.ConfirmAccording))
            {
                input.ConfirmAccording.Code = line.SOLine.SO.ConfirmAccording.Code;
            }

            input.TradeMode = line.SOLine.SO.TradeMode.Value;
            input.ConfirmMode = line.SOLine.SO.ConfirmMode.Value;
            input.BargainMode = line.SOLine.SO.BargainMode.Value;
            first = true;
        }

        newLine.SrcDocType = 1; //来源单据为销售订单
        newLine.WH.Code = findWh.Code;
        newLine.ItemInfo.ItemCode = line.SOLine.ItemInfo.ItemCode;//料品
        newLine.CustomerItemCode = line.SOLine.CustomerItemNo;
        newLine.CustomerItemName = line.SOLine.CustomerItemName;
        if (SMTools.IsNotNull(line.SOLine.Project))//项目号
        {
            newLine.Project.Code = line.SOLine.Project.Code;
        }
        newLine.SrcSysVersion = line.SOLine.SysVersion;
        newLine.SrcDocKey = line.SOLine.SO.ID;
        newLine.SrcDocTransType = line.SOLine.SO.DocumentType.ID;
        newLine.SrcDocDate = line.SOLine.SO.BusinessDate;
        newLine.SrcDocNo = line.SOLine.SO.DocNo;
        newLine.SrcDocVer = line.SOLine.SO.Version;
        newLine.SrcDocLineKey = line.SOLine.ID;
        newLine.SrcDocLineNo = line.SOLine.DocLineNo;
        newLine.SrcDocSubLineKey = line.ID;
        newLine.SrcDocSubLineNo = line.DocSubLineNo;
        newLine.SrcDocOwnedOrg.ID = findOperatingOrg.ID;

        newLine.SOKey = line.SOLine.SO.ID;
        newLine.SONo = line.SOLine.SO.DocNo;
        newLine.SODate = line.SOLine.SO.BusinessDate;
        newLine.SOVer = line.SOLine.SO.Version;
        newLine.SOTDocType = line.SOLine.SO.DocumentType.ID;
        newLine.SOLineKey = line.SOLine.ID;
        newLine.SOLineNo = line.SOLine.DocLineNo;
        newLine.SOSubLineKey = line.ID;
        newLine.SOSubLineNo = line.DocSubLineNo;
        newLine.SOOwnedOrg.ID = findOperatingOrg.ID;
        if (line.SOLine.SO.Payer != null)
        {
            newLine.Payer.Code = line.SOLine.SO.Payer.Customer.Code;
        }
        if (line.SOLine.SO.PayerSite != null)
        {
            newLine.PayerSite.Code = line.SOLine.SO.PayerSite.CustomerSite.Code;
        }
        newLine.BillSetCode = line.BillSetCode;
        newLine.ConfirmMode = line.SOLine.SO.ConfirmMode.Value;
        if (SMTools.IsNotNull(line.SOLine.SO.ConfirmTerm))
        {
            newLine.ConfirmTerm.Code = line.SOLine.SO.ConfirmTerm.Code;
        }
        if (SMTools.IsNotNull(line.SOLine.RecTerm))
        {
            newLine.ReceivableTerm.Code = line.SOLine.RecTerm.Code;
        }
        if (SMTools.IsNotNull(line.SOLine.SO.ConfirmAccording))
        {
            newLine.ConfirmAccording.Code = line.SOLine.SO.ConfirmAccording.Code;
        }
        if (line.SOLine.SO.IncomeConfirmRule != null)
        {
            newLine.IncomeConfirmRule = line.SOLine.SO.IncomeConfirmRule.Value;
        }
        if (SMTools.IsNotNull(line.SOLine.SO.IncomeConfirmConditionMain))
        {
            newLine.IncomeConfirmTermKey = line.SOLine.SO.IncomeConfirmConditionMain.ID;
        }
        if (SMTools.IsNotNull(line.SOLine.SO.ShipRule))
        {
            newLine.ShipmentRule.Code = line.SOLine.SO.ShipRule.Code;
        }
        newLine.TaxFreeNo = line.SOLine.SO.TaxFreeNo;
        if (SMTools.IsNotNull(line.PU))
        {
            newLine.PriceUom.Code = line.PU.Code;
        }
        if (SMTools.IsNotNull(line.PBU))
        {
            newLine.PriceBaseUom.Code = line.PBU.Code;
        }
        newLine.PriceRatetoBase = line.PUToPBURate;
        if (SMTools.IsNotNull(line.TU))
        {
            newLine.TradeUom.Code = line.TU.Code;
        }
        if (SMTools.IsNotNull(line.TBU))
        {
            newLine.TradeBaseUom.Code = line.TBU.Code;
        }
        newLine.TradeRatetoBase = line.TUToTBURate;
        if (SMTools.IsNotNull(line.TU2Key))
        {
            newLine.TradeUom2.Code = line.TU2.Code;
        }
        if (line.TUBaseToPUBaseRate != 0)
        {
            newLine.TUPUConvRatio = line.TUBaseToPUBaseRate;
        }
        if (!line.IsChildLine())
        {
            if (SMTools.IsNotNull(line.SOLine.WeightUOM))
            {
                newLine.WeightUom.Code = line.SOLine.WeightUOM.Code;
            }
            if (SMTools.IsNotNull(line.SOLine.VolumeUOM))
            {
                newLine.VolumeUom.Code = line.SOLine.VolumeUOM.Code;
            }
        }

        if (line.SOLine.ShipToSite != null)
        {
            var findCustomerSize = CustomerSite.Finder.Find("Customer=@Customer and Code=@Code", new OqlParam[] { new OqlParam(findCustomer.ID), new OqlParam(line.SOLine.ShipToSite.Code) });
            if (findCustomer == null) throw new Exception($"找不到客户[{findCustomer.Code}],客户存储地点[{line.SOLine.ShipToSite.Code}]");
            newLine.ShipToSite.ID = findCustomerSize.ID;
            newLine.ShipToSite.Code = line.SOLine.ShipToSite.Code;
        }
        newLine.ShipQtyInvAmount = qty;
        newLine.PlanQtyTUAmount = qty;
        newLine.ShipQtyTUAmount = qty;

        newLine.SeibanAlterable = line.SOLine.SeibanAlterable.Value;
        newLine.PriceSource = line.SOLine.PriceSource.Value;
        newLine.SrcDocPriceTC = line.SOLine.OrderPriceTC;
        newLine.OrderPriceTC = line.SOLine.OrderPriceTC;//定价
        newLine.FinallyPriceTC = line.SOLine.FinallyPriceTC;//最终价
        newLine.TotalDiscountTC = newLine.FinallyPriceTC - newLine.OrderPriceTC;//折扣额
    }

    input.ShipLines.Add(newLine);
    return input;
}
```

## 制单

```cs
List<DocKeyDTOData> Create(ShipDTOForIndustryChainData input)
{
    UFIDA.U9.ISV.SM.Proxy.CreateShipSVProxy proxy = new ISV.SM.Proxy.CreateShipSVProxy();
    proxy.ShipDTOs = new List<ISV.SM.ShipDTOForIndustryChainData>();
    proxy.ShipDTOs.Add(input);
    return proxy.Do();
}
```

## 审核

```cs
void Audit(DocKeyDTOData input)
{
    UFIDA.U9.ISV.SM.Proxy.AuditShipSVProxy proxy = new ISV.SM.Proxy.AuditShipSVProxy();
    proxy.IsSubmitAndApprove = true;
    proxy.ShipKeys = new List<DocKeyDTOData>();
    proxy.ShipKeys.Add(input);
    proxy.Do();
}
```

## 删除

```cs
void Delete(DocKeyDTOData input)
{
    UFIDA.U9.ISV.SM.Proxy.DeleteShipProxy proxy = new ISV.SM.Proxy.DeleteShipProxy();
    proxy.ShipIDs = new List<long>() { input.DocID };
    proxy.Do();
}
```