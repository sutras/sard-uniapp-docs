import{u as s}from"./useCodeTool-MhyGaRwJ.js";import{d as n,c as a,o as t}from"./index-CjTGEgwI.js";const p=`<h1 id="SwiperDot轮播图指示点">SwiperDot 轮播图指示点<a class="doc-anchor" href="#SwiperDot轮播图指示点">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>自定义轮播图指示点。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> SwiperDot <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/swiper-dot/swiper-dot.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用一个相对定位的容器包裹轮播图组件和轮播图指示点组件，
使用 <code>current</code> 属性设置活动指示点，使用 <code>type</code> 属性设置指示点类型，使用 <code>total</code> 属性设置指示点总数或者使用 <code>list</code> 属性设置指示文本（用于 <code>title</code> 类型）。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="SwiperDotProps">SwiperDotProps<a class="doc-anchor" href="#SwiperDotProps">#</a></h3>
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
<td>指示点类型</td>
<td>'dot' | 'dot-bar' | 'index' | 'title' | 'fraction'</td>
<td>'dot'</td>
</tr>
<tr>
<td>current</td>
<td>当前指示点索引</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>total</td>
<td>指示点总数</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>list</td>
<td>用于 <code>title</code> 类型的文本数据</td>
<td>any[]</td>
<td>-</td>
</tr>
<tr>
<td>field</td>
<td><code>type</code> 为 <code>title</code> 时，显示的内容字段</td>
<td>string</td>
<td>'title'</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-swiper-dot-bottom</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-gap</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-size</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-active-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-swiper-dot-bar-active-size</span><span class="token punctuation">:</span> 36rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-bar-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-swiper-dot-index-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-swiper-dot-title-padding</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-title-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-title-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-title-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-swiper-dot-fraction-right</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-fraction-bottom</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-fraction-padding</span><span class="token punctuation">:</span> 4rpx 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-fraction-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-fraction-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-swiper-dot-fraction-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,i=n({__name:"README",setup(o){return s(),(c,e)=>(t(),a("div",{class:"doc-content",innerHTML:p}))}});export{i as default};
