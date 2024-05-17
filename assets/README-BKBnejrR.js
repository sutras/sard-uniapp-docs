import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d as s,c as a,o}from"./index-CjTGEgwI.js";const n=`<h1 id="Popout弹出框">Popout 弹出框<a class="doc-anchor" href="#Popout弹出框">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>底部弹出框，可以控制组件的展示与交互，可作为其他组件的弹出框容器。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Popout <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/popout/popout.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>visible</code>属性控制显隐，使用 <code>title</code> 属性设置标题。</p>
<h3 id="紧凑类型">紧凑类型<a class="doc-anchor" href="#紧凑类型">#</a></h3>
<p>通过将 <code>type</code> 设为 <code>compact</code> 可以将确定/取消按钮放到标题两侧，以便节省空间。</p>
<h3 id="异步关闭">异步关闭<a class="doc-anchor" href="#异步关闭">#</a></h3>
<p>通过 <code>beforeClose</code> 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="PopoutProps">PopoutProps<a class="doc-anchor" href="#PopoutProps">#</a></h3>
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
<td>弹出框标题</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>show-cancel</td>
<td>是否显示取消按钮，适用 <code>loose</code> 类型</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>cancel-text</td>
<td>取消按钮文案</td>
<td>string</td>
<td>'取消'</td>
</tr>
<tr>
<td>show-confirm</td>
<td>是否显示确定按钮，适用 <code>loose</code> 类型</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>confirm-text</td>
<td>确定按钮文案</td>
<td>string</td>
<td>'确定'</td>
</tr>
<tr>
<td>show-close</td>
<td>是否显示关闭按钮，适用 <code>loose</code> 类型</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>show-footer</td>
<td>是否显示底部按钮</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>type</td>
<td>弹出框按钮排版方式</td>
<td>'compact' | 'loose'</td>
<td>'loose'</td>
</tr>
<tr>
<td>visible (v-model)</td>
<td>是否显示弹出框</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>duration</td>
<td>显隐动画时长，单位 ms</td>
<td>number</td>
<td>300</td>
</tr>
<tr>
<td>overlay-closable</td>
<td>点击遮罩是否关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>before-close</td>
<td>关闭前的回调，返回 <code>false</code> 可阻止关闭，支持返回 <code>Promise</code></td>
<td>(type: 'close' | 'cancel' | 'confirm') =&gt; boolean | undefined | Promise<any></td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="PopoutSlots">PopoutSlots<a class="doc-anchor" href="#PopoutSlots">#</a></h3>
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
<td>自定义主体内容</td>
<td>-</td>
</tr>
<tr>
<td>title</td>
<td>自定义标题</td>
<td>-</td>
</tr>
<tr>
<td>cancel</td>
<td>自定义确定按钮内容</td>
<td>-</td>
</tr>
<tr>
<td>confirm</td>
<td>自定义取消按钮内容</td>
<td>-</td>
</tr>
<tr>
<td>visible</td>
<td>同默认插槽，额外接收一些判断弹出框显示状态的属性，用于小程序端多节点渲染的性能问题；<code>whole</code> 当开始显示到完全隐藏时为真，<code>already</code> 当开始显示时到以后都为真</td>
<td>&#123; whole: boolean, already: boolean &#125;</td>
</tr>
</tbody>
</table></div>
<h3 id="PopoutEmits">PopoutEmits<a class="doc-anchor" href="#PopoutEmits">#</a></h3>
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
<td>显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
</tr>
<tr>
<td>close</td>
<td>点击关闭按钮或遮罩时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>cancel</td>
<td>点击取消按钮时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>confirm</td>
<td>点击确定按钮时触发</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-popout-border-top-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-xl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-popout-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-popout-close-padding</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-popout-close-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-popout-close-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-popout-header-compact-height</span><span class="token punctuation">:</span> 88rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-popout-header-loose-height</span><span class="token punctuation">:</span> 88rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-popout-header-loose-padding-x</span><span class="token punctuation">:</span> 120rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-popout-title-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-popout-title-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-popout-button-wrap-min-width</span><span class="token punctuation">:</span> 160rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-popout-footer-gap-y</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-popout-footer-gap-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-popout-button-gap</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,l=s({__name:"README",setup(p){return t(),(d,e)=>(o(),a("div",{class:"doc-content",innerHTML:n}))}});export{l as default};
