---
title: 策略模式
date: 2023-06-17
dir.order: 21
order: 21
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

参与此模式的类和对象包括：

- Strategy(`SortStrategy`)
  - 声明所有支持的算法通用的接口。Context使用这个接口调用一个ConcreteStrategy定义的算法。

- ConcreteStrategy(`QuickSort`,`ShellSort`,`MergeSort`)
  - 使用Strategy接口实现算法。

- Context(`SortedList`)
  - 配置有一个ConcreteStrategy对象。
  - 维护对Strategy对象的引用。
  - 可以定义一个让Strategy访问其数据的接口。

::: tabs

@tab Structural code

```cs
// 此代码演示了以对象形式封装功能的策略模式。
// 这允许客户端动态更改算法策略。
Context context;

context = new Context(new ConcreteStrategyA());
context.ContextInterface();

context = new Context(new ConcreteStrategyB());
context.ContextInterface();

context = new Context(new ConcreteStrategyC());
context.ContextInterface();

// Wait for user
Console.ReadKey();

// Called ConcreteStrategyA.AlgorithmInterface()
// Called ConcreteStrategyB.AlgorithmInterface()
// Called ConcreteStrategyC.AlgorithmInterface()

public abstract class Strategy
{
    public abstract void AlgorithmInterface();
}

public class ConcreteStrategyA : Strategy
{
    public override void AlgorithmInterface()
    {
        Console.WriteLine("Called ConcreteStrategyA.AlgorithmInterface()");
    }
}

public class ConcreteStrategyB : Strategy
{
    public override void AlgorithmInterface()
    {
        Console.WriteLine("Called ConcreteStrategyB.AlgorithmInterface()");
    }
}

public class ConcreteStrategyC:Strategy
{
    public override void AlgorithmInterface()
    {
        Console.WriteLine("Called ConcreteStrategyC.AlgorithmInterface()");
    }
}

public class Context
{
    private readonly Strategy _strategy;

    public Context(Strategy strategy)
    {
        this._strategy = strategy;
    }

    public void ContextInterface()
    {
        _strategy.AlgorithmInterface();
    }
}
```

@tab Real-World code

```cs
// 展示了以排序对象的形式封装排序算法的策略模式。
// 这允许客户端动态更改排序策略，包括Quicksort、Shellsort和Mergesort。
var studentRecords = new SortedList();
studentRecords.Add("Samual");
studentRecords.Add("Jimmy");
studentRecords.Add("Sandra");
studentRecords.Add("Vivek");
studentRecords.Add("Anna");

studentRecords.SetSortStrategy(new QuickSort());
studentRecords.Sort();

studentRecords.SetSortStrategy(new ShellSort());
studentRecords.Sort();

studentRecords.SetSortStrategy(new MergeSort());
studentRecords.Sort();

// Wait for user
Console.ReadKey();

// QuickSorted list
//  Anna
//  Jimmy
//  Samual
//  Sandra
//  Vivek
// ShellSorted list
//  Anna
//  Jimmy
//  Samual
//  Sandra
//  Vivek
// MergeSorted list
//  Anna
//  Jimmy
//  Samual
//  Sandra
//  Vivek

public  abstract class SortStrategy
{
    public abstract void Sort(List<string> list);
}

public class QuickSort:SortStrategy
{
    public override void Sort(List<string> list)
    {
        list.Sort();//Default is Quicksort
        Console.WriteLine("QuickSorted list ");
    }
}

public class ShellSort : SortStrategy
{
    public override void Sort(List<string> list)
    {
        //list.ShellSort();not-implemented
        Console.WriteLine("ShellSorted list ");
    }
}

public class MergeSort : SortStrategy
{
    public override void Sort(List<string> list)
    {
        //list.MergeSort();not-implemented
        Console.WriteLine("MergeSorted list ");
    }
}

public class SortedList
{
    private List<string> list=new List<string>();
    private SortStrategy _sortStrategy;

    public void SetSortStrategy(SortStrategy sortStrategy)
    {
        _sortStrategy= sortStrategy;
    }

    public void Add(string name)
    {
        list.Add(name);
    }

    public void Sort()
    {
        _sortStrategy.sortSort(list);

        foreach (var name in list)
        {
            Console.WriteLine(" "+name);
        }
    }
}
```

:::
