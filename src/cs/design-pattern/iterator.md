---
title: 迭代器模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

参与此模式的类和对象包括：

- Iterator(`AbstractIterator`)
  - 定义了访问的遍历元素的接口。

- ConcreteIterator(`Iterator`)
  - 实现迭代器接口
  - 在聚合的遍历中跟踪当前位置。

- Aggregate(`AbstractCollection`)
  - 定义了一个用于创建Iterator对象的接口。

- ConcreteAggregate(`Collection`)
  - 实现Iterator创建接口以返回正确的ConcreteIterator的实例。

::: tabs

@tab Structural code

```cs
// 演示了迭代器模式。
// 该模式提供了一种遍历(迭代)项目集合的方法，而无需详细说明集合的底层结构。
var aggregate = new ConcreteAggregate
{
    [0] = "Item A",
    [1] = "Item B",
    [2] = "Item C",
    [3] = "Item D"
};

var iterator = aggregate.CreateIterator();
Console.WriteLine("Iterating over collection:");

object? item = First();
while (item != null)
{
    Console.WriteLine(item);
    item = item.Next();
}

// Wait for user
Console.ReadKey();

// Iterating over collection:
// Item A
// Item B
// Item C
// Item D

public abstract class Aggregate
{
    public abstract Iterator CreateIterator();
}

public class ConcreteAggregate : Aggregate
{
    private readonly List<object> _items = new();

    public override Iterator CreateIterator()
    {
        return new ConcreteIterator(this);
    }

    public int Count => _items.Count;

    public object this[int index]
    {
        get => _items[index];
        set => _items.Insert(index,value);
    }
}

public abstract class Iterator
{
    public abstract object? First();
    public abstract object? Next();

    public abstract bool IsDone();

    public abstract object CurrentItem();
}

public class ConcreteIterator : Iterator
{
    private readonly ConcreteAggregate _aggregate;
    private int _current;

    public ConcreteIterator(ConcreteAggregate aggregate)
    {
        _aggregate=aggregate;
    }

    public override object? First()
    {
        return _aggregate[0];
    }

    public override object? Next()
    {
        object? ret = null;
        if (_current < _aggregate.Count - 1)
        {
            ret=_aggregate[++_current];
        }
        return ret;
    }

    public override bool IsDone()
    {
        return _current >= _aggregate.Count;
    }

    public override object CurrentItem()
    {
        return _aggregate[_current];
    }
}
```

@tab Real-World code

```cs
// 演示了迭代器模式。
// 该模式用于迭代项目集合并在每次迭代时跳过特定数量的项目
var collection = new Collection
{
    [0] = new("Item 0"),
    [1] = new("Item 1"),
    [2] = new("Item 2"),
    [3] = new("Item 3"),
    [4] = new("Item 4"),
    [5] = new("Item 5"),
    [6] = new("Item 6"),
    [7] = new("Item 7"),
    [8] = new("Item 8"),
};

var iterator = collection.CreateIterator();
iterator.Step = 2;

Console.WriteLine("Iterating over collection:");

for (var item = iterator.First(); !iterator.IsDone; item = iterator2.Next())
{
    if (item != null) Console.WriteLine(item.Name);
}

// Wait for user
Console.ReadKey();

// Iterating over collection:
// Item 0
// Item 2
// Item 4
// Item 6
// Item 8

public class Item
{
    public Item(string name)
    {
        Name=name;
    }

    public string Name { get; }
}

public interface IAbstractCollection
{
    Iterator CreateIterator();
}

public class Collection : IAbstractCollection
{
    readonly List<Item> _items=new();

    public Iterator CreateIterator()
    {
        return new Iterator(this);
    }

    public int Count => _items.Count;

    public Item this[int index]
    {
        get => _items[index];
        set => _items.Add(value);
    }
}

public interface IAbstractIterator
{
    Item First();
    Item? Next();
    bool IsDone { get; }

    Item CurrentItem { get; }
}

public class Iterator : IAbstractIterator
{
    private readonly Collection _collection;

    private int _current;
    private int _step = 1;

    public Iterator(Collection collection)
    {
        _collection=collection;
    }

    public Item First()
    {
        _current = 0;
        return _collection[_current];
    }

    public Item? Next()
    {
        _current += _step;
        if (!IsDone) return _collection[_current];
        return null;
    }
    public int Step
    {
        get => _step;
        set=> _step = value;
    }

    public bool IsDone => _current >= _collection.Count;
    public Item CurrentItem => _collection[_current];
}
```

:::
