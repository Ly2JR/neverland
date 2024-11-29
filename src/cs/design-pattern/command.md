---
title: 命令模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

![command](https://nas.ilyl.life:8092/design-pattern/command.png)

参与此模式的类和对象包括：

- Command(`Command`)
  - 声明一个用于执行操作的接口

- ConcreteCommand(`CalculatorCommand`)
  - 定义Receiver对象和动作之间的绑定
  - 通过调用Receiver上的相应操作来实现Execute

- Client(`CommandApp`)
  - 创建一个ConcreteCommand对象并设置它的接收者。

- Invoker(`User`)
  - 要求命令执行请求

- Receiver(`Calculator`)
  - 知道如何执行与执行请求相关的操作。

::: tabs

@tab Structural code

```cs
// 演示了命令模式。
// 该模式将请求存储为允许客户端执行或回放请求的对象。
var receiver = new Receiver();
var command = new ConcreteCommand(receiver);
var invoker = new Invoker();

invoker.SetCommand(command);
invoker.ExecuteCommand();

// Wait for user
Console.ReadKey();

// Called Receiver.Action()

public abstract class Command
{
    protected Receiver Receiver;

    protected Command(Receiver receiver)
    {
        this.Receiver= receiver;
    }

    public abstract  void Execute();
}

public class ConcreteCommand : Command
{
    public ConcreteCommand(Receiver receiver) : base(receiver)
    {
    }

    public override void Execute()
    {
        Receiver.Action();
    }
}

public class Receiver
{
    public void Action()
    {
        Console.WriteLine("Called Receiver.Action()");
    }
}

public class Invoker
{
    private Command _command = null!;

    public void SetCommand(Command command)
    {
        _command=command;
    }

    public void ExecuteCommand()
    {
        _command.Execute();
    }
}
```

@tab Real-World code

```cs
// 演示了在一个简单的计算器中使用的命令模式，它具有无线数量的撤销和重做。
// 请注意，在C#中，"运算符"一词是关键字。用`@`作为前缀允许将其用作标识符。
var user = new User();
user.Compute('+', 100);
user.Compute('-', 50);
user.Compute('*', 10);
user.Compute('/', 2);

user.Undo(4);
user.Redo(3);

// Wait for user
Console.ReadKey();

// Current value=100 (following + 100)
// Current value= 50 (following - 50)
// Current value=500 (following * 10)
// Current value=250 (following / 2)

// --- Undo 4 levels
// Current value=500 (following * 2)
// Current value= 50 (following / 10)
// Current value=100 (following + 50)
// Current value=  0 (following - 100)

// --- Redo 3 levels
// Current value=100 (following + 100)
// Current value= 50 (following - 50)
// Current value=500 (following * 10)

public abstract class Command
{
    public abstract void Execute();

    public abstract void UnExecute();
}

public class CalculatorCommand : Command
{
    private readonly char _operator;
    private readonly int _operand;
    private readonly Calculator _calculator;

    public CalculatorCommand(Calculator calculator, char @operator, int operand)
    {
        _calculator = calculator;
        _operator = @operator;
        _operand = operand;
    }

    public override void Execute()
    {
        _calculator.Operation(_operator, _operand);
    }

    public override void UnExecute()
    {
        _calculator.Operation(Undo(_operator), _operand);
    }

    private char Undo(char @operator)
    {
        switch (@operator)
        {
            case '+': return '-';
            case '-': return '+';
            case '*': return '/';
            case '/': return '*';
            default: throw new ArgumentException("@operator");
        }
    }
}

public class Calculator
{
    private int _current;

    public void Operation(char @operator, int operand)
    {
        switch (@operator)
        {
            case '+': _current += operand; break;
            case '-': _current -= operand; break;
            case '*': _current *= operand; break;
            case '/': _current /= operand; break;
        }
        Console.WriteLine($"Current value={_current,3} (following {@operator} {operand})");
    }
}

public class User
{
    private readonly Calculator _calculator = new();
    private readonly List<Command> _commands = new();
    private int _current;

    public void Redo(int levels)
    {
        Console.WriteLine($"\n--- Redo {levels} levels ");
        for (var i = 0; i < levels; i++)
        {
            if (_current < _commands.Count - 1)
            {
                var command = _commands[_current++];
                command.Execute();
            }
        }
    }

    public void Undo(int levels)
    {
        Console.WriteLine($"\n--- Undo {levels} levels");

        for (int i = 0; i < levels; i++)
        {
            if (_current > 0)
            {
                var command = _commands[--_current];
                command.UnExecute();
            }
        }
    }

    public void Compute(char @operator, int operand)
    {
        var command = new CalculatorCommand(_calculator, @operator, operand);
        command.Execute();

        _commands.Add(command);
        _current++;
    }
}
```

:::
