import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,c as p,d as e,f as a,a as i,w as n,e as t,o as m}from"./app-BaXx2_6M.js";const h={},u=e("p",null,[e("a",{href:"https://docs.docker.com/engine/reference/commandline/docker/",target:"_blank",rel:"noopener noreferrer"},"Docker Cli")],-1),g=e("code",null,"ali.ddns-image",-1),v=e("code",null,"neverland/ali.ddns",-1),k=t(`<h2 id="注销登录" tabindex="-1"><a class="header-anchor" href="#注销登录"><span>注销登录</span></a></h2><div class="language-.NET line-numbers-mode" data-ext=".NET" data-title=".NET"><pre class="language-.NET"><code>docker logout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="登录" tabindex="-1"><a class="header-anchor" href="#登录"><span>登录</span></a></h2><div class="language-.NET line-numbers-mode" data-ext=".NET" data-title=".NET"><pre class="language-.NET"><code>docker login XXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="生成镜像" tabindex="-1"><a class="header-anchor" href="#生成镜像"><span>生成镜像</span></a></h2><p><a href="https://docs.docker.com/engine/reference/commandline/build/" target="_blank" rel="noopener noreferrer">docker build</a></p><div class="language-.NET line-numbers-mode" data-ext=".NET" data-title=".NET"><pre class="language-.NET"><code>docker build -t ali.ddns-image -f Dockerfile .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建容器" tabindex="-1"><a class="header-anchor" href="#创建容器"><span>创建容器</span></a></h2><p><a href="https://docs.docker.com/engine/reference/commandline/create/" target="_blank" rel="noopener noreferrer">docker create</a></p><div class="language-.NET line-numbers-mode" data-ext=".NET" data-title=".NET"><pre class="language-.NET"><code>docker create --name neverland/ali.ddns ali.ddns-image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建环境变量容器" tabindex="-1"><a class="header-anchor" href="#创建环境变量容器"><span>创建环境变量容器</span></a></h2><p><a href="https://docs.docker.com/engine/reference/commandline/run/" target="_blank" rel="noopener noreferrer">docker run</a></p><div class="language-.NET line-numbers-mode" data-ext=".NET" data-title=".NET"><pre class="language-.NET"><code>docker run --name neverland/ali.ddns  --env=DOTNET_EnableDiagnostics=0 --env=ALIKID=111 --env=ALIKSCT=111 --env=ALIDOMAIN=ilyl.life --env=ALITTL=600  -d ali.ddns-image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动容器" tabindex="-1"><a class="header-anchor" href="#启动容器"><span>启动容器</span></a></h2><p><a href="https://docs.docker.com/engine/reference/commandline/start/" target="_blank" rel="noopener noreferrer">docker start</a></p><div class="language-.NET line-numbers-mode" data-ext=".NET" data-title=".NET"><pre class="language-.NET"><code>docker start xxx容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="列出所有容器" tabindex="-1"><a class="header-anchor" href="#列出所有容器"><span>列出所有容器</span></a></h2><p><a href="https://docs.docker.com/engine/reference/commandline/ps/" target="_blank" rel="noopener noreferrer">docker ps</a></p><div class="language-.NET line-numbers-mode" data-ext=".NET" data-title=".NET"><pre class="language-.NET"><code>docker ps -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="停止容器" tabindex="-1"><a class="header-anchor" href="#停止容器"><span>停止容器</span></a></h2><p><a href="https://docs.docker.com/engine/reference/commandline/stop/" target="_blank" rel="noopener noreferrer">docker stop</a></p><div class="language-.NET line-numbers-mode" data-ext=".NET" data-title=".NET"><pre class="language-.NET"><code>docker stop neverland/ali.ddns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器"><span>删除容器</span></a></h2><p><a href="https://docs.docker.com/engine/reference/commandline/rm/" target="_blank" rel="noopener noreferrer">docker rm</a></p><div class="language-.NET line-numbers-mode" data-ext=".NET" data-title=".NET"><pre class="language-.NET"><code>docker rm neverland/ali.ddns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="删除镜像" tabindex="-1"><a class="header-anchor" href="#删除镜像"><span>删除镜像</span></a></h2><p><a href="https://docs.docker.com/engine/reference/commandline/rmi/" target="_blank" rel="noopener noreferrer">docker rmi</a></p>`,27),b=e("div",{class:"language-.NET line-numbers-mode","data-ext":".NET","data-title":".NET"},[e("pre",{class:"language-.NET"},[e("code",null,`docker rmi ali.ddns-image
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),T=e("div",{class:"language-.NET line-numbers-mode","data-ext":".NET","data-title":".NET"},[e("pre",{class:"language-.NET"},[e("code",null,`docker rmi mcr.microsoft.com/dotnet/aspnet:7.0
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),N=t(`<h2 id="私有仓库" tabindex="-1"><a class="header-anchor" href="#私有仓库"><span>私有仓库</span></a></h2><h3 id="注销" tabindex="-1"><a class="header-anchor" href="#注销"><span>注销</span></a></h3><div class="language-.NET line-numbers-mode" data-ext=".NET" data-title=".NET"><pre class="language-.NET"><code>docker logout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="登录账号" tabindex="-1"><a class="header-anchor" href="#登录账号"><span>登录账号</span></a></h3><div class="language-.NET line-numbers-mode" data-ext=".NET" data-title=".NET"><pre class="language-.NET"><code>docker login 127.0.0.1:5000/ali.ddns:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="标记镜像" tabindex="-1"><a class="header-anchor" href="#标记镜像"><span>标记镜像</span></a></h3><p><a href="https://docs.docker.com/engine/reference/commandline/tag/" target="_blank" rel="noopener noreferrer">Docker tag</a></p><div class="language-.NET line-numbers-mode" data-ext=".NET" data-title=".NET"><pre class="language-.NET"><code>docker tag ali.ddns-image 127.0.0.1:5000/ali.ddns:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="上传镜像" tabindex="-1"><a class="header-anchor" href="#上传镜像"><span>上传镜像</span></a></h3><p><a href="https://docs.docker.com/engine/reference/commandline/push/" target="_blank" rel="noopener noreferrer">Docker push</a></p><div class="language-.NET line-numbers-mode" data-ext=".NET" data-title=".NET"><pre class="language-.NET"><code>docker push 127.0.0.1:5000/ali.ddns:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function f(E,_){const s=l("RouteLink"),c=l("Tabs");return m(),p("div",null,[u,e("p",null,[a("以"),i(s,{to:"/tools/docker/aliyun-ddns.html"},{default:n(()=>[a("阿里云解析")]),_:1}),a("为例，镜像:"),g,a("，容器:"),v]),k,i(c,{id:"69",data:[{id:"删除云解析镜像"},{id:"删除.NET 镜像"}]},{title0:n(({value:r,isActive:d})=>[a("删除云解析镜像")]),title1:n(({value:r,isActive:d})=>[a("删除.NET 镜像")]),tab0:n(({value:r,isActive:d})=>[b]),tab1:n(({value:r,isActive:d})=>[T]),_:1}),N])}const D=o(h,[["render",f],["__file","index.html.vue"]]),C=JSON.parse('{"path":"/tools/docker/","title":"概述","lang":"zh-CN","frontmatter":{"title":"概述","breadcrumb":false,"article":false,"editLink":false,"footer":false,"category":["DOCKER"],"description":"Docker Cli 以为例，镜像:ali.ddns-image，容器:neverland/ali.ddns 注销登录 登录 生成镜像 docker build 创建容器 docker create 创建环境变量容器 docker run 启动容器 docker start 列出所有容器 docker ps 停止容器 docker stop 删除容器 ...","head":[["meta",{"property":"og:url","content":"https://ilyl.life/tools/docker/"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"概述"}],["meta",{"property":"og:description","content":"Docker Cli 以为例，镜像:ali.ddns-image，容器:neverland/ali.ddns 注销登录 登录 生成镜像 docker build 创建容器 docker create 创建环境变量容器 docker run 启动容器 docker start 列出所有容器 docker ps 停止容器 docker stop 删除容器 ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-19T03:08:49.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:modified_time","content":"2023-08-19T03:08:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"概述\\",\\"description\\":\\"Docker Cli 以为例，镜像:ali.ddns-image，容器:neverland/ali.ddns 注销登录 登录 生成镜像 docker build 创建容器 docker create 创建环境变量容器 docker run 启动容器 docker start 列出所有容器 docker ps 停止容器 docker stop 删除容器 ...\\"}"]]},"headers":[{"level":2,"title":"注销登录","slug":"注销登录","link":"#注销登录","children":[]},{"level":2,"title":"登录","slug":"登录","link":"#登录","children":[]},{"level":2,"title":"生成镜像","slug":"生成镜像","link":"#生成镜像","children":[]},{"level":2,"title":"创建容器","slug":"创建容器","link":"#创建容器","children":[]},{"level":2,"title":"创建环境变量容器","slug":"创建环境变量容器","link":"#创建环境变量容器","children":[]},{"level":2,"title":"启动容器","slug":"启动容器","link":"#启动容器","children":[]},{"level":2,"title":"列出所有容器","slug":"列出所有容器","link":"#列出所有容器","children":[]},{"level":2,"title":"停止容器","slug":"停止容器","link":"#停止容器","children":[]},{"level":2,"title":"删除容器","slug":"删除容器","link":"#删除容器","children":[]},{"level":2,"title":"删除镜像","slug":"删除镜像","link":"#删除镜像","children":[]},{"level":2,"title":"私有仓库","slug":"私有仓库","link":"#私有仓库","children":[{"level":3,"title":"注销","slug":"注销","link":"#注销","children":[]},{"level":3,"title":"登录账号","slug":"登录账号","link":"#登录账号","children":[]},{"level":3,"title":"标记镜像","slug":"标记镜像","link":"#标记镜像","children":[]},{"level":3,"title":"上传镜像","slug":"上传镜像","link":"#上传镜像","children":[]}]}],"git":{"createdTime":1685697967000,"updatedTime":1692414529000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":12}]},"readingTime":{"minutes":0.88,"words":263},"filePathRelative":"tools/docker/README.md","localizedDate":"2023年6月2日","excerpt":"<p><a href=\\"https://docs.docker.com/engine/reference/commandline/docker/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Docker Cli</a></p>\\n<p>以<a href=\\"/tools/docker/aliyun-ddns.html\\" target=\\"_blank\\">阿里云解析</a>为例，镜像:<code>ali.ddns-image</code>，容器:<code>neverland/ali.ddns</code></p>\\n<h2>注销登录</h2>\\n<div class=\\"language-.NET\\" data-ext=\\".NET\\" data-title=\\".NET\\"><pre class=\\"language-.NET\\"><code>docker logout\\n</code></pre></div>","autoDesc":true}');export{D as comp,C as data};
