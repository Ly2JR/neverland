import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "梦幻岛", icon: "fontisto:island", link: "/hope/" },
  {
    text: "博文",
    icon: "mdi:toolbox",
    prefix: "/",
    children: [
      {
        text: "网络",
        icon: "tabler:network",
        link:'network/README.md'
      }
    ],
  },
  { text: "关于", icon: "cib:about-me", link: "/about/" },
]);
