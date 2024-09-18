import{u as a}from"./useCodeTool-CDBKIPxk.js";import{d as s,c as n,o as t}from"./index-TW30QNeX.js";const p=`<h1 id="Qrcode二维码sup14sup">Qrcode 二维码 <sup>1.4+</sup><a class="doc-anchor" href="#Qrcode二维码sup14sup">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>将一段文字或链接编码成图形，以便光学扫描仪或手机摄像头快速读取。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Qrcode <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/qrcode/qrcode.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>设置 <code>text</code> 属性即可渲染一个二维码图片。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-qrcode</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://sutras.github.io/sard-uniapp-docs/mobile/<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="呈现的大小">呈现的大小<a class="doc-anchor" href="#呈现的大小">#</a></h3>
<p>使用 <code>size</code> 属性设置二维码呈现的大小，可以设置为任意尺寸单位。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-qrcode</span>
    <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://sutras.github.io/sard-uniapp-docs/mobile/<span class="token punctuation">"</span></span>
    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400rpx<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="画板的大小">画板的大小<a class="doc-anchor" href="#画板的大小">#</a></h3>
<p>画板大小决定了二维码图片的分辨率。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-qrcode</span>
    <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://sutras.github.io/sard-uniapp-docs/mobile/<span class="token punctuation">"</span></span>
    <span class="token attr-name">:canvas-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>
    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200px<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>通过设置 <code>color</code> 自定义二维码暗模块颜色，
通过设置 <code>bg-color</code> 自定义二维码亮模块颜色，即背景颜色。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-qrcode</span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://sutras.github.io/sard-uniapp-docs/mobile/<span class="token punctuation">"</span></span>
      <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#fd7e14<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-qrcode</span>
      <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 20rpx<span class="token punctuation">"</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://sutras.github.io/sard-uniapp-docs/mobile/<span class="token punctuation">"</span></span>
      <span class="token attr-name">bg-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#91ffde<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="安静区域模块数">安静区域模块数<a class="doc-anchor" href="#安静区域模块数">#</a></h3>
<p>可以简单把设置 <code>quiet-zone-modules</code> 当成设置二维码内边距。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-qrcode</span>
    <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://sutras.github.io/sard-uniapp-docs/mobile/<span class="token punctuation">"</span></span>
    <span class="token attr-name">:quiet-zone-modules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="错误纠错级别">错误纠错级别<a class="doc-anchor" href="#错误纠错级别">#</a></h3>
<p>错误纠错级别越高，二维码抗磨损、抗脏能力越强，同时二维码就越大，可容纳的字符容量越小。</p>
<p><code>ecl</code> 属性用于设置错误纠错级别。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-qrcode</span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://sutras.github.io/sard-uniapp-docs/mobile/<span class="token punctuation">"</span></span>
      <span class="token attr-name">:ecl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ecl<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-radio-group</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ecl<span class="token punctuation">"</span></span>
      <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eclOptions<span class="token punctuation">"</span></span>
      <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>
      <span class="token attr-name">root-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>margin-top: 20rpx<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-radio-group</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> eclOptions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'L'</span><span class="token punctuation">,</span> <span class="token string">'M'</span><span class="token punctuation">,</span> <span class="token string">'Q'</span><span class="token punctuation">,</span> <span class="token string">'H'</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> ecl <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'M'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<p>下面是不同纠错级别的纠错能力表。</p>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>错误纠错级别</th>
<th>错误纠错能力</th>
</tr>
</thead>
<tbody>
<tr>
<td>L</td>
<td>恢复 7%的数据</td>
</tr>
<tr>
<td>M</td>
<td>恢复 15%的数据</td>
</tr>
<tr>
<td>Q</td>
<td>恢复 25%的数据</td>
</tr>
<tr>
<td>H</td>
<td>恢复 30%的数据</td>
</tr>
</tbody>
</table></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="QrcodeProps">QrcodeProps<a class="doc-anchor" href="#QrcodeProps">#</a></h3>
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
<td>text</td>
<td>要编码的字符串数据</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>ecl</td>
<td>错误纠错级别</td>
<td>'L' | 'M' | 'Q' | 'H'</td>
<td>'M'</td>
</tr>
<tr>
<td>size</td>
<td>二维码呈现的大小</td>
<td>string</td>
<td>320rpx</td>
</tr>
<tr>
<td>canvas-size</td>
<td>画板的大小</td>
<td>number</td>
<td>400</td>
</tr>
<tr>
<td>color</td>
<td>二维码颜色</td>
<td>string</td>
<td>#000</td>
</tr>
<tr>
<td>bg-color</td>
<td>二维码背景颜色</td>
<td>string</td>
<td>#fff</td>
</tr>
<tr>
<td>quiet-zone-modules</td>
<td>安静区域模块数</td>
<td>number</td>
<td>2</td>
</tr>
</tbody>
</table></div>
`,r=s({__name:"README",setup(o){return a(),(c,e)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{r as default};
