---
title: U9C UI改颜色
date: 2025-01-15
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U9C
---

有时需要更改显示数据的颜色，可以通过[UI插件](ui_plugin.md)实现

::: tip

需要引用`UFSoft.UBF.UI.WebControls.UFDataGrid.dll`文件

路径：`x:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\`
:::

![改色](https://nas.ilyl.life:8092/yonyou/u9c/plugin/ui/u9c-ui-plugin-ufgrid-color.png)

## 更改列颜色

```cs
var dataGrid1 = _strongPart.GetUFControlByName(_strongPart.TopLevelContainer, "DataGrid1") as IUFDataGrid;
dataGrid1.Columns[1].BackgroundColor = "#fdf6ec";
```

## 更改行颜色

```cs
var dataGrid1 = _strongPart.GetUFControlByName(_strongPart.TopLevelContainer, "DataGrid1") as UFGrid;
dataGrid1.SetRowStyle(0, "#ecf5ff", "");
```

## 更改单元格字体颜色

```cs
var dataGrid1 = _strongPart.GetUFControlByName(_strongPart.TopLevelContainer, "DataGrid1") as UFGrid;
dataGrid1.SetCellStyle(i,"DocNo","", "#e6a23c");
```

## 更改单元格背景色

```cs
var dataGrid1 = _strongPart.GetUFControlByName(_strongPart.TopLevelContainer, "DataGrid1") as UFGrid;
dataGrid1.SetCellStyle(i, "POLines_Status", "#409eff","#ffffff");
```