import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as p,c as i,f as u,w as a,b as k,e as s,d as n}from"./app-C-AhtWft.js";const r={},d=k("<p>参与此模式的类和对象包括：</p><ul><li><p>Target(<code>ChemicalCompound</code>)</p><ul><li>定义客户端使用的特定于域的接口。</li></ul></li><li><p>Adapter(<code>Compund</code>)</p><ul><li>使接口适配器适应目标接口。</li></ul></li><li><p>Adaptee(<code>ChemicalDatabank</code>)</p></li><li><p>定义需要调整的现有接口。</p></li><li><p>Client(<code>AdapterApp</code>)</p><ul><li>与符合&quot;目标&quot;接口的对象协作。</li></ul></li></ul>",2),m=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了适配器模式，该模式将一个类的接口映射到另一个类，以便它们可以一起工作。"),s(`
`),n("span",{class:"token comment"},"// 这些不兼容的类可能来自不同的库或框架。"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" target "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Adapter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
target`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Called SpecificRequest()"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Target"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"virtual"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Called Target Request()"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Adapter"),n("span",{class:"token punctuation"},":"),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Target")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},"Adaptee"),s(" _adapter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Adaptee"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _adapter`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SpecificRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Adaptee"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"SpecificRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Called SpecificRequest()"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了传统化学数据库的使用。"),s(`
`),n("span",{class:"token comment"},"// 化合物对象通过适配器接口访问数据库。"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" unknown "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Compound"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
unknown`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Display"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" water "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"RichCompound"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Water"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
water`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Display"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" benzene "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"RichCompound"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Benzene"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
benzene`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Display"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" ethanol "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"RichCompound"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Ethanol"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ethanol`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Display"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Compound:Unknown ------"),s(`

`),n("span",{class:"token comment"},"// Compound:Water ------"),s(`
`),n("span",{class:"token comment"},"//  Formula:H20"),s(`
`),n("span",{class:"token comment"},"//  Weight:18.015"),s(`
`),n("span",{class:"token comment"},"//  Melting Pt:0"),s(`
`),n("span",{class:"token comment"},"//  Boiling Pt:100"),s(`

`),n("span",{class:"token comment"},"// Compound:Benzene ------"),s(`
`),n("span",{class:"token comment"},"//  Formula:C6H6"),s(`
`),n("span",{class:"token comment"},"//  Weight:78.1134"),s(`
`),n("span",{class:"token comment"},"//  Melting Pt:5.5"),s(`
`),n("span",{class:"token comment"},"//  Boiling Pt:80.1"),s(`

`),n("span",{class:"token comment"},"// Compound:Ethanol ------"),s(`
`),n("span",{class:"token comment"},"//  Formula:C2H50H"),s(`
`),n("span",{class:"token comment"},"//  Weight:446.0688"),s(`
`),n("span",{class:"token comment"},"//  Melting Pt:-114.1"),s(`
`),n("span",{class:"token comment"},"//  Boiling Pt:78.3"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Compound"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"float")]),s(" BoilingPoint"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"float")]),s(" MeltingPoint"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"double")]),s(" MolecularWeight"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" MolecularFormula "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"virtual"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Display"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\\nCompound:Unknown ------ "'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"RichCompound"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"Compound")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" _chemical"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"ChemicalDatabank"),s(" _bank "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token function"},"RichCompound"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" chemical"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _chemical`),n("span",{class:"token operator"},"="),s("chemical"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Display"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _bank`),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ChemicalDatabank"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        BoilingPoint `),n("span",{class:"token operator"},"="),s(" _bank"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetCriticalPoint"),n("span",{class:"token punctuation"},"("),s("_chemical"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"B"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        MeltingPoint `),n("span",{class:"token operator"},"="),s(" _bank"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetCriticalPoint"),n("span",{class:"token punctuation"},"("),s("_chemical"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"M"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        MolecularWeight `),n("span",{class:"token operator"},"="),s(" _bank"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetMolecularWeight"),n("span",{class:"token punctuation"},"("),s("_chemical"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        MolecularFormula `),n("span",{class:"token operator"},"="),s(" _bank"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetMolecularStructure"),n("span",{class:"token punctuation"},"("),s("_chemical"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"\\nCompound:'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"_chemical"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},' ------ "')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" Formula:'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"MolecularFormula"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" Weight:'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"MolecularWeight"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" Melting Pt:'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"MeltingPoint"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$" Boiling Pt:'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"BoilingPoint"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ChemicalDatabank"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"float")]),s(),n("span",{class:"token function"},"GetCriticalPoint"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" compound"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" point"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("point "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"M"'),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("compound"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ToLower"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"water"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0.0f"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"benzene"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"5.5f"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"ethanol"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"114.1f"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"default"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0f"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("compound"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ToLower"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(` 
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"water"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"100.0f"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"benzene"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"80.1f"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"ethanol"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"78.3f"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"default"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0f"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"GetMolecularStructure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" compound"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("compound"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ToLower"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"water"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"H20"'),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"benzene"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"C6H6"'),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"ethanol"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"C2H50H"'),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"default"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"double")]),s(),n("span",{class:"token function"},"GetMolecularWeight"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" compound"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("compound"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ToLower"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"water"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"18.015"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"benzene"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"78.1134"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"ethanol"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"446.0688"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"default"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0d"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(w,y){const c=l("Tabs");return p(),i("div",null,[d,u(c,{id:"51",data:[{id:"Structural code"},{id:"Real-World code"}]},{title0:a(({value:e,isActive:t})=>[s("Structural code")]),title1:a(({value:e,isActive:t})=>[s("Real-World code")]),tab0:a(({value:e,isActive:t})=>[m]),tab1:a(({value:e,isActive:t})=>[b]),_:1})])}const h=o(r,[["render",v],["__file","adapter.html.vue"]]);export{h as default};
