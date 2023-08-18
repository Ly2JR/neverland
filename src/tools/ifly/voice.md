---
title: 语音合成
date: 2023-08-04
dir.order: 1
order: 1
editLink: false
footer: false
isOriginal: true
category:
  - 讯飞
tag:
  - 语音合成
---

将讯飞语音合成集成到VUE项目`Vite+TS`中，其中有一点点变化，作此记录。

- [语音合成文档](https://www.xfyun.cn/doc/tts/online_tts/API.html)

- [WebApi示例:`es6`](https://www.xfyun.cn/doc/tts/online_tts/API.html#%E8%B0%83%E7%94%A8%E7%A4%BA%E4%BE%8B)

## 前提

- 涉及到三个js文件，这里将文件存储在`src\assets\js\speechSynthesis`目录下，分别为

1. `audio.js`: WebApi示例中的`index.js`文件

    路径:`src\pages\index\index.js`

2. `download.js`: WebApi示例中的`download.js`文件

    路径:`src\js\download.js`

3. `transcode.worker.js`：WebApi示例中的`transcode.worker.js`文件

    路径:`src\js\transcode.worker.js`

- 引用`crypto-js`和`js-base64`两个包。

其中，改变的部分代码高亮显示，其余与WebApi示例代码一致。

## 演示

::: vue-playground 语音合成

@file App.vue

```vue
<script setup>
import { ref, getCurrentInstance,reactive } from 'vue'
import ElementPlus from 'element-plus' 
import TtsRecorder from './audio.js'
getCurrentInstance().appContext.app.use(ElementPlus)

const key=reactive({
    APPID:'',
    APISecret:'',
    APIKey:'',
});

 const ttsRecord = new TtsRecorder();
      function handleStart() {
        ttsRecord.setParams({
          APPID:key.APPID,
          APISecret:key.APISecret,
          APIKey:key.APIKey,
          text: '你好，世界',
          speed: 50,
          voice: 50,
        });
        ttsRecord.start();
      }

      function handlePause() {
        ttsRecord.stop();
      }
</script>

<template>
  <el-alert title="因为演示隔离问题,存在部分差异,但实际一样" type="info" effect="dark" />
  <el-alert title="输入讯飞接口鉴权即可合成" type="success" effect="dark" />
    <el-row>
        <el-space direction="vertical">
            <el-input v-model="key.APPID" placeholder="Please input APPID" />
            <el-input v-model="key.APISecret" placeholder="Please input APISecret" />
            <el-input v-model="key.APIKey" placeholder="Please input APIKey" />
        </el-space>
    </el-row>
    <el-row>
        <el-button type="primary" @click="handleStart">开始合成</el-button>
        <el-button type="primary" @click="handlePause">停止播放</el-button>
    </el-row>
</template>

<style>
  @import "https://unpkg.com/element-plus@2/dist/index.css";
</style>

```

@file audio.js

```js
import CryptoJS from 'crypto-js';
import { Base64 } from 'js-base64';
const transWorker = new Worker('/assets/js/transcode.worker.js');
let APPID = "";
let API_SECRET = "";
let API_KEY = "";
function getWebsocketUrl() {
  return new Promise((resolve, reject) => {
    var apiKey = API_KEY;
    var apiSecret = API_SECRET;
    var url = 'wss://tts-api.xfyun.cn/v2/tts';
    var host = location.host;
    var date = new Date().toGMTString();
    var algorithm = 'hmac-sha256';
    var headers = 'host date request-line';
    var signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2/tts HTTP/1.1`;
    var signatureSha = CryptoJS.HmacSHA256(signatureOrigin, apiSecret);
    var signature = CryptoJS.enc.Base64.stringify(signatureSha);
    var authorizationOrigin = `api_key="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`;
    var authorization = btoa(authorizationOrigin);
    url = `${url}?authorization=${authorization}&date=${date}&host=${host}`;
    resolve(url);
  });
}
class TTSRecorder {
  constructor({
    apiSecret='',
    apiKey='',
    speed = 50,
    voice = 50,
    pitch = 50,
    voiceName = 'xiaoyan',
    appId = '',
    text = '',
    tte = 'UTF8',
    defaultText = '请输入您要合成的文本',
  } = {}) {
    this.apiSecret=apiSecret;
    this.apiKey=apiKey;
    this.speed = speed;
    this.voice = voice;
    this.pitch = pitch;
    this.voiceName = voiceName;
    this.text = text;
    this.tte = tte;
    this.defaultText = defaultText;
    this.appId = appId;
    this.audioData = [];
    this.rawAudioData = [];
    this.audioDataOffset = 0;
    this.status = 'init';
    transWorker.onmessage = (e) => {
      this.audioData.push(...e.data.data);
      this.rawAudioData.push(...e.data.rawAudioData);
    };
  }
  // 修改录音听写状态
  setStatus(status) {
    this.onWillStatusChange && this.onWillStatusChange(this.status, status);
    this.status = status;
  }
  // 设置合成相关参数
  setParams({APPID,APISecret,APIKey,speed, voice, pitch, text, voiceName, tte }) {
    APPID !== undefined && (this.appId = APPID);
    APISecret !== undefined && (this.apiSecret = APISecret);
    APIKey !== undefined && (this.apiKey = APIKey);
    speed !== undefined && (this.speed = speed);
    voice !== undefined && (this.voice = voice);
    pitch !== undefined && (this.pitch = pitch);
    text && (this.text = text);
    tte && (this.tte = tte);
    voiceName && (this.voiceName = voiceName);
    APPID=APPID;
    API_SECRET=APISecret;
    API_KEY=APIKey;
    this.resetAudio();
  }
  // 连接websocket
  connectWebSocket() {
    this.setStatus('ttsing');
    return getWebsocketUrl().then((url) => {
      let ttsWS;
      if ('WebSocket' in window) {
        ttsWS = new WebSocket(url);
      } else if ('MozWebSocket' in window) {
        ttsWS = new MozWebSocket(url);
      } else {
        alert('浏览器不支持WebSocket');
        return;
      }
      this.ttsWS = ttsWS;
      ttsWS.onopen = (e) => {
        this.webSocketSend();
        this.playTimeout = setTimeout(() => {
          this.audioPlay();
        }, 1000);
      };
      ttsWS.onmessage = (e) => {
        this.result(e.data);
      };
      ttsWS.onerror = (e) => {
        clearTimeout(this.playTimeout);
        this.setStatus('errorTTS');
        alert('WebSocket报错,请f12查看详情');
        window.console.error(`详情查看：${encodeURI(url.replace('wss:', 'https:'))}`);
      };
      ttsWS.onclose = (e) => {
        window.console.log(e);
      };
    });
  }
  // 处理音频数据
  transToAudioData(audioData) {}
  // websocket发送数据
  webSocketSend() {
    var params = {
      common: {
        app_id: this.appId,
      },
      business: {
        aue: 'raw',
        auf: 'audio/L16;rate=16000',
        vcn: this.voiceName,
        speed: this.speed,
        volume: this.voice,
        pitch: this.pitch,
        bgs: 1,
        tte: this.tte,
      },
      data: {
        status: 2,
        text: this.encodeText(
          this.text || this.defaultText,
          this.tte === 'unicode' ? 'base64&utf16le' : '',
        ),
      },
    };
    this.ttsWS.send(JSON.stringify(params));
  }
  encodeText(text, encoding) {
    switch (encoding) {
      case 'utf16le': {
        let buf = new ArrayBuffer(text.length * 4);
        let bufView = new Uint16Array(buf);
        for (let i = 0, strlen = text.length; i < strlen; i++) {
          bufView[i] = text.charCodeAt(i);
        }
        return buf;
      }
      case 'buffer2Base64': {
        let binary = '';
        let bytes = new Uint8Array(text);
        let len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
      }
      case 'base64&utf16le': {
        return this.encodeText(this.encodeText(text, 'utf16le'), 'buffer2Base64');
      }
      default: {
        return Base64.encode(text);
      }
    }
  }
  // websocket接收数据的处理
  result(resultData) {
    let jsonData = JSON.parse(resultData);
    // 合成失败
    if (jsonData.code !== 0) {
      alert(`合成失败: ${jsonData.code}:${jsonData.message}`);
      window.console.error(`${jsonData.code}:${jsonData.message}`);
      this.resetAudio();
      return;
    }
    transWorker.postMessage(jsonData.data.audio);

    if (jsonData.code === 0 && jsonData.data.status === 2) {
      this.ttsWS.close();
    }
  }
  // 重置音频数据
  resetAudio() {
    this.audioStop();
    this.setStatus('init');
    this.audioDataOffset = 0;
    this.audioData = [];
    this.rawAudioData = [];
    this.ttsWS && this.ttsWS.close();
    clearTimeout(this.playTimeout);
  }
  // 音频初始化
  audioInit() {
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.audioContext = new AudioContext();
      this.audioContext.resume();
      this.audioDataOffset = 0;
    }
  }
  // 音频播放
  audioPlay() {
    this.setStatus('play');
    let audioData = this.audioData.slice(this.audioDataOffset);
    this.audioDataOffset += audioData.length;
    let audioBuffer = this.audioContext.createBuffer(1, audioData.length, 22050);
    let nowBuffering = audioBuffer.getChannelData(0);
    if (audioBuffer.copyToChannel) {
      audioBuffer.copyToChannel(new Float32Array(audioData), 0, 0);
    } else {
      for (let i = 0; i < audioData.length; i++) {
        nowBuffering[i] = audioData[i];
      }
    }
    let bufferSource = (this.bufferSource = this.audioContext.createBufferSource());
    bufferSource.buffer = audioBuffer;
    bufferSource.connect(this.audioContext.destination);
    bufferSource.start();
    bufferSource.onended = (event) => {
      if (this.status !== 'play') {
        return;
      }
      if (this.audioDataOffset < this.audioData.length) {
        this.audioPlay();
      } else {
        this.audioStop();
      }
    };
  }
  // 音频播放结束
  audioStop() {
    this.setStatus('endPlay');
    clearTimeout(this.playTimeout);
    this.audioDataOffset = 0;
    if (this.bufferSource) {
      try {
        this.bufferSource.stop();
      } catch (e) {
        window.console.log(e);
      }
    }
  }
  start() {
    if (this.audioData.length) {
      this.audioPlay();
    } else {
      if (!this.audioContext) {
        this.audioInit();
      }
      if (!this.audioContext) {
        alert('该浏览器不支持webAudioApi相关接口');
        return;
      }
      this.connectWebSocket();
    }
  }
  stop() {
    this.audioStop();
  }
}

