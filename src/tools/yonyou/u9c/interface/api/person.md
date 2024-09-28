---
title: 人员信息
date: 2024-08-02
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.CBO.HRSV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 人员数据

```cs
CBO.HR.CBOHRSV.PersonDTO Create(string org,string name,string id,string depCode,string employeeCategoryCode,string employeeCode,string jobCode,DateTime occupationDate,DateTime entranceDate)
{
  var newPerson =  new CBO.HR.CBOHRSV.PersonDTO();
  newPerson.AssgnBeginDate = occupationDate;
  newPerson.BusinessOrgCode = org;
  newPerson.CertificateType =id;
  newPerson.Country = "142"; //"中华人民共和国";
  newPerson.CreateOrgCode = org;
  newPerson.DeptCode = depCode;
  newPerson.EmployeeCategoryCode = employeeCategoryCode;
  newPerson.FirstName = name.Substring(1);
  newPerson.LastName =name.Substring(0,1);
  newPerson.HROrgCode = org;
  newPerson.JobCode = jobCode;
  newPerson.OwnerOrgCode = org;
  newPerson.PersonCode = employeeCode;
  newPerson.Sex = sex;
  newPerson.StartDate = entranceDate;
  newPerson.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
  newPerson.WorkingOrgCode = org;
  return newPerson;
}
```

## 新增

```cs
void Create(CBO.HR.CBOHRSV.PersonDTO input)
{
  UFIDA.U9.CBO.HR.CBOHRSV.PersonADDSV proxy = new CBO.HR.CBOHRSV.PersonADDSV();
  proxy.PersonDTOs = new List<CBO.HR.CBOHRSV.PersonDTO>();
  proxy.PersonDTOs.Add(input);
  proxy.Do();
}
```