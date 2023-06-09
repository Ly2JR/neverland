---
title: antd
icon: devicon:antdesign
date: 2023-06-01
dir.order: 2
editLink: false
footer: false
isOriginal: true
category:
  - Web
tag:
  - ant-design-vue
---

[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn) 浏览器直接引入

```html
<html>
    <head>
    <script src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.prod.js"></script>
    <script src="https://unpkg.com/dayjs/dayjs.min.js"></script>
    <script src="https://unpkg.com/dayjs/plugin/customParseFormat.js"></script>
    <script src="https://unpkg.com/dayjs/plugin/weekday.js"></script>
    <script src="https://unpkg.com/dayjs/plugin/localeData.js"></script>
    <script src="https://unpkg.com/dayjs/plugin/weekOfYear.js"></script>
    <script src="https://unpkg.com/dayjs/plugin/weekYear.js"></script>
    <script src="https://unpkg.com/dayjs/plugin/advancedFormat.js"></script>
    <script src="https://unpkg.com/dayjs/plugin/quarterOfYear.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/ant-design-vue@3.2.20/dist/antd.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ant-design-vue@3.2.20/dist/antd.min.css">
</head>
    <body>
        <div id="app">
            <a-button>ant-design-vue</a-button>
        </div>
    </body>
    <script>
        Vue.createApp({
        })
        .use(antd)
        .mount('#app')
    </script>
</html>
```