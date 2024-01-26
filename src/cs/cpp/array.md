---
title: 数组
date: 2023-06-05
dir.order: 3
order: 3
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
int a[] = { 1,2,3,4 };
int* b = a;
int& c = a[0];
(&c)[1] = 4;
copy(a, a + 4, ostream_iterator<int>(cout," "));
cout << endl;
int* d = &a[2];
*(d+1) = 8;
copy(a, a + 4, ostream_iterator<int>(cout," "));
cout << endl;

//输出
1 4 3 4
1 4 6 8
```

通过即时窗体发现
1. 数组变量a本身是个指针， 数组变量a可以直接赋值给指针变量e
2. 数组变量a的指针为首地址，与变量a[0]的取地址一致。即数组a的值为a[0]的值
3. 引用变量b的值等于数组a对应的下标元素,取地址等于数组a对应的下标的存储地址
4. 数组是连续的地址，通过地址偏移获取值

```bash
a
0x0000000722b5f5c8 {1, 4, 3, 8}
    [0]: 1
    [1]: 4
    [2]: 3
    [3]: 8
*a
1
&a
0x0000000722b5f5c8 {1, 4, 3, 8}
    [0]: 1
    [1]: 4
    [2]: 3
    [3]: 8
&a[0]
0x0000000722b5f5c8 {1}
b
0x0000000722b5f5c8 {1}
*b
1
&b
0x0000000722b5f5f8 {0x0000000722b5f5c8 {1}}
c
1
&c
0x0000000722b5f5c8 {1}
*c
"*" 的操作数必须是指针，但它具有类型 "int"
d
0x0000000722b5f5d0 {3}
*d
3
&d
0x0000000722b5f638 {0x0000000722b5f5d0 {3}}
```