---
title: 考勤时间间隔统计
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - EXCEL
---

## 模板

需要统计出所有员工中午考勤情况，比如中午11:00:00~12:00:00作为午餐时间。

考勤统计显示内容如下:

|工号|英文名|中文名|部门|职位|卡号|打卡时间|
|:-|:-|:-|:-|:-|:-|:-|
|0001|...|王一|...|...|...|2021-08-01 06:00:12|
|0001|...|王一|...|...|...|2021-08-01 11:31:21|
|0001|...|王一|...|...|...|2021-08-01 11:57:40|
|0001|...|王一|...|...|...|2021-08-01 17:03:00|
|0001|...|王一|...|...|...|2021-08-01 17:55:51|
|0001|...|王一|...|...|...|2021-08-01 20:01:04|
|...|...|...|...|...|...|...|

## 宏命令

### 参数

::: tabs

@tab js

```js
const options = {
  rCodeCol: 1;            //工号列
  rTimeCol: 7;            //打卡时间列
  startRow: 4;            //开始计算行
  wCodeCol: 8;            //结果工号写入列
  wTimeCol: 9;            //结果时间写入列
  wValCol: 10;            //结果时间差异值写入列
  startHour: '11:00:00';  //开始时间统计
  endHour: '12:00:00';    //截至时间统计
}
```

@tab vba

```vb
Const rCodeCol        As Integer = 1        '工号列
Const rTimeCol        As Integer = 7        '打卡时间列
Const startRow        As Integer = 4        '开始计算行
Const wCodeCol        As Integer = 8        '结果工号写入列
Const wTimeCol        As Integer = 9        '结果时间写入列
Const wValCol         As Integer = 10       '结果时间差异值写入列
Const startHour       As Integer = 11       '开始时间统计
Const endHour         As Integer = 12       '截至时间统计
```

:::

### 额外数据结构

::: tabs

@tab js

```js
let dataRecord={
  Key:'',       
  Name:'',      //姓名
  Min:'',       //中午考勤最早时间
  MinRow:0,     //中午考勤最早时间所在行
  Max:'',       //中午考勤最晚时间
  MaxRow:0      //中午考勤最晚时间所在行
};
```

@tab vba

```vb
public Key    as String
public Name   as String   '姓名
public Min    as String   '中午考勤最早时间
public MinRow as Integer  '中午考勤最早时间所在行
public Max    as String   '中午考勤最晚时间
public MaxRow as Integer  '中午考勤最晚时间所在行
```

:::

### 辅助方法

::: tabs

@tab js

```js
function dateDiff(datePart,beginDate, endDate) {
  let sDate = Date.parse(beginDate);
  let eDate =Date.parse(endDate);
  let dateDiff=eDate-sDate;
  let val=0;
  switch(datePart)
  {
    case "hh":
      val=parseInt(dateDiff/1000/60/60);
      break;
    case "n":
      val=parseInt(dateDiff/1000/60);
      break;
    case "s":
      val=parseInt(dateDiff/1000);
      break;
  }
  return val;
};

function getItem(obj, val) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].Key === val) {
      return obj[i];
    }
  }
  return undefined;
};
```

:::

### 统计数据

::: tabs

@tab js

```js
function getData(opt) {
  let dic=[];
  let maxRow = ActiveSheet.UsedRange.Rows.Count;

  for (let i = opt.startRow; i <= maxRow; i++) {
    let curCode = ActiveSheet.Cells.Item(i, opt.rCodeCol).Value2;

    let curDateTime = ActiveSheet.Cells.Item(i, opt.rTimeCol).Value2;
    curDateTime = Application.WorksheetFunction.Text(curDateTime, "yyyy-MM-dd HH:mm:ss");

    let splitDate = curDateTime.split(" ");
    let yyyyMMdd = splitDate[0];
    let startDate = yyyyMMdd + " " + startHour;
    let endDate = yyyyMMdd + " " + endHour;
    let curKey = curCode + " " + yyyyMMdd;

    if (startDate <= curDateTime && curDateTime <= endDate) {
      let item = getItem(dic, curKey);
      if (item!==undefined) {
        if (item.Min > curDateTime) {
          item.Min = curDateTime;
          item.MinRow = i;
        } else if (item.Max < curDateTime) {
          item.Max = curDateTime;
          item.MaxRow = i;
        }
      } else {
        let dataRecord = {};
        dataRecord.Key = key;
        dataRecord.Name = curCode;
        dataRecord.Min = curDateTime;
        dataRecord.MinRow = i;
        dataRecord.Max = curDateTime;
        dataRecord.MaxRow = i;
        dic.push(dataRecord);
      }
    }
  }
  return dic;
}
```

@tab vba

```vb
Private Function GetData() as Variant
Dim maxRow,i              As Long
Dim curCode,curDateTime,key   As String 
Dim dic                   As Object
Dim item                  As Variant
Dim curDate,startDate,endDate As Date

Set dic = CreateObject("scripting.dictionary")
maxRow = ActiveSheet.UsedRange.Rows.Count '最大有效行

For i = startRow To maxRow Step 1
  curCode = ActiveSheet.Cells.item(i, codeCol).Value2

  curDateTime = ActiveSheet.Cells.item(i, timeCol).Value2
  If curDateTime = "" Then GoTo goNext

  curDateTime = Application.WorksheetFunction.Text(curDateTime, "yyyy-MM-dd HH:mm:ss")
  curDate = DateValue(curDateTime)

  startDate = DateAdd("h", startHour, curDate)
  endDate = DateAdd("h", endHour, curDate)
  curDate = CDate(curDateTime)

  key = curCode + " " + Format(curDate, "yyyy-MM-dd")

  If (startDate <= curDate And curDate <= endDate) Then
    If (dic.exists(key)) Then
      Dim curVal As DataRecord
      Set curVal = dic(key)
      If (curVal.Min > curDateTime) Then
          curVal.Min = curDateTime
          curVal.MinRow = i
      ElseIf (curVal.Max < curDateTime) Then
          curVal.Max = curDateTime
          curVal.MaxRow = i
      End If
    Else
      Dim addData As New DataRecord
      addData.Name = key
      addData.Min = curDateTime
      addData.MinRow = i
      addData.Max = curDateTime
      addData.MaxRow = i
      dic.Add key, addData
      Set addData = Nothing
    End If
  End If
goNext:
Next
  GetData=dic
End Function
```

:::

### 显示数据

::: tabs

@tab js

```js
function getData(source,opt){
  source.forEach(function(ele,index){
    ActiveSheet.Cells.Item(opt.startRow+index, wCodeCol).Value2=ele.Name;
    ActiveSheet.Cells.Item(opt.startRow+index, wTimeCol).Value2=ele.Min + "~" + ele.Max;
    ActiveSheet.Cells.Item(opt.startRow+index, wValCol).Value2=dateDiff("n", ele.Min, ele.Max);
  })
}
```

@tab vba

```vb
private sub setData(source as Variant)
Dim item as Variant
i=startRow
For Each item In source.Items
  ActiveSheet.Cells.Item(i, wCodeCol).Value2 = item.Name
  ActiveSheet.Cells.Item(i, wTimeCol).Value2 = item.Min + "~" + item.Max
  ActiveSheet.Cells.Item(i, wValCol).Value2 = DateDiff("n", item.Min, item.Max)
  i = i + 1
Next
set source=nothing
End sub
```

:::
