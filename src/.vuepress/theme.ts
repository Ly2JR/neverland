import { hopeTheme, shiki, useShikiPlugin } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";
import {
  AUTHOR,
  HOST_NAME,
  E_MAIL,
  REPO,
  GITHUB,
  COPYRIGHT,
  DESCRIPTION,
} from "./consts";
import { pwa, copyright, componentOptions } from "./plugins/index";

export default hopeTheme(
  {
    hostname: HOST_NAME,

    author: {
      name: AUTHOR,
      url: HOST_NAME,
      email: E_MAIL,
    },

    logo: "/logo.svg",

    repo: REPO,

    docsDir: "docs",

    fullscreen: true,

    blog: {
      medias: {
        Email: E_MAIL,
        GitHub: GITHUB,
      },
    },
    locales: {
      /**
       * Chinese locale config
       */
      "/": {
        // navbar
        navbar: zhNavbar,

        // sidebar
        sidebar: zhSidebar,

        footer: COPYRIGHT,

        displayFooter: true,

        blog: {
          description: DESCRIPTION,
        },

        // page meta
        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },
    },

    plugins: {
      blog: true,
      /**
       * 组件
       */
      components: componentOptions,

      /**
       * 启用pwa
       */
      pwa,

      /**
       * 启用复制时的版权信息
       */
      copyright,
    },

    markdown: {
      highlighter: {
        type: "shiki",
      },
      align: true, //对齐
      component: true, //组件
      tasklist: true, //任务
      tabs: true,
      figure: true,
      flowchart: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mermaid: true,
      vuePlayground: true,
      demo: true,
      playground: {
        presets: ["ts", "vue", "unocss"],
      },
    },
  },
  {
    /**
     * 自定义组件启用
     */
    custom: true,
  },
);
