import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d as s,c as a,o}from"./index-CjTGEgwI.js";const n=`<h1 id="Popover气泡弹出框">Popover 气泡弹出框<a class="doc-anchor" href="#Popover气泡弹出框">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>弹出式的气泡菜单。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Popover <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/popover/popover.vue'</span>
<span class="token keyword">import</span> PopoverReference <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/popover-reference/popover-reference.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>options</code> 属性设置弹出框菜单；
在 <code>Popover</code> 组件里面放置 <code>PopoverReference</code> 组件，以便控制弹出框的显示和位置计算。</p>
<h3 id="暗黑模式">暗黑模式<a class="doc-anchor" href="#暗黑模式">#</a></h3>
<p>设置 <code>theme=&quot;dark&quot;</code> 会显示为暗黑模式。</p>
<h3 id="展示图标">展示图标<a class="doc-anchor" href="#展示图标">#</a></h3>
<p>通过 <code>options</code> 属性的可以在菜单左边展示图标。</p>
<h3 id="禁用选项">禁用选项<a class="doc-anchor" href="#禁用选项">#</a></h3>
<p>禁用的选项无法点击。</p>
<h3 id="水平排列">水平排列<a class="doc-anchor" href="#水平排列">#</a></h3>
<p>配置 <code>direction=&quot;horizontal&quot;</code> 可以水平排列菜单。</p>
<h3 id="自定义内容">自定义内容<a class="doc-anchor" href="#自定义内容">#</a></h3>
<p>弹出框可以放置任何内容，而不仅仅是菜单。通过 <code>v-model:visible</code> 可以控制弹出框的隐藏。</p>
<h3 id="弹出位置">弹出位置<a class="doc-anchor" href="#弹出位置">#</a></h3>
<p>气泡弹出框会尽量在视窗中匹配各个位置以便可以完整展示，默认底部居中展示。</p>
<h3 id="自定义reference">自定义 reference<a class="doc-anchor" href="#自定义reference">#</a></h3>
<p>如果因 <code>DOM</code> 结构限制，无法在 <code>Popover</code> 组件里面放置 <code>PopoverReference</code> 组件，
可以使用 <code>usePopover</code> 钩子函数关联 <code>Popover</code> 组件和自定义的 <code>reference</code> 组件。</p>
<p><code>usePopover</code> 钩子函数接收一个 <code>reference</code> 的选择器，并返回一个控制器对象，
将此对象绑定到 <code>Popover</code> 组件的 <code>controller</code> 属性，便可以使用控制器对象的 <code>show</code> 方法显示弹出框。</p>
<h3 id="手动定义位置">手动定义位置<a class="doc-anchor" href="#手动定义位置">#</a></h3>
<p>借助 <code>usePopover</code> 钩子函数，你甚至不需要 <code>reference</code> 组件来提供位置，
控制器的 <code>show</code> 方法可以接收返回 <code>NodeRect</code> 或者 <code>Promise&lt;NodeRect&gt;</code> 的函数，
可以让弹出框显示在屏幕任意位置。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="PopoverProps">PopoverProps<a class="doc-anchor" href="#PopoverProps">#</a></h3>
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
<td>是否显示气泡弹出框</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>options</td>
<td>菜单选项列表</td>
<td>MenuOption[]</td>
<td>[]</td>
</tr>
<tr>
<td>position</td>
<td>弹出位置</td>
<td>PopoverPosition</td>
<td>'bottom'</td>
</tr>
<tr>
<td>direction</td>
<td>菜单选项排列方向</td>
<td>'vertical' | 'horizontal'</td>
<td>'vertical'</td>
</tr>
<tr>
<td>theme</td>
<td>主题风格</td>
<td>'dark' | 'light'</td>
<td>'light'</td>
</tr>
<tr>
<td>refGap</td>
<td>气泡弹出框与<code>reference</code>元素的间距，单位 px</td>
<td>number</td>
<td>10</td>
</tr>
<tr>
<td>viewport-gap</td>
<td>气泡弹出框距与视窗的间距，单位 px</td>
<td>number</td>
<td>10</td>
</tr>
<tr>
<td>transparent</td>
<td>遮罩是否透明</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>duration</td>
<td>显隐动画时长，单位 ms</td>
<td>number</td>
<td>300</td>
</tr>
</tbody>
</table></div>
<h3 id="PopoverSlots">PopoverSlots<a class="doc-anchor" href="#PopoverSlots">#</a></h3>
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
<td>放置 <code>PopoverReference</code> 组件</td>
<td>-</td>
</tr>
<tr>
<td>content</td>
<td>自定义弹出框内容</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="PopoverEmits">PopoverEmits<a class="doc-anchor" href="#PopoverEmits">#</a></h3>
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
<td>update:visible</td>
<td>弹出框显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
</tr>
<tr>
<td>select</td>
<td>选择菜单项时触发</td>
<td>(option: MenuOption) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="MenuOption">MenuOption<a class="doc-anchor" href="#MenuOption">#</a></h3>
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
<td>text</td>
<td>菜单项文本</td>
<td>string</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用菜单项</td>
<td>boolean</td>
</tr>
<tr>
<td>icon</td>
<td>图标名称</td>
<td>string</td>
</tr>
<tr>
<td>iconFamily</td>
<td>图标字体</td>
<td>string</td>
</tr>
</tbody>
</table></div>
<h3 id="PopoverPosition">PopoverPosition<a class="doc-anchor" href="#PopoverPosition">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">type</span> <span class="token class-name">PopoverPosition</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">'top'</span>
  <span class="token operator">|</span> <span class="token string">'top-start'</span>
  <span class="token operator">|</span> <span class="token string">'top-end'</span>
  <span class="token operator">|</span> <span class="token string">'right'</span>
  <span class="token operator">|</span> <span class="token string">'right-start'</span>
  <span class="token operator">|</span> <span class="token string">'right-end'</span>
  <span class="token operator">|</span> <span class="token string">'bottom'</span>
  <span class="token operator">|</span> <span class="token string">'bottom-start'</span>
  <span class="token operator">|</span> <span class="token string">'bottom-end'</span>
  <span class="token operator">|</span> <span class="token string">'left'</span>
  <span class="token operator">|</span> <span class="token string">'left-start'</span>
  <span class="token operator">|</span> <span class="token string">'left-end'</span>
</code></pre></div>
<h3 id="PopoverReferenceProps">PopoverReferenceProps<a class="doc-anchor" href="#PopoverReferenceProps">#</a></h3>
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
<h3 id="PopoverReferenceSlots">PopoverReferenceSlots<a class="doc-anchor" href="#PopoverReferenceSlots">#</a></h3>
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
<h3 id="PopoverReferenceEmits">PopoverReferenceEmits<a class="doc-anchor" href="#PopoverReferenceEmits">#</a></h3>
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
<td>点击组件时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="usePopover">usePopover<a class="doc-anchor" href="#usePopover">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">usePopover</span><span class="token punctuation">(</span>selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> PopoverController
</code></pre></div>
<h3 id="PopoverController">PopoverController<a class="doc-anchor" href="#PopoverController">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">PopoverController</span> <span class="token punctuation">&#123;</span>
  <span class="token function-variable function">show</span><span class="token operator">:</span> <span class="token punctuation">(</span>getRect<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> NodeRect <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>NodeRect<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="NodeRect">NodeRect<a class="doc-anchor" href="#NodeRect">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">NodeRect</span> <span class="token punctuation">&#123;</span>
  top<span class="token operator">:</span> <span class="token builtin">number</span>
  right<span class="token operator">:</span> <span class="token builtin">number</span>
  bottom<span class="token operator">:</span> <span class="token builtin">number</span>
  left<span class="token operator">:</span> <span class="token builtin">number</span>
  height<span class="token operator">:</span> <span class="token builtin">number</span>
  width<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-popover-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-popover-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-popover-box-shadow</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-shadow-xl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-popover-min-width</span><span class="token punctuation">:</span> 240rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-popover-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-popover-dark-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-gray-800<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-popover-dark-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-popover-arrow-size</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,l=s({__name:"README",setup(e){return t(),(p,r)=>(o(),a("div",{class:"doc-content",innerHTML:n}))}});export{l as default};
