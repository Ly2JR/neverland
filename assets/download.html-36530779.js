import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-0a054e5b.js";const p={},e=t(`<p>下载时太快UI不显示时，可以加个延时，代码高亮处。</p><figure><img src="https://nas.ilyl.life:8092/wpf/download.gif" alt="下载" width="420" height="200" tabindex="0" loading="lazy"><figcaption>下载</figcaption></figure><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//主机地址</span>
<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> BASE_URL <span class="token operator">=</span> <span class="token string">&quot;http://localhost:80/&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//文件大小Byte</span>
<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">int</span></span> ByteSize <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token comment">//文件大小Kb</span>
<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">int</span></span> KByteSize <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token comment">//缓存大小</span>
<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">int</span></span> DEFAULT_BUFFER_SIZE <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token comment">//下载文件长度</span>
<span class="token class-name"><span class="token keyword">string</span></span> FileLength <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//已下载文件长度</span>
<span class="token class-name"><span class="token keyword">string</span></span> CurrentLength <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//下载文件最大进度</span>
<span class="token class-name"><span class="token keyword">int</span></span> MaxProgress <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">//已下载文件当前进度</span>
<span class="token class-name"><span class="token keyword">int</span></span> CurrentProgress <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;任意键开始下载...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> <span class="token function">ExecuteDownFileAsync</span><span class="token punctuation">(</span><span class="token string">&quot;iisstart.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">ExecuteDownFileAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> fileName<span class="token punctuation">,</span> <span class="token class-name">CancellationToken</span> token <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CancellationToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> url <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">BASE_URL</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">fileName</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> uri <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Uri</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> httpClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HttpClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token keyword">await</span> httpClient<span class="token punctuation">.</span><span class="token function">GetAsync</span><span class="token punctuation">(</span>uri<span class="token punctuation">,</span> token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ConfigureAwait</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>IsSuccessStatusCode<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> allFileLength <span class="token operator">=</span> response<span class="token punctuation">.</span>Content<span class="token punctuation">.</span>Headers<span class="token punctuation">.</span>ContentLength<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>allFileLength<span class="token punctuation">.</span>HasValue<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>allFileLength <span class="token operator">&lt;</span> ByteSize<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            FileLength <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">allFileLength</span><span class="token punctuation">}</span></span><span class="token string">B&quot;</span></span><span class="token punctuation">;</span>
            MaxProgress <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>allFileLength<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>allFileLength <span class="token operator">&gt;</span> KByteSize<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            FileLength <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">allFileLength<span class="token punctuation">.</span>Value <span class="token operator">/</span> KByteSize</span><span class="token format-string"><span class="token punctuation">:</span>F2</span><span class="token punctuation">}</span></span><span class="token string">MB&quot;</span></span><span class="token punctuation">;</span>
            MaxProgress <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>allFileLength <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            FileLength <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">allFileLength<span class="token punctuation">.</span>Value <span class="token operator">/</span> ByteSize</span><span class="token format-string"><span class="token punctuation">:</span>F2</span><span class="token punctuation">}</span></span><span class="token string">KB&quot;</span></span><span class="token punctuation">;</span>
            MaxProgress <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>allFileLength <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name"><span class="token keyword">var</span></span> title <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;正在下载:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">url</span><span class="token punctuation">}</span></span><span class="token string">\\t文件大小:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">FileLength</span><span class="token punctuation">}</span></span><span class="token string">\\t&quot;</span></span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> savePath <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">Environment<span class="token punctuation">.</span>CurrentDirectory</span><span class="token punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">fileName</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>File<span class="token punctuation">.</span><span class="token function">Exists</span><span class="token punctuation">(</span>savePath<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            File<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span>savePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name"><span class="token keyword">var</span></span> stream <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span>Content<span class="token punctuation">.</span><span class="token function">ReadAsStreamAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ConfigureAwait</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>stream <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> fileStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FileStream</span><span class="token punctuation">(</span>savePath<span class="token punctuation">,</span> FileMode<span class="token punctuation">.</span>Create<span class="token punctuation">,</span> FileAccess<span class="token punctuation">.</span>Write<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> streamReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">StreamReader</span><span class="token punctuation">(</span>stream<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token class-name"><span class="token keyword">var</span></span> bufferByte <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">byte</span></span><span class="token punctuation">[</span>DEFAULT_BUFFER_SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token class-name"><span class="token keyword">int</span></span> startByte <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

                <span class="token keyword">while</span> <span class="token punctuation">(</span>allFileLength <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token class-name"><span class="token keyword">var</span></span> downByte <span class="token operator">=</span> <span class="token keyword">await</span> stream<span class="token punctuation">.</span><span class="token function">ReadAsync</span><span class="token punctuation">(</span>bufferByte<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> bufferByte<span class="token punctuation">.</span>Length<span class="token punctuation">,</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>downByte <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>

                    fileStream<span class="token punctuation">.</span>Position <span class="token operator">=</span> startByte<span class="token punctuation">;</span>
                    
                    <span class="token keyword">await</span> fileStream<span class="token punctuation">.</span><span class="token function">WriteAsync</span><span class="token punctuation">(</span>bufferByte<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> downByte<span class="token punctuation">,</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>

                    startByte <span class="token operator">+=</span> downByte<span class="token punctuation">;</span>
                    allFileLength <span class="token operator">-=</span> downByte<span class="token punctuation">;</span>

                    <span class="token keyword">if</span> <span class="token punctuation">(</span>startByte <span class="token operator">&lt;</span> ByteSize<span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        CurrentLength <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">startByte</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">;</span>
                        CurrentProgress <span class="token operator">=</span> startByte<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>startByte <span class="token operator">&gt;</span> KByteSize<span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        CurrentLength <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">startByte <span class="token operator">/</span> KByteSize</span><span class="token format-string"><span class="token punctuation">:</span>F2</span><span class="token punctuation">}</span></span><span class="token string">MB&quot;</span></span><span class="token punctuation">;</span>
                        CurrentProgress <span class="token operator">=</span> startByte <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">else</span>
                    <span class="token punctuation">{</span>
                        CurrentLength <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">startByte <span class="token operator">/</span> ByteSize</span><span class="token format-string"><span class="token punctuation">:</span>F2</span><span class="token punctuation">}</span></span><span class="token string">KB&quot;</span></span><span class="token punctuation">;</span>
                        CurrentProgress <span class="token operator">=</span> startByte <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    Console<span class="token punctuation">.</span><span class="token function">SetCursorPosition</span><span class="token punctuation">(</span>title<span class="token punctuation">.</span>Length<span class="token operator">+</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;已完成:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">CurrentLength</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">await</span> Task<span class="token punctuation">.</span><span class="token function">Delay</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            fileStream<span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","download.html.vue"]]);export{k as default};
