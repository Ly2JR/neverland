---
title: 访问者模式
date: 2023-06-17
dir.order: 23
order: 23
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 访问者模式
  - 行为模式
---

参与此模式的类和对象包括：

- Visitor(`Visitor`)
  - 为对象结构中的每个ConcrteElement类声明一个访问操作。该操作的名称和签名标识了向访问者发送访问请求的类。这让访问者可以确定被访问元素的具体类。然后访问者可以通过其特定的界面直接访问元素。

- ConcreteVisitor(`IncomeVisitor`,`VacationVisitor`)
  - 实现访问者声明的每个操作。每个操作都实现了为结构中的相应类或对象定义的算法片段。ConcreteVisitor为算法提供上下文并存储其本地状态。这个状态通常会在结构的遍历过程中累积结果。

- Element(`Element`)
  - 定义一个以访问者为参数的Accept操作。

- ConcreteElement(`Employee`)
  - 实现以访问者为参数的Accept操作。

- ObjectStructure(`Employees`)
  - 可以枚举它的元素。
  - 可以提供高级界面以允许访问者访问其元素。
  - 可以是组合(模式)或集合，例如列表或集合。

::: tabs

@tab Structural code

```cs
// 演示了访问者模式。
// 其中对象遍历对象结构并对该结构中的每个节点执行相同的操作。
// 不同的访问者对象定义了不同的操作。
var o = new ObjectStructure();
o.Attach(new ConcreteElementA());
o.Attach(new ConcreteElementB());

var v1 = new ConcreteVisitor1();
var v2 = new ConcreteVisitor2();

o.Accept(v1);
o.Accept(v2);

// Wait for user
Console.ReadKey();

// ConcreteElementA visited by ConcreteVisitor1
// ConcreteElementB visited by ConcreteVisitor1
// ConcreteElementA visited by ConcreteVisitor2
// ConcreteElementB visited by ConcreteVisitor2

public abstract class Visitor
{
    public abstract void VisitConcreteElementA(ConcreteElementA concreteElementA);

    public abstract void VisitConcreteElementB(ConcreteElementB concreteElementB);
}

public class ConcreteVisitor1 : Visitor
{
    public override void VisitConcreteElementA(ConcreteElementA concreteElementA)
    {
        Console.WriteLine($"{concreteElementA.GetType().Name} visited by {this.GetType().Name}");
    }

    public override void VisitConcreteElementB(ConcreteElementB concreteElementB)
    {
        Console.WriteLine($"{concreteElementB.GetType().Name} visited by {this.GetType().Name}");
    }
}

public class ConcreteVisitor2:Visitor
{
    public override void VisitConcreteElementA(ConcreteElementA concreteElementA)
    {
        Console.WriteLine($"{concreteElementA.GetType().Name} visited by {this.GetType().Name}");
    }

    public override void VisitConcreteElementB(ConcreteElementB concreteElementB)
    {
        Console.WriteLine($"{concreteElementB.GetType().Name} visited by {this.GetType().Name}");
    }
}

public abstract class Element
{
    public abstract void Accept(Visitor visitor);
}

public class ConcreteElementA:Element
{
    public override void Accept(Visitor visitor)
    {
        visitor.VisitConcreteElementA(this);
    }

    public void OperationA()
    {

    }
}

public class ConcreteElementB:Element
{
    public override void Accept(Visitor visitor)
    {
        visitor.VisitConcreteElementB(this);
    }

    public void OperationB()
    {

    }
}

public class ObjectStructure
{
    private readonly List<Element> _elements=new List<Element>();

    public void Attach(Element element)
    {
        _elements.Add(element);
    }

    public void Detach(Element element)
    {
        _elements.Remove(element);
    }

    public void Accept(Visitor visitor)
    {
        foreach (var element in _elements)
        {
            element.Accept(visitor);
        }
    }
}
```

@tab Real-World code

```cs
// 演示了访问者模式。
// 其中两个对象遍历员工列表并对每个员工执行相同的操作。
// 这两个访问者对象定义了不同的操作---一个调整休假天数，另一个调整收入。
var employee = new Employees();
employee.Attach(new Clerk());
employee.Attach(new Director());
employee.Attach(new President());

employee.Accept(new IncomeVisitor());
employee.Accept(new VacationVisitor());

// Wait for user
Console.ReadKey();

// Clerk Kevin's new income:￥27,500.00
// Director Elly's new income:￥38,500.00
// President Eric's new income:￥49,500.00

// Clerk Kevin's new Vacation days:17
// Director Elly's new Vacation days:19
// President Eric's new Vacation days:24

public interface IVisitor
{
    void Visit(Element element);
}

public class IncomeVisitor : IVisitor
{
    public void Visit(Element element)
    {
        if (element is Employee employee)
        {
            employee.Income *= 1.10;
            Console.WriteLine($"{employee.GetType().Name} {employee.Name}'s new income:{employee.Income:C}");
        }
    }
}

public class VacationVisitor:IVisitor
{
    public void Visit(Element element)
    {
        if (element is Employee employee)
        {
            employee.VacationDays += 3;

            Console.WriteLine($"{employee.GetType().Name} {employee.Name}'s new Vacation days:{employee.VacationDays}");
        }
    }
}

public abstract class Element
{
    public abstract void Accept(IVisitor visitor);
}

public class Employee:Element
{
    public Employee(string name, double income, int vacationDays)
    {
        Name=name;
        Income=income;
        VacationDays = vacationDays;
    }

    public string Name { get; set; }

    public double Income { get; set; }

    public int VacationDays { get; set; }

    public override void Accept(IVisitor visitor)
    {
        Visit(this);
    }
}

public class Employees
{
    private readonly List<Employee> _employees=new List<Employee>();

    public void Attach(Employee employee)
    {
        _employees.Add(employee);
    }

    public void Detach(Employee employee)
    {
        _employees.Remove(employee);
    }

    public void Accept(IVisitor visitor)
    {
        foreach (var employee in _employees)
        {
            employee.Accept(visitor);
        }
        Console.WriteLine();
    }
}

public class Clerk : Employee
{
    public Clerk() : base("Kevin", 25000.0, 14)
    {
    }
}

public class Director : Employee
{
    public Director() : base("Elly", 35000.0, 16)
    {
    }
}

public class President : Employee
{
    public President() : base("Eric", 45000.0, 21)
    {
    }
}
```

:::
