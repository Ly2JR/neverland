import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c,a,e as n,b as t,f as p}from"./app-0a054e5b.js";const i={},u=p('<p>WPF提供了控件样式，供自己定制化需求。</p><p>但是有个别特殊需求时，需要在重复生成时控件,显示不同的效果或者大小。</p><p>以海康视频布局，一分屏、四分屏、六分屏为例。</p><figure><img src="https://nas.ilyl.life:8092/wpf/hik_layout.gif" alt="不等布局" width="420" height="200" tabindex="0" loading="lazy"><figcaption>不等布局</figcaption></figure><h2 id="通过代码方式" tabindex="-1"><a class="header-anchor" href="#通过代码方式" aria-hidden="true">#</a> 通过代码方式</h2><p>通过代码方式进行布局,不在WPF范围考虑之内。</p><h2 id="通过固定布局的方式" tabindex="-1"><a class="header-anchor" href="#通过固定布局的方式" aria-hidden="true">#</a> 通过固定布局的方式</h2><p>通过写固定的一分屏，四分屏，六分屏三种用户控件，这种也不再考虑范围之内</p><h2 id="通过style方式" tabindex="-1"><a class="header-anchor" href="#通过style方式" aria-hidden="true">#</a> 通过Style方式</h2>',9),k={href:"https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.controls.itemscontrol?view=windowsdesktop-7.0",target:"_blank",rel:"noopener noreferrer"},r={href:"https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/controls/listbox-styles-and-templates?view=netframeworkdesktop-4.8",target:"_blank",rel:"noopener noreferrer"},d=p(`<p>因为<code>ListBox</code>带<code>IsSelected</code>属性，利用这个进行改造。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用了Prism</p></div><ol><li><p>定义模型<code>VideoModel.cs</code></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VideoModel</span><span class="token punctuation">:</span><span class="token type-list"><span class="token class-name">BindableBase</span></span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span></span> _index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Index
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> _index<span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token keyword">set</span> <span class="token punctuation">{</span> <span class="token function">SetProperty</span><span class="token punctuation">(</span><span class="token keyword">ref</span> _index<span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">string</span></span> _playImg <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> PlayImg
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> _playImg<span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token keyword">set</span> <span class="token punctuation">{</span> <span class="token function">SetProperty</span><span class="token punctuation">(</span><span class="token keyword">ref</span> _playImg<span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token range operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>绑定模型<code>MainViewModel.cs</code></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainViewModel</span><span class="token punctuation">{</span>
     <span class="token keyword">public</span> <span class="token return-type class-name">ObservableCollection<span class="token punctuation">&lt;</span>VideoModel<span class="token punctuation">&gt;</span></span> Items <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span><span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

     <span class="token keyword">public</span> <span class="token function">MainViewModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         Items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ObservableCollection<span class="token punctuation">&lt;</span>VideoModel<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>基本布局,主页面<code>MainView.xmal</code></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Grid</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListBox</span>  <span class="token attr-name">ItemsSource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Binding Items}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Grid</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加<code>DataTemplate</code>，设计显示样式</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这里有两个关键点，代码高亮处。</p><ol><li>使用<code>Grid</code>进行布局，为了切换默认图片和实际视频播放</li><li><code>Grid</code>使用了<code>Transparent</code>透明背景色，解决当选中时修改边框颜色不生效的问题</li></ol></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataTemplate</span> <span class="token attr-name"><span class="token namespace">x:</span>Key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VideoItemTemplate<span class="token punctuation">&quot;</span></span> <span class="token attr-name">DataType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{x:Type ListBoxItem}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Grid</span> <span class="token attr-name">Background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Transparent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextBlock</span> <span class="token attr-name">Text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Binding Index}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image</span> <span class="token attr-name">Width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>48<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">Height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>48<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">HorizontalAlignment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Center<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">VerticalAlignment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Center<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">Source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Binding PlayImg}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Grid</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DataTemplate</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加<code>ItemsPanelTemplate</code>，设置Item容器</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用<code>Grid</code>作为Item的容器，并设置六行六列，正好同时满足1、4、6分屏的需求。</p></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ItemsPanelTemplate</span> <span class="token attr-name"><span class="token namespace">x:</span>Key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VideoItemPanelTemplate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Grid</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Grid.ColumnDefinitions</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColumnDefinition</span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColumnDefinition</span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColumnDefinition</span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColumnDefinition</span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColumnDefinition</span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColumnDefinition</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Grid.ColumnDefinitions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Grid.RowDefinitions</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RowDefinition</span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RowDefinition</span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RowDefinition</span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RowDefinition</span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RowDefinition</span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RowDefinition</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Grid.RowDefinitions</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Grid</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ItemsPanelTemplate</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置<code>ListBoxItem</code>样式,添加边框及选择效果</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Style</span> <span class="token attr-name"><span class="token namespace">x:</span>Key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VideoItemContainerStyle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">TargetType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{x:Type ListBoxItem}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Setter</span> <span class="token attr-name">Property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Cursor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Hand<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Setter</span> <span class="token attr-name">Property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Template<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Setter.Value</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlTemplate</span> <span class="token attr-name">TargetType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{x:Type ListBoxItem}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Border</span> <span class="token attr-name"><span class="token namespace">x:</span>Name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>PART_HIK_BORDER<span class="token punctuation">&quot;</span></span>
                         <span class="token attr-name">BorderBrush</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{StaticResource #979797}<span class="token punctuation">&quot;</span></span>
                         <span class="token attr-name">BorderThickness</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentPresenter</span> <span class="token punctuation">/&gt;</span></span>
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Border</span><span class="token punctuation">&gt;</span></span>
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlTemplate.Triggers</span><span class="token punctuation">&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Trigger</span> <span class="token attr-name">Property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IsSelected<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>True<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Setter</span> <span class="token attr-name">TargetName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>PART_HIK_BORDER<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BorderBrush<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Red<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Trigger</span><span class="token punctuation">&gt;</span></span>
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ControlTemplate.Triggers</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ControlTemplate</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Setter.Value</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Setter</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>应用<code>ListBox</code>，最终布局<code>MainView.xaml</code></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Grid</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListBox</span> <span class="token attr-name">ItemContainerStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{StaticResource VideoItemContainerStyle}<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">ItemTemplate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{StaticResource VideoItemTemplate}<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">ItemsPanel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{StaticResource VideoItemPanelTemplate}<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">ItemsSource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Binding Items}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Grid</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>调试效果</p><p>实际运行发现并没有达到要求，全部挤在了<code>0行0列</code>中。</p><p>理论没有问题，关键是如果将每个数据模板内容，放在指定的行列中。</p><p>只要添加几行代码进行位置绑定即可</p></li><li><p>完善<code>ListBoxItem</code>样式</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>Grid</code>的<code>Row</code>、<code>RowSpan</code>、<code>Column</code>、<code>ColumnSpan</code>为依赖属性，可以绑定VM</p><p><code>Binding</code>中的<code>Row</code>、<code>RowSpan</code>、<code>Column</code>、<code>ColumnSpan</code>为<code>VideoModel.cs</code>的属性。</p></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Style</span> <span class="token attr-name"><span class="token namespace">x:</span>Key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VideoItemContainerStyle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">TargetType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{x:Type ListBoxItem}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Setter</span> <span class="token attr-name">Property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Grid.Row<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Binding Row}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Setter</span> <span class="token attr-name">Property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Grid.RowSpan<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Binding RowSpan}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Setter</span> <span class="token attr-name">Property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Grid.Column<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Binding Column}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Setter</span> <span class="token attr-name">Property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Grid.ColumnSpan<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Binding ColumnSpan}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    ...
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="其他方式" tabindex="-1"><a class="header-anchor" href="#其他方式" aria-hidden="true">#</a> 其他方式</h2><p>与通过<code>Grid</code>进行分割布局类似。也是利用<code>ListBox</code>进行改造。</p><p>问题在于如何修改每个内容的实际大小。</p><p>这个可以利用继承<code>Panel</code>类，通过<code>ArrangeOverride</code>和<code>MeasureOverride</code>方法计算，绘制出实际的大小。</p>`,7);function v(m,g){const s=o("ExternalLinkIcon");return l(),c("div",null,[u,a("p",null,[n("为了批量生成，利用"),a("a",k,[n("ItemsControl"),t(s)]),n("或者"),a("a",r,[n("ListBox"),t(s)]),n("控件进行样式调整。")]),d])}const h=e(i,[["render",v],["__file","dynamic-layout.html.vue"]]);export{h as default};
