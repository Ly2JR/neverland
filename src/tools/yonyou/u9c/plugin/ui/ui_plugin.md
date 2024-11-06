---
title: UI插件
date: 2024-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 用友
tag:
  - U9C
---

U9C里的UI插件开发相当于在原始业务单据上添加自己的按钮，执行按钮下的业务逻辑

::: warning
确保关闭热插件，即x:\yongyou\U9CE\Portal\bin\environment.xml中的`uipluging`属性必须为`false`
:::

## UI插件事件种类

|名称|描述|类型|
|:-|:-|:-|
|BeforeInit|初始化前|UI|
|BeforeLoad|Form加载前|UI|
|BeforeDataLoad|数据加载前|UI|
|AfterDataLoad|数据加载后|UI|
|AfterLoad|Form加载后|UI|
|BeforeDataCollect|数据收集前的处理|UI|
|AfterDataCollect|数据收集后的处理|UI|
|BeforeRender|修改模型和控件属性前|UI|
|BefreDataBinding|修改模型，修改控件属性前|UI|
|AfterDataBinding|修改控件属性后|UI|
|AfterRender|修改控件属性后|UI|

![表单流程](https://nas.ilyl.life:8092/yonyou/u9c/plugin/ui/u9c-ui-plugin-process.png)

![表单流程](https://nas.ilyl.life:8092/yonyou/u9c/plugin/ui/u9c-ui-plugin-process2.png)

## 项目结构

![项目结构](https://nas.ilyl.life:8092/yonyou/u9c/plugin/ui/u9c-ui-plugin-code.png)

```
|--UFIDA.U9.PluginDemo.UIPlugin.sln
|--|--引用
|--|--|--System
|--|--|--System.Data
|--|--|--System.Web
|--|--|--System.Xml
|--|--|--UFIDA.U9.SCM.SD.SOUI.WebPart
|--|--|--UFIDA.U9.UI.BusinessHelper
|--|--|--UFIDA.U9.UI.PDHelper
|--|--|--UFSoft.UBF.AopFrame
|--|--|--UFSoft.UBF.Business
|--|--|--UFSoft.UBF.UI.ActionProcess
|--|--|--UFSoft.UBF.UI.Controls.Interface
|--|--|--UFSoft.UBF.UI.Engine.Runtime
|--|--|--UFSoft.UBF.UI.FormProcess
|--|--|--UFSoft.UBF.UI.IView
|--|--|--UFSoft.UBF.UI.MD.Runtime
|--|--|--UFSoft.UBF.UI.Portal
|--|--|--UFSoft.UBF.UI.WebControls.Association
|--|--|--UFSoft.UBF.UI.WebControls.BaseComponent
|--|--StandardSOMainUIFormWebPart
|--|--|--StandardSOMainUIFormWebPart.cs
|--|--|--StandardSOMainUIFormWebPartExtend.cs
|--|--|--WebPartExtend_StandardSOMainUIFormWebPart.config
|--|--CommunFunction.cs
```

### 引用

#### 必备引用

`System`、`System.Data`、`System.Web`、`System.Xml`前4个`System`为系统类库

- UFIDA.U9.UI.BusinessHelper

引用位置：`X:\yonyou\U9CE\Portal\ApplicationLib\UFIDA.U9.UI.BusinessHelper.dll`

- UFIDA.U9.UI.PDHelper

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFIDA.U9.UI.PDHelper.dll`

- UFSoft.UBF.AopFrame

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.AopFrame.dll`

- UFSoft.UBF.Business

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.Business.dll`

- UFSoft.UBF.UI.ActionProcess

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.UI.ActionProcess.dll`

- UFSoft.UBF.UI.Controls.Interface

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.UI.Controls.Interface.dll`

- UFSoft.UBF.UI.Engine.Runtime

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.UI.Engine.Runtime.dll`

- UFSoft.UBF.UI.FormProcess

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.UI.FormProcess.dll`

- UFSoft.UBF.UI.IView

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.UI.IView.dll`

- UFSoft.UBF.UI.MD.Runtime

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.UI.MD.Runtime.dll`

- UFSoft.UBF.UI.Portal

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.UI.Portal.dll`

- UFSoft.UBF.UI.WebControls.Association

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.UI.WebControls.Association.dll`

- UFSoft.UBF.UI.WebControls.BaseComponent

引用位置：`X:\yonyou\UBFCE\U9.VOB.Product.UBF\UBFStudio\Runtime\UFSoft.UBF.UI.WebControls.BaseComponent.dll`

#### 变化引用

- UFIDA.U9.SCM.SD.SOUI.WebPart

引用位置：`X:\yonyou\U9CE\Portal\UILib\UFIDA.U9.SCM.SD.SOUI.WebPart.dll`

销售订单的UI，不同的业务需要引用不同的UI文件

### 类文件

`StandardSOMainUIFormWebPart.cs`和`StandardSOMainUIFormWebPartExend.cs`是同一个文件`StandardSOMainUIFormWebPart.cs`，利用`partial`进行代码合并，加`Exend`后缀将业务实现分离出来供开发使用

- StandardSOMainUIFormWebPart.cs

```cs
public partial class StandardSOMainUIFormWebPart : UFSoft.UBF.UI.Custom.ExtendedPartBase
{
    
    public override void AfterInit(UFSoft.UBF.UI.IView.IPart part, EventArgs args)
    {
        this.Do_AfterInit(part, args);;
    }
}
```

- StandardSOMainUIFormWebPartExtend.cs

```cs
public partial class StandardSOMainUIFormWebPart
{
    
    #region 字段与属性                                                                                                    
        private UFIDA.U9.SCM.SM.SOUIModel.StandardSOMainUIFormWebPart _strongPart;
        private IPart _part;
    #endregion


    private void Do_AfterInit(UFSoft.UBF.UI.IView.IPart part, EventArgs args)
    {
        #region 获取相关强类型数据                               
        _part = part;
        _strongPart = part as UFIDA.U9.SCM.SM.SOUIModel.StandardSOMainUIFormWebPart;                         
        if (_strongPart == null)                                  
            return;

        #endregion

        #region 在功能栏添加按钮
        //实例化按钮
        IUFButton btnTest1 = new UFWebButtonAdapter();
        btnTest1.ID = nameof(btnTest1);
        btnTest1.AutoPostBack = true;
        //加入到功能栏Card中
        IUFToolbar toolbar = (IUFToolbar)part.GetUFControlByName(part.TopLevelContainer, "Toolbar1");
        if (toolbar != null)
        {
            btnTest1 = UIControlBuilder.BuilderToolbarButton(toolbar, "True", nameof(btnTest1), "True", "True", 70, 28, "7", "", true, false, "67000468-625E-45FD-9286-B4495607DA9E", "67000468-625E-45FD-9286-B4495607DA9E", "99B847E1-A5B6-4B47-A892-658B5B655ACD");
            btnTest1.Text = "客开按钮1";
            UIControlBuilder.SetButtonAccessKey(btnTest1);
            btnTest1.UIModel = part.Model.ElementID;
            ((UFWebToolbarAdapter)toolbar).Items.Add(btnTest1 as WebControl);
            btnTest1.Click += new EventHandler(btnTest1_Click);

        }
        #endregion


        #region 在Card里添加按钮
        UFSoft.UBF.UI.ControlModel.IUFButton btnTest2 = new UFSoft.UBF.UI.WebControlAdapter.UFWebButtonAdapter();
        btnTest2.ID = nameof(btnTest2);
        btnTest2.Text = "客开按钮2";
        btnTest2.AutoPostBack = true;

        //加入容器
        UFSoft.UBF.UI.ControlModel.IContainer Card0
            = (UFSoft.UBF.UI.ControlModel.IContainer)part.GetUFControlByName(part.TopLevelContainer, "Card0");

        Card0.Controls.Add(btnTest2);
        CommonFunction.Layout(Card0, btnTest2, 18, 0);
        //设置事件
        btnTest2.Click += new EventHandler(btnTest2_Click);
        #endregion

        #region 在DropDownButton添加按钮
        //3、Card的DropDownButton里面添加按钮
        IUFMenu btnTest3 = new UFWebMenuAdapter();
        btnTest3.Text = "客开按钮3";
        btnTest3.ID = nameof(btnTest3);
        btnTest3.AutoPostBack = true;
        IUFDropDownButton menuButtion = (IUFDropDownButton)CommonFunction.FindControl(part, "Card0", "DDBtnOperation");
        if (menuButtion != null)
        {
            btnTest3.ItemClick += BtnTest3_ItemClick;
            menuButtion.MenuItems.Add(btnTest3);
        }
        #endregion
    }

    private void BtnTest3_ItemClick(object sender, MenuItemClickEventArgs e)
    {
        ShowJavaScriptAlert("客开按钮3");
    }

    private void btnTest1_Click(object sender, EventArgs e)
    {
        ShowJavaScriptAlert("客开按钮1");
    }

    private void btnTest2_Click(object sender,EventArgs e)
    {
        ShowJavaScriptAlert("客开按钮2");
    }

    private void ShowJavaScriptAlert(string message)
    {
        string script = "<script language=\"javascript\">alert(\"" + message + "\");</script>";
        if (_part != null)
        {
            UFSoft.UBF.UI.AtlasHelper.RegisterAtlasScript((Control)this._part.TopLevelContainer, this.GetType(), "ShowJavaScriptAlert", script, false);
        }
    }
}
```

- CommonFunction.cs

`CommonFunction.cs`类是辅助类，一般固定不动

```cs
public class CommonFunction 
{                                                                                                              
    public static void Layout(IContainer container, IUFControl ctrl, uint x, uint y)                           
    {                                                                                                          
        Layout(container, ctrl, x, y, 1, 1, Unit.Pixel(0), Unit.Pixel(0), true);                               
    }                                                                                                          
                                                                                                                
    public static void Layout(IContainer container, IUFControl ctrl, uint x, uint y, int width, int height)    
    {                                                                                                          
        Layout(container, ctrl, x, y, 1, 1, Unit.Pixel(width), Unit.Pixel(height), false);                     
    }                                                                                                          
                                                                                                                
                                                                                                                
    public static void Layout(IContainer container, IUFControl ctrl, uint x, uint y, int xspan, int yspan,     
        Unit width, Unit height, bool isAutoSize)                                                              
    {                                                                                                          
        IGridLayout gl = container.Layout as IGridLayout;                                                      
        if (gl == null) return;                                                                                
        GridLayoutInfo glInfo = new GridLayoutInfo((uint)x, (uint)y, (uint)xspan, (uint)yspan, width, height); 
        glInfo.AutoSize = isAutoSize;                                                                          
        gl.Controls.Add((Control)ctrl, glInfo);                                                                
                                                                                                                
    }                                                                                                          
                                                                                                                
    public static IUFControl FindControl(IPart part,string parentControl, string control)                      
    {                                                                                                          
        IUFCard card = (IUFCard)part.GetUFControlByName(part.TopLevelContainer, parentControl);                
        if (card == null)                                                                                      
            return null;                                                                                       
                                                                                                                
        foreach (IUFControl ctrl in card.Controls)                                                             
        {                                                                                                      
            if (ctrl.ID.Equals(control, StringComparison.OrdinalIgnoreCase))                                   
            {                                                                                                  
                return ctrl;                                                                                   
            }                                                                                                  
        }                                                                                                      
        return null;                                                                                           
    }                                                                                                          
}             
```

- WebPartExtend_StandardSOMainUIFormWebPart.config

WebPartExtend_StandardSOMainUIFormWebPart.config文件参考xml结构说明

### 控件问题

::: tip
如上面的`Toolbar`,`Card`，`DDBtnOperation`并不是一成不变，通过DevTool工具查找ID
:::

- 关于为什么是`Toolbar1`、`Card0`以及`DDBtnOperation`问题?

因为是Web端,通过`ID`确定控件,`Toolbar1`,`Card0`以及`DDBtnOperation`父控件的ID。

![找Toolbar控件](https://nas.ilyl.life:8092/yonyou/u9c/plugin/ui/u9c-ui-find-toolbar.png)

![找Card控件](https://nas.ilyl.life:8092/yonyou/u9c/plugin/ui/u9c-ui-find-card.png)

![找DropButton控件](https://nas.ilyl.life:8092/yonyou/u9c/plugin/ui/u9c-ui-find-dropbutton.png)

- 怎么确定`Card0`里添加的按钮位置

 如上ID为`Card0`的控件下添加按钮代码，其中有一句

 ```cs
 CommonFunction.Layout(Card0, btnTest2, 18, 0);
 ```

 第三个参数`18`,在ID为`Card0`的控件下，按钮是以`td`进行占位，然后在隔一个`td`，看实际页面按钮个数*2即是新按钮的位置。

## xml结构

约定文件名称：`WebPartExtend_自定义单据.config`

例如销售订单UI,`WebPartExtend_StandardSOMainUIFormWebPart.config`

```xml
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
  <configSections>
    <section name="WebPartExtend" type="UFSoft.UBF.UI.Custom.ExtendedPartSection, UFSoft.UBF.UI.FormProcess" />
  </configSections>
  <WebPartExtend>
    <ExtendedPart parentPartFullName="UFIDA.U9.SCM.SM.SOUIModel.StandardSOMainUIFormWebPart" extendedPartFullName="UFIDA.U9.PluginDemo.UIPlugin.StandardSOMainUIFormWebPart" extendedPartAssemblyName="UFIDA.U9.PluginDemo.UIPlugin.dll" />
  </WebPartExtend>
</configuration>
```

xml节点配置大部分固定，只需更改`ExtendedPart`节点下的属性值即可

`parentPartFullName`: 要扩展的原Form全名，这里是销售订单，不同的UI需要不同的UI部分

`extendedPartAssemblyName`:插件的程序集

`extendedPartFullName`：插件类全名,格式`项目名.类名`

## 部署

- 将项目的dll文件拷贝到`x:\yonyou\U9CE\Portal\UILib`目录下

- 将项目里的`WebPartExtend_XXX.config`拷贝到`x:\yonyou\U9CE\Portal`目录下

## 调试

利用[xcopy](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/xcopy)设置每次编译成功自动拷贝

在生成后事件行里添加`xcopy $(TargetPath) C:\yonyou\U9CE\Portal\UILib /y`命令

每次先重启IIS，在编译，VS附加进程到`W3WP.EXE`，实时开发代码即可。

## 预览

![预览效果](https://nas.ilyl.life:8092/yonyou/u9c/plugin/ui/u9c-ui-plugin.gif)