import{u as a}from"./useCodeTool-5abdc725.js";import{d as s,c as n,o as t}from"./index-da6ae011.js";const p=`<h1 id="Card卡片">Card 卡片<a class="doc-anchor" href="#Card卡片">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>以矩形的形式呈现相关信息或内容，包含标题、内容和相关元素。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">'@sard/uniapp/dist/card/card.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>展示带标题和内容的卡片。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>朝天子·咏喇叭<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    喇叭，唢呐，曲儿小腔儿大。官船来往乱如麻，全仗你抬声价。
    军听了军愁，民听了民怕。哪里去辨甚么真共假？
    眼见的吹翻了这家，吹伤了那家，只吹的水尽鹅飞罢！
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>设置 <code>extra</code> 属性可以在标题右边放置额外内容。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>朝天子·咏喇叭<span class="token punctuation">"</span></span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>王磐〔明代〕<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    喇叭，唢呐，曲儿小腔儿大。官船来往乱如麻，全仗你抬声价。
    军听了军愁，民听了民怕。哪里去辨甚么真共假？
    眼见的吹翻了这家，吹伤了那家，只吹的水尽鹅飞罢！
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="只有主体">只有主体<a class="doc-anchor" href="#只有主体">#</a></h3>
<p>如果不设置标题和额外内容，则不会渲染头部。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-card</span><span class="token punctuation">></span></span>
    喇叭，唢呐，曲儿小腔儿大。官船来往乱如麻，全仗你抬声价。
    军听了军愁，民听了民怕。哪里去辨甚么真共假？
    眼见的吹翻了这家，吹伤了那家，只吹的水尽鹅飞罢！
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="底部">底部<a class="doc-anchor" href="#底部">#</a></h3>
<p>可以设置 <code>footer</code> 属性在主体下面放置内容。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-card</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>朝天子·咏喇叭<span class="token punctuation">"</span></span>
    <span class="token attr-name">footer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>王磐（约1470年～1530年）称为南曲之冠。明代散曲作家、画家，亦通医学。<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    喇叭，唢呐，曲儿小腔儿大。官船来往乱如麻，全仗你抬声价。
    军听了军愁，民听了民怕。哪里去辨甚么真共假？
    眼见的吹翻了这家，吹伤了那家，只吹的水尽鹅飞罢！
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="CardProps">CardProps<a class="doc-anchor" href="#CardProps">#</a></h3>
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
<td>头部左边内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>extra</td>
<td>头部右边内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>footer</td>
<td>底部内容</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="CardSlots">CardSlots<a class="doc-anchor" href="#CardSlots">#</a></h3>
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
<tr>
<td>title</td>
<td>自定义标题内容</td>
<td>-</td>
</tr>
<tr>
<td>extra</td>
<td>自定义额外内容</td>
<td>-</td>
</tr>
<tr>
<td>footer</td>
<td>自定义底部内容</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-card-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-card-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-card-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-card-header-padding-y</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-card-header-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-card-title-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-card-title-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-normal<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-card-body-padding-y</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-card-body-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-card-footer-padding-y</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-card-footer-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,d=s({__name:"README",setup(o){return a(),(c,e)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{d as default};
