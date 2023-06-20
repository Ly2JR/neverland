import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "梦幻岛",
      icon: "noto:desert-island",
      prefix: "hope/",
      link: "hope/",
      children: "structure",
    },
    {
      text: "桌面端",
      icon: "fxemoji:personalcomputer",
      prefix: "cs/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Web端",
      icon: "logos:microsoft-edge",
      prefix: "web/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "工具箱",
      icon: "fluent-emoji-flat:toolbox",
      prefix: "tools/",
      collapsible: true,
      children: [
        {
          text: "正则表达式",
          icon: "material-symbols:regular-expression",
          link: "regular-expressions.md",
        },
        {
          text: "C#",
          icon: "devicon:csharp",
          prefix: "csharp/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "TypeScript",
          icon: "vscode-icons:file-type-typescript-official",
          prefix: "ts/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "FFMPEG",
          icon: "logos:ffmpeg-icon",
          prefix: "ffmpeg/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "Excel",
          icon: "vscode-icons:file-type-excel",
          prefix: "excel/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "虚拟机",
          icon: "clarity:vm-solid",
          prefix: "vmware/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "数据库",
          icon: "material-symbols:database",
          prefix: "databases/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "用友U8+",
          prefix: "yonyou/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "私有云",
          icon: "mdi:nas",
          prefix: "nas/",
          children: "structure",
          collapsible: true,
        },
      ],
    },
  ],
});
