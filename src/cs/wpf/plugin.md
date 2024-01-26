---
title: 模块化
date: 2023-06-08
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - Prism
---

## 开发包

::: tip
这里有很多关于[Prism 示例](https://github.com/PrismLibrary/Prism-Samples-Wpf)

WPF 入门可以看下`深入浅出WPF`以及`WPF编程宝典`
:::

1. [Prism](https://prismlibrary.com/index.html)

## 数据库配置

### 表设计

树形菜单在数据库可配置，先设计菜单树模型，这里设计三个模型，`SubSystem`、`SubMenu`、`MenuLink`分别为模块、模块下的菜单、菜单对应的插件

```class 树形菜单模型
direction LR
class SubSystem{
  +string SubCode
  +string SubName
  +int Order
}
class SubMenu{
  +string MenuCode
  +string MenuName
  +string SubCode
  +byte Grade
  +string SupMenuCode
  +bool EndGrade
  +int Order
}
class MenuLink{
  +string MenuCode
  +string Assembly
  +string Class
}
SubSystem "1" --o "*" SubMenu
SubMenu "1" --o "1" MenuLink
```

### 初始化数据

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

### DTO

将设计的三个表转换成 WPF 菜单树控件`TreeView`需要的数据模型`TreeMenu`

首先要确认的事，数据库设计可以配置无数层，但是 WPF 界面显示，深度不应太深，`MAX_LEVEL`属性进行控制

```text
| --A         
| ----A1     
| ------A12
```

其中树形菜单的第一层为`SubSystem`的值。二三层对应`SubMenu`数据值

```cs
private const byte MAX_LEVEL=3;
private ObservableCollection<TreeMenu> _treeMenu;

public void LoadTreeMenu(){
    foreach (var sub in DefaultSubSystems){
        TreeMenu subTree = null;
        IterationMenu(DefaultSubMenus, ref subTree, sub, 1);
        if (subTree != null){
            _treeMenu.Add(subTree);
        }
    }
}

private void IterationMenu(List<SubMenu> source, ref TreeMenu treeParent, SubSystem parent, int grade)
{
    if (grade == MAX_LEVEL) return;
    if (treeParent == null) {
        treeParent = new TreeMenu{ TreeCode = parent.SubCode, TreeName = parent.SubName, Children = new List<TreeMenu>() };
        foreach (var child in source.Where(o => o.SupMenuId == parent.SubCode && o.Grade == grade).OrderBy(o => o.Order)) {
            var menu =new TreeMenu(){ TreeCode= child.MenuCode, TreeName=child.MenuName, Order=child.Order };
            treeParent.Children.Add(menu);
        }
        IterationMenu(source, ref treeParent, parent, grade + 1);
    } else {
        foreach (var child in treeParent.Children) {
            var child1 = child;
            child.Children = new List<TreeMenu>();
            foreach (var c in source.Where(o => o.SupMenuId == child.MenuCode && o.Grade == grade).OrderBy(o => o.Order)) {
                var menu = new TreeMenu() { TreeCode = c.MenuCode, TreeName = c.MenuName, Order = c.Order };
                child.Children.Add(menu);
            }
            IterationMenu(source, ref child1, parent, grade + 1);
        }
    }
}

```

## WPF

### Views

一个简单的左右布局用上`TreeView`和`TabControl`控件

- TreeView

ItemsSource 绑定的是`TreeMenu`数据源，注意使用`ObservableCollection`

树形菜单使用[HierarchicalDataTemplate](https://learn.microsoft.com/en-us/dotnet/api/system.windows.hierarchicaldatatemplate?view=windowsdesktop-7.0)进行数据迭代，

设计一个简单模板：

1. 添加一个`Grid`布局实现多个控件

2. 转换器`BoolToVisible`，将`True`转换`Visibility.Visible`，反之`Visibility.Collapsed`

3. 转换器`VisibleToReverse`，将`Visibility.Visible`转换`Visibility.Collapsed`，反之`Visibility.Visible`

4. `IsGrouping`属性来判断子/父节点，父节点则用`TextBlock`显示本身，子节点就用`Button`来显示

```xaml
<HierarchicalDataTemplate x:Key="TreeItemStyle" ItemsSource="{Binding Children}">
<Grid>
    <StackPanel x:Name="ParentMenu" Visibility="{Binding IsGrouping, Converter={StaticResource BoolToVisible}}">
        <TextBlock Text="{Binding MenuName}" />
    </StackPanel>
    <Button
        Command="{Binding RelativeSource={RelativeSource FindAncestor, AncestorType={x:Type TreeView}}, Path=DataContext.NavigateCommand}"
        CommandParameter="{Binding MenuCode}"
        Visibility="{Binding Visibility, ElementName=ParentMenu, Converter={StaticResource VisibleToReverse}}">
        <StackPanel>
            <TextBlock Text="{Binding MenuName}" />
        </StackPanel>
    </Button>
</Grid>
</HierarchicalDataTemplate>
```

```xaml
<TreeView
    Grid.Column="0"
    ItemTemplate="{StaticResource TreeItemStyle}"
    ItemsSource="{Binding TreeMenuData}"/>
```

- TabControl

这里用上了`Prism`的`Regions`实现控件的添加

```xaml
<TabControl
    Grid.Column="1"
    prism:RegionManager.RegionName="TabRegion"/>
```

### ViewModels

- `TreeView`使用的模型

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

- 加载插件并与`Prism`关联

通过`Prism`的`LoadModule`加载插件，`RequestNavigate`进行导航请求

:::tip
Prism 加载 Module 有多种方式，但是这里因为一切都是`动态可配`，所以使用`LoadManual`的方式
:::

```cs
private void LoadPrismModule(string menuCode){
    _moduleManager.LoadModule(menuCode);
    var parameters = new NavigationParameters{{ "code", menuCode }};
    _regionManager.RequestNavigate("TabRegion", menu.MenuId, parameters);
}
```

```cs
private readonly IConcurrentDictionary<string, Type> _compsCache = new ConcurrentDictionary<string, Type>();

private void LoadComponent(string menuCode){
    var link = DefautlLinks.FirstOrDefault(it => it.MenuCode == menuCode);
    if (link == null) return;
    Type? type = null;
    if (!_compsCache.ContainsKey(link.Assembly)){
        Assembly asm = Assembly.LoadFrom(AppDomain.CurrentDomain.BaseDirectory + link.Assembly + ".dll");
        type = asm.GetType(link.Class);
        if (type == null) return;
        _compsCache.Add(link.Assembly, type);
    } else {
        type = _compsCache[link.Assembly];
    }
    var moduleCatalog = _c.Resolve<IModuleCatalog>();
    moduleCatalog.AddModule(new ModuleInfo(){
        ModuleName = menuCode,
        ModuleType = type.AssemblyQualifiedName,
        InitializationMode = InitializationMode.WhenAvailable,
    });
    LoadModule(menuCode);
}
```

```cs
private void OpenTabItem(string menuCode){
    if (string.IsNullOrEmpty(menuCode)) return;
    var openMenu = DefaultMenus.FirstOrDefault(o => o.MenuId == menuCode);
    if (openMenu == null)return;
    var moduleExist = _moduleManager.ModuleExists(openMenu.MenuId);
    if (!moduleExist) {
        LoadComponent(openMenu);
    } else {
        LoadModule(openMenu);
    }
}
```

## 自定义插件

由于使用了`Prism`来实现插件化，那么自定义的项目也需要安装`Prism`

### 入口

项目名称为`Demo.Plugin`,自定义一个类继承`IModule`

```cs
public void RegisterTypes(IContainerRegistry containerRegistry) {
    containerRegistry.RegisterForNavigation<HelloView>("AA01");
    containerRegistry.RegisterForNavigation<WorldView>("SS010101");
}
```

## 自动更新

使用了[更新](./update.md)功能，在启动时检查是否有新的DLL文件需要更新，如果有则更新，[更新代码地址](https://github.com/Ly2JR/wpf-samples/tree/main/src/update)

![自动更新](https://nas.ilyl.life:8092/wpf/update2.gif =420x200)

## 结语

至此，一个基本的可配置化插件开发完成，稍微进行扩展就能实现更多功能

[完整项目地址](https://github.com/Ly2JR/wpf-samples/tree/main/src/demo)
