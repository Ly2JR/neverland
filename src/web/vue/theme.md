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

::: vue-demo CSS3变量

```vue
<template>
  <div data-theme="light" class="box">
    <code>vuepress-theme-hope</code> is
  </div>
   <button @click="switchTheme">改变颜色</button>
</template>
<script>
const { ref } = Vue;

export default {
  setup() {
    const message = ref("powerful");

    const switchTheme = () => {
      message.value = "very " + message.value;
    };

    return {
      message,
      switchTheme,
    };
  },
};
</script>
<style>

html[data-them="light"]{
    
}
html[data-them="dark"]{
    
}

.box span {
  color: red;
}
</style>
```

:::
