---
title: U9C 导入Excel
date: 2025-01-16
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

自定义开发界面，有时需要通过Excel直接导入。

::: tip
1. 引用`X:\yonyou\U9CE\Portal\UILib\UFIDA.U9.CS.UI.Controls.dll`
2. 引用`X:\yonyou\U9CE\Portal\UILib\UFIDA.U9.CS.UI.PDHelper.dll`
:::

![导入](https://nas.ilyl.life:8092/yonyou/u9c/ui/u9c_upload_excel.gif)

## 替换TextBox控件为上传控件

在定义界面上添加一个TextBox控件并隐藏，在工具栏上添加一个上传按钮。

在`AfterCreateChildControls`进行TextBox控件替换

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

## 上传Excel文件

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

## 读取Excel文件

读取上传文件,参考[Excel开发](../../../excel/README.md)
