import{u as a}from"./useCodeTool-MhyGaRwJ.js";import{d as t,c as s,o as n}from"./index-CjTGEgwI.js";const o=`<h1 id="Navbar头部导航">Navbar 头部导航<a class="doc-anchor" href="#Navbar头部导航">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>在页面顶部的导航栏。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/navbar/navbar.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>title</code> 显示居中的标题。</p>
<h3 id="导航项">导航项<a class="doc-anchor" href="#导航项">#</a></h3>
<p>可以在 <code>left/right</code> 插槽中放置导航项。导航项带有默认的颜色和点击态。</p>
<h3 id="流动导航">流动导航<a class="doc-anchor" href="#流动导航">#</a></h3>
<p>默认情况下标题居中， <code>left/right</code> 绝对定位于左右两侧；可以使用 <code>flow</code> 使其变为流动布局。</p>
<h3 id="自定义内容">自定义内容<a class="doc-anchor" href="#自定义内容">#</a></h3>
<p>默认插槽的内容会覆盖标题，可以实现更加自由的布局。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="NavbarProps">NavbarProps<a class="doc-anchor" href="#NavbarProps">#</a></h3>
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
<td>自定义标题</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>flow</td>
<td>默认 <code>left/right</code> 绝对定位于左右两侧，标题居中；可以使用 <code>flow</code> 使其变为流动布局。</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="NavbarSlots">NavbarSlots<a class="doc-anchor" href="#NavbarSlots">#</a></h3>
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
<td>自定义导航中间内容</td>
<td>-</td>
</tr>
<tr>
<td>title</td>
<td>自定义标题内容</td>
<td>-</td>
</tr>
<tr>
<td>left</td>
<td>自定义导航左侧区域内容</td>
<td>-</td>
</tr>
<tr>
<td>right</td>
<td>自定义导航右侧区域内容</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="NavbarItemProps">NavbarItemProps<a class="doc-anchor" href="#NavbarItemProps">#</a></h3>
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
</tbody>
</table></div>
<h3 id="NavbarItemSlots">NavbarItemSlots<a class="doc-anchor" href="#NavbarItemSlots">#</a></h3>
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
<h3 id="NavbarItemEmits">NavbarItemEmits<a class="doc-anchor" href="#NavbarItemEmits">#</a></h3>
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
<td>导航项时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-navbar-height</span><span class="token punctuation">:</span> 88rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-navbar-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-navbar-title-max-width</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span>
  <span class="token property">--sar-navbar-title-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-navbar-title-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-navbar-item-padding-x</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-navbar-item-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-navbar-item-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-navbar-item-active-opacity</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-active-opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-navbar-left-gap</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-navbar-right-gap</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,l=t({__name:"README",setup(p){return a(),(e,c)=>(n(),s("div",{class:"doc-content",innerHTML:o}))}});export{l as default};
