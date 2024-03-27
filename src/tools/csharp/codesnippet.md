---
title: 代码片段
date: 2023-12-07
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
---

VS提供了[代码片段](https://learn.microsoft.com/zh-cn/visualstudio/ide/walkthrough-creating-a-code-snippet?view=vs-2022)减少开发工作量。

![自定义代码片段](https://nas.ilyl.life:8092/dotnet/codesnippet.gif)

## 自定义代码片段

::: tip

[注释描述](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/language-specification/documentation-comments)

[代码片段架构参考](https://learn.microsoft.com/zh-cn/visualstudio/ide/code-snippets-schema-reference?view=vs-2022)
:::

1. 新建xml文件

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <CodeSnippets xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet">
        <CodeSnippet Format="1.0.0">
            <Header>
                <Title>comment</Title>
                <Shortcut>neverland</Shortcut>
                <Description>功能注释</Description>
                <Author>Neverland</Author>
                <SnippetTypes>
                    <SnippetType>Expansion</SnippetType>
                </SnippetTypes>
            </Header>
            <Snippet>
                <Declarations>
                    <Literal>
                        <ID>Author</ID>
                        <ToolTip>作者</ToolTip>
                        <Default>Neverland</Default>
                    </Literal>
                    <Literal>
                        <ID>Function</ID>
                        <ToolTip>功能模块</ToolTip>
                        <Default></Default>
                    </Literal>
                    <Literal>
                        <ID>Description</ID>
                        <ToolTip>方法描述</ToolTip>
                        <Default></Default>
                        </Literal>
                </Declarations>
                <Code Language="csharp">
                <![CDATA[
                    /// ****************************************************************************
                    /// @Author:$Author$
                    /// @Function:$end$
                    /// @Description:
                    ///
                    ///
                    /// ****************************************************************************
                    ]]>
                </Code>
            </Snippet>
        </CodeSnippet>
    </CodeSnippets>
    ```

2. 另存为`.snippet`后缀文件
3. 打开VS\工具\代码片段管理器
4. 选择`MyCodeSnippets`导入自定义代码片段

输入`Shortcut`里的内容，按两次`Tab`键即可

## 依赖属性代码片段

```xml
<?xml version="1.0" encoding="utf-8" ?>
<CodeSnippets  xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet">
    <CodeSnippet Format="1.0.0">
        <Header>
            <Title>Define a DependencyProperty</Title>
            <Shortcut>propdp</Shortcut>
            <Description>Code snippet for a property using DependencyProperty as the backing store</Description>
            <Author>Microsoft Corporation</Author>
            <SnippetTypes>
                <SnippetType>Expansion</SnippetType>
            </SnippetTypes>
        </Header>
        <Snippet>
            <Declarations>
                <Literal>
                    <ID>type</ID>
                    <ToolTip>Property Type</ToolTip>
                    <Default>int</Default>
                </Literal>
                <Literal>
                    <ID>property</ID>
                    <ToolTip>Property Name</ToolTip>
                    <Default>MyProperty</Default>
                </Literal>
                <Literal>
                    <ID>ownerclass</ID>
                    <ToolTip>The owning class of this Property.  Typically the class that it is declared in.</ToolTip>
                    <Default>ownerclass</Default>
                </Literal>
                <Literal>
                    <ID>defaultvalue</ID>
                    <ToolTip>The default value for this property.</ToolTip>
                    <Default>0</Default>
                </Literal>
            </Declarations>
            <Code Language="csharp">
                <![CDATA[

public $type$ $property$
{
    get { return ($type$)GetValue($property$Property); }
    set { SetValue($property$Property, value); }
}

// Using a DependencyProperty as the backing store for $property$.  This enables animation, styling, binding, etc...
public static readonly DependencyProperty $property$Property = 
    DependencyProperty.Register("$property$", typeof($type$), typeof($ownerclass$), new PropertyMetadata($defaultvalue$));

$end$]]>
            </Code>
        </Snippet>
    </CodeSnippet>
</CodeSnippets>
```

## 只读依赖代码片段

```xml
<?xml version="1.0" encoding="utf-8" ?>
<CodeSnippets  xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet">
    <CodeSnippet Format="1.0.0">
        <Header>
            <Title>propaonly</Title>
            <Shortcut>propaonly</Shortcut>
            <Description>只读附加依赖属性</Description>
            <Author>Nevlerland</Author>
            <SnippetTypes>
                <SnippetType>Expansion</SnippetType>
            </SnippetTypes>
        </Header>
        <Snippet>
            <Declarations>
                <Literal>
                    <ID>type</ID>
                    <ToolTip>属性类型</ToolTip>
                    <Default>int</Default>
                </Literal>
                <Literal>
                    <ID>property</ID>
                    <ToolTip>属性名称</ToolTip>
                    <Default>MyProperty</Default>
                </Literal>
                <Literal>
                    <ID>ownerclass</ID>
                    <ToolTip>拥有该属性的类</ToolTip>
                    <Default>ownerclass</Default>
                </Literal>
                <Literal>
                    <ID>defaultvalue</ID>
                    <ToolTip>该属性的默认值</ToolTip>
                    <Default>0</Default>
                </Literal>
            </Declarations>
            <Code Language="csharp">
                <![CDATA[
                
                    public static $type$ Get$property$(DependencyObject obj)
                    {
                        return ($type$)obj.GetValue($property$Property);
                    }

                    internal static void Set$property$(DependencyObject obj, $type$ value)
                    {
                        obj.SetValue($property$Property, value);
                    }

                    // Using a readonly DependencyPropertyKey as the backing store for $property$.  This enables animation, styling, binding, etc...
                    internal static readonly DependencyPropertyKey $property$PropertyKey =
                        DependencyProperty.RegisterAttachedReadOnly("$property$", typeof($type$), typeof($ownerclass$), new PropertyMetadata($defaultvalue$));

                    public static readonly DependencyProperty $property$Property = $property$PropertyKey.DependencyProperty;

                    $end$]]>
            </Code>
        </Snippet>
    </CodeSnippet>
</CodeSnippets>
```
