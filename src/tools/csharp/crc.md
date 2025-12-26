---
title: CRC计算
date: 2024-11-08
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
  - CRC
---

## CRC-16-Modbus

CRC-16-Modbus：多项式x16+x15+x5+1（0x8005），初始值0xFFFF，低位在前，高位在后，结果与0x0000异或

Modbus协议，通常通信协议形式如下

|地址|功能码|数据信息|校验码|
|:-|:-|:-|:-|
|`1`byte|`1`byte|`n`byte|`2`byte|

例如：01 03 04 01 02 03 04 5B 3C

地址：01
功能码：03
数据信息：04 01 02 03 04
校验码：5B 3C

### 计算方法

1. 预置1个16位的寄存器为十六进制FFFF（即全为1）；称此寄存器为CRC寄存器；
2. 把第一个8位二进制数据 （既通讯信息帧的第一个字节）与16位的CRC寄存器的低8位相异或，把结果放于CRC寄存器；
3. 把CRC寄存器的内容右移一 位（朝低位）用0填补最高位，并检查右移后的移出位；
4. 如果移出位为0：重复第3步（再次右移一位）;如果移出位为1：CRC寄存器与多项式A001（1010 0000 0000 0001）进行异或；(Modbus)
5. 重复步骤3和4，直到右移8次，这样整个8位数据全部进行了处理；
6. 重复步骤2到步骤5，进行通讯信息帧下一个字节的处理；
7. 将该通讯信息帧所有字节按上述步骤计算完成后，得到的16位CRC寄存器的高、低字节进行交换；
8. 最后得到的CRC寄存器内容即为：CRC码。

```cs
int Crc16Modbus(byte[] modbusdata,int length)
{
    int num = 65535;
    for (int i = 0; i < length; i++)
    {
        num ^= modbusdata[i];
        for (int j = 0; j < 8; j++)
        {
            num = (((num & 1) != 1) ? (num >> 1) : ((num >> 1) ^ 0xA001));
        }
    }
    return num;
}
```

测试验证

```cs
var modbusData = new byte[] { 0x01, 0x03, 0x04, 0x01, 0x02, 0x03, 0x04 };
var num = Crc16Modbus(modbusData, modbusData.Length);
var hexNum = num.ToString("X2");
var reHex = ((byte)num).ToString("X2") + " " + ((byte)(num >> 8)).ToString("X2");
Console.WriteLine(hexNum);
Console.WriteLine(reHex);
//output
//3C5B
//5B 3C
```
