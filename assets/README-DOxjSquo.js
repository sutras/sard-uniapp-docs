import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d,c as o,o as a}from"./index-CjTGEgwI.js";const e=`<h1 id="Layout布局">Layout 布局<a class="doc-anchor" href="#Layout布局">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>基于行/列来划分区块以展示内容。栅格系统提供了 12 列容器来布局，需要配套使用<code>Row</code>和<code>Col</code>组件。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Row <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/row/row.vue'</span>
<span class="token keyword">import</span> Col <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/col/col.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用<code>span</code>属性配置子元素占据的列数。</p>
<h3 id="列偏移">列偏移<a class="doc-anchor" href="#列偏移">#</a></h3>
<p>使用<code>offset</code>可以将列向右侧偏。</p>
<h3 id="水平对齐">水平对齐<a class="doc-anchor" href="#水平对齐">#</a></h3>
<p><code>justify</code>属性可以配置子元素在父容器中的水平对齐方式。</p>
<h3 id="垂直对齐">垂直对齐<a class="doc-anchor" href="#垂直对齐">#</a></h3>
<p><code>align</code>属性可以配置子元素在父容器中的垂直对齐方式。</p>
<h3 id="列间距">列间距<a class="doc-anchor" href="#列间距">#</a></h3>
<p><code>gap</code>属性可以配置子元素之间的距离。</p>
<h3 id="列顺序">列顺序<a class="doc-anchor" href="#列顺序">#</a></h3>
<p>通过<code>order</code>来改变元素的排序。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="RowProps">RowProps<a class="doc-anchor" href="#RowProps">#</a></h3>
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
<td>gap</td>
<td>列间距</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>justify</td>
<td>水平对齐方式</td>
<td>'start' | 'center' | 'end' | 'around' | 'between' | 'evenly'</td>
<td>-</td>
</tr>
<tr>
<td>align</td>
<td>垂直对齐方式</td>
<td>'start' | 'center' | 'end' | 'stretch'</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="RowSlots">RowSlots<a class="doc-anchor" href="#RowSlots">#</a></h3>
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
<h3 id="ColProps">ColProps<a class="doc-anchor" href="#ColProps">#</a></h3>
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
<td>span</td>
<td>列元素宽度</td>
<td>number | 'auto' | 'none'</td>
<td>-</td>
</tr>
<tr>
<td>offset</td>
<td>列元素偏移距离</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>order</td>
<td>列元素顺序</td>
<td>number</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="ColSlots">ColSlots<a class="doc-anchor" href="#ColSlots">#</a></h3>
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
`,l=d({__name:"README",setup(s){return t(),(r,c)=>(a(),o("div",{class:"doc-content",innerHTML:e}))}});export{l as default};
