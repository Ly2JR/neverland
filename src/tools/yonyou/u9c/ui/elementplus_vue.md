---
title: U9C 集成Vue
date: 2025-02-07
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U9C
  - ElementPlus
  - Vue
---

既然U9C可以集成MVC页面，那么也应该可以集成ElementPlus和Vue。

![ElementPlus和VUE](https://image.ilyl.life:8443/yonyou/u9c/ui/mvc/u9c_elementplus_vue_ui.gif)

::: warning
最终还是Razor页面，在集成ElementPlus和Vue时，可能需要部分转换
:::

## 引入ElementPlus

通过浏览器的方式引入

```html
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/element-plus/dist/index.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/element-plus"></script>
```

## 引入Vue3

通过浏览器的方式引入，使用选项式API开发

```html
<script src="https://unpkg.com/vue@3"></script>
```

### [集成ElementPlus](https://element-plus.org/zh-CN/guide/installation#hello-world)

```javascript
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <script src="https://unpkg.com/vue@3"></script>
    <!-- import CSS -->
    <link rel="stylesheet" href="https://unpkg.com/element-plus/dist/index.css">
    <!-- import JavaScript -->
    <script src="https://unpkg.com/element-plus"></script>
    <title>Element Plus demo</title>
  </head>
  <body>
    <div id="app">
      <el-button>{{ message }}</el-button>
    </div>
    <script>
      const App = {
        data() {
          return {
            message: "Hello Element Plus",
          };
        },
      };
      const app = Vue.createApp(App);
      app.use(ElementPlus);
      app.mount("#app");
    </script>
  </body>
</html>
```

## 与U9C数据交互

自定义的ElementPlus页面通过[U9C WebAPI](../interface/webapi.md)方式交互即可