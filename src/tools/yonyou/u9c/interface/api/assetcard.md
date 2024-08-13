---
title: 资产卡片
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
/// 查询资产卡片
/// </summary>
/// <param name="docNo">资产卡片单号</param>
/// <param name="orgCode">组织编码</param>
/// <returns>返回资产卡片</returns>
List<ISV.FA.ImportAssetCardDTO> InternalQueryAssertCard(string docNo,string orgCode)
{
    UFIDA.U9.ISV.FA.QueryImportAssetCardSV proxy = new ISV.FA.QueryImportAssetCardSV();
    proxy.AssetCardQueryConditionDTOList =new List<ISV.FA.FADocQueryConditionDTO>
    {
        new ISV.FA.FADocQueryConditionDTO()
        {
            DocNO=docNo,
            Org=new CommonArchiveDataDTO()
            {
                Code=orgCode
            },
        }
    };
    return  proxy.Do();
}
```
