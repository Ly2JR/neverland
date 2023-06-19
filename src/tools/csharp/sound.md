---
title: 播放声音
date: 2023-06-19
dir.order: 4
order: 4
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - 声音
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