export default TTSRecorder;
```

@import

```json
{
  "imports": {
    "vue": "https://play.vuejs.org/vue.runtime.esm-browser.js",
    "element-plus": "https://unpkg.com/element-plus@2/dist/index.full.min.mjs",
    "vue/server-renderer": "https://play.vuejs.org/server-renderer.esm-browser.js",
    "crypto-js":"https://cdn.jsdelivr.net/npm/crypto-js@4.1.1/+esm",
    "js-base64":"https://cdn.jsdelivr.net/npm/js-base64@3.7.5/base64.mjs"
  }
}
```

:::

## 简单分析

### index.vue

```vue
<template>
  <div>
    <a-button block  type="dashed" @click="handleStart"> 开始合成 </a-button>
    <a-button block  type="dashed" @click="handlePause"> 停止播放 </a-button>
    <a-button block  type="dashed" @click="handleDownloadPcm"> 下载pcm </a-button>
    <a-button block  type="dashed" @click="handleDownloadWav"> 下载wav </a-button>
    <a-button block  type="dashed" @click="handleDownloadMP3"> 下载mp3 </a-button>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import TtsRecorder from '@/assets/js/speechSynthesis/audio';
  import { downloadMP3, downloadPCM, downloadWAV } from '@/assets/js/speechSynthesis/download.js';

  export default defineComponent({
    name: 'Index',
    setup() {
      const ttsRecord = new TtsRecorder();
      function handleStart() {
        ttsRecord.setParams({
          text: '你好，世界',
          speed: 50,
          voice: 50,
        });
        ttsRecord.start();
      }

      function handlePause() {
        ttsRecord.stop();
      }

      function handleDownloadPcm() {
        if (ttsRecord.rawAudioData.length) {
          downloadPCM(new Int16Array(ttsRecord.rawAudioData));
        } else {
          alert('请先合成');
        }
      }

      function handleDownloadWav() {
        if (ttsRecord.rawAudioData.length) {
          downloadWAV(new DataView(new Int16Array(ttsRecord.rawAudioData).buffer), 16000, 16);
        } else {
          alert('请先合成');
        }
      }
      function handleDownloadMP3() {
        if (ttsRecord.rawAudioData.length) {
          downloadMP3(new DataView(new Int16Array(ttsRecord.rawAudioData).buffer), 16000, 16);
        } else {
          alert('请先合成');
        }
      }

      return {
        handleStart,
        handlePause,
        handleDownloadPcm,
        handleDownloadWav,
        handleDownloadMP3,
      };
    },
  });
