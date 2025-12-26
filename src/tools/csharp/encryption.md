---
title: 加密解密
date: 2023-06-19
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
  - JAVA
---

## [AES](https://learn.microsoft.com/zh-cn/dotnet/api/system.security.cryptography.aes?view=net-8.0)

```cs
using System.Security.Cryptography;
using System.Text;
using System.Text.Unicode;

string original = "Here is some data to encrypt!";
string key = "acsesexs2mjsxg3d98sjrtzdw469sjv";
byte[] v =
           {
                0x12, 0x34, 0x56, 0x78, 0x90, 
                0xAB, 0xCD, 0xEF, 0x12, 0x34, 
                0x56, 0x78, 0x90, 0xAB, 0xCD,
                0xEF
            };
// Create a new instance of the Aes
// class.  This generates a new key and initialization
// vector (IV).
using (Aes myAes = Aes.Create())
{
    myAes.Key=UTF8Encoding.UTF8.GetBytes(key);
    myAes.IV = v;
    // Encrypt the string to an array of bytes.
    byte[] encrypted = EncryptStringToBytes_Aes(original, myAes.Key, myAes.IV);
    // Decrypt the bytes to a string.
    string roundtrip = DecryptStringFromBytes_Aes(encrypted, myAes.Key, myAes.IV);

    //Display the original data and the decrypted data.
    Console.WriteLine("Original:   {0}", original);
    Console.WriteLine("Encrypt:   {0}", Convert.ToBase64String(encrypted));
    Console.WriteLine("Round Trip: {0}", roundtrip);
}

static byte[] EncryptStringToBytes_Aes(string plainText, byte[] Key, byte[] IV)
{
    // Check arguments.
    if (plainText == null || plainText.Length <= 0)
        throw new ArgumentNullException("plainText");
    if (Key == null || Key.Length <= 0)
        throw new ArgumentNullException("Key");
    if (IV == null || IV.Length <= 0)
        throw new ArgumentNullException("IV");
    byte[] encrypted;

    // Create an Aes object
    // with the specified key and IV.
    using (Aes aesAlg = Aes.Create())
    {
        aesAlg.Key = Key;
        aesAlg.IV = IV;
        // Create an encryptor to perform the stream transform.
        ICryptoTransform encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);
        // Create the streams used for encryption.
        using (MemoryStream msEncrypt = new MemoryStream())
        {
            using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
            {
                using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
                {
                    //Write all data to the stream.
                    swEncrypt.Write(plainText);
                }
                encrypted = msEncrypt.ToArray();
            }
        }
    }
    // Return the encrypted bytes from the memory stream.
    return encrypted;
}

static string DecryptStringFromBytes_Aes(byte[] cipherText, byte[] Key, byte[] IV)
{
    // Check arguments.
    if (cipherText == null || cipherText.Length <= 0)
        throw new ArgumentNullException("cipherText");
    if (Key == null || Key.Length <= 0)
        throw new ArgumentNullException("Key");
    if (IV == null || IV.Length <= 0)
        throw new ArgumentNullException("IV");

    // Declare the string used to hold
    // the decrypted text.
    string plaintext = null;

    // Create an Aes object
    // with the specified key and IV.
    using (Aes aesAlg = Aes.Create())
    {
        aesAlg.Key = Key;
        aesAlg.IV = IV;
        // Create a decryptor to perform the stream transform.
        ICryptoTransform decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);
        // Create the streams used for decryption.
        using (MemoryStream msDecrypt = new MemoryStream(cipherText))
        {
            using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
            {
                using (StreamReader srDecrypt = new StreamReader(csDecrypt))
                {
                    // Read the decrypted bytes from the decrypting stream
                    // and place them in a string.
                    plaintext = srDecrypt.ReadToEnd();
                }
            }
        }
    }
    return plaintext;
}
```

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

## [MD5](https://learn.microsoft.com/zh-cn/dotnet/api/system.security.cryptography.md5?view=net-8.0)

```cs
static string Encrypt(string plainText)
{
    string hash;
    using (MD5 md5Hash = MD5.Create())
    {
        hash = GetMd5Hash(md5Hash, plainText);
    }
    return hash;
}

static string GetMd5Hash(MD5 md5Hash, string input)
{
    // Convert the input string to a byte array and compute the hash.
    var data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(input));
    // Create a new Stringbuilder to collect the bytes
    // and create a string.
    var sBuilder = new StringBuilder();
    // Loop through each byte of the hashed data 
    // and format each one as a hexadecimal string.
    for (int i = 0; i < data.Length; i++)
    {
        sBuilder.Append(data[i].ToString("x2"));
    }
    // Return the hexadecimal string.
    return sBuilder.ToString();
}
```
