---
title: 读写Excel
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - Excel
tag:
  - excel
  - NPOI
---

## [NPOI](https://github.com/nissl-lab/npoi)

这里有一些[NPOI示例](https://github.com/nissl-lab/npoi-examples)。

## [AccessDataBaseEngine](https://www.microsoft.com/en-us/download/details.aspx?id=54920)

关于[链接字符串](https://docs.microsoft.com/zh-cn/dotnet/framework/data/adonet/connection-string-syntax?redirectedfrom=MSDN)

::: tip
HDR=Yes 默认值，表示第一行是标题

IMES=0 写入

IMES=1 读取

IMES=2 并存
:::

### 示例

```cs
//xlxs
//Provider=Microsoft.ACE.OLEDB.12.0;Data Source=<excelPath>;Extended Properties='Excel 12.0;HDR=YES;IMEX=1';
//xls
//Provider=Microsoft.ACE.OLEDB.4.0;Data Source=<excelPath>;Extended Properties='Excel 8.0;HDR=YES;IMEX=1'

const string ConnString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\\demo.xlsx;Extended Properties='Excel 12.0;HDR=YES;IMEX=1'";
string sSql = "SELECT * FROM [Sheet1$]";
var sheet1 = new DataTable("Sheet1");
using (OleDbConnection conn = new OleDbConnection(ConnString))
{
    conn.Open();
    using (OleDbDataAdapter cmd = new OleDbDataAdapter(sSql, conn))
    {
        cmd.Fill(sheet1);
    }
}
```

## [OPEN-XML](https://learn.microsoft.com/zh-cn/office/open-xml/open-xml-sdk)
