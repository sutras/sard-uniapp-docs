import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d as a,c as s,o as n}from"./index-CjTGEgwI.js";const d=`<h1 id="Overlay遮罩层">Overlay 遮罩层<a class="doc-anchor" href="#Overlay遮罩层">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Overlay <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/overlay/overlay.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用<code>visible</code>属性控制其显隐。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="OverlayProps">OverlayProps<a class="doc-anchor" href="#OverlayProps">#</a></h3>
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
<td>visible</td>
<td>控制显隐</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>z-index</td>
<td>设置层级</td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>duration</td>
<td>透明度过渡持续时间</td>
<td>number</td>
<td>300</td>
</tr>
<tr>
<td>background</td>
<td>自定义遮罩层的背景色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>transparent</td>
<td>透明遮罩</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="OverlaySlots">OverlaySlots<a class="doc-anchor" href="#OverlaySlots">#</a></h3>
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
<h3 id="OverlayEmits">OverlayEmits<a class="doc-anchor" href="#OverlayEmits">#</a></h3>
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
<td>点击遮罩时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-overlay-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-overlay-z-index</span><span class="token punctuation">:</span> 1000<span class="token punctuation">;</span>
  <span class="token property">--sar-overlay-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,p=a({__name:"README",setup(e){return t(),(o,r)=>(n(),s("div",{class:"doc-content",innerHTML:d}))}});export{p as default};
