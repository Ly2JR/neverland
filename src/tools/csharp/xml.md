---
title: XML
date: 2023-06-19
dir.order: 98
order: 98
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - Xml
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

读取XML元素节点需要用到[XPath](https://www.w3.org/TR/1999/REC-xpath-19991116/),这里有[测试工具](https://extendsclass.com/xpath-tester.html)

::: tabs

@tab System.Xml.Linq

```cs
var filePath = "D:\\books.xml";

var xmlDoc = new XmlDocument();
xmlDoc.Load(filePath);

foreach (XmlElement item in xmlDoc.SelectNodes("//book/title"))
{
    Console.WriteLine(item.InnerText);
}

Console.ReadKey();
```

@tab System.Xml

```cs
var filePath = "D:\\books.xml";

var xDoc = XElement.Load(filePath);
foreach (var item in xDoc.Elements("book"))
{
    Console.WriteLine(item.Element("title").Value);
}

Console.ReadKey();
```

@tab System.Xml.Serialization

```cs
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
Console.ReadKey();

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
childTitle.SetAttribute("lang", "lng");
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

Console.ReadKey();

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
