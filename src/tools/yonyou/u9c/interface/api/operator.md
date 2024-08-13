---
title: 业务员
date: 2024-08-13
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.ISV.CBO.PubSV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 新增

```cs
void Create(string employeeCode,string name,string depCode,string ownerOrg,int operatorType){
    var newOperator = new ISV.DeptOperatorSV.CopyOfCopyOfOperatorsDTOData();
    //业务员
    newOperator.Code = employeeCode;
    newOperator.Name = name;
    newOperator.Dept = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newOperator.Dept.Code = depCode;
    newOperator.Effective = new Base.PropertyTypes.EffectiveData();
    newOperator.Effective.IsEffective = true;
    newOperator.Effective.EffectiveDate = DateTime.Now;
    newOperator.Effective.DisableDate = DateTime.MaxValue;
    //newOperator.MasterOrg = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    //newOperator.MasterOrg.Code = org;
    newOperator.Org = new CBO.Pub.Controller.CommonArchiveDataDTOData();
    newOperator.Org.Code = ownerOrg;
    newOperator.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
    newOperator.OperatorLine = new List<ISV.DeptOperatorSV.CopyOfCopyOfOperatorLineDTOData>();
    var line = new ISV.DeptOperatorSV.CopyOfCopyOfOperatorLineDTOData();
    line.OperatorType = operatorType;
    line.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
    newOperator.OperatorLine.Add(line);

    UFIDA.U9.ISV.DeptOperatorSV.Proxy.BatchCreateOperatorByDTOSVProxy proxy = new ISV.DeptOperatorSV.Proxy.BatchCreateOperatorByDTOSVProxy();
    proxy.Operators = new List<ISV.DeptOperatorSV.CopyOfCopyOfOperatorsDTOData>();
    proxy.Operators.Add(newOperator);
    proxy.Do();
}
```