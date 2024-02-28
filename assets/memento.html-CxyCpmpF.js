import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as i,c as p,a as u,w as a,e as r,f as s,d as n}from"./app-BqPwg2aw.js";const k={},m=r("<p>参与此模式的类和对象包括：</p><ul><li><p>Memento(<code>Memento</code>)</p><ul><li>存储Originator对象的内部状态。Memento可以根据其发起者的判断，尽可能多地或尽可能少地存储发起者的内部状态。</li><li>防止发起者以外的对象访问。Mementos实际上有两个接口。Caretaker看到了Memento的狭窄接口---它只能将Memento传递给其他对象。相比之下，originator看到了一个广泛的界面，它可以访问所有必要的数据以将自己恢复到之前的状态。理想情况下，只有产生备忘录的始发者才被允许访问备忘录的内部状态。</li></ul></li><li><p>Originator(<code>SalesProspect</code>)</p><ul><li>创建一个包含其当前内部状态快照的Memento。</li><li>使用Memento恢复其内部状态。</li></ul></li><li><p>Caretaker(<code>Caretaker</code>)</p><ul><li>负责Memento的保管。</li><li>从不操作或检测Memento的内容。</li></ul></li></ul>",2),d=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了临时保存和恢复另一个对象的内部状态的备忘录模式"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" o "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Originator"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    State `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"On"'),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" c "),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Caretaker"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    Memento `),n("span",{class:"token operator"},"="),s(" o"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CreateMemento"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

o`),n("span",{class:"token punctuation"},"."),s("State "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Off"'),n("span",{class:"token punctuation"},";"),s(`
o`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetMemento"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},"."),s("Memento"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// State = On"),s(`
`),n("span",{class:"token comment"},"// State = Off"),s(`
`),n("span",{class:"token comment"},"// Restoring state..."),s(`
`),n("span",{class:"token comment"},"// State = On"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Originator"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" _state"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(` State
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token operator"},"=>"),s(" _state"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"set"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            _state `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},";"),s(`
            Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"State = '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"_state"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},"Memento"),s(),n("span",{class:"token function"},"CreateMemento"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Memento"),n("span",{class:"token punctuation"},"("),s("_state"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"SetMemento"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Memento"),s(" memento"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Restoring state..."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        State`),n("span",{class:"token operator"},"="),s("memento"),n("span",{class:"token punctuation"},"."),s("State"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Memento"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"Memento"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},"?")]),s(" state"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        State`),n("span",{class:"token operator"},"="),s("state"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},"?")]),s(" State "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Caretaker"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},"Memento"),s(" Memento "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了临时保存然后恢复SalesProspect的内部状态的Memento模式"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"SaleProspect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    Name `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Noel van Halen"'),n("span",{class:"token punctuation"},","),s(`
    Phone `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"(412) 256-0990"'),n("span",{class:"token punctuation"},","),s(`
    Budget `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"25000.0"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" m "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ProspectMemory"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    Memento `),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SaveMemento"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

s`),n("span",{class:"token punctuation"},"."),s("Name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Leo Welch"'),n("span",{class:"token punctuation"},";"),s(`
s`),n("span",{class:"token punctuation"},"."),s("Phone "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"(310) 209-7111"'),n("span",{class:"token punctuation"},";"),s(`
s`),n("span",{class:"token punctuation"},"."),s("Budget "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1000000.0"),n("span",{class:"token punctuation"},";"),s(`