</script>
```

### audio.js

- 32行代码

  直接使用`let transWorker = new TransWorker();`时,提示`default`或者`constructor`错误。
  
  参考[vite web-worker](https://cn.vitejs.dev/guide/features.html#web-workers)解决。

- 34-36行代码

  为科大讯飞的接口鉴权,需要自己创建

- 284行代码

  导出代码块

```js{32,34-36,284}
/*
 * @Autor: lycheng
 * @Date: 2020-01-13 16:12:22
 */
/**
 * Created by iflytek on 2019/11/19.
 *
 * 在线语音合成调用demo
 * 此demo只是一个简单的调用示例，不适合用到实际生产环境中
 *
 * 在线语音合成 WebAPI 接口调用示例 接口文档（必看）：https://www.xfyun.cn/doc/tts/online_tts/API.html
 * 错误码链接：
 * https://www.xfyun.cn/doc/tts/online_tts/API.html
 * https://www.xfyun.cn/document/error-code （code返回错误码时必看）
 *
 */

// 1. websocket连接：判断浏览器是否兼容，获取websocket url并连接，这里为了方便本地生成websocket url
// 2. 连接websocket，向websocket发送数据，实时接收websocket返回数据
// 3. 处理websocket返回数据为浏览器可以播放的音频数据
// 4. 播放音频数据
// ps: 该示例用到了es6中的一些语法，建议在chrome下运行
// import './index.css';

