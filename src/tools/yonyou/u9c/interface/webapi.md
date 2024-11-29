---
title: WebApi
date: 2024-07-19
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

轻量级服务就是REST风格的WEBAPI。

::: tip
json参数首字母小写
:::

## 新建

打开UBF，新建解决方案，选择位置及输入方案名称

![新建解决方案](https://nas.ilyl.life:8092/yonyou/u9c/interface/webapi/webapi1.png)

打开解决方案页签，选择顶级节点`RestSrv`，右击新建，选择`轻量服务项目`

![轻量服务项目](https://nas.ilyl.life:8092/yonyou/u9c/interface/webapi/webapi2.png)

切换`模型视图`页签选择顶级节点`RestSrv`，然后切换到`属性`页签，更改`配件名`

![更改配件名](https://nas.ilyl.life:8092/yonyou/u9c/interface/webapi/webapi3.gif)

切换`模型视图`页签选择倒数第二节点命名空间`RestSrv`，然后切换到`属性`页签，更改`名称`

![更改名称](https://nas.ilyl.life:8092/yonyou/u9c/interface/webapi/webapi4.gif)

切换`模型视图`页签，双击打开末级节点类图`RestSrv`，将工具箱`服务`拖拽到类图中。

右击`服务`属性，更改`名称`、`显示名称`

![服务](https://nas.ilyl.life:8092/yonyou/u9c/interface/webapi/webapi5.png)

拖拽`数据传输对象`到`RestSrv`类图，右击属性，更改`名称`和`显示名称`，然后在`详细信息`页签里添加相应属性

![返回DTO](https://nas.ilyl.life:8092/yonyou/u9c/interface/webapi/webapi6.png)

选择`服务`，更改`返回类型`选择`返回消息DTO`，更改`事务类型`为`Required`

![调整服务](https://nas.ilyl.life:8092/yonyou/u9c/interface/webapi/webapi7.png)

切换`解决方案`选择顶级节点，右击构造

![构造](https://nas.ilyl.life:8092/yonyou/u9c/interface/webapi/webapi8.png)

## 业务逻辑

用VS打开`UFIDA.U9.CUST.RestSrv.sln`，在`DeleteDepartmentExtend.cs`文件里的`Do`方法写业务的逻辑。

![项目结构](https://nas.ilyl.life:8092/yonyou/u9c/interface/webapi/webapi9.png)

## 部署

位于UBF新建目录时`bulk\Unconfiged\MetadataScript`文件夹下

执行`UFIDA.U9.CUST.RestSrv_Resource.sql`和`UFIDA.U9.CUST.RestSrv_Metadata.sql`两个脚本

位于UBF新建目录时`Code\RestSrv`文件夹下

点击`AutoBuild.bat`

## 调试

### 调试工具

![调试](https://nas.ilyl.life:8092/yonyou/u9c/interface/webapi/webapi10.gif)

### 代码调试

```cs
var client = new HttpClient();
client.BaseAddress = new Uri("http://127.0.0.1/");
var jsonDto = new
{
    context = new
    {
        EntCode = "01",
        OrgCode = "01",
        UserCode = "01",
        CultureName = "zh-CN"
    },
    code = "005"
};
var jsonStr = JsonConvert.SerializeObject(jsonDto);
StringContent jsonContent = new StringContent(jsonStr,
        Encoding.UTF8, "application/json");
var response = await client.PostAsync("U9C/RestServices/UFIDA.U9.CUST.RestSrv.IDeleteDepartment.svc/Do", 
        jsonContent);
response.EnsureSuccessStatusCode().WriteRequestToConsole();
var jsonResponse = await response.Content.ReadAsStringAsync();
Console.WriteLine($"{jsonResponse}\n");
```