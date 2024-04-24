import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c as i,a as u,w as a,e as k,f as s,d as n}from"./app-NXe2WAM8.js";const r={},d=k("<p>参与此模式的类和对象包括：</p><ul><li><p>Context(Account)</p><ul><li>定义客户感兴趣的接口</li><li>维护定义当前状态的ConcreteState子类的实例。</li></ul></li><li><p>State(State)</p><ul><li>定义了一个接口，用于封装与上下文的特定状态相关的行为。</li></ul></li><li><p>Concrete State(RedState,SilverState,GoldState)</p><ul><li>每个子类实现与上下文状态相关联的行为。</li></ul></li></ul>",2),m=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了状态模式。"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" context "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Context"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteStateA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

context`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
context`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
context`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
context`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
context`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// State:ConcreteStateB"),s(`
`),n("span",{class:"token comment"},"// State:ConcreteStateA"),s(`
`),n("span",{class:"token comment"},"// State:ConcreteStateB"),s(`
`),n("span",{class:"token comment"},"// State:ConcreteStateA"),s(`
`),n("span",{class:"token comment"},"// State:ConcreteStateB"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"State"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Handle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Context"),s(" context"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ConcreteStateA"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"State")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Handle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Context"),s(" context"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        context`),n("span",{class:"token punctuation"},"."),s("State "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteStateB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ConcreteStateB"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"State")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Handle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Context"),s(" context"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        context`),n("span",{class:"token punctuation"},"."),s("State "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteStateA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Context"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"State"),s(" _state"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"Context"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"State"),s(" state"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _state`),n("span",{class:"token operator"},"="),s(" state"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},"State"),s(` State
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token operator"},"=>"),s(" _state"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"set"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            _state `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},";"),s(`
            Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"State:'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("_state"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Name")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _state`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Handle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 该模式允许账户根据其余额表现出不同的行为。"),s(`
`),n("span",{class:"token comment"},"// 行为上的差异被委托给称为RedState、SilverState和GoldSate的State对象。"),s(`
`),n("span",{class:"token comment"},"// 这些状态代码透支账户、初始账户和信誉良好的账户。"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" account "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Account"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Jim Johnson"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

account`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Deposit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"500.0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
account`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Deposit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"300.0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
account`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Deposit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"550.0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
account`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"PayInterest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
account`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Withdraw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2000.00"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
account`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Withdraw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1100.00"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Deposited ￥500.00 ---"),s(`
`),n("span",{class:"token comment"},"//  Balance = ￥500.00"),s(`
`),n("span",{class:"token comment"},"//  Status = SilverState"),s(`

`),n("span",{class:"token comment"},"// Deposited ￥300.00 ---"),s(`
`),n("span",{class:"token comment"},"//  Balance = ￥800.00"),s(`
`),n("span",{class:"token comment"},"//  Status = SilverState"),s(`

`),n("span",{class:"token comment"},"// Deposited ￥550.00 ---"),s(`
`),n("span",{class:"token comment"},"//  Balance = ￥1,350.00"),s(`
`),n("span",{class:"token comment"},"//  Status = GoldState"),s(`

`),n("span",{class:"token comment"},"// Interest Paid ---"),s(`
`),n("span",{class:"token comment"},"//  Balance = ￥1,417.50"),s(`
`),n("span",{class:"token comment"},"//  Status = GoldState"),s(`

`),n("span",{class:"token comment"},"// Withdraw ￥2,000.00 ---"),s(`
`),n("span",{class:"token comment"},"//  Balance = ￥-582.50"),s(`
`),n("span",{class:"token comment"},"//  Status = RedState"),s(`

`),n("span",{class:"token comment"},"// No founds available for withdrawal!"),s(`
`),n("span",{class:"token comment"},"// Withdraw ￥1,100.00 ---"),s(`
`),n("span",{class:"token comment"},"//  Balance = ￥-582.50"),s(`
`),n("span",{class:"token comment"},"//  Status = RedState"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"State"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token class-name"},"Account"),s(" account"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" balance"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" Interest"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" LowerLimit"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" UpperLimit"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},"Account"),s(` Account
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token operator"},"=>"),s(" account"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"set"),s(),n("span",{class:"token operator"},"=>"),s(" account "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"double")]),s(` Balance
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token operator"},"=>"),s(" balance"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"set"),s(),n("span",{class:"token operator"},"=>"),s(" balance "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Deposit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" amount"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Withdraw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" amount"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"PayInterest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"RedState"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"State")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" _serviceFee"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"RedState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"State"),s(" state"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        balance`),n("span",{class:"token operator"},"="),s("state"),n("span",{class:"token punctuation"},"."),s("Balance"),n("span",{class:"token punctuation"},";"),s(`
        account `),n("span",{class:"token operator"},"="),s(" state"),n("span",{class:"token punctuation"},"."),s("Account"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"Initialize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Initialize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Interest `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},";"),s(`
        LowerLimit `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"100.0"),n("span",{class:"token punctuation"},";"),s(`
        UpperLimit `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},";"),s(`
        _serviceFee `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"15.00"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Deposit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" amount"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        balance`),n("span",{class:"token operator"},"+="),s("amount"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"StateChangeCheck"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Withdraw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" amount"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        amount `),n("span",{class:"token operator"},"="),s(" amount "),n("span",{class:"token operator"},"-"),s(" _serviceFee"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"No founds available for withdrawal!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"PayInterest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"StateChangeCheck"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("balance "),n("span",{class:"token operator"},">"),s(" UpperLimit"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            account`),n("span",{class:"token punctuation"},"."),s("State "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"SilverState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SilverState"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"State")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"SilverState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"State"),s(" state"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"("),s("state"),n("span",{class:"token punctuation"},"."),s("Balance"),n("span",{class:"token punctuation"},","),s(" state"),n("span",{class:"token punctuation"},"."),s("Account"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"SilverState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" balance"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Account"),s(" account"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("balance "),n("span",{class:"token operator"},"="),s(" balance"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("account"),n("span",{class:"token operator"},"="),s("account"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"Initialize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Initialize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Interest `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},";"),s(`
        LowerLimit `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},";"),s(`
        UpperLimit `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1000.0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Deposit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" amount"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        balance `),n("span",{class:"token operator"},"+="),s(" amount"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"StateChangeCheck"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Withdraw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" amount"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        balance `),n("span",{class:"token operator"},"-="),s(" amount"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"StateChangeCheck"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"PayInterest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        balance `),n("span",{class:"token operator"},"+="),s(" Interest "),n("span",{class:"token operator"},"*"),s(" balance"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"StateChangeCheck"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"StateChangeCheck"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("balance "),n("span",{class:"token operator"},"<"),s(" LowerLimit"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            account`),n("span",{class:"token punctuation"},"."),s("State "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"RedState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("balance "),n("span",{class:"token operator"},">"),s(" UpperLimit"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            account`),n("span",{class:"token punctuation"},"."),s("State "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"GoldState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"GoldState"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"State")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"GoldState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"State"),s(" state"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"("),s("state"),n("span",{class:"token punctuation"},"."),s("Balance"),n("span",{class:"token punctuation"},","),s(" state"),n("span",{class:"token punctuation"},"."),s("Account"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"GoldState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" balance"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Account"),s(" account"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("balance"),n("span",{class:"token operator"},"="),s("balance"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("account "),n("span",{class:"token operator"},"="),s(" account"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"Initialize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Initialize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Interest `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0.05"),n("span",{class:"token punctuation"},";"),s(`
        LowerLimit `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1000.0"),n("span",{class:"token punctuation"},";"),s(`
        UpperLimit `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10000000.0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Deposit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" amount"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        balance`),n("span",{class:"token operator"},"+="),s("amount"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"StateChangeCheck"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Withdraw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" amount"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        balance `),n("span",{class:"token operator"},"-="),s(" amount"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"StateChangeCheck"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"PayInterest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        balance`),n("span",{class:"token operator"},"+="),s("Interest "),n("span",{class:"token operator"},"*"),s(" balance"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"StateChangeCheck"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"StateChangeCheck"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("balance "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            account`),n("span",{class:"token punctuation"},"."),s("State "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"RedState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("balance "),n("span",{class:"token operator"},"<"),s(" LowerLimit"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            account`),n("span",{class:"token punctuation"},"."),s("State "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"SilverState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Account"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" _owner"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"Account"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" owner"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _owner`),n("span",{class:"token operator"},"="),s("owner"),n("span",{class:"token punctuation"},";"),s(`
        State `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"SilverState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"double")]),s(" Balance "),n("span",{class:"token operator"},"=>"),s(" State"),n("span",{class:"token punctuation"},"."),s("Balance"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},"State"),s(" State "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Deposit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" amount"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        State`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Deposit"),n("span",{class:"token punctuation"},"("),s("amount"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"Deposited '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"amount"),n("span",{class:"token format-string"},[n("span",{class:"token punctuation"},":"),s("C")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},' --- "')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" Balance = '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("Balance")]),n("span",{class:"token format-string"},[n("span",{class:"token punctuation"},":"),s("C")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" Status = '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("State"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Name")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Withdraw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" amount"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        State`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Withdraw"),n("span",{class:"token punctuation"},"("),s("amount"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"Withdraw '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"amount"),n("span",{class:"token format-string"},[n("span",{class:"token punctuation"},":"),s("C")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},' --- "')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" Balance = '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("Balance")]),n("span",{class:"token format-string"},[n("span",{class:"token punctuation"},":"),s("C")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" Status = '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("State"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Name")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'\\n"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"PayInterest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        State`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"PayInterest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Interest Paid --- "'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" Balance = '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("Balance")]),n("span",{class:"token format-string"},[n("span",{class:"token punctuation"},":"),s("C")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" Status = '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("State"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Name")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'\\n"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(y,w){const c=l("Tabs");return p(),i("div",null,[d,u(c,{id:"46",data:[{id:"Structural code"},{id:"Real-World code"}]},{title0:a(({value:t,isActive:e})=>[s("Structural code")]),title1:a(({value:t,isActive:e})=>[s("Real-World code")]),tab0:a(({value:t,isActive:e})=>[m]),tab1:a(({value:t,isActive:e})=>[b]),_:1})])}const g=o(r,[["render",v],["__file","state.html.vue"]]),h=JSON.parse('{"path":"/cs/design-pattern/state.html","title":"状态模式","lang":"zh-CN","frontmatter":{"title":"状态模式","date":"2023-06-17T00:00:00.000Z","dir.order":20,"order":20,"editLink":false,"footer":false,"category":["设计模式"],"tag":["设计模式"],"description":"参与此模式的类和对象包括： Context(Account) 定义客户感兴趣的接口 维护定义当前状态的ConcreteState子类的实例。 State(State) 定义了一个接口，用于封装与上下文的特定状态相关的行为。 Concrete State(RedState,SilverState,GoldState) 每个子类实现与上下文状态相关联的行为。","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/design-pattern/state.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"状态模式"}],["meta",{"property":"og:description","content":"参与此模式的类和对象包括： Context(Account) 定义客户感兴趣的接口 维护定义当前状态的ConcreteState子类的实例。 State(State) 定义了一个接口，用于封装与上下文的特定状态相关的行为。 Concrete State(RedState,SilverState,GoldState) 每个子类实现与上下文状态相关联的行为。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-21T07:17:50.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2023-06-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-21T07:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"状态模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-21T07:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1687005402000,"updatedTime":1689923870000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":2.44,"words":731},"filePathRelative":"cs/design-pattern/state.md","localizedDate":"2023年6月17日","excerpt":"<p>参与此模式的类和对象包括：</p>\\n<ul>\\n<li>\\n<p>Context(Account)</p>\\n<ul>\\n<li>定义客户感兴趣的接口</li>\\n<li>维护定义当前状态的ConcreteState子类的实例。</li>\\n</ul>\\n</li>\\n<li>\\n<p>State(State)</p>\\n<ul>\\n<li>定义了一个接口，用于封装与上下文的特定状态相关的行为。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Concrete State(RedState,SilverState,GoldState)</p>\\n<ul>\\n<li>每个子类实现与上下文状态相关联的行为。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{g as comp,h as data};