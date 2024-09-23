---
title: Windows服务
date: 2024-09-20
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
---

有时需要一些调度服务，可以用控制台、窗体等，但是最好的还是通过[Windows服务](https://learn.microsoft.com/zh-cn/dotnet/framework/windows-services/)。

以.Net Framework 4.8为例，主要使用`Serilog`、`TopShelf`、`Quartz.Net`、`Microsoft.Extensions.DependencyInjection`、`HttpClient`实现Windows服务调度

![Windows服务](https://nas.ilyl.life:8092/dotnet/windows-service.png)

## 配置文件

[Microsoft.Extensions.Configuration](https://www.nuget.org/packages/Microsoft.Extensions.Configuration)

[Microsoft.Extensions.Configuration.Abstractions](https://www.nuget.org/packages/Microsoft.Extensions.Configuration.Abstractions)

[Microsoft.Extensions.Configuration.Binder](https://www.nuget.org/packages/Microsoft.Extensions.Configuration.Binder)

[Microsoft.Extensions.Configuration.FileExtensions](https://www.nuget.org/packages/Microsoft.Extensions.Configuration.FileExtensions)

[Microsoft.Extensions.Configuration.Json](https://www.nuget.org/packages/Microsoft.Extensions.Configuration.Json)

`appsettings.json`配置文件，设置`复制到输出目录`:`始终复制`

```json
{
  "TestOption": {
    "Address": "http://127.0.0.1",
    "RequestUrl": "",
    "TestCron": "0/10 * * * * ?"
  }
}
```

```cs
public class TestOption
{
    public string Address { get; set; }

    public string RequestUrl { get; set; }

    public string TestCron { get; set; }

}
```

::: warning
注意：Windows服务启动时，在`SetBasePath`方法内指定当前目录有`区别`

不要使用[Directory.GetCurrentDirectory()](https://learn.microsoft.com/zh-cn/dotnet/api/system.io.directory.getcurrentdirectory?view=net-8.0)加载配置文件时，会提示`1053`错误，因为路径指向了系统目录

改为[Assembly.GetEntryAssembly().Location](https://learn.microsoft.com/zh-cn/dotnet/api/system.reflection.assembly.getentryassembly?view=net-8.0)或者[AppDomain.CurrentDomain.BaseDirectory](https://learn.microsoft.com/zh-cn/dotnet/api/system.appdomain.basedirectory?view=net-7.0)
::: 

```cs{2}
IConfigurationBuilder configBuilder = new ConfigurationBuilder()
        .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
        .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
var configuration = configBuilder.Build();

var section = configuration.GetSection(nameof(TestOption));
var option = new TestOption();
section.Bind(option);
```

配置文件注入

```cs
IServiceCollection services = new ServiceCollection();
services.AddSingleton<IConfiguration>(configuration);
services.Configure<TestOption>(options => configuration.GetSection(nameof(TestOption)).Bind(options));
```

## 日志

[Microsoft.Extensions.Logging.Abstractions](https://www.nuget.org/packages/Serilog)

[Serilog](https://www.nuget.org/packages/Serilog)

[Serilog.Extensions.Log](https://www.nuget.org/packages/Serilog.Extensions.Log)

[Serilog.Sinks.Async](https://www.nuget.org/packages/Serilog.Sinks.Async)

[Serilog.Sinks.Console](https://www.nuget.org/packages/Serilog.Sinks.Console)

[Serilog.Sinks.File](https://www.nuget.org/packages/Serilog.Sinks.File)

::: warning
注意：Windows服务部署运行时，可能不显示日志记录，但调试正常显示

需要指定具体路径
:::

```cs{5}
LogProvider.IsDisabled = true;
var providers = new LoggerProviderCollection();
Log.Logger = new LoggerConfiguration()
  .MinimumLevel.Information()
  .WriteTo.Async(f => f.File($"{AppDomain.CurrentDomain.BaseDirectory}\\Logs\\log.txt", outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss} [{Level:u3}]{SourceContext}{Message:lj}{NewLine}{Exception}", rollingInterval: RollingInterval.Day, rollOnFileSizeLimit: true))
  .WriteTo.Console(restrictedToMinimumLevel: LogEventLevel.Debug)
  .CreateLogger();
```

日志注入

```cs
IServiceCollection services = new ServiceCollection();
services.AddSingleton(providers);
services.AddLogging(loggingBuilder => loggingBuilder.AddSerilog(dispose: true));
```

## HttpClient 

[Microsoft.Extensions.Http](https://www.nuget.org/packages/Microsoft.Extensions.Http)

```cs
static class HttpResponseMessageExtensions
{
    internal static void WriteRequestToConsole(this HttpResponseMessage response)
    {
        if (response is null)
        {
            return;
        }

        var request = response.RequestMessage;
        Console.Write($"{request?.Method} ");
        Console.Write($"{request?.RequestUri} ");
        Console.WriteLine($"HTTP/{request?.Version}");
    }
}
```

HttpClient封装，搭配配置文件

```cs
class ProxyService
{
  private readonly HttpClient _httpClient;
  private readonly TestOption _option;
  public ProxyService(HttpClient httpClient, IOptions<TestOption> option)
  {
      _httpClient = httpClient;
      _option = option.Value;
      _httpClient.BaseAddress = new Uri(_option.Address);
      _httpClient.Timeout = TimeSpan.FromMinutes(2);
  }

  public async Task<string> PostAsJsonAsync(string json)
  {
      StringContent jsonContent = new StringContent(json, Encoding.UTF8, "application/json");
      using (HttpResponseMessage response = await _httpClient.PostAsync(_option.RequestUrl, jsonContent))
      {
          response.EnsureSuccessStatusCode()
          .WriteRequestToConsole();

          var result = await response.Content.ReadAsStringAsync();
          Console.WriteLine($"{result}\n");
          return result;
      }
  }
}
```

HttpClient注入

```cs
IServiceCollection services = new ServiceCollection();
services.AddHttpClient<ProxyService>();
```

## 调度

[Quartz](https://www.nuget.org/packages/Quartz)

[Quartz.Extensions.Hosting](https://www.nuget.org/packages/Quartz.Extensions.Hosting)

```cs
class TestJob : IJob
{
    private readonly ILogger _logger;
    private readonly ProxyService _proxyService;
    public TestJob(ILogger<TestJob> logger,ProxyService proxyService)
    {
        _logger = logger;
        _proxyService = proxyService;
    }

    public Task Execute(IJobExecutionContext context)
    {
        var key = context.JobDetail.JobDataMap.GetString(nameof(TestJob));
        _logger.LogInformation($"{DateTime.Now}--{key}");
        return Task.CompletedTask;
    }
}
```

Quartz.Net注入

```cs
IServiceCollection services = new ServiceCollection();
services.AddQuartz(q =>
{
    q.SchedulerId = Guid.NewGuid().ToString("N");
    q.SchedulerName = "Scheduler-Core";
    q.UseSimpleTypeLoader();
    q.UseInMemoryStore();
    q.UseDefaultThreadPool(tp =>
    {
        tp.MaxConcurrency = 10;
    });

    q.ScheduleJob<TestJob>(trigger => trigger
    .WithIdentity(nameof(TestJob))
    .StartNow()
    .WithCronSchedule(option.TestCron), job => job.UsingJobData(nameof(TestJob),option.TestCron)
    );
});
services.AddQuartzHostedService(o =>
{
    o.WaitForJobsToComplete = true;
    o.StartDelay = TimeSpan.FromSeconds(20);
});
services.AddTransient<TestJob>();
```

## Windows服务

[TopShelf.Serilog](https://www.nuget.org/packages/Topshelf.Serilog)

```cs
class TestService : ServiceControl, ServiceSuspend
{
    private readonly IScheduler _scheduler;
    private readonly ILogger _logger;
    public TestService(ILogger<TestService> logger, ISchedulerFactory schedulerFactory)
    {
        _logger = logger;
        _scheduler = schedulerFactory.GetScheduler().GetAwaiter().GetResult();
    }

    public bool Continue(HostControl hostControl)
    {
        _scheduler?.ResumeAll();
        _logger?.LogInformation("调度服务恢复运行");
        return true;
    }

    public bool Pause(HostControl hostControl)
    {
        _scheduler?.PauseAll();
        _logger?.LogInformation("调度服务暂停");
        return true;
    }

    public bool Start(HostControl hostControl)
    {
        _scheduler?.Start();
        _logger?.LogInformation("调度服务启动");
        return true;
    }

    public bool Stop(HostControl hostControl)
    {
        _scheduler?.Shutdown(false);
        _logger?.LogInformation("调度服务停止");
        return true;
    }
}
```
TopShelf配置

```cs
HostFactory.Run(x =>
{
    x.UseSerilog();
    x.Service<TestService>(s =>
    {
        s.ConstructUsing(settings => {
            var provider = services.BuildServiceProvider();
            return provider.GetService<TestService>();
        });
        s.WhenStarted((tc, hc) => tc.Start(hc));
        s.WhenStopped((tc, hc) => tc.Stop(hc));
        s.WhenContinued((tc, hc) => tc.Continue(hc));
        s.WhenPaused((tc, hc) => tc.Pause(hc));
    });
    x.RunAsLocalSystem();
    x.StartAutomaticallyDelayed();
    x.SetDescription("Windows调度服务");
    x.SetDisplayName("TestService");
    x.SetServiceName("TestService");
    x.EnablePauseAndContinue();
});
```

## 部署

### 安装

```bash
X:\\TestService\\TestService.exe install
```

### 卸载

```bash
X:\\TestService\\TestService.exe uninstall
```

### 启动

```bash
X:\\TestService\\TestService.exe start
```

### 停止

```bash
X:\\TestService\\TestService.exe stop
```