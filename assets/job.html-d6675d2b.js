import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o,c as r,b as c,w as s,f as p,e,a as t}from"./app-0a054e5b.js";const g={},u=p('<figure><img src="https://nas.ilyl.life:8092/yonyou/job.gif" alt="职位档案" tabindex="0" loading="lazy"><figcaption>职位档案</figcaption></figure><h2 id="资源符" tabindex="-1"><a class="header-anchor" href="#资源符" aria-hidden="true">#</a> 资源符</h2><p><code>job</code></p><h2 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符" aria-hidden="true">#</a> 操作符</h2><p><code>create</code></p><h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">参数路径</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">jobcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">职位编码</td></tr><tr><td style="text-align:left;">jobname</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">职位名称</td></tr><tr><td style="text-align:left;">depcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">所属部门</td></tr><tr><td style="text-align:left;">suporior</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">直接上级</td></tr><tr><td style="text-align:left;">builddate</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">成立日期</td></tr><tr><td style="text-align:left;">abortdate</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">撤销日期</td></tr><tr><td style="text-align:left;">jobseries</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">职位序列</td></tr><tr><td style="text-align:left;">jobrank</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">职位等级</td></tr><tr><td style="text-align:left;">worksumm</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">工作概要</td></tr><tr><td style="text-align:left;">jobrankclasscode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">职级分类</td></tr><tr><td style="text-align:left;">jobrankbegin</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">职级范围起</td></tr><tr><td style="text-align:left;">jobrankend</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">职级范围止</td></tr><tr><td style="text-align:left;">jobgradebegin</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">职等范围起</td></tr><tr><td style="text-align:left;">jobgradeend</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">职等范围止</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>',8),y=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"job"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
        `),t("span",{class:"token property"},'"jobcode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"9901"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"jobname"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"测试"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"depcode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"99"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"suporior"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"builddate"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2015-12-01"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"abortdate"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"jobseries"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"C"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"jobrank"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"1"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"worksumm"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"jobrankclasscode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"01"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"jobrankbegin"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"M1"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"jobrankend"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"M1"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"jobgradebegin"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"4"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"jobgradeend"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"4"'),e(`
    `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),f=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"errcode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"errmsg"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"tradeid"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"'),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1);function k(x,b){const l=d("Tabs");return o(),r("div",null,[u,c(l,{id:"282",data:[{id:"新增"},{id:"响应"}]},{title0:s(({value:n,isActive:a})=>[e("新增")]),title1:s(({value:n,isActive:a})=>[e("响应")]),tab0:s(({value:n,isActive:a})=>[y]),tab1:s(({value:n,isActive:a})=>[f]),_:1})])}const v=i(g,[["render",k],["__file","job.html.vue"]]);export{v as default};
