import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c as i,a as u,w as a,e as r,f as s,d as n}from"./app-NXe2WAM8.js";const k={},d=r("<p>参与此模式的类和对象包括：</p><ul><li><p>AbstractExpression(<code>Expression</code>)</p><ul><li>声明一个用于执行操作的接口</li></ul></li><li><p>TerminalExpression(<code>ThousandExpression</code>,<code>HUndredExpression</code>,<code>TenExpression</code>,<code>OneExpression</code>)</p><ul><li>实现与语法中的终结符合关联的解释操作。</li><li>句子中的每个终结符号都需要一个实例。</li></ul></li><li><p>NonterminalExpression(<code>not used</code>)</p><ul><li>语法中的每个规则R::=R1R2...Rn都需要一个这样的类。</li><li>为每个符号R1到Rn维护AbstractExpression类型的实例变量。</li><li>为语法中的非终结符号实现解释操作。Interpret通常在表示R1到Rn的变量上递归调用自身。</li></ul></li><li><p>Context(<code>Context</code>)</p><ul><li>包含对解释器来说是全局的信息。</li></ul></li><li><p>Client(<code>InterpreterApp</code>)</p><ul><li>构建(或给出)抽象语法树，表示语法定义的语言中的特定句子。抽象语法树由NonterminalExpression和TerminalExpression类的实例组装而成。</li><li>调用解释操作。</li></ul></li></ul>",2),m=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了解释器模式，它使用定义的语法提供处理已解析语句的解释器。"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" structuralContext "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Context"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" list "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},[s("List"),n("span",{class:"token punctuation"},"<"),s("AbstractExpression"),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"TerminalExpression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"NonterminalExpression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"TerminalExpression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"TerminalExpression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" expression "),n("span",{class:"token keyword"},"in"),s(" list"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    expression`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Interpret"),n("span",{class:"token punctuation"},"("),s("structuralContext"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Called Terminal.Interpret()"),s(`
`),n("span",{class:"token comment"},"// Called nonterminal.Interpret()"),s(`
`),n("span",{class:"token comment"},"// Called Terminal.Interpret()"),s(`
`),n("span",{class:"token comment"},"// Called Terminal.Interpret()"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Context"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"AbstractExpression"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Interpret"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Context"),s(" context"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"TerminalExpression"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"AbstractExpression")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Interpret"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Context"),s(" context"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Called Terminal.Interpret()"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"NonterminalExpression"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"AbstractExpression")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Interpret"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Context"),s(" context"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Called Nonterminal.Interpret()"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了用于将罗马数字转为十进制的解释器模式。"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" roman "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"MCMXXVIII"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" realWorldContext "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Context"),n("span",{class:"token punctuation"},"("),s("roman"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" tree "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},[s("List"),n("span",{class:"token punctuation"},"<"),s("Expression"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ThousandExpression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"HundredExpress"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"TenExpress"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"OneExpress"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" exp "),n("span",{class:"token keyword"},"in"),s(" tree"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    exp`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Interpret"),n("span",{class:"token punctuation"},"("),s("realWorldContext"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"roman"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"}," = "),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("realWorldContext"),n("span",{class:"token punctuation"},"."),s("Output")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// MCMXXVIII = 1928"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Context"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"int")]),s(" _output"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"Context"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" input"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Input `),n("span",{class:"token operator"},"="),s(" input"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(" Input "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"int")]),s(" Output "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token operator"},"=>"),s(" _output"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),s(),n("span",{class:"token operator"},"=>"),s(" _output "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"value"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Expression"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Interpret"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Context"),s(" context"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},"."),s("Input"),n("span",{class:"token punctuation"},"."),s("Length "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},"."),s("Input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"StartsWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Nine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            context`),n("span",{class:"token punctuation"},"."),s("Output "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"9"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token function"},"Multiplier"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            context`),n("span",{class:"token punctuation"},"."),s("Input "),n("span",{class:"token operator"},"="),s(" context"),n("span",{class:"token punctuation"},"."),s("Input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},"."),s("Input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"StartsWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Four"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            context`),n("span",{class:"token punctuation"},"."),s("Output "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token function"},"Multiplier"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            context`),n("span",{class:"token punctuation"},"."),s("Input "),n("span",{class:"token operator"},"="),s(" context"),n("span",{class:"token punctuation"},"."),s("Input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},"."),s("Input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"StartsWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Five"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            context`),n("span",{class:"token punctuation"},"."),s("Output "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token function"},"Multiplier"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            context`),n("span",{class:"token punctuation"},"."),s("Input "),n("span",{class:"token operator"},"="),s(" context"),n("span",{class:"token punctuation"},"."),s("Input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},"."),s("Input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"StartsWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"One"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            context`),n("span",{class:"token punctuation"},"."),s("Output "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token function"},"Multiplier"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            context`),n("span",{class:"token punctuation"},"."),s("Input "),n("span",{class:"token operator"},"="),s(" context"),n("span",{class:"token punctuation"},"."),s("Input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"One"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Four"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Five"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Nine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"abstract"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"int")]),s(),n("span",{class:"token function"},"Multiplier"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ThousandExpression"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Expression")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Five"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Four"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"int")]),s(),n("span",{class:"token function"},"Multiplier"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Nine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"One"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"M"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"HundredExpress"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Expression")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Five"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"D"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Four"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"CD"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"int")]),s(),n("span",{class:"token function"},"Multiplier"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Nine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"CM"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"One"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"C"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"TenExpress"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Expression")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"One"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"X"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Four"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"XL"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Five"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"L"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Nine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"XC"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"int")]),s(),n("span",{class:"token function"},"Multiplier"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"OneExpress"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Expression")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"One"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"I"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Four"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"IV"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Five"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"V"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"Nine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"IX"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"int")]),s(),n("span",{class:"token function"},"Multiplier"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(y,w){const o=l("Tabs");return p(),i("div",null,[d,u(o,{id:"85",data:[{id:"Structural code"},{id:"Real-World code"}]},{title0:a(({value:e,isActive:t})=>[s("Structural code")]),title1:a(({value:e,isActive:t})=>[s("Real-World code")]),tab0:a(({value:e,isActive:t})=>[m]),tab1:a(({value:e,isActive:t})=>[b]),_:1})])}const f=c(k,[["render",v],["__file","interpreter.html.vue"]]),E=JSON.parse('{"path":"/cs/design-pattern/interpreter.html","title":"解释器模式","lang":"zh-CN","frontmatter":{"title":"解释器模式","date":"2023-06-17T00:00:00.000Z","dir.order":12,"order":12,"editLink":false,"footer":false,"category":["设计模式"],"tag":["设计模式"],"description":"参与此模式的类和对象包括： AbstractExpression(Expression) 声明一个用于执行操作的接口 TerminalExpression(ThousandExpression,HUndredExpression,TenExpression,OneExpression) 实现与语法中的终结符合关联的解释操作。 句子中的每个终结符号都需要...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/design-pattern/interpreter.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"解释器模式"}],["meta",{"property":"og:description","content":"参与此模式的类和对象包括： AbstractExpression(Expression) 声明一个用于执行操作的接口 TerminalExpression(ThousandExpression,HUndredExpression,TenExpression,OneExpression) 实现与语法中的终结符合关联的解释操作。 句子中的每个终结符号都需要..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-21T07:17:50.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2023-06-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-21T07:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"解释器模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-21T07:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1687005402000,"updatedTime":1689923870000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":2.15,"words":646},"filePathRelative":"cs/design-pattern/interpreter.md","localizedDate":"2023年6月17日","excerpt":"<p>参与此模式的类和对象包括：</p>\\n<ul>\\n<li>\\n<p>AbstractExpression(<code>Expression</code>)</p>\\n<ul>\\n<li>声明一个用于执行操作的接口</li>\\n</ul>\\n</li>\\n<li>\\n<p>TerminalExpression(<code>ThousandExpression</code>,<code>HUndredExpression</code>,<code>TenExpression</code>,<code>OneExpression</code>)</p>\\n<ul>\\n<li>实现与语法中的终结符合关联的解释操作。</li>\\n<li>句子中的每个终结符号都需要一个实例。</li>\\n</ul>\\n</li>\\n<li>\\n<p>NonterminalExpression(<code>not used</code>)</p>\\n<ul>\\n<li>语法中的每个规则R::=R1R2...Rn都需要一个这样的类。</li>\\n<li>为每个符号R1到Rn维护AbstractExpression类型的实例变量。</li>\\n<li>为语法中的非终结符号实现解释操作。Interpret通常在表示R1到Rn的变量上递归调用自身。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Context(<code>Context</code>)</p>\\n<ul>\\n<li>包含对解释器来说是全局的信息。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Client(<code>InterpreterApp</code>)</p>\\n<ul>\\n<li>构建(或给出)抽象语法树，表示语法定义的语言中的特定句子。抽象语法树由NonterminalExpression和TerminalExpression类的实例组装而成。</li>\\n<li>调用解释操作。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{f as comp,E as data};
