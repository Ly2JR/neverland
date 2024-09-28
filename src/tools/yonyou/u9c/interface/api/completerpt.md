---
title: 完工报告
date: 2024-08-13
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.ISV.CostAdjustISV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 完工报告数据

```cs
CompRptDTOData Create(string docType,int direction,string performingOrg,int whShipmentReason,string rcvOrg,string rcvWh, string srcDoc,string srcCompDoc,decimal eligibleQty,decimal scrapQty, string item){

    var input = new CompRptDTOData();

    var findPerformingOrg = Base.Organization.Organization.FindByCode(performingOrg);
    if (findPerformingOrg == null) throw new Exception($"执行组织[{performingOrg}]不存在");

    var findItemMaster = ItemMaster.Finder.Find("Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(findPerformingOrg.ID), new OqlParam(item) });
    if (findItemMaster == null) throw new Exception($"料号[{item}]不存在");

    input.BusinessDate = DateTime.Now;
    input.MO = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.MO.Code = srcDoc;
    input.CompleteDocType = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.CompleteDocType.Code = docType;
    input.Direction = direction;
    UFIDA.U9.MO.Complete.CompleteRpt findCompleteRpt=null;
    if (direction == 1)//出库
    {
        findCompleteRpt = UFIDA.U9.MO.Complete.CompleteRpt.Finder.Find("Org=@Org and DocNo=@DocNo", new OqlParam[] { new OqlParam(findPerformingOrg.ID), new OqlParam(srcCompDoc) });
        if (findPerformingOrg == null) throw new Exception($"执行组织编码[{performingOrg}]完工报告单号[{srcCompDoc}]不存在");
        input.WhshipmentReason = whShipmentReason;
    }
    input.CompleteDate = DateTime.Now;
    input.Org = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.Org.Code = performingOrg;
    input.OwnerOrg = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.OwnerOrg.Code = performingOrg;
    input.RcvOrg = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.RcvOrg.Code = rcvOrg;
    input.RcvWh = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.RcvWh.Code = rcvWh;

    if (eligibleQty > 0)//合格
    {
        input.CompleteQtyCoUOM = eligibleQty + scrapQty;
        input.EligibleQty = eligibleQty;
    }
    if (scrapQty > 0)//不合格
    {
        input.ScrapQty = scrapQty;
        input.ScrapReason = scrapReason;
        input.ScrapQtyCoUOM = scrapQty;
    }
    input.CompleteQty = input.EligibleQty + input.ScrapQty;
    input.ItemMaster = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.ItemMaster.Code = findItemMaster.Code;
    input.ActualRcvTime = DateTime.Now;
    input.CompleteRptRcvLines = new List<CompRptRcvLineDTOData>();
    var newLine = new CompRptRcvLineDTOData();
    if (direction == 1)
    {
        //根据指定完工报工进行出库
        newLine.SourceCompleteRptRcv = new CBO.Pub.Controller.CommonArchiveDataDTOData();
        newLine.SourceCompleteRptRcv.Code = srcCompDoc;
        newLine.SourceCompleteRptRcvLine = new CBO.Pub.Controller.CommonArchiveDataDTOData();
        if (findCompleteRpt != null)
        {
            foreach(var line in findCompleteRpt.CompleteRptRcvLines)
            {
                if (line.StorageType == CBO.Enums.StorageTypeEnum.Useable)
                {
                    newLine.SourceCompleteRptRcvLine.ID = line.ID;
                    break;
                }
            }
        }
    }
    newLine.Wh = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.Wh.Code = rcvWh;
    if (scrapQty == 0m)
    {
        newLine.StorageType = 4;
        newLine.RcvQtyByProductUOM = input.EligibleQty;
        newLine.RcvQtyByWhUOM = input.EligibleQty;
        newLine.RcvQtyByCostUOM = input.EligibleQty;
    }
    else
    {
        newLine.StorageType = 3;
        newLine.RcvQtyByProductUOM = input.ScrapQty;
        newLine.RcvQtyByWhUOM = input.ScrapQty;
        newLine.RcvQtyByCostUOM = input.ScrapQty;
    }
    input.CompleteRptRcvLines.Add(newLine);
    return input;
}
```

