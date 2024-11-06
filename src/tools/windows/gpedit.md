---
title: Windows10组策略
date: 2024-06-14
editLink: false
footer: false
isOriginal: true
category:
  - Windows
tag:
  - 打开组策略
---

将下面脚本另存为`cmd`文件，管理员运行即可

```bash
@echo off

pushd "%~dp0"

dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum >List.txt

dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum >>List.txt

for /f %%i in ('findstr /i . List.txt 2^>nul') do dism /online /norestart /add-package:"C:\Windows\servicing\Packages\%%i"

pause
```
