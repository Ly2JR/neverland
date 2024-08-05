---
title: 退回处理
date: 2024-08-02
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

## 新增

```cs
bool Create(string docType, string customer, string saleDept, string seller, string item, string wh, decimal qty, out DocKeyDTOData key, out string errMsg)
{
    errMsg = string.Empty;
    key = null;
    try
    {
        IContext context = ContextManager.Context;
        var org = Base.Context.LoginOrg;
        var findCustomer = Customer.Finder.Find("Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(org.ID), new OqlParam(customer) });
        if (findCustomer == null)
        {
            errMsg = $"客户编码:{customer}不存在";
            return false;
        }

        UFIDA.U9.ISV.SM.Proxy.CreateRMASRVProxy proxy = new UFIDA.U9.ISV.SM.Proxy.CreateRMASRVProxy();
        proxy.ContextDTO = new CBO.Pub.Controller.ContextDTOData();
        proxy.ContextDTO.CultureName = "zh-CN";
        proxy.ContextDTO.EntCode = Convert.ToString(context["EnterpriseID"]);
        proxy.ContextDTO.UserID = Convert.ToInt64(context["UserID"]);
        proxy.ContextDTO.OrgID = Convert.ToInt64(context["OrgID"]);
        proxy.ContextDTO.OrgCode = Convert.ToString(context["OrgCode"]);
        proxy.ContextDTO.UserCode = Convert.ToString(context["UserCode"]);
        proxy.RMADTOs = new List<RMADTOData>();
        var newRma = new RMADTOData();
        newRma.DocumentTypeDTO = new Base.DTOs.IDCodeNameDTOData()
        {
            Code = docType
        };
        newRma.CustomerDTO = new Base.DTOs.IDCodeNameDTOData()
        {
            Code = customer
        };
        newRma.BusinessDate = DateTime.Now;
        newRma.SellerDTO = new Base.DTOs.IDCodeNameDTOData()
        {
            Code = seller
        };
        newRma.SaleDeptDTO = new Base.DTOs.IDCodeNameDTOData()
        {
            Code = saleDept
        };
        newRma.AccountOrgDTO = new Base.DTOs.IDCodeNameDTOData()
        {
            Code = org.Code
        };
        newRma.InvoiceOrgDTO = new Base.DTOs.IDCodeNameDTOData()
        {
            Code = org.Code
        };
        newRma.SettlementOrgDTO = new Base.DTOs.IDCodeNameDTOData()
        {
            Code = org.Code
        };
        newRma.RMALines = new List<RMALineDTOData>();
        var findItemMaster = ItemMaster.Finder.Find("Org=@Org and Code1=@Code1", new OqlParam[] { new OqlParam(org.ID), new OqlParam(item) });
        if (findItemMaster == null)
        {
            errMsg = $"参考料号:{item}不存在";
            return false;
        }
        var newLine = new RMALineDTOData();
        newLine.WarehouseDTO = new Base.DTOs.IDCodeNameDTOData()
        {
            Code = wh
        };
        newLine.CustomerItemCode = org.Code;
        newLine.CustomerItemName = org.Name;
        newLine.ItemInfo = new CBO.SCM.Item.ItemInfoData();
        newLine.ItemInfo.ItemID = findItemMaster.ID;

        newLine.ApplyQtyTU1 = qty;
        newLine.RtnQtyTU1 = qty;
        newLine.ApplyQtyPU = qty;
        newLine.RtnQtyPU = qty;
        newLine.RtnPice = 1;

        newLine.OrgDTO = new Base.DTOs.IDCodeNameDTOData()
        {
            Code = org.Code
        };
        newLine.ShipperOrgDTO = new Base.DTOs.IDCodeNameDTOData()
        {
            Code = org.Code
        };
        newLine.RcvOrgDTO = new Base.DTOs.IDCodeNameDTOData()
        {
            Code = org.Code
        };
        newRma.RMALines.Add(newLine);
        proxy.RMADTOs.Add(newRma);
        var dto = proxy.Do();
        if (dto.Count > 0)
        {
            key = dto[0];
        }
        return true;
    }
    catch (Exception ex)
    {
        errMsg = ex.Message;
    }
    return false;
}
```

## 审核

```cs
bool Audit(ISV.SM.DocKeyDTOData key,out string errMsg)
{
    errMsg = string.Empty;
    try
    {
        UFIDA.U9.ISV.SM.Proxy.AuditRMASRVProxy proxy = new ISV.SM.Proxy.AuditRMASRVProxy();
        proxy.RMAKeys = new List<ISV.SM.DocKeyDTOData>();
        var dto = new ISV.SM.DocKeyDTOData();
        proxy.RMAKeys.Add(key);
        proxy.Do();
        return true;
    }
    catch(Exception ex)
    {
        errMsg = ex.Message;
    }
    return false;
}
```

## 删除

```cs
bool Delete(ISV.SM.DocKeyDTOData key,out string errMsg)
{
    errMsg = string.Empty;
    try
    {
        UFIDA.U9.ISV.SM.Proxy.DeleteRMASRVProxy proxy = new ISV.SM.Proxy.DeleteRMASRVProxy();
        proxy.RMAKeys = new List<ISV.SM.DocKeyDTOData>();
        var dto = new ISV.SM.DocKeyDTOData();
        proxy.RMAKeys.Add(key);
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