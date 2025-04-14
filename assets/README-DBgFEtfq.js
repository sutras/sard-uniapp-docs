import{M as s}from"./index-CBlzchx7.js";import{d as t,c as n,o}from"./index-qoRthkGm.js";const e=`<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>用于自定义导航栏时的状态栏占位，<code>Navbar</code>、<code>Notify</code> 等定位在顶部的元素会使用到。</p>
<p>状态栏高度是通过 <code>uni.getSystemInfoSync().statusBarHeight</code> 获取的，在 <code>app</code>, <code>h5</code> 和小程序都可以直接使用，在 <code>h5</code> 端状态栏高度为 0，其他两个端为设备的状态栏的高度。</p>
<div class="doc-alert doc-alert-info">
  <div class="doc-alert-title">
    <i class="doc-alert-icon hsi hsi-chat-right-text"></i>
    提示
  </div>
  <div class="doc-alert-content">
<p>如果应用是嵌套在 <code>app</code> 的 <code>webview</code> 中，<code>uniapp</code> 提供的接口获取的状态栏高度跟 <code>h5</code> 一样，都是 0；如果要全屏展示，则需要 <code>app</code> 原生那边提供接口来获取状态栏高度。</p>
<p>针对此场景，要使 <code>StatusBar</code> 正常使用，需要全局设置 <code>StatusBar</code> 组件的 <code>height</code> 属性，且要设置为一个 <code>css</code> 变量，在获取到手机状态栏高度时，将其声明到 <code>html</code> 元素上。举例如下：</p>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token comment">// main.ts</span>

<span class="token comment">// 1. 全局设置 \`StatusBar\` 组件的 \`height\` 属性</span>
<span class="token comment">// !!! 切记变量名不要设置为 \`--status-bar-height\`，避免被 uniapp 覆盖掉。</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> setConfig <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token function">setConfig</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  statusBar<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    height<span class="token operator">:</span> <span class="token string">'var(--app-status-bar-height)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token comment">// 2. 获取状态栏高度</span>
<span class="token comment">// 假设接口如下</span>
<span class="token keyword">const</span> statusBarHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>toggle<span class="token punctuation">.</span><span class="token function">getBarHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 3. 声明到 html 元素上</span>
document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span>
  <span class="token string">'--app-status-bar-height'</span><span class="token punctuation">,</span>
  statusBarHeight <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre>
</div>  </div>
</div>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> StatusBar <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/status-bar/status-bar.vue'</span>
</code></pre>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-status-bar</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="StatusBarProps">StatusBarProps<a class="doc-anchor" href="#StatusBarProps">#</a></h3>
<div class="doc-table-responsive"><table><thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>root-class</td>
<td>组件根元素类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>root-style</td>
<td>组件根元素样式</td>
<td>StyleValue</td>
<td>-</td>
</tr>
<tr>
<td>height</td>
<td>手动设置状态栏高度，</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>reverse</td>
<td>设置宽度而不是高度</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div><h3 id="StatusBarSlots">StatusBarSlots<a class="doc-anchor" href="#StatusBarSlots">#</a></h3>
<div class="doc-table-responsive"><table><thead>
<tr>
<th>插槽</th>
<th>描述</th>
<th>属性</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>自定义默认内容</td>
<td>-</td>
</tr>
</tbody>
</table></div>`,i=t({__name:"README",setup(p){const a={nav:"组件",title:"StatusBar",subtitle:"状态栏",group:"布局",version:"1.12+"};return(c,d)=>(o(),n(s,{content:e,fm:a}))}});export{i as default};
