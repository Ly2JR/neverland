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

## 部门数据

```cs
/// <summary>
///  部门数据
/// </summary>
/// <param name="depCode">部门编码</param>
/// <param name="depName">部门类别</param>
/// <returns>返回部门数据</returns>
List<UFIDA.U9.CBO.HR.Department.DepartmentData> CreateDepartment(string depCode,string depName)
{
    var newDept = new ISV.DeptOperatorSV.CopyOfDepartmentDTOData();
    newDept.Code = depCode;
    newDept.Name = depName;
    newDept.DeptCategory = UFIDA.U9.CBO.HR.Department.DeptCategoryEnum.Development.Value;
    return newDept
}
```
## 新增

```cs
List<UFIDA.U9.CBO.HR.Department.DepartmentData> Create(ISV.DeptOperatorSV.CopyOfDepartmentDTOData input)
{
    UFIDA.U9.ISV.DeptOperatorSV.Proxy.BatchCreateDeptByDTOSVProxy proxy = new ISV.DeptOperatorSV.Proxy.BatchCreateDeptByDTOSVProxy();
    proxy.Dept = new List<ISV.DeptOperatorSV.CopyOfDepartmentDTOData>();
    proxy.Dept.Add(input);
    return proxy.Do();
}
```

## 删除

```cs
void DeleteDepartment(ISV.DeptOperatorSV.DeleteDeptDTOData input)
{
    UFIDA.U9.ISV.DeptOperatorSV.Proxy.BatchDelDeptByDTOSVProxy proxy = new ISV.DeptOperatorSV.Proxy.BatchDelDeptByDTOSVProxy();
    proxy.Dept = new List<ISV.DeptOperatorSV.DeleteDeptDTOData>();
    proxy.Dept.Add(input);
    proxy.Do();
}
```