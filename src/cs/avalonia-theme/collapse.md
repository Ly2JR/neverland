---
title: Collapse 折叠面板
date: 2025-05-16
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - AvaloniaUI
  - AvaloniaUI主题控件
---

## 基础用法

可同时展开多个面板，面板之间不影响

![collapse](https://image.ilyl.life:8443/avaloniaui-theme/collapse/avalonia-collapse.gif)

```xml
<nl:Collapse>
    <nl:CollapseItem TitleTemplate="{StaticResource DefineHeader}">
        <TextBlock TextWrapping="Wrap">
            <Run>
                Consistent with real life: in line with the process and logic of real
                life, and comply with languages and habits that the users are used to;
            </Run>
            <LineBreak />
            <Run>
                Consistent within interface: all elements should be consistent, such
                as: design style, icons and texts, position of elements, etc.
            </Run>
        </TextBlock>
    </nl:CollapseItem>
    <nl:CollapseItem Title="Feedback">
        <TextBlock TextWrapping="Wrap">
            <Run>
                Operation feedback: enable the users to clearly perceive their
                operations by style updates and interactive effects;
            </Run>
            <LineBreak />
            <Run>
                Visual feedback: reflect current state by updating or rearranging
                elements of the page.
            </Run>
        </TextBlock>
    </nl:CollapseItem>
    <nl:CollapseItem Title="Efficiency">
        <TextBlock TextWrapping="Wrap">
            <Run>Simplify the process: keep operating process simple and intuitive;</Run>
            <LineBreak />
            <Run>
                Definite and clear: enunciate your intentions clearly so that the
                users can quickly understand and make decisions;
            </Run>
            <LineBreak />
            <Run>
                Easy to identify: the interface should be straightforward, which helps
                the users to identify and frees them from memorizing and recalling.
            </Run>
        </TextBlock>
    </nl:CollapseItem>
    <nl:CollapseItem Title="Controllability">
        <TextBlock TextWrapping="Wrap">
            <Run>
                Decision making: giving advices about operations is acceptable, but do
                not make decisions for the users;
            </Run>
            <LineBreak />
            <Run>
                Controlled consequences: users should be granted the freedom to
                operate, including canceling, aborting or terminating current
                operation.
            </Run>
        </TextBlock>
    </nl:CollapseItem>
</nl:Collapse>
```

## 手风琴效果

每次只能展开一个面板

通过`IsAccordion`属性来设置是否以手风琴模式显示

```xml
<nl:Collapse Margin="20" IsAccordion="True"/>
```
