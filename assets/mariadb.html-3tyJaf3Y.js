import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as i,b as a}from"./app-FacI78ax.js";const l={},c=a(`<p>如何开通外网？</p><ol><li><p>NAS-&gt;控制面板-&gt;终端机和SNMP-&gt;终端机-&gt;勾选<code>启动SSH功能</code></p></li><li><p>利用Xshell登录系统</p></li><li><p>进入Mariadb目录,<code>volume1</code>为安装目录</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>cd /volume1/@appstore/MariaDB10/usr/local/mariadb10/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入marialdb,输入以下命令，之后输入密码，登录成功显示<code>MariaDB[(none)]&gt;</code></p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>./mysql -u root -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>切换数据库</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>use mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>更改管理员<code>root</code>host，忽略提示<code>Duplicate entry &#39;%-root&#39; for key &#39;PRIMARY&#39;</code></p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>update user set host=&#39;%&#39; where user=&#39;root&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>更新权限</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>FLUSH PRIVILEGES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>开启MarialDB端口防火墙</p></li><li><p>设置端口转发</p></li></ol>`,2),s=[c];function r(n,o){return d(),i("div",null,s)}const u=e(l,[["render",r],["__file","mariadb.html.vue"]]);export{u as default};