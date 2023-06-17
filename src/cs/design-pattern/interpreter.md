---
title: 解释器模式
date: 2023-06-17
dir.order: 12
order: 12
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 解释器模式
  - 行为模式
---

参与此模式的类和对象包括：

- AbstractExpression(`Expression`)
  - 声明一个用于执行操作的接口

- TerminalExpression(`ThousandExpression`,`HUndredExpression`,`TenExpression`,`OneExpression`)
  - 实现与语法中的终结符合关联的解释操作。
  - 句子中的每个终结符号都需要一个实例。

- NonterminalExpression(`not used`)
  - 语法中的每个规则R::=R1R2...Rn都需要一个这样的类。
  - 为每个符号R1到Rn维护AbstractExpression类型的实例变量。
  - 为语法中的非终结符号实现解释操作。Interpret通常在表示R1到Rn的变量上递归调用自身。

- Context(`Context`)
  - 包含对解释器来说是全局的信息。

- Client(`InterpreterApp`)
  - 构建(或给出)抽象语法树，表示语法定义的语言中的特定句子。抽象语法树由NonterminalExpression和TerminalExpression类的实例组装而成。
  - 调用解释操作。

::: tabs

@tab Structural code

```cs
// 演示了解释器模式，它使用定义的语法提供处理已解析语句的解释器。
var structuralContext = new Context();

var list = new List<AbstractExpression>
{
    new TerminalExpression(),
    new NonterminalExpression(),
    new TerminalExpression(),
    new TerminalExpression()
};

foreach (var expression in list)
{
    expression.Interpret(structuralContext);
}

// Wait for user
Console.ReadKey();

// Called Terminal.Interpret()
// Called nonterminal.Interpret()
// Called Terminal.Interpret()
// Called Terminal.Interpret()

public class Context
{
}

public abstract class AbstractExpression
{
    public abstract void Interpret(Context context);
}

public class TerminalExpression : AbstractExpression
{
    public override void Interpret(Context context)
    {
        Console.WriteLine("Called Terminal.Interpret()");
    }
}

public class NonterminalExpression : AbstractExpression
{
    public override void Interpret(Context context)
    {
        Console.WriteLine("Called Nonterminal.Interpret()");
    }
}
```

@tab Real-World code

```cs
// 演示了用于将罗马数字转为十进制的解释器模式。
var roman = "MCMXXVIII";

var realWorldContext = new Context(roman);

var tree = new List<Expression>()
{
    new ThousandExpression(),
    new HundredExpress(),
    new TenExpress(),
    new OneExpress(),
};

foreach (var exp in tree)
{
    exp.Interpret(realWorldContext);
}

Console.WriteLine($"{roman} = {realWorldContext.Output}");

// Wait for user
Console.ReadKey();

// MCMXXVIII = 1928

public class Context
{
    private int _output;

    public Context(string input)
    {
        Input = input;
    }

    public string Input { get; set; }

    public int Output { get => _output; set => _output = value; }
}

public abstract class Expression
{
    public void Interpret(Context context)
    {
        if (context.Input.Length == 0) return;

        if (context.Input.StartsWith(Nine()))
        {
            context.Output += (9 * Multiplier());
            context.Input = context.Input.Substring(2);
        }
        else if (context.Input.StartsWith(Four()))
        {
            context.Output += (4 * Multiplier());
            context.Input = context.Input.Substring(2);
        }
        else if (context.Input.StartsWith(Five()))
        {
            context.Output += (5 * Multiplier());
            context.Input = context.Input.Substring(1);
        }

        while (context.Input.StartsWith(One()))
        {
            context.Output += (1 * Multiplier());
            context.Input = context.Input.Substring(1);
        }
    }

    public abstract string One();

    public abstract string Four();

    public abstract string Five();

    public abstract string Nine();

    public abstract int Multiplier();
}

public class ThousandExpression : Expression
{
    public override string Five()
    {
        return " ";
    }

    public override string Four()
    {
        return " ";
    }

    public override int Multiplier()
    {
        return 1000;
    }

    public override string Nine()
    {
        return " ";
    }

    public override string One()
    {
        return "M";
    }
}

public class HundredExpress : Expression
{
    public override string Five()
    {
        return "D";
    }
    public override string Four()
    {
        return "CD";
    }

    public override int Multiplier()
    {
        return 100;
    }

    public override string Nine()
    {
        return "CM";
    }

    public override string One()
    {
        return "C";
    }
}

public class TenExpress : Expression
{
    public override string One()
    {
        return "X";
    }

    public override string Four()
    {
        return "XL";
    }

    public override string Five()
    {
        return "L";
    }

    public override string Nine()
    {
        return "XC";
    }

    public override int Multiplier()
    {
        return 10;
    }
}

public class OneExpress : Expression
{
    public override string One()
    {
        return "I";
    }

    public override string Four()
    {
        return "IV";
    }

    public override string Five()
    {
        return "V";
    }

    public override string Nine()
    {
        return "IX";
    }

    public override int Multiplier()
    {
        return 1;
    }
}
```

:::
