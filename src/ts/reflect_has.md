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

<!--sfc antd 有问题,element-plus可以-->
<!-- ::: vue-playground Reflect.has

@file App.vue

```vue
<template>
  <a-tree
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
    checkable
    :tree-data="treeData"
  >
    <template #title="{ title, key }">
      <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
      <template v-else>{{ title }}</template>
    </template>
  </a-tree>
</template>
<script lang="ts" setup>
import type { TreeProps } from "ant-design-vue";
import { defineComponent, ref, watch, getCurrentInstance } from "vue";
import Antd from "antDesignVue";
getCurrentInstance.appContext.use(Antd);
const treeData: TreeProps["treeData"] = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        disabled: true,
        children: [
          { title: "leaf", key: "0-0-0-0", disableCheckbox: true },
          { title: "leaf", key: "0-0-0-1" },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [{ key: "0-0-1-0", title: "sss" }],
      },
    ],
  },
];
const expandedKeys = ref<string[]>(["0-0-0", "0-0-1"]);
const selectedKeys = ref<string[]>(["0-0-0", "0-0-1"]);
const checkedKeys = ref<string[]>(["0-0-0", "0-0-1"]);
watch(expandedKeys, () => {
  console.log("expandedKeys", expandedKeys);
});
watch(selectedKeys, () => {
  console.log("selectedKeys", selectedKeys);
});
watch(checkedKeys, () => {
  console.log("checkedKeys", checkedKeys);
});
</script>
```

@import

```json
{
  "imports": {
    "vue": "https://play.vuejs.org/vue.runtime.esm-browser.js",
    "antDesignVue": "https://cdn.jsdelivr.net/npm/ant-design-vue@3.2.20/+esm"
  }
}
```

@setting

```json
{
  "showCompileOutput": true
}
```

::: -->
