const e=JSON.parse(`{"key":"v-48e80c78","path":"/tools/csharp/docker-debug.html","title":"vs2017u5 exists,deleting.","lang":"zh-CN","frontmatter":{"title":"vs2017u5 exists,deleting.","date":"2024-01-16T00:00:00.000Z","editLink":false,"footer":false,"isOriginal":true,"category":["工具箱"],"tag":["C#","Docker"],"description":"VS进行Docker调试时，半天卡住不动，查看日志显示 解决方法 下载文件vsdbg-linux-x64.zip，替换自动的版本号 链接：https://vsdebugger.azureedge.net/vsdbg-17-8-11212-2/vsdbg-linux-x64.zip 下载文件vsdbg-linux-musl-x64，替换自动的版本号 链接...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/csharp/docker-debug.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"vs2017u5 exists,deleting."}],["meta",{"property":"og:description","content":"VS进行Docker调试时，半天卡住不动，查看日志显示 解决方法 下载文件vsdbg-linux-x64.zip，替换自动的版本号 链接：https://vsdebugger.azureedge.net/vsdbg-17-8-11212-2/vsdbg-linux-x64.zip 下载文件vsdbg-linux-musl-x64，替换自动的版本号 链接..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-16T02:28:30.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"C#"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:published_time","content":"2024-01-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-16T02:28:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vs2017u5 exists,deleting.\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-16T02:28:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}],"git":{"createdTime":1705372110000,"updatedTime":1705372110000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":1}]},"readingTime":{"minutes":0.55,"words":164},"filePathRelative":"tools/csharp/docker-debug.md","localizedDate":"2024年1月16日","excerpt":"<p>VS进行Docker调试时，半天卡住不动，查看日志显示</p>\\n<div class=\\"language-cmd\\" data-ext=\\"cmd\\" data-title=\\"cmd\\"><pre class=\\"language-cmd\\"><code>&gt;Info: Using vsdbg version '17.8.11212.2'\\n&gt;Info: Using Runtime ID 'linux-x64'\\n&gt;Info: c:\\\\用户\\\\admin\\\\vsdbg\\\\vs2017u5 exists,deleting.\\n</code></pre></div><h2>解决方法</h2>\\n<ol>\\n<li>\\n<p>下载文件<code>vsdbg-linux-x64.zip</code>，替换自动的版本号</p>\\n<p>链接：<code>https://vsdebugger.azureedge.net/vsdbg-17-8-11212-2/vsdbg-linux-x64.zip</code></p>\\n</li>\\n<li>\\n<p>下载文件<code>vsdbg-linux-musl-x64</code>，替换自动的版本号</p>\\n<p>链接<code>https://vsdebugger.azureedge.net/vsdbg-17-8-11212-2/vsdbg-linux-musl-x64.zip</code></p>\\n</li>\\n<li>\\n<p>打开<code>vsdbg</code>目录,新建<code>vs2017u5</code>文件夹</p>\\n</li>\\n<li>\\n<p>将<code>vsdbg-linux-x64.zip</code>解压到<code>vs2017u5</code>文件夹下</p>\\n</li>\\n<li>\\n<p>将<code>vsdbg-linux-musl-x64.zip</code>解压到<code>vs2017u5/linux-musl-x64</code>文件夹下</p>\\n</li>\\n<li>\\n<p>重启VS</p>\\n</li>\\n</ol>","autoDesc":true}`);export{e as data};
