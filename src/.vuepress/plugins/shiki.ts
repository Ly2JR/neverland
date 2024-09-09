import { shikiPlugin, ShikiPluginOptions } from "@vuepress/plugin-shiki";
export const shiki: ShikiPluginOptions = {
  langs: [
    "c++",
    "c#",
    "java",
    "json",
    "nginx",
    "powershell",
    "razor",
    "sql",
    "typescript",
    "xml",
    "text",
  ],
  lineNumbers: true,
};
