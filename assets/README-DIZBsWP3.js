import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d as a,c as s,o as n}from"./index-CjTGEgwI.js";const o=`<h1 id="NoticeBar公告栏">NoticeBar 公告栏<a class="doc-anchor" href="#NoticeBar公告栏">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>用于循环播放展示一组消息通知。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> NoticeBar <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/notice-bar/notice-bar.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>公告栏的内容长度溢出时会自动开启滚动播放。</p>
<h3 id="强制滚动">强制滚动<a class="doc-anchor" href="#强制滚动">#</a></h3>
<p>设置 <code>scrollable=&quot;always&quot;</code> 属性时，无论公告栏内容多少都会滚动。</p>
<h3 id="强制不滚动">强制不滚动<a class="doc-anchor" href="#强制不滚动">#</a></h3>
<p>设置 <code>scrollable=&quot;never&quot;</code> 属性时，无论公告栏内容多少都不会滚动。</p>
<h3 id="多行展示">多行展示<a class="doc-anchor" href="#多行展示">#</a></h3>
<p>默认文本不换行，设置 <code>wrap</code> 可以使其换行。</p>
<h3 id="自定义左边图标">自定义左边图标<a class="doc-anchor" href="#自定义左边图标">#</a></h3>
<p>设置 <code>leftIcon</code> 插槽可以自定义左边的图标；或者设置 <code>hideLeftIcon</code> 属性隐藏左侧图标。</p>
<h3 id="可关闭的">可关闭的<a class="doc-anchor" href="#可关闭的">#</a></h3>
<p>设置 <code>closable</code> 属性可以在右边显示关闭按钮。</p>
<h3 id="可链接的">可链接的<a class="doc-anchor" href="#可链接的">#</a></h3>
<p>设置 <code>linkable</code> 属性可以在右边显示箭头。</p>
<h3 id="自定义右边图标">自定义右边图标<a class="doc-anchor" href="#自定义右边图标">#</a></h3>
<p>设置 <code>rightIcon</code> 插槽可以修改右边的关闭按钮图标或者箭头图标。</p>
<h3 id="自定义样式">自定义样式<a class="doc-anchor" href="#自定义样式">#</a></h3>
<p>通过 <code>color</code> 属性设置文本颜色，通过 <code>background</code> 属性设置背景色。</p>
<h3 id="垂直滚动">垂直滚动<a class="doc-anchor" href="#垂直滚动">#</a></h3>
<p>搭配 <code>NoticeBar</code> 和 <code>Swipe</code> 组件，可以实现垂直滚动的效果。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="NoticeBarProps">NoticeBarProps<a class="doc-anchor" href="#NoticeBarProps">#</a></h3>
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
<td>color</td>
<td>自定义颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>background</td>
<td>自定义背景色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>hide-left-icon</td>
<td>隐藏左边图标</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>delay</td>
<td>动画延迟时间 (ms)</td>
<td>number</td>
<td>1000</td>
</tr>
<tr>
<td>speed</td>
<td>滚动速率 (px/s)</td>
<td>number</td>
<td>50</td>
</tr>
<tr>
<td>scrollable</td>
<td>是否开启滚动播放，内容长度溢出时默认开启</td>
<td>'auto' | 'never' | 'always'</td>
<td>'auto'</td>
</tr>
<tr>
<td>wrap</td>
<td>是否开启文本换行</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>closable</td>
<td>是否显示关闭按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>linkable</td>
<td>是否展示右侧箭头</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>visible</td>
<td>是否显示公告栏</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>vertical</td>
<td>搭配 <code>Swipe</code> 组件实现垂直滚动</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="NoticeBarSlots">NoticeBarSlots<a class="doc-anchor" href="#NoticeBarSlots">#</a></h3>
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
<tr>
<td>left-icon</td>
<td>自定义左侧图标内容</td>
<td>-</td>
</tr>
<tr>
<td>right-icon</td>
<td>自定义右侧图标内容</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="NoticeBarEmits">NoticeBarEmits<a class="doc-anchor" href="#NoticeBarEmits">#</a></h3>
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
<td>点击通知栏时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>close</td>
<td>点击关闭按钮时触发</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-notice-bar-min-height</span><span class="token punctuation">:</span> 80rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-notice-bar-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-notice-bar-padding-y</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-notice-bar-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-notice-bar-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-orange<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-notice-bar-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--sar-yellow-rgb<span class="token punctuation">)</span><span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-notice-bar-wrap-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-snug<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-notice-bar-left-icon-size</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-notice-bar-left-icon-margin-right</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-notice-bar-right-icon-padding</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-notice-bar-right-icon-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-notice-bar-right-icon-margin-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">--sar-notice-bar-right-icon-margin-right</span><span class="token punctuation">:</span> -20rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,l=a({__name:"README",setup(c){return t(),(e,d)=>(n(),s("div",{class:"doc-content",innerHTML:o}))}});export{l as default};
