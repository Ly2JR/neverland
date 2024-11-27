---
title: 中介者模式
date: 2023-06-17
editLink: false
footer: false
category:
  - 设计模式
tag:
  - 设计模式
---

![mediator](https://nas.ilyl.life:8092/design-pattern/mediator.png)

参与此模式的类和对象包括：

- Mediator(`IChatroom`)
  - 定义了一个与同事对象通信的接口。

- ConcreteMediator(`Chatroom`)
  - 通过协调Colleague对象来实现合作行为.
  - 了解并维护其同事。

- Colleague classes(`Participant`)
  - 每个同事类都知道它的Mediator对象。
  - 每位同事在本应与另一位同事沟通时都与其调解员沟通。

::: tabs

@tab Structural code

```cs
// 演示了促进不同对象和对象类型之间松散耦合通信的中介者模式。
// 中介是一个中心枢纽，所有的互动都必须通过它进行。
var m = new ConcreteMediator();

var c1 = new ConcreteColleague1(m);
var c2 = new ConcreteColleague2(m);

m.Colleague1 = c1;
m.Colleague2 = c2;

c1.Send("How are you?");
c2.Send("Fine,thanks");

// Wait for user
Console.ReadKey();

// Colleague2 gets message:How are you?
// Colleague1 gets message:Fine,thanks

public abstract class Mediator
{
    public abstract void Send(string message, Colleague colleague);
}

public class ConcreteMediator:Mediator
{
    private ConcreteColleague1 _colleague1 = null!;
    private ConcreteColleague2 _colleague2 = null!;

    public ConcreteColleague1 Colleague1
    {
        set => _colleague1 = value;
    }

    public ConcreteColleague2 Colleague2
    {
        set => _colleague2 = value;
    }

    public override void Send(string message, Colleague colleague)
    {
        if (_colleague1 == colleague)
        {
            _colleague2.Notify(message);
        }
        else
        {
            _colleague1.Notify(message);
        }
    }
}

public abstract class Colleague
{
    protected Mediator Mediator;

    protected Colleague(Mediator mediator)
    {
        Mediator=mediator;
    }
}

public class ConcreteColleague1 : Colleague
{
    public ConcreteColleague1(Mediator mediator) : base(mediator)
    {
    }

    public void Send(string message)
    {
        Send(message,this);
    }

    public void Notify(string message)
    {
        Console.WriteLine($"Colleague1 gets message:{message}");
    }
}

public class ConcreteColleague2 : Colleague
{
    public ConcreteColleague2(Mediator mediator) : base(mediator)
    {
    }

    public void Send(string message)
    {
        Send(message,this);
    }

    public void Notify(string message)
    {
        Console.WriteLine($"Colleague2 gets message:{message}");
    }
}
```

@tab Real-World code

```cs
// 演示了中介者模式，促进了在聊天室注册的不同参与者之间的松散耦合通信。
// 聊天室是进行所有交流的中心枢纽。
// 此时聊天室中仅实现了一对一的通信，但更改为一对多将是微不足道的。
var chartRoom = new ChatRoom();

var george = new Beatle("George");
var paul = new Beatle("Paul");
var ringo = new Beatle("Ringo");
var john = new Beatle("John");
var yoko = new NonBeatle("Yoko");

chartRoom.Register(george);
chartRoom.Register(paul);
chartRoom.Register(ringo);
chartRoom.Register(john);
chartRoom.Register(yoko);

yoko.Send("John","Hi John!");
paul.Send("Ringo","All you need is love");
ringo.Send("George","My sweet Lord");
paul.Send("John","Can't buy me love");
john.Send("Yoko","My sweet love");

// Wait for user
Console.ReadKey();

// To a Beatle: Yoko to John:'Hi John!'
// To a Beatle: Paul to Ringo:'All you need is love'
// To a Beatle: Ringo to George:'My sweet Lord'
// To a Beatle: Paul to John:'Can't buy me love'
// To a non-Beatle: John to Yoko:'My sweet love'

public abstract class AbstractChatRoom
{
    public abstract void Register(Participant participant);

    public abstract void Send(string from, string to, string message);
}

public class ChatRoom : AbstractChatRoom
{
    private readonly Dictionary<string,Participant> _participants = new();

    public override void Register(Participant participant)
    {
        if (!_participants.ContainsValue(participant))
        {
            _participants[participant.Name] = participant;
        }

        participant.ChatRoom = this;
    }

    public override void Send(string from, string to, string message)
    {
        var participant = _participants[to];
        if (participant != null)
        {
            participant.Receive(from, message);
        }
    }
}

public class Participant
{
    private ChatRoom _chatRoom = null!;
    private readonly string _name;

    public Participant(string name)
    {
        _name=name;
    }

    public string Name => _name;

    public ChatRoom ChatRoom
    {
        get => _chatRoom;
        set => _chatRoom = value;
    }

    public void Send(string to, string message)
    {
        _chatRoom.Send(_name,to,message);
    }


    public virtual void Receive(string from, string message)
    {
        Console.WriteLine($"{from} to {Name}:'{message}'");
    }
}

public class Beatle : Participant
{
    public Beatle(string name) : base(name)
    {
    }

    public override void Receive(string from, string message)
    {
        Console.Write("To a Beatle: ");

        base.Receive(from, message);
    }
}

public class NonBeatle : Participant
{
    public NonBeatle(string name) : base(name)
    {
    }

    public override void Receive(string from, string message)
    {
        Console.Write("To a non-Beatle: ");
        base.Receive(from, message);
    }
}
```

:::
