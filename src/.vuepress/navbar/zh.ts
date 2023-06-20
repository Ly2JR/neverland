import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "梦幻岛",
    icon: "fontisto:island",
    link: "/hope/",
    children: [
      {
        text: "影院",
        icon: "icon-park-solid:movie",
        link: "https://nas.ilyl.life:8091/",
      },
      {
        text: "音乐",
        icon: "fontisto:apple-music",
        link: "https://nas.ilyl.life:8089/audio",
      },
      {
        text: "网盘",
        icon: "zondicons:hard-drive",
        link: "https://nas.ilyl.life:8089/file",
      },
      {
        text: "图床",
        icon: "ic:baseline-photo-camera",
        link: "https://nas.ilyl.life:8092/default.png",
      },
    ],
  },
  {
    text: "博文",
    icon: "mdi:toolbox",
    prefix: "/",
    children: [
      {
        text: "桌面端",
        icon: "fxemoji:personalcomputer",
        link: "cs/",
      },
      {
        text: "Web端",
        icon: "logos:microsoft-edge",
        link: "web/",
      },
      {
        text: "工具箱",
        icon: "openmoji:toolbox",
        link: "tools/regular-expressions.md",
      },
    ],
  },
  { text: "关于", icon: "cib:about-me", link: "/about/" },
]);
