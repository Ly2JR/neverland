import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

/**
 * 替换原来的原创
 */
const OriginalInfo = path.resolve(__dirname, "./components/original/index.ts");

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  head: [
    [
      "script",
      {},
      `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?e0f4e638f3c9bb2b41419a3b473edbc4";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    `,
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "乌龙茶有点甜",
      description: "乌龙茶有点甜的博客",
    },
  },

  theme,

  alias: {
    "@theme-hope/modules/info/components/OriginalInfo": OriginalInfo,
  },

  // Enable it with pwa
  shouldPrefetch: false,
});
