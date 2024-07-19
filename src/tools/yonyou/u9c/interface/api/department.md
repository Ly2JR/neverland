---
title: 部门
date: 2024-07-10
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

如`UFIDA.U9.CBO.PubBE.*.dll`

## 新增

```cs
/// <summary>
/// 新增部门
/// </summary>
/// <param name="depCode">部门编码</param>
/// <param name="depName">部门类别</param>
/// <returns>返回新增部门</returns>
private List<UFIDA.U9.CBO.HR.Department.DepartmentData> CreateDepartment(string depCode,string depName)
{
    UFIDA.U9.ISV.DeptOperatorSV.Proxy.BatchCreateDeptByDTOSVProxy proxy = new ISV.DeptOperatorSV.Proxy.BatchCreateDeptByDTOSVProxy();
    proxy.Dept = new List<ISV.DeptOperatorSV.CopyOfDepartmentDTOData>();
    var newDept = new ISV.DeptOperatorSV.CopyOfDepartmentDTOData();
    newDept.Code = depCode;
    newDept.Name = depName;
    newDept.DeptCategory = UFIDA.U9.CBO.HR.Department.DeptCategoryEnum.Development.Value;
    proxy.Dept.Add(newDept);
    return proxy.Do();
}
```

## 删除

```cs
/// <summary>
/// 删除部门
/// </summary>
/// <param name="depCode">部门编码</param>
/// <param name="orgCode">组织编码</param>
private void DeleteDepartment(string depCode,string orgCode)
{
    UFIDA.U9.ISV.DeptOperatorSV.Proxy.BatchDelDeptByDTOSVProxy proxy = new ISV.DeptOperatorSV.Proxy.BatchDelDeptByDTOSVProxy();
    proxy.Dept = new List<ISV.DeptOperatorSV.DeleteDeptDTOData>();
    var newDept = new ISV.DeptOperatorSV.DeleteDeptDTOData();
    newDept.DeptCode = depCode;
    newDept.OrgCode = orgCode;
    proxy.Dept.Add(newDept);
    proxy.Do();
}
```