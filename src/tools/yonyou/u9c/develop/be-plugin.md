---
title: BE插件开发
date: 2024-06-17
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U9C
---

U9C里的BE插件开发相当于在原始业务单据的按钮上进行操作前、操作后业务开发，能开发的功能都预制好的。

## BE插件事件种类

|名称|描述|类型|
|:-|:-|:-|
|BeforeDefaultValue||BE|
|SetDefaultValue||BE|
|AfterfaultValue||BE|
|BeforeValidate||BE|
|Validate||BE|
|AfterValidate||BE|
|BeforeInserting||BE|
|Inserting||BE|
|AfterInserting||BE|
|Inserted||BE|
|AfterInserted||BE|
|BeforeUpdating||BE|
|Updating||BE|
|AfterUpdating||BE|
|BeforeUpdated||BE|
|Updated||BE|
|AfterUpdated||BE|
|BeforeDeleting||BE|
|Deleting||BE|
|AfterDeleting||BE|
|BeforeDeleted||BE|
|Deleted||BE|
|AfterDeleted||BE|

![新增修改流程](https://nas.ilyl.life:8092/yonyou/u9c/plugin/be/u9c-be-insert-and-update.png)

![删除流程](https://nas.ilyl.life:8092/yonyou/u9c/plugin/be/u9c-be-delete.png)

## 项目结构

![项目结构](https://nas.ilyl.life:8092/yonyou/u9c/plugin/be/u9c-be-plugin-code.png)

```
|--UFIDA.U9.Customer.PluginBE.sln
|--|--引用
|--|--|--System
|--|--|--System.Data
|--|--|--System.Web
|--|--|--System.Xml
|--|--|--UBF.System
|--|--|--UFIDA.U9.Base.BaseBE
|--|--|--UFIDA.U9.CBO.PubBE
|--|--|--UFIDA.U9.SM.SMBE
|--|--|--UFIDA.UBF.AopFrame
|--|--|--UFIDA.UBF.Business
|--|--|--UFIDA.UBF.Execution
|--|--|--UFIDA.UBF.PL
|--|--|--UFIDA.UBF.Service
|--|--SO
|--|--|--AfterValidate.cs
|--|--|--AfterValidateExend.cs
|--|--|--So.AfterValidate.sub.xml
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

- UFIDA.UBF.AopFrame

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.AopFrame.dll`

- UFIDA.UBF.Business

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.Business.dll`

- UFIDA.UBF.Execution

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.Execution.dll`

- UFIDA.UBF.PL

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.PL.dll`

- UFIDA.UBF.Service

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.Service.dll`

#### 变化引用

- UFIDA.U9.SM.SMBE

引用位置：`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\UFIDA.U9.SM.SMBE.dll`

销售订单的相关实体，不同的业务需要引用不同的实体文件

### 类文件

`AfterValidate.cs`和`AfterValidateExend.cs`是同一个文件`AfterValidate.cs`,利用`partial`进行代码合并,加`Exend`后缀将业务实现分离出来供开发使用

- AfterValidate.cs

```cs
public partial class AfterValidate : UFSoft.UBF.Eventing.IEventSubscriber
{
    
    void UFSoft.UBF.Eventing.IEventSubscriber.Notify(object[] args)
    {
        this.Do_Notify(args);
    }
}
```

- AfterValidateExend.cs

```cs
public partial class AfterValidate
{ 
    private void Do_Notify(object[] args)
    {
        #region 从事件参数中取得当前业务实体                                                       
        if (args == null || args.Length == 0 || !(args[0] is UFSoft.UBF.Business.EntityEvent))
            return;                                                                           
        BusinessEntity.EntityKey key = ((UFSoft.UBF.Business.EntityEvent)args[0]).EntityKey;  
        if (key == null)                                                                      
            return;                                                                           
        UFIDA.U9.SM.SO.SO holder = key.GetEntity() as UFIDA.U9.SM.SO.SO;                                      
        if (holder == null)                                                                   
            return;
        #endregion

        #region 销售单金额上限控制
        var totalMoney = 0M;
        if (holder.SOLines.Count > 0)
        {
            foreach(var line in holder.SOLines)
            {
                totalMoney += line.TotalMoneyTC;
            }

            if (totalMoney > 1000000)
            {
                throw new Exception("所有行汇总金额不能超过100W！");
            }
        }
        #endregion
    }
}
```

- So.AfterValidate.sub.xml

So.AfterValidate.sub.xml文件参考xml结构说明

## xml结构

约定文件名称：`单据名.事件名.sub.xml`

例如销售订单保存前验证,`SO.AfterValidate.sub.xml`

```xml
<?xml version="1.0" encoding="utf-16"?>
<pub-sub>
  <subcription event="UFIDA.U9.SM.SO.SO.AfterValidate" ContactInfo="" Developer="" FeatureSummary="" PublishTime="0001年1月1日">
    <subscriber type="UFIDA.U9.Custom.PluginExampleBE.AfterValidate,UFIDA.U9.Custom.PluginExampleBE.dll" />
  </subcription>
</pub-sub>
```

- subcription

`event`: 接入点的名称,这里是销售订单,后面的`AfterValidate`表明事件名称

`ContactInfo`: 开发者的联系方式

`Developer`: 开发者

`FeatureSummary`: 业务场景

`PublishTime`：发布时间

- subscriber

`type`:  反射结构`类名,dll文件名`

## 部署

- 将项目的dll文件拷贝到`yonyou\U9CE\Portal\ApplicationServer\Libs`目录下

- 将项目里的`XXX.sub.xml`拷贝到`yonyou\U9CE\Portal\bin`目录下

## 效果

![预览效果](https://nas.ilyl.life:8092/yonyou/u9c/plugin/be/u9c-be-plugin.png)
