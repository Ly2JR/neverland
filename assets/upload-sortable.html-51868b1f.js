const e=JSON.parse('{"key":"v-418314e9","path":"/web/upload-sortable.html","title":"上传与排序","lang":"zh-CN","frontmatter":{"title":"上传与排序","date":"2023-09-04T00:00:00.000Z","editLink":false,"footer":false,"isOriginal":true,"category":["Web"],"description":"在使用ant-design-vue上传组件与sortablejs排序组合时，为了实现上传图片后可以排序时，出现了一些问题。 vue获取不到上传组件的实例，即ref始终为null。 sortablejs有排序效果，但是vue绑定的图片数据未变动。 在sortablejs里添加事件处理图片数据顺序，但是排序效果失效。 上传成功显示的预览图片，很小又模糊，除非再次点击预览。 为了解决这些问题，使用document对象操作。","head":[["meta",{"property":"og:url","content":"https://ilyl.life/web/upload-sortable.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"上传与排序"}],["meta",{"property":"og:description","content":"在使用ant-design-vue上传组件与sortablejs排序组合时，为了实现上传图片后可以排序时，出现了一些问题。 vue获取不到上传组件的实例，即ref始终为null。 sortablejs有排序效果，但是vue绑定的图片数据未变动。 在sortablejs里添加事件处理图片数据顺序，但是排序效果失效。 上传成功显示的预览图片，很小又模糊，除非再次点击预览。 为了解决这些问题，使用document对象操作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T09:03:08.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:published_time","content":"2023-09-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T09:03:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"上传与排序\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-08T09:03:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"完整的上传组件与排序功能","slug":"完整的上传组件与排序功能","link":"#完整的上传组件与排序功能","children":[]},{"level":2,"title":"解决图片排序时，图片与数据不一致","slug":"解决图片排序时-图片与数据不一致","link":"#解决图片排序时-图片与数据不一致","children":[{"level":3,"title":"获取上传组件排序数据","slug":"获取上传组件排序数据","link":"#获取上传组件排序数据","children":[]}]}],"git":{"createdTime":1693804635000,"updatedTime":1694163788000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":4}]},"readingTime":{"minutes":2.17,"words":651},"filePathRelative":"web/upload-sortable.md","localizedDate":"2023年9月4日","excerpt":"<p>在使用<code>ant-design-vue</code>上传组件与<code>sortablejs</code>排序组合时，为了实现上传图片后可以排序时，出现了一些问题。</p>\\n<ol>\\n<li>vue获取不到上传组件的实例，即<code>ref</code>始终为null。</li>\\n<li>sortablejs有排序效果，但是vue绑定的图片数据未变动。</li>\\n<li>在sortablejs里添加事件处理图片数据顺序，但是排序效果失效。</li>\\n<li>上传成功显示的预览图片，很小又模糊，除非再次点击预览。</li>\\n</ol>\\n<p>为了解决这些问题，使用<code>document</code>对象操作。</p>","copyright":{"author":"乌龙茶","license":"MIT"},"autoDesc":true}');export{e as data};