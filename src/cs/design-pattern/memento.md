---
title: 备忘录模式
date: 2023-06-17
dir.order: 15
order: 15
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 备忘录模式
  - 行为模式
---

参与此模式的类和对象包括：

- Memento(`Memento`)
  - 存储Originator对象的内部状态。Memento可以根据其发起者的判断，尽可能多地或尽可能少地存储发起者的内部状态。
  - 防止发起者以外的对象访问。Mementos实际上有两个接口。Caretaker看到了Memento的狭窄接口---它只能将Memento传递给其他对象。相比之下，originator看到了一个广泛的界面，它可以访问所有必要的数据以将自己恢复到之前的状态。理想情况下，只有产生备忘录的始发者才被允许访问备忘录的内部状态。

- Originator(`SalesProspect`)
  - 创建一个包含其当前内部状态快照的Memento。
  - 使用Memento恢复其内部状态。

- Caretaker(`Caretaker`)
  - 负责Memento的保管。
  - 从不操作或检测Memento的内容。

::: tabs

@tab Structural code

```cs
// 演示了临时保存和恢复另一个对象的内部状态的备忘录模式
var o = new Originator
{
    State = "On"
};
var c =new Caretaker
{
    Memento = o.CreateMemento()
};

o.State = "Off";
o.SetMemento(c.Memento);

// Wait for user
Console.ReadKey();

// State = On
// State = Off
// Restoring state...
// State = On

public class Originator
{
    private string _state;

    public string State
    {
        get => _state;
        set
        {
            _state = value;
            Console.WriteLine($"State = {_state}");
        }
    }

    public Memento CreateMemento()
    {
        return new Memento(_state);
    }

    public void SetMemento(Memento memento)
    {
        Console.WriteLine("Restoring state...");
        State=memento.State;
    }
}

public class Memento
{
    public Memento(string? state)
    {
        State=state;
    }

    public string? State { get; }
}

public class Caretaker
{
    public Memento Memento { get; set; } = null;
}
```

@tab Real-World code

```cs
// 演示了临时保存然后恢复SalesProspect的内部状态的Memento模式
var s = new SaleProspect()
{
    Name = "Noel van Halen",
    Phone = "(412) 256-0990",
    Budget = 25000.0
};

var m = new ProspectMemory
{
    Memento = s.SaveMemento()
};

s.Name = "Leo Welch";
s.Phone = "(310) 209-7111";
s.Budget = 1000000.0;

s.RestoreMemento(m.Memento);

// Wait for user
Console.ReadKey();

// Name: Noel van Halen
// Phone: (412) 256-0990
// Budget: 25000

// Saving state --

// Name: Leo Welch
// Phone: (310) 209-7111
// Budget: 1000000

// Restoring state --

// Name: Noel van Halen
// Phone: (412) 256-0990
// Budget: 25000

public class SaleProspect
{
    private string _name = null!;
    private string _phone = null!;
    private double _budget;

    public string Name
    {
        get => _name;
        set
        {
            _name = value;
            Console.WriteLine($"Name: {_name}");
        }
    }

    public string Phone
    {
        get => _phone;
        set
        {
            _phone = value;
            Console.WriteLine($"Phone: {_phone}");
        }
    }

    public double Budget
    {
        get => _budget;
        set
        {
            _budget = value;
            Console.WriteLine($"Budget: {_budget}");
        }
    }

    public Memento SaveMemento()
    {
        Console.WriteLine("\nSaving state -- \n");
        return new Memento(_name, _phone, _budget);
    }

    public void RestoreMemento(Memento memento)
    {
        Console.WriteLine("\nRestoring state --\n");
        Name=memento.Name;
        Phone=memento.Phone;
        Budget=memento.Budget;
    }
}

public class Memento
{
    public string Name { get; set; }

    public string Phone { get; set; }

    public double Budget { get; set; }

    public Memento(string name, string phone, double budget)
    {
        Name = name;
        Phone = phone;
        Budget = budget;
    }
}

public class ProspectMemory
{
    public Memento Memento { get; set; } = null!;
}
```

:::
