import{M as a}from"./index-CGrAObOf.js";import{d as n,c as t,o as p}from"./index-D4hYIIzu.js";const o=`<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>对图片进行裁剪。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> CropImage <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/crop-image/crop-image.vue'</span>
<span class="token keyword">import</span> CropImageAgent <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/crop-image-agent/crop-image-agent.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> cropImage <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
</code></pre>
</div><h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>先在页面放置代理组件。</p>
<p>接着便可以使用 <code>cropImage</code> 方法对图片进行裁剪。</p>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-crop-image-agent</span> <span class="token punctuation">/></span></span>
</code></pre>
</div><div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>选择图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span>
    <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>aspectFit<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 320rpx<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 320rpx<span class="token punctuation">;</span> <span class="token property">margin-top</span><span class="token punctuation">:</span> 20rpx</span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> cropImage <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  uni<span class="token punctuation">.</span><span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sizeType</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'original'</span><span class="token punctuation">,</span> <span class="token string">'compressed'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'album'</span><span class="token punctuation">,</span> <span class="token string">'camera'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token function">cropImage</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
        <span class="token literal-property property">src</span><span class="token operator">:</span> res<span class="token punctuation">.</span>tempFilePaths<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">filePath</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          url<span class="token punctuation">.</span>value <span class="token operator">=</span> filePath
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="裁剪比例">裁剪比例<a class="doc-anchor" href="#裁剪比例">#</a></h3>
<p>可以通过 <code>cropScale</code> 属性设置任意比例。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>选择图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span>
    <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>aspectFit<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 320rpx<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 320rpx<span class="token punctuation">;</span> <span class="token property">margin-top</span><span class="token punctuation">:</span> 20rpx</span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> cropImage <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  uni<span class="token punctuation">.</span><span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sizeType</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'original'</span><span class="token punctuation">,</span> <span class="token string">'compressed'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'album'</span><span class="token punctuation">,</span> <span class="token string">'camera'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token function">cropImage</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
        <span class="token literal-property property">src</span><span class="token operator">:</span> res<span class="token punctuation">.</span>tempFilePaths<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">cropScale</span><span class="token operator">:</span> <span class="token string">'16:9'</span><span class="token punctuation">,</span>
        <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">filePath</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          url<span class="token punctuation">.</span>value <span class="token operator">=</span> filePath
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h3 id="修改裁剪尺寸">修改裁剪尺寸<a class="doc-anchor" href="#修改裁剪尺寸">#</a></h3>
<p>可以通过 <code>beforeCrop</code> 方法修改裁剪尺寸，接收实际宽高，通过返回缩放比例来修改裁剪大小。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>选择图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span>
    <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>aspectFit<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 320rpx<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 320rpx<span class="token punctuation">;</span> <span class="token property">margin-top</span><span class="token punctuation">:</span> 20rpx</span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> cropImage <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  uni<span class="token punctuation">.</span><span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sizeType</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'original'</span><span class="token punctuation">,</span> <span class="token string">'compressed'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'album'</span><span class="token punctuation">,</span> <span class="token string">'camera'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token function">cropImage</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
        <span class="token literal-property property">src</span><span class="token operator">:</span> res<span class="token punctuation">.</span>tempFilePaths<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token function">beforeCrop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">return</span> <span class="token number">0.3</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">filePath</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          url<span class="token punctuation">.</span>value <span class="token operator">=</span> filePath
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
</div><h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="CropImageProps">CropImageProps<a class="doc-anchor" href="#CropImageProps">#</a></h3>
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
<td>visible</td>
<td>是否显示裁剪弹框</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>src</td>
<td>要裁剪的图片</td>
<td>string</td>
<td>false</td>
</tr>
<tr>
<td>crop-scale</td>
<td>裁剪的比例</td>
<td>string</td>
<td>'1:1'</td>
</tr>
<tr>
<td>type</td>
<td>导出图片类型</td>
<td>'png' | 'jpg'</td>
<td>'png'</td>
</tr>
<tr>
<td>quality</td>
<td>导出图片的质量</td>
<td>number</td>
<td>0.92</td>
</tr>
<tr>
<td>duration</td>
<td>弹窗显隐过渡时间（单位 ms）</td>
<td>number</td>
<td>150</td>
</tr>
<tr>
<td>success</td>
<td>裁剪成功回调</td>
<td>(filePath: string) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>fail</td>
<td>裁剪成功回调</td>
<td>(err: any) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>complete</td>
<td>裁剪成功或失败回调</td>
<td>() =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>before-crop</td>
<td>裁剪前回调，可以修改裁剪的尺寸；接收宽高，返回缩放比例</td>
<td>(width: number, height: number) =&gt; number</td>
<td>-</td>
</tr>
</tbody>
</table></div><h3 id="CropImageEmits">CropImageEmits<a class="doc-anchor" href="#CropImageEmits">#</a></h3>
<div class="doc-table-responsive"><table><thead>
<tr>
<th>事件</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>update:visible</td>
<td>弹出框显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
</tr>
</tbody>
</table></div><h3 id="CropImageAgentPropsCropImageOptions">CropImageAgentProps / CropImageOptions<a class="doc-anchor" href="#CropImageAgentPropsCropImageOptions">#</a></h3>
<p>继承 <code>CropImageProps</code> 并有以下额外属性。</p>
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
<td>id</td>
<td>裁剪组件的 id</td>
<td>string</td>
<td>'cropImage'</td>
</tr>
</tbody>
</table></div><h3 id="命令式方法">命令式方法<a class="doc-anchor" href="#命令式方法">#</a></h3>
<div class="doc-table-responsive"><table><thead>
<tr>
<th>名称</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>cropImage</td>
<td>裁剪图片</td>
<td>(options: CropImageOptions) =&gt; void</td>
</tr>
</tbody>
</table></div>`,k=n({__name:"README",setup(c){const s={nav:"组件",title:"CropImage",subtitle:"裁剪图片",group:{title:"工具组件",order:7},version:"1.12+"};return(e,l)=>(p(),t(a,{content:o,fm:s}))}});export{k as default};
