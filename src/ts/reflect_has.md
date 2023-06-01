---
title: 检查对象属性
icon: octicon:issue-closed-16
date: 2023-05-30
dir.order: 1
editLink: false
footer: false
category:
  - TypeScript
tag:
  - TS
  - JS
---

在`ts`中使用[`Reflect.has`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has)方法来检查对象属性,同[`in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in)。

- 应用场景

在`ant-design-vue`树形组件中,获取节点的到`key`的值为`number[]|string[]`,反向显示部分节点时，往往通过`{Checked:[],halfChecked:[]}`来赋值，那么无选择时，获取到的数据值不在是原来的`number[]|string[]`而是变为了`{Checked:[],halfChecked:[]}`,这是可以通过`Reflect.has`或`in`来判断对象属性。

::: vue-demo 一个 Vue Option 演示

```vue
<template>
   <a-button>ant-design-vue</a-button>
</template>

<script>
export default {
  setup() {
    Vue.getCurrentInstance().appContext.app.use(window.antd);
  },
};
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/ant-design-vue@3.2.20/dist/antd.min.css";
</style>
```

```json
{
  "jsLib": [
    "https://unpkg.com/dayjs/dayjs.min.js",
    "https://unpkg.com/dayjs/plugin/customParseFormat.js",
    "https://unpkg.com/dayjs/plugin/customParseFormat.js",
    "https://unpkg.com/dayjs/plugin/weekday.js",
    "https://unpkg.com/dayjs/plugin/localeData.js",
    "https://unpkg.com/dayjs/plugin/weekOfYear.js",
    "https://unpkg.com/dayjs/plugin/weekYear.js",
    "https://unpkg.com/dayjs/plugin/advancedFormat.js",
    "https://unpkg.com/dayjs/plugin/quarterOfYear.js",
    "https://cdn.jsdelivr.net/npm/ant-design-vue@3.2.20/dist/antd.min.js"
  ],
  "cssLib":[
    "https://cdn.jsdelivr.net/npm/ant-design-vue@3.2.20/dist/antd.min.css"
  ]
}
```
:::

