---
title: 日志记录
date: 2023-11-09
editLink: false
footer: false
isOriginal: true
category:
  - 日志记录
tag:
  - C#
---

日志记录有很多，如[NLog](https://nlog-project.org/)，[Log4Net](https://logging.apache.org/log4net/release/manual/introduction.html)，[Serilog](https://serilog.net/)等等。

所有的日志都由`Microsoft.Extensions.Logging`提供顶级抽象。

以Serilog日志为例进行集成。

txt文件日志记录，每天产生一个。

## .NET Core

```cs{11,15}
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .WriteTo.Async(f => f.File("Logs\\log-.txt",
    outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz}[{Level:u3}] {Message:lj}{NewLine}{Exception}",
    rollingInterval: RollingInterval.Day))
    .MinimumLevel.Information()
    .CreateLogger();

try{
    var builder = WebApplication.CreateBuilder(args);
    builder.Host.UseSerilog();
    ...
    var app = builder.Build();
    ...
    app.UseSerilogRequestLogging();
    app.Run();
}
catch(Exception ex){
    Log.Fatal(ex, "Application terminated unexpectedly");
}
finally
{
    Log.CloseAndFlush();
}
```

## Prism

由于Prism最新版移除了ILogFacade，Prism提供的日志插件无法使用。

```cs
protected override void OnStartup(StartupEventArgs e)
{
    Log.Logger = new LoggerConfiguration()
        .WriteTo.Console()
        .WriteTo.Async(f => f.File("Logs\\log-.txt",
        outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz}[{Level:u3}] {Message:lj}{NewLine}{Exception}",
        rollingInterval: RollingInterval.Day))
        .MinimumLevel.Information()
        .CreateLogger();
    base.OnStartup(e);
}

protected override void OnExit(ExitEventArgs e)
{
    Log.CloseAndFlush();
    base.OnExit(e);
}

 protected override void RegisterTypes(IContainerRegistry containerRegistry)
 {
    var appLogger = new SerilogLoggerProvider(Log.Logger).CreateLogger("App");
    containerRegistry.RegisterInstance<Microsoft.Extensions.Logging.ILogger>(appLogger);
 }
```

## 使用

创建一个新类

::: tip
在Prism中，构造函数里的`ILogger<T>`无法注入，改为`ILogger`即可
:::

```cs{3}
public class Test{
    private readonly ILogger _logger;
    public Test(ILogger<Test> logger){
        _logger=logger;
    }

    public void Print(){
       _logger.LogInformation("日志");
    }
}
```
