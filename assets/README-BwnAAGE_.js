import{u as a}from"./useCodeTool-mazcC0Cn.js";import{d as s,c as n,o as t}from"./index-ybeXHrRA.js";const p=`<h1 id="Icon图标">Icon 图标<a class="doc-anchor" href="#Icon图标">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>基于字体的图标集。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Icon <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/icon/icon.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用<code>name</code>属性指定要显示的图标。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="尺寸">尺寸<a class="doc-anchor" href="#尺寸">#</a></h3>
<p>使用<code>size</code>属性设置图标大小。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>64rpx<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="颜色">颜色<a class="doc-anchor" href="#颜色">#</a></h3>
<p>使用<code>color</code>属性设置图标颜色。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orange<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="图片类型图标">图片类型图标<a class="doc-anchor" href="#图片类型图标">#</a></h3>
<p>名称里面带有<code>/</code>字符会被当作图片处理。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/static/logo.svg<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>64rpx<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="自定义图标">自定义图标<a class="doc-anchor" href="#自定义图标">#</a></h3>
<p>组件库内置有用于内部组件的必须的少量的图标，在实际的应用中，通常需要引入自定义的特定风格的图标库或第三方图标库。</p>
<p>下面演示如何引入 <a href="https://www.iconfont.cn/" target="_blank"><code>iconfont</code></a> 中的图标库（以此文档案例使用的<code>demo-icons</code>图标库来演示）：</p>
<ol>
<li>
<p>进入到 <code>iconfont</code> 中的 <code>demo-icons</code> 项目并进行以下配置配置：</p>
<ul>
<li>FontClass/Symbol 前缀: <code>demo-icons-</code></li>
<li>Font Family: <code>demo-icons</code></li>
<li>字体格式: 只勾选 <code>TTF</code> 和 <code>Base64</code></li>
<li>保存</li>
</ul>
</li>
<li>
<p>点击更新代码</p>
</li>
<li>
<p>打开生成的在线 <code>CSS</code> 文件</p>
</li>
<li>
<p>将里面的内容复制下来，粘贴到本地的 css 文件（取名 <code>demo-icons.css</code>）</p>
</li>
<li>
<p>在 <code>App.vue</code> 文件导入 <code>demo-icons.css</code> 文件:</p>
</li>
</ol>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'./demo-icons.css'</span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre></div>
<ol start="6">
<li>使用<code>demo-icons</code>图标库中的图标：</li>
</ol>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-icon</span> <span class="token attr-name">family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-icons<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cart<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>48rpx<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="内置图标">内置图标<a class="doc-anchor" href="#内置图标">#</a></h3>
<p>点击右边演示的图标可以复制图标名称。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="IconProps">IconProps<a class="doc-anchor" href="#IconProps">#</a></h3>
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
<td>图标名称或图片链接，如果名称带有<code>/</code>，会被认为是图片图标</td>
<td>string</td>
<td>''</td>
</tr>
<tr>
<td>family</td>
<td>字体名称</td>
<td>string</td>
<td>'sari'</td>
</tr>
<tr>
<td>size</td>
<td>图标大小</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>图标颜色</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table></div>
`,d=s({__name:"README",setup(c){return a(),(o,e)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{d as default};
