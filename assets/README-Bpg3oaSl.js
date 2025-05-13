import{M as s}from"./index-CO0lQDmI.js";import{d as n,c as t,o as p}from"./index-BpihWkn-.js";const o=`<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>用于将内容分隔为多个区域。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Divider <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/divider/divider.vue'</span>
</code></pre>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>默认渲染一条水平分割线。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-divider</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-divider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="展示文本">展示文本<a class="doc-anchor" href="#展示文本">#</a></h3>
<p>通过插槽在可以分割线中间插入内容。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-divider</span><span class="token punctuation">></span></span>分割线<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-divider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="内容位置">内容位置<a class="doc-anchor" href="#内容位置">#</a></h3>
<p>通过 <code>position</code> 指定内容所在位置。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-divider</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>分割线<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-divider</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-divider</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>分割线<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-divider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="线条类型">线条类型<a class="doc-anchor" href="#线条类型">#</a></h3>
<p>通过 <code>type</code> 属性设置分割线类型。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-divider</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dashed<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>dashed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-divider</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-divider</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dotted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>dotted<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-divider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="自定义样式">自定义样式<a class="doc-anchor" href="#自定义样式">#</a></h3>
<p>可以直接通过 <code>style</code> 属性设置分割线的样式。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-divider</span>
    <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color: var(--sar-primary); border-color: rgba(var(--sar-primary-rgb), 0.6);<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    分割线
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-divider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="垂直">垂直<a class="doc-anchor" href="#垂直">#</a></h3>
<p>设置 <code>vertical</code> 属性可以垂直展示分割线</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-divider</span> <span class="token attr-name">vertical</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-divider</span> <span class="token attr-name">vertical</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dashed<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-divider</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-divider</span> <span class="token attr-name">vertical</span> <span class="token attr-name">:hairline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-divider</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-divider</span>
    <span class="token attr-name">vertical</span>
    <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border-color: rgba(var(--sar-primary-rgb), 0.6)<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-divider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="DividerProps">DividerProps<a class="doc-anchor" href="#DividerProps">#</a></h3>
<div class="doc-table-responsive"><table><thead>
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
<td>分割线类型</td>
<td>'solid' | 'dashed' | 'dotted'</td>
<td>'solid'</td>
</tr>
<tr>
<td>hairline</td>
<td>是否显示半像素分割线</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>position</td>
<td>内容位置</td>
<td>'left' | 'right' | 'center'</td>
<td>'center'</td>
</tr>
<tr>
<td>vertical</td>
<td>是否垂直显示分割线</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div><h3 id="DividerSlots">DividerSlots<a class="doc-anchor" href="#DividerSlots">#</a></h3>
<div class="doc-table-responsive"><table><thead>
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
</table></div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page,
.sar-portal </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-divider-margin-y</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-divider-margin-x</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-divider-gap</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-divider-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-divider-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-divider-left-width</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">--sar-divider-right-width</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>

  <span class="token property">--sar-divider-vertical-height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre>
</div>`,r=n({__name:"README",setup(e){const a={nav:"组件",title:"Divider",subtitle:"分割线",group:"布局",version:"1.13+"};return(c,l)=>(p(),t(s,{content:o,fm:a}))}});export{r as default};
