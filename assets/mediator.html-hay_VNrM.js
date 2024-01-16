const e=JSON.parse('{"key":"v-209175de","path":"/cs/design-pattern/mediator.html","title":"中介者模式","lang":"zh-CN","frontmatter":{"title":"中介者模式","date":"2023-06-17T00:00:00.000Z","dir.order":14,"order":14,"editLink":false,"footer":false,"category":["设计模式"],"tag":["设计模式"],"description":"参与此模式的类和对象包括： Mediator(IChatroom) 定义了一个与同事对象通信的接口。 ConcreteMediator(Chatroom) 通过协调Colleague对象来实现合作行为. 了解并维护其同事。 Colleague classes(Participant) 每个同事类都知道它的Mediator对象。 每位同事在本应与另一位同事沟通时都与其调解员沟通。","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/design-pattern/mediator.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"中介者模式"}],["meta",{"property":"og:description","content":"参与此模式的类和对象包括： Mediator(IChatroom) 定义了一个与同事对象通信的接口。 ConcreteMediator(Chatroom) 通过协调Colleague对象来实现合作行为. 了解并维护其同事。 Colleague classes(Participant) 每个同事类都知道它的Mediator对象。 每位同事在本应与另一位同事沟通时都与其调解员沟通。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-21T07:17:50.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2023-06-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-21T07:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"中介者模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-21T07:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1687005402000,"updatedTime":1689923870000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":2.41,"words":723},"filePathRelative":"cs/design-pattern/mediator.md","localizedDate":"2023年6月17日","excerpt":"<p>参与此模式的类和对象包括：</p>\\n<ul>\\n<li>\\n<p>Mediator(<code>IChatroom</code>)</p>\\n<ul>\\n<li>定义了一个与同事对象通信的接口。</li>\\n</ul>\\n</li>\\n<li>\\n<p>ConcreteMediator(<code>Chatroom</code>)</p>\\n<ul>\\n<li>通过协调Colleague对象来实现合作行为.</li>\\n<li>了解并维护其同事。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Colleague classes(<code>Participant</code>)</p>\\n<ul>\\n<li>每个同事类都知道它的Mediator对象。</li>\\n<li>每位同事在本应与另一位同事沟通时都与其调解员沟通。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};