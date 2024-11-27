---
title: 单例模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

![singleton](https://nas.ilyl.life:8092/design-pattern/singleton.png)

参与此模式的类和对象包括：

- Singleton(`LoadBalancer`)
  - 定义一个Instance操作，允许客户端访问其唯一的实例。实例是一个类操作。
  - 负责创建和维护自己的唯一实例。

::: tabs

@tab Structural code

```cs
// 演示了单例模式，该模式确保只能创建类的单个实例(单例)
var s1 = Singleton.Instance();
var s2 = Singleton.Instance();

//Test for same instance
if (s1==s2)
{
    Console.WriteLine("Objects are the same instance");
}

// Wait for user
Console.ReadKey();

//Output
//Objects are the same instance

public class Singleton
{
    private static Singleton _instance;

    protected Singleton(){}

    public static Singleton Instance()
    {
        //Uses lazy initialization
        //Note:this is not thread safe.
        if (_instance == null)
        {
            _instance=new Singleton();
        }

        return _instance;
    }
}
```

@tab Real-World code

```cs
// 将单列模式演示为LoadBalancing对象。只能创建该类的单个实例(单列),
// 因为服务器可能回动态地联机或脱机，并且每个请求都必须通过一个了解(网络)农场状态的对象。
var b1 = LoadBalancer.GetLoadBalancer();
var b2 = LoadBalancer.GetLoadBalancer();
var b3 = LoadBalancer.GetLoadBalancer();
var b4 = LoadBalancer.GetLoadBalancer();

//Same instance?
if (b1 == b2 && b2 == b3 && b3 == b4)
{
    Console.WriteLine("Same instance\n");
}

//Load balance 15 server requests
var balancer = LoadBalancer.GetLoadBalancer();
for (var i = 0; i < 15; i++)
{
    var server = balancer.Server;
    Console.WriteLine($"Dispatch Request to:{server}");
}

// Wait for user
Console.ReadKey();

//Output
// Same instance

// Dispatch Request to:ServerIV
// Dispatch Request to:ServerV
// Dispatch Request to:ServerI
// Dispatch Request to:ServerV
// Dispatch Request to:ServerV
// Dispatch Request to:ServerV
// Dispatch Request to:ServerV
// Dispatch Request to:ServerII
// Dispatch Request to:ServerI
// Dispatch Request to:ServerII
// Dispatch Request to:ServerII
// Dispatch Request to:ServerII
// Dispatch Request to:ServerII
// Dispatch Request to:ServerII
// Dispatch Request to:ServerV

public class LoadBalancer
{
    private static LoadBalancer _instance = null;
    private readonly List<string> _servers = new();
    readonly Random _random = new();

    //Lock synchronization object
    private static readonly object Locker=new();

    //Constructor (protected)
    protected LoadBalancer()
    {
        _servers.Add("ServerI");
        _servers.Add("ServerII");
        _servers.Add("ServerIII");
        _servers.Add("ServerIV");
        _servers.Add("ServerV");
    }

    public static LoadBalancer GetLoadBalancer()
    {
        // Support multithreaded applications through
        // 'Double checked locking' pattern which (once
        // the instance exists) avoids locking each 
        // time the method is invoked
        if (_instance == null)
        {
            lock (Locker)
            {
                if (_instance == null)
                {
                    _instance = new LoadBalancer();
                }
            }
        }

        return _instance;
    }

    /// <summary>
    /// Simple,but effective random load balancer
    /// </summary>
    public string Server
    {
        get
        {
            int r = _random.Next(_servers.Count);
            return _servers[r];
        }
    }
}
```

:::
