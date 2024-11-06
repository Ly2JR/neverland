import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "梦幻岛",
    link: "/hope/",
    children: [
      {
        text: "影院",
        link: "https://nas.ilyl.life:8091/",
      },
      {
        text: "音乐",
        link: "https://nas.ilyl.life:8089/audio",
      },
      {
        text: "网盘",
        link: "https://nas.ilyl.life:8089/file",
      },
      {
        text: "图床",
        link: "https://nas.ilyl.life:8092/default.png",
      },
    ],
  },
  {
    text: "博文",
    prefix: "/",
    children: [
      {
        text: "桌面端",
        link: "cs/",
      },
      {
        text: "Web端",
        link: "web/",
      },
      {
        text: "工具箱",
        link: "tools/regular_expressions.md",
      },
    ],
  },
  { text: "关于", link: "/about/" },
]);
