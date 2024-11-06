---
title: 主题色
date: 2023-05-25
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

关键在于使用[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，定义在伪根类[`:root`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)下，可以全局访问，并通过改变变量的值，使全局生效。

- 使用[v-bind-css](https://cn.vuejs.org/api/sfc-css-features.html#v-bind-in-css)

::: vue-playground v-bind

@file App.vue

```vue
<script setup>
import { ref } from "vue";
const color = ref("red");
function changeColor() {
  if (color.value === "red") {
    color.value = "blue";
  } else {
    color.value = "red";
  }
}
</script>
<template>
  <div class="text">hello</div>
  <button @click="changeColor">Change</button>
</template>

<style>
.text {
  color: v-bind(color);
}
</style>
```

:::

- 使用[useCssVar](https://vueuse.org/core/useCssVar/)

::: vue-playground useCssVar

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

- 使用[setProperty](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration/setProperty)

::: warning
麻了,[`vue-demo`](https://plugin-md-enhance.vuejs.press/zh/guide/demo/vue.html#%E6%A0%BC%E5%BC%8F)使用[`ShadowDom`](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)隔离，无法使用[`ref`](https://cn.vuejs.org/guide/essentials/template-refs.html#ref-on-component)。

通过直接对`document`操作。使用[`document.querySelector`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector),[`document.getElementById`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementById)来获取元素 Dom。

`ShadowDom`内访问外部元素，请加上`window`,使用`window.document`即可。
:::

::: vue-demo setProperty

```vue
<template>
  <div ref="el" id="el" class="box">Sample text, {{ color }}</div>
  <button @click="switchColor">{{ theme }}</button>
</template>
<script>
export default {
  setup() {
    const { ref, onMounted } = Vue;
    const el = ref(null);
    const color = ref("");
    const theme = ref("夜晚");
    onMounted(() => {
      //el.value = document.querySelector("#el").style;
      el.value = document.getElementById("el").style;
      //el.value=window.document.querySelector(".code-demo-container").shadowRoot.querySelector("#el").style;
      color.value = el.value.getPropertyValue("--color");
    });
    function switchColor() {
      if (theme.value === "白天") {
        color.value = "#7fa998";
        theme.value = "夜晚";
      } else {
        color.value = "#df8543";
        theme.value = "白天";
      }
      el.value.setProperty("--color", color.value);
    }

    return {
      theme,
      color,
      switchColor,
    };
  },
};
</script>
<style>
:root {
  --color: #7fa998;
}
.box {
  color: var(--color, #7fa998);
}
</style>
```

:::

- 使用[CSS](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics)

::: info 场景
有一个现成的框架,实现了`深色模式`,现在要添加自己的页面，如何让自定义页面随着深色模式开启而自动启动。
:::

::: vue-demo CSS

```vue
<template>
  <div data-theme="light" class="box" id="demo">
    {{ color }}
  </div>
  <button @click="switchTheme">{{ themeData }}</button>
</template>
<script>
export default {
  setup() {
    const { ref, onMounted } = Vue;
    const color = ref("#7fa998");
    const themeData = ref("light");
    const themeContainer = ref(null);
    onMounted(() => {
      themeContainer.value = document.querySelector("div[data-theme]");
      const t = document.querySelector("h1");
    });

    function switchTheme() {
      if (themeData.value === "light") {
        themeData.value = "dark";
      } else {
        themeData.value = "light";
      }
      window.document.documentElement.setAttribute(
        "data-theme",
        themeData.value
      );
      //因为shadowDom隔离，模拟
      themeContainer.value.setAttribute("data-theme", themeData.value);
    }

    return {
      themeData,
      color,
      switchTheme,
    };
  },
};
</script>
<style>
:root {
  --demo-color: #7fa998;
}

*[data-theme="light"] {
  --demo-color: #7fa998;
}

*[data-theme="dark"] {
  --demo-color: #df8543;
}
.box {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 0.25em;
  font-weight: bold;
  font-size: 0.75rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.25em;
  transition: all 0.3s;
  cursor: pointer;
  color: var(--demo-color);
}
</style>
```

:::
