const e=JSON.parse('{"key":"v-370b3ccc","path":"/cs/design-pattern/composite.html","title":"组合模式","lang":"zh-CN","frontmatter":{"title":"组合模式","date":"2023-06-17T00:00:00.000Z","dir.order":7,"order":7,"editLink":false,"footer":false,"category":["设计模式"],"tag":["设计模式"],"description":"参与此模式的类和对象包括： Component(DrawingElement) 声明组合对象的接口。 酌情为所有类通用的接口实现默认行为。 声明一个用于访问和管理其子组件的接口。 （可选）在递归结构中定义一个用于访问组件父级的接口，并在适当的情况下实现它。 Leaf(PrimitiveElement) 表示组合中的叶对象。叶子没有孩子。 定义组合中原始对象的行为。 Composite(CompositeElement) 定义具有子组件的行为。 存储子组件。 在组件接口中实现子相关的操作。 Client(CompositeApp) 通过组件接口操作组合中的对象。","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/design-pattern/composite.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"组合模式"}],["meta",{"property":"og:description","content":"参与此模式的类和对象包括： Component(DrawingElement) 声明组合对象的接口。 酌情为所有类通用的接口实现默认行为。 声明一个用于访问和管理其子组件的接口。 （可选）在递归结构中定义一个用于访问组件父级的接口，并在适当的情况下实现它。 Leaf(PrimitiveElement) 表示组合中的叶对象。叶子没有孩子。 定义组合中原始对象的行为。 Composite(CompositeElement) 定义具有子组件的行为。 存储子组件。 在组件接口中实现子相关的操作。 Client(CompositeApp) 通过组件接口操作组合中的对象。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-21T07:17:50.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2023-06-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-21T07:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组合模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-21T07:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1687005402000,"updatedTime":1689923870000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":2.35,"words":706},"filePathRelative":"cs/design-pattern/composite.md","localizedDate":"2023年6月17日","excerpt":"<p>参与此模式的类和对象包括：</p>\\n<ul>\\n<li>\\n<p>Component(<code>DrawingElement</code>)</p>\\n<ul>\\n<li>声明组合对象的接口。</li>\\n<li>酌情为所有类通用的接口实现默认行为。</li>\\n<li>声明一个用于访问和管理其子组件的接口。</li>\\n<li>（可选）在递归结构中定义一个用于访问组件父级的接口，并在适当的情况下实现它。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Leaf(<code>PrimitiveElement</code>)</p>\\n<ul>\\n<li>表示组合中的叶对象。叶子没有孩子。</li>\\n<li>定义组合中原始对象的行为。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Composite(<code>CompositeElement</code>)</p>\\n<ul>\\n<li>定义具有子组件的行为。</li>\\n<li>存储子组件。</li>\\n<li>在组件接口中实现子相关的操作。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Client(<code>CompositeApp</code>)</p>\\n<ul>\\n<li>通过组件接口操作组合中的对象。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};