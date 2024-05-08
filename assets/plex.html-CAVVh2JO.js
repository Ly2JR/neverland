import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as c,c as a,d as e,f as o,a as l,e as i}from"./app-BpUPO61j.js";const d={},s={href:"https://forums.plex.tv/t/plex-media-server-1-32-0-6918-custom-certificate-must-be-regenerated-with-new-openssl-arguments/837643",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"解决方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#解决方式"},[e("span",null,"解决方式")])],-1),m={href:"https://www.openssl.org/source/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://slproweb.com/products/Win32OpenSSL.html",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"C:\\Program Files\\OpenSSL-Win64",-1),x=i("<li>下载域名证书<code>*.pem</code>和<code>*.key</code>两个文件</li><li>打开OPENSSL安装目录，输入<code>cmd</code></li><li>输入转换<code>openssl pkcs12 -export -out new.pfx -certpbe AES-256-CBC -keypbe AES-256-CBC -macalg SHA256 -inkey domain.key -in domain.pem -password pass:?????</code></li><li>生成新的<code>new.pfx</code>文件</li><li>在Plex设置里找到<code>网络</code></li><li>在自定义证书位置输入新的<code>*.pfx</code>证书位置</li><li>在自定义证书加密密钥输入<code>pass:???</code>pass后的密钥</li><li>在自定义证书域输入自己的域名</li><li>在自定义服务器访问URL输入自己的Plex服务器URL路径</li><li>点击保存修改</li><li>重启Plex服务</li>",11),y=i('<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>以群晖NAS和Windows64为例</p><ol><li>从阿里云或者腾讯等厂商下载域名证书，例如域名为<code>mydomain.com</code>下载的域名证书为<code>mydomain.com.pem</code>和<code>mydomain.com.key</code>两个证书文件,放到Windows<code>C:\\</code>目录下</li><li>安装Windows OPENSSL,打开OPENSSL安装目录<code>Bin</code>，默认路径<code>C:\\Program Files\\OpenSSL-Win64</code>，在地址栏，删除<code>C:\\Program Files\\OpenSSL-Win64\\bin</code>输入<code>cmd</code></li><li>录入<code>openssl pkcs12 -export -out c:\\mydomain.pfx -certpbe AES-256-CBC -keypbe AES-256-CBC -macalg SHA256 -inkey c:\\mydomain.key -in c:\\mydomain.pem -password pass:mydomainpass</code>,并回车，在C盘目录下生成<code>mydomain.pfx</code></li><li>将<code>mydomain.pfx</code>文件上次到NAS文件夹中，例如<code>certs</code>文件夹下</li><li>登录Plex，打开设置，找到网络</li><li>在自定义证书位置输入<code>/volume1/certs/mydomain.pfx</code></li><li>在自定义证书加密密钥输入<code>mydomainpass</code></li><li>在自定义证书域输入<code>mydoamin</code></li><li>在自定义服务器访问输入<code>https://mydomain.com:32400</code></li><li>点击保存修改</li><li>在套件中心停用Plex并重启</li></ol>',3);function f(u,P){const t=r("ExternalLinkIcon");return c(),a("div",null,[e("p",null,[o("Plex最新版本，使用自定义证书发现无论如何都识别不到。相关问题在"),e("a",s,[o("官方论坛"),l(t)]),o("讨论过，解决方式如下。")]),p,e("ol",null,[e("li",null,[o("下载并安装"),e("a",m,[o("OPENSSL"),l(t)]),o(",由于Windows需要自己编译而无法直接安装,需要安装"),e("a",h,[o("windows OPENSSL"),l(t)]),o("，默认路径"),S]),x]),y])}const w=n(d,[["render",f],["__file","plex.html.vue"]]),k=JSON.parse('{"path":"/tools/nas/plex.html","title":"Plex证书无效","lang":"zh-CN","frontmatter":{"title":"Plex证书无效","date":"2023-11-13T00:00:00.000Z","isOriginal":true,"category":["工具箱"],"tag":["Plex"],"editLink":false,"footer":false,"copy":true,"description":"Plex最新版本，使用自定义证书发现无论如何都识别不到。相关问题在官方论坛讨论过，解决方式如下。 解决方式 下载并安装OPENSSL,由于Windows需要自己编译而无法直接安装,需要安装windows OPENSSL，默认路径C:\\\\Program Files\\\\OpenSSL-Win64 下载域名证书*.pem和*.key两个文件 打开OPENSSL安...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/nas/plex.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"Plex证书无效"}],["meta",{"property":"og:description","content":"Plex最新版本，使用自定义证书发现无论如何都识别不到。相关问题在官方论坛讨论过，解决方式如下。 解决方式 下载并安装OPENSSL,由于Windows需要自己编译而无法直接安装,需要安装windows OPENSSL，默认路径C:\\\\Program Files\\\\OpenSSL-Win64 下载域名证书*.pem和*.key两个文件 打开OPENSSL安..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-13T02:38:05.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"Plex"}],["meta",{"property":"article:published_time","content":"2023-11-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-13T02:38:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Plex证书无效\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-13T02:38:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:ly2@ilyl.life\\"}]}"]]},"headers":[{"level":2,"title":"解决方式","slug":"解决方式","link":"#解决方式","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1699843085000,"updatedTime":1699843085000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":1}]},"readingTime":{"minutes":1.74,"words":523},"filePathRelative":"tools/nas/plex.md","localizedDate":"2023年11月13日","excerpt":"<p>Plex最新版本，使用自定义证书发现无论如何都识别不到。相关问题在<a href=\\"https://forums.plex.tv/t/plex-media-server-1-32-0-6918-custom-certificate-must-be-regenerated-with-new-openssl-arguments/837643\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方论坛</a>讨论过，解决方式如下。</p>\\n<h2>解决方式</h2>\\n<ol>\\n<li>下载并安装<a href=\\"https://www.openssl.org/source/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">OPENSSL</a>,由于Windows需要自己编译而无法直接安装,需要安装<a href=\\"https://slproweb.com/products/Win32OpenSSL.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">windows OPENSSL</a>，默认路径<code>C:\\\\Program Files\\\\OpenSSL-Win64</code></li>\\n<li>下载域名证书<code>*.pem</code>和<code>*.key</code>两个文件</li>\\n<li>打开OPENSSL安装目录，输入<code>cmd</code></li>\\n<li>输入转换<code>openssl pkcs12 -export -out new.pfx -certpbe AES-256-CBC -keypbe AES-256-CBC -macalg SHA256 -inkey domain.key -in domain.pem -password pass:?????</code></li>\\n<li>生成新的<code>new.pfx</code>文件</li>\\n<li>在Plex设置里找到<code>网络</code></li>\\n<li>在自定义证书位置输入新的<code>*.pfx</code>证书位置</li>\\n<li>在自定义证书加密密钥输入<code>pass:???</code>pass后的密钥</li>\\n<li>在自定义证书域输入自己的域名</li>\\n<li>在自定义服务器访问URL输入自己的Plex服务器URL路径</li>\\n<li>点击保存修改</li>\\n<li>重启Plex服务</li>\\n</ol>","autoDesc":true}');export{w as comp,k as data};
