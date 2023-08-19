---
title: MYSQL
date: 2023-06-19
dir.order: 1
order: 1
editLink: false
footer: false
isOriginal: true
category:
  - 工具箱
tag: 
  - MYSQL
---

## 表

```sql
create table tb_student
(
    studentNo int not null,
    studentName char(5) not null,
    studentSex char(1) not null,
    studentAge int not null,
    classNo char(5) not null,
)

create table tb_score
(
    studentNo int null,
    className char(5) not null,
    score int,
)
```

## 索引

```sql
CREATE INDEX index_customers
ON mysql_test.customers(cust_name(3) asc);
```

### 创建组合索引

```sql
create index index_cust
on mysql_test.customers(cust_id,cust_name);
```

### 在创建表的时候创建索引

```sql
create table seller
(
    seller_id int not null auto_increment,
    seller_name char(50) not null,
    seller_address char(50) null,
    seller_contact char(50) null,
    product_type int(5) not null,
    sales int  null,
    primary key(seller_id,product_type),
    index index_selller(sales)
);
```

### 修改表的时候添加索引

```sql
alter table mysql_test.customers
add index index_seller_name(seller_name);
```

### 查看索引

```sql
show index from mysql_test.customers
```

### 删除索引

```sql
drop index index_cust on mysql_test.customers
alter table mysql_test.customers drop index index_customers;
```

## 数据

```sql
insert into mysql_test.customers values(901,'张三','F','北京市','朝阳区');
insert into mysql_test.customers values(0,'李四',default,'武汉市',null);
insert into mysql_test.customers(cust_id,cust_name,cust_sex,cust_address,cust_contact) values(0,'李四',default,'武汉市',null);
insert into mysql_test.customers set cust_name='李四',cust_address='武汉市',cust_sex=default;
```

### 删除数据

```sql
delete from mysql_test.customers where cust_name='王五';
```

### 更新数据

```sql
update mysql_test.customers set cust_address='武汉市' where cust_name='张三';
```

## 查询

```sql
select cust_name,cust_sex,cust_address from mysql_test.customers;
select * from mysql_test.customers;
```

### 查询表使用列别名

```sql
select cust_name ,cust_address as 地址 from mysql_test.customers;
```

### case when then

```sql
select cust_name,case when cust_sex='M' then '男' else '女' end as 性别 from mysql_test.customers;
```

### 计算列

```sql
select cust_name,cust_sex,cust_id +100 as id from mysql_test.customers;
```

### 交叉连接 笛卡儿积 cross join

```sql
select * from mysql_test.customers cross join mysql_test.seller;
select * from mysql_test.customers,mysql_test.seller;
```

### 内连接 inner join

```sql
select * from mysql_test.tb_student inner join mysql_test.tb_score on tb_student.studentNo=tb_score.studentNo;
```

### 左外连接 left join

```sql
select * from mysql_test.tb_student left join mysql_test.tb_score on tb_student.studentNo=tb_score.studentNo;
```

### 右外连接 right join

```sql
select * from mysql_test.tb_student right join mysql_test.tb_score on tb_student.studentNo=tb_score.studentNo;
```

### Where 过滤

```sql
select * from mysql_test.customers where cust_sex='M';
```

### between and

```sql
select * from mysql_test.customers where cust_id BETWEEN 903 and 912;
```

### in

```sql
select * from mysql_test.customers where cust_id in (903,906,908); 
```

### is null

```sql
select * from mysql_test.customers where cust_contact is null;
```

### 子查询 in

```sql
select studentNo,studentName from tb_student where studentNo in (select studentNo from tb_score where score >80);
```

### group by

```sql
select cust_address,cust_sex,count(1) as '人数' from mysql_test.customers group by cust_address,cust_sex;
select cust_address,cust_sex,count(1) as '人数' from mysql_test.customers group by cust_address,cust_sex with rollup;
```

### having

```sql
select cust_address,cust_name,count(1) as num from mysql_test.customers group by cust_address,cust_name having count(1)<=3;
```

### order by

```sql
select cust_name,cust_sex from mysql_test.customers order by cust_name desc,cust_address desc;
```

### limit

```sql
select  * from mysql_test.customers order by cust_id limit 2,1;
select * from mysql_test.customers order by cust_id limit 1 offset 2;
```

## 视图

```sql
create or replace view mysql_test.customers_view
as 
    select * from mysql_test.customers where cust_sex='M' with check option;
```

### 删除视图

```sql
drop view  if exists mysql_test.customers_view;
```

