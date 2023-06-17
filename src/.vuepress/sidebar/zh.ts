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
      collapsible: true,
      children: [
        {
          text: "C++",
          icon: "vscode-icons:file-type-cpp3",
          prefix: "cpp/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "C#",
          icon: "vscode-icons:file-type-csharp2",
          prefix: "wpf/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "辅助",
          icon: "icon-park:tool",
          prefix: "utility/",
          collapsible: true,
          link: "utility/README.md",
        },
      ],
    },
    {
      text: "Web",
      icon: "logos:microsoft-edge",
      prefix: "web/",
      collapsible: true,
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
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "TypeScript",
      icon: "vscode-icons:file-type-typescript-official",
      prefix: "ts/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "工具箱",
      icon: "fluent-emoji-flat:toolbox",
      prefix: "tools/",
      link: "tools/README.md",
      collapsible: true,
      children: [
        {
          text: "FFMPEG",
          icon: "logos:ffmpeg-icon",
          prefix: "ffmpeg/",
          children: "structure",
          collapsible: true,
          link: "ffmpeg/README.md",
        },
        {
          text: "VMware",
          icon: "clarity:vm-solid",
          prefix: "vmware/",
          children: "structure",
          collapsible: true,
          link: "vmware/README.md",
        },
        {
          text: "私有云",
          icon: "mdi:nas",
          prefix: "nas/",
          children: "structure",
          collapsible: true,
          link: "nas/README.md",
        },
      ],
    },
  ],
});
