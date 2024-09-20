import{u as n}from"./useCodeTool-CSdgwhL_.js";import{d as s,c as a,o as t}from"./index-BukgD7CM.js";const p=`<h1 id="LuckyDraw幸运抽奖sup12sup">LuckyDraw 幸运抽奖 <sup>1.2+</sup><a class="doc-anchor" href="#LuckyDraw幸运抽奖sup12sup">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>提供了几个组合式函数，封装了九宫格、幸运大转盘、老虎机等抽奖的主要逻辑，可用纯 css 实现抽奖组件。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useLuckyGrid<span class="token punctuation">,</span> useLuckyWheel<span class="token punctuation">,</span> useSlotMachine <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="九宫格">九宫格<a class="doc-anchor" href="#九宫格">#</a></h3>
<p>遍历 <code>useLuckyGrid</code> 返回的 <code>grids</code> 计算属性来渲染九宫格；<code>activeIndex</code> 计算属性用于判断当前活动的奖品。</p>
<p>点击按钮后调用 <code>play</code> 方法开始动画；</p>
<p>在确定抽中的奖品下标时调用 <code>stop</code> 方法开始减速动画；</p>
<p>在动画完全停止后调用 <code>complete</code> 回调函数展示抽中的奖品。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in grids<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item > -1<span class="token punctuation">"</span></span>
        <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['prize-item', &#123; active: item === activeIndex &#125;]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize-icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cake<span class="token punctuation">"</span></span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prizes[item]?.icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>&#123;&#123; prizes[item]?.name &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-else</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>play-btn<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onPlay()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我抽奖<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dialog</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialogVisible<span class="token punctuation">"</span></span>
    <span class="token attr-name">:show-cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
    <span class="token attr-name">confirm-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>收下<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>winningPrize<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize-icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cake<span class="token punctuation">"</span></span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>winningPrize.icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>恭喜你抽中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>“&#123;&#123; winningPrize.name &#125;&#125;”<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-dialog</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useLuckyGrid <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getPrizesApi<span class="token punctuation">,</span> getPrizeApi<span class="token punctuation">,</span> type Prize <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./utils'</span>

<span class="token keyword">const</span> prizes <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Prize<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> winningPrize <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Prize<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> dialogVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> grids<span class="token punctuation">,</span> activeIndex<span class="token punctuation">,</span> play<span class="token punctuation">,</span> stop<span class="token punctuation">,</span> pause <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">useLuckyGrid</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    winningPrize<span class="token punctuation">.</span>value <span class="token operator">=</span> prizes<span class="token punctuation">.</span>value<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    dialogVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onPlay</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">getPrizeApi</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prize</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">stop</span><span class="token punctuation">(</span>prizes<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> prize<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">getPrizesApi</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    prizes<span class="token punctuation">.</span>value <span class="token operator">=</span> res
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.grid</span> <span class="token punctuation">&#123;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 660rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 660rpx<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 10rpx solid #ffddcf<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fffbef<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.grid-item</span> <span class="token punctuation">&#123;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 33.3333%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.prize-item</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff0cb<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2rpx solid <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.02<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -6rpx 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token selector">&amp;.active</span> <span class="token punctuation">&#123;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ffd166<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.prize-icon</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 72rpx<span class="token punctuation">;</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 2rpx 4rpx <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.prize-name</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 22rpx<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #eb7e50<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.play-btn</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f02020<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -6rpx 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.dialog-prize</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 60rpx 0<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.dialog-prize-icon</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 160rpx<span class="token punctuation">;</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 4rpx 8rpx <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.dialog-prize-title</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.dialog-prize-name</span> <span class="token punctuation">&#123;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #eb7e50<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre></div>
<p>utils.ts</p>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> random <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getPrizes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'华夫饼'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'huafubing'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'芝士蛋糕'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'zhishidangao'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'曲奇饼干'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'quqibinggan'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'布丁'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'buding'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'汉堡'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'hanbao'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'吐司'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'tusi'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'提拉米苏'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'tilamisu'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'三明治'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'sanmingzhi'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'泡芙'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'paofu'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'千层蛋糕'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'qiancengdangao'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'蛋挞'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'danta'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'虎皮卷'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'hupijuan'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'果冻'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'guodong'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'蛋黄酥'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'danhuangsu'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'巧克力蛋卷'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'qiaokelidanjuan'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'苏打饼干'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'sudabinggan'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'奥利奥'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'aoliao'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'巧克力'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">'qiaokeli'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Prize</span> <span class="token punctuation">&#123;</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPrizesApi</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span>Prize<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token function">getPrizes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPrizeApi</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span>Prize<span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token function">getPrizes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getMultiPrizeApi</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>columns<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span>Prize<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>
      resolve<span class="token punctuation">,</span>
      <span class="token number">150</span><span class="token punctuation">,</span>
      columns<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>column<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getPrizes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> column <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="自定义宫格行列">自定义宫格行列<a class="doc-anchor" href="#自定义宫格行列">#</a></h3>
<p><code>useLuckyGrid</code> 默认会生成 3x3 个格子，也可以自定义行列数。</p>
<p>宫格的外边缘格子下标从左上角以 0 开始逆时针递增，内部的格子下标从左到右、从上到下以 -1 开始递减。</p>
<p><code>centerSize</code> 计算属性可用于获取中间格子的行列数。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in grids<span class="token punctuation">"</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid-item<span class="token punctuation">"</span></span>
      <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123; width: 100 / column + '%' &#125;<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid-item-inner<span class="token punctuation">"</span></span>
        <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
          width: item === -1 ? centerSize.column * 100 + '%' : '',
          height: item === -1 ? centerSize.row * 100 + '%' : '',
        &#125;<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
          <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item > -1<span class="token punctuation">"</span></span>
          <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['prize-item', &#123; active: item === activeIndex &#125;]<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize-icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cake<span class="token punctuation">"</span></span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prizes[item]?.icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>&#123;&#123; prizes[item]?.name &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item === -1<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>play-btn<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onPlay()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          点我抽奖
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dialog</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialogVisible<span class="token punctuation">"</span></span>
    <span class="token attr-name">:show-cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
    <span class="token attr-name">confirm-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>收下<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>winningPrize<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize-icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cake<span class="token punctuation">"</span></span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>winningPrize.icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>恭喜你抽中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>“&#123;&#123; winningPrize.name &#125;&#125;”<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-dialog</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useLuckyGrid<span class="token punctuation">,</span> getGridPrizeCount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> computed<span class="token punctuation">,</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getPrizeApi<span class="token punctuation">,</span> getPrizes<span class="token punctuation">,</span> type Prize <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./utils'</span>

<span class="token keyword">const</span> row <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> column <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> prizes <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token function">getPrizes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">getGridPrizeCount</span><span class="token punctuation">(</span>row<span class="token punctuation">.</span>value<span class="token punctuation">,</span> column<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> winningPrize <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Prize<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> dialogVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> grids<span class="token punctuation">,</span> activeIndex<span class="token punctuation">,</span> centerSize<span class="token punctuation">,</span> play<span class="token punctuation">,</span> stop<span class="token punctuation">,</span> pause <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">useLuckyGrid</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  row<span class="token punctuation">,</span>
  column<span class="token punctuation">,</span>
  <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    winningPrize<span class="token punctuation">.</span>value <span class="token operator">=</span> prizes<span class="token punctuation">.</span>value<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    dialogVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onPlay</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">getPrizeApi</span><span class="token punctuation">(</span><span class="token function">getGridPrizeCount</span><span class="token punctuation">(</span>row<span class="token punctuation">.</span>value<span class="token punctuation">,</span> column<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prize</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">stop</span><span class="token punctuation">(</span>prizes<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> prize<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.grid</span> <span class="token punctuation">&#123;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 660rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 600rpx<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 10rpx solid #ffddcf<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fffbef<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.grid-item</span> <span class="token punctuation">&#123;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 33.3333%<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.grid-item-inner</span> <span class="token punctuation">&#123;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.prize-item</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff0cb<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2rpx solid <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.02<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -6rpx 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token selector">&amp;.active</span> <span class="token punctuation">&#123;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ffd166<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.prize-icon</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 2rpx 4rpx <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.prize-name</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 22rpx<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #eb7e50<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.play-btn</span> <span class="token punctuation">&#123;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f02020<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -6rpx 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.dialog-prize</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 60rpx 0<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.dialog-prize-icon</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 160rpx<span class="token punctuation">;</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 4rpx 8rpx <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.dialog-prize-title</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.dialog-prize-name</span> <span class="token punctuation">&#123;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #eb7e50<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="大转盘">大转盘<a class="doc-anchor" href="#大转盘">#</a></h3>
<p>大转盘与宫格抽奖逻辑类似。</p>
<p><code>count</code> 选项用于指定奖品数量；</p>
<p><code>useLuckyWheel</code> 函数返回的 <code>sectorDegrees</code> 计算属性为每个奖品所占的角度；</p>
<p><code>degrees</code> 计算属性为整个大转盘当前旋转的角度。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sectors<span class="token punctuation">"</span></span>
      <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
        backgroundImage: repeatingConicGradient,
        transform: \`rotate($&#123;degrees&#125;deg)\`,
      &#125;<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(prize, index) in prizes<span class="token punctuation">"</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize.id<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sector<span class="token punctuation">"</span></span>
        <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123; 'sector-event': index % 2 === 0 &#125;<span class="token punctuation">"</span></span>
        <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
          transform: \`rotate($&#123;-index * sectorDegrees&#125;deg)\`,
        &#125;<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sector-half<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize-icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cake<span class="token punctuation">"</span></span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize.icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>&#123;&#123; prize.name &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>play-btn<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onPlay<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>点我抽奖<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>play-btn-arrow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dialog</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialogVisible<span class="token punctuation">"</span></span>
    <span class="token attr-name">:show-cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
    <span class="token attr-name">confirm-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>收下<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>winningPrize<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize-icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cake<span class="token punctuation">"</span></span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>winningPrize.icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>恭喜你抽中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>“&#123;&#123; winningPrize.name &#125;&#125;”<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-dialog</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useLuckyWheel <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> computed<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getPrizesApi<span class="token punctuation">,</span> getPrizeApi<span class="token punctuation">,</span> type Prize <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./utils'</span>

<span class="token keyword">const</span> prizes <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Prize<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> winningPrize <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Prize<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> dialogVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> degrees<span class="token punctuation">,</span> sectorDegrees<span class="token punctuation">,</span> play<span class="token punctuation">,</span> stop<span class="token punctuation">,</span> pause <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">useLuckyWheel</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> prizes<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    winningPrize<span class="token punctuation">.</span>value <span class="token operator">=</span> prizes<span class="token punctuation">.</span>value<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    dialogVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> repeatingConicGradient <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> angle <span class="token operator">=</span> sectorDegrees<span class="token punctuation">.</span>value
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">repeating-conic-gradient(</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">var(--sector-bg) </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token operator">-</span>angle <span class="token operator">/</span> <span class="token number">2</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">deg, var(--sector-bg) </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>angle <span class="token operator">/</span> <span class="token number">2</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">deg,</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">transparent </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>angle <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">0.5</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">deg, transparent </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>angle <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> angle<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">deg,</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">var(--sector-bg) </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>angle <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> angle <span class="token operator">+</span> <span class="token number">0.5</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">deg)</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onPlay</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">getPrizeApi</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prize</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">stop</span><span class="token punctuation">(</span>prizes<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> prize<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">getPrizesApi</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    prizes<span class="token punctuation">.</span>value <span class="token operator">=</span> res
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.disc</span> <span class="token punctuation">&#123;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 660rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 660rpx<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 10rpx solid #ffddcf<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">--sector-bg</span><span class="token punctuation">:</span> #fff0cb<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.sectors</span> <span class="token punctuation">&#123;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fffbef<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.sector</span> <span class="token punctuation">&#123;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.sector-half</span> <span class="token punctuation">&#123;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.prize-icon</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 72rpx<span class="token punctuation">;</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 2rpx 4rpx <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.prize-name</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 22rpx<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #eb7e50<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.play-btn</span> <span class="token punctuation">&#123;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 160rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 160rpx<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 8rpx solid #fff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f02020<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 4rpx 8rpx <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.play-btn-arrow</span> <span class="token punctuation">&#123;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token selector">&amp;::before</span> <span class="token punctuation">&#123;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 60rpx<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 60rpx<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f02020<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.dialog-prize</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 60rpx 0<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.dialog-prize-icon</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 160rpx<span class="token punctuation">;</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 4rpx 8rpx <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.dialog-prize-title</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.dialog-prize-name</span> <span class="token punctuation">&#123;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #eb7e50<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="老虎机">老虎机<a class="doc-anchor" href="#老虎机">#</a></h3>
<p>老虎机可以一次性抽取多个奖品。</p>
<p><code>columns</code> 选项用于指定列数以及每列的奖品数量；</p>
<p><code>offset</code> 计算属性保存着每一列的百分比偏移量，每一列奖品容器的高度需和奖品高度一致；</p>
<p>为了实现首位相接的效果，还需在渲染的奖品列表的末尾加一个第一个奖品。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reels<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(translateY, index) in offset<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reel-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reel<span class="token punctuation">"</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123; transform: \`translateY($&#123;translateY&#125;%)\` &#125;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
          <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize in renderedPrizes<span class="token punctuation">"</span></span>
          <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize.id<span class="token punctuation">"</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize-item<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize-icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cake<span class="token punctuation">"</span></span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize.icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>&#123;&#123; prize.name &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>play-btn<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onPlay()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我抽奖<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dialog</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialogVisible<span class="token punctuation">"</span></span>
    <span class="token attr-name">:show-cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
    <span class="token attr-name">confirm-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>收下<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>winningPrize.length > 0<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize-icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span>
          <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(prize, index) in winningPrize<span class="token punctuation">"</span></span>
          <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
          <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cake<span class="token punctuation">"</span></span>
          <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prize.icon<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>恭喜你抽中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-prize-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          “&#123;&#123; winningPrize.map((prize) => prize.name).join('、') &#125;&#125;”
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-dialog</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useSlotMachine <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> computed<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getPrizesApi<span class="token punctuation">,</span> getMultiPrizeApi<span class="token punctuation">,</span> type Prize <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./utils'</span>

<span class="token keyword">const</span> prizes <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Prize<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> renderedPrizes <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> prizes<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>prizes<span class="token punctuation">.</span>value<span class="token punctuation">,</span> prizes<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> winningPrize <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Prize<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> dialogVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> columns <span class="token operator">=</span> ref<span class="token operator">&lt;</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> play<span class="token punctuation">,</span> stop<span class="token punctuation">,</span> pause<span class="token punctuation">,</span> offset <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">useSlotMachine</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  columns<span class="token punctuation">,</span>
  <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">indexes</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    winningPrize<span class="token punctuation">.</span>value <span class="token operator">=</span> indexes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> prizes<span class="token punctuation">.</span>value<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
    dialogVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onPlay</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">getMultiPrizeApi</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">multiPrizes</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">stop</span><span class="token punctuation">(</span>
        multiPrizes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prize</span><span class="token punctuation">)</span> <span class="token operator">=></span>
          prizes<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> prize<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">getPrizesApi</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    columns<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span>
    prizes<span class="token punctuation">.</span>value <span class="token operator">=</span> res
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.reels</span> <span class="token punctuation">&#123;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 240rpx<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 20rpx<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 10rpx solid #ffddcf<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fffbef<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.reel-box</span> <span class="token punctuation">&#123;</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff0cb<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.reel</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column-reverse<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.prize-item</span> <span class="token punctuation">&#123;</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.prize-icon</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 72rpx<span class="token punctuation">;</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 2rpx 4rpx <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.prize-name</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 22rpx<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #eb7e50<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.play-btn</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100rpx<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f02020<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 -8rpx 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.dialog-prize</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 60rpx 32rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.dialog-prize-icon</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 96rpx<span class="token punctuation">;</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 4rpx 8rpx <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.dialog-prize-title</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.dialog-prize-name</span> <span class="token punctuation">&#123;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #eb7e50<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="useLuckyGrid">useLuckyGrid<a class="doc-anchor" href="#useLuckyGrid">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">useLuckyGrid</span><span class="token punctuation">(</span>options<span class="token operator">?</span><span class="token operator">:</span> UseLuckyGridOptions<span class="token punctuation">)</span><span class="token operator">:</span> UseLuckyGridReturn
</code></pre></div>
<h3 id="UseLuckyGridOptions">UseLuckyGridOptions<a class="doc-anchor" href="#UseLuckyGridOptions">#</a></h3>
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
<td>row</td>
<td>宫格行数</td>
<td>number | Ref&lt;number&gt;</td>
<td>3</td>
</tr>
<tr>
<td>column</td>
<td>宫格列数</td>
<td>number | Ref&lt;number&gt;</td>
<td>3</td>
</tr>
<tr>
<td>minSpeed</td>
<td>最小加速度</td>
<td>number | Ref&lt;number&gt;</td>
<td>0.1</td>
</tr>
<tr>
<td>maxSpeed</td>
<td>最大加速度</td>
<td>number | Ref&lt;number&gt;</td>
<td>0.4</td>
</tr>
<tr>
<td>accelTime</td>
<td>加速时间，单位毫秒</td>
<td>number | Ref&lt;number&gt;</td>
<td>2500</td>
</tr>
<tr>
<td>decelTime</td>
<td>减速时间，单位毫秒</td>
<td>number | Ref&lt;number&gt;</td>
<td>2500</td>
</tr>
<tr>
<td>easeIn</td>
<td>加速缓动公式</td>
<td>(progress: number) =&gt; number</td>
<td>(k) =&gt; k * k</td>
</tr>
<tr>
<td>easeOut</td>
<td>减速缓动公式</td>
<td>(progress: number) =&gt; number</td>
<td>(k) =&gt; k * (2 - k)</td>
</tr>
<tr>
<td>startDelay</td>
<td>加速运动前的等待时间，单位毫秒</td>
<td>number | Ref&lt;number&gt;</td>
<td>0</td>
</tr>
<tr>
<td>endDelay</td>
<td>减速运动后的等待时间，单位毫秒</td>
<td>number | Ref&lt;number&gt;</td>
<td>500</td>
</tr>
<tr>
<td>complete</td>
<td>完成抽奖动画后的回调</td>
<td>(index: number) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="UseLuckyGridReturn">UseLuckyGridReturn<a class="doc-anchor" href="#UseLuckyGridReturn">#</a></h3>
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
<td>play</td>
<td>调用后开始抽奖</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>stop</td>
<td>调用后开始减速动画</td>
<td>(index?: number) =&gt; void</td>
</tr>
<tr>
<td>pause</td>
<td>调用后暂停动画</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>reset</td>
<td>调用后重置动画</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>playing</td>
<td>用于判断当前是否正在动画</td>
<td>ComputedRef<boolean></td>
</tr>
<tr>
<td>activeIndex</td>
<td>用于判断当前活动的下标</td>
<td>ComputedRef&lt;number | undefined&gt;</td>
</tr>
<tr>
<td>grids</td>
<td>用于渲染成宫格，并根据下标判断奖品和非奖品位置</td>
<td>ComputedRef&lt;number[]&gt;</td>
</tr>
<tr>
<td>centerSize</td>
<td>用于渲染中间非奖品格子的行列数</td>
<td>ComputedRef&lt;&#123; row: number; column: number; &#125;&gt;</td>
</tr>
</tbody>
</table></div>
<h3 id="useLuckyWheel">useLuckyWheel<a class="doc-anchor" href="#useLuckyWheel">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">useLuckyWheel</span><span class="token punctuation">(</span>options<span class="token operator">?</span><span class="token operator">:</span> UseLuckyWheelOptions<span class="token punctuation">)</span><span class="token operator">:</span> UseLuckyWheelReturn
</code></pre></div>
<h3 id="UseLuckyWheelOptions">UseLuckyWheelOptions<a class="doc-anchor" href="#UseLuckyWheelOptions">#</a></h3>
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
<td>count</td>
<td>奖品个数</td>
<td>number | Ref&lt;number&gt;</td>
<td>8</td>
</tr>
<tr>
<td>minSpeed</td>
<td>最小加速度</td>
<td>number | Ref&lt;number&gt;</td>
<td>0.01</td>
</tr>
<tr>
<td>maxSpeed</td>
<td>最大加速度</td>
<td>number | Ref&lt;number&gt;</td>
<td>0.4</td>
</tr>
<tr>
<td>accelTime</td>
<td>加速时间，单位毫秒</td>
<td>number | Ref&lt;number&gt;</td>
<td>2500</td>
</tr>
<tr>
<td>decelTime</td>
<td>减速时间，单位毫秒</td>
<td>number | Ref&lt;number&gt;</td>
<td>2500</td>
</tr>
<tr>
<td>easeIn</td>
<td>加速缓动公式</td>
<td>(progress: number) =&gt; number</td>
<td>(k) =&gt; k * k</td>
</tr>
<tr>
<td>easeOut</td>
<td>减速缓动公式</td>
<td>(progress: number) =&gt; number</td>
<td>(k) =&gt; k * (2 - k)</td>
</tr>
<tr>
<td>startDelay</td>
<td>加速运动前的等待时间，单位毫秒</td>
<td>number | Ref&lt;number&gt;</td>
<td>0</td>
</tr>
<tr>
<td>endDelay</td>
<td>减速运动后的等待时间，单位毫秒</td>
<td>number | Ref&lt;number&gt;</td>
<td>300</td>
</tr>
<tr>
<td>complete</td>
<td>完成抽奖动画后的回调</td>
<td>(index: number) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="UseLuckyWheelReturn">UseLuckyWheelReturn<a class="doc-anchor" href="#UseLuckyWheelReturn">#</a></h3>
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
<td>play</td>
<td>调用后开始抽奖</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>stop</td>
<td>调用后开始减速动画</td>
<td>(index?: number) =&gt; void</td>
</tr>
<tr>
<td>pause</td>
<td>调用后暂停动画</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>reset</td>
<td>调用后重置动画</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>playing</td>
<td>用于判断当前是否正在动画</td>
<td>ComputedRef<boolean></td>
</tr>
<tr>
<td>sectorDegrees</td>
<td>每个扇形奖品所占的角度，单位 deg</td>
<td>ComputedRef<number></td>
</tr>
<tr>
<td>degrees</td>
<td>当前转盘渲染的角度，单位 deg</td>
<td>ComputedRef<number></td>
</tr>
</tbody>
</table></div>
<h3 id="useSlotMachine">useSlotMachine<a class="doc-anchor" href="#useSlotMachine">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">useSlotMachine</span><span class="token punctuation">(</span>options<span class="token operator">:</span> UseSlotMachineOptions<span class="token punctuation">)</span><span class="token operator">:</span> UseSlotMachineReturn
</code></pre></div>
<h3 id="UseSlotMachineOptions">UseSlotMachineOptions<a class="doc-anchor" href="#UseSlotMachineOptions">#</a></h3>
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
<td>columns</td>
<td>奖品个数</td>
<td>number[] | unknown[][] | Ref&lt;number[] | unknown[][]&gt;</td>
<td>[]</td>
</tr>
<tr>
<td>staggerDelay</td>
<td>列间交错延迟时间，单位毫秒</td>
<td>number | Ref&lt;number&gt;</td>
<td>600</td>
</tr>
<tr>
<td>minSpeed</td>
<td>最小加速度</td>
<td>number | Ref&lt;number&gt;</td>
<td>0.01</td>
</tr>
<tr>
<td>maxSpeed</td>
<td>最大加速度</td>
<td>number | Ref&lt;number&gt;</td>
<td>0.3</td>
</tr>
<tr>
<td>accelTime</td>
<td>加速时间，单位毫秒</td>
<td>number | Ref&lt;number&gt;</td>
<td>2500</td>
</tr>
<tr>
<td>decelTime</td>
<td>减速时间，单位毫秒</td>
<td>number | Ref&lt;number&gt;</td>
<td>2500</td>
</tr>
<tr>
<td>easeIn</td>
<td>加速缓动公式</td>
<td>(progress: number) =&gt; number</td>
<td>(k) =&gt; k * k</td>
</tr>
<tr>
<td>easeOut</td>
<td>减速缓动公式</td>
<td>(progress: number) =&gt; number</td>
<td>(k) =&gt; k * (2 - k)</td>
</tr>
<tr>
<td>startDelay</td>
<td>加速运动前的等待时间，单位毫秒</td>
<td>number | Ref&lt;number&gt;</td>
<td>0</td>
</tr>
<tr>
<td>endDelay</td>
<td>减速运动后的等待时间，单位毫秒</td>
<td>number | Ref&lt;number&gt;</td>
<td>300</td>
</tr>
<tr>
<td>complete</td>
<td>完成抽奖动画后的回调</td>
<td>(index: number[]) =&gt; void</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="UseSlotMachineReturn">UseSlotMachineReturn<a class="doc-anchor" href="#UseSlotMachineReturn">#</a></h3>
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
<td>play</td>
<td>调用后开始抽奖</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>stop</td>
<td>调用后开始减速动画</td>
<td>(index?: number[]) =&gt; void</td>
</tr>
<tr>
<td>pause</td>
<td>调用后暂停动画</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>reset</td>
<td>调用后重置动画</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>playing</td>
<td>用于判断当前是否正在动画</td>
<td>ComputedRef<boolean></td>
</tr>
<tr>
<td>offset</td>
<td>每一列的当前偏移量</td>
<td>ComputedRef&lt;number[]&gt;</td>
</tr>
</tbody>
</table></div>
`,k=s({__name:"README",setup(o){return n(),(c,e)=>(t(),a("div",{class:"doc-content",innerHTML:p}))}});export{k as default};
