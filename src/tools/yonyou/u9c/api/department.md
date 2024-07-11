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

## 新增

```cs
/// <summary>
/// 新增部门
/// </summary>
/// <param name="depCode">部门编码</param>
/// <param name="depName">部门类别</param>
/// <returns>返回新增部门</returns>
private CBO.HR.Department.Department.EntityList InternalCreateDepartment(string depCode,string depName)
{
    UFIDA.U9.ISV.DeptOperatorSV.BatchCreateDeptByDTOSV proxy = new ISV.DeptOperatorSV.BatchCreateDeptByDTOSV();
    proxy.Dept = new List<ISV.DeptOperatorSV.CopyOfDepartmentDTO>();
    var newDept = new ISV.DeptOperatorSV.CopyOfDepartmentDTO();
    newDept.Code = depCode;
    newDept.Name = depName;
    newDept.DeptCategory = CBO.HR.Department.DeptCategoryEnum.Development;
    proxy.Dept.Add(newDept);
    return proxy.Do();
}
```
