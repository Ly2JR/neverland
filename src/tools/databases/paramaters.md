---
title: 参数化查询
date: 2023-08-23
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag: 
  - 参数化查询
---

测试表`Test`，结构及数据如下:

|ID|Name|
|:-|:-|
|1|1111|
|2|2222|
|3|3333|

## In参数化查询

替换成自己的数据库连接字符串。

```cs{1}
 var connString = "server=...;Port=...;Database=..;Uid=r..oot;Pwd=...;";

 using var conn = new MySqlConnection(connString);
 conn.Open();

 var cmd = new MySqlCommand();
 var idList = new List<int> { 1, 2 };
 var idParameterList = new List<string>();
 for (var i = 0; i < idList.Count; i++)
 {
     var paramName = $"@idParam{i}";
     idParameterList.Add(paramName);
     cmd.Parameters.AddWithValue(paramName, idList[i]);
 }
 cmd.Connection = conn;
 cmd.CommandText = $"select name from test where id in ({string.Join(",", idParameterList)})";
 var dt = new DataTable();
 var sda = new MySqlDataAdapter(cmd);
 sda.Fill(dt);
 conn.Close();

 foreach (DataRow dr in dt.Rows)
 {
     Console.WriteLine(dr["name"].ToString());
 }
```
