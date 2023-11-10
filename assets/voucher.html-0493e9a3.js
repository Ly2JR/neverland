import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as o,b as c,w as n,f as p,e,a as t}from"./app-0a054e5b.js";const y={},g=p('<figure><img src="https://nas.ilyl.life:8092/yonyou/voucher.gif" alt="凭证" tabindex="0" loading="lazy"><figcaption>凭证</figcaption></figure><h2 id="资源符" tabindex="-1"><a class="header-anchor" href="#资源符" aria-hidden="true">#</a> 资源符</h2><p><code>voucher</code></p><h2 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符" aria-hidden="true">#</a> 操作符</h2><p><code>create</code></p><h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">参数路径</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">voucher_type</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">凭证类别</td></tr><tr><td style="text-align:left;">fiscal_year</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">凭证所属的会计年度，不填写取当前年</td></tr><tr><td style="text-align:left;">accounting_period</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">所属的会计期间，不填写取当前月份</td></tr><tr><td style="text-align:left;">voucher_id</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">凭证号</td></tr><tr><td style="text-align:left;">date</td><td style="text-align:left;">date</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">制单日期</td></tr><tr><td style="text-align:left;">enter</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">制单人名称</td></tr><tr><td style="text-align:left;">cashier</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">出纳名称</td></tr><tr><td style="text-align:left;">attachment_number</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">附单据数</td></tr><tr><td style="text-align:left;">voucher_making_system</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">外部系统类型</td></tr><tr><td style="text-align:left;">reserve2</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">外部凭证业务号</td></tr><tr><td style="text-align:left;">account_code</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">科目编码</td></tr><tr><td style="text-align:left;">abstract</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">摘要</td></tr><tr><td style="text-align:left;">currency</td><td style="text-align:left;">string</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">币种，默认人民币</td></tr><tr><td style="text-align:left;">unit_price</td><td style="text-align:left;">number</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">单价,在科目有数量核算时，填写此项</td></tr><tr><td style="text-align:left;">exchange_rate1</td><td style="text-align:left;">number</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">汇率1，主辅币核算时使用，NC用户使用</td></tr><tr><td style="text-align:left;">exchange_rate2</td><td style="text-align:left;">number</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">汇率2，折本汇率，U8用户使用</td></tr><tr><td style="text-align:left;">quantity</td><td style="text-align:left;">number</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">借方数量,在科目有数量核算时，填写此项</td></tr><tr><td style="text-align:left;">primary_amount</td><td style="text-align:left;">number</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">原币借方发生额</td></tr><tr><td style="text-align:left;">secondary_amount</td><td style="text-align:left;">number</td><td style="text-align:left;">entry</td><td style="text-align:left;">否</td><td style="text-align:left;">辅币借方发生额</td></tr><tr><td style="text-align:left;">natural_currency</td><td style="text-align:left;">number</td><td style="text-align:left;">entry</td><td style="text-align:left;">是</td><td style="text-align:left;">本币借方发生额*与本币贷方发生额不能同时为空</td></tr><tr><td style="text-align:left;">dept_id</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">部门</td></tr><tr><td style="text-align:left;">personnel_id</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">人员</td></tr><tr><td style="text-align:left;">cust_id</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">客户</td></tr><tr><td style="text-align:left;">supplier_id</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">供应商</td></tr><tr><td style="text-align:left;">item_class</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">项目大类</td></tr><tr><td style="text-align:left;">item_id</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">项目档案</td></tr><tr><td style="text-align:left;">operator</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">业务员</td></tr><tr><td style="text-align:left;">self_define1</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段1</td></tr><tr><td style="text-align:left;">self_define2</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段2</td></tr><tr><td style="text-align:left;">self_define3</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段3</td></tr><tr><td style="text-align:left;">self_define4</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段4</td></tr><tr><td style="text-align:left;">self_define5</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段5</td></tr><tr><td style="text-align:left;">self_define6</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段6</td></tr><tr><td style="text-align:left;">self_define7</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段7</td></tr><tr><td style="text-align:left;">self_define8</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段8</td></tr><tr><td style="text-align:left;">self_define9</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段9</td></tr><tr><td style="text-align:left;">self_define10</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段10</td></tr><tr><td style="text-align:left;">self_define11</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段11</td></tr><tr><td style="text-align:left;">self_define12</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段12</td></tr><tr><td style="text-align:left;">self_define13</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段13</td></tr><tr><td style="text-align:left;">self_define14</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段14</td></tr><tr><td style="text-align:left;">self_define15</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段15</td></tr><tr><td style="text-align:left;">self_define16</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/auxiliary</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段16</td></tr><tr><td style="text-align:left;">cexch_name</td><td style="text-align:left;">number</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">币种</td></tr><tr><td style="text-align:left;">RowGuid</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">行标识</td></tr><tr><td style="text-align:left;">iYPeriod</td><td style="text-align:left;">date</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">年期间</td></tr><tr><td style="text-align:left;">iyear</td><td style="text-align:left;">date</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">年</td></tr><tr><td style="text-align:left;">csign</td><td style="text-align:left;">number</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">凭证类别字</td></tr><tr><td style="text-align:left;">nd_s</td><td style="text-align:left;">number</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">数量借方</td></tr><tr><td style="text-align:left;">md_f</td><td style="text-align:left;">number</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">外币借方</td></tr><tr><td style="text-align:left;">ccode</td><td style="text-align:left;">number</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">科目编码</td></tr><tr><td style="text-align:left;">md</td><td style="text-align:left;">number</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">借方金额</td></tr><tr><td style="text-align:left;">cCashItem</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">现金项目</td></tr><tr><td style="text-align:left;">cash_item</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">现金项目</td></tr><tr><td style="text-align:left;">natural_currency</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">是</td><td style="text-align:left;">本币借方发生额*与本币贷方发生额不能同时为空</td></tr><tr><td style="text-align:left;">cdept_id</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">部门</td></tr><tr><td style="text-align:left;">cperson_id</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">人员</td></tr><tr><td style="text-align:left;">ccus_id</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">客户</td></tr><tr><td style="text-align:left;">csup_id</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">供应商</td></tr><tr><td style="text-align:left;">citem_class</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">项目大类</td></tr><tr><td style="text-align:left;">citem_id</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">项目档案</td></tr><tr><td style="text-align:left;">cDefine1</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段1</td></tr><tr><td style="text-align:left;">cDefine2</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段2</td></tr><tr><td style="text-align:left;">cDefine3</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段3</td></tr><tr><td style="text-align:left;">cDefine4</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段4</td></tr><tr><td style="text-align:left;">cDefine5</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段5</td></tr><tr><td style="text-align:left;">cDefine6</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段6</td></tr><tr><td style="text-align:left;">cDefine7</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段7</td></tr><tr><td style="text-align:left;">cDefine8</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段8</td></tr><tr><td style="text-align:left;">cDefine9</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段9</td></tr><tr><td style="text-align:left;">cDefine10</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段10</td></tr><tr><td style="text-align:left;">cDefine11</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段11</td></tr><tr><td style="text-align:left;">cDefine12</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段12</td></tr><tr><td style="text-align:left;">cDefine13</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段13</td></tr><tr><td style="text-align:left;">cDefine14</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段14</td></tr><tr><td style="text-align:left;">cDefine15</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段15</td></tr><tr><td style="text-align:left;">cDefine16</td><td style="text-align:left;">string</td><td style="text-align:left;">entry/cash_flow</td><td style="text-align:left;">否</td><td style="text-align:left;">自定义字段16</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>',8),f=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"voucher"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
        `),t("span",{class:"token property"},'"voucher_type"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"记"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"fiscal_year"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2015"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"accounting_period"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"1"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"voucher_id"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"999"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"attachment_number"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"date"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2015-01-31"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"enter"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"demo"'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"cashier"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"signature"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"checker"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"posting_date"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"posting_person"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"voucher_making_system"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"memo1"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"memo2"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"reserve1"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"reserve2"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"revokeflag"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
        `),t("span",{class:"token property"},'"entry"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),e(`
                `),t("span",{class:"token property"},'"entry_id"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"1"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"account_code"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"1131"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"abstract"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"其他应收单"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"primary_debit_amount"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"natural_debit_currency"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"600"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"credit_quantity"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"primary_credit_amount"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"natural_credit_currency"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),e(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token punctuation"},"{"),e(`
                `),t("span",{class:"token property"},'"entry_id"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"account_code"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"1001"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"abstract"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"交通费"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"exchange_rate2"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"debit_quantity"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"primary_debit_amount"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"natural_debit_currency"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"credit_quantity"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"primary_credit_amount"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"natural_credit_currency"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"400"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"cash_flow"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
                    `),t("span",{class:"token property"},'"cash_item"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"03"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"natural_debit_currency"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0.00"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"natural_credit_currency"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"400.00"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"cCashItem"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"03"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"md"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"mc"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"500"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"ccode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"1001"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"md_f"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"mc_f"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"nd_s"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"nc_s"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"dbill_date"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2015-01-31"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"csign"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"记"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"iyear"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2015"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"iYPeriod"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"201501"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token punctuation"},"}"),e(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
            `),t("span",{class:"token punctuation"},"{"),e(`
                `),t("span",{class:"token property"},'"entry_id"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"3"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"account_code"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"1001"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"abstract"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"交通费"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"exchange_rate2"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"debit_quantity"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"primary_debit_amount"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"natural_debit_currency"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"credit_quantity"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"primary_credit_amount"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"natural_credit_currency"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"200"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token property"},'"cash_flow"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
                    `),t("span",{class:"token property"},'"cash_item"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"03"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"natural_debit_currency"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0.00"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"natural_credit_currency"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"200.00"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"cCashItem"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"03"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"md"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"mc"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"100"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"ccode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"1001"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"md_f"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"mc_f"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"nd_s"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"nc_s"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"dbill_date"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2015-01-31"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"csign"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"记"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"iyear"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"2015"'),t("span",{class:"token punctuation"},","),e(`
                    `),t("span",{class:"token property"},'"iYPeriod"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"201501"'),t("span",{class:"token punctuation"},","),e(`
                `),t("span",{class:"token punctuation"},"}"),e(`
            `),t("span",{class:"token punctuation"},"}"),e(`
        `),t("span",{class:"token punctuation"},"]"),e(`
    `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),x=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"errcode"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"errmsg"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"tradeid"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"3eb76146-c94b-4b4b-87ef-40ac1087f9ba"'),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1);function u(k,m){const a=d("Tabs");return r(),o("div",null,[g,c(a,{id:"1353",data:[{id:"新增"},{id:"响应"}]},{title0:n(({value:s,isActive:l})=>[e("新增")]),title1:n(({value:s,isActive:l})=>[e("响应")]),tab0:n(({value:s,isActive:l})=>[f]),tab1:n(({value:s,isActive:l})=>[x]),_:1})])}const v=i(y,[["render",u],["__file","voucher.html.vue"]]);export{v as default};