import CryptoJS from 'crypto-js';
import { Base64 } from 'js-base64';
//import Enc from 'enc'
//import TransWorker from 'js/transcode.worker.js'
//import VConsole from 'vconsole';

//let transWorker = new TransWorker();
const transWorker = new Worker(new URL('./transcode.worker.js', import.meta.url));
//APPID，APISecret，APIKey在控制台-我的应用-语音合成（流式版）页面获取
const APPID = 'APPID';
const API_SECRET = 'API_SECRET';
const API_KEY = 'API_KEY';

function getWebsocketUrl() {
  return new Promise((resolve, reject) => {
    var apiKey = API_KEY;
    var apiSecret = API_SECRET;
    var url = 'wss://tts-api.xfyun.cn/v2/tts';
    var host = location.host;
    var date = new Date().toGMTString();
    var algorithm = 'hmac-sha256';
    var headers = 'host date request-line';
    var signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2/tts HTTP/1.1`;
    var signatureSha = CryptoJS.HmacSHA256(signatureOrigin, apiSecret);
    var signature = CryptoJS.enc.Base64.stringify(signatureSha);
    var authorizationOrigin = `api_key="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`;
    var authorization = btoa(authorizationOrigin);
    url = `${url}?authorization=${authorization}&date=${date}&host=${host}`;
    resolve(url);
  });
}
class TTSRecorder {
  constructor({
    speed = 50,
    voice = 50,
    pitch = 50,
    voiceName = 'xiaoyan',
    appId = APPID,
    text = '',
    tte = 'UTF8',
    defaultText = '请输入您要合成的文本',
  } = {}) {
    this.speed = speed;
    this.voice = voice;
    this.pitch = pitch;
    this.voiceName = voiceName;
    this.text = text;
    this.tte = tte;
    this.defaultText = defaultText;
    this.appId = appId;
    this.audioData = [];
    this.rawAudioData = [];
    this.audioDataOffset = 0;
    this.status = 'init';
    transWorker.onmessage = (e) => {
      this.audioData.push(...e.data.data);
      this.rawAudioData.push(...e.data.rawAudioData);
    };
  }
  // 修改录音听写状态
  setStatus(status) {
    this.onWillStatusChange && this.onWillStatusChange(this.status, status);
    this.status = status;
  }
  // 设置合成相关参数
  setParams({ speed, voice, pitch, text, voiceName, tte }) {
    speed !== undefined && (this.speed = speed);
    voice !== undefined && (this.voice = voice);
    pitch !== undefined && (this.pitch = pitch);
    text && (this.text = text);
    tte && (this.tte = tte);
    voiceName && (this.voiceName = voiceName);
    this.resetAudio();
  }
  // 连接websocket
  connectWebSocket() {
    this.setStatus('ttsing');
    return getWebsocketUrl().then((url) => {
      let ttsWS;
      if ('WebSocket' in window) {
        ttsWS = new WebSocket(url);
      } else if ('MozWebSocket' in window) {
        ttsWS = new MozWebSocket(url);
      } else {
        alert('浏览器不支持WebSocket');
        return;
      }
      this.ttsWS = ttsWS;
      ttsWS.onopen = (e) => {
        this.webSocketSend();
        this.playTimeout = setTimeout(() => {
          this.audioPlay();
        }, 1000);
      };
      ttsWS.onmessage = (e) => {
        this.result(e.data);
      };
      ttsWS.onerror = (e) => {
        clearTimeout(this.playTimeout);
        this.setStatus('errorTTS');
        alert('WebSocket报错,请f12查看详情');
        window.console.error(`详情查看：${encodeURI(url.replace('wss:', 'https:'))}`);
      };
      ttsWS.onclose = (e) => {
        window.console.log(e);
      };
    });
  }
  // 处理音频数据
  transToAudioData(audioData) {}
  // websocket发送数据
  webSocketSend() {
    var params = {
      common: {
        app_id: this.appId, // APPID
      },
      business: {
        aue: 'raw',
        auf: 'audio/L16;rate=16000',
        vcn: this.voiceName,
        speed: this.speed,
        volume: this.voice,
        pitch: this.pitch,
        bgs: 1,
        tte: this.tte,
      },
      data: {
        status: 2,
        text: this.encodeText(
          this.text || this.defaultText,
          this.tte === 'unicode' ? 'base64&utf16le' : '',
        ),
      },
    };
    this.ttsWS.send(JSON.stringify(params));
  }
  encodeText(text, encoding) {
    switch (encoding) {
      case 'utf16le': {
        let buf = new ArrayBuffer(text.length * 4);
        let bufView = new Uint16Array(buf);
        for (let i = 0, strlen = text.length; i < strlen; i++) {
          bufView[i] = text.charCodeAt(i);
        }
        return buf;
      }
      case 'buffer2Base64': {
        let binary = '';
        let bytes = new Uint8Array(text);
        let len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
      }
      case 'base64&utf16le': {
        return this.encodeText(this.encodeText(text, 'utf16le'), 'buffer2Base64');
      }
      default: {
        return Base64.encode(text);
      }
    }
  }
  // websocket接收数据的处理
  result(resultData) {
    let jsonData = JSON.parse(resultData);
    // 合成失败
    if (jsonData.code !== 0) {
      alert(`合成失败: ${jsonData.code}:${jsonData.message}`);
      window.console.error(`${jsonData.code}:${jsonData.message}`);
      this.resetAudio();
      return;
    }
    transWorker.postMessage(jsonData.data.audio);

    if (jsonData.code === 0 && jsonData.data.status === 2) {
      this.ttsWS.close();
    }
  }
  // 重置音频数据
  resetAudio() {
    this.audioStop();
    this.setStatus('init');
    this.audioDataOffset = 0;
    this.audioData = [];
    this.rawAudioData = [];
    this.ttsWS && this.ttsWS.close();
    clearTimeout(this.playTimeout);
  }
  // 音频初始化
  audioInit() {
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.audioContext = new AudioContext();
      this.audioContext.resume();
      this.audioDataOffset = 0;
    }
  }
  // 音频播放
  audioPlay() {
    this.setStatus('play');
    let audioData = this.audioData.slice(this.audioDataOffset);
    this.audioDataOffset += audioData.length;
    let audioBuffer = this.audioContext.createBuffer(1, audioData.length, 22050);
    let nowBuffering = audioBuffer.getChannelData(0);
    if (audioBuffer.copyToChannel) {
      audioBuffer.copyToChannel(new Float32Array(audioData), 0, 0);
    } else {
      for (let i = 0; i < audioData.length; i++) {
        nowBuffering[i] = audioData[i];
      }
    }
    let bufferSource = (this.bufferSource = this.audioContext.createBufferSource());
    bufferSource.buffer = audioBuffer;
    bufferSource.connect(this.audioContext.destination);
    bufferSource.start();
    bufferSource.onended = (event) => {
      if (this.status !== 'play') {
        return;
      }
      if (this.audioDataOffset < this.audioData.length) {
        this.audioPlay();
      } else {
        this.audioStop();
      }
    };
  }
  // 音频播放结束
  audioStop() {
    this.setStatus('endPlay');
    clearTimeout(this.playTimeout);
    this.audioDataOffset = 0;
    if (this.bufferSource) {
      try {
        this.bufferSource.stop();
      } catch (e) {
        window.console.log(e);
      }
    }
  }
  start() {
    if (this.audioData.length) {
      this.audioPlay();
    } else {
      if (!this.audioContext) {
        this.audioInit();
      }
      if (!this.audioContext) {
        alert('该浏览器不支持webAudioApi相关接口');
        return;
      }
      this.connectWebSocket();
    }
  }
  stop() {
    this.audioStop();
  }
}

