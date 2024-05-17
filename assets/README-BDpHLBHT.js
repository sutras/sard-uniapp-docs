import{u as a}from"./useCodeTool-MhyGaRwJ.js";import{d as s,c as n,o as t}from"./index-CjTGEgwI.js";const o=`<h1 id="Cascader级联选择">Cascader 级联选择<a class="doc-anchor" href="#Cascader级联选择">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>用于在多层级数据中进行选择，常用于省市区、组织架构选择。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Cascader <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>通过 <code>v-model</code> 绑定当前值，通过 <code>options</code> 配置选项数据。</p>
<h3 id="异步加载">异步加载<a class="doc-anchor" href="#异步加载">#</a></h3>
<p>通过监听 <code>@select</code> 事件，获取当前选中的选项，将异步获取的数据作为 <code>children</code> 属性值， 再把组件的 <code>options</code> 更新一下，使组件重新渲染。如果选项的 <code>children</code> 是需要用户点击时再通过接口获取的， 此选项的 <code>children</code> 需初始化为空数组。</p>
<h3 id="自定义面板上方内容">自定义面板上方内容<a class="doc-anchor" href="#自定义面板上方内容">#</a></h3>
<p>使用 <code>top</code> 插槽可以在面板顶部展示当前面板的一些信息。</p>
<h3 id="禁选选项">禁选选项<a class="doc-anchor" href="#禁选选项">#</a></h3>
<p>禁用的选项不可点击。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="CascaderProps">CascaderProps<a class="doc-anchor" href="#CascaderProps">#</a></h3>
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
<td>选中项的值</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>options</td>
<td>可选项数据源</td>
<td>CascaderOption[]</td>
<td>[]</td>
</tr>
<tr>
<td>field-keys</td>
<td>自定义 <code>options</code> 中的字段</td>
<td>CascaderFieldKeys</td>
<td>defaultFieldKeys</td>
</tr>
<tr>
<td>hint-text</td>
<td>未选中时的提示文案</td>
<td>string</td>
<td>'请选择'</td>
</tr>
<tr>
<td>label-render</td>
<td>自定义可选项渲染</td>
<td>(option: CascaderOption) =&gt; string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="CascaderSlots">CascaderSlots<a class="doc-anchor" href="#CascaderSlots">#</a></h3>
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
<td>top</td>
<td>自定义面板上方内容</td>
<td>&#123; tabIndex: number &#125;</td>
</tr>
</tbody>
</table></div>
<h3 id="CascaderEmits">CascaderEmits<a class="doc-anchor" href="#CascaderEmits">#</a></h3>
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
<td>update:model-value</td>
<td>全部选项选择完成后触发</td>
<td>(value: string | number, selectedOptions: CascaderOption[]) =&gt; void</td>
</tr>
<tr>
<td>select</td>
<td>选中某一项时触发</td>
<td>(option: CascaderOption, tabIndex: number) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="CascaderOption">CascaderOption<a class="doc-anchor" href="#CascaderOption">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">CascaderOption</span> <span class="token punctuation">&#123;</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  children<span class="token operator">?</span><span class="token operator">:</span> CascaderOption<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> PropertyKey<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="CascaderFieldKeys">CascaderFieldKeys<a class="doc-anchor" href="#CascaderFieldKeys">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">CascaderFieldKeys</span> <span class="token punctuation">&#123;</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="defaultFieldKeys">defaultFieldKeys<a class="doc-anchor" href="#defaultFieldKeys">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> defaultFieldKeys<span class="token operator">:</span> CascaderFieldKeys <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  label<span class="token operator">:</span> <span class="token string">'label'</span><span class="token punctuation">,</span>
  value<span class="token operator">:</span> <span class="token string">'value'</span><span class="token punctuation">,</span>
  disabled<span class="token operator">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token string">'children'</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-cascader-wrapper-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-cascader-loading-wrapper-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-cascader-selected-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-cascader-options-height</span><span class="token punctuation">:</span> 640rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-cascader-option-padding-y</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-cascader-option-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-cascader-option-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-cascader-option-line-height</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-cascader-option-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-active-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-cascader-loading-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-xl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-cascader-loading-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,l=s({__name:"README",setup(p){return a(),(e,c)=>(t(),n("div",{class:"doc-content",innerHTML:o}))}});export{l as default};
