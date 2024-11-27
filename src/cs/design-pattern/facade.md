---
title: 外观模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

![facade](https://nas.ilyl.life:8092/design-pattern/facade.png)

参与此模式的类和对象包括：

- Facade(`MortgageApplication`)
  - 知道哪些子系统类负责请求。
  - 将客户端请求委托给适当的子系统对象。

- Subsystem classes(`Bank`,`Credit`,`Loan`)
  - 实现子系统功能。
  - 处理由Facade对象分配的工作。
  - 对外观一无所知，也不对其进行参考。

::: tabs

@tab Structural code

```cs
/// 演示了外观模式。
/// 它为类的大型子系统提供了一个简化且统一的接口。
var facade = new Facade();
facade.MethodA();
facade.MethodB();

// Wait for user
Console.ReadKey();

// MethodA() ----
//  SubSystemOne Method
//  SubSystemTwo Method
//  SubSystemFour Method

// MethodB() ----
//  SubSystemTwo Method
//  SubSystemThree Method

public class SubSystemOne
{
    public void MethodOne()
    {
        Console.WriteLine(" SubSystemOne Method");
    }
}

public class SubSystemTwo
{
    public void MethodTwo()
    {
        Console.WriteLine(" SubSystemTwo Method");
    }
}

public class SubSystemThree
{
    public void MethodThree()
    {
        Console.WriteLine(" SubSystemThree Method");
    }
}

public class SubSystemFour
{
    public void MethodFour()
    {
        Console.WriteLine(" SubSystemFour Method");
    }
}

public class Facade
{
    private readonly SubSystemOne _one;
    private readonly SubSystemTwo _two;
    private readonly SubSystemThree _three;
    private readonly SubSystemFour _four;

    public Facade()
    {
        _one=new SubSystemOne();
        _two=new SubSystemTwo();
        _three=new SubSystemThree();
        _four=new SubSystemFour();
    }

    public void MethodA()
    {
        Console.WriteLine("\nMethodA() ---- ");
        _one.MethodOne();
        _two.MethodTwo();
        _four.MethodFour();
    }

    public void MethodB()
    {
        Console.WriteLine("\nMethodB() ---- ");
        _two.MethodTwo();
        _three.MethodThree();
    }
}
```

@tab Real-World code

```cs
// 将Facade模式演示为MortgageApplication对象，该对象为测量申请人信用度的大型类子系统提供了一个简化的接口。
var mortgage = new Mortgage();

var customer = new Customer("Ann McKinsey");
bool eligible = mortgage.IsEligible(customer, 125000);
Console.WriteLine($"\n{customer.Name} has been {(eligible?"Approved":"Rejected")}");

// Wait for user
Console.ReadKey();

// Ann McKinsey applies for ￥125,000.00 loan

// Check bank for Ann McKinsey
// Check loans for Ann McKinsey
// Check credit for Ann McKinsey

// Ann McKinsey has been Approved

public class Bank
{
    public bool HasSufficientSavings(Customer c, int amount)
    {
        Console.WriteLine($"Check bank for {c.Name}");
        return true;
    }
}

public class Credit
{
    public bool HasGoodCredit(Customer c)
    {
        Console.WriteLine($"Check credit for {c.Name}");
        return true;
    }
}

public class Loan
{
    public bool HasNoBadLoans(Customer c)
    {
        Console.WriteLine($"Check loans for {c.Name}");
        return true;
    }
}

public class Customer
{
    public Customer(string name)
    {
        Name=name;
    }

    public string Name { get; }
}

public class Mortgage
{
    private readonly Bank _bank=new Bank();
    private readonly Loan _loan=new Loan();
    private readonly Credit _credit=new Credit();

    public bool IsEligible(Customer customer, int amount)
    {
        Console.WriteLine($"{customer.Name} applies for {amount:C} loan\n");
        var eligible = true;
        if (!_bank.HasSufficientSavings(customer, amount))
        {
            eligible = false;
        }else if (!_loan.HasNoBadLoans(customer))
        {
            eligible = false;
        }
        else if (!_credit.HasGoodCredit(customer))
        {
            eligible = false;
        }

        return eligible;
    }
}
```

:::
