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

## 新增

```cs
List<ISV.MO.CompRptKeyDTOData> Create(string docType,int direction,string performingOrg,int whShipmentReason,string rcvOrg,string rcvWh, string srcDoc,string srcCompDoc,decimal eligibleQty,decimal scrapQty, string item){

    var input = new CompRptDTOData();

    var findPerformingOrg = Base.Organization.Organization.FindByCode(performingOrg);
    if (findPerformingOrg == null) throw new Exception($"执行组织[{performingOrg}]不存在");

    var findItemMaster = ItemMaster.Finder.Find("Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(findPerformingOrg.ID), new OqlParam(item) });
    if (findItemMaster == null) throw new Exception($"料号[{item}]不存在");

    //input.SourceDoc = new MOSourceDocData();
    //input.SourceDoc.SrcDocNo = srcDoc;
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

    UFIDA.U9.ISV.MO.Proxy.CreateCompRptSrvProxy proxy = new ISV.MO.Proxy.CreateCompRptSrvProxy();
    proxy.CompRptDTOs = new List<CompRptDTOData>();
    proxy.CompRptDTOs.Add(input);
    return proxy.Do();
}
```

## 审核

```cs
void Approve(ISV.MO.CompRptKeyDTOData key){
    UFIDA.U9.ISV.MO.Proxy.ApproveCompleteRpt4ExternalSrvProxy proxy = new ISV.MO.Proxy.ApproveCompleteRpt4ExternalSrvProxy();
    proxy.DocNoList = new List<CompRptKeyDTOData>();
    proxy.DocNoList.Add(key);
    proxy.Do();
}
```