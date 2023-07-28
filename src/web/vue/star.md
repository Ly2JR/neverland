---
title: 必填项*
date: 2023-07-28
dir.order: 5
order: 5
editLink: false
footer: false
isOriginal: true
category:
  - Web
---

在某些情况下需要在内容的前方加一些特殊内容显示，使用[::before](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before)能很好的解决这个问题。

```cs
 label.xrequired::before {
    color: red;
    content: '*';
  }
```

::: normal-demo Demo 演示

```html
<label class="xrequired">必填项</label>
```

```css
 label.xrequired::before {
    color: red;
    content: '*';
  }
```

:::
