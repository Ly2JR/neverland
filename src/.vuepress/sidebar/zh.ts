import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "梦幻岛",
      icon: "fontisto:island",
      prefix: "hope/",
      link: "hope/",
      children: "structure",
    },
    {
      text:'网络',
      icon:'mdi:tools',
      prefix:"network/",
      children: "structure",
    },
  ],
});
