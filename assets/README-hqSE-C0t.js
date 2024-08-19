import{u as s}from"./useCodeTool-GtrFpo9D.js";import{d as n,c as a,o as t}from"./index-CVn3i-Vg.js";const p=`<h1 id="Timeline时间轴sup16sup">Timeline 时间轴 <sup>1.6+</sup><a class="doc-anchor" href="#Timeline时间轴sup16sup">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>垂直展示的时间流信息。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Timeline <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/timeline/timeline.vue'</span>
<span class="token keyword">import</span> TimelineItem <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/timeline-item/timeline-item.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-timeline</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-timeline-item</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in logistics<span class="token punctuation">"</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
      <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.title<span class="token punctuation">"</span></span>
      <span class="token attr-name">:time</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.time<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.icon<span class="token punctuation">"</span></span>
      <span class="token attr-name">:icon-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.iconColor<span class="token punctuation">"</span></span>
      <span class="token attr-name">:root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
        color: index !== 1 ? 'var(--sar-tertiary-color)' : '',
      &#125;<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.tel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span>
          <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(subStr, i) in item.description.split(/($&#123;tel&#125;)/)<span class="token punctuation">"</span></span>
          <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>subStr === '$&#123;tel&#125;'<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
            &#123;&#123; item.tel &#125;&#125;
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>&#123;&#123; subStr &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>
        &#123;&#123; item.description &#125;&#125;
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-timeline-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-timeline</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> logistics <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'收货地址：广东广州xxx1号店'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'check'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconColor</span><span class="token operator">:</span> <span class="token string">'var(--sar-primary)'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'已签收'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span>
      <span class="token string">'您的订单已由【xxx（广州xxx1号店）代收。如有疑问您可以联系配送员【xxx，$&#123;tel&#125;】确认。感谢您在xxx购物，欢迎再次光临。】'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tel</span><span class="token operator">:</span> <span class="token string">'13800138000'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2024-06-17 09:01:47'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'delivery'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'派送中'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span>
      <span class="token string">'您的订单正在配送途中（快递员：xxx，电话$&#123;tel&#125;），请你耐心等待。'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tel</span><span class="token operator">:</span> <span class="token string">'13800138000'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2024-06-17 08:01:25'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'transport'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'运输中'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'您的订单已送达【广州xx营业部】'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2024-06-17 06:21:23'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'您的订单已离开广州xx分拣中心，前往广州xx营业务途中'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2024-06-17 06:21:23'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'您的订单在【广州xx分拣中心】准备送往【广州xx营业部】'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2024-06-17 04:27:51'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'您的订单在【广州xx接货仓】分拣完成'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2024-06-16 21:07:28'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'warehouse'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'仓库处理中'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'打包完成'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2024-06-16 20:58:13'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'扫描完成'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2024-06-16 20:58:13'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'拣货完成'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2024-06-16 19:18:06'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'您的订单已经打印完成'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2024-06-16 18:53:15'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'order'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'已下单'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'温馨提示：您的订单预计6月17日09:00-15:00送达'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2024-06-16 18:50:30'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'您的订单已经进入广州仓库准备出库'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2024-06-16 18:20:49'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'您的订单预计2024-06-16 18:20开始处理，请您耐心等待'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2024-06-16 18:20:48'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'您提交了订单，请等待系统确认'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2021-06-16 18:20:30'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="TimelineProps">TimelineProps<a class="doc-anchor" href="#TimelineProps">#</a></h3>
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
</tbody>
</table></div>
<h3 id="TimelineSlots">TimelineSlots<a class="doc-anchor" href="#TimelineSlots">#</a></h3>
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
<h3 id="TimelineItemProps">TimelineItemProps<a class="doc-anchor" href="#TimelineItemProps">#</a></h3>
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
<td>title</td>
<td>标题内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>time</td>
<td>时间内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon-family</td>
<td>图标字体</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon-color</td>
<td>图标颜色</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="TimelineItemSlots">TimelineItemSlots<a class="doc-anchor" href="#TimelineItemSlots">#</a></h3>
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
<td>icon</td>
<td>自定义图标内容，会覆盖 <code>icon</code> 属性</td>
<td>-</td>
</tr>
<tr>
<td>title</td>
<td>自定义标题内容，会覆盖 <code>title</code> 属性</td>
<td>-</td>
</tr>
<tr>
<td>time</td>
<td>自定义时间内容，会覆盖 <code>time</code> 属性</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-timeline-item-header-width</span><span class="token punctuation">:</span> 96rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-timeline-item-line-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">--sar-timeline-item-line-dotted-before-height</span><span class="token punctuation">:</span> 14rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-timeline-item-line-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-timeline-item-icon-wrapper-margin-y</span><span class="token punctuation">:</span> 6rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-timeline-item-icon-font-size</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-timeline-item-icon-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-quaternary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-timeline-item-dot-size</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-timeline-item-dot-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-timeline-item-body-padding-top</span><span class="token punctuation">:</span> 6rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-timeline-item-body-padding-bottom</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-timeline-item-title-margin-bottom</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-timeline-item-title-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-timeline-item-description-margin-bottom</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-timeline-item-description-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-timeline-item-time-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-timeline-item-time-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,i=n({__name:"README",setup(o){return s(),(e,c)=>(t(),a("div",{class:"doc-content",innerHTML:p}))}});export{i as default};
