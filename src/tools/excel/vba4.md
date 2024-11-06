---
title: 考勤规则统计
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

统计出所有员工每个月`迟到`、`早退`、`请假`等次数，按不同规则进行不同分值权重进行统计，分值和权重值自定义。

例如:

- 规则1(权重分10分)

  1. `迟到`、`早退`小于等于2次，每次扣0.5分，超过2次，每次1分；
  2. `请假`每次扣1分；

- 规则2(...)
  
  1. `加分项`每次加3分;

- ...

考勤统计显示内容如下:

|姓名|绩效分|1号|备注|2号|备注|...|31号|备注|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|XXX||迟到||早退|...|||
|XXX||||请假|...|||

## 宏命令

涉及布局控件需要一个`Frame`控件，一个`MultiPage`控件，一个`CommandButton`控件，若干个`Label`和`TextBox`控件，▭为`TextBox`控件用于自定义录入。

示例:

```md
|---考核标准表------------------------------------------------
|  ﹍﹍﹍﹍﹍ ﹍﹍﹍﹍﹍﹍                                     
|--|1.出勤率|-|2.设备...|-...
|  ﹉﹉﹉﹉﹉ ﹉﹉﹉﹉﹉﹉
|  权重分值:10分
|
|  关键字:迟到、早退...
|
|  扣分标准：迟到、早退总次数≤▭次每次扣▭分，反之，每次扣▭分；
|           请假1天扣▭分
|           ...
|------------------------------------------------------------
```

### 变量定义

``` vb
Option Explicit

Private Const StartReadRow As Long = 3  '开始读取行
Private Const StartReadCol As Long = 5  '开始读取列
Private Const ScoreWriteCol As Long = 4 '绩效列

Private Const PageSum1 As Long = 10 '权重分值
...

Private WithEvents cmdStart As CommandButton
Private mPage As multiPage
Private ctrlDics As New Dictionary
Private keyDics As New Dictionary
Private Const Page1CtrlKey1 As String = "tab1TxtLessCount"
...

Private allReduiceScore  As Double     '所有人都扣分
```

### 获取`Frame`里的控件

``` vb
Private Sub Init()
 Dim ctrl As Object
 Dim childPage As Object
 Dim pageCtrl As Object

ctrlDics.RemoveAll
ctrlDics.Add Page1CtrlKey1, Null
...
 
 For Each ctrl In Frame1.Controls
    If TypeOf ctrl Is CommandButton Then
        If ctrl.name = "cmdStart" Then
            Set cmdStart = ctrl
        End If
    ElseIf TypeOf ctrl Is multiPage Then
        Set mPage = ctrl
        For Each childPage In mPage.Pages
            For Each pageCtrl In childPage.Controls
                If ctrlDics.Exists(pageCtrl.name) Then
                    Set ctrlDics(pageCtrl.name) = pageCtrl
                End If
            Next
        Next
    End If
 Next
End Sub
```

### 规则统计

``` vb
Private Function Sum(keys As Dictionary) As Double
Dim sum1,... As Double
Dim count As Integer
Dim key As Variant
sum1 = PageSum1
...

    For Each key In keys.keys
        count = keys(key)
        
        Select Case key
            Case "迟到", "早退"
                If (count <= CDbl(ctrlDics(Page1CtrlKey1).Text)) Then
                    sum1 = sum1 - count * CDbl(ctrlDics(Page1CtrlKey2).Text)
                Else
                    sum1 = sum1 - count * CDbl(ctrlDics(Page1CtrlKey3).Text)
                End If
            case ...
        End Select
    Next key
    '注意:权重值单独分开，当出现负数时应该值为零
    Sum = IIf(sum1 < 0, 0, sum1) + ...
End Function
```

### 统计按钮`CommandButton`事件

``` vb
Private Sub cmdStart_Click()
On Error GoTo ErrHandler
Dim maxRow, maxCols, ReadRow, ReadCol, WriteRow, WriteCol As Long
Dim currVal, currMemo, currDate  As String
Dim sumScore As Double

maxRow = Application.Sheets(1).UsedRange.Rows.count
maxCols = Application.Sheets(1).UsedRange.Columns.count
allReduiceScore = 0

For ReadRow = StartReadRow To maxRow Step 1
    currMemo = ""
    '每天考勤情况:1号 备注 2号 备注 ...
    For ReadCol = StartReadCol To maxCols Step 2 '只取日期

        currVal = Application.Sheets(1).Cells.Item(ReadRow, ReadCol).Value2
        If currVal <> "" Then
            currDate = Application.Sheets(1).Cells.Item(2, ReadCol).Value2              '日期
            currMemo = currMemo & vbCrLf & currDate & "：" & Application.Sheets(1).Cells.Item(ReadRow, ReadCol + 1).Value2   '备注

            If keyDics.Exists(currVal) Then
                keyDics(currVal) = keyDics(currVal) + 1
            Else
                keyDics.Add currVal, 1
            End If
        End If
    Next ReadCol
    
    '绩效分
    sumScore = Sum(keyDics)
    keyDics.RemoveAll

    '赋值绩效
    Application.Sheets(1).Cells.Item(ReadRow, ScoreWriteCol).Value2 = sumScore
    Application.Sheets(1).Cells.Item(ReadRow, ScoreWriteCol).ClearComments
    '添加批注
    If currMemo <> "" Then
        With Application.Sheets(1).Cells.Item(ReadRow, ScoreWriteCol)
            If .Comment Is Nothing Then
                .AddComment Text:=currMemo
                .Comment.Visible = False
            Else
                .Comment.Text Text:=currMemo
            End If
        End With
    End If
Next ReadRow

'重新统计所有人扣分项
If allReduiceScore > 0 Then
    For ReadRow = StartReadRow To maxRow Step 1
        sumScore = Application.Sheets(1).Cells.Item(ReadRow, ScoreWriteCol).Value2
        Application.Sheets(1).Cells.Item(ReadRow, ScoreWriteCol).Value2 = sumScore - allReduiceScore
    Next ReadRow
End If

MsgBox "统计完成"
finally:
    Exit Sub
ErrHandler:
    MsgBox VBA.Err.Description
GoTo finally
End Sub
```
