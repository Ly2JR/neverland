---
title: 权限设计
date: 2023-11-22
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - 权限设计
---

应用程序中常用权限，又如何设计权限。

::: tip

仅供参考，实际根据生产坏境进行调整。

例如在大型生产系统中，对菜单库、功能库、数据库分离。

菜单库可能上千个，每个页面的功能权限上百个。

将每个用户的具体权限存储到缓存表中。

权限不应是经常变更的数据。

:::

常用的权限有`菜单权限`、`功能权限`以及`数据权限`

## 菜单权限

菜单权限比较好实现，其一，菜单不会很多，其二当页面展示时就基本不会在变，相对固定。

多级菜单时只要确认最末级的菜单权限ID即可。

- 菜单表

|权限ID|菜单名称|
|:-|:-|
|M1|菜单1|
|M2|菜单2|
|...|...|

- 用户表

|用户ID|用户名|
|:-|:-|
|U1|用户1|
|U2|用户2|
|...|...|

- 用户菜单权限表

|用户ID|菜单ID|
|:-|:-|
|U1|M1|
|U1|M2|
|U2|M1|

通过`菜单表`、`用户表`、`用户菜单权限表`内联，得到当前用户的菜单。

### 多级菜单

相关代码参考[WPF插件](../../cs/wpf/plugin.md)

多级菜单相对单级菜单复杂，如果是固定的多级菜单就简单多了。

不确定的多级菜单需要进行好的设计，通过迭代生成。

关键在于`迭代`，为了使表设计满足迭代，表结构需要满足一定的要求，如下所示

- 多级菜单表

|权限ID|菜单级别|菜单名称|是否末级|
|:-|:-|:-|:-|
|M1|1|菜单1|0|
|M2|1|菜单2|0|
|M101|2|菜单3|0|
|M10101|3|菜单4|1|
|M201|2|菜单5|1|
|M102|2|菜单6|1|

这里多添加一个`菜单级别字段`和调整`权限ID`约束实现

- 菜单级别显示当前菜单的层次
- 每层菜单级别数对应长度为`2`的菜单ID
- 每层的权限ID能反应出上层菜单权限ID

最终展示的菜单如下

```txt
|--菜单1
|----菜单3
|------菜单4
|----菜单6
|--菜单2
|----菜单5
```

::: tip

当菜单非常多时，可以将所有的1级菜单统计到单独表，进行归类。

当菜单深度很深时，只显示顶层菜单，点击时在加载子菜单。
:::

## 功能权限

功能权限常用在页面上，如`新增`、`修改`、`删除`、`查询`、`导入`、`导出`等

- 功能权限表

|权限ID|名称|
|:-|:-|
|1|新增|
|2|修改|

- 菜单功能权限表

|菜单ID|功能权限ID|
|:-|:-|
|M10101|1|
|M10101|2|

- 用户功能权限表

|用户ID|功能权限ID|
|:-|:-|
|U1|1|
|U2|2|

通过`功能权限表`、`菜单功能权限表`、`用户功能权限表`、`用户表`关联，即得到该用户当前菜单下的功能权限

## 数据权限

数据权限就是用户能看到什么数据，这个只要对表字段进行权限控制，动态生成即可。

- 数据表

|字段名|字段描述|
|:-|:-|
|Name|姓名|
|Address|地址|
|Phone|电话|

- 数据权限表

|ID|字段|
|:-|:-|
|1|Name|
|2|Address|
|3|Phone|

- 用户数据权限表

|用户ID|数据权限ID|
|:-|:-|
|U1|1|
|U1|2|

通过`数据表`、`数据权限表`和`用户权限表`关联，即能查询出当前用户的可见数据，并且可以扩展显示顺序、别名等功能。

## 更多

用户与角色或用户与用户组，是在基础用户权限上细分出来，通过三范式进行划分，多表关联即可。

以上设计全部通过数据库表配置，得出用户相应权限，通过显示与否进行权限隔离，满足了大部分的权限需求。

实际情况还需要部分代码进行更细化的处理。

例如：

- 菜单打开过，其他人不允许在打开
- 菜单1打开，菜单2不能打开
- 新增和保存同一时间应存在一个可用

### 代码

以功能权限`CRUD`为例，通过[Flags](https://learn.microsoft.com/zh-cn/dotnet/api/system.flagsattribute?view=net-7.0)实现

![权限](https://nas.ilyl.life:8092/dotnet/flags.png)

```cs
AuthFlag menu = AuthFlag.None;
var suc = HasAuth(menu, "1");
Console.WriteLine($"检查新增权限:1，检查结果:{suc}");

Console.WriteLine("添加新增权限:1");
AddAuth(ref menu, "1");
suc = HasAuth(menu, "1");
Console.WriteLine($"检查新增权限:1，检查结果:{suc}");

Console.WriteLine("移除新增权限:1");
RemoveAuth(ref menu, "1");
suc = HasAuth(menu, "1");
Console.WriteLine($"检查新增权限:1，检查结果:{suc}");

AuthFlag allMenu = AuthFlag.Query| AuthFlag.Add|AuthFlag.Update|AuthFlag.Delete| AuthFlag.Output;
Console.WriteLine($"所有权限值:{(int)allMenu}");

var flag = InitAuth("31");
Console.WriteLine($"初始化权限:{flag}");

AuthFlag InitAuth(string auth)
{
    if (Enum.TryParse<AuthFlag>(auth, out AuthFlag flag))
    {
        return flag;
    }
    return AuthFlag.None;
}

void AddAuth(ref AuthFlag source, string auth)
{
    if (Enum.TryParse<AuthFlag>(auth, out AuthFlag flag))
    {
        source|=flag;
    }
}

void RemoveAuth(ref AuthFlag source, string auth)
{
    if (Enum.TryParse<AuthFlag>(auth, out AuthFlag flag))
    {
        source ^= flag;
    }
}

bool HasAuth(AuthFlag source, string auth)
{
    if(Enum.TryParse<AuthFlag>(auth, out AuthFlag flag))
    {
        return source.HasFlag(flag);
    }
    return false;
}

[Flags]
enum AuthFlag
{
    /// <summary>
    /// 新增
    /// </summary>
    None = 0,
    /// <summary>
    /// 查询
    /// </summary>
    Query=1,
    /// <summary>
    /// 新增
    /// </summary>
    Add=2,
    /// <summary>
    /// 更新
    /// </summary>
    Update=4,
    /// <summary>
    /// 删除
    /// </summary>
    Delete=8,
    /// <summary>
    /// 输出
    /// </summary>
    Output=16,
}
```