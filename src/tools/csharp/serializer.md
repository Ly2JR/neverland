---
title: 序列化和反序列化
date: 2025-11-05
editLink: false
footer: false
isOriginal: true
category:
  - 序列化
tag:
  - C#
---

序列化工具除了`Newtonsoft.Json`还有自带的`System.Text.Json`

## 序列化与反序列化

正常使用序列化与反序列化很简单，字符串转换为类型，或者类型转换为字符串。

```cs
var dog=new Dog() { Name = "旺财" };
var json = JsonSerializer.Serialize(dog);
Console.WriteLine("序列化字符串:{0}",json);
var newDog = JsonSerializer.Deserialize<Dog>(json);
Console.WriteLine("反序列化:{0}",newDog?.Name);

public class Dog
{
    public string Name { get; set; }
}

//output
//序列化字符串:{"Name":"\u65FA\u8D22"}
//反序列化:旺财
```

正常情况使用足够应付大部分情况，但是还有一些特殊情况需要处理。

## [序列化的多态](https://learn.microsoft.com/zh-cn/dotnet/standard/serialization/system-text-json/polymorphism)

当序列化涉及到继承类时，需要考虑到转换后也应该得到相应的信息。

```cs
Animal dog =new Dog() { Name = "旺财",Desc="黑色"};
var json = JsonSerializer.Serialize(dog);
Console.WriteLine("序列化字符串:{0}",json);
var newAnimal = JsonSerializer.Deserialize<Animal>(json);
Console.WriteLine("反序列化:{0}", newAnimal?.Name);
var newDog = JsonSerializer.Deserialize<Dog>(json);
Console.WriteLine("反序列化:{0}，{1}",newDog?.Name,newDog?.Desc);

public class Animal
{
    public string Name { get; set; }
}

public class Dog:Animal
{
    public string Desc { get; set; }
}
//output
//序列化字符串:{"Name":"\u65FA\u8D22"}
//反序列化:旺财
//反序列化:旺财，
```

发现当父类序列化时，丢失了部分信息，这不是想要的结果。

因此需要添加序列化选项

```cs
JsonSerializerOptions options = new JsonSerializerOptions
{
    TypeInfoResolver = new DefineJsonTypeInfoResolver(),
};
Animal dog = new Dog() { Name = "旺财", Desc = "黑色" };
var json = JsonSerializer.Serialize(dog, options);
Console.WriteLine("序列化字符串:{0}", json);
var newAnimal = JsonSerializer.Deserialize<Animal>(json);
Console.WriteLine("反序列化:{0}", newAnimal?.Name);
var newDog = JsonSerializer.Deserialize<Dog>(json);
Console.WriteLine("反序列化:{0}，{1}", newDog?.Name, newDog?.Desc);
if(newAnimal is Dog newDog1)
{
    Console.WriteLine("反序列化:{0}，{1}", newDog1?.Name, newDog1?.Desc);
}

class DefineJsonTypeInfoResolver : DefaultJsonTypeInfoResolver
{
    public override JsonTypeInfo GetTypeInfo(Type type, JsonSerializerOptions options)
    {
        JsonTypeInfo jsonTypeInfo = base.GetTypeInfo(type, options);

        Type basePointType = typeof(Animal);
        if (jsonTypeInfo.Type == basePointType)
        {
            jsonTypeInfo.PolymorphismOptions = new JsonPolymorphismOptions
            {
                IgnoreUnrecognizedTypeDiscriminators = true,
                UnknownDerivedTypeHandling = JsonUnknownDerivedTypeHandling.FailSerialization,
                DerivedTypes =
                    {
                        new JsonDerivedType(typeof(Dog)),
                    }
            };
        }
        return jsonTypeInfo;
    }
}
//output
//序列化字符串:{"Desc":"\u9ED1\u8272","Name":"\u65FA\u8D22"}
//反序列化:旺财
//反序列化:旺财，黑色
```
