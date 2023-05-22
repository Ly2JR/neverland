import { hopeTheme } from 'vuepress-theme-hope';
import { zhNavbar } from './navbar/index.js';
import { zhSidebar } from './sidebar/index.js';
import { AUTHOR,HOST_NAME,E_MAIL,REPO,GITHUB,COPYRIGHT,DESCRIPTION,LICENSE } from './consts';

export default hopeTheme({
  hostname: HOST_NAME,

  author: {
    name: AUTHOR,
    url: HOST_NAME,
    email:E_MAIL
  },

  iconAssets: 'iconify',

  logo: '/logo.svg',

  repo: REPO,

  docsDir: 'docs',

  fullscreen:true,

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
    '/': {

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
      author:AUTHOR,
      license:LICENSE,
      triggerWords:10,
      disableCopy:false,
      disableSelection:false,
    }
  },
});
