import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "梦幻岛", icon: "fontisto:island", link: "/hope/" },
  {
    text: "博文",
    icon: "mdi:toolbox",
    prefix: "/posts/",
    children: [
      {
        text: "网络",
        icon: "edit",
        prefix: "network/",
        children: [
          { text: "路由器", icon: "edit", link: "router" },
        ],
      },
    ],
  },
]);
