---
title: Promise队列
date: 2023-08-18
editLink: false
footer: false
category:
  - 工具箱
tag:
  - TS
---

前端需要把数据多次提交给后端，然后返回的数据填充到真正的数据，在提交给后端。

正常数据由后端处理，但是放在了前端。

另外使用[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)没有问题，但是有问题的在于后端不支持并发，比如多次提交文件等耗时作业。

这时需要将Promise调整为队列，依次提交处理，然后在一并最终提交给后端。

## 演示

通过Promise提交时出现验证在正在的提交之后。

而通过Promise.all批量验证时，由于后端接口不支持并发，导致始终验证失败。

::: vue-playground Promise提交不通过

@file App.vue

```vue
<script setup>
import { ref,reactive } from 'vue'

const editData=reactive([{
  id:1,
  name:'aaa',
  url:''
},{
  id:2,
  name:'bbb',
  url:''
}]);

const result=ref('');

const simulateCheck=(id)=> new Promise((resolve)=>{
    setTimeout(() => {
      resolve(`${id+2}`);
    }, id*2);
});

const onSubmit= async ()=>{
  editData.forEach( async (d)=>{
    if(d.url.length===0){
      const ret=await simulateCheck(d.id);
      d.url=ret;
    }
  });

  const p=new Promise((resolve,reject)=>{
     const wait=editData.filter(f=>f.url.length===0);
     if(wait.length===0){
      resolve("提交成功");
     }else{
      reject("存在未提交的数据");
     }
  });

  result.value=await p;
};

</script>
<template>
  <button type="button" @click="onSubmit">提交</button>
  <label>提交结果:{{result}}</label>
  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>名称</th>
        <th>后端返回数据</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in editData" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.url}}</td>
      </tr>
    </tbody>
  </table>
</template>

```

@import

```json
{
  "imports": {
    "vue": "https://play.vuejs.org/vue.runtime.esm-browser.js",
    "vue/server-renderer": "https://play.vuejs.org/server-renderer.esm-browser.js"
  }
}
```

:::

通过对Promise进行队列处理，保证验证追条提交后，最后在提交。

::: vue-playground Promise加队列

@file App.vue

```vue
<script setup>
import { ref,reactive } from 'vue'

const editData=reactive([{
  id:1,
  name:'aaa',
  url:''
},{
  id:2,
  name:'bbb',
  url:''
}]);

const result=ref('');

const simulateCheck=(id)=> new Promise((resolve)=>{
    setTimeout(() => {
      resolve(`${id+2}`);
    }, id*2);
});

const simulatePost=()=>{
  const p= new Promise((resolve,reject)=>{
     const wait=editData.filter(f=>f.url.length===0);
     if(wait.length===0){
      resolve("提交成功");
     }else{
      reject("存在未提交的数据");
     }
  });
  return p;
}

const onSubmit= async ()=>{
  let q=Promise.resolve('');

  editData.forEach( async (d)=>{
    if(d.url.length===0){
      q=q.then(async(res)=>{
        const ret=await simulateCheck(d.id);
        d.url=ret;
        return new Promise((resolve)=>{resolve(ret)})
      })
    }
  });
  q.then(async (res)=>{
    const ret=await simulatePost();
    result.value=ret;
  })
};

</script>
<template>
  <button type="button" @click="onSubmit">提交</button>
  <label>提交结果:{{result}}</label>
  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>名称</th>
        <th>后端返回数据</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in editData" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.url}}</td>
      </tr>
    </tbody>
  </table>
</template>

```

@import

```json
{
  "imports": {
    "vue": "https://play.vuejs.org/vue.runtime.esm-browser.js",
    "vue/server-renderer": "https://play.vuejs.org/server-renderer.esm-browser.js"
  }
}
```

:::
