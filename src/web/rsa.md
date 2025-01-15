---
title: RSA
date: 2023-08-29
editLink: false
footer: false
isOriginal: true
category:
  - Web
tag:
  - RSA
---

前端需要RSA加密，使用`JSEncrypt`加密对长文本支持不友好，`Encryptlong`在`JSEncrypt`基础上进行了扩展。

但是实际情况是前端利用公钥加密，后端私钥加密，前端需要公钥解密。

因此在`Encryptlong`的基础上继续扩展，支持以下功能

- [x] 中文长文本加解密
- [x] 公钥解密

::: tip

1. 公钥需要完整的包括头部`-----BEGIN PUBLIC KEY-----`和尾部`-----END PUBLIC KEY-----`
2. 公钥是有换行的，需要在每个换行处添加`\n`
3. RSA加解密针对汉字都使用了URL转码处理

:::

## 演示

::: vue-playground RSA公钥解密

@file App.vue

```vue
<script setup>
import { ref, getCurrentInstance,reactive } from 'vue'
import ElementPlus from 'element-plus' 
import {decrypt} from './rsa.js'
getCurrentInstance().appContext.app.use(ElementPlus);
const data=reactive({
    encryptData:'hvr/B465hsEzjwBzVoh2k1Vwoq7TvZQlTDQAIeVn1wUlW+e7rMFyI5ZpYkRxXt7DuCBO821yOPOauHHcvBlNeK5/fFQA6eLTOHtfZhIvk5eeBlY/1MeLOS5dQZAlFQiJx52Br4GItmrERNJeC7xRx+N05/1r7JJPP6ThlzB1BYg=',
    decryptData:'',
    publicKey:'-----BEGIN PUBLIC KEY-----\n'+
'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC/Lr3oyc+rxFXbz2dvaoMI6N0R\n'+
'mlijWYB8+g11hWvhzeQaWk6RYeaPPdqJoe/6qVnDp2vx5m7n7afo6azZHg3turQo\n'+
'yvx8dnIl6JaIGx9DmPz2l92cCJjR09qSJ/TCQ+mnXKJVrbDmqC9aqp72PdtBn1uV\n'+
'rANBIox9o3tqdVWqMQIDAQAB\n'+
'-----END PUBLIC KEY-----'
});

function handleDecrypt(){
  const encryptData=decrypt(data.encryptData,data.publicKey);
  data.decryptData=encryptData;
}
</script>

<template>
 <el-alert title="私钥和公钥为JSEncrypt里的DEMO" type="success" effect="dark"/>
<el-input
    v-model="data.publicKey"
    :rows="3"
    type="textarea"
    placeholder="公钥"
  />
      <el-input
    v-model="data.encryptData"
    :rows="3"
    type="textarea"
    placeholder="密文"
  />
  <el-input
    v-model="data.decryptData"
    :rows="3"
    type="textarea"
    placeholder="明文"
  />
<el-button type="primary" @click="handleDecrypt">公钥解密</el-button>

</template>

<style>
  @import "https://unpkg.com/element-plus@2/dist/index.css";
</style>
```

@file rsa

```js
import JSEncrypt from '/assets/js/jsencryptlong.js';

export function encrypt(data,publicKey) {
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(publicKey);
  const enData = encodeURIComponent(data);
  const result = jsEncrypt.encryptUnicodeLong(enData);
  return result;
}

export function decrypt(data,publicKey) {
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(publicKey);
  const result = jsEncrypt.decryptUnicodeLong(data);
  const decryptData = decodeURIComponent(result);
  return decryptData;
}
```

@import

```json
{
  "imports": {
    "vue": "https://play.vuejs.org/vue.runtime.esm-browser.js",
    "element-plus": "https://unpkg.com/element-plus@2/dist/index.full.min.mjs",
    "vue/server-renderer": "https://play.vuejs.org/server-renderer.esm-browser.js"
  }
}
```

:::

## 中文加解密

在中文加解密之前需要进行一次转码。

如果[decodeURIComponent](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)和[encodeURIComponent](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)或者[Base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64)

### Base64

```js
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join("");
  return btoa(binString);
}

// Usage
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

## 公钥解密

公钥解密需要修改原来的`decrypt`的方法，这里直接拷贝复制为`decryptex`

### 新建rsa.ts

```js
import JSEncrypt from './encryptlong';

const publicKey =
  '-----BEGIN PUBLIC KEY-----\n' +
  '\n' +
  '\n' +
  '\n' +
  '-----END PUBLIC KEY-----';

export function encrypt(data) {
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(publicKey);
  const enData = encodeURIComponent(data);
  const result = jsEncrypt.encryptUnicodeLong(enData);
  return result;
}

