import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as o,f,w as l,b as y,e,d as t}from"./app-f740d570.js";const g={},x=y('<figure><img src="https://nas.ilyl.life:8092/yonyou/capitalasserts.gif" alt="固定资产卡片" tabindex="0" loading="lazy"><figcaption>固定资产卡片</figcaption></figure><h2 id="资源符" tabindex="-1"><a class="header-anchor" href="#资源符" aria-hidden="true">#</a> 资源符</h2><p><code>capitalasserts</code></p><h2 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符" aria-hidden="true">#</a> 操作符</h2><p><code>create</code></p><h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">参数路径</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">assetno</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">资产编号</td></tr><tr><td style="text-align:left;">assetname</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">固定资产名称</td></tr><tr><td style="text-align:left;">typeno</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">类别编码</td></tr><tr><td style="text-align:left;">originalvalue</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">原值</td></tr><tr><td style="text-align:left;">startusedate</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">开始使用日期</td></tr><tr><td style="text-align:left;">currency</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">币种名称</td></tr><tr><td style="text-align:left;">foreigncurrencynumber</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">外币原值</td></tr><tr><td style="text-align:left;">exchangerate</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">汇率</td></tr><tr><td style="text-align:left;">worktotal</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">工作总量</td></tr><tr><td style="text-align:left;">workunit</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">工作量单位</td></tr><tr><td style="text-align:left;">accwork</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">累计工作量</td></tr><tr><td style="text-align:left;">accdepr</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">累计折旧</td></tr><tr><td style="text-align:left;">usedmonths</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">已使用月份</td></tr><tr><td style="text-align:left;">accountaddmannerno</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">增加方式编号</td></tr><tr><td style="text-align:left;">status</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">使用状况编号</td></tr><tr><td style="text-align:left;">depreciationmanner</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">折旧方法编号</td></tr><tr><td style="text-align:left;">life</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">可使用月份</td></tr><tr><td style="text-align:left;">netleftvalue</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">净残值</td></tr><tr><td style="text-align:left;">netleftvaluerate</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">净残值率</td></tr><tr><td style="text-align:left;">style</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">规格型号</td></tr><tr><td style="text-align:left;">buildingarea</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">建筑面积</td></tr><tr><td style="text-align:left;">buildingquantity</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">间(座)数</td></tr><tr><td style="text-align:left;">machinequantity</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">电机数量</td></tr><tr><td style="text-align:left;">machinewatt</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">电机功率</td></tr><tr><td style="text-align:left;">reservesite</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">存放地点</td></tr><tr><td style="text-align:left;">decvalue</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">减值准备金额</td></tr><tr><td style="text-align:left;">sgroupnum</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">资产组编码</td></tr><tr><td style="text-align:left;">addtax</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">增值税</td></tr><tr><td style="text-align:left;">skeeper</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">保管人</td></tr><tr><td style="text-align:left;">cVenCode</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">供应商编码</td></tr><tr><td style="text-align:left;">cVenName</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">供应商名称</td></tr><tr><td style="text-align:left;">dPurDate</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">采购日期</td></tr><tr><td style="text-align:left;">sSeriesNum</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">序列号</td></tr><tr><td style="text-align:left;">sCommodityCode</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">商品码</td></tr><tr><td style="text-align:left;">assetno</td><td style="text-align:left;">float</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">商品码</td></tr><tr><td style="text-align:left;">deptno</td><td style="text-align:left;">float</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">部门编号</td></tr><tr><td style="text-align:left;">deptscale</td><td style="text-align:left;">float</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">部门编号</td></tr><tr><td style="text-align:left;">depreciationitemno</td><td style="text-align:left;">float</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">部门编号</td></tr><tr><td style="text-align:left;">depreciationitemname</td><td style="text-align:left;">float</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">部门编号</td></tr><tr><td style="text-align:left;">relativeprojectno</td><td style="text-align:left;">float</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">部门编号</td></tr><tr><td style="text-align:left;">relativeprojectname</td><td style="text-align:left;">float</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">部门编号</td></tr><tr><td style="text-align:left;">relativecItemclsId</td><td style="text-align:left;">float</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">部门编号</td></tr><tr><td style="text-align:left;">sourceNum</td><td style="text-align:left;">float</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">部门编号</td></tr><tr><td style="text-align:left;">sourceScale</td><td style="text-align:left;">float</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">部门编号</td></tr><tr><td style="text-align:left;">ProScale</td><td style="text-align:left;">float</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">部门编号</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>',8),c=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"capitalasserts"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
        `),t("span",{class:"token property"},'"assetno"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"01200009"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"assetname"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"电脑"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"typeno"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"03"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"originalvalue"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"3000000"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"startusedate"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2014-01-01"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"currency"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"人民币"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"exchangerate"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"1"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"usedmonths"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"12"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"accountaddmannerno"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"102"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"status"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"1001"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"depreciationmanner"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"1"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"life"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"20"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"reservesite"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"一号厂区"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"skeeper"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"demo"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"entry"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
            `),t("span",{class:"token property"},'"assetno"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"01200009"'),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token property"},'"deptno"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"01"'),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token property"},'"deptscale"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"1"'),e(`
        `),t("span",{class:"token punctuation"},"}"),e(`
    `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),p=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"errcode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"errmsg"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"tradeid"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"'),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1);function u(k,m){const n=i("Tabs");return r(),o("div",null,[x,f(n,{id:"809",data:[{id:"新增"},{id:"响应"}]},{title0:l(({value:a,isActive:s})=>[e("新增")]),title1:l(({value:a,isActive:s})=>[e("响应")]),tab0:l(({value:a,isActive:s})=>[c]),tab1:l(({value:a,isActive:s})=>[p]),_:1})])}const h=d(g,[["render",u],["__file","capital-assets.html.vue"]]);export{h as default};
