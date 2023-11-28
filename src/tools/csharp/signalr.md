---
title: Signalr
date: 2023-11-28
editLink: false
footer: false
isOriginal: true
category:
  - Signalr
tag:
  - C#
---

[SignalR](https://learn.microsoft.com/zh-cn/aspnet/core/signalr/introduction?view=aspnetcore-8.0)是一个很好的实时应用。

并且提供Android和IOS以及Web相关包。

以一个简单的聊天对话为例，包含以下功能

- [x] 实时通信
- [x] SignalR日志
- [x] 通过API使用SignalR
- [x] 通过WebSocket使用SignalR

![聊天](https://nas.ilyl.life:8092/dotnet/signalr.gif =420x200)

::: tip
提示"发生一个或多个错误，未能启动调试适配器。可以在输出窗口中查看额外的信息。"时

在工具\选项\调试\常规\对ASP.NET启用JavaScript调试(Chrome、Edge和IE)中，取消即可。
:::

::: warning
`SendAsync`、`InvokeAsync`对方法名或者参数类型必须完成一致才行。
:::

## 实时通信

引用`Microsoft.AspNetCore.SignalR`

```cs
using Microsoft.AspNetCore.SignalR;
```

继承`Hub`

```cs
public class ChatHub:Hub
{

}
```

在`ChatHub`里处理所有客户端之间的的交互。

主要有两个，发消息和接收消息,他们都依赖`Hub`，提供了各种方法

- 发送消息：`SendAsync`

    ```cs
    public async Task SendMessage(string user, string message)
        => await Clients.All.SendAsync("ReceiveMessage", user, message);
    ```

    通过发送消息`SendAsync`实现不同客户端的消息发送

  - 客户端A发送消息到客户端B
  - 客户端B发送消息到客户端A
  - ...

  如何确认哪个客户端，以及发送给哪个客户端？

  这时就需要`Hub.Context`上下文。

  重写`OnConnectedAsync`和`OnDisconnectedAsync`方法，并通过`Context.GetHttpContext()`获取到客户端连接。

- 接收消息：`InvokeAsync`

  接收消息与发送消息类似，具体示例放在API部分。

### 中心

通过上下文得知，客户端连接时会自动携带一个唯一ID`id=r22i63i8cd9xALATOW9HhA`。

因此，继续新增两个属性`user`标识身份，`type`标识身份类型`0:普通客户端`,`1:管理员客户端`，作为简单身份验证。

为了统一管理，新建`ChatManager`类，记录所有客户端的连接断开情况。

- 客户端类

```cs
public class User
{
    public User() { }

    public User(string? userId, uint userType, string? intime)
    {
        this.UserId = userId;
        this.UserType = userType;
        this.InTime = intime;
    }

    //自定义用户ID
    public string? UserId { get; set; }
    //SignalR唯一标识
    public string? ConnectionId { get; set; }
    //自定义用户类型
    public uint UserType { get; set; }
    //连接时间
    public string? InTime { get; set; }
}
```

- 聊天管理类

```cs
public class ChatManager
{
private readonly ConcurrentDictionary<string, User> _chatRoom;
private readonly ILogger<ChatManager> _logger;
private const string TimeFormat = "HH:mm:ss";
public ChatManager(ILogger<ChatManager> logger, ConcurrentDictionary<string, User> chatRoom)
{
    _logger = logger;
    _chatRoom = chatRoom;
}

public User? this[string connectionId]
{ get { return _chatRoom[connectionId]; } }

public User? Get(string userId)
{
    return _chatRoom.Values.FirstOrDefault(u => u.UserId == userId);
}


public List<User> GetAll()
{
    var onlineUsers = _chatRoom.Values.OrderBy(o => o.InTime);
    return onlineUsers.ToList();
}

public void AddOrUpdate(string connectionId, string userId, uint type = 0)
{
    _chatRoom.AddOrUpdate(connectionId, new User()
    {
        UserId = userId,
        ConnectionId = connectionId,
        UserType = type,
        InTime = DateTime.Now.ToString(TimeFormat),
    }, (k, o) =>
    {
        o.UserId = userId;
        o.ConnectionId = connectionId;
        o.UserType = type;
        o.InTime = DateTime.Now.ToString(TimeFormat);
        return new User() { ConnectionId = connectionId, UserType = type };
    });
    _logger.LogInformation($"房间管理:用户ID:{userId},用户类型:{type}进入房间");
}

public void Remove(string connectionId)
{
    if (_chatRoom.TryRemove(connectionId, out var v))
    {
        _logger.LogInformation($"房间管理:移除用户ID:{v.UserId},用户类型:{v.UserType},进入时间:{v.InTime},离开时间:{DateTime.Now.ToString(TimeFormat)}");
    }
    else
    {
        _logger.LogInformation($"房间管理:移除用户失败");
    }
}
}
```

- 重写`OnConnectedAsync`

```cs
public override async Task OnConnectedAsync()
{
    var ctx = Context.GetHttpContext();
    if (ctx != null)
    {
        if (!ctx.Request.Query.TryGetValue("user", out var oName))
        {
            _logger.LogWarning($"非法用户连接到服务中心");
            Context.Abort();
            return;
        }
        var userId = oName.FirstOrDefault();
        if (string.IsNullOrEmpty(userId))
        {
            _logger.LogWarning($"非法用户连接到服务中心");
            Context.Abort();
        }
        var type = "";
        if (ctx.Request.Query.TryGetValue("type", out var oType))
        {
            type = oType.FirstOrDefault();
        }
        _logger.LogInformation($"用户ID[{userId}],ID[{Context.ConnectionId}],用户类型:{type}连接到服务中心");
        _chatManager.AddOrUpdate(Context.ConnectionId, userId!, string.IsNullOrEmpty(type) ? 0u : 1u);
    }
    await base.OnConnectedAsync();
}
```

- 重写`OnDisconnectedAsync`

```cs
public override Task OnDisconnectedAsync(Exception? exception)
{
    var ctx = Context.GetHttpContext();
    if (ctx != null)
    {
        if (ctx.Request.Query.TryGetValue("user", out var oName))
        {
            _logger.LogInformation($"用户[{oName.FirstOrDefault()}],ID[{Context.ConnectionId}]断开连接");
        }
        _chatManager.Remove(Context.ConnectionId);
    }
    return base.OnDisconnectedAsync(exception);
}
```

- 向其他客户端发送消息

通过`user`指定用户

客户端A向客户端发消息时，客户端B不在线时,需要告知客户端A，`17行`高亮处。

当客户端B成功消息时,`21行`高亮处。

```cs{3,9,17,21}
public async Task SendToClient(string clientId, string message)
{
    var ctx = Context.GetHttpContext();
    if (ctx != null)
    {
        if (!ctx.Request.Query.TryGetValue("user", out var oName))
        {
            _logger.LogInformation($"非法用户向客户端发送消息：{message}");
            await Clients.Client(Context.ConnectionId).SendAsync("ReceiveClientMessage", "unknown", 999);
        }
        else
        {
            var currentClientUser = oName.FirstOrDefault();
            var host = _chatManager.Get(clientId);
            if (host is null)
            {
                await Clients.Client(Context.ConnectionId).SendAsync("ReceiveClientMessage", clientId, 8);
                _logger.LogInformation($"客户端用户[{currentClientUser}]向其他客户端[{clientId}]发送消息：{message},但其他客户端不在线");
                return;
            }
            await Clients.Client(host.ConnectionId!).SendAsync("ReceiveHostMessage", currentClientUser, message);
            _logger.LogInformation($"客户端A用户[{currentClientUser}]成功向其他客户端B[{clientId}]发送消息：{message}");
        }
    }
}
```

### 集成到API中

```cs
builder.Services.AddSingleton<ChatManager>();
builder.Services.AddSingleton<ConcurrentDictionary<string, User>>();
builder.Services.AddSignalR();
builder.Services.AddCors(option => option.AddPolicy("SignalR", builder =>
{
    builder.AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(origin => true)
    .AllowCredentials();
}));

...

var app = builder.Build();
app.MapHub<ChatHub>("/chathub", options =>
{
    options.Transports = HttpTransportType.WebSockets |
    HttpTransportType.LongPolling;
});
app.UseCors("SignalR");
```

## 日志

添加`Serilog`日志记录所有情况

引用`Serilog`、`Serilog.AspNetCore`、`Serilog.Sinks.Async`、`Serilog.Sinks.File`四个包

将以下代码放在`Program`顶层

```cs
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .WriteTo.Async(f => f.File("Logs\\log-.txt",
    outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz}[{Level:u3}] {Message:lj}{NewLine}{Exception}",
    rollingInterval: RollingInterval.Day))
    .MinimumLevel.Information()
    .CreateLogger();
```

启用日志

```cs
builder.Host.UseSerilog();//日志
...
app.UseSerilogRequestLogging();
```

完整`Program`

```cs
using Microsoft.AspNetCore.Http.Connections;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using SignalrApi;
using SignalrApi.Models;
using System.Collections.Concurrent;
using System.Text.Json.Serialization;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .WriteTo.Async(f => f.File("Logs\\log-.txt",
    outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz}[{Level:u3}] {Message:lj}{NewLine}{Exception}",
    rollingInterval: RollingInterval.Day))
    .MinimumLevel.Information()
    .CreateLogger();

try
{
    var builder = WebApplication.CreateSlimBuilder(args);
    builder.Host.UseSerilog();//日志
    builder.Services.AddSingleton<ChatManager>();
    builder.Services.AddSingleton<ConcurrentDictionary<string, User>>();
    builder.Services.AddSignalR();
    builder.Services.AddCors(option => option.AddPolicy("SignalR", builder =>
    {
        builder.AllowAnyMethod()
        .AllowAnyHeader()
        .SetIsOriginAllowed(origin => true)
        .AllowCredentials();
    }));
    builder.Services.ConfigureHttpJsonOptions(options =>
    {
        options.SerializerOptions.TypeInfoResolverChain.Insert(0, AppJsonSerializerContext.Default);
    });

    var app = builder.Build();
    app.MapHub<ChatHub>("/chathub", options =>
    {
        options.Transports = HttpTransportType.WebSockets |
        HttpTransportType.LongPolling;
    });
    app.UseCors("SignalR");
    app.UseSerilogRequestLogging();

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Application terminated unexpectedly");
}
finally
{
    Log.CloseAndFlush();
}

[JsonSerializable(typeof(List<User>))]
internal partial class AppJsonSerializerContext : JsonSerializerContext
{

}
```

## 客户端

- 主程序

```cs
using Microsoft.AspNetCore.SignalR.Client;

HubConnection connection = null;
await ConnectAsync();

ConsoleKeyInfo pressKey;
Console.Clear();
Console.CancelKeyPress += Console_CancelKeyPress;

void Console_CancelKeyPress(object? sender, ConsoleCancelEventArgs e)
{
    e.Cancel = true;
}

do
{
    Console.WriteLine("按Q键退出程序，或CTRL+C中断操作");
    pressKey = Console.ReadKey(true);

    Console.Write("向客户端A发送消息:");
    var msg = Console.ReadLine();
    if (connection != null)
    {
        await connection.InvokeAsync("SendToClient", "clientA", msg);
    }
} while (pressKey.Key!=ConsoleKey.Q);
await CloseConnectionAsync();
```

- 连接

```cs
async Task ConnectAsync()
{
    try
    {
        connection = new HubConnectionBuilder()
        .WithUrl("http://localhost:5214/chathub?user=clientB&type=1")
        .WithAutomaticReconnect()
        .Build();
        connection.On<string, string>("ReceiveHostMessage", (userId, message) =>
        {
            Receive(userId, message);
        });
        await connection.StartAsync();
        Console.WriteLine("客户端[clientB]成功连接到chathub");
    }
    catch (Exception ex)
    {
        throw new Exception(ex.Message);
    }
}
```

- 接收消息

```cs
void Receive(string userId, string msg)
{
    Console.WriteLine();
    Console.Write($"来自客户端A[{userId}]消息:");
    switch (msg)
    {
        case "6":
            Console.Write("在线");
            break;
        case "7":
            Console.Write("未在规定时间内响应");
            break;
        case "8":
            Console.Write("不在线");
            break;
        default:
            Console.Write(msg);
            break;
    }
    Console.WriteLine();
}
```

- 断开连接

```cs
async Task CloseConnectionAsync()
{
    if (connection != null)
    {
        if (connection.State != HubConnectionState.Disconnected)
        {
            await connection.StopAsync();
        }
        await connection.DisposeAsync();
    };
    Console.WriteLine("离开chathub");
}
```

## API调用

虽然使用了`SignalR`,并且也提供了其他平台的支持，但是也可以对`SignalR`部分封装，通过API的方式使用。

- 查看所有在线客户端

```cs
//查询所有在线客户端
var chatApi = app.MapGroup("/chat");
chatApi.MapGet("/", ([FromServices] ChatManager chatManager) =>Results.Ok(chatManager.GetAll()));
```

![在线](https://nas.ilyl.life:8092/dotnet/signalr1.png =420x200)

- 向指定客户端发送消息

```cs
//向指定用户发送消息
chatApi.MapGet("/SendTo", async (string user,uint msg, [FromServices] IHubContext<ChatHub> ctx, [FromServices] ChatManager chatManager) =>
{
    var host = chatManager.Get(user);
    if (host is not null)
    {
        await ctx.Clients.Client(host.ConnectionId!).SendAsync("ReceiveHostMessage", user, msg);
        return Results.Ok("Ok");
    }
    return Results.Ok("Offline");
});
```

![api发送消息](https://nas.ilyl.life:8092/dotnet/signalr2.gif =420x200)

- 向指定客户端发送消息并接收客户端响应消息
