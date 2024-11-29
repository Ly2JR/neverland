---
title: 自定义OpenApi开发
date: 2024-07-05
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U9
---

标准OPENAPI功能可能功能不全或其他问题，有时需要自定义OPENAPI功能。

这时支持两种OPENAPI方式，一种是带鉴权的与标准OPENAPI一致，另外一种是不带鉴权的。

::: tip
自定义控制器不能与现有控制器重名，并需要安装相关补丁
:::

## 鉴权

VS创建类选择.NETFramework 4.5版本。

引用两个文件`UFSoft.UBF.MVC`和`System.Web.Http`

`UFSoft.UBF.MVC`位置：`X:\yonyou\U9CE\Portal\bin\UFSoft.UBF.MVC.dll`

`System.Web.Http`位置：`X:\yonyou\U9CE\Portal\bin\System.Web.Http.dll`

类名必须以`Controller`结尾，并继承`OpenAPIController`

### 项目结构

![项目结构](https://nas.ilyl.life:8092/yonyou/u9c/interface/openapi/def/def-openapi.png)

自定义控制器

```cs
public class TestController: OpenAPIController
{
    [HttpGet]
    public ApiResult<string> Check()
    {
        var result = new ApiResult<string>();
        result.Data = "自定义OPENAPI成功";
        return result;
    }

    [HttpPost]
    public ApiResult<int> Calc([FromBody] InputDtoData input)
    {
        var result = new ApiResult<int>();
        result.Data = (input.InputA + input.InputB) * 3;
        return result;
    }

    public class InputDtoData
    {
        public int InputA { get; set; }
        public int InputB { get; set; }
    }
}
```

### 调试

部署完成之后，重启IIS，浏览`http://127.0.0.1/U9C/Swagger`查看自定义的带鉴权OPENAPI

![自定义OPENAPI](https://nas.ilyl.life:8092/yonyou/u9c/interface/openapi/def/def-openapi2.png)

![白名单未授权](https://nas.ilyl.life:8092/yonyou/u9c/interface/openapi/def/def-openapi5.png)

鉴权部分参考[openpai](openapi.md)或白名单关闭后输入`Token`后测试验证。

![测试成功](https://nas.ilyl.life:8092/yonyou/u9c/interface/openapi/def/def-openapi-test1.png)

![测试成功](https://nas.ilyl.life:8092/yonyou/u9c/interface/openapi/def/def-openapi-test2.png)

## 不带鉴权

不带鉴权与带鉴权类似，继承`ApiController`，在调试时少一步获取授权码接口。

引用四个文件`UFSoft.UBF.MVC`、`System.Web.Http`、`UFIDA.U9.CBO.PubSV`和`UFSoft.UBF.AopFrame`

`UFSoft.UBF.MVC`位置：`X:\yonyou\U9CE\Portal\bin\UFSoft.UBF.MVC.dll`

`System.Web.Http`位置：`X:\yonyou\U9CE\Portal\bin\System.Web.Http.dll`

`UFIDA.U9.CBO.PubSV`位置：`X:\yonyou\U9CE\Portal\ApplicationServer\Libs\UFIDA.U9.CBO.PubSV.dll`

`UFSoft.UBF.AopFrame`位置：`X:\yonyou\U9CE\Portal\bin\UFSoft.UBF.AopFrame.dll`

类名必须以`Controller`结尾，并继承`ApiController`

### 项目结构

![项目结构](https://nas.ilyl.life:8092/yonyou/u9c/interface/openapi/def/def-openapi3.png)

自定义控制器，多的引用来源于创建部门接口

```cs
public class Test2Controller:ApiController
{
    public ApiResult<string> CreateDepartment([FromBody] DepartmentDto inputDto)
    {
        using (BPForEngine bp = new BPForEngine())
        {
            ContextDTO tdto = new ContextDTO();
            tdto.UserCode = "01";//取接口传入的用户编码
            tdto.EntCode = "01";//取接口传入的企业编码
            tdto.CultureName = "zh-CN";
            tdto.OrgCode = "01";//取接口传入的组织编码
            tdto.WriteToContext();

            UFIDA.U9.ISV.DeptOperatorSV.BatchCreateDeptByDTOSV proxy = new ISV.DeptOperatorSV.BatchCreateDeptByDTOSV();
            proxy.Dept = new List<ISV.DeptOperatorSV.CopyOfDepartmentDTO>();
            var newDept = new ISV.DeptOperatorSV.CopyOfDepartmentDTO();
            newDept.Code = inputDto.Code;
            newDept.Name = inputDto.Name;
            newDept.DeptCategory = CBO.HR.Department.DeptCategoryEnum.Development;

            proxy.Dept.Add(newDept);
            var ret = proxy.Do();

            string orgCode = UFIDA.U9.Base.Context.LoginOrg.Code;
            return new ApiResult<string>($"{orgCode}部门编码{inputDto.Code}创建成功");
        }
    }

    public class DepartmentDto
    {
        public string Code { get; set; }

        public string Name { get; set; }
    }
}
```

### 调试

部署完成之后，重启IIS，浏览`http://127.0.0.1/U9C/Swagger`查看自定义的带鉴权OPENAPI

![自定义OPENAPI](https://nas.ilyl.life:8092/yonyou/u9c/interface/openapi/def/def-openapi4.png)

鉴权部分参考[openpai](openapi.md)

输入`Token`后测试验证。

![测试成功](https://nas.ilyl.life:8092/yonyou/u9c/interface/openapi/def/def-openapi-test3.png)

![测试成功](https://nas.ilyl.life:8092/yonyou/u9c/interface/openapi/def/def-openapi-test4.png)

## 部署

将程序集文件部署在`X:\yonyou\U9CE\Portal\ApplicationServer\Libs`文件夹下

打开`X:\yonyou\U9CE\Portal\OpenApiExtend.config`文件夹，修改url属性值。

```xml
<?xml version="1.0"?>
<configuration>
	<configSections>
        <section name="MyApi" type="UFSoft.UBF.MVC.Common.MyApi, UFSoft.UBF.MVC" />
    </configSections>
	<!--编辑url值，为自定义接口dll的虚拟目录，如：\ApplicationServer\Libs\UFIDA.U9.ISV.RestSV.dll，多个用;隔开，如：\ApplicationServer\Libs\UFIDA.U9.ISV.RestSV.dll;\ApplicationServer\Libs\UFIDA.U9.HI.HIBP.dll-->
	<MyApi username="myapi" url="\ApplicationServer\Libs\UFIDA.U9.CUST.OPENAPI.AUTH.dll;\ApplicationServer\Libs\UFIDA.U9.CUST.OPENAPI.NOAUTH.dll"></MyApi>
</configuration>
```

部署完成之后重启IIS。

## 差异

鉴权与否在于创建应用时，是否启用了白名单，如果未启用，两者都可以使用`Token`调用。
