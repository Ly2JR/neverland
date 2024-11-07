---
title: Window API函数
date: 2024-11-07
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
---

## [窗体闪烁](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-flashwindow)

```cs
/// <summary>
/// 重写API函数，用来实现窗体标题栏闪烁功能
/// </summary>
/// <param name="handle"></param>
/// <param name="bInvert"></param>
/// <returns></returns>
[DllImportAttribute("user32.dll")]
public static extern bool FlashWindow(IntPtr handle,bool bInvert);
```

## [设置本地时间](https://learn.microsoft.com/zh-cn/windows/win32/api/sysinfoapi/nf-sysinfoapi-setlocaltime)

```cs
[DllImportAttribute("Kernel32.dll")]
public static extern void SetLocalTime(SystemTime st);

/// <summary>
/// 系统时间类
/// </summary>
[StructLayoutAttribute(LayoutKind.Sequential)]
public class SystemTime
{
    public ushort vYear;//年
    public ushort vMonth;//月
    public ushort vDayOfWeek;//星期
    public ushort vDay;//日
    public ushort vHour;//时
    public ushort vMinute;//分
    public ushort vSecond;//秒
}
```

## [获取本地时间](https://learn.microsoft.com/zh-cn/windows/win32/api/minwinbase/ns-minwinbase-systemtime)

```cs
[DllImportAttribute("Kernel32.dll")]
public static extern void GetLocalTime(SystemTime st);
```