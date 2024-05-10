import{u as a}from"./useCodeTool-FmmNjiPp.js";import{d as n,c as s,o as t}from"./index-67M18MvN.js";const p=`<h1 id="LoadMore加载更多">LoadMore 加载更多<a class="doc-anchor" href="#LoadMore加载更多">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>放置在列表底部，做滚动加载使用，展示加载的各种状态。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> LoadMore <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/load-more/load-more.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>通过设置 <code>status</code> 属性展示不同的状态信息；
组件处于 <code>incomplete</code> 状态时点击会触发 <code>load-more</code> 事件，通常用于加载的数据不满一屏无法触底加载时使用。</p>
<p>处于 <code>error</code> 状态时点击会触发 <code>reload</code> 事件。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-load-more</span>
      <span class="token attr-name">:status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>status<span class="token punctuation">"</span></span>
      <span class="token attr-name">@load-more</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toast('加载更多')<span class="token punctuation">"</span></span>
      <span class="token attr-name">@reload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toast('重新加载')<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-load-more</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>status<span class="token punctuation">"</span></span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 40rpx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#custom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123; toggle &#125;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, i) in statusList<span class="token punctuation">"</span></span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span>
            <span class="token attr-name">hover</span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggle(item)<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">readonly</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio-group</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> type LoadMoreStatus<span class="token punctuation">,</span> toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> status <span class="token operator">=</span> ref<span class="token operator">&lt;</span>LoadMoreStatus<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'incomplete'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> statusList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'incomplete'</span><span class="token punctuation">,</span> <span class="token string">'loading'</span><span class="token punctuation">,</span> <span class="token string">'complete'</span><span class="token punctuation">,</span> <span class="token string">'error'</span><span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="配合PullDownRefresh组件一起使用">配合 PullDownRefresh 组件一起使用<a class="doc-anchor" href="#配合PullDownRefresh组件一起使用">#</a></h3>
<p>下面的案例代码展示了经典的“下拉刷新+上拉加载”功能实现。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-view</span>
      <span class="token attr-name">scroll-y</span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
        height: 300px;
        margin: 20rpx 0;
        border: 1px solid var(--sar-border-color);
      <span class="token punctuation">"</span></span></span>
      <span class="token attr-name">@scroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onScroll<span class="token punctuation">"</span></span>
      <span class="token attr-name">@scrolltolower</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onScrolltolower<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-pull-down-refresh</span>
        <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refreshing<span class="token punctuation">"</span></span>
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pullDownRefresh<span class="token punctuation">"</span></span>
        <span class="token attr-name">@refresh</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onRefresh<span class="token punctuation">"</span></span>
        <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loadMoreStatus === 'loading'<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
          <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in list<span class="token punctuation">"</span></span>
          <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span>
          <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10rpx 32rpx;
            height: 40px;
            border: 1px solid var(--sar-border-color);
          <span class="token punctuation">"</span></span></span>
        <span class="token punctuation">></span></span>
          &#123;&#123; item &#125;&#125;
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-load-more</span>
          <span class="token attr-name">:status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loadMoreStatus<span class="token punctuation">"</span></span>
          <span class="token attr-name">@load-more</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onLoadMore<span class="token punctuation">"</span></span>
          <span class="token attr-name">@reload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onReload<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-load-more</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-pull-down-refresh</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll-view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> type LoadMoreStatus<span class="token punctuation">,</span> toast <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> currentPage <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> ref<span class="token operator">&lt;</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">fetchApi</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">page</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">page</span><span class="token operator">:</span> number<span class="token punctuation">;</span> total<span class="token operator">:</span> number<span class="token punctuation">;</span> list<span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">&#125;</span><span class="token operator">></span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.55</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            page<span class="token punctuation">,</span>
            <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token literal-property property">list</span><span class="token operator">:</span>
              page <span class="token operator">></span> <span class="token number">3</span>
                <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                <span class="token operator">:</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
          <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// 下拉刷新</span>
<span class="token keyword">const</span> refreshing <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> pullDownRefresh <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  pullDownRefresh<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">setScrollTop</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>scrollTop<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onRefresh</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  refreshing<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token function">fetchApi</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      currentPage<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">1</span>
      list<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>list
      loadMoreStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>page <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>total <span class="token operator">?</span> <span class="token string">'incomplete'</span> <span class="token operator">:</span> <span class="token string">'complete'</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'刷新成功'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'刷新失败'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      refreshing<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// 加载更多</span>
<span class="token keyword">const</span> loadMoreStatus <span class="token operator">=</span> ref<span class="token operator">&lt;</span>LoadMoreStatus<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'incomplete'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">loadMoreFetch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">page</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  loadMoreStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'loading'</span>
  <span class="token function">fetchApi</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      list<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token operator">...</span>res<span class="token punctuation">.</span>list<span class="token punctuation">]</span>
      loadMoreStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>page <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>total <span class="token operator">?</span> <span class="token string">'incomplete'</span> <span class="token operator">:</span> <span class="token string">'complete'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      loadMoreStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'error'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onLoadMore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>refreshing<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token function">loadMoreFetch</span><span class="token punctuation">(</span><span class="token operator">++</span>currentPage<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onReload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>refreshing<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token function">loadMoreFetch</span><span class="token punctuation">(</span>currentPage<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onScrolltolower</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>refreshing<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> loadMoreStatus<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">'incomplete'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token function">loadMoreFetch</span><span class="token punctuation">(</span><span class="token operator">++</span>currentPage<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">loadMoreFetch</span><span class="token punctuation">(</span>currentPage<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="LoadMoreProps">LoadMoreProps<a class="doc-anchor" href="#LoadMoreProps">#</a></h3>
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
<td>status</td>
<td>加载的状态</td>
<td>LoadMoreStatus</td>
<td>'incomplete'</td>
</tr>
<tr>
<td>incomplete-text</td>
<td>未加载完的状态文本</td>
<td>string</td>
<td>'加载更多'</td>
</tr>
<tr>
<td>loading-text</td>
<td>加载中的状态文本</td>
<td>string</td>
<td>'加载中...'</td>
</tr>
<tr>
<td>complete-text</td>
<td>加载完的状态文本</td>
<td>string</td>
<td>'没有更多了'</td>
</tr>
<tr>
<td>error-text</td>
<td>加载错误的状态文本</td>
<td>string</td>
<td>'请求失败，点击重新加载'</td>
</tr>
</tbody>
</table></div>
<h3 id="LoadMoreSlots">LoadMoreSlots<a class="doc-anchor" href="#LoadMoreSlots">#</a></h3>
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
<td>incomplete</td>
<td>自定义未加载完的状态内容，会覆盖 <code>incompleteText</code> 属性</td>
<td>-</td>
</tr>
<tr>
<td>loading</td>
<td>自定义加载中的状态内容，会覆盖 <code>loadingText</code> 属性</td>
<td>-</td>
</tr>
<tr>
<td>complete</td>
<td>自定义加载完的状态内容，会覆盖 <code>completeText</code> 属性</td>
<td>-</td>
</tr>
<tr>
<td>error</td>
<td>自定义加载错误的状态内容，会覆盖 <code>errorText</code> 属性</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="LoadMoreEmits">LoadMoreEmits<a class="doc-anchor" href="#LoadMoreEmits">#</a></h3>
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
<td>load-more</td>
<td>在 <code>incomplete</code> 状态下点击时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>reload</td>
<td>在 <code>error</code> 状态下点击时触发</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="LoadMoreStatus">LoadMoreStatus<a class="doc-anchor" href="#LoadMoreStatus">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">LoadMoreStatus</span> <span class="token operator">=</span> <span class="token string">'incomplete'</span> <span class="token operator">|</span> <span class="token string">'loading'</span> <span class="token operator">|</span> <span class="token string">'complete'</span> <span class="token operator">|</span> <span class="token string">'error'</span>
</code></pre></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-load-more-height</span><span class="token punctuation">:</span> 100rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-load-more-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-load-more-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,k=n({__name:"README",setup(o){return a(),(e,c)=>(t(),s("div",{class:"doc-content",innerHTML:p}))}});export{k as default};
