import{u as a}from"./useCodeTool-5abdc725.js";import{d as n,c as s,o as t}from"./index-da6ae011.js";const p=`<h1 id="Tabbar标签栏">Tabbar 标签栏<a class="doc-anchor" href="#Tabbar标签栏">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>固定在页面底部的导航栏，用于切换不同的页面。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Tabbar <span class="token keyword">from</span> <span class="token string">'@sard/uniapp/dist/tabbar/tabbar.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>current</code> 属性控制选中的标签。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar</span> <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>house-door-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cart-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>购物车<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chat-dots-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>消息<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>person-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>我的<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tabbar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义图标">自定义图标<a class="doc-anchor" href="#自定义图标">#</a></h3>
<p>通过 <code>icon</code> 属性自定义图标。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar</span> <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
      <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current === 0 ? 'house-door-fill' : 'house-door'<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>
      <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current === 1 ? 'cart-fill' : 'cart'<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>购物车<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
      <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current === 2 ? 'chat-dots-fill' : 'chat-dots'<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>消息<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span>
      <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current === 3 ? 'person-fill' : 'person'<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>我的<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tabbar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>使用 <code>color</code> 属性设置未选中标签的颜色。
使用 <code>activeColor</code> 属性设置选中标签的颜色。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar</span> <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span> <span class="token attr-name">active-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>var(--sar-red)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>house-door-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cart-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>购物车<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chat-dots-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>消息<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>person-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>我的<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tabbar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="徽标">徽标<a class="doc-anchor" href="#徽标">#</a></h3>
<p>使用 <code>badge</code> 属性设置徽标。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>house-door-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cart-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>购物车<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chat-dots-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">:badge</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>消息<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-tabbar-item</span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>person-fill<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span>
      <span class="token attr-name">dot</span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>我的<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-tabbar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="TabbarProps">TabbarProps<a class="doc-anchor" href="#TabbarProps">#</a></h3>
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
<td>current (v-model)</td>
<td>当前选中标签的 <code>name</code> 属性</td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>未选中标签的颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>active-color</td>
<td>选中标签的颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>bordered</td>
<td>是否显示外边框</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3 id="TabbarSlots">TabbarSlots<a class="doc-anchor" href="#TabbarSlots">#</a></h3>
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
</tbody>
</table></div>
<h3 id="TabbarEmits">TabbarEmits<a class="doc-anchor" href="#TabbarEmits">#</a></h3>
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
<td>update:current</td>
<td>切换标签时触发</td>
<td>(current: number | string) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="TabbarItemProps">TabbarItemProps<a class="doc-anchor" href="#TabbarItemProps">#</a></h3>
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
<td>name</td>
<td>标签唯一标识符</td>
<td>string | number</td>
<td>-</td>
</tr>
<tr>
<td>text</td>
<td>要显示的标签文本</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>图标名称</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon-family</td>
<td>图标字体</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon-size</td>
<td>图标大小</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>badge</td>
<td>显示的徽标值</td>
<td>number | string</td>
<td>-</td>
</tr>
<tr>
<td>dot</td>
<td>是否显示小红点</td>
<td>boolean</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="TabbarItemSlots">TabbarItemSlots<a class="doc-anchor" href="#TabbarItemSlots">#</a></h3>
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
<td>自定义文本内容</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="TabbarItemEmits">TabbarItemEmits<a class="doc-anchor" href="#TabbarItemEmits">#</a></h3>
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
<td>点击标签时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-tabbar-height</span><span class="token punctuation">:</span> 100rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-tabbar-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-tabbar-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-tabbar-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-tabbar-item-ative-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-tabbar-item-icon-margin-bottom</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-tabbar-item-icon-font-size</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-tabbar-item-icon-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-none<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-tabbar-item-text-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-tabbar-item-text-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-tight<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,k=n({__name:"README",setup(o){return a(),(c,e)=>(t(),s("div",{class:"doc-content",innerHTML:p}))}});export{k as default};
