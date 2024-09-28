---
title: 成本调整
date: 2024-07-10
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.ISV.CostAdjustISV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 成本调整数据

```cs
/// <summary>
/// 新增库存模块下的成本调整
/// </summary>
/// <param name="itemCode">料品编码</param>
/// <param name="orgCode">组织编码</param>
/// <param name="money">金额</param>
/// <returns>返回成本调整</returns>
ISV.CostAdjustISV.IC_CostAdjustDTO CreateCostAdjust(string itemCode, string orgCode, decimal money)
{
    var costAdjustDto = new ISV.CostAdjustISV.IC_CostAdjustDTO()
    {
        CostAdjustDocType = new CommonArchiveDataDTO()
        {
            Code = "CostAdj001"
        },//单据类型
        BusinessDate = DateTime.Now,
        SysState = UFSoft.UBF.PL.Engine.ObjectState.Inserted,
        Status = InvDoc.Enums.INVDocStatus.Empty,
        CostAdjustL = new List<ISV.CostAdjustISV.IC_CostAdjustLDTO>(),
    };

    var newItem = new ISV.CostAdjustISV.IC_CostAdjustLDTO()
    {
        ItemInfo = new ItemInfo() { ItemCode = itemCode },
        OwnerOrg = new CommonArchiveDataDTO() { Code = orgCode },
        AdjustAmt = money,
    };
    costAdjustDto.CostAdjustL.Add(newItem);
    return costAdjustDto；
}
```

## 新增

```cs
List<CommonArchiveDataDTO> Create(ISV.CostAdjustISV.IC_CostAdjustDTO input)
{
    ISV.CostAdjustISV.CommonCreateCostAdjust proxy = new ISV.CostAdjustISV.CommonCreateCostAdjust();
    proxy.ContextFrom = new ContextDTO()
    {
        CultureName = PDContext.Current.Culture,
        EntCode = PlatformContext.Current.EnterpriseID,
        OrgCode = PlatformContext.Current.OrgCode,
        OrgID = Convert.ToInt64(PlatformContext.Current.OrgID),
        UserID = Convert.ToInt64(PlatformContext.Current.UserID),
        UserCode = PlatformContext.Current.UserCode,
    };
    proxy.CostAdjustDTOList = new List<ISV.CostAdjustISV.IC_CostAdjustDTO>();
    proxy.CostAdjustDTOList.Add(input);
    return proxy.Do();
}
```

## 提交

```cs
/// <summary>
/// 提交库存模块下的成本调整
/// </summary>
/// <param name="docNo">成本调整单号</param>
void CommitCostAdjust(string docNo)
{
    ISV.CostAdjustISV.CommonCommitCostAdjust proxy = new ISV.CostAdjustISV.CommonCommitCostAdjust();
    proxy.DocList = new List<CommonArchiveDataDTO>();
    proxy.DocList.Add(new CommonArchiveDataDTO() { Code = docNo });
    proxy.Do();
}
```

## 审核

```cs
/// <summary>
/// 审核库存模块下的成本调整
/// </summary>
/// <param name="docNo">成本调整单号</param>
void ApproveCostAdjust(string docNo)
{
    ISV.CostAdjustISV.CommonApproveCostAdjust proxy = new ISV.CostAdjustISV.CommonApproveCostAdjust();
    proxy.DocList = new List<CommonArchiveDataDTO>();
    proxy.DocList.Add(new CommonArchiveDataDTO() { Code = docNo });
    proxy.Do();
}
```
