---
title: JWT
date: 2023-11-07
editLink: false
footer: false
isOriginal: true
category:
  - JWT
tag:
  - C#
---

基于.NET 7[最小API](https://learn.microsoft.com/zh-cn/aspnet/core/fundamentals/minimal-apis?view=aspnetcore-7.0)创建的一个JWT项目。

添加JwtBearer包`Microsoft.AspNetCore.Authentication.JwtBearer`

## 设置Jwt选项配置

在`appsettings.json`添加新节点

```json
...
"JwtOption":{
  "Secret":"ijurkbdlhmklqacwqzdxmkkhvqowlyqa",
  "Issuer":"ilyl.life",
  "Audience":"WebApi",
  "AccessExpiration":30,
}
```

新建`JwtOption`模型，映射配置选项

```cs
public class JwtOption
{
    /// <summary>
    /// 密钥 长度不少于16位
    /// </summary>
    public string Secret { get; set; }

    /// <summary>
    /// 发行人
    /// </summary>
    public string Issuer { get; set; }

    /// <summary>
    /// 观众
    /// </summary>
    public string Audience { get; set; }

    /// <summary>
    /// 访问过期
    /// </summary>
    public int AccessExpiration { get; set; }
}
```

在`Program.cs`中添加绑定

```cs
builder.Services.Configure<JwtOption>(builder.Configuration.GetSection(nameof(JwtOption)));
```

## 添加认证中间件

```cs
var jwtOption = builder.Configuration.GetSection(nameof(JwtOption)).Get<JwtOption>();
builder.Services.AddAuthentication(it =>
{
    it.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    it.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    it.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(it =>
{
    it.RequireHttpsMetadata = false;
    it.SaveToken = true;
    it.TokenValidationParameters = new TokenValidationParameters
    {
        IssuerSigningKey=new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtOption.Secret)),
        ValidIssuer=jwtOption.Issuer,
        ValidAudience=jwtOption.Audience,
        ValidateIssuer=true,
        ValidateAudience=true,
        ValidateLifetime=false,
        ValidateIssuerSigningKey = true,
    };
});
builder.Services.AddAuthorization();
builder.Services.AddEndpointsApiExplorer();
```

## 使用认证、授权

```cs
app.UseAuthentication();
app.UseAuthorization();
```

## 添加登录服务

用户登录账号和密码

```cs
 public class LoginInput
 {
     public string UserName { get; set; }

     public string Password { get; set; }
 }
```

用户信息

```cs
public class UserDto
{
    public string Id { get; set; }

    public string UserName { get; set; }

    public string Password { get; set; }

    public string Address { get; set; }

    public string Email { get; set; }

    public string Gender { get; set;}

    public string Wx { get; set; }
}
```

登录服务接口

```cs
 public interface IUserService
 {
     TokenResult<UserDto> GetUser(LoginInput input);
 }
```

登录服务

```cs
 public class UserService : IUserService
 {
     private readonly List<UserDto> _users;
     private readonly JwtOption _jwtOption;
     public UserService(IOptions<JwtOption> option)
     {
         _jwtOption = option.Value;
         _users=new List<UserDto>()
         {
             new UserDto()
             {
                 Id="1",UserName="A",Address="A1",Email="AAAAA@mail.cn",Gender="男",Password="A123456",Wx="AAA1111AAAA",
             },
             new UserDto()
             {
                 Id="2",UserName="B",Address="B1",Email="BBBBB@mail.cn",Gender="男",Password="B123456",Wx="BBB1111BBBB",
             },
             new UserDto()
             {
                 Id="3",UserName="C",Address="C1",Email="CCCCC@mail.cn",Gender="男",Password="C123456",Wx="CCC1111CCCC",
             }
         };
     }

     public TokenResult<UserDto> GetUser(LoginInput input)
     {
        ...     
     }
 }
```

实现`GetUser`方法

```cs
public TokenResult<UserDto> GetUser(LoginInput input)
{
    var result = new TokenResult<UserDto>();
    var user= _users.FirstOrDefault(it => it.UserName == input.UserName&&it.Password==input.Password);
    if (user == null) {
        result.ErrCode = 1;
        result.ErrMsg = "用户名或密码错误";
        return result;
    };
    result.Bearer = new TokenDto()
    {
        Expires = DateTime.UtcNow.AddMinutes(_jwtOption.AccessExpiration),
    };
    result.Data = user;
    
    var issuer = _jwtOption.Issuer;
    var audience = _jwtOption.Audience;
    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtOption.Secret));

    var jwtTokenHandler = new JwtSecurityTokenHandler();
    var key = Encoding.ASCII.GetBytes(_jwtOption.Secret);
    var tokenDescriptor = new SecurityTokenDescriptor()
    {
        Subject = new ClaimsIdentity(new[]
        {
            new Claim(ClaimTypes.NameIdentifier,user.Id),
            new Claim(ClaimTypes.Name,user.UserName),
            new Claim(ClaimTypes.Email,user.Email),
            new Claim(ClaimTypes.Gender,user.Gender),
            new Claim(ClaimTypes.StreetAddress,user.Address),
            new Claim("wx",user.Wx),
            new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())
        }),
        Expires = result.Bearer.Expires,
        Audience = audience,
        Issuer = issuer,
        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha512Signature)
    };
    var token = jwtTokenHandler.CreateToken(tokenDescriptor);
    var jwtToken = jwtTokenHandler.WriteToken(token);
    result.Bearer.Token = jwtToken;
    return result;
}
```

## 注入用户服务

```cs
builder.Services.AddScoped<IUserService, UserService>();
```

## 添加用户登录API

```cs
app.MapPost("/login", [AllowAnonymous] ([FromServices] IUserService srv, LoginInput input) =>
{
    var ret= srv.GetUser(input);
    return ret;
});
```

## 添加授权

```cs{1}
app.MapGet("/weatherforecast", [Authorize] () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
});
```

## 优化返回序列化

```cs
builder.Services.ConfigureHttpJsonOptions(options => {
    options.SerializerOptions.WriteIndented = true;
    options.SerializerOptions.IncludeFields = true;
    options.SerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
});
```

## 验证

![登录认证](https://image.ilyl.life:8443/dotnet/jwt1.gif)

![数据授权](https://image.ilyl.life:8443/dotnet/jwt2.gif)
