const t=JSON.parse('{"key":"v-0567b943","path":"/cs/design-pattern/iterator.html","title":"迭代器模式","lang":"zh-CN","frontmatter":{"title":"迭代器模式","date":"2023-06-17T00:00:00.000Z","dir.order":13,"order":13,"editLink":false,"footer":false,"category":["设计模式"],"tag":["设计模式"],"description":"参与此模式的类和对象包括： Iterator(AbstractIterator) 定义了访问的遍历元素的接口。 ConcreteIterator(Iterator) 实现迭代器接口 在聚合的遍历中跟踪当前位置。 Aggregate(AbstractCollection) 定义了一个用于创建Iterator对象的接口。 ConcreteAggregate(Collection) 实现Iterator创建接口以返回正确的ConcreteIterator的实例。","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/design-pattern/iterator.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"迭代器模式"}],["meta",{"property":"og:description","content":"参与此模式的类和对象包括： Iterator(AbstractIterator) 定义了访问的遍历元素的接口。 ConcreteIterator(Iterator) 实现迭代器接口 在聚合的遍历中跟踪当前位置。 Aggregate(AbstractCollection) 定义了一个用于创建Iterator对象的接口。 ConcreteAggregate(Collection) 实现Iterator创建接口以返回正确的ConcreteIterator的实例。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-21T07:17:50.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2023-06-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-21T07:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"迭代器模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-21T07:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1687005402000,"updatedTime":1689923870000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":1.93,"words":579},"filePathRelative":"cs/design-pattern/iterator.md","localizedDate":"2023年6月17日","excerpt":"<p>参与此模式的类和对象包括：</p>\\n<ul>\\n<li>\\n<p>Iterator(<code>AbstractIterator</code>)</p>\\n<ul>\\n<li>定义了访问的遍历元素的接口。</li>\\n</ul>\\n</li>\\n<li>\\n<p>ConcreteIterator(<code>Iterator</code>)</p>\\n<ul>\\n<li>实现迭代器接口</li>\\n<li>在聚合的遍历中跟踪当前位置。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Aggregate(<code>AbstractCollection</code>)</p>\\n<ul>\\n<li>定义了一个用于创建Iterator对象的接口。</li>\\n</ul>\\n</li>\\n<li>\\n<p>ConcreteAggregate(<code>Collection</code>)</p>\\n<ul>\\n<li>实现Iterator创建接口以返回正确的ConcreteIterator的实例。</li>\\n</ul>\\n</li>\\n</ul>","copyright":{"author":"乌龙茶","license":"MIT"},"autoDesc":true}');export{t as data};
