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
      text:'Vue',
      icon:'mdi:vuejs',
      prefix:"web/vue/",
      children: "structure",
    },
    {
      text:'TypeScript',
      icon:'fluent:code-ts-16-filled',
      prefix:"ts/",
      children: "structure",
    },
    {
      text:'工具箱',
      icon:'mdi:tools',
      prefix:'tools/',
      link:'tools/',
      children:[
        {
          text:'网络',
          icon:'tabler:network',
          prefix:"network/",
          children: "structure",
        },
        {
          text:'VMware',
          icon:'clarity:vm-solid',
          prefix:"vmware/",
          children: "structure",
        },
      ]
    },
  ],
});
