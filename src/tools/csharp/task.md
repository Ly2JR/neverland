---
title: Task
date: 2023-11-27
editLink: false
footer: false
isOriginal: true
category:
  - Task
tag:
  - C#
---

[Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task?view=net-8.0)简化了线程操作。

Task 使用又离不开`async`和`await`，如何正确的使用`Task`，以一个简单的示例演示。

``` cs
void Print()
{
    Console.WriteLine($"Print---{DateTime.Now.ToString("HH:mm:ss")}");
}

async void PrintAsync(int times)
{
    while (times > 0)
    {
        Console.WriteLine($"PrintAsync---{DateTime.Now.ToString("HH:mm:ss")}");
        times--;
        await Task.Delay(1000);
    }
}

async Task PrintTaskAsync(int times)
{
    while (times > 0)
    {
        Console.WriteLine($"PrintTaskAsync---{DateTime.Now.ToString("HH:mm:ss")}");
        times--;
        await Task.Delay(1000);
    }
}
```

## 同步

首先看单独的方法调用

```cs
Print();
PrintAsync();
await PrintTaskAsync();
```

当返回值类型为`Task`时才需要使用`await`。

方法前加不加`await`的区别是什么？看输出结果。

```cs
Print();
// 输出 
// Print---12:11:12
```

```cs
PrintAsync(3);
// 输出 
// PrintAsync---12:11:12
```

```cs
await PrintTaskAsync(3);
// 输出
// PrintTaskAsync---12:11:12
// PrintTaskAsync---12:11:13
// PrintTaskAsync---12:11:14
```

方法`PrintAsync`应该输出三次，但实际只输出了一次，为何？

断点调试，发现执行`await Task.Delay(1000);`时程序结束了，这里又产生了一个问题，为何结束了，不继续执行？

在看一个示例，将`Print`方法等待三秒

```cs{4-5}
void Print()
{
    Console.WriteLine($"Print---{DateTime.Now.ToString("HH:mm:ss")}");
    Thread.Sleep(3000);
    Console.WriteLine("Print---End");
}
```

然后调用方法

```cs
Print();
PrintAsync(3);

// 输出
// Print---12:11:12
// Print---End
// PrintAsync---12:11:12
```

跟之前没什么区别，`PrintAsync`，然后交换下方法顺序

```cs
PrintAsync(3);
Print();

//输出
// PrintTaskAsync---12:11:12
// Print---12:11:12
// PrintTaskAsync---12:11:13
// PrintTaskAsync---12:11:14
// Print---End
```

由此可以看出，问题在于`await Task.Delay(1000);`，它是一个异步线程，当出现耗时操作时，不会阻塞当前代码，而是继续执行之后的代码。

当调用如下代码时

```cs
Print();
PrintAsync(3);
```

`PrintAsync`虽然没有执行完，但`PrintAsync`之后已没有可执行的代码。

而切换顺序执行

```cs
PrintAsync(3);
Print();
```

由于`PrintAsync`执行输出第一条信息时，等待`await Task.Delay(1000);`执行前，代码继续执行之后的`Print`方法，由于`Print`需要耗时3秒，在等待`Print`输出结果时，`PrintAsync`又继续输出了第二条信息，甚至第三条。

当`Print`耗时时间小于`PrintAsync`时，`PrintAsync`输出记录数是不全的。

更近一步，将`PrintAsync`换成`PrintTaskAsync`即带有Task返回值的方法

不管是

```cs
Print();
await PrintTaskAsync(3);
```

还是

```cs
await PrintTaskAsync(3);
Print();
```

都能正常的输出预期结果。

因此可以确认以下结果：

- void 异步依赖执行上下文，当异步和同步同时出现时，可能发生不可预料的结果
- void 异步改为Task异步符合正常预期
- 当所有执行代码都为异步时，执行符合预期
- 当同步方法里里有`await`或者`async`修饰时，正如其名，它是一个异步方法。

如果不想使用`await Task.Delay(1000);`输出三次那么使用`Thread.Sleep(1000);`达到目标。

如果非要使用`await Task.Delay(1000)`实现间隔等待，将`void`返回类型改为`Task`即可，这也是为什么推荐无参数返回时推荐使用`Task`的原因。

另外也可以将`Print`方法改为异步。

## 异步

在上面同步使用时，分析得出了`await`、`async`就是异步执行。

那么如何
将一个同步方法改为异步。

常见的有

- [Task.Run](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.run?view=net-7.0)

  ```cs
  await Task.Run(() => Print());
  ```

- [Task.Factory.StartNew](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskfactory.startnew?view=net-6.0)

  ```cs
  await Task.Factory.StartNew(()=>Print());
  ```

- Task

  ```CS
  var t = new Task(Print);
  t.Start();
  ```

- await

  ```cs{4}
  async void Print()
  {
     Console.WriteLine($"Print---{DateTime.Now.ToString("HH:mm:ss")}");
     await Task.Sleep(1);
  }
  ```

## 并发

常说Task会提升效率，但是就算增加了异步，虽然不阻塞当前代码，但是执行的总时间还是保持不变。

那么如果使用Task缩小执行时间。

还是以上面同步的代码示例为例。增加一个方法执行时间的计算。

```cs
void Print(int times)
{
    var sw = new Stopwatch();
    sw.Start();
    while (times > 0)
    {
        Console.WriteLine($"Print---{DateTime.Now.ToString("HH:mm:ss")}");
        times--;
        Thread.Sleep(1000 );
    }
    sw.Stop();
    Console.WriteLine($"Print---执行完毕耗时:{sw.ElapsedMilliseconds}");
}

async Task PrintTaskAsync(int times)
{
    var sw = new Stopwatch();
    sw.Start();
    while (times > 0)
    {
        Console.WriteLine($"PrintTaskAsync---{DateTime.Now.ToString("HH:mm:ss")}");
        times--;
        await Task.Delay(1000);
    }
    sw.Stop();
    Console.WriteLine($"PrintAsync---执行完毕耗时:{sw.ElapsedMilliseconds}");
}
```

调用方法

```cs
var sw=new Stopwatch();
sw.Start();
var t1=Task.Run(()=>Print(3));
var t2= PrintTaskAsync(3);
Task.WaitAll(new Task[] { t1, t2 });
sw.Stop();
Console.WriteLine($"总耗时:{sw.ElapsedMilliseconds}");
```

![Task并行](https://nas.ilyl.life:8092/dotnet/task.gif)

Task还提供其他方法，参考官方文档即可。
