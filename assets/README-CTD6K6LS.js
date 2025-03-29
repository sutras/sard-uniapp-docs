import{M as s}from"./index-C5cH5iNj.js";import{d as n,c as t,o as p}from"./index-DP0MItBP.js";const e=`<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>突出显示要重点提示用户的信息。警告提示会一直显示，除非用户手动关闭。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Alert <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/alert/alert.vue'</span>
</code></pre>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-alert</span><span class="token punctuation">></span></span>默认警告框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-alert</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="类型">类型<a class="doc-anchor" href="#类型">#</a></h3>
<p>使用 <code>type</code> 属性设置不同的类型。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary 警告提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-alert</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success 警告提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-alert</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning 警告提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-alert</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>danger 警告提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-alert</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="显示图标">显示图标<a class="doc-anchor" href="#显示图标">#</a></h3>
<p>设置 <code>show-icon</code> 属性显示图标。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-alert</span> <span class="token attr-name">show-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary 警告提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-alert</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-alert</span> <span class="token attr-name">show-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success 警告提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-alert</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-alert</span> <span class="token attr-name">show-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning 警告提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-alert</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-alert</span> <span class="token attr-name">show-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>danger 警告提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-alert</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="可关闭的">可关闭的<a class="doc-anchor" href="#可关闭的">#</a></h3>
<p>设置 <code>closable</code> 属性显示关闭按钮。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-alert</span> <span class="token attr-name">closable</span><span class="token punctuation">></span></span>默认警告框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-alert</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="AlertProps">AlertProps<a class="doc-anchor" href="#AlertProps">#</a></h3>
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
<td>警告提示样式类型</td>
<td>'primary' | 'success' | 'warning' | 'danger'</td>
<td>'primary'</td>
</tr>
<tr>
<td>show-icon</td>
<td>是否显示图标</td>
<td>StyleValue</td>
<td>-</td>
</tr>
<tr>
<td>closable</td>
<td>是否显示关闭按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>color</td>
<td>字体颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>background</td>
<td>背景颜色</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div><h3 id="AlertSlots">AlertSlots<a class="doc-anchor" href="#AlertSlots">#</a></h3>
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
<tr>
<td>icon</td>
<td>自定义图标</td>
<td>-</td>
</tr>
</tbody>
</table></div><h3 id="AlertEmits">AlertEmits<a class="doc-anchor" href="#AlertEmits">#</a></h3>
<div class="doc-table-responsive"><table><thead>
<tr>
<th>事件</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>close</td>
<td>点击关闭按钮触发</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-alert-paddding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-alert-paddding-y</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-alert-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-alert-bg-opacity</span><span class="token punctuation">:</span> 0.1<span class="token punctuation">;</span>

  <span class="token property">--sar-alert-icon-margin-right</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-alert-close-padding</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-alert-close-margin</span><span class="token punctuation">:</span> -16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-alert-close-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre>
</div>`,k=n({__name:"README",setup(o){const a={nav:"组件",title:"Alert",subtitle:"警告提示",group:"反馈组件",version:"1.3+"};return(c,l)=>(p(),t(s,{content:e,fm:a}))}});export{k as default};