### 修改视图

```sql
 alter view mysql_test.customers_view
 as 
    select * from mysql_test.customers where cust_sex='F' with check option;
```

### 查看视图定义

```sql
show create view mysql_test.customers_view
```

### 更新视图

- 对where 条件成立并且只有一个基本表

```sql
insert into mysql_test.customers_view values(909,'周明','F','武汉市','洪山区');
```

- 修改视图 只改变一个基本表

```sql
update mysql_test.customers_view set cust_address='上海市';
```

- 删除视图 只能有一个基本表

```sql
delete from mysql_test.customers_view where cust_name='周明';
```

- 查询视图

```sql
select cust_name,cust_address from mysql_test.customers_view where cust_id =905;
```

## 存储过程

### 创建存储过程

```sql
DELIMITER $$
create procedure sp_update_sex(in cid int,in ces char(1))
begin
    update mysql_test.customers set cust_sex=ces where cust_id=cid;
end $$
DELIMITER ;
```

### 声明变量

```sql
declare cid int(10);
```

### 变量赋值

```sql
set cid=910;
```

### 流程控制语句

```sql
if then else 
case     
```

### 循环语句

```sql
while repeat loop 
```

iterate 用在 while loop repeat 退出当前循环

### 游标

声明游标 declare cursor_name cursour for select_statement
打开游标 open cursor_name
读取数据 fetch cursor_name into var_name[,var_name]....
关闭游标 close cursor_name

```sql
DELIMITER $$
CREATE PROCEDURE sp_sumofrow(OUT R INT)
begin
    declare cid int;
 declare found BOOLEAN  default true;
    declare cur_cid cursor for select cust_id from mysql_test.customers;
    declare continue handler for not found set found=false;
    set R=0;
    open cur_cid;
    fetch cur_cid into cid;
    while found do
        set R=R+1;
        fetch cur_cid into cid;
    end while;
    close cur_cid;
end $$
DELIMITER ;

call sp_sumofrow(@rows);
select @rows;

call sp_update_sex(904,'M');
select * from mysql_test.customers;
```

### 删除存储过程

```sql
drop procedure if exists sp_update_sex;
```

### 存储函数

```sql
delimiter $$
create function fn_search(cid int)
returns char(2)
DETERMINISTIC
begin
    declare sex char(2);
    select cust_sex into sex from mysql_test.customers where cust_id=cid;
    if sex is null then
        return (select '没有该客户');
    else if sex='F' then
            return (select '女');
        else
            return (select '男');
        end if;
    end if;
end $$
```

### 调用存储函数

```sql
select fn_search(904);
```

### 删除存储函数

```sql
drop function if exists fn_search;
```

## 触发器

数据模拟脚本

```sql
delimiter $$
create procedure sp_update_content(in uname char(50),in newemial char(50))
begin
    update db_test.content set email=newemial where username=uname;
end $$

call sp_update_content('MySQL初学者','982474256@qq.com')
select * from db_test.content;

use mysql_test;
create table irders
(
    order_id int not null auto_increment,
    order_prodcut char(50) not null,
    order_product_type char(50) not null,
    cust_id int not null,
    order_date datetime not null,
    order_price double not null,
    order_amount int not null,
    primary key(order_id),
    foreign key(cust_id)
        references customers(cust_id)
        on delete restrict
        on update restrict
);
```

### 创建触发器

```sql
use mysql_test;
create trigger mysql_test.customers_insert_trigger after insert
on mysql_test.customers for each row set @str='one customers added!';

insert into mysql_test.customers values(null,'万华','F','长沙市','芙蓉区');
select @str;
```

### 删除触发器

```sql
drop trigger if exists mysql_test.customers_insert_trigger;
```

创建触发器  insert 用new 虚拟表,delete 用OLD 虚拟表，UPDATE 用OLD虚拟表之前的数据，NEW 虚拟表更新的值

```sql
create trigger mysql_test.customers_insert_trigger after insert 
on mysql_test.customers for each row set @str=new.cust_id;

insert into mysql_test.customers values(null,'曾伟','F','长沙','芙蓉区');
select @str;

create trigger mysql_test.customers_update_trigger before update on mysql_test.customers for each row
set new.cust_address=old.cust_contact;

update mysql_test.customers set cust_address='武汉市' where cust_name='曾伟';

select * from mysql_test.customers where cust_name='曾伟';
```

## 用户

### 查看用户

```sql
select * from mysql.user ;

select password(str) 已过时
select  md5(456);
```

### 添加用户

