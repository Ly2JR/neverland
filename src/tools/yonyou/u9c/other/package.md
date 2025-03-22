---
title: U9C 补丁制作
date: 2024-09-24
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 还原补丁库

将`补丁库.bak`还原到数据库

## 配置环境

### 数据库配置文件

打开`X:\BuildTool\environment.xml`文件

更改数据库链接字符串，指向还原的补丁库

```xml
<system>    
    <connectionString>packet size=4096;Connection Timeout=150;Max Pool size=1500;data source=127.0.0.1;persist security info=True;initial catalog=XXX;user id=XXX;password=XXX</connectionString>
</system>    
```

### 打包配置文件

打开`X:\BuildTool\desktopBuild.xml`文件

更改补丁版本`version`，产品安装位置`ProductPath`，补丁存放位置`ProjectPath`，模块名称`Module`，客户号`CustomerNo`

```xml{2,6,7,11,13}
<?xml version="1.0"?>
<configuration version="CE">
  <!--U9,HR,CD,TR !-->
  <Domain>CD</Domain>
  <PatchBaseVersion>0</PatchBaseVersion>
  <ProductPath>C:\yonyou\U9CE</ProductPath>
  <ProjectPath>C:\yonyou\补丁KK</ProjectPath>
  <FilePath/>
  <!--重新构造时是否清空文件夹Y，N-->
  <DelOnRebuild>Y</DelOnRebuild>
  <CustomerNo>TO_SCM</CustomerNo>
  <IsCustomer>1</IsCustomer>
  <Module>Cust_KK</Module>
  <SpNumber>0</SpNumber>
  <IsSP>0</IsSP>
</configuration>  
```

## 打包

打开`X:\BuildTool\UFIDA.UBF.Build.Engine.DesktopBuild.exe`

![补丁版本](https://image.ilyl.life:8443/yonyou/u9c/package/package1.png)

新建方案，输入方案名称

![新建方案](https://image.ilyl.life:8443/yonyou/u9c/package/package2.png)

选择方案，点击`构造`，忽略提示

![构造](https://image.ilyl.life:8443/yonyou/u9c/package/package3.png)

查看打包目录，放置相应文件

![打包目录](https://image.ilyl.life:8443/yonyou/u9c/package/package4.png)

点击`生成安装信息`，生成`packageinfo.xml`文件

最后点击`生成补丁`

## 示例

打包制作API接口、UI插件以及BE插件为例

将所有文件都拷贝放置在`Files`文件夹下，点击生成安装信息

打开`packageinfo.xml`文件编辑如下

`API`接口相关有8个文件，分别放在`\Portal\ApplicationServer\Libs`和`\Portal\ApplicationLib`目录下

`BE`插件相关2个文件，分别放在`\Portal\ApplicationServer\Libs`和`\Portal\bin`目录下

`UI`插件相关2个文件，分别放在`\Portal\UILib`和`\Portal`目录下

```xml
<?xml version="1.0" encoding="UTF-8"?>
<package>
  <baseinfo code="CDCE.Cust_KK.1002409230000008" name="CDCE.Cust_KK.1002409230000008" type="" version="CE" releasedate="" desc="" question="" doc="" basebuild="" referenceBuild="20090918002" IsCustomer="1" CustomerNo="TO_KK" Domain="CD" SPNum="0" Modules="Cust_KK," DependModules="," IsSP="0" />
  <description>补丁示例</description>
  <descriptiondetail>补丁示例</descriptiondetail>
  <filelist>
    <file dir="\Portal\ApplicationServer\Libs;\Portal\ApplicationLib;" exeflag="" servertype="0" filename="UFIDA.U9.CUST.Api.Agent.dll" filetype="0" />
    <file dir="\Portal\ApplicationServer\Libs;\Portal\ApplicationLib;" exeflag="" servertype="0" filename="UFIDA.U9.CUST.Api.Agent.pdb" filetype="0" />
    <file dir="\Portal\ApplicationServer\Libs;\Portal\ApplicationLib;" exeflag="" servertype="0" filename="UFIDA.U9.CUST.Api.Deploy.dll" filetype="0" />
    <file dir="\Portal\ApplicationServer\Libs;\Portal\ApplicationLib;" exeflag="" servertype="0" filename="UFIDA.U9.CUST.Api.Deploy.pdb" filetype="0" />
    <file dir="\Portal\ApplicationServer\Libs;" exeflag="" servertype="0" filename="UFIDA.U9.CUST.Api.dll" filetype="0" />
    <file dir="\Portal\RestServices;" exeflag="" servertype="0" filename="UFIDA.U9.CUST.Api.IRun.svc" filetype="0" />
    <file dir="\Portal\ApplicationServer\Libs;" exeflag="" servertype="0" filename="UFIDA.U9.CUST.Api.pdb" filetype="0" />
    <file dir="\Portal\ApplicationServer\Libs;" exeflag="" servertype="0" filename="UFIDA.U9.CUST.Api.ubfsvc" filetype="0" />
    <file dir="\Portal\ApplicationServer\Libs;" exeflag="" servertype="0" filename="UFIDA.U9.CUST.BEPlugin.dll" filetype="0" />
    <file dir="\Portal\bin;" exeflag="" servertype="0" filename="CompleteRpt.AfterDeleted.sub.xml" filetype="0" />
    <file dir="\Portal\UILib;" exeflag="" servertype="0" filename="UFIDA.U9.CUST.UIPlugin.dll" filetype="0" />
    <file dir="\Portal;" exeflag="" servertype="0" filename="WebPartExtend_PurchaseOrderMainUIFormWebPart_CUST.config" filetype="0" />
  </filelist>
</package>
```

## 目录说明

### AssemblyInfo

放置`*.dbxml`文件，此文件是各个模块装配文件的集合

### Callback

### CheckSQL

### CLR

### Files

放置所有需要安装的文件，没有目录区分

### Metadata

放置与原数据库脚本一起生成的`*.sql.bulk`文件

### Portal

### PostSQL

放置执行完元数据脚本后执行的脚本

### PreSQL

### ReportMDD

::: warning
补丁安装后，需要再次进行报表发布
:::

放置所有报表模型，不需要子目录

### ResData

### ResFiles

