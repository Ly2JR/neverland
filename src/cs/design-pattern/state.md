---
title: 状态模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

参与此模式的类和对象包括：

- Context(Account)
  - 定义客户感兴趣的接口
  - 维护定义当前状态的ConcreteState子类的实例。

- State(State)
  - 定义了一个接口，用于封装与上下文的特定状态相关的行为。

- Concrete State(RedState,SilverState,GoldState)
  - 每个子类实现与上下文状态相关联的行为。

::: tabs

@tab Structural code

```cs
// 演示了状态模式。
var context = new Context(new ConcreteStateA());

context.Request();
context.Request();
context.Request();
context.Request();
context.Request();

// Wait for user
Console.ReadKey();

// State:ConcreteStateB
// State:ConcreteStateA
// State:ConcreteStateB
// State:ConcreteStateA
// State:ConcreteStateB

public abstract class State
{
    public abstract void Handle(Context context);
}

public class ConcreteStateA:State
{
    public override void Handle(Context context)
    {
        context.State = new ConcreteStateB();
    }
}

public class ConcreteStateB : State
{
    public override void Handle(Context context)
    {
        context.State = new ConcreteStateA();
    }
}

public class Context
{
    private State _state;

    public Context(State state)
    {
        _state= state;
    }

    public State State
    {
        get => _state;
        set
        {
            _state = value;
            Console.WriteLine($"State:{_state.GetType().Name}");
        }
    }

    public void Request()
    {
        _state.Handle(this);
    }
}
```

@tab Real-World code

```cs
// 该模式允许账户根据其余额表现出不同的行为。
// 行为上的差异被委托给称为RedState、SilverState和GoldSate的State对象。
// 这些状态代码透支账户、初始账户和信誉良好的账户。
var account = new Account("Jim Johnson");

account.Deposit(500.0);
account.Deposit(300.0);
account.Deposit(550.0);
account.PayInterest();
account.Withdraw(2000.00);
account.Withdraw(1100.00);

// Wait for user
Console.ReadKey();

// Deposited ￥500.00 ---
//  Balance = ￥500.00
//  Status = SilverState

// Deposited ￥300.00 ---
//  Balance = ￥800.00
//  Status = SilverState

// Deposited ￥550.00 ---
//  Balance = ￥1,350.00
//  Status = GoldState

// Interest Paid ---
//  Balance = ￥1,417.50
//  Status = GoldState

// Withdraw ￥2,000.00 ---
//  Balance = ￥-582.50
//  Status = RedState

// No founds available for withdrawal!
// Withdraw ￥1,100.00 ---
//  Balance = ￥-582.50
//  Status = RedState

public abstract class State
{
    protected Account account;
    protected double balance;
    protected double Interest;
    protected double LowerLimit;
    protected double UpperLimit;

    public Account Account
    {
        get => account;
        set => account = value;
    }

    public double Balance
    {
        get => balance;
        set => balance = value;
    }

    public abstract void Deposit(double amount);
    public abstract void Withdraw(double amount);
    public abstract void PayInterest();
}

public class RedState : State
{
    private double _serviceFee;

    public RedState(State state)
    {
        balance=state.Balance;
        account = state.Account;
        Initialize();
    }

    private void Initialize()
    {
        Interest = 0.0;
        LowerLimit = -100.0;
        UpperLimit = 0.0;
        _serviceFee = 15.00;
    }

    public override void Deposit(double amount)
    {
        balance+=amount;
        StateChangeCheck();
    }

    public override void Withdraw(double amount)
    {
        amount = amount - _serviceFee;
        Console.WriteLine("No founds available for withdrawal!");
    }

    public override void PayInterest()
    {
        
    }

    private void StateChangeCheck()
    {
        if (balance > UpperLimit)
        {
            account.State = new SilverState(this);
        }
    }
}

public class SilverState : State
{
    public SilverState(State state) : this(state.Balance, state.Account)
    {

    }

    public SilverState(double balance, Account account)
    {
        this.balance = balance;
        this.account=account;
        Initialize();
    }

    private void Initialize()
    {
        Interest = 0.0;
        LowerLimit = 0.0;
        UpperLimit = 1000.0;
    }

    public override void Deposit(double amount)
    {
        balance += amount;
        StateChangeCheck();
    }

    public override void Withdraw(double amount)
    {
        balance -= amount;
        StateChangeCheck();
    }

    public override void PayInterest()
    {
        balance += Interest * balance;
        StateChangeCheck();
    }

    private void StateChangeCheck()
    {
        if (balance < LowerLimit)
        {
            account.State = new RedState(this);
        }
        else if (balance > UpperLimit)
        {
            account.State = new GoldState(this);
        }
    }
}

public class GoldState : State
{
    public GoldState(State state) : this(state.Balance, state.Account)
    {

    }

    public GoldState(double balance, Account account)
    {
        this.balance=balance;
        this.account = account;
        Initialize();
    }

    private void Initialize()
    {
        Interest = 0.05;
        LowerLimit = 1000.0;
        UpperLimit = 10000000.0;
    }

    public override void Deposit(double amount)
    {
        balance+=amount;
        StateChangeCheck();
    }

    public override void Withdraw(double amount)
    {
        balance -= amount;
        StateChangeCheck();
    }

    public override void PayInterest()
    {
        balance+=Interest * balance;
        StateChangeCheck();
    }

    private void StateChangeCheck()
    {
        if (balance < 0.0)
        {
            account.State = new RedState(this);
        }
        else if (balance < LowerLimit)
        {
            account.State = new SilverState(this);
        }
    }
}

public class Account
{
    private string _owner;

    public Account(string owner)
    {
        _owner=owner;
        State = new SilverState(0.0, this);
    }

    public double Balance => State.Balance;

    public State State { get; set; }

    public void Deposit(double amount)
    {
        State.Deposit(amount);
        Console.WriteLine($"Deposited {amount:C} --- ");
        Console.WriteLine($" Balance = {this.Balance:C}");
        Console.WriteLine($" Status = {this.State.GetType().Name}");
        Console.WriteLine("");
    }

    public void Withdraw(double amount)
    {
        State.Withdraw(amount);
        Console.WriteLine($"Withdraw {amount:C} --- ");
        Console.WriteLine($" Balance = {this.Balance:C}");
        Console.WriteLine($" Status = {this.State.GetType().Name}\n");
        Console.WriteLine("");
    }

    public void PayInterest()
    {
        State.PayInterest();
        Console.WriteLine("Interest Paid --- ");
        Console.WriteLine($" Balance = {this.Balance:C}");
        Console.WriteLine($" Status = {this.State.GetType().Name}\n");
        Console.WriteLine("");
    }
}
```

:::
