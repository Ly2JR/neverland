---
title: 资产变更
date: 2024-07-10
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.ISV.FA.FAImportSV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 资产类别变更数据

```cs
/// <summary>
/// 资产资产类别变更
/// </summary>
/// <param name="alterReason">表头：变更原因编码或名称</param>
/// <param name="assetCarad">表体：资产卡片</param>
/// <param name="assetCarad">表体：变更后资产类别</param>
ISV.FA.ImportFAAlterDocHeadDTO CreateAlterDoc01(string alterReason, string assetCard, string assetCategory)
{
    Organization org = Base.Context.LoginOrg;

    var findOrg = UFIDA.U9.CBO.FA.FA_AssetOwnerRelation.AssetOwnerRelation.Finder.Find(" OwnerOrg.Code=@OrgCode", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(org.Code) });
    if (findOrg is null) throw new Exception($"未找到货主组织[{org.Code}]");

    var enumValue = UFIDA.UBF.MD.Business.ExtEnumValue.Finder.Find(" ExtEnumType.Code='UFIDA.U9.FA.FA_AlterDocBE.AlterReasonUDCEnum' and (Code=@Code or Name=@Name)", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(alterReason), new UFSoft.UBF.PL.OqlParam(alterReason) });
    if (enumValue is null)  throw new Exception($"未找到变更原因,{alterReason}");

    var findAssetCard = FA.FA_AssetCardBE.AssetCard.Finder.Find(" DocNo=@DocNo", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(assetCard) });
    if (findAssetCard is null) throw new Exception($"未找到资产卡片编号[{assetCard}]");

    var findAssetCategory = UFIDA.U9.CBO.FA.FA_AssetCategoryBE.AssetCategory.Finder.Find(" Code=@Code or Name=@Name", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(assetCategory), new UFSoft.UBF.PL.OqlParam(assetCategory) });
    if (findAssetCategory is null) throw new Exception($"未找到变更后资产类别[{assetCategory}]");

    var newItem = new ISV.FA.ImportFAAlterDocHeadDTO
    {
        DocumentType = new CommonArchiveDataDTO()//单据类型
        {
            Code = "01",
        },
        AlterReason = enumValue.EValue,//变更原因
        BusinessDate = DateTime.Now,//日期
        AlterStyle = new List<int>() { UFIDA.U9.FA.FA_Enum.FA_AlterStyleEnum.AlterAssetCategory.Value },//变更类型
        AlterBigStyle = FA.FA_Enum.FA_AlterBigStyles.Card.Value,
        AssetOwnerRelation = new CommonArchiveDataDTO()
        {
            ID = findOrg.ID,
        },
        SysState = 0,
        FAAlterDocDetailDTOs = new List<ISV.FA.FAAlterDocDetailDTO>(),
    };
    var detail = new ISV.FA.FAAlterDocDetailDTO();

    detail.SysState = 0;
    detail.AssetCard = new CommonArchiveDataDTO()
    {
        ID = findAssetCategory.ID,
        Code = findAssetCategory.Code,
    };
    detail.OldAssetCategory = new CommonArchiveDataDTO()
    {
        ID = findAssetCategory.AssetCategory.ID,
        Code = findAssetCategory.AssetCategory.Code,
    };
    detail.AssetCategory = new CommonArchiveDataDTO()
    {
        Code = assetCategory,
    };
    detail.OldOwnerDept = new CommonArchiveDataDTO()
    {
        ID = assetCard.OwnerDept.ID,
        Code = assetCard.OwnerDept.Code,
    };
    detail.OwnerDept = new CommonArchiveDataDTO()
    {
        ID = assetCard.OwnerDept.ID,
        Code = assetCard.OwnerDept.Code,
    };
    detail.OldAuditDept = new CommonArchiveDataDTO()
    {
        ID = assetCard.AuditDept.ID,
        Code = assetCard.AuditDept.Code,
    };
    detail.AccountDept = new CommonArchiveDataDTO()
    {
        ID = assetCard.AuditDept.ID,
    };
    detail.AssetAccountAlterObjDTOs = new List<ISV.FA.AssetAccountAlterObjDTO>();
    detail.AssetTagAlterObjDTOs = new List<ISV.FA.AssetTagAlterObjDTO>();
    detail.AssetTagUseInforAlterObjDTOs = new List<ISV.FA.AssetTagUseInforAlterObjDTO>();

    newItem.FAAlterDocDetailDTOs.Add(detail);
    return newItem;
}
```

## 资产使用信息数据

