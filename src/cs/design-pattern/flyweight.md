---
title: 享元模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

参与此模式的类和对象包括：

- Flyweight(`Character`)
  - 声明一个接口，享元可以通过该接口接收外部状态并对其进行操作。

- ConcreteFlyweight(`CharacterA`,`CharacterB`,`...`,`CharacterZ`)
  - 实现享元接口并为内在状态添加存储(如果有)。ConcreteFlyweight对象必须是可共享的。它存储的任何状态都必须是内在的，也就是说，它必须独立于ConcreteFlyweight对象的上下文。

- UnsharedConcreteFlyweight(`not used`)
  - 并非所有享元子类都需要共享。Flyweight接口支持共享，但不强制执行。UnsharedConcreteFlyweight对象通常在享元对象结构中的某个级别将ConcreteFlyweight对象作为子对象(如Row和Column类所具有的)。

- FlyweightFactory(`CharacterFactory`)
  - 创建和管理享元对象。
  - 确保享元被正确共享。当客户端请求享元时，FlyweightFactory对象资产现有实例或创建一个(如果不存在)。

- Client(`FlyweightApp`)
  - 维护对享元的引用。
  - 计算或存储享元的外在状态。

::: tabs

@tab Structural code

```cs
// 演示了享元模式。
// 其中相对少量的对象被不同的客户端多次共享。
int extrinsicstate = 22;
var factory = new FlyweightFactory();

var fx = factory.GetFlyweight("X");
fx.Operation(--extrinsicstate);

var fy = factory.GetFlyweight("Y");
fy.Operation(--extrinsicstate);

var fz = factory.GetFlyweight("Z");
fz.Operation(--extrinsicstate);

// Wait for user
Console.ReadKey();

// ConcreteFlyweight:21
// ConcreteFlyweight:20
// ConcreteFlyweight:19

public class FlyweightFactory
{
    private Dictionary<string, Flyweight> Flyweights { get; } = new Dictionary<string, Flyweight>();

    public FlyweightFactory()
    {
        Flyweights.Add("X", new ConcreteFlyweight());
        Flyweights.Add("Y", new ConcreteFlyweight());
        Flyweights.Add("Z", new ConcreteFlyweight());
    }

    public Flyweight GetFlyweight(string key)
    {
        return Flyweights[key];
    }
}

public abstract class Flyweight
{
    public abstract void Operation(int extrinsicstate);
}

public class ConcreteFlyweight : Flyweight
{
    public override void Operation(int extrinsicstate)
    {
        Console.WriteLine($"ConcreteFlyweight:{extrinsicstate}");
    }
}

public class UnsharedConcreteFlyweight : Flyweight
{
    public override void Operation(int extrinsicstate)
    {
        Console.WriteLine($"UnsharedConcreteFlyweight:{extrinsicstate}");
    }
}
```

@tab Real-World code

```cs
// 演示了享元模式。
// 其中相对少量的Character对象由可能具有许多字符的文档多次共享。
string document = "AAZZBBZB";
var chars = document.ToCharArray();

var factory2 = new CharacterFactory();

int pointSize = 10;

foreach (var c in chars)
{
    pointSize++;
    var character = factory2.GetCharacter(c);
    character.Display(pointSize);
}

// Wait for user
Console.ReadKey();

// UnsharedConcreteFlyweight:18
// A (pointSize 11)
// A (pointSize 12)
// Z (pointSize 13)
// Z (pointSize 14)
// B (pointSize 15)
// B (pointSize 16)
// Z (pointSize 17)
// B (pointSize 18)

public class CharacterFactory
{
    private readonly Dictionary<char, Character> _characters = new Dictionary<char, Character>();

    public Character GetCharacter(char key)
    {
        Character character = null;
        if (_characters.ContainsKey(key))
        {
            character = _characters[key];
        }
        else
        {
            switch (key)
            {
                case 'A': character = new CharacterA(); break;
                case 'B': character = new CharacterB(); break;
                case 'Z': character = new CharacterZ(); break;
            }
            _characters.Add(key, character);
        }

        return character;
    }
}

public abstract class Character
{
    protected char Symbol;
    protected int Width;
    protected int Height;
    protected int Ascent;
    protected int Descent;
    protected int PointSize;

    public abstract void Display(int pointSize);
}

public class CharacterA : Character
{
    public CharacterA()
    {
        Symbol = 'A';
        Height = 100;
        Width = 120;
        Ascent = 70;
        Descent = 0;
    }

    public override void Display(int pointSize)
    {
        this.PointSize = pointSize;
        Console.WriteLine($"{Symbol} (pointSize {pointSize})");
    }
}

public class CharacterB : Character
{
    public CharacterB()
    {
        Symbol = 'B';
        Height = 100;
        Width = 140;
        Ascent = 72;
        Descent = 0;
    }

    public override void Display(int pointSize)
    {
        this.PointSize = pointSize;
        Console.WriteLine($"{Symbol} (pointSize {pointSize})");
    }
}

public class CharacterZ : Character
{
    public CharacterZ()
    {
        Symbol = 'Z';
        Height = 100;
        Width = 100;
        Ascent = 68;
        Descent = 0;
    }

    public override void Display(int pointSize)
    {
        this.PointSize = pointSize;
        Console.WriteLine($"{Symbol} (pointSize {pointSize})");
    }
}
```

:::
