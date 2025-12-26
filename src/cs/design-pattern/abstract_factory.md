---
title: 抽象工厂
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

![abstract](https://image.ilyl.life:8443/design-pattern/abstract.png)

参与此模式的类和对象包括：

- AbstractFactory(`ContinentFactory`)
  - 为创建抽象产品的操作声明一个接口。

- ConcreteFactory(`AfricaFactory`，`AmericaFactory`)
  - 实现创建具体产品对象的操作。

- AbstractProduct(`Herbivore`，`Carnivore`)
  - 声明一种产品对象的接口。

- Product(`Wildebeest`，`Lion`，`Bison`，`Wolf`)
  - 定义要由相应的具体工厂创建的产品对象。
  - 实现AbstractProduct接口。

- Client(`AnimalWorld`)
  - 使用AbstractFactory和AbstractProduct类声明的接口。

::: tabs

@tab Structural code

```cs
// 演示了创建对象的并行层次结构的抽象工厂模式。
// 对象创建已被抽象化，客户端代码中不需要硬编码的类名。
var factory1 = new ConcreteFactory1();
var client1 = new Client(factory1);
client1.Run();

var factory2 = new ConcreteFactory2();
var client2 = new Client(factory2);
client2.Run();

// Wait for user
Console.ReadKey();

// Design_Pattern.AbstractFactory interacts with ProductA1
// ProductB2 interacts with ProductA2

public abstract class AbstractFactory
{
    public abstract AbstractProductA CreateProductA();
    public abstract AbstractProductB CreateProductB();
}

public class ConcreteFactory1 : AbstractFactory
{
    public override AbstractProductA CreateProductA()
    {
        return new ProductA1();
    }

    public override AbstractProductB CreateProductB()
    {
        return new ProductB1();
    }
}

public class ConcreteFactory2 : AbstractFactory
{
    public override AbstractProductA CreateProductA()
    {
        return new ProductA2();
    }

    public override AbstractProductB CreateProductB()
    {
        return new ProductB2();
    }
}

public abstract class AbstractProductA{}

public abstract class AbstractProductB
{
    public abstract void Interact(AbstractProductA a);
}

public class ProductA1 : AbstractProductA{}

public class ProductB1 : AbstractProductB
{
    public override void Interact(AbstractProductA a)
    {
        Console.WriteLine($"{this.GetType().Name} interacts with {a.GetType().Name}");
    }
}

public class ProductA2 : AbstractProductA{}

public class ProductB2 : AbstractProductB
{
    public override void Interact(AbstractProductA a)
    {
        Console.WriteLine($"{this.GetType().Name} interacts with {a.GetType().Name}");
    }
}

public class Client
{
    private AbstractProductA _abstractProductA;
    private AbstractProductB _abstractProductB;

    public Client(AbstractFactory factory)
    {
        _abstractProductA=factory.CreateProductA();
        _abstractProductB=factory.CreateProductB();
    }

    public void Run()
    {
        _abstractProductB.Interact(_abstractProductA);
    }
}
```

@tab Real-World code

```cs
// 演示了使用不同工厂为电脑游戏创建不同的动物世界。
// 虽然大陆工厂创造的动物不同，但动物之间的互动是一样的。
var africa = new AfricaFactory();
var world = new AnimalWorld(africa);
world.RunFoodChain();

var america = new AmericaFactory();
world = new AnimalWorld(america);
world.RunFoodChain();

// Wait for user
Console.ReadKey();

// Lion eats Wildebeest
// Wolf eats Bison

public abstract class ContinentFactory
{
    public abstract Herbivore CreateHerbivore();
    public abstract Carnivore CreateCarnivore();
}

public class AfricaFactory:ContinentFactory
{
    public override Herbivore CreateHerbivore()
    {
        return new Wildebeest();
    }

    public override Carnivore CreateCarnivore()
    {
        return new Lion();
    }
}

public class AmericaFactory:ContinentFactory
{
    public override Herbivore CreateHerbivore()
    {
        return new Bison();
    }

    public override Carnivore CreateCarnivore()
    {
        return new Wolf();
    }
}

public abstract class Herbivore{}

public abstract class Carnivore
{
    public abstract void Eat(Herbivore h);
}

public class Wildebeest:Herbivore{}

public class Lion:Carnivore
{
    public override void Eat(Herbivore h)
    {
        //Eat Wildebeest
        Console.WriteLine($"{this.GetType().Name} eats {h.GetType().Name}");
    }
}

public class Bison : Herbivore{}

public class Wolf:Carnivore
{
    public override void Eat(Herbivore h)
    {
        //Eat Bison
        Console.WriteLine($"{this.GetType().Name} eats {h.GetType().Name}");
    }
}

public  class AnimalWorld
{
    private Herbivore _herbivore;
    private Carnivore _carnivore;

    public AnimalWorld(ContinentFactory factory)
    {
        _carnivore = factory.CreateCarnivore();
        _herbivore = factory.CreateHerbivore();
    }

    public void RunFoodChain()
    {
        _carnivore.Eat(_herbivore);
    }
}
```

:::
