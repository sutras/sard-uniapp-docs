import{u as a}from"./useCodeTool-MhyGaRwJ.js";import{d as s,c as o,o as t}from"./index-CjTGEgwI.js";const e=`<h1 id="Collapse折叠">Collapse 折叠<a class="doc-anchor" href="#Collapse折叠">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>可以展开/折叠内容区域。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Collapse <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/collapse/collapse.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>折叠组件是其他可折叠组件的基础组件。
使用 <code>visible</code> 属性控制折叠框展开或折叠。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="CollapseProps">CollapseProps<a class="doc-anchor" href="#CollapseProps">#</a></h3>
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
<td>visible</td>
<td>是否可见</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="CollapseSlots">CollapseSlots<a class="doc-anchor" href="#CollapseSlots">#</a></h3>
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
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-collapse-transition-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,r=s({__name:"README",setup(n){return a(),(c,l)=>(t(),o("div",{class:"doc-content",innerHTML:e}))}});export{r as default};
