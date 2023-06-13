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
        {
          text: "辅助",
          icon: "icon-park:tool",
          prefix: "utility/",
          link: "utility/README.md",
        },
      ],
    },
    {
      text: "Web",
      icon: "logos:microsoft-edge",
      prefix: "web/",
      children: [
        {
          text: "提交规范",
          icon: "vscode-icons:file-type-commitlint",
          link: "lint.md",
        },
        {
          text: "Vue",
          icon: "vscode-icons:file-type-vue",
          prefix: "vue/",
          children: "structure",
        },
      ],
    },
    {
      text: "TypeScript",
      icon: "vscode-icons:file-type-typescript-official",
      prefix: "ts/",
      children: "structure",
    },
    {
      text: "工具箱",
      icon: "fluent-emoji-flat:toolbox",
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
