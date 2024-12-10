//不影响,可以通过安装插件`vuepress-plugin-md-enhance@next -D`解决
import { MarkdownEnhanceOptions } from "vuepress-plugin-md-enhance";
export const markdown: MarkdownEnhanceOptions = {
  align: true,
  attrs: false,
  chart: false,
  codetabs: true,
  demo: true,
  echarts: false,
  figure: true,
  flowchart: true,
  gfm: false,
  imgLazyload: true,
  imgSize: true,
  include: true,
  katex: false,
  mark: false,
  mermaid: true,
  tasklist: true,
  component: true,
  markdownTabs: {
    tabs: true,
  },
  markdownMath: {
    type: "mathjax",
  },
  playground: {
    presets: ["ts", "vue"],
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
  tabs: true,
  vPre: true,
  vuePlayground: true,
};
