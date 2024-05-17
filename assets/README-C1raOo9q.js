import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d as a,c as s,o as d}from"./index-CjTGEgwI.js";const n=`<h1 id="Grid宫格">Grid 宫格<a class="doc-anchor" href="#Grid宫格">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>将多个类目进行等宽排列，用于内容展示或者页面导航。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Grid <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/grid/grid.vue'</span>
<span class="token keyword">import</span> GridItem <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/grid-item/grid-item.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用<code>text</code>属性设置文本内容，使用<code>icon</code>属性设置图标。</p>
<h3 id="自定义列数">自定义列数<a class="doc-anchor" href="#自定义列数">#</a></h3>
<p>默认一行展示四个格子，可以通过<code>columns</code>自定义列数。</p>
<h3 id="正方形格子">正方形格子<a class="doc-anchor" href="#正方形格子">#</a></h3>
<p>设置<code>square</code>属性后，格子的高度会和宽度保持一致。</p>
<h3 id="格子间距">格子间距<a class="doc-anchor" href="#格子间距">#</a></h3>
<p>通过<code>gap</code>属性设置格子之间的距离。</p>
<h3 id="显示边框">显示边框<a class="doc-anchor" href="#显示边框">#</a></h3>
<p>显示边框后看起来分割更明显。</p>
<h3 id="内容横排">内容横排<a class="doc-anchor" href="#内容横排">#</a></h3>
<p>将<code>direction</code>属性设置为<code>horizontal</code>可以让宫格的内容呈横向排列。</p>
<h3 id="内容翻转">内容翻转<a class="doc-anchor" href="#内容翻转">#</a></h3>
<p>将文本和图标的位置调换。</p>
<h3 id="可点击的">可点击的<a class="doc-anchor" href="#可点击的">#</a></h3>
<p>添加点击态。</p>
<h3 id="自定义内容">自定义内容<a class="doc-anchor" href="#自定义内容">#</a></h3>
<p>通过默认插槽可以自定义格子展示的内容。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="GridProps">GridProps<a class="doc-anchor" href="#GridProps">#</a></h3>
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
<td>columns</td>
<td>列数</td>
<td>number</td>
<td>4</td>
</tr>
<tr>
<td>gap</td>
<td>格子间距</td>
<td>string</td>
<td>0</td>
</tr>
<tr>
<td>bordered</td>
<td>是否显示边框</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>square</td>
<td>是否将格子显示为正方形</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>clickable</td>
<td>格子是否可点击</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>reverse</td>
<td>是否调换图标和文本的位置</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>direction</td>
<td>格子排列方向</td>
<td>'horizontal' | 'vertical'</td>
<td>'vertical'</td>
</tr>
</tbody>
</table></div>
<h3 id="GridSlots">GridSlots<a class="doc-anchor" href="#GridSlots">#</a></h3>
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
<h3 id="GridItemProps">GridItemProps<a class="doc-anchor" href="#GridItemProps">#</a></h3>
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
<td>text</td>
<td>自定义文字内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>图标名称，可以为图片路径</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon-size</td>
<td>图标尺寸</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon-color</td>
<td>图标颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon-family</td>
<td>图标字体名称</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="GridItemSlots">GridItemSlots<a class="doc-anchor" href="#GridItemSlots">#</a></h3>
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
<td>自定义默认内容，会覆盖文字和图标</td>
<td>-</td>
</tr>
<tr>
<td>text</td>
<td>自定义文字内容，会覆盖<code>text</code>属性</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标内容，会覆盖<code>icon</code>属性</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="GridItemEmits">GridItemEmits<a class="doc-anchor" href="#GridItemEmits">#</a></h3>
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
<td>点击格子时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-grid-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-grid-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-grid-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-active-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-grid-item-padding-x</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-grid-item-padding-y</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-grid-item-icon-size</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-grid-item-text-gap</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-grid-item-text-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-grid-item-text-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-tight<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,i=a({__name:"README",setup(o){return t(),(e,r)=>(d(),s("div",{class:"doc-content",innerHTML:n}))}});export{i as default};
