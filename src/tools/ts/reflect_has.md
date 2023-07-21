---
title: 检查对象属性
date: 2023-05-30
dir.order: 1
order: 1
editLink: false
footer: false
category:
  - 工具箱
tag:
  - TS
---

在`ts`中使用[`Reflect.has`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has)方法来检查对象属性,同[`in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in)。

::: tip 应用场景
在`ant-design-vue`树形组件中,获取节点的到`key`的值为`number[]|string[]`,反向显示部分节点时，往往通过`{Checked:[],halfChecked:[]}`来赋值，那么无选择时，获取到的数据值不在是原来的`number[]|string[]`而是变为了`{Checked:[],halfChecked:[]}`,这是可以通过`Reflect.has`或`in`来判断对象属性。
:::

::: vue-demo Reflect.has

```vue
<template>
  <pre>{{ objString }}</pre>
  <div>属性: {{ objProperty }}</div>

  <select v-model="objProperty">
    <option disabled value="">请选择</option>
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <div>结果:{{ objRet }}</div>

  <button @click="onCheck">Reflect.has</button>
</template>
<script>
export default {
  setup() {
    const { ref } = Vue;
    const obj = {
      checked: [],
      halfChecked: [],
    };
    const options=[{
      text:"demo",
      value:"demo"
    }];
    Object.keys(obj).forEach(it=>{
      options.push({text:it,value:it});
    });
    const objProperty = ref("");
    const objRet = ref("");
    const objString = JSON.stringify(obj, null, "\t");
    const onCheck = () => {
      const ret = Reflect.has(obj, objProperty.value);
      objRet.value = ret === true ? "包含" : "不包含";
    };
    return {
      options,
      objString,
      objProperty,
      objRet,
      onCheck,
    };
  },
};
</script>
```

```json
{
  "jsfiddle": false
}
```

:::
