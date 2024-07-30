---
title: 档案开发
date: 2024-07-05
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U9C
---

::: tip
UBF开发过程中需要经常点击保存
:::

## 配置

### 数据库

在UBF安装目录下，打开`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\environment.xml`

将`system`节点下的连接字符串改为正确的数据库连接字符串

```xml
<system>
  <connectionString>User Id=XXX;Password=XXX;Data Source=127.0.0.1;Initial Catalog=XXX;packet size=4096;Max Pool size=500;Connection Timeout=5;persist security info=True;MultipleActiveResultSets=true;</connectionString>
</system>
```

### 部署

在UBF安装目录下，打开`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\buildup.xml`

将`Buildup`元素节点下的`ConfigInfo`元素里的`Path`指向U9C的`UILib`目录

```xml
<Buildup>
	<ConfigInfo Path="C:\yonyou\U9CE\Portal\UILib\" />
</Buildup>
```

### UBF

在U9C安装目录下`yonyou`新建UBF开发项目文件夹，例如`U9Product`，在创建五个文件夹分别为`bulk`,`Code`,`Model`,`Sql`,`UICode`

打开UBF，点击`工具\配置`进行配置，将相应的目录指向自己的开发项目文件夹`U9Product`，剩余路径执行U9C安装目录，如图所示

![配置UBF](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ubf-config.png)

配置完成之后，重新启动UBF

## 创建BE解决方案

打开工具栏上的`文件\新建\新建解决方案`

位置：选择新建的开发项目文件夹`U9Product\Model`

名称：就是解决方案名称随便写

![新建解决方案](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-2.png)

创建一个空的解决方案

![解决方案](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-3.png)

### 创建实体解决方案

右击新建的空白解决方案`Archive`，点击新建

![新建](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-4.png)

选择实体，输入实体名称,如`ArchiveBE`，结尾默认写上`BE`

![新建实体](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-5.png)

![实体解决方案](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-6.png)

### 修改解决方案名称

选择视图模型页签，点击创建的顶级BE节点`ArchveBE`

![视图模型](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-7.png)

选择顶级节点后，在点击`属性`页签，更改配件名

![更改配件名](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-8.png)

配件名就是VS解决方案中的完整项目名称

同理，再次选择视图模型页签，点击顶级BE节点`ArchiveBE`下的命名空间节点也是`ArchiveBE`

![命名空间](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-9.png)

选择命名空间节点后，在点击`属性`页签，更改名称

![更改命名空间](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-10.png)

配件名就是VS解决方案中的完整项目名称

### 添加引用

1. APP下的`UFIDA.U9.CBO.PubBE.MetaData`

2. UBF下的`UFIDA.U9.Base.BaseBE.MetaData`

打开解决方案页签，点击`Reference`

![引用](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-11.png)

在切换到发布对象浏览器页签，选择目录选择`APP`,找到`UFIDA.U9.CBO.PubBE.MetaData`并双击打开

![UFIDA.U9.CBO.PubBE.MetaData](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-12.png)

选择`UFIDA.U9.CBO.PubBE.MetaData`节点拖拽到解决方案页签，然后在拖拽到`Reference`节点上

![UFIDA.U9.CBO.PubBE.MetaData引用](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-13.png)

同理，将选择目录选择`UBF`,找到`UFIDA.U9.Base.BaseBE.MetaData`并双击打开

![UFIDA.U9.Base.BaseBE.MetaData](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-14.png)

选择`UFIDA.U9.Base.BaseBE.MetaData`节点拖拽到解决方案页签，然后在拖拽到`Reference`节点上

![UFIDA.U9.Base.BaseBE.MetaData引用](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-15.png)

### 新建实体

打开模型视图，选择末节点的类图`ArchiveBE`

![类图](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-16.png)

双击打开，将类定义工具下的实体，拖拽到类图里

![新建实体](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-17.png)

选择实体，右击属性，更改`名称`、`显示名称`、`缺省表名`

名称：对应VS里的实体的类名

显示名称：类图里显示的名称

缺省表名：对应数据库里的表名

