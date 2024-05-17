import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d as a,c as s,o}from"./index-CjTGEgwI.js";const e=`<h1 id="LoadMore加载更多">LoadMore 加载更多<a class="doc-anchor" href="#LoadMore加载更多">#</a></h1>
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
<h3 id="配合PullDownRefresh组件一起使用">配合 PullDownRefresh 组件一起使用<a class="doc-anchor" href="#配合PullDownRefresh组件一起使用">#</a></h3>
<p>下面的案例代码展示了经典的“下拉刷新+上拉加载”功能实现。</p>
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
`,l=a({__name:"README",setup(d){return t(),(n,r)=>(o(),s("div",{class:"doc-content",innerHTML:e}))}});export{l as default};
