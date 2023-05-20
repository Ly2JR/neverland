import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "梦幻岛",
      icon: "creative",
      prefix: "hope/",
      link: "hope/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "network/",
      children: "structure",
    },
    "intro",
  ],
});
