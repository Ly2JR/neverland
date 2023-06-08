---
title: 模块化
icon: octicon:issue-closed-16
date: 2023-06-08
dir.order: 2
editLink: false
footer: false
isOriginal: true
category:
  - WPF
tag:
  - Prism
  - 插件
  - 菜单树
---

`WPF`配合`Prism`实现菜单模块化。

## 数据库配置

- 表设计

树形菜单在数据库可配置,先设计菜单树模型,这里设计三个模型,`SubSystem`、`SubMenu`、`MenuLink`分别为模块、模块下的菜单、菜单对应的插件。

```class 树形菜单模型
direction LR
class SubSystem{
  +string SubCode
  +string SubName
  +int Order
  +List~SubMenu~ Menus
}
class SubMenu{
  +string MenuCode
  +string MenuName
  +string SubCode
  +byte Grade
  +string SupMenuCode
  +bool EndGrade
  +int Order
  +SubSystem System
  *MenuLink Link
}
class MenuLink{
  +string MenuCode
  +string Assembly
  +string Class
  +string Parameter
  +SubMenu Menu
}
SubSystem "1" --o "*" SubMenu
SubMenu "1" --o "1" MenuLink
```

- 初始化默认数据

::: tip
一个菜单一个插件，还是多个菜单一个插件都没关系
:::

```cs
private const List<SubSystem> DefaultSubSystems=new List<SubSystem>(){
    new SubSystem() { SubCode = "AA", SubName = "A模块", Order = 1 },
    new SubSystem() { SubCode = "SS", SubName = "B模块", Order = 2 },
};

private const List<SubMenu> DefaultSubMenus= new List<SubMenu>(){
    new MenuEntity() { SubCode = "AA", MenuCode = "AA01", MenuName = "test1", SupMenuId = "AA", Grade = 1,Order = 1, EndGrade = true },
    new MenuEntity() { SubCode = "AA", MenuCode = "AA02", MenuName = "test2", SupMenuId = "AA", Grade = 1,Order = 2, EndGrade = true },
    new MenuEntity() { SubCode = "SS", MenuCode = "SS01", MenuName = "test3", SupMenuId = "SS", Grade = 1,Order = 1, EndGrade = false },
    new MenuEntity() { SubCode = "SS", MenuCode = "SS0101", MenuName = "test4", SupMenuId = "SS01", Grade = 2,Order = 1, EndGrade = false },
    new MenuEntity() { SubCode = "SS", MenuCode = "SS010101", MenuName = "test5", SupMenuId = "SS0101", Grade = 3,Order = 1, EndGrade = true },
    new MenuEntity() { SubCode = "SS", MenuCode = "SS010102", MenuName = "test6", SupMenuId = "SS0101", Grade = 3,Order = 2, EndGrade = true },
};

private const List<MenuLink> DefautlLinks = new List<MenuLink>(){
  new MenuLink() { MenuCode = "AA01" Assembly = "Demo.Plugin",Class = "Demo.Plugin.Entry"},
  new MenuLink() { MenuCode = "SS0101" Assembly = "Demo.Plugin",Class = "Demo.Plugin.Entry"},
};
```

- 转换

将设计的三个表转换成 WPF 菜单树控件`tree`需要的数据模型`TreeMenu`

首先要确认的事，数据库设计可以配置无数层，但是 WPF 界面显示，就预设只显示`三层`树形深度，即

```text
|-A
|-|-A1
|---|A12
```

其中树形菜单的第一层为`SubSystem`的值。二三层对应`SubMenu`数据值。

```cs
private const byte MAX_LEVEL=3;
private ObservableCollection<TreeMenu> _treeMenu;

public void LoadTreeMenu(){
    foreach (var sub in DefaultSubSystems)
    {
        TreeMenu subTree = null;
        IterationMenu(DefaultSubMenus, ref subTree, sub, 1);
        if (subTree != null)
        {
            _treeMenu.Add(subTree);
        }
    }
}

private void IterationMenu(List<SubMenu> source, ref TreeMenu treeParent, SubSystem parent, int grade)
{
    if (grade == MAX_LEVEL) return;
    if (treeParent == null)
    {
        treeParent = new TreeMenu
        {
            TreeCode = parent.SubCode,
            TreeName = parent.SubName,
            Children = new List<TreeMenu>(),
        };
        foreach (var child in source.Where(o => o.SupMenuId == parent.SubCode && o.Grade == grade).OrderBy(o => o.Order))
        {
            var menu =new TreeMenu()
            {
                TreeCode= child.MenuCode,
                TreeName=child.MenuName,
                Order=child.Order,
            };
            treeParent.Children.Add(menu);
        }
        IterationMenu(source, ref treeParent, parent, grade + 1);
    }
    else
    {
        foreach (var child in treeParent.Children)
        {
            var child1 = child;
            child.Children = new List<TreeMenu>();
            foreach (var c in source.Where(o => o.SupMenuId == child.MenuCode && o.Grade == grade).OrderBy(o => o.Order))
            {
                var menu = new TreeMenu()
                {
                    TreeCode = c.MenuCode,
                    TreeName = c.MenuName,
                    Order = c.Order,
                };
                child.Children.Add(menu);
            }
            IterationMenu(source, ref child1, parent, grade + 1);
        }
    }
}

```

## WPF

```cs
public class TreeMenu{
  public string TreeCode{get;set;}
  public string TreeName{get;set;}
  public string Order{get;set;}
  public bool IsGrouping{get{
    return (Children!=null&&Children.Count>0);
  }}
  public List<TreeMenu> Children{get;set;}
}
```

- WPF 视图
