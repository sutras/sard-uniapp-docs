import{u as a}from"./useCodeTool-mazcC0Cn.js";import{d as s,c as n,o as t}from"./index-ybeXHrRA.js";const p=`<h1 id="Tag标签">Tag 标签<a class="doc-anchor" href="#Tag标签">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>用于分类或概括事物属性的标签。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Tag <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/tag/tag.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>通过 <code>theme</code> 属性设置标签颜色。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>secondary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="镂空">镂空<a class="doc-anchor" href="#镂空">#</a></h3>
<p>通过 <code>plain</code> 属性设置为空心样式。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">plain</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">plain</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>secondary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">plain</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">plain</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">plain</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">plain</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="圆角">圆角<a class="doc-anchor" href="#圆角">#</a></h3>
<p>通过 <code>round</code> 属性设置为圆角样式。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="标记样式半圆角">标记样式（半圆角）<a class="doc-anchor" href="#标记样式半圆角">#</a></h3>
<p>通过 <code>mark</code> 属性设置为标记样式(半圆角)。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">mark</span><span class="token punctuation">></span></span>标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="尺寸">尺寸<a class="doc-anchor" href="#尺寸">#</a></h3>
<p>通过 <code>size</code> 属性调整标签大小。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义样式">自定义样式<a class="doc-anchor" href="#自定义样式">#</a></h3>
<p>通过 <code>color</code> 和 <code>textColor</code> 属性设置标签颜色。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>var(--sar-red)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>var(--sar-gray-300)<span class="token punctuation">"</span></span> <span class="token attr-name">text-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>var(--sar-red)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    标签
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">plain</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>var(--sar-red)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="可关闭的">可关闭的<a class="doc-anchor" href="#可关闭的">#</a></h3>
<p>通过 <code>closeable</code> 属性添加关闭按钮，点击关闭按钮时会触发 <code>close</code> 事件。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">closable</span> <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClose<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> <span class="token function-variable function">onClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'关闭'</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="TagProps">TagProps<a class="doc-anchor" href="#TagProps">#</a></h3>
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
<td>theme</td>
<td>主题色</td>
<td>'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'</td>
<td>'primary'</td>
</tr>
<tr>
<td>round</td>
<td>圆角按标签</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>plain</td>
<td>镂空标签</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>mark</td>
<td>标记标签</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>标签尺寸</td>
<td>'small' | 'medium' | 'large'</td>
<td>'medium'</td>
</tr>
<tr>
<td>color</td>
<td>标签颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>text-color</td>
<td>文本颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>closable</td>
<td>是否可关闭</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="TagSlots">TagSlots<a class="doc-anchor" href="#TagSlots">#</a></h3>
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
<h3 id="TagEmits">TagEmits<a class="doc-anchor" href="#TagEmits">#</a></h3>
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
<td>点击标签时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>close</td>
<td>点击关闭按钮时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-tag-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-tight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-tag-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-tag-small-padding</span><span class="token punctuation">:</span> 4rpx 4rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-tag-small-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-xs<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-tag-small-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-xs<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-tag-medium-padding</span><span class="token punctuation">:</span> 4rpx 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-tag-medium-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-tag-medium-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-tag-large-padding</span><span class="token punctuation">:</span> 4rpx 12rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-tag-large-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-tag-large-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-tag-close-margin-left</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,k=s({__name:"README",setup(o){return a(),(c,e)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{k as default};
