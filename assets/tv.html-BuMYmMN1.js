import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,c as n,d as e,f as o,a as i,w as r,e as d,o as l}from"./app-BaXx2_6M.js";const c={},s=e("p",null,"现在智能电视非常普及，但是很多频道需要收费，一种是需要开通IPTV，另外一种就是各个APP里的会员，但是其他端与TV端还不通用。",-1),h=e("p",null,"没钱的话就想办法自己搭建服务了。",-1),m=e("a",{href:"https://kodi.tv/",target:"_blank",rel:"noopener noreferrer"},"Kodi",-1),f=d('<h2 id="安装kodi" tabindex="-1"><a class="header-anchor" href="#安装kodi"><span>安装KODI</span></a></h2><p>启用智能电视里的<code>允许安装未知应用</code>。</p><p>下载<a href="https://kodi.tv/download/android/" target="_blank" rel="noopener noreferrer">Kodi v21 (Omega)</a>，选择<code>ARMV7A (32BIT)</code>，拷贝到U盘。</p><p>在TV端选择U盘，选择<code>Kodi</code>进行安装。</p><h2 id="配置kodi中文" tabindex="-1"><a class="header-anchor" href="#配置kodi中文"><span>配置Kodi中文</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果只有英文，没有<code>Chinese-Simple</code>供选择，请等待下载，稍后再试</p></div><p>坐上角中间配置按钮。</p><p>选择<code>Interface settings</code>。</p><p>选择<code>Skin</code>项，点击<code>Fonts</code>更改字体为<code>Arial based</code>，缺少这步直接设置中文会出现乱码。</p><p>选择<code>Regional</code>项，点击<code>Language</code>更改为<code>Chinese-Simple</code>。</p><p>选择<code>Regional</code>项，点击<code>Character set</code>更改为<code>GB2312</code>。</p><h2 id="安装plex-for-kodi" tabindex="-1"><a class="header-anchor" href="#安装plex-for-kodi"><span>安装Plex for kodi</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>直接在Kodi里搜索<code>plex</code>插件安装成功后，会出现无法启动的错误</p></div><p>安装<a href="https://github.com/pannal/plex-for-kodi/blob/master/README.md" target="_blank" rel="noopener noreferrer">pannal提供的plex插件</a></p><p>先安装<a href="https://pannal.github.io/dontpanickodi/" target="_blank" rel="noopener noreferrer">repository.dontpanic-0.2.6-1.zip</a></p><p>将<code>repository.dontpanic-0.2.6-1.zip</code>下载拷贝到U盘</p><p>打开Kodi，选择插件，找到从ZIP安装，选择<code>repository.dontpanic-0.2.6-1.zip</code></p><p><code>repository.dontpanic-0.2.6-1.zip</code>安装好之后，找到<code>repository.dontpanic-0.2.6-1.zip</code>插件，点击等待下载</p><p><code>dontpanic</code>下载完成，打开，从这里选择最新的plex安装即可。</p><h2 id="启动plex" tabindex="-1"><a class="header-anchor" href="#启动plex"><span>启动plex</span></a></h2><p>首次启动plex时，需要登录关联,电脑端打开<code>https://plex.tv/link</code>即可，输入电视端的4位验证码</p><h2 id="关于plex找不到电视节目问题" tabindex="-1"><a class="header-anchor" href="#关于plex找不到电视节目问题"><span>关于plex找不到电视节目问题</span></a></h2><p>查看<a href="https://support.plex.tv/articles/naming-and-organizing-your-movie-media-files/" target="_blank" rel="noopener noreferrer">命名规则</a></p><p>放在<code>/TV Shows</code>文件夹下,以最近的电视剧<code>繁华</code>第一集举例。</p><p><code>/TV Shows/繁华/繁华S01E01.mkv</code></p><p>在PLEX服务端添加媒体库，选择电视节目，选择<code>/TV Shows</code>目录。</p>',26);function g(x,k){const t=p("RouteLink");return l(),n("div",null,[s,h,e("p",null,[o("以"),i(t,{to:"/tools/nas/plex.html"},{default:r(()=>[o("plex")]),_:1}),o("作为服务端，客户端使用"),m]),f])}const T=a(c,[["render",g],["__file","tv.html.vue"]]),v=JSON.parse('{"path":"/tools/nas/tv.html","title":"家庭影院","lang":"zh-CN","frontmatter":{"title":"家庭影院","date":"2024-01-08T00:00:00.000Z","isOriginal":true,"category":["工具箱"],"tag":["TV"],"editLink":false,"footer":false,"copy":true,"description":"现在智能电视非常普及，但是很多频道需要收费，一种是需要开通IPTV，另外一种就是各个APP里的会员，但是其他端与TV端还不通用。 没钱的话就想办法自己搭建服务了。 以作为服务端，客户端使用Kodi 安装KODI 启用智能电视里的允许安装未知应用。 下载Kodi v21 (Omega)，选择ARMV7A (32BIT)，拷贝到U盘。 在TV端选择U盘，选...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/nas/tv.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"家庭影院"}],["meta",{"property":"og:description","content":"现在智能电视非常普及，但是很多频道需要收费，一种是需要开通IPTV，另外一种就是各个APP里的会员，但是其他端与TV端还不通用。 没钱的话就想办法自己搭建服务了。 以作为服务端，客户端使用Kodi 安装KODI 启用智能电视里的允许安装未知应用。 下载Kodi v21 (Omega)，选择ARMV7A (32BIT)，拷贝到U盘。 在TV端选择U盘，选..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-08T02:02:29.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"TV"}],["meta",{"property":"article:published_time","content":"2024-01-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-08T02:02:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"家庭影院\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-08T02:02:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:ly2@ilyl.life\\"}]}"]]},"headers":[{"level":2,"title":"安装KODI","slug":"安装kodi","link":"#安装kodi","children":[]},{"level":2,"title":"配置Kodi中文","slug":"配置kodi中文","link":"#配置kodi中文","children":[]},{"level":2,"title":"安装Plex for kodi","slug":"安装plex-for-kodi","link":"#安装plex-for-kodi","children":[]},{"level":2,"title":"启动plex","slug":"启动plex","link":"#启动plex","children":[]},{"level":2,"title":"关于plex找不到电视节目问题","slug":"关于plex找不到电视节目问题","link":"#关于plex找不到电视节目问题","children":[]}],"git":{"createdTime":1704678838000,"updatedTime":1704679349000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":2}]},"readingTime":{"minutes":1.62,"words":485},"filePathRelative":"tools/nas/tv.md","localizedDate":"2024年1月8日","excerpt":"<p>现在智能电视非常普及，但是很多频道需要收费，一种是需要开通IPTV，另外一种就是各个APP里的会员，但是其他端与TV端还不通用。</p>\\n<p>没钱的话就想办法自己搭建服务了。</p>\\n<p>以<a href=\\"/tools/nas/plex.html\\" target=\\"_blank\\">plex</a>作为服务端，客户端使用<a href=\\"https://kodi.tv/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Kodi</a></p>\\n<h2>安装KODI</h2>\\n<p>启用智能电视里的<code>允许安装未知应用</code>。</p>","autoDesc":true}');export{T as comp,v as data};
