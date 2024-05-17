import{u as s}from"./useCodeTool-MhyGaRwJ.js";import{d as a,c as n,o as p}from"./index-CjTGEgwI.js";const e=`<h1 id="暗黑模式">暗黑模式<a class="doc-anchor" href="#暗黑模式">#</a></h1>
<h2 id="简介">简介<a class="doc-anchor" href="#简介">#</a></h2>
<p><code>sard-uniapp</code> 使用 <code>CSS</code> 变量声明组件的颜色、字号、圆角等样式，
因此通过变量动态更新主题也是相当容易的。</p>
<h2 id="开启暗黑模式">开启暗黑模式<a class="doc-anchor" href="#开启暗黑模式">#</a></h2>
<p><code>sard-uniapp</code> 暗黑主题是通过 <code>prefers-color-scheme</code> 媒体查询特性实现的，并提供了暗黑主题的样式文件 <code>dark.scss</code>，将其置于全局样式文件之后便可随着系统或浏览器的主题变化而修改颜色。</p>
<p><code>App.vue</code></p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'sard-uniapp/index.scss'</span><span class="token punctuation">;</span></span>
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'sard-uniapp/dark.scss'</span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre></div>
`,d=a({__name:"dark-mode",setup(c){return s(),(t,o)=>(p(),n("div",{class:"doc-content",innerHTML:e}))}});export{d as default};
