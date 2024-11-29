---
title: BP插件开发
date: 2024-07-04
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U9C
---

BP插件开发相当于系统在执行服务时，在执行服务前后添加的开发，如单据的打开、关闭、审核等等。

## 项目结构

![项目结构](https://nas.ilyl.life:8092/yonyou/u9c/plugin/bp/u9c-bp-plugin-code.png)

```
|--UFIDA.U9.Customer.PluginBE.sln
|--|--引用
|--|--|--System
|--|--|--System.Data
|--|--|--System.Web
|--|--|--System.Xml
|--|--|--UBF.System
|--|--|--UFIDA.U9.Base.BaseBE
|--|--|--UFIDA.U9.Base.BaseBP
|--|--|--UFIDA.U9.CBO.PubBE
|--|--|--UFSoft.UBF.AopFrame
|--|--|--UFSoft.UBF.Business
|--|--|--UFSoft.UBF.Execution
|--|--|--UFSoft.UBF.PL
|--|--|--UFSoft.UBF.Service
|--|--LoginBP
|--|--|--LoginBP.cs
|--|--|--LoginBP.UFIDA.UBF.BPSVExtend.config
|--|--|--LoginBPExtend.cs
```

### 引用

#### 必备引用

`System`、`System.Data`、`System.Web`、`System.Xml`前4个`System`为系统类库

- UBF.System

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UBF.System.dll`

- UFIDA.U9.Base.BaseBE

引用位置：`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\UFIDA.U9.Base.BaseBE.dll`

- UFIDA.U9.CBO.PubBE

引用位置：`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\UFIDA.U9.CBO.PubBE.dll`

- UFSoft.UBF.AopFrame

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.AopFrame.dll`

- UFSoft.UBF.Business

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.Business.dll`

- UFSoft.UBF.Execution

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.Execution.dll`

- UFSoft.UBF.PL

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.PL.dll`

- UFSoft.UBF.Service

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.Service.dll`

#### 变化引用

- UFIDA.U9.Base.BaseBP

引用位置：`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\UFIDA.U9.Base.BaseBP.dll`

登录服务，不同的业务需要引用不同的实体文件

### 类文件

`LoginBP.cs`和`LoginBPExend.cs`是同一个文件`LoginBP.cs`，利用`partial`进行代码合并，加`Exend`后缀将业务实现分离出来供开发使用

- LoginBP.cs

```cs
public partial class LoginBP : UFSoft.UBF.Service.BPSVExtendBase
{
    public override void BeforeDo(object bp)
    {
        this.Do_BeforeDo(bp);
    }
    
    public override void AfterDo(object bp, ref object result)
    {
        this.Do_AfterDo(bp, ref result);
    }
}
```

- LoginBPExend.cs

```cs
public partial class LoginBP
{
    private void Do_BeforeDo(object bp)
    {
        UFIDA.U9.Base.UserRole.LoginBP strongBP = bp as UFIDA.U9.Base.UserRole.LoginBP;                    
        if (strongBP == null) return;
        if (strongBP.IP == "127.0.0.1")
        {
            throw new Exception("非法IP登录");
        }
    }
    
    private void Do_AfterDo(object bp, ref object result)
    {
        UFIDA.U9.Base.UserRole.LoginBP strongBP = bp as UFIDA.U9.Base.UserRole.LoginBP;                    
        if (strongBP == null) return;       
    }
}
```

- LoginBP.UFIDA.UBF.BPSVExtend.config

LoginBP.UFIDA.UBF.BPSVExtend.config文件参考xml结构说明

## xml结构

```xml
<?xml version="1.0" encoding="utf-16"?>
<BPSVExtend>
  <Extend on="UFIDA.U9.Base.UserRole.LoginBP" extendType="UFIDA.U9.Customer.LoginPluginBP.LoginBP,UFIDA.U9.Customer.LoginPluginBP.dll" />
</BPSVExtend>
```

- Extend

`on`: 基于登录检测服务

`extendType`: 开发的程序集文档

## 部署

- 将项目的dll文件拷贝到`x:\yonyou\U9CE\Portal\ApplicationServer\Libs`目录下

- 将项目的`XXX.BPSVExtend.config`文件`Extend`节点拷贝到`X:\yonyou\U9C\Portal\UBFConfig\UFIDA.UBF.BPSVExtend.config`目录下

## 效果

![预览效果](https://nas.ilyl.life:8092/yonyou/u9c/plugin/bp/u9c-bp-plugin.gif)