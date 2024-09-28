---
title: 生产领料
date: 2024-08-15
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.ISV.MO.MOSV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 参照生产订单领料数据

```cs
IssueDTOData Create(string docType,string issueOrg,string handleDept,string handlePerson,string srcDoc,long srcDocId,decimal issueQty,string wh)
{
    var input = new IssueDTOData();
    input.BusinessDate = DateTime.Now;
    input.BusinessType = 47;
    input.DocType = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.DocType.Code = docType;
    input.IssueOrg = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.IssueOrg.Code = issueOrg;
    input.IssueType = 0;
    input.Dept = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.Dept.Code = handleDept;
    input.Employee = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.Employee.Code = handlePerson;
    input.PickListDTOs = new List<PickListDTOData>();
    input.MOs = new List<CBO.Pub.Controller.CommonArchiveDataDTOData>();
    //表体
    var findMo=UFIDA.U9.MO.MO.MO.Finder.Find("DocNo=@DocNo",new OqlParam[] {new OqlParam(srcDoc) });
    if (findMo == null) throw new Exception($"生产订单[{srcDoc}]不存在");
    if (!input.MOs.Exists(it => it.ID == findMo.ID))
    {
        input.MOs.Add(new CBO.Pub.Controller.CommonArchiveDataDTOData() { ID = findMo.ID });
    }
    var newLine = new PickListDTOData();
    newLine.MO = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    MO.MO.MOPickList findPickList = null;
    foreach(var piclList in findMo.MOPickLists)
    {
        if (piclList.ID == srcDocId)
        {
            findPickList = piclList;
            break;
        }
    }
    if (findPickList == null) throw new Exception($"没有找到生产订单[{srcDoc}]备料表ID[{srcDocId}]");
    newLine.MOPickList = findPickList.ID;
    newLine.ACDType = 0;
    //newLine.BenifitMO = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.CostUOMQty = issueQty;
    newLine.IssueQty = issueQty;
    newLine.IssuedQty = issueQty;
    newLine.WhUOMQty = issueQty;
    newLine.IssueDept = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.IssueWh = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.IssueWh.Code = wh;
    newLine.OwnerOrg = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.OwnerOrg.Code = issueOrg;
    newLine.StorageType = 4;
    newLine.Item = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.Item.Code = findPickList.ItemCode;
    newLine.CostUOM = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.CostUOM.Code = findPickList.CostUOM.Code;
    newLine.IssueUOM = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.IssueUOM.Code = findPickList.IssueUOM.Code;
    newLine.WhUOM = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.PickListDTOs.Add(newLine);
    
    return input;
}
```

## 未备料领料

```cs
IssueDTOData Create(string docType,string issueOrg,string handleDept,string handlePerson,string srcDoc,string itemCode,decimal issueQty,string wh)
{
    var findIssueOrg = Base.Organization.Organization.FindByCode(issueOrg);
    if (findIssueOrg == null) throw new Exception($"发料组织[{issueOrg}]不存在");

    var input = new IssueDTOData();
    input.BusinessDate = DateTime.Now;
    input.BusinessType = 47;
    input.DocType = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.DocType.Code = docType;
    input.IssueOrg = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.IssueOrg.Code = issueOrg;
    input.IssueType = 0;
    input.Dept = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.Dept.Code = handleDept;
    input.Employee = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.Employee.Code = handlePerson;
    input.PickListDTOs = new List<PickListDTOData>();
    input.MOs = new List<CBO.Pub.Controller.CommonArchiveDataDTOData>();
    //表体
    var findMo=UFIDA.U9.MO.MO.MO.Finder.Find("DocNo=@DocNo",new OqlParam[] {new OqlParam(srcDoc) });
    if (findMo == null) throw new Exception($"生产订单[{srcDoc}]不存在");
    var findItemMaster = ItemMaster.Finder.Find("Org=@Org and Code=@Code", new OqlParam[] { new OqlParam(findIssueOrg.ID), new OqlParam(itemCode) });
    if (findItemMaster == null) throw new Exception($"料品[{itemCode}]不存在");

    if (!input.MOs.Exists(it => it.ID == findMo.ID))
    {
        input.MOs.Add(new CBO.Pub.Controller.CommonArchiveDataDTOData() { ID = findMo.ID });
    }
    var newLine = new PickListDTOData();
    newLine.MO = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.MO.ID = findMo.ID;
    newLine.MO.Code = findMo.DocNo;
    newLine.IsNoPickLine = true;

    newLine.ACDType = 0;
    newLine.CostUOMQty = issueQty;
    newLine.IssueQty = issueQty;
    newLine.IssuedQty = issueQty;
    newLine.WhUOMQty = issueQty;
    newLine.IssueDept = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.IssueWh = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.IssueWh.Code = wh;
    newLine.OwnerOrg = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.OwnerOrg.Code = issueOrg;
    newLine.StorageType = 4;
    newLine.Item = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.Item.Code = findItemMaster.Code;
    newLine.CostUOM = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.CostUOM.Code = findItemMaster.CostUOM.Code;
    newLine.IssueUOM = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newLine.IssueUOM.Code = findItemMaster.MaterialOutUOM.Code;
    newLine.WhUOM = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    input.PickListDTOs.Add(newLine);
    return input;
}
```

## 新增

```cs
List<IssueKeyDTOData> Create (IssueDTOData input)
{
    UFIDA.U9.ISV.MO.Proxy.CreateIssue4ExternalProxy proxy = new ISV.MO.Proxy.CreateIssue4ExternalProxy();
    proxy.IssueDTOs = new List<IssueDTOData>();
    proxy.IssueDTOs.Add(input);
    return proxy.Do();
}
```

## 审核

```cs
/// <summary>
/// 生产领料审核
/// </summary>
/// <param name="docNo">生产领料单号</param>
/// <returns>Count=0默认审核成功,否则判断内部明细具体单据是否成功</returns>
List<ApproveIssueDoc4ExternalDTOData> Approve(string docNo){
    UFIDA.U9.ISV.MO.Proxy.ApproveIssueDoc4ExternalSrvProxy proxy = new ISV.MO.Proxy.ApproveIssueDoc4ExternalSrvProxy();
    proxy.DocNoList = new List<ISV.MO.ApproveIssueDoc4ExternalDTOData>();
    proxy.IsNotNewTransaction = true;
    var item = new ISV.MO.ApproveIssueDoc4ExternalDTOData();
    item.DocNo =docNo;
    item.OperateType = true;
    proxy.DocNoList.Add(item);
    return proxy.Do();
}
```

## 弃审

```cs
List<ApproveIssueDoc4ExternalDTOData> Approve(string docNo){
    UFIDA.U9.ISV.MO.Proxy.ApproveIssueDoc4ExternalSrvProxy proxy = new ISV.MO.Proxy.ApproveIssueDoc4ExternalSrvProxy();
    proxy.DocNoList = new List<ISV.MO.ApproveIssueDoc4ExternalDTOData>();
    proxy.IsNotNewTransaction = true;
    var item = new ISV.MO.ApproveIssueDoc4ExternalDTOData();
    item.DocNo =docNo;
    item.OperateType = false;
    proxy.DocNoList.Add(item);
    return proxy.Do();
}
```