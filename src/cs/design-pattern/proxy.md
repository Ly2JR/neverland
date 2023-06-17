---
title: 代理模式
date: 2023-06-17
dir.order: 18
order: 18
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 代理模式
  - 结构模式
---

参与此模式的类和对象包括：

- Proxy(`MathProxy`)
  - 维护一个让代理访问真实主题的引用。如果RealSubject和Subject接口相同，Proxy可以引用Subject。
  - 提供与Subject相同的接口，以便可以用代理代替真实的主题。
  - 控制对真实主题的访问，并可能负责创建和删除它。
  - 其他职责取决于代理的类型：
    - 远程代理负责对请求机器参数进行编码，并将编码后的请求发送到不同地址空间中的真实主体。
    - 虚拟代理可以换成有关真实主题的附加信息，以便它们可以推迟访问它。例如，来自Motivation的ImageProxy缓存了真实图像的范围。
    - 保护代理检测调用者是否具有执行请求所需的访问权限。

- Subject(`IMath`)
  - 定义RealSubject和proxy的公共接口，以便在任何需要RealSubject的地方都可以使用Proxy。

- RealSubject(`Math`)
  - 定义代理所代表的真实对象。

::: tabs

@tab Structural code

```cs
// 演示了代理模式，它提供了一个代表对象(代理)来控制对另一个类似对象的访问。
var proxy = new Proxy();
proxy.Request();

// Wait for user
Console.ReadKey();

// Called RealSubject.Request()

public abstract class Subject
{
    public abstract void Request();
}

public class RealSubject : Subject
{
    public override void Request()
    {
        Console.WriteLine("Called RealSubject.Request()");
    }
}

public class Proxy : Subject
{
    private RealSubject _realSubject;
    public override void Request()
    {
        if (_realSubject == null)
        {
            _realSubject = new RealSubject();
        }
        _realSubject.Request();
    }
}
```

@tab Real-World code

```cs
// 演示了由MathProxy对象表示的Math对象的代理模式。
var proxy2 = new MathProxy();
Console.WriteLine($"4 + 2 = {proxy2.Add(4, 2)}");
Console.WriteLine($"4 - 2 = {proxy2.Sub(4, 2)}");
Console.WriteLine($"4 * 2 = {proxy2.Mul(4, 2)}");
Console.WriteLine($"4 / 2 = {proxy2.Div(4, 2)}");

// Wait for user
Console.ReadKey();

// 4 + 2 = 6
// 4 - 2 = 2
// 4 * 2 = 8
// 4 / 2 = 2

public interface IMath
{
    double Add(double x, double y);
    double Sub(double x, double y);
    double Mul(double x, double y);
    double Div(double x, double y);
}

public class Math : IMath
{
    public double Add(double x, double y)
    {
        return x + y;
    }

    public double Sub(double x, double y)
    {
        return x - y;
    }

    public double Mul(double x, double y)
    {
        return x * y;
    }

    public double Div(double x, double y)
    {
        return x / y;
    }
}

public class MathProxy : IMath
{
    private readonly Math _math = new Math();

    public double Add(double x, double y)
    {
        return _math.Add(x, y);
    }

    public double Div(double x, double y)
    {
        return _math.Div(x, y);
    }

    public double Mul(double x, double y)
    {
        return _math.Mul(x, y);
    }

    public double Sub(double x, double y)
    {
        return _math.Sub(x, y);
    }
}
```

:::
