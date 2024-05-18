import{u as n}from"./useCodeTool-WdnBpSFt.js";import{d as s,c as a,o as t}from"./index-x2dM14V_.js";const p=`<h1 id="Indexes索引">Indexes 索引<a class="doc-anchor" href="#Indexes索引">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>用于页面中信息快速检索，可以根据目录中的页码快速找到所需的内容。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Indexes <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/indexes/indexes.vue'</span>
<span class="token keyword">import</span> IndexesAnchor <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/indexes-anchor/indexes-anchor.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>按下或滑动索引侧边栏时，会自动滚动到对应的锚点位置。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-indexes</span> <span class="token attr-name">:current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>height: 640rpx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, i) in indexList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-indexes-anchor</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.anchor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-indexes-anchor</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
          <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(province, j) in item.provinces<span class="token punctuation">"</span></span>
          <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>j<span class="token punctuation">"</span></span>
          <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>province<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-indexes</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClick<span class="token punctuation">"</span></span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin: 100rpx 40rpx 0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    scrollTo G
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> nextTick <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> indexList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'A'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'安徽省'</span><span class="token punctuation">,</span> <span class="token string">'澳门特别行政区'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'B'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'北京市'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'C'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'重庆市'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'F'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'福建省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'G'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'甘肃省'</span><span class="token punctuation">,</span> <span class="token string">'广东省'</span><span class="token punctuation">,</span> <span class="token string">'广西壮族自治区'</span><span class="token punctuation">,</span> <span class="token string">'贵州省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'H'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'海南省'</span><span class="token punctuation">,</span> <span class="token string">'河北省'</span><span class="token punctuation">,</span> <span class="token string">'河南省'</span><span class="token punctuation">,</span> <span class="token string">'黑龙江省'</span><span class="token punctuation">,</span> <span class="token string">'湖北省'</span><span class="token punctuation">,</span> <span class="token string">'湖南省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'J'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'吉林省'</span><span class="token punctuation">,</span> <span class="token string">'江苏省'</span><span class="token punctuation">,</span> <span class="token string">'江西省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'L'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'辽宁省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'N'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'内蒙古自治区'</span><span class="token punctuation">,</span> <span class="token string">'宁夏回族自治区'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'Q'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'青海省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'S'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'山东省'</span><span class="token punctuation">,</span> <span class="token string">'山西省'</span><span class="token punctuation">,</span> <span class="token string">'陕西省'</span><span class="token punctuation">,</span> <span class="token string">'上海市'</span><span class="token punctuation">,</span> <span class="token string">'四川省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'T'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'台湾省'</span><span class="token punctuation">,</span> <span class="token string">'天津市'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'X'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'西藏自治区'</span><span class="token punctuation">,</span> <span class="token string">'香港特别行政区'</span><span class="token punctuation">,</span> <span class="token string">'新疆维吾尔自治区'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'Y'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'云南省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">'Z'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provinces</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'浙江省'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> current <span class="token operator">=</span> ref<span class="token operator">&lt;</span><span class="token keyword">undefined</span> <span class="token operator">|</span> string<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'Q'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  current<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">undefined</span>
  <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    current<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'G'</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="IndexesProps">IndexesProps<a class="doc-anchor" href="#IndexesProps">#</a></h3>
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
<td>current</td>
<td>设置当前活动的锚点</td>
<td>number | string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="IndexesSlots">IndexesSlots<a class="doc-anchor" href="#IndexesSlots">#</a></h3>
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
<h3 id="IndexesEmits">IndexesEmits<a class="doc-anchor" href="#IndexesEmits">#</a></h3>
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
<td>change</td>
<td>索引发生变更时触发</td>
<td>(name: number | string) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="IndexesAnchorProps">IndexesAnchorProps<a class="doc-anchor" href="#IndexesAnchorProps">#</a></h3>
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
<td>name</td>
<td>索引锚点名称</td>
<td>number | string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="IndexesAnchorSlots">IndexesAnchorSlots<a class="doc-anchor" href="#IndexesAnchorSlots">#</a></h3>
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
<td>自定义锚点内容，会覆盖 <code>name</code> 属性</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-indexes-anchor-padding</span><span class="token punctuation">:</span> 0 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-anchor-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-anchor-line-height</span><span class="token punctuation">:</span> 64rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-anchor-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-anchor-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-body-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-indexes-nav-padding-right</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-indexes-nav-item-font-size</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-nav-item-size</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-nav-item-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-body-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-nav-item-active-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-nav-item-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-indexes-hint-size</span><span class="token punctuation">:</span> 100rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-hint-margin-right</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-hint-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-hint-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-indexes-hint-text-font-size</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-hint-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,u=s({__name:"README",setup(o){return n(),(e,c)=>(t(),a("div",{class:"doc-content",innerHTML:p}))}});export{u as default};
