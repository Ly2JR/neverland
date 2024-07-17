---
title: 定时任务
date: 2024-07-16
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 新建

打开UBF，新建解决方案，录入名称

![新建解决方案](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler1.png)

右击解决方案`TaskScheduler`新建，选择`操作项目`，录入名称

![新建操作项目](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler2.png)

切换到`视图模型`页签选择顶级节点`TaskScheduler`然后在切换到`属性`页签，更改`配件名称`,并将`IsImport`改为`True`

![更改配件名](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler3.png)

切换到`视图模型`页签双击选择最末级`TaskScheduler`，然后将工具箱的`操作`，拖拽到页面上

![更改配件名](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler4.png)

选择`操作`,切换到`属性`页签，更改名称、显示名称、事务类型

![更改操作](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler5.png)

切换到`视图模型`页签右击最顶级`TaskScheduler`，先点击`构造`，之后在点击`发布服务组`

![构造](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler6.png)

## 业务

简单模拟定时向表插入数据。

新建一个表`Time_Logs`用于测试定时任务执行情况

```sql
Create Table Time_Log
(
   Id int identity(1,1),
   CreateTime datetime default getdate(),
   Memo nvarchar(10)
)
```

用VS打开`UFIDA.U9.CUST.TaskScheduler.sln`

引用`UFSoft.UBF.Util.DataAccess.dll`

位置:`X:\yonyou\U9CE\Portal\ApplicationServer\bin`

打开`RunExtend.cs`进行业务逻辑编写

![自定义逻辑](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler7.png)

在Do方法里写上

```cs
public override object Do(object obj)
{						
  Run bpObj = (Run)obj;

  var sSql = "insert into Time_Log(Memo) values('1')";
  DataAccessor.RunSQL(UFSoft.UBF.Util.DataAccess.DataAccessor.GetConn(), sSql, null);

  return null;
}		
```

## 发布

编写业务逻辑完成之后，编辑生成。

点击`AutoBuild.bat`部署相关文件

位置位于UBF项目里的`Code`文件夹下

执行`UFIDA.U9.CUST.TaskScheduler_Resource.sql`和`UFIDA.U9.CUST.TaskSheduler_Metadata.sql`两个脚本

位置位于UBF项目里的`bulk\Unconfiged\MetadataScript`文件夹下

打开`BuildupDesigner.exe`,选择菜单节点，点击`新增组件`

位于`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio`

![应用组装工具](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler8.png)

点击`载入组件`，选择UBF项目生成的`发布服务组`文件`TaskScheduler.sg`

![应用组装工具](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler9.png)

点击`工具\发布`即可

![应用组装工具](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler10.png)

## 配置

登录U9C，打开`调度方案`，配置调度方案

![调度方案](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler11.png)

打开`服务权限`,添加定时任务权限

![服务权限](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler12.png)

在数据库执行脚本

```sql
INSERT INTO  UBF_JOB_NoParaRunableBPSVList(ID,FullName,memo) VALUES( NewID(), 'TaskScheduler.Run','定时服务测试')
```

打开`请求管理`，配置相关信息，`异步程序`选择来自于上面脚本部门，默认看不到。

保存之后，点击执行请求即可。

![请求管理](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler13.png)

## 测试

打开`请求执行结果`

![请求执行结果](https://nas.ilyl.life:8092/yonyou/u9c/taskscheduler/taskscheduler14.png)