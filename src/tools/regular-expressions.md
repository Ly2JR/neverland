---
title: 正则表达式
date: 2023-06-19
icon: material-symbols:regular-expression
dir.order: 1
order: 1
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag:
  - 正则表达式
---

## 快速参考

|用法|匹配内容|
|:-|:-|
|a\|b|匹配a或b|
|gr(a\|e)y|匹配gray或grey|
|.|匹配任一字符|
|[abc]|匹配任意字符:a或b或c|
|[^abc]|匹配任一字符,但不包括a,b,c|
|a-z|匹配从a到z之间的任一字符|
|a-zA-Z|匹配从a到z,及A到Z之间的任一字符|
|^|匹配文件名的头部|
|$|匹配文件名的尾部|
|()|匹配标记的子表达式|
|\n|匹配第nth个标记的子表达式,nth代表1到9|
|\b|匹配字词边界|
|*|匹配前一项内容0或多次|
|?|匹配前一项内容0或1次|
|+|匹配前一项内容1或多次|
|*?|匹配前一项内容0或多次(懒人模式)|
|+?|匹配前一项内容1或多次(懒人模式)|
|{x}|匹配前一项内容x次|
|{x,}|匹配前一项内容x或多次|
|{x,y}|匹配前一项内容次数介于x和y之间|
|\\ |特殊转义字符|

[更多](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/regular-expression-language-quick-reference)
