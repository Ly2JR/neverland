import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "梦幻岛",
      icon: "/assets/svg/island.svg",
      prefix: "hope/",
      link: "hope/",
      children: "structure",
    },
    {
      text: "桌面端",
      icon: "/assets/svg/computer.svg",
      prefix: "cs/",
      collapsible: true,
      //children: "structure",
      children: [
        {
          text: "设计模式",
          icon: "/assets/svg/design.svg",
          prefix: "design-pattern/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "MAUI",
          icon: "/assets/svg/csharp.svg",
          prefix: "maui/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "WPF",
          icon: "/assets/svg/csharp2.svg",
          prefix: "wpf/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "C++",
          icon: "/assets/svg/cpp.svg",
          prefix: "cpp/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Visual Basic",
          icon: "/assets/svg/vb.svg",
          prefix: "vb/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "Web端",
      icon: "/assets/svg/edge.svg",
      prefix: "web/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "工具箱",
      icon: "/assets/svg/toolbox.svg",
      prefix: "tools/",
      collapsible: true,
      children: [
        {
          text: "正则表达式",
          icon: "/assets/svg/regular-expression.svg",
          link: "regular-expressions.md",
        },
        {
          text: "C#",
          icon: "/assets/svg/csharp.svg",
          prefix: "csharp/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "Docker",
          icon: "/assets/svg/docker2.svg",
          prefix: "docker/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "TypeScript",
          icon: "/assets/svg/ts.svg",
          prefix: "ts/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "科大讯飞",
          prefix: "ifly/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "FFMPEG",
          icon: "/assets/svg/ffmpeg.svg",
          prefix: "ffmpeg/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "Excel",
          icon: "/assets/svg/excel.svg",
          prefix: "excel/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "虚拟机",
          icon: "/assets/svg/vmware.svg",
          prefix: "vmware/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "数据库",
          icon: "/assets/svg/database.svg",
          prefix: "databases/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "用友U8+",
          icon: "/assets/svg/yonyou.svg",
          prefix: "yonyou/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "私有云",
          icon: "/assets/svg/nas.svg",
          prefix: "nas/",
          children: "structure",
          collapsible: true,
        },
      ],
    },
  ],
});
