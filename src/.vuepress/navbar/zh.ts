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
        text: "工具箱",
        icon: "mdi:tools",
        link: "tools/",
      },
      {
        text: "桌面",
        icon: "fxemoji:personalcomputer",
        link: "cs/",
      },
      {
        text: "Web",
        icon: "logos:microsoft-edge",
        link: "web/lint.md",
      },
      {
        text: "TypeScript",
        icon: "vscode-icons:file-type-typescript-official",
        link: "ts/reflect_has.md",
      },
    ],
  },
  { text: "关于", icon: "cib:about-me", link: "/about/" },
]);
