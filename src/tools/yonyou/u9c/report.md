---
title: U9C 报表开发
date: 2024-06-17
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U9C
---

## 登陆UBF

打开UBFStudio，点击文件找到登录

![登录](https://image.ilyl.life:8443/yonyou/u9c/report/report_step1.png)

如果没有显示`登录`，点击`报表打印个性化切换`

![报表打印个性化切换](https://image.ilyl.life:8443/yonyou/u9c/report/report_step2.png)

选择对应的企业和组织登录

![登录界面](https://image.ilyl.life:8443/yonyou/u9c/report/report_step3.png)

### 报表资源管理器

在UBF的右边，或者点击工具栏`查看`选择`报表资源管理器`

![报表元数据库](https://image.ilyl.life:8443/yonyou/u9c/report/report_step4.png)

1. 点击`连接`选择`报表元数据库`
![新建报表目录](https://image.ilyl.life:8443/yonyou/u9c/report/report_step5.png)

2. 点击`ReportRootCatalog`右击新建报表目录
![创建新的报表分类目录](https://image.ilyl.life:8443/yonyou/u9c/report/report_step6.png)
输入任意名称，如`KK`，显示`KK(用户自定义)`

3. 右击新建的报表目录`KK`，选择`新建报表容器`
![新建报表容器](https://image.ilyl.life:8443/yonyou/u9c/report/report_step7.png)
点击`新建报表容器`，输入任意报表名称，如`测试报表`
![输入报表容器名称](https://image.ilyl.life:8443/yonyou/u9c/report/report_step8.png)
显示`测试报表(用户定义)`

4. 右击新建的报表容器`测试报表`，选择`创建报表`
![新建报表](https://image.ilyl.life:8443/yonyou/u9c/report/report_step9.png)
这里选择`报表`，输入任意名称，这里与报表容器保持一致
![录入报表](https://image.ilyl.life:8443/yonyou/u9c/report/report_step10.png)

## 设计报表数据源

默认显示`布局`，点击`数据`切换到数据源

![数据](https://image.ilyl.life:8443/yonyou/u9c/report/report_step11.png)

### 新增数据源

点击`添加数据源`按钮，输入任意名称，如`Db`，提供者类型选择`UFRPT`

![数据源](https://image.ilyl.life:8443/yonyou/u9c/report/report_step12.png)

点击连接字符串右边的按钮，演示用`model`，实际使用相应的`U9数据库`

可见U9报表可以查询其他数据库

![连接串](https://image.ilyl.life:8443/yonyou/u9c/report/report_step13.png)

服务器选择实际的安装数据库名称，录入登录口令，选择相应的数据库。

![新增数据源](https://image.ilyl.life:8443/yonyou/u9c/report/report_step14.png)

### 新增数据查询

点击`新增数据查询`按钮，输入任意名称，如`DbQuery`，提供者类型选择`Text`，数据源选择新添加的`Db`

![新增数据查询](https://image.ilyl.life:8443/yonyou/u9c/report/report_step15.png)

输入sql语句后点击`预览查询结果`按钮

![模拟数据](https://image.ilyl.life:8443/yonyou/u9c/report/report_step16.png)

### 设计报表布局

点击`布局`，选择`工具箱`里的`报表控件`，找到`表`，拖拽到布局里的`明细`里

![布局](https://image.ilyl.life:8443/yonyou/u9c/report/report_step17.png)

点击`工具箱`里的`字段`，显示数据源的列，如果显示的是`Column1`，将SQL语句以`;`结尾，重新预览数据即可

![字段](https://image.ilyl.life:8443/yonyou/u9c/report/report_step18.png)

将`工具箱`里的`字段`，拖拽到`表`里的标题行位置，同时调整表头显示的值

![表格值](https://image.ilyl.life:8443/yonyou/u9c/report/report_step19.png)

### 添加查询条件

U9C报表必须有条件。

点击工具栏`报表`选择`报表参数`

![报表参数](https://image.ilyl.life:8443/yonyou/u9c/report/report_step191.png)

在左边空白地方右击，选择`添加条件项`

![添加条件项](https://image.ilyl.life:8443/yonyou/u9c/report/report_step31.png)

输入`名称`和`标签`，针对视图报表，在`条件表达式里`选择视图字段

![报表参数](https://image.ilyl.life:8443/yonyou/u9c/report/report_step192.png)

## 发布报表

点击工具栏的`保存`按钮

找到`报表资源管理`自己新建的报表容器，右击，点击`发布应用`

![发布应用](https://image.ilyl.life:8443/yonyou/u9c/report/report_step20.png)

登录要发布的企业和组织

![报表类型](https://image.ilyl.life:8443/yonyou/u9c/report/report_step21.png)

如果显示的不是`用户定义`而是系统定义，存在UBF安装问题或者文件不全导致

用户程序集部署，如果显示的不是自己的电脑，这是报表服务器未配置正确。

![用户程序集部署](https://image.ilyl.life:8443/yonyou/u9c/report/report_step22.png)

### 添加菜单

在发布应用向导里菜单发布，选择需要发布的菜单位置，点击`新建`按钮

![新建菜单](https://image.ilyl.life:8443/yonyou/u9c/report/report_step23.png)

输入自定义名称，如开发报表，

![新建菜单](https://image.ilyl.life:8443/yonyou/u9c/report/report_step24.png)

选择刚刚创建的菜单，在点击`新建`按钮，创建子菜单

![报表菜单](https://image.ilyl.life:8443/yonyou/u9c/report/report_step25.png)

然后选择当前创建的子菜单，点击的`绑定菜单`按钮

在下一步钟，部署任务里，点击执行，执行成功也就发布完成。

![执行](https://image.ilyl.life:8443/yonyou/u9c/report/report_step26.png)

### 添加用户报表权限

登录U9C，找到系统管理，菜单权限，模块就是发布报表时创建菜单的位置，角色是用户拥有的角色。

![报表权限](https://image.ilyl.life:8443/yonyou/u9c/report/report_step27.png)

退出U9C，重新登陆，在相应模块下看到当前发布的报表。

![测试报表](https://image.ilyl.life:8443/yonyou/u9c/report/report_step28.png)

打开开发的`测试报表`时，发现不显示任何数据，因为报表必须要有条件。

## 预览报表

重新登陆U9C，打开开发报表`测试报表`，这时显示出了条件

![报表条件](https://image.ilyl.life:8443/yonyou/u9c/report/report_step36.png)

![报表](https://image.ilyl.life:8443/yonyou/u9c/report/report_step37.png)
