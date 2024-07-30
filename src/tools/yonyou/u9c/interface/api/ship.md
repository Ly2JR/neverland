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

主要引用三个文件`	UFIDA.U9.ISV.SM.SDIndustryChainSV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 无来源

```cs
List<DocKeyDTOData> Create(string customer,string wh,string itemCode,decimal qty,out string errMsg)
{
    errMsg = string.Empty;
    try
    {
        var org = Base.Context.LoginOrg;
        var findCustomer = Customer.Finder.Find("Org=@Org and Code=@Code",new OqlParam[] { new OqlParam(org.ID),new OqlParam(customer) });
        if (findCustomer == null)
        {
            errMsg = $"客户编码:{customer}不存在";
            return null;
        }
        UFIDA.U9.ISV.SM.Proxy.CreateShipSVProxy proxy = new ISV.SM.Proxy.CreateShipSVProxy();
        proxy.ShipDTOs = new List<ISV.SM.ShipDTOForIndustryChainData>();
        //表头
        var newShip = new ISV.SM.ShipDTOForIndustryChainData();
        newShip.BusinessDate =DateTime.Now;
        newShip.IsPriceIncludeTax = findCustomer.IsTaxPrice;
        newShip.DocumentType = new CommonArchiveDataDTOData()
        {
            Code = documentType
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
        if (findItemMaster == null)
        {
            errMsg = $"料号:{itemCode}不存在";
            return null;
        }
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
        proxy.ShipDTOs.Add(newShip);

        return proxy.Do();
    }
    catch (Exception ex)
    {
        errMsg = ex.Message;
    }
    return null;
}
```

## 参照销售订单

```cs
List<DocKeyDTOData> Create(string srcDocNo,string srcDocId,string customer,string wh,decimal qty,out string errMsg)
{
    errMsg = string.Empty;
    try
    {
        var org = Base.Context.LoginOrg;
        var findCustomer = Customer.Finder.Find("Org=@Org and Code=@Code",new OqlParam[] { new OqlParam(org.ID),new OqlParam(customer) });
        if (findCustomer == null)
        {
            errMsg = $"客户编码:{customer}不存在";
            return null;
        }

        UFIDA.U9.ISV.SM.Proxy.CreateShipSVProxy proxy = new ISV.SM.Proxy.CreateShipSVProxy();
        proxy.ShipDTOs = new List<ISV.SM.ShipDTOForIndustryChainData>();
        //表头
        var newShip = new ISV.SM.ShipDTOForIndustryChainData();
        newShip.BusinessDate = DateTime.Now;
        newShip.IsPriceIncludeTax = findCustomer.IsTaxPrice;
        newShip.DocumentType = new CommonArchiveDataDTOData()
        {
            Code = documentType
        };
        newShip.OperatingOrg = new CommonArchiveDataDTOData()
        {
            Code = org.Code
        };
        newShip.ShipOrg = new CommonArchiveDataDTOData()
        {
            Code = org.Code
        };
        newShip.ShipMemo = headMemo;
        newShip.OrderBy = new CommonArchiveDataDTOData()
        {
            Code = customer
        };
        newShip.SrcDocType = 1;//来源销售订单
        //表体
        var newLine = new ISV.SM.ShipLineDTOForIndustryChainData();    
        SOShipline line = SOShipline.Finder.Find("SOLine.Org=@Org and SOLine.SO.DocNo=@SrcDoc and SOLine.ID=@SrcDocId and SOLine.SO.OrderBy.Code=@Customer",
        new OqlParam[] { new OqlParam(org.ID), new OqlParam(srcDoc), new OqlParam(srcDocId), new OqlParam(findCustomer.Code) });
        if (SMTools.IsNull(line))
        {
            errMsg = $"找不到客户:{customer},销售订单:{ srcDoc},行:{ srcDocId}";
            return null;
        }
        #region Head
        newShip.IsNoCreditCheck = line.SOLine.SO.IsCreditCheck;//信用是否免检
        if (SMTools.IsNotNull(line.SOLine.SO.Seller))
        {
            newShip.Seller.ID = line.SOLine.SO.Seller.ID;
        }
        if (SMTools.IsNotNull(line.SOLine.SO.SaleDepartment))
        {
            newShip.SaleDept.ID = line.SOLine.SO.SaleDepartment.ID;
        }
        if (SMTools.IsNotNull(line.SOLine.SO.AC))
        {
            newShip.AC.ID = line.SOLine.SO.AC.ID;
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
            newShip.AccountOrg.ID = line.SOLine.SO.AccountOrg.ID;
        }
        if (SMTools.IsNotNull(line.SOLine.SO.Org))
        {
            newShip.Org.ID = line.SOLine.SO.Org.ID;
        }
        if (SMTools.IsNotNull(line.SOLine.SO.TaxSchedule))
        {
            newShip.TaxSchedule.ID = line.SOLine.SO.TaxSchedule.ID;
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
            newShip.ReceivableTerm.ID = line.SOLine.RecTerm.ID;
        }
        if(SMTools.IsNotNull(line.SOLine.SO.ConfirmAccording))
        {
            newShip.ConfirmAccording.ID = line.SOLine.SO.ConfirmAccording.ID;
        }
        if (SMTools.IsNotNull(line.SOLine.SO.InvoiceAccording))
        {
            newShip.InvoiceAccording.ID = line.SOLine.SO.InvoiceAccording.ID;
        }
        newShip.TradeMode = line.SOLine.SO.TradeMode.Value;
        newShip.ConfirmMode = line.SOLine.SO.ConfirmMode.Value;
        #endregion

        #region Body
        newLine.WH.Code = wh;//客户编码
        newLine.ItemInfo.ItemID = line.SOLine.ItemInfo.ItemID.ID;//料品
        newLine.CustomerItemCode = line.SOLine.CustomerItemNo;
        newLine.CustomerItemName = line.SOLine.CustomerItemName;
        if (SMTools.IsNotNull(line.SOLine.Project))//项目号
        {
            newLine.Project.ID = line.SOLine.Project.ID;
        }
        newLine.SrcDocType = 1; //来源单据为销售订单
        newLine.SrcSysVersion = line.SOLine.SysVersion;
        if (SMTools.IsNotNull(line.SrcOrg))
        {
            newLine.SrcDocOwnedOrg.ID = line.SrcOrg.ID;
        }
        newLine.SrcDocKey = line.SOLine.SO.ID;
        newLine.SrcDocTransType = line.SOLine.SO.DocumentType.ID;
        newLine.SrcDocDate = line.SOLine.SO.BusinessDate;
        newLine.SrcDocNo = line.SOLine.SO.DocNo;
        newLine.SrcDocVer = line.SOLine.SO.Version;
        newLine.SrcDocLineKey = line.SOLine.ID;
        newLine.SrcDocLineNo = line.SOLine.DocLineNo;
        newLine.SrcDocSubLineKey = line.ID;
        newLine.SrcDocSubLineNo = line.DocSubLineNo;
        newLine.SrcDocOwnedOrg.ID = line.SOLine.Org.ID;

        newLine.SOKey = line.SOLine.SO.ID;
        newLine.SONo = line.SOLine.SO.DocNo;
        newLine.SODate = line.SOLine.SO.BusinessDate;
        newLine.SOVer = line.SOLine.SO.Version;
        newLine.SOTDocType = line.SOLine.SO.DocumentType.ID;
        newLine.SOLineKey = line.SOLine.ID;
        newLine.SOLineNo = line.SOLine.DocLineNo;
        newLine.SOSubLineKey = line.ID;
        newLine.SOSubLineNo = line.DocSubLineNo;

        if (SMTools.IsNotNull(line.Org))
        {
            newLine.SOOwnedOrg.ID = line.Org.ID;
        }
        if (line.SOLine.SO.Payer != null)
        {
            newLine.Payer.ID = line.SOLine.SO.Payer.Customer.ID;
        }
        if (line.SOLine.SO.PayerSite != null)
        {
            newLine.PayerSite.ID = line.SOLine.SO.PayerSite.CustomerSite.ID;
        }
        newLine.BillSetCode = line.BillSetCode;
        newLine.ConfirmMode = line.SOLine.SO.ConfirmMode.Value;
        if (SMTools.IsNotNull(line.SOLine.SO.ConfirmTerm))
        {
            newLine.ConfirmTerm.ID = line.SOLine.SO.ConfirmTerm.ID;
        }
        if (SMTools.IsNotNull(line.SOLine.RecTerm))
        {
            newLine.ReceivableTerm.ID = line.SOLine.RecTerm.ID;
        }
        if (SMTools.IsNotNull(line.SOLine.SO.ConfirmAccording))
        {
            newLine.ConfirmAccording.ID = line.SOLine.SO.ConfirmAccording.ID;
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
            newLine.ShipmentRule.ID = line.SOLine.SO.ShipRule.ID;
        }
        newLine.TaxFreeNo = line.SOLine.SO.TaxFreeNo;
        if (SMTools.IsNotNull(line.PU))
        {
            newLine.PriceUom.ID = line.PU.ID;
        }
        if (SMTools.IsNotNull(line.PBU))
        {
            newLine.PriceBaseUom.ID = line.PBU.ID;
        }
        newLine.PriceRatetoBase = line.PUToPBURate;
        if (SMTools.IsNotNull(line.TU))
        {
            newLine.TradeUom.ID = line.TU.ID;
        }
        if (SMTools.IsNotNull(line.TBU))
        {
            newLine.TradeBaseUom.ID = line.TBU.ID;
        }
        newLine.TradeRatetoBase = line.TUToTBURate;
        if (SMTools.IsNotNull(line.TU2Key))
        {
            newLine.TradeUom2.ID = line.TU2.ID;
        }
        if (SMTools.IsNotNull(line.TBU2Key))
        {
            newLine.TradeUom2Associate = line.TBU2.ID;
        }
        newLine.TradeUom2ToTRadeUom2Associate = line.TU2toTBU2Rate;

        if (line.TUBaseToPUBaseRate != 0)
        {
            newLine.TUPUConvRatio = line.TUBaseToPUBaseRate;
        }
        if (!line.IsChildLine())
        {
            if (SMTools.IsNotNull(line.SOLine.WeightUOM))
            {
                newLine.WeightUom.ID = line.SOLine.WeightUOM.ID;
            }
            if (SMTools.IsNotNull(line.SOLine.VolumeUOM))
            {
                newLine.VolumeUom.ID = line.SOLine.VolumeUOM.ID;
            }
        }
        if (line.SOLine.ShipToSite!=null)
        {
            newLine.ShipToSite.ID = line.SOLine.ShipToSite.CustomerSite.ID;
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
            newLine.TotalMoneyTC =Math.Round(qty* line.SOLine.FinallyPriceTC,2); //金额
            //税额
            newLine.TotalTaxTC =Math.Round(qty*(line.SOLine.FinallyPriceTC / (1 + line.SOLine.TaxRate)) * line.SOLine.TaxRate,2);
            //未税金额
            newLine.TotalNetMoneyTC = newLine.TotalMoneyTC - newLine.TotalTaxTC;
        }
        newShip.ShipLines.Add(newLine);
        proxy.ShipDTOs.Add(newShip);
        return proxy.Do();
    }
    catch (Exception ex)
    {
        errMsg = ex.Message;
    }
    return null;
}
```

## 审核

```cs
bool Audit(DocKeyDTOData key, out string errMsg)
{
    errMsg = "";
    try
    {
        UFIDA.U9.ISV.SM.Proxy.AuditShipSVProxy proxy = new ISV.SM.Proxy.AuditShipSVProxy();
        proxy.IsSubmitAndApprove = true;
        proxy.ShipKeys = new List<DocKeyDTOData>();
        proxy.ShipKeys.Add(key);
        proxy.Do();
        return true;
    }
    catch (Exception ex)
    {
        errMsg = ex.Message;
    }
    return false;
}
```

## 删除

```cs
bool Delete(DocKeyDTOData key, out string errMsg)
{
    errMsg = "";
    try
    {
        UFIDA.U9.ISV.SM.Proxy.DeleteShipProxy proxy = new ISV.SM.Proxy.DeleteShipProxy();
        proxy.ShipIDs = new List<long>() { key.DocID };
        proxy.Do();
        return true;
    }
    catch (Exception ex)
    {
        errMsg = ex.Message;
        _logger.Error($"DeleteShip:{ex.Message}");
    }
    return false;
}
```