---
title: U9C UI价格重算
date: 2024-09-09
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U9C
---

有时可能遇到需要在UI界面按钮执行之前改数据的问题，这时就需要通过UI插件的方式实现。

比如标准采购更改最终价的问题，额外需要在加一些费用。

实际案例，标准采购价格需要加上额外费用，额外费用维护在货源表字段字段中

前提参考[UI插件](ui_plugin.md)

```cs {6}
public override void BeforeEventProcess(IPart Part, string eventName, object sender, EventArgs args, out bool executeDefault)
{
    UFSoft.UBF.UI.WebControlAdapter.UFWebButton4ToolbarAdapter webButton = sender as UFSoft.UBF.UI.WebControlAdapter.UFWebButton4ToolbarAdapter;
    if (webButton != null && webButton.Action == "SaveClick")
    {
        CalcPrice(Part);
    }

    base.BeforeEventProcess(Part, eventName, sender, args, out executeDefault);
}

void CalcPrice(IPart Part)
{
    var strongPart= Part as UFIDA.U9.PM.PurchaseOrderUIModel.PurchaseOrderMainUIFormWebPart;
    if (strongPart == null) return;
    var dataGrid4 = strongPart.GetUFControlByName(strongPart.TopLevelContainer, "DataGrid4") as IUFDataGrid;
    if (dataGrid4 == null) return;
    var order= strongPart.Model.PurchaseOrder.Records[0] as PM.PurchaseOrderUIModel.PurchaseOrderRecord;
    if (order == null) return;
    var ordreLines = strongPart.Model.PurchaseOrder_POLines;
    //相同料品行处理
    IDictionary<long, decimal> itemQtyDic = new Dictionary<long, decimal>();
    foreach (PM.PurchaseOrderUIModel.PurchaseOrder_POLinesRecord line in ordreLines.Records)
    {
        var qty=line.ReqQtyTU ?? 0m;
        if (qty == 0m) continue;

        var ds= GetLimitData(order.Supplier_Code, line.ItemInfo_ItemID);
        if (ds == null || ds.Tables.Count == 0 || ds.Tables[0].Rows.Count == 0)
        {
            continue; //没有维护价目表
        }
        var id = Convert.ToInt64(ds.Tables[0].Rows[0]["ID"]);
        var totalCost = Convert.ToDecimal(ds.Tables[0].Rows[0]["DescFlexField_PrivateDescSeg1"]);
        var limitMaxQty = Convert.ToDecimal(ds.Tables[0].Rows[0]["DescFlexField_PrivateDescSeg2"]);
        if (limitMaxQty == 0m) continue;
        //var maxQty = Convert.ToDecimal(ds.Tables[0].Rows[0]["DescFlexField.PrivateDescSeg3"]);
        var startDate = Convert.ToDateTime(ds.Tables[0].Rows[0]["DescFlexField_PrivateDescSeg4"]);
        if (order.BusinessDate < startDate) continue;

        var cost = totalCost / limitMaxQty;//单个分摊费用
        //获取历史采购订单数量
        var sumQty = 0m;
        var poDs = GetPoQty(order.ID,order.Supplier_Code, line.ItemInfo_ItemID, startDate);
        if (poDs != null && poDs.Tables.Count != 0 && poDs.Tables[0].Rows.Count != 0)
        {
            sumQty = Convert.ToDecimal(poDs.Tables[0].Rows[0]["Qty"]);
        }
        //获取价目表
        var price = 0m;
        var priceDs = GetPrice(order.Supplier_Supplier,line.ItemInfo_ItemID);
        if (priceDs != null && priceDs.Tables.Count != 0 && priceDs.Tables[0].Rows.Count != 0)
        {
            price = Convert.ToDecimal(priceDs.Tables[0].Rows[0]["price"]);
        }
        var sumHistoryQty = 0m;
        if (itemQtyDic.ContainsKey(line.ItemInfo_ItemID.Value))
        {
            sumHistoryQty = itemQtyDic[line.ItemInfo_ItemID.Value];
        }
        var remainQty= limitMaxQty - sumQty- sumHistoryQty;
        if (remainQty <= 0) continue;

        var overQty = line.ReqQtyTU.Value - remainQty;
        if(overQty<=0) //限制内的数量取磨具费+价目表价格
        {
            UIActionEventArgs actionEvent = new UIActionEventArgs();
            Hashtable hash = new Hashtable();
            hash.Add("RECORDID", line.ID);//行ID
            hash.Add("FINALLYPRICE_OLD", line.FinallyPriceTC ?? 0m);
            actionEvent.Tag = hash;
            line.FinallyPriceTC =price+ cost;
            line.NetFinallyPriceTC = line.FinallyPriceTC;
            line.ActionType = 17;
            line.PriceSource = 1;
            strongPart.Action.GridFinallyPriceTCChange_Extend(dataGrid4, actionEvent);
        }
        else
        {
            throw new Exception($"行[{line.DocLineNo}]料品[{line.ItemInfo_ItemName}]需求数量[{line.ReqQtyTU}]+累计数量[{Math.Round(sumQty,2)}]={Math.Round(line.ReqQtyTU.Value+ sumHistoryQty + sumQty,2)}超货源表上限数量[{Math.Round(limitMaxQty,2)}]，需要进行拆行处理");
        }

        if (itemQtyDic.ContainsKey(line.ItemInfo_ItemID.Value))
        {
            itemQtyDic[line.ItemInfo_ItemID.Value] += line.ReqQtyTU.Value;
        }
        else
        {
            itemQtyDic.Add(line.ItemInfo_ItemID.Value, line.ReqQtyTU.Value);

            UpdateSupplierSource(id, line.FinallyPriceTC.Value);
        }
    }
}
```