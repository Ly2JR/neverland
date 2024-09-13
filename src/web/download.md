---
title: Web下载
date: 2023-08-30
editLink: false
footer: false
isOriginal: true
category:
  - Web
---

::: tip

在部署时，上传或者下载时需要设置以下两个方面，以IIS为例

1. 设置`MIME类型`
2. 设置网站权限
3. 设置文件大小

:::

Web端下载有几种方式：

1. 后端提供文件下载地址
2. 后端提供文件流
3. 前端自己组织数据下载

## 后端提供文件下载地址

### [location.href](https://developer.mozilla.org/zh-CN/docs/Web/API/Location/href)

```ts
window.location.href=Url
```

### [window.open](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open)

```ts
window.open(url);
```

### a标签

```ts
export function openWindow(
  url: string,
  opt?: { target?: TargetContext | string; noopener?: boolean; noreferrer?: boolean },
) {
  const { target = '__blank', noopener = true, noreferrer = true } = opt || {};
  const feature: string[] = [];

  noopener && feature.push('noopener=yes');
  noreferrer && feature.push('noreferrer=yes');

  window.open(url, target, feature.join(','));
}

export function downloadByUrl({
  url,
  target = '_blank',
  fileName,
}: {
  url: string;
  target?: TargetContext;
  fileName?: string;
}): boolean {
  const isChrome = window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  const isSafari = window.navigator.userAgent.toLowerCase().indexOf('safari') > -1;

  if (/(iP)/g.test(window.navigator.userAgent)) {
    window.console.error('Your browser does not support download!');
    return false;
  }
  if (isChrome || isSafari) {
    const link = document.createElement('a');
    link.href = url;
    link.target = target;

    if (link.download !== undefined) {
      link.download = fileName || url.substring(url.lastIndexOf('/') + 1, url.length);
    }

    if (document.createEvent) {
      const e = document.createEvent('MouseEvents');
      e.initEvent('click', true, true);
      link.dispatchEvent(e);
      return true;
    }
  }
  if (url.indexOf('?') === -1) {
    url += '?download';
  }

  openWindow(url, { target });
  return true;
}
```

## 后端提供文件流

::: tip

1. 下载的文件无法打开

   在`Axios`里设置`responseType`：`blob`

2. 生产环境无法下载也不报错

   后端添加标头`Access-Control-Expose-Headers:Content-Disposition`，或者使用[反向代理](./proxy.md)

:::

关键在于[BLOB](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)

```ts
export function downloadByData(data: BlobPart, filename: string, mime?: string, bom?: BlobPart) {
  const blobData = typeof bom !== 'undefined' ? [bom, data] : [data];
  const blob = new Blob(blobData, { type: mime || 'application/octet-stream' });

  const blobURL = window.URL.createObjectURL(blob);
  const tempLink = document.createElement('a');
  tempLink.style.display = 'none';
  tempLink.href = blobURL;
  tempLink.setAttribute('download', filename);
  if (typeof tempLink.download === 'undefined') {
    tempLink.setAttribute('target', '_blank');
  }
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(blobURL);
}
```

```ts
const params={};
const ret = await downLoadFile(params);
if (ret.status === 200) {
    const name = ret.headers['content-disposition'].split(';')[1].split('=')[1];
    const mine = ret.headers['content-type'].split(';')[0];
    const filename = decodeURIComponent(name);
    downloadByData(ret.data, filename, mine);
}
```

### Base64图片下载

```ts
export function downloadByBase64(buf: string, filename: string, mime?: string, bom?: BlobPart) {
  const base64Buf = dataURLtoBlob(buf);
  downloadByData(base64Buf, filename, mime, bom);
}
```

## 自己组织数据下载

npm包[xlsx](https://www.npmjs.com/package/xlsx)
