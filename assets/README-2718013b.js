import{u as a}from"./useCodeTool-5abdc725.js";import{d as s,c as n,o as t}from"./index-da6ae011.js";const p=`<h1 id="Input输入框">Input 输入框<a class="doc-anchor" href="#Input输入框">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>接收用户输入的文本信息。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Input <span class="token keyword">from</span> <span class="token string">'@sard/uniapp/dist/input/input.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>可以通过 <code>v-model</code> 绑定输入框的值，通过 <code>placeholder</code> 设置占位提示文字。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义样式">自定义样式<a class="doc-anchor" href="#自定义样式">#</a></h3>
<p>可以对其尺寸、颜色、背景色、边框等样式进行设置。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span>
    <span class="token attr-name">borderless</span>
    <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
      height: 80rpx;
      border-radius: 9999px;
      color: white;
      background-color: var(--sar-red);
      text-align: center;
    <span class="token punctuation">"</span></span>
    <span class="token attr-name">placeholder-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color: rgba(255,255,255,.6)<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="类型">类型<a class="doc-anchor" href="#类型">#</a></h3>
<p>据 <code>type</code> 属性定义不同类型的输入框，默认值为 <code>text。</code></p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>idcard<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>idcard<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>digit<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>digit<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tel<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tel<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="可清除的">可清除的<a class="doc-anchor" href="#可清除的">#</a></h3>
<p>设置了 <code>clearable</code> 属性后，在输入框有值时会显示清除按钮。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token attr-name">clearable</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="聚焦时显示清除按钮">聚焦时显示清除按钮<a class="doc-anchor" href="#聚焦时显示清除按钮">#</a></h3>
<p>只在输入框获取焦点时显示清除按钮。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span>
    <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>可清除的<span class="token punctuation">"</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>可清除的<span class="token punctuation">"</span></span>
    <span class="token attr-name">clearable</span>
    <span class="token attr-name">showClearOnlyFocus</span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="只读和禁用">只读和禁用<a class="doc-anchor" href="#只读和禁用">#</a></h3>
<p>只读或禁用时无法输入。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>禁用的<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>只读的<span class="token punctuation">"</span></span> <span class="token attr-name">readonly</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="插槽">插槽<a class="doc-anchor" href="#插槽">#</a></h3>
<p>可以通过前置或后置插槽添加额外的内容。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#prepend</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-input</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#append</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>发送验证码<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-input</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="去除边框">去除边框<a class="doc-anchor" href="#去除边框">#</a></h3>
<p>清除边框后页面看起来会很清爽。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>去除边框<span class="token punctuation">"</span></span> <span class="token attr-name">borderless</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="嵌入的">嵌入的<a class="doc-anchor" href="#嵌入的">#</a></h3>
<p><code>inlaid</code> 用于清除边框和内边距，以便可以嵌入到其他组件内。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入用户名<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">inlaid</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入密码<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="多行文本">多行文本<a class="doc-anchor" href="#多行文本">#</a></h3>
<p>设置 <code>type=&quot;textarea&quot;</code> 可以换行输入。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自动高度">自动高度<a class="doc-anchor" href="#自动高度">#</a></h3>
<p>设置自动高度可以让文本域随输入内容变多而增高。
另外可以设置 <code>minHeight</code> 设置文本域的最小高度。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token attr-name">auto-height</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>自动高度<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span>
    <span class="token attr-name">autoHeight</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>最小高度<span class="token punctuation">"</span></span>
    <span class="token attr-name">min-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>96rpx<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="字数提示">字数提示<a class="doc-anchor" href="#字数提示">#</a></h3>
<p>设置 <code>showCount</code> 属性可以显示当前输入的字数和总字数；
设置 <code>maxLength</code> 可以限制输入的最大字数。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span>
    <span class="token attr-name">showCount</span>
    <span class="token attr-name">:maxlength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>
    <span class="token attr-name">clearable</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="InputProps">InputProps<a class="doc-anchor" href="#InputProps">#</a></h3>
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
<td>输入框值</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>clearable</td>
<td>是否显示清空按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>show-clear-only-focus</td>
<td>是否只在聚焦时显示清空按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>show-count</td>
<td>是否展示字数</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>inlaid</td>
<td>嵌入式状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>borderless</td>
<td>是否隐藏边框</td>
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
<td>focused</td>
<td>是否显示获焦样式，用于结合自定义键盘使用时显示高亮效果</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>min-height</td>
<td>输入框最小高度</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框占位符内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>placeholder-style</td>
<td>输入框占位符样式</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>placeholder-class</td>
<td>输入框占位符类名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>max-length</td>
<td>最大输入长度，设置为 -1 的时候不限制最大长度</td>
<td>number</td>
<td>140</td>
</tr>
<tr>
<td>focus</td>
<td>获取焦点</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>cursor-spacing</td>
<td>指定光标与键盘的距离</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>cursor</td>
<td>指定 focus 时的光标位置</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>confirm-type</td>
<td>设置键盘右下角按钮的文字</td>
<td>&quot;send&quot; | &quot;search&quot; | &quot;next&quot; | &quot;go&quot; | &quot;done&quot;</td>
<td>-</td>
</tr>
<tr>
<td>confirm-hold</td>
<td>点击键盘右下角按钮时是否保持键盘不收起</td>
<td>number</td>
<td>false</td>
</tr>
<tr>
<td>selection-start</td>
<td>光标起始位置</td>
<td>number</td>
<td>-1</td>
</tr>
<tr>
<td>selection-end</td>
<td>光标结束位置</td>
<td>number</td>
<td>-1</td>
</tr>
<tr>
<td>adjust-position</td>
<td>键盘弹起时，是否自动上推页面</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>hold-keyboard</td>
<td>focus 时，点击页面的时候不收起键盘</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>auto-blur</td>
<td>键盘收起时，是否自动失去焦点</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>ignore-composition-event</td>
<td>是否忽略组件内对文本合成系统事件的处理</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>inputmode</td>
<td>用户在编辑元素或其内容时可能输入的数据类型的提示</td>
<td>'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'</td>
<td>'text'</td>
</tr>
<tr>
<td>auto-height</td>
<td>文本域自动高度</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>fixed</td>
<td>如果 <code>textarea</code> 是在一个 <code>position:fixed</code> 的区域，需要显示指定属性 <code>fixed</code> 为 <code>true</code></td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>show-confirm-bar</td>
<td>是否显示键盘上方带有”完成“按钮那一栏</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>disable-default-padding</td>
<td>是否去掉 iOS 下的默认内边距</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>输入框类型</td>
<td>'text' | 'password' | 'textarea' | 'number' |'idcard' | 'digit' | 'tel' | 'safe-password' | 'nickname'</td>
<td>'text'</td>
</tr>
<tr>
<td>always-embed</td>
<td>强制 input 处于同层状态</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>safe-password-cert-path</td>
<td>安全键盘加密公钥的路径，只支持包内路径</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>safe-password-length</td>
<td>安全键盘输入密码长度</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>safe-password-time-stamp</td>
<td>安全键盘加密时间戳</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>safe-password-nonce</td>
<td>安全键盘加密盐值</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>safe-password-salt</td>
<td>安全键盘计算 <code>hash</code> 盐值，若指定 <code>custom-hash</code> 则无效</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>safe-password-custom-hash</td>
<td>安全键盘计算 <code>hash</code> 的算法表达式</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>random-number</td>
<td>当 <code>type</code> 为 <code>number, digit, idcard</code> 数字键盘是否随机排列</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>controlled</td>
<td>是否为受控组件。为 <code>true</code> 时，value 内容会完全受 <code>setData</code> 控制</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>always-system</td>
<td>是否强制使用系统键盘和 <code>Web-view </code>创建的 <code>input</code> 元素</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>validate-event</td>
<td>是否触发表单验证</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3 id="InputSlots">InputSlots<a class="doc-anchor" href="#InputSlots">#</a></h3>
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
<td>prepend</td>
<td>自定义输入框前面内容</td>
<td>-</td>
</tr>
<tr>
<td>append</td>
<td>自定义输入框后面内容</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="InputEmits">InputEmits<a class="doc-anchor" href="#InputEmits">#</a></h3>
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
<td>输入框值改变时触发</td>
<td>(value: string) =&gt; void</td>
</tr>
<tr>
<td>clear</td>
<td>点击清除按钮时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>focus</td>
<td>聚焦时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>blur</td>
<td>失焦时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>linechange</td>
<td>输入框行数变化时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>confirm</td>
<td>点击完成时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>keyboardheightchange</td>
<td>键盘高度发生变化的时候触发</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-input-padding-y</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-input-padding-borderless-y</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-input-padding-x</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-input-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-input-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-input-transition-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-input-focused-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-input-control-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-input-control-input-height</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-input-control-textarea-height</span><span class="token punctuation">:</span> 168rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-input-placeholder-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-quaternary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-input-prepend-margin-right</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-input-append-margin-left</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-input-clear-margin-right</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--sar-input-padding-x<span class="token punctuation">)</span> <span class="token operator">*</span> -1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-input-clear-padding-x</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-input-clear-font-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-input-clear-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-quaternary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-input-count-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-input-count-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-tight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-input-count-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,d=s({__name:"README",setup(e){return a(),(o,c)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{d as default};
