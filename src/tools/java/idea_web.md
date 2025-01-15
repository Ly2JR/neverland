---
title: IDEA配置Web项目
date: 2024-12-04
category:
    - IDEA
isOriginal: true
editLink: false
footer: false
copy: true
---

## 查看版本

查看安装的IDEA版本，确定对应的SDK版本([查看版本](https://www.jetbrains.com/help/idea/supported-java-versions.html))

## 安装Tomcat

根据IDEA对应的SDK版本，安装相应的Tomact版本([查看版本](https://tomcat.apache.org/whichversion.html))

## 搭建步骤

例如：IDEA版本20.2，默认JAVA 11.0.16，最高支持JAVA 15，则Tomcat版本应该为Tomcat 10.1

1. 创建一个JAVA项目

![创建项目](https://nas.ilyl.life:8092/idea/web/project.png)

2. 点击`File`，选择`Project Structure`，点击`Modules`，点击`+`选择`Web`

![添加Web](https://nas.ilyl.life:8092/idea/web/add-web.jpg)

![Web项目](https://nas.ilyl.life:8092/idea/web/web-project.png)

3. 点击`web`右击新建`jsp`文件

![添加JSP](https://nas.ilyl.life:8092/idea/web/add-jsp.png)

4. 点击右上角`Add Configuration`，添加`Tomcat Server`选择`local`

![Tomcat](https://nas.ilyl.life:8092/idea/web/tomcat.jpg)

5. 点击`Configure`按钮，选择Tomcat文件夹路径

![Tomcat路径](https://nas.ilyl.life:8092/idea/web/tomcat-path.png)

6. 点击`Deployment`页签，点击`+`选择`Artifact`

7. 选择配置`Tomcat 10.1.33`，点击`Run`。

## 显示乱码问题

找到`apache-tomcat\config`目录，打开`logging.properties`文件，将`UTF-8`改为`GBK`，重启tomact即可。