import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d as e,c as d,o}from"./index-CjTGEgwI.js";const s=`<h1 id="PullDownRefresh下拉刷新">PullDownRefresh 下拉刷新<a class="doc-anchor" href="#PullDownRefresh下拉刷新">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p><code>PullDownRefresh</code> 提供下拉刷新的交互操作。</p>
<p><code>PullDownRefresh</code> 可以在页面、<code>scroll-view</code> 或其他容器中使用，
当满足下拉刷新条件（滚动到顶部）且进行下拉操作时，会接替容器的滚动行为。</p>
<p>因此当滚动到顶部时调用 <code>PullDownRefreshExpose['enableToRefresh']</code> 方法并传递<code>true</code>告诉组件可以进行下拉刷新操作。</p>
<p>当用户下拉到指定阈值时会触发 <code>refresh</code> 事件，此时要设置 <code>loading</code> 属性为 <code>true</code> 以便向用户展示加载状态，并发送网络请求。</p>
<p>在获取到数据后设置 <code>loading</code> 属性为 <code>false</code> 来关闭加载状态。</p>
<p><code>PullDownRefresh</code> 组件被设计为与滚动容器弱关联关系，因此，如果有需要，你可以将此组件与滚动容器以及上拉加载组件组合使用来实现复杂的效果。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> PullDownRefresh <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/pull-down-refresh/pull-down-refresh.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基于页面的刷新">基于页面的刷新<a class="doc-anchor" href="#基于页面的刷新">#</a></h3>
<p>在页面生命周期 <code>onPageScroll</code> 中获取当前 <code>scrollTop</code> 的值，当为 0 时启用下拉刷新。</p>
<h3 id="基于scroll-view的刷新">基于 scroll-view 的刷新<a class="doc-anchor" href="#基于scroll-view的刷新">#</a></h3>
<p>监听 <code>scroll-view</code> 组件的 <code>scroll</code> 事件来获取 <code>scrollTop</code> 值，当为 0 时启用下拉刷新。</p>
<p>因为小程序端 <code>scroll-view</code> 组件内置了节流功能，当快速滚动到顶部时，可能不会触发 <code>scroll</code> 事件，
造成 <code>scrollTop</code> 不为 0 的情况。</p>
<p>因此需要同时监听 <code>scrolltoupper</code> 事件，当此事件触发时也启用下拉刷新。</p>
<p>即便如此，在极少数的情况下，滚动到顶部也不会触发 <code>scrolltoupper</code> 事件，因此保守起见，
还要设置 <code>scroll-view</code> 组件的 <code>throttle</code> 属性为 <code>false</code> 来关闭节流（官方文档中没有关于<code>throttle</code> 属性的描述，但此属性确实存在）。</p>
<h3 id="使用插槽">使用插槽<a class="doc-anchor" href="#使用插槽">#</a></h3>
<p>通过使用插槽可以自定义不同状态的提示信息。</p>
<p>其中 <code>unready</code> 插槽接收一个 <code>progress</code> 属性用来实现下拉进度展示的效果。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="PullDownRefreshProps">PullDownRefreshProps<a class="doc-anchor" href="#PullDownRefreshProps">#</a></h3>
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
<td>threshold</td>
<td>触发下拉刷新的阈值，单位 px</td>
<td>number</td>
<td>50</td>
</tr>
<tr>
<td>header-height</td>
<td>顶部内容高度，单位 px</td>
<td>number</td>
<td>50</td>
</tr>
<tr>
<td>loading</td>
<td>是否处于加载中状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>transition-duration</td>
<td>回弹动画时长，单位 ms</td>
<td>number</td>
<td>300</td>
</tr>
<tr>
<td>done-duration</td>
<td>加载完成状态持续时长，单位 ms</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁止用户进行下拉操作</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="PullDownRefreshSlots">PullDownRefreshSlots<a class="doc-anchor" href="#PullDownRefreshSlots">#</a></h3>
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
<td>unready</td>
<td>自定义未预备加载状态内容，<code>progress</code> 属性表示从下拉开始到达到 <code>threshold</code> 的进度值</td>
<td>&#123; progress: number &#125;</td>
</tr>
<tr>
<td>ready</td>
<td>自定义预备加载状态内容</td>
<td>-</td>
</tr>
<tr>
<td>loading</td>
<td>自定义加载中状态内容</td>
<td>-</td>
</tr>
<tr>
<td>done</td>
<td>自定义加载完成状态内容</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="PullDownRefreshEmits">PullDownRefreshEmits<a class="doc-anchor" href="#PullDownRefreshEmits">#</a></h3>
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
<td>refresh</td>
<td>下拉到指定阈值并松开手指后触发</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="PullDownRefreshExpose">PullDownRefreshExpose<a class="doc-anchor" href="#PullDownRefreshExpose">#</a></h3>
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
<td>enableToRefresh</td>
<td>是否启用下拉刷新，通常在容器滚动到顶部时设为真</td>
<td>(canRefresh: boolean) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-pull-down-refresh-header-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-pull-down-refresh-header-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-pull-down-refresh-loading-font-size</span><span class="token punctuation">:</span> 36rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,p=e({__name:"README",setup(a){return t(),(r,c)=>(o(),d("div",{class:"doc-content",innerHTML:s}))}});export{p as default};
