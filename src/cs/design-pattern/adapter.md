---
title: 适配器模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

参与此模式的类和对象包括：

- Target(`ChemicalCompound`)
  - 定义客户端使用的特定于域的接口。

- Adapter(`Compund`)
  - 使接口适配器适应目标接口。

- Adaptee(`ChemicalDatabank`)
- 定义需要调整的现有接口。

- Client(`AdapterApp`)
  - 与符合"目标"接口的对象协作。

::: tabs

@tab Structural code

```cs
// 演示了适配器模式，该模式将一个类的接口映射到另一个类，以便它们可以一起工作。
// 这些不兼容的类可能来自不同的库或框架。
var target = new Adapter();
target.Request();

// Wait for user
Console.ReadKey();

// Called SpecificRequest()
public class Target
{
    public virtual void Request()
    {
        Console.WriteLine("Called Target Request()");
    }
}

public class Adapter:Target
{
    private readonly Adaptee _adapter = new Adaptee();

    public override void Request()
    {
        _adapter.SpecificRequest();
    }
}

public class Adaptee
{
    public void SpecificRequest()
    {
        Console.WriteLine("Called SpecificRequest()");
    }
}
```

@tab Real-World code

```cs
// 演示了传统化学数据库的使用。
// 化合物对象通过适配器接口访问数据库。
var unknown = new Compound();
unknown.Display();

var water = new RichCompound("Water");
water.Display();

var benzene = new RichCompound("Benzene");
benzene.Display();

var ethanol = new RichCompound("Ethanol");
ethanol.Display();

// Wait for user
Console.ReadKey();

// Compound:Unknown ------

// Compound:Water ------
//  Formula:H20
//  Weight:18.015
//  Melting Pt:0
//  Boiling Pt:100

// Compound:Benzene ------
//  Formula:C6H6
//  Weight:78.1134
//  Melting Pt:5.5
//  Boiling Pt:80.1

// Compound:Ethanol ------
//  Formula:C2H50H
//  Weight:446.0688
//  Melting Pt:-114.1
//  Boiling Pt:78.3

public class Compound
{
    protected float BoilingPoint;
    protected float MeltingPoint;
    protected double MolecularWeight;
    protected string MolecularFormula = null;

    public virtual void Display()
    {
        Console.WriteLine("\nCompound:Unknown ------ ");
    }
}

public class RichCompound : Compound
{
    private readonly string _chemical;
    private ChemicalDatabank _bank = null;

    public RichCompound(string chemical)
    {
        _chemical=chemical;
    }

    public override void Display()
    {
        _bank=new ChemicalDatabank();

        BoilingPoint = _bank.GetCriticalPoint(_chemical, "B");
        MeltingPoint = _bank.GetCriticalPoint(_chemical, "M");
        MolecularWeight = _bank.GetMolecularWeight(_chemical);
        MolecularFormula = _bank.GetMolecularStructure(_chemical);

        Console.WriteLine($"\nCompound:{_chemical} ------ ");
        Console.WriteLine($" Formula:{MolecularFormula}");
        Console.WriteLine($" Weight:{MolecularWeight}");
        Console.WriteLine($" Melting Pt:{MeltingPoint}");
        Console.WriteLine($" Boiling Pt:{BoilingPoint}");
    }
}

public class ChemicalDatabank
{
    public float GetCriticalPoint(string compound, string point)
    {
        if (point == "M")
        {
            switch (compound.ToLower())
            {
                case "water": return 0.0f;
                case "benzene": return 5.5f;
                case "ethanol": return -114.1f;
                default: return 0f;
            }
        }
        else
        {
            switch (compound.ToLower()) 
            {
                case "water": return 100.0f;
                case "benzene": return 80.1f;
                case "ethanol": return 78.3f;
                default: return 0f;
            }
        }
    }

    public string GetMolecularStructure(string compound)
    {
        switch (compound.ToLower())
        {
            case "water": return "H20";
            case "benzene": return "C6H6";
            case "ethanol": return "C2H50H";
            default: return "";
        }
    }

    public double GetMolecularWeight(string compound)
    {
        switch (compound.ToLower())
        {
            case "water": return 18.015;
            case "benzene": return 78.1134;
            case "ethanol": return 446.0688;
            default: return 0d;
        }
    }
}
```

:::
