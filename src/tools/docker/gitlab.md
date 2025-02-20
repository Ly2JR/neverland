---
title: Docker部署GitLab
date: 2024-09-11
editLink: false
footer: false
isOriginal: true
category:
  - Docker
tag:
  - GitLab
---

群晖自带的Git Server没有可视化管理，因此通过docker部署[gitlab](https://about.gitlab.com/)实现代码管理

::: tip
相关问题参考[git命令](../github/command.md)
:::

## Docker Desktop

Docker Desktop 在Docker Hub里搜索`gitlab/gitlab-ce:latest`拉取即可

![Gitlab](https://nas.ilyl.life:8092/gitlab/docker-desktop-gitlab.png)

映射80端口即可，例如:8888

![Gitlab](https://nas.ilyl.life:8092/gitlab/docker-desktop-gitlab-container.png)

浏览器输入`http://localhost:8888`即可现在gitlab管理页面

如果浏览器不显示，等待片刻或者重启等待即可。

![登陆界面](https://nas.ilyl.life:8092/gitlab/gitlab-ui-login.png)

### 查看版本

```bash
gitlab-rake gitlab:env:info
```

### 账户密码

默认账户`root`，

密码在`/etc/gitlab/initial_root_password`里

![默认密码](https://nas.ilyl.life:8092/gitlab/gitlab-root-password.png)

如果登陆失败，可以[重置密码](https://docs.gitlab.com/ee/security/reset_user_password.html)

### 重置密码

```bash
gitlab-rake "gitlab:password:reset[root]"
```
![重置密码](https://nas.ilyl.life:8092/gitlab/gitlab-reset-password.png)

### 设置中文

登陆成功后，显示的是英文，可以设置成中文

![英文界面](https://nas.ilyl.life:8092/gitlab/gitlab-ui.png)

点击头像，选择`Preferences`

![偏好](https://nas.ilyl.life:8092/gitlab/gitlab-setting.png)

下拉找到`Language`

![语言选择](https://nas.ilyl.life:8092/gitlab/gitlab-set-chinese.png)

保存后刷新即可。

![中文界面](https://nas.ilyl.life:8092/gitlab/gitlab-ui-zh-hans.png)

### 克隆仓库

在Gitlab创建仓库之后，http只能拉取`公开`的项目，使用VS进行项目克隆，创建项目，在提交，一切正常。

![仓库](https://nas.ilyl.life:8092/gitlab/gitlab-repo.png)

## docker compose

```yml
services:
  gitlab:
    container_name: GITLAB
    image: 'gitlab/gitlab-ce:17.8.1-ce.0'
    restart: always
    hostname: '127.0.0.1'
    environment:
      TZ: Asia/Beijing
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'https://127.0.0.1:8888'
        nginx['enable']=true
        nginx['client_max_body_size']='1024m'
        nginx['redirect_http_to_https']=true
        nginx['ssl_certificate']='/etc/gitlab/ssl/domain_public.crt'
        nginx['ssl_certificate_key']='/etc/gitlab/ssl/domain.key'
        gitlab_rails['smtp_enable'] = true
        gitlab_rails['smtp_address'] = 'smtp.XXX.XXX'
        gitlab_rails['smtp_port'] = 465
        gitlab_rails['smtp_user_name'] = 'XXX'
        gitlab_rails['smtp_password'] = 'XXX'
        gitlab_rails['smtp_authentication'] = 'login'
        gitlab_rails['smtp_tls'] = true
        gitlab_rails['gitlab_email_from'] = 'XXX'
        gitlab_rails['time_zone']='Beijing'
        gitlab_rails['backup_path']='/var/opt/gitlab/backups'
        gitlab_rails['backup_keep_time']=604800
        gitlab_rails['backup_pg_schema']='public'
        gitlab_rails['backup_archive_permissions']=0644
        letsencrypt['enable'] = false
        letsencrypt['auto_renew'] = false
    ports:
      - '8888:8888'
    volumes:
      - X:/Gitlab/data:/var/opt/gitlab
      - X:/Gitlab/config:/etc/gitlab
      - X:/Gitlab/log:/var/log/gitlab
```

另存为`docoer-compose.yml`，`cmd`当前目录，运行`docker compose -p gitlab up -d`

### 重置密码

```bash
gitlab-rails console
u=User.where(id:1).first
u.passwird='newpassword'
u.password_confirmation='newpassword'
u.save!
```

### [重置默认邮箱](https://support.gitlab.com/hc/en-us/articles/16784431039132-How-to-update-the-Primary-email-address-of-multiple-users-LDAP-and-SAML)

通过`gitlab-rails`更改

```bash
gitlab-rails console
u=User.where(id:1).first
u.email #查看邮箱
u.email='your@domain.com'
u.save!
```

如果不生效，进入管理员，在管理区域，用户，编辑用户信息。

### 配置群晖邮箱

以群晖邮件SSL配置示例，更多[邮箱配置](https://docs.gitlab.com/omnibus/settings/smtp.html)参考，群晖邮箱搭建[参考](../nas/email.md)

```yml
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.example.com"
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "smtp_user_name"
gitlab_rails['smtp_password'] = "smtp_user_password"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_domain'] = "example.com"
gitlab_rails['smtp_enable_starttls_auto'] = false
gitlab_rails['smtp_tls'] = true
gitlab_rails['gitlab_email_from'] = 'your.email@example.com'
gitlab_rails['smtp_ca_path'] = "/etc/ssl/certs"
gitlab_rails['smtp_ca_file'] = "/etc/ssl/certs/example.com.crt"
```

如果一直提示`certificate verify failed (hostname mismatch)`检查证书`smtp_ca_file`和smtp域名`smtp_domain`

```bash
openssl s_client -connect smtp.example.com:465 -servername smtp.example.com -showcerts
```

检查`subject=CN=domain.com`,`CN=`后面的配置为`smtp_address`即可。

#### [测试邮箱](https://docs.gitlab.com/omnibus/settings/smtp.html#testing-the-smtp-configuration)

1. 进入gitlab-rails控制台

```bash
gitlab-rails console
```

2. 查看邮箱配置

```bash
ActionMailer::Base.smtp_settings
```

3. 发送测试邮件

```bash
Notify.test_email('youremail@email.com', 'Hello World', 'This is a test message').deliver_now
```

### 备份

::: warning
优先备份`gitlab.rb`和`gitlab-secrets.json`两个文件
:::

进入容器bash

```bash
gitlab-rake gitlab:backup:create
```

#### 定时备份

使用`crontab`格式进行定时备份

格式:
```bash
m h dom mon dow user command
```
- m： 表示分钟，可以是从0到59之间的任何整数。
- h：表示小时，可以是从0到23之间的任何整数。
- dom：表示日期，可以是从1到31之间的任何整数。
- mon：表示月份，可以是从1到12之间的任何整数。
- dow：表示星期几，可以是从0到7之间的任何整数，这里的0或7代表星期日。
- user : 表示执行的用户。
- command：要执行的命令，可以是系统命令，也可以是自己编写的脚本文件(如shell文件)。

```bash
0 2 * * * gitlab-rake gitlab:backup:create CRON=1
```
