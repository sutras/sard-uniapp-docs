import{u as a}from"./useCodeTool-5abdc725.js";import{d as s,c as n,o as t}from"./index-da6ae011.js";const p=`<h1 id="Picker选择器">Picker 选择器<a class="doc-anchor" href="#Picker选择器">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>一个或多个可滚动列表选择器。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Picker <span class="token keyword">from</span> <span class="token string">'@sard/uniapp/dist/picker/picker.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>通过 <code>v-model</code> 绑定当前值，通过 <code>columns</code> 配置选项数据。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>当前值：<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>String(value)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>设置为: 天津市<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span>
      <span class="token attr-name">hover</span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value = '天津市'<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>清空<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value = undefined<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'北京市'</span><span class="token punctuation">,</span> <span class="token string">'天津市'</span><span class="token punctuation">,</span> <span class="token string">'河北省'</span><span class="token punctuation">,</span> <span class="token string">'山东省'</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> ref<span class="token operator">&lt;</span>string <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'河北省'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="对象类型">对象类型<a class="doc-anchor" href="#对象类型">#</a></h3>
<p>列的每一项可以为一个对象，使用 <code>optionKeys</code> 属性可以指定对象中哪个属性值为选中的值，哪个属性值为要显示的标签。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-picker</span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>
        <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
        <span class="token attr-name">:option-keys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123; label: 'name', value: 'code' &#125;<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>当前值：<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>String(value)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>设置为: 天津市<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value = 120000<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>清空<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value = undefined<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">110000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'北京市'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">120000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'天津市'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">130000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'河北省'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">140000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'山东省'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> ref<span class="token operator">&lt;</span>number <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token number">130000</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="多列">多列<a class="doc-anchor" href="#多列">#</a></h3>
<p>当 <code>columns</code> 属性值为一个二维数组时会显示为多列。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>当前值：<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>JSON.stringify(value)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>设置为: 2003年10月<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span>
      <span class="token attr-name">hover</span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value = ['2003年', '10月']<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>清空<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value = undefined<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">2000</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">'年'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">1</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">'月'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> ref<span class="token operator">&lt;</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'2005年'</span><span class="token punctuation">,</span> <span class="token string">'5月'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="对象类型多列">对象类型多列<a class="doc-anchor" href="#对象类型多列">#</a></h3>
<p><code>columns</code> 属性值为对象类型的二维数组。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>当前值：<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>JSON.stringify(value)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>设置为: 2003年10月<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span>
      <span class="token attr-name">hover</span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value = [2003, 10]<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>清空<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value = undefined<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2000</span> <span class="token operator">+</span> index<span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token number">2000</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">'年'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">+</span> index<span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">'月'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> ref<span class="token operator">&lt;</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2005</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="级联选择">级联选择<a class="doc-anchor" href="#级联选择">#</a></h3>
<p>当 <code>columns</code> 第一个元素为对象且其 <code>children</code> 属性值为数组时会被当作级联选择。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-picker</span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>
        <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>regionData<span class="token punctuation">"</span></span>
        <span class="token attr-name">:option-keys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123; label: 'name', value: 'code' &#125;<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>当前值：<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>JSON.stringify(value)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>设置为: 广东省/广州市/白云区<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span>
      <span class="token attr-name">hover</span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value = [440000, 440100, 440111]<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>清空<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value = undefined<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getRegionData <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'region-data'</span>

<span class="token keyword">const</span> regionData <span class="token operator">=</span> <span class="token function">getRegionData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> ref<span class="token operator">&lt;</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">150000</span><span class="token punctuation">,</span> <span class="token number">150500</span><span class="token punctuation">,</span> <span class="token number">150522</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="PickerProps">PickerProps<a class="doc-anchor" href="#PickerProps">#</a></h3>
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
<td>columns</td>
<td>配置每一列的数据</td>
<td>PickerOption[] | PickerOption[][]</td>
<td>[]</td>
</tr>
<tr>
<td>option-keys</td>
<td>自定义 <code>columns</code> 结构中的字段</td>
<td>PickerOptionKeys</td>
<td>&#123;label: 'label', value: 'value', children: 'children'&#125;</td>
</tr>
<tr>
<td>model-value</td>
<td>选中项的值</td>
<td>any</td>
<td>-</td>
</tr>
<tr>
<td>immediate-change</td>
<td>是否在手指松开时立即触发 <code>update:model-value</code> 事件</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="PickerEmits">PickerEmits<a class="doc-anchor" href="#PickerEmits">#</a></h3>
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
<td>选中的选项改变时触发</td>
<td>(value: any, selectedOptions: PickerOption[], indexes: number[]) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="PickerOption">PickerOption<a class="doc-anchor" href="#PickerOption">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">type</span> <span class="token class-name">PickerOption</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token punctuation">&#123;</span>
      <span class="token punctuation">[</span>key<span class="token operator">:</span> PropertyKey<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
    <span class="token punctuation">&#125;</span>
  <span class="token operator">|</span> <span class="token builtin">number</span>
  <span class="token operator">|</span> <span class="token builtin">string</span>
</code></pre></div>
<h3 id="PickerOptionKeys">PickerOptionKeys<a class="doc-anchor" href="#PickerOptionKeys">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">interface</span> <span class="token class-name">PickerOptionKeys</span> <span class="token punctuation">&#123;</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-picker-height</span><span class="token punctuation">:</span> 480rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-picker-item-height</span><span class="token punctuation">:</span> 96rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-picker-item-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-picker-item-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-body-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-picker-indicator-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-picker-mask-bg-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>
      to bottom<span class="token punctuation">,</span>
      <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg-rgb<span class="token punctuation">)</span><span class="token punctuation">,</span> 0.95<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg-rgb<span class="token punctuation">)</span><span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">linear-gradient</span><span class="token punctuation">(</span>
      to top<span class="token punctuation">,</span>
      <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg-rgb<span class="token punctuation">)</span><span class="token punctuation">,</span> 0.95<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg-rgb<span class="token punctuation">)</span><span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,k=s({__name:"README",setup(o){return a(),(e,c)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{k as default};
