import { prismjsPlugin, PrismjsPluginOptions } from "@vuepress/plugin-prismjs";
export const prismjs: PrismjsPluginOptions = {
  themes: { light: "vs", dark: "atom-dark" },
  lineNumbers: true,
  highlightLines: true,
};
