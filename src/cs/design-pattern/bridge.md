---
title: 桥接模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

参与此模式的类和对象包括：

- Abstraction(`BusinessObject`)
  - 定义抽象的接口。
  - 维护对实现器类型对象的引用。

- RefinedAbstraction(`CustomerBusinessObject`)
  - 扩展抽象定义的接口。

- Implementor(`DataObject`)
  - 定义实现类的接口。这个接口不必完全对应于抽象的接口；实际上，这两个接口可能完全不同。通常，实现接口仅提供基元操作，抽象基于这些基元定义更高级别的操作。

- ConcreteImplementor(`CustomerDataObject`)
  - 实现实现器接口并定义其具体实现。

::: tabs

@tab Structural code

```cs
// 演示了将接口于其实现分离(解耦)的桥接模式。
// 实现可以在不改变使用对象抽象的客户端的情况下发展。
var ab = new RefinedAbstraction
{
    Implementor = new ConcreteImplementorA()
};
ab.Operation();

ab.Implementor = new ConcreteImplementorB();
ab.Operation();

// Wait for user
Console.ReadKey();

// ConcreteImplementorA Operation
// ConcreteImplementorB Operation
public class Abstraction
{
    protected Implementor implementor = null!;

    public Implementor Implementor
    {
        set => implementor = value;
    }

    public virtual void Operation()
    {
        implementor.Operation();
    }
}

public abstract class Implementor
{
    public abstract void Operation();
}

public class RefinedAbstraction:Abstraction
{
    public override void Operation()
    {
        implementor.Operation();
    }
}

public class ConcreteImplementorA : Implementor
{
    public override void Operation()
    {
        Console.WriteLine("ConcreteImplementorA Operation");
    }
}

public class ConcreteImplementorB:Implementor
{
    public override void Operation()
    {
        Console.WriteLine("ConcreteImplementorB Operation");
    }
}
```

@tab Real-World code

```cs
// 演示了桥接模式，其中BusinessObject抽象于DataObject中的实现分离。
// DataObject实现可以动态发展而无需更改任何客户端。
var customers = new Customers
{
    Data = new CustomersData("Chicago")
};

customers.Show();
customers.Next();
customers.Show();
customers.Next();
customers.Show();
customers.Add("Henry Velasquez");
customers.ShowAll();

// Wait for user
Console.ReadKey();

// Jim Jones
// Samual Jackson
// Allen Good

// -----------------------------
// Customer City: Chicago
//  Jim Jones
//  Samual Jackson
//  Allen Good
//  Ann Stills
//  Lisa Giolani
//  Henry Velasquez
// -----------------------------

public class CustomerBase
{
    private DataObject _dataObject = null!;

    public DataObject Data
    {
        get => _dataObject;
        set=> _dataObject = value;
    }

    public virtual void Next()
    {
        _dataObject.NextRecord();
    }

    public virtual void Prior()
    {
        _dataObject.PriorRecord();
    }

    public virtual void Add(string customer)
    {
        _dataObject.AddRecord(customer);
    }

    public virtual void Delete(string customer)
    {
        _dataObject.DeleteRecord(customer);
    }

    public virtual void Show()
    {
        _dataObject.ShowRecord();
    }

    public virtual void ShowAll()
    {
        _dataObject.ShowAllRecords();
    }
}

public class Customers : CustomerBase
{
    public override void ShowAll()
    {
        Console.WriteLine();
        Console.WriteLine("-----------------------------");
        base.ShowAll();
        Console.WriteLine("-----------------------------");
    }
}

public abstract class DataObject
{
    public abstract void NextRecord();
    public abstract void PriorRecord();
    public abstract void AddRecord(string name);
    public abstract void DeleteRecord(string name);
    public abstract string GetCurrentRecord();
    public abstract void ShowRecord();
    public abstract void ShowAllRecords();
}

public class CustomersData : DataObject
{
    private readonly List<string> _customers = new List<string>();
    private int _current;
    private readonly string _city;

    public CustomersData(string city)
    {
        _city=city;
        _customers.Add("Jim Jones");
        _customers.Add("Samual Jackson");
        _customers.Add("Allen Good");
        _customers.Add("Ann Stills");
        _customers.Add("Lisa Giolani");
    }

    public override void NextRecord()
    {
        if (_current <= _customers.Count - 1)
        {
            _current++;
        }
    }

    public override void PriorRecord()
    {
        if (_current > 0)
        {
            _current--;
        }
    }

    public override void AddRecord(string customer)
    {
        _customers.Add(customer);
    }

    public override void DeleteRecord(string customer)
    {
        _customers.Remove(customer);
    }

    public override string GetCurrentRecord()
    {
        return _customers[_current];
    }

    public override void ShowRecord()
    {
        Console.WriteLine(_customers[_current]);
    }

    public override void ShowAllRecords()
    {
        Console.WriteLine($"Customer City: {_city}");
        foreach (var customer in _customers)
        {
            Console.WriteLine($" {customer}");
        }
    }
}
```

:::
