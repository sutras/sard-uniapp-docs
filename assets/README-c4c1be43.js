import{u as a}from"./useCodeTool-bcffc59d.js";import{d as s,c as n,o as t}from"./index-28a3fb09.js";const p=`<h1 id="Popup弹出层">Popup 弹出层<a class="doc-anchor" href="#Popup弹出层">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>所有可弹出组件的底层组件，可自定义弹出方向和内容。后弹出的弹出层总是比之前的层级要大。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Popup <span class="token keyword">from</span> <span class="token string">'@sard/uniapp/dist/popup/popup.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>visible</code> 控制显隐。
使用 <code>effect</code> 控制显隐效果。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-popup</span>
    <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span>
    <span class="token attr-name">:effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>effect<span class="token punctuation">"</span></span>
    <span class="token attr-name">@overlay-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onOverlayClick<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bem.e('content')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Popup<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-popup</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">hover</span> <span class="token attr-name">arrow</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>顶部划出<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show('slide-top')<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">hover</span> <span class="token attr-name">arrow</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>右边划出<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show('slide-right')<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">hover</span> <span class="token attr-name">arrow</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>底部划出<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show('slide-bottom')<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">hover</span> <span class="token attr-name">arrow</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>左边划出<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show('slide-left')<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">hover</span> <span class="token attr-name">arrow</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>缩放<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show('zoom')<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">hover</span> <span class="token attr-name">arrow</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>淡入淡出<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show('fade')<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> createBem <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@/utils'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PopupProps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sard/uniapp'</span>

<span class="token keyword">const</span> bem <span class="token operator">=</span> <span class="token function">createBem</span><span class="token punctuation">(</span><span class="token string">'popup'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> effect <span class="token operator">=</span> ref<span class="token operator">&lt;</span>PopupProps<span class="token punctuation">[</span><span class="token string">'effect'</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'fade'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> PopupProps<span class="token punctuation">[</span><span class="token string">'effect'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  effect<span class="token punctuation">.</span>value <span class="token operator">=</span> e
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onOverlayClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@use</span> <span class="token string">'@/index.scss'</span> as *<span class="token punctuation">;</span></span>

<span class="token atrule"><span class="token rule">@include</span> <span class="token function">bem</span><span class="token punctuation">(</span>popup<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token atrule"><span class="token rule">@include</span> <span class="token function">e</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="PopupProps">PopupProps<a class="doc-anchor" href="#PopupProps">#</a></h3>
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
<td>visible</td>
<td>是否可见</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>duration</td>
<td>显隐动画时长，单位 ms</td>
<td>number | [number, number]</td>
<td>-</td>
</tr>
<tr>
<td>effect</td>
<td>显隐效果</td>
<td>'slide-top' | 'slide-right' | 'slide-bottom' | 'slide-left' | 'zoom' | 'fade'</td>
<td>'fade'</td>
</tr>
<tr>
<td>overlay</td>
<td>是否显示遮罩</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>background</td>
<td>遮罩背景色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>transparent</td>
<td>透明遮罩</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="PopupSlots">PopupSlots<a class="doc-anchor" href="#PopupSlots">#</a></h3>
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
<h3 id="PopupEmits">PopupEmits<a class="doc-anchor" href="#PopupEmits">#</a></h3>
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
<td>overlay-click</td>
<td>点击遮罩时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>before-enter</td>
<td>入场动画开始前触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>enter</td>
<td>入场动画开始时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>after-enter</td>
<td>入场动画结束时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>enter-cancelled</td>
<td>入场动画取消时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>before-leave</td>
<td>退场动画开始前触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>leave</td>
<td>退场动画开始时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>after-leave</td>
<td>退场动画结束时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>leave-cancelled</td>
<td>退场动画取消时触发</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-popup-z-index</span><span class="token punctuation">:</span> 1000<span class="token punctuation">;</span>
  <span class="token property">--sar-popup-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,r=s({__name:"README",setup(o){return a(),(e,c)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{r as default};
