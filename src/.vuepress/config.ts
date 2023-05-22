import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "乌龙茶有点甜",
      description: "乌龙茶有点甜的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
