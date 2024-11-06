---
title: 引用变量
date: 2023-06-01
editLink: false
footer: false
isOriginal: true
category:
  - C++
tag:
  - C++
---

类型`&`,将值类型改为引用类型。

```c++
int a = 123;
int& b = a;
b = 456;
cout <<"a:" << a <<" 引用b：" << b << endl;
a = 789;
cout << "a:" << a << " 引用b：" << b << endl;

//输出
a:456 引用b：456
a:789 引用b：789
```