export default TTSRecorder;
```

### download.js

- 101-112代码行

  下载MP3文件代码，根据下载WAV文件而来

- 113代码行

  导出下载mp3方法

```js {101-112,113}
/*
 * @Autor: lycheng
 * @Date: 2019-12-27 15:21:38
 * @Description:
 */
function writeString(data, offset, str) {
  for (var i = 0; i < str.length; i++) {
    data.setUint8(offset + i, str.charCodeAt(i));
  }
}

/**
 * 加wav头
 * @param {音频arrayBuffer} bytes
 * @param {采样率} sampleRate
 * @param {声道数} numChannels
 * @param {sampleBits} oututSampleBits
 * @param {小端字节} littleEdian
 */
function encodeWAV(bytes, sampleRate, numChannels, oututSampleBits, littleEdian = true) {
  let sampleBits = oututSampleBits;
  let buffer = new ArrayBuffer(44 + bytes.byteLength);
  let data = new DataView(buffer);
  let channelCount = numChannels;
  let offset = 0;
  // 资源交换文件标识符
  writeString(data, offset, 'RIFF');
  offset += 4;
  // 下个地址开始到文件尾总字节数,即文件大小-8
  data.setUint32(offset, 36 + bytes.byteLength, true);
  offset += 4;
  // WAV文件标志
  writeString(data, offset, 'WAVE');
  offset += 4;
  // 波形格式标志
  writeString(data, offset, 'fmt ');
  offset += 4;
  // 过滤字节,一般为 0x10 = 16
  data.setUint32(offset, 16, true);
  offset += 4;
  // 格式类别 (PCM形式采样数据)
  data.setUint16(offset, 1, true);
  offset += 2;
  // 通道数
  data.setUint16(offset, channelCount, true);
  offset += 2;
  // 采样率,每秒样本数,表示每个通道的播放速度
  data.setUint32(offset, sampleRate, true);
  offset += 4;
  // 波形数据传输率 (每秒平均字节数) 单声道×每秒数据位数×每样本数据位/8
  data.setUint32(offset, channelCount * sampleRate * (sampleBits / 8), true);
  offset += 4;
  // 快数据调整数 采样一次占用字节数 单声道×每样本的数据位数/8
  data.setUint16(offset, channelCount * (sampleBits / 8), true);
  offset += 2;
  // 每样本数据位数
  data.setUint16(offset, sampleBits, true);
  offset += 2;
  // 数据标识符
  writeString(data, offset, 'data');
  offset += 4;
  // 采样数据总数,即数据总大小-44
  data.setUint32(offset, bytes.byteLength, true);
  offset += 4;

  // 给wav头增加pcm体
  for (let i = 0; i < bytes.byteLength; ) {
    data.setUint8(offset, bytes.getUint8(i), true);
    offset++;
    i++;
  }

  return data;
}

