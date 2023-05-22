import { hopeTheme } from 'vuepress-theme-hope';
import { zhNavbar } from './navbar/index.js';
import { zhSidebar } from './sidebar/index.js';

export default hopeTheme({
  hostname: 'https://ilyl.life',

  author: {
    name: '乌龙茶',
    url: 'https://ilyl.life',
    email:'982474256@qq.com'
  },

  iconAssets: 'iconify',

  logo: '/logo.svg',

  repo: 'https://github.com/Ly2JR/neverland',

  docsDir: 'docs',

  fullscreen:true,

  blog: {
    medias: {
      Email: 'mailto:982474256@qq.com',
      GitHub: 'https://github.com/ly2jr',
    },
  },
  locales: {
    
    /**
     * Chinese locale config
     */
    '/': {

      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "<a href='http://beian.miit.gov.cn' target='_blank'>苏ICP备2021053735号-1</a>&nbsp;&nbsp;<img src='备案图标.png' alt='公网备案'/>&nbsp;&nbsp;<a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32118302000302' target='_blank'>苏公网安备32118302000302号</a>",

      displayFooter: true,

      blog: {
        description: '一个代码搬运工',
      },

      // page meta
      metaLocales: {
        editLink: '在 GitHub 上编辑此页',

      },
    },
  },


  plugins: {
    blog: true,

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: '/favicon.ico',
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: '/assets/icon/apple-icon-152.png',
    //     statusBarColor: 'black',
    //   },
    //   msTile: {
    //     image: '/assets/icon/ms-icon-144.png',
    //     color: '#ffffff',
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: '/assets/icon/chrome-mask-512.png',
    //         sizes: '512x512',
    //         purpose: 'maskable',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/assets/icon/chrome-mask-192.png',
    //         sizes: '192x192',
    //         purpose: 'maskable',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/assets/icon/chrome-512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/assets/icon/chrome-192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: 'Demo',
    //         short_name: 'Demo',
    //         url: '/demo/',
    //         icons: [
    //           {
    //             src: '/assets/icon/guide-maskable.png',
    //             sizes: '192x192',
    //             purpose: 'maskable',
    //             type: 'image/png',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },

    /**
     * 设置版权信息
     */
    copyright:{
      author:'乌龙茶',
      license:'MIT',
      triggerWords:10,
      disableCopy:false,
      disableSelection:false,
    }
  },
});
