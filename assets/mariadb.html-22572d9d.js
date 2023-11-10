const e=JSON.parse(`{"key":"v-5cfbb02e","path":"/tools/databases/mariadb.html","title":"Mariadb","lang":"zh-CN","frontmatter":{"title":"Mariadb","date":"2023-08-19T00:00:00.000Z","dir.order":2,"order":2,"editLink":false,"footer":false,"isOriginal":true,"category":["工具箱"],"tag":["Mariadb"],"description":"如何开通外网？ NAS-&gt;控制面板-&gt;终端机和SNMP-&gt;终端机-&gt;勾选启动SSH功能 利用Xshell登录系统 进入Mariadb目录,volume1为安装目录 cd /volume1/@appstore/MariaDB10/usr/local/mariadb10/bin 进入marialdb,输入以下命令，之后输入密码，登录成功显示MariaDB[(none)]&gt; ./mysql -u root -p 切换数据库 use mysql 更改管理员roothost，忽略提示Duplicate entry '%-root' for key 'PRIMARY' update user set host='%' where user='root'; 更新权限 FLUSH PRIVILEGES; 开启MarialDB端口防火墙 设置端口转发","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/databases/mariadb.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"Mariadb"}],["meta",{"property":"og:description","content":"如何开通外网？ NAS-&gt;控制面板-&gt;终端机和SNMP-&gt;终端机-&gt;勾选启动SSH功能 利用Xshell登录系统 进入Mariadb目录,volume1为安装目录 cd /volume1/@appstore/MariaDB10/usr/local/mariadb10/bin 进入marialdb,输入以下命令，之后输入密码，登录成功显示MariaDB[(none)]&gt; ./mysql -u root -p 切换数据库 use mysql 更改管理员roothost，忽略提示Duplicate entry '%-root' for key 'PRIMARY' update user set host='%' where user='root'; 更新权限 FLUSH PRIVILEGES; 开启MarialDB端口防火墙 设置端口转发"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-19T03:34:16.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"Mariadb"}],["meta",{"property":"article:published_time","content":"2023-08-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-19T03:34:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mariadb\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-19T03:34:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1692416056000,"updatedTime":1692416056000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":1}]},"readingTime":{"minutes":0.53,"words":160},"filePathRelative":"tools/databases/mariadb.md","localizedDate":"2023年8月19日","excerpt":"<p>如何开通外网？</p>\\n<ol>\\n<li>\\n<p>NAS-&gt;控制面板-&gt;终端机和SNMP-&gt;终端机-&gt;勾选<code>启动SSH功能</code></p>\\n</li>\\n<li>\\n<p>利用Xshell登录系统</p>\\n</li>\\n<li>\\n<p>进入Mariadb目录,<code>volume1</code>为安装目录</p>\\n<div class=\\"language-cmd line-numbers-mode\\" data-ext=\\"cmd\\"><pre class=\\"language-cmd\\"><code>cd /volume1/@appstore/MariaDB10/usr/local/mariadb10/bin\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>进入marialdb,输入以下命令，之后输入密码，登录成功显示<code>MariaDB[(none)]&gt;</code></p>\\n<div class=\\"language-cmd line-numbers-mode\\" data-ext=\\"cmd\\"><pre class=\\"language-cmd\\"><code>./mysql -u root -p\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>切换数据库</p>\\n<div class=\\"language-cmd line-numbers-mode\\" data-ext=\\"cmd\\"><pre class=\\"language-cmd\\"><code>use mysql\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>更改管理员<code>root</code>host，忽略提示<code>Duplicate entry '%-root' for key 'PRIMARY'</code></p>\\n<div class=\\"language-cmd line-numbers-mode\\" data-ext=\\"cmd\\"><pre class=\\"language-cmd\\"><code>update user set host='%' where user='root';\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>更新权限</p>\\n<div class=\\"language-cmd line-numbers-mode\\" data-ext=\\"cmd\\"><pre class=\\"language-cmd\\"><code>FLUSH PRIVILEGES;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>开启MarialDB端口防火墙</p>\\n</li>\\n<li>\\n<p>设置端口转发</p>\\n</li>\\n</ol>","copyright":{"author":"乌龙茶","license":"MIT"},"autoDesc":true}`);export{e as data};
