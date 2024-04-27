import{u as a}from"./useCodeTool-mazcC0Cn.js";import{d as n,c as s,o as t}from"./index-ybeXHrRA.js";const p=`<h1 id="Form表单">Form 表单<a class="doc-anchor" href="#Form表单">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>用于数据采集，由各种类型的表单域组成，可对数据进行校验、清除、重置、提交等操作。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Form <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/form/form.vue'</span>
<span class="token keyword">import</span> FormItem <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/form-item/form-item.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="典型表单">典型表单<a class="doc-anchor" href="#典型表单">#</a></h3>
<p>最基础的表单包括各种输入表单项，比如 <code>input、picker-input、radio、checkbox</code> 等。</p>
<p>在每一个 <code>form</code> 组件中，你需要一个 <code>form-item</code> 字段作为输入项的容器，用于获取值与验证值。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form<span class="token punctuation">"</span></span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>240rpx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span>
          <span class="token attr-name">inlaid</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.name<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please input Activity name<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity zone<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-picker-input</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.region<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please select your zone<span class="token punctuation">"</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please select your zone<span class="token punctuation">"</span></span>
          <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
            &#123;
              label: 'Zone one',
              value: 'shanghai',
            &#125;,
            &#123;
              label: 'Zone two',
              value: 'beijing',
            &#125;,
          ]<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity time<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-datetime-picker-input</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.date1<span class="token punctuation">"</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yMd<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Pick a date<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-datetime-picker-input</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.date2<span class="token punctuation">"</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hms<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Pick a time<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Instant delivery<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.delivery<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity type<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.type<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Online activities<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Online activities<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span>
            <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Promotion activities<span class="token punctuation">"</span></span>
            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Promotion activities<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Offline activities<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Offline activities<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span>
            <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Simple brand exposure<span class="token punctuation">"</span></span>
            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Simple brand exposure<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-checkbox-group</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Resources<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.resource<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sponsor<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sponsor<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Venue<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Venue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio-group</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity form<span class="token punctuation">"</span></span> <span class="token attr-name">label-valign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>start<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span>
          <span class="token attr-name">inlaid</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.desc<span class="token punctuation">"</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please input Activity form<span class="token punctuation">"</span></span>
          <span class="token attr-name">show-count</span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 20rpx<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          Cancel
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token comment">// do not use same name with ref</span>
<span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">date1</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">date2</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">delivery</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resource</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'submit!'</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="方向与对齐">方向与对齐<a class="doc-anchor" href="#方向与对齐">#</a></h3>
<p>使用 <code>direction</code> 设置表单域标签水平或垂直排列；
使用 <code>label-align</code> 或 <code>label-valign</code> 设置标签表单域标签水平或垂直方向的对齐方式；
使用 <code>star-position</code> 属性设置星号居左或居右。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-demo</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-title</span><span class="token punctuation">></span></span>排列方向<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-title</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>direction<span class="token punctuation">"</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>vertical<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>horizontal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio-group</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-title</span><span class="token punctuation">></span></span>水平对齐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-title</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>labelAlign<span class="token punctuation">"</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>start<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>center<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>end<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio-group</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-title</span><span class="token punctuation">></span></span>垂直对齐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-title</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>labelValign<span class="token punctuation">"</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>start<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>center<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>end<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio-group</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-title</span><span class="token punctuation">></span></span>星号位置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-title</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>starPosition<span class="token punctuation">"</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio-group</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-demo</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-demo</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span>
        <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200rpx<span class="token punctuation">"</span></span>
        <span class="token attr-name">:direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>direction<span class="token punctuation">"</span></span>
        <span class="token attr-name">:label-align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>labelAlign<span class="token punctuation">"</span></span>
        <span class="token attr-name">:label-valign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>labelValign<span class="token punctuation">"</span></span>
        <span class="token attr-name">:star-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>starPosition<span class="token punctuation">"</span></span>
        <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formLabelAlign<span class="token punctuation">"</span></span>
        <span class="token attr-name">card</span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formLabelAlign.name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity zone<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formLabelAlign.region<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity form<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formLabelAlign.type<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-demo</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> labelAlign <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'start'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> labelValign <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'center'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> direction <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'horizontal'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> starPosition <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'left'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> formLabelAlign <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="表单校验">表单校验<a class="doc-anchor" href="#表单校验">#</a></h3>
<p><code>Form</code> 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。</p>
<p><code>Form</code> 组件提供了表单验证的功能，只需为 <code>rules</code> 属性传入约定的验证规则，并将 <code>FormItem</code> 的 <code>name</code> 属性设置为需要验证的特殊键值即可。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleFormRef<span class="token punctuation">"</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm<span class="token punctuation">"</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rules<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity name<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">inlaid</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.name<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity zone<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>region<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-picker-input</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.region<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity zone<span class="token punctuation">"</span></span>
          <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
            &#123; label: 'Zone one', value: 'shanghai' &#125;,
            &#123; label: 'Zone two', value: 'beijing' &#125;,
          ]<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity count<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>count<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-picker-input</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.count<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity count<span class="token punctuation">"</span></span>
          <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity time<span class="token punctuation">"</span></span> <span class="token attr-name">required</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-datetime-picker-input</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.date1<span class="token punctuation">"</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yMd<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Pick a date<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">:show-star</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-datetime-picker-input</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.date2<span class="token punctuation">"</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hms<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Pick a time<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Instant delivery<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>delivery<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.delivery<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity type<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>type<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.type<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Online activities<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Online activities<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span>
            <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Promotion activities<span class="token punctuation">"</span></span>
            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Promotion activities<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Offline activities<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Offline activities<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span>
            <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Simple brand exposure<span class="token punctuation">"</span></span>
            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Simple brand exposure<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-checkbox-group</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Resources<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resource<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.resource<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sponsorship<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sponsorship<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Venue<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Venue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio-group</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity form<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>desc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.desc<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submitForm(ruleFormRef)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span>
          <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resetForm(ruleFormRef)<span class="token punctuation">"</span></span>
          <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 20rpx<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          Reset
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>
  toast<span class="token punctuation">,</span>
  type FormRules<span class="token punctuation">,</span>
  type FormExpose<span class="token punctuation">,</span>
  type FieldValidateError<span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">interface</span> <span class="token class-name">RuleForm</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">region</span><span class="token operator">:</span> string
  <span class="token literal-property property">count</span><span class="token operator">:</span> string
  <span class="token literal-property property">date1</span><span class="token operator">:</span> Date <span class="token operator">|</span> <span class="token keyword">undefined</span>
  <span class="token literal-property property">date2</span><span class="token operator">:</span> Date <span class="token operator">|</span> <span class="token keyword">undefined</span>
  <span class="token literal-property property">delivery</span><span class="token operator">:</span> boolean
  <span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token literal-property property">resource</span><span class="token operator">:</span> string
  <span class="token literal-property property">desc</span><span class="token operator">:</span> string
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> ruleFormRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ruleForm <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>RuleForm<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Hello'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">date1</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">date2</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">delivery</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resource</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> rules <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>FormRules<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Please input Activity name'</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'blur'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Length should be 3 to 5'</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'blur'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Please select Activity zone'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'change'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Please select Activity count'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'change'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">date1</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Please pick a date'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'change'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">date2</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Please pick a time'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'change'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'array'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Please select at least one activity type'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'change'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resource</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Please select activity resource'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'change'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Please input activity form'</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'blur'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">submitForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">formEl<span class="token operator">?</span><span class="token operator">:</span> FormExpose</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>formEl<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">&#125;</span>

  formEl
    <span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'Success!'</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success!'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> FieldValidateError<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'error submit!'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">resetForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">formEl<span class="token operator">?</span><span class="token operator">:</span> FormExpose</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>formEl<span class="token punctuation">)</span> <span class="token keyword">return</span>
  formEl<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>idx <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>idx <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义校验规则">自定义校验规则<a class="doc-anchor" href="#自定义校验规则">#</a></h3>
<p>这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。</p>
<p>本例还使用 <code>validate</code> 插槽为输入框添加了表示校验中状态的反馈图标。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleFormRef<span class="token punctuation">"</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm<span class="token punctuation">"</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rules<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.pass<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Confirm<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkPass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.checkPass<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Age<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#validate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123; state &#125;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ruleForm.age<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#append</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-loading</span>
                <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>state === 'validating'<span class="token punctuation">"</span></span>
                <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>var(--sar-tertiary-color)<span class="token punctuation">"</span></span>
              <span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-input</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submitForm(ruleFormRef)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span>
          <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 20rpx<span class="token punctuation">"</span></span>
          <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resetForm(ruleFormRef)<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          Reset
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type FormRules<span class="token punctuation">,</span> type FormExpose <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> ruleFormRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">checkAge</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'Please input the age'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'Please input digits'</span><span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'Age must be greater than 18'</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">validatePass</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token string">'Please input the password'</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ruleForm<span class="token punctuation">.</span>checkPass <span class="token operator">!==</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ruleFormRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">&#125;</span>
      ruleFormRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'checkPass'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> <span class="token function-variable function">validatePass2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token string">'Please input the password again'</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> ruleForm<span class="token punctuation">.</span>pass<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token string">"Two inputs don't match!"</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> ruleForm <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">pass</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">checkPass</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> rules <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>FormRules<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">pass</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">validator</span><span class="token operator">:</span> validatePass<span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'blur'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">checkPass</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">validator</span><span class="token operator">:</span> validatePass2<span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'blur'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">validator</span><span class="token operator">:</span> checkAge<span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'blur'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">submitForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">formEl<span class="token operator">?</span><span class="token operator">:</span> FormExpose</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>formEl<span class="token punctuation">)</span> <span class="token keyword">return</span>
  formEl
    <span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'Success!'</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success!'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'error submit!'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">resetForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">formEl</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>formEl<span class="token punctuation">)</span> <span class="token keyword">return</span>
  formEl<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="添加删除表单项">添加/删除表单项<a class="doc-anchor" href="#添加删除表单项">#</a></h3>
<p>除了一次通过表单组件上的所有验证规则外. 您也可以动态地通过验证规则或删除单个表单字段的规则。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicValidateForm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
          &#123;
            required: true,
            message: 'Please input email address',
            trigger: 'blur',
          &#125;,
          &#123;
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          &#125;,
        ]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicValidateForm.email<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(domain, index) in dynamicValidateForm.domains<span class="token punctuation">"</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>domain.key<span class="token punctuation">"</span></span>
        <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>Domain' + index<span class="token punctuation">"</span></span>
        <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['domains', index, 'value']<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
          required: true,
          message: 'domain can not be null',
        &#125;<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span> <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span> <span class="token property">gap</span><span class="token punctuation">:</span> 10rpx</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>domain.value<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mild<span class="token punctuation">"</span></span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>removeDomain(domain)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Delete
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submitForm(formRef)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span>
          <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 20rpx<span class="token punctuation">"</span></span>
          <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addDomain<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          New domain
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span>
          <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 20rpx<span class="token punctuation">"</span></span>
          <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resetForm(formRef)<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          Reset
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type FormExpose <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> formRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> dynamicValidateForm <span class="token operator">=</span> reactive<span class="token operator">&lt;</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">domains</span><span class="token operator">:</span> DomainItem<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> string
<span class="token punctuation">&#125;</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">domains</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">interface</span> <span class="token class-name">DomainItem</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> number
  <span class="token literal-property property">value</span><span class="token operator">:</span> string
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">removeDomain</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> DomainItem</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> index <span class="token operator">=</span> dynamicValidateForm<span class="token punctuation">.</span>domains<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    dynamicValidateForm<span class="token punctuation">.</span>domains<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">addDomain</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  dynamicValidateForm<span class="token punctuation">.</span>domains<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">submitForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">formEl<span class="token operator">?</span><span class="token operator">:</span> FormExpose</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>formEl<span class="token punctuation">)</span> <span class="token keyword">return</span>
  formEl
    <span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'Success!'</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success!'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'error submit!'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">resetForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">formEl<span class="token operator">?</span><span class="token operator">:</span> FormExpose</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>formEl<span class="token punctuation">)</span> <span class="token keyword">return</span>
  formEl<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="简单登录框">简单登录框<a class="doc-anchor" href="#简单登录框">#</a></h3>
<p>基本的表单数据域控制展示，包含布局、初始化、验证、提交。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[&#123; required: true, message: 'Please input your username!' &#125;]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.username<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[&#123; required: true, message: 'Please input your password!' &#125;]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.password<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>remember<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span> <span class="token attr-name"><span class="token namespace">v-model:</span>checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.remember<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          Remember me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-checkbox</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submitForm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> toRaw <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type FormExpose<span class="token punctuation">,</span> type FieldValidateError <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> formRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">interface</span> <span class="token class-name">FormState</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> string
  <span class="token literal-property property">password</span><span class="token operator">:</span> string
  <span class="token literal-property property">remember</span><span class="token operator">:</span> boolean
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> formState <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>FormState<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">remember</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">submitForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  formRef<span class="token punctuation">.</span>value
    <span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'Success!'</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>formState<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> FieldValidateError<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="Label宽度">Label 宽度<a class="doc-anchor" href="#Label宽度">#</a></h3>
<p>通过 <code>label-width</code> 属性设置标签宽度。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200rpx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Instant delivery<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.delivery<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity type<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.type<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Online<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-checkbox</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Promotion<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-checkbox</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Offline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-checkbox</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-checkbox-group</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Resources<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.resource<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sponsor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Venue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio-group</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activity form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.desc<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 20rpx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          Cancel
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive<span class="token punctuation">,</span> toRaw<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> type UnwrapRef <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> type FormExpose <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> formRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">interface</span> <span class="token class-name">FormState</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">delivery</span><span class="token operator">:</span> boolean
  <span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token literal-property property">resource</span><span class="token operator">:</span> string
  <span class="token literal-property property">desc</span><span class="token operator">:</span> string
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> <span class="token literal-property property">formState</span><span class="token operator">:</span> UnwrapRef<span class="token operator">&lt;</span>FormState<span class="token operator">></span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">delivery</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resource</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  formRef<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'submit!'</span><span class="token punctuation">,</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>formState<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="表单只读和禁用">表单只读和禁用<a class="doc-anchor" href="#表单只读和禁用">#</a></h3>
<p>设置表单组件禁用或只读，仅对 <code>sard</code> 组件有效。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>只读<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#value</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formReadonly<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>禁用<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#value</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formDisabled<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span>
      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formDisabled<span class="token punctuation">"</span></span>
      <span class="token attr-name">:readonly</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formReadonly<span class="token punctuation">"</span></span>
      <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200rpx<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Checkbox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkboxValue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Apple<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-checkbox</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pear<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Pear<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-checkbox</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-checkbox-group</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Radio<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radioValue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Apple<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pear<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Pear<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio-group</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Picker<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-picker-input</span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Picker<span class="token punctuation">"</span></span>
          <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
            &#123;
              label: 'Demo',
              value: 'demo',
            &#125;,
          ]<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Cascader<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-cascader-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Cascader<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DatetimePicker<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-datetime-picker-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DatetimePicker<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Calendar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-calendar-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Calendar<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>range<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Stepper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-stepper</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input[Textarea]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>PasswordInput<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-password-input</span>
          <span class="token attr-name">gap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
          <span class="token attr-name">model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>123<span class="token punctuation">"</span></span>
          <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>height: 80rpx<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Switch<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-switch</span> <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Rate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-rate</span> <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Slider<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-slider</span> <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Upload<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-upload</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> formDisabled <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> formReadonly <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> checkboxValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'apple'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> radioValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'apple'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="登录框">登录框<a class="doc-anchor" href="#登录框">#</a></h3>
<p>下面实现了一个简单的登录框组件。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[&#123; required: true, message: 'Please input your username!' &#125;]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#prepend</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-input</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[&#123; required: true, message: 'Please input your password!' &#125;]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#prepend</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>key<span class="token punctuation">"</span></span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-input</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
          <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
            display: flex;
            align-items: center;
            justify-content: space-between;
          <span class="token punctuation">"</span></span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>remember<span class="token punctuation">"</span></span> <span class="token attr-name">inlaid</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span> <span class="token attr-name"><span class="token namespace">v-model:</span>checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.remember<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              Remember me
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-checkbox</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>height: 60rpx<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              Forgot password
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submitForm<span class="token punctuation">"</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Log in<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span> <span class="token property">align-items</span><span class="token punctuation">:</span> center</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>Or<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>height: 60rpx<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pale-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              register now!
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type FormExpose<span class="token punctuation">,</span> type FieldValidateError <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> formRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">interface</span> <span class="token class-name">FormState</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> string
  <span class="token literal-property property">password</span><span class="token operator">:</span> string
  <span class="token literal-property property">remember</span><span class="token operator">:</span> boolean
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> formState <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>FormState<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">remember</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">submitForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  formRef<span class="token punctuation">.</span>value
    <span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'Success'</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> formState<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> FieldValidateError<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> disabled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token punctuation">(</span>formState<span class="token punctuation">.</span>username <span class="token operator">&amp;&amp;</span> formState<span class="token punctuation">.</span>password<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="嵌套结构与校验信息">嵌套结构与校验信息<a class="doc-anchor" href="#嵌套结构与校验信息">#</a></h3>
<p><code>name</code> 属性支持嵌套数据结构。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['user', 'name']<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[&#123; required: true &#125;]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.user.name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['user', 'email']<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[&#123; type: 'email' &#125;]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.user.email<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['user', 'age']<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Age<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[&#123; type: 'number', min: 0, max: 99 &#125;]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-stepper</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.user.age<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['user', 'website']<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Website<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.user.website<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['user', 'introduction']<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Introduction<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.user.introduction<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> toRaw <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type FormExpose <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> formRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> formState <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">website</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">introduction</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  formRef<span class="token punctuation">.</span>value
    <span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'Success'</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>formState<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'fail!'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义表单控件">自定义表单控件<a class="doc-anchor" href="#自定义表单控件">#</a></h3>
<p>自定义或第三方的表单控件，也可以与 <code>Form</code> 组件一起使用。只要该组件注入 <code>useFormItemContext</code> 并调用相应方法。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>price<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Price<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[&#123; validator: checkPrice &#125;]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>price-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.price<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> toRaw <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> PriceInput<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> type Currency <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./PriceInput.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type FormExpose <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> formRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> formState <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">currency</span><span class="token operator">:</span> <span class="token string">'rmb'</span> <span class="token keyword">as</span> Currency<span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  formRef<span class="token punctuation">.</span>value
    <span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'Success'</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Received values from form: '</span><span class="token punctuation">,</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>formState<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'Fail'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">checkPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">number</span><span class="token operator">:</span> number <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>number <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">return</span> <span class="token string">'Price must be greater than zero!'</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<p><code>PriceInput</code> 组件：</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span> <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span> <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token property">gap</span><span class="token punctuation">:</span> 20rpx</span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
      <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modelValue.number<span class="token punctuation">"</span></span>
      <span class="token attr-name"><span class="token namespace">@update:</span>model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onNumberChange<span class="token punctuation">"</span></span>
      <span class="token attr-name">:validate-event</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-picker-input</span>
      <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modelValue.currency<span class="token punctuation">"</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currency<span class="token punctuation">"</span></span>
      <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
        &#123; value: 'rmb', label: 'RMB' &#125;,
        &#123; value: 'dollar', label: 'Dollar' &#125;,
      ]<span class="token punctuation">"</span></span>
      <span class="token attr-name"><span class="token namespace">@update:</span>model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onCurrencyChange<span class="token punctuation">"</span></span>
      <span class="token attr-name">:validate-event</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useFormItemContext<span class="token punctuation">,</span> type FormItemContext <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">export</span> type Currency <span class="token operator">=</span> <span class="token string">'rmb'</span> <span class="token operator">|</span> <span class="token string">'dollar'</span>

<span class="token keyword">interface</span> <span class="token class-name">PriceValue</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> number
  <span class="token literal-property property">currency</span><span class="token operator">:</span> Currency
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">modelValue</span><span class="token operator">:</span> PriceValue
<span class="token punctuation">&#125;</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> emit <span class="token operator">=</span> defineEmits<span class="token operator">&lt;</span><span class="token punctuation">&#123;</span>
  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">'update:model-value'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> PriceValue<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">&#125;</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> formItemContext <span class="token operator">=</span> <span class="token function">useFormItemContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> FormItemContext

<span class="token keyword">const</span> <span class="token function-variable function">triggerChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">changedValue</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  number<span class="token operator">?</span><span class="token operator">:</span> number
  currency<span class="token operator">?</span><span class="token operator">:</span> Currency
<span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'update:model-value'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> <span class="token operator">...</span>props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span> <span class="token operator">...</span>changedValue <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  formItemContext<span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onNumberChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> newNumber <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>value <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
  <span class="token function">triggerChange</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">number</span><span class="token operator">:</span> newNumber <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onCurrencyChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">newCurrency</span><span class="token operator">:</span> Currency</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">triggerChange</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">currency</span><span class="token operator">:</span> newCurrency <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="复杂的动态增减表单项">复杂的动态增减表单项<a class="doc-anchor" href="#复杂的动态增减表单项">#</a></h3>
<p>这个例子演示了一个表单中包含多个表单控件的情况。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicValidateForm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>area<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Area<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[&#123; required: true, message: 'Missing area' &#125;]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-picker-input</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicValidateForm.area<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Area<span class="token punctuation">"</span></span>
          <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>areas<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(sight, index) in dynamicValidateForm.sights<span class="token punctuation">"</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sight.id<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span> <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token property">gap</span><span class="token punctuation">:</span> 20rpx</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
            <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['sights', index, 'value']<span class="token punctuation">"</span></span>
            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sight<span class="token punctuation">"</span></span>
            <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100rpx<span class="token punctuation">"</span></span>
            <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
              required: true,
              message: 'Missing sight',
            &#125;<span class="token punctuation">"</span></span>
            <span class="token attr-name">inlaid</span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-picker-input</span>
              <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sight.value<span class="token punctuation">"</span></span>
              <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sight<span class="token punctuation">"</span></span>
              <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!dynamicValidateForm.area<span class="token punctuation">"</span></span>
              <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
                (sights[dynamicValidateForm.area] || []).map((a) => (&#123;
                  value: a,
                  label: a,
                &#125;))
              <span class="token punctuation">"</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
            <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['sights', index, 'price']<span class="token punctuation">"</span></span>
            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Price<span class="token punctuation">"</span></span>
            <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100rpx<span class="token punctuation">"</span></span>
            <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
              required: true,
              message: 'Missing price',
            &#125;<span class="token punctuation">"</span></span>
            <span class="token attr-name">inlaid</span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">inlaid</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Price<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sight.price<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mild<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>removeSight(sight)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>minus<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addSight()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plus<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          Add sights
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toRaw <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type FormExpose <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">interface</span> <span class="token class-name">Sights</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> string
  <span class="token literal-property property">price</span><span class="token operator">:</span> string
  <span class="token literal-property property">id</span><span class="token operator">:</span> number
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> areas <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Beijing'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Beijing'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Shanghai'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Shanghai'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> <span class="token literal-property property">sights</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">Beijing</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Tiananmen'</span><span class="token punctuation">,</span> <span class="token string">'Great Wall'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">Shanghai</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Oriental Pearl'</span><span class="token punctuation">,</span> <span class="token string">'The Bund'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> formRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> dynamicValidateForm <span class="token operator">=</span> reactive<span class="token operator">&lt;</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">sights</span><span class="token operator">:</span> Sights<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> area<span class="token operator">:</span> string <span class="token punctuation">&#125;</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">sights</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">area</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> dynamicValidateForm<span class="token punctuation">.</span>area<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    dynamicValidateForm<span class="token punctuation">.</span>sights <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">removeSight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> Sights</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> index <span class="token operator">=</span> dynamicValidateForm<span class="token punctuation">.</span>sights<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    dynamicValidateForm<span class="token punctuation">.</span>sights<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> <span class="token function-variable function">addSight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  dynamicValidateForm<span class="token punctuation">.</span>sights<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  formRef<span class="token punctuation">.</span>value
    <span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Received values of form:'</span><span class="token punctuation">,</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>dynamicValidateForm<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fail'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="动态增减嵌套字段">动态增减嵌套字段<a class="doc-anchor" href="#动态增减嵌套字段">#</a></h3>
<p>通过数组 <code>name</code> 绑定嵌套字段。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicValidateForm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(user, index) in dynamicValidateForm.users<span class="token punctuation">"</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user.id<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
          <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10rpx;
          <span class="token punctuation">"</span></span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
            <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['users', index, 'first']<span class="token punctuation">"</span></span>
            <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
              required: true,
              message: 'Missing first name',
            &#125;<span class="token punctuation">"</span></span>
            <span class="token attr-name">inlaid</span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">inlaid</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user.first<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>First Name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
            <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['users', index, 'last']<span class="token punctuation">"</span></span>
            <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
              required: true,
              message: 'Missing last name',
            &#125;<span class="token punctuation">"</span></span>
            <span class="token attr-name">inlaid</span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">inlaid</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user.last<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Last Name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mild<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>removeUser(user)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>minus<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addUser()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plus<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          Add user
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toRaw<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type FormExpose <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">first</span><span class="token operator">:</span> string
  <span class="token literal-property property">last</span><span class="token operator">:</span> string
  <span class="token literal-property property">id</span><span class="token operator">:</span> number
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> formRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> dynamicValidateForm <span class="token operator">=</span> reactive<span class="token operator">&lt;</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">users</span><span class="token operator">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">&#125;</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">removeUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> User</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> index <span class="token operator">=</span> dynamicValidateForm<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    dynamicValidateForm<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> <span class="token function-variable function">addUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  dynamicValidateForm<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">last</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  formRef<span class="token punctuation">.</span>value
    <span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'Success'</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Received values of form:'</span><span class="token punctuation">,</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>dynamicValidateForm<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fail'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="动态校验规则">动态校验规则<a class="doc-anchor" href="#动态校验规则">#</a></h3>
<p>根据不同情况执行不同的校验规则。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[&#123; required: true, message: 'Please input your username!' &#125;]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.username<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Nickname<span class="token punctuation">"</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nickname<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
          &#123;
            required: formState.checkNick,
            message: 'Please input your nickname!',
          &#125;,
        ]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.nickname<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkNick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-checkbox</span> <span class="token attr-name"><span class="token namespace">v-model:</span>checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.checkNick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          Nickname is required
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-checkbox</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onCheck<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Check<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> toRaw <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type FormExpose<span class="token punctuation">,</span> type FieldValidateError <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">interface</span> <span class="token class-name">FormState</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> string
  <span class="token literal-property property">nickname</span><span class="token operator">:</span> string
  <span class="token literal-property property">checkNick</span><span class="token operator">:</span> boolean
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> formRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> formState <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>FormState<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">checkNick</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> formState<span class="token punctuation">.</span>checkNick<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    formRef<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'nickname'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span> <span class="token literal-property property">flush</span><span class="token operator">:</span> <span class="token string">'post'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onCheck</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  formRef<span class="token punctuation">.</span>value
    <span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Success:'</span><span class="token punctuation">,</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>formState<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> FieldValidateError<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Failed:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="多表单联动">多表单联动<a class="doc-anchor" href="#多表单联动">#</a></h3>
<p>把一个表单的数据添加到另一个表单。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState<span class="token punctuation">"</span></span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200rpx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>group<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Group Name<span class="token punctuation">"</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[&#123; required: true, message: 'Please input group name!' &#125;]<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.group<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User List<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.users.length<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">inlaid</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user in formState.users<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user.key<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>\`$&#123;user.name&#125; - $&#123;user.age&#125;\`<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>64rpx<span class="token punctuation">"</span></span> <span class="token attr-name">icon-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40rpx<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>( No user yet. )<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span>
          <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 20rpx<span class="token punctuation">"</span></span>
          <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible = true<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          Add User
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dialog</span>
      <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Basic Drawer<span class="token punctuation">"</span></span>
      <span class="token attr-name">:before-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>beforeClose<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modalFormRef<span class="token punctuation">"</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modalFormState<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User Name<span class="token punctuation">"</span></span>
          <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[&#123; required: true &#125;]<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span>
            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modalFormState.name<span class="token punctuation">"</span></span>
            <span class="token attr-name">inlaid</span>
            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input User Name<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User Age<span class="token punctuation">"</span></span>
          <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[&#123; required: true &#125;]<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-stepper</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modalFormState.age<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-dialog</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> toRaw <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type FormExpose<span class="token punctuation">,</span> type FieldValidateError <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">interface</span> <span class="token class-name">UserType</span> <span class="token punctuation">&#123;</span>
  name<span class="token operator">?</span><span class="token operator">:</span> string
  age<span class="token operator">?</span><span class="token operator">:</span> number
  key<span class="token operator">?</span><span class="token operator">:</span> number
<span class="token punctuation">&#125;</span>

<span class="token keyword">interface</span> <span class="token class-name">FormState</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">group</span><span class="token operator">:</span> string
  <span class="token literal-property property">users</span><span class="token operator">:</span> UserType<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> formRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> modalFormRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> formState <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>FormState<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> modalFormState <span class="token operator">=</span> ref<span class="token operator">&lt;</span>UserType<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">beforeClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">type</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'confirm'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> modalFormRef<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      formState<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token operator">...</span>modalFormState<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
      modalFormRef<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  formRef<span class="token punctuation">.</span>value
    <span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Finish:'</span><span class="token punctuation">,</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>formState<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'Success'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> FieldValidateError<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="弹出层中的新建表单">弹出层中的新建表单<a class="doc-anchor" href="#弹出层中的新建表单">#</a></h3>
<p>当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用 <code>Dialog</code> 弹出一个表单，用户填写必要信息后创建新的项。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-demo</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>New Collection<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-demo</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-dialog</span>
      <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Create a new collection<span class="token punctuation">"</span></span>
      <span class="token attr-name">confirm-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Create<span class="token punctuation">"</span></span>
      <span class="token attr-name">cancel-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Cancel<span class="token punctuation">"</span></span>
      <span class="token attr-name">:before-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>beforeClose<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span>
          <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
            &#123;
              required: true,
              message: 'Please input the title of collection!',
            &#125;,
          ]<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.title<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Description<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.description<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modifier<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState.modifier<span class="token punctuation">"</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>public<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Public<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>private<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Private<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio-group</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20rpx</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-dialog</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> toRaw <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type FormExpose<span class="token punctuation">,</span> type FieldValidateError <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">interface</span> <span class="token class-name">Values</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string
  <span class="token literal-property property">description</span><span class="token operator">:</span> string
  <span class="token literal-property property">modifier</span><span class="token operator">:</span> string
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> formRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> formState <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>Values<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modifier</span><span class="token operator">:</span> <span class="token string">'public'</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">beforeClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">type</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'confirm'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> formRef<span class="token punctuation">.</span>value
      <span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token function">toast</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>formState<span class="token punctuation">)</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'formState: '</span><span class="token punctuation">,</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>formState<span class="token punctuation">)</span><span class="token punctuation">)</span>
        formRef<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> FieldValidateError<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Validate Failed:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
        <span class="token keyword">throw</span> error
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="滚动到第一个错误字段">滚动到第一个错误字段<a class="doc-anchor" href="#滚动到第一个错误字段">#</a></h3>
<p>当表单超过一屏，在验证失败后想要将验证错误的表单域定位到屏幕中，可以设置 <code>scroll-to-first-error</code> 属性。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>doc-page</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form</span>
      <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formState<span class="token punctuation">"</span></span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span>
      <span class="token attr-name">scroll-to-first-error</span>
      <span class="token attr-name">:scroll-into-view-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;
        endOffset: footerHeight,
        position,
      &#125;<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-form-item</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, i) in formState<span class="token punctuation">"</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.key<span class="token punctuation">"</span></span>
        <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[i, 'value']<span class="token punctuation">"</span></span>
        <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.label<span class="token punctuation">"</span></span>
        <span class="token attr-name">required</span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token attr-name">min-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300rpx<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.value<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-form</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 160rpx</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-row</span> <span class="token attr-name">gap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20rpx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-col</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-col</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-col</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onReset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>reset<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-col</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-row</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">padding</span><span class="token punctuation">:</span> 20rpx 0</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>position<span class="token punctuation">"</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>start<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>center<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>end<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nearest<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>nearest<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio-group</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>doc-page</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref<span class="token punctuation">,</span> toRaw<span class="token punctuation">,</span> getCurrentInstance <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>
  toast<span class="token punctuation">,</span>
  type FormExpose<span class="token punctuation">,</span>
  type ScrollIntoViewPosition<span class="token punctuation">,</span>
  type FieldValidateError<span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMounted <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> formState <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>
  <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Item'</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'item'</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> i<span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> formRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormExpose<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  formRef<span class="token punctuation">.</span>value
    <span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'formState: '</span><span class="token punctuation">,</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>formState<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> FieldValidateError<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Validate Failed:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onReset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  formRef<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> position <span class="token operator">=</span> ref<span class="token operator">&lt;</span>ScrollIntoViewPosition<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'nearest'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> footerHeight <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  uni
    <span class="token punctuation">.</span><span class="token function">createSelectorQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">in</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">'.footer'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">boundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">result</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      footerHeight<span class="token punctuation">.</span>value <span class="token operator">=</span> result<span class="token punctuation">.</span>height
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.footer</span> <span class="token punctuation">&#123;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 30rpx<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20rpx 32rpx<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>20rpx + <span class="token function">env</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 1px <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span> solid<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="FormProps">FormProps<a class="doc-anchor" href="#FormProps">#</a></h3>
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
<td>model</td>
<td>表单数据对象</td>
<td>Record&lt;string, any&gt;</td>
<td>-</td>
</tr>
<tr>
<td>rules</td>
<td>表单验证规则</td>
<td>FormRules</td>
<td>-</td>
</tr>
<tr>
<td>validate-trigger</td>
<td>设置字段校验的时机</td>
<td>TriggerType</td>
<td>change</td>
</tr>
<tr>
<td>validate-on-rule-change</td>
<td>是否在 <code>rules</code> 属性改变后立即触发一次验证</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>direction</td>
<td>表单排列方向</td>
<td>'horizontal' | 'vertical'</td>
<td>'horizontal'</td>
</tr>
<tr>
<td>label-width</td>
<td>标签宽度</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>label-align</td>
<td>标签水平对齐方式</td>
<td>'start' | 'center' | 'end'</td>
<td>'start'</td>
</tr>
<tr>
<td>label-valign</td>
<td>标签垂直对齐方式</td>
<td>'start' | 'center' | 'end'</td>
<td>'start'</td>
</tr>
<tr>
<td>star-position</td>
<td>必填星号在标签的左边或右边</td>
<td>'left' | 'right'</td>
<td>'left'</td>
</tr>
<tr>
<td>show-rrror</td>
<td>是否显示校验错误信息</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>scroll-to-first-error</td>
<td>当校验失败时，滚动到第一个错误表单项</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用该表单内的所有组件。 如果设置为 <code>true</code>, 它将覆盖内部组件的 <code>disabled</code> 属性</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>是否只读该表单内的所有组件。 如果设置为 <code>true</code>, 它将覆盖内部组件的 <code>readonly</code> 属性</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="FormSlots">FormSlots<a class="doc-anchor" href="#FormSlots">#</a></h3>
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
<h3 id="FormExpose">FormExpose<a class="doc-anchor" href="#FormExpose">#</a></h3>
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
<td>validate</td>
<td>对整个表单的内容进行验证。</td>
<td>(nameList?: FieldName[]) =&gt; Promise<void></td>
</tr>
<tr>
<td>reset</td>
<td>重置表单项，将其值重置为初始值，并移除校验结果。</td>
<td>(nameList?: FieldName[]) =&gt; Promise<void></td>
</tr>
<tr>
<td>clearValidate</td>
<td>清理指定字段的表单验证信息。</td>
<td>(nameList?: FieldName[]) =&gt; Promise<void></td>
</tr>
<tr>
<td>scrollToField</td>
<td>滚动到指定的字段</td>
<td>(name: FieldName) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="FormItemProps">FormItemProps<a class="doc-anchor" href="#FormItemProps">#</a></h3>
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
<td>表单排列方向</td>
<td>'horizontal' | 'vertical'</td>
<td>'horizontal'</td>
</tr>
<tr>
<td>label-width</td>
<td>标签宽度</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>label-align</td>
<td>标签水平对齐方式</td>
<td>'start' | 'center' | 'end'</td>
<td>'start'</td>
</tr>
<tr>
<td>label-valign</td>
<td>标签垂直对齐方式</td>
<td>'start' | 'center' | 'end'</td>
<td>'start'</td>
</tr>
<tr>
<td>star-position</td>
<td>必填星号在标签的左边或右边</td>
<td>'left' | 'right'</td>
<td>'left'</td>
</tr>
<tr>
<td>show-star</td>
<td>是否显示星号，会覆盖验证规则</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>标签文本</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>required</td>
<td>是否为必填项，如不设置，则会根据校验规则确认</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>表单域 <code>model</code> 字段，在使用 <code>validate、reset</code> 方法的情况下，该属性是必填的。</td>
<td>FieldName</td>
<td>-</td>
</tr>
<tr>
<td>rules</td>
<td>表单验证规则</td>
<td>Rule | Rule[]</td>
<td>-</td>
</tr>
<tr>
<td>validate-trigger</td>
<td>设置字段校验的时机</td>
<td>TriggerType</td>
<td>change</td>
</tr>
<tr>
<td>error</td>
<td>表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 <code>error</code>，并显示该错误信息。</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>show-error</td>
<td>是否显示校验错误信息</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>inlaid</td>
<td>去掉边框和内边距，用于嵌入到其他组件中</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="FormItemSlots">FormItemSlots<a class="doc-anchor" href="#FormItemSlots">#</a></h3>
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
<td>validate</td>
<td>同默认插槽，额外接受当前验证状态属性</td>
<td>&#123; state: ValidateState &#125;</td>
</tr>
</tbody>
</table></div>
<h3 id="FormItemExpose">FormItemExpose<a class="doc-anchor" href="#FormItemExpose">#</a></h3>
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
<td>validate</td>
<td>对整个表单的内容进行验证。</td>
<td>(trigger?: string | string[]) =&gt; Promise<void></td>
</tr>
<tr>
<td>reset</td>
<td>重置该表单项，将其值重置为初始值，并移除校验结果。</td>
<td>() =&gt; Promise<void></td>
</tr>
<tr>
<td>clearValidate</td>
<td>清理指定字段的表单验证信息。</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>scrollToField</td>
<td>滚动到当前字段</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>validateMessage</td>
<td>当前验证信息</td>
<td>Ref<string></td>
</tr>
<tr>
<td>validateState</td>
<td>当前验证状态</td>
<td>Ref<ValidateState></td>
</tr>
</tbody>
</table></div>
<h3 id="FormRules">FormRules<a class="doc-anchor" href="#FormRules">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">FormRules</span> <span class="token punctuation">&#123;</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> PropertyKey<span class="token punctuation">]</span><span class="token operator">:</span> Rule <span class="token operator">|</span> Rule<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> FormRules
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="TriggerType">TriggerType<a class="doc-anchor" href="#TriggerType">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">TriggerType</span> <span class="token operator">=</span> <span class="token string">'change'</span> <span class="token operator">|</span> <span class="token string">'blur'</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token string">'change'</span> <span class="token operator">|</span> <span class="token string">'blur'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre></div>
<h3 id="FieldName">FieldName<a class="doc-anchor" href="#FieldName">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">FieldName</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre></div>
<h3 id="ValidateState">ValidateState<a class="doc-anchor" href="#ValidateState">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">ValidateState</span> <span class="token operator">=</span> <span class="token string">''</span> <span class="token operator">|</span> <span class="token string">'success'</span> <span class="token operator">|</span> <span class="token string">'error'</span> <span class="token operator">|</span> <span class="token string">'validating'</span>
</code></pre></div>
<h3 id="Rule">Rule<a class="doc-anchor" href="#Rule">#</a></h3>
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
<td>validator</td>
<td>使用函数自定义验证，具体说明如下</td>
<td>(value: any, rule: Rule) =&gt; Promise&lt;void&gt; | boolean | string | undefined</td>
<td>-</td>
</tr>
<tr>
<td>pattern</td>
<td>通过正则来进行校验</td>
<td>RegExp</td>
<td>-</td>
</tr>
<tr>
<td>message</td>
<td>校验失败的反馈文案</td>
<td>string | (() =&gt; string)</td>
<td>-</td>
</tr>
<tr>
<td>trigger</td>
<td>触发校验的时机</td>
<td>string | string[]</td>
<td>-</td>
</tr>
<tr>
<td>transform</td>
<td>将值转换后再进行校验</td>
<td>(value: any) =&gt; any</td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>使用内置的校验规则</td>
<td>ValidatorType</td>
<td>'string'</td>
</tr>
<tr>
<td>enum</td>
<td>是否匹配枚举中的值（需要将 type 设置为 enum）</td>
<td>(string | number)[]</td>
<td>-</td>
</tr>
<tr>
<td>len</td>
<td>当 <code>type</code> 为字符串（字符串长度）、数值（等于数值）、数组（数组长度）时有效</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>min</td>
<td>当 <code>type</code> 为字符串（字符串最小长度）、数值（最小值）、数组（数组最小长度）时有效</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>max</td>
<td>当 <code>type</code> 为字符串（字符串最大长度）、数值（最大值）、数组（数组最大长度）时有效</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>required</td>
<td>是否为必选字段，当值为空值时 <code>'', [], false, undefined, null</code>，校验不通过</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>whitespace</td>
<td><code>type</code> 为 <code>'string'</code> 时，如果字段仅包含空格则校验不通过</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h4 id="Rulevalidator说明">Rule['validator'] 说明<a class="doc-anchor" href="#Rulevalidator说明">#</a></h4>
<p>当函数返回值为 <code>fulfilled</code> 状态的 <code>Promise</code> 或者 <code>true</code> 则验证通过，否则验证不通过；
<code>Promise.reject</code> 的参数或者返回的字符串会作为错误验证信息，如果返回的不是字符串，则取 <code>Rule['message']</code> 的配置作为错误信息。</p>
<h3 id="ValidatorType">ValidatorType<a class="doc-anchor" href="#ValidatorType">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>string</td>
<td>必须为字符串</td>
</tr>
<tr>
<td>number</td>
<td>必须为数值</td>
</tr>
<tr>
<td>boolean</td>
<td>必须为布尔值</td>
</tr>
<tr>
<td>function</td>
<td>必须为函数</td>
</tr>
<tr>
<td>regexp</td>
<td>必须为 <code>RegExp</code> 类型，或者作为 <code>RegExp()</code> 参数被实例化不会报错的字符串</td>
</tr>
<tr>
<td>integer</td>
<td>必须为数值，且为整数</td>
</tr>
<tr>
<td>float</td>
<td>必须为数值，且为小数</td>
</tr>
<tr>
<td>array</td>
<td>必须为数组</td>
</tr>
<tr>
<td>object</td>
<td>必须为对象，且不为数组和 <code>null</code></td>
</tr>
<tr>
<td>enum</td>
<td>必须存在于 <code>Rule['enum']</code> 中</td>
</tr>
<tr>
<td>date</td>
<td>必须为 <code>Date</code> 类型</td>
</tr>
<tr>
<td>url</td>
<td>必须为 <code>url</code></td>
</tr>
<tr>
<td>hex</td>
<td>必须为 <code>hex</code></td>
</tr>
<tr>
<td>email</td>
<td>必须为邮件</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-form-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-card-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-form-item-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-padding-y</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-form-item-label-width</span><span class="token punctuation">:</span> 176rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-label-margin-right</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-label-margin-bottom</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-label-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-label-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-snug<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-form-item-star-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-star-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-snug<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-star-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-danger<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-star-gap</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-form-item-error-margin-top</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-error-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-error-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-tight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-error-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-danger<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,k=n({__name:"README",setup(o){return a(),(e,c)=>(t(),s("div",{class:"doc-content",innerHTML:p}))}});export{k as default};
