const n=JSON.parse('{"key":"v-4bf187ee","path":"/cs/wpf/download.html","title":"下载","lang":"zh-CN","frontmatter":{"title":"下载","date":"2023-06-19T00:00:00.000Z","editLink":false,"footer":false,"isOriginal":true,"category":["C#"],"tag":["WPF"],"description":"下载时太快UI不显示时，可以加个延时，代码高亮处。 下载 //主机地址 const string BASE_URL = \\"http://localhost:80/\\"; //文件大小Byte const int ByteSize = 1024; //文件大小Kb const int KByteSize = 1024 * 1024; //缓存大小 const int DEFAULT_BUFFER_SIZE = 1024; //下载文件长度 string FileLength = \\"\\"; //已下载文件长度 string CurrentLength = \\"\\"; //下载文件最大进度 int MaxProgress = 0; //已下载文件当前进度 int CurrentProgress = 0; Console.WriteLine(\\"任意键开始下载...\\"); Console.ReadKey(); await ExecuteDownFileAsync(\\"iisstart.png\\"); async Task ExecuteDownFileAsync(string fileName, CancellationToken token = new CancellationToken()) { var url = $\\"{BASE_URL}{fileName}\\"; var uri = new Uri(url); using (var httpClient = new HttpClient()) { var response = await httpClient.GetAsync(uri, token).ConfigureAwait(false); if (!response.IsSuccessStatusCode) return; var allFileLength = response.Content.Headers.ContentLength; if (!allFileLength.HasValue) return; if (allFileLength &lt; ByteSize) { FileLength = $\\"{allFileLength}B\\"; MaxProgress = (int)allFileLength; } else if (allFileLength &gt; KByteSize) { FileLength = $\\"{allFileLength.Value / KByteSize:F2}MB\\"; MaxProgress = (int)allFileLength / 1000; } else { FileLength = $\\"{allFileLength.Value / ByteSize:F2}KB\\"; MaxProgress = (int)allFileLength / 1000; } var title = $\\"正在下载:{url}\\\\t文件大小:{FileLength}\\\\t\\"; Console.Write(title); var savePath = $\\"{Environment.CurrentDirectory}/{fileName}\\"; if (File.Exists(savePath)) { File.Delete(savePath); } var stream = await response.Content.ReadAsStreamAsync().ConfigureAwait(false); if (stream == null) return; using (var fileStream = new FileStream(savePath, FileMode.Create, FileAccess.Write)) { using (var streamReader = new StreamReader(stream)) { var bufferByte = new byte[DEFAULT_BUFFER_SIZE]; int startByte = 0; while (allFileLength &gt; 0) { var downByte = await stream.ReadAsync(bufferByte, 0, bufferByte.Length, token); if (downByte == 0) break; fileStream.Position = startByte; await fileStream.WriteAsync(bufferByte, 0, downByte, token); startByte += downByte; allFileLength -= downByte; if (startByte &lt; ByteSize) { CurrentLength = $\\"{startByte}\\"; CurrentProgress = startByte; } else if (startByte &gt; KByteSize) { CurrentLength = $\\"{startByte / KByteSize:F2}MB\\"; CurrentProgress = startByte / 1000; } else { CurrentLength = $\\"{startByte / ByteSize:F2}KB\\"; CurrentProgress = startByte / 1000; } Console.SetCursorPosition(title.Length+18, 0); Console.Write($\\"已完成:{CurrentLength}\\"); await Task.Delay(100); } } fileStream.Flush(); } } } &nbsp;","head":[["meta",{"property":"og:url","content":"https://ilyl.life/cs/wpf/download.html"}],["meta",{"property":"og:site_name","content":"乌龙茶有点甜"}],["meta",{"property":"og:title","content":"下载"}],["meta",{"property":"og:description","content":"下载时太快UI不显示时，可以加个延时，代码高亮处。 下载 //主机地址 const string BASE_URL = \\"http://localhost:80/\\"; //文件大小Byte const int ByteSize = 1024; //文件大小Kb const int KByteSize = 1024 * 1024; //缓存大小 const int DEFAULT_BUFFER_SIZE = 1024; //下载文件长度 string FileLength = \\"\\"; //已下载文件长度 string CurrentLength = \\"\\"; //下载文件最大进度 int MaxProgress = 0; //已下载文件当前进度 int CurrentProgress = 0; Console.WriteLine(\\"任意键开始下载...\\"); Console.ReadKey(); await ExecuteDownFileAsync(\\"iisstart.png\\"); async Task ExecuteDownFileAsync(string fileName, CancellationToken token = new CancellationToken()) { var url = $\\"{BASE_URL}{fileName}\\"; var uri = new Uri(url); using (var httpClient = new HttpClient()) { var response = await httpClient.GetAsync(uri, token).ConfigureAwait(false); if (!response.IsSuccessStatusCode) return; var allFileLength = response.Content.Headers.ContentLength; if (!allFileLength.HasValue) return; if (allFileLength &lt; ByteSize) { FileLength = $\\"{allFileLength}B\\"; MaxProgress = (int)allFileLength; } else if (allFileLength &gt; KByteSize) { FileLength = $\\"{allFileLength.Value / KByteSize:F2}MB\\"; MaxProgress = (int)allFileLength / 1000; } else { FileLength = $\\"{allFileLength.Value / ByteSize:F2}KB\\"; MaxProgress = (int)allFileLength / 1000; } var title = $\\"正在下载:{url}\\\\t文件大小:{FileLength}\\\\t\\"; Console.Write(title); var savePath = $\\"{Environment.CurrentDirectory}/{fileName}\\"; if (File.Exists(savePath)) { File.Delete(savePath); } var stream = await response.Content.ReadAsStreamAsync().ConfigureAwait(false); if (stream == null) return; using (var fileStream = new FileStream(savePath, FileMode.Create, FileAccess.Write)) { using (var streamReader = new StreamReader(stream)) { var bufferByte = new byte[DEFAULT_BUFFER_SIZE]; int startByte = 0; while (allFileLength &gt; 0) { var downByte = await stream.ReadAsync(bufferByte, 0, bufferByte.Length, token); if (downByte == 0) break; fileStream.Position = startByte; await fileStream.WriteAsync(bufferByte, 0, downByte, token); startByte += downByte; allFileLength -= downByte; if (startByte &lt; ByteSize) { CurrentLength = $\\"{startByte}\\"; CurrentProgress = startByte; } else if (startByte &gt; KByteSize) { CurrentLength = $\\"{startByte / KByteSize:F2}MB\\"; CurrentProgress = startByte / 1000; } else { CurrentLength = $\\"{startByte / ByteSize:F2}KB\\"; CurrentProgress = startByte / 1000; } Console.SetCursorPosition(title.Length+18, 0); Console.Write($\\"已完成:{CurrentLength}\\"); await Task.Delay(100); } } fileStream.Flush(); } } } &nbsp;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-26T07:17:54.000Z"}],["meta",{"property":"article:author","content":"乌龙茶"}],["meta",{"property":"article:tag","content":"WPF"}],["meta",{"property":"article:published_time","content":"2023-06-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-26T07:17:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"下载\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-26T07:17:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乌龙茶\\",\\"url\\":\\"https://ilyl.life\\",\\"email\\":\\"mailto:982474256@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1687857321000,"updatedTime":1706253474000,"contributors":[{"name":"乌龙茶","email":"982474256@qq.com","commits":10}]},"readingTime":{"minutes":1.17,"words":350},"filePathRelative":"cs/wpf/download.md","localizedDate":"2023年6月19日","excerpt":"<p>下载时太快UI不显示时，可以加个延时，代码高亮处。</p>\\n<figure><img src=\\"https://nas.ilyl.life:8092/wpf/download.gif\\" alt=\\"下载\\" width=\\"420\\" height=\\"200\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>下载</figcaption></figure>\\n<div class=\\"language-csharp line-numbers-mode\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token comment\\">//主机地址</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token class-name\\"><span class=\\"token keyword\\">string</span></span> BASE_URL <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"http://localhost:80/\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">//文件大小Byte</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token class-name\\"><span class=\\"token keyword\\">int</span></span> ByteSize <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1024</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">//文件大小Kb</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token class-name\\"><span class=\\"token keyword\\">int</span></span> KByteSize <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1024</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">1024</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">//缓存大小</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token class-name\\"><span class=\\"token keyword\\">int</span></span> DEFAULT_BUFFER_SIZE <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1024</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">//下载文件长度</span>\\n<span class=\\"token class-name\\"><span class=\\"token keyword\\">string</span></span> FileLength <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">//已下载文件长度</span>\\n<span class=\\"token class-name\\"><span class=\\"token keyword\\">string</span></span> CurrentLength <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">//下载文件最大进度</span>\\n<span class=\\"token class-name\\"><span class=\\"token keyword\\">int</span></span> MaxProgress <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">//已下载文件当前进度</span>\\n<span class=\\"token class-name\\"><span class=\\"token keyword\\">int</span></span> CurrentProgress <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n\\nConsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WriteLine</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"任意键开始下载...\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nConsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ReadKey</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">await</span> <span class=\\"token function\\">ExecuteDownFileAsync</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"iisstart.png\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">async</span> <span class=\\"token return-type class-name\\">Task</span> <span class=\\"token function\\">ExecuteDownFileAsync</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\"><span class=\\"token keyword\\">string</span></span> fileName<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">CancellationToken</span> token <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">CancellationToken</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> url <span class=\\"token operator\\">=</span> <span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">BASE_URL</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">fileName</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">\\"</span></span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> uri <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">Uri</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">using</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> httpClient <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">HttpClient</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> response <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> httpClient<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">GetAsync</span><span class=\\"token punctuation\\">(</span>uri<span class=\\"token punctuation\\">,</span> token<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ConfigureAwait</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>response<span class=\\"token punctuation\\">.</span>IsSuccessStatusCode<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> allFileLength <span class=\\"token operator\\">=</span> response<span class=\\"token punctuation\\">.</span>Content<span class=\\"token punctuation\\">.</span>Headers<span class=\\"token punctuation\\">.</span>ContentLength<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>allFileLength<span class=\\"token punctuation\\">.</span>HasValue<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>allFileLength <span class=\\"token operator\\">&lt;</span> ByteSize<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">{</span>\\n            FileLength <span class=\\"token operator\\">=</span> <span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">allFileLength</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">B\\"</span></span><span class=\\"token punctuation\\">;</span>\\n            MaxProgress <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">)</span>allFileLength<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>allFileLength <span class=\\"token operator\\">&gt;</span> KByteSize<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">{</span>\\n            FileLength <span class=\\"token operator\\">=</span> <span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">allFileLength<span class=\\"token punctuation\\">.</span>Value <span class=\\"token operator\\">/</span> KByteSize</span><span class=\\"token format-string\\"><span class=\\"token punctuation\\">:</span>F2</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">MB\\"</span></span><span class=\\"token punctuation\\">;</span>\\n            MaxProgress <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">)</span>allFileLength <span class=\\"token operator\\">/</span> <span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">else</span>\\n        <span class=\\"token punctuation\\">{</span>\\n            FileLength <span class=\\"token operator\\">=</span> <span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">allFileLength<span class=\\"token punctuation\\">.</span>Value <span class=\\"token operator\\">/</span> ByteSize</span><span class=\\"token format-string\\"><span class=\\"token punctuation\\">:</span>F2</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">KB\\"</span></span><span class=\\"token punctuation\\">;</span>\\n            MaxProgress <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">)</span>allFileLength <span class=\\"token operator\\">/</span> <span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> title <span class=\\"token operator\\">=</span> <span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"正在下载:</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">url</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">\\\\t文件大小:</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">FileLength</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">\\\\t\\"</span></span><span class=\\"token punctuation\\">;</span>\\n        Console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Write</span><span class=\\"token punctuation\\">(</span>title<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> savePath <span class=\\"token operator\\">=</span> <span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">Environment<span class=\\"token punctuation\\">.</span>CurrentDirectory</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">/</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">fileName</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">\\"</span></span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>File<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Exists</span><span class=\\"token punctuation\\">(</span>savePath<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">{</span>\\n            File<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Delete</span><span class=\\"token punctuation\\">(</span>savePath<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> stream <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> response<span class=\\"token punctuation\\">.</span>Content<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ReadAsStreamAsync</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ConfigureAwait</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>stream <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">using</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> fileStream <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">FileStream</span><span class=\\"token punctuation\\">(</span>savePath<span class=\\"token punctuation\\">,</span> FileMode<span class=\\"token punctuation\\">.</span>Create<span class=\\"token punctuation\\">,</span> FileAccess<span class=\\"token punctuation\\">.</span>Write<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">using</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> streamReader <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">StreamReader</span><span class=\\"token punctuation\\">(</span>stream<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> bufferByte <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\"><span class=\\"token keyword\\">byte</span></span><span class=\\"token punctuation\\">[</span>DEFAULT_BUFFER_SIZE<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token class-name\\"><span class=\\"token keyword\\">int</span></span> startByte <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n\\n                <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>allFileLength <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n                <span class=\\"token punctuation\\">{</span>\\n                    <span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> downByte <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> stream<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ReadAsync</span><span class=\\"token punctuation\\">(</span>bufferByte<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> bufferByte<span class=\\"token punctuation\\">.</span>Length<span class=\\"token punctuation\\">,</span> token<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>downByte <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n\\n                    fileStream<span class=\\"token punctuation\\">.</span>Position <span class=\\"token operator\\">=</span> startByte<span class=\\"token punctuation\\">;</span>\\n                    \\n                    <span class=\\"token keyword\\">await</span> fileStream<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WriteAsync</span><span class=\\"token punctuation\\">(</span>bufferByte<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> downByte<span class=\\"token punctuation\\">,</span> token<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n                    startByte <span class=\\"token operator\\">+=</span> downByte<span class=\\"token punctuation\\">;</span>\\n                    allFileLength <span class=\\"token operator\\">-=</span> downByte<span class=\\"token punctuation\\">;</span>\\n\\n                    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>startByte <span class=\\"token operator\\">&lt;</span> ByteSize<span class=\\"token punctuation\\">)</span>\\n                    <span class=\\"token punctuation\\">{</span>\\n                        CurrentLength <span class=\\"token operator\\">=</span> <span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">startByte</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">\\"</span></span><span class=\\"token punctuation\\">;</span>\\n                        CurrentProgress <span class=\\"token operator\\">=</span> startByte<span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token punctuation\\">}</span>\\n                    <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>startByte <span class=\\"token operator\\">&gt;</span> KByteSize<span class=\\"token punctuation\\">)</span>\\n                    <span class=\\"token punctuation\\">{</span>\\n                        CurrentLength <span class=\\"token operator\\">=</span> <span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">startByte <span class=\\"token operator\\">/</span> KByteSize</span><span class=\\"token format-string\\"><span class=\\"token punctuation\\">:</span>F2</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">MB\\"</span></span><span class=\\"token punctuation\\">;</span>\\n                        CurrentProgress <span class=\\"token operator\\">=</span> startByte <span class=\\"token operator\\">/</span> <span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token punctuation\\">}</span>\\n                    <span class=\\"token keyword\\">else</span>\\n                    <span class=\\"token punctuation\\">{</span>\\n                        CurrentLength <span class=\\"token operator\\">=</span> <span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">startByte <span class=\\"token operator\\">/</span> ByteSize</span><span class=\\"token format-string\\"><span class=\\"token punctuation\\">:</span>F2</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">KB\\"</span></span><span class=\\"token punctuation\\">;</span>\\n                        CurrentProgress <span class=\\"token operator\\">=</span> startByte <span class=\\"token operator\\">/</span> <span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token punctuation\\">}</span>\\n                    Console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">SetCursorPosition</span><span class=\\"token punctuation\\">(</span>title<span class=\\"token punctuation\\">.</span>Length<span class=\\"token operator\\">+</span><span class=\\"token number\\">18</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                    Console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Write</span><span class=\\"token punctuation\\">(</span><span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"已完成:</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span><span class=\\"token expression language-csharp\\">CurrentLength</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">\\"</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token keyword\\">await</span> Task<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Delay</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">100</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span>\\n            <span class=\\"token punctuation\\">}</span>\\n            fileStream<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Flush</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"highlight-lines\\"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class=\\"highlight-line\\">&nbsp;</div><br><br><br><br><br><br><br></div><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
