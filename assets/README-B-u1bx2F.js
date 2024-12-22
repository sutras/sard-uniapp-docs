import{M as a}from"./index-CO-qPfwO.js";import{d as s,c as t,o as p}from"./index-Cb7a49sd.js";const o=`<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>用于页面中信息快速检索，可以根据目录中的页码快速找到所需的内容。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Indexes <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/indexes/indexes.vue'</span>
<span class="token keyword">import</span> IndexesAnchor <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/indexes-anchor/indexes-anchor.vue'</span>
</code></pre>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p><code>Indexes</code> 里面的 <code>IndexesAnchor</code> 组件会被收集起来，用于放置锚点和自动生成右侧的导航。导航和锚点会有一个联动效果。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>model<span class="token punctuation">"</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>model.phone<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入手机号<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#prepend</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span>
            <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inherit<span class="token punctuation">"</span></span>
            <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>padding-left: 0<span class="token punctuation">"</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toAreaCode<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
            +&#123;&#123; model.areaCode &#125;&#125;
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span>
              <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>caret-down<span class="token punctuation">"</span></span>
              <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top: 4rpx; margin-left: 4rpx<span class="token punctuation">"</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-input</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">areaCode</span><span class="token operator">:</span> <span class="token string">'86'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">toAreaCode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/pages/components/indexes/demo/AreaCode</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token function-variable function">selectAreaCode</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        model<span class="token punctuation">.</span>areaCode <span class="token operator">=</span> data<span class="token punctuation">.</span>code
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><p><code>AreaCode.vue</code></p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span> <span class="token attr-name">emphasis</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
        display: flex;
        flex-direction: column;
        height: calc(100vh - var(--window-top));
      <span class="token punctuation">"</span></span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-search</span>
        <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex: none; cursor: pointer<span class="token punctuation">"</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>搜索<span class="token punctuation">"</span></span>
        <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span>
        <span class="token attr-name">readonly</span>
        <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toAreaCodeSearch<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-indexes</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex: 1; overflow: hidden<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>section in sectionList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>section.anchor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-indexes-anchor</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>section.anchor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-indexes-anchor</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">inlaid</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
              <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in section.children<span class="token punctuation">"</span></span>
              <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.code<span class="token punctuation">"</span></span>
              <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.title<span class="token punctuation">"</span></span>
              <span class="token attr-name">hover</span>
              <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSelect(item.code)<span class="token punctuation">"</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">env</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-indexes</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> areaCode <span class="token keyword">from</span> <span class="token string">'tel-area-code/data.json'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getCurrentInstance<span class="token punctuation">,</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">interface</span> <span class="token class-name">SectionItem</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string
  <span class="token literal-property property">code</span><span class="token operator">:</span> string
<span class="token punctuation">&#125;</span>

<span class="token keyword">interface</span> <span class="token class-name">Section</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">anchor</span><span class="token operator">:</span> string
  <span class="token literal-property property">children</span><span class="token operator">:</span> SectionItem<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">getSectionList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token literal-property property">list</span><span class="token operator">:</span> Section<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> <span class="token literal-property property">map</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> Section<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
  areaCode<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> firstLetter <span class="token operator">=</span> item<span class="token punctuation">.</span>pinyin<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> section <span class="token operator">=</span> map<span class="token punctuation">[</span>firstLetter<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>section<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      section <span class="token operator">=</span> map<span class="token punctuation">[</span>firstLetter<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">anchor</span><span class="token operator">:</span> firstLetter<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span>
      list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>section<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
    section<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> +</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>item<span class="token punctuation">.</span>code<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> item<span class="token punctuation">.</span>code<span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  list<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span> b<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> list
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> sectionList <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Section<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token function">getSectionList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> eventChannel <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?.</span>proxy <span class="token keyword">as</span> any
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getOpenerEventChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> any

<span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">code</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  uni<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'selectAreaCode'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
        code<span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">toAreaCodeSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/pages/components/indexes/demo/AreaCodeSearch</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token function-variable function">selectAreaCode</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token function">onSelect</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><p><code>AreaCodeSearch.vue</code></p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span> <span class="token attr-name">emphasis</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
        display: flex;
        flex-direction: column;
        height: calc(100vh - var(--window-top));
      <span class="token punctuation">"</span></span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-search</span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchValue<span class="token punctuation">"</span></span>
        <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex: none<span class="token punctuation">"</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>搜索<span class="token punctuation">"</span></span>
        <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span>
        <span class="token attr-name">focus</span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token property">overflow</span><span class="token punctuation">:</span> hidden</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-view</span> <span class="token attr-name">scroll-y</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">inlaid</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
              <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in searchResult<span class="token punctuation">"</span></span>
              <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.code<span class="token punctuation">"</span></span>
              <span class="token attr-name">hover</span>
              <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSelect(item)<span class="token punctuation">"</span></span>
            <span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(frag, i) in item.titleFrag<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span>
                      <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>\`color: $&#123;
                        i % 2 !== 0 ? 'var(--sar-primary)' : ''
                      &#125;\`<span class="token punctuation">"</span></span>
                    <span class="token punctuation">></span></span>
                      &#123;&#123; frag &#125;&#125;
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">env</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll-view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> throttle <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> areaCode <span class="token keyword">from</span> <span class="token string">'tel-area-code/data.json'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> computed<span class="token punctuation">,</span> getCurrentInstance<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">interface</span> <span class="token class-name">SearchItem</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string
  <span class="token literal-property property">code</span><span class="token operator">:</span> string
  <span class="token literal-property property">pinyin</span><span class="token operator">:</span> string
<span class="token punctuation">&#125;</span>

<span class="token keyword">interface</span> <span class="token class-name">SearchResultItem</span> <span class="token keyword">extends</span> <span class="token class-name">SearchItem</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">titleFrag</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> searchList <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token literal-property property">list</span><span class="token operator">:</span> SearchItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  areaCode<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> +</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>item<span class="token punctuation">.</span>code<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> item<span class="token punctuation">.</span>code<span class="token punctuation">,</span>
      <span class="token literal-property property">pinyin</span><span class="token operator">:</span> item<span class="token punctuation">.</span>pinyin<span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  list<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a<span class="token punctuation">.</span>pinyin<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span> b<span class="token punctuation">.</span>pinyin<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> list
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> searchValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> searchResult <span class="token operator">=</span> ref<span class="token operator">&lt;</span>SearchResultItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> search <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  searchResult<span class="token punctuation">.</span>value <span class="token operator">=</span> searchValue<span class="token punctuation">.</span>value
    <span class="token operator">?</span> searchList<span class="token punctuation">.</span>value
        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>searchValue<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
          <span class="token operator">...</span>item<span class="token punctuation">,</span>
          <span class="token literal-property property">titleFrag</span><span class="token operator">:</span> item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">((?:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>searchValue<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">)+)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">350</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>searchValue<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> eventChannel <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?.</span>proxy <span class="token keyword">as</span> any
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getOpenerEventChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> any

<span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> SearchItem</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  uni<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'selectAreaCode'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> item<span class="token punctuation">.</span>code<span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="IndexesProps">IndexesProps<a class="doc-anchor" href="#IndexesProps">#</a></h3>
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
<td>设置当前活动的锚点</td>
<td>number | string</td>
<td>-</td>
</tr>
</tbody>
</table></div><h3 id="IndexesSlots">IndexesSlots<a class="doc-anchor" href="#IndexesSlots">#</a></h3>
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
</table></div><h3 id="IndexesEmits">IndexesEmits<a class="doc-anchor" href="#IndexesEmits">#</a></h3>
<div class="doc-table-responsive"><table><thead>
<tr>
<th>事件</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>索引发生变更时触发</td>
<td>(name: number | string) =&gt; void</td>
</tr>
</tbody>
</table></div><h3 id="IndexesExpose">IndexesExpose<a class="doc-anchor" href="#IndexesExpose">#</a></h3>
<div class="doc-table-responsive"><table><thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>scrollTo</td>
<td>滚动到指定锚点</td>
<td>(name: string | number) =&gt; void</td>
</tr>
<tr>
<td>update</td>
<td>更新锚点；当异步获取锚点数据或数据变动时需要手动调用此方法</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div><h3 id="IndexesAnchorProps">IndexesAnchorProps<a class="doc-anchor" href="#IndexesAnchorProps">#</a></h3>
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
<td>name</td>
<td>索引锚点名称</td>
<td>number | string</td>
<td>-</td>
</tr>
</tbody>
</table></div><h3 id="IndexesAnchorSlots">IndexesAnchorSlots<a class="doc-anchor" href="#IndexesAnchorSlots">#</a></h3>
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
<td>自定义锚点内容，会覆盖 <code>name</code> 属性</td>
<td>-</td>
</tr>
</tbody>
</table></div><h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-indexes-anchor-padding</span><span class="token punctuation">:</span> 0 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-anchor-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-anchor-line-height</span><span class="token punctuation">:</span> 64rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-anchor-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-anchor-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-body-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-indexes-nav-padding-right</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-indexes-nav-item-font-size</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-nav-item-size</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-nav-item-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-body-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-nav-item-active-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-nav-item-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-indexes-hint-size</span><span class="token punctuation">:</span> 100rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-hint-margin-right</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-hint-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-hint-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-indexes-hint-text-font-size</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-indexes-hint-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre>
</div>`,i=s({__name:"README",setup(e){const n={nav:"组件",title:"Indexes",subtitle:"索引",group:"导航组件"};return(c,l)=>(p(),t(a,{content:o,fm:n}))}});export{i as default};
