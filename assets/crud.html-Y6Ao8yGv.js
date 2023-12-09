import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,b as e}from"./app-rSeson_6.js";const t={},o=e(`<p>Visual Basic 对数据库操作，引用<code>Microsoft ActiveX Data Objects 2.6 Library</code>，两个对象<code>ADODB.Connection</code>和<code>ADODB.Recordset</code></p><h2 id="表结构" tabindex="-1"><a class="header-anchor" href="#表结构" aria-hidden="true">#</a> 表结构</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">Create</span> <span class="token keyword">table</span> Test
<span class="token punctuation">(</span>
  id <span class="token keyword">int</span> <span class="token keyword">identity</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  content nvarchar<span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="界面" tabindex="-1"><a class="header-anchor" href="#界面" aria-hidden="true">#</a> 界面</h2><figure><img src="https://nas.ilyl.life:8092/vb/vb1.png" alt="界面布局" width="420" height="200" tabindex="0" loading="lazy"><figcaption>界面布局</figcaption></figure><figure><img src="https://nas.ilyl.life:8092/vb/vb2.png" alt="引用Microsoft ActiveX Data Objects 2.6 Library" width="420" height="200" tabindex="0" loading="lazy"><figcaption>引用Microsoft ActiveX Data Objects 2.6 Library</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>新增、修改、删除代码差不多，区别在于sql语句部分</p></div><h3 id="新增" tabindex="-1"><a class="header-anchor" href="#新增" aria-hidden="true">#</a> 新增</h3><figure><img src="https://nas.ilyl.life:8092/vb/vb3.png" alt="代码" width="420" height="200" tabindex="0" loading="lazy"><figcaption>代码</figcaption></figure><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token keyword">Dim</span> conn <span class="token keyword">As</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Connection
<span class="token keyword">Dim</span> connString <span class="token keyword">as</span> <span class="token keyword">String</span>
<span class="token keyword">Dim</span> sSql <span class="token keyword">As</span> <span class="token keyword">String</span>
<span class="token keyword">Dim</span> affected <span class="token keyword">As</span> <span class="token keyword">Integer</span>
conn<span class="token punctuation">.</span>Open <span class="token string">&quot;Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=...&quot;</span>

sSql <span class="token operator">=</span> <span class="token string">&quot;Insert into Test(content) values(&#39;&quot;</span> <span class="token operator">&amp;</span> Text1<span class="token punctuation">.</span>Text <span class="token operator">&amp;</span> <span class="token string">&quot;&#39;)&quot;</span>
conn<span class="token punctuation">.</span>Execute sSql<span class="token punctuation">,</span> affected

conn<span class="token punctuation">.</span>Close
<span class="token keyword">Set</span> conn <span class="token operator">=</span> <span class="token boolean">Nothing</span>

MsgBox IIf<span class="token punctuation">(</span>affected <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;新增成功&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;新增失败&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://nas.ilyl.life:8092/vb/vb4.png" alt="结果" width="420" height="200" tabindex="0" loading="lazy"><figcaption>结果</figcaption></figure><h3 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h3><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Command2_Click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">Dim</span> conn <span class="token keyword">As</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Connection
<span class="token keyword">Dim</span> sSql <span class="token keyword">As</span> <span class="token keyword">String</span>
<span class="token keyword">Dim</span> affected <span class="token keyword">As</span> <span class="token keyword">Integer</span>
conn<span class="token punctuation">.</span>Open <span class="token string">&quot;Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=...&quot;</span>

sSql <span class="token operator">=</span> <span class="token string">&quot;update Test set content=&#39;&quot;</span> <span class="token operator">&amp;</span> Text1<span class="token punctuation">.</span>Text <span class="token operator">&amp;</span> <span class="token string">&quot;&#39; where id=1 &quot;</span>
conn<span class="token punctuation">.</span>Execute sSql<span class="token punctuation">,</span> affected

conn<span class="token punctuation">.</span>Close
<span class="token keyword">Set</span> conn <span class="token operator">=</span> <span class="token boolean">Nothing</span>

MsgBox IIf<span class="token punctuation">(</span>affected <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;修改成功&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;修改失败&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">End</span> <span class="token keyword">Sub</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token keyword">Dim</span> conn <span class="token keyword">As</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Connection
<span class="token keyword">Dim</span> sSql <span class="token keyword">As</span> <span class="token keyword">String</span>
<span class="token keyword">Dim</span> affected <span class="token keyword">As</span> <span class="token keyword">Integer</span>
conn<span class="token punctuation">.</span>Open <span class="token string">&quot;Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=...&quot;</span>

sSql <span class="token operator">=</span> <span class="token string">&quot;update Test set content=&#39;&quot;</span> <span class="token operator">&amp;</span> Text1<span class="token punctuation">.</span>Text <span class="token operator">&amp;</span> <span class="token string">&quot;&#39; where id=1 &quot;</span>
conn<span class="token punctuation">.</span>Execute sSql<span class="token punctuation">,</span> affected

conn<span class="token punctuation">.</span>Close
<span class="token keyword">Set</span> conn <span class="token operator">=</span> <span class="token boolean">Nothing</span>

MsgBox IIf<span class="token punctuation">(</span>affected <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;修改成功&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;修改失败&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h3><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token keyword">Dim</span> conn <span class="token keyword">As</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Connection
<span class="token keyword">Dim</span> connString <span class="token keyword">As</span> <span class="token keyword">String</span>
<span class="token keyword">Dim</span> sSql <span class="token keyword">As</span> <span class="token keyword">String</span>
<span class="token keyword">Dim</span> rest <span class="token keyword">As</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Recordset

connString <span class="token operator">=</span> <span class="token string">&quot;Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=...&quot;</span>
conn<span class="token punctuation">.</span>Open connString

sSql <span class="token operator">=</span> <span class="token string">&quot;select * from test&quot;</span>

<span class="token keyword">If</span> rest<span class="token punctuation">.</span>State <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">Then</span> rest<span class="token punctuation">.</span>Close
rest<span class="token punctuation">.</span>Open sSql<span class="token punctuation">,</span> conn<span class="token punctuation">,</span> adOpenStatic<span class="token punctuation">,</span> adLockReadOnly

List1<span class="token punctuation">.</span>Clear

<span class="token keyword">Do</span> <span class="token keyword">While</span> <span class="token keyword">Not</span> rest<span class="token punctuation">.</span>EOF
    
    List1<span class="token punctuation">.</span>AddItem rest<span class="token operator">!</span>content

    rest<span class="token punctuation">.</span>MoveNext
<span class="token keyword">Loop</span>

rest<span class="token punctuation">.</span>Close
<span class="token keyword">Set</span> rest <span class="token operator">=</span> <span class="token boolean">Nothing</span>

conn<span class="token punctuation">.</span>Close
<span class="token keyword">Set</span> conn <span class="token operator">=</span> <span class="token boolean">Nothing</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),i=[o];function p(c,l){return s(),a("div",null,i)}const u=n(t,[["render",p],["__file","crud.html.vue"]]);export{u as default};
