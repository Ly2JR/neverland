---
title: XML
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
---

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<bookstore>
    <book>
        <title lang="eng">Harry Potter</title>
        <price>29.99</price>
    </book>
    <book>
        <title lang="eng">Learning XML</title>
        <price>39.95</price>
    </book>
</bookstore>
```

## 读取XML

读取XML元素节点需要用到[XPath](https://www.w3.org/TR/1999/REC-xpath-19991116/)，这里有[测试工具](https://extendsclass.com/xpath-tester.html)

::: tabs

@tab System.Xml

```cs
using System.Xml;

var filePath = "D:\\books.xml";

var xmlDoc = new XmlDocument();
xmlDoc.Load(filePath);

foreach (XmlElement item in xmlDoc.SelectNodes("//book/title"))
{
    Console.WriteLine(item.InnerText);
}

//输出
//Harry Potter
//Learning XML
```

@tab System.Xml.Linq

```cs
var filePath = "D:\\books.xml";

var xDoc = XElement.Load(filePath);
foreach (var item in xDoc.Elements("book"))
{
    Console.WriteLine(item.Element("title").Value);
}

//输出
//Harry Potter
//Learning XML
```

@tab System.Xml.Serialization

```cs
using System.Text.Json;
using System.Xml.Serialization;

var filePath = "D:\\books.xml";

BookStore bookStore = null;

if (File.Exists(filePath))
{
    using (var reader = new StreamReader(filePath))
    {
        var xmlSerializer = new XmlSerializer(typeof(BookStore));
        bookStore = xmlSerializer.Deserialize(reader) as BookStore;
    }
}

JsonSerializerOptions options = new JsonSerializerOptions()
{
    WriteIndented = true,                                   
    AllowTrailingCommas = true,                                                                                 
    IgnoreReadOnlyProperties = true,                        
    PropertyNameCaseInsensitive = true,                   
};

string json = JsonSerializer.Serialize<BookStore>(bookStore, options);  

Console.WriteLine(json);

[XmlRoot("bookstore")]
[Serializable]
public class BookStore
{
    [XmlElement(elementName: "book")]
    public List<Book> Books { get; set; }
}

[Serializable]
public class Book
{
    [XmlElement("title")]
    public BookTitle Title { get; set; }

    [XmlElement("price")]
    public string Price { get; set; }
}

[Serializable]
public class BookTitle
{
    [XmlAttribute("lang")]
    public string Lang { get; set; }

    [XmlText]
    public string Text { get; set; }
}
```

:::

## 写入XML

::: tabs

@tab System.Xml

```cs
using System.Xml;

var filePath = "D:\\books.xml";

var xmlDoc = new XmlDocument();
xmlDoc.Load(filePath);
//新增
var root = xmlDoc.SelectSingleNode("bookstore");
var newElement = xmlDoc.CreateElement("book");
var childTitle = xmlDoc.CreateElement("title");
childTitle.SetAttribute("lang", "eng");
childTitle.InnerText = "xml";
var childPrice = xmlDoc.CreateElement("price");
childPrice.InnerText = "66";
newElement.AppendChild(childTitle);
newElement.AppendChild(childPrice);
root.AppendChild(newElement);
//修改
var firstNode = xmlDoc.SelectSingleNode("//book/title");
if (firstNode != null)
{
    firstNode.InnerText += "1";
}
//删除
var xmlNode = xmlDoc.SelectSingleNode("//book[title='Learning XML']");
if (xmlNode != null)
{
    root.RemoveChild(xmlNode);
}
//深度复制
var copyNode = xmlDoc.SelectSingleNode("//book[title='Learning XML']");
if (copyNode != null)
{
    root.AppendChild(copyNode.CloneNode(true));
}
//查询
foreach (XmlElement item in xmlDoc.SelectNodes("//book/title"))
{
    Console.WriteLine(item.InnerText);
}
xmlDoc.Save(filePath);

Console.ReadKey();
```

@tab System.Xml.Linq

```cs{11,14}
using System.Xml.Linq;

var filePath = "D:\\books.xml";
var xDoc = XElement.Load(filePath);

var eles = from el in xDoc.Descendants()
           el.Name.LocalName == "title"
           select el;
foreach (XElement el in eles)
{
    el.Value += " 123";
    Console.WriteLine($"Name:{el.Name}\tValue:{el.Value}");
}
xDoc.Save(filePath);
```

@tab System.Xml.Serialization

```cs
using System.Xml.Serialization;
var filePath = "D:\\books.xml";
BookStore bookStore = new BookStore()
{
    Books = new List<Book>() {
        new Book()
        {
            Price=29.99M,
            Title=new BookTitle()
            {
                Text="Harry Potter",
                Lang="lng"
            }
        },
        new Book()
        {
            Price=39.95M,
            Title=new BookTitle()
            {
                Text="Learning XML",
                Lang="lng"
            }
        },
    }
};

using (var write = new StreamWriter(filePath))
{
    var xmlSerializer = new XmlSerializer(typeof(BookStore));
    xmlSerializer.Serialize(write, bookStore);
}

[XmlRoot("bookstore")]
[Serializable]
public class BookStore
{
    [XmlElement(elementName: "book")]
    public required List<Book> Books { get; set; }
}

[Serializable]
public class Book
{
    [XmlElement("title")]
    public required BookTitle Title { get; set; }

    [XmlElement("price")]
    public decimal Price { get; set; }
}

[Serializable]
public class BookTitle
{
    [XmlAttribute("lang")]
    public required string Lang { get; set; }

