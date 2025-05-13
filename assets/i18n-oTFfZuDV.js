import{M as s}from"./index-CO0lQDmI.js";import{d as n,c as o,o as e}from"./index-BpihWkn-.js";const c=`<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>默认采用中文作为默认语言，允许切换不同语言。</p>
<h2 id="语言切换">语言切换<a class="doc-anchor" href="#语言切换">#</a></h2>
<p><code>sard-uniapp</code> 提供了 <code>setLocale</code> 函数来切换当前使用的语言。</p>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> setLocale <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/locale/lang/en-US'</span>

<span class="token function">setLocale</span><span class="token punctuation">(</span>enUS<span class="token punctuation">)</span>
</code></pre>
</div><h2 id="支持的语言列表">支持的语言列表<a class="doc-anchor" href="#支持的语言列表">#</a></h2>
<ul>
<li>简体中文（zh-CN）</li>
<li>美国英语（en-US）</li>
</ul>
`,i=n({__name:"i18n",setup(p){const a={nav:"指引",title:"国际化",order:0,group:{title:"进阶",order:1}};return(t,r)=>(e(),o(s,{content:c,fm:a}))}});export{i as default};
