---
title: 播放声音
date: 2023-06-19
dir.order: 4
order: 4
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
---

Nuget下载[System.Speech](https://www.nuget.org/packages/System.Speech)，这里有相关[文档](https://learn.microsoft.com/zh-cn/dotnet/api/system.speech.synthesis.speechsynthesizer?view=netframework-4.8)

```cs
using System.Speech.Synthesis;

using (SpeechSynthesizer speech = new SpeechSynthesizer())
{
    speech.Rate = 0;
    speech.Volume = 10;
    speech.Speak("HelloWorld");
}
```

## [科大讯飞语音合成](../ifly/voice.md)

## [NAudio](https://github.com/naudio/NAudio)

[音频转换文章](https://www.codeproject.com/Articles/501521/How-to-convert-between-most-audio-formats-in-NET)

## [FFMpeg](https://ffmpeg.org/)