```cs
/// <summary>
/// 资产变更使用信息
/// 1.A部门100%转B部门40%和C部门60%
/// 2.B部门40%转B部门20%
///   C部门60%转C部门80%
/// </summary>
/// <param name="alterReason">表头：变更原因编码或名称</param>
/// <param name="assetCarad">表体：资产卡片</param>
/// <param name="deptB">表体资产卡片：变更后部门</param>
/// <param name="deptBRatio">表体资产卡片：变更后部门所有权</param>
/// <param name="deptC">表体资产卡片：变更后部门</param>
ISV.FA.ImportFAAlterDocHeadDTOData CreateAlterDoc(string alterReason,string assetCard,string deptB,decimal deptBRatio,string deptC)
{
    Organization org = Base.Context.LoginOrg;

    var findOrg = UFIDA.U9.CBO.FA.FA_AssetOwnerRelation.AssetOwnerRelation.Finder.Find(" OwnerOrg.Code=@OrgCode", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(org.Code) });
    if (findOrg is null) throw new Exception($"未找到货主组织[{org.Code}]");

    var enumValue = UFIDA.UBF.MD.Business.ExtEnumValue.Finder.Find(" ExtEnumType.Code='UFIDA.U9.FA.FA_AlterDocBE.AlterReasonUDCEnum' and (Code=@Code or Name=@Name)", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(alterReason), new UFSoft.UBF.PL.OqlParam(alterReason) });
    if (enumValue is null) throw new Exception($"未找到变更原因[{alterReason}]");

    var newItem = new ISV.FA.ImportFAAlterDocHeadDTOData
    {
        DocumentType = new CommonArchiveDataDTOData()
        {
            Code = "05",
        },
        AlterReason = enumValue.EValue,
        BusinessDate = DateTime.Now,
        AlterStyle = new List<int>() { UFIDA.U9.FA.FA_Enum.FA_AlterStyleEnum.AlterUsageInfor.Value },
        AlterBigStyle = 4,
        AssetOwnerRelation = new CommonArchiveDataDTOData()
        {
            ID = findOrg.ID,
        },
        SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted,
        FAAlterDocDetailDTOs = new List<ISV.FA.FAAlterDocDetailDTOData>(),
    };

    var findAssetCard = FA.FA_AssetCardBE.AssetCard.Finder.Find("  DocNo=@DocNo", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(assetCard) });
    if (findAssetCard is null) throw new Exception($"未找到资产卡片编号[{assetCard}]");

    var findDeptB = UFIDA.U9.CBO.HR.Department.Department.Finder.Find(" Code=@Code or Name=@Name", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(deptB), new UFSoft.UBF.PL.OqlParam(deptB) });
    if(findDeptB is null) throw new Exception($"未找到变更后使用部门[{deptB}]");

    var findDeptC = UFIDA.U9.CBO.HR.Department.Department.Finder.Find(" Code=@Code or Name=@Name", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(deptC), new UFSoft.UBF.PL.OqlParam(deptC) });
    if (findDeptC is null) throw new Exception($"未找到变更后使用部门[{deptC}]");

    var detail = new ISV.FA.FAAlterDocDetailDTOData();
    detail.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
    detail.AssetCard = new CommonArchiveDataDTOData()
    {
        ID = findAssetCard.ID,
        Code = findAssetCard.DocNo,
    };
    detail.OldOwnerDept = new CommonArchiveDataDTOData()
    {
        ID = findAssetCard.OwnerDept.ID,
        Code = findAssetCard.OwnerDept.Code,
    };
    detail.OwnerDept = new CommonArchiveDataDTOData()
    {
        ID = findAssetCard.OwnerDept.ID,
        Code = findAssetCard.OwnerDept.Code,
    };
    detail.OldAuditDept = new CommonArchiveDataDTOData()
    {
        ID = findAssetCard.AuditDept.ID,
        Code = findAssetCard.AuditDept.Code,
    };
    detail.AccountDept = new CommonArchiveDataDTOData()
    {
        ID = findAssetCard.AuditDept.ID,
    };
    detail.AssetAccountAlterObjDTOs = new List<ISV.FA.AssetAccountAlterObjDTOData>();
    detail.AssetTagAlterObjDTOs = new List<ISV.FA.AssetTagAlterObjDTOData>();
    detail.AssetTagUseInforAlterObjDTOs = new List<ISV.FA.AssetTagUseInforAlterObjDTOData>();

    foreach(var assetTag in findAssetCard.AssetTag)
    {
        var newTagAlter = new ISV.FA.AssetTagAlterObjDTOData();
        newTagAlter.ID=assetTag.ID;
        newTagAlter.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
        newTagAlter.AssetTagCode = assetTag.Code;
        newTagAlter.AssetLocation = new CommonArchiveDataDTOData()
        {
            ID = assetTag.AssetLocation.ID,
            Code = assetTag.AssetLocation.Code
        };
        newTagAlter.AssetTag = new CommonArchiveDataDTOData()
        {
            ID = assetTag.ID,
            Code = assetTag.Code,
        };
        detail.AssetTagAlterObjDTOs.Add(newTagAlter);

        foreach (var assetTagUsage in assetTag.AssetTagUsageInformation)
        {
            var newTagUse = new ISV.FA.AssetTagUseInforAlterObjDTOData();
            newTagUse.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
            newTagUse.AssetTagUsageInfor = new CommonArchiveDataDTOData()
            {
                ID = assetTagUsage.ID
            };
            newTagUse.AssetAccountInfor = new CommonArchiveDataDTOData()
            {
                ID = assetTagUsage.AssetAccountInfor.ID,
            };
            newTagUse.DPBook = new CommonArchiveDataDTOData()
            {
                ID = assetTagUsage.AssetAccountInfor.DpBook.ID,
            };
            newTagUse.OldUsageOrg = new CommonArchiveDataDTOData()
            {
                ID =assetTagUsage.OwnerUsageRelation.ID,
            };
            newTagUse.UsageOrg = new CommonArchiveDataDTOData()
            {
                ID = assetTagUsage.OwnerUsageRelation.ID,
            };
            newTagUse.OldUsageDept = new CommonArchiveDataDTOData()
            {
                ID = assetTagUsage.UsageDept.ID,
                Code = assetTagUsage.UsageDept.Code,
            };
            newTagUse.UsageDept = new CommonArchiveDataDTOData()
            {
                ID = findAfterDept.ID,
                Code = findAfterDept.Code,
            };
            newTagUse.AssetTag = new CommonArchiveDataDTOData()
            {
                ID = assetTagUsage.AssetTag.ID,
                Code = assetTagUsage.AssetTag.Code,
            };
            newTagUse.OldPercentage = assetTagUsage.Percentage;
            newTagUse.Percentage = afterDeptRatio;
            newTagUse.OldFromDate=assetTagUsage.FromDate;
            newTagUse.OldToDate = assetTagUsage.ToDate;
            detail.AssetTagUseInforAlterObjDTOs.Add(newTagUse);

            //部门C所有权
            if (1 - afterDeptRatio > 0)
            {
                var lastTagUse = new ISV.FA.AssetTagUseInforAlterObjDTOData();
                lastTagUse.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
                lastTagUse.AssetAccountInfor = new CommonArchiveDataDTOData()
                {
                    ID = assetTagUsage.AssetAccountInfor.ID,
                };
                lastTagUse.DPBook = new CommonArchiveDataDTOData()
                {
                    ID = assetTagUsage.AssetAccountInfor.DpBook.ID,
                };
                lastTagUse.UsageOrg = new CommonArchiveDataDTOData()
                {
                    ID = assetTagUsage.OwnerUsageRelation.ID,
                };
                lastTagUse.UsageDept = new CommonArchiveDataDTOData()
                {
                    ID = findLastDept.ID,
                    Code = findLastDept.Code,
                };
                lastTagUse.AssetTag = new CommonArchiveDataDTOData()
                {
                    ID = assetTagUsage.AssetTag.ID,
                    Code = assetTagUsage.AssetTag.Code,
                };
                lastTagUse.OldFromDate = assetTagUsage.FromDate;
                lastTagUse.OldToDate = assetTagUsage.ToDate;
                lastTagUse.OldPercentage = 0;
                lastTagUse.Percentage = 1 - afterDeptRatio;
                detail.AssetTagUseInforAlterObjDTOs.Add(lastTagUse);
            }
        }
        
    }
    newItem.FAAlterDocDetailDTOs.Add(detail);
    return newItem
}
```

