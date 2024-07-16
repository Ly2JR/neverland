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

## 查询

```cs
/// <summary>
/// 查询资产变更
/// </summary>
/// <param name="docNo">资产变更单号</param>
/// <param name="orgCode">组织编码</param>
/// <returns>返回资产变更</returns>
private List<ISV.FA.ImportFAAlterDocHeadDTO> QueryAlterDoc(string docNo,string orgCode)
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

## 新增资产类别变更

```cs
/// <summary>
/// 新增资产资产类别变更
/// </summary>
/// <param name="alterReason">表头：变更原因编码或名称</param>
/// <param name="assetCarad">表体：资产卡片</param>
/// <param name="assetCarad">表体：变更后资产类别</param>
private List<ISV.FA.ImportFAAlterDocResultDTO> CreateAlterDoc01(string alterReason, string assetCard, string assetCategory)
{
    try
    {
        Organization org = Base.Context.LoginOrg;

        var findOrg = UFIDA.U9.CBO.FA.FA_AssetOwnerRelation.AssetOwnerRelation.Finder.Find(" OwnerOrg.Code=@OrgCode", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(org.Code) });
        if (findOrg is null)
        {
            throw new Exception($"未找到货主组织[{org.Code}]");
        }

        var enumValue = UFIDA.UBF.MD.Business.ExtEnumValue.Finder.Find(" ExtEnumType.Code='UFIDA.U9.FA.FA_AlterDocBE.AlterReasonUDCEnum' and (Code=@Code or Name=@Name)", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(alterReason), new UFSoft.UBF.PL.OqlParam(alterReason) });
        if (enumValue is null)
        {
            throw new Exception($"未找到变更原因,{alterReason}");
        }

        var findAssetCard = FA.FA_AssetCardBE.AssetCard.Finder.Find(" DocNo=@DocNo", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(assetCard) });
        if (findAssetCard is null)
        {
            throw new Exception($"未找到资产卡片编号[{assetCard}]");
        }

        var findAssetCategory = UFIDA.U9.CBO.FA.FA_AssetCategoryBE.AssetCategory.Finder.Find(" Code=@Code or Name=@Name", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(assetCategory), new UFSoft.UBF.PL.OqlParam(assetCategory) });
        if (findAssetCategory is null)
        {
            throw new Exception($"未找到变更后资产类别[{assetCategory}]");
        }

        UFIDA.U9.ISV.FA.CreateImportFAAlterDocSV proxy = new ISV.FA.CreateImportFAAlterDocSV();
        var newItems = new List<ISV.FA.ImportFAAlterDocHeadDTO>();
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
        newItems.Add(newItem);
        proxy.ImportFAAlterDocHeadDTOs = newItems;
        return proxy.Do();
    }
    catch (Exception ex)
    {
        throw new Exception(ex.Message);
    }
}
```

## 新增资产使用信息

```cs
/// <summary>
/// 新增资产资产使用信息变更
/// </summary>
/// <param name="alterReason">表头：变更原因编码或名称</param>
/// <param name="assetCarad">表体：资产卡片</param>
/// <param name="afterDept">表体：变更后使用部门</param>
/// <param name="afterDeptRatio">表体：变更后部门所有权使用比例</param>
/// <param name="lastDept">表体：最后部门</param>
private List<ISV.FA.ImportFAAlterDocResultDTOData> CreateAlterDoc05(string alterReason, string assetCard, string afterDept, decimal afterDeptRatio, string lastDept)
{
    try
    {
        Organization org = Base.Context.LoginOrg;

        var findOrg = UFIDA.U9.CBO.FA.FA_AssetOwnerRelation.AssetOwnerRelation.Finder.Find(" OwnerOrg.Code=@OrgCode", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(org.Code) });
        if (findOrg is null)
        {
            throw new Exception($"未找到货主组织[{org.Code}]");
        }

        var enumValue = UFIDA.UBF.MD.Business.ExtEnumValue.Finder.Find(" ExtEnumType.Code='UFIDA.U9.FA.FA_AlterDocBE.AlterReasonUDCEnum' and (Code=@Code or Name=@Name)", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(alterReason), new UFSoft.UBF.PL.OqlParam(alterReason) });
        if (enumValue is null)
        {
            throw new Exception($"未找到变更原因[{alterReason}]");
        }

        UFIDA.U9.ISV.FA.Proxy.CreateImportFAAlterDocSVProxy proxy = new ISV.FA.Proxy.CreateImportFAAlterDocSVProxy();
        var newItems = new List<ISV.FA.ImportFAAlterDocHeadDTOData>();
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
        if (findAssetCard is null)
        {
            throw new Exception($"未找到资产卡片编号[{assetCard}]");
        }

        var findOwnerUsage = CBO.FA.FA_AssetOwnerRelation.OwnerUsageRelation.Finder.Find("UsageOrg=@OwnerOrg", new OqlParam[] { new OqlParam(findAssetCard.OwnerOrg.ID) });
        if (findOwnerUsage is null)
        {
            throw new Exception($"未找到资产使用组织[{findAssetCard.OwnerOrg.ID}]");
        }

        var findAfterDept = UFIDA.U9.CBO.HR.Department.Department.Finder.Find(" Code=@Code or Name=@Name", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(afterDept), new UFSoft.UBF.PL.OqlParam(afterDept) });
        if (findAfterDept is null)
        {
            throw new Exception($"未找到变更后使用部门[{afterDept}]");
        }

        var findLastDept = UFIDA.U9.CBO.HR.Department.Department.Finder.Find(" Code=@Code or Name=@Name", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(lastDept), new UFSoft.UBF.PL.OqlParam(lastDept) });
        if (findLastDept is null)
        {
            throw new Exception($"未找到变更后使用部门[{lastDept}]");
        }

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

        //资产标签
        var newTagAlter = new ISV.FA.AssetTagAlterObjDTOData();
        newTagAlter.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
        newTagAlter.AssetTagCode = findAssetCard.AssetTag[0].Code;
        newTagAlter.AssetLocation = new CommonArchiveDataDTOData()
        {
            ID = findAssetCard.AssetTag[0].ID,
            Code = findAssetCard.AssetTag[0].Code
        };
        newTagAlter.AssetTag = new CommonArchiveDataDTOData()
        {
            ID = findAssetCard.AssetTag[0].ID,
            Code = findAssetCard.AssetTag[0].Code,
        };
        detail.AssetTagAlterObjDTOs.Add(newTagAlter);

        var findTagUsage = UFIDA.U9.FA.FA_AssetCardBE.AssetTagUsageInformation.Finder.Find("AssetCard=@AssetCard and OwnerUsageRelation=@OwnerUsageRelation and UsageDept=@UsageDept and UsageOrg=@UsageOrg and AssetTag=@AssetTag", new OqlParam[] {
    new OqlParam(findAssetCard.ID),new OqlParam(findOwnerUsage.ID),new OqlParam(findAssetCard.OwnerDept.ID),new OqlParam(findAssetCard.OwnerOrg.ID),new OqlParam(newTagAlter.AssetTag.ID)
});
        if (findTagUsage is null)
        {
            throw new Exception($"没有找到资产卡片[{findAssetCard.DocNo}]标签使用信息");
        }

        //资产使用信息变更
        var newTagUse = new ISV.FA.AssetTagUseInforAlterObjDTOData();
        newTagUse.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
        newTagUse.AssetTagUsageInfor = new CommonArchiveDataDTOData()
        {
            ID = findTagUsage.ID
        };
        newTagUse.AssetAccountInfor = new CommonArchiveDataDTOData()
        {
            ID = findAssetCard.AssetAccountInfor[0].ID,
        };
        newTagUse.DPBook = new CommonArchiveDataDTOData()
        {
            ID = findAssetCard.AssetAccountInfor[0].DpBook.ID,
        };
        newTagUse.OldUsageOrg = new CommonArchiveDataDTOData()
        {
            ID = findOwnerUsage.ID,
        };
        newTagUse.UsageOrg = new CommonArchiveDataDTOData()
        {
            ID = findOwnerUsage.ID,
        };
        newTagUse.OldUsageDept = new CommonArchiveDataDTOData()
        {
            ID = findAssetCard.OwnerDept.ID,
            Code = findAssetCard.OwnerDept.Code,
        };
        newTagUse.UsageDept = new CommonArchiveDataDTOData()
        {
            ID = findAfterDept.ID,
            Code = findAfterDept.Code,
        };
        newTagUse.AssetTag = new CommonArchiveDataDTOData()
        {
            ID = findAssetCard.AssetTag[0].ID,
            Code = findAssetCard.AssetTag[0].Code,
        };
        newTagUse.OldPercentage = findTagUsage.Percentage;
        newTagUse.Percentage = afterDeptRatio;
        detail.AssetTagUseInforAlterObjDTOs.Add(newTagUse);

        //Last
        var lastTagUse = new ISV.FA.AssetTagUseInforAlterObjDTOData();
        lastTagUse.SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted;
        lastTagUse.AssetAccountInfor = new CommonArchiveDataDTOData()
        {
            ID = findAssetCard.AssetAccountInfor[0].ID,
        };
        lastTagUse.DPBook = new CommonArchiveDataDTOData()
        {
            ID = findAssetCard.AssetAccountInfor[0].DpBook.ID,
        };
        lastTagUse.UsageOrg = new CommonArchiveDataDTOData()
        {
            ID = findOwnerUsage.ID,
        };
        lastTagUse.UsageDept = new CommonArchiveDataDTOData()
        {
            ID = findLastDept.ID,
            Code = findLastDept.Code,
        };
        lastTagUse.AssetTag = new CommonArchiveDataDTOData()
        {
            ID = findAssetCard.AssetTag[0].ID,
            Code = findAssetCard.AssetTag[0].Code,
        };
        lastTagUse.OldPercentage = 0;
        lastTagUse.Percentage = 1 - afterDeptRatio;//变更后所有权
        detail.AssetTagUseInforAlterObjDTOs.Add(lastTagUse);
        newItem.FAAlterDocDetailDTOs.Add(detail);

        newItems.Add(newItem);
        proxy.ImportFAAlterDocHeadDTOs = newItems;
        return proxy.Do();
    }
    catch (Exception ex)
    {
        throw new Exception(ex.Message);
    }
}
```