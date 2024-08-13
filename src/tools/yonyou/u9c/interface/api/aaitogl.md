---
title: 交易分录
date: 2024-07-11
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 引用

主要引用三个文件`UFIDA.U9.AAI.AAISV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 转总账

```cs
/// <summary>
/// 交易分录转总账
/// </summary>
/// <param name="transHeadIds">交易分录ID</param>
/// <returns>返回总账信息</returns>
AcrossAAPTOGLResultDTOData CreateAAIToGL(List<long> transHeadIds)
{
    UFIDA.U9.AAI.Voucher.Proxy.AcrossAppAAIToGLSVProxy proxy = new UFIDA.U9.AAI.Voucher.Proxy.AcrossAppAAIToGLSVProxy
    {
        MergeCondition = new AAI.Voucher.MergeConDTOData()
        {
            IsMerge = true,
        },
        AAIHeadKeyList = transHeadIds
    };
    return proxy.Do();
}
```

## 删除

```cs
/// <summary>
/// 删除交易分录转总账
/// </summary>
/// <param name="transHeadIds">交易分录ID</param>
/// <returns>返回交易分录</returns>
List<TransEntryDTOData> DeleteAAIToGL(List<long> transHeadIds)
{
    UFIDA.U9.AAI.Voucher.Proxy.AcrossAPPDelVoucherSVProxy proxy = new UFIDA.U9.AAI.Voucher.Proxy.AcrossAPPDelVoucherSVProxy();
    proxy.TransHeadDTO = transHeadIds.Select(x => new TransEntryDTOData() { FromTransHead = x }).ToList();
    return proxy.Do();
}
```