function downloadWAV(audioData, sampleRate, oututSampleBits) {
  let wavData = encodeWAV(audioData, sampleRate || 44100, 1, oututSampleBits || 16);
  let blob = new Blob([wavData], {
    type: 'audio/wav',
  });
  let defaultName = new Date().getTime();
  let node = document.createElement('a');
  node.href = window.URL.createObjectURL(blob);
  node.download = `${defaultName}.wav`;
  node.click();
  node.remove();
}

function downloadPCM(audioData) {
  let blob = new Blob([audioData], {
    type: 'audio/pcm',
  });
  let defaultName = new Date().getTime();
  let node = document.createElement('a');
  node.href = window.URL.createObjectURL(blob);
  node.download = `${defaultName}.pcm`;
  node.click();
  node.remove();
}

function downloadMP3(audioData, sampleRate, oututSampleBits) {
  let wavData = encodeWAV(audioData, sampleRate || 44100, 1, oututSampleBits || 16);
  let blob = new Blob([wavData], {
    type: 'audio/mp3',
  });
  let defaultName = new Date().getTime();
  let node = document.createElement('a');
  node.href = window.URL.createObjectURL(blob);
  node.download = `${defaultName}.mp3`;
  node.click();
  node.remove();
}
export { downloadMP3, downloadPCM, downloadWAV };
```

### transcode.worker.js

- 3、51行代码注释

```js{3,51}
//let minSampleRate = 22050;

