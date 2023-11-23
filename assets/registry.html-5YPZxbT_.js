import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as l,c as o,d as n,e as s,f as e,w as d,b as i}from"./app-jX4GK98F.js";const u={},p=n("p",null,"同时解决无法登录及发布Docker Hub的问题。",-1),v=n("p",null,"包括SSL、基本认证、Docker Registry UI、删除镜像内容。",-1),m={href:"https://docs.docker.com/registry/deploying/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/Joxit/docker-registry-ui",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml" aria-hidden="true">#</a> docker-compose.yml</h2><ul><li><code>第8行</code>: Registry UI的域名SSL证书目录</li><li><code>第9行</code>: 自己的Nginx配置文件</li><li><code>第13行</code>: Registry的URL地址</li><li><code>第29行</code>: Registry的仓库存储目录</li><li><code>第30行</code>: Registry的域名SSL证书目录</li><li><code>第31行</code>: Registry的基本认证目录</li><li><code>第33行</code>: Registry允许跨域访问的地址</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.8&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">registry-ui</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> REGISTRY_UI
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;joxit/docker-registry-ui:2.5.2&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> &lt;SSL证书目录<span class="token punctuation">&gt;</span><span class="token punctuation">:</span>/etc/nginx/certs
      <span class="token punctuation">-</span> &lt;nginx的conf.d配置目录<span class="token punctuation">&gt;</span><span class="token punctuation">:</span>/etc/nginx/conf.d/
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 443<span class="token punctuation">:</span><span class="token number">443</span>
     <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> NGINX_PROXY_PASS_URL=&lt;REGISTRY的URL<span class="token punctuation">&gt;</span>
      <span class="token punctuation">-</span> SHOW_CATALOG_NB_TAGS=false
      <span class="token punctuation">-</span> DELETE_IMAGES=true
      <span class="token punctuation">-</span> REGISTRY_TITLE=Neverland
      <span class="token punctuation">-</span> SINGLE_REGISTRY=true
      <span class="token punctuation">-</span> CATALOG_MIN_BRANCHES=1
      <span class="token punctuation">-</span> CATALOG_MAX_BRANCHES=1
      <span class="token punctuation">-</span> CATALOG_ELEMENTS_LIMIT=1000
      <span class="token punctuation">-</span> SHOW_CONTENT_DIGEST=true
      <span class="token punctuation">-</span> TAGLIST_PAGE_SIZE=100
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> registry
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> REGISTRY
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;registry:2.8.2&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> &lt;Registry存储目录<span class="token punctuation">&gt;</span><span class="token punctuation">:</span>/var/lib/registry
      <span class="token punctuation">-</span> &lt;Registry SSL证书目录<span class="token punctuation">&gt;</span><span class="token punctuation">:</span>/certs
      <span class="token punctuation">-</span> &lt;Registry 用户认证目录<span class="token punctuation">&gt;</span><span class="token punctuation">:</span>/auth
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> REGISTRY_HTTP_HEADERS_Access<span class="token punctuation">-</span>Control<span class="token punctuation">-</span>Allow<span class="token punctuation">-</span>Origin=<span class="token punctuation">[</span>&lt;Docker Registry UI地址<span class="token punctuation">&gt;</span><span class="token punctuation">]</span>
      <span class="token punctuation">-</span> REGISTRY_HTTP_ADDR=0.0.0.0<span class="token punctuation">:</span><span class="token number">443</span>
      <span class="token punctuation">-</span> REGISTRY_HTTP_TLS_CERTIFICATE=/certs/docker.pem
      <span class="token punctuation">-</span> REGISTRY_HTTP_TLS_KEY=/certs/docker.key
      <span class="token punctuation">-</span> REGISTRY_AUTH=htpasswd
      <span class="token punctuation">-</span> REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm
      <span class="token punctuation">-</span> REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd
      <span class="token punctuation">-</span> REGISTRY_HTTP_HEADERS_Access<span class="token punctuation">-</span>Control<span class="token punctuation">-</span>Allow<span class="token punctuation">-</span>Methods=<span class="token punctuation">[</span><span class="token string">&#39;HEAD&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">-</span> REGISTRY_HTTP_HEADERS_Access<span class="token punctuation">-</span>Control<span class="token punctuation">-</span>Allow<span class="token punctuation">-</span>Credentials=<span class="token punctuation">[</span><span class="token string">&#39;true&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">-</span> REGISTRY_HTTP_HEADERS_Access<span class="token punctuation">-</span>Control<span class="token punctuation">-</span>Expose<span class="token punctuation">-</span>Headers=<span class="token punctuation">[</span><span class="token string">&#39;Docker-Content-Digest&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">-</span> REGISTRY_STORAGE_DELETE_ENABLED=true
      <span class="token punctuation">-</span> REGISTRY_HTTP_HEADERS_Access<span class="token punctuation">-</span>Control<span class="token punctuation">-</span>Allow<span class="token punctuation">-</span>Headers<span class="token punctuation">-</span>Control<span class="token punctuation">-</span>Allow<span class="token punctuation">-</span>Headers=<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Accept&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Cache-Control&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">-</span> REGISTRY_HTTP_HEADERS_X<span class="token punctuation">-</span>Content<span class="token punctuation">-</span>Type<span class="token punctuation">-</span>Options=<span class="token punctuation">[</span>nosniff<span class="token punctuation">]</span>
      <span class="token punctuation">-</span> Access<span class="token punctuation">-</span>Control<span class="token punctuation">-</span>Max<span class="token punctuation">-</span>Age=<span class="token punctuation">[</span><span class="token number">1728000</span><span class="token punctuation">]</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 443<span class="token punctuation">:</span><span class="token number">443</span>  
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g={id:"docker-registry",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#docker-registry","aria-hidden":"true"},"#",-1),_={href:"https://docs.docker.com/registry/deploying/",target:"_blank",rel:"noopener noreferrer"},y=i(`<h3 id="拉取registry" tabindex="-1"><a class="header-anchor" href="#拉取registry" aria-hidden="true">#</a> 拉取Registry</h3><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>docker pull registry:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动registry" tabindex="-1"><a class="header-anchor" href="#启动registry" aria-hidden="true">#</a> 启动Registry</h3><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>docker run -d \\
  --restart=always \\
  --name registry \\
  -p 5000:5000 \\
  registry:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预览registry" tabindex="-1"><a class="header-anchor" href="#预览registry" aria-hidden="true">#</a> 预览Registry</h3><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>curl http://127.0.0.1:5000/v2/_catalog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>StatusCode        : 200
StatusDescription : OK
Content           : {&quot;repositories&quot;:[]}

RawContent        : HTTP/1.1 200 OK
                    Docker-Distribution-Api-Version: registry/2.0
                    X-Content-Type-Options: nosniff
                    Content-Length: 25
                    Content-Type: application/json; charset=utf-8
                    Date: ... GMT...
Forms             : {}
Headers           : {[Docker-Distribution-Api-Version, registry/2.0], [X-Content-Type-Options, nosniff], [Content-Length, 25], [Content-Type, application/json; charset=utf-8]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : System.__ComObject
RawContentLength  : 25
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),T={id:"修改配置-不安全",tabindex:"-1"},R=n("a",{class:"header-anchor",href:"#修改配置-不安全","aria-hidden":"true"},"#",-1),S={href:"https://docs.docker.com/registry/insecure/",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"不安全",-1),E=i(`<p>打开<code>daemon.json</code>文件或者在Docker Desktop的<code>Docker Engine</code>添加如下配置，SSL无需此配置。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;insecure-registries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;http://127.0.0.1:5000&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h3><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>-e REGISTRY_HTTP_HEADERS_Access-Control-Allow-Origin=&quot;[&#39;*&#39;]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加docker-registry-ssl" tabindex="-1"><a class="header-anchor" href="#添加docker-registry-ssl" aria-hidden="true">#</a> 添加Docker Registry SSL</h3>`,5),x=i(`<p><code>.crt</code>证书大部分包含中间证书,所以这里用<code>.pem</code>来代替</p><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>docker run -d \\
  --restart=always \\
  --name registry \\
  -v &quot;$(pwd)&quot;/certs:/certs \\
  -e REGISTRY_HTTP_ADDR=0.0.0.0:443 \\
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.pem \\
  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \\
  -p 443:443 \\
  registry:2
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),A={id:"添加认证",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#添加认证","aria-hidden":"true"},"#",-1),D={href:"https://docs.docker.com/registry/deploying/#restricting-access",target:"_blank",rel:"noopener noreferrer"},H=i(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>只用Docker界面配置时，可以将保存的用户密码文件<code>auth</code>目录挂载即可。</p></div><p>步骤按官网如下:</p><ol><li><p>为用户创建一个密码文件，其中包含一个条目，密码：testusertestpassword</p><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>mkdir auth
docker run \\
  --entrypoint htpasswd \\
  httpd:2 -Bbn testuser testpassword &gt; auth/htpasswd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Windows 上，请确保输出文件已正确编码：</p><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>docker run --rm --entrypoint htpasswd httpd:2 -Bbn testuser testpassword | Set-Content -Encoding ASCII auth/htpasswd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>停止注册表。</p><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>docker container stop registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用基本身份验证启动注册表。</p><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>docker run -d \\
  -p 5000:5000 \\
  --restart=always \\
  --name registry \\
  -v &quot;$(pwd)&quot;/auth:/auth \\
  -e &quot;REGISTRY_AUTH=htpasswd&quot; \\
  -e &quot;REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm&quot; \\
  -e REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd \\
  -v &quot;$(pwd)&quot;/certs:/certs \\
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \\
  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \\
  registry:2
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>尝试从注册表中提取镜像，或将镜像推送到注册表。 这些命令失败。</p></li><li><p>登录到注册表。</p><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>docker login myregistrydomain.com:5000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>提供第一步中的用户名和密码。</p><p>测试您现在可以从注册表中提取镜像或将镜像推送到 注册表</p></li></ol>`,3),C={id:"docker-registry-ui",tabindex:"-1"},L=n("a",{class:"header-anchor",href:"#docker-registry-ui","aria-hidden":"true"},"#",-1),G={href:"https://github.com/Joxit/docker-registry-ui",target:"_blank",rel:"noopener noreferrer"},w=i(`<h3 id="拉取docker-registry-ui" tabindex="-1"><a class="header-anchor" href="#拉取docker-registry-ui" aria-hidden="true">#</a> 拉取Docker Registry UI</h3><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>docker pull joxit/docker-registry-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动docker-registry-ui" tabindex="-1"><a class="header-anchor" href="#启动docker-registry-ui" aria-hidden="true">#</a> 启动Docker Registry UI</h3><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>docker run -d -p 8080:80 -e REGISTRY_URL=http://localhost:5000 --name docker-registry-ui joxit/docker-registry-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="预览docker-registry-ui" tabindex="-1"><a class="header-anchor" href="#预览docker-registry-ui" aria-hidden="true">#</a> 预览Docker Registry UI</h3><p>浏览器输入<code>http//localhost:8080</code></p><figure><img src="https://nas.ilyl.life:8092/docker/docker-registry-ui.png" alt="docker-registry-ui" width="420" height="200" tabindex="0" loading="lazy"><figcaption>docker-registry-ui</figcaption></figure><h3 id="添加docker-registry-ui-ssl" tabindex="-1"><a class="header-anchor" href="#添加docker-registry-ui-ssl" aria-hidden="true">#</a> 添加Docker Registry UI SSL</h3><p>内部使用<code>nginx</code>代理，配置<code>.conf</code>文件即可,其中需要改动的地方以高亮显示。</p><p><code>5-6行</code>:对应的证书位置</p><p><code>18行</code>:对应Docker Registry 访问地址</p><p><code>26行</code>:对应Docker Registry UI访问地址</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
  listen              443 ssl;
  ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers         HIGH:!aNULL:!MD5;
  ssl_certificate     /etc/nginx/certs/fullchain.pem;
  ssl_certificate_key /etc/nginx/certs/privkey.key;
  root /usr/share/nginx/html;

  # disable any limits to avoid HTTP 413 for large image uploads
  client_max_body_size 0;

  location /v2 {
      # Do not allow connections from docker 1.5 and earlier
      # docker pre-1.6.0 did not properly set the user agent on ping, catch &quot;Go *&quot; user agents
      if ($http_user_agent ~ &quot;^(docker\\/1\\.(3|4|5(.[0-9]-dev))|Go ).*$&quot; ) {
          return 404;
      }
      proxy_pass http://registry:5000;
  }
}

server {
  listen 80;
  location /  {
    # Force HTTPS
    return 301 https://$host$request_uri;
  }
}
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上传镜像" tabindex="-1"><a class="header-anchor" href="#上传镜像" aria-hidden="true">#</a> 上传镜像</h2><h3 id="标记镜像" tabindex="-1"><a class="header-anchor" href="#标记镜像" aria-hidden="true">#</a> 标记镜像</h3>`,15),Y={href:"https://docs.docker.com/engine/reference/commandline/tag/",target:"_blank",rel:"noopener noreferrer"},P=i(`<div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>docker tag ali.ddns-image 127.0.0.1:5000/ali.ddns-image:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送镜像" tabindex="-1"><a class="header-anchor" href="#推送镜像" aria-hidden="true">#</a> 推送镜像</h3>`,2),q={href:"https://docs.docker.com/engine/reference/commandline/push/",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"registry",-1),U=i(`<div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>docker push 127.0.0.1:5000/ali.ddns-image:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a> 拉取镜像</h3><p>删除本地已有镜像，从私有仓库拉取</p><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>docker pull 127.0.0.1:5000/ali.ddns-image:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="docker-registry-1" tabindex="-1"><a class="header-anchor" href="#docker-registry-1" aria-hidden="true">#</a> Docker Registry</h3><div class="language-command line-numbers-mode" data-ext="command"><pre class="language-command"><code>curl http://127.0.0.1:5000/v2/_catalog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>StatusCode        : 200
StatusDescription : OK
Content           : {&quot;repositories&quot;:[&quot;ali.ddns-image&quot;]}

RawContent        : HTTP/1.1 200 OK
                    Docker-Distribution-Api-Version: registry/2.0
                    X-Content-Type-Options: nosniff
                    Content-Length: 25
                    Content-Type: application/json; charset=utf-8
                    Date: ... GMT...
Forms             : {}
Headers           : {[Docker-Distribution-Api-Version, registry/2.0], [X-Content-Type-Options, nosniff], [Content-Length, 25], [Content-Type, application/json; charset=utf-8]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : System.__ComObject
RawContentLength  : 25
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-registry-ui-1" tabindex="-1"><a class="header-anchor" href="#docker-registry-ui-1" aria-hidden="true">#</a> Docker-Registry-UI</h3><p>浏览器输入<code>http//localhost:8080</code></p><figure><img src="https://nas.ilyl.life:8092/docker/docker-registry-ui2.png" alt="docker-registry-ui" width="420" height="200" tabindex="0" loading="lazy"><figcaption>docker-registry-ui</figcaption></figure>`,11);function N(j,M){const t=r("RouterLink"),a=r("ExternalLinkIcon");return l(),o("div",null,[n("p",null,[s("为了使用自己开发的"),e(t,{to:"/tools/docker/aliyun-ddns.html"},{default:d(()=>[s("阿里云解析")]),_:1}),s("而生。")]),p,v,n("p",null,[s("更多的配置可在"),n("a",m,[s("Docker Resistry"),e(a)]),s("和"),n("a",b,[s("Docker Resistry UI"),e(a)]),s("找到。")]),h,n("h2",g,[k,s(),n("a",_,[s("Docker Registry"),e(a)])]),y,n("h3",T,[R,s(),n("a",S,[s("修改配置("),f,s(")"),e(a)])]),E,n("p",null,[s("证书从服务提供商获取，"),e(t,{to:"/tools/nas/domain.html#ssl"},{default:d(()=>[s("示例")]),_:1})]),x,n("h3",A,[I,s(),n("a",D,[s("添加认证"),e(a)])]),H,n("h2",C,[L,s(),n("a",G,[s("Docker Registry UI"),e(a)])]),w,n("p",null,[n("a",Y,[s("Docker tag"),e(a)])]),P,n("p",null,[n("a",q,[s("Docker push"),e(a)]),s("，将本地镜像推送到"),O,s("仓库中")]),U])}const V=c(u,[["render",N],["__file","registry.html.vue"]]);export{V as default};
