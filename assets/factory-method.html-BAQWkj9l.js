import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c as i,a as u,w as a,e as r,f as s,d as n}from"./app-BAw08eHM.js";const k={},d=r("<p>参与此模式的类和对象包括：</p><ul><li><p>Product(<code>Page</code>)</p><ul><li>定义工厂方法创建的对象的接口。</li></ul></li><li><p>ConcreteProduct(<code>SkillsPage</code>,<code>EducationPage</code>,<code>ExperiencePage</code>)</p><ul><li>实现产品接口。</li></ul></li><li><p>Creator(<code>Document</code>)</p><ul><li>声明工厂方法，它返回一个Product类型的对象。Creator还可以定义返回默认ConcreteProduct对象的工厂方法的默认实现。</li><li>可以调用工厂方法来创建Product对象。</li></ul></li><li><p>ConcreteCreator(<code>Report</code>,<code>Resume</code>)</p><ul><li>重写工厂方法以返回ConcreteProduct的实例。</li></ul></li></ul>",2),m=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了Factory方法，它在创建不同对象方面提供了极大的灵活性。"),s(`
`),n("span",{class:"token comment"},"// Abstract类可以提供一个默认对象，但每个子类都可以实例化该对象的扩展版本。"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" creators "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Creator"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
creators`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteCreatorA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
creators`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteCreatorB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" creator "),n("span",{class:"token keyword"},"in"),s(" creators"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" product "),n("span",{class:"token operator"},"="),s(" creator"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"FactoryMethod"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"Created '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("product"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Name")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Created ConcreteProductA"),s(`
`),n("span",{class:"token comment"},"// Created ConcreteProductB"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Product"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ConcreteProductA"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Product")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ConcreteProductB"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Product")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Creator"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},"Product"),s(),n("span",{class:"token function"},"FactoryMethod"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ConcreteCreatorA"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Creator")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},"Product"),s(),n("span",{class:"token function"},"FactoryMethod"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteProductA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ConcreteCreatorB"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Creator")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},"Product"),s(),n("span",{class:"token function"},"FactoryMethod"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConcreteProductB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了工厂方法，它在创建不同的文档时提供了灵活性。"),s(`
`),n("span",{class:"token comment"},"// 派生的Document类Report和Resume实例化Document类的扩展版本。"),s(`
`),n("span",{class:"token comment"},"// 这里，工厂方法在Document基类的构造函数中被调用。"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" documents "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Document"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
documents`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Resume"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
documents`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Report"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" document "),n("span",{class:"token keyword"},"in"),s(" documents"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"\\n'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Name")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},' ---"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" page "),n("span",{class:"token keyword"},"in"),s(" document"),n("span",{class:"token punctuation"},"."),s("Pages"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("page"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Name")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Resume--"),s(`
`),n("span",{class:"token comment"},"//  SkillsPage"),s(`
`),n("span",{class:"token comment"},"//  EducationPage"),s(`
`),n("span",{class:"token comment"},"//  ExperiencePage"),s(`

`),n("span",{class:"token comment"},"// Report--"),s(`
`),n("span",{class:"token comment"},"//  IntroductionPage"),s(`
`),n("span",{class:"token comment"},"//  ResultPage"),s(`
`),n("span",{class:"token comment"},"//  ConclusionPage"),s(`
`),n("span",{class:"token comment"},"//  SummaryPage"),s(`
`),n("span",{class:"token comment"},"//  BibliographyPage"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Page"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SkillsPage"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Page")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"EducationPage"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Page")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ExperiencePage"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Page")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"IntroductionPage"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Page")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ResultPage"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Page")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ConclusionPage"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Page")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SummaryPage"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Page")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"BibliographyPage"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Page")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Document"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},[s("List"),n("span",{class:"token punctuation"},"<"),s("Page"),n("span",{class:"token punctuation"},">")]),s(" _pages"),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},[s("List"),n("span",{class:"token punctuation"},"<"),s("Page"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token function"},"Document"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CreatePages"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[s("List"),n("span",{class:"token punctuation"},"<"),s("Page"),n("span",{class:"token punctuation"},">")]),s(` Pages
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(" _pages"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"CreatePages"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Resume"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Document")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"CreatePages"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Pages`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"SkillsPage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Pages`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"EducationPage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Pages`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ExperiencePage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Report"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Document")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"CreatePages"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Pages`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"IntroductionPage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Pages`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ResultPage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Pages`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConclusionPage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Pages`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"SummaryPage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Pages`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"BibliographyPage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(y,g){const c=l("Tabs");return p(),i("div",null,[d,u(c,{id:"58",data:[{id:"Structural code"},{id:"Real-World code"}]},{title0:a(({value:e,isActive:t})=>[s("Structural code")]),title1:a(({value:e,isActive:t})=>[s("Real-World code")]),tab0:a(({value:e,isActive:t})=>[m]),tab1:a(({value:e,isActive:t})=>[b]),_:1})])}const C=o(k,[["render",v],["__file","factory-method.html.vue"]]),f=JSON.parse('{"path":"/cs/design-pattern/factory-method.html","title":"工厂方法模式","lang":"zh-CN","frontmatter":{"title":"工厂方法模式","date":"2023-06-17T00:00:00.000Z","dir.order":10,"order":10,"editLink":false,"footer":false,"category":["设计模式"],"tag":["设计模式"],"description":"参与此模式的类和对象包括： Product(Page) 定义工厂方法创建的对象的接口。 ConcreteProduct(SkillsPage,EducationPage,ExperiencePage) 实现产品接口。 Creator(Document) 声明工厂方法，它返回一个Product类型的对象。Creator还可以定义返回默认ConcreteP...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/design-pattern/factory-method.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"工厂方法模式"}],["meta",{"property":"og:description","content":"参与此模式的类和对象包括： Product(Page) 定义工厂方法创建的对象的接口。 ConcreteProduct(SkillsPage,EducationPage,ExperiencePage) 实现产品接口。 Creator(Document) 声明工厂方法，它返回一个Product类型的对象。Creator还可以定义返回默认ConcreteP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-21T07:17:50.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2023-06-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-21T07:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"工厂方法模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-21T07:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1687005402000,"updatedTime":1689923870000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":1.68,"words":505},"filePathRelative":"cs/design-pattern/factory-method.md","localizedDate":"2023年6月17日","excerpt":"<p>参与此模式的类和对象包括：</p>\\n<ul>\\n<li>\\n<p>Product(<code>Page</code>)</p>\\n<ul>\\n<li>定义工厂方法创建的对象的接口。</li>\\n</ul>\\n</li>\\n<li>\\n<p>ConcreteProduct(<code>SkillsPage</code>,<code>EducationPage</code>,<code>ExperiencePage</code>)</p>\\n<ul>\\n<li>实现产品接口。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Creator(<code>Document</code>)</p>\\n<ul>\\n<li>声明工厂方法，它返回一个Product类型的对象。Creator还可以定义返回默认ConcreteProduct对象的工厂方法的默认实现。</li>\\n<li>可以调用工厂方法来创建Product对象。</li>\\n</ul>\\n</li>\\n<li>\\n<p>ConcreteCreator(<code>Report</code>,<code>Resume</code>)</p>\\n<ul>\\n<li>重写工厂方法以返回ConcreteProduct的实例。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{C as comp,f as data};
