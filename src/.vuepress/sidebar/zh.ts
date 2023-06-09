import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "梦幻岛",
      icon: "fontisto:island",
      prefix: "hope/",
      link: "hope/",
      children: "structure",
    },
    {
      text: "桌面端",
      icon: "mdi:desktop-classic",
      prefix: "cs/",
      link: "cs/README.md",
      children: [
        {
          text: "C++",
          icon: "vscode-icons:file-type-cpp3",
          prefix: "cpp/",
          children: "structure",
        },
        {
          text: "C#",
          icon: "vscode-icons:file-type-csharp2",
          prefix: "wpf/",
          children: "structure",
        },
      ],
    },
    {
      text: "Web",
      icon: "mdi:microsoft-edge",
      prefix: "web/",
      children: [
        {
          text: "提交规范",
          icon: "ant-design:security-scan-filled",
          link: "lint.md",
        },
        {
          text: "Vue",
          icon: "mdi:vuejs",
          prefix: "vue/",
          children: "structure",
        },
      ],
    },
    {
      text: "TypeScript",
      icon: "fluent:code-ts-16-filled",
      prefix: "ts/",
      children: "structure",
    },
    {
      text: "工具箱",
      icon: "mdi:tools",
      prefix: "tools/",
      link: "tools/",
      children: [
        {
          text: "网络",
          icon: "tabler:network",
          prefix: "network/",
          children: "structure",
        },
        {
          text: "VMware",
          icon: "clarity:vm-solid",
          prefix: "vmware/",
          children: "structure",
        },
      ],
    },
  ],
});
