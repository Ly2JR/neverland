import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as p,c as i,f as u,w as a,b as k,e as s,d as n}from"./app-VsqfQe9P.js";const r={},d=k("<p>参与此模式的类和对象包括：</p><ul><li><p>Builder(<code>VehicleBuilder</code>)</p><ul><li>指定用于创建Product对象的部分的抽象接口。</li></ul></li><li><p>ConcreteBuilder(<code>MotorCycleBuilder</code>,<code>CarBuilder</code>,<code>ScooterBuilder</code>)</p><ul><li>通过实现Builder接口来构造和组装产品的各个部分。</li><li>定义并跟踪它创建的表示。</li><li>提供检索产品的接口。</li></ul></li><li><p>Director(<code>Shop</code>)</p><ul><li>使用Builder接口构造一个对象。</li></ul></li><li><p>Product(<code>Vehicle</code>)</p><ul><li>表示正在构建的复杂对象。ConcreteBuilder构建产品的内部表示并定义其组装过程。</li><li>包括定义组成部分的类，包括将这些部分组装成最终结果的接口。</li></ul></li></ul>",2),m=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了构建器模式，其中以逐步方式创建复杂对象。"),s(`
`),n("span",{class:"token comment"},"// 构建过程可以创建不同的对象表示并提供对对象组装的高级控制"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" director "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Director"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" b1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteBuilder1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" b2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteBuilder2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

director`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Construct"),n("span",{class:"token punctuation"},"("),s("b1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" p1 "),n("span",{class:"token operator"},"="),s(" b1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetResult"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
p1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

director`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Construct"),n("span",{class:"token punctuation"},"("),s("b2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" p2 "),n("span",{class:"token operator"},"="),s(" b2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetResult"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
p2`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//  Product Parts -------"),s(`
`),n("span",{class:"token comment"},"// PartA"),s(`
`),n("span",{class:"token comment"},"// PartB"),s(`

`),n("span",{class:"token comment"},"//  Product Parts -------"),s(`
`),n("span",{class:"token comment"},"// PartX"),s(`
`),n("span",{class:"token comment"},"// PartY"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Director"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Construct"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Builder"),s(" builder"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        builder`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"BuildPartA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        builder`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"BuildPartB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Builder"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildPartA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildPartB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},"Product"),s(),n("span",{class:"token function"},"GetResult"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ConcreteBuilder1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Builder")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},"Product"),s(" _product "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Product"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildPartA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _product`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"PartA"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildPartB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _product`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"PartB"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},"Product"),s(),n("span",{class:"token function"},"GetResult"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" _product"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ConcreteBuilder2"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Builder")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},"Product"),s(" _product"),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Product"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildPartA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _product`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"PartX"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildPartB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _product`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"PartY"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},"Product"),s(),n("span",{class:"token function"},"GetResult"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" _product"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Product"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},[s("List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},">")]),s(" _parts "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},[s("List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" part"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _parts`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),s("part"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\\n Product Parts -------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" part "),n("span",{class:"token keyword"},"in"),s(" _parts"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),s("part"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了构建起模式，其中不同的车辆以逐步的方式组装。"),s(`
`),n("span",{class:"token comment"},"// 商店使用VehicleBuilders以一系列顺序步骤构建各种车辆。"),s(`
`),n("span",{class:"token class-name"},"VehicleBuilder"),s(" builder"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" shop "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Shop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
builder `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ScooterBuilder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
shop`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Construct"),n("span",{class:"token punctuation"},"("),s("builder"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
builder`),n("span",{class:"token punctuation"},"."),s("Vehicle"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

builder `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"CarBuilder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
shop`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Construct"),n("span",{class:"token punctuation"},"("),s("builder"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
builder`),n("span",{class:"token punctuation"},"."),s("Vehicle"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

builder `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"MotorCycleBuilder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
shop`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Construct"),n("span",{class:"token punctuation"},"("),s("builder"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
builder`),n("span",{class:"token punctuation"},"."),s("Vehicle"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// --------------------------"),s(`
`),n("span",{class:"token comment"},"// Vehicle Type:Scooter"),s(`
`),n("span",{class:"token comment"},"//  Frame:Scooter Frame"),s(`
`),n("span",{class:"token comment"},"//  Engine:50 cc"),s(`
`),n("span",{class:"token comment"},"//  #Wheels:2"),s(`
`),n("span",{class:"token comment"},"//  #Doors:0"),s(`

`),n("span",{class:"token comment"},"// --------------------------"),s(`
`),n("span",{class:"token comment"},"// Vehicle Type:Car"),s(`
`),n("span",{class:"token comment"},"//  Frame:Car Frame"),s(`
`),n("span",{class:"token comment"},"//  Engine:2500 cc"),s(`
`),n("span",{class:"token comment"},"//  #Wheels:4"),s(`
`),n("span",{class:"token comment"},"//  #Doors:4"),s(`

`),n("span",{class:"token comment"},"// --------------------------"),s(`
`),n("span",{class:"token comment"},"// Vehicle Type:MotorCycle"),s(`
`),n("span",{class:"token comment"},"//  Frame:MotorCycle Frame"),s(`
`),n("span",{class:"token comment"},"//  Engine:500 cc"),s(`
`),n("span",{class:"token comment"},"//  #Wheels:2"),s(`
`),n("span",{class:"token comment"},"//  #Doors:0"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Shop"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Construct"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"VehicleBuilder"),s(" vehicleBuilder"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        vehicleBuilder`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"BuildFrame"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        vehicleBuilder`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"BuildEngine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        vehicleBuilder`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"BuildWheels"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        vehicleBuilder`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"BuildDoors"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"VehicleBuilder"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},"Vehicle"),s(" Vehicle "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildFrame"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildEngine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildWheels"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildDoors"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MotorCycleBuilder"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"VehicleBuilder")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"MotorCycleBuilder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Vehicle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"MotorCycle"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildFrame"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"frame"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"MotorCycle Frame"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildEngine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"engine"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"500 cc"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildWheels"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"wheels"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildDoors"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"doors"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"CarBuilder"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"VehicleBuilder")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"CarBuilder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Vehicle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Car"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildFrame"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"frame"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Car Frame"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildEngine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"engine"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"2500 cc"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildWheels"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"wheels"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"4"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildDoors"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"doors"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"4"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ScooterBuilder"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"VehicleBuilder")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"ScooterBuilder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Vehicle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Scooter"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildFrame"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"frame"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Scooter Frame"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildEngine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"engine"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"50 cc"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildWheels"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"wheels"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"BuildDoors"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Vehicle`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"doors"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Vehicle"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" _vehicleType"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},[s("Dictionary"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},","),n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},">")]),s(" _parts"),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},[s("Dictionary"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},","),n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"Vehicle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" vehicleType"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _vehicleType`),n("span",{class:"token operator"},"="),s("vehicleType"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"["),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" key"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token operator"},"=>"),s(" _parts"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"set"),s(),n("span",{class:"token operator"},"=>"),s(" _parts"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\\n--------------------------"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"Vehicle Type:'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"_vehicleType"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" Frame:'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("_parts"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"frame"'),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" Engine:'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("_parts"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"engine"'),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" #Wheels:'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("_parts"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"wheels"'),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" #Doors:'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("_parts"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"doors"'),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function b(y,w){const c=l("Tabs");return p(),i("div",null,[d,u(c,{id:"68",data:[{id:"Structural code"},{id:"Real-World code"}]},{title0:a(({value:e,isActive:t})=>[s("Structural code")]),title1:a(({value:e,isActive:t})=>[s("Real-World code")]),tab0:a(({value:e,isActive:t})=>[m]),tab1:a(({value:e,isActive:t})=>[v]),_:1})])}const f=o(r,[["render",b],["__file","builder.html.vue"]]);export{f as default};