    [XmlText]
    public required string Text { get; set; }
}
```

:::

## 命名空间

有时XML数据携带[命名空间](https://learn.microsoft.com/zh-cn/dotnet/standard/data/xml/managing-namespaces-in-an-xml-document)，需要[管理命名空间](https://learn.microsoft.com/zh-cn/dotnet/standard/linq/find-all-nodes-namespace)

新增命名空间`http://bookstore.com`

```xml{2}
<?xml version="1.0" encoding="ISO-8859-1"?>
<bookstore xmlns="http://bookstore.com">
    <book>
        <title lang="eng">Harry Potter</title>
        <price>29.99</price>
    </book>
    <book>
        <title lang="eng">Learning XML</title>
        <price>39.95</price>
    </book>
</bookstore>
```

在使用之前的查询方式就不能查询节点，需要添加命名空间管理才行

### 带命名空间读取

::: tabs

@tab System.Xml

```cs{6-8}
using System.Xml;

var filePath = "D:\\books.xml";

var xmlDoc = new XmlDocument();
xmlDoc.Load(filePath);
//注册命名空间
XmlNamespaceManager xnm = new XmlNamespaceManager(xmlDoc.NameTable);
xnm.AddNamespace("x", "http://bookstore.com");
foreach (XmlElement item in xmlDoc.SelectNodes("//x:book/x:title",xnm))
{
    Console.WriteLine(item.InnerText);
}

//输出
//Harry Potter
//Learning XML
```

@tab System.Xml.Linq

```cs
using System.Xml.Linq;

var filePath = "D:\\books.xml";

var xDoc = XElement.Load(filePath);

var eles=from el in xDoc.Descendants()
           where el.Name.Namespace== "http://bookstore.com"
           && el.Name.LocalName =="title"
           select el;
foreach(XElement el in eles)
{
    Console.WriteLine($"Name:{el.Name}\tValue:{el.Value}");
}

//输出
//Name:{http://bookstore.com}title        Value:Harry Potter
//Name:{http://bookstore.com}title        Value:Learning XML
```

@tab System.Xml.Serialization

```cs{28}
using System.Text.Json;
using System.Xml.Serialization;

var filePath = "D:\\books.xml";

BookStore? bookStore = null;

if (File.Exists(filePath))
{
    using (var reader = new StreamReader(filePath))
    {
        var xmlSerializer = new XmlSerializer(typeof(BookStore));
        bookStore = xmlSerializer.Deserialize(reader) as BookStore;
    }
}

JsonSerializerOptions options = new JsonSerializerOptions()
{
    WriteIndented = true,
    AllowTrailingCommas = true,
    IgnoreReadOnlyProperties = true,
    PropertyNameCaseInsensitive = true,
};

string json = JsonSerializer.Serialize<BookStore?>(bookStore, options);
Console.WriteLine(json);

[XmlRoot("bookstore", Namespace = "http://bookstore.com")]
[Serializable]
public class BookStore
{
    [XmlElement(elementName: "book")]
    public List<Book>? Books { get; set; }
}

[Serializable]
public class Book
{
    [XmlElement("title")]
    public BookTitle? Title { get; set; }

    [XmlElement("price")]
    public string? Price { get; set; }
}

[Serializable]
public class BookTitle
{
    [XmlAttribute("lang")]
    public string? Lang { get; set; }

    [XmlText]
    public string? Text { get; set; }
}

//输出
// {
//   "Books": [
//     {
//       "Title": {
//         "Lang": "eng",
//         "Text": "Harry Potter"
//       },
//       "Price": "29.99"
//     },
//     {
//       "Title": {
//         "Lang": "eng",
//         "Text": "Learning XML"
//       },
//       "Price": "39.95"
//     }
//   ]
// }
```

:::

### 带命名空间生成

::: tabs

@tab System.Xml

```cs
using System.Xml;

var xmlDoc = new XmlDocument();
var root = xmlDoc.CreateElement("bookstore","http://bookstore.com");
var newElement = xmlDoc.CreateElement("book", "http://bookstore.com");
var childTitle = xmlDoc.CreateElement("title");
childTitle.SetAttribute("lang", "eng");
childTitle.InnerText = "xml";
var childPrice = xmlDoc.CreateElement("price");
childPrice.InnerText = "66";
newElement.AppendChild(childTitle);
newElement.AppendChild(childPrice);
root.AppendChild(newElement);
xmlDoc.AppendChild(root);

using (StringWriter sw = new StringWriter())
{
    using (XmlTextWriter writer = new XmlTextWriter(sw))
    {
        writer.Formatting = Formatting.Indented;
        xmlDoc.WriteTo(writer);
        string str = sw.ToString();
        Console.WriteLine(str);
    }
}

//输出
// <bookstore xmlns="http://bookstore.com">
//   <book>
//     <title lang="eng" xmlns="">xml</title>
//     <price xmlns="">66</price>
//   </book>
// </bookstore>
```

@tab System.Xml.Linq

```cs{3,5-12}
using System.Xml.Linq;

XNamespace xmlns = "http://bookstore.com";
XElement books =
    new XElement(xmlns+"bookstore",
        new XElement(xmlns + "book",
            new XElement(xmlns + "title",new XAttribute("lang","eng"), "Harry Potter"),
            new XElement(xmlns + "price", "29.99")
            ),
        new XElement(xmlns + "book",
            new XElement(xmlns + "title", new XAttribute("lang", "eng"), "Learning XML"),
            new XElement(xmlns + "price", "39.95")
            )
        );

Console.WriteLine(books.ToString());

//输出
// <bookstore xmlns="http://bookstore.com">
//   <book>
//     <title lang="eng">Harry Potter</title>
//     <price>29.99</price>
//   </book>
//   <book>
//     <title lang="eng">Learning XML</title>
//     <price>39.95</price>
//   </book>
// </bookstore>
```

:::
