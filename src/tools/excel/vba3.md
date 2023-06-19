---
title: 考勤迟到早退统计
date: 2023-06-19
dir.order: 3
order: 3
editLink: false
footer: false
isOriginal: true
category:
  - Excel
tag:
  - vba
  - js
---

## 模板说明

需要统计出所有员工考勤打卡迟到或早退的问题，07：54-08：01早班迟到，19：54-20：01晚班迟到。

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
const options={
    rNameCol:3,
    rJobCol :5,
    rTimeCol :7,
    wNameCol :9,
    wSCol :10,
    wNameCol1 : 12,
    wTimeCol :13,
    startRow :4,
    jobs:["检验员", "量测员"]
};
```

@tab vba

```vb
Const rNameCol  As Integer = 3    '姓名读取列
Const rJobCol   As Integer = 5    '职位读取列
Const rTimeCol  As Integer = 7    '打卡时间读取列
Const wNameCol  As Integer = 9    '姓名写入列
Const wSCol     As Integer = 10   '总次数写入列
Const wNameCol1 As Integer = 12
Const wTimeCol  As Integer = 13
Const startRow  As Integer = 4    '开始行
```

:::

### 辅助方法

::: tabs

@tab js

```js
function EoL(time) {
    let stdTime = [Date.parse("2022-01-13 07:54:00"), Date.parse("2022-01-13 8:02:00"), Date.parse("2022-01-13 19:54:00"), Date.parse("2022-01-13 20:02:00")];
    let now = Date.parse("2022-01-13 " + time);
    if ((now > stdTime[0] && stdTime[1] > now) || (now > stdTime[2] && stdTime[3] > now)) {
    return 1;
    }
    return 0;
}

function checkArray(arr, val) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
        return true;
    }
    }
    return false;
}

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

@tab vba

```vb
Private Function EoL(ByVal time As String) As Integer
    Dim stdTime As Variant
    stdTime = Array("07:54:00", "8:02:00", "19:54:00", "20:02:00")
    If (DateDiff("s", stdTime(0), time) > 0 And DateDiff("s", time, stdTime(1)) > 0) Then
        EoL = 1
    ElseIf (DateDiff("s", stdTime(2), time) > 0 And DateDiff("s", time, stdTime(3)) > 0) Then
        EoL = 2
    End If
    EoL = 0
End Function
```

:::

### 统计方法

::: tabs
@tab js

```js
function getData(opt) {
    let dic = [];
    let dicTemp = [];
    let maxRow = ActiveSheet.UsedRange.Rows.Count;

    for (let i = opt.startRow; i <= maxRow; i++) {
    let curJob = ActiveSheet.Cells.Item(i, opt.rJobCol).Value2;
    if (curJob == "") continue;
    let hasExits = checkArray(opt.jobs, curJob);
    if (!hasExits) continue;

    let curName = ActiveSheet.Cells.Item(i, opt.rNameCol).Value2;

    let curTime = ActiveSheet.Cells.Item(i, opt.rTimeCol).Value2;
    curTime = Application.WorksheetFunction.Text(curTime, "yyyy-MM-dd HH:mm:ss");
    let curTimeValue = curTime;
    let curTimeTemp = Application.WorksheetFunction.Text(curTime, "yyyy-MM-dd HH:00:00");
    curTime = Application.WorksheetFunction.Text(curTime, "HH:mm:ss");
    let curKey = curName + "|" + curTimeTemp;

    let curType = EoL(curTime);
    if (curType == 0) continue;

    let isMult = false;
    let itemMain = getItem(dic, curKey);
    if (itemMain !== undefined) {
        if (itemMain.Value <= curTimeValue) {
        itemMain.Value = curTimeValue;
        isMult = true;
        }
    } else {
        dic.push({
        Key: curKey,
        Value: curTimeValue
        });
    }
    let itemDetail = getItem(dicTemp, curName);
    if (itemDetail !== undefined) {
        if (!isMult) {
        ++itemDetail.Value;
        }
    } else {
        let newData = {
        Key: curName,
        Value: 1
        };
        dicTemp.push(newData);
    }
    }
    return [dic, dicTemp];
}
```

@tab vba

