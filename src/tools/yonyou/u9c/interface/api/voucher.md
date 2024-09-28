---
title: 凭证
date: 2024-07-11
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

::: tip
科目格式:科目|客户|供应商|部门|业务员|银行|银行账号|项目|受益项目|料品|付款客户位置|合同号|厂区项目分类
:::

## 引用

主要引用三个文件`UFIDA.U9.ISV.GL.ISVGLImportSV.*.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\`

其他缺失文件按提示引用即可。

## 查询

```cs
/// <summary>
/// 查询凭证
/// </summary>
/// <param name="docNo">凭证单号</param>
/// <returns>返回凭证</returns>
List<ISVImportVoucherDTOData> QueryVoucher(string docNo)
{
    UFIDA.U9.ISV.GL.ISVGLImportSV.ISVVoucherQuerySV proxy = new UFIDA.U9.ISV.GL.ISVGLImportSV.ISVVoucherQuerySV();
    proxy.QueryConditionDTO = new List<VoucherQueryDTO>()
    {
        new VoucherQueryDTO()
        {
            DocNo=docNo,
            SOB=new CommonArchiveDataDTO()
            {
                ID=PDContext.Current.PrimarySOBRef.ID,
                Code=PDContext.Current.PrimarySOBRef.CodeColumn,
            }
        }
    };
    return proxy.Do();
}
```

## 新增

```cs
/// <summary>
/// 新增凭证
/// </summary>
/// <param name="abstracts">摘要</param>
/// <param name="accountCode">科目格式</param>
/// <param name="money">金额</param>
/// <returns>返回凭证</returns>
List<ISVImportVoucherDTO> CreateVoucher(string abstracts, string accountCode, decimal money)
{
    List<ISVImportVoucherDTO> vouchersDto = new List<ISVImportVoucherDTO>();
    var newVoucher = new ISVImportVoucherDTO();
    newVoucher.CreateDate = DateTime.Now;
    newVoucher.VoucherCategory = new CommonArchiveDataDTO()
    {
        Code = "MGL"
    };
    newVoucher.SOB = new CommonArchiveDataDTO()
    {
        ID = PDContext.Current.PrimarySOBRef.ID,
        Code = PDContext.Current.PrimarySOBRef.CodeColumn,
        Name = PDContext.Current.PrimarySOBRef.NameColumn,
    };
    newVoucher.Entries = new List<ISVImportEntryDTO>();
    var line1 = new ISVImportEntryDTO() { Abstracts = abstracts, Account = new CommonArchiveDataDTO() { Code = accountCode }, AccountedDr = money, EnteredDr = money, Currency = new CommonArchiveDataDTO() { ID = PDContext.Current.PrimarySOBFCRef.ID, Code = PDContext.Current.PrimarySOBFCRef.CodeColumn, Name = PDContext.Current.PrimarySOBFCRef.NameColumn } };
    var line2 = new ISVImportEntryDTO() { Abstracts = abstracts, Account = new CommonArchiveDataDTO() { Code = accountCode }, AccountedCr = money, EnteredCr = money, Currency = new CommonArchiveDataDTO() { ID = PDContext.Current.PrimarySOBFCRef.ID, Code = PDContext.Current.PrimarySOBFCRef.CodeColumn, Name = PDContext.Current.PrimarySOBFCRef.NameColumn } };
    newVoucher.Entries.Add(line1);
    newVoucher.Entries.Add(line2);
    vouchersDto.Add(newVoucher);
    return vouchersDto;
}
```

## 新增

```cs
List<ISVReturnVoucherDTO> Create(List<ISVImportVoucherDTO> input){
    UFIDA.U9.ISV.GL.ISVGLImportSV.ISVGLImportSV proxy = new UFIDA.U9.ISV.GL.ISVGLImportSV.ISVGLImportSV();
    proxy.ImportVoucherDTOs = input;
    return proxy.Do();
}
```