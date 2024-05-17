import{u as n}from"./useCodeTool-MhyGaRwJ.js";import{d as a,c as s,o as t}from"./index-CjTGEgwI.js";const p=`<h1 id="Button按钮">Button 按钮<a class="doc-anchor" href="#Button按钮">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>按钮用于开始一个即时操作。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/button/button.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="按钮类型">按钮类型<a class="doc-anchor" href="#按钮类型">#</a></h3>
<p><code>type</code>属性用于配置按钮的类型。</p>
<h3 id="按钮主题色">按钮主题色<a class="doc-anchor" href="#按钮主题色">#</a></h3>
<p><code>Button</code>组件内置了几个主题色，可以使用<code>theme</code>属性来配置。</p>
<h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>如果内置主题色不合适，可以自定义主题色。使用<code>color</code>和<code>background</code>属性定义字体颜色和背景色。</p>
<h3 id="圆形按钮">圆形按钮<a class="doc-anchor" href="#圆形按钮">#</a></h3>
<p>使用<code>round</code>属性设置为圆形按钮。</p>
<h3 id="禁用按钮">禁用按钮<a class="doc-anchor" href="#禁用按钮">#</a></h3>
<p>禁用状态的按钮不可点击。</p>
<h3 id="按钮尺寸">按钮尺寸<a class="doc-anchor" href="#按钮尺寸">#</a></h3>
<p>内置三种尺寸以供选择。</p>
<h3 id="加载中">加载中<a class="doc-anchor" href="#加载中">#</a></h3>
<p>加载中的按钮不可点击。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="ButtonProps">ButtonProps<a class="doc-anchor" href="#ButtonProps">#</a></h3>
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
<td>按钮类型</td>
<td>'default' | 'pale' | 'mild' | 'outline' | 'text' | 'pale-text'</td>
<td>'default'</td>
</tr>
<tr>
<td>theme</td>
<td>按钮主题色</td>
<td>'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'</td>
<td>'primary'</td>
</tr>
<tr>
<td>size</td>
<td>按钮尺寸</td>
<td>'mini' | 'small' | 'medium' | 'large'</td>
<td>'medium'</td>
</tr>
<tr>
<td>round</td>
<td>圆角按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>加载状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loading-type</td>
<td>加载类型</td>
<td>'clock' | 'circular'</td>
<td>'circular'</td>
</tr>
<tr>
<td>color</td>
<td>自定义文字颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>background</td>
<td>自定义背景颜色</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="ButtonSlots">ButtonSlots<a class="doc-anchor" href="#ButtonSlots">#</a></h3>
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
<td>自定义默认内容</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="ButtonEmits">ButtonEmits<a class="doc-anchor" href="#ButtonEmits">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>事件</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>点击按钮时触发，加载和禁用状态不会触发</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-button-height-mini</span><span class="token punctuation">:</span> 56rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-y-mini</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-x-mini</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-border-radius-mini</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-font-size-mini</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-button-height-sm</span><span class="token punctuation">:</span> 64rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-y-sm</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-x-sm</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-border-radius-sm</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-font-size-sm</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-button-height</span><span class="token punctuation">:</span> 80rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-y</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-button-height-lg</span><span class="token punctuation">:</span> 96rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-y-lg</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-x-lg</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-border-radius-lg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-font-size-lg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-button-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-normal<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-button-active-opacity</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-active-opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-active-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.125<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-mild-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-200<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-pale-bg-opacity</span><span class="token punctuation">:</span> 0.2<span class="token punctuation">;</span>

  <span class="token property">--sar-button-loading-opacity</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-loading-opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-loading-cursor</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-loading-cursor<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-loading-margin-right</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,d=a({__name:"README",setup(o){return n(),(c,e)=>(t(),s("div",{class:"doc-content",innerHTML:p}))}});export{d as default};