## 查询

```cs
/// <summary>
/// 查询资产变更
/// </summary>
/// <param name="docNo">资产变更单号</param>
/// <param name="orgCode">组织编码</param>
/// <returns>返回资产变更</returns>
List<ISV.FA.ImportFAAlterDocHeadDTO> QueryAlterDoc(string docNo,string orgCode)
{
    UFIDA.U9.ISV.FA.QueryImportFAAlterDocSV proxy = new ISV.FA.QueryImportFAAlterDocSV();
    proxy.ImportFAAlterDocQueryConditionDTOs=new List<ISV.FA.ImportFAAlterDocQueryConditionDTO>()
    {
        new ISV.FA.ImportFAAlterDocQueryConditionDTO()
        {
            DocNo=docNo,
            Org=new CommonArchiveDataDTO()
            {
                Code=orgCode
            },
        }
    };
    return proxy.Do();
}
```

## 新增

```cs
List<ImportFAAlterDocResultDTOData> Create(ISV.FA.ImportFAAlterDocHeadDTOData input){
    UFIDA.U9.ISV.FA.Proxy.CreateImportFAAlterDocSVProxy proxy = new ISV.FA.Proxy.CreateImportFAAlterDocSVProxy();
    proxy.ImportFAAlterDocHeadDTOs=new List<ISV.FA.ImportFAAlterDocHeadDTOData>();
    proxy.ImportFAAlterDocHeadDTOs.Add(input);
    return proxy.Do();
}
```