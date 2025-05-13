import{M as s}from"./index-CO0lQDmI.js";import{d as n,c as t,o as p}from"./index-BpihWkn-.js";const o=`<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>垂直标签导航，用于在不同的区域之间进行切换。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Sidebar <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/sidebar/sidebar.vue'</span>
<span class="token keyword">import</span> SidebarItem <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/sidebar-item/sidebar-item.vue'</span>
</code></pre>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>v-model:current</code> 绑定当前选中项的 <code>name</code>，<code>name</code> 必须且唯一。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar</span> <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签名称<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签名称<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签名称<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-sidebar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="圆角">圆角<a class="doc-anchor" href="#圆角">#</a></h3>
<p>设置 <code>round</code> 属性会使选中项上下角变圆。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar</span> <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签名称<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签名称<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签名称<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-sidebar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="线条">线条<a class="doc-anchor" href="#线条">#</a></h3>
<p>设置 <code>line</code> 属性会使选中项左边显示线条。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar</span> <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span> <span class="token attr-name">line</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签名称<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签名称<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签名称<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-sidebar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="禁用">禁用<a class="doc-anchor" href="#禁用">#</a></h3>
<p>禁用的导航项无法点击。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar</span> <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签名称<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签名称<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签名称<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-sidebar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="自定义">自定义<a class="doc-anchor" href="#自定义">#</a></h3>
<p>使用默认插槽自定义内容。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar</span> <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-badge</span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span>标签名称<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-badge</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-sidebar-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-badge</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签名称<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-badge</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-sidebar-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-badge</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>var(--sar-green)<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>推荐<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签名称<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-badge</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-sidebar-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-sidebar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="场景应用">场景应用<a class="doc-anchor" href="#场景应用">#</a></h3>
<h4 id="场景1">场景 1<a class="doc-anchor" href="#场景1">#</a></h4>
<p>此场景结合了 <code>Sidebar</code> 和 <code>ScrollSpy</code> 组件，绑定了同一个 <code>current</code> 属性进行双向联动。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span> <span class="token attr-name">emphasis</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>场景1<span class="token punctuation">"</span></span> <span class="token attr-name">padding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-scroll-spy</span>
      <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span>
      <span class="token attr-name">:root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123; height: scrollViewHeight &#125;<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> flex</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar</span>
          <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span>
          <span class="token attr-name">round</span>
          <span class="token attr-name">:root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
            position: 'sticky',
            top: 0,
            height: scrollViewHeight,
          &#125;<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, i) in list<span class="token punctuation">"</span></span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.title<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">env</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token property">flex</span><span class="token punctuation">:</span> none</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-sidebar</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token property">min-width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0 20rpx</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, i) in list<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-scroll-spy-anchor</span>
              <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
              <span class="token attr-name">:root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
                position: 'sticky',
                top: 0,
                padding: '10rpx 0',
                background: 'var(--sar-emphasis-bg)',
              &#125;<span class="token punctuation">"</span></span>
            <span class="token punctuation">></span></span>
              &#123;&#123; item.title &#125;&#125;
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-scroll-spy-anchor</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
                <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(_, i) in item.children<span class="token punctuation">"</span></span>
                <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
                <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 200rpx;
                  margin-bottom: 10rpx;
                  background: var(--sar-tertiary-bg);
                <span class="token punctuation">"</span></span></span>
              <span class="token punctuation">></span></span>
                &#123;&#123; i &#125;&#125;
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-scroll-spy</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getWindowInfo <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@/lib'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> statusBarHeight <span class="token operator">=</span> <span class="token function">getWindowInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>statusBarHeight <span class="token operator">+</span> <span class="token string">'px'</span>
<span class="token keyword">const</span> navbarHeight <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">calc(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>statusBarHeight<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + var(--sar-navbar-height))</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">const</span> scrollViewHeight <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">calc(100vh - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>navbarHeight<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>
  <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'标签'</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h4 id="场景2">场景 2<a class="doc-anchor" href="#场景2">#</a></h4>
<p>相较于 场景 1，此场景在页面顶部添加了 banner 块和标签栏，且标签栏粘性定位于顶部。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span> <span class="token attr-name">emphasis</span> <span class="token attr-name">padding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>场景2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-scroll-spy</span>
      <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span>
      <span class="token attr-name">:root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123; height: scrollViewHeight &#125;<span class="token punctuation">"</span></span>
      <span class="token attr-name">:offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>44<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
          display: flex;
          justify-content: center;
          align-items: center;
          height: 150px;
          margin: 10px;
          font-size: 64rpx;
          background: var(--sar-tertiary-bg);
        <span class="token punctuation">"</span></span></span>
      <span class="token punctuation">></span></span>
        Banner
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
          position: sticky;
          top: 0;
          z-index: 10;
          background: var(--sar-emphasis-bg);
        <span class="token punctuation">"</span></span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabs</span> <span class="token attr-name">:current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">scrollable</span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tabs</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> flex</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar</span>
          <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span>
          <span class="token attr-name">round</span>
          <span class="token attr-name">:root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
            position: 'sticky',
            top: stickyTop,
            height: \`calc($&#123;scrollViewHeight&#125; - $&#123;stickyTop&#125;)\`,
          &#125;<span class="token punctuation">"</span></span>
          <span class="token attr-name">:scroll-into-view-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123; endOffset: 80 &#125;<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-sidebar-item</span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, i) in list<span class="token punctuation">"</span></span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.title<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 160rpx<span class="token punctuation">;</span> <span class="token property">flex</span><span class="token punctuation">:</span> none</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-sidebar</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token property">min-width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0 20rpx</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, i) in list<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-scroll-spy-anchor</span>
              <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
              <span class="token attr-name">:root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
                position: 'sticky',
                top: stickyTop,
                padding: '10rpx 0',
                background: 'var(--sar-emphasis-bg)',
              &#125;<span class="token punctuation">"</span></span>
            <span class="token punctuation">></span></span>
              &#123;&#123; item.title &#125;&#125;
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-scroll-spy-anchor</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
                <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(_, i) in item.children<span class="token punctuation">"</span></span>
                <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
                <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 200rpx;
                  margin-bottom: 10rpx;
                  background: var(--sar-tertiary-bg);
                <span class="token punctuation">"</span></span></span>
              <span class="token punctuation">></span></span>
                &#123;&#123; i &#125;&#125;
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 160rpx</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-scroll-spy</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
        position: fixed;
        bottom: 30rpx;
        left: 30rpx;
        right: 30rpx;
        z-index: 10;
        height: 100rpx;
        border-radius: 12rpx;
        background: var(--sar-emphasis-bg);
        box-shadow: var(--sar-shadow-xl);
      <span class="token punctuation">"</span></span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getWindowInfo <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> statusBarHeight <span class="token operator">=</span> <span class="token function">getWindowInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>statusBarHeight <span class="token operator">+</span> <span class="token string">'px'</span>
<span class="token keyword">const</span> navbarHeight <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">calc(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>statusBarHeight<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + var(--sar-navbar-height))</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">const</span> scrollViewHeight <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">calc(100vh - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>navbarHeight<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">const</span> stickyTop <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">var(--sar-tabs-tab-height)</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>
  <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'标签'</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> tabList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'标签0'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'标签1'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'标签2'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="SidebarProps">SidebarProps<a class="doc-anchor" href="#SidebarProps">#</a></h3>
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
<td>current</td>
<td>当前绑定导航项的名称</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>round</td>
<td>当前导航项是否显示为圆角</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>line</td>
<td>当前导航项是否添加左边线条</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>scroll-into-view-options</td>
<td>自定义滚动配置选项</td>
<td><a href="../guide/scroll-into-view-options">ScrollIntoViewOptions</a></td>
<td>&#123;position: 'nearest', startOffset: 0, endOffset: 0&#125;</td>
</tr>
</tbody>
</table></div><h3 id="SidebarSlots">SidebarSlots<a class="doc-anchor" href="#SidebarSlots">#</a></h3>
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
</table></div><h3 id="SidebarEmits">SidebarEmits<a class="doc-anchor" href="#SidebarEmits">#</a></h3>
<div class="doc-table-responsive"><table><thead>
<tr>
<th>事件</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>update:current</td>
<td>当前导航项改变时触发</td>
<td>(name: string | number) =&gt; void</td>
</tr>
<tr>
<td>change</td>
<td>当前导航项改变时触发</td>
<td>(name: string | number) =&gt; void</td>
</tr>
</tbody>
</table></div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page,
.sar-portal </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-sidebar-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-body-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-sidebar-width</span><span class="token punctuation">:</span> 184rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-sidebar-item-padding-x</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-sidebar-item-padding-y</span><span class="token punctuation">:</span> 28rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-sidebar-item-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-sidebar-item-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-sidebar-item-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-sidebar-item-active-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-sidebar-item-active-font-weight</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-font-normal<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-sidebar-line-width</span><span class="token punctuation">:</span> 6rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-sidebar-line-height</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-sidebar-line-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-sidebar-round-size</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre>
</div>`,i=n({__name:"README",setup(e){const a={nav:"组件",title:"Sidebar",subtitle:"侧边导航",group:"导航组件",version:"1.12+"};return(c,l)=>(p(),t(s,{content:o,fm:a}))}});export{i as default};
