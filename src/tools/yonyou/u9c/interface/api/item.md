---
title: 料品
date: 2024-08-05
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

## 料品数据

```cs
CBO.SCM.Item.ItemMasterData Create(string submitBy, string itemCategory, string code, string name, string specs, string desc, int attribute, int uomGroup, string uom)
{
    var org = Base.Context.LoginOrg;
    UFIDA.U9.CBO.SCM.Item.ItemCategory findItemCategory = null;
    if (!string.IsNullOrEmpty(itemCategory))
    {
        findItemCategory = UFIDA.U9.CBO.SCM.Item.ItemCategory.Finder.Find("Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(org.ID), new OqlParam(itemCategory) });
        if (findItemCategory == null) throw new Exception($"组织编码[{org.Code}]料品分类[{itemCategory}]不存在");
    }

    var findUom = UFIDA.U9.Base.UOM.UOM.FindByCode(uom);
    if (findUom == null) throw new Exception($"单位[{uom}]不存在");

    var findUser = UFIDA.U9.Base.UserRole.User.FindByCode(submitBy);
    if (findUser == null)  throw new Exception($"提交人[{submitBy}]不存在");

    var newItem = new CBO.SCM.Item.ItemMasterData();
    newItem.Effective = new Base.PropertyTypes.EffectiveData();
    newItem.Effective.IsEffective = true;
    newItem.Effective.EffectiveDate = DateTime.Now;
    newItem.Effective.DisableDate = DateTime.MaxValue;

    newItem.MFGWasteInfos = new List<CBO.SCM.Item.MFGWasteInfoData>();
    newItem.ItemConvertRatioInClasses = new List<CBO.SCM.Item.ItemConvertRatioInClassData>();
    newItem.ItemConvertRatioOverClasses = new List<CBO.SCM.Item.ItemConvertRatioOverClassData>();
    newItem.ItemFreeDefs = new List<CBO.SCM.Item.ItemFreeDefData>();
    newItem.ItemMasterVersions = new List<CBO.SCM.Item.ItemMasterVersionData>();
    newItem.ItemTradeMarks = new List<CBO.SCM.Item.ItemTradeMarkData>();
    //进出口
    newItem.EntranceInfo = new CBO.SCM.Item.EntranceInfoData();
    newItem.EntranceInfo.CreatedBy = submitBy;
    newItem.EntranceInfo.CreatedOn = DateTime.Now;
    newItem.EntranceInfo.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
    //质量相关
    newItem.InspectionInfo = new CBO.SCM.Item.ItemInspectionInfoData();
    //newItem.InspectionInfo.ItemMaster = newItem;
    newItem.InspectionInfo.CreatedBy = submitBy;
    newItem.InspectionInfo.CreatedOn = DateTime.Now;
    newItem.InspectionInfo.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
    //库存规划
    newItem.InventoryInfo = new CBO.SCM.Item.ItemInvInfoData();
    newItem.InventoryInfo.InventoryPlanningMethod = 4;
    newItem.InventoryInfo.InvToPurMode = 1;
    newItem.InventoryInfo.SafetyStockType = 0;
    newItem.InventoryInfo.IsInvCalculateBySeiban = true;
    newItem.InventoryInfo.PurchaseControlMode = 1;
    newItem.InventoryInfo.ApprDiffRule = 0;
    //newItem.InventoryInfo.ItemMaster = newItem;
    newItem.InspectionInfo.CreatedBy = submitBy;
    newItem.InspectionInfo.CreatedOn = DateTime.Now;
    newItem.InventoryInfo.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
    //生产相关
    newItem.MfgInfo = new CBO.SCM.Item.ItemMFGInfoData();
    newItem.MfgInfo.BuildQuanSelectType = 0;
    newItem.MfgInfo.IsExpandByOrder = true;
    newItem.MfgInfo.BuildShrinkageRate = 1;
    var findCostElement = UFIDA.U9.CBO.MFG.CostElement.CostElement.Finder.Find("Org=@Org and Name=@Name and IsLeaf=1", new OqlParam[] { new OqlParam(org.ID), new OqlParam("材料费") });
    if (findCostElement == null) throw new Exception($"组织编码[{org.Code}]找不到成本要素[材料费]");

    newItem.MfgInfo.CostElement = findCostElement.ID;
    newItem.MfgInfo.OverFinishType = 0;
    newItem.MfgInfo.BomControlMode = 0;
    //newItem.MfgInfo.ItemMaster = newItem;
    newItem.MfgInfo.CreatedBy = submitBy;
    newItem.MfgInfo.CreatedOn = DateTime.Now;
    newItem.MfgInfo.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
    //计划
    newItem.MrpInfo = new CBO.SCM.Item.ItemMRPInfoData();
    newItem.MrpInfo.MRPPlanningType = 0;
    newItem.MrpInfo.ForecastContorlType = 1;
    newItem.MrpInfo.IsTraceRequirement = true;
    newItem.MrpInfo.PlanningTimeFenceRuleType = 0;
    newItem.MrpInfo.PlanningTimeFence = 0;
    newItem.MrpInfo.DemandTimeFenceRuleType = 0;
    newItem.MrpInfo.DemandTimeFence = 0;
    newItem.MrpInfo.ReleaseTimeFence = 0;
    newItem.MrpInfo.IsControlByDC = true;
    //newItem.MrpInfo.ItemMaster = newItem;
    newItem.MrpInfo.CreatedBy = submitBy;
    newItem.MrpInfo.CreatedOn = DateTime.Now;
    newItem.MrpInfo.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
    //采购相关
    newItem.PurchaseInfo = new CBO.SCM.Item.ItemPurchaseInfoData();
    newItem.PurchaseInfo.MaxLimitPriceSource = 0;
    newItem.PurchaseInfo.PurchaseQuotaMode = 1;
    newItem.PurchaseInfo.QuotaSupplier = 1;
    newItem.PurchaseInfo.PriceSource = 2;
    newItem.PurchaseInfo.ReturnPriceSource = 2;
    newItem.PurchaseInfo.ReceiptMode = 0;
    newItem.PurchaseInfo.ReceiptType = 0;
    newItem.PurchaseInfo.ChargeAssignMode = 0;
    newItem.PurchaseInfo.ChargeProcessMode = 1;
    newItem.PurchaseInfo.IsPURtnTradePathModify = true;
    newItem.PurchaseInfo.IsPUTradePathModify = true;
    //newItem.PurchaseInfo.ItemMaster = newItem;
    newItem.PurchaseInfo.CreatedBy = submitBy;
    newItem.PurchaseInfo.CreatedOn = DateTime.Now;
    newItem.PurchaseInfo.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
    //销售相关
    newItem.SaleInfo = new CBO.SCM.Item.ItemSaleInfoData();
    newItem.SaleInfo.SupplySource = 4;
    newItem.SaleInfo.SupplyOrg = org.ID;
    newItem.SaleInfo.DemandTransType = 4;
    newItem.SaleInfo.IsReturnable = true;
    newItem.SaleInfo.IsRMAAllowModify = true;
    newItem.SaleInfo.IsSDRtnTradePathModify = true;
    newItem.SaleInfo.IsSDTradePathModify = true;
    //newItem.SaleInfo.ItemMaster = newItem;
    newItem.SaleInfo.CreatedBy = submitBy;
    newItem.SaleInfo.CreatedOn = DateTime.Now;
    newItem.SaleInfo.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
    newItem.Org = org.ID;
    newItem.MasterOrg = org.ID;
    newItem.MainItemCategory = findItemCategory.ID;
    newItem.Code = code;
    newItem.Name = name;
    newItem.SPECS = specs;
    newItem.IsVarRatio = true;//固定换算率
    newItem.ConverRatioRule = 0;//转换率策略
    newItem.ItemFormAttribute = attribute;//料品形态属性
    newItem.IsInventoryEnable = false;//可库存交易
    newItem.IsPurchaseEnable = false;//可采购
    newItem.IsSalesEnable = false;//可销售
    newItem.IsBuildEnable = false;//可生产
    newItem.IsOutsideOperationEnable = false;//可委外
    newItem.IsMRPEnable = false;//可委外
    newItem.IsBOMEnable = false;//可Bom
    newItem.IsVMIEnable = false;//可VMI
    newItem.InventoryUOMGroup = uomGroup;
    newItem.InventoryUOM = findUom.ID;
    newItem.InventorySecondUOM = findUom.ID;
    newItem.ManufactureUOM = findUom.ID;
    newItem.CostUOM = findUom.ID;
    newItem.MaterialOutUOM = findUom.ID;
    newItem.PriceUOM = findUom.ID;
    newItem.PurchaseUOM = findUom.ID;
    newItem.SalesUOM = findUom.ID;
    newItem.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
    newItem.Description = desc;
    newItem.SubmitOn = DateTime.Now;
    newItem.SubmitBy = submitBy;
    newItem.StateTime = DateTime.Now;
    newItem.StateUser = findUser.ID;
    newItem.State = 2;
    return newItem;
}
```

## 新增

```cs
void Create(CBO.SCM.Item.ItemMasterData input)
{
    UFIDA.U9.CBO.SCM.Item.Proxy.CreateItemSRVProxy proxy = new CBO.SCM.Item.Proxy.CreateItemSRVProxy();
    proxy.Item = input;
    proxy.Do();
}
```