import{u as a}from"./useCodeTool-MhyGaRwJ.js";import{d as t,c as s,o as n}from"./index-CjTGEgwI.js";const p=`<h1 id="Upload上传">Upload 上传<a class="doc-anchor" href="#Upload上传">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>控制文件的上传及状态展示。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Upload <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/upload/upload.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>选择文件后通过 <code>afterRead</code> 将文件上传到服务器。期间通过 <code>UploadFileItem['status']</code> 和 <code>UploadFileItem['message']</code> 修改上传的状态。</p>
<h3 id="上传视频">上传视频<a class="doc-anchor" href="#上传视频">#</a></h3>
<p>默认只能选择图片，可以设置 <code>accept=&quot;video&quot;</code> 来选择上传视频。</p>
<h3 id="限定上传数量">限定上传数量<a class="doc-anchor" href="#限定上传数量">#</a></h3>
<p>通过 <code>maxCount</code> 属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏选择区域。</p>
<h3 id="多选">多选<a class="doc-anchor" href="#多选">#</a></h3>
<p>默认一次只能选择一张图片，设置 <code>multiple</code> 允许图片多选。</p>
<h3 id="上传前置处理">上传前置处理<a class="doc-anchor" href="#上传前置处理">#</a></h3>
<p>通过传入 <code>beforeRead</code> 函数可以在上传前进行校验和处理，返回 <code>true</code> 表示校验通过，返回 <code>false</code> 表示校验失败。支持返回 <code>Promise</code> 对 <code>file</code> 对象进行自定义处理。</p>
<h3 id="限定上传大小">限定上传大小<a class="doc-anchor" href="#限定上传大小">#</a></h3>
<p>通过 <code>maxSize</code> 属性可以限制上传文件的大小，超过大小的文件会被自动过滤，这些文件信息可以通过 <code>overSize</code> 事件获取。</p>
<h3 id="上传状态">上传状态<a class="doc-anchor" href="#上传状态">#</a></h3>
<p>通过 <code>status</code> 属性可以标识上传状态，<code>uploading</code> 表示上传中，<code>failed</code> 表示上传失败，<code>done</code> 表示上传完成。</p>
<h3 id="只读和禁用">只读和禁用<a class="doc-anchor" href="#只读和禁用">#</a></h3>
<p>只读或禁用会隐藏选择区域。</p>
<h3 id="自定义选区样式">自定义选区样式<a class="doc-anchor" href="#自定义选区样式">#</a></h3>
<p>使用 <code>select</code> 插槽自定义选区内容。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="UploadProps">UploadProps<a class="doc-anchor" href="#UploadProps">#</a></h3>
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
<td>accept</td>
<td>允许上传的文件类型</td>
<td>'image' | 'video'</td>
<td>'image'</td>
</tr>
<tr>
<td>multiple</td>
<td>是否开启图片多选</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>source-type</td>
<td>文件选择来源</td>
<td>('album' | 'camera')[]</td>
<td>['album', 'camera']</td>
</tr>
<tr>
<td>size-type</td>
<td>所选的图片的尺寸</td>
<td>('original' | 'compressed')[]</td>
<td>['original', 'compressed']</td>
</tr>
<tr>
<td>max-duration</td>
<td>拍摄视频最长拍摄时间，单位秒</td>
<td>number</td>
<td>60</td>
</tr>
<tr>
<td>camera</td>
<td>默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效</td>
<td>'back' | 'front'</td>
<td>'back'</td>
</tr>
<tr>
<td>model-value (v-model)</td>
<td>已上传的文件列表</td>
<td>UploadFileItem[]</td>
<td>-</td>
</tr>
<tr>
<td>max-count</td>
<td>文件上传数量限制</td>
<td>number</td>
<td>Number.MAX_SAFE_INTEGER</td>
</tr>
<tr>
<td>max-size</td>
<td>文件大小限制，单位为 <code>byte</code></td>
<td>number | ((file: File) =&gt; boolean)</td>
<td>Number.MAX_SAFE_INTEGER</td>
</tr>
<tr>
<td>over-size</td>
<td>文件大小超过限制时触发</td>
<td>(fileItem: UploadFileItem | UploadFileItem[]) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用文件上传</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>是否将上传区域设置为只读状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>before-read</td>
<td>文件读取前的回调，返回 false 可终止文件读取，支持返回 Promise</td>
<td>(file: File) =&gt; boolean | Promise<File></td>
<td>-</td>
</tr>
<tr>
<td>after-read</td>
<td>文件读取完成后的回调</td>
<td>(fileItem: UploadFileItem | UploadFileItem[]) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>removable</td>
<td>是否可删除</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>before-remove</td>
<td>文件删除前的回调，返回 false 可终止文件读取，支持返回 Promise</td>
<td>(...args: any[]) =&gt; boolean | Promise<void></td>
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
<h3 id="UploadSlots">UploadSlots<a class="doc-anchor" href="#UploadSlots">#</a></h3>
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
<td>select</td>
<td>自定义选取内容</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="ButtonEmits">ButtonEmits<a class="doc-anchor" href="#ButtonEmits">#</a></h3>
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
<td>选择的文件列表改变时触发</td>
<td>(value: UploadFileItem[]) =&gt; void</td>
</tr>
<tr>
<td>remove</td>
<td>删除文件时触发</td>
<td>(index: number, item: UploadFileItem) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="UploadFileItem">UploadFileItem<a class="doc-anchor" href="#UploadFileItem">#</a></h3>
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
<td>file</td>
<td>用户选择的文件</td>
<td>UploadFile</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>图片和视频之外的文件要展示的文件名，如果不指定且有 <code>file</code>，则获取 <code>file</code> 的文件名</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>url</td>
<td>图片的 <code>url</code></td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>is-image</td>
<td>当无法从 <code>url</code> 中判断为图片时，可以显式指定为图片，以便可以对图片进行预览</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>is-video</td>
<td>当无法从 <code>url</code> 中判断为视频时，可以显式指定为视频，以便可以对视频进行预览</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>status</td>
<td>指定预览图片的状态</td>
<td>UploadStatus</td>
<td>'pending'</td>
</tr>
<tr>
<td>message</td>
<td>展示预览图片在 <code>uploading</code>, <code>failed</code> 等状态下的说明文本</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="UploadStatus">UploadStatus<a class="doc-anchor" href="#UploadStatus">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">UploadStatus</span> <span class="token operator">=</span> <span class="token string">'pending'</span> <span class="token operator">|</span> <span class="token string">'uploading'</span> <span class="token operator">|</span> <span class="token string">'failed'</span> <span class="token operator">|</span> <span class="token string">'done'</span>
</code></pre></div>
<h3 id="UploadFile">UploadFile<a class="doc-anchor" href="#UploadFile">#</a></h3>
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
<td>文件类型</td>
<td>'image' | 'video'</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>文件大小，单位字节</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>path</td>
<td>本地临时文件路径</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>duration</td>
<td>选定视频的时间长度</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>width</td>
<td>返回选定视频的宽度</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>height</td>
<td>返回选定视频的高度</td>
<td>number</td>
<td>0</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-upload-preview-width</span><span class="token punctuation">:</span> 176rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-preview-height</span><span class="token punctuation">:</span> 176rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-preview-gap</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-preview-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-upload-preview-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-upload-preview-video-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-black<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-upload-file-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-body-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-upload-file-icon-font-size</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-file-name-margin-top</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-file-name-padding-x</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-file-name-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-upload-status-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-upload-status-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-mask-illegible<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-upload-status-icon-font-size</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-status-message-margin-top</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-status-message-padding-x</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-status-message-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-upload-close-top</span><span class="token punctuation">:</span> 4rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-close-right</span><span class="token punctuation">:</span> 4rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-close-size</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-close-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-upload-close-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-upload-close-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-mask-illegible<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-upload-select-width</span><span class="token punctuation">:</span> 176rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-select-height</span><span class="token punctuation">:</span> 176rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-select-font-size</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-upload-select-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-upload-select-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-upload-select-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-upload-select-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-active-deep-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-upload-video-play-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-mask-legible<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-upload-video-play-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--sar-white-rgb<span class="token punctuation">)</span><span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-upload-loading-size</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,r=t({__name:"README",setup(o){return a(),(e,d)=>(n(),s("div",{class:"doc-content",innerHTML:p}))}});export{r as default};
