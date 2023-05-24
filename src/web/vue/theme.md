---
title: 主题色
icon: octicon:issue-closed-16
date: 2023-05-24
dir.order: 1
editLink: false
footer: false
isOriginal: true
category:
  - Web
tag:
  - Vue
  - 主题色
---

全局更改主题色有多种方式。

::: vue-playground CSS3 变量

@file App.vue

```vue
<template>
  <div ref="el" style="--color: #7fa998; color: var(--color)">
    Sample text, {{ color }}
  </div>
  <button @click="switchColor">Change Color</button>
  <div
    ref="elv"
    style="--color: #7fa998; --color-one: #df8543;"
    :style="{ color: colorVal }"
  >
    Sample text, {{ key }}: {{ colorVal }}
  </div>
  <button style="margin-left: 0;" @click="changeVar">
    Change Color Variable
  </button>
</template>
<script setup lang="ts">
import { useCssVar } from "@vueuse/core";
import { ref } from "vue";
const el = ref(null);
const color = useCssVar("--color", el);
function switchColor() {
  if (color.value === "#df8543") color.value = "#7fa998";
  else color.value = "#df8543";
}
const elv = ref(null);
const key = ref("--color");
const colorVal = useCssVar(key, elv);
function changeVar() {
  if (key.value === "--color") key.value = "--color-one";
  else key.value = "--color";
}
</script>
```

@import

```json
{
  "imports": {
    "vue": "https://sfc.vuejs.org/vue.runtime.esm-browser.js",
    "@vueuse/core": "https://unpkg.com/@vueuse/core/index.mjs",
    "@vueuse/shared": "https://unpkg.com/@vueuse/shared/index.mjs",
    "vue-demi": "https://unpkg.com/vue-demi/lib/index.mjs"
  }
}
```

:::