![修改实体](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-18.png)

### 添加实体字段

在详细信息页签里，添加实体字段，组织`Org`、编码`Code`、名称`Name`

![添加实体属性](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-19.png)

![完整实体模型视图](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-20.png)

### 发布实体

切换解决方案页签，选择BE项目，右击点击构造

![构造实体](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-21.png)

在消息列表页签中查看是否构造成功。构造成功之后打开新建的开发项目文件夹

在U9C数据库里执行`bulk\Unconfiged\DBScript`文件夹里的`UFIDA.U9.CUST.ArchiveBE_DDL.sql`脚本

![执行DBScript](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-22.png)

在U9C数据库里执行`bulk\Unconfiged\MetadataScript`文件夹里的`UFIDA.U9.CUST.ArchiveBE_Metadata.sql`和`UFIDA.U9.CUST.ArchiveBE_Resource.sql`脚本

![执行MetadataScript](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-23.png)

打开`X:\yonyou\U9Product\Code\ArchiveBE`文件夹，点击AutoBuild.bat

![部署实体文件](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-24.png)

或者用VS打开解决方案，并重新生成

将程序集文件`UFIDA.U9.CUST.ArchiveBE.dll`拷贝到`X:\yonyou\U9CE\Portal\ApplicationLib`文件夹下

将程序集文件`UFIDA.U9.CUST.ArchiveBE。Deploy.dll`拷贝到`X:\yonyou\U9CE\Portal\ApplicationLib`和`X:\yonyou\U9CE\Portal\ApplicationServer\Libs`文件夹下

## 创建UI解决方案

### 创建UIModel解决方案

在解决方案页签中，选择顶级节点`Archive`右击新建，选择界面项目

![新建界面项目](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-25.png)

名称写上`Archive`，名称结尾默认写上`UIModel`

![界面项目目录](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-26.png)

### 修改UIModel解决方案名称

打开模型视图页签，选择新建的界面项目`ArchiveUIModel`

![选择界面项目](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-27.png)

在切换到属性页签，更改`配件名`和`IsImport`

![更改UIModel解决方案](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-28.png)

### 动作组

双击打开`ArchiveUIModel.ubfuim`,选择动作组，右击

![应用缺省特性](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-29.png)

点击应用缺省特性

![应用缺省特性](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-30.png)

### 更改界面模型名称

选择顶级节点`ArchiveUIModel`并右击

![编辑模型](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-31.png)

更改名称空间

![更改界面模型名称](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-32.png)

### 绑定实体

打开发布对象浏览器，选择目录选择`Unconfiged`找到发布的`UFIDA.U9.CUST.ArchiveBE.MetaData`双击并打开

![ArchiveBE实体](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-33.png)

选择基础档案`Archive`并拖拽到`ArchiveUIModel`节点上

![绑定BE实体](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-34.gif)

### 创建UIForm解决方案

在创建的界面项目`ArchiveUIModel.ubfuiproj`节点上右击新建

![新建页面](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-35.png)

名称输入`ArchiveUIForm`，名称后缀默认写上`UIForm`

![页面](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-36.png)

模板类型选择`定制Form模板`，选择模型选择`UI_单卡片`，界面元数据，选择当前项目的`ArchiveUIModel.ubfuim`

![新建表单](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-37.png)

确定后，显示UI设计页面

![UI设计界面](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-38.png)

选择工具箱里的界面元数据，打开`Misc`节点，显示的就是BE实体属性，推拽属性节点到界面上

![UI设计](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-39.gif)

选择UI设计页面的空白处，切换到属性，更改是否主Form为`True`，更改显示名称来源为`Custom`，显示名称为`基础档案`

![更改UI界面属性](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-40.png)

### 发布UI

打开解决方案，选择`ArchiveUIModel.ubfuiproj`，右击构造

![构造UI](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-41.png)

在消息列表页签中查看是否构造成功。构造成功之后打开新建的开发项目文件夹

在U9C数据库里执行`bulk\u_ui\UIScript`文件夹里的`UFIDA.U9.CUST.ArchiveUI_Metadata.sql`和`UFIDA.U9.CUST.ArchiveUI_Resource.sql`脚本

