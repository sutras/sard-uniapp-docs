import{u as a}from"./useCodeTool-CYMNuMGs.js";import{d as t,c as s,o as n}from"./index-CR-0CcvU.js";const p=`<h1 id="DatetimePickerInput日期时间输入框">DatetimePickerInput 日期时间输入框<a class="doc-anchor" href="#DatetimePickerInput日期时间输入框">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>组合了日期时间、弹出框、输入框组件，实现了便捷快速的日期选择功能。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> DatetimePickerInput <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/datetime-picker-input/datetime-picker-input.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>日期时间输入框组件接收日期时间组件相同的属性，另外可以通过 <code>title</code> 和 <code>placeholder</code> 属性设置弹出框标题和输入框占位文本。</p>
<p>在点击输入框后会显示包裹日期时间的弹出框。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list</span> <span class="token attr-name">card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-datetime-picker-input</span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
        <span class="token attr-name">clearable</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yMd<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list-item</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>当前值：<span class="token punctuation">"</span></span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date ? formatDate(date, 'YYYY-MM-DD') : String(date)<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>设置为当前时间<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span>
      <span class="token attr-name">hover</span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date = new Date()<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>清空<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span> <span class="token attr-name">hover</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date = undefined<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-list</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> formatDate <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> date <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Date<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="DatetimePickerInputProps">DatetimePickerInputProps<a class="doc-anchor" href="#DatetimePickerInputProps">#</a></h3>
<p>继承 <a href="./#/components/datetime-picker#DatetimePickerProps"><code>DatetimePickerProps</code></a> 并有以下额外属性：</p>
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
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>只读状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>clearable</td>
<td>是否显示清空按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框占位符内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>visible (v-model)</td>
<td>是否显示弹出框</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>title</td>
<td>弹出框标题，不设置则取 <code>placeholder</code> 值</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>outlet-format</td>
<td>输出到输入框的日期格式，不指定则根据 <code>type</code> 属性自动生成格式，规则如下</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>validate-event</td>
<td>是否触发表单验证</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3 id="codetypecode到codeoutletFormatcode的映射"><code>type</code> 到 <code>outletFormat</code> 的映射：<a class="doc-anchor" href="#codetypecode到codeoutletFormatcode的映射">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> mapTypeFormat <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  y<span class="token operator">:</span> <span class="token string">'YYYY'</span><span class="token punctuation">,</span>
  yM<span class="token operator">:</span> <span class="token string">'YYYY-MM'</span><span class="token punctuation">,</span>
  yMd<span class="token operator">:</span> <span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">,</span>
  yMdhm<span class="token operator">:</span> <span class="token string">'YYYY-MM-DD HH:mm'</span><span class="token punctuation">,</span>
  yMdhms<span class="token operator">:</span> <span class="token string">'YYYY-MM-DD HH:mm:ss'</span><span class="token punctuation">,</span>
  hm<span class="token operator">:</span> <span class="token string">'HH:mm'</span><span class="token punctuation">,</span>
  hms<span class="token operator">:</span> <span class="token string">'HH:mm:ss'</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="outletFormat格式">outletFormat 格式<a class="doc-anchor" href="#outletFormat格式">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>字符</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>YYYY</td>
<td>四位年份</td>
</tr>
<tr>
<td>YY</td>
<td>两位年份</td>
</tr>
<tr>
<td>MM</td>
<td>两位月份</td>
</tr>
<tr>
<td>M</td>
<td>一位月份</td>
</tr>
<tr>
<td>DD</td>
<td>两位日期</td>
</tr>
<tr>
<td>D</td>
<td>一位日期</td>
</tr>
<tr>
<td>HH</td>
<td>两位二十四制小时</td>
</tr>
<tr>
<td>H</td>
<td>一位二十四制小时</td>
</tr>
<tr>
<td>hh</td>
<td>两位十二制小时</td>
</tr>
<tr>
<td>h</td>
<td>一位十二制小时</td>
</tr>
<tr>
<td>mm</td>
<td>两位分钟</td>
</tr>
<tr>
<td>m</td>
<td>一位分钟</td>
</tr>
<tr>
<td>ss</td>
<td>两位秒数</td>
</tr>
<tr>
<td>s</td>
<td>一位秒数</td>
</tr>
<tr>
<td>SSS</td>
<td>毫秒数</td>
</tr>
</tbody>
</table></div>
<h3 id="DatetimePickerInputEmits">DatetimePickerInputEmits<a class="doc-anchor" href="#DatetimePickerInputEmits">#</a></h3>
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
<td>日期时间输入组件值改变时触发</td>
<td>(value: Date | undefined) =&gt; void</td>
</tr>
<tr>
<td>update:visible</td>
<td>弹出框显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
</tr>
</tbody>
</table></div>
`,r=t({__name:"README",setup(e){return a(),(o,c)=>(n(),s("div",{class:"doc-content",innerHTML:p}))}});export{r as default};
