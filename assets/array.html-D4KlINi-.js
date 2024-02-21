import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e}from"./app-BcU9nIwd.js";const t={},i=e(`<p>类型<code>&amp;</code>,将值类型改为引用类型。</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int a[] = { 1,2,3,4 };
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过即时窗体发现</p><ol><li>数组变量a本身是个指针， 数组变量a可以直接赋值给指针变量e</li><li>数组变量a的指针为首地址，与变量a[0]的取地址一致。即数组a的值为a[0]的值</li><li>引用变量b的值等于数组a对应的下标元素,取地址等于数组a对应的下标的存储地址</li><li>数组是连续的地址，通过地址偏移获取值</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>a
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[i];function c(l,o){return a(),s("div",null,p)}const d=n(t,[["render",c],["__file","array.html.vue"]]),m=JSON.parse('{"path":"/cs/cpp/array.html","title":"数组","lang":"zh-CN","frontmatter":{"title":"数组","date":"2023-06-05T00:00:00.000Z","dir.order":3,"order":3,"editLink":false,"footer":false,"isOriginal":true,"category":["C++"],"tag":["C++"],"description":"类型&,将值类型改为引用类型。 通过即时窗体发现 数组变量a本身是个指针， 数组变量a可以直接赋值给指针变量e 数组变量a的指针为首地址，与变量a[0]的取地址一致。即数组a的值为a[0]的值 引用变量b的值等于数组a对应的下标元素,取地址等于数组a对应的下标的存储地址 数组是连续的地址，通过地址偏移获取值 ","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/cpp/array.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"数组"}],["meta",{"property":"og:description","content":"类型&,将值类型改为引用类型。 通过即时窗体发现 数组变量a本身是个指针， 数组变量a可以直接赋值给指针变量e 数组变量a的指针为首地址，与变量a[0]的取地址一致。即数组a的值为a[0]的值 引用变量b的值等于数组a对应的下标元素,取地址等于数组a对应的下标的存储地址 数组是连续的地址，通过地址偏移获取值 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-17T12:36:42.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:published_time","content":"2023-06-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-17T12:36:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数组\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-17T12:36:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1685946981000,"updatedTime":1687005402000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":3}]},"readingTime":{"minutes":0.96,"words":289},"filePathRelative":"cs/cpp/array.md","localizedDate":"2023年6月5日","excerpt":"<p>类型<code>&amp;</code>,将值类型改为引用类型。</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>int a[] = { 1,2,3,4 };\\nint* b = a;\\nint&amp; c = a[0];\\n(&amp;c)[1] = 4;\\ncopy(a, a + 4, ostream_iterator&lt;int&gt;(cout,\\" \\"));\\ncout &lt;&lt; endl;\\nint* d = &amp;a[2];\\n*(d+1) = 8;\\ncopy(a, a + 4, ostream_iterator&lt;int&gt;(cout,\\" \\"));\\ncout &lt;&lt; endl;\\n\\n//输出\\n1 4 3 4\\n1 4 6 8\\n</code></pre></div>","autoDesc":true}');export{d as comp,m as data};
