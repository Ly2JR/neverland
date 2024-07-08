---
title: 标准OpenApi开发
date: 2024-06-24
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U9C
---

U9C自带OPENAPI，可以满足一些开发需求。

::: warning
一言难尽，能不用就不用
:::

## 接口授权

![添加应用](https://nas.ilyl.life:8092/yonyou/u9c/openapi/app.png)

1. 使用`EA`登陆U9C
2. 打开`系统管理\应用授权\第三方应用接口授权`
3. 新增一个应用，并启用,记录应用`ID`和`密钥`

## 接口预览

浏览器输入`http://127.0.0.1/U9C/Swagger`

![swagger](https://nas.ilyl.life:8092/yonyou/u9c/openapi/swagger.png)

## 接口调试

### 获取授权码

在Swagger浏览器里找到`OAuth2`节点，然后有个`获取授权码`的接口`/webapi/OAuth2/GetAuthorizeCode`

![授权码地址](https://nas.ilyl.life:8092/yonyou/u9c/openapi/getauthorizecode-url.png)

输入在U9C创建的第三方应用接口授权的`ID`和`密钥`

![获取授权码](https://nas.ilyl.life:8092/yonyou/u9c/openapi/getauthorizecode.png)

返回的`Data`节点就是授权码

### 登录获取Token

在Swagger浏览器里找到`OAuth2`节点，然后有个`登录获取token`的接口`/webapi/OAuth2/Login`

![登录获取token](https://nas.ilyl.life:8092/yonyou/u9c/openapi/login-url.png)

输入`企业编码`、`用户名`、`组织编码`、`授权码`

![获取Token](https://nas.ilyl.life:8092/yonyou/u9c/openapi/login.png)

返回的`Data`节点就是Token

### 调试创建部门接口

接口参数非常的多,简单原则就是看U9C必输字段即可。

在Swagger浏览器里找到`Department`节点，然后有个`增加`的接口`/webapi/Department/Create`

![增加部门](https://nas.ilyl.life:8092/yonyou/u9c/openapi/department-url.png)

接口DTO缺少参数描述，可以参考[官网OPENAPI](https://openapi.yyu9c.com/doc.html#)或者数据字典进行相关参数赋值

最简单的一个创建部门DTO

```json
[
  {
    "Org": {
      "Code": "01",
    },
    "Code": "001",
    "Name": "开发部门",
    "ShortName": "开发部门",
    "Description": "开发部门",
    "Level": 1,
    "TreeDisplayName": "开发部门",
  }
]
```

输入DTP和Token，点击`try it out`

![部门](https://nas.ilyl.life:8092/yonyou/u9c/openapi/department.png)
