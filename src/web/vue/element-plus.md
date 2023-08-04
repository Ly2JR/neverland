---
title: element-plus
date: 2023-07-28
dir.order: 1
order: 1
editLink: false
footer: false
isOriginal: true
category:
  - Web
tag:
  - element-plus
---

::: vue-playground Element-Plus

@file App.vue

```vue
<script setup>
import { ref, getCurrentInstance } from 'vue'
import ElementPlus from 'element-plus' 
  
getCurrentInstance().appContext.app.use(ElementPlus)
</script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>

<style>
  @import "https://unpkg.com/element-plus@2/dist/index.css";
</style>

```

@import

```json
{
  "imports": {
    "vue": "https://play.vuejs.org/vue.runtime.esm-browser.js",
    "element-plus": "https://unpkg.com/element-plus@2/dist/index.full.min.mjs",
    "vue/server-renderer": "https://play.vuejs.org/server-renderer.esm-browser.js"
  }
}
```

:::
