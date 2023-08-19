import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "梦幻岛",
    icon: "/assets/svg/island2.svg",
    link: "/hope/",
    children: [
      {
        text: "影院",
        icon: "/assets/svg/movie.svg",
        link: "https://nas.ilyl.life:8091/",
      },
      {
        text: "音乐",
        icon: "/assets/svg/music.svg",
        link: "https://nas.ilyl.life:8089/audio",
      },
      {
        text: "网盘",
        icon: "/assets/svg/hard-drive.svg",
        link: "https://nas.ilyl.life:8089/file",
      },
      {
        text: "图床",
        icon: "/assets/svg/camera.svg",
        link: "https://nas.ilyl.life:8092/default.png",
      },
    ],
  },
  {
    text: "博文",
    icon: "/assets/svg/toolbox3.svg",
    prefix: "/",
    children: [
      {
        text: "桌面端",
        icon: "/assets/svg/computer.svg",
        link: "cs/",
      },
      {
        text: "Web端",
        icon: "/assets/svg/edge.svg",
        link: "web/",
      },
      {
        text: "工具箱",
        icon: "/assets/svg/toolbox2.svg",
        link: "tools/regular-expressions.md",
      },
    ],
  },
  { text: "关于", icon: "/assets/svg/me.svg", link: "/about/" },
]);
