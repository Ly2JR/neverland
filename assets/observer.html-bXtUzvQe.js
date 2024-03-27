import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as i,c as p,a as u,w as a,e as r,f as s,d as n}from"./app-AjPgfRi4.js";const k={},d=r("<p>参与此模式的类和对象包括：</p><ul><li><p>Subject(<code>Stock</code>)</p><ul><li>知道它的观察者。任意数量的Observer对象都可以观察一个主题。</li><li>提供了附加和分离观察者对象的接口。</li></ul></li><li><p>ConcreteSubject(<code>IBM</code>)</p><ul><li>将感兴趣的状态存储到ConcreteObserver。</li><li>当状态改变时向观察者发送通知。</li></ul></li><li><p>Observer(<code>IInvestor</code>)</p><ul><li>为应该通知主题更改的对象定义更新接口。</li></ul></li><li><p>ConcreteObserver(<code>Investor</code>)</p><ul><li>维护对ConcreteSubject对象的引用。</li><li>商店状态应该与主题保存一致。</li><li>实现观察者更新接口，使其状态与主体的状态保存一致。</li></ul></li></ul>",2),m=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了观察者模式。"),s(`
`),n("span",{class:"token comment"},"// 在该模式中，已注册对象被通知并随着状态更改而更新。"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteSubject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Attach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteObserver"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"x"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Attach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteObserver"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"y"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Attach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteObserver"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"z"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

s`),n("span",{class:"token punctuation"},"."),s("SubjectState "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"ABC"'),n("span",{class:"token punctuation"},";"),s(`
s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Notify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Observer x's new state is ABC"),s(`
`),n("span",{class:"token comment"},"// Observer y's new state is ABC"),s(`
`),n("span",{class:"token comment"},"// Observer z's new state is ABC"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Subject"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},[s("List"),n("span",{class:"token punctuation"},"<"),s("Observer"),n("span",{class:"token punctuation"},">")]),s(" _observers "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Attach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Observer"),s(" observer"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _observers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),s("observer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Detach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Observer"),s(" observer"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _observers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Remove"),n("span",{class:"token punctuation"},"("),s("observer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Notify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" o "),n("span",{class:"token keyword"},"in"),s(" _observers"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            o`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ConcreteSubject"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Subject")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},"?")]),s(" SubjectState "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Observer"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ConcreteObserver"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Observer")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" _name"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},"?")]),s(" _observerState"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"ConcreteSubject"),s(" _subject"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"ConcreteObserver"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ConcreteSubject"),s(" subject"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" name"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _subject `),n("span",{class:"token operator"},"="),s(" subject"),n("span",{class:"token punctuation"},";"),s(`
        _name `),n("span",{class:"token operator"},"="),s(" name"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _observerState `),n("span",{class:"token operator"},"="),s(" _subject"),n("span",{class:"token punctuation"},"."),s("SubjectState"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"Observer '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"_name"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},"'s new state is "),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"_observerState"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},"ConcreteSubject"),s(` Subject
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token operator"},"=>"),s(" _subject"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"set"),s(),n("span",{class:"token operator"},"=>"),s(" _subject "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了观察者模式。"),s(`
`),n("span",{class:"token comment"},"// 在该模式中，每次股票价值发生变化时都回通知注册投资者。"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" ibm "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"IBM"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"IBM"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"120.00"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ibm`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Attach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Investor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Sorros"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ibm`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Attach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Investor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Berkshire"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

ibm`),n("span",{class:"token punctuation"},"."),s("Price "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"120.10"),n("span",{class:"token punctuation"},";"),s(`
ibm`),n("span",{class:"token punctuation"},"."),s("Price "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"121.00"),n("span",{class:"token punctuation"},";"),s(`
ibm`),n("span",{class:"token punctuation"},"."),s("Price "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"120.50"),n("span",{class:"token punctuation"},";"),s(`
ibm`),n("span",{class:"token punctuation"},"."),s("Price "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"120.75"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Notified Sorros of IBM's change  to ￥120.10"),s(`
`),n("span",{class:"token comment"},"// Notified Berkshire of IBM's change  to ￥120.10"),s(`

`),n("span",{class:"token comment"},"// Notified Sorros of IBM's change  to ￥121.00"),s(`
`),n("span",{class:"token comment"},"// Notified Berkshire of IBM's change  to ￥121.00"),s(`

`),n("span",{class:"token comment"},"// Notified Sorros of IBM's change  to ￥120.50"),s(`
`),n("span",{class:"token comment"},"// Notified Berkshire of IBM's change  to ￥120.50"),s(`

`),n("span",{class:"token comment"},"// Notified Sorros of IBM's change  to ￥120.75"),s(`
`),n("span",{class:"token comment"},"// Notified Berkshire of IBM's change  to ￥120.75"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Stock"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" _price"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},[s("List"),n("span",{class:"token punctuation"},"<"),s("IInvestor"),n("span",{class:"token punctuation"},">")]),s(" _investors "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},[s("List"),n("span",{class:"token punctuation"},"<"),s("IInvestor"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token function"},"Stock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" symbol"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" price"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Symbol `),n("span",{class:"token operator"},"="),s(" symbol"),n("span",{class:"token punctuation"},";"),s(`
        _price `),n("span",{class:"token operator"},"="),s(" price"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Attach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IInvestor"),s(" investor"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _investors`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),s("investor"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Detach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IInvestor"),s(" investor"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _investors`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Remove"),n("span",{class:"token punctuation"},"("),s("investor"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Notify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" investor "),n("span",{class:"token keyword"},"in"),s(" _investors"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            investor`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"double")]),s(` Price
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token operator"},"=>"),s(" _price"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"set"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("_price "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                _price `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token function"},"Notify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(" Symbol "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"IBM"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Stock")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"IBM"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" symbol"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" price"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"base"),n("span",{class:"token punctuation"},"("),s("symbol"),n("span",{class:"token punctuation"},","),s(" price"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"IInvestor"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Stock"),s(" stock"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Investor"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"IInvestor")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" _name"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"Investor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" name"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _name `),n("span",{class:"token operator"},"="),s(" name"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Stock"),s(" stock"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"Notified '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"_name "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"}," of "),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("stock"),n("span",{class:"token punctuation"},"."),s("Symbol")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},"'s change  to "),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("stock"),n("span",{class:"token punctuation"},"."),s("Price")]),n("span",{class:"token format-string"},[n("span",{class:"token punctuation"},":"),s("C")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},"Stock"),s(" Stock "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(y,w){const c=l("Tabs");return i(),p("div",null,[d,u(c,{id:"73",data:[{id:"Structural code"},{id:"Real-World code"}]},{title0:a(({value:e,isActive:t})=>[s("Structural code")]),title1:a(({value:e,isActive:t})=>[s("Real-World code")]),tab0:a(({value:e,isActive:t})=>[m]),tab1:a(({value:e,isActive:t})=>[b]),_:1})])}const h=o(k,[["render",v],["__file","observer.html.vue"]]),_=JSON.parse('{"path":"/cs/design-pattern/observer.html","title":"观察者模式","lang":"zh-CN","frontmatter":{"title":"观察者模式","date":"2023-06-17T00:00:00.000Z","dir.order":16,"order":16,"editLink":false,"footer":false,"category":["设计模式"],"tag":["设计模式"],"description":"参与此模式的类和对象包括： Subject(Stock) 知道它的观察者。任意数量的Observer对象都可以观察一个主题。 提供了附加和分离观察者对象的接口。 ConcreteSubject(IBM) 将感兴趣的状态存储到ConcreteObserver。 当状态改变时向观察者发送通知。 Observer(IInvestor) 为应该通知主题更改的对...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/design-pattern/observer.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"观察者模式"}],["meta",{"property":"og:description","content":"参与此模式的类和对象包括： Subject(Stock) 知道它的观察者。任意数量的Observer对象都可以观察一个主题。 提供了附加和分离观察者对象的接口。 ConcreteSubject(IBM) 将感兴趣的状态存储到ConcreteObserver。 当状态改变时向观察者发送通知。 Observer(IInvestor) 为应该通知主题更改的对..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-21T07:17:50.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2023-06-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-21T07:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"观察者模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-21T07:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1687005402000,"updatedTime":1689923870000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":2.07,"words":620},"filePathRelative":"cs/design-pattern/observer.md","localizedDate":"2023年6月17日","excerpt":"<p>参与此模式的类和对象包括：</p>\\n<ul>\\n<li>\\n<p>Subject(<code>Stock</code>)</p>\\n<ul>\\n<li>知道它的观察者。任意数量的Observer对象都可以观察一个主题。</li>\\n<li>提供了附加和分离观察者对象的接口。</li>\\n</ul>\\n</li>\\n<li>\\n<p>ConcreteSubject(<code>IBM</code>)</p>\\n<ul>\\n<li>将感兴趣的状态存储到ConcreteObserver。</li>\\n<li>当状态改变时向观察者发送通知。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Observer(<code>IInvestor</code>)</p>\\n<ul>\\n<li>为应该通知主题更改的对象定义更新接口。</li>\\n</ul>\\n</li>\\n<li>\\n<p>ConcreteObserver(<code>Investor</code>)</p>\\n<ul>\\n<li>维护对ConcreteSubject对象的引用。</li>\\n<li>商店状态应该与主题保存一致。</li>\\n<li>实现观察者更新接口，使其状态与主体的状态保存一致。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{h as comp,_ as data};