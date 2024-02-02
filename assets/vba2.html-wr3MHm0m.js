const t=JSON.parse('{"key":"v-6ed6fc77","path":"/tools/excel/vba2.html","title":"中位数统计","lang":"zh-CN","frontmatter":{"title":"中位数统计","date":"2023-06-19T00:00:00.000Z","dir.order":2,"order":2,"editLink":false,"footer":false,"isOriginal":true,"category":["工具箱"],"tag":["EXCEL"],"description":" 提示 统计学中的专有名词，是按顺序排列的一组数据中居于中间位置的数 模板 原始数据显示如下: 目测中位数统计结果应该如下: 宏命令 参数 赋值方法 统计数据 ","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/excel/vba2.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"中位数统计"}],["meta",{"property":"og:description","content":" 提示 统计学中的专有名词，是按顺序排列的一组数据中居于中间位置的数 模板 原始数据显示如下: 目测中位数统计结果应该如下: 宏命令 参数 赋值方法 统计数据 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-21T07:17:50.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"EXCEL"}],["meta",{"property":"article:published_time","content":"2023-06-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-21T07:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"中位数统计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-21T07:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"模板","slug":"模板","link":"#模板","children":[]},{"level":2,"title":"宏命令","slug":"宏命令","link":"#宏命令","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"赋值方法","slug":"赋值方法","link":"#赋值方法","children":[]},{"level":3,"title":"统计数据","slug":"统计数据","link":"#统计数据","children":[]}]}],"git":{"createdTime":1687159112000,"updatedTime":1689923870000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":3.24,"words":972},"filePathRelative":"tools/excel/vba2.md","localizedDate":"2023年6月19日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>统计学中的专有名词，是按顺序排列的一组数据中居于中间位置的数</p>\\n</div>\\n<h2>模板</h2>\\n<p>原始数据显示如下:</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">时间</th>\\n<th style=\\"text-align:left\\">...</th>\\n<th style=\\"text-align:left\\">数据1</th>\\n<th style=\\"text-align:left\\">数据2</th>\\n<th style=\\"text-align:left\\">数据3</th>\\n<th style=\\"text-align:left\\">数据4</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">01/01</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">9.31</td>\\n<td style=\\"text-align:left\\">620.41</td>\\n<td style=\\"text-align:left\\">8.97</td>\\n<td style=\\"text-align:left\\">1134.76</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">01/01</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">9.42</td>\\n<td style=\\"text-align:left\\">611.12</td>\\n<td style=\\"text-align:left\\">9.12</td>\\n<td style=\\"text-align:left\\">1214.11</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">01/01</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">9.34</td>\\n<td style=\\"text-align:left\\">600.42</td>\\n<td style=\\"text-align:left\\">8.99</td>\\n<td style=\\"text-align:left\\">1206.87</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">01/02</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">9.41</td>\\n<td style=\\"text-align:left\\">623.57</td>\\n<td style=\\"text-align:left\\">9.18</td>\\n<td style=\\"text-align:left\\">1138.21</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">01/02</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">9.43</td>\\n<td style=\\"text-align:left\\">623.57</td>\\n<td style=\\"text-align:left\\">9.05</td>\\n<td style=\\"text-align:left\\">1175.29</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">01/02</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">9.51</td>\\n<td style=\\"text-align:left\\">624.09</td>\\n<td style=\\"text-align:left\\">9.14</td>\\n<td style=\\"text-align:left\\">1165.84</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">01/02</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">9.42</td>\\n<td style=\\"text-align:left\\">611.12</td>\\n<td style=\\"text-align:left\\">9.11</td>\\n<td style=\\"text-align:left\\">1157.75</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
