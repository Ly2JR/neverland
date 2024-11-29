---
title: 禁止事件
date: 2023-07-14
editLink: false
footer: false
isOriginal: true
category:
  - Web
---

在某些情况下需要禁用事件，通常会提供`disabled`或者`readonly`满足，但是会存在部分局限性。

例如：`disabled`是置灰了，而`readonly`不是每个控件都有，这时需要其他方式控制禁用事件。

场景: `ant-design-vue`里的`checkbox-group`禁用，`disabled`置灰了，调整原样，但是不能点击。

## CSS

使用CSS来禁用，[pointer-events](https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events)

::: tabs

@tab ant design vue

```css{2}
.ant-checkbox-group {
    pointer-events: none;
    cursor: not-allowed;
  }
```

@tab element-plus

```css{2}
.el-checkbox{
  pointer-events: none;
  cursor: not-allowed;
}
```

:::

::: vue-playground pointer-events

@file App.vue

```vue
<script setup>
import { ref, getCurrentInstance } from 'vue'
import ElementPlus from 'element-plus' 
  
getCurrentInstance().appContext.app.use(ElementPlus)
</script>

<template>
    <el-row class="mb-4">
    <el-checkbox>Normal</el-checkbox>
  </el-row>
   <el-row class="mb-4">
    <el-alert title="Checked被禁用，无法被选择" type="success" />
    <div class="maunal">
        <el-checkbox :checked="true">Checked</el-checkbox>
    </div>
  </el-row>
   <el-row class="mb-4">
    <el-checkbox disabled>Disabled</el-checkbox>
  </el-row>
</template>

<style>
  @import "https://unpkg.com/element-plus@2/dist/index.css";

  .maunal .is-checked{
    pointer-events: none;
    cursor: not-allowed;
  }
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

## event

使用VUE提供的[事件](https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers)

::: tabs

@tab ant design vue

```html {2}
<a-checkbox-group
    @click.prevent.self
/>
```

@tab element-plus

```html {2}
<el-checkbox
    @click.prevent.self
/>
```

:::

::: vue-playground pointer-events

@file App.vue

```vue
<script setup>
import { ref, getCurrentInstance } from 'vue'
import ElementPlus from 'element-plus' 
  
getCurrentInstance().appContext.app.use(ElementPlus)
</script>

<template>
    <el-row class="mb-4">
    <el-checkbox>Normal</el-checkbox>
  </el-row>
   <el-row class="mb-4">
    <el-alert title="Checked被禁用，无法被选择" type="success" />
    <el-checkbox :checked="true"  @click.prevent.self>Checked</el-checkbox>
  </el-row>
   <el-row class="mb-4">
    <el-checkbox disabled>Disabled</el-checkbox>
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
