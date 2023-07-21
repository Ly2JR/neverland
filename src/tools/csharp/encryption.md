---
title: 加密解密
date: 2023-06-19
dir.order: 6
order: 6
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
  - JAVA
---

## AES

### CBC加密

::: tabs

@tab csharp

``` cs
using System.Security.Cryptography;

/// <summary>
/// AES CBC 加密
/// </summary>
/// <param name="data">明文数据</param>
/// <param name="key">密码</param>
/// <param name="vector">偏移量</param>
/// <returns></returns>
public static byte[] AESEncrypt(string data, string key, string vector)
{
  if (string.IsNullOrEmpty(data)) return null;
  var toEncryptArray = Encoding.UTF8.GetBytes(data);//字符集UTF8
  RijndaelManaged rm = new RijndaelManaged
  {
    Key = Encoding.UTF8.GetBytes(key),//密码
    Mode = CipherMode.CBC,   //CBC加密模式
    Padding = PaddingMode.PKCS7,//填充
    IV=Encoding.UTF8.GetBytes(vector),//偏移量
  };
  ICryptoTransform cTransform = rm.CreateEncryptor();
  var resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);
  return resultArray;
}

/// <summary>
/// CBC解密
/// </summary>
/// <param name="encryptData">密文</param>
/// <param name="key">密钥</param>
/// <param name="vector">偏移量</param>
/// <returns></returns>
public static string AESDecrypt(byte[] encryptData, string key, string vector)
{
  if (encryptData==null) return null;
  RijndaelManaged rm = new RijndaelManaged
  {
    Key = Encoding.UTF8.GetBytes(key),
    Mode = CipherMode.CBC,
    Padding = PaddingMode.PKCS7,
    IV = Encoding.UTF8.GetBytes(vector),
  };
  ICryptoTransform cTransform = rm.CreateDecryptor();
  var resultArray = cTransform.TransformFinalBlock(encryptData, 0, encryptData.Length);
  return Encoding.UTF8.GetString(resultArray);
}
```

@tab java

``` java
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

/**
* 加密 128位
* @param content 需要加密的原内容
* @param pkey  密匙
* @return 返回二进制加密
*/
 public static byte[] aesEncrypt(String content, String pkey,String secretSalt) {
  try {
    SecretKeySpec skey = new SecretKeySpec(pkey.getBytes(), "AES");
    Cipher cipher = Cipher.getInstance("AES/CBC/PKCS7Padding");// "算法/加密/填充"
    IvParameterSpec iv = new IvParameterSpec(secretSalt.getBytes());
    cipher.init(Cipher.ENCRYPT_MODE, skey, iv);//初始化加密器
    
    byte[] encrypted = cipher.doFinal(content.getBytes("utf-8"));
    return encrypted; // 加密
  } catch (Exception e) {
    e.printStackTrace();
  }
  return null;
}

/**
* 解密 128位
* @param content 解密前的byte数组
* @param pkey  密匙
* @return result  解密后的byte数组
* @throws Exception 异常
*/
private static byte[] aesDecode(byte[] content,String pkey,String secretSalt) throws Exception {
  SecretKeySpec skey = new SecretKeySpec(pkey.getBytes(), "AES");
  IvParameterSpec iv = new IvParameterSpec(secretSalt.getBytes("UTF-8"));
  Cipher cipher = Cipher.getInstance("AES/CBC/PKCS7Padding");// 创建密码器
  cipher.init(Cipher.DECRYPT_MODE, skey, iv);// 初始化解密器
  byte[] result = cipher.doFinal(content);
  return result; // 解密
}
```

:::
