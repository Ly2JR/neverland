---
title: 互操作
date: 2023-06-25
dir.order: 3
order: 3
editLink: false
footer: false
category:
  - VB
tag: 
  - vb
  - c#
---

互操作是将代码进行抽象分离，供其它地方及语言使用

这里以C#调用VB为例

::: tip
C#调用VB：在开发环境生产xxx.dll时自动注册，生产环境需要[regsvr32](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/regsvr32)进行注册

VB调用C#：需要将C#类库设置为互COM操作,开发环境自动注册，生产环境需要[regasm](https://learn.microsoft.com/zh-cn/dotnet/framework/tools/regasm-exe-assembly-registration-tool)生成tlb文件。
:::

![效果](https://nas.ilyl.life:8092/vb/vb5.gif =420x200)

::: tabs

@tab vb

```vb
Option Explicit

Private Const g_connString As String = "Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=..."

Private content As String
Private g_conn As ADODB.Connection
Private g_res As ADODB.Recordset

Public Property Get TestContent() As String
    TestContent = content
End Property

Public Property Let TestContent(vData As String)
    content = vData
End Property

Public Function CRUD(ByVal sSql As String, ByRef errMsg As String) As Integer
On Error GoTo ErrHandler:
CRUD = 0
g_conn.Execute sSql, CRUD
finally:
    Exit Function
ErrHandler:
    errMsg = VBA.Err.Description
    GoTo finally
End Function

Public Function Add(errMsg As String) As Integer
On Error GoTo ErrHandler:
Dim sSql As String
Add = 0
sSql = "Insert into Test(content) values ('" & TestContent & "')"
g_conn.Execute sSql, Add
finally:
    Exit Function
ErrHandler:
   errMsg = VBA.Err.Description
    GoTo finally
End Function

Public Function Query(ByVal sSql As String, errMsg As String) As ADODB.Recordset
On Error GoTo ErrHandler:
If g_res.State = 1 Then g_res.Close
g_res.Open sSql, g_conn, adOpenStatic, adLockReadOnly
Set Query = g_res
finally:
    Exit Function
ErrHandler:
     errMsg = VBA.Err.Description
    GoTo finally
End Function

Private Sub Class_Initialize()
If g_conn Is Nothing Then
    Set g_conn = New ADODB.Connection
End If
If g_conn.State <> 1 Then
    g_conn.Open g_connString
End If
If g_res Is Nothing Then
    Set g_res = New ADODB.Recordset
End If
End Sub

Private Sub Class_Terminate()
If Not g_res Is Nothing Then
    If g_res.State = 1 Then g_res.Close
    Set g_res = Nothing
End If
If Not g_conn Is Nothing Then
    If g_conn.State = 1 Then g_conn.Close
    Set g_conn = Nothing
End If
End Sub
```

@tab cs

```cs
var t = new ATest.DBClass();
var errMsg = string.Empty;
t.set_TestContent("C#");
var ret = t.Add(ref errMsg);
Console.WriteLine(ret == 1 ? "新增成功" : errMsg);

var rest = t.Query("select * from test", ref errMsg);

while (!rest.EOF)
{
    Console.WriteLine(rest.Fields["id"].Value + "  " + rest.Fields["content"].Value);
    rest.MoveNext();
}
t=null;
Console.ReadKey();
```

:::

VB和C#互操作有很多细节部分：

1. 定义好接口及数据交互部分
2. 设置`二进制兼容`
3. Visual Basic 常用`DomDocument`来处理数据
4. C#不直接引用及注册VB动态链接库，而是使用`Interop.`文件
