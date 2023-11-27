import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as t,c as i,d as s,e as n,f as c,w as o,b as d}from"./app-NRS92Mcx.js";const u={},p=s("code",null,"普通类型",-1),r=s("code",null,"指针类型(*)",-1),v=d(`<p><code>&amp;</code>取地址，标明不显示直接值，而是显示该值下的存储地址值。 <code>*</code>指针，存储的是计算机地址。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int a = 123;
int&amp; b = a;
int* c = &amp;b;
*c = 456;
cout &lt;&lt;&quot;a:&quot; &lt;&lt; a &lt;&lt;&quot; 引用b：&quot; &lt;&lt; b &lt;&lt; &quot; 指针c: &quot; &lt;&lt;*c&lt;&lt; endl;
a = 789;
cout &lt;&lt; &quot;a:&quot; &lt;&lt; a &lt;&lt; &quot; 引用b：&quot; &lt;&lt; b &lt;&lt; &quot; 指针c: &quot; &lt;&lt; *c &lt;&lt; endl;

//输出
a:456 引用b：456 指针c: 456
a:789 引用b：789 指针c: 789
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过即时窗体发现</p><ol><li>整型变量a的值是数值本身</li><li><code>&amp;</code>a的值是变量a数值的存储地址</li><li><code>引用类型</code>b与a的值和存储地址都相同</li><li><code>指针类型</code>c的值是变量a的存储地址</li><li><code>*</code>c的值是变量a的实际数值</li><li><code>&amp;</code>c的值是变量c的存储地址</li></ol><p>可见，值分两种，一种是编程人员直观的显示值，另外一种是计算机进行管理该值的地址值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a
<span class="token number">456</span>
<span class="token operator">&amp;</span>a
0x000000114fcff734 <span class="token punctuation">{</span><span class="token number">456</span><span class="token punctuation">}</span>
*a
<span class="token string">&quot;*&quot;</span> 的操作数必须是指针，但它具有类型 <span class="token string">&quot;int&quot;</span>
b
<span class="token number">456</span>
<span class="token operator">&amp;</span>b
0x000000114fcff734 <span class="token punctuation">{</span><span class="token number">456</span><span class="token punctuation">}</span>
<span class="token operator">&amp;</span>b
<span class="token string">&quot;*&quot;</span> 的操作数必须是指针，但它具有类型 <span class="token string">&quot;int&quot;</span>
c
0x000000114fcff734 <span class="token punctuation">{</span><span class="token number">456</span><span class="token punctuation">}</span>
*c
<span class="token number">456</span>
<span class="token operator">&amp;</span>c
0x000000114fcff778 <span class="token punctuation">{</span>0x000000114fcff734 <span class="token punctuation">{</span><span class="token number">456</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(b,k){const a=l("RouterLink");return t(),i("div",null,[s("p",null,[p,n("、"),c(a,{to:"/cs/cpp/ref.html"},{default:o(()=>[n("引用类型(&)")]),_:1}),n("、"),r,n("的区别。")]),v])}const q=e(u,[["render",m],["__file","variable.html.vue"]]);export{q as default};
