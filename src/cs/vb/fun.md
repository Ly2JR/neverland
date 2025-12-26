---
title: 函数、类、模块
date: 2023-06-25
editLink: false
footer: false
category:
  - VB
---

在基础的CRUD操作中，发现很多代码都是重复的，可能就是SQL语句的区别。

## 函数

Visual Basic函数有两种形式，无返回值的`Sub`和有返回值的`Function`

::: tabs

@tab Sub

```vb
Public Sub Query()
...
End Sub
```

@tab Function

```vb
Public Function Add() as Integer
Add=0
...
Add=1
End Function
```

:::

将CRUD操作中的对数据库部分进行提取为`Function`函数，事件本身就是一个`Sub`函数

```vb
Public Function CRUD(ByVal sSql As String) As Integer
    Dim conn As New ADODB.Connection
    Dim connString As String
    Dim affected As Integer
    CRUD = 0
    connString = "Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=..."
    conn.Open connString

    conn.Execute sSql, CRUD

    conn.Close
    Set conn = Nothing
End Function
```

## 类

类配合属性使用，另外类中有两个事件`Class_Initialize`和`Class_Terminate`，使用时需要`New`

::: tabs

@tab 普通属性

```vb
Private id As Integer

Public Property Get TestId() As Integer
    TestId = id
End Property

Public Property Let TestId(vData As Integer)
    id = vData
End Property
```

@tab 对象属性

```vb
Private rest As ADODB.Recordset

Public Property Get TestRecordSet() As ADODB.Recordset
    Set TestRecordSet = rest
End Property

Public Property Set TestRecordSet(vData As ADODB.Recordset)
    Set rest = vData
End Property
```

:::

完整的类定义如下：

```vb
Option Explicit

Private content As String

Private rest As ADODB.Recordset

Public Property Get TestContent() As String
    TestContent = content
End Property

Public Property Let TestContent(vData As String)
    content = vData
End Property

Public Property Get TestDescription() As String
TestDescription = ""
    If Not rest Is Nothing Then
        If Not rest.EOF Then
            TestDescription = rest!id & "  " & rest!content
        End If
    End If
End Property

Public Property Get TestRecordSet() As ADODB.Recordset
    Set TestRecordSet = rest
End Property

Public Property Set TestRecordSet(vData As ADODB.Recordset)
    Set rest = vData
End Property

Private Sub Class_Initialize()
    If rest Is Nothing Then
        Set rest = New ADODB.Recordset
    End If
End Sub

Private Sub Class_Terminate()
    If Not rest Is Nothing Then
        If rest.State = 1 Then rest.Close
        Set rest = Nothing
    End If
End Sub
```

查询代码如下:

```vb
Dim conn As New ADODB.Connection
Dim connString As String
Dim sSql As String
Dim rest As New ADODB.Recordset
Dim test As New testCls
connString = "Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=sa;Password=..."
conn.Open connString

sSql = "select * from test"

If rest.State = 1 Then rest.Close
rest.Open sSql, conn, adOpenStatic, adLockReadOnly

Set test.TestRecordSet = rest

List1.Clear

Do While Not test.TestRecordSet.EOF
    
    List1.AddItem test.TestDescription

    test.TestRecordSet.MoveNext
Loop

Set test = Nothing

conn.Close
Set conn = Nothing
```

## 模块

模块与类相识，区别在于模块内的代码是全局变量。

一个数据库操作的全局模块

```vb
Option Explicit

Private Const g_connString As String = "Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=sa;Password=..."

Private g_conn As ADODB.Connection

Public Sub ConnectDb()
    If g_conn Is Nothing Then
        Set g_conn = New ADODB.Connection
    End If
    If g_conn.State <> 1 Then
        g_conn.Open g_connString
    End If
End Sub

Public Sub CloseDb()
    If g_conn.State = 1 Then g_conn.Close
    Set g_conn = Nothing
End Sub


Public Function G_CRUD(ByVal sSql As String) As Integer
On Error GoTo ErrHandler:
    Dim affected As Integer
    G_CRUD = 0
    ConnectDb
    g_conn.Execute sSql, G_CRUD
    finally:
        Exit Function
    ErrHandler:
        MsgBox VBA.Err.Description
        GoTo finally
End Function

Public Function G_Query(ByVal sSql As String) As ADODB.Recordset
On Error GoTo ErrHandler:
    Dim rest As New ADODB.Recordset
    If rest.State = 1 Then rest.Close
    ConnectDb
    rest.Open sSql, g_conn, adOpenStatic, adLockReadOnly
    Set G_Query = rest
finally:
    Exit Function
ErrHandler:
    MsgBox VBA.Err.Description
    GoTo finally
End Function
```
