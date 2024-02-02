const t=JSON.parse('{"key":"v-5d26190b","path":"/cs/cpp/variable.html","title":"类型变量","lang":"zh-CN","frontmatter":{"title":"类型变量","date":"2023-06-01T00:00:00.000Z","dir.order":1,"order":1,"editLink":false,"footer":false,"isOriginal":true,"category":["C++"],"tag":["C++"],"description":"普通类型、、指针类型(*)的区别。 &取地址，标明不显示直接值，而是显示该值下的存储地址值。 *指针，存储的是计算机地址。 通过即时窗体发现 整型变量a的值是数值本身 &a的值是变量a数值的存储地址 引用类型b与a的值和存储地址都相同 指针类型c的值是变量a的存储地址 *c的值是变量a的实际数值 &c的值是变量c的存储地址 可见，值分两种，一种是编程人...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/cpp/variable.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"类型变量"}],["meta",{"property":"og:description","content":"普通类型、、指针类型(*)的区别。 &取地址，标明不显示直接值，而是显示该值下的存储地址值。 *指针，存储的是计算机地址。 通过即时窗体发现 整型变量a的值是数值本身 &a的值是变量a数值的存储地址 引用类型b与a的值和存储地址都相同 指针类型c的值是变量a的存储地址 *c的值是变量a的实际数值 &c的值是变量c的存储地址 可见，值分两种，一种是编程人..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-17T12:36:42.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:published_time","content":"2023-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-17T12:36:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类型变量\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-17T12:36:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1685697967000,"updatedTime":1687005402000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":4}]},"readingTime":{"minutes":1.08,"words":323},"filePathRelative":"cs/cpp/variable.md","localizedDate":"2023年6月1日","excerpt":"<p><code>普通类型</code>、<a href=\\"/cs/cpp/ref.html\\" target=\\"_blank\\">引用类型(&amp;)</a>、<code>指针类型(*)</code>的区别。</p>\\n<p><code>&amp;</code>取地址，标明不显示直接值，而是显示该值下的存储地址值。\\n<code>*</code>指针，存储的是计算机地址。</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>int a = 123;\\nint&amp; b = a;\\nint* c = &amp;b;\\n*c = 456;\\ncout &lt;&lt;\\"a:\\" &lt;&lt; a &lt;&lt;\\" 引用b：\\" &lt;&lt; b &lt;&lt; \\" 指针c: \\" &lt;&lt;*c&lt;&lt; endl;\\na = 789;\\ncout &lt;&lt; \\"a:\\" &lt;&lt; a &lt;&lt; \\" 引用b：\\" &lt;&lt; b &lt;&lt; \\" 指针c: \\" &lt;&lt; *c &lt;&lt; endl;\\n\\n//输出\\na:456 引用b：456 指针c: 456\\na:789 引用b：789 指针c: 789\\n</code></pre></div>","autoDesc":true}');export{t as data};