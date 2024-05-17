import{u as a}from"./useCodeTool-MhyGaRwJ.js";import{d as t,c as s,o as n}from"./index-CjTGEgwI.js";const e=`<h1 id="Calendar日历">Calendar 日历<a class="doc-anchor" href="#Calendar日历">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>以日历的方式展示日期，可以进行单选、多选、范围选择等操作。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Calendar <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/calendar/calendar.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>v-model</code> 绑定当前值。</p>
<h3 id="类型">类型<a class="doc-anchor" href="#类型">#</a></h3>
<p>日历组件可以选择单个值、多个值以及进行范围选择。</p>
<h3 id="自定义日期范围">自定义日期范围<a class="doc-anchor" href="#自定义日期范围">#</a></h3>
<p>可以使用 <code>min</code> 和 <code>max</code> 属性限制可以选择的日期的范围。</p>
<h3 id="最多选择天数">最多选择天数<a class="doc-anchor" href="#最多选择天数">#</a></h3>
<p>在多个值和范围选择中，使用 <code>maxDays</code> 属性可以限制最多可选的天数。
超出允许选择的天数后会调用 <code>overMaxDays</code> 属性配置的函数。</p>
<h3 id="禁用日期">禁用日期<a class="doc-anchor" href="#禁用日期">#</a></h3>
<p><code>disabledDate</code> 属性配置的函数接收一个日期对象，如果此函数返回真则禁用这个日期。</p>
<h3 id="自定义起始周">自定义起始周<a class="doc-anchor" href="#自定义起始周">#</a></h3>
<p>默认一周从星期天开始，使用 <code>weekStartsOn</code> 属性可以配置一周从任意星期开始。
0 表示从周日开始，1 表示从周一开始。</p>
<h3 id="格式化日期">格式化日期<a class="doc-anchor" href="#格式化日期">#</a></h3>
<p><code>formatter</code> 属性可以配置一个接收 <code>CalendarDay</code> 类型的对象，通过此对象可以自定义当前日期展示的内容和样式。</p>
<h3 id="展示多个月">展示多个月<a class="doc-anchor" href="#展示多个月">#</a></h3>
<p>默认只展示一个月，如果要表现上下月之间的强关联性，可以设置 <code>severalMonths</code> 属性以展示多个月。
这时设置的最大最小值范围不能太大，避免渲染大量节点造成性能问题。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="CalendarProps">CalendarProps<a class="doc-anchor" href="#CalendarProps">#</a></h3>
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
<td>日历类型</td>
<td>CalendarType</td>
<td>'single'</td>
</tr>
<tr>
<td>model-value</td>
<td>选中的日期，单选时为当个日期，多选时为日期数组，范围时为两个日期数组</td>
<td>Date | Date[]</td>
<td>-</td>
</tr>
<tr>
<td>min</td>
<td>可选择的最小日期</td>
<td>Date</td>
<td>前十年，或者当前月（设置了 <code>several-months</code>）</td>
</tr>
<tr>
<td>max</td>
<td>可选择的最大日期</td>
<td>Date</td>
<td>后十年，或者三个月后（设置了 <code>several-months</code>）</td>
</tr>
<tr>
<td>current-date</td>
<td>当前展示月份的日期</td>
<td>Date</td>
<td>-</td>
</tr>
<tr>
<td>disabled-date</td>
<td>指定禁选日期，返回 <code>true</code> 表示禁选</td>
<td>(date: Date) =&gt; boolean</td>
<td>-</td>
</tr>
<tr>
<td>max-days</td>
<td>最多可选天数，用于多选和范围</td>
<td>number</td>
<td>Number.MAX_SAFE_INTEGER</td>
</tr>
<tr>
<td>over-max-days</td>
<td>超出最多可选天数时触发</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>week-starts-on</td>
<td>指定一周以周几开始，<code>0</code> 表示周日，<code>1-6</code> 分别表示周一至周六</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>formatter</td>
<td>通过修改 <code>CalendarDay</code> 对象属性值，来自定义日期的文案和样式</td>
<td>(day: CalendarDay) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>allow-same-day</td>
<td>范围选择中，是否允许起始和结束为同一天</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>several-months</td>
<td>是否显示多个月</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="CalendarEmits">CalendarEmits<a class="doc-anchor" href="#CalendarEmits">#</a></h3>
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
<td>点击并选中任意日期时触发</td>
<td>(value: Date | Date[]) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="CalendarType">CalendarType<a class="doc-anchor" href="#CalendarType">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">CalendarType</span> <span class="token operator">=</span> <span class="token string">'single'</span> <span class="token operator">|</span> <span class="token string">'multiple'</span> <span class="token operator">|</span> <span class="token string">'range'</span>
</code></pre></div>
<h3 id="CalendarDay">CalendarDay<a class="doc-anchor" href="#CalendarDay">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>date</td>
<td>当前月份中每日对应的日期对象</td>
<td>Date</td>
</tr>
<tr>
<td>disabled</td>
<td>知否禁用</td>
<td>boolean</td>
</tr>
<tr>
<td>type</td>
<td>日期类型，每个类型对应的含义如下</td>
<td>'same' | 'start' | 'middle' | 'end' | 'selected' | 'normal'</td>
</tr>
<tr>
<td>top</td>
<td>额外的上方信息</td>
<td>string</td>
</tr>
<tr>
<td>text</td>
<td>中间显示的文字</td>
<td>string | number</td>
</tr>
<tr>
<td>bottom</td>
<td>额外的下方信息</td>
<td>string</td>
</tr>
<tr>
<td>className</td>
<td>类名</td>
<td>string</td>
</tr>
<tr>
<td>style</td>
<td>样式</td>
<td>StyleValue</td>
</tr>
</tbody>
</table></div>
<h3 id="CalendarDaytype">CalendarDay['type']<a class="doc-anchor" href="#CalendarDaytype">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>same</td>
<td>表示起始和结束日期位于同一天</td>
</tr>
<tr>
<td>start</td>
<td>表示起始日期</td>
</tr>
<tr>
<td>middle</td>
<td>表示位于起始和结束日期之间</td>
</tr>
<tr>
<td>end</td>
<td>表示结束日期</td>
</tr>
<tr>
<td>disabled</td>
<td>被禁用的日期</td>
</tr>
<tr>
<td>selected</td>
<td>单选或多选时选中的日期</td>
</tr>
<tr>
<td>normal</td>
<td>正常状态日期</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-calendar-header-margin-bottom</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-current-month-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-calendar-week-item-height</span><span class="token punctuation">:</span> 64rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-week-item-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-calendar-month-title-height</span><span class="token punctuation">:</span> 88rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-month-title-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-calendar-days-row-gap</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-calendar-day-height</span><span class="token punctuation">:</span> 100rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-day-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-day-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-day-selected-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-day-selected-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-day-middle-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-day-middle-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--sar-blue-rgb<span class="token punctuation">)</span><span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-day-disabled-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-disabled-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-calendar-info-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-xs<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-info-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-tight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-top-gap</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-bottom-gap</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-calendar-mark-font-size</span><span class="token punctuation">:</span> 320rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-mark-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-calendar-mark-opacity</span><span class="token punctuation">:</span> 0.05<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,l=t({__name:"README",setup(p){return a(),(o,d)=>(n(),s("div",{class:"doc-content",innerHTML:e}))}});export{l as default};
