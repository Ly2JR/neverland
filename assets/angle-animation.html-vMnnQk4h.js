const t=JSON.parse('{"key":"v-2b889e57","path":"/cs/wpf/angle-animation.html","title":"旋转动画","lang":"zh-CN","frontmatter":{"title":"旋转动画","date":"2024-01-25T00:00:00.000Z","editLink":false,"footer":false,"isOriginal":true,"category":["C#"],"tag":["WPF","动画"],"description":"在做主题控件时，涉及到了Loading加载控件，无从下手，本着学习的目的，参考了HandryOrg。 发现HC的Loading是通过代码方式实现，为了学习以及简化的目的，通过XAML方式一步一步梳理。 LoadingLoading 添加Canvas ClipToBounds裁剪多余的部分 添加圆点 如何让这个点进行圆形运动，并且各个点运动轨迹有重力感？...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/wpf/angle-animation.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"旋转动画"}],["meta",{"property":"og:description","content":"在做主题控件时，涉及到了Loading加载控件，无从下手，本着学习的目的，参考了HandryOrg。 发现HC的Loading是通过代码方式实现，为了学习以及简化的目的，通过XAML方式一步一步梳理。 LoadingLoading 添加Canvas ClipToBounds裁剪多余的部分 添加圆点 如何让这个点进行圆形运动，并且各个点运动轨迹有重力感？..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://nas.ilyl.life:8092/wpf/controls/loading/loading-animation.gif =200x200"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-26T07:17:54.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"旋转动画"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"WPF"}],["meta",{"property":"article:tag","content":"动画"}],["meta",{"property":"article:published_time","content":"2024-01-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-26T07:17:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"旋转动画\\",\\"image\\":[\\"https://nas.ilyl.life:8092/wpf/controls/loading/loading-animation.gif =200x200\\",\\"https://nas.ilyl.life:8092/wpf/controls/loading/loading-step1.png =200x200\\",\\"https://nas.ilyl.life:8092/wpf/controls/loading/loading-step2.png =200x200\\",\\"https://nas.ilyl.life:8092/wpf/controls/loading/loading-step3.gif =200x200\\",\\"https://nas.ilyl.life:8092/wpf/controls/loading/loading-step4.png =200x200\\",\\"https://nas.ilyl.life:8092/wpf/controls/loading/loading-step5.gif =200x200\\",\\"https://nas.ilyl.life:8092/wpf/controls/loading/loading-step6.gif =200x200\\",\\"https://nas.ilyl.life:8092/wpf/controls/loading/loading-step7.gif =200x200\\",\\"https://nas.ilyl.life:8092/wpf/controls/loading/loading-step8.gif =200x200\\",\\"https://nas.ilyl.life:8092/wpf/controls/loading/loading-step9.gif =200x200\\",\\"https://nas.ilyl.life:8092/wpf/controls/loading/loading-step10.gif =200x200\\"],\\"datePublished\\":\\"2024-01-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-26T07:17:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"添加Canvas","slug":"添加canvas","link":"#添加canvas","children":[]},{"level":2,"title":"添加圆点","slug":"添加圆点","link":"#添加圆点","children":[]},{"level":2,"title":"匀速运动","slug":"匀速运动","link":"#匀速运动","children":[{"level":3,"title":"初具成效","slug":"初具成效","link":"#初具成效","children":[]}]},{"level":2,"title":"加减速运动","slug":"加减速运动","link":"#加减速运动","children":[{"level":3,"title":"设置启动时间","slug":"设置启动时间","link":"#设置启动时间","children":[]},{"level":3,"title":"关键帧动画","slug":"关键帧动画","link":"#关键帧动画","children":[]}]},{"level":2,"title":"完整示例","slug":"完整示例","link":"#完整示例","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1706253474000,"updatedTime":1706253474000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":1}]},"readingTime":{"minutes":8.48,"words":2543},"filePathRelative":"cs/wpf/angle-animation.md","localizedDate":"2024年1月25日","excerpt":"<p>在做主题控件时，涉及到了<code>Loading</code>加载控件，无从下手，本着学习的目的，参考了<a href=\\"https://handyorg.github.io/handycontrol/extend_controls/loading/index.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">HandryOrg</a>。</p>\\n<p>发现HC的Loading是通过代码方式实现，为了学习以及简化的目的，通过XAML方式一步一步梳理。</p>\\n<figure><img src=\\"https://nas.ilyl.life:8092/wpf/controls/loading/loading-animation.gif\\" alt=\\"Loading\\" width=\\"200\\" height=\\"200\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>Loading</figcaption></figure>","autoDesc":true}');export{t as data};
