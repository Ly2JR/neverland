---
title: U9C单点登录
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

::: tabs

@tab CSharep

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

@tab Java

```java
public class SSOResult{
    private int ResCode;
    private boolean Success;
    private String ResMsg;
    private String Data;
}

public static void main(String[] args) {
    final String U9CAddress = "http://127.0.0.1";
    final String ClientId = "";
    final String ClientSecret = "";
    final String EntCode = "";
    final String UserCode = "";
    final String OrgCode = "";
    final String SSOLogin= String.format("%s/U9C/webapi/OAuth2/SSOLogin?clientid=%s&clientsecret=%s&entCode=%s&userCode=%s&orgCode=%s&loginType=1",U9CAddress,ClientId,ClientSecret,EntCode,UserCode,OrgCode);

    Request request=new Request.Builder()
            .url(SSOLogin)
            .get()
            .build();

    Callback callback=new Callback() {
        @Override
        public void onFailure(@NotNull Call call, @NotNull IOException e) {
        }

        @Override
        public void onResponse(@NotNull Call call, @NotNull Response response) throws IOException {
            if(response.isSuccessful()){
                final String ssoResult= response.body().string();
                Gson gson = new Gson();
                SSOResult sso= gson.fromJson(ssoResult,SSOResult.class);
                if(sso.ResCode==0){
                    String loginUrl=String.format("%s/U9C/api/v1/autologin.aspx?apitoken=%s",U9CAddress,sso.Data);
                    try {
                        if(Desktop.isDesktopSupported()){
                            Desktop desktop = Desktop.getDesktop();
                            desktop.browse(new URI(loginUrl));
                        }
                    } catch (URISyntaxException e) {
                        e.printStackTrace();
                    }
                }else{
                    System.out.println(sso.ResMsg);
                }
            }
        }
    };

    OkHttpClient okHttpClient = new OkHttpClient.Builder().readTimeout(5, TimeUnit.SECONDS).build();
    okHttpClient.newCall(request).enqueue(callback);
}
```
:::