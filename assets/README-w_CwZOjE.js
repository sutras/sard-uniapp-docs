import{u as a}from"./useCodeTool-mazcC0Cn.js";import{d as n,c as s,o as t}from"./index-ybeXHrRA.js";const p=`<h1 id="Notify通知">Notify 通知<a class="doc-anchor" href="#Notify通知">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>在页面顶部展示消息通知。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Notify <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/notify/notify.vue'</span>
<span class="token keyword">import</span> NotifyAgent <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/notify-agent/notify-agent.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> notify <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>先在页面放置代理组件。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-notify-agent</span> <span class="token punctuation">/></span></span>
</code></pre></div>
<p>接着便可以使用 <code>notify</code> 等方法显示提示。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示通知<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showNotice<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>隐藏通知<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hideNotice<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> notify <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> <span class="token function-variable function">showNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> <span class="token function-variable function">hideNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  notify<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="类型">类型<a class="doc-anchor" href="#类型">#</a></h3>
<p>支持 <code>primary、success、warning、error</code> 四种通知类型，默认为 <code>primary</code></p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>成功通知<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showSucessNotice<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>警告通知<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showWarningNotice<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>错误通知<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showErrorNotice<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>隐藏通知<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hideNotice<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> notify <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> <span class="token function-variable function">showSucessNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> <span class="token function-variable function">showWarningNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  notify<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> <span class="token function-variable function">showErrorNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  notify<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> <span class="token function-variable function">hideNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> notify<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>通过 <code>color</code> 属性设置文本颜色，通过 <code>background</code> 属性设置背景色。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示通知<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showNotice<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>隐藏通知<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hideNotice<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> notify <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> <span class="token function-variable function">showNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'var(--sar-orange)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> <span class="token function-variable function">hideNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  notify<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义时长">自定义时长<a class="doc-anchor" href="#自定义时长">#</a></h3>
<p><code>duration</code> 设为 0 后会一直显示。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示不会消失的通知<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showNotice<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>隐藏通知<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hideNotice<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> notify <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> <span class="token function-variable function">showNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> <span class="token function-variable function">hideNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  notify<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义位置">自定义位置<a class="doc-anchor" href="#自定义位置">#</a></h3>
<p>通知允许在屏幕上边或下边展示。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>在底部显示通知<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showNotice<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>隐藏通知<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hideNotice<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> notify <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> <span class="token function-variable function">showNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">'这是一条通知'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> <span class="token function-variable function">hideNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  notify<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="NotifyProps">NotifyProps<a class="doc-anchor" href="#NotifyProps">#</a></h3>
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
<td>type</td>
<td>加载类型</td>
<td>'primary' | 'success' | 'warning' | 'error'</td>
<td>'primary'</td>
</tr>
<tr>
<td>message</td>
<td>通知内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>字体颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>background</td>
<td>背景色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>visible (v-model)</td>
<td>是否显示通知</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>position</td>
<td>通知放置的位置</td>
<td>'top' | 'bottom'</td>
<td>'top'</td>
</tr>
<tr>
<td>timeout</td>
<td>展示时长(ms)，值为 0 时，通知不会消失</td>
<td>number</td>
<td>3000</td>
</tr>
<tr>
<td>duration</td>
<td>显隐动画时长，单位 ms</td>
<td>number</td>
<td>300</td>
</tr>
</tbody>
</table></div>
<h3 id="NotifyAgentPropsNotifyOptions">NotifyAgentProps / NotifyOptions<a class="doc-anchor" href="#NotifyAgentPropsNotifyOptions">#</a></h3>
<p>继承 <code>NotifyProps</code> 并有以下额外属性。</p>
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
<td>通知组件的 id</td>
<td>string</td>
<td>'notify'</td>
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
<td>notify</td>
<td>显示通知</td>
<td>NotifyFunction</td>
</tr>
<tr>
<td>notify.success</td>
<td>显示成功类型通知</td>
<td>NotifySimpleShowFunction</td>
</tr>
<tr>
<td>notify.warning</td>
<td>显示警告类型通知</td>
<td>NotifySimpleShowFunction</td>
</tr>
<tr>
<td>notify.error</td>
<td>显示错误类型通知</td>
<td>NotifySimpleShowFunction</td>
</tr>
<tr>
<td>notify.hide</td>
<td>隐藏指定 <code>id</code> 的命令式通知</td>
<td>(id = 'notify') =&gt; void</td>
</tr>
<tr>
<td>notify.hideAll</td>
<td>隐藏所有命令式通知</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="NotifyFunction">NotifyFunction<a class="doc-anchor" href="#NotifyFunction">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">NotifyFunction</span> <span class="token operator">=</span> NotifySimpleShowFunction <span class="token operator">&amp;</span> <span class="token punctuation">&#123;</span>
  success<span class="token operator">:</span> NotifySimpleShowFunction
  warning<span class="token operator">:</span> NotifySimpleShowFunction
  error<span class="token operator">:</span> NotifySimpleShowFunction
  <span class="token function-variable function">hide</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
  <span class="token function-variable function">hideAll</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="NotifySimpleShowFunction">NotifySimpleShowFunction<a class="doc-anchor" href="#NotifySimpleShowFunction">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">NotifySimpleShowFunction</span> <span class="token punctuation">&#123;</span>
  <span class="token punctuation">(</span>options<span class="token operator">:</span> NotifyOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> NotifyOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-notify-paddding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-notify-paddding-y</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-notify-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-notify-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,i=n({__name:"README",setup(o){return a(),(c,e)=>(t(),s("div",{class:"doc-content",innerHTML:p}))}});export{i as default};
