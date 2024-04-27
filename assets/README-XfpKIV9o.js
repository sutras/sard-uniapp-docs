import{u as a}from"./useCodeTool-mazcC0Cn.js";import{d as s,c as n,o as t}from"./index-ybeXHrRA.js";const p=`<h1 id="List列表">List 列表<a class="doc-anchor" href="#List列表">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>显示一组垂直排列的数据。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> List <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/list/list.vue'</span>
<span class="token keyword">import</span> ListItem <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/list-item/list-item.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>可以给列表项添加标题、描述和值。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>值<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>值<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>很长的标题标题标题标题标题标题标题标题标题标题标题标题<span class="token punctuation">"</span></span>
      <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>值值<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span>
      <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>很长的值值值值值值值值值值值值值值值值值值值值值值值值<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>很长的标题标题标题标题标题标题标题标题<span class="token punctuation">"</span></span>
      <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>很长的值值值值值值值值值值值值值值值值<span class="token punctuation">"</span></span>
      <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>很长的标签标签标签标签标签标签标签标签<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="可链接的">可链接的<a class="doc-anchor" href="#可链接的">#</a></h3>
<p>设置<code>Linkable</code>属性会显示右边的箭头，并且会有点击状态。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">hover</span> <span class="token attr-name">arrow</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">hover</span> <span class="token attr-name">arrow</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>值<span class="token punctuation">"</span></span> <span class="token attr-name">arrow-direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>down<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="图标">图标<a class="doc-anchor" href="#图标">#</a></h3>
<p>设置<code>icon</code>属性或插槽可以在左边显示图标。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>下载<span class="token punctuation">"</span></span>
      <span class="token attr-name">hover</span>
      <span class="token attr-name">arrow</span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-down-square-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#4994EC<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>订阅<span class="token punctuation">"</span></span>
      <span class="token attr-name">hover</span>
      <span class="token attr-name">arrow</span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rss-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#E78A3D<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>视频<span class="token punctuation">"</span></span> <span class="token attr-name">hover</span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span>
          <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>caret-left-square-fill<span class="token punctuation">"</span></span>
          <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#C24F4A<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义内容">自定义内容<a class="doc-anchor" href="#自定义内容">#</a></h3>
<p>列表项的<code>body</code>和<code>footer</code>默认平分水平空间，如果<code>footer</code>需要占据更多的空间，可以设置<code>body</code>不扩展。</p>
<p><code>value</code>中的元素默认会向右边靠，如果有使用<code>footer</code>属性定义内容，则内容会纵向排列。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#value</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#value</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-badge</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>音量<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#value</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-slider</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width: 100%<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20;
          gap: 10rpx;
        <span class="token punctuation">"</span></span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/static/logo.svg<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 96rpx<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 96rpx</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 40rpx</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>这是标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
          这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入用户名<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">inlaid</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入密码<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="列表标题和描述">列表标题和描述<a class="doc-anchor" href="#列表标题和描述">#</a></h3>
<p>列表标题和描述可以对整个列表进行说明</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>分组标题<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>分组描述<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>值<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>值<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="卡片风格">卡片风格<a class="doc-anchor" href="#卡片风格">#</a></h3>
<p>可以使用<code>card</code>属性让列表显示为卡片风格。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>分组标题<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>分组标签<span class="token punctuation">"</span></span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>值<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>值<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="ListProps">ListProps<a class="doc-anchor" href="#ListProps">#</a></h3>
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
<td>列表顶部标题</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>description</td>
<td>列表底部描述</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>card</td>
<td>卡片风格</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>inlaid</td>
<td>嵌入式列表</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="ListSlots">ListSlots<a class="doc-anchor" href="#ListSlots">#</a></h3>
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
<td>title</td>
<td>自定义标题内容，会覆盖<code>title</code>属性</td>
<td>-</td>
</tr>
<tr>
<td>description</td>
<td>自定义描述内容，会覆盖<code>description</code>属性</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="ListItemProps">ListItemProps<a class="doc-anchor" href="#ListItemProps">#</a></h3>
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
<td>左侧标题</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>description</td>
<td>标题下方的描述</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>右侧值</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>hover</td>
<td>是否开启点击反馈</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>arrow</td>
<td>是否展示右侧箭头</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>arrow-direction</td>
<td>箭头方向</td>
<td>'up' | 'right' | 'down'</td>
<td>'right'</td>
</tr>
<tr>
<td>icon</td>
<td>左侧图标名称，可以为图片路径</td>
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
<td>icon-color</td>
<td>图标颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon-family</td>
<td>图标字体名称</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="ListItemSlots">ListItemSlots<a class="doc-anchor" href="#ListItemSlots">#</a></h3>
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
<td>自定义默认内容，会覆盖所有内容</td>
<td>-</td>
</tr>
<tr>
<td>title</td>
<td>自定义标题内容，会覆盖<code>title</code>属性</td>
<td>-</td>
</tr>
<tr>
<td>description</td>
<td>自定义描述内容，会覆盖<code>description</code>属性</td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>自定义值内容，会覆盖<code>value</code>属性</td>
<td>-</td>
</tr>
<tr>
<td>arrow</td>
<td>自定义箭头</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>自定义左侧图标，会覆盖<code>icon</code>属性</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="ListItemEmits">ListItemEmits<a class="doc-anchor" href="#ListItemEmits">#</a></h3>
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
<td>点击列表项时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token comment">// list</span>
  <span class="token property">--sar-list-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-list-title-margin-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-list-title-margin-top</span><span class="token punctuation">:</span> 64rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-list-title-margin-bottom</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-list-title-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-list-title-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-snug<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-list-title-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-list-description-margin-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-list-description-margin-top</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-list-description-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-list-description-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-snug<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-list-description-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-list-card-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// item</span>
  <span class="token property">--sar-list-item-min-height</span><span class="token punctuation">:</span> 88rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-list-item-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-list-item-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-list-item-padding-y</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-list-item-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-active-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-list-item-disabled-opacity</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-disabled-opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-list-item-icon-font-size</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-list-item-icon-margin-right</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-list-item-title-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-list-item-title-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-snug<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-list-item-value-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-list-item-value-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-snug<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-list-item-value-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-list-item-description-margin-top</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-list-item-description-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-list-item-description-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-snug<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-list-item-description-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-list-item-arrow-margin-left</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-list-item-arrow-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-list-item-arrow-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,i=s({__name:"README",setup(o){return a(),(c,e)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{i as default};
