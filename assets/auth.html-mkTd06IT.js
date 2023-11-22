import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as i,c as n,d as s,e as t,f as r,w as f,b as e}from"./app-mFT_BNR7.js";const y={},x=e('<p>应用程序中常用权限，又如何设计权限。</p><p>常用的权限有<code>菜单权限</code>、<code>功能权限</code>以及<code>数据权限</code></p><h2 id="菜单权限" tabindex="-1"><a class="header-anchor" href="#菜单权限" aria-hidden="true">#</a> 菜单权限</h2><p>菜单权限比较好实现，其一，菜单不会很多，其二当页面展示时就基本不会在变，相对固定。</p><p>多级菜单时只要确认最末级的菜单权限ID即可。</p><ul><li>菜单表</li></ul><table><thead><tr><th style="text-align:left;">权限ID</th><th style="text-align:left;">菜单名称</th></tr></thead><tbody><tr><td style="text-align:left;">M1</td><td style="text-align:left;">菜单1</td></tr><tr><td style="text-align:left;">M2</td><td style="text-align:left;">菜单2</td></tr><tr><td style="text-align:left;">...</td><td style="text-align:left;">...</td></tr></tbody></table><ul><li>用户表</li></ul><table><thead><tr><th style="text-align:left;">用户ID</th><th style="text-align:left;">用户名</th></tr></thead><tbody><tr><td style="text-align:left;">U1</td><td style="text-align:left;">用户1</td></tr><tr><td style="text-align:left;">U2</td><td style="text-align:left;">用户2</td></tr><tr><td style="text-align:left;">...</td><td style="text-align:left;">...</td></tr></tbody></table><ul><li>用户菜单权限表</li></ul><table><thead><tr><th style="text-align:left;">用户ID</th><th style="text-align:left;">菜单ID</th></tr></thead><tbody><tr><td style="text-align:left;">U1</td><td style="text-align:left;">M1</td></tr><tr><td style="text-align:left;">U1</td><td style="text-align:left;">M2</td></tr><tr><td style="text-align:left;">U2</td><td style="text-align:left;">M1</td></tr></tbody></table><p>通过<code>sql</code>语句<code>inner join</code>关联得到当前用户的菜单即可</p><h3 id="多级菜单" tabindex="-1"><a class="header-anchor" href="#多级菜单" aria-hidden="true">#</a> 多级菜单</h3>',13),h=e(`<p>多级菜单相对单级菜单复杂，如果是固定的多级菜单就简单多了。</p><p>不确定的多级菜单需要进行好的设计，通过迭代生成。</p><p>关键在于<code>迭代</code>,为了使表设计满足迭代，表结构需要满足一定的要求，如下所示</p><ul><li>多级菜单表</li></ul><table><thead><tr><th style="text-align:left;">权限ID</th><th style="text-align:left;">菜单级别</th><th style="text-align:left;">菜单名称</th><th style="text-align:left;">是否末级</th></tr></thead><tbody><tr><td style="text-align:left;">M1</td><td style="text-align:left;">1</td><td style="text-align:left;">菜单1</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">M2</td><td style="text-align:left;">1</td><td style="text-align:left;">菜单2</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">M101</td><td style="text-align:left;">2</td><td style="text-align:left;">菜单3</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">M10101</td><td style="text-align:left;">3</td><td style="text-align:left;">菜单4</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:left;">M201</td><td style="text-align:left;">2</td><td style="text-align:left;">菜单5</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:left;">M102</td><td style="text-align:left;">2</td><td style="text-align:left;">菜单6</td><td style="text-align:left;">1</td></tr></tbody></table><p>这里多添加一个<code>菜单级别字段</code>和调整<code>权限ID</code>约束实现</p><ul><li>菜单级别显示当前菜单的层次</li><li>每层菜单级别数对应长度为<code>2</code>的菜单ID</li><li>每层的权限ID能反应出上层菜单权限ID</li></ul><p>最终展示的菜单如下</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>|--菜单1
|----菜单3
|------菜单4
|----菜单6
|--菜单2
|----菜单5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: tips</p><p>当菜单非常多时，可以将所有的1级菜单统计到单独表，进行归类。</p><p>当菜单深度很深时，只显示顶层菜单，点击时在加载子菜单。 :::</p><h2 id="功能权限" tabindex="-1"><a class="header-anchor" href="#功能权限" aria-hidden="true">#</a> 功能权限</h2><h2 id="数据权限" tabindex="-1"><a class="header-anchor" href="#数据权限" aria-hidden="true">#</a> 数据权限</h2><p>数据权限就是用户能看到什么数据，这个只要对表字段进行权限控制，动态生成即可。</p><ul><li>数据表</li></ul><table><thead><tr><th style="text-align:left;">字段名</th><th style="text-align:left;">字段描述</th></tr></thead><tbody><tr><td style="text-align:left;">Name</td><td style="text-align:left;">姓名</td></tr><tr><td style="text-align:left;">Address</td><td style="text-align:left;">地址</td></tr><tr><td style="text-align:left;">Phone</td><td style="text-align:left;">电话</td></tr></tbody></table><ul><li>数据权限表</li></ul><table><thead><tr><th style="text-align:left;">Key</th><th style="text-align:left;">ID</th><th style="text-align:left;">字段</th></tr></thead><tbody><tr><td style="text-align:left;">01</td><td style="text-align:left;">1</td><td style="text-align:left;">Name</td></tr><tr><td style="text-align:left;">01</td><td style="text-align:left;">2</td><td style="text-align:left;">Address</td></tr><tr><td style="text-align:left;">01</td><td style="text-align:left;">3</td><td style="text-align:left;">Phone</td></tr></tbody></table><ul><li>用户数据权限表</li></ul><table><thead><tr><th style="text-align:left;">用户ID</th><th style="text-align:left;">数据权限ID</th></tr></thead><tbody><tr><td style="text-align:left;">U1</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:left;">U1</td><td style="text-align:left;">2</td></tr></tbody></table><p>通过数据权限表和用户权限表关联，即能查询出当前用户的可见数据，并且可以扩展显示顺序、别名等功能。</p>`,22);function g(o,c){const l=a("RouterLink");return i(),n("div",null,[x,s("p",null,[t("相关代码参考"),r(l,{to:"/cs/wpf/plugin.html"},{default:f(()=>[t("WPF插件")]),_:1})]),h])}const b=d(y,[["render",g],["__file","auth.html.vue"]]);export{b as default};
