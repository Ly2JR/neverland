import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as i,c as p,f as u,w as a,d as n,e as s}from"./app-6qJPVX4D.js";const r={},k=n("p",null,"参与此模式的类和对象包括：",-1),d=n("ul",null,[n("li",null,[s("Singleton("),n("code",null,"LoadBalancer"),s(") "),n("ul",null,[n("li",null,"定义一个Instance操作，允许客户端访问其唯一的实例。实例是一个类操作。"),n("li",null,"负责创建和维护自己的唯一实例。")])])],-1),m=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 演示了单例模式，该模式确保只能创建类的单个实例(单例)"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" s1 "),n("span",{class:"token operator"},"="),s(" Singleton"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Instance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" s2 "),n("span",{class:"token operator"},"="),s(" Singleton"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Instance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//Test for same instance"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("s1"),n("span",{class:"token operator"},"=="),s("s2"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Objects are the same instance"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//Output"),s(`
`),n("span",{class:"token comment"},"//Objects are the same instance"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Singleton"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token class-name"},"Singleton"),s(" _instance"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token function"},"Singleton"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token return-type class-name"},"Singleton"),s(),n("span",{class:"token function"},"Instance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"//Uses lazy initialization"),s(`
        `),n("span",{class:"token comment"},"//Note:this is not thread safe."),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("_instance "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            _instance`),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"Singleton"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"return"),s(" _instance"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token comment"},"// 将单列模式演示为LoadBalancing对象。只能创建该类的单个实例(单列),"),s(`
`),n("span",{class:"token comment"},"// 因为服务器可能回动态地联机或脱机，并且每个请求都必须通过一个了解(网络)农场状态的对象。"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" b1 "),n("span",{class:"token operator"},"="),s(" LoadBalancer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetLoadBalancer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" b2 "),n("span",{class:"token operator"},"="),s(" LoadBalancer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetLoadBalancer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" b3 "),n("span",{class:"token operator"},"="),s(" LoadBalancer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetLoadBalancer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" b4 "),n("span",{class:"token operator"},"="),s(" LoadBalancer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetLoadBalancer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//Same instance?"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("b1 "),n("span",{class:"token operator"},"=="),s(" b2 "),n("span",{class:"token operator"},"&&"),s(" b2 "),n("span",{class:"token operator"},"=="),s(" b3 "),n("span",{class:"token operator"},"&&"),s(" b3 "),n("span",{class:"token operator"},"=="),s(" b4"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Same instance\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"//Load balance 15 server requests"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" balancer "),n("span",{class:"token operator"},"="),s(" LoadBalancer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetLoadBalancer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" server "),n("span",{class:"token operator"},"="),s(" balancer"),n("span",{class:"token punctuation"},"."),s("Server"),n("span",{class:"token punctuation"},";"),s(`
    Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"Dispatch Request to:'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},"server"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Wait for user"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//Output"),s(`
`),n("span",{class:"token comment"},"// Same instance"),s(`

`),n("span",{class:"token comment"},"// Dispatch Request to:ServerIV"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerV"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerI"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerV"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerV"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerV"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerV"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerII"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerI"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerII"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerII"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerII"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerII"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerII"),s(`
`),n("span",{class:"token comment"},"// Dispatch Request to:ServerV"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"LoadBalancer"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token class-name"},"LoadBalancer"),s(" _instance "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},[s("List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},">")]),s(" _servers "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},"Random"),s(" _random "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"//Lock synchronization object"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"readonly"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"object")]),s(" Locker"),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"//Constructor (protected)"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token function"},"LoadBalancer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        _servers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ServerI"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        _servers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ServerII"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        _servers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ServerIII"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        _servers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ServerIV"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        _servers`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ServerV"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token return-type class-name"},"LoadBalancer"),s(),n("span",{class:"token function"},"GetLoadBalancer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Support multithreaded applications through"),s(`
        `),n("span",{class:"token comment"},"// 'Double checked locking' pattern which (once"),s(`
        `),n("span",{class:"token comment"},"// the instance exists) avoids locking each "),s(`
        `),n("span",{class:"token comment"},"// time the method is invoked"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("_instance "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"lock"),s(),n("span",{class:"token punctuation"},"("),s("Locker"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("_instance "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    _instance `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"LoadBalancer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"return"),s(" _instance"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s("/// "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("summary")]),n("span",{class:"token punctuation"},">")])]),s(`
    `),n("span",{class:"token doc-comment comment"},"/// Simple,but effective random load balancer"),s(`
    `),n("span",{class:"token doc-comment comment"},[s("/// "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("summary")]),n("span",{class:"token punctuation"},">")])]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(` Server
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"get"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"int")]),s(" r "),n("span",{class:"token operator"},"="),s(" _random"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Next"),n("span",{class:"token punctuation"},"("),s("_servers"),n("span",{class:"token punctuation"},"."),s("Count"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" _servers"),n("span",{class:"token punctuation"},"["),s("r"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function b(y,w){const c=l("Tabs");return i(),p("div",null,[k,d,u(c,{id:"22",data:[{id:"Structural code"},{id:"Real-World code"}]},{title0:a(({value:e,isActive:t})=>[s("Structural code")]),title1:a(({value:e,isActive:t})=>[s("Real-World code")]),tab0:a(({value:e,isActive:t})=>[m]),tab1:a(({value:e,isActive:t})=>[v]),_:1})])}const _=o(r,[["render",b],["__file","singleton.html.vue"]]);export{_ as default};
