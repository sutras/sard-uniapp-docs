import{u as a}from"./useCodeTool-5abdc725.js";import{d as s,c as n,o as t}from"./index-da6ae011.js";const p=`<h1 id="Avatar头像">Avatar 头像<a class="doc-anchor" href="#Avatar头像">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>用图片、图标或字符等来展示头像、群、库等事物信息。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Avatar <span class="token keyword">from</span> <span class="token string">'@sard/uniapp/dist/avatar/avatar.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>默认展示一个人头图标。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-avatar</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="形状">形状<a class="doc-anchor" href="#形状">#</a></h3>
<p>设置 <code>shape=&quot;square&quot; </code> 将其改为带圆角的方形。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="尺寸">尺寸<a class="doc-anchor" href="#尺寸">#</a></h3>
<p><code>size</code> 设置头像大小，<code>iconSize</code> 设置图标大小。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>96rpx<span class="token punctuation">"</span></span> <span class="token attr-name">icon-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>48rpx<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义样式">自定义样式<a class="doc-anchor" href="#自定义样式">#</a></h3>
<p><code>background</code> 设置头像背景色，<code>color</code> 设置图标颜色。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-avatar</span> <span class="token attr-name">background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>var(--sar-red)<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="图片类型">图片类型<a class="doc-anchor" href="#图片类型">#</a></h3>
<p>设置 <code>src</code> 图片路径将展示一个完全覆盖框框的图片。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@sard/assets@1.2.0/images/pic1.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义内容">自定义内容<a class="doc-anchor" href="#自定义内容">#</a></h3>
<p>默认插槽配置的内容会代替默认的内容。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-avatar</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>question<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-avatar</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-avatar</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 20rpx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-avatar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="额外内容">额外内容<a class="doc-anchor" href="#额外内容">#</a></h3>
<p><code>extra</code> 属性可以展示例如徽标等组件。要使徽标固定在圆角形状头像右上角边边上可以使用 <code>14.6447%</code> 的固定值。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#extra</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-badge</span> <span class="token attr-name">fixed</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-avatar</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-avatar</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 20rpx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#extra</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-badge</span> <span class="token attr-name">fixed</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top: 14.6447%; right: 14.6447%<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-avatar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="AvatarProps">AvatarProps<a class="doc-anchor" href="#AvatarProps">#</a></h3>
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
<td>shape</td>
<td>头像形状</td>
<td>'circle' | 'square'</td>
<td>'circle'</td>
</tr>
<tr>
<td>size</td>
<td>头像尺寸</td>
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
<td>src</td>
<td>图片类型头像的图片地址</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="AvatarSlots">AvatarSlots<a class="doc-anchor" href="#AvatarSlots">#</a></h3>
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
<td>extra</td>
<td>额外内容，常用于展示徽标</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-avatar-width</span><span class="token punctuation">:</span> 128rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-avatar-height</span><span class="token punctuation">:</span> 128rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-avatar-font-size</span><span class="token punctuation">:</span> 64rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-avatar-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-avatar-square-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,r=s({__name:"README",setup(c){return a(),(o,e)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{r as default};
