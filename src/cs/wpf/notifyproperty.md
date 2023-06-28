---
title: 属性通知
date: 2023-06-28
editLink: false
footer: false
isOriginal: true
category:
  - C#
tag:
  - WPF
  - INotifyPropertyChanged
  - CallerMemberName
---

WPF的VM中常用到[INotifyPropertyChanged](https://learn.microsoft.com/zh-cn/dotnet/api/system.componentmodel.inotifypropertychanged?view=net-7.0)接口，来通知属性变更，但需要填写具体属性名。

这里有个编译器解释属性[CallerMemberName](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/attributes/caller-information)可以简化这部分工作量。

简化前：

``` cs
public class Dto : INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler? PropertyChanged;

        private string _name = "";
        public string Name
        {
            get { return _name; }
            set { _name = value; OnPropertyChanged(nameof(Name)); }
        }

        private void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
```

简化后：

```cs {9,12}
public class Dto : INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler? PropertyChanged;

        private string _name = "";
        public string Name
        {
            get { return _name; }
            set { _name = value; OnPropertyChanged(); }
        }

        private void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
```
