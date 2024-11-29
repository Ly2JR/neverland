---
title: 解压缩DataSet
date: 2024-11-06
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
---

在使用DataSet进行数据传输时，可以对DataSet进行压缩提高传输效果

原理就是对DataSet进行序列化，然后对序列化后的数据进行压缩

压缩所需算法，这里使用[GZipStream](https://learn.microsoft.com/zh-cn/dotnet/api/system.io.compression.gzipstream?view=net-8.0)进行压缩，[DataSet.WriteXml](https://learn.microsoft.com/zh-cn/dotnet/api/system.data.dataset.writexml?view=net-8.0)输出XML，[DataSet.ReadXml](https://learn.microsoft.com/zh-cn/dotnet/api/system.data.dataset.readxml?view=net-8.0)读取XML

## 模拟DataSet

```cs
var dataSet = new DataSet("tableSet");
var dataTable1 = new DataTable("table1");
dataTable1.Columns.Add("a",typeof(int));
dataTable1.Columns.Add ("b",typeof(string));
var r1 = dataTable1.NewRow();
r1[0] = 1;
r1[1] = "a";
dataTable1.Rows.Add(r1);
var dataTable2 = new DataTable("table2");
dataTable2.Columns.Add("c", typeof(string));
dataTable2.Columns.Add("d", typeof(int));
var r2 = dataTable2.NewRow();
r2[0] = "a1";
r2[1] = 3;
dataTable2.Rows.Add(r2);
dataSet.Tables.Add(dataTable1);
dataSet.Tables.Add(dataTable2);
```

## 输出DataSet序列化

```cs
DataSet.WriteXml("XXX", XmlWriteMode.WriteSchema);
```

```xml
<?xml version="1.0" standalone="yes"?>
<tableSet>
  <xs:schema id="tableSet" xmlns="" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:msdata="urn:schemas-microsoft-com:xml-msdata">
    <xs:element name="tableSet" msdata:IsDataSet="true" msdata:UseCurrentLocale="true">
      <xs:complexType>
        <xs:choice minOccurs="0" maxOccurs="unbounded">
          <xs:element name="table1">
            <xs:complexType>
              <xs:sequence>
                <xs:element name="a" type="xs:int" minOccurs="0" />
                <xs:element name="b" type="xs:string" minOccurs="0" />
              </xs:sequence>
            </xs:complexType>
          </xs:element>
          <xs:element name="table2">
            <xs:complexType>
              <xs:sequence>
                <xs:element name="c" type="xs:string" minOccurs="0" />
                <xs:element name="d" type="xs:int" minOccurs="0" />
              </xs:sequence>
            </xs:complexType>
          </xs:element>
        </xs:choice>
      </xs:complexType>
    </xs:element>
  </xs:schema>
  <table1>
    <a>1</a>
    <b>a</b>
  </table1>
  <table2>
    <c>a1</c>
    <d>3</d>
  </table2>
</tableSet>
```

## GZip二进制压缩

```cs
byte[] CompressBase(byte[] data)
{
    using (MemoryStream ms = new MemoryStream())
    {
        byte[] buffer = null;
        using (GZipStream zipStream = new GZipStream(ms, CompressionMode.Compress, true))
        {
            zipStream.Write(data, 0, data.Length);
            zipStream.Close();
            buffer = new byte[ms.Length];
            ms.Position = 0;
            ms.Read(buffer, 0, buffer.Length);
            ms.Close();
        }
        return buffer;
    }
}
```

## GZip二进制解压

```cs
byte[] DeCompressBase(byte[] data)
{
    using (MemoryStream ms = new MemoryStream(data))
    {
        byte[] buffer = new byte[0x1000];
        using (GZipStream zipStream = new GZipStream(ms, CompressionMode.Decompress, true))
        {
            MemoryStream msReader = new MemoryStream();
            while (true)
            {
                var reader = zipStream.Read(buffer, 0, buffer.Length);
                if (reader <= 0) break;
                msReader.Write(buffer, 0, reader);
            }
            zipStream.Close();
            ms.Close();
            msReader.Position = 0;
            buffer = msReader.ToArray();
            msReader.Close();
            return buffer;
        }
    }
}
```

## DataSet转换二进制

```cs
byte[] Compress(DataSet value)
{
    byte[] bufferDs = null;
    using (MemoryStream ms = new MemoryStream())
    {
        value.WriteXml(ms, XmlWriteMode.WriteSchema);
        bufferDs = ms.ToArray();
        ms.Flush();
    }
    return CompressBase(bufferDs);
}
```

## 二进制转换DataSet

```cs
DataSet DeCompress(byte[] value)
{
    var affter = DeCompressBase(value);
    using (MemoryStream ms = new MemoryStream())
    {
        ms.Write(affter, 0, affter.Length);
        ms.Position = 0;
        var ds = new DataSet();
        ds.ReadXml(ms,XmlReadMode.ReadSchema);
        ds.AcceptChanges();
        return ds;
    }
}
```