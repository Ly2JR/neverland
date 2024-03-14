import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c as i,a as u,w as a,e as r,f as s,d as n}from"./app-CjYUTdo8.js";const k={},d=r("<p>参与此模式的类和对象包括：</p><ul><li><p>Abstraction(<code>BusinessObject</code>)</p><ul><li>定义抽象的接口。</li><li>维护对实现器类型对象的引用。</li></ul></li><li><p>RefinedAbstraction(<code>CustomerBusinessObject</code>)</p><ul><li>扩展抽象定义的接口。</li></ul></li><li><p>Implementor(<code>DataObject</code>)</p><ul><li>定义实现类的接口。这个接口不必完全对应于抽象的接口；实际上，这两个接口可能完全不同。通常，实现接口仅提供基元操作，抽象基于这些基元定义更高级别的操作。</li></ul></li><li><p>ConcreteImplementor(<code>CustomerDataObject</code>)</p><ul><li>实现实现器接口并定义其具体实现。</li></ul></li></ul>",2),m=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了将接口于其实现分离(解耦)的桥接模式。"),s(`
`),n("span",{class:"token comment"},"// 实现可以在不改变使用对象抽象的客户端的情况下发展。"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" ab "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"RefinedAbstraction"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    Implementor `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteImplementorA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
ab`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Operation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

ab`),n("span",{class:"token punctuation"},"."),s("Implementor "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteImplementorB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ab`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Operation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// ConcreteImplementorA Operation"),s(`
`),n("span",{class:"token comment"},"// ConcreteImplementorB Operation"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Abstraction"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token class-name"},"Implementor"),s(" implementor "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},"Implementor"),s(` Implementor
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"set"),s(),n("span",{class:"token operator"},"=>"),s(" implementor "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"virtual"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Operation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        implementor`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Operation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Implementor"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Operation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"RefinedAbstraction"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Abstraction")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Operation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        implementor`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Operation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ConcreteImplementorA"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Implementor")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Operation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ConcreteImplementorA Operation"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ConcreteImplementorB"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Implementor")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Operation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ConcreteImplementorB Operation"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了桥接模式，其中BusinessObject抽象于DataObject中的实现分离。"),s(`
`),n("span",{class:"token comment"},"// DataObject实现可以动态发展而无需更改任何客户端。"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" customers "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Customers"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    Data `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"CustomersData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Chicago"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Henry Velasquez"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ShowAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Jim Jones"),s(`
`),n("span",{class:"token comment"},"// Samual Jackson"),s(`
`),n("span",{class:"token comment"},"// Allen Good"),s(`

`),n("span",{class:"token comment"},"// -----------------------------"),s(`
`),n("span",{class:"token comment"},"// Customer City: Chicago"),s(`
`),n("span",{class:"token comment"},"//  Jim Jones"),s(`
`),n("span",{class:"token comment"},"//  Samual Jackson"),s(`
`),n("span",{class:"token comment"},"//  Allen Good"),s(`
`),n("span",{class:"token comment"},"//  Ann Stills"),s(`
`),n("span",{class:"token comment"},"//  Lisa Giolani"),s(`
`),n("span",{class:"token comment"},"//  Henry Velasquez"),s(`
`),n("span",{class:"token comment"},"// -----------------------------"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"CustomerBase"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"DataObject"),s(" _dataObject "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},"DataObject"),s(` Data
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token operator"},"=>"),s(" _dataObject"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"set"),n("span",{class:"token operator"},"=>"),s(" _dataObject "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"virtual"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _dataObject`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NextRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"virtual"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Prior"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _dataObject`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"PriorRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"virtual"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" customer"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _dataObject`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddRecord"),n("span",{class:"token punctuation"},"("),s("customer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"virtual"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Delete"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" customer"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _dataObject`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"DeleteRecord"),n("span",{class:"token punctuation"},"("),s("customer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"virtual"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _dataObject`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ShowRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"virtual"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"ShowAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _dataObject`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ShowAllRecords"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Customers"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"CustomerBase")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"ShowAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"-----------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"base"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ShowAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"-----------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"DataObject"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"NextRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"PriorRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"AddRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"DeleteRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"GetCurrentRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"ShowRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"ShowAllRecords"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"CustomersData"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"DataObject")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},[s("List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},">")]),s(" _customers "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},[s("List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"int")]),s(" _current"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" _city"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"CustomersData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" city"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _city`),n("span",{class:"token operator"},"="),s("city"),n("span",{class:"token punctuation"},";"),s(`
        _customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Jim Jones"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        _customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Samual Jackson"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        _customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Allen Good"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        _customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Ann Stills"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        _customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Lisa Giolani"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"NextRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("_current "),n("span",{class:"token operator"},"<="),s(" _customers"),n("span",{class:"token punctuation"},"."),s("Count "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            _current`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"PriorRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("_current "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            _current`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"AddRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" customer"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),s("customer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"DeleteRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" customer"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _customers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Remove"),n("span",{class:"token punctuation"},"("),s("customer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"GetCurrentRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" _customers"),n("span",{class:"token punctuation"},"["),s("_current"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"ShowRecord"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),s("_customers"),n("span",{class:"token punctuation"},"["),s("_current"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"ShowAllRecords"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"Customer City: '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"_city"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" customer "),n("span",{class:"token keyword"},"in"),s(" _customers"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"customer"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(y,w){const c=l("Tabs");return p(),i("div",null,[d,u(c,{id:"58",data:[{id:"Structural code"},{id:"Real-World code"}]},{title0:a(({value:t,isActive:e})=>[s("Structural code")]),title1:a(({value:t,isActive:e})=>[s("Real-World code")]),tab0:a(({value:t,isActive:e})=>[m]),tab1:a(({value:t,isActive:e})=>[b]),_:1})])}const _=o(k,[["render",v],["__file","bridge.html.vue"]]),h=JSON.parse('{"path":"/cs/design-pattern/bridge.html","title":"桥接模式","lang":"zh-CN","frontmatter":{"title":"桥接模式","date":"2023-06-17T00:00:00.000Z","dir.order":3,"order":3,"editLink":false,"footer":false,"category":["设计模式"],"tag":["设计模式"],"description":"参与此模式的类和对象包括： Abstraction(BusinessObject) 定义抽象的接口。 维护对实现器类型对象的引用。 RefinedAbstraction(CustomerBusinessObject) 扩展抽象定义的接口。 Implementor(DataObject) 定义实现类的接口。这个接口不必完全对应于抽象的接口；实际上，这两个...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/design-pattern/bridge.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"桥接模式"}],["meta",{"property":"og:description","content":"参与此模式的类和对象包括： Abstraction(BusinessObject) 定义抽象的接口。 维护对实现器类型对象的引用。 RefinedAbstraction(CustomerBusinessObject) 扩展抽象定义的接口。 Implementor(DataObject) 定义实现类的接口。这个接口不必完全对应于抽象的接口；实际上，这两个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-21T07:17:50.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2023-06-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-21T07:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"桥接模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-21T07:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1687005402000,"updatedTime":1689923870000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":1.97,"words":591},"filePathRelative":"cs/design-pattern/bridge.md","localizedDate":"2023年6月17日","excerpt":"<p>参与此模式的类和对象包括：</p>\\n<ul>\\n<li>\\n<p>Abstraction(<code>BusinessObject</code>)</p>\\n<ul>\\n<li>定义抽象的接口。</li>\\n<li>维护对实现器类型对象的引用。</li>\\n</ul>\\n</li>\\n<li>\\n<p>RefinedAbstraction(<code>CustomerBusinessObject</code>)</p>\\n<ul>\\n<li>扩展抽象定义的接口。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Implementor(<code>DataObject</code>)</p>\\n<ul>\\n<li>定义实现类的接口。这个接口不必完全对应于抽象的接口；实际上，这两个接口可能完全不同。通常，实现接口仅提供基元操作，抽象基于这些基元定义更高级别的操作。</li>\\n</ul>\\n</li>\\n<li>\\n<p>ConcreteImplementor(<code>CustomerDataObject</code>)</p>\\n<ul>\\n<li>实现实现器接口并定义其具体实现。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{_ as comp,h as data};
