---
title: 批量赋取值
date: 2023-12-11
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - Winform
---

在Winform中常见的一个功能是配置，需要赋值取值，而且还是大批量的地方，一个一个手动处理非常繁琐。

如何进行批量化一键赋值和一键取值，更近一步的衍生，就是一个标准的动态模板功能。

以批量赋值取值为例进行说明。

## 设置基类用户控件

设置基类控件为了适应不同的子控件。

新增了一个属性`Key`，一个`GetValue()`和一个`SetValue()`方法。

`Key`用于与数据库字段名匹配

`GetValue`方法用户获取用户输入的值

`SetValue`方法用户将数据库存储的数据赋值到用户控件

```cs
public partial class BaseControl : UserControl
{
    public BaseControl()
    {
        InitializeComponent();
    }

    public virtual string Key { get; set; }

    public virtual object GetValue()
    {
        return null;
    }

    public virtual void SetValue(object value) {}
}
```

## 继承`BaseControl`添加一个名为`TextControl`的用户控件

```cs
public partial class TextControl : BaseControl
{
    public TextControl()
    {
        InitializeComponent();
    }
}
```

## 设计`TextControl`用户控件

::: tip
继承用户控件预览时经常出现错误的问题。

重新生成解决方案即可。否则基类用户控件有错误。
:::

添加一个`Label`和一个`TextBox`

Label用于显示名称

TextBox用于用户输入新值和显示原始值

![TextControl](https://image.ilyl.life:8443/dotnet/winform1.png)

## 重写基类控件方法

新添加一个额外的属性`Title`用户控制`Label`标签

```cs
public string Title { get { return label1.Text; } set { label1.Text = value; } }

public override object GetValue()
{
    return textBox1.Text;
}

public override void SetValue(object value)
{
    textBox1.Text =Convert.ToString(value);
}
   ```

## 设计配置表

使用`DataTable`映射数据库表字段

|字段名|类型|描述|
|:-|:-|:-|
|name|nverchar(10)|姓名|
|age|int|年龄|
|address|nverchar(60)|地址|

```cs
public partial class Form1 : Form
{
    private DataTable _template;
    public Form1()
    {
        InitializeComponent();

        _template = new DataTable();
        _template.Columns.Add("name",typeof(string));
        _template.Columns.Add("age", typeof(int));
        _template.Columns.Add("address", typeof(string));

        //模拟值
        _template.Rows.Add(new object[] { "AA", 22, "VVV" });
    }
}
```

## 在窗体中设计布局

添加三个`TextControl`用户控件，并设置`Title`和`Key`属性

`Key`值对应`字段名`

![配置设置](https://image.ilyl.life:8443/dotnet/winform2.png)

## 赋值取值

```cs
//赋值
private void button1_Click(object sender, EventArgs e)
{
    foreach(var child in Controls)
    {
        if (child is BaseControl control)
        {
            if (_template.Columns.Contains(control.Key))
            {
                control.SetValue(_template.Rows[0][control.Key]);
            }
        }
    }
}

//取值
private void button2_Click(object sender, EventArgs e)
{
    var sb = new StringBuilder();
    foreach (var child in Controls)
    {
        if (child is BaseControl control)
        {
            if (_template.Columns.Contains(control.Key))
            {
                sb.Append($"{control.Key}:{control.GetValue()}\r\n") ;
            }
        }
    }
    MessageBox.Show(sb.ToString());
}
```

![批量处理](https://image.ilyl.life:8443/dotnet/winform3.gif)
