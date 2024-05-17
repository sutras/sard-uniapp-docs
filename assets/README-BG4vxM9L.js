import{u as a}from"./useCodeTool-MhyGaRwJ.js";import{d as s,c as n,o as t}from"./index-CjTGEgwI.js";const o=`<h1 id="Dialog对话框">Dialog 对话框<a class="doc-anchor" href="#Dialog对话框">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>提示或接收用户的确认。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Dialog <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/dialog/dialog.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>先在页面放置代理组件。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dialog-agent</span> <span class="token punctuation">/></span></span>
</code></pre></div>
<p>接着便可以使用 <code>dialog</code> 等方法显示对话框。</p>
<h3 id="异步关闭">异步关闭<a class="doc-anchor" href="#异步关闭">#</a></h3>
<p>如果 <code>beforeClose</code> 属性是一个返回 <code>Promise</code> 对象的函数，则会在 <code>fulfilled</code> 状态时才隐藏对话框。</p>
<h3 id="圆角按钮">圆角按钮<a class="doc-anchor" href="#圆角按钮">#</a></h3>
<p><code>buttonType</code> 属性值为 <code>round</code> 可以将底部按钮显示为圆角的形式。</p>
<h3 id="有头部的">有头部的<a class="doc-anchor" href="#有头部的">#</a></h3>
<p>配置 <code>headed</code> 属性让对话框显示头部，此时的对话框更像一个模态框。</p>
<h3 id="自定义内容">自定义内容<a class="doc-anchor" href="#自定义内容">#</a></h3>
<p>对话框里面可以放置任何内容，例如以模态的方式展示一个表单，通常要配合 <code>headed</code> 属性一起使用。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="DialogProps">DialogProps<a class="doc-anchor" href="#DialogProps">#</a></h3>
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
<td>visible (v-model)</td>
<td>是否可见</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>title</td>
<td>标题</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>message</td>
<td>文本内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>headed</td>
<td>是否显示带头部类型</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>button-type</td>
<td>按钮类型</td>
<td>'round' | 'text'</td>
<td>'round'</td>
</tr>
<tr>
<td>show-cancel</td>
<td>是否显示取消按钮</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>cancel-text</td>
<td>取消按钮文案</td>
<td>string</td>
<td>'取消'</td>
</tr>
<tr>
<td>show-confirm</td>
<td>是否显示确定按钮</td>
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
<td>overlay-closable</td>
<td>点击遮罩是否关闭</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>duration</td>
<td>显隐动画时长，单位 ms</td>
<td>number</td>
<td>300</td>
</tr>
</tbody>
</table></div>
<h3 id="DialogAgentPropsDialogOptions">DialogAgentProps / DialogOptions<a class="doc-anchor" href="#DialogAgentPropsDialogOptions">#</a></h3>
<p>继承 <code>DialogProps</code> 并有以下额外属性。</p>
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
<td>id</td>
<td>对话框组件的 id</td>
<td>string</td>
<td>'dialog'</td>
</tr>
</tbody>
</table></div>
<h3 id="命令式方法">命令式方法<a class="doc-anchor" href="#命令式方法">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>dialog</td>
<td>显示对话框</td>
<td>DialogFunction</td>
</tr>
<tr>
<td>alert</td>
<td>显示警告框</td>
<td>DialogSimpleShowFunction</td>
</tr>
<tr>
<td>confirm</td>
<td>显示确认框</td>
<td>DialogSimpleShowFunction</td>
</tr>
<tr>
<td>hide</td>
<td>隐藏指定 <code>id</code> 的命令式对话框</td>
<td>(id = 'dialog') =&gt; void</td>
</tr>
<tr>
<td>hideAll</td>
<td>隐藏所有命令式对话框</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="DialogFunction">DialogFunction<a class="doc-anchor" href="#DialogFunction">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">DialogFunction</span> <span class="token operator">=</span> DialogSimpleShowFunction <span class="token operator">&amp;</span> <span class="token punctuation">&#123;</span>
  alert<span class="token operator">:</span> DialogSimpleShowFunction
  confirm<span class="token operator">:</span> DialogSimpleShowFunction
  <span class="token function-variable function">hide</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
  <span class="token function-variable function">hideAll</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="DialogSimpleShowFunction">DialogSimpleShowFunction<a class="doc-anchor" href="#DialogSimpleShowFunction">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">DialogSimpleShowFunction</span> <span class="token punctuation">&#123;</span>
  <span class="token punctuation">(</span>options<span class="token operator">:</span> DialogOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token punctuation">(</span>title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> DialogOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="defaultDialogOptions">defaultDialogOptions<a class="doc-anchor" href="#defaultDialogOptions">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> defaultDialogOptions <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  headed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  buttonType<span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
  showCancel<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-dialog-width</span><span class="token punctuation">:</span> 640rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-dialog-max-width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
  <span class="token property">--sar-dialog-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-dialog-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-dialog-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-xl<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-dialog-header-padding-y</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-dialog-header-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-dialog-body-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-dialog-body-padding-y</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-dialog-body-gap</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-dialog-title-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-dialog-title-headed-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-dialog-close-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-dialog-message-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-dialog-message-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-dialog-footer-round-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-dialog-footer-round-padding-y</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-dialog-footer-round-gap</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,r=s({__name:"README",setup(p){return a(),(e,c)=>(t(),n("div",{class:"doc-content",innerHTML:o}))}});export{r as default};
