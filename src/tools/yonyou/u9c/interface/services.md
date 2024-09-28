---
title: 服务
date: 2024-07-19
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

U9C的所有接口都是该种服务，即是WCF服务。

::: tip
有时出现`500 System.ServiceModel.ServiceActivationException`错误

检测内存是否超过`95%`
:::

## 新建

打开UBF，新建解决方案，选择位置及输入方案名称

![新建解决方案](https://nas.ilyl.life:8092/yonyou/u9c/interface/services/services1.png)

打开解决方案页签，选择顶级节点`RestSV`，右击新建，选择`服务项目`

![服务项目](https://nas.ilyl.life:8092/yonyou/u9c/interface/services/services2.png)

切换`模型视图`页签选择顶级节点`RestSV`,然后切换到`属性`页签，更改`配件名`

![更改配件名](https://nas.ilyl.life:8092/yonyou/u9c/interface/services/services3.gif)

切换`模型视图`页签选择倒数第二节点命名空间`RestSV`,然后切换到`属性`页签，更改`名称`

![更改名称](https://nas.ilyl.life:8092/yonyou/u9c/interface/services/services4.gif)

切换`模型视图`页签，双击打开末级节点类图`RestSV`,将工具箱`服务`拖拽到类图中。

右击`服务`属性，更改`名称`、`显示名称`

![服务](https://nas.ilyl.life:8092/yonyou/u9c/interface/services/services5.png)

拖拽`数据传输对象`到`RestSV`类图，右击属性，更改`名称`和`显示名称`，然后在`详细信息`页签里添加相应属性

![返回DTO](https://nas.ilyl.life:8092/yonyou/u9c/interface/services/services6.png)

继续拖拽`数据传输对象`到`RestSV`类图，右击属性，更改`名称`和`显示名称`，然后在`详细信息`页签里添加相应属性

![输入DTO](https://nas.ilyl.life:8092/yonyou/u9c/interface/services/services7.png)

选择`服务`，更改`返回类型`选择`返回部门DTO`，更改`事务类型`为`Required`，然后在`详细信息`页签里添加属性类型选择`部门DTO`

![调整服务](https://nas.ilyl.life:8092/yonyou/u9c/interface/services/services8.png)

切换`解决方案`选择顶级节点，右击构造

![构造](https://nas.ilyl.life:8092/yonyou/u9c/interface/services/services9.png)

## 业务逻辑

用VS打开`UFIDA.U9.CUST.RestSV.sln`，在`CreateDepartmentExtend.cs`文件里的`Do`方法写业务的逻辑。

![项目结构](https://nas.ilyl.life:8092/yonyou/u9c/interface/services/services10.png)

## 部署

位于UBF新建目录时`bulk\Unconfiged\MetadataScript`文件夹下

执行`UFIDA.U9.CUST.RestSV_Resource.sql`和`UFIDA.U9.CUST.RestSV_Metadata.sql`两个脚本

位于UBF新建目录时`Code\RestSV`文件夹下

点击`AutoBuild.bat`

## 调试

### 调试工具

位于`X:\yonyou\U9ClientCE\ClientSystemManage\Tools`文件夹下打开`WebServiceStudio.exe`

![调试](https://nas.ilyl.life:8092/yonyou/u9c/interface/services/services11.gif)

### 代码调试

VS新建控制台，引用右击添加`服务引用`，点击左下角`高级`按钮，在点击左下角`添加Web引用`

输入带`.svc`的地址，自动生成代理

```cs
var client = new Proxy.CreateDepartmentStub();
client.Url = "http://127.0.0.1/U9C/Services/UFIDA.U9.CUST.RestSV.ICreateDepartment.svc";
var context = CreateContextObj();
var result= client.Do(context,new UFIDAU9CUSTRestSVInputDTOData() {m_code="006",m_name="质量部门"},out MessageBase[] msg);

public object CreateContextObj()
{
    var threadContext = new Proxy.ThreadContext();
    var dic = new Dictionary<object, object>();
    dic.Add("OrgID", "");
    dic.Add("UserID", "");
    dic.Add("CultureName", "zh-CN");
    dic.Add("EnterpriseID", "");
    dic.Add("DefaultCultureName", "zh_CN");
    threadContext.nameValueHas = dic.Select(x => new ArrayOfKeyValueOfanyTypeanyTypeKeyValueOfanyTypeanyType() { Key=x.Key,Value=x.Value}).ToArray();
    return threadContext;
}
```