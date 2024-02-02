const n=JSON.parse('{"key":"v-12e747b9","path":"/tools/csharp/task.html","title":"Task","lang":"zh-CN","frontmatter":{"title":"Task","date":"2023-11-27T00:00:00.000Z","editLink":false,"footer":false,"isOriginal":true,"category":["Task"],"tag":["C#"],"description":"Task简化了线程操作。 Task 使用又离不开async和await，如何正确的使用Task，以一个简单的示例演示。 同步 首先看单独的方法调用 当返回值类型为Task时才需要使用await。 方法前加不加await的区别是什么？看输出结果。 方法PrintAsync应该输出三次,但实际只输出了一次，为何？ 断点调试，发现执行await Task.D...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/csharp/task.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"Task"}],["meta",{"property":"og:description","content":"Task简化了线程操作。 Task 使用又离不开async和await，如何正确的使用Task，以一个简单的示例演示。 同步 首先看单独的方法调用 当返回值类型为Task时才需要使用await。 方法前加不加await的区别是什么？看输出结果。 方法PrintAsync应该输出三次,但实际只输出了一次，为何？ 断点调试，发现执行await Task.D..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://nas.ilyl.life:8092/dotnet/task.gif =420x200"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-28T09:48:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Task"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"C#"}],["meta",{"property":"article:published_time","content":"2023-11-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-28T09:48:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Task\\",\\"image\\":[\\"https://nas.ilyl.life:8092/dotnet/task.gif =420x200\\"],\\"datePublished\\":\\"2023-11-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-28T09:48:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"同步","slug":"同步","link":"#同步","children":[]},{"level":2,"title":"异步","slug":"异步","link":"#异步","children":[]},{"level":2,"title":"并发","slug":"并发","link":"#并发","children":[]}],"git":{"createdTime":1701065790000,"updatedTime":1701164938000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":3.51,"words":1054},"filePathRelative":"tools/csharp/task.md","localizedDate":"2023年11月27日","excerpt":"<p><a href=\\"https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task?view=net-8.0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Task</a>简化了线程操作。</p>\\n<p>Task 使用又离不开<code>async</code>和<code>await</code>，如何正确的使用<code>Task</code>，以一个简单的示例演示。</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token return-type class-name\\"><span class=\\"token keyword\\">void</span></span> <span class=\\"token function\\">Print</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    Console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WriteLine</span><span class=\\"token punctuation\\">(</span><span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"Print---</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">DateTime<span class=\\"token punctuation\\">.</span>Now<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ToString</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"HH:mm:ss\\"</span><span class=\\"token punctuation\\">)</span></span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">\\"</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">async</span> <span class=\\"token return-type class-name\\"><span class=\\"token keyword\\">void</span></span> <span class=\\"token function\\">PrintAsync</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\"><span class=\\"token keyword\\">int</span></span> times<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>times <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        Console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WriteLine</span><span class=\\"token punctuation\\">(</span><span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"PrintAsync---</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">DateTime<span class=\\"token punctuation\\">.</span>Now<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ToString</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"HH:mm:ss\\"</span><span class=\\"token punctuation\\">)</span></span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">\\"</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        times<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">await</span> Task<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Delay</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">async</span> <span class=\\"token return-type class-name\\">Task</span> <span class=\\"token function\\">PrintTaskAsync</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\"><span class=\\"token keyword\\">int</span></span> times<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>times <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        Console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WriteLine</span><span class=\\"token punctuation\\">(</span><span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"PrintTaskAsync---</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">DateTime<span class=\\"token punctuation\\">.</span>Now<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ToString</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"HH:mm:ss\\"</span><span class=\\"token punctuation\\">)</span></span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">\\"</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        times<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">await</span> Task<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Delay</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{n as data};