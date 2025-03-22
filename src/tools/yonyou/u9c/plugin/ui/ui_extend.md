---
title: U9C 扩展字段
date: 2025-02-10
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U9C
---

U9C除了本身的`实体扩展字段`进行扩展自外，还可以人为添加字段进行扩展，针对实体扩展字段不够用的情况

![扩展字段](https://image.ilyl.life:8443/yonyou/u9c/plugin/ui/u9c_ui_filedextend.png)

## 插件

先通过[UI插件](ui_plugin.md)的方式加载需要扩展的实体

### 扩展实体

在`Do_AfterInit`方法内添加实体

```cs
private void SetModel()
{
    if (!_strongPart.Model.SO_SOLines.Fields.Contains("Cust4demo"))
    {
        UIField fld = new UIField(_strongPart.Model.SO_SOLines, "Cust4demo", typeof(string), true, "", null, "Cust4demo", true, true, false, null, true);
        _strongPart.Model.SO_SOLines.Fields.Add(fld);
    }
}
```

### 添加字段

在`Do_AfterRender`方法内添加字段

```cs
public void AddColumn()
{
    IUFDataGrid grid = (IUFDataGrid)_strongPart.GetUFControlByName(_strongPart.TopLevelContainer, "DataGrid4");
    if(grid!=null&& grid.Columns["Cust4demo"] == null)
    {
        var column = GridControlBuilder.GridColumnBuilder(grid, "Cust4demo", "TextBoxColumnModel", "", 0, _strongPart.Model.SO_SOLines.Fields["Cust4demo"], "Cust4demo", false, true, true, false, false, true, 0, 100, "50", true, false, "", "UUID", "UUID", "UUID");
        column.Caption = "demo";
        GridControlBuilder.GridTextBoxColumnBuilder((IUFTextBoxColumn)column, "", TextAlign.Left, false, "", false, "1", "1", "50");
    }
}
```

## 映射实体

在没有映射实体时，无法加载任何数据，因为后台字段不是真实存在

打开`数据管理工具`，找到销售订单行，添加实体，默认以`Cust4`开头

查看后台数据表，发现存在添加的字段