![执行UIScript](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-42.png)

打开`X:\yonyou\U9Product\UICode\ArchiveUI`文件夹，点击AutoBuild.bat

![部署UI文件](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-43.png)

或者用VS打开解决方案，并重新生成

将程序集文件`UFIDA.U9.CUST.ArchiveUI.WebPart.dll`拷贝到`X:\yonyou\U9CE\Portal\UILib`文件夹下

## 发布服务组

打开解决方案页签，选择顶级节点`Archive`并右击

![发布服务组](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-44.png)

点击`发布服务组`,在解决方案目录下生成`Archive.sg`的文件

![服务组位置](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-45.png)

## 新建菜单

在UBF安装目录下`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio`,打开`BuildupDesigner.exe`

![BuildupDesigner](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-46.png)

选择需要发布的位置，如`库存管理`

![库存管理](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-47.png)

点击`增加组件`按钮，在载入应用组件里点击`载入组件`,选择发布的服务组文件`Archive.sg`

![Archive组件](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-48.png)

确定后，在点击`增加页面`按钮

![增加页面](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-49.png)

编辑页面属性的基本信息

![页面属性](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-50.png)

页面属性确定后，在选择右击点击`页面编辑`

![页面编辑](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-51.png)

将From选择里的库存管理`ArchiveUIFormWebPart`拖拽到右边的页面编辑区

![页面编辑](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-52.png)

如果看不到`ArchiveUIFormWebPart`，用UBF打开Archive项目，找到`ArchiveUIForm.ubfform`，选择页面属性，设置是否主Form为`True`

然后右击设置

![页面编辑区设置](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-53.png)

`勾选`是否是主区域

![页面列属性设置](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-54.png)

在页面编辑区右边向下箭头，选择`编辑部件属性`

![编辑部件属性](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-55.png)

更改`名称`和`显示名称`

![编辑部件属性](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-56.png)

返回到主页面，点击`应用菜单编辑器`

![应用菜单编辑器](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-57.png)

添加菜单，可以多级添加，代码与ID保持一致，输入名称和显示名称，URI设置通过`直接选取页`选择在库存管理里添加的基础档案

![菜单属性](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-58.png)

在工具栏`文件\保存`当前设置的步骤。

### 发布

点击工具栏`工具\发布`

![发布](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-59.png)

![发布成功](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-60.png)

## 用户授权

进入U9C系统，打开`菜单权限`，角色选择`库存管理`,添加开发的基础档案菜单并授权访问，并保存。

![基础档案授权](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-61.png)

## 预览

进入U9C系统，打开`供应链\库存管理`，看到授权的`基础档案`

![基础档案](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-62.png)

点击进入，看到基础档案布局页面

![基础档案页面](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-63.png)

测试数据验证，至此，一个简单的U9C基础档案开发完成。

![基础档案功能](https://nas.ilyl.life:8092/yonyou/u9c/ui/archive/ui-archive-64.gif)

## 添加枚举

```sql
select * from UBF_Sys_ExtEnumType where code='UFIDA.U9.CUST.DocTypeBE.DeliveryDocTypeEnum'
select * from UBF_Sys_ExtEnumType_Trl where id=1002407240150006
insert into UBF_Sys_ExtEnumType_Trl(id ,SysMLFlag,Name)
values(1002407240150006,'zh-CN','发货单单据类型')

select * from ubf_sys_extenumvalue where ExtEnumType=1002407240150006
select * from UBF_Sys_ExtEnumValue_Trl where id=1002407240150006
insert into UBF_Sys_ExtEnumValue_Trl(ID,SysMLFlag,Name)
values(1002407240150007,'zh-CN','发货单')
insert into UBF_Sys_ExtEnumValue_Trl(ID,SysMLFlag,Name)
values(1002407240150008,'zh-CN','调拨单')
insert into UBF_Sys_ExtEnumValue_Trl(ID,SysMLFlag,Name)
values(1002407240150009,'zh-CN','其他')
```