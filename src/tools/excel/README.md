---
title: Excel开发
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - EXCEL
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

## VBA操作

### 设置行高

```vb
Private Function SetRowHeight(cell1Row As Integer, cell1Col As Integer, cell2Row As Integer, cell2Col As Integer, height As Integer)
     Sheet1.Range(Cells(cell1Row, cell1Col), Cells(cell2Row, cell2Col)).RowHeight = height
End Function
```

### 设置列宽

```vb
Private Function SetColumnWidth(column1 As Integer, column2 As Integer, width As Integer)
    Sheet1.Range(Cells(1, column1), Cells(1, column2)).ColumnWidth = width
End Function
```

### 合并单元格

```vb
Private Function SetMerger(cell1Row As Integer, cell1Col As Integer, cell2Row As Integer, cell2Col As Integer)
    Sheet1.Range(Cells(cell1Row, cell1Col), Cells(cell2Row, cell2Col)).MergeCells = True
End Function
```

### 合并上下两个单元格

```vb
Private Function SetMergerTopBottom(cell1Row As Integer, cell1Col As Integer, cell2Row As Integer, cell2Col As Integer)
    For i = cell1Row To cell2Row
        For j = cell1Col To cell2Col
            Sheet1.Range(Cells(cell1Row, cell1Col), Cells(cell2Row + 1, cell2Col)).MergeCells = True
        Next j
        i = i + 1
    Next i
End Function
```

### 设置背景颜色

```vb
Private Function SetBgRed(cell1Row As Integer, cell1Col As Integer, cell2Row As Integer, cell2Col As Integer)
    Sheet1.Range(Cells(cell1Row, cell1Col), Cells(cell2Row, cell2Col)).Interior.Color = RGB(255, 0, 0)
End Function
```

### 设置单元格加粗

```vb
Private Function SetTableBorderBold(cell1Row As Integer, cell1Col As Integer, cell2Row As Integer, cell2Col As Integer)
    Sheet1.Range(Cells(cell1Row, cell1Col), Cells(cell2Row, cell2Col)).BorderAround , 3, 1
End Function
```

### 设置字体加粗

```vb
Private Function SetFontBold(cell1Row As Integer, cell1Col As Integer, cell2Row As Integer, cell2Col As Integer)
    Sheet1.Range(Cells(cell1Row, cell1Col), Cells(cell2Row, cell2Col)).Font.Bold = True
End Function
```

### 设置字体居中

```vb
Private Function SetFontCenter(cell1Row As Integer, cell1Col As Integer, cell2Row As Integer, cell2Col As Integer)
    Sheet1.Range(Cells(cell1Row, cell1Col), Cells(cell2Row, cell2Col)).HorizontalAlignment = xlCenter
    Sheet1.Range(Cells(cell1Row, cell1Col), Cells(cell2Row, cell2Col)).VerticalAlignment = xlCenter
End Function
```

## 设置单元格内容

```vb
Private Function SetCellContent(cellRow As Integer, cellCol As Integer, content As String)
    Sheet1.Cells(cellRow, cellCol).Value = content
End Function
```