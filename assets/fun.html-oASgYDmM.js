const n=JSON.parse('{"key":"v-65892a52","path":"/cs/vb/fun.html","title":"函数、类、模块","lang":"zh-CN","frontmatter":{"title":"函数、类、模块","date":"2023-06-25T00:00:00.000Z","dir.order":2,"order":2,"editLink":false,"footer":false,"category":["VB"],"description":"在基础的CRUD操作中，发现很多代码都是重复的，可能就是SQL语句的区别。 函数 Visual Basic函数有两种形式，无返回值的Sub和有返回值的Function 将CRUD操作中的对数据库部分进行提取为Function函数，事件本身就是一个Sub函数 类 类配合属性使用，另外类中有两个事件Class_Initialize和Class_Termin...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/vb/fun.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"函数、类、模块"}],["meta",{"property":"og:description","content":"在基础的CRUD操作中，发现很多代码都是重复的，可能就是SQL语句的区别。 函数 Visual Basic函数有两种形式，无返回值的Sub和有返回值的Function 将CRUD操作中的对数据库部分进行提取为Function函数，事件本身就是一个Sub函数 类 类配合属性使用，另外类中有两个事件Class_Initialize和Class_Termin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-25T08:31:28.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:published_time","content":"2023-06-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-25T08:31:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数、类、模块\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-25T08:31:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]},{"level":2,"title":"类","slug":"类","link":"#类","children":[]},{"level":2,"title":"模块","slug":"模块","link":"#模块","children":[]}],"git":{"createdTime":1687681888000,"updatedTime":1687681888000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":1}]},"readingTime":{"minutes":2.15,"words":646},"filePathRelative":"cs/vb/fun.md","localizedDate":"2023年6月25日","excerpt":"<p>在基础的CRUD操作中，发现很多代码都是重复的，可能就是SQL语句的区别。</p>\\n<h2>函数</h2>\\n<p>Visual Basic函数有两种形式，无返回值的<code>Sub</code>和有返回值的<code>Function</code></p>\\n\\n<p>将CRUD操作中的对数据库部分进行提取为<code>Function</code>函数，事件本身就是一个<code>Sub</code>函数</p>\\n<div class=\\"language-vb\\" data-ext=\\"vb\\" data-title=\\"vb\\"><pre class=\\"language-vb\\"><code><span class=\\"token keyword\\">Public</span> <span class=\\"token keyword\\">Function</span> CRUD<span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">ByVal</span> sSql <span class=\\"token keyword\\">As</span> <span class=\\"token keyword\\">String</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">As</span> <span class=\\"token keyword\\">Integer</span>\\n<span class=\\"token keyword\\">Dim</span> conn <span class=\\"token keyword\\">As</span> <span class=\\"token keyword\\">New</span> ADODB<span class=\\"token punctuation\\">.</span>Connection\\n<span class=\\"token keyword\\">Dim</span> connString <span class=\\"token keyword\\">As</span> <span class=\\"token keyword\\">String</span>\\n<span class=\\"token keyword\\">Dim</span> affected <span class=\\"token keyword\\">As</span> <span class=\\"token keyword\\">Integer</span>\\nCRUD <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\nconnString <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=...\\"</span>\\nconn<span class=\\"token punctuation\\">.</span>Open connString\\n\\nconn<span class=\\"token punctuation\\">.</span>Execute sSql<span class=\\"token punctuation\\">,</span> CRUD\\n\\nconn<span class=\\"token punctuation\\">.</span>Close\\n<span class=\\"token keyword\\">Set</span> conn <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">Nothing</span>\\n<span class=\\"token keyword\\">End</span> <span class=\\"token keyword\\">Function</span>\\n</code></pre></div>","autoDesc":true}');export{n as data};
