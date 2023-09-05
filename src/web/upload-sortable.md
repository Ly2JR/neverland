---
title: 上传与排序
date: 2023-09-04
editLink: false
footer: false
isOriginal: true
category:
  - Web
---

在使用`ant-design-vue`上传组件与`sortablejs`排序组合时，为了实现上传图片后可以排序时，出现了一些问题。

1. vue获取不到上传组件的实例，即`ref`始终为null。
2. sortablejs有排序效果，但是vue绑定的图片数据未变动。
3. 在sortablejs里添加事件处理图片数据顺序，但是排序效果失效。

为了解决这些问题，使用`document`对象操作。

1. 获取上传组件的Dom对象

    ```js
    const u = document.getElementsByClassName('ant-upload-list')[0];
    ```

2. 禁用上传组件的上传按钮排序

    使用`sortablejs`里的`filter`属性

    ```js
    Sortable.create(u, {
        filter: '.ant-upload',
        ...
    });
    ```

3. 对上传成功后的图片启用排序

    ```js
    Sortable.create(u, {
        draggable: '.ant-upload-list-picture-card-container',
        ...
    });
    ```

## 完整的上传组件与排序功能

```js
const root = document.getElementsByClassName('ant-upload-list')[0];
if (root !== null) {
    sortable = Sortable.create(root, {
    draggable: '.ant-upload-list-picture-card-container',
    filter: '.ant-upload',
    sort: true,
    });
}
```

## 解决图片排序与图片数据不一致

需要明确的有两点：

1. `fileList`对象存储的是图片上传成功的数据。
2. sortablejs已经实现了排序效果，只是对应的数据排序。

在实时处理排序数据时，出现各种问题，但是这与最终需要提交的数据看似一致，其实有步骤差异。

即只要保证最终提交的数据是排序的效果即可，不一定非要实时排序及实时调整数据。

还是通过`domcument`来解决排序问题。

### 获取上传组件排序数据

```js
const orders = document.querySelectorAll('.ant-upload-list-item-image');
const fileSort = [];
orders.forEach((o, index) => {
    let name = '';
    if (o.src.startsWith('data')) {//新上传文件，base64图片预览
        name = o.alt;
    } else if (o.src.startsWith('http')) {//已上传文件
        const arr = o.src.split('/');
        name = arr[arr.length - 1];
    }
    const i = fileList.value?.findIndex((f) => f.name == name);
    if (i !== undefined && i > -1) {
        let url = '';
        if (fileList.value[i].response) {
            url = fileList.value[i].response;
        }
        if (fileList.value[i].url) {
            url = fileList.value[i].url;
        }
        fileSort.push({ url: url, sort: index + 1 });
    }
});
```

只要在最终提交前进行排序数据提取即可。
