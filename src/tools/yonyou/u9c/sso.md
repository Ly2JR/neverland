---
title: U9单点登录
date: 2025-01-06
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U9C
---

使用`EA`登录，打开`第三方应用接口授权`，创建应用，记录`应用ID`和`应用密钥`

```cs
using System;
using System.Diagnostics;
using System.Net.Http.Json;

const string U9CAddress = "http://127.0.0.1";
const string ClientId = "";
const string ClientSecret = "";
const string EntCode = "";
const string UserCode = "";
const string OrgCode = "";
var SSOUrl = $"/U9C/webapi/OAuth2/SSOLogin?clientid={ClientId}&clientsecret={ClientSecret}&entCode={EntCode}&userCode={UserCode}&orgCode={OrgCode}&loginType=1";
using (HttpClient client = new HttpClient())
{
    client.BaseAddress = new Uri(U9CAddress);
    var ssoResult = await client.GetFromJsonAsync<SSO>(SSOUrl);
    if (ssoResult == null)
    {
        Console.WriteLine("没有结果");
        return;
    }
    if (ssoResult.ResCode != 0)
    {
        Console.WriteLine(ssoResult.ResMsg);
        return;
    }
    if (ssoResult.ResCode == 0)
    {
        var loginUrl = $"{U9CAddress}/U9C/api/v1/autologin.aspx?apitoken={ssoResult.Data}";
        var processInfo = new ProcessStartInfo
        {
            FileName = loginUrl,
            UseShellExecute = true
        };
        Process.Start(processInfo);
    }
}

class SSO
{
    public int ResCode { get; set; }
    public bool Success { get; set; }
    public string ResMsg { get; set; }
    public string Data { get; set; }
}
```