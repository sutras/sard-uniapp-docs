import{u as a}from"./useCodeTool-bcffc59d.js";import{d as s,c as n,o as t}from"./index-28a3fb09.js";const p=`<h1 id="Loading加载">Loading 加载<a class="doc-anchor" href="#Loading加载">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>表示处理中的状态。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@sard/uniapp/dist/loading/loading.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-loading</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="加载类型">加载类型<a class="doc-anchor" href="#加载类型">#</a></h3>
<p>使用<code>type</code>属性设置不同类型。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-loading</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circular<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-loading</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clock<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="加载文案">加载文案<a class="doc-anchor" href="#加载文案">#</a></h3>
<p>通过<code>text</code>属性或者默认插槽展示文字。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-loading</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-loading</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-loading</span><span class="token punctuation">></span></span>slot text...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-loading</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="垂直排布">垂直排布<a class="doc-anchor" href="#垂直排布">#</a></h3>
<p>通过<code>vertical</code>属性设置图标和文字垂直排布。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-loading</span> <span class="token attr-name">vertical</span><span class="token punctuation">></span></span>加载中...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-loading</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="加载尺寸">加载尺寸<a class="doc-anchor" href="#加载尺寸">#</a></h3>
<p><code>size</code>属性设置图标大小，<code>textSize</code>属性设置文字大小。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-loading</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>48rpx<span class="token punctuation">"</span></span> <span class="token attr-name">text-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>36rpx<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>加载中<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p><code>color</code>属性设置图标颜色，<code>textColor</code>属性设置文字颜色。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-loading</span>
    <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>var(--sar-primary)<span class="token punctuation">"</span></span>
    <span class="token attr-name">text-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>var(--sar-primary)<span class="token punctuation">"</span></span>
    <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>加载中<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="LoadingProps">LoadingProps<a class="doc-anchor" href="#LoadingProps">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
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
<td>type</td>
<td>加载类型</td>
<td>'clock' | 'circular'</td>
<td>'circular'</td>
</tr>
<tr>
<td>color</td>
<td>加载颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>图标尺寸</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>text</td>
<td>图标文字</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>text-color</td>
<td>文字颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>text-size</td>
<td>文字尺寸</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>vertical</td>
<td>是否垂直排列图标和文案</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="LoadingSlots">LoadingSlots<a class="doc-anchor" href="#LoadingSlots">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>插槽</th>
<th>描述</th>
<th>属性</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>自定义加载文字内容</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-loading-icon-min-width</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-loading-icon-min-height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-loading-icon-animation-duration</span><span class="token punctuation">:</span> 0.8s<span class="token punctuation">;</span>

  <span class="token property">--sar-loading-scale-width</span><span class="token punctuation">:</span> 8%<span class="token punctuation">;</span>
  <span class="token property">--sar-loading-scale-min-width</span><span class="token punctuation">:</span> 3rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-loading-scale-height</span><span class="token punctuation">:</span> 28%<span class="token punctuation">;</span>
  <span class="token property">--sar-loading-scale-border-radius</span><span class="token punctuation">:</span> 40%<span class="token punctuation">;</span>

  <span class="token property">--sar-loading-text-margin-left</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-loading-text-vertical-margin-top</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,d=s({__name:"README",setup(o){return a(),(c,e)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{d as default};
