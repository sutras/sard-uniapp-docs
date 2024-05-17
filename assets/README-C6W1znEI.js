import{u as s}from"./useCodeTool-MhyGaRwJ.js";import{d as a,c as t,o as n}from"./index-CjTGEgwI.js";const o=`<h1 id="ProgressCircle环形进度条">ProgressCircle 环形进度条<a class="doc-anchor" href="#ProgressCircle环形进度条">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>以环形的方式展示当前进度。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> ProgressCircle <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/progress-circle/progress-circle.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>percent</code> 属性设置当前进度。</p>
<h3 id="粗细">粗细<a class="doc-anchor" href="#粗细">#</a></h3>
<p>使用 <code>thickness</code> 属性设置圆环的粗细，这是一个占圆环直径的百分比值。</p>
<h3 id="颜色">颜色<a class="doc-anchor" href="#颜色">#</a></h3>
<p>使用 <code>trackColor</code> 设置轨道颜色，使用 <code>color</code> 设置进度条颜色。</p>
<h3 id="尺寸">尺寸<a class="doc-anchor" href="#尺寸">#</a></h3>
<p>使用 <code>size</code> 设置圆环直径。</p>
<h3 id="状态">状态<a class="doc-anchor" href="#状态">#</a></h3>
<p>使用 <code>status</code> 属性设置不同的状态。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="ProgressCircleProps">ProgressCircleProps<a class="doc-anchor" href="#ProgressCircleProps">#</a></h3>
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
<td>进度条粗细，表示占圆环直径的百分比值</td>
<td>number</td>
<td>4</td>
</tr>
<tr>
<td>size</td>
<td>圆环尺寸</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>status</td>
<td>进度条当前状态</td>
<td>'success' | 'warning' | 'error'</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="ProgressCircleSlots">ProgressCircleSlots<a class="doc-anchor" href="#ProgressCircleSlots">#</a></h3>
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
  <span class="token property">--sar-progress-circle-size</span><span class="token punctuation">:</span> 200rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-progress-circle-track-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-progress-circle-piece-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-progress-circle-piece-transition-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-progress-circle-text-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-progress-circle-status-font-size</span><span class="token punctuation">:</span> 36rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-progress-circle-success-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-success<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-progress-circle-warning-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-warning<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-progress-circle-error-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-danger<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,l=a({__name:"README",setup(c){return s(),(r,e)=>(n(),t("div",{class:"doc-content",innerHTML:o}))}});export{l as default};
