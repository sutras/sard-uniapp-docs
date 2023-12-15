import{u as n}from"./useCodeTool-bcffc59d.js";import{d as s,c as a,o as p}from"./index-28a3fb09.js";const t=`<h1 id="快速上手">快速上手<a class="doc-anchor" href="#快速上手">#</a></h1>
<h2 id="安装">安装<a class="doc-anchor" href="#安装">#</a></h2>
<h3 id="通过npm安装">通过 npm 安装<a class="doc-anchor" href="#通过npm安装">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> sard
</code></pre></div>
<h3 id="通过yarn安装">通过 yarn 安装<a class="doc-anchor" href="#通过yarn安装">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> <span class="token function">add</span> sard
</code></pre></div>
<h2 id="配置">配置<a class="doc-anchor" href="#配置">#</a></h2>
<h3 id="多平台配置">多平台配置<a class="doc-anchor" href="#多平台配置">#</a></h3>
<p>在 <code>config/index.ts</code> 添加以下配置：</p>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token punctuation">&#123;</span>
  mini<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token function">webpackChain</span><span class="token punctuation">(</span>chain<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      chain<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">'MultiPlatformPlugin'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        args<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'include'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'sard/'</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> args
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  h5<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token function">webpackChain</span><span class="token punctuation">(</span>chain<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      chain<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">'MultiPlatformPlugin'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        args<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'include'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'sard/'</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> args
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  rn<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    resolve<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'sard'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="pxtransform配置">pxtransform 配置<a class="doc-anchor" href="#pxtransform配置">#</a></h3>
<p>如果启动了单位转换，需要添加选择器黑名单：</p>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts">  <span class="token operator">...</span>
  pxtransform<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    enable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    config<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      selectorBlackList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.sar-'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
</code></pre></div>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<h3 id="全局样式引入">全局样式引入<a class="doc-anchor" href="#全局样式引入">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token keyword">@import</span> <span class="token string">'sard/dist/index.scss'</span><span class="token punctuation">;</span>
</code></pre></div>
<h2 id="使用组件">使用组件<a class="doc-anchor" href="#使用组件">#</a></h2>
<h3 id="Button组件示例">Button 组件示例<a class="doc-anchor" href="#Button组件示例">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">按钮</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,i=s({__name:"quickstart",setup(o){return n(),(c,e)=>(p(),a("div",{class:"doc-content",innerHTML:t}))}});export{i as default};
