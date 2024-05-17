import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d as a,c as s,o as n}from"./index-CjTGEgwI.js";const o=`<h1 id="Accordion手风琴">Accordion 手风琴<a class="doc-anchor" href="#Accordion手风琴">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>通过折叠收纳内容，允许同时展开一个或多个。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Accordion <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/accordion/accordion.vue'</span>
<span class="token keyword">import</span> AccordionItem <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/accordion-item/accordion-item.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>为手风琴每一个面板添加一个 <code>name</code> 属性，使用 <code>v-model</code> 绑定展开的面板。</p>
<h3 id="展开多个">展开多个<a class="doc-anchor" href="#展开多个">#</a></h3>
<p>设置 <code>multiple</code> 属性可以同时展开多个面板，此时 <code>v-model</code> 要绑定一个数组。</p>
<h3 id="禁用">禁用<a class="doc-anchor" href="#禁用">#</a></h3>
<p>使用 <code>disabled</code> 属性可以禁用指定单个面板。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="AccordionProps">AccordionProps<a class="doc-anchor" href="#AccordionProps">#</a></h3>
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
<td>model-value</td>
<td>当前展开面板的 <code>name</code></td>
<td>string | number | (string | number)[]</td>
<td>-</td>
</tr>
<tr>
<td>multiple</td>
<td>是否可同时展开多个面板</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="AccordionSlots">AccordionSlots<a class="doc-anchor" href="#AccordionSlots">#</a></h3>
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
<h3 id="AccordionEmits">AccordionEmits<a class="doc-anchor" href="#AccordionEmits">#</a></h3>
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
<td>切换面板时触发</td>
<td>(value: string | number | (string | number)[]) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="AccordionItemProps">AccordionItemProps<a class="doc-anchor" href="#AccordionItemProps">#</a></h3>
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
<td>面板标题</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>面板的值</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>面板的唯一标识</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用面板</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="AccordionItemSlots">AccordionItemSlots<a class="doc-anchor" href="#AccordionItemSlots">#</a></h3>
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
<h3 id="AccordionItemEmits">AccordionItemEmits<a class="doc-anchor" href="#AccordionItemEmits">#</a></h3>
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
<td>点击面板头部时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-accordion-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-accordion-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-active-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-accordion-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-accordion-item-header-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-accordion-item-header-padding-y</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-accordion-item-title-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-accordion-item-title-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-snug<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-accordion-item-body-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-accordion-item-body-padding-y</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,i=a({__name:"README",setup(d){return t(),(c,e)=>(n(),s("div",{class:"doc-content",innerHTML:o}))}});export{i as default};
