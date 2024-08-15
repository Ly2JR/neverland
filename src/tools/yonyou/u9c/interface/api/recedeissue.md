---
title: 生产退料
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

## 参照生产订单退料并确认

```cs
List<string> Create(string docType,string issueOrg,string handleDept,string handlePerson,string srcDoc,long srcDocId,decimal issueQty,string wh)
{
    var findOrg = Base.Organization.Organization.FindByCode(issueOrg);
    if (findOrg == null)
    {
        errMsg = $"发料组织[{issueOrg}]不存在";
        return false;
    }
    var findWh = UFIDA.U9.CBO.SCM.Warehouse.Warehouse.FindByCode(findOrg, wh);
    if (findWh == null)
    {
        errMsg = $"发料组织[{issueOrg}]仓库[{wh}]不存在";
        return false;
    }
    //表体
    var input = new List<RecedeItemAndSnDTOData>();
    var findMo = UFIDA.U9.MO.MO.MO.Finder.Find("DocNo=@DocNo", new OqlParam[] { new OqlParam(srcDoc) });
    if (findMo == null) throw new exception($"生产订单[{srcDoc}]不存在");
    MO.MO.MOPickList findPickList = null;
    foreach (var piclList in findMo.MOPickLists)
    {
        if (piclList.ID == srcDocId)
        {
            findPickList = piclList;
            break;
        }
    }
    if (findPickList == null) throw new Exception($"没有找到生产订单[{srcDoc}]备料表ID[{srcDocId}]");
    var newLine = new RecedeItemAndSnDTOData();
    newLine.RecedeQty = issueQty;
    newLine.RecedeReason = recedeReason;
    newLine.PickID = findPickList.ID;
    newLine.Item = findPickList.ItemMaster.ID;
    newLine.ItemCode = findPickList.ItemCode;
    newLine.ItemName = findPickList.ItemName;
    newLine.Wh = findWh.ID;
    newLine.WhCode = findWh.Code;
    newLine.WhName = findWh.Name;
    input.Add(newLine);

    UFIDA.U9.ISV.MO.Proxy.CreatRecedeIssueDocSVProxy proxy = new ISV.MO.Proxy.CreatRecedeIssueDocSVProxy();
    if (!string.IsNullOrEmpty(handleDept))//有BUG
    {
        proxy.HandleDept = new CBO.HR.Department.DepartmentData();
        proxy.HandleDept.Code = handleDept;
    }
    if (!string.IsNullOrEmpty(handlePerson))
    {
        proxy.HandlePerson = new CBO.HR.Operator.OperatorsData();
        proxy.HandlePerson.Code = handlePerson;
    }
    proxy.IssueDocType = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    proxy.IssueDocType.Code = docType;
    proxy.IsAutoIssued = true;//自动发料
    //proxy.TargetOrgCode = findOrg.Code;
    //proxy.TargetOrgName = findOrg.Name;
    proxy.RecedeItemAndSnDTOList = new List<ISV.MO.RecedeItemAndSnDTOData>();
    proxy.RecedeItemAndSnDTOList.AddRange(input);
    return proxy.Do();
}
```

## 审核

```cs
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