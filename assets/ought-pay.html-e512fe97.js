const t=JSON.parse('{"key":"v-35fe09b2","path":"/tools/yonyou/financial/ought-pay.html","title":"应付单","lang":"zh-CN","frontmatter":{"title":"应付单","date":"2023-06-19T00:00:00.000Z","editLink":false,"footer":false,"isOriginal":true,"category":["用友"],"tag":["U8+"],"description":"应付单 资源符 oughtpay 操作符 create 请求参数说明 参数 类型 参数路径 是否必填 描述 id string 否 子表关联项 vouchertype string 是 单据类型 code string 是 应收付单据号 relatevouchercode string 否 对应单据号 date string 是 单据日期 cust_vendor_code string 是 客商编号 deptcode string 是 部门编码 personcode string 是 职员编码 item_classcode string 否 项目大类编码 item_code string 否 项目编码 digest string 否 摘要 subjectcode string 否 科目编码 currency_name string 是 币种 currency_rate string 否 汇率 bdebitcredit string 否 借贷方向 natamount string 否 本币金额 amount string 否 原币金额 paycondition_code string 否 付款条件 operator string 是 操作员姓名 flag string 否 标志 quantity string 否 数量 define1 string 否 自定义字段1 define2 string 否 自定义字段2 define3 string 否 自定义字段3 define4 string 否 自定义字段4 define5 string 否 自定义字段5 define6 string 否 自定义字段6 define7 string 否 自定义字段7 define8 string 否 自定义字段8 define9 string 否 自定义字段9 define10 string 否 自定义字段10 define11 string 否 自定义字段11 define12 string 否 自定义字段12 define13 string 否 自定义字段13 define14 string 否 自定义字段14 define15 string 否 自定义字段15 define16 string 否 自定义字段16 startflag string 否 期初标志 headid string entry 否 主表关联项 cust_vendor_code string entry 否 客商编号 deptcode string entry 否 部门编码 personcode string entry 否 职员编码 item_classcode string entry 否 项目大类编码 item_code string entry 否 项目编码 digest string entry 否 摘要 subjectcode string entry 否 科目编码 currency_name string entry 否 币种 currency_rate string entry 否 汇率 bdebitcredit string entry 否 借贷方向 natamount string entry 否 本币金额 amount string entry 否 原币金额 define22 string entry 否 表体自定义项1 define23 string entry 否 表体自定义项2 define24 string entry 否 表体自定义项3 define25 string entry 否 表体自定义项4 define26 string entry 否 表体自定义项5 define27 string entry 否 表体自定义项6 define28 string entry 否 表体自定义项7 define29 string entry 否 表体自定义项8 define30 string entry 否 表体自定义项9 define31 string entry 否 表体自定义项10 define32 string entry 否 表体自定义项11 define33 string entry 否 表体自定义项12 define34 string entry 否 表体自定义项13 define35 string entry 否 表体自定义项14 define36 string entry 否 表体自定义项15 define37 string entry 否 表体自定义项16","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/yonyou/financial/ought-pay.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"应付单"}],["meta",{"property":"og:description","content":"应付单 资源符 oughtpay 操作符 create 请求参数说明 参数 类型 参数路径 是否必填 描述 id string 否 子表关联项 vouchertype string 是 单据类型 code string 是 应收付单据号 relatevouchercode string 否 对应单据号 date string 是 单据日期 cust_vendor_code string 是 客商编号 deptcode string 是 部门编码 personcode string 是 职员编码 item_classcode string 否 项目大类编码 item_code string 否 项目编码 digest string 否 摘要 subjectcode string 否 科目编码 currency_name string 是 币种 currency_rate string 否 汇率 bdebitcredit string 否 借贷方向 natamount string 否 本币金额 amount string 否 原币金额 paycondition_code string 否 付款条件 operator string 是 操作员姓名 flag string 否 标志 quantity string 否 数量 define1 string 否 自定义字段1 define2 string 否 自定义字段2 define3 string 否 自定义字段3 define4 string 否 自定义字段4 define5 string 否 自定义字段5 define6 string 否 自定义字段6 define7 string 否 自定义字段7 define8 string 否 自定义字段8 define9 string 否 自定义字段9 define10 string 否 自定义字段10 define11 string 否 自定义字段11 define12 string 否 自定义字段12 define13 string 否 自定义字段13 define14 string 否 自定义字段14 define15 string 否 自定义字段15 define16 string 否 自定义字段16 startflag string 否 期初标志 headid string entry 否 主表关联项 cust_vendor_code string entry 否 客商编号 deptcode string entry 否 部门编码 personcode string entry 否 职员编码 item_classcode string entry 否 项目大类编码 item_code string entry 否 项目编码 digest string entry 否 摘要 subjectcode string entry 否 科目编码 currency_name string entry 否 币种 currency_rate string entry 否 汇率 bdebitcredit string entry 否 借贷方向 natamount string entry 否 本币金额 amount string entry 否 原币金额 define22 string entry 否 表体自定义项1 define23 string entry 否 表体自定义项2 define24 string entry 否 表体自定义项3 define25 string entry 否 表体自定义项4 define26 string entry 否 表体自定义项5 define27 string entry 否 表体自定义项6 define28 string entry 否 表体自定义项7 define29 string entry 否 表体自定义项8 define30 string entry 否 表体自定义项9 define31 string entry 否 表体自定义项10 define32 string entry 否 表体自定义项11 define33 string entry 否 表体自定义项12 define34 string entry 否 表体自定义项13 define35 string entry 否 表体自定义项14 define36 string entry 否 表体自定义项15 define37 string entry 否 表体自定义项16"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-19T09:50:52.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"U8+"}],["meta",{"property":"article:published_time","content":"2023-06-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-19T09:50:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"应付单\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-19T09:50:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"资源符","slug":"资源符","link":"#资源符","children":[]},{"level":2,"title":"操作符","slug":"操作符","link":"#操作符","children":[]},{"level":2,"title":"请求参数说明","slug":"请求参数说明","link":"#请求参数说明","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1687168252000,"updatedTime":1687168252000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":1}]},"readingTime":{"minutes":2.34,"words":702},"filePathRelative":"tools/yonyou/financial/ought-pay.md","localizedDate":"2023年6月19日","excerpt":"<figure><img src=\\"https://nas.ilyl.life:8092/yonyou/oughtpay.gif\\" alt=\\"应付单\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>应付单</figcaption></figure>\\n<h2> 资源符</h2>\\n<p><code>oughtpay</code></p>\\n<h2> 操作符</h2>\\n<p><code>create</code></p>\\n<h2> 请求参数说明</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">参数</th>\\n<th style=\\"text-align:left\\">类型</th>\\n<th style=\\"text-align:left\\">参数路径</th>\\n<th style=\\"text-align:left\\">是否必填</th>\\n<th style=\\"text-align:left\\">描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">id</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">子表关联项</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">vouchertype</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">单据类型</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">code</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">应收付单据号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">relatevouchercode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">对应单据号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">date</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">单据日期</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cust_vendor_code</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">客商编号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">deptcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">部门编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">personcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">职员编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">item_classcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">项目大类编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">item_code</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">项目编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">digest</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">摘要</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">subjectcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">科目编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">currency_name</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">币种</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">currency_rate</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">汇率</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">bdebitcredit</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">借贷方向</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">natamount</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">本币金额</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">amount</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">原币金额</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">paycondition_code</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">付款条件</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">operator</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">是</td>\\n<td style=\\"text-align:left\\">操作员姓名</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">flag</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">标志</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">quantity</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">数量</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define1</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段1</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define2</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段2</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define3</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段3</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define4</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段4</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define5</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段5</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define6</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段6</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define7</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段7</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define8</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段8</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define9</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段9</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define10</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段10</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define11</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段11</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define12</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段12</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define13</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段13</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define14</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段14</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define15</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段15</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define16</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">自定义字段16</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">startflag</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\"></td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">期初标志</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">headid</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">主表关联项</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">cust_vendor_code</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">客商编号</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">deptcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">部门编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">personcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">职员编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">item_classcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">项目大类编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">item_code</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">项目编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">digest</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">摘要</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">subjectcode</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">科目编码</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">currency_name</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">币种</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">currency_rate</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">汇率</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">bdebitcredit</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">借贷方向</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">natamount</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">本币金额</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">amount</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">原币金额</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define22</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项1</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define23</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项2</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define24</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项3</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define25</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项4</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define26</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项5</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define27</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项6</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define28</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项7</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define29</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项8</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define30</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项9</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define31</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项10</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define32</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项11</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define33</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项12</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define34</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项13</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define35</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项14</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define36</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项15</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">define37</td>\\n<td style=\\"text-align:left\\">string</td>\\n<td style=\\"text-align:left\\">entry</td>\\n<td style=\\"text-align:left\\">否</td>\\n<td style=\\"text-align:left\\">表体自定义项16</td>\\n</tr>\\n</tbody>\\n</table>","copyright":{"author":"乌龙茶","license":"MIT"},"autoDesc":true}');export{t as data};
