---
title: 进制转换
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
---

## 二进制

### 二进制转八进制

```cs
var zh = "1010";
var zhBinary = Convert.ToInt32(zh, 2);
var eight = Convert.ToString(zhBinary, 8);
Console.WriteLine($"二进制字符串:{zh},十进制值:{zhBinary},八进制字符串:{eight}");
//output
//二进制字符串:10101,十进制值:21,八进制字符串:25
```

### 二进制转十进制

```cs
var zh = "10101";
var zhBinary = Convert.ToInt32(zh, 2);
var ten = Convert.ToString(zhBinary, 10);
Console.WriteLine($"二进制字符串:{zh},十进制值:{zhBinary},十进制字符串:{ten}");
//output
//二进制字符串:10101,十进制值:21,十进制字符串:21
```

### 二进制转十六进制

```cs
var zh = "10101";
var zhBinary = Convert.ToInt32(zh, 2);
var hex= Convert.ToString(zhBinary, 16);
Console.WriteLine($"二进制字符串:{zh},十进制值:{zhBinary},十六进制字符串:{hex}");
//output
//二进制字符串:10101,十进制值:21,十六进制字符串:15
```

## 八进制

### 八进制转二进制

```cs
var zh = "10101";
var zhBinary = Convert.ToInt32(zh, 8);
var binary = Convert.ToString(zhBinary, 2);
Console.WriteLine($"八进制字符串:{zh},十进制值:{zhBinary},二进制字符串:{binary}");
//output
//八进制字符串:10101,十进制值:4161,二进制字符串:1000001000001
```

### 八进制转十进制

```cs
var zh = "10101";
var zhBinary = Convert.ToInt32(zh, 8);
var ten = Convert.ToString(zhBinary, 10);
Console.WriteLine($"八进制字符串:{zh},十进制值:{zhBinary},十进制字符串:{ten}");
//output
//八进制字符串:10101,十进制值:4161,十进制字符串:4161
```

### 八进制转十六进制

```cs
var zh = "10101";
var zhBinary = Convert.ToInt32(zh, 8);
var hex = Convert.ToString(zhBinary, 16);
Console.WriteLine($"八进制字符串:{zh},十进制值:{zhBinary},十六进制字符串:{hex}");
//output
//八进制字符串:10101,十进制值:4161,十六进制字符串:1041
```

## 十六进制

### 十六进制转二进制

```cs
var zh = "A1B2";
var zhBinary = Convert.ToInt32(zh, 16);
var binary = Convert.ToString(zhBinary, 2);
Console.WriteLine($"十六进制字符串:{zh},十进制值:{zhBinary},二进制字符串:{binary}");
//output
//十六进制字符串:A1B2,十进制值:41394,二进制字符串:1010000110110010
```

### 十六进制转八进制

```cs
var zh = "A1B2";
var zhBinary = Convert.ToInt32(zh, 16);
var eight = Convert.ToString(zhBinary, 8);
Console.WriteLine($"十六进制字符串:{zh},十进制值:{zhBinary},八进制字符串:{eight}");
//output
//十六进制字符串:A1B2,十进制值:41394,八进制字符串:120662
```

### 十六进制转十进制

```cs
var zh = "A1B2";
var zhBinary = Convert.ToInt32(zh, 16);
var ten = Convert.ToString(zhBinary, 10);
Console.WriteLine($"十六进制字符串:{zh},十进制值:{zhBinary},十进制字符串:{ten}");
//output
//十六进制字符串:A1B2,十进制值:41394,十进制字符串:41394
```

::: tabs
@tab csharp

``` cs
/// <summary>
/// 十六进制转十六进制字符串
/// </summary>
/// <param name="buf">十六进制</param>
/// <returns></returns>
public string parseByte2HexStr(byte[] buf)
{
  if (buf == null) return string.Empty;
  var sb = new StringBuilder();
  for (var i = 0; i < buf.Length; i++)
  {
    var hex = buf[i].ToString("X2");
    if (hex.Length == 1)
    {
      hex = "0" + hex;
    }
    sb.Append(hex.ToUpper());
  }
  return sb.ToString();
}

/// <summary>
/// 十六进制字符串转十六进制
/// </summary>
/// <param name="hexStr">十六进制字符串</param>
/// <returns></returns>
public byte[] parseHexStr2Byte(string hexStr)
{
  if (string.IsNullOrWhiteSpace(hexStr)) return null;
  var result = new byte[hexStr.Length / 2];
  for (var i = 0; i < hexStr.Length / 2; i++)
  {
    result[i] = Convert.ToByte(hexStr.Substring(i * 2, 2), 16);
  }
  return result;
}
```

@tab java

``` java
/**
* 将十六进制转换成十六进制
* @param buf 十六进制
* @return 转换后字符串
*/
public static String parseByte2HexStr(byte buf[]) {
  StringBuffer sb = new StringBuffer();
  for (int i = 0; i < buf.length; i++) {
    String hex = Integer.toHexString(buf[i] & 0xFF);
    if (hex.length() == 1) {
        hex = '0' + hex;
    }
    sb.append(hex.toUpperCase());
  }
  return sb.toString();
}

/**
* 将十六进制字符串转换为十六进制
* @param hexStr 加密文件
* @return 返回十六进制字符串
*/
private static byte[] parseHexStr2Byte(String hexStr) {
  if (hexStr.length() < 1) return null;
  byte[] result = new byte[hexStr.length() / 2];
  for (int i = 0; i < hexStr.length() / 2; i++) {
    int high = Integer.parseInt(hexStr.substring(i * 2, i * 2 + 1), 16);
    int low = Integer.parseInt(hexStr.substring(i * 2 + 1, i * 2 + 2), 16);
    result[i] = (byte) (high * 16 + low);
  }
  return result;
}
```

:::

## GB2312与十六进制

::: tabs
@tab GB2312与十六进制

``` cs
/// <summary>
/// GB2312汉字转十六进制字符串
/// </summary>
/// <param name="zhHans">汉字</param>
/// <returns></returns>
public string GetGB2312HexStr(string zhHans)
{
    Encoding encoding = Encoding.GetEncoding("GB2312");
    var bytes= encoding.GetBytes(zhHans);
    var sb=new StringBuilder(bytes.Length);
    foreach( var zh in bytes)
    {
        var hex= string.Format("{0:X}", zh);
        sb.Append(hex);
    }
    return sb.ToString();
}

/// <summary>
/// 十六进制字符串转二进制
/// </summary>
/// <param name="bytes">GB2312十六进制</param>
/// <returns></returns>
public string GetZhHans(byte[] bytes)
{
    // 获取GB2312编码页（表） 
    Encoding encoding = Encoding.GetEncoding("GB2312");
    return encoding.GetString(bytes, 0, bytes.Length);
}
```

:::