---
title: CRUD
date: 2023-06-25
dir.order: 1
order: 1
editLink: false
footer: false
category:
  - VB
---

Visual Basic 对数据库操作，引用`Microsoft ActiveX Data Objects 2.6 Library`，两个对象`ADODB.Connection`和`ADODB.Recordset`

## 表结构

```sql
Create table Test
(
  id int identity(1,1),
  content nvarchar(120)
)
```

## 界面

![界面布局](https://nas.ilyl.life:8092/vb/vb1.png =420x200)

![引用Microsoft ActiveX Data Objects 2.6 Library](https://nas.ilyl.life:8092/vb/vb2.png =420x200)

::: tip
新增、修改、删除代码差不多，区别在于sql语句部分
:::

### 新增

![代码](https://nas.ilyl.life:8092/vb/vb3.png =420x200)

```vb
Dim conn As New ADODB.Connection
Dim connString as String
Dim sSql As String
Dim affected As Integer
conn.Open "Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=..."

sSql = "Insert into Test(content) values('" & Text1.Text & "')"
conn.Execute sSql, affected

conn.Close
Set conn = Nothing

MsgBox IIf(affected = 1, "新增成功", "新增失败")
```

![结果](https://nas.ilyl.life:8092/vb/vb4.png =420x200)

### 修改

```vb
Private Sub Command2_Click()

Dim conn As New ADODB.Connection
Dim sSql As String
Dim affected As Integer
conn.Open "Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=..."

sSql = "update Test set content='" & Text1.Text & "' where id=1 "
conn.Execute sSql, affected

conn.Close
Set conn = Nothing

MsgBox IIf(affected = 1, "修改成功", "修改失败")

End Sub

```

### 删除

```vb
Dim conn As New ADODB.Connection
Dim sSql As String
Dim affected As Integer
conn.Open "Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=..."

sSql = "update Test set content='" & Text1.Text & "' where id=1 "
conn.Execute sSql, affected

conn.Close
Set conn = Nothing

MsgBox IIf(affected = 1, "修改成功", "修改失败")
```

### 查询

```vb
Dim conn As New ADODB.Connection
Dim connString As String
Dim sSql As String
Dim rest As New ADODB.Recordset

connString = "Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=..."
conn.Open connString

sSql = "select * from test"

If rest.State = 1 Then rest.Close
rest.Open sSql, conn, adOpenStatic, adLockReadOnly

List1.Clear

Do While Not rest.EOF
    
    List1.AddItem rest!content

    rest.MoveNext
Loop

rest.Close
Set rest = Nothing

conn.Close
Set conn = Nothing
```
