---
title: 装饰模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

![decorator](https://nas.ilyl.life:8092/design-pattern/decorator.png)

参与此模式的类和对象包括：

- Component(`LibraryItem`)
  - 定义对象的接口，这些对象可以动态地向其添加职责。

- ConcreteComponent(`Book`,`Video`)
  - 定义可附加其他职责的对象。

- Decorator(`Decorator`)
  - 维护对组件对象的引用，并定义符合Component接口的接口。

- ConcreteDecorator(`Borrowable`)
  - 向组件添加职责。

::: tabs

@tab Structural code

```cs
// 演示了装饰器模式，它动态地向现有对象添加额外的功能。
var c = new ConcreteComponent();
var d1 = new ConcreteDecoratorA();
var d2 = new ConcreteDecoratorB();

d1.SetComponent(c);
d2.SetComponent(d1);

d2.Operation();

// Wait for user
Console.ReadKey();

// ConcreteComponent.Operation()
// ConcreteDecoratorA.Operation()
// ConcreteDecoratorB.Operation()

public abstract class Component
{
    public abstract void Operation();
}

public class ConcreteComponent:Component
{
    public override void Operation()
    {
        Console.WriteLine("ConcreteComponent.Operation()");
    }
}

public abstract class Decorator:Component
{
    protected Component Component;

    public void SetComponent(Component component)
    {
        this.Component = component;
    }

    public override void Operation()
    {
        if (Component != null)
        {
            Component.Operation();
        }
    }
}

public class ConcreteDecoratorA:Decorator
{
    public override void Operation()
    {
        base.Operation();
        Console.WriteLine("ConcreteDecoratorA.Operation()");
    }
}

public class ConcreteDecoratorB:Decorator
{
    public override void Operation()
    {
        base.Operation();
        AddedBehavior();
        Console.WriteLine("ConcreteDecoratorB.Operation()");
    }

    void AddedBehavior()
    {

    }
}
```

@tab Real-World code

```cs
// 演示了装饰器模式。
// 其中"可借"功能被添加到现有的图书馆项目(书籍和视频)中。
var book = new Book("Worley", "Inside ASP.NET", 10);
book.Display();

var video = new Video("Spielberg", "Jaws", 23, 92);
video.Display();

Console.WriteLine("\nMaking video borrowable:");

var borrowvideo = new Borrowable(video);
borrowvideo.BorrowItem("Customer #1");
borrowvideo.BorrowItem("Customer #2");
borrowvideo.Display();

// Wait for user
Console.ReadKey();

// Book ------
//  Author:Worley
//  Title:Inside ASP.NET
// # Copies: 10

// Video ------
//  Director: Spielberg
//  Title: Jaws
//  # Copies: 23
//  Playtime: 92


// Making video borrowable:

// Video ------
//  Director: Spielberg
//  Title: Jaws
//  # Copies: 21
//  Playtime: 92

//  borrower:Customer #1
//  borrower:Customer #2

public abstract class LibraryItem
{
    public int NumCopies { get; set; }

    public abstract void Display();
}

public class Book:LibraryItem
{
    private readonly string _author;
    private readonly string _title;

    public Book(string author, string title, int numCopies)
    {
        _author = author;
        _title = title;
        NumCopies = numCopies;
    }

    public override void Display()
    {
        Console.WriteLine("\nBook ------ ");
        Console.WriteLine($" Author:{_author}");
        Console.WriteLine($" Title:{_title}");
        Console.WriteLine($"# Copies: {NumCopies}");
    }
}

public class Video:LibraryItem
{
    private readonly string _director;
    private readonly string _title;
    private readonly int _playTime;

    public Video(string director, string title, int numCopies, int playTime)
    {
        _director=director;
        _title=title;
        _playTime=playTime;
        NumCopies=numCopies;
    }

    public override void Display()
    {
        Console.WriteLine("\nVideo ------ ");
        Console.WriteLine($" Director: {_director}");
        Console.WriteLine($" Title: {_title}");
        Console.WriteLine($" # Copies: {NumCopies}");
        Console.WriteLine($" Playtime: {_playTime}\n");
    }
}

public abstract class Decorator:LibraryItem
{
    protected LibraryItem libraryItem;

    protected Decorator(LibraryItem libraryItem)
    {
        this.libraryItem = libraryItem;
    }

    public override void Display()
    {
        libraryItem.Display();
    }
}

public class Borrowable:Decorator
{
    protected readonly List<string> borrowers = new List<string>();
    public Borrowable(LibraryItem libraryItem) : base(libraryItem)
    {
    }

    public void BorrowItem(string name)
    {
        borrowers.Add(name);
        libraryItem.NumCopies--;
    }

    public void ReturnItem(string name)
    {
        borrowers.Remove(name);
        libraryItem.NumCopies++;
    }

    public override void Display()
    {
        base.Display();
        foreach (var borrow in borrowers)
        {
            Console.WriteLine($" borrower:{borrow}");
        }
    }
}
```

:::
