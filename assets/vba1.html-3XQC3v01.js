const t=JSON.parse('{"key":"v-6d2223d8","path":"/tools/excel/vba1.html","title":"考勤时间间隔统计","lang":"zh-CN","frontmatter":{"title":"考勤时间间隔统计","date":"2023-06-19T00:00:00.000Z","dir.order":1,"order":1,"editLink":false,"footer":false,"isOriginal":true,"category":["工具箱"],"tag":["EXCEL"],"description":"模板 需要统计出所有员工中午考勤情况，比如中午11:00:00~12:00:00作为午餐时间。 考勤统计显示内容如下: 宏命令 参数 额外数据结构 辅助方法 统计数据 显示数据 ","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/excel/vba1.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"考勤时间间隔统计"}],["meta",{"property":"og:description","content":"模板 需要统计出所有员工中午考勤情况，比如中午11:00:00~12:00:00作为午餐时间。 考勤统计显示内容如下: 宏命令 参数 额外数据结构 辅助方法 统计数据 显示数据 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-21T07:17:50.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"EXCEL"}],["meta",{"property":"article:published_time","content":"2023-06-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-21T07:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"考勤时间间隔统计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-21T07:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"模板","slug":"模板","link":"#模板","children":[]},{"level":2,"title":"宏命令","slug":"宏命令","link":"#宏命令","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"额外数据结构","slug":"额外数据结构","link":"#额外数据结构","children":[]},{"level":3,"title":"辅助方法","slug":"辅助方法","link":"#辅助方法","children":[]},{"level":3,"title":"统计数据","slug":"统计数据","link":"#统计数据","children":[]},{"level":3,"title":"显示数据","slug":"显示数据","link":"#显示数据","children":[]}]}],"git":{"createdTime":1687159112000,"updatedTime":1689923870000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":3.07,"words":921},"filePathRelative":"tools/excel/vba1.md","localizedDate":"2023年6月19日","excerpt":"<h2>模板</h2>\\n<p>需要统计出所有员工中午考勤情况，比如中午11:00:00~12:00:00作为午餐时间。</p>\\n<p>考勤统计显示内容如下:</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">工号</th>\\n<th style=\\"text-align:left\\">英文名</th>\\n<th style=\\"text-align:left\\">中文名</th>\\n<th style=\\"text-align:left\\">部门</th>\\n<th style=\\"text-align:left\\">职位</th>\\n<th style=\\"text-align:left\\">卡号</th>\\n<th style=\\"text-align:left\\">打卡时间</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">0001</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">王一</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">2021-08-01 06:00:12</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">0001</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">王一</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">2021-08-01 11:31:21</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">0001</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">王一</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">2021-08-01 11:57:40</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">0001</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">王一</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">2021-08-01 17:03:00</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">0001</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">王一</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">2021-08-01 17:55:51</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">0001</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">王一</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">2021-08-01 20:01:04</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n<td style=\\"text-align:left\\">...</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
