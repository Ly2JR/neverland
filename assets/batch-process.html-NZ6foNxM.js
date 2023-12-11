import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,b as t}from"./app-uHQSFdLh.js";const p={},e=t(`<p>在Winform中常见的一个功能是配置，需要赋值取值，而且还是大批量的地方，一个一个手动处理非常繁琐。</p><p>如何进行批量化一键赋值和一键取值，更近一步的衍生，就是一个标准的动态模板功能。</p><p>以批量赋值取值为例进行说明。</p><ol><li><p>设置基类用户控件</p><p>设置基类控件为了适应不同的子控件。</p><p>新增了一个属性<code>Key</code>,一个<code>GetValue()</code>和一个<code>SetValue()</code>方法。</p><p><code>Key</code>用于与数据库字段名匹配</p><p><code>GetValue</code>方法用户获取用户输入的值</p><p><code>SetValue</code>方法用户将数据库存储的数据赋值到用户控件</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">BaseControl</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">UserControl</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">BaseControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">InitializeComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Key <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">GetValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SetValue</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> <span class="token keyword">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>继承<code>BaseControl</code>添加一个名为<code>TextControl</code>的用户控件</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">TextControl</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseControl</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">TextControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">InitializeComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设计<code>TextControl</code>用户控件</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>继承用户控件预览时经常出现错误的问题。</p><p>重新生成解决方案即可。否则基类用户控件有错误。</p></div><p>添加一个<code>Label</code>和一个<code>TextBox</code></p><p>Label用于显示名称</p><p>TextBox用于用户输入新值和显示原始值</p><figure><img src="https://nas.ilyl.life:8092/dotnet/winform1.png" alt="TextControl" tabindex="0" loading="lazy"><figcaption>TextControl</figcaption></figure></li><li><p>重写基类控件方法</p><p>新添加一个额外的属性<code>Title</code>用户控制<code>Label</code>标签</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code> <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> label1<span class="token punctuation">.</span>Text<span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token keyword">set</span> <span class="token punctuation">{</span> label1<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">GetValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">{</span>
     <span class="token keyword">return</span> textBox1<span class="token punctuation">.</span>Text<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SetValue</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> <span class="token keyword">value</span><span class="token punctuation">)</span>
 <span class="token punctuation">{</span>
     textBox1<span class="token punctuation">.</span>Text <span class="token operator">=</span>Convert<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设计配置表</p><p>使用<code>DataTable</code>映射数据库表字段</p><table><thead><tr><th style="text-align:left;">字段名</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">name</td><td style="text-align:left;">nverchar(10)</td><td style="text-align:left;">姓名</td></tr><tr><td style="text-align:left;">age</td><td style="text-align:left;">int</td><td style="text-align:left;">年龄</td></tr><tr><td style="text-align:left;">address</td><td style="text-align:left;">nverchar(60)</td><td style="text-align:left;">地址</td></tr></tbody></table><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code> <span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">Form1</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Form</span></span>
 <span class="token punctuation">{</span>
     <span class="token keyword">private</span> <span class="token class-name">DataTable</span> _template<span class="token punctuation">;</span>
     <span class="token keyword">public</span> <span class="token function">Form1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token punctuation">{</span>
         <span class="token function">InitializeComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

         _template <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DataTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         _template<span class="token punctuation">.</span>Columns<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         _template<span class="token punctuation">.</span>Columns<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">int</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         _template<span class="token punctuation">.</span>Columns<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

         <span class="token comment">//模拟值</span>
         _template<span class="token punctuation">.</span>Rows<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">object</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span> <span class="token string">&quot;AA&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token string">&quot;VVV&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在窗体中设计布局</p><p>添加三个<code>TextControl</code>用户控件，并设置<code>Title</code>和<code>Key</code>属性</p><p><code>Key</code>值对应<code>字段名</code></p><figure><img src="https://nas.ilyl.life:8092/dotnet/winform2.png" alt="配置设置" tabindex="0" loading="lazy"><figcaption>配置设置</figcaption></figure></li><li><p>赋值取值</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//赋值</span>
<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">button1_Click</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">EventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> child <span class="token keyword">in</span> Controls<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>child <span class="token keyword">is</span> <span class="token class-name">BaseControl</span> control<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>_template<span class="token punctuation">.</span>Columns<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>control<span class="token punctuation">.</span>Key<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                control<span class="token punctuation">.</span><span class="token function">SetValue</span><span class="token punctuation">(</span>_template<span class="token punctuation">.</span>Rows<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">control<span class="token punctuation">.</span>Key</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//取值</span>
<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">button2_Click</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">EventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> child <span class="token keyword">in</span> Controls<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>child <span class="token keyword">is</span> <span class="token class-name">BaseControl</span> control<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>_template<span class="token punctuation">.</span>Columns<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>control<span class="token punctuation">.</span>Key<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                sb<span class="token punctuation">.</span><span class="token function">Append</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">control<span class="token punctuation">.</span>Key</span><span class="token punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">control<span class="token punctuation">.</span><span class="token function">GetValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">\\r\\n&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    MessageBox<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://nas.ilyl.life:8092/dotnet/winform3.gif" alt="批量处理" width="420" height="200" tabindex="0" loading="lazy"><figcaption>批量处理</figcaption></figure></li></ol>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","batch-process.html.vue"]]);export{d as default};
