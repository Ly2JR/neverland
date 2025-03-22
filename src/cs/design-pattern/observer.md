---
title: 观察者模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

![observer](https://image.ilyl.life:8443/design-pattern/observer.png)

参与此模式的类和对象包括：

- Subject(`Stock`)
  - 知道它的观察者。任意数量的Observer对象都可以观察一个主题。
  - 提供了附加和分离观察者对象的接口。

- ConcreteSubject(`IBM`)
  - 将感兴趣的状态存储到ConcreteObserver。
  - 当状态改变时向观察者发送通知。

- Observer(`IInvestor`)
  - 为应该通知主题更改的对象定义更新接口。

- ConcreteObserver(`Investor`)
  - 维护对ConcreteSubject对象的引用。
  - 商店状态应该与主题保存一致。
  - 实现观察者更新接口，使其状态与主体的状态保存一致。

::: tabs

@tab Structural code

```cs
// 演示了观察者模式。
// 在该模式中，已注册对象被通知并随着状态更改而更新。
var s = new ConcreteSubject();
s.Attach(new ConcreteObserver(s, "x"));
s.Attach(new ConcreteObserver(s, "y"));
s.Attach(new ConcreteObserver(s, "z"));

s.SubjectState = "ABC";
s.Notify();

// Wait for user
Console.ReadKey();

// Observer x's new state is ABC
// Observer y's new state is ABC
// Observer z's new state is ABC

public abstract class Subject
{
    private readonly List<Observer> _observers = new();

    public void Attach(Observer observer)
    {
        _observers.Add(observer);
    }

    public void Detach(Observer observer)
    {
        _observers.Remove(observer);
    }

    public void Notify()
    {
        foreach (var o in _observers)
        {
            o.Update();
        }
    }
}

public class ConcreteSubject : Subject
{
    public string? SubjectState { get; set; }
}

public abstract class Observer
{
    public abstract void Update();
}

public class ConcreteObserver : Observer
{
    private readonly string _name;
    private string? _observerState;
    private ConcreteSubject _subject;

    public ConcreteObserver(ConcreteSubject subject, string name)
    {
        _subject = subject;
        _name = name;
    }
    public override void Update()
    {
        _observerState = _subject.SubjectState;
        Console.WriteLine($"Observer {_name}'s new state is {_observerState}");
    }

    public ConcreteSubject Subject
    {
        get => _subject;
        set => _subject = value;
    }
}
```

@tab  Real-World code

```cs
// 演示了观察者模式。
// 在该模式中，每次股票价值发生变化时都回通知注册投资者。
var ibm = new IBM("IBM", 120.00);
ibm.Attach(new Investor("Sorros"));
ibm.Attach(new Investor("Berkshire"));

ibm.Price = 120.10;
ibm.Price = 121.00;
ibm.Price = 120.50;
ibm.Price = 120.75;

// Wait for user
Console.ReadKey();

// Notified Sorros of IBM's change  to ￥120.10
// Notified Berkshire of IBM's change  to ￥120.10

// Notified Sorros of IBM's change  to ￥121.00
// Notified Berkshire of IBM's change  to ￥121.00

// Notified Sorros of IBM's change  to ￥120.50
// Notified Berkshire of IBM's change  to ￥120.50

// Notified Sorros of IBM's change  to ￥120.75
// Notified Berkshire of IBM's change  to ￥120.75

public abstract class Stock
{
    private double _price;
    private readonly List<IInvestor> _investors = new List<IInvestor>();

    protected Stock(string symbol, double price)
    {
        Symbol = symbol;
        _price = price;
    }

    public void Attach(IInvestor investor)
    {
        _investors.Add(investor);
    }

    public void Detach(IInvestor investor)
    {
        _investors.Remove(investor);
    }

    public void Notify()
    {
        foreach (var investor in _investors)
        {
            investor.Update(this);
        }

        Console.WriteLine("");
    }

    public double Price
    {
        get => _price;
        set
        {
            if (_price != value)
            {
                _price = value;
                Notify();
            }
        }
    }

    public string Symbol { get; }
}

public class IBM : Stock
{
    public IBM(string symbol, double price) : base(symbol, price)
    {

    }
}

public interface IInvestor
{
    void Update(Stock stock);
}

public class Investor : IInvestor
{
    private readonly string _name;

    public Investor(string name)
    {
        _name = name;
    }

    public void Update(Stock stock)
    {
        Console.WriteLine($"Notified {_name } of {stock.Symbol}'s change  to {stock.Price:C}");
    }

    public Stock Stock { get; set; }
}
```

:::