```sql
create user 'zhangsan'@'localhost' identified by '123',
                        'lisi'@'localhost' identified by '250cf8b51c773f3f8dc8b4be867a9a02';
```

### 删除用户

```sql
drop user lisi@localhost;
```

### 修改用户

```sql
rename user 'zhangsan'@'localhost' to 'wangwu'@'localhost';
```

### 修改用户口令

```sql
select md5('hello')
set password for 'wangwu'@'localhost' ='5d41402abc4b2a76b9719d911017c592';
```

### 查看用户权限

```sql
show grants for 'wangwu'@'localhost';
```

### 分配权限

```sql
grant select(cust_id,cust_name)
on mysql_test.customers
to 'zhangsan'@'localhost';
```

### 分配用户及权限(已过时),用户和权限分开不在合并一起

```sql
grant select,update on mysql_test.customers
to 'liming'@'localhost' identified by '123',
'huang'@'localhost' identified by '789';
```

### 分配用户执行所有数据库操作

```sql
grant all on mysql_test.* to 'wangwu'@'localhost';
```

### 分配用户创建用户权限

```sql
grant create user on *.* to 'wangwu'@'localhost';
```

### 授予表权限时,语法项“priv_type” 可以指定维以下值

SELECT:
INSERT:
DELETE:
UPDATE:
REFERENCES:
CREATE:
ALTER:
INDEX:
DROP:
ALL或ALL PRIVILEGES

授予列权限时，语法项"priv_type"的值只能指定为SELECT、INSERT、UPDATE
授予数据库权限时,语法项"priv_type"的值指定为以下值
SELECT:
INSERT:
DELETE:
UPDATE:
REFERENCES:
CREATE:
ALTER:
INDEX:
DROP:
CREATE TEMPORARY TABLES:
CREATE VIEW:
SHOW VIEW:
CREATE ROUTINE:
ALTER ROUTINE:
EXECUTE ROUTINE:
LOCK TABLES:
ALL 或 ALL PRIVILEGES:

CREATE USER:
SHOW DATABASES:

### 对用户授权并且可以将自身的权限授予其他用户

```sql
GRANT SELECT,UPDATE ON mysql_test.customers
TO 'ZHOU'@'LOCALHOST' IDENTIFIED BY '123'
WITH GRANT OPTION;
```

### 权限撤销

撤销特定用户所有权限

```sql
revoke all privileges,grant option from 'wangwu'@'localhost';
```

### 撤销SELECT权限

```sql
revoke select on mysql_test.customers from 'zhou'@'localhost';
```

## 备份

值之间用逗号分隔
如果是字符则用双引号
用？号结束标志

```sql
lock tables mysql_test.customers read ;
select * from mysql_test.customers
into OUTFILE 'C:\\backup\\backupfile.txt'
FIELDS terminated by ',' 
optionally enclosed by '"' 
lines terminated by '?'; 

SHOW VARIABLES LIKE "secure_file_priv";
```

## 恢复

```sql
create table mysql_test.customers_copy select * from mysql_test.customers where 1=2;

lock tables mysql_test.customers_copy write;
load data infile 'c:/backup/backupfile.txt'
into table mysql_test.customers_copy
fields terminated by ','
optionally enclosed by '"'
lines terminated by '?';

unlock tables;
```

## 示例

- 示例一

```sql
--创建数据库
create database db_test;

--使用数据库
use db_test;

--创建表
create table content
(
    content_id int not null auto_increment,
    subject varchar(200) null,
    words varchar(1000) null,
    username varchar(50),
    face varchar(50),
    email varchar(50),
    createtime datetime default NOW(),
    primary key(content_id)
);

--创建用户
create user 'wanming'@'localhost' identified by '123';

--分配查询、更新权限
grant select,update 
    on mysql_test.content
to 'wangming'@'localhost';

-- 插入数据
insert into db_test.content values(0,'MySql问题请教','MySQL对表数据的基本操作有哪些?','MySQL初学者','face.jpg','tom@gmail.com',NOW());

--更新数据
update db_test.content set words='如何使用INSERT语句' where username='MySQL初学者';

--删除数据
delete from db_test.content where username='MySQL初学者';

--查询数据
select * from db_test.content;

--创建触发器
create trigger content_delete_trigger before delete 
on mysql_test.content for each row set @str='old content deleted';
```

- 示例二

