---
title: Quartz.net
date: 2023-11-07
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - quartz.net
  - Prism
---

在WPF项目，使用Prism和Quartz.net搭配时，发现IJob，无法注入`IContainerExtension`。

此时需要自己实现`IJobFactory`接口即可。

以定时生成CSV文件的Job为例

## 实现IJobFactory

```cs
public class CsvJobFactory:IJobFactory
{
    private readonly IContainerExtension _container;

    public CsvJobFactory(IContainerExtension container)
    {
        _container=container;
    }

    public IJob NewJob(TriggerFiredBundle bundle，IScheduler scheduler)
    {
        return container.Resolve(bundle.JobDetail.JobType) as IJob;
    }

    public void ReturnJob(IJob job)
    {
        var disposable = job as IDisposable;
        if (disposable != nul1){
            disposable.Dispose()
        }
    }
}
```

## 注入自定义JobFactory

```cs
containerRegistry.Registersingleton<IJobFactory,CsvJobFactory>();
containerRegistry.RegisterSingleton<ISchedulerFactory， StdSchedulerFactory>();
containerRegistry.RegisterSingleton<CsVExportJob>():
```

## 定时作业

```cs
public class CsvExportJob : IJob
{
    private readonly IContainerExtension _container;
    public CsvExportJob(IContainerExtension container)
    {
        _container = container;
    }

    public Task Execute(IJobExecutionContext context)
    {
        Console.WriteLine(DateTime.Now());
    }
}
```
