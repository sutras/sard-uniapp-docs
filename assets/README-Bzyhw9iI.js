import{M as n}from"./index-BBNVUDaP.js";import{d as s,c as t,o as p}from"./index-BPtgLRB-.js";const o=`<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>按钮用于开始一个即时操作。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/button/button.vue'</span>
</code></pre>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="按钮类型">按钮类型<a class="doc-anchor" href="#按钮类型">#</a></h3>
<p><code>type</code>属性用于配置按钮的类型。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>默认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>淡颜色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mild<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>温和<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>轮廓线<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>淡文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="按钮主题色">按钮主题色<a class="doc-anchor" href="#按钮主题色">#</a></h3>
<p><code>Button</code>组件内置了几个主题色，可以使用<code>theme</code>属性来配置。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>secondary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>如果内置主题色不合适，可以自定义主题色。使用<code>color</code>和<code>background</code>属性定义字体颜色和背景色。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fuchsia<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rgba(255,0,255,0.2)<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fuchsia<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    pale
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fuchsia<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mild<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>mild<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fuchsia<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>outline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fuchsia<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fuchsia<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pale-text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>linear-gradient(to right, orange, fuchsia)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    渐变色
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="圆形按钮">圆形按钮<a class="doc-anchor" href="#圆形按钮">#</a></h3>
<p>使用<code>round</code>属性设置为圆形按钮。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">round</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pale<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">round</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mild<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>mild<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">round</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>outline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">round</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">round</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pale-text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="禁用按钮">禁用按钮<a class="doc-anchor" href="#禁用按钮">#</a></h3>
<p>禁用状态的按钮不可点击。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">disabled</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pale<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">disabled</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mild<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>mild<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">disabled</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>outline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">disabled</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">disabled</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pale-text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="按钮尺寸">按钮尺寸<a class="doc-anchor" href="#按钮尺寸">#</a></h3>
<p>内置三种尺寸以供选择。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>迷你尺寸<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>小尺寸<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>默认尺寸<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>大尺寸<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="加载中">加载中<a class="doc-anchor" href="#加载中">#</a></h3>
<p>加载中的按钮不可点击。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">loading</span><span class="token punctuation">></span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">loading</span><span class="token punctuation">></span></span>加载中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">loading</span> <span class="token attr-name">loading-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clock<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>加载中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="ButtonProps">ButtonProps<a class="doc-anchor" href="#ButtonProps">#</a></h3>
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
<td>type</td>
<td>按钮类型</td>
<td>'default' | 'pale' | 'mild' | 'outline' | 'text' | 'pale-text'</td>
<td>'default'</td>
</tr>
<tr>
<td>theme</td>
<td>按钮主题色</td>
<td>'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'</td>
<td>'primary'</td>
</tr>
<tr>
<td>size</td>
<td>按钮尺寸</td>
<td>'mini' | 'small' | 'medium' | 'large'</td>
<td>'medium'</td>
</tr>
<tr>
<td>round</td>
<td>圆角按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>加载状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loading-type</td>
<td>加载类型</td>
<td>'clock' | 'circular'</td>
<td>'circular'</td>
</tr>
<tr>
<td>color</td>
<td>自定义文字颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>background</td>
<td>自定义背景颜色</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div><h3 id="ButtonProps小程序能力">ButtonProps（小程序能力）<a class="doc-anchor" href="#ButtonProps小程序能力">#</a></h3>
<p><a href="https://uniapp.dcloud.net.cn/component/button.html" target="blank">uniapp 文档</a>。</p>
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
<td>form-type</td>
<td>用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>open-type</td>
<td>开放能力</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>app-parameter</td>
<td>打开 APP 时，向 APP 传递的参数，open-type=launchApp 时有效</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>hover-stop-propagation</td>
<td>指定是否阻止本节点的祖先节点出现点击态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>lang</td>
<td>指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。</td>
<td>string</td>
<td>'en'</td>
</tr>
<tr>
<td>session-from</td>
<td>会话来源，open-type=&quot;contact&quot;时有效</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>send-message-title</td>
<td>会话内消息卡片标题，open-type=&quot;contact&quot;时有效</td>
<td>string</td>
<td>当前标题</td>
</tr>
<tr>
<td>send-message-path</td>
<td>会话内消息卡片点击跳转小程序路径，open-type=&quot;contact&quot;时有效</td>
<td>string</td>
<td>当前分享路径</td>
</tr>
<tr>
<td>send-message-img</td>
<td>会话内消息卡片图片，open-type=&quot;contact&quot;时有效</td>
<td>string</td>
<td>截图</td>
</tr>
<tr>
<td>show-message-card</td>
<td>是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示&quot;可能要发送的小程序&quot;提示，用户点击后可以快速发送小程序消息，open-type=&quot;contact&quot;时有效</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>group-id</td>
<td>打开群资料卡时，传递的群号</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>guild-id</td>
<td>打开频道页面时，传递的频道号</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>public-id</td>
<td>打开公众号资料卡时，传递的号码</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div><h3 id="ButtonSlots">ButtonSlots<a class="doc-anchor" href="#ButtonSlots">#</a></h3>
<div class="doc-table-responsive"><table><thead>
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
</table></div><h3 id="ButtonEmits">ButtonEmits<a class="doc-anchor" href="#ButtonEmits">#</a></h3>
<div class="doc-table-responsive"><table><thead>
<tr>
<th>事件</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>点击按钮时触发，加载和禁用状态不会触发</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div><h3 id="ButtonEmits小程序能力">ButtonEmits（小程序能力）<a class="doc-anchor" href="#ButtonEmits小程序能力">#</a></h3>
<p><a href="https://uniapp.dcloud.net.cn/component/button.html" target="blank">uniapp 文档</a>。</p>
<div class="doc-table-responsive"><table><thead>
<tr>
<th>事件</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>getphonenumber</td>
<td>获取用户手机号回调</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>getuserinfo</td>
<td>用户点击该按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值同 uni.getUserInfo</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>error</td>
<td>当使用开放能力时，发生错误的回调</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>opensetting</td>
<td>在打开授权设置页并关闭后回调</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>launchapp</td>
<td>从小程序打开 App 成功的回调</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>contact</td>
<td>客服消息回调</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>chooseavatar</td>
<td>获取用户头像回调</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>agreeprivacyauthorization</td>
<td>用户同意隐私协议事件回调，open-type=&quot;agreePrivacyAuthorization&quot;时有效</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>addgroupapp</td>
<td>添加群应用的回调</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>chooseaddress</td>
<td>调起用户编辑并选择收货地址的回调</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>chooseinvoicetitle</td>
<td>用户选择发票抬头的回调</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>subscribe</td>
<td>订阅消息授权回调</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>login</td>
<td>登录回调</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-button-height-mini</span><span class="token punctuation">:</span> 56rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-y-mini</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-x-mini</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-border-radius-mini</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-font-size-mini</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-button-height-sm</span><span class="token punctuation">:</span> 64rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-y-sm</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-x-sm</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-border-radius-sm</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-font-size-sm</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-button-height</span><span class="token punctuation">:</span> 80rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-y</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-button-height-lg</span><span class="token punctuation">:</span> 96rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-y-lg</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">--sar-button-padding-x-lg</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-button-border-radius-lg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-font-size-lg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-button-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-normal<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-button-active-opacity</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-active-opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-active-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.125<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-mild-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-200<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-pale-bg-opacity</span><span class="token punctuation">:</span> 0.2<span class="token punctuation">;</span>

  <span class="token property">--sar-button-loading-opacity</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-loading-opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-loading-cursor</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-loading-cursor<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-button-loading-margin-right</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre>
</div>`,r=s({__name:"README",setup(c){const a={nav:"组件",title:"Button",subtitle:"按钮",group:{title:"基础组件",order:0}};return(e,l)=>(p(),t(n,{content:o,fm:a}))}});export{r as default};
