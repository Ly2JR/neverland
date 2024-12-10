import { hopeTheme } from "vuepress-theme-hope";
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
import { pwa, copyright, markdown, componentOptions } from "./plugins/index";

export default hopeTheme(
  {
    hostname: HOST_NAME,

    author: {
      name: AUTHOR,
      url: HOST_NAME,
      email: E_MAIL,
    },

    iconAssets: "iconify",

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
       * 启用Markdown增强
       */
      mdEnhance: markdown,

      /**
       * 启用pwa
       */
      pwa,

      /**
       * 启用复制时的版权信息
       */
      copyright,
    },
  },
  {
    /**
     * 自定义组件启用
     */
    custom: true,
  },
);
