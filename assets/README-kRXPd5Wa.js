import{u as s}from"./useCodeTool-MhyGaRwJ.js";import{d as a,c as n,o as t}from"./index-CjTGEgwI.js";const p=`<h1 id="ProgressBar条形进度条">ProgressBar 条形进度条<a class="doc-anchor" href="#ProgressBar条形进度条">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>以横条的方式展示当前进度。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> ProgressBar <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/progress-bar/progress-bar.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>设置 <code>percent</code> 属性展示当前所处进度。</p>
<h3 id="内部文本">内部文本<a class="doc-anchor" href="#内部文本">#</a></h3>
<p>设置 <code>inside</code> 属性让文本显示在进度条内部。</p>
<h3 id="隐藏文本">隐藏文本<a class="doc-anchor" href="#隐藏文本">#</a></h3>
<p>设置 <code>:showText=&quot;false&quot;</code> 属性让文本隐藏。</p>
<h3 id="粗细">粗细<a class="doc-anchor" href="#粗细">#</a></h3>
<p>使用 <code>thickness</code> 属性设置粗细。</p>
<h3 id="颜色">颜色<a class="doc-anchor" href="#颜色">#</a></h3>
<p>使用 <code>trackColor</code> 设置轨道颜色，使用 <code>color</code> 设置进度条颜色。</p>
<h3 id="有条纹的">有条纹的<a class="doc-anchor" href="#有条纹的">#</a></h3>
<p>设置 <code>striped</code> 属性显示条纹，设置 <code>animated</code> 属性可以让条纹动起来。</p>
<h3 id="状态">状态<a class="doc-anchor" href="#状态">#</a></h3>
<p>设置 <code>status</code> 属性展示不同的状态。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="ProgressBarProps">ProgressBarProps<a class="doc-anchor" href="#ProgressBarProps">#</a></h3>
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
<td>percent</td>
<td>当前进度</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>inside</td>
<td>在内部显示文本</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>color</td>
<td>进度条颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>track-color</td>
<td>轨道颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>thickness</td>
<td>进度条粗细</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>show-text</td>
<td>是否显示文本</td>
<td>string</td>
<td>true</td>
</tr>
<tr>
<td>striped</td>
<td>是否显示条纹样式</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>animated</td>
<td>是否显示条纹动画</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>status</td>
<td>进度条当前状态</td>
<td>'success' | 'warning' | 'error'</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="ProgressBarSlots">ProgressBarSlots<a class="doc-anchor" href="#ProgressBarSlots">#</a></h3>
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
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-progress-bar-height</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-progress-bar-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-full<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-progress-bar-track-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-progress-bar-piece-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-progress-bar-piece-transition-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration-slow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-progress-bar-piece-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-progress-bar-piece-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-progress-bar-text-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-progress-bar-text-margin-left</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-progress-bar-text-margin-right</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-progress-bar-inside-height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-progress-bar-inside-text-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-progress-bar-striped-width</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-progress-bar-status-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-none<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-progress-bar-status-margin-left</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-progress-bar-success-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-success<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-progress-bar-warning-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-warning<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-progress-bar-error-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-danger<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,l=a({__name:"README",setup(o){return s(),(r,e)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{l as default};
