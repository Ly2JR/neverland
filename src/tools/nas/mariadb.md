---
title: 群晖MariaDB10
date: 2023-08-19
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag: 
  - Mariadb
  - 群晖
---

MarialDB10安装后，提示`1130`

1. NAS->控制面板->终端机和SNMP->终端机->勾选`启动SSH功能`
2. `cmd`输入`ssh your_user@your_domain -p <your_port>`
3. 进入Mariadb目录，`volume1`为安装目录

    ```bash
    cd /volume1/@appstore/MariaDB10/usr/local/mariadb10.11/bin
    ```

    如果不能直接进入,一般是`mariadb10`的版本问题，使用`ls`查看当前文件夹,

4. 进入marialdb，输入以下命令，之后输入密码

    ```bash
    ./mysql -u root -p
    ```

    登录成功显示`MariaDB[(none)]>`

5. 切换数据库

    ```bash
    use mysql
    ```

6. 更改管理员`root`host，忽略提示`Duplicate entry '%-root' for key 'PRIMARY'`

    ```bash
    update user set host='%' where user='root';
    ```

    如果提示`ERROR 1356 (HY000)`错误,使用以下授权

    ```bash
     rename user 'root'@'localhost' to '<your_new_name>'@'&';
    ```

7. 更新权限

    ```cmd
    FLUSH PRIVILEGES;
    ```

8. 启用TCP/IP连接

    即打开`MariaDB 10`页面上，勾选`启用TCP/IP连接`

9. 设置端口转发

## 设置新用户

```bash
create user 'your_user'@'your_ip' identified by 'your_password';
```

## 授权新用户指定数据库

```bash
grant all privileges on database_name.your_new_database to 'your_user'@'your_password';
```

## 测试

项目程序安装[MySqlConnector](https://mysqlconnector.net/)包。

```cs
using MySqlConnector;

Console.WriteLine("MariaDB 示例：连接并查询（异步）");

var builder = new MySqlConnectionStringBuilder
{
    Server = "127.0.0.1",
    Port = 3306,
    UserID = "root",
    Password = "<your_password>",
    Database = "mysql",
    CharacterSet = "utf8mb4",
    // 可根据需要启用 SSLMode = MySqlSslMode.Required
};

var connectionString = builder.ConnectionString;

try
{
    await using var connection = new MySqlConnection(connectionString);
    await connection.OpenAsync();

    const string sql = @"SELECT host,user FROM user where user=@user;";

    await using var cmd = new MySqlCommand(sql, connection);
    cmd.Parameters.AddWithValue("@user", "root");

    await using var reader = await cmd.ExecuteReaderAsync();
    if (!reader.HasRows)
    {
        Console.WriteLine("未找到记录。");
    }
    else
    {
        while (await reader.ReadAsync())
        {
            string host = reader.GetString("host");
            string user = reader.GetString("user");
            Console.WriteLine($"{host}\t{user}");
        }
    }

    await connection.CloseAsync();
}
catch (MySqlException mex)
{
    Console.Error.WriteLine($"数据库错误：{mex.Message}");
}
catch (Exception ex)
{
    Console.Error.WriteLine($"通用错误：{ex.Message}");
}
```
