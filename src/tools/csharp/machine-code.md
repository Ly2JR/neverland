---
title: 机器码
date: 2023-06-19
dir.order: 5
order: 5
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
---

[Stackoverflow](https://stackoverflow.com/questions/99880/generating-a-unique-machine-id)

## 注册表

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Cryptography`

## PowerShell

`get-wmiobject Win32_ComputerSystemProduct |  select-Object -expandProperty UUID`

### 代码

::: tabs

@tab csharp

``` cs
string GetUUID()
{
  var getDiskUUID = "get-wmiobject Win32_ComputerSystemProduct  | Select-Object -ExpandProperty UUID";
  var oProcess = new Process();
  var oStartInfo = new ProcessStartInfo("powershell.exe", getDiskUUID);
  oStartInfo.UseShellExecute = false;
  oStartInfo.RedirectStandardInput = true;
  oStartInfo.RedirectStandardOutput = true;
  oStartInfo.CreateNoWindow = true;
  oProcess.StartInfo= oStartInfo;
  oProcess.Start();
  oProcess.WaitForExit();
  var uuid=oProcess.StandardOutput.ReadToEnd();
  return uuid.Trim();
}
```

@tab visual basic

``` vb
Private Function GetUUID() As String
  Dim GetDiskUUID As String = "get-wmiobject Win32_ComputerSystemProduct  | Select-Object -ExpandProperty UUID"
  Dim X As String = ""
  Dim oProcess As New Process()
  Dim oStartInfo As New ProcessStartInfo("powershell.exe", GetDiskUUID)
  oStartInfo.UseShellExecute = False
  oStartInfo.RedirectStandardInput = True
  oStartInfo.RedirectStandardOutput = True
  oStartInfo.CreateNoWindow = True
  oProcess.StartInfo = oStartInfo
  oProcess.Start()
  oProcess.WaitForExit()
  X = oProcess.StandardOutput.ReadToEnd
  Return X.Trim()
End Function
```

:::
