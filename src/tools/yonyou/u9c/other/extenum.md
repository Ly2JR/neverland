---
title: U9C 自定义代码
date: 2024-07-08
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## SQL

```sql
select UBF_Sys_ExtEnumType_Trl.Name,UBF_Sys_ExtEnumValue.Code,UBF_Sys_ExtEnumValue_Trl.Name,UBF_Sys_ExtEnumValue.EValue
from UBF_Sys_ExtEnumType
inner join UBF_Sys_ExtEnumType_Trl on UBF_Sys_ExtEnumType.ID=UBF_Sys_ExtEnumType_Trl.ID
inner join UBF_Sys_ExtEnumValue on UBF_Sys_ExtEnumType.ID=UBF_Sys_ExtEnumValue.ExtEnumType
inner join UBF_Sys_ExtEnumValue_Trl on UBF_Sys_ExtEnumValue.ID=UBF_Sys_ExtEnumValue_Trl.ID
WHERE ubf_sys_ExtEnumType.CODE='UFIDA.U9.FA.FA_AlterDocBE.AlterReasonUDCEnum'
```

## 代码

引用文件`UFIDA.UBF.MD.Entity`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\UFIDA.UBF.MD.Entity.dll`

```cs
var enumValue = UFIDA.UBF.MD.Business.ExtEnumValue.Finder.Find(" ExtEnumType.Code='UFIDA.U9.FA.FA_AlterDocBE.AlterReasonUDCEnum' and (Code=@Code or Name=@Name or EValue=@Value)", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(input.AlterReason), new UFSoft.UBF.PL.OqlParam(input.AlterReason), new UFSoft.UBF.PL.OqlParam(input.AlterReasonValue) });
if (enumValue is null)
{
    throw new Exception($"未找到变更原因,{input.AlterReason}");
}
```