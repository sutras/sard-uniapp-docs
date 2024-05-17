import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d as a,c as d,o as s}from"./index-CjTGEgwI.js";const n=`<h1 id="Search搜索">Search 搜索<a class="doc-anchor" href="#Search搜索">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>用于搜索场景的输入框组件。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Search <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/search/search.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p><code>v-model</code> 用于控制搜索框中的文字。</p>
<h3 id="搜索按钮">搜索按钮<a class="doc-anchor" href="#搜索按钮">#</a></h3>
<p>使用 <code>search</code> 属性可以添加右侧的按钮，在按钮点击时触发 <code>search</code> 事件。</p>
<h3 id="取消按钮">取消按钮<a class="doc-anchor" href="#取消按钮">#</a></h3>
<p>使用 <code>cancel</code> 属性可以添加右侧的按钮，在按钮点击时触发 <code>cancel</code> 事件，并在点击按钮后清空输入框。</p>
<h3 id="形状">形状<a class="doc-anchor" href="#形状">#</a></h3>
<p>设置 <code>shape=&quot;round&quot;</code> 可以将输入框变为圆形。</p>
<h3 id="对齐">对齐<a class="doc-anchor" href="#对齐">#</a></h3>
<p>设置 <code>align=&quot;center&quot;</code> 可以将输入内容居中。</p>
<h3 id="背景色">背景色<a class="doc-anchor" href="#背景色">#</a></h3>
<p>通过 <code>background</code> 属性可以设置搜索框外部的背景色。
通过 <code>inputBackground</code> 属性可以设置搜索框内部的背景色。</p>
<h3 id="只读和禁用">只读和禁用<a class="doc-anchor" href="#只读和禁用">#</a></h3>
<p>只读或禁用后不可输入。</p>
<h3 id="插槽">插槽<a class="doc-anchor" href="#插槽">#</a></h3>
<p>通过 <code>prepend</code>、<code>append</code>、<code>inputPrepend</code>、<code>inputAppend</code> 插槽可以自定义内容。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="SearchProps">SearchProps<a class="doc-anchor" href="#SearchProps">#</a></h3>
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
<td>model-value (v-model)</td>
<td>输入框值</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框占位符内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>shape</td>
<td>输入框形状</td>
<td>'round' | 'square'</td>
<td>'square'</td>
</tr>
<tr>
<td>background</td>
<td>搜索框外部的背景色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>input-background</td>
<td>搜索框内部的背景色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>input-color</td>
<td>输入框文本颜色</td>
<td>string</td>
<td>-</td>
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
<td>align</td>
<td>输入框文字对齐</td>
<td>'left' | 'center' | 'right'</td>
<td>'left'</td>
</tr>
<tr>
<td>cancel</td>
<td>定义取消按钮</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>search</td>
<td>定义搜索按钮</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="SearchSlots">SearchSlots<a class="doc-anchor" href="#SearchSlots">#</a></h3>
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
<td>prepend</td>
<td>搜索框前置插槽</td>
<td>-</td>
</tr>
<tr>
<td>append</td>
<td>搜索框后置插槽</td>
<td>-</td>
</tr>
<tr>
<td>input-prepend</td>
<td>输入框前置插槽</td>
<td>-</td>
</tr>
<tr>
<td>input-append</td>
<td>输入框后置插槽</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="SearchEmits">SearchEmits<a class="doc-anchor" href="#SearchEmits">#</a></h3>
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
<td>输入框值改变时触发</td>
<td>(value: string) =&gt; void</td>
</tr>
<tr>
<td>cancel</td>
<td>点击取消按钮时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>search</td>
<td>点击确定按钮时触发</td>
<td>(value: string) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-search-padding-x</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-search-padding-y</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-search-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-search-input-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-body-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-search-input-disabled-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-disabled-shallow-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-search-icon-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-quaternary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,h=a({__name:"README",setup(c){return t(),(e,o)=>(s(),d("div",{class:"doc-content",innerHTML:n}))}});export{h as default};
