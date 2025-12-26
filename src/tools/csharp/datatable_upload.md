---
title: DataTable批量上传
date: 2024-11-06
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - C#
---

.NET开发离不开DataTable，有时需要对大量数据的DataTable进行上传，这时使用[SqlBulkCopy](https://learn.microsoft.com/zh-cn/dotnet/api/system.data.sqlclient.sqlbulkcopy?view=netframework-4.8.1)来实现

```cs
bool DataSubmit(DataTable sourceDt, string destinationString, string destinationTableName,bool bMapping,out string errMsg)
{
    errMsg=string.Empty;
    try
    {
        using (SqlConnection destinationConnection = new SqlConnection(destinationString))
        {
            destinationConnection.Open();
            using (SqlBulkCopy bulkCopy = new SqlBulkCopy(destinationString, SqlBulkCopyOptions.UseInternalTransaction | SqlBulkCopyOptions.CheckConstraints))
            {
                bulkCopy.DestinationTableName = destinationTableName;
                if (bMapping)
                {
                    for (var i = 0; i < sourceDt.Columns.Count; i++)
                    {
                        var sourceColName = sourceDt.Columns[i].ColumnName;
                        bulkCopy.ColumnMappings.Add(sourceColName,sourceColName);
                    }
                }
                //这里出错问题很多
                bulkCopy.WriteToServer(sourceDt); 
                return true;
            }
        }
     }
    catch (Exception ex)
    {
        errMsg=ex.Message;
    }
    return false;
}
```
