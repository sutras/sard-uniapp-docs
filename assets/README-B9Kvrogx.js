import{u as s}from"./useCodeTool-MhyGaRwJ.js";import{d as a,c as n,o as t}from"./index-CjTGEgwI.js";const p=`<h1 id="Steps步骤条">Steps 步骤条<a class="doc-anchor" href="#Steps步骤条">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>引导用户按照流程完成任务的分步导航条。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Steps <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/steps/steps.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>current</code> 属性指定步骤的下标，小于这个下标的步骤状态为 <code>finish</code>，等于这个下标的步骤状态为 <code>process</code>，大于这个下标的步骤状态为 <code>wait</code>。</p>
<h3 id="居中">居中<a class="doc-anchor" href="#居中">#</a></h3>
<p>居中每个步骤的图标和文案。</p>
<h3 id="垂直步骤条">垂直步骤条<a class="doc-anchor" href="#垂直步骤条">#</a></h3>
<p>设置 <code>direction=&quot;vertical&quot;</code> 可以垂直排列。</p>
<h3 id="垂直居中">垂直居中<a class="doc-anchor" href="#垂直居中">#</a></h3>
<p>将图标和文案垂直居中。</p>
<h3 id="自定义图标">自定义图标<a class="doc-anchor" href="#自定义图标">#</a></h3>
<p>使用 <code>finishIcon, processIcon, waitIcon, errorIcon</code> 属性设置不通状态下的图标。</p>
<h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>使用 <code>css</code> 变量设置元素样式。</p>
<h3 id="当前步骤状态">当前步骤状态<a class="doc-anchor" href="#当前步骤状态">#</a></h3>
<p>可以设置当前处理中的步骤的状态为 <code>finish</code> 来模拟只有“未处理”和“已处理”两个状态的步骤条。</p>
<h3 id="错误步骤">错误步骤<a class="doc-anchor" href="#错误步骤">#</a></h3>
<p>可以设置当前处理中的步骤的状态为 <code>error</code> 表示步骤运行错误。</p>
<h3 id="自定义各步骤状态">自定义各步骤状态<a class="doc-anchor" href="#自定义各步骤状态">#</a></h3>
<p>每个步骤都可以使用 <code>status</code> 属性设置其状态。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="StepsProps">StepsProps<a class="doc-anchor" href="#StepsProps">#</a></h3>
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
<td>current</td>
<td>当前步骤对应的索引值</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>item-list</td>
<td>所有步骤的数据</td>
<td>StepsItem[]</td>
<td>[]</td>
</tr>
<tr>
<td>center</td>
<td>是否居中</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>direction</td>
<td>排列方向</td>
<td>'vertical' | 'horizontal'</td>
<td>'horizontal'</td>
</tr>
<tr>
<td>status</td>
<td>指定当前步骤的状态</td>
<td>StepsStatus</td>
<td>-</td>
</tr>
<tr>
<td>icon-family</td>
<td>图标字体</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon-size</td>
<td>图标字号</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>finish-icon</td>
<td>已完成状态的图标名称</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>process-icon</td>
<td>处理中状态的图标名称</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>wait-icon</td>
<td>等待中状态的图标名称</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>error-icon</td>
<td>错误状态的图标名称</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="StepsItem">StepsItem<a class="doc-anchor" href="#StepsItem">#</a></h3>
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
<td>status</td>
<td>自定义状态</td>
<td>StepsStatus</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>步骤名称</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>description</td>
<td>步骤描述</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="StepsStatus">StepsStatus<a class="doc-anchor" href="#StepsStatus">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">StepsStatus</span> <span class="token operator">=</span> <span class="token string">'wait'</span> <span class="token operator">|</span> <span class="token string">'process'</span> <span class="token operator">|</span> <span class="token string">'error'</span> <span class="token operator">|</span> <span class="token string">'finish'</span>
</code></pre></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-steps-step-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-steps-step-active-opacity</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-active-opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-steps-step-min-height</span><span class="token punctuation">:</span> 72rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-steps-icon-finish-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-steps-icon-process-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-steps-icon-wait-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-steps-icon-error-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-danger<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-steps-text-finish-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-body-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-steps-text-process-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-steps-text-wait-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-steps-text-error-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-danger<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-steps-header-gap-y</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-steps-header-gap-x</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-steps-header-vertical-top</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-steps-line-thickness</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">--sar-steps-line-gap</span><span class="token punctuation">:</span> 6rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-steps-line-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-steps-line-active-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-steps-icon-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-steps-body-padding-x</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-steps-body-padding-y</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-steps-name-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-steps-description-margin-top</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-steps-description-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-steps-description-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,i=a({__name:"README",setup(o){return s(),(c,e)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{i as default};
