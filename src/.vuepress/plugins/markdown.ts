//不影响,强迫症否则请安装该插件`vuepress-plugin-md-enhance@next -D`
import {MarkdownEnhanceOptions} from 'vuepress-plugin-md-enhance'
export const markdown:MarkdownEnhanceOptions={
    align: true,
    attrs: true,
    chart: true,
    codetabs: true,
    demo: true,
    card:true,
    echarts: true,
    figure: true,
    flowchart: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    katex: true,
    mark: true,
    mermaid: true,
    playground: {
      presets: ['ts', 'vue'],
    },
    presentation: {
      plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
    },
    stylize: [
      {
        matcher: 'Recommended',
        replacer: ({ tag }) => {
          if (tag === 'em')
            return {
              tag: 'Badge',
              attrs: { type: 'tip' },
              content: 'Recommended',
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    vPre: true,
    vuePlayground: true,
}