// const TransWorker = (function () {
self.onmessage = function (e) {
  transcode.transToAudioData(e.data);
};
let transcode = {
  transToAudioData: function (audioDataStr, fromRate = 16000, toRate = 22505) {
    let outputS16 = transcode.base64ToS16(audioDataStr);
    let output = transcode.transS16ToF32(outputS16);
    output = transcode.transSamplingRate(output, fromRate, toRate);
    output = Array.from(output);
    self.postMessage({
      data: output,
      rawAudioData: Array.from(outputS16),
    });
  },
  transSamplingRate: function (data, fromRate = 44100, toRate = 16000) {
    var fitCount = Math.round(data.length * (toRate / fromRate));
    var newData = new Float32Array(fitCount);
    var springFactor = (data.length - 1) / (fitCount - 1);
    newData[0] = data[0];
    for (let i = 1; i < fitCount - 1; i++) {
      var tmp = i * springFactor;
      var before = Math.floor(tmp).toFixed();
      var after = Math.ceil(tmp).toFixed();
      var atPoint = tmp - before;
      newData[i] = data[before] + (data[after] - data[before]) * atPoint;
    }
    newData[fitCount - 1] = data[data.length - 1];
    return newData;
  },
  transS16ToF32: function (input) {
    var tmpData = [];
    for (let i = 0; i < input.length; i++) {
      var d = input[i] < 0 ? input[i] / 0x8000 : input[i] / 0x7fff;
      tmpData.push(d);
    }
    return new Float32Array(tmpData);
  },
  base64ToS16: function (base64AudioData) {
    base64AudioData = atob(base64AudioData);
    //base64AudioData = Buffer.from(base64AudioData, 'base64');
    const outputArray = new Uint8Array(base64AudioData.length);
    for (let i = 0; i < base64AudioData.length; ++i) {
      outputArray[i] = base64AudioData.charCodeAt(i);
    }
    return new Int16Array(new DataView(outputArray.buffer).buffer);
  },
};
// })();
```

## Dotnet 示例

没有提供关于C#的代码示例...[源代码地址](https://github.com/ly2jr/iflytts)

### 基本参数

```cs
const string HOST_URL = "https://tts-api.xfyun.cn/v2/tts";
const string HEADERS = "host date request-line";
const string APP_ID = "";
const string API_SECRET = "";
const string API_KEY = "";
const string TEXT = "Hello,World";
```

### Json转换

::: tip
.NET 8 Support JsonNamingPolicy.SnakeCaseLower
:::

```cs

var jsonOption = new JsonSerializerOptions()
{
    PropertyNamingPolicy = new LowerCaseNamingPolicy(),//.NET 8 Support JsonNamingPolicy.SnakeCaseLower
};

internal class LowerCaseNamingPolicy : JsonNamingPolicy
{
    public override string ConvertName(string name)
    {
        return name.ToLower();
    }
}
```

### 鉴权认证

```cs
using System.Security.Cryptography;
using System.Text;

