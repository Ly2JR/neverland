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
List<DocKeyDTOData> Create(string docType,string customer,string wh,string itemCode,decimal qty)
{
    var org = Base.Context.LoginOrg;
    var findCustomer = Customer.Finder.Find("Org=@Org and Code=@Code",new OqlParam[] { new OqlParam(org.ID),new OqlParam(customer) });
    if (findCustomer == null) throw new Exception($"客户编码[{customer}]不存在");

    //表头
    var newShip = new ISV.SM.ShipDTOForIndustryChainData();
    newShip.BusinessDate =DateTime.Now;
    newShip.IsPriceIncludeTax = findCustomer.IsTaxPrice;
    newShip.DocumentType = new CommonArchiveDataDTOData()
    {
        Code = docType
    };
    newShip.OperatingOrg = new CommonArchiveDataDTOData()
    {
        Code = org.Code
    };
    newShip.ShipOrg = new CommonArchiveDataDTOData()
    {
        Code = org.Code
    };
    newShip.OrderBy = new CommonArchiveDataDTOData()
    {
        Code = customer
    };
    var findItemMaster = ItemMaster.Finder.Find("Code=@Code", new OqlParam[] { new OqlParam(itemCode) });
    if (findItemMaster == null) throw new Exception($"料品[{itemCode}]不存在");

    newShip.SrcDocType = 0;//无来源
    newShip.Org.Code = org.Code;
    newShip.AccountOrg.Code = org.Code;
    newShip.SettlementOrg.Code = org.Code;
    newShip.InvoiceOrg.Code = org.Code;
    newShip.ShipOrg.Code = org.Code;
    newShip.SettlementOrg.Code = org.Code;
    newShip.ReceivableTerm.ID =findCustomer.RecervalTerm.ID;//收款条件
    //表体
    newLine.SOOwnedOrg.Code = org.Code;
    newLine.AccountOrg.Code = org.Code;
    newLine.ShipperOrg.Code = org.Code;
    newLine.ReceivableTerm.ID =findCustomer.RecervalTerm.ID;
    newLine.IsPriceIncludeTax = findCustomer.IsTaxPrice;
    newLine.TaxSchedule.ID = findCustomer.TaxSchedule.ID;
    newLine.WH.Code = wh;
    newLine.OrderPriceTC = 1M;
    newLine.FinallyPriceTC = 1M;
    newLine.TaxRate = 0.13M;
    if (newLine.IsPriceIncludeTax)//价格含税
    {
        newLine.TotalMoneyTC =qty* newLine.FinallyPriceTC; //金额
        //税额
        newLine.TotalTaxTC = qty*(newLine.FinallyPriceTC / (1 + newLine.TaxRate)) * newLine.TaxRate;
        //未税金额
        newLine.TotalNetMoneyTC = newLine.TotalMoneyTC - newLine.TotalTaxTC;
    }
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
    newShip.ShipLines.Add(newLine);

    UFIDA.U9.ISV.SM.Proxy.CreateShipSVProxy proxy = new ISV.SM.Proxy.CreateShipSVProxy();
    proxy.ShipDTOs = new List<ISV.SM.ShipDTOForIndustryChainData>();
    proxy.ShipDTOs.Add(newShip);
    return proxy.Do();
}
```

## 参照销售订单

```cs
List<DocKeyDTOData> Create(string operatingOrg, string shipperOrg, string docType, string srcDoc, string srcDocId, string customer, string wh, decimal qty)
{
    var findOperatingOrg = Base.Organization.Organization.FindByCode(operatingOrg);
    if (findOperatingOrg == null) throw new Exception($"营运组织编码[{operatingOrg}]不存在");

    var findShipperOrg = Base.Organization.Organization.FindByCode(shipperOrg);
    if (findShipperOrg == null) throw new Exception($"货主组织编码[{shipperOrg}]不存在");

    var findDocType = UFIDA.U9.SM.Ship.ShipDocType.FindByCode(findOperatingOrg, docType);
    if (findDocType == null) throw new Exception($"营运组织编码[{operatingOrg}],单据类型[{docType}]不存在");

    var findCustomer = Customer.FindByCode(findShipperOrg, customer);
    if (findCustomer == null) throw new Exception($"客户编码[{customer}]不存在");

    //表头
    var newShip = new ISV.SM.ShipDTOForIndustryChainData();
    newShip.BusinessDate = DateTime.Now;
    newShip.IsPriceIncludeTax = findCustomer.IsTaxPrice;
    newShip.DocumentType = new CommonArchiveDataDTOData()
    {
        ID = findDocType.ID
    };
    newShip.Org = new CommonArchiveDataDTOData()
    {
        Code = shipperOrg
    };
    newShip.OperatingOrg = new CommonArchiveDataDTOData()
    {
        Code = operatingOrg
    };
    newShip.ShipOrg = new CommonArchiveDataDTOData()
    {
        Code = shipperOrg
    };
    newShip.OrderBy = new CommonArchiveDataDTOData()
    {
        Code = customer
    };
    //newShip.Seller = new CommonArchiveDataDTOData();
    var newLine = new ISV.SM.ShipLineDTOForIndustryChainData();
    //newLine.AC = new CommonArchiveDataDTOData();
    //来源销售订单
    newShip.SrcDocType = 1;
    SOShipline line = SOShipline.Finder.Find("SOLine.Org=@Org and SOLine.SO.DocNo=@SrcDoc and SOLine.ID=@SrcDocId and SOLine.SO.OrderBy.Code=@Customer",
    new OqlParam[] { new OqlParam(findOperatingOrg.ID), new OqlParam(srcDoc), new OqlParam(srcDocId), new OqlParam(findCustomer.Code) });
    if (SMTools.IsNull(line)) throw new Exception($"找不到客户[{customer}],销售订单[{srcDoc}],子行ID[{srcDocId}]");

    newShip.IsNoCreditCheck = line.SOLine.SO.IsCreditCheck;//信用是否免检
    newShip.KeepAccountsPeriod.ID = line.SOLine.SO.KeepAccountPeriod.ID;
    if (SMTools.IsNotNull(line.SOLine.SO.Seller))
    {
        newShip.Seller.Code = line.SOLine.SO.Seller.Code;
    }
    if (SMTools.IsNotNull(line.SOLine.SO.SaleDepartment))
    {
        newShip.SaleDept.Code = line.SOLine.SO.SaleDepartment.Code;
    }
    if (SMTools.IsNotNull(line.SOLine.SO.AC))
    {
        newShip.AC.Code = line.SOLine.SO.AC.Code;
    }
    if (line.SOLine.SO.InnerSupersede != null)
    {
        newShip.InnerSupersedeEnum = line.SOLine.SO.InnerSupersede.Value;
    }
    if (SMTools.IsNotNull(line.SOLine.SO.BalanceOrgKey))
    {
        newShip.SettlementOrg.ID = line.SOLine.SO.BalanceOrgKey.ID;
    }
    if (SMTools.IsNotNull(line.SOLine.SO.InvoiceOrgKey))   //开票组织
    {
        newShip.InvoiceOrg.ID = line.SOLine.SO.InvoiceOrgKey.ID;
    }
    if (line.ShipMode != null)
    {
        newShip.ShipMode = line.ShipMode.Value;
    }
    if (SMTools.IsNotNull(line.SOLine.SO.PriceList))
    {
        newShip.PriceList = line.SOLine.SO.PriceList;
    }
    if (SMTools.IsNotNull(line.SOLine.SO.AccountOrgKey))
    {
        newShip.AccountOrg.Code = line.SOLine.SO.AccountOrg.Code;
    }
    if (SMTools.IsNotNull(line.SOLine.SO.TaxSchedule))
    {
        newShip.TaxSchedule.Code = line.SOLine.SO.TaxSchedule.Code;
    }
    if (line.SOLine.SO.DemandType != null)
    {
        newShip.DemandCode = line.SOLine.SO.DemandType.Value;
    }
    if (line.SOLine.SO.BusinessType != null)
    {
        newShip.BizType = line.SOLine.SO.BusinessType.Value;
    }
    if (SMTools.IsNotNull(line.SOLine.RecTerm))
    {
        newShip.ReceivableTerm.Code = line.SOLine.RecTerm.Code;
    }
    if (SMTools.IsNotNull(line.SOLine.SO.ConfirmAccording))
    {
        newShip.ConfirmAccording.Code = line.SOLine.SO.ConfirmAccording.Code;
    }
    if (SMTools.IsNotNull(line.SOLine.SO.InvoiceAccording))
    {
        newShip.InvoiceAccording.Code = line.SOLine.SO.InvoiceAccording.Code;
    }
    newShip.TradeMode = line.SOLine.SO.TradeMode.Value;
    newShip.ConfirmMode = line.SOLine.SO.ConfirmMode.Value;

    newLine.SrcDocType = 1; //来源单据为销售订单
    newLine.WH.Code = wh;
    newLine.ItemInfo.ItemCode = line.SOLine.ItemInfo.ItemCode;//料品
    newLine.CustomerItemCode = line.SOLine.CustomerItemNo;
    newLine.CustomerItemName = line.SOLine.CustomerItemName;
    if (SMTools.IsNotNull(line.SOLine.Project))//项目号
    {
        newLine.Project.Code = line.SOLine.Project.Code;
    }
    newLine.SrcSysVersion = line.SOLine.SysVersion;
    newLine.SrcDocKey = line.SOLine.SO.ID;
    newLine.SrcDocTransType = findDocType.ID;
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
    newLine.SOTDocType = findDocType.ID;
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
    if (line.IsPriceIncludeTax)//价格含税
    {
        newLine.TotalMoneyTC = Math.Round(qty * line.SOLine.FinallyPriceTC, 2); //金额
                                                                                //税额
        newLine.TotalTaxTC = Math.Round(qty * (line.SOLine.FinallyPriceTC / (1 + line.SOLine.TaxRate)) * line.SOLine.TaxRate, 2);
        //未税金额
        newLine.TotalNetMoneyTC = newLine.TotalMoneyTC - newLine.TotalTaxTC;
    }
    newShip.ShipLines.Add(newLine);

    UFIDA.U9.ISV.SM.Proxy.CreateShipSVProxy proxy = new ISV.SM.Proxy.CreateShipSVProxy();
    proxy.ShipDTOs = new List<ISV.SM.ShipDTOForIndustryChainData>();
    proxy.ShipDTOs.Add(newShip);
    return proxy.Do();
}
```

## 审核

```cs
void Audit(DocKeyDTOData key)
{
    UFIDA.U9.ISV.SM.Proxy.AuditShipSVProxy proxy = new ISV.SM.Proxy.AuditShipSVProxy();
    proxy.IsSubmitAndApprove = true;
    proxy.ShipKeys = new List<DocKeyDTOData>();
    proxy.ShipKeys.Add(key);
    proxy.Do();
}
```

## 删除

```cs
void Delete(DocKeyDTOData key, out string errMsg)
{
    UFIDA.U9.ISV.SM.Proxy.DeleteShipProxy proxy = new ISV.SM.Proxy.DeleteShipProxy();
    proxy.ShipIDs = new List<long>() { key.DocID };
    proxy.Do();
}
```