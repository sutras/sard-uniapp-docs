import{M as s}from"./index-CXYLNLTd.js";import{d as a,c as t,o as p}from"./index-BicE6zha.js";const o=`<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>实时告知当前处于屏幕中的锚点，或者滚动到指定锚点位置。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> ScrollSpy <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/scroll-spy/scroll-spy.vue'</span>
<span class="token keyword">import</span> ScrollSpyAnchor <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/scroll-spy-anchor/scroll-spy-anchor.vue'</span>
</code></pre>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p><code>ScrollSpy</code> 组件内部使用 <code>scroll-view</code> 作为滚动容器，需要设置固定的高度。
<code>ScrollSpyAnchor</code> 是用作定位的锚点，需要设置 <code>name</code> 属性，且其值必须唯一。</p>
<p>使用 <code>v-model:current</code> 绑定当前的锚点。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>当前 anchor: &#123;&#123; current &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin: 10rpx 0<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current = 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    设置当前 anchor 为: 2
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-scroll-spy</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span>
    <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>height: 400rpx; border: 1px solid var(--sar-border-color)<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in list<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-scroll-spy-anchor</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>&#123;&#123; item.title &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>&#123;&#123; item.content &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-scroll-spy</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>
  <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      id<span class="token operator">++</span>
      <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'title'</span> <span class="token operator">+</span> id<span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'content'</span> <span class="token operator">+</span> id<span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> id<span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.title</span> <span class="token punctuation">&#123;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.content</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400rpx<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="动态更新">动态更新<a class="doc-anchor" href="#动态更新">#</a></h3>
<p>如果锚点的位置有变动，或者新增/删除了锚点，需要调用 <code>update</code> 方法重新计算锚点位置。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>当前 anchor: &#123;&#123; current &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin: 10rpx 0<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current = 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    设置当前 anchor 为: 2
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-scroll-spy</span>
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollSpyRef<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span>
    <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>height: 400rpx; border: 1px solid var(--sar-border-color)<span class="token punctuation">"</span></span>
    <span class="token attr-name">@scrolltolower</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onScrolltolower<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in list<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-scroll-spy-anchor</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>&#123;&#123; item.title &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">padding</span><span class="token punctuation">:</span> 20rpx</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>&#123;&#123; item.content &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-load-more</span> <span class="token attr-name">:status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loadMoreStatus<span class="token punctuation">"</span></span> <span class="token attr-name">@load-more</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onLoadMore<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-scroll-spy</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> type ScrollSpyExpose<span class="token punctuation">,</span> sleep<span class="token punctuation">,</span> type LoadMoreStatus <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> nextTick<span class="token punctuation">,</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>
  <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      id<span class="token operator">++</span>
      <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'title'</span> <span class="token operator">+</span> id<span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'content'</span> <span class="token operator">+</span> id<span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> id<span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> scrollSpyRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>ScrollSpyExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> loadMoreStatus <span class="token operator">=</span> ref<span class="token operator">&lt;</span>LoadMoreStatus<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'incomplete'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">loadData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  loadMoreStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'loading'</span>

  <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>

  list<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>list<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        id<span class="token operator">++</span>
        <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'title'</span> <span class="token operator">+</span> id<span class="token punctuation">,</span>
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'content'</span> <span class="token operator">+</span> id<span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> id<span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>

  loadMoreStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> list<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'complete'</span> <span class="token operator">:</span> <span class="token string">'incomplete'</span>

  <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
  scrollSpyRef<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onLoadMore</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">await</span> <span class="token function">loadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onScrolltolower</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>loadMoreStatus<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">'incomplete'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token function">loadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.title</span> <span class="token punctuation">&#123;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.content</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400rpx<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="ScrollSpyProps">ScrollSpyProps<a class="doc-anchor" href="#ScrollSpyProps">#</a></h3>
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
<td>当前绑定锚点名称</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>offset</td>
<td>锚点距离顶部的偏移量</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>upper-threshold</td>
<td>距顶部/左边多远时（单位 px），触发 scrolltoupper 事件</td>
<td>number | string</td>
<td>50</td>
</tr>
<tr>
<td>lower-threshold</td>
<td>距底部/右边多远时（单位 px），触发 scrolltolower 事件</td>
<td>number | string</td>
<td>50</td>
</tr>
</tbody>
</table></div><h3 id="ScrollSpySlots">ScrollSpySlots<a class="doc-anchor" href="#ScrollSpySlots">#</a></h3>
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
</table></div><h3 id="ScrollSpyEmits">ScrollSpyEmits<a class="doc-anchor" href="#ScrollSpyEmits">#</a></h3>
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
<td>当前锚点改变时触发</td>
<td>(name: number | string) =&gt; void</td>
</tr>
<tr>
<td>change</td>
<td>当前锚点改变时触发</td>
<td>(name: number | string) =&gt; void</td>
</tr>
<tr>
<td>scrolltoupper</td>
<td>滚动到顶部时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>scrolltolower</td>
<td>滚动到底部时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>scroll</td>
<td>滚动时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div><h3 id="ScrollSpyExpose">ScrollSpyExpose<a class="doc-anchor" href="#ScrollSpyExpose">#</a></h3>
<div class="doc-table-responsive"><table><thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>update</td>
<td>更新锚点位置</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>`,r=a({__name:"README",setup(c){const n={nav:"组件",title:"ScrollSpy",subtitle:"滚动监听",group:"数据展示",version:"1.12+"};return(e,l)=>(p(),t(s,{content:o,fm:n}))}});export{r as default};
