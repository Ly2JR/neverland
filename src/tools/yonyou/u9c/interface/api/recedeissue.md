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
List<RecedeItemAndSnDTOData> Create(string docType,string issueOrg,string handleDept,string handlePerson,string srcDoc,long srcDocId,decimal issueQty,string wh)
{
    var findOrg = Base.Organization.Organization.FindByCode(issueOrg);
    if (findOrg == null) throw new Exception($"发料组织[{issueOrg}]不存在");

    var findWh = UFIDA.U9.CBO.SCM.Warehouse.Warehouse.FindByCode(findOrg, wh);
    if (findWh == null) throw new Exception($"发料组织[{issueOrg}]仓库[{wh}]不存在";)

    var findDept = UFIDA.U9.CBO.HR.Department.Department.FindByCode(findOrg,handleDept);
    if (findDept == null) throw new Exception($"发料组织[{issueOrg}]发料部门[{handleDept}]不存在");
    
    var findOperator = CBO.HR.Operator.Operators.FindByCode(handlePerson);
    if (findOperator == null) throw new Exception($"发料人[{handleDept}]不存在");

    //表体
    var input = new List<RecedeItemAndSnDTOData>();
    var findMo = UFIDA.U9.MO.MO.MO.Finder.Find("DocNo=@DocNo", new OqlParam[] { new OqlParam(srcDoc) });
    if (findMo == null) throw new Exception($"生产订单[{srcDoc}]不存在");

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
    return input;
}
```

## 新增

```cs
List<string> Create(long dept,long person,string docType, CBO.HR.Department.DepartmentData input)
{
    UFIDA.U9.ISV.MO.Proxy.CreatRecedeIssueDocSVProxy proxy = new ISV.MO.Proxy.CreatRecedeIssueDocSVProxy();
    proxy.HandleDept = new CBO.HR.Department.DepartmentData();
    proxy.HandleDept.ID = dept;
    //proxy.HandleDept.Code = handleDept;       //有BUG，不能传Code，传ID
    
    proxy.HandlePerson = new CBO.HR.Operator.OperatorsData();
    proxy.HandlePerson.ID = person;
    //proxy.HandlePerson.Code = handlePerson;   //有BUG，不能传Code，传ID

    proxy.IssueDocType = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    proxy.IssueDocType.Code = docType;
    proxy.IsAutoIssued = true;//自动发料

    proxy.RecedeItemAndSnDTOList = new List<ISV.MO.RecedeItemAndSnDTOData>();
    proxy.RecedeItemAndSnDTOList.AddRange(input);
    return proxy.Do();
}
```

## 审核

```cs
/// <summary>
/// 生产退料审核
/// </summary>
/// <param name="docNo">生产退料单号</param>
/// <returns>Count=0默认审核成功,否则判断内部明细具体单据是否成功</returns>
List<ApproveIssueDoc4ExternalDTOData> Approve(string docNo)
{
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