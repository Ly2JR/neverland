---
title: BE插件开发
date: 2024-06-17
editLink: false
footer: false
isOriginal: true
category:
  - U9C
---

U9C里的BE插件开发相当于在原始业务单据的按钮上进行操作前、操作后业务开发，能开发的功能都预制好的。

## BE插件事件种类

|名称|描述|类型|
|:-|:-|:-|
|BeforeDefaultValue||BE|
|SetDefaultValue||BE|
|AfterfaultValue||BE|
|BeforeValidate||BE|
|Validate||BE|
|AfterValidate||BE|
|BeforeInserting||BE|
|Inserting||BE|
|AfterInserting||BE|
|Inserted||BE|
|AfterInserted||BE|
|BeforeUpdating||BE|
|Updating||BE|
|AfterUpdating||BE|
|BeforeUpdated||BE|
|Updated||BE|
|AfterUpdated||BE|
|BeforeDeleting||BE|
|Deleting||BE|
|AfterDeleting||BE|
|BeforeDeleted||BE|
|Deleted||BE|
|AfterDeleted||BE|

![新增修改流程](https://nas.ilyl.life:8092/yonyou/u9c/plugin/be/u9c-be-insert-and-update.png)


![删除流程](https://nas.ilyl.life:8092/yonyou/u9c/plugin/be/u9c-be-delete.png)

## 部署

::: tip
`xxx.sub.xml`文件
:::

将项目的dll文件拷贝到`yonyou\U9CE\Portal\ApplicationServer\Libs`目录下
将项目里的`XXX.sub.xml`拷贝到`yonyou\U9CE\Portal\bin`目录下