s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"RestoreMemento"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},"."),s("Memento"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Name: Noel van Halen"),s(`
`),n("span",{class:"token comment"},"// Phone: (412) 256-0990"),s(`
`),n("span",{class:"token comment"},"// Budget: 25000"),s(`

`),n("span",{class:"token comment"},"// Saving state --"),s(`

`),n("span",{class:"token comment"},"// Name: Leo Welch"),s(`
`),n("span",{class:"token comment"},"// Phone: (310) 209-7111"),s(`
`),n("span",{class:"token comment"},"// Budget: 1000000"),s(`

`),n("span",{class:"token comment"},"// Restoring state --"),s(`

`),n("span",{class:"token comment"},"// Name: Noel van Halen"),s(`
`),n("span",{class:"token comment"},"// Phone: (412) 256-0990"),s(`
`),n("span",{class:"token comment"},"// Budget: 25000"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SaleProspect"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" _name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" _phone "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" _budget"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(` Name
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token operator"},"=>"),s(" _name"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"set"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            _name `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},";"),s(`
            Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"Name: '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"_name"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(` Phone
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token operator"},"=>"),s(" _phone"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"set"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            _phone `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},";"),s(`
            Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"Phone: '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"_phone"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"double")]),s(` Budget
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token operator"},"=>"),s(" _budget"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"set"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            _budget `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},";"),s(`
            Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"Budget: '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"_budget"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},"Memento"),s(),n("span",{class:"token function"},"SaveMemento"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\\nSaving state -- \\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Memento"),n("span",{class:"token punctuation"},"("),s("_name"),n("span",{class:"token punctuation"},","),s(" _phone"),n("span",{class:"token punctuation"},","),s(" _budget"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"RestoreMemento"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Memento"),s(" memento"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\\nRestoring state --\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Name`),n("span",{class:"token operator"},"="),s("memento"),n("span",{class:"token punctuation"},"."),s("Name"),n("span",{class:"token punctuation"},";"),s(`
        Phone`),n("span",{class:"token operator"},"="),s("memento"),n("span",{class:"token punctuation"},"."),s("Phone"),n("span",{class:"token punctuation"},";"),s(`
        Budget`),n("span",{class:"token operator"},"="),s("memento"),n("span",{class:"token punctuation"},"."),s("Budget"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Memento"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(" Name "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(" Phone "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"double")]),s(" Budget "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"Memento"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" name"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" phone"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" budget"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Name `),n("span",{class:"token operator"},"="),s(" name"),n("span",{class:"token punctuation"},";"),s(`
        Phone `),n("span",{class:"token operator"},"="),s(" phone"),n("span",{class:"token punctuation"},";"),s(`
        Budget `),n("span",{class:"token operator"},"="),s(" budget"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ProspectMemory"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},"Memento"),s(" Memento "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(y,g){const o=l("Tabs");return i(),p("div",null,[m,u(o,{id:"56",data:[{id:"Structural code"},{id:"Real-World code"}]},{title0:a(({value:e,isActive:t})=>[s("Structural code")]),title1:a(({value:e,isActive:t})=>[s("Real-World code")]),tab0:a(({value:e,isActive:t})=>[d]),tab1:a(({value:e,isActive:t})=>[b]),_:1})])}const h=c(k,[["render",v],["__file","memento.html.vue"]]),_=JSON.parse('{"path":"/cs/design-pattern/memento.html","title":"备忘录模式","lang":"zh-CN","frontmatter":{"title":"备忘录模式","date":"2023-06-17T00:00:00.000Z","dir.order":15,"order":15,"editLink":false,"footer":false,"category":["设计模式"],"tag":["设计模式"],"description":"参与此模式的类和对象包括： Memento(Memento) 存储Originator对象的内部状态。Memento可以根据其发起者的判断，尽可能多地或尽可能少地存储发起者的内部状态。 防止发起者以外的对象访问。Mementos实际上有两个接口。Caretaker看到了Memento的狭窄接口---它只能将Memento传递给其他对象。相比之下，ori...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/design-pattern/memento.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"备忘录模式"}],["meta",{"property":"og:description","content":"参与此模式的类和对象包括： Memento(Memento) 存储Originator对象的内部状态。Memento可以根据其发起者的判断，尽可能多地或尽可能少地存储发起者的内部状态。 防止发起者以外的对象访问。Mementos实际上有两个接口。Caretaker看到了Memento的狭窄接口---它只能将Memento传递给其他对象。相比之下，ori..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-21T07:17:50.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2023-06-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-21T07:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"备忘录模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-21T07:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1687005402000,"updatedTime":1689923870000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":1.96,"words":589},"filePathRelative":"cs/design-pattern/memento.md","localizedDate":"2023年6月17日","excerpt":"<p>参与此模式的类和对象包括：</p>\\n<ul>\\n<li>\\n<p>Memento(<code>Memento</code>)</p>\\n<ul>\\n<li>存储Originator对象的内部状态。Memento可以根据其发起者的判断，尽可能多地或尽可能少地存储发起者的内部状态。</li>\\n<li>防止发起者以外的对象访问。Mementos实际上有两个接口。Caretaker看到了Memento的狭窄接口---它只能将Memento传递给其他对象。相比之下，originator看到了一个广泛的界面，它可以访问所有必要的数据以将自己恢复到之前的状态。理想情况下，只有产生备忘录的始发者才被允许访问备忘录的内部状态。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Originator(<code>SalesProspect</code>)</p>\\n<ul>\\n<li>创建一个包含其当前内部状态快照的Memento。</li>\\n<li>使用Memento恢复其内部状态。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Caretaker(<code>Caretaker</code>)</p>\\n<ul>\\n<li>负责Memento的保管。</li>\\n<li>从不操作或检测Memento的内容。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{h as comp,_ as data};