import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "@vuepress/utils"

const __dirname=getDirname(import.meta.url);

/**
 * 替换原来的原创
 */
const OriginalInfo=path.resolve(__dirname,"./components/original/index.vue")

export default defineUserConfig({
  base: "/",
  lang:'zh-CN',
  locales: {
    "/": {
      lang: "zh-CN",
      title: "乌龙茶有点甜",
      description: "乌龙茶有点甜的博客",
    },
  },

  theme,

  alias:{
    "@theme-hope/modules/info/components/OriginalInfo":OriginalInfo
  },

  // Enable it with pwa
   shouldPrefetch: false,
});
