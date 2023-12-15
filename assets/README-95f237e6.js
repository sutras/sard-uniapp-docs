import{u as a}from"./useCodeTool-bcffc59d.js";import{d as s,c as n,o as t}from"./index-28a3fb09.js";const p=`<h1 id="Keyboard数字键盘">Keyboard 数字键盘<a class="doc-anchor" href="#Keyboard数字键盘">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>虚拟键盘，用于输入支付密码、验证码、车牌号等场景。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Keyboard <span class="token keyword">from</span> <span class="token string">'@sard/uniapp/dist/keyboard/keyboard.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="数字键盘">数字键盘<a class="doc-anchor" href="#数字键盘">#</a></h3>
<p>展示 0-9 的数字按键和删除按键。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-keyboard</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="带小数点的数字键盘">带小数点的数字键盘<a class="doc-anchor" href="#带小数点的数字键盘">#</a></h3>
<p>允许输入小数。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-keyboard</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>digit<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="身份证键盘">身份证键盘<a class="doc-anchor" href="#身份证键盘">#</a></h3>
<p>由 0-9 和 X 组成。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-keyboard</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>idcard<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="随机数字键盘">随机数字键盘<a class="doc-anchor" href="#随机数字键盘">#</a></h3>
<p>展示乱序的数字按键。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-keyboard</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>random<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="车牌号键盘">车牌号键盘<a class="doc-anchor" href="#车牌号键盘">#</a></h3>
<p>用于输入车牌号。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-keyboard</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plate<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="KeyboardProps">KeyboardProps<a class="doc-anchor" href="#KeyboardProps">#</a></h3>
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
<td>type</td>
<td>键盘类型</td>
<td>'number' | 'digit' | 'idcard' | 'random' | 'plate'</td>
<td>'number'</td>
</tr>
</tbody>
</table></div>
<h3 id="KeyboardEmits">KeyboardEmits<a class="doc-anchor" href="#KeyboardEmits">#</a></h3>
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
<td>input</td>
<td>可输入按键点击时触发</td>
<td>(key: string) =&gt; void</td>
</tr>
<tr>
<td>backspace</td>
<td>点击删除按钮时触发</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="KeyBoardExpose">KeyBoardExpose<a class="doc-anchor" href="#KeyBoardExpose">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>shuffle</td>
<td>重新打乱随机键盘按键</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>toggle</td>
<td>切换车牌号的中英文按键</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-keyboard-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-200<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-padding</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-keyboard-key-gap</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-body-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-300<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-keyboard-key-height</span><span class="token punctuation">:</span> 96rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-xl<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-keyboard-key-plate-height</span><span class="token punctuation">:</span> 80rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-plate-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-plate-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-plate-backspace-font-size</span><span class="token punctuation">:</span> 36rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-plate-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-300<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-plate-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-400<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="CSS变量-暗黑模式">CSS 变量 - 暗黑模式<a class="doc-anchor" href="#CSS变量-暗黑模式">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token keyword">@include</span> <span class="token selector">theme-dark </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-keyboard-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-800<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-700<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-600<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-plate-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-600<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-keyboard-key-plate-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-500<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,r=s({__name:"README",setup(o){return a(),(e,c)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{r as default};
