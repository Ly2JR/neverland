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

## 新增

```cs
/// <summary>
/// 修改资产变更
/// </summary>
/// <param name="alterReason">表头：变更原因编码或名称</param>
/// <param name="assetCarad">表体：资产卡片</param>
/// <param name="assetCarad">表体：变更后资产类别</param>
private void ModifyAlterDoc(string alterReason,string assetCarad,string assetCategory)
{
    try
    {
        var enumValue = UFIDA.UBF.MD.Business.ExtEnumValue.Finder.Find(" ExtEnumType.Code='UFIDA.U9.FA.FA_AlterDocBE.AlterReasonUDCEnum' and (Code=@Code or Name=@Name)", new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(alterReason), new UFSoft.UBF.PL.OqlParam(alterReason)});
        if (enumValue is null)
        {
            throw new Exception($"未找到变更原因,{alterReason}");
        }

        var assetCard= FA.FA_AssetCardBE.AssetCard.Finder.Find(" DocNo=@DocNo",new UFSoft.UBF.PL.OqlParam[] { new UFSoft.UBF.PL.OqlParam(assetCard) });
        if(assetCard is null)
        {
            throw new Exception($"未找到资产卡片编号[{input.AssetCard}]");
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
            AlterStyle = new List<int>() { UFIDA.U9.FA.FA_Enum.FA_AlterStyleEnum.AlterAssetCategory.Value},//变更类型
            AlterBigStyle = FA.FA_Enum.FA_AlterBigStyles.Card.Value,
            AssetOwnerRelation = new CommonArchiveDataDTO()
            {
                ID = assetCard.AssetOwnerRelation.ID,
            },
            SysState=0,
            FAAlterDocDetailDTOs = new List<ISV.FA.FAAlterDocDetailDTO>(),
        };
        var detail = new ISV.FA.FAAlterDocDetailDTO();

        detail.SysState = 0;
        detail.AssetCard = new CommonArchiveDataDTO()
        {
            ID = assetCard.ID,
            Code = assetCard.DocNo,
        };
        detail.OldAssetCategory = new CommonArchiveDataDTO()
        {
            ID = assetCard.AssetCategory.ID,
            Code = assetCard.AssetCategory.Code,
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
        var retDtos = proxy.Do();
    }
    catch(Exception ex)
    {
        throw new Exception(ex.Message);
    }
}
```
