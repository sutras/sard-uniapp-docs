import{u as n}from"./useCodeTool-CDBKIPxk.js";import{d as s,c as a,o}from"./index-TW30QNeX.js";const t=`<h1 id="全局配置">全局配置<a class="doc-anchor" href="#全局配置">#</a></h1>
<h2 id="简介">简介<a class="doc-anchor" href="#简介">#</a></h2>
<p>有些组件的属性设置了默认值，如果需要自定义这些默认值，可在入口文件中通过 <code>setConfig</code> 函数进行设置。</p>
<p>例如，下面将按钮的默认类型设为 <code>outline</code>：</p>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> setConfig <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token function">setConfig</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  button<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'outline'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</code></pre></div>
<h2 id="批量设置默认动画时长">批量设置默认动画时长<a class="doc-anchor" href="#批量设置默认动画时长">#</a></h2>
<p><code>ActionSheet</code>、<code>Dialog</code>、<code>Notify</code> 等这些组件都有一个进出场动画，通常默认动画时长为 <code>300</code> 毫秒，如果要自定义默认时长，除了一个个列出来进行设置之外，还可以通过 <code>getDurationConfig</code> 函数简化设置：</p>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> setConfig<span class="token punctuation">,</span> getDurationConfig <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token function">setConfig</span><span class="token punctuation">(</span><span class="token function">getDurationConfig</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div>
<p><code>getDurationConfig</code> 接收一个时长数值，返回 <code>setConfig</code> 参数配置对象。</p>
<p><code>setConfig</code> 可以接受任意个参数。例如，下面设置了除 <code>Toast</code> 组件外，其他组件的动画时长都为 0。</p>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token function">setConfig</span><span class="token punctuation">(</span><span class="token function">getDurationConfig</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
  toast<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    duration<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</code></pre></div>
`,l=s({__name:"config",setup(p){return n(),(c,e)=>(o(),a("div",{class:"doc-content",innerHTML:t}))}});export{l as default};
