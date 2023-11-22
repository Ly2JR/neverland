//不影响,可以通过安装插件`pnpm add vuepress-plugin-pwa2@next -D`解决
import type { PWAOptions } from "vuepress-plugin-pwa2";

export const pwa: PWAOptions = {
  favicon: "/favicon.ico",
  cacheHTML: true,
  cachePic: true,
  appendBase: true,
  apple: {
    icon: "/assets/icon/apple-icon-152.png",
    statusBarColor: "black",
  },
  msTile: {
    image: "/assets/icon/ms-icon-144.png",
    color: "#ffffff",
  },
  manifest: {
    icons: [
      {
        src: "/assets/icon/chrome-64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/assets/icon/chrome-128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/assets/icon/chrome-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/icon/chrome-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Neverland",
        short_name: "Neverland",
        url: "/hope/",
        icons: [
          {
            src: "/assets/icon/guide-maskable.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
        ],
      },
    ],
  },
};
