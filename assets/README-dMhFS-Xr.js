import{u as a}from"./useCodeTool-mazcC0Cn.js";import{d as s,c as n,o as t}from"./index-ybeXHrRA.js";const p=`<h1 id="Switch开关">Switch 开关<a class="doc-anchor" href="#Switch开关">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>用于打开/关闭两种状态间的切换。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Switch <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/switch/switch.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>通过 <code>v-model</code> 绑定开关的选中状态，<code>true</code> 表示开，<code>false</code> 表示关。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> checked <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义尺寸">自定义尺寸<a class="doc-anchor" href="#自定义尺寸">#</a></h3>
<p>使用 <code>size</code> 属性设置开关尺寸。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>48rpx<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> checked <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>使用 <code>checkedColor</code> 属性设置打开时的颜色，使用 <code>uncheckedColor</code> 属性设置关闭时的颜色。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span> <span class="token attr-name">checked-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>var(--sar-red)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> checked <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="不同状态的值">不同状态的值<a class="doc-anchor" href="#不同状态的值">#</a></h3>
<p>可以设置 <code>checkedValue</code> 和 <code>uncheckedValue</code> 属性代替默认的 <code>true</code> 和 <code>false</code>。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">checked-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>on<span class="token punctuation">"</span></span> <span class="token attr-name">unchecked-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>off<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>&#123;&#123; value &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'on'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="只读和禁用">只读和禁用<a class="doc-anchor" href="#只读和禁用">#</a></h3>
<p>只读或禁用时不可操作。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-title</span><span class="token punctuation">></span></span>只读<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">readonly</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">readonly</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 10rpx<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-title</span><span class="token punctuation">></span></span>禁用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 10rpx<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="加载状态">加载状态<a class="doc-anchor" href="#加载状态">#</a></h3>
<p>当提供 <code>beforeUpdate</code> 函数，会在 <code>fulfilled</code> 状态后才切换，期间显示加载状态。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span> <span class="token attr-name">:before-update</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>beforeUpdate<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> checked <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">beforeUpdate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="SwitchProps">SwitchProps<a class="doc-anchor" href="#SwitchProps">#</a></h3>
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
<td>model-value (v-model)</td>
<td>开关选中状态</td>
<td>any</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>只读状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loading (v-model)</td>
<td>加载状态</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>开关大小</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>checked-color</td>
<td>开启时的颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>unchecked-color</td>
<td>关闭时的颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>checked-value</td>
<td>开启时的值</td>
<td>any</td>
<td>true</td>
</tr>
<tr>
<td>unchecked-value</td>
<td>关闭时的值</td>
<td>any</td>
<td>false</td>
</tr>
<tr>
<td>before-update</td>
<td>用于异步切换</td>
<td>(value: any) =&gt; Promise&lt;any&gt;</td>
<td>-</td>
</tr>
<tr>
<td>validate-event</td>
<td>是否触发表单验证</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3 id="SwitchEmits">SwitchEmits<a class="doc-anchor" href="#SwitchEmits">#</a></h3>
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
<td>点击按钮时触发，加载和禁用状态不会触发</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>update:model-value</td>
<td>开关状态切换时触发</td>
<td>(value: any) =&gt; void</td>
</tr>
<tr>
<td>update:loading</td>
<td>加载状态切换时触发</td>
<td>(loading: boolean) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-switch-font-size</span><span class="token punctuation">:</span> 60rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-switch-width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>1em <span class="token operator">/</span> 6 <span class="token operator">*</span> 10<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-switch-height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">--sar-switch-transition-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-switch-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-switch-checked-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-switch-is-loading-opacity</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-loading-opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-switch-thumb-gap</span><span class="token punctuation">:</span> 6rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-switch-thumb-width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>
    <span class="token function">var</span><span class="token punctuation">(</span>--sar-switch-height<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-switch-thumb-gap<span class="token punctuation">)</span> <span class="token operator">*</span> 2
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-switch-thumb-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-switch-thumb-width<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-switch-thumb-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-full<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-switch-thumb-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-switch-thumb-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-600<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-switch-thumb-transition-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,k=s({__name:"README",setup(o){return a(),(c,e)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{k as default};
