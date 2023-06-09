//不影响,可以通过安装插件`vuepress-plugin-md-enhance@next -D`解决
import { MarkdownEnhanceOptions } from "vuepress-plugin-md-enhance";
export const markdown: MarkdownEnhanceOptions = {
  align: true,
  attrs: false,
  chart: false,
  codetabs: true,
  demo: true,
  card: true,
  echarts: false,
  figure: true,
  flowchart: false,
  gfm: false,
  imgLazyload: false,
  imgSize: false,
  include: true,
  katex: false,
  mark: false,
  mermaid: true,
  tasklist: true,
  playground: {
    presets: ["ts", "vue"],
  },
  presentation: {
    plugins: ["highlight", "math", "search", "notes", "zoom"],
  },
  stylize: [
    {
      matcher: "Recommended",
      replacer: ({ tag }) => {
        if (tag === "em")
          return {
            tag: "Badge",
            attrs: { type: "tip" },
            content: "Recommended",
          };
      },
    },
  ],
  sub: false,
  sup: false,
  tabs: false,
  vPre: true,
  vuePlayground: true,
};
