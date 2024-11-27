---
title: 职责链模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

![chain](https://nas.ilyl.life:8092/design-pattern/chain.png)

参与此模式的类和对象包括：

- Handler(`Approver`)
  - 定义处理请求的接口。
  - （可选）实现后继链接。

- ConcreteHandler(`Director`,`VicePresident`,`President`)
  - 处理它负责的请求。
  - 可以访问其继任者。
  - 如果ConcreteHandler可以处理请求，它会这样做；否则它将请求转发给它的继承者。

- Client(`ChainApp`)
  - 向链上的ConcreteHandler对象发起请求。

::: tabs

@tab Structural code

```cs
// 演示了责任链模式。
// 其中为多个链接对象(链)提供了响应请求或将其交给下一个对象的机会
var h1 = new ConcreteHandler1();
var h2 = new ConcreteHandler2();
var h3 = new ConcreteHandler3();

h1.SetSuccessor(h2);
h2.SetSuccessor(h3);

int[] requests = { 2, 5, 14, 22, 18, 3, 27, 20 };
foreach (var request in requests)
{
    h1.HandleRequest(request);
}

// Wait for user
Console.ReadKey();

// ConcreteHandler1 handled request 2
// ConcreteHandler1 handled request 5
// ConcreteHandler2 handled request 14
// ConcreteHandler3 handled request 22
// ConcreteHandler2 handled request 18
// ConcreteHandler1 handled request 3
// ConcreteHandler3 handled request 27
// ConcreteHandler3 handled request 20

public abstract class Handler
{
    protected Handler successor;

    public void SetSuccessor(Handler successor)
    {
        this.successor = successor;
    }

    public abstract void HandleRequest(int request);
}

public class ConcreteHandler1 : Handler
{
    public override void HandleRequest(int request)
    {
        if (request is >= 0 and < 10)
        {
            Console.WriteLine($"{this.GetType().Name} handled request {request}");

        }else if (successor != null)
        {
            successor.HandleRequest(request);
        }
    }
}

public class ConcreteHandler2 : Handler
{
    public override void HandleRequest(int request)
    {
        if (request is >= 10 and < 20)
        {
            Console.WriteLine($"{this.GetType().Name} handled request {request}");

        }
        else if (successor != null)
        {
            successor.HandleRequest(request);
        }
    }
}

public class ConcreteHandler3 : Handler
{
    public override void HandleRequest(int request)
    {
        if (request is >= 20 and < 30)
        {
            Console.WriteLine($"{this.GetType().Name} handled request {request}");

        }
        else if (successor != null)
        {
            successor.HandleRequest(request);
        }
    }
}
```

@tab Real-World code

```cs
// 演示了责任链模式，在该模式中，多个相关的经理和高管可以响应采购请求或将其交给上级。
// 每个职位都可以有自己的一套规则，他们可以批准这些订单。
var larry = new Director();
var sam = new VicePresident();
var tammy = new President();

larry.SetSuccessor(sam);
sam.SetSuccessor(tammy);

var p = new Purchase(2034, 450, "Supplies");
larry.ProcessRequest(p);

p = new Purchase(2035, 32590.10, "Project X");
larry.ProcessRequest(p);

p = new Purchase(2036, 122100.00, "Project Y");
larry.ProcessRequest(p);

// Wait for user
Console.ReadKey();

// Director approved request# 2034
// President approved request# 2035
// Request#2036 requires an executive meeting!

public abstract class Approver
{
    protected Approver successor;

    public void SetSuccessor(Approver successor)
    {
        this.successor = successor;
    }

    public abstract void ProcessRequest(Purchase purchase);
}

public class Director:Approver
{
    public override void ProcessRequest(Purchase purchase)
    {
        if (purchase.Amount < 10000)
        {
            Console.WriteLine($"{this.GetType().Name} approved request# {purchase.Number}");
        }
        else if (successor != null)
        {
            successor.ProcessRequest(purchase);
        }
    }
}


public class VicePresident : Approver
{
    public override void ProcessRequest(Purchase purchase)
    {
        if (purchase.Amount < 25000.0)
        {
            Console.WriteLine($"{this.GetType().Name} approved request# {purchase.Number}");
        }
        else if (successor != null)
        {
            successor.ProcessRequest(purchase);
        }
    }
}

public class President : Approver
{
    public override void ProcessRequest(Purchase purchase)
    {
        if (purchase.Amount < 100000.0)
        {
            Console.WriteLine($"{this.GetType().Name} approved request# {purchase.Number}");
        }
        else
        {
            Console.WriteLine($"Request#{purchase.Number} requires an executive meeting!");
        }
    }
}

public class Purchase
{
    public Purchase(int number,double amount,string purpose)
    {
        Number = number;
        Amount = amount;
        Purpose = purpose;
    }

    public int Number { get; set; }

    public double Amount { get; set; }

    public string Purpose { get; set; }
}
```

:::