export function decrypt(data) {
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(publicKey);
  const result = jsEncrypt.decryptUnicodeLong(data);
  const decryptData = decodeURIComponent(result);
  return decryptData;
}
```

### 调整Encryptlong

::: tip

pnpm patch-commit 补丁制作有问题，占时没有使用该方法

:::

将Encryptlong.js完整拷贝出来。与`rsa.js`同一目录。

1. 注释开头

    ```js
    // (function (global, factory) {
    //  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    //  typeof define === 'function' && define.amd ? define(['exports'], factory) :
    //  (factory((global.JSEncrypt = {})));
    // }(this, (function (exports) { 'use strict';
    ```

2. 注释`JSEncrypt`函数部分

    ```js
    // var JSEncrypt = /** @class */ (function () {
    ```

3. 注释结尾

    ```js
    //return JSEncrypt;
    // }());

    // window.JSEncrypt = JSEncrypt;

    // exports.JSEncrypt = JSEncrypt;
    // exports.default = JSEncrypt;

    // Object.defineProperty(exports, '__esModule', { value: true });

    // })));
    ```

4. 结尾添加导出

    ```js
    export default JSEncrypt;
    ```

5. 添加公钥解密

    原函数`decrypt`：

    ```js
    RSAKey.prototype.decrypt = function (ctext) {
        var c = parseBigInt(ctext, 16);
        var m = this.doPrivate(c);
        if (m == null) {
            return null;
        }
        return pkcs1unpad2(m, (this.n.bitLength() + 7) >> 3);
    };
    ```

    新建函数`decryptEx`：

    ```js{3,7}
    RSAKey.prototype.decryptEx = function (ctext) {
        var c = parseBigInt(ctext, 16);
        var m = this.doPublic(c);
        if (m == null) {
            return null;
        }
        return pkcs1unpad2Ex(m, (this.n.bitLength() + 7) >> 3);
    };
    ```

6. 解密部分

    原函数`pkcs1unpad2`:

    ```js
    function pkcs1unpad2(d, n) {
    var b = d.toByteArray();
    var i = 0;
    while (i < b.length && b[i] == 0) {
        ++i;
    }
    if (b.length - i != n - 1 || b[i] != 2) {
        return null;
    }
    ++i;
    while (b[i] != 0) {
        if (++i >= b.length) {
        return null;
        }
    }
    var ret = '';
    while (++i < b.length) {
        var c = b[i] & 255;
        if (c < 128) {
        // utf-8 decode
        ret += String.fromCharCode(c);
        } else if (c > 191 && c < 224) {
        ret += String.fromCharCode(((c & 31) << 6) | (b[i + 1] & 63));
        ++i;
        } else {
        ret += String.fromCharCode(((c & 15) << 12) | ((b[i + 1] & 63) << 6) | (b[i + 2] & 63));
        i += 2;
        }
    }
    return ret;
    }
    ```

    新建函数`pkcs1unpad2Ex`:

    ```js{7-10}
    function pkcs1unpad2Ex(d, _n) {
    var b = d.toByteArray();
    var i = 0;
    while (i < b.length && b[i] == 0) {
        ++i;
    }
    // if (b.length - i != n - 1 || b[i] != 2) {
    //   return null;
    // }
    // ++i;
    while (b[i] != 0) {
        if (++i >= b.length) {
        return null;
        }
    }
    var ret = '';
    while (++i < b.length) {
        var c = b[i] & 255;
        if (c < 128) {
        // utf-8 decode
        ret += String.fromCharCode(c);
        } else if (c > 191 && c < 224) {
        ret += String.fromCharCode(((c & 31) << 6) | (b[i + 1] & 63));
        ++i;
        } else {
        ret += String.fromCharCode(((c & 15) << 12) | ((b[i + 1] & 63) << 6) | (b[i + 2] & 63));
        i += 2;
        }
    }
    return ret;
    }
    ```

7. 中文加密

    ```js
    // 分段加密，支持中文
    JSEncrypt.prototype.encryptUnicodeLong = function (string) {
    var k = this.getKey();
    //根据key所能编码的最大长度来定分段长度。key size - 11：11字节随机padding使每次加密结果都不同。
    var maxLength = ((k.n.bitLength() + 7) >> 3) - 11;
    let ret = '';
    try {
        var subStr = '',
        encryptedString = '';
        var subStart = 0,
        subEnd = 0;
        var bitLen = 0,
        tmpPoint = 0;
        for (var i = 0, len = string.length; i < len; i++) {
        //js 是使用 Unicode 编码的，每个字符所占用的字节数不同
        var charCode = string.charCodeAt(i);
        if (charCode <= 0x007f) {
            bitLen += 1;
        } else if (charCode <= 0x07ff) {
            bitLen += 2;
        } else if (charCode <= 0xffff) {
            bitLen += 3;
        } else {
            bitLen += 4;
        }
        //字节数到达上限，获取子字符串加密并追加到总字符串后。更新下一个字符串起始位置及字节计算。
        if (bitLen > maxLength) {
            subStr = string.substring(subStart, subEnd);
            let en = k.encrypt(subStr);
            encryptedString += en;
            subStart = subEnd;
            bitLen = bitLen - tmpPoint;
        } else {
            subEnd = i;
            tmpPoint = bitLen;
        }
        }
        subStr = string.substring(subStart, len);
        const end = k.encrypt(subStr);
        encryptedString += end;
        ret = hex2b64(encryptedString);
        return ret;
    } catch (ex) {
        return false;
    }
    };
    ```

8. 中文解密

    ```js
    // 分段解密，支持中文
    JSEncrypt.prototype.decryptUnicodeLong = function (string) {
    var k = this.getKey();
    //解密长度=key size.hex2b64结果是每字节每两字符，所以直接*2
    var maxLength = ((k.n.bitLength() + 7) >> 3) * 2;
    try {
        var hexString = b64tohex(string);
        var decryptedString = '';
        var rexStr = '.{1,' + maxLength + '}';
        var rex = new RegExp(rexStr, 'g');
        var subStrArray = hexString.match(rex);
        if (subStrArray) {
        subStrArray.forEach(function (entry) {
            decryptedString += k.decryptEx(entry);
        });
        return decryptedString;
        }
        var y = this.decryptEx(hexString);
        return y;
    } catch (ex) {
        return false;
    }
    };
    ```
