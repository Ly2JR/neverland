const t=JSON.parse('{"key":"v-62f469ec","path":"/tools/yonyou/financial/voucher.html","title":"凭证","lang":"zh-CN","frontmatter":{"title":"凭证","date":"2023-06-19T00:00:00.000Z","editLink":false,"footer":false,"isOriginal":true,"category":["用友"],"tag":["U8+"],"description":"凭证凭证 资源符 voucher 操作符 create 参数说明 示例 ","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/yonyou/financial/voucher.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"凭证"}],["meta",{"property":"og:description","content":"凭证凭证 资源符 voucher 操作符 create 参数说明 示例 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://nas.ilyl.life:8092/yonyou/voucher.gif"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-19T09:50:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"凭证"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"U8+"}],["meta",{"property":"article:published_time","content":"2023-06-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-19T09:50:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"凭证\\",\\"image\\":[\\"https://nas.ilyl.life:8092/yonyou/voucher.gif\\"],\\"datePublished\\":\\"2023-06-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-19T09:50:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"资源符","slug":"资源符","link":"#资源符","children":[]},{"level":2,"title":"操作符","slug":"操作符","link":"#操作符","children":[]},{"level":2,"title":"参数说明","slug":"参数说明","link":"#参数说明","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1687168252000,"updatedTime":1687168252000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":1}]},"readingTime":{"minutes":3.3,"words":991},"filePathRelative":"tools/yonyou/financial/voucher.md","localizedDate":"2023年6月19日","excerpt":"<figure><img src=\\"https://nas.ilyl.life:8092/yonyou/voucher.gif\\" alt=\\"凭证\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>凭证</figcaption></figure>\\n<h2>资源符</h2>\\n<p><code>voucher</code></p>\\n<h2>操作符</h2>\\n<p><code>create</code></p>\\n<h2>参数说明</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">参数</th>\\n<th style=\\"text-align:left\\">类型</th>\\n<th style=\\"text-align:left\\">参数路径</th>\\n<th style=\\"text-align:left\\">是否必填</th>\\n<th style=\\"text-align:left\\">描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">voucher_type</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">凭证类别</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">fiscal_year</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">凭证所属的会计年度，不填写取当前年</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">accounting_period</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">所属的会计期间，不填写取当前月份</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">voucher_id</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">凭证号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">date</td>\\n<td style=\\"text-align:left\\">date</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">制单日期</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">enter</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">制单人名称</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cashier</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">出纳名称</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">attachment_number</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">附单据数</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">voucher_making_system</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">外部系统类型</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">reserve2</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">外部凭证业务号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">account_code</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">科目编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">abstract</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">摘要</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">currency</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">币种，默认人民币</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">unit_price</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">单价,在科目有数量核算时，填写此项</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">exchange_rate1</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">汇率1，主辅币核算时使用，NC用户使用</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">exchange_rate2</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">汇率2，折本汇率，U8用户使用</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">quantity</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">借方数量,在科目有数量核算时，填写此项</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">primary_amount</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">原币借方发生额</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">secondary_amount</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">辅币借方发生额</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">natural_currency</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">本币借方发生额*与本币贷方发生额不能同时为空</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">dept_id</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">部门</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">personnel_id</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">人员</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cust_id</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">客户</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">supplier_id</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">供应商</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">item_class</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">项目大类</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">item_id</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">项目档案</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">operator</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">业务员</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define1</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段1</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define2</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段2</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define3</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段3</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define4</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段4</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define5</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段5</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define6</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段6</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define7</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段7</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define8</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段8</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define9</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段9</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define10</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段10</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define11</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段11</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define12</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段12</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define13</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段13</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define14</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段14</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define15</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段15</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">self_define16</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/auxiliary</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段16</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cexch_name</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">币种</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">RowGuid</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">行标识</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">iYPeriod</td>\\n<td style=\\"text-align:left\\">date</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">年期间</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">iyear</td>\\n<td style=\\"text-align:left\\">date</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">年</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">csign</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">凭证类别字</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">nd_s</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">数量借方</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">md_f</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">外币借方</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">ccode</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">科目编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">md</td>\\n<td style=\\"text-align:left\\">number</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">借方金额</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cCashItem</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">现金项目</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cash_item</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">现金项目</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">natural_currency</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">本币借方发生额*与本币贷方发生额不能同时为空</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cdept_id</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">部门</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cperson_id</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">人员</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">ccus_id</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">客户</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">csup_id</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">供应商</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">citem_class</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">项目大类</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">citem_id</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">项目档案</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine1</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段1</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine2</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段2</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine3</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段3</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine4</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段4</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine5</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段5</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine6</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段6</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine7</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段7</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine8</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段8</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine9</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段9</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine10</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段10</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine11</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段11</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine12</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段12</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine13</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段13</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine14</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段14</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine15</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段15</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cDefine16</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry/cash_flow</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段16</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
