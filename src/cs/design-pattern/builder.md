---
title: 建造者模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

参与此模式的类和对象包括：

- Builder(`VehicleBuilder`)
  - 指定用于创建Product对象的部分的抽象接口。

- ConcreteBuilder(`MotorCycleBuilder`,`CarBuilder`,`ScooterBuilder`)
  - 通过实现Builder接口来构造和组装产品的各个部分。
  - 定义并跟踪它创建的表示。
  - 提供检索产品的接口。

- Director(`Shop`)
  - 使用Builder接口构造一个对象。

- Product(`Vehicle`)
  - 表示正在构建的复杂对象。ConcreteBuilder构建产品的内部表示并定义其组装过程。
  - 包括定义组成部分的类，包括将这些部分组装成最终结果的接口。

::: tabs

@tab Structural code

```cs
// 演示了构建器模式，其中以逐步方式创建复杂对象。
// 构建过程可以创建不同的对象表示并提供对对象组装的高级控制
var director = new Director();

var b1 = new ConcreteBuilder1();
var b2 = new ConcreteBuilder2();

director.Construct(b1);
var p1 = b1.GetResult();
p1.Show();

director.Construct(b2);
var p2 = b2.GetResult();
p2.Show();

// Wait for user
Console.ReadKey();

//  Product Parts -------
// PartA
// PartB

//  Product Parts -------
// PartX
// PartY

public class Director
{
    public void Construct(Builder builder)
    {
        builder.BuildPartA();
        builder.BuildPartB();
    }
}

public abstract class Builder
{
    public abstract void BuildPartA();
    public abstract void BuildPartB();
    public abstract Product GetResult();
}

public class ConcreteBuilder1:Builder
{
    private readonly Product _product = new Product();

    public override void BuildPartA()
    {
        _product.Add("PartA");
    }

    public override void BuildPartB()
    {
        _product.Add("PartB");
    }

    public override Product GetResult()
    {
        return _product;
    }
}

public class ConcreteBuilder2:Builder
{
    private readonly Product _product=new Product();

    public override void BuildPartA()
    {
        _product.Add("PartX");
    }

    public override void BuildPartB()
    {
        _product.Add("PartY");
    }

    public override Product GetResult()
    {
        return _product;
    }
}

public class Product
{
    private readonly List<string> _parts = new List<string>();

    public void Add(string part)
    {
        _parts.Add(part);
    }

    public void Show()
    {
        Console.WriteLine("\n Product Parts -------");
        foreach (string part in _parts)
        {
            Console.WriteLine(part);
        }
    }
}
```

@tab Real-World code

```cs
// 演示了构建起模式，其中不同的车辆以逐步的方式组装。
// 商店使用VehicleBuilders以一系列顺序步骤构建各种车辆。
VehicleBuilder builder;

var shop = new Shop();
builder = new ScooterBuilder();
shop.Construct(builder);
builder.Vehicle.Show();

builder = new CarBuilder();
shop.Construct(builder);
builder.Vehicle.Show();

builder = new MotorCycleBuilder();
shop.Construct(builder);
builder.Vehicle.Show();

// Wait for user
Console.ReadKey();

// --------------------------
// Vehicle Type:Scooter
//  Frame:Scooter Frame
//  Engine:50 cc
//  #Wheels:2
//  #Doors:0

// --------------------------
// Vehicle Type:Car
//  Frame:Car Frame
//  Engine:2500 cc
//  #Wheels:4
//  #Doors:4

// --------------------------
// Vehicle Type:MotorCycle
//  Frame:MotorCycle Frame
//  Engine:500 cc
//  #Wheels:2
//  #Doors:0

public class Shop
{
    public void Construct(VehicleBuilder vehicleBuilder)
    {
        vehicleBuilder.BuildFrame();
        vehicleBuilder.BuildEngine();
        vehicleBuilder.BuildWheels();
        vehicleBuilder.BuildDoors();
    }
}

public abstract class VehicleBuilder
{
    public Vehicle Vehicle { get; protected set; } = null!;

    public abstract void BuildFrame();
    public abstract void BuildEngine();
    public abstract void BuildWheels();
    public abstract void BuildDoors();
}

public class MotorCycleBuilder:VehicleBuilder
{
    public MotorCycleBuilder()
    {
        Vehicle = new Vehicle("MotorCycle");
    }

    public override void BuildFrame()
    {
        Vehicle["frame"] = "MotorCycle Frame";
    }

    public override void BuildEngine()
    {
        Vehicle["engine"] = "500 cc";
    }

    public override void BuildWheels()
    {
        Vehicle["wheels"] = "2";
    }

    public override void BuildDoors()
    {
        Vehicle["doors"] = "0";
    }
}

public class CarBuilder:VehicleBuilder
{
    public CarBuilder()
    {
        Vehicle = new Vehicle("Car");
    }

    public override void BuildFrame()
    {
        Vehicle["frame"] = "Car Frame";
    }

    public override void BuildEngine()
    {
        Vehicle["engine"] = "2500 cc";
    }

    public override void BuildWheels()
    {
        Vehicle["wheels"] = "4";
    }

    public override void BuildDoors()
    {
        Vehicle["doors"] = "4";
    }
}

public class ScooterBuilder:VehicleBuilder
{
    public ScooterBuilder()
    {
        Vehicle = new Vehicle("Scooter");
    }

    public override void BuildFrame()
    {
        Vehicle["frame"] = "Scooter Frame";
    }

    public override void BuildEngine()
    {
        Vehicle["engine"] = "50 cc";
    }

    public override void BuildWheels()
    {
        Vehicle["wheels"] = "2";
    }

    public override void BuildDoors()
    {
        Vehicle["doors"]="0";
    }
}

public class Vehicle
{
    private readonly string _vehicleType;
    private readonly Dictionary<string,string> _parts=new Dictionary<string,string>();

    public Vehicle(string vehicleType)
    {
        _vehicleType=vehicleType;
    }

    public string this[string key]
    {
        get => _parts[key];
        set => _parts[key] = value;
    }

    public void Show()
    {
        Console.WriteLine("\n--------------------------");
        Console.WriteLine($"Vehicle Type:{_vehicleType}");
        Console.WriteLine($" Frame:{_parts["frame"]}");
        Console.WriteLine($" Engine:{_parts["engine"]}");
        Console.WriteLine($" #Wheels:{_parts["wheels"]}");
        Console.WriteLine($" #Doors:{_parts["doors"]}");
    }
}
```

:::
