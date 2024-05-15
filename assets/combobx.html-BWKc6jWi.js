import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as s,e as t}from"./app-BaXx2_6M.js";const e={},p=t(`<p>ComboxBox如何在VM中触发事件。</p><p>引入<a href="https://github.com/Microsoft/XamlBehaviorsWpf" target="_blank" rel="noopener noreferrer">Microsoft.Xaml.Behaviors.Wpf</a></p><p>在当前根节点下添加如下声明<code>xmlns:i=&quot;http://schemas.microsoft.com/xaml/behaviors&quot;</code></p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComboBox</span> <span class="token attr-name"><span class="token namespace">x:</span>Name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ComBo<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">DisplayMemberPath</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Text<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">ItemsSource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Binding Items}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">i:</span>Interaction.Triggers</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">i:</span>EventTrigger</span> <span class="token attr-name">EventName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SelectionChanged<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">i:</span>InvokeCommandAction</span> <span class="token attr-name">Command</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Binding TextChanged}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">CommandParameter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Binding ElementName=ComBo, Path=SelectedItem}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">i:</span>EventTrigger</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">i:</span>Interaction.Triggers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ComboBox</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(l,i){return s(),n("div",null,o)}const m=a(e,[["render",c],["__file","combobx.html.vue"]]),k=JSON.parse('{"path":"/cs/wpf/combobx.html","title":"ComboBox","lang":"zh-CN","frontmatter":{"title":"ComboBox","date":"2023-11-22T00:00:00.000Z","editLink":false,"footer":false,"isOriginal":true,"category":["C#"],"tag":["WPF","Behaviors"],"description":"ComboxBox如何在VM中触发事件。 引入Microsoft.Xaml.Behaviors.Wpf 在当前根节点下添加如下声明xmlns:i=\\"http://schemas.microsoft.com/xaml/behaviors\\"","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/wpf/combobx.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"ComboBox"}],["meta",{"property":"og:description","content":"ComboxBox如何在VM中触发事件。 引入Microsoft.Xaml.Behaviors.Wpf 在当前根节点下添加如下声明xmlns:i=\\"http://schemas.microsoft.com/xaml/behaviors\\""}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-22T08:05:37.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"WPF"}],["meta",{"property":"article:tag","content":"Behaviors"}],["meta",{"property":"article:published_time","content":"2023-11-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-22T08:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ComboBox\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-22T08:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:ly2@ilyl.life\\"}]}"]]},"headers":[],"git":{"createdTime":1700640337000,"updatedTime":1700640337000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":1}]},"readingTime":{"minutes":0.27,"words":82},"filePathRelative":"cs/wpf/combobx.md","localizedDate":"2023年11月22日","excerpt":"<p>ComboxBox如何在VM中触发事件。</p>\\n<p>引入<a href=\\"https://github.com/Microsoft/XamlBehaviorsWpf\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Microsoft.Xaml.Behaviors.Wpf</a></p>\\n<p>在当前根节点下添加如下声明<code>xmlns:i=\\"http://schemas.microsoft.com/xaml/behaviors\\"</code></p>\\n<div class=\\"language-xml\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ComboBox</span> <span class=\\"token attr-name\\"><span class=\\"token namespace\\">x:</span>Name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>ComBo<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">DisplayMemberPath</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>Text<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">ItemsSource</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>{Binding Items}<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token namespace\\">i:</span>Interaction.Triggers</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token namespace\\">i:</span>EventTrigger</span> <span class=\\"token attr-name\\">EventName</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>SelectionChanged<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token namespace\\">i:</span>InvokeCommandAction</span> <span class=\\"token attr-name\\">Command</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>{Binding TextChanged}<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">CommandParameter</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>{Binding ElementName=ComBo, Path=SelectedItem}<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span><span class=\\"token namespace\\">i:</span>EventTrigger</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span><span class=\\"token namespace\\">i:</span>Interaction.Triggers</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ComboBox</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>","autoDesc":true}');export{m as comp,k as data};
