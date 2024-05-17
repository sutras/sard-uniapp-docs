import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d as a,c as s,o as n}from"./index-CjTGEgwI.js";const o=`<h1 id="Skeleton骨架屏">Skeleton 骨架屏<a class="doc-anchor" href="#Skeleton骨架屏">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>在内容加载过程中提供一组占位图形，通常图形会描述内容的概要排版。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Skeleton <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/skeleton/skeleton.vue'</span>
<span class="token keyword">import</span> SkeletonBlock <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/skeleton-block/skeleton-block.vue'</span>
<span class="token keyword">import</span> SkeletonAvatar <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/skeleton-avatar/skeleton-avatar.vue'</span>
<span class="token keyword">import</span> SkeletonTitle <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/skeleton-title/skeleton-title.vue'</span>
<span class="token keyword">import</span> SkeletonParagraph <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/skeleton-paragraph/skeleton-paragraph.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>默认展示三行占位元素。</p>
<h3 id="显示标题">显示标题<a class="doc-anchor" href="#显示标题">#</a></h3>
<p>设置 <code>title</code> 属性显示标题占位元素。</p>
<h3 id="显示头像">显示头像<a class="doc-anchor" href="#显示头像">#</a></h3>
<p>设置 <code>avatar</code> 属性显示头像占位元素。</p>
<h3 id="圆形头像">圆形头像<a class="doc-anchor" href="#圆形头像">#</a></h3>
<p>设置 <code>avatarRound</code> 属性显示头圆形像占位元素。</p>
<h3 id="圆角标题和段落">圆角标题和段落<a class="doc-anchor" href="#圆角标题和段落">#</a></h3>
<p>设置 <code>round</code> 属性显示圆角标题和段落。</p>
<h3 id="动画效果">动画效果<a class="doc-anchor" href="#动画效果">#</a></h3>
<p>设置 <code>animated</code> 属性显示动画效果。</p>
<h3 id="包含子组件">包含子组件<a class="doc-anchor" href="#包含子组件">#</a></h3>
<p>将 <code>loading</code> 属性设置成 <code>false</code> 表示内容加载完成，此时会隐藏占位图。</p>
<h3 id="自定义">自定义<a class="doc-anchor" href="#自定义">#</a></h3>
<p>可以通过 <code>SkeletonBlock</code>、<code>SkeletonAvatar</code>、<code>SkeletonTitle</code>、<code>SkeletonParagraph</code> 自由组合使用。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="SkeletonProps">SkeletonProps<a class="doc-anchor" href="#SkeletonProps">#</a></h3>
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
<td>rows</td>
<td>段落行数</td>
<td>number</td>
<td>3</td>
</tr>
<tr>
<td>title</td>
<td>是否显示标题</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>avatar</td>
<td>是否显示头像</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>avatar-size</td>
<td>头像尺寸</td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>avatar-round</td>
<td>是否显示圆形头像</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>round</td>
<td>是否将标题和段落显示为圆角风格</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>是否显示骨架屏，传 <code>false</code> 时会展示子组件内容</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>animated</td>
<td>是否开启动画</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="SkeletonBlockProps">SkeletonBlockProps<a class="doc-anchor" href="#SkeletonBlockProps">#</a></h3>
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
<td>animated</td>
<td>是否开启动画</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>round</td>
<td>是否显示为圆角风格</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>width</td>
<td>设置宽度</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>height</td>
<td>设置高度</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="SkeletonAvatarProps">SkeletonAvatarProps<a class="doc-anchor" href="#SkeletonAvatarProps">#</a></h3>
<p>继承 <code>SkeletonBlockProps</code> 并有以下额外属性：</p>
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
<td>size</td>
<td>头像尺寸</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="SkeletonTitleProps">SkeletonTitleProps<a class="doc-anchor" href="#SkeletonTitleProps">#</a></h3>
<p>继承 <code>SkeletonBlockProps</code>。</p>
<h3 id="SkeletonParagraphProps">SkeletonParagraphProps<a class="doc-anchor" href="#SkeletonParagraphProps">#</a></h3>
<p>继承 <code>SkeletonBlockProps</code> 并有以下额外属性：</p>
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
<td>rows</td>
<td>段落行数</td>
<td>number</td>
<td>3</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-skeleton-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-skeleton-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-skeleton-highlight-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.08<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-skeleton-block-height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-skeleton-avatar-size</span><span class="token punctuation">:</span> 64rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-skeleton-avatar-margin-right</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-skeleton-title-width</span><span class="token punctuation">:</span> 40%<span class="token punctuation">;</span>
  <span class="token property">--sar-skeleton-title-height</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-skeleton-title-margin-bottom</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-skeleton-row-last-width</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span>
  <span class="token property">--sar-skeleton-row-gap</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="CSS变量-暗黑模式">CSS 变量 - 暗黑模式<a class="doc-anchor" href="#CSS变量-暗黑模式">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token keyword">@include</span> <span class="token selector">theme-dark </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-skeleton-highlight-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,l=a({__name:"README",setup(e){return t(),(p,d)=>(n(),s("div",{class:"doc-content",innerHTML:o}))}});export{l as default};