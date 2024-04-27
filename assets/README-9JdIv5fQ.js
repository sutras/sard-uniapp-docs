import{u as a}from"./useCodeTool-mazcC0Cn.js";import{d as s,c as n,o as t}from"./index-ybeXHrRA.js";const p=`<h1 id="Dropdown下拉菜单">Dropdown 下拉菜单<a class="doc-anchor" href="#Dropdown下拉菜单">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>可向下/向上弹出菜单列表，或自定义弹出的菜单内容。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Dropdown <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/dropdown/dropdown.vue'</span>
<span class="token keyword">import</span> DropdownItem <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/dropdown-item/dropdown-item.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>options</code> 配置下拉菜单项，使用 <code>v-model</code> 绑定选中的值。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown-item</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options1<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown-item</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options2<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-dropdown</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> options1 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'距离优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'速度优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'评分优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> options2 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'30分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'40分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'50分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> value1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> value2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="占位符">占位符<a class="doc-anchor" href="#占位符">#</a></h3>
<p>占位符会在未选中值时显示说明文字。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown-item</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>排序<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown-item</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>配送时间<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-dropdown</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> options1 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'距离优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'速度优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'评分优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> options2 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'30分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'40分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'50分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="添加label">添加 label<a class="doc-anchor" href="#添加label">#</a></h3>
<p>相较于占位符， <code>label</code> 会一直显示。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>排序<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options1<span class="token punctuation">"</span></span> <span class="token attr-name">model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>速度<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options2<span class="token punctuation">"</span></span> <span class="token attr-name">model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-dropdown</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> options1 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'距离优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'速度优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'评分优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> options2 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'30分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'40分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'50分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="向上展开">向上展开<a class="doc-anchor" href="#向上展开">#</a></h3>
<p>底部空间不足时可以配置向上弹出菜单。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>up<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown-item</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options1<span class="token punctuation">"</span></span> <span class="token attr-name">model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown-item</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options2<span class="token punctuation">"</span></span> <span class="token attr-name">model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-dropdown</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> options1 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'距离优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'速度优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'评分优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> options2 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'30分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'40分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'50分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="禁用">禁用<a class="doc-anchor" href="#禁用">#</a></h3>
<p>禁用的菜单项不可点击。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown-item</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options1<span class="token punctuation">"</span></span> <span class="token attr-name">model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown-item</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options2<span class="token punctuation">"</span></span> <span class="token attr-name">model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-dropdown</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> options1 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'距离优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'速度优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'评分优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> options2 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'30分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'40分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'50分钟内'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义内容">自定义内容<a class="doc-anchor" href="#自定义内容">#</a></h3>
<p>除了显示菜单项，下拉菜单还可以显示任意内容，这时可以使用 <code>v-model:visible</code> 控制显隐。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>up<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown-item</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options1<span class="token punctuation">"</span></span> <span class="token attr-name">model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dropdown-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>筛选<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">inlaid</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>包邮<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#value</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>团购<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#value</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">round</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible = false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>确认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-dropdown-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-dropdown</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> options1 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'距离优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'速度优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'评分优先'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="DropdownProps">DropdownProps<a class="doc-anchor" href="#DropdownProps">#</a></h3>
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
<td>direction</td>
<td>菜单弹出方向</td>
<td>'down' | 'up'</td>
<td>'down'</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>away-closable</td>
<td>是否在点击外部区域后自动隐藏</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>overlay-closable</td>
<td>是否在点击遮罩后自动隐藏</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>duration</td>
<td>显隐动画时长，单位 ms</td>
<td>number</td>
<td>300</td>
</tr>
</tbody>
</table></div>
<h3 id="DropdownSlots">DropdownSlots<a class="doc-anchor" href="#DropdownSlots">#</a></h3>
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
<h3 id="DropdownItemProps">DropdownItemProps<a class="doc-anchor" href="#DropdownItemProps">#</a></h3>
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
<td>标题，用于自定义菜单内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>标签说明</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>options</td>
<td>菜单选项</td>
<td>DropdownOption[]</td>
<td>[]</td>
</tr>
<tr>
<td>direction</td>
<td>菜单弹出方向</td>
<td>'down' | 'up'</td>
<td>'down'</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>model-value (v-model)</td>
<td>当前选择的菜单项的值</td>
<td>any</td>
<td>-</td>
</tr>
<tr>
<td>visible (v-model)</td>
<td>弹出框是否可见</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>separator</td>
<td>标签后面分隔符</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>placeholder</td>
<td>占位符</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="DropdownItemSlots">DropdownItemSlots<a class="doc-anchor" href="#DropdownItemSlots">#</a></h3>
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
<h3 id="DropdownItemEmits">DropdownItemEmits<a class="doc-anchor" href="#DropdownItemEmits">#</a></h3>
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
<td>update:model-value</td>
<td>选中菜单选项时触发</td>
<td>(value: any) =&gt; void</td>
</tr>
<tr>
<td>update:visible</td>
<td>弹出框显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="DropdownOption">DropdownOption<a class="doc-anchor" href="#DropdownOption">#</a></h3>
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
<td>label</td>
<td>定义选项标签</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>定义选项的值</td>
<td>any</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-dropdown-height</span><span class="token punctuation">:</span> 88rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-dropdown-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-dropdown-box-shadow</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-shadow-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-dropdown-item-padding-x</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-dropdown-item-active-opacity</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-active-opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-dropdown-item-show-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-dropdown-value-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-dropdown-label-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-dropdown-label-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-dropdown-label-margin-right</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-dropdown-placeholder-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-quaternary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-dropdown-arrow-margin-left</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-dropdown-arrow-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-dropdown-arrow-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-dropdown-popup-z-index</span><span class="token punctuation">:</span> 1000<span class="token punctuation">;</span>

  <span class="token property">--sar-dropdown-option-active-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-dropdown-option-icon-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,r=s({__name:"README",setup(o){return a(),(e,c)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{r as default};
