---
title: 同步和异步
date: 2024-03-01
editLink: false
footer: false
isOriginal: true
category:
  - Task
tag:
  - C#
---

最新的[Task](https://learn.microsoft.com/zh-cn/dotnet/csharp/asynchronous-programming/task-asynchronous-programming-model)使异步操作变得更简单。

但是部分情况下需要将同步的方法改为异步方法，如旧代码、第三方语言代码。

以模拟登录为例，等待三秒后返回结果

```cs
static string Login(int userId, int pwd)
{
    if (userId == 123&&pwd==456)
    {
        Task.Delay(3000).Wait();
        return "成功";
    }
    return "账号或密码错误";
}

static void Main(string[] args)
{
    Stopwatch sw = Stopwatch.StartNew();
    var ret = Login(123,456);
    sw.Stop();
    Console.WriteLine($"登录结果:{ret}:耗时:{sw.ElapsedMilliseconds}");
    Console.ReadKey();
}
//输出结果
//登录结果:成功:耗时:3026
```

在返回结果之前是无法进行其他操作，因此需要改为异步

## [委托](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/calling-synchronous-methods-asynchronously)

使用委托对`Login`方法进行包装

```cs
static string LoginExt(int userId,int pwd)
{
    Func<int, int, string> f = Login;
    var uuid=Guid.NewGuid();
    var retTask=f.BeginInvoke(userId, pwd, (r) =>
    {
        var id = (Guid)r.AsyncState;
        Console.WriteLine($"处理完成:{id}");
    }, uuid);
    while (!retTask.IsCompleted)
    {
        Task.Delay(600).Wait();
        Console.WriteLine("正在登录中...");
    }
    return f.EndInvoke(retTask);
}

static void Main(string[] args)
{
    Stopwatch sw = Stopwatch.StartNew();
    var ret = LoginExt(123,456);
    sw.Stop();
    Console.WriteLine($"登录结果:{ret}:耗时:{sw.ElapsedMilliseconds}");
    Console.ReadKey();
}
//输出结果
//正在登录中...
//正在登录中...
//正在登录中...
//正在登录中...
//处理完成:c3e58bb0-da4e-4fd9-b4a4-7ba196a06d4e
//正在登录中...
//登录结果:成功:耗时:3079
```

通过异步，将同步等待的方法变为异步，但是这是`.NET Framework`下的方式，`.NET Core`不在支持委托的异步方式，提示`System.PlatformNotSupportedException:“Operation is not supported on this platform.”`，推荐使用`Task`

## Task

最简单的一种方式

```cs{2}
async Task<string> LoginAsync(int userId,int pwd){
    await Task.Delay(1);
    return Login(userId, pwd);
}

Stopwatch sw = Stopwatch.StartNew();
var ret = LoginAsync(123, 456);
while(!ret.IsCompleted)
{
    Task.Delay(600).Wait();
    Console.WriteLine("正在登录中...");
}
sw.Stop();
Console.WriteLine($"登录结果:{ret.Result}:耗时:{sw.ElapsedMilliseconds}");

//输出结果
//正在登录中...
//正在登录中...
//正在登录中...
//正在登录中...
//正在登录中...
//登录结果:成功:耗时:3055
```

### Task.Run

```cs{3}
async Task<string> Login2Async(int userId, int pwd)
{
   var ret= await Task.Run<string>(() =>
    {
        return Login(userId, pwd);
    });
    return ret;
}
```

使用`Task.Run`处理，结果一致

### Task.Factory.StartNew

```cs{3}
async Task<string> Login3Async(int userId, int pwd)
{
    var ret = await Task.Factory.StartNew<string>(() =>
    {
        return Login(userId, pwd);
    });
    return ret;
}
```

使用`Task.Factory.StartNew`包装，结果一致

### [TaskCompletionSource](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource?view=net-6.0)

`TaskCompletionSource`也是一个异步操作，用于更为精准的操作。

例如`Login`原始代码为同步操作，但是可能有提供`Login`的异步操作，如`LoginExt`改造方法，这里更近一步处理，提供`Login`的非阻塞方法

```cs
static int Login2(int userId, int pwd,Action<string> callback,bool isAsync=true)
{
    if (callback!=null)
    {
        Func<int, int, string> f = Login;
        if (isAsync)
        {
            var uuid = Guid.NewGuid();
            var retTask = f.BeginInvoke(userId, pwd, (r) =>
            {
                var id = (Guid)r.AsyncState;
                Console.WriteLine($"处理完成:{id}");
                var task = (AsyncResult)r;
                callback(f.EndInvoke(task));
            }, uuid);
        }
        else
        {
            callback(f.Invoke(userId, pwd));
        }
        return 0;
    }
    return 1;
}

static void Main(string[] args)
{
    Stopwatch sw = Stopwatch.StartNew();
    var flag = false;
    var ret = Login2(123, 456, (r) =>
    {
        flag = true;
        Console.WriteLine($"登录结果:{r}");
    },true);
    while (!flag)
    {
        Task.Delay(600).Wait();
        Console.WriteLine("正在登录中...");
    }
    sw.Stop();
    if (ret == 0)
    {
        Console.WriteLine($"登录成功:耗时: { sw.ElapsedMilliseconds}");
    }
    Console.ReadKey();
}

//输出结果
//正在登录中...
//正在登录中...
//正在登录中...
//正在登录中...
//处理完成:9afd55c9-57bb-48d8-ad20-400cfbc79174
//登录结果:成功
//正在登录中...
//登录成功:耗时: 3085
```

当提供了一个包含`阻塞`和`非阻塞`的方法时，看看能不能对它进行转换

```cs{8}
static async Task<string> Login4Async(int userId,int pwd)
{
    await Task.Delay(1);
    var retResult = string.Empty;
    var flag = Login2(userId, pwd, (r) =>
    {
        retResult = r;
    }, true);
    return retResult;
}

static  void Main(string[] args)
{
    Stopwatch sw = Stopwatch.StartNew();
    var ret= Login4Async(123, 456);
    while (!ret.IsCompleted)
    {
        Task.Delay(600).Wait();
        Console.WriteLine("正在登录中...");
    }
    sw.Stop();
    Console.WriteLine($"登录结果:{ret.Result} 耗时: {sw.ElapsedMilliseconds}");
    Console.ReadKey();
}

//IsAysnc:True 输出结果
//正在登录中...
//登录结果: 耗时: 622
//处理完成:fa8efe5c-3ce3-47f8-afec-ecec409515ab

//IsAysnc:False 输出结果
//正在登录中...
//正在登录中...
//正在登录中...
//正在登录中...
//正在登录中...
//登录结果:成功 耗时: 3060
```

当使用阻塞方法`IsAysnc`为`False`结果按预期输出，但是为`True`时，即包含委托的处理，结果不对。

这时就需要`TaskCompletionSource`对带委托的方法进行精准控制

```cs
static Task<string> Login5Async(int userId, int pwd)
{
    TaskCompletionSource<string> tcs=new TaskCompletionSource<string> ();
    var flag = Login2(userId, pwd, (r) =>
    {
        tcs.SetResult(r);
    }, true);
    return tcs.Task;
}

static  void Main(string[] args)
{
    Stopwatch sw = Stopwatch.StartNew();
    var ret= Login5Async(123, 456);
    while (!ret.IsCompleted)
    {
        Task.Delay(600).Wait();
        Console.WriteLine("正在登录中...");
    }
    sw.Stop();
    Console.WriteLine($"登录结果:{ret.Result} 耗时: {sw.ElapsedMilliseconds}");
    Console.ReadKey();
}

//输出结果
//正在登录中...
//正在登录中...
//正在登录中...
//正在登录中...
//处理完成:e3458626-7aad-4c36-910c-7db0c5ba2269
//正在登录中...
//登录结果:成功 耗时: 3089
```

不管使用同步还是异步方法，通过`TaskCompletionSource`精准控制都能按预期的结果输出。
