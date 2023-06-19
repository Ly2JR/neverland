---
title: 进制转换
date: 2023-06-19
dir.order: 1
order: 1
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - 进制转换
---

## 二进制与十六进制

::: tabs
@tab csharp

``` cs
/// <summary>
/// 二进制转十六进制字符串
/// </summary>
/// <param name="buf">二进制</param>
/// <returns></returns>
public static string parseByte2HexStr(byte[] buf)
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
/// 十六进制字符串转二进制
/// </summary>
/// <param name="hexStr">十六进制字符串</param>
/// <returns></returns>
public static byte[] parseHexStr2Byte(string hexStr)
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
* 将二进制转换成16进制
* @param buf 二进制
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
* 将16进制转换为二进制
* @param hexStr 加密文件
* @return 返回二进制字符串
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
