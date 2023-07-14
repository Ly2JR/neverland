---
title: 禁止事件
date: 2023-07-14
dir.order: 3
order: 3
editLink: false
footer: false
isOriginal: true
category:
  - Web
tag:
  - ant-design-vue
---

在某些情况下需要禁用事件，通常会提供`disabled`或者`readonly`满足，但是会存在部分局限性。

例如：`disabled`是置灰了，而`readonly`不是每个控件都有，这时需要其他方式控制禁用事件。

场景: `ant-design-vue`里的`checkbox-group`禁用，`disabled`置灰了，调整原样，但是不能点击。

## CSS

使用CSS来禁用，[pointer-events](https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events)

```css
.ant-checkbox-group {
    pointer-events: none;
    cursor: not-allowed;
  }
```

## event

使用VUE提供的[事件](https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers)

```html {2}
<a-checkbox-group
    @click.prevent.self
/>
```
