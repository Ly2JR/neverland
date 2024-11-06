---
title: 中位数统计
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - EXCEL
---

::: tip
统计学中的专有名词，是按顺序排列的一组数据中居于中间位置的数
:::

## 模板

原始数据显示如下:

|时间|...|数据1|数据2|数据3|数据4|
|:-|:-|:-|:-|:-|:-|
|01/01|...|9.31|620.41|8.97|1134.76|
|01/01|...|9.42|611.12|9.12|1214.11|
|01/01|...|9.34|600.42|8.99|1206.87|
|01/02|...|9.41|623.57|9.18|1138.21|
|01/02|...|9.43|623.57|9.05|1175.29|
|01/02|...|9.51|624.09|9.14|1165.84|
|01/02|...|9.42|611.12|9.11|1157.75|
|...|...|...|...|...|...|

目测中位数统计结果应该如下:

|时间|...|数据1|数据2|数据3|数据4|
|:-|:-|:-|:-|:-|:-|
|01/01|...|9.34|611.12|8.99|1206.87|
|01/02|...|9.425|623.57|9.125|1161.795|

## 宏命令

### 参数

::: tabs

@tab js

```js
const options = {
    rDateCol: 1;    //日期所在列
    rCol1: 3;       //Data1读取列
    rCol2: 4;       //Data2读取列
    rCol3: 5;       //Data3读取列
    rCol4: 6;       //Data4读取列
    startRow: 4;    //第几行开始计算
    wRow: 2;        //第几行开始结果写入
    wDateCol: 8;    //日期结果所在列
    wCol1: 9;       //Data1统计结果列
    wCol2: 10;      //Data2统计结果列
    wCol3: 11;      //Data3结果列
    wCol4: 12;      //Data4结果列
}

```

@tab vba

```vb
Const rDateCol     As Integer = 1          '日期所在列
Const rCol1        As Integer = 3          'Data1读取列
Const rCol2        As Integer = 4          'Data2读取列
Const rCol3        As Integer = 5          'Data3读取列
Const rCol4        As Integer = 6          'Data4读取列
Const startRow     As Integer = 4          '第几行开始计算
Const wRow         As Integer = 2          '第几行开始结果写入
Const wDateCol     As Integer = 8          '日期结果所在列
Const wCol1        As Integer = 9          'Data1统计结果列
Const wCol2        As Integer = 10         'Data2统计结果列
Const wCol3        As Integer = 11         'Data3结果列
Const wCol4        As Integer = 12         'Data4结果列
```

:::

### 赋值方法

::: tabs

@tab js

```js
function GetMedian(dataArray,eleSize){
    let temp=0,medianData=0,index=0;
    for(let i = 0;i<eleSize;i++){
    for(let j=i+1;j<eleSize;j++){
        if (dataArray[i] > dataArray[j]){
        temp = dataArray[i];
        dataArray[i] = dataArray[j];
        dataArray[j] = temp;
        }
    }
    }

    if (eleSize% 2 === 0) {//偶数
    index = eleSize / 2;
    medianData = (dataArray[index - 1] + dataArray[index]) / 2;
    }
    else { //奇数
    index = (eleSize + 1) / 2 - 1;
    medianData = dataArray[index];
    }
    return medianData;
}
```

@vba

```vb
Private Function GetMedian(ByRef data() As Double, ByVal elSize As Integer) As Double
Dim i, j, index As Long
Dim temp As Double
    For i = 0 To elSize - 1 Step 1
    For j = i + 1 To elSize - 1 Step 1
        If (data(i) > data(j)) Then
        temp = data(i)
        data(i) = data(j)
        data(j) = temp
        End If
    Next j
    Next i

    If (elSize Mod 2 = 0) Then   '偶数
    index = (elSize / 2)
    GetMedian = (data(index - 1) + data(index)) / 2
    Else '奇数
    index = (elSize + 1) / 2 - 1
    GetMedian = data(index)
    End If
End Function
```

:::

### 统计数据

::: tabs

@tab js