```sql
--创建数据库
CREATE DATABASE db_xuanke;

--使用数据库
use db_xuanke;

--创建表
CREATE TABLE student
(
    StuNo int(8) not null,--学号 主码
    StuName varchar(10) not null,--姓名
    StuSex char(1) null,--性别
    Pwd varchar(8) not null default '00000000',--密码
    DeptNo int(8) not null,--所属院系
    primary key(StuNo)
);

--院系编码表
Create table deptcode
(
    DeptNo int(8) not null, --院系编码 主码
    DeptName varchar(10) not null,--系名
    primary key(DeptNo)
);

--院系表
create table department
(
    DeptNo int(8) not null, --院系编码 主码
    Numofstudent int(10) null,--学生人数
    Numofteather int(10) null,--教师人数
    DeptAddr varchar(10) null,--办公地点
    primary key(DeptNo)
);

--教师表
Create table teacher
(
    TeachNo int(8) not null,--职工号 主码
    TeachName varchar(10) not null,--姓名
    TeachSex char(1) null,--性别
    TeachAge int(4) null,--年龄
    TeachTitle varchar(6) null,--职称
    Pwd varchar(8) null default '00000000', --登录密码
    DeptNo int(8) not null,--所属院系
    primary key(TeachNo)
);

--课程编码表
Create table coursecode
(
 CourseNo int(8) not null, --课程号 主码
 CourseName varchar(10) not null, --课程名称
 primary key(CourseNo)
);

--课程表 course
Create table Course
(
    CourseNo int(8) not null ,--课程号(主码)
    CourseType varchar(6) not null,--课程类别
    Credit int(2) not null, --学分
    CourseTime date null, --上课时间
    CourseAddr varchar(10) null,--上课地点
    DeptName varchar(10) not null,--开课学院
    Limitofnum int(4) not null,--限选人数
    TeachNo int(8) not null,--职工号
    primary key(CourseNo)
);

--系统管理员表
Create table administrator
(
    AdminNo int(8) not null,--ID号 主码
    AdminName varchar(10) not null, --姓名
    Pwd varchar(8) not null default '00000000', --登录密码
    primary key(AdminNo)
);

--选修课
create table electing
(
StuNo int(8) not null,--学号 主码
CourseNo int(8) not null,--课程号(主码)
Score int(4) null,--成绩
Primary key(StuNo,CourseNo)
);

--管理学生表
Create table adminstu
(
    AdminNo int(8) not null,--管理员ID号(主码)
    StuNo int(8) not null,--学生号 主码
    OpTime date null,--操作时间
    primary key(AdminNo,StuNo)
);

--管理院系表
Create table admindept
(
    AdminNo int(8) not null,--管理员ID 主码
    DeptNo int(8) not null,--院系编码 主码
    OpTime Date null,--操作时间
    Primary key(AdminNo,DeptNo)
);

--管理教师表
create table adminteacher
(
    AdminNo int(8) not null,--管理员ID 主码
    TeachNo int(8) not null ,--职工号 主码
    OpTime date null, --操作时间
    Primary key(AdminNo,TeachNo)
);

--管理课程
Create table admincourse
(
    AdminNo int(8) not null,--管理员ID 主码
    CourseNo int(8) not null,--课程号 主码
    OpTime date null,--操作时间
    primary key(adminNo,CourseNo)
);

--分配用户权限
grant select,update,insert,delete
on db_xuanke.*
to 'jin'@'localhost';

--添加学生
insert into db_xuanke.student
set StuNo=20170922,StuName='黄然',StuSex='女',pwd=default,
deptno=select deptno from db_xuanke.deptcode where deptname='计算机学院';

--添加触发器 验证分值是否在0~100
drop trigger tri_test;
create trigger tri_test after insert on db_xuanke.electing
for each row begin
if new.score<0 or new.score>100 then
    delete from db_xuanke.electing where score=new.score;
end if;
end;

--查询表
select * from db_xuanke.electing
--删除表数据
delete from db_xuanke.electing;
--插入表数据
insert into db_xuanke.electing set stuno='20170922',courseNo='01',score=98;

--事务并发控制
begin;
    insert into db_xuanke.teacher values(10021,'万明',null,null,null,default,10);
    insert into db_xuanke.teacher values(10073,'黄新',null,null,null,default,10);
    insert into db_xuanke.teacher values(10031,'徐丽',null,null,null,default,11);
commit;

--创建视图视图
Create view v_score(stuno,totlescore)
as
    select student.stuno,sum(course.credit)
    from student join electing on student.StuNo=electing.StuNo
    join course on course.CourseNo=electing.CourseNo
    where electing.score>=60
    group by student.stuno;
```
