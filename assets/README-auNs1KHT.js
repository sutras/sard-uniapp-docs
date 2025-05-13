import{M as s}from"./index-CO0lQDmI.js";import{d as n,c as t,o as p}from"./index-BpihWkn-.js";const o=`<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>返回页面顶部的操作按钮。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> BackTop <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/back-top/back-top.vue'</span>
</code></pre>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>返回页面顶部时，<code>BackTop</code> 组件需要配合 <code>usePageBackTop</code> 组合式函数使用。</p>
<p><code>BackTop</code> 组件需要绑定 <code>usePageBackTop</code> 返回的 <code>scrollTop</code> 属性值和 <code>onClick</code> 回调。</p>
<p>另外，为了让 <code>uniapp</code> 编译器能够初始化 <code>onPageScroll</code> 页面钩子，需要显式在页面组件调用 <code>onPageScroll</code> 组合式函数。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>基础用法<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin: 0 32rpx; padding: 32rpx 0;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 30<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-back-top</span> <span class="token attr-name">:scroll-top</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollTop<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClick<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onPageScroll <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@dcloudio/uni-app'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> usePageBackTop <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> scrollTop<span class="token punctuation">,</span> onClick <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">usePageBackTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">onPageScroll</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="scroll-view组件滚动">scroll-view 组件滚动<a class="doc-anchor" href="#scroll-view组件滚动">#</a></h3>
<p>返回 <code>scroll-view</code> 顶部时，<code>BackTop</code> 组件需要配合 <code>useScrollViewBackTop</code> 组合式函数使用。</p>
<p><code>BackTop</code> 组件需要绑定 <code>useScrollViewBackTop</code> 返回的 <code>scrollTop</code> 属性值和 <code>onClick</code> 回调。</p>
<p><code>scroll-view</code> 组件需要绑定 <code>useScrollViewBackTop</code> 返回的 <code>scrollTop</code> 属性值和 <code>onScroll</code> 回调。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scroll-view 组件滚动<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-view</span>
      <span class="token attr-name">scroll-y</span>
      <span class="token attr-name">:scroll-top</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollTop<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 60vh</span><span class="token punctuation">"</span></span></span>
      <span class="token attr-name">@scroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onScroll<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin: 0 32rpx; padding: 32rpx 0;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 30<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll-view</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-back-top</span> <span class="token attr-name">:scroll-top</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollTop<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClick<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useScrollViewBackTop <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> scrollTop<span class="token punctuation">,</span> onScroll<span class="token punctuation">,</span> onClick <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">useScrollViewBackTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="按钮位置">按钮位置<a class="doc-anchor" href="#按钮位置">#</a></h3>
<p>通过设置 <code>right</code> 和 <code>bottom</code> 属性可以自定义按钮距离右下角的距离。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>按钮位置<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin: 0 32rpx; padding: 32rpx 0;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 30<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-back-top</span>
      <span class="token attr-name">:scroll-top</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollTop<span class="token punctuation">"</span></span>
      <span class="token attr-name">right</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>96rpx<span class="token punctuation">"</span></span>
      <span class="token attr-name">bottom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>192rpx<span class="token punctuation">"</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClick<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onPageScroll <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@dcloudio/uni-app'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> usePageBackTop <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> scrollTop<span class="token punctuation">,</span> onClick <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">usePageBackTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">onPageScroll</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="滚动时长">滚动时长<a class="doc-anchor" href="#滚动时长">#</a></h3>
<p><code>usePageBackTop</code> 组合式函数可以接收一个数值类型参数，表示滚动到页面顶部的动画时长。</p>
<p><code>scroll-view</code> 默认没有滚动动画，通过设置 <code>scroll-with-animation</code> 属性可以添加滚动动画。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>滚动时长<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin: 0 32rpx; padding: 32rpx 0;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 30<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-back-top</span> <span class="token attr-name">:scroll-top</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollTop<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClick<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onPageScroll <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@dcloudio/uni-app'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> usePageBackTop <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> scrollTop<span class="token punctuation">,</span> onClick <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">usePageBackTop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token function">onPageScroll</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="可见时的高度">可见时的高度<a class="doc-anchor" href="#可见时的高度">#</a></h3>
<p>默认情况下，当页面或 <code>scroll-view</code> 滚动到一定距离时，按钮才会显示。</p>
<p>可以设置 <code>visible-height</code> 为 0 让按钮一直显示。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>可见时的高度<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin: 0 32rpx; padding: 32rpx 0;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 30<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-back-top</span>
      <span class="token attr-name">:scroll-top</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollTop<span class="token punctuation">"</span></span>
      <span class="token attr-name">:visible-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClick<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onPageScroll <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@dcloudio/uni-app'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> usePageBackTop <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> scrollTop<span class="token punctuation">,</span> onClick <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">usePageBackTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">onPageScroll</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="自定义按钮内容">自定义按钮内容<a class="doc-anchor" href="#自定义按钮内容">#</a></h3>
<p>使用默认插槽自定义组件展示的内容。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>自定义按钮内容<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin: 0 32rpx; padding: 32rpx 0;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 30<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-back-top</span> <span class="token attr-name">:scroll-top</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollTop<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>回到顶部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-back-top</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onPageScroll <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@dcloudio/uni-app'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> usePageBackTop <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> scrollTop<span class="token punctuation">,</span> onClick <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">usePageBackTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">onPageScroll</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="BackTopProps">BackTopProps<a class="doc-anchor" href="#BackTopProps">#</a></h3>
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
<td>scroll-top</td>
<td>当前页面或 scroll-view 滚动的高度</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>visible-height</td>
<td>回到顶部按钮显示时的页面或 scroll-view 滚动的最小高度</td>
<td>number</td>
<td>200</td>
</tr>
<tr>
<td>right</td>
<td>回到顶部按钮距离右边的距离</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>bottom</td>
<td>回到顶部按钮距离底部的距离</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div><h3 id="BackTopSlots">BackTopSlots<a class="doc-anchor" href="#BackTopSlots">#</a></h3>
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
</table></div><h3 id="BackTopEmits">BackTopEmits<a class="doc-anchor" href="#BackTopEmits">#</a></h3>
<div class="doc-table-responsive"><table><thead>
<tr>
<th>事件</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>点击时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div><h3 id="usePageBackTop">usePageBackTop<a class="doc-anchor" href="#usePageBackTop">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">usePageBackTop</span><span class="token punctuation">(</span>duration<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  scrollTop<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span>
  <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span>
</code></pre>
</div><div class="doc-table-responsive"><table><thead>
<tr>
<th>参数</th>
<th>描述</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>duration</td>
<td>滚动动画时长，单位 ms</td>
<td>number</td>
<td>300</td>
</tr>
</tbody>
</table></div><div class="doc-table-responsive"><table><thead>
<tr>
<th>返回对象的属性</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>scrollTop</td>
<td>需要绑定到 <code>BackTop</code> 组件 <code>scroll-top</code> 属性的值</td>
<td>Ref&lt;number&gt;</td>
</tr>
<tr>
<td>onClick</td>
<td>需要绑定到 <code>BackTop</code> 组件 <code>click</code> 事件的回调</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div><h3 id="useScrollViewBackTop">useScrollViewBackTop<a class="doc-anchor" href="#useScrollViewBackTop">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">useScrollViewBackTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  scrollTop<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span>
  <span class="token function-variable function">onScroll</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
  <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span>
</code></pre>
</div><div class="doc-table-responsive"><table><thead>
<tr>
<th>返回对象的属性</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>scrollTop</td>
<td>需要绑定到 <code>BackTop</code> 和 <code>ScrollView</code> 组件 <code>scroll-top</code> 属性的值</td>
<td>Ref&lt;number&gt;</td>
</tr>
<tr>
<td>onScroll</td>
<td>需要绑定到 <code>ScrollView</code> 组件 <code>scroll</code> 事件的回调</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>onClick</td>
<td>需要绑定到 <code>BackTop</code> 组件 <code>click</code> 事件的回调</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page,
.sar-portal </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-back-top-right</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-back-top-bottom</span><span class="token punctuation">:</span> 96rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-back-top-z-index</span><span class="token punctuation">:</span> 1000<span class="token punctuation">;</span>
  <span class="token property">--sar-back-top-height</span><span class="token punctuation">:</span> 96rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-back-top-min-width</span><span class="token punctuation">:</span> 96rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-back-top-padding-x</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-back-top-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-full<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-back-top-font-size</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-back-top-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-back-top-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-back-top-box-shadow</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-shadow-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-back-top-active-opacity</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-active-opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-back-top-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre>
</div>`,i=n({__name:"README",setup(c){const a={nav:"组件",title:"BackTop",subtitle:"回到顶部",group:{title:"导航组件",order:4},version:"1.6+"};return(e,l)=>(p(),t(s,{content:o,fm:a}))}});export{i as default};
