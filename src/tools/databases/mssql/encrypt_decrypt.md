---
title: SqlServer加密和解密
date: 2025-03-19
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - Sql Server
  - 加密解密
---

## 加密

常用[with encryption](https://learn.microsoft.com/zh-cn/sql/t-sql/statements/create-procedure-transact-sql?view=sql-server-ver16#encryption)加密，但是如文所说，可以通过`DAC`解密

加密示例：

```sql{2}
Create Proc P_Test
with encryption
as
    select 1
go
```

![Encryption](https://image.ilyl.life:8443/db/sp_encrypt_demo.png)

## 解密

### 进入DAC

1. 在`ssms`连接选项卡上，右击`连接\更改连接`
2. 在服务器名称内容前加上`admin:`，同时更改连接属性，输入要连接的数据库

### 解密脚本

```sql
IF  OBJECT_ID('sp_decrypt','p') IS NOT NULL
    DROP PROCEDURE sp_decrypt
GO

CREATE PROCEDURE sp_decrypt
(
  @procname sysname = NULL
)
AS
  DECLARE @encrypted        NVARCHAR(MAX)
  DECLARE @encryptedLength  INT
  DECLARE @tempStr          NVARCHAR(MAX)
  DECLARE @tempHead         NVARCHAR(MAX)
  DECLARE @tempBody         NVARCHAR(MAX)
  DECLARE @dummySp          NVARCHAR(MAX)
  DECLARE @dummyEncrypted   NVARCHAR(MAX)
  DECLARE @decryptedMessage NVARCHAR(MAX)
  DECLARE @cnt              INT
  DECLARE @decryptedChar    NCHAR(1)
  DECLARE @x                NVARCHAR(MAX)
  SET NOCOUNT ON

  SET @encrypted = (SELECT imageval FROM sys.sysobjvalues WHERE object_name(objid)=@procname)
  SET @encryptedLength=DATALENGTH(@encrypted) / 2

  SET @tempStr  = N'PROCEDURE ' + @procname + N' WITH ENCRYPTION AS'

  BEGIN TRAN
  SET @tempHead = N'ALTER ' + @tempStr
  SET @x=N'-'
  SET @tempBody = REPLICATE(@x,(@encryptedLength - LEN(@tempHead))) 
  EXEC(@tempHead + @tempBody)
  SET @dummyEncrypted = (SELECT imageval FROM sys.sysobjvalues WHERE object_name(objid)=@procname)
  ROLLBACK TRAN

  SET @dummySp =N'CREATE ' + @tempStr + @tempBody

  SET @decryptedMessage =''
  SET @cnt              = 1

  WHILE @cnt <> @encryptedLength
  BEGIN
  SET @decryptedChar =NCHAR(UNICODE(SUBSTRING(@encrypted,      @cnt, 1)) ^
                            UNICODE(SUBSTRING(@dummySp,        @cnt, 1)) ^
                            UNICODE(SUBSTRING(@dummyEncrypted, @cnt, 1)))
  SET @decryptedMessage = @decryptedMessage + ISNULL(@decryptedChar,N' ')
  SET @cnt = @cnt + 1
  END

  DECLARE @TextLength int
  DECLARE @BasePos    int
  DECLARE @CurrentPos int

  SET @BasePos   =1
  SET @CurrentPos=1
  SET @TextLength = DATALENGTH(@decryptedMessage) / 2 
  WHILE @CurrentPos != 0  
  BEGIN  
    SET @CurrentPos = CHARINDEX(nchar(13)+ nchar(10), @decryptedMessage,@BasePos) 
    IF @CurrentPos != 0  
    BEGIN  
      PRINT SUBSTRING(@decryptedMessage, @BasePos, @CurrentPos - @BasePos )
    END  
    ELSE  
    BEGIN  
      IF @BasePos <= @TextLength  
      BEGIN  
      PRINT SUBSTRING(@decryptedMessage, @BasePos, @TextLength - @BasePos)
      END
    END   
    SET @BasePos = @CurrentPos + 2
  END
GO
```

### 解密

```SQL
EXEC sp_decrypt 'p_test'
```

![Decrypt](https://image.ilyl.life:8443/db/sp_decrypt_demo.png)
