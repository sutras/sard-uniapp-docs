import{M as a}from"./index-CO-qPfwO.js";import{d as n,c as p,o as t}from"./index-Cb7a49sd.js";const e=`<h2 id="简介">简介<a class="doc-anchor" href="#简介">#</a></h2>
<p><code>sard-uniapp</code> 使用 <code>CSS</code> 变量声明组件的颜色、字号、圆角等样式，
因此通过变量动态更新主题也是相当容易的。</p>
<h2 id="开启暗黑模式">开启暗黑模式<a class="doc-anchor" href="#开启暗黑模式">#</a></h2>
<p><code>sard-uniapp</code> 暗黑主题是通过 <code>prefers-color-scheme</code> 媒体查询特性实现的，并提供了暗黑主题的样式文件 <code>dark.scss</code>，将其置于全局样式文件之后便可随着系统或浏览器的主题变化而修改颜色。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- App.vue --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'sard-uniapp/index.scss'</span><span class="token punctuation">;</span></span>
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'sard-uniapp/dark.scss'</span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre>
</div>`,d=n({__name:"dark-mode",setup(c){const s={nav:"指引",title:"暗黑模式",order:1,group:{title:"进阶"}};return(o,l)=>(t(),p(a,{content:e,fm:s}))}});export{d as default};
