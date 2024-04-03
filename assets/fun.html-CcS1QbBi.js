import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c as d,a as p,w as a,d as n,f as s,e as l}from"./app-HHul8k0w.js";const k={},u=n("p",null,"在基础的CRUD操作中，发现很多代码都是重复的，可能就是SQL语句的区别。",-1),v=n("h2",{id:"函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#函数"},[n("span",null,"函数")])],-1),y=n("p",null,[s("Visual Basic函数有两种形式，无返回值的"),n("code",null,"Sub"),s("和有返回值的"),n("code",null,"Function")],-1),b=n("div",{class:"language-vb line-numbers-mode","data-ext":"vb","data-title":"vb"},[n("pre",{class:"language-vb"},[n("code",null,[n("span",{class:"token keyword"},"Public"),s(),n("span",{class:"token keyword"},"Sub"),s(" Query"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`
`),n("span",{class:"token keyword"},"End"),s(),n("span",{class:"token keyword"},"Sub"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-vb line-numbers-mode","data-ext":"vb","data-title":"vb"},[n("pre",{class:"language-vb"},[n("code",null,[n("span",{class:"token keyword"},"Public"),s(),n("span",{class:"token keyword"},"Function"),s(" Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"Integer"),s(`
Add`),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`
Add`),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token keyword"},"End"),s(),n("span",{class:"token keyword"},"Function"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=l(`<p>将CRUD操作中的对数据库部分进行提取为<code>Function</code>函数，事件本身就是一个<code>Sub</code>函数</p><div class="language-vb line-numbers-mode" data-ext="vb" data-title="vb"><pre class="language-vb"><code><span class="token keyword">Public</span> <span class="token keyword">Function</span> CRUD<span class="token punctuation">(</span><span class="token keyword">ByVal</span> sSql <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Integer</span>
<span class="token keyword">Dim</span> conn <span class="token keyword">As</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Connection
<span class="token keyword">Dim</span> connString <span class="token keyword">As</span> <span class="token keyword">String</span>
<span class="token keyword">Dim</span> affected <span class="token keyword">As</span> <span class="token keyword">Integer</span>
CRUD <span class="token operator">=</span> <span class="token number">0</span>
connString <span class="token operator">=</span> <span class="token string">&quot;Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=...&quot;</span>
conn<span class="token punctuation">.</span>Open connString

conn<span class="token punctuation">.</span>Execute sSql<span class="token punctuation">,</span> CRUD

conn<span class="token punctuation">.</span>Close
<span class="token keyword">Set</span> conn <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类" tabindex="-1"><a class="header-anchor" href="#类"><span>类</span></a></h2><p>类配合属性使用，另外类中有两个事件<code>Class_Initialize</code>和<code>Class_Terminate</code>，使用时需要<code>New</code></p>`,4),g=n("div",{class:"language-vb line-numbers-mode","data-ext":"vb","data-title":"vb"},[n("pre",{class:"language-vb"},[n("code",null,[n("span",{class:"token keyword"},"Private"),s(" id "),n("span",{class:"token keyword"},"As"),s(),n("span",{class:"token keyword"},"Integer"),s(`

`),n("span",{class:"token keyword"},"Public"),s(),n("span",{class:"token keyword"},"Property"),s(),n("span",{class:"token keyword"},"Get"),s(" TestId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"As"),s(),n("span",{class:"token keyword"},"Integer"),s(`
    TestId `),n("span",{class:"token operator"},"="),s(` id
`),n("span",{class:"token keyword"},"End"),s(),n("span",{class:"token keyword"},"Property"),s(`

`),n("span",{class:"token keyword"},"Public"),s(),n("span",{class:"token keyword"},"Property"),s(),n("span",{class:"token keyword"},"Let"),s(" TestId"),n("span",{class:"token punctuation"},"("),s("vData "),n("span",{class:"token keyword"},"As"),s(),n("span",{class:"token keyword"},"Integer"),n("span",{class:"token punctuation"},")"),s(`
    id `),n("span",{class:"token operator"},"="),s(` vData
`),n("span",{class:"token keyword"},"End"),s(),n("span",{class:"token keyword"},"Property"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-vb line-numbers-mode","data-ext":"vb","data-title":"vb"},[n("pre",{class:"language-vb"},[n("code",null,[n("span",{class:"token keyword"},"Private"),s(" rest "),n("span",{class:"token keyword"},"As"),s(" ADODB"),n("span",{class:"token punctuation"},"."),s(`Recordset

`),n("span",{class:"token keyword"},"Public"),s(),n("span",{class:"token keyword"},"Property"),s(),n("span",{class:"token keyword"},"Get"),s(" TestRecordSet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"As"),s(" ADODB"),n("span",{class:"token punctuation"},"."),s(`Recordset
    `),n("span",{class:"token keyword"},"Set"),s(" TestRecordSet "),n("span",{class:"token operator"},"="),s(` rest
`),n("span",{class:"token keyword"},"End"),s(),n("span",{class:"token keyword"},"Property"),s(`

`),n("span",{class:"token keyword"},"Public"),s(),n("span",{class:"token keyword"},"Property"),s(),n("span",{class:"token keyword"},"Set"),s(" TestRecordSet"),n("span",{class:"token punctuation"},"("),s("vData "),n("span",{class:"token keyword"},"As"),s(" ADODB"),n("span",{class:"token punctuation"},"."),s("Recordset"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"Set"),s(" rest "),n("span",{class:"token operator"},"="),s(` vData
`),n("span",{class:"token keyword"},"End"),s(),n("span",{class:"token keyword"},"Property"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=l(`<p>完整的类定义如下：</p><div class="language-vb line-numbers-mode" data-ext="vb" data-title="vb"><pre class="language-vb"><code><span class="token keyword">Option</span> Explicit

<span class="token keyword">Private</span> content <span class="token keyword">As</span> <span class="token keyword">String</span>

<span class="token keyword">Private</span> rest <span class="token keyword">As</span> ADODB<span class="token punctuation">.</span>Recordset

<span class="token keyword">Public</span> <span class="token keyword">Property</span> <span class="token keyword">Get</span> TestContent<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">String</span>
    TestContent <span class="token operator">=</span> content
<span class="token keyword">End</span> <span class="token keyword">Property</span>

<span class="token keyword">Public</span> <span class="token keyword">Property</span> <span class="token keyword">Let</span> TestContent<span class="token punctuation">(</span>vData <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span>
    content <span class="token operator">=</span> vData
<span class="token keyword">End</span> <span class="token keyword">Property</span>

<span class="token keyword">Public</span> <span class="token keyword">Property</span> <span class="token keyword">Get</span> TestDescription<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">String</span>
TestDescription <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">If</span> <span class="token keyword">Not</span> rest <span class="token keyword">Is</span> <span class="token boolean">Nothing</span> <span class="token keyword">Then</span>
        <span class="token keyword">If</span> <span class="token keyword">Not</span> rest<span class="token punctuation">.</span>EOF <span class="token keyword">Then</span>
            TestDescription <span class="token operator">=</span> rest<span class="token operator">!</span>id <span class="token operator">&amp;</span> <span class="token string">&quot;  &quot;</span> <span class="token operator">&amp;</span> rest<span class="token operator">!</span>content
        <span class="token keyword">End</span> <span class="token keyword">If</span>
    <span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Property</span>

<span class="token keyword">Public</span> <span class="token keyword">Property</span> <span class="token keyword">Get</span> TestRecordSet<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> ADODB<span class="token punctuation">.</span>Recordset
    <span class="token keyword">Set</span> TestRecordSet <span class="token operator">=</span> rest
<span class="token keyword">End</span> <span class="token keyword">Property</span>

<span class="token keyword">Public</span> <span class="token keyword">Property</span> <span class="token keyword">Set</span> TestRecordSet<span class="token punctuation">(</span>vData <span class="token keyword">As</span> ADODB<span class="token punctuation">.</span>Recordset<span class="token punctuation">)</span>
    <span class="token keyword">Set</span> rest <span class="token operator">=</span> vData
<span class="token keyword">End</span> <span class="token keyword">Property</span>

<span class="token keyword">Private</span> <span class="token keyword">Sub</span> Class_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">If</span> rest <span class="token keyword">Is</span> <span class="token boolean">Nothing</span> <span class="token keyword">Then</span>
        <span class="token keyword">Set</span> rest <span class="token operator">=</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Recordset
    <span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>

<span class="token keyword">Private</span> <span class="token keyword">Sub</span> Class_Terminate<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">If</span> <span class="token keyword">Not</span> rest <span class="token keyword">Is</span> <span class="token boolean">Nothing</span> <span class="token keyword">Then</span>
        <span class="token keyword">If</span> rest<span class="token punctuation">.</span>State <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">Then</span> rest<span class="token punctuation">.</span>Close
        <span class="token keyword">Set</span> rest <span class="token operator">=</span> <span class="token boolean">Nothing</span>
    <span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询代码如下:</p><div class="language-vb line-numbers-mode" data-ext="vb" data-title="vb"><pre class="language-vb"><code><span class="token keyword">Dim</span> conn <span class="token keyword">As</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Connection
<span class="token keyword">Dim</span> connString <span class="token keyword">As</span> <span class="token keyword">String</span>
<span class="token keyword">Dim</span> sSql <span class="token keyword">As</span> <span class="token keyword">String</span>
<span class="token keyword">Dim</span> rest <span class="token keyword">As</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Recordset
<span class="token keyword">Dim</span> test <span class="token keyword">As</span> <span class="token keyword">New</span> testCls
connString <span class="token operator">=</span> <span class="token string">&quot;Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=sa;Password=...&quot;</span>
conn<span class="token punctuation">.</span>Open connString

sSql <span class="token operator">=</span> <span class="token string">&quot;select * from test&quot;</span>

<span class="token keyword">If</span> rest<span class="token punctuation">.</span>State <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">Then</span> rest<span class="token punctuation">.</span>Close
rest<span class="token punctuation">.</span>Open sSql<span class="token punctuation">,</span> conn<span class="token punctuation">,</span> adOpenStatic<span class="token punctuation">,</span> adLockReadOnly

<span class="token keyword">Set</span> test<span class="token punctuation">.</span>TestRecordSet <span class="token operator">=</span> rest

List1<span class="token punctuation">.</span>Clear

<span class="token keyword">Do</span> <span class="token keyword">While</span> <span class="token keyword">Not</span> test<span class="token punctuation">.</span>TestRecordSet<span class="token punctuation">.</span>EOF
    
    List1<span class="token punctuation">.</span>AddItem test<span class="token punctuation">.</span>TestDescription

    test<span class="token punctuation">.</span>TestRecordSet<span class="token punctuation">.</span>MoveNext
<span class="token keyword">Loop</span>

<span class="token keyword">Set</span> test <span class="token operator">=</span> <span class="token boolean">Nothing</span>

conn<span class="token punctuation">.</span>Close
<span class="token keyword">Set</span> conn <span class="token operator">=</span> <span class="token boolean">Nothing</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块"><span>模块</span></a></h2><p>模块与类相识，区别在于模块内的代码是全局变量。</p><p>一个数据库操作的全局模块</p><div class="language-vb line-numbers-mode" data-ext="vb" data-title="vb"><pre class="language-vb"><code><span class="token keyword">Option</span> Explicit

<span class="token keyword">Private</span> <span class="token keyword">Const</span> g_connString <span class="token keyword">As</span> <span class="token keyword">String</span> <span class="token operator">=</span> <span class="token string">&quot;Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=sa;Password=...&quot;</span>

<span class="token keyword">Private</span> g_conn <span class="token keyword">As</span> ADODB<span class="token punctuation">.</span>Connection

<span class="token keyword">Public</span> <span class="token keyword">Sub</span> ConnectDb<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">If</span> g_conn <span class="token keyword">Is</span> <span class="token boolean">Nothing</span> <span class="token keyword">Then</span>
    <span class="token keyword">Set</span> g_conn <span class="token operator">=</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Connection
<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">If</span> g_conn<span class="token punctuation">.</span>State <span class="token operator">&lt;</span><span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token keyword">Then</span>
    g_conn<span class="token punctuation">.</span>Open g_connString
<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>

<span class="token keyword">Public</span> <span class="token keyword">Sub</span> CloseDb<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">If</span> g_conn<span class="token punctuation">.</span>State <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">Then</span> g_conn<span class="token punctuation">.</span>Close
 <span class="token keyword">Set</span> g_conn <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>


<span class="token keyword">Public</span> <span class="token keyword">Function</span> G_CRUD<span class="token punctuation">(</span><span class="token keyword">ByVal</span> sSql <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Integer</span>
<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">GoTo</span> ErrHandler<span class="token punctuation">:</span>
<span class="token keyword">Dim</span> affected <span class="token keyword">As</span> <span class="token keyword">Integer</span>
G_CRUD <span class="token operator">=</span> <span class="token number">0</span>
ConnectDb
g_conn<span class="token punctuation">.</span>Execute sSql<span class="token punctuation">,</span> G_CRUD
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token keyword">Exit</span> <span class="token keyword">Function</span>
ErrHandler<span class="token punctuation">:</span>
    MsgBox VBA<span class="token punctuation">.</span>Err<span class="token punctuation">.</span>Description
    <span class="token keyword">GoTo</span> <span class="token keyword">finally</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>

<span class="token keyword">Public</span> <span class="token keyword">Function</span> G_Query<span class="token punctuation">(</span><span class="token keyword">ByVal</span> sSql <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> ADODB<span class="token punctuation">.</span>Recordset
<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">GoTo</span> ErrHandler<span class="token punctuation">:</span>
<span class="token keyword">Dim</span> rest <span class="token keyword">As</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Recordset
<span class="token keyword">If</span> rest<span class="token punctuation">.</span>State <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">Then</span> rest<span class="token punctuation">.</span>Close
ConnectDb
rest<span class="token punctuation">.</span>Open sSql<span class="token punctuation">,</span> g_conn<span class="token punctuation">,</span> adOpenStatic<span class="token punctuation">,</span> adLockReadOnly
<span class="token keyword">Set</span> G_Query <span class="token operator">=</span> rest
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token keyword">Exit</span> <span class="token keyword">Function</span>
ErrHandler<span class="token punctuation">:</span>
    MsgBox VBA<span class="token punctuation">.</span>Err<span class="token punctuation">.</span>Description
    <span class="token keyword">GoTo</span> <span class="token keyword">finally</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function h(A,_){const t=i("Tabs");return r(),d("div",null,[u,v,y,p(t,{id:"9",data:[{id:"Sub"},{id:"Function"}]},{title0:a(({value:e,isActive:o})=>[s("Sub")]),title1:a(({value:e,isActive:o})=>[s("Function")]),tab0:a(({value:e,isActive:o})=>[b]),tab1:a(({value:e,isActive:o})=>[w]),_:1}),m,p(t,{id:"27",data:[{id:"普通属性"},{id:"对象属性"}]},{title0:a(({value:e,isActive:o})=>[s("普通属性")]),title1:a(({value:e,isActive:o})=>[s("对象属性")]),tab0:a(({value:e,isActive:o})=>[g]),tab1:a(({value:e,isActive:o})=>[S]),_:1}),D])}const f=c(k,[["render",h],["__file","fun.html.vue"]]),T=JSON.parse('{"path":"/cs/vb/fun.html","title":"函数、类、模块","lang":"zh-CN","frontmatter":{"title":"函数、类、模块","date":"2023-06-25T00:00:00.000Z","dir.order":2,"order":2,"editLink":false,"footer":false,"category":["VB"],"description":"在基础的CRUD操作中，发现很多代码都是重复的，可能就是SQL语句的区别。 函数 Visual Basic函数有两种形式，无返回值的Sub和有返回值的Function 将CRUD操作中的对数据库部分进行提取为Function函数，事件本身就是一个Sub函数 类 类配合属性使用，另外类中有两个事件Class_Initialize和Class_Termin...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/vb/fun.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"函数、类、模块"}],["meta",{"property":"og:description","content":"在基础的CRUD操作中，发现很多代码都是重复的，可能就是SQL语句的区别。 函数 Visual Basic函数有两种形式，无返回值的Sub和有返回值的Function 将CRUD操作中的对数据库部分进行提取为Function函数，事件本身就是一个Sub函数 类 类配合属性使用，另外类中有两个事件Class_Initialize和Class_Termin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-25T08:31:28.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:published_time","content":"2023-06-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-25T08:31:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数、类、模块\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-25T08:31:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]},{"level":2,"title":"类","slug":"类","link":"#类","children":[]},{"level":2,"title":"模块","slug":"模块","link":"#模块","children":[]}],"git":{"createdTime":1687681888000,"updatedTime":1687681888000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":1}]},"readingTime":{"minutes":2.15,"words":646},"filePathRelative":"cs/vb/fun.md","localizedDate":"2023年6月25日","excerpt":"<p>在基础的CRUD操作中，发现很多代码都是重复的，可能就是SQL语句的区别。</p>\\n<h2>函数</h2>\\n<p>Visual Basic函数有两种形式，无返回值的<code>Sub</code>和有返回值的<code>Function</code></p>\\n\\n<p>将CRUD操作中的对数据库部分进行提取为<code>Function</code>函数，事件本身就是一个<code>Sub</code>函数</p>\\n<div class=\\"language-vb\\" data-ext=\\"vb\\" data-title=\\"vb\\"><pre class=\\"language-vb\\"><code><span class=\\"token keyword\\">Public</span> <span class=\\"token keyword\\">Function</span> CRUD<span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">ByVal</span> sSql <span class=\\"token keyword\\">As</span> <span class=\\"token keyword\\">String</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">As</span> <span class=\\"token keyword\\">Integer</span>\\n<span class=\\"token keyword\\">Dim</span> conn <span class=\\"token keyword\\">As</span> <span class=\\"token keyword\\">New</span> ADODB<span class=\\"token punctuation\\">.</span>Connection\\n<span class=\\"token keyword\\">Dim</span> connString <span class=\\"token keyword\\">As</span> <span class=\\"token keyword\\">String</span>\\n<span class=\\"token keyword\\">Dim</span> affected <span class=\\"token keyword\\">As</span> <span class=\\"token keyword\\">Integer</span>\\nCRUD <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\nconnString <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=...\\"</span>\\nconn<span class=\\"token punctuation\\">.</span>Open connString\\n\\nconn<span class=\\"token punctuation\\">.</span>Execute sSql<span class=\\"token punctuation\\">,</span> CRUD\\n\\nconn<span class=\\"token punctuation\\">.</span>Close\\n<span class=\\"token keyword\\">Set</span> conn <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">Nothing</span>\\n<span class=\\"token keyword\\">End</span> <span class=\\"token keyword\\">Function</span>\\n</code></pre></div>","autoDesc":true}');export{f as comp,T as data};
