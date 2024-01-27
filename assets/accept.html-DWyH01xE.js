const t=JSON.parse('{"key":"v-15fdd1b0","path":"/tools/yonyou/financial/accept.html","title":"收款单","lang":"zh-CN","frontmatter":{"title":"收款单","date":"2023-06-19T00:00:00.000Z","editLink":false,"footer":false,"isOriginal":true,"category":["用友"],"tag":["U8+"],"description":"收款单 资源符 accept 操作符 create 参数说明 参数 类型 参数路径 是否必填 描述 vouchtype string 是 单据类型 vouchcode string 是 单据编号 vouchdate string 是 单据日期 period string 是 期间 customercode string 是 客商编码 departmentcode string 是 部门编码 personcode string 是 职员编码 itemclasscode string 是 项目大类编号 itemcode string 是 项目编码 itemname string 是 项目名称 orderid string 是 订单号 balancecode string 是 结算方式 notecode string 是 应收应付票据编号 digest string 否 摘要 oppositebankcode string 否 银行帐号 foreigncurrency string 是 币种 currencyrate string 否 汇率 amount string 否 本币金额 originalamount string 否 原币金额 operator string 是 录入人 balanceitemcode string 否 科目编码(结算科目) flag string 否 应收应付标志 sitemcode string 否 结算项目 oppositebankname string 否 对方单位银行名称 bankname string 否 本单位银行名称 bankaccount string 否 本单位银行账号 define1 string 否 自定义项1 define2 string 否 自定义项2 define3 string 否 自定义项3 define4 string 否 自定义项4 define5 string 否 自定义项5 define6 string 否 自定义项6 define7 string 否 自定义项7 define8 string 否 自定义项8 define9 string 否 自定义项9 define10 string 否 自定义项10 define11 string 否 自定义项11 define12 string 否 自定义项12 define13 string 否 自定义项13 define14 string 否 自定义项14 define15 string 否 自定义项15 define16 string 否 自定义项16 ccontracttype string 否 合同类型 ccontractid string 否 合同号 iamount_s string 否 数量 startflag string 否 期初标志 mainid string entry 否 主子表关联 type string entry 否 款项类型 customercode string entry 否 客商编码 originalamount string entry 否 原币金额 amount string entry 否 本币金额 itemcode string entry 否 科目 projectclass string entry 否 项目大类编号 project string entry 否 项目编号 departmentcode string entry 否 部门编码 personcode string entry 否 职员编码 orderid string entry 否 订单号 itemname string entry 否 项目名称 ccontype string entry 否 合同类型 cconid string entry 否 合同号 iamt_s string entry 否 数量 iramt_s string entry 否 剩余数量 define22 string entry 否 表体自定义项1 define23 string entry 否 表体自定义项2 define24 string entry 否 表体自定义项3 define25 string entry 否 表体自定义项4 define26 string entry 否 表体自定义项5 define27 string entry 否 表体自定义项6 define28 string entry 否 表体自定义项7 define29 string entry 否 表体自定义项8 define30 string entry 否 表体自定义项9 define31 string entry 否 表体自定义项10 define32 string entry 否 表体自定义项11 define33 string entry 否 表体自定义项12 define34 string entry 否 表体自定义项13 define35 string entry 否 表体自定义项14 define36 string entry 否 表体自定义项15 define37 string entry 否 表体自定义项16","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/yonyou/financial/accept.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"收款单"}],["meta",{"property":"og:description","content":"收款单 资源符 accept 操作符 create 参数说明 参数 类型 参数路径 是否必填 描述 vouchtype string 是 单据类型 vouchcode string 是 单据编号 vouchdate string 是 单据日期 period string 是 期间 customercode string 是 客商编码 departmentcode string 是 部门编码 personcode string 是 职员编码 itemclasscode string 是 项目大类编号 itemcode string 是 项目编码 itemname string 是 项目名称 orderid string 是 订单号 balancecode string 是 结算方式 notecode string 是 应收应付票据编号 digest string 否 摘要 oppositebankcode string 否 银行帐号 foreigncurrency string 是 币种 currencyrate string 否 汇率 amount string 否 本币金额 originalamount string 否 原币金额 operator string 是 录入人 balanceitemcode string 否 科目编码(结算科目) flag string 否 应收应付标志 sitemcode string 否 结算项目 oppositebankname string 否 对方单位银行名称 bankname string 否 本单位银行名称 bankaccount string 否 本单位银行账号 define1 string 否 自定义项1 define2 string 否 自定义项2 define3 string 否 自定义项3 define4 string 否 自定义项4 define5 string 否 自定义项5 define6 string 否 自定义项6 define7 string 否 自定义项7 define8 string 否 自定义项8 define9 string 否 自定义项9 define10 string 否 自定义项10 define11 string 否 自定义项11 define12 string 否 自定义项12 define13 string 否 自定义项13 define14 string 否 自定义项14 define15 string 否 自定义项15 define16 string 否 自定义项16 ccontracttype string 否 合同类型 ccontractid string 否 合同号 iamount_s string 否 数量 startflag string 否 期初标志 mainid string entry 否 主子表关联 type string entry 否 款项类型 customercode string entry 否 客商编码 originalamount string entry 否 原币金额 amount string entry 否 本币金额 itemcode string entry 否 科目 projectclass string entry 否 项目大类编号 project string entry 否 项目编号 departmentcode string entry 否 部门编码 personcode string entry 否 职员编码 orderid string entry 否 订单号 itemname string entry 否 项目名称 ccontype string entry 否 合同类型 cconid string entry 否 合同号 iamt_s string entry 否 数量 iramt_s string entry 否 剩余数量 define22 string entry 否 表体自定义项1 define23 string entry 否 表体自定义项2 define24 string entry 否 表体自定义项3 define25 string entry 否 表体自定义项4 define26 string entry 否 表体自定义项5 define27 string entry 否 表体自定义项6 define28 string entry 否 表体自定义项7 define29 string entry 否 表体自定义项8 define30 string entry 否 表体自定义项9 define31 string entry 否 表体自定义项10 define32 string entry 否 表体自定义项11 define33 string entry 否 表体自定义项12 define34 string entry 否 表体自定义项13 define35 string entry 否 表体自定义项14 define36 string entry 否 表体自定义项15 define37 string entry 否 表体自定义项16"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-19T09:50:52.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"U8+"}],["meta",{"property":"article:published_time","content":"2023-06-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-19T09:50:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"收款单\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-19T09:50:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"资源符","slug":"资源符","link":"#资源符","children":[]},{"level":2,"title":"操作符","slug":"操作符","link":"#操作符","children":[]},{"level":2,"title":"参数说明","slug":"参数说明","link":"#参数说明","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1687168252000,"updatedTime":1687168252000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":1}]},"readingTime":{"minutes":2.56,"words":769},"filePathRelative":"tools/yonyou/financial/accept.md","localizedDate":"2023年6月19日","excerpt":"<figure><img src=\\"https://nas.ilyl.life:8092/yonyou/accept.gif\\" alt=\\"收款单\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>收款单</figcaption></figure>\\n<h2>资源符</h2>\\n<p><code>accept</code></p>\\n<h2>操作符</h2>\\n<p><code>create</code></p>\\n<h2>参数说明</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">参数</th>\\n<th style=\\"text-align:left\\">类型</th>\\n<th style=\\"text-align:left\\">参数路径</th>\\n<th style=\\"text-align:left\\">是否必填</th>\\n<th style=\\"text-align:left\\">描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">vouchtype</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">单据类型</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">vouchcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">单据编号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">vouchdate</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">单据日期</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">period</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">期间</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">customercode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">客商编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">departmentcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">部门编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">personcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">职员编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">itemclasscode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">项目大类编号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">itemcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">项目编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">itemname</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">项目名称</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">orderid</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">订单号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">balancecode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">结算方式</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">notecode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">应收应付票据编号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">digest</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">摘要</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">oppositebankcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">银行帐号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">foreigncurrency</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">币种</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">currencyrate</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">汇率</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">amount</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">本币金额</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">originalamount</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">原币金额</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">operator</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">录入人</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">balanceitemcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">科目编码(结算科目)</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">flag</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">应收应付标志</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">sitemcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">结算项目</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">oppositebankname</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">对方单位银行名称</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">bankname</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">本单位银行名称</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">bankaccount</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">本单位银行账号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define1</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项1</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define2</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项2</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define3</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项3</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define4</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项4</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define5</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项5</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define6</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项6</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define7</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项7</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define8</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项8</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define9</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项9</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define10</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项10</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define11</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项11</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define12</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项12</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define13</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项13</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define14</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项14</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define15</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项15</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define16</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义项16</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">ccontracttype</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">合同类型</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">ccontractid</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">合同号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">iamount_s</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">数量</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">startflag</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">期初标志</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">mainid</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">主子表关联</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">type</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">款项类型</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">customercode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">客商编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">originalamount</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">原币金额</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">amount</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">本币金额</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">itemcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">科目</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">projectclass</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">项目大类编号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">project</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">项目编号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">departmentcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">部门编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">personcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">职员编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">orderid</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">订单号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">itemname</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">项目名称</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">ccontype</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">合同类型</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cconid</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">合同号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">iamt_s</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">数量</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">iramt_s</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">剩余数量</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define22</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项1</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define23</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项2</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define24</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项3</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define25</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项4</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define26</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项5</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define27</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项6</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define28</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项7</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define29</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项8</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define30</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项9</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define31</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项10</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define32</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项11</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define33</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项12</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define34</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项13</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define35</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项14</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define36</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项15</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define37</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项16</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
