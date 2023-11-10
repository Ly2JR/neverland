import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as g,b as f,w as l,f as o,e,a as t}from"./app-0a054e5b.js";const y={},x=o('<figure><img src="https://nas.ilyl.life:8092/yonyou/department.gif" alt="部门档案" tabindex="0" loading="lazy"><figcaption>部门档案</figcaption></figure><h2 id="资源符" tabindex="-1"><a class="header-anchor" href="#资源符" aria-hidden="true">#</a> 资源符</h2><p><code>department</code></p><h2 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符" aria-hidden="true">#</a> 操作符</h2><p><code>create</code></p><h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">参数路径</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">code</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">部门编码</td></tr><tr><td style="text-align:left;">endflag</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">是否末级</td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">部门名称</td></tr><tr><td style="text-align:left;">cdepnameen</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">英文名称</td></tr><tr><td style="text-align:left;">cdepleader</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">分管领导</td></tr><tr><td style="text-align:left;">rank</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">编码级次</td></tr><tr><td style="text-align:left;">manager</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">负责人</td></tr><tr><td style="text-align:left;">prop</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">部门属性</td></tr><tr><td style="text-align:left;">phone</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">电话</td></tr><tr><td style="text-align:left;">address</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">地址</td></tr><tr><td style="text-align:left;">remark</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">备注</td></tr><tr><td style="text-align:left;">creditline</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">信用额度</td></tr><tr><td style="text-align:left;">creditgrade</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">信用等级</td></tr><tr><td style="text-align:left;">creditdate</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">信用天数</td></tr><tr><td style="text-align:left;">ddepbegindate</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">成立日期</td></tr><tr><td style="text-align:left;">ddependdate</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">撤销日期</td></tr><tr><td style="text-align:left;">vauthorizedoc</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">批准文号</td></tr><tr><td style="text-align:left;">vauthorizeunit</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">批准单位</td></tr><tr><td style="text-align:left;">cdepfax</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">传真</td></tr><tr><td style="text-align:left;">cdeppostcode</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">邮政编码</td></tr><tr><td style="text-align:left;">cdepemail</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">电子邮件</td></tr><tr><td style="text-align:left;">cdeptype</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">部门类型</td></tr><tr><td style="text-align:left;">bim</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">是否启用UTU</td></tr><tr><td style="text-align:left;">bretail</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">适用零售</td></tr><tr><td style="text-align:left;">cdepnameen</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">英文名称</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>',8),c=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"department"'),t("span",{class:"token operator"},":"),t("span",{class:"token punctuation"},"{"),e(`
        `),t("span",{class:"token property"},'"code"'),t("span",{class:"token operator"},":"),t("span",{class:"token string"},'"99"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),t("span",{class:"token string"},'"测试"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"rank"'),t("span",{class:"token operator"},":"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"endflag"'),t("span",{class:"token operator"},":"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"ddepbegindate"'),t("span",{class:"token operator"},":"),t("span",{class:"token string"},'"2015-12-01"'),e(`
    `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),p=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"errcode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"errmsg"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"tradeid"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"'),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1);function u(h,m){const a=i("Tabs");return r(),g("div",null,[x,f(a,{id:"469",data:[{id:"新增"},{id:"响应"}]},{title0:l(({value:n,isActive:s})=>[e("新增")]),title1:l(({value:n,isActive:s})=>[e("响应")]),tab0:l(({value:n,isActive:s})=>[c]),tab1:l(({value:n,isActive:s})=>[p]),_:1})])}const v=d(y,[["render",u],["__file","department.html.vue"]]);export{v as default};
