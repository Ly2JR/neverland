import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,e as d}from"./app-BEaTdNAG.js";const o={},s=d(`<p>VS进行Docker调试时，半天卡住不动，查看日志显示<code>vs2017u5 exists,deleting.</code></p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>&gt;Info: Using vsdbg version &#39;17.8.11212.2&#39;
&gt;Info: Using Runtime ID &#39;linux-x64&#39;
&gt;Info: c:\\用户\\admin\\vsdbg\\vs2017u5 exists,deleting.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2><ol><li><p>下载文件<code>vsdbg-linux-x64.zip</code>，替换自动的版本号</p><p>链接：<code>https://vsdebugger.azureedge.net/vsdbg-17-8-11212-2/vsdbg-linux-x64.zip</code></p></li><li><p>下载文件<code>vsdbg-linux-musl-x64</code>，替换自动的版本号</p><p>链接<code>https://vsdebugger.azureedge.net/vsdbg-17-8-11212-2/vsdbg-linux-musl-x64.zip</code></p></li><li><p>打开<code>vsdbg</code>目录,新建<code>vs2017u5</code>文件夹</p></li><li><p>将<code>vsdbg-linux-x64.zip</code>解压到<code>vs2017u5</code>文件夹下</p></li><li><p>将<code>vsdbg-linux-musl-x64.zip</code>解压到<code>vs2017u5/linux-musl-x64</code>文件夹下</p></li><li><p>重启VS</p></li></ol>`,4),n=[s];function c(l,a){return t(),i("div",null,n)}const g=e(o,[["render",c],["__file","docker-debug.html.vue"]]),u=JSON.parse(`{"path":"/tools/csharp/docker-debug.html","title":"VS调试Docker","lang":"zh-CN","frontmatter":{"title":"VS调试Docker","date":"2024-01-16T00:00:00.000Z","editLink":false,"footer":false,"isOriginal":true,"category":["工具箱"],"tag":["C#","Docker"],"description":"VS进行Docker调试时，半天卡住不动，查看日志显示vs2017u5 exists,deleting. 解决方法 下载文件vsdbg-linux-x64.zip，替换自动的版本号 链接：https://vsdebugger.azureedge.net/vsdbg-17-8-11212-2/vsdbg-linux-x64.zip 下载文件vsdbg-l...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/csharp/docker-debug.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"VS调试Docker"}],["meta",{"property":"og:description","content":"VS进行Docker调试时，半天卡住不动，查看日志显示vs2017u5 exists,deleting. 解决方法 下载文件vsdbg-linux-x64.zip，替换自动的版本号 链接：https://vsdebugger.azureedge.net/vsdbg-17-8-11212-2/vsdbg-linux-x64.zip 下载文件vsdbg-l..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T05:14:36.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"C#"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:published_time","content":"2024-01-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-01T05:14:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VS调试Docker\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-01T05:14:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}],"git":{"createdTime":1705372110000,"updatedTime":1709270076000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":0.56,"words":168},"filePathRelative":"tools/csharp/docker-debug.md","localizedDate":"2024年1月16日","excerpt":"<p>VS进行Docker调试时，半天卡住不动，查看日志显示<code>vs2017u5 exists,deleting.</code></p>\\n<div class=\\"language-cmd\\" data-ext=\\"cmd\\" data-title=\\"cmd\\"><pre class=\\"language-cmd\\"><code>&gt;Info: Using vsdbg version '17.8.11212.2'\\n&gt;Info: Using Runtime ID 'linux-x64'\\n&gt;Info: c:\\\\用户\\\\admin\\\\vsdbg\\\\vs2017u5 exists,deleting.\\n</code></pre></div>","autoDesc":true}`);export{g as comp,u as data};