## 根据生产订单反推完工报告数据

```cs
class CompleteRptSort : IComparer<MO.Complete.CompleteRpt>
{
    public int Compare(CompleteRpt x, CompleteRpt y)
    {
        if (y.BusinessDate.CompareTo(x.BusinessDate) != 0)
        {
            return y.BusinessDate.CompareTo(x.BusinessDate);
        }
        else if (y.CompleteQty.CompareTo(x.CompleteQty) != 0)
        {
            return y.CompleteQty.CompareTo(x.CompleteQty);
        }
        else
        {
            return 0;
        }
    }
}
```

```cs
CompRptDTOData Create(string docType,int direction,string performingOrg,int whShipmentReason,string rcvOrg,string rcvWh, string srcDoc,decimal eligibleQty,decimal scrapQty, string item)
{
    input = new CompRptDTOData();

    var findPerformingOrg = Base.Organization.Organization.FindByCode(performingOrg);
    if (findPerformingOrg == null) throw new Exception($"执行组织[{performingOrg}]不存在");

    var findItemMaster = ItemMaster.Finder.Find("Org=@Org and Code1=@Code1", new OqlParam[] { new OqlParam(findPerformingOrg.ID), new OqlParam(item) });
    if (findItemMaster == null) throw new Exception($"参考料号1[{item}]不存在");

    input.BusinessDate = businessDate;
    input.MO = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.MO.Code = srcDoc;
    input.CompleteDocType = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.CompleteDocType.Code = docType;
    input.Direction = direction;
    if (direction == 1)//出库
    {
        input.WhshipmentReason = whShipmentReason;
    }
    input.CompleteDate = businessDate;
    input.Org = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.Org.Code = performingOrg;
    input.OwnerOrg = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.OwnerOrg.Code = performingOrg;
    input.RcvOrg = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.RcvOrg.Code = rcvOrg;
    input.RcvWh = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.RcvWh.Code = rcvWh;

    if (eligibleQty > 0)
    {
        input.CompleteQtyCoUOM = eligibleQty + scrapQty;
        input.EligibleQty = eligibleQty;
    }
    if (scrapQty > 0)
    {
        input.ScrapQty = scrapQty;
        input.ScrapReason = scrapReason;
        input.ScrapQtyCoUOM = scrapQty;
    }

    input.CompleteQty = input.EligibleQty + input.ScrapQty;
    input.ItemMaster = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.ItemMaster.Code = findItemMaster.Code;
    input.ActualRcvTime = businessDate;
    input.CompleteRptRcvLines = new List<CompRptRcvLineDTOData>();
    if (direction == 0)
    {
        var newLine = new CompRptRcvLineDTOData();
        newLine.Wh = new CBO.Pub.Controller.CommonArchiveDataDTOData();
        newLine.Wh.Code = rcvWh;
        if (scrapQty == 0m)
        {
            newLine.StorageType = 4;
            newLine.RcvQtyByProductUOM = input.EligibleQty;
            newLine.RcvQtyByWhUOM = input.EligibleQty;
            newLine.RcvQtyByCostUOM = input.EligibleQty;
        }
        else
        {
            newLine.StorageType = 3;
            newLine.RcvQtyByProductUOM = input.ScrapQty;
            newLine.RcvQtyByWhUOM = input.ScrapQty;
            newLine.RcvQtyByCostUOM = input.ScrapQty;
        }
        newLine.Remark = memo;
        input.CompleteRptRcvLines.Add(newLine);
    }
    else if (direction == 1)
    {
        var storageType = CBO.Enums.StorageTypeEnum.Empty;
        var flag = 0;
        var remainQty =0M ;
        if (input.EligibleQty > 0)
        {
            remainQty=input.EligibleQty;
            flag += 1;
            storageType= CBO.Enums.StorageTypeEnum.Useable;
        }
        if (input.ScrapQty > 0)
        {
            remainQty = input.ScrapQty;
            flag +=1;
            storageType = CBO.Enums.StorageTypeEnum.Wasted;
        }
        if (flag == 2) throw new Exception ($"完工报告出库时不允许同时存在合格数量[{input.EligibleQty}]和报废数量[{input.ScrapQty}]");
        if (remainQty == 0m) throw new Exception($"完工报告出库时数量不能为零数量[{input.EligibleQty}]+报废数量[{input.ScrapQty}]");

        var findComplateRpt = UFIDA.U9.MO.Complete.CompleteRpt.Finder.FindAll("DocState=3 and Direction=0 and Org=@Org and MO.DocNo=@DocNo and convert(nvarchar(7),businessdate,121)=@now and Item.Code1=@Code1", new OqlParam[] { new OqlParam(findPerformingOrg.ID), new OqlParam(srcDoc), new OqlParam(businessDate.ToString("yyyy-MM")), new OqlParam(item) });
        if (findComplateRpt == null||findComplateRpt.Count==0) throw new Exception($"没有找到组织[{performingOrg}]生产订单[{srcDoc}]业务日期[{businessDate.ToString("yyyy-MM")}]参考料号1[{item}]的完工报告记录");

        findComplateRpt.Sort(new CompleteRptSort()); //最新入库时间倒序

        var lineNum = 10;
        foreach (var complete in findComplateRpt)
        {
            if (remainQty == 0m) continue;
            foreach (var line in complete.CompleteRptRcvLines)
            {
                if (line.RcvQtyByProductUOM - line.TotalAntiRcvQtyByProductUOM == 0) continue;
                if (remainQty == 0m) continue;
                if (line.StorageType != storageType) continue;

                var newLine = new CompRptRcvLineDTOData();
                newLine.LineNum = lineNum;
                newLine.SourceCompleteRptRcv = new CBO.Pub.Controller.CommonArchiveDataDTOData();
                newLine.SourceCompleteRptRcv.Code = complete.DocNo;
                newLine.SourceCompleteRptRcvLine = new CBO.Pub.Controller.CommonArchiveDataDTOData();
                var qty = line.RcvQtyByProductUOM - line.TotalAntiRcvQtyByProductUOM;
                if (remainQty < qty)
                {
                    qty = remainQty;
                }
                remainQty -= qty;
                newLine.SourceCompleteRptRcvLine.ID = line.ID;
                newLine.Wh = new CBO.Pub.Controller.CommonArchiveDataDTOData();
                newLine.Wh.Code = rcvWh;
                newLine.StorageType = 4;
                newLine.RcvQtyByProductUOM = qty;
                newLine.RcvQtyByWhUOM = qty;
                newLine.RcvQtyByCostUOM = qty;
                newLine.Remark = memo;
                input.CompleteRptRcvLines.Add(newLine);
                lineNum += 10;
            }
        }
        if (input.CompleteRptRcvLines.Count == 0) throw new Exception("没有可以出库的记录,请检查");
    }
    return input;
}
```

## 新增

```cs
List<ISV.MO.CompRptKeyDTOData> Create(CompRptDTOData input)
{
    UFIDA.U9.ISV.MO.Proxy.CreateCompRptSrvProxy proxy = new ISV.MO.Proxy.CreateCompRptSrvProxy();
    proxy.CompRptDTOs = new List<CompRptDTOData>();
    proxy.CompRptDTOs.Add(input);
    return proxy.Do();
}
```

## 审核

```cs
void Approve(ISV.MO.CompRptKeyDTOData input){
    UFIDA.U9.ISV.MO.Proxy.ApproveCompleteRpt4ExternalSrvProxy proxy = new ISV.MO.Proxy.ApproveCompleteRpt4ExternalSrvProxy();
    proxy.DocNoList = new List<CompRptKeyDTOData>();
    proxy.DocNoList.Add(input);
    proxy.Do();
}
```