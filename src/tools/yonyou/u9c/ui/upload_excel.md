---
title: U9C 导入Excel
date: 2025-01-16
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

## 客开界面

自定义开发界面，有时需要通过Excel直接导入。

::: tip
1. 引用`X:\yonyou\U9CE\Portal\UILib\UFIDA.U9.CS.UI.Controls.dll`
2. 引用`X:\yonyou\U9CE\Portal\UILib\UFIDA.U9.CS.UI.PDHelper.dll`
:::

![客开导入](https://nas.ilyl.life:8092/yonyou/u9c/ui/u9c_upload_excel.gif)

### 替换TextBox控件为上传控件

在定义界面上添加一个TextBox文本框控件并隐藏，在工具栏上添加一个上传按钮。

在`AfterCreateChildControls`方法里进行TextBox控件替换

```cs
public void AfterCreateChildControls()
{
    RegisterTextBoxAsUploadControl(this.TextBox1);
}
```

替换TextBox控件代码如下

```cs
private UploadFileCtrl upload;
private void RegisterTextBoxAsUploadControl(IUFControl oldControl)
{
    upload = new UploadFileCtrl();
    upload.ID = "UploadFileCtrl";
    upload.Parent = this.topLevelPanel;
    UFIDA.U9.CS.UI.PDHelper.WebpartHelper.ReplaceControl(oldControl, upload, this.Card2);
    ScriptManager.GetCurrent(Page).EnablePartialRendering = false;
    UFIDA.U9.UI.PDHelper.PersonalizationHelper.SetPersonalizationEnable(this, true);
}
```

### 上传Excel文件

```cs
private void Upload(){
    this.Model.ClearErrorMessage();
    OnDataCollect(this);
    this.IsDataBinding = true;
    this.IsConsuming = false;
    if (upload.HttpPostedFile == null || upload.HttpPostedFile.FileName.Length == 0)   return;
    var path = System.Web.HttpContext.Current.Server.MapPath("~/upload");
    if (!Directory.Exists(path)){
        Directory.CreateDirectory(path);
    }
    var fileType = upload.HttpPostedFile.FileName;
    fileType = fileType.Substring(fileType.LastIndexOf('.') + 1);
    var file = Path.Combine(path, DateTime.Now.ToString("yyyyMMddhhmmssms") + "File." + fileType.ToLower());
    upload.HttpPostedFile.SaveAs(file);
}
```

### 读取Excel文件

读取上传文件，参考[Excel开发](../../../excel/README.md)

## 标准界面

有时需要在标准界面上添加Excel导入功能。

::: tip
1. 引用`X:\yonyou\U9CE\Portal\UILib\UFIDA.U9.MIP.CBO.UIHelper.dll`
2. 引用`X:\yonyou\U9CE\Portal\UILib\UFIDA.U9.CS.UI.Controls.dll`
:::

![标准导入](https://nas.ilyl.life:8092/yonyou/u9c/ui/u9c_browser_excel_upload.gif)

### 添加客开按钮

通过[UI插件](../plugin/ui/ui_plugin.md)添加一个按钮

实现点击按钮，弹出客开的浏览文件界面

```CS
this.ShowAtlasModalDialog(formid, "文件上传", "625", "120", this.TaskId.ToString(), nvc, true, false, false);
```

### 客开浏览文件界面

新增加一个文件浏览上传页面，添加一个TextBox文本框控件，以及一个确定，一个取消按钮。

#### 替换TextBox控件为上传控件

在`AfterCreateChildControls`方法里进行TextBox控件替换

```cs
public void AfterCreateChildControls()
{
    RegisterTextBoxAsUploadControl(this.TextBox1);
}
```

替换TextBox控件代码如下

```cs
private ExcelHelper _excelHelper;
private void RegisterTextBoxAsUploadControl(IUFFldTextBox txtBox)
{
    if (_excelHelper == null)
    {
        _excelHelper = new ExcelHelper();
    }
    _excelHelper.ChangeTxtCtrlToLoadFileCtrl(this.Page, this.topLevelPanel, txtBox, this.Card0);
}
```

#### 文件处理

在确定按钮下实现文件上传、读取、写入等逻辑

```cs
private void Upload()
{
    if (_excelHelper.upload.FileName.Trim() == string.Empty) throw new Exception("请先选择导入文件，请检查");
    var aFile = _excelHelper.upload.FileName;
    if (!aFile.Contains(".")) throw new Exception("导入文件格式不正确，请检查");
    var extension = aFile.Substring(aFile.LastIndexOf(".") + 1, (aFile.Length - aFile.LastIndexOf(".") - 1)).ToLower();
    if (extension != "xls" && extension != "xlsx") throw new Exception("导入文件格式不正确,只支持.xls和.xlsx格式的文件,请检查");
    var newFilePath = _excelHelper.UpLoadFileToServer(_excelHelper.upload);
    DataSet ds = NPOIHelper.ImportExceltoDt(newFilePath, 0, true);
}
```