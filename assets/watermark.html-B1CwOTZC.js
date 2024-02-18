import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as p,c as o,d as a,f as n,a as l,e as c}from"./app-BuFzl1Pd.js";const i={},u={href:"https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/controls/how-to-add-a-watermark-to-a-textbox?view=netframeworkdesktop-4.8",target:"_blank",rel:"noopener noreferrer"},r=c(`<p>升级改造，利用触发器实现相同效果</p><figure><img src="https://nas.ilyl.life:8092/wpf/watermark.gif" alt="watermark" width="420" height="200" tabindex="0" loading="lazy"><figcaption>watermark</figcaption></figure><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextBox</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextBox.Style</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Style</span> <span class="token attr-name">TargetType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TextBox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Style.Triggers</span><span class="token punctuation">&gt;</span></span>
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Trigger</span> <span class="token attr-name">Property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Setter</span> <span class="token attr-name">Property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Background<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Setter.Value</span><span class="token punctuation">&gt;</span></span>
                             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VisualBrush</span>
                                 <span class="token attr-name">AlignmentX</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Left<span class="token punctuation">&quot;</span></span>
                                 <span class="token attr-name">AlignmentY</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Center<span class="token punctuation">&quot;</span></span>
                                 <span class="token attr-name">Stretch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>None<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VisualBrush.Visual</span><span class="token punctuation">&gt;</span></span>
                                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextBlock</span>
                                         <span class="token attr-name">Background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Transparent<span class="token punctuation">&quot;</span></span>
                                         <span class="token attr-name">FontSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>14<span class="token punctuation">&quot;</span></span>
                                         <span class="token attr-name">Foreground</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Silver<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                                         这是水印
                                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TextBlock</span><span class="token punctuation">&gt;</span></span>
                                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VisualBrush.Visual</span><span class="token punctuation">&gt;</span></span>
                             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VisualBrush</span><span class="token punctuation">&gt;</span></span>
                         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Setter.Value</span><span class="token punctuation">&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Setter</span><span class="token punctuation">&gt;</span></span>
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Trigger</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Style.Triggers</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Style</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TextBox.Style</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TextBox</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(m,d){const t=e("ExternalLinkIcon");return p(),o("div",null,[a("p",null,[n("微软官方文档提供了一个Textbox的"),a("a",u,[n("水印示例"),l(t)])]),r])}const f=s(i,[["render",k],["__file","watermark.html.vue"]]),h=JSON.parse('{"path":"/cs/wpf/watermark.html","title":"水印","lang":"zh-CN","frontmatter":{"title":"水印","date":"2023-11-15T00:00:00.000Z","editLink":false,"footer":false,"isOriginal":true,"category":["C#"],"tag":["WPF"],"description":"微软官方文档提供了一个Textbox的水印示例 升级改造，利用触发器实现相同效果 watermarkwatermark ","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/wpf/watermark.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"水印"}],["meta",{"property":"og:description","content":"微软官方文档提供了一个Textbox的水印示例 升级改造，利用触发器实现相同效果 watermarkwatermark "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://nas.ilyl.life:8092/wpf/watermark.gif =420x200"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-26T07:17:54.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"水印"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"WPF"}],["meta",{"property":"article:published_time","content":"2023-11-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-26T07:17:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"水印\\",\\"image\\":[\\"https://nas.ilyl.life:8092/wpf/watermark.gif =420x200\\"],\\"datePublished\\":\\"2023-11-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-26T07:17:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1700026287000,"updatedTime":1706253474000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":0.37,"words":111},"filePathRelative":"cs/wpf/watermark.md","localizedDate":"2023年11月15日","excerpt":"<p>微软官方文档提供了一个Textbox的<a href=\\"https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/controls/how-to-add-a-watermark-to-a-textbox?view=netframeworkdesktop-4.8\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">水印示例</a></p>\\n<p>升级改造，利用触发器实现相同效果</p>\\n<figure><img src=\\"https://nas.ilyl.life:8092/wpf/watermark.gif\\" alt=\\"watermark\\" width=\\"420\\" height=\\"200\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>watermark</figcaption></figure>","autoDesc":true}');export{f as comp,h as data};