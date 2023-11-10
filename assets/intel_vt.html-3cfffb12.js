import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c,f as d}from"./app-0a054e5b.js";const i={},t=d('<p>启动虚拟机出现&quot;此主机支持Intel VT-x,但Intel VT-x处于禁用状态&quot;</p><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p>电脑没有开启虚拟化,进入BIOS开启即可。</p><h2 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><ol><li><p>不同电脑进入BIOS按键不一样，常见的有<code>F2</code>、<code>F12</code>、<code>F10</code>以及它们的组合键<code>Fn</code>+<code>F2</code>...</p></li><li><p>不同电脑BIOS也不一样，需要自己查找，总体上是相差不大。</p></li></ol></div><ol><li>重启电脑,<code>F2</code>进入BIOS界面</li><li>找到<code>高级</code>选项,有的主板需要<code>F7</code>进入后才能找到</li><li>找到包含<code>Virtualization</code>的选项，将<code>Disabled</code>改为<code>Enabled</code></li><li>保存配置并重启</li></ol>',6),l=[t];function a(n,r){return o(),c("div",null,l)}const _=e(i,[["render",a],["__file","intel_vt.html.vue"]]);export{_ as default};