string AuthUrl(string hostUrl, string apiKey, string apiSecret)
{
    Uri uri = new Uri(hostUrl);
    //签名时间,RFC1123格式(Thu, 01 Aug 2019 01:53:21 GMT)。
    var date = DateTime.Now.ToUniversalTime().ToString("r");
    //参与签名的字段host,date,
    var signatureOrigin = $"host: {uri.Host}\ndate: {date}\nGET {uri.LocalPath} HTTP/1.1"; 
    //签名结果
    var signature = "";
    var secretByte = Encoding.UTF8.GetBytes(apiSecret);
    using (HMACSHA256 hmac = new HMACSHA256(secretByte))
    {
        var signatureByte = Encoding.UTF8.GetBytes(signatureOrigin);
        byte[] hashValue = hmac.ComputeHash(signatureByte);
        signature=Convert.ToBase64String(hashValue);
    }
    //构建请求参数
    var key = $"api_key=\"{apiKey}\", algorithm=\"hmac-sha256\", headers=\"{HEADERS}\", signature=\"{signature}\"";
    var keyBytes= Encoding.UTF8.GetBytes(key);
    var authorization = Convert.ToBase64String(keyBytes);
    return $"wss://{uri.Host}{uri.LocalPath}?authorization={authorization}&date={date}&host={uri.Host}";
}
```

### 发送语音

::: tabs

@tab 发送

```cs
using System.Net.WebSockets;

var url=AuthUrl(HOST_URL, API_KEY, API_SECRET);
Console.WriteLine(url);
var uri = new Uri(url);

var sendText = new SendTest(APP_ID, TEXT);
var sendByte = JsonSerializer.SerializeToUtf8Bytes(sendText,jsonOption);

using ClientWebSocket ws = new();
await ws.ConnectAsync(uri, default);

Console.WriteLine($"发送数据:{TEXT}");
await ws.SendAsync(sendByte, WebSocketMessageType.Binary, true, default);
```

@tab SendTest.cs

具体请求参数查看官网文档

```cs
class SendTest{
    public SendTest(string appId, string text){
        var sendBytes = Encoding.UTF8.GetBytes(text);
        Common = new Common(){
            App_Id = appId,
        };
        Business = new Business(){
            Aue = "raw",
            Vcn = "xiaoyan",
            Pitch = 50,
            Speed = 50,
        };
        Data = new SendData(){
            Status = 2,
            Text = Convert.ToBase64String(sendBytes)
        };
    }
    public Common Common { get; set; }
    public Business Business { get; set; }
    public SendData Data { get; set; }
}

class Common{
    public string? App_Id { get; set; }
}

class Business{
    public string? Aue { get; set; }
    public string? Vcn { get; set; }
    public int Pitch { get; set; }
    public int Speed { get; set; }
}

class SendData{
    public int Status { get; set; }
    public string? Text { get; set; }
}
```

:::

### 接收语音

::: tabs

@tab 接收

```cs
//接受数据
var sb = new StringBuilder();
var bytes = new byte[1024];
var result = await ws.ReceiveAsync(bytes, default);
var res = Encoding.UTF8.GetString(bytes, 0, result.Count);
sb.Append(res);
while (!result.EndOfMessage)
{
    result = await ws.ReceiveAsync(bytes, default);
    res = Encoding.UTF8.GetString(bytes, 0, result.Count);
    sb.Append(res);
}
Console.WriteLine($"响应数据:{sb}");
```

@tab 保存文件

```cs
var receiceData = JsonSerializer.Deserialize<ReceiveData>(sb.ToString(),jsonOption);
if (receiceData.Code == 0 && receiceData.Data != null)
{
    var audioBase64String = receiceData.Data.Audio;
    var encoderBytes = Convert.FromBase64String(audioBase64String!);

    var path = GetCurrentProjectPath();
    var savePath = $"{path}/files/{DateTime.Now.Ticks}.pcm";
    using (FileStream outStream = new FileStream(savePath, FileMode.Create, FileAccess.Write))
    {
        await outStream.WriteAsync(encoderBytes);
    }
}
```

@tab ReceiveData.cs

```cs
 internal class ReceiveData{
     public int Code { get; set; }
     public string Message { get; set; }
     public string? Sid { get; set;}
     public Data? Data { get; set; }

 }
 class Data{
     public string? Audio { get; set; }
     public string? Ced { get; set; }
     public int Status { get; set; }
 }
```

:::

### 语音转码

- [FFmpeg](https://github.com/ly2jr/iflytts)

  ```cmd
  ffmpeg -y -f s16le -ac 1 -ar 16000 -acodec pcm_s16le -i test.pcm test.mp3
  ```

- [NAudio](https://www.codeproject.com/Articles/501521/How-to-convert-between-most-audio-formats-in-NET)