```vb
Private Function GetData(ByRef jobs As Variant) As Variant()
Dim maxRow,i, iTemp                 As Long                 
Dim curKey, curName, curJob         As String               
Dim curTime, curTimeTemp, curTimeValue, temp      As String    
Dim curType             As Integer
Dim isMult              As Boolean
Dim data(2), matchJob   As Variant
maxRow = ActiveSheet.UsedRange.Rows.Count    '最大有效行

Set data(0) = CreateObject("scripting.dictionary")
Set data(1) = CreateObject("scripting.dictionary")

For i = startRow To maxRow Step 1
    curJob = ActiveSheet.Cells.item(i, rJobCol).Value2
    If (curJob = "") Then GoTo goNext
    matchJob = Filter(jobs, curJob)
    If UBound(matchJob) = 0 Then GoTo goRun Else GoTo goNext
goRun:
    curName = ActiveSheet.Cells.item(i, rNameCol).Value2
    curTime = ActiveSheet.Cells.item(i, rTimeCol).Value2

    curTime = Application.WorksheetFunction.Text(curTime, "yyyy-MM-dd HH:mm:ss")
    curTimeValue = curTime
    curTimeTemp = Format(curTime, "yyyy-MM-dd HH:00:00")
    curTime = Application.WorksheetFunction.Text(curTime, "HH:mm:ss")
    curKey = curName + "|" + curTimeTemp

    curType = EoL(curTime)
    If curType = 0 Then GoTo goNext

    isMult = False
    If (data(0).exists(curKey)) Then
    temp = data(0)(curKey)
    If (temp <= curTimeValue) Then
        data(0)(curKey) = curTimeValue
        isMult = True
    End If
    Else
    data(0).Add curKey, curTimeValue
    End If

    If (data(1).exists(curName)) Then
    If Not isMult Then
        data(1)(curName) = data(1)(curName) + 1
    End If
    Else
    data(1).Add curName, 1
End If
goNext:
Next i

GetData = data
End Function
```

:::

### 结果显示

::: tabs
@tab js

```js
function setData(source,opt){
    ActiveSheet.Cells.Item(opt.startRow - 1, opt.wNameCol).Value2 = "姓名";
    ActiveSheet.Cells.Item(opt.startRow - 1, opt.wSCol).Value2 = "异常总次数";
    ActiveSheet.Cells.Item(opt.startRow - 1, opt.wNameCol1).Value2 = "姓名";
    ActiveSheet.Cells.Item(opt.startRow - 1, opt.wTimeCol).Value2 = "异常时间";

    source[1].forEach(function(ele, index) {
    ActiveSheet.Cells.Item(opt.startRow+index, opt.wNameCol).Value2 = ele.Key;
    ActiveSheet.Cells.Item(opt.startRow+index, opt.wSCol).Value2 = ele.Value;
    })

    source[0].forEach(function(ele, index) {
    let t = ele.Key.split("|");
    ActiveSheet.Cells.Item(opt.startRow+index, opt.wNameCol1).Value2 = t[0];
    ActiveSheet.Cells.Item(opt.startRow+index, opt.wTimeCol).Value2 = ele.Value;
    })
}
```

:::

@tab vba

```vb
Private Sub SetData(ByRef source As Variant)
Dim item,t As Variant
Dim i As Long
i = startRow

ActiveSheet.Cells.item(i - 1, wNameCol).Value2 = "姓名"
ActiveSheet.Cells.item(i - 1, wSCol).Value2 = "异常总次数"
ActiveSheet.Cells.item(i - 1, wNameCol1).Value2 = "姓名"
ActiveSheet.Cells.item(i - 1, wTimeCol).Value2 = "异常时间"

For Each item In source(1).keys
    ActiveSheet.Cells.item(i, wNameCol).Value2 = item
    ActiveSheet.Cells.item(i, wSCol).Value2 = source(1)(item)
    i = i + 1
Next
i = startRow
For Each item In source(0).keys
    t = Split(item, "|")
    ActiveSheet.Cells.item(i, wNameCol1).Value2 = t(0)
    ActiveSheet.Cells.item(i, wTimeCol).Value2 = source(0)(item)
    i = i + 1
Next
End Sub
```

:::
