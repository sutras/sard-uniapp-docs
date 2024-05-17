import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d as s,c as a,o as n}from"./index-CjTGEgwI.js";const o=`<h1 id="Slider滑动器">Slider 滑动器<a class="doc-anchor" href="#Slider滑动器">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>选择给定范围的一个值和区间。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Slider <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/slider/slider.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>v-model</code> 绑定当前值。</p>
<h3 id="范围选择">范围选择<a class="doc-anchor" href="#范围选择">#</a></h3>
<p>使用 <code>range</code> 属性设置成范围选择。</p>
<h3 id="显示值">显示值<a class="doc-anchor" href="#显示值">#</a></h3>
<p>设置 <code>show-value</code> 属性会在滑块上方显示当前滑块对应的值。</p>
<h3 id="最大最小值">最大最小值<a class="doc-anchor" href="#最大最小值">#</a></h3>
<p>使用 <code>min</code> 和 <code>max</code> 属性限制可以选择的最大最小值。</p>
<h3 id="垂直">垂直<a class="doc-anchor" href="#垂直">#</a></h3>
<p>使用 <code>vertical</code> 属性垂直展示滑动器。</p>
<h3 id="步长">步长<a class="doc-anchor" href="#步长">#</a></h3>
<p>使用 <code>step</code> 属性限制只能选择指定数字的倍数的值。</p>
<h3 id="显示刻度">显示刻度<a class="doc-anchor" href="#显示刻度">#</a></h3>
<p>设置 <code>show-scale</code> 属性可以显示步长对应的刻度，设置 <code>scale-position</code> 属性可以让刻度显示在各个方位。</p>
<h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>使用 <code>track-color</code> 属性设置轨道颜色；使用 <code>piece-color</code> 属性设置选中片段的颜色；使用 <code>thumb-color</code> 属性设置按钮的颜色。</p>
<h3 id="自定义尺寸">自定义尺寸<a class="doc-anchor" href="#自定义尺寸">#</a></h3>
<p>使用 <code>track-size</code> 属性设置轨道尺寸；使用 <code>thumb-size</code> 属性设置滑块的尺寸。</p>
<h3 id="只读和禁用">只读和禁用<a class="doc-anchor" href="#只读和禁用">#</a></h3>
<p>只读和禁用状态下无法操作。</p>
<h3 id="自定义滑块插槽">自定义滑块插槽<a class="doc-anchor" href="#自定义滑块插槽">#</a></h3>
<p>滑块插槽可以用于自定义滑块样式。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="SliderProps">SliderProps<a class="doc-anchor" href="#SliderProps">#</a></h3>
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
<td>range</td>
<td>双滑块模式</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>model-value</td>
<td>滑动器值</td>
<td>number | number[]</td>
<td>-</td>
</tr>
<tr>
<td>min</td>
<td>最小值</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>最大值</td>
<td>number</td>
<td>100</td>
</tr>
<tr>
<td>step</td>
<td>步长</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>vertical</td>
<td>垂直方向滑动器</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>只读状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>piece-color</td>
<td>滑块间的轨道颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>track-color</td>
<td>滑动器轨道颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>track-size</td>
<td>滑动器轨道尺寸</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>thumb-color</td>
<td>滑块颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>thumb-size</td>
<td>滑块尺寸</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>show-value</td>
<td>是否显示值</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>value-position</td>
<td>值显示的位置</td>
<td>'top' | 'right' | 'bottom' | 'left'</td>
<td>'top' / 'right'</td>
</tr>
<tr>
<td>value-background</td>
<td>设置值的背景色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>value-color</td>
<td>设置值的字体颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>show-scale</td>
<td>是否显示刻度</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>scale-position</td>
<td>刻度显示的位置</td>
<td>'top' | 'right' | 'bottom' | 'left'</td>
<td>'bottom' / 'left'</td>
</tr>
<tr>
<td>validate-event</td>
<td>是否触发表单验证</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3 id="SliderSlots">SliderSlots<a class="doc-anchor" href="#SliderSlots">#</a></h3>
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
<td>start-thumb</td>
<td>自定义起始滑块内容</td>
<td>&#123; value: number &#125;</td>
</tr>
<tr>
<td>end-thumb</td>
<td>自定义结束滑块内容</td>
<td>&#123; value: number &#125;</td>
</tr>
</tbody>
</table></div>
<h3 id="SliderEmits">SliderEmits<a class="doc-anchor" href="#SliderEmits">#</a></h3>
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
<td>update:model-value</td>
<td>滑动器值实时改变时触发</td>
<td>(value: number | number[]) =&gt; void</td>
</tr>
<tr>
<td>change</td>
<td>滑动器点击或拖动结束且值改变时触发</td>
<td>(value: number | number[]) =&gt; void</td>
</tr>
<tr>
<td>drag-start</td>
<td>开始拖动时触发</td>
<td>(event: TouchEvent) =&gt; void</td>
</tr>
<tr>
<td>drag-end</td>
<td>结束拖动时触发</td>
<td>(event: TouchEvent) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-slider-vertical-height</span><span class="token punctuation">:</span> 300rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-slider-padding</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--sar-slider-thumb-size<span class="token punctuation">)</span> <span class="token operator">/</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-slider-show-scale-padding-x</span><span class="token punctuation">:</span> 68rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-slider-show-scale-padding-y</span><span class="token punctuation">:</span> 52rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-slider-track-main-axis-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">--sar-slider-track-cross-axis-size</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-slider-track-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-slider-piece-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-slider-thumb-size</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-slider-thumb-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-slider-thumb-box-shadow</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-shadow<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-slider-value-padding</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-slider-value-min-width</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-slider-value-horizontal-min-width</span><span class="token punctuation">:</span> 56rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-slider-value-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-slider-value-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-slider-value-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-800<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-slider-value-box-shadow</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-shadow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-slider-value-arrow-size</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-slider-scale-size</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-slider-scale-text-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-slider-scale-text-offset</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="CSS变量-暗黑模式">CSS 变量 - 暗黑模式<a class="doc-anchor" href="#CSS变量-暗黑模式">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token keyword">@include</span> <span class="token selector">theme-dark </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-slider-value-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-700<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,l=s({__name:"README",setup(p){return t(),(e,d)=>(n(),a("div",{class:"doc-content",innerHTML:o}))}});export{l as default};
