import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,b as e}from"./app-j311YtHJ.js";const p={},i=e(`<p>类型<code>&amp;</code>,将值类型改为引用类型。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int a[] = { 1,2,3,4 };
int* b = a;
int&amp; c = a[0];
(&amp;c)[1] = 4;
copy(a, a + 4, ostream_iterator&lt;int&gt;(cout,&quot; &quot;));
cout &lt;&lt; endl;
int* d = &amp;a[2];
*(d+1) = 8;
copy(a, a + 4, ostream_iterator&lt;int&gt;(cout,&quot; &quot;));
cout &lt;&lt; endl;

//输出
1 4 3 4
1 4 6 8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过即时窗体发现</p><ol><li>数组变量a本身是个指针， 数组变量a可以直接赋值给指针变量e</li><li>数组变量a的指针为首地址，与变量a[0]的取地址一致。即数组a的值为a[0]的值</li><li>引用变量b的值等于数组a对应的下标元素,取地址等于数组a对应的下标的存储地址</li><li>数组是连续的地址，通过地址偏移获取值</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a
0x0000000722b5f5c8 <span class="token punctuation">{</span><span class="token number">1</span>, <span class="token number">4</span>, <span class="token number">3</span>, <span class="token number">8</span><span class="token punctuation">}</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>: <span class="token number">1</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: <span class="token number">4</span>
    <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: <span class="token number">3</span>
    <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>: <span class="token number">8</span>
*a
<span class="token number">1</span>
<span class="token operator">&amp;</span>a
0x0000000722b5f5c8 <span class="token punctuation">{</span><span class="token number">1</span>, <span class="token number">4</span>, <span class="token number">3</span>, <span class="token number">8</span><span class="token punctuation">}</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>: <span class="token number">1</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: <span class="token number">4</span>
    <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: <span class="token number">3</span>
    <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>: <span class="token number">8</span>
<span class="token operator">&amp;</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
0x0000000722b5f5c8 <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
b
0x0000000722b5f5c8 <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
*b
<span class="token number">1</span>
<span class="token operator">&amp;</span>b
0x0000000722b5f5f8 <span class="token punctuation">{</span>0x0000000722b5f5c8 <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
c
<span class="token number">1</span>
<span class="token operator">&amp;</span>c
0x0000000722b5f5c8 <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
*c
<span class="token string">&quot;*&quot;</span> 的操作数必须是指针，但它具有类型 <span class="token string">&quot;int&quot;</span>
d
0x0000000722b5f5d0 <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>
*d
<span class="token number">3</span>
<span class="token operator">&amp;</span>d
0x0000000722b5f638 <span class="token punctuation">{</span>0x0000000722b5f5d0 <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[i];function l(c,u){return s(),a("div",null,t)}const r=n(p,[["render",l],["__file","array.html.vue"]]);export{r as default};
