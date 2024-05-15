import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o,e as c}from"./app-BaXx2_6M.js";const p={},n=c('<h2 id="ipv4改造" tabindex="-1"><a class="header-anchor" href="#ipv4改造"><span>IPv4改造</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>访问地址在光猫设备的背面，这只是<code>普通账户</code></p></div><p>将光猫的IPv4改造支持IPv6时，首先看提供的光猫本身是不是自带IPv6，进入光猫访问地址，查看选项有没有IPv6相关内容。</p><p>但是，很多光猫设备都是老款，只支持IPv4，这时就需要买个<code>支持IPv6的路由器</code>。</p><h3 id="获取超级管理员" tabindex="-1"><a class="header-anchor" href="#获取超级管理员"><span>获取超级管理员</span></a></h3><p>以华为光猫，型号HG8245为例；</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>telnet</code>在控制面板/启用或关闭Windows功能，勾选Telnet客户端</p></div><p>打开<code>cmd</code>命令，输入<code>telnet 192.168.1.1</code>;</p><p>显示<code>Login:</code>，输入<code>root</code>;</p><p>显示<code>Password</code>,输入<code>admin</code>;</p><p>显示<code>WAP&gt;</code>,输入<code>shell</code>;</p><p>显示<code>WAP(Doprea Linux) #</code>,输入<code>cd /mnt/jffs2</code>;</p><p>显示<code>WAP(Doprea Linux) #</code>,输入<code>grep telecomadmin hw_ctree.xml</code>;</p><p>显示<code>.....Password=&quot;XXXXXXX&quot;.....</code>;</p><p>记住该密码。</p><h3 id="设置光猫" tabindex="-1"><a class="header-anchor" href="#设置光猫"><span>设置光猫</span></a></h3><figure><img src="https://nas.ilyl.life:8092/wan.jpg" alt="光猫设置" tabindex="0" loading="lazy"><figcaption>光猫设置</figcaption></figure><p>使用账户<code>telcomadmin</code>,密码是刚刚获取到的登录设备。</p><p>找到网络/宽带设置,对所有WAN口参数配置，进行拍照<code>备份</code>；</p><p>找到默认<code>2_INTETNET_B_VID</code>的连接名，进行删除,记得<code>备份</code>;</p><p>新键</p><p>使能WAN连接:<code>勾选</code></p><p>连接类型:<code>桥接</code></p><p>服务列表:<code>INTERNET</code></p><p>使能VLAN:<code>勾选</code></p><p>VLAN ID:与之前配置的值一致</p><p>桥类型:<code>IP桥接</code></p><p>至此，光猫IPv4改造支持IPv6完成。</p>',28),i=[n];function a(d,l){return o(),t("div",null,i)}const h=e(p,[["render",a],["__file","ont.html.vue"]]),m=JSON.parse('{"path":"/tools/nas/ont.html","title":"光猫","lang":"zh-CN","frontmatter":{"title":"光猫","date":"2023-05-20T00:00:00.000Z","isOriginal":true,"dir.order":2,"order":2,"category":["工具箱"],"tag":["光猫"],"editLink":false,"footer":false,"copy":true,"description":"IPv4改造 提示 访问地址在光猫设备的背面，这只是普通账户 将光猫的IPv4改造支持IPv6时，首先看提供的光猫本身是不是自带IPv6，进入光猫访问地址，查看选项有没有IPv6相关内容。 但是，很多光猫设备都是老款，只支持IPv4，这时就需要买个支持IPv6的路由器。 获取超级管理员 以华为光猫，型号HG8245为例； 提示 telnet在控制面板/...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/nas/ont.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"光猫"}],["meta",{"property":"og:description","content":"IPv4改造 提示 访问地址在光猫设备的背面，这只是普通账户 将光猫的IPv4改造支持IPv6时，首先看提供的光猫本身是不是自带IPv6，进入光猫访问地址，查看选项有没有IPv6相关内容。 但是，很多光猫设备都是老款，只支持IPv4，这时就需要买个支持IPv6的路由器。 获取超级管理员 以华为光猫，型号HG8245为例； 提示 telnet在控制面板/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://nas.ilyl.life:8092/wan.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-30T04:32:40.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"光猫"}],["meta",{"property":"article:published_time","content":"2023-05-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-30T04:32:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"光猫\\",\\"image\\":[\\"https://nas.ilyl.life:8092/wan.jpg\\"],\\"datePublished\\":\\"2023-05-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-30T04:32:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:ly2@ilyl.life\\"}]}"]]},"headers":[{"level":2,"title":"IPv4改造","slug":"ipv4改造","link":"#ipv4改造","children":[{"level":3,"title":"获取超级管理员","slug":"获取超级管理员","link":"#获取超级管理员","children":[]},{"level":3,"title":"设置光猫","slug":"设置光猫","link":"#设置光猫","children":[]}]}],"git":{"createdTime":1684679564000,"updatedTime":1703910760000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":4}]},"readingTime":{"minutes":1.15,"words":345},"filePathRelative":"tools/nas/ont.md","localizedDate":"2023年5月20日","excerpt":"<h2>IPv4改造</h2>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>访问地址在光猫设备的背面，这只是<code>普通账户</code></p>\\n</div>\\n<p>将光猫的IPv4改造支持IPv6时，首先看提供的光猫本身是不是自带IPv6，进入光猫访问地址，查看选项有没有IPv6相关内容。</p>\\n<p>但是，很多光猫设备都是老款，只支持IPv4，这时就需要买个<code>支持IPv6的路由器</code>。</p>\\n<h3>获取超级管理员</h3>\\n<p>以华为光猫，型号HG8245为例；</p>","autoDesc":true}');export{h as comp,m as data};
