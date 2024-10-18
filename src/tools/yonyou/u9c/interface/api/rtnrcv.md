---
title: 退货
date: 2024-10-09
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

主要引用三个文件`UFIDA.U9.ISV.PM.PMISV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 制单

### 无来源

#### 无来源数据组织

```cs
ISV.RCV.DTO.OBAReceivementDTOData Get(string purOrg,string docType,string supplier,string rcvDept,string storeAddress,string storeMan,string item,decimal qty)
{
   
    var findPurOrg = Base.Organization.Organization.Finder.Find("Code=@Code", new OqlParam[] {new OqlParam(purOrg)});
    if (findPurOrg == null) throw new Exception($"采购组织[{purOrg}]不存在");

    var findSupplier = Supplier.Finder.Find($"Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(purOrg.ID), new OqlParam(supplier)});
    if (findSupplier == null) throw new Exception($"采购组织[{findPurOrg.Code}]供应商编码[{supplier}]不存在");

    var findRcvDept = Department.Finder.Find($"Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(purOrg.ID), new OqlParam(rcvDept)});
    if (findRcvDept == null) throw new Exception($"采购组织[{findPurOrg.Code}]收货部门编码[{rcvDept}]不存在");

    var findWh = Warehouse.Finder.Find($"Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(purOrg.ID), new OqlParam(storeAddress)});
    if (findWh == null) throw new Exception($"采购组织[{findPurOrg.Code}]存储地点编码[{storeAddress}]不存在");

    var findWhMan = UFIDA.U9.CBO.HR.Operator.Operators.Finder.Find($"Org=@Org and Code=@Code and OperatorLine.OperatorType=@OperatorType", new OqlParam[] { new OqlParam(findPurOrg.ID), new OqlParam(storeMan),new OqlParam(2)});
    if (findWhMan == null) throw new Exception($"采购组织[{findPurOrg.Code}]库管员编码[{storeMan}]不存在");

    var findDocType= UFIDA.U9.PM.Pub.RcvDocType.FindByCode(findPurOrg, docType);
    if (findDocType == null) throw new Exception($"采购组织[{findPurOrg.Code}]单据类型编码[{docType}]不存在");

    var findItem = ItemMaster.Finder.Find($"Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(findPurOrg.ID), new OqlParam(item)})
    if (findItem == null) throw new Exception($"料品[{item}]不存在";)

    input = new ISV.RCV.DTO.OBAReceivementDTOData();
    input.PurOrg = new BESimp4UIDTOData();
    input.PurOrg.Code = findPurOrg.Code;
    input.OrgCode = findPurOrg.Code;
    input.AccountOrg = new BESimp4UIDTOData();
    input.AccountOrg.Code = findPurOrg.Code;
    input.RcvDocType = new BESimp4UIDTOData();
    input.RcvDocType.Code = findDocType.Code;
    input.ReceivementType = findDocType.ReceivementType.Value;
    input.ConfirmMode = findDocType.ConfirmMode.Value;
    input.RtnType = findDocType.RtnType.Value;
    input.BusinessDate = DateTime.Now;
    input.Supplier = new SupplierMISCInfoData();
    input.Supplier.Code = findSupplier.Code;
    input.BizType = 316;
    input.SrcDocType = 0;
    input.Payer = new SupplierMISCInfoData();
    input.Payer.Code = findSupplier.Code;
    if (findSupplier.TaxSchedule != null)
    {
        input.TaxSchedule = new BESimp4UIDTOData();
        input.TaxSchedule.Code = findSupplier.TaxSchedule.Code;
        input.TaxRate = findSupplier.TaxSchedule.TaxScheduleTaxs[0].Tax.TaxRate;
    }               
    if (findSupplier.PaymentTerm != null)
    {
        input.PaymentTerm = new BESimp4UIDTOData();
        input.PaymentTerm.ID = findSupplier.PaymentTerm.ID;
        input.PaymentTerm.Code = findSupplier.PaymentTerm.Code;
    }
    if (findSupplier.APConfirmTerm != null)
    {
        input.ConfirmTerm = new BESimp4UIDTOData();
        input.ConfirmTerm.ID = findSupplier.APConfirmTerm.ID;
        input.ConfirmTerm.Code = findSupplier.APConfirmTerm.Code;
    }
    input.RcvLines = new List<ISV.RCV.DTO.OBARcvLineDTOData>();
    var newLine = new ISV.RCV.DTO.OBARcvLineDTOData();
    newLine.SrcDocType = input.SrcDocType;
    newLine.ConfirmDate = inStoreDate;
    newLine.PurOrg = new BESimp4UIDTOData();
    newLine.PurOrg.Code = findPurOrg.Code;
    newLine.OwnOrg = new BESimp4UIDTOData();
    newLine.OwnOrg.Code = findPurOrg.Code;
    newLine.AccountOrg = new BESimp4UIDTOData();
    newLine.AccountOrg.Code = findPurOrg.Code;
    newLine.RequireOrg = new BESimp4UIDTOData();
    newLine.RequireOrg.Code = findPurOrg.Code;
    newLine.ItemInfo = new ItemInfoData();
    newLine.ItemInfo.ItemCode = findItem.Code;
    newLine.Wh = new BESimp4UIDTOData();
    newLine.Wh.Code = findWh.Code;
    newLine.RcvDept = new BESimp4UIDTOData();
    newLine.RcvDept.Code = findRcvDept.Code;
    newLine.WhMan = new BESimp4UIDTOData();
    newLine.WhMan.ID = findWhMan.ID;
    newLine.WhMan.Code = findWhMan.Code;
    newLine.WhMan.Name = findWhMan.Name;
    newLine.ConfirmSupplier = new SupplierMISCInfoData();
    newLine.ConfirmSupplier.Code = findSupplier.Code;
    if (findSupplier.DefaultShipTo != null)
    {
        newLine.ShipToSite = new SupplierSiteMISCInfoData();
        newLine.ShipToSite.Code = findSupplier.DefaultShipTo.Code;
        newLine.ShipToSite.SupplierSite = findSupplier.DefaultShipToKey.ID;
        newLine.PayerSite = new SupplierSiteMISCInfoData();
        newLine.PayerSite.Code = findSupplier.DefaultShipTo.Code;
        newLine.PayerSite.SupplierSite = findSupplier.DefaultShipToKey.ID;
    }
    if (findSupplier.DefaultBillTo!=null)
    {
        newLine.BillToSite = new SupplierSiteMISCInfoData();
        newLine.BillToSite.Code = findSupplier.DefaultBillTo.Code;
        newLine.BillToSite.SupplierSite = findSupplier.DefaultBillToKey.ID;
    }
    newLine.Payer = input.Payer;
    newLine.PaymentTerm = input.PaymentTerm;
    newLine.ConfirmTerm = input.ConfirmTerm;
    newLine.ConfirmMode = -1;
    newLine.RejectQtyTU = qty;
    newLine.RtnFillQtyTU = qty;
    newLine.FreeReason = -1;
    newLine.RejectReason = -1;
    newLine.FinallyPriceTC = 1;
    newLine.MatchLayer = 3;
    input.RcvLines.Add(newLine);

    return input;
}
```

#### 无来源制单

```cs
List<ReceivementData> Create(ISV.RCV.DTO.OBAReceivementDTOData input)
{ 
  UFIDA.U9.ISV.RCV.Proxy.CreateRCVSRVProxy proxy = new ISV.RCV.Proxy.CreateRCVSRVProxy();
  proxy.RCVList = new List<ISV.RCV.DTO.OBAReceivementDTOData>();
  proxy.RCVList.Add(input);
  return proxy.Do();
}
```

### 来源收货单

#### 来源收货单数据组织

```cs
RtnRcvTransformDTOData Get(string srcDocNo,long srcDocId,int srcDocLineNo,long wh,string whMan,string rcvDept,decimal qty){
  var newLine = new RtnRcvTransformDTOData();
  newLine.SrcRcvDocNo = srcDocNo;
  newLine.SrcRcvLine = srcDocId;
  newLine.SrcRcvDocLineNo = srcDocLineNo;
  newLine.WhMan = new Base.DTOs.IDCodeNameDTOData();
  newLine.WhMan.Code = whMan;
  newLine.RtnWh = wh;
  newLine.RcvDept = new Base.DTOs.IDCodeNameDTOData();
  newLine.RcvDept.Code = rcvDept;
  newLine.RcvBusinessDate = DateTime.Now;

  newLine.RejectQty = new DoubleQuantityData();
  newLine.RejectQty.Amount1 = qty;
  newLine.RtnDeductQty = new DoubleQuantityData();
  newLine.RtnDeductQty.Amount1 = qty;
  return newLine;
}
```

#### 来源收货单制单

```cs
List<RcvToRtnRcvResultDTOData> CreateSrc(RtnRcvTransformDTOData input, out ReceivementData key, out string errMsg)
{
    UFIDA.U9.ISV.RCV.Proxy.RcvToRtnRcvISVProxy proxy = new ISV.RCV.Proxy.RcvToRtnRcvISVProxy();
    proxy.ConfirmDate = DateTime.Now;
    proxy.RcvDocTypeCode = "RCV201";
    proxy.TransformDTOs = new List<RtnRcvTransformDTOData>();
    proxy.TransformDTOs.Add(input);
    return proxy.Do();
}
```

## 提交

```cs{4}
void Submit(ReceivementData key)
{
    UFIDA.U9.ISV.RCV.Proxy.ApproveRCVSRVProxy proxy = new ISV.RCV.Proxy.ApproveRCVSRVProxy();
    proxy.ActType = 7;
    proxy.RCVLogicKeyINFOs = new List<RCVLogicKeyINFOData>();
    var input = new RCVLogicKeyINFOData();
    input.DocNo = key.DocNo;
    input.Org = key.Org;
    input.RcvID = key.ID;
    proxy.RCVLogicKeyINFOs.Add(input);
    proxy.Do();
}
```

## 审核

```cs{4}
void Approve(ReceivementData key)
{
    UFIDA.U9.ISV.RCV.Proxy.ApproveRCVSRVProxy proxy = new ISV.RCV.Proxy.ApproveRCVSRVProxy();
    proxy.ActType = 8;
    proxy.RCVLogicKeyINFOs = new List<RCVLogicKeyINFOData>();
    var input = new RCVLogicKeyINFOData();
    input.DocNo = key.DocNo;
    input.Org = key.Org;
    input.RcvID = key.ID;
    proxy.RCVLogicKeyINFOs.Add(input);
    proxy.Do();
}
```