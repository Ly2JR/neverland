---
title: 工厂方法模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

参与此模式的类和对象包括：

- Product(`Page`)
  - 定义工厂方法创建的对象的接口。

- ConcreteProduct(`SkillsPage`,`EducationPage`,`ExperiencePage`)
  - 实现产品接口。

- Creator(`Document`)
  - 声明工厂方法，它返回一个Product类型的对象。Creator还可以定义返回默认ConcreteProduct对象的工厂方法的默认实现。
  - 可以调用工厂方法来创建Product对象。

- ConcreteCreator(`Report`,`Resume`)

  - 重写工厂方法以返回ConcreteProduct的实例。

::: tabs

@tab Structural code

```cs
// 演示了Factory方法，它在创建不同对象方面提供了极大的灵活性。
// Abstract类可以提供一个默认对象，但每个子类都可以实例化该对象的扩展版本。
var creators = new Creator[2];
creators[0] = new ConcreteCreatorA();
creators[1] = new ConcreteCreatorB();

foreach (var creator in creators)
{
    var product = creator.FactoryMethod();
    Console.WriteLine($"Created {product.GetType().Name}");
}

// Wait for user
Console.ReadKey();

// Created ConcreteProductA
// Created ConcreteProductB

public abstract class Product
{

}

public class ConcreteProductA:Product
{
    
}

public class ConcreteProductB:Product
{
    
}

public abstract class Creator
{
    public abstract Product FactoryMethod();
}

public class ConcreteCreatorA:Creator
{
    public override Product FactoryMethod()
    {
        return new ConcreteProductA();
    }
}

public class ConcreteCreatorB : Creator
{
    public override Product FactoryMethod()
    {
        return new ConcreteProductB();
    }
}
```

@tab Real-World code

```cs
// 演示了工厂方法，它在创建不同的文档时提供了灵活性。
// 派生的Document类Report和Resume实例化Document类的扩展版本。
// 这里，工厂方法在Document基类的构造函数中被调用。
var documents = new Document[2];
documents[0] = new Resume();
documents[1] = new Report();

foreach (var document in documents)
{
    Console.WriteLine($"\n{document.GetType().Name} ---");
    foreach (var page in document.Pages)
    {
        Console.WriteLine($" {page.GetType().Name}");
    }
}

// Wait for user
Console.ReadKey();

// Resume--
//  SkillsPage
//  EducationPage
//  ExperiencePage

// Report--
//  IntroductionPage
//  ResultPage
//  ConclusionPage
//  SummaryPage
//  BibliographyPage

public abstract class Page
{
    
}

public class SkillsPage:Page
{
    
}

public class EducationPage:Page
{

}

public class ExperiencePage:Page
{
}

public class IntroductionPage:Page
{
    
}

public class ResultPage:Page
{
    
}

public class ConclusionPage:Page
{
    
}

public class SummaryPage:Page
{
    
}

public class BibliographyPage:Page
{
    
}

public abstract class Document
{
    private readonly List<Page> _pages=new List<Page>();

    protected Document()
    {
        this.CreatePages();
    }

    public List<Page> Pages
    {
        get { return _pages; }
    }

    public abstract void CreatePages();
}

public class Resume:Document
{
    public override void CreatePages()
    {
        Pages.Add(new SkillsPage());
        Pages.Add(new EducationPage());
        Pages.Add(new ExperiencePage());
    }
}

public class Report:Document
{
    public override void CreatePages()
    {
        Pages.Add(new IntroductionPage());
        Pages.Add(new ResultPage());
        Pages.Add(new ConclusionPage());
        Pages.Add(new SummaryPage());
        Pages.Add(new BibliographyPage());
    }
}
```

:::
