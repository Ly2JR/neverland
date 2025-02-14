---
title: 群晖邮箱
date: 2024-11-06
isOriginal: true
category:
  - 工具箱
tag:
  - 群晖邮箱
  - 安全设置
editLink: false
footer: false
copy: true
---

::: tip
[邮箱安全检查网站](https://mxtoolbox.com/)
:::

自搭建邮箱服务器非常容易被黑，导致被拉黑，无法发邮件，因此需要进行安全设置

而安全设置除了[邮箱服务器安全设置](https://kb.synology.cn/zh-cn/DSM/tutorial/MailPlus_being_a_spammer)之外，还需要在DNS端进行配置，确保邮箱发送端安全认证

## SPF记录

SPF记录或发件人策略框架记录通过指定允许代表域发送电子邮件的服务器来帮助防止电子邮件欺骗

基本SPF记录是TXT记录包含下表中所示的标签和值。有关SPF记录语法的更多信息请访问[此网站](http://www.open-spf.org/SPF_Record_Syntax/)

|标签|值|示例|
|:-|:-|:-|
|v|SPF 版本。现在请使用版本“spf1”|v=spf1|
|ip4|授权邮件服务器的 IP 地址。这必须是标准格式的 IPv4 地址或范围|ip4:your mail server's IP address|
|all|此值定义接收服务器是否应拒绝来自未经授权的发件人的邮件|-all拒绝并放弃<br>~all允许但标记为可疑|

按照上述格式如果域名为`example.com`IP 地址为`127.0.0.1`则 SPF 记录可能为

- 名称example.com
- 信息v=spf1 ip4: 127.0.0.1 -all

也可以使用[SPF在线生成器](https://dmarcly.com/tools/spf-record-generator)生成记录进行配置

::: warning
-all是建议选项因为它可以更好地确保电子邮件来自授权发件人。
:::

## DKIM记录

DKIM代表DomainKeys Identified Email。通过在每封传出电子邮件上附加数字签名DKIM提供了一种验证电子邮件是否确实由域所有者授权的方法。

DKIM记录按以下格式添加为TXT记录

||格式|示例|
|:-|:-|:-|
|名称|`DKIM selector prefix`._domainkey.`your domain name`|`abc`._domainkey.`example.com`|
|信息|v=DKIM1; k=rsa; p=`DKIM public key`|v=DKIM1; k=rsa; p=`MIGfMA0GCSqGSIb3DQE`|

## DMARC记录

DMARC代表基于域的邮件验证、报告和一致性确定如何处理未通过`SPF`和`DKIM`检查的电子邮件。借助`DMARC`的报告功能域所有者可以深入了解邮件流量以更好地检测欺骗攻击。有关DMARC记录的更多信息请访问[此网站](https://dmarc.org/)

DMARC记录是包含以下标签和值的TXT记录

|标签|值|示例|
|:-|:-|:-|
|v|DMARC 版本。现在请使用版本“DMARC1”|v=DMARC1|
|p|对未经验证的电子邮件实施的策略|p=none仅监控<br>p=quarantine发送到隔离邮箱<br>p=reject拒绝并封锁|
|pct|指定策略强制实施的电子邮件百分比|pct=100即 100% 的电子邮件将受到监控、隔离或拒绝|
|rua=mailto|用于接收报告的电子邮件地址|rua=mailto:your email address|

按照上述格式如果域名为`example.com`且用于接收报告的电子邮件地址为`postmaster@example.com`则`DMARC记录`可以是

- 名称_dmarc.example.com
- 信息v=DMARC1; p=none; pct=100; rua=mailto:postmaster@example.com

::: warning
p=none是分析电子邮件流的良好起点但它是一种宽松的策略不会封锁可疑邮件。建议在启用 SPF、DKIM 和 DMARC 一段时间后更改为p=quarantine以更好地防范域欺骗。
:::

## DANE记录

TLSA传输层安全验证记录会将 TLS 服务器证书与记录所在的域名相关联。

::: warning
此功能需要DNS服务器上的DNSSEC功能，DNSSEC需要收费
:::

## 第三方邮箱能收不能发

例如使用手机小米邮件配置好之后，能收邮件，但是一直发不出去。

可能开启了`STMP认证`，不能使用默认的邮件服务器配置

需要在`stmp`认证，重新输入`用户名`和`密码`

即`用户名`、`邮件账户`、`密码`保持一体。

## 代码测试

`SmtpClient`被弃用，请使用[MailKit](https://dotnetfoundation.org/news-events/detail/mailkit-working-with-emails)

```cs
using MailKit.Net.Smtp;
using MimeKit;
var message = new MimeMessage();
message.From.Add(new MailboxAddress("Your", "Your@example.com"));
message.To.Add(new MailboxAddress("YourFriend", "YourFriend@example.com"));
message.Subject = "Hello";

message.Body = new TextPart("plain")
{
    Text = "This is a message"
};

using var client = new SmtpClient();
client.Connect("domain.com", 587,false);
// Note: only needed if the SMTP server requires authentication  
client.Authenticate("smtp_user_name", "smtp_user_pwd");
client.Send(message);
client.Disconnect(true);
```