```js
function MedianStatistics(opt)
{
    let index =0;
    let Data1=[],Data2=[],Data3=[],Data4=[];
    let Data1Val=0,Data2Val=0,Data3Val=0,Data4Val=0;
    let tempKey=undefined;
    let wIndex = wRow;
    let maxRow = ActiveSheet.UsedRange.Rows.Count+1;

    for(let i = startRow;i<=maxRow;i++){
    let currentKey = ActiveSheet.Cells.Item(i, opt.rDateCol).Value2;
    if(i===MaxRow||(tempKey!==undefined && tempKey!==currentKey)) {
        if(tempKey===undefined) continue;
        tempKey = Application.WorksheetFunction.Text(tempKey, "MM/dd");
        ActiveSheet.Cells.Item(wIndex, opt.wDateCol).Value2 = tempKey;

        Data1Val = GetMedian(Data1, index);
        Data2Val = GetMedian(Data2, index);
        Data3Val = GetMedian(Data3, index);
        Data4Val = GetMedian(Data4, index);
        ActiveSheet.Cells.Item(wIndex, opt.wCol1).Value2 = parseFloat(Data1Val).toFixed(2);
        ActiveSheet.Cells.Item(wIndex, opt.wCol2).Value2 = parseFloat(Data2Val).toFixed(2);
        ActiveSheet.Cells.Item(wIndex, opt.wCol3).Value2 = parseFloat(Data3Val).toFixed(2);
        ActiveSheet.Cells.Item(wIndex, opt.wCol4).Value2 = parseFloat(Data4Val).toFixed(2);

        Data1=[];
        Data2=[];
        Data3=[];
        Data4=[];

        wIndex++;
        tempKey =undefined;
        index = 0;
    }
    if(currentKey===undefined) continue;

    Data1Val = ActiveSheet.Cells.Item(i, opt.rCol1).Value2;
    Data2Val = ActiveSheet.Cells.Item(i, opt.rCol2).Value2;
    Data3Val = ActiveSheet.Cells.Item(i, opt.rCol3).Value2;
    Data4Val = ActiveSheet.Cells.Item(i, opt.rCol4).Value2;

    Data1.push(Data1Val);
    Data2.push(Data2Val);
    Data3.push(Data3Val);
    Data4.push(Data4Val);

    tempKey = currentKey;
    index++;
    }
}
```

@tab vba

```vb
Private sub MedianStatistics() 
Dim currentKey,tempKey                      As String  
Dim maxRow,i,index,capacity,wIndex          As Long        
Dim Data1(),Data2(),Data3(),Data4()         As Double
Dim Data1Val, Data2Val, Data3Val, Data4Val  As Double

capacity = 20
ReDim Data1(capacity)
ReDim Data2(capacity)
ReDim Data3(capacity)
ReDim Data4(capacity)

wIndex = writeRow
maxRow = ActiveSheet.UsedRange.Rows.Count + 1
index = 0
tempKey = ""

For i = startRow To maxRow Step 1

    currentKey = ActiveSheet.Cells.item(i, rDateCol).Value2
    If ((i = maxRow) Or (tempKey <> "" And tempKey <> currentKey)) Then
    If (tempKey = "") Then GoTo goNext

    tempKey = Application.WorksheetFunction.Text(tempKey, "MM/dd")
    Data1Val = Round(GetMedian(Data1, index), 2)
    Data2Val = Round(GetMedian(Data2, index), 2)
    Data3Val = Round(GetMedian(Data3, index), 2)
    Data4Val = Round(GetMedian(Data4, index), 2)
    ActiveSheet.Cells.item(wIndex, wCol1).Value2 = Data1Val
    ActiveSheet.Cells.item(wIndex, wCol2).Value2 = Data2Val
    ActiveSheet.Cells.item(wIndex, wCol3).Value2 = Data3Val
    ActiveSheet.Cells.item(wIndex, wCol4).Value2 = Data4Val

    capacity = 20
    ReDim Data1(capacity)
    ReDim Data2(capacity)
    ReDim Data3(capacity)
    ReDim Data4(capacity)

    wIndex = wIndex + 1
    tempKey = ""
    index = 0
    End If
    Data1Val = ActiveSheet.Cells.item(i, rCol1).Value2
    Data2Val = ActiveSheet.Cells.item(i, rCol2).Value2
    Data3Val = ActiveSheet.Cells.item(i, rCol3).Value2
    Data4Val = ActiveSheet.Cells.item(i, rCol4).Value2

    Data1(index) = Data1Val
    Data2(index) = Data2Val
    Data3(index) = Data3Val
    Data4(index) = Data4Val

    tempKey = currentKey
    index = index + 1

    If (index Mod 20 = 0) Then '超出容量了
    capacity = capacity + 20
    ReDim Preserve Data1(capacity)
    ReDim Preserve Data2(capacity)
    ReDim Preserve Data3(capacity)
    ReDim Preserve Data4(capacity)
    End If
goNext:
Next i
    Exit Sub
End Sub
```

:::
