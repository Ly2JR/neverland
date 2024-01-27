import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as g,c as r,f as y,w as l,b as f,e,d as t}from"./app-_F3nM_LT.js";const x={},o=f('<figure><img src="https://nas.ilyl.life:8092/yonyou/accept.gif" alt="收款单" tabindex="0" loading="lazy"><figcaption>收款单</figcaption></figure><h2 id="资源符" tabindex="-1"><a class="header-anchor" href="#资源符"><span>资源符</span></a></h2><p><code>accept</code></p><h2 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符"><span>操作符</span></a></h2><p><code>create</code></p><h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">参数路径</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">vouchtype</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">单据类型</td></tr><tr><td style="text-align:left;">vouchcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">单据编号</td></tr><tr><td style="text-align:left;">vouchdate</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">单据日期</td></tr><tr><td style="text-align:left;">period</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">期间</td></tr><tr><td style="text-align:left;">customercode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">客商编码</td></tr><tr><td style="text-align:left;">departmentcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">部门编码</td></tr><tr><td style="text-align:left;">personcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">职员编码</td></tr><tr><td style="text-align:left;">itemclasscode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">项目大类编号</td></tr><tr><td style="text-align:left;">itemcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">项目编码</td></tr><tr><td style="text-align:left;">itemname</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">项目名称</td></tr><tr><td style="text-align:left;">orderid</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">订单号</td></tr><tr><td style="text-align:left;">balancecode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">结算方式</td></tr><tr><td style="text-align:left;">notecode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">应收应付票据编号</td></tr><tr><td style="text-align:left;">digest</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">摘要</td></tr><tr><td style="text-align:left;">oppositebankcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">银行帐号</td></tr><tr><td style="text-align:left;">foreigncurrency</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">币种</td></tr><tr><td style="text-align:left;">currencyrate</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">汇率</td></tr><tr><td style="text-align:left;">amount</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">本币金额</td></tr><tr><td style="text-align:left;">originalamount</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">原币金额</td></tr><tr><td style="text-align:left;">operator</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">录入人</td></tr><tr><td style="text-align:left;">balanceitemcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">科目编码(结算科目)</td></tr><tr><td style="text-align:left;">flag</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">应收应付标志</td></tr><tr><td style="text-align:left;">sitemcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">结算项目</td></tr><tr><td style="text-align:left;">oppositebankname</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">对方单位银行名称</td></tr><tr><td style="text-align:left;">bankname</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">本单位银行名称</td></tr><tr><td style="text-align:left;">bankaccount</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">本单位银行账号</td></tr><tr><td style="text-align:left;">define1</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项1</td></tr><tr><td style="text-align:left;">define2</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项2</td></tr><tr><td style="text-align:left;">define3</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项3</td></tr><tr><td style="text-align:left;">define4</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项4</td></tr><tr><td style="text-align:left;">define5</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项5</td></tr><tr><td style="text-align:left;">define6</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项6</td></tr><tr><td style="text-align:left;">define7</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项7</td></tr><tr><td style="text-align:left;">define8</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项8</td></tr><tr><td style="text-align:left;">define9</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项9</td></tr><tr><td style="text-align:left;">define10</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项10</td></tr><tr><td style="text-align:left;">define11</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项11</td></tr><tr><td style="text-align:left;">define12</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项12</td></tr><tr><td style="text-align:left;">define13</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项13</td></tr><tr><td style="text-align:left;">define14</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项14</td></tr><tr><td style="text-align:left;">define15</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项15</td></tr><tr><td style="text-align:left;">define16</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">自定义项16</td></tr><tr><td style="text-align:left;">ccontracttype</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">合同类型</td></tr><tr><td style="text-align:left;">ccontractid</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">合同号</td></tr><tr><td style="text-align:left;">iamount_s</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">数量</td></tr><tr><td style="text-align:left;">startflag</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">期初标志</td></tr><tr><td style="text-align:left;">mainid</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">主子表关联</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">款项类型</td></tr><tr><td style="text-align:left;">customercode</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">客商编码</td></tr><tr><td style="text-align:left;">originalamount</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">原币金额</td></tr><tr><td style="text-align:left;">amount</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">本币金额</td></tr><tr><td style="text-align:left;">itemcode</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">科目</td></tr><tr><td style="text-align:left;">projectclass</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">项目大类编号</td></tr><tr><td style="text-align:left;">project</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">项目编号</td></tr><tr><td style="text-align:left;">departmentcode</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">部门编码</td></tr><tr><td style="text-align:left;">personcode</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">职员编码</td></tr><tr><td style="text-align:left;">orderid</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">订单号</td></tr><tr><td style="text-align:left;">itemname</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">项目名称</td></tr><tr><td style="text-align:left;">ccontype</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">合同类型</td></tr><tr><td style="text-align:left;">cconid</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">合同号</td></tr><tr><td style="text-align:left;">iamt_s</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">数量</td></tr><tr><td style="text-align:left;">iramt_s</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">剩余数量</td></tr><tr><td style="text-align:left;">define22</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项1</td></tr><tr><td style="text-align:left;">define23</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项2</td></tr><tr><td style="text-align:left;">define24</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项3</td></tr><tr><td style="text-align:left;">define25</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项4</td></tr><tr><td style="text-align:left;">define26</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项5</td></tr><tr><td style="text-align:left;">define27</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项6</td></tr><tr><td style="text-align:left;">define28</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项7</td></tr><tr><td style="text-align:left;">define29</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项8</td></tr><tr><td style="text-align:left;">define30</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项9</td></tr><tr><td style="text-align:left;">define31</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项10</td></tr><tr><td style="text-align:left;">define32</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项11</td></tr><tr><td style="text-align:left;">define33</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项12</td></tr><tr><td style="text-align:left;">define34</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项13</td></tr><tr><td style="text-align:left;">define35</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项14</td></tr><tr><td style="text-align:left;">define36</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项15</td></tr><tr><td style="text-align:left;">define37</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">表体自定义项16</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>',8),c=t("div",{class:"language-json line-numbers-mode","data-ext":"json","data-title":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"accept"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
        `),t("span",{class:"token property"},'"vouchtype"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"48"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"vouchdate"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2015-01-01"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"period"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"01"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"customercode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"011501"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"balancecode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"201"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"oppositebankcode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"9879879656"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"foreigncurrency"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"人民币"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"currencyrate"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"1"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"amount"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2500"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"originalamount"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2500"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"operator"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"demo"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"flag"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"AR"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"oppositebankname"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"光大银行"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"entry"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
            `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token property"},'"customercode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"011501"'),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token property"},'"originalamount"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2500"'),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token property"},'"amount"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2500"'),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token property"},'"iamt_s"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token property"},'"iramt_s"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token property"},'"define22"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"123"'),e(`
        `),t("span",{class:"token punctuation"},"}"),e(`
    `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),p=t("div",{class:"language-json line-numbers-mode","data-ext":"json","data-title":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"errcode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"errmsg"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"tradeid"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"'),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1);function u(k,m){const d=i("Tabs");return g(),r("div",null,[o,y(d,{id:"1370",data:[{id:"请求"},{id:"响应"}]},{title0:l(({value:n,isActive:s})=>[e("请求")]),title1:l(({value:n,isActive:s})=>[e("响应")]),tab0:l(({value:n,isActive:s})=>[c]),tab1:l(({value:n,isActive:s})=>[p]),_:1})])}const h=a(x,[["render",u],["__file","accept.html.vue"]]);export{h as default};
