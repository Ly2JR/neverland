---
title: 原型模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

参与此模式的类和对象包括：

- Prototype(`ColorPrototype`)
  - 声明用于克隆自身的接口。

- ConcretePrototype(`Color`)
  - 实现克隆本身的操作。

- Client(`ColorManager`)
  - 通过要求原型克隆自身来创建新对象。

::: tabs

@tab Structural code

```cs
// 演示了原型模式，其中通过复制同一类的预先存在的对象(原型)来创建新对象。
var p1 = new ConcretePrototype1("I");
var c1 = (ConcretePrototype1)p1.Clone();
Console.WriteLine($"Cloned:{c1.Id}");

var p2=new ConcretePrototype2("II");
var c2 = (ConcretePrototype2)p2.Clone();
Console.WriteLine($"Cloned:{c2.Id}");

// Wait for user
Console.ReadKey();

// Cloned:I
// Cloned:II

public abstract class Prototype
{
    private string _id;

    protected Prototype(string id)
    {
        _id = id;
    }

    public string Id
    {
        get { return _id; }
    }

    public abstract Prototype Clone();
}

public class ConcretePrototype1 : Prototype
{
    public ConcretePrototype1(string id) : base(id)
    {
    }

    public override Prototype Clone()
    {
        return (Prototype)this.MemberwiseClone();
    }
}

public class ConcretePrototype2:Prototype
{
    public ConcretePrototype2(string id) : base(id)
    {
    }

    public override Prototype Clone()
    {
        return (Prototype)this.MemberwiseClone();
    }
}
```

@tab Real-World code

```cs
// 演示了原型模式，其中通过复制预先存在的、用户定义的相同类型的颜色来创建新的颜色对象。
var colorManager = new ColorManager
{
    ["red"] = new Color(255, 0, 0),
    ["green"] = new Color(0, 255, 0),
    ["blue"] = new Color(0, 0, 255)
};

//User adds personalized colors
colorManager["angry"]=new Color(255, 54, 0);
colorManager["peace"] = new Color(128, 211, 128);
colorManager["flame"] = new Color(211, 34, 20);

//User clones selected colors
var color1 = colorManager["red"].Clone() as Color;
var color2 = colorManager["peace"].Clone() as Color;
var color3= colorManager["flame"].Clone() as Color;

// Wait for user
Console.ReadKey();

// Cloning color RGB:255,  0,  0
// Cloning color RGB:128,211,128
// Cloning color RGB:211, 34, 20

public abstract class ColorPrototype
{
    public abstract ColorPrototype Clone();
}

public class Color:ColorPrototype
{
    private int _red;
    private int _green;
    private int _blue;

    public Color(int red,int green,int blue)
    {
        _red = red;
        _green = green;
        _blue = blue;
    }

    public override ColorPrototype Clone()
    {
        Console.WriteLine($"Cloning color RGB:{_red,3},{_green,3},{_blue,3}");
        return this.MemberwiseClone() as ColorPrototype;
    }
}

public class ColorManager
{
    private Dictionary<string,ColorPrototype> _colors=new Dictionary<string,ColorPrototype>();

    public ColorPrototype this[string key]
    {
        get { return _colors[key]; }
        set{_colors.Add(key,value);}
    }
}
```

:::
