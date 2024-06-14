---
title: U9C开发环境搭建
date: 2024-06-14
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U9C
---

## 软件下载

1. [Microsoft SQL Server 2022](https://www.microsoft.com/zh-cn/sql-server/sql-server-downloads)
2. [Microsoft SQL Server 2022 Reporting Services](https://www.microsoft.com/zh-cn/download/details.aspx?id=104502)
3. [SSMS](https://learn.microsoft.com/zh-cn/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16)
4. [U9C](https://yonbip.diwork.com/yonbip-ec-minor/rest/pub_article/yonbip/upesn/esn/3922109/20210609/1637/342d99ae-b5c1-44be-bcd6-7b91c50ccba7.html?random=0175cf3c-815d-47ba-9eb5-01a91f710607#view)
5. [Visual Studio 2015](https://visualstudio.microsoft.com/zh-hans/vs/older-downloads/)
6. [Everything](https://www.voidtools.com/downloads/)

## 环境要求

Windows8系统以上，具体看软件下载相关软件的系统要求。

以`Windows10家庭版`为例

### 开启IIS

1. 打开`控制面板`
2. 找到`程序`
3. 打开`程序和功能`,快捷方式在`运行`里输入`appwiz.cpl`
4. 打开`启动或关闭Windows功能`
5. 全选`Internet Information Services`和`Internet Information Services可承载的Web核心`

### 开启管理员模式

1. [Windows10组策表开启](../../windows/gpedit.md)
2. `运行`里输入`gpedit.msc`
3. 找到`计算机配置\Windows设置\安全设置\本地策略\安全选项`
4. `禁用`策略`用户账户控制:以管理员批准模式运行所有管理员`和`用户账户控制:用于内置管理员账户的管理员批准模式`

## 软件安装

### Sql Server 2022

- 选择`开发人员`模式安装
- 选择`口令认证`模式下一步安装即可

### Sql Server 2022 Reporting Servers

::: tip
安装位置：C:\Program Files\Microsoft SQL Server Reporting Services\SSRS\ReportServer
:::

- 选择`开发人员`模式

- 配置报表服务器

1. `服务账户`改为`使用其他账户`即当前电脑登陆账户`电脑名\账户名`
2. `Web服务URL`点击应用,生成报表服务,地址形式`http://电脑名:80/ReportServer`
3. `数据库`点击更改数据库，新建数据库，凭证使用`SQL凭证`
4. `Web门户URL`点击应用,生成门户URL，地址形式`http://电脑名:90/Reports`
5. `加密密钥`点击`删除`即删除加密的内容，在点击`更改`


### Visual Studio 2015

  U9C使用.NETFramework 4.5框架，使用该版本开发

### Eevrything

  方便查找文件，解决U9C出现的各种问题

### U9C安装及问题

::: tip
补丁地址: 219.141.185.72:170
:::

U9C和UBF以管理员方式运行安装，相关配置见相关文档，各种稀奇古怪问题见[社区](https://u9hub.diwork.com/)

主要安装时文件不完整，缺少各种文件配置，导致U9C或UBF出现各种错。

### [UBF更新](https://u9hub.diwork.com/a/tools/ubf)

### 申请试用许可

进入[社区](https://u9hub.diwork.com/)申请即可，一般当天通过。

### 已知问题解决方案

优先查找[社区](https://u9hub.diwork.com/)

1. U9C打开报表提示各种未能加载程序集

例如"报表查询过程报错assembly. Details: 未能加载文件或程序集“UFSoft.UBF.Report.Base,"

使用`Everything`搜索`UFSoft.UBF.Report.base.dll`,赋值其中一个放到`Sql Server 2022 Reporting Servers`安装下`C:\Program Files\Microsoft SQL Server Reporting Services\SSRS\ReportServer`放在`Bin`目录下即可

2. UBF无法发布报表，删除用户方案失败

使用`Everything`搜索提示的文件错误,如`UFSOFT.UBF.View.Query.dll`，找到最大或者最新的一个文件，替换UBF安装目录下的文件即可