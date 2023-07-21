---
title: IOC
date: 2023-07-4
dir.order: 1
order: 1
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
---

## Winform使用IOC

在Winfrom里使用[Microsoft.Extensions.DependencyInjection](https://learn.microsoft.com/zh-cn/dotnet/core/extensions/dependency-injection-usage)、[SqlSugar](https://www.donet5.com/Home/Doc)、[Quartz](https://www.quartz-scheduler.net/)、[Serilog](https://serilog.net/)、[Sqlite](https://www.sqlite.org/index.html)。[源代码地址](https://github.com/Ly2JR/wpf-samples/tree/main/src/WindowsFormsApp1)。

### ORM

以Sqlite作为数据库及日志数据库，在Nuget安装`Sqlite`和`SqlSugar`

`DbManager`类用于创建表、初始化数据库，使用`SqlSugar`提供的ORM，CodeFirst优先。为了简便，动态见表及初始化。

将所有表结构实体放在单独类库中，新建用户类:

```cs
[SugarTable("Login", "用户表")]
[SugarIndex("index_login_name", nameof(Login.Code), OrderByType.Desc, true)]
public class Login
{

    [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
    public int Id { get; set; }

    [SugarColumn(Length = 40)]
    public string Code { get; set; }

    [SugarColumn(Length = 40)]
    public string Password { get; set; }
}
```

在`DbManager`类中，初始化新建表如下,`XXXXXX`为表结构的类库文件

```cs
 //初始化表
Type[] types = Assembly
.LoadFrom("XXXXXX")
.GetTypes()
.ToArray();
ISqlSugarClient.CodeFirst.InitTables(types);
```

使用`AnyAsync`检查表数据是否存在，不存在则添加默认数据，为了提高查询时间使用了`Task.WhenAny`

```cs
//表数据是否存在
var queryLogin = ISqlSugarClient.Queryable<Login>().AnyAsync();
var queryTasks = new List<Task<bool>> { queryLogin};
while (queryTasks.Count > 0)
{
    var query = await Task.WhenAny<bool>(queryTasks);
    switch (query.Result)
    {
        case false:
            //不存在则默认添加
            await _dbClient.Insertable<Login>(Logins).ExecuteCommandAsync();
            break;
    }
    queryTasks.Remove(query);
}
```

注入SqlSugar实体：

```cs
SqlSugarScope sqlSugar = new SqlSugarScope(new List<ConnectionConfig>{
    new ConnectionConfig()
    {
        ConfigId=1,
        DbType = SqlSugar.DbType.Sqlite,
        ConnectionString = "DataSource=" + options.DbPath,
        IsAutoCloseConnection = true,
    },
    new ConnectionConfig()
    {
        ConfigId=2,
        DbType = SqlSugar.DbType.Sqlite,
        ConnectionString = "DataSource=" + options.LogPath,
        IsAutoCloseConnection = true,
    }
    },
    db =>
    {
        db.Aop.OnLogExecuting = (sql, pars) =>
        {
            var cmd = UtilMethods.GetSqlString(DbType.Sqlite, sql, pars);
            Debug.WriteLine(cmd);
        };
    });
IServiceCollection.AddSingleton<ISqlSugarClient>(sqlSugar);
```

### 配置文件

使用自定义配置文件`appsettings.json`，需要将文件右击属性设置为`始终复制`和`内容`。

`AppServiceOptions`类就是`appsettings.json`的实体类，节点一一对应。

```cs
//配置文件
IConfigurationBuilder configbuilder = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
var configuration = configbuilder.Build();
//配置文件的实体类
var section = configuration.GetSection(nameof(AppServiceOptions));
var options = new AppServiceOptions();
section.Bind(options);
IServiceCollection.AddSingleton<IConfiguration>(configuration);
IServiceCollection.AddOptions();
```

### Quartz

自定义一个类`TimeJob`实现`IJob`接口，在IOC中注入

```cs
public class TimeJob : IJob, IDisposable
{
    private ILogger _logger;
    public TimeJob(ILogger<TimeJob> logger)
    {
        _logger = logger;
    }

    public void Dispose()
    {
        Console.WriteLine($"{DateTime.Now}执行完同步作业");
    }

    public async Task Execute(IJobExecutionContext context)
    {
        _logger.LogInformation(DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
        await Task.CompletedTask;
    }
}
```

```cs
//注册Quartz
IServiceCollection.AddQuartz(q =>
{
    q.SchedulerId = "Scheduler-Core";
    q.UseMicrosoftDependencyInjectionJobFactory();
    q.ScheduleJob<TimeJob>(trigger => trigger
    .WithIdentity("TimeJobTrigger")
    .StartNow()
    .WithDailyTimeIntervalSchedule(x => x.WithInterval(options.JobTimeInterval, IntervalUnit.Minute))
    );
});
IServiceCollection.AddQuartzHostedService(o =>
{
    o.WaitForJobsToComplete = true;
    o.StartDelay = TimeSpan.FromSeconds(10);
});
```

### Serilog

```cs
//注册Logger
LogProvider.IsDisabled = true;
var providers = new LoggerProviderCollection();
Log.Logger = new LoggerConfiguration()
        .MinimumLevel.Information()
        .WriteTo.SQLite(options.LogPath)
        .WriteTo.Providers(providers)
        .CreateLogger();
services.AddSingleton(providers);
services.AddLogging(loggingBuilder => loggingBuilder.AddSerilog(dispose: true));
```

### 关键注入

核心部分在于IOC，定义一个扩展方法`BuildWinform`，完整代码如下

```cs
public static class ConfigService
{
    public static IServiceProvider BuildWinform(this IServiceCollection services)
    {
        //注册登录页面
        services.AddScoped<FrmLogin>();
        //注册单例
        services.AddSingleton<DBManager>();
        //注册Quartz作业
        services.AddTransient<TimeJob>();
        //配置文件
        IConfigurationBuilder configbuilder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
        var configuration = configbuilder.Build();
        //配置文件的实体类
        var section = configuration.GetSection(nameof(AppServiceOptions));
        var options = new AppServiceOptions();
        section.Bind(options);
        services.AddSingleton<IConfiguration>(configuration);
        services.AddOptions();

        //注册Logger,写入Sqlite数据库
        LogProvider.IsDisabled = true;
        var providers = new LoggerProviderCollection();
        Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Information()
                .WriteTo.SQLite(options.LogPath)
                .WriteTo.Providers(providers)
                .CreateLogger();
        services.AddSingleton(providers);
        services.AddLogging(loggingBuilder => loggingBuilder.AddSerilog(dispose: true));

        //注册Quartz
        services.AddQuartz(q =>
        {
            q.SchedulerId = "Scheduler-Core";
            q.UseMicrosoftDependencyInjectionJobFactory();
            q.ScheduleJob<TimeJob>(trigger => trigger
            .WithIdentity("TimeJobTrigger")
            .StartNow()
            .WithDailyTimeIntervalSchedule(x => x.WithInterval(options.JobTimeInterval, IntervalUnit.Minute))
            );
        });
        services.AddQuartzHostedService(o =>
        {
            o.WaitForJobsToComplete = true;
            o.StartDelay = TimeSpan.FromSeconds(10);
        });
        //注册SugarSql
        SqlSugarScope sqlSugar = new SqlSugarScope(new List<ConnectionConfig>{
            new ConnectionConfig()
            {
                ConfigId=1,
                DbType = SqlSugar.DbType.Sqlite,
                ConnectionString = "DataSource=" + options.DbPath,
                IsAutoCloseConnection = true,
            },
            new ConnectionConfig()
            {
                ConfigId=2,
                DbType = SqlSugar.DbType.Sqlite,
                ConnectionString = "DataSource=" + options.LogPath,
                IsAutoCloseConnection = true,
            }
        },
        db =>
        {
            db.Aop.OnLogExecuting = (sql, pars) =>
            {
                var cmd = UtilMethods.GetSqlString(DbType.Sqlite, sql, pars);
                Debug.WriteLine(cmd);
            };
        });
        services.AddSingleton<ISqlSugarClient>(sqlSugar);

        var serviceProvider = services.BuildServiceProvider();
        return serviceProvider;
    }
}
```

在`Program.cs`文件里

```cs
using (System.Threading.Mutex mutex = new System.Threading.Mutex(true, Application.ProductName, out bool createNew))
{
    if (createNew)
    {
        try
        {
            IServiceCollection services = new ServiceCollection();
            var serviceProvider = services.BuildWinform();
            var frmLogin = serviceProvider.GetRequiredService<FrmLogin>();
            var schedulerFactory = serviceProvider.GetRequiredService<ISchedulerFactory>();
            var scheduler = schedulerFactory.GetScheduler().GetAwaiter().GetResult();
            scheduler.Start().ConfigureAwait(false).GetAwaiter().GetResult();
            var db = serviceProvider.GetRequiredService<DBManager>();
            db.InitDataBaseAsync().ConfigureAwait(false).GetAwaiter().GetResult();
            System.Windows.Forms.Application.Run(frmLogin);
        }
        catch (Exception ex)
        {
            MessageBox.Show(ex.Message, "提示");
        }
        finally
        {
            Log.CloseAndFlush();
        }
    }
    else
    {
        MessageBox.Show("应用程序已经在运行中...");
        System.Threading.Thread.Sleep(1000);
        System.Environment.Exit(1);
    }
}
```

## WPF使用IOC

WPF使用IOC，一般配合`Prism`或者其他框架，基本都带IOC。PWF使用Prism的IOC示例，查看[模块](../../cs/wpf/plugin.md)
