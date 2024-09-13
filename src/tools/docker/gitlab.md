---
title: GitLab
date: 2024-09-11
editLink: false
footer: false
isOriginal: true
category:
  - DOCKER
tag:
  - GitLab
---

群晖自带的Git Server没有可视化管理，因此通过docker部署[gitlab](https://about.gitlab.com/)实现代码管理

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

```