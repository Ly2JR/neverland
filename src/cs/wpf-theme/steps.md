---
title: Steps 步骤条
date: 2024-05-17
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - WPF主题控件
---

## 基础用法

设置 `Active` 属性，接受一个 Int，表明步骤的 index，从 0 开始。 需要定宽的步骤条时，设置 `Space` 属性即可，它接受 double，默认200。 设置`FinishStatus` 属性可以改变已经完成的步骤的状态。

![steps](https://image.ilyl.life:8443/wpf-theme/steps/steps.gif)

```xml
<nl:Steps
    Active="{Binding Active}"
    FinishStatus="Success">
    <nl:StepItem Title="Step1"/>
    <nl:StepItem Title="Step2"/>
    <nl:StepItem Title="Step2"/>
</nl:Steps>
<Button
    Command="{Binding NextStepCommand}">
    Next Step
</Button>
```

```cs
[ObservableProperty]
private int active = 0;

[RelayCommand]
private void NextStep()
{
    if (Active++ > 2) Active = 0;
}
```

## 含状态的步骤条

每一步骤显示出该步骤的状态。

![title](https://image.ilyl.life:8443/wpf-theme/steps/steps-title.png)

```xml
<nl:Steps
    Active="1"
    FinishStatus="Success">
    <nl:StepItem Title="Done"/>
    <nl:StepItem Title="Processing"/>
    <nl:StepItem Title="Step 3"/>
</nl:Steps>
```

## 带图标的步骤条

可以在步骤栏中使用各种自定义图标。通过 `icon` 属性来设置图标

![icon](https://image.ilyl.life:8443/wpf-theme/steps/steps-icon.png)

```xml
 <GeometryGroup x:Key="Step1">
     <PathGeometry Figures="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z" />
     <PathGeometry Figures="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z" />
 </GeometryGroup>

 <Geometry x:Key="Step2">M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z</Geometry>

 <GeometryGroup x:Key="Step3">
     <PathGeometry Figures="M160 160v704h704V160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32" />
     <PathGeometry Figures="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64M185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952z" />
 </GeometryGroup>

 <nl:Steps Active="1">
     <nl:StepItem Title="Step 1" Icon="{StaticResource Step1}" />
     <nl:StepItem Title="Step 2"  Icon="{StaticResource Step2}"/>
     <nl:StepItem Title="Step 3"  Icon="{StaticResource Step3}"/>
 </nl:Steps>
```

## 垂直的步骤条

垂直方向的步骤条。

只需要在`Steps` 元素中设置`Direction` 属性为 `Vertical` 即可。

![direction](https://image.ilyl.life:8443/wpf-theme/steps/steps-direction.png)

```xml
<nl:Steps Active="1" Direction="Vertical">
    <nl:StepItem Title="Step 1" />
    <nl:StepItem Title="Step 2" />
    <nl:StepItem Title="Step 3" />
</nl:Steps>
```
