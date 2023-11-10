import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c,a as s,e as n,b as e,f as l}from"./app-0a054e5b.js";const i={},r={href:"https://learn.microsoft.com/zh-cn/dotnet/api/system.intptr?view=net-7.0",target:"_blank",rel:"noopener noreferrer"},u={href:"https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/unsafe-code",target:"_blank",rel:"noopener noreferrer"},k={href:"https://learn.microsoft.com/zh-cn/dotnet/api/system.runtime.interopservices.marshal.allochglobal?view=net-6.0",target:"_blank",rel:"noopener noreferrer"},d={href:"https://learn.microsoft.com/zh-cn/dotnet/api/system.runtime.interopservices.marshal.freehglobal?view=net-6.0#system-runtime-interopservices-marshal-freehglobal(system-intptr)",target:"_blank",rel:"noopener noreferrer"},m=l(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>注意勾选项目属性里的<code>不安全代码</code></p></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Runtime<span class="token punctuation">.</span>InteropServices</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">int</span></span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">unsafe</span>
<span class="token punctuation">{</span>
    <span class="token class-name">IntPtr</span> a_ptr <span class="token operator">=</span> Marshal<span class="token punctuation">.</span><span class="token function">AllocHGlobal</span><span class="token punctuation">(</span>a <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">byte</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">byte</span><span class="token operator">*</span> c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token operator">*</span><span class="token punctuation">)</span>a_ptr<span class="token punctuation">.</span><span class="token function">ToPointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>c <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    Marshal<span class="token punctuation">.</span><span class="token function">FreeHGlobal</span><span class="token punctuation">(</span>a_ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token operator">*</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//输出</span>
<span class="token comment">//1</span>
<span class="token comment">//2</span>
<span class="token comment">//1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(b,h){const a=o("ExternalLinkIcon");return p(),c("div",null,[s("p",null,[s("a",r,[n("Intptr"),e(a)]),n("与"),s("a",u,[n("指针"),e(a)]),n("转换，涉及两个方法"),s("a",k,[n("Marshal.AllocHGlobal"),e(a)]),n("和"),s("a",d,[n("Marshal.FreeHGlobal"),e(a)]),n("，他们成对出现。")]),m])}const y=t(i,[["render",v],["__file","intptr-to-pointer.html.vue"]]);export{y as default};
