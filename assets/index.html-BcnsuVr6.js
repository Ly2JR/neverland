import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as a,e as s}from"./app-BaXx2_6M.js";const t={},o=s(`<h2 id="npoi" tabindex="-1"><a class="header-anchor" href="#npoi"><span><a href="https://github.com/nissl-lab/npoi" target="_blank" rel="noopener noreferrer">NPOI</a></span></a></h2><p>这里有一些<a href="https://github.com/nissl-lab/npoi-examples" target="_blank" rel="noopener noreferrer">NPOI示例</a>。</p><h2 id="accessdatabaseengine" tabindex="-1"><a class="header-anchor" href="#accessdatabaseengine"><span><a href="https://www.microsoft.com/en-us/download/details.aspx?id=54920" target="_blank" rel="noopener noreferrer">AccessDataBaseEngine</a></span></a></h2><p>关于<a href="https://docs.microsoft.com/zh-cn/dotnet/framework/data/adonet/connection-string-syntax?redirectedfrom=MSDN" target="_blank" rel="noopener noreferrer">链接字符串</a></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>HDR=Yes 默认值，表示第一行是标题</p><p>IMES=0 写入</p><p>IMES=1 读取</p><p>IMES=2 并存</p></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">//xlxs</span>
<span class="token comment">//Provider=Microsoft.ACE.OLEDB.12.0;Data Source=&lt;excelPath&gt;;Extended Properties=&#39;Excel 12.0;HDR=YES;IMEX=1&#39;;</span>
<span class="token comment">//xls</span>
<span class="token comment">//Provider=Microsoft.ACE.OLEDB.4.0;Data Source=&lt;excelPath&gt;;Extended Properties=&#39;Excel 8.0;HDR=YES;IMEX=1&#39;</span>

<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> ConnString <span class="token operator">=</span> <span class="token string">&quot;Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\\\\demo.xlsx;Extended Properties=&#39;Excel 12.0;HDR=YES;IMEX=1&#39;&quot;</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">string</span></span> sSql <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM [Sheet1$]&quot;</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> sheet1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DataTable</span><span class="token punctuation">(</span><span class="token string">&quot;Sheet1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">OleDbConnection</span> conn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OleDbConnection</span><span class="token punctuation">(</span>ConnString<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    conn<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">OleDbDataAdapter</span> cmd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OleDbDataAdapter</span><span class="token punctuation">(</span>sSql<span class="token punctuation">,</span> conn<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cmd<span class="token punctuation">.</span><span class="token function">Fill</span><span class="token punctuation">(</span>sheet1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="open-xml" tabindex="-1"><a class="header-anchor" href="#open-xml"><span><a href="https://learn.microsoft.com/zh-cn/office/open-xml/open-xml-sdk" target="_blank" rel="noopener noreferrer">OPEN-XML</a></span></a></h2>`,8),p=[o];function c(l,i){return a(),e("div",null,p)}const u=n(t,[["render",c],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/tools/excel/","title":"读写操作","lang":"zh-CN","frontmatter":{"title":"读写操作","date":"2023-06-19T00:00:00.000Z","editLink":false,"footer":false,"isOriginal":true,"category":["工具箱"],"tag":["EXCEL"],"description":"NPOI 这里有一些NPOI示例。 AccessDataBaseEngine 关于链接字符串 提示 HDR=Yes 默认值，表示第一行是标题 IMES=0 写入 IMES=1 读取 IMES=2 并存 示例 OPEN-XML","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/excel/"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"读写操作"}],["meta",{"property":"og:description","content":"NPOI 这里有一些NPOI示例。 AccessDataBaseEngine 关于链接字符串 提示 HDR=Yes 默认值，表示第一行是标题 IMES=0 写入 IMES=1 读取 IMES=2 并存 示例 OPEN-XML"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-21T07:17:50.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"EXCEL"}],["meta",{"property":"article:published_time","content":"2023-06-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-21T07:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"读写操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-21T07:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:ly2@ilyl.life\\"}]}"]]},"headers":[{"level":2,"title":"NPOI","slug":"npoi","link":"#npoi","children":[]},{"level":2,"title":"AccessDataBaseEngine","slug":"accessdatabaseengine","link":"#accessdatabaseengine","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"OPEN-XML","slug":"open-xml","link":"#open-xml","children":[]}],"git":{"createdTime":1687159112000,"updatedTime":1689923870000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":4}]},"readingTime":{"minutes":0.55,"words":165},"filePathRelative":"tools/excel/README.md","localizedDate":"2023年6月19日","excerpt":"<h2><a class=\\"header-anchor\\" href=\\"#npoi\\"><span></span></a><a href=\\"https://github.com/nissl-lab/npoi\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">NPOI</a></h2>\\n<p>这里有一些<a href=\\"https://github.com/nissl-lab/npoi-examples\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">NPOI示例</a>。</p>\\n<h2><a class=\\"header-anchor\\" href=\\"#accessdatabaseengine\\"><span></span></a><a href=\\"https://www.microsoft.com/en-us/download/details.aspx?id=54920\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">AccessDataBaseEngine</a></h2>","autoDesc":true}');export{u as comp,m as data};
