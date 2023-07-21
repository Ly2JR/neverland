---
title: 阿里云DDNS
date: 2023-07-13
dir.order: 1
order: 1
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - DOCKER
---

## 缘由

在[NAS自动同步DDNS](../nas/cloud.md#私有云动态ip问题)上使用的是[chenhw2/aliyun-ddns-cli:latest](chenhw2/aliyun-ddns-cli:latest)，使用的是Go。

作为一名普通的C#开发者，有必要自己来实现，以及顺便学习下Docker，[原代码地址](https://github.com/Ly2JR/aliyun.ddns)。

- [x] 获取公网地址
- [x] 获取环境变量参数
- [x] 添加阿里云解析记录
- [x] 强签名
- [x] 支持Docker
- [x] 新增Docker环境变量配置
- [x] 新增记录修改

## 资料

[Dokcer](https://docs.docker.com/language/dotnet/)

[阿里云OPENAPI](https://next.api.aliyun.com/api-tools/sdk/Alidns?version=2015-01-09&language=csharp-tea&tab=primer-doc)

[.NET 微服务](https://dotnet.microsoft.com/zh-cn/learn/aspnet/microservice-tutorial/intro)

[Docker与.NET Core](https://learn.microsoft.com/zh-cn/dotnet/core/docker/introduction)

[.NET 官方镜像](https://mcr.microsoft.com/en-us/catalog?page=1)

## 公网IP

有很多种获取外网IP的方式，这里选用[ip-api](https://ip-api.com/)，个人够用，利用`http://ip-api.com/json/?lang=zh-CN&fields=status,query`获取到公网地址。

[测试当前公网IP](http://ip-api.com/json/?lang=zh-CN&fields=status,query)

```cs
using (var client = new HttpClient())
{
    //不使用这个是因为有使用限制,https://ip-api.com/docs/api:json
    //var query = await client.GetFromJsonAsync<IPModelResult>(Contracts.QUERY_IPADDRESS_RESOURCE, cancelllationToken)
    //     .ConfigureAwait(false);

    using var response = await client.GetAsync("http://ip-api.com/json/?lang=zh-CN&fields=status,query", cancelllationToken)
          .ConfigureAwait(false);
    response.EnsureSuccessStatusCode().WriteRequestToConsole();

    //检查受限情况
    var ri = response.Headers.FirstOrDefault(it => it.Key == Contracts.QUERY_IPADDRESS_HEADER_RI).Value;
    if (ri != null)
    {
        if (ri.ElementAt(0) == "0")
        {
            var ttl = response.Headers.FirstOrDefault(it => it.Key == Contracts.QUERY_IPADDRESS_HEADER_TTL).Value;
            Console.WriteLine($"{Contracts.TITLE}ip地址查询受限,等待{ttl.ElementAt(0)}秒后重试");
            return string.Empty;
        }
    }
    var jsonResponse = await response.Content.ReadFromJsonAsync<IPModelResult>();
    if (jsonResponse != null)
    {
        if (jsonResponse.Status != null && jsonResponse.Status == "success") return jsonResponse.Query!;
    }
}

record class IPModelResult
{
    public IPModelResult(string? status=null,string? query=null) {
        this.Status= status; 
        this.Query = query;   
    }
    //[JsonPropertyName("status")]
    public string? Status { get; set; }

    public string? Query { get; set; }
}
```

## 环境变量

使用`Environment.GetEnvironmentVariable`获取环境变量，一是因为阿里账号问题，二是Docker运行需要配置

```cs
Environment.GetEnvironmentVariable("XXX");
```

### Visual Studio

项目`属性`，`调试`，打开`调试启动配置文件UI`

### Docker

1. `不推荐`在Dockerfile文件里添加`env <VarName>={VarValue}`的方式。
2. `推荐`使用`docker run -e vername=varvalue`命令。

## 云解析

::: tabs

@tab 客户端

```cs
Client CreateClient(string accessKey, string accessKeySecret)
{
    Config config = new Config
    {
        // 必填，您的 AccessKey ID
        AccessKeyId = accessKey,
        // 必填，您的 AccessKey Secret
        AccessKeySecret = accessKeySecret,
    };
    // Endpoint 请参考 https://api.aliyun.com/product/Alidns
    config.Endpoint = Contracts.DEFAULT_ALIBABA_ENDPOINT;
    return new Client(config);
}
```

@tab 查询云解析记录

```cs
DescribeDomainRecordsResponse? QueryDns(Client client, string domain = Contracts.DEBUG_ALIBABA_DOMAIN, string type = Contracts.DEFAULT_ALIBABA_REQUEST_TYPE_4)
{
    DescribeDomainRecordsRequest describeDomainRecordsRequest = new DescribeDomainRecordsRequest()
    {
        DomainName = domain,
        Type = type
    };
    RuntimeOptions runtime = new RuntimeOptions();
    try
    {
        // 复制代码运行请自行打印 API 的返回值
        var response = client.DescribeDomainRecordsWithOptions(describeDomainRecordsRequest, runtime);
        return response;
    }
    catch (TeaException error)
    {
        // 如有需要，请打印 error
        var msg = Common.AssertAsString(error.Message);

    }
    catch (Exception _error)
    {
        TeaException error = new TeaException(new Dictionary<string, object>
                {
                    { "message", _error.Message }
                });
        // 如有需要，请打印 error
        var msg = Common.AssertAsString(error.Message);
        Console.WriteLine($"{Contracts.TITLE}查询云解析失败,{msg}");
    }
    return null;
}
```

@tab 新增云解析记录

```cs
AddDomainRecordResponse? AddDns(Client client, string newIp, string domain = Contracts.DEBUG_ALIBABA_DOMAIN, int ttl = Contracts.DEFAULT_ALIBABA_REQUEST_TTL)
{
    //参数
    AddDomainRecordRequest addDomainRecordRequest = new AddDomainRecordRequest()
    {
        DomainName = domain,//域名名称
        RR = Contracts.DEFAULT_ALIBABA_REQUEST_RR,//主机记录
        Type = Contracts.DEFAULT_ALIBABA_REQUEST_TYPE_4,//解析记录类型
        Value = newIp,//记录值
        TTL = ttl
    };
    //运行时高级配置
    RuntimeOptions runtime = new RuntimeOptions();
    try
    {
        // 复制代码运行请自行打印 API 的返回值
        var response = client.AddDomainRecordWithOptions(addDomainRecordRequest, runtime);
        return response;
    }
    catch (TeaException error)
    {
        // 如有需要，请打印 error
        var msg = Common.AssertAsString(error.Message);
        Console.WriteLine($"{Contracts.TITLE}新增云解析失败,{msg}");
    }
    catch (Exception _error)
    {
        TeaException error = new TeaException(new Dictionary<string, object>
                {
                    { "message", _error.Message }
                });
        // 如有需要，请打印 error
        var msg = Common.AssertAsString(error.Message);
        Console.WriteLine($"{Contracts.TITLE}新增云解析失败,{msg}");
    }
    return null;
}
```

@tab 更新云解析记录

```cs
UpdateDomainRecordResponse? UpdateDns(Client client, string recordId, string newIp, string RR = Contracts.DEFAULT_ALIBABA_REQUEST_RR, string type = Contracts.DEFAULT_ALIBABA_REQUEST_TYPE_4)
{
    UpdateDomainRecordRequest updateDomainRecordRequest = new UpdateDomainRecordRequest()
    {
        RecordId = recordId,
        RR = RR,
        Type = type,
        Value = newIp,
    };
    RuntimeOptions runtime = new RuntimeOptions();
    try
    {
        // 复制代码运行请自行打印 API 的返回值
        var response = client.UpdateDomainRecordWithOptions(updateDomainRecordRequest, runtime);
        return response;
    }
    catch (TeaException error)
    {
        // 如有需要，请打印 error
        var msg = Common.AssertAsString(error.Message);
        Console.WriteLine($"{Contracts.TITLE}修改云解析失败,{msg}");
    }
    catch (Exception _error)
    {
        TeaException error = new TeaException(new Dictionary<string, object>
                {
                    { "message", _error.Message }
                });
        // 如有需要，请打印 error
        var msg = Common.AssertAsString(error.Message);
        Console.WriteLine($"{Contracts.TITLE}修改云解析失败,{msg}");
    }
    return null;
}
```

:::

## 部署

映像:`ali.ddns-image`，容器:`neverland/ali.ddns`
