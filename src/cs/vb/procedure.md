---
title: 存储过程输出参数
date: 2024-11-06
editLink: false
footer: false
category:
  - VB
---

模拟输出参数存储过程

```sql
Create Proc Test
(
	@a int,
	@b int out
)
as
	set @b=@a+100
go
```

测试结果

```sql
declare @b int
exec Test @a=1,@b=@b out
select @b 
--output
--101
```

```vb
Private Sub Command1_Click()
    Dim cmd As New ADODB.Command
    Dim g_Conn As New ADODB.Connection
    Dim rst As ADODB.Recordset
    Dim result As Integer
    With g_Conn
        .CursorLocation = adUseClient
        .CommandTimeout = 10
        .ConnectionString = "Provider=SQLOLEDB;DATA SOURCE=127.0.0.1;INITIAL CATALOG=master;USER ID=SA;PASSWORD=XXX"
        .Open
    End With
    With cmd
        .ActiveConnection = g_Conn
        .CommandType = adCmdStoredProc
        .CommandText = "TEST"
        .Parameters("@A") = 1
        .Parameters("@B") = result
        .Parameters("@B").Direction = adParamOutput
        Set rst = .Execute
        result = cmd.Parameters("@b").Value
    End With
    MsgBox result
End Sub
```