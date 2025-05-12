import{M as s}from"./index-9EFeABtZ.js";import{d as n,c as a,o as e}from"./index-R0-esbxP.js";const o=`<h2 id="选项">选项<a class="doc-anchor" href="#选项">#</a></h2>
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
<td>position</td>
<td>元素在视窗中的位置</td>
<td>ScrollIntoViewPosition</td>
<td>'nearest'</td>
</tr>
<tr>
<td>startOffset</td>
<td>元素距离视窗顶部的偏移量，单位 px</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>endOffset</td>
<td>元素距离视窗底部的偏移量，单位 px</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>duration</td>
<td>页面滚动持续时间，单位 ms</td>
<td>number</td>
<td>150</td>
</tr>
</tbody>
</table></div><div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ScrollIntoViewPosition</span> <span class="token operator">=</span> <span class="token string">'start'</span> <span class="token operator">|</span> <span class="token string">'center'</span> <span class="token operator">|</span> <span class="token string">'end'</span> <span class="token operator">|</span> <span class="token string">'nearest'</span>
</code></pre>
</div>`,i=n({__name:"scroll-into-view-options",setup(r){const t={nav:"指引",title:"ScrollIntoViewOptions",order:0,group:{title:"工具"}};return(d,p)=>(e(),a(s,{content:o,fm:t}))}});export{i as default};
