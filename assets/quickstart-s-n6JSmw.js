import{u as a}from"./useCodeTool-FmmNjiPp.js";import{d as s,c as n,o as p}from"./index-67M18MvN.js";const c=`<h1 id="快速上手">快速上手<a class="doc-anchor" href="#快速上手">#</a></h1>
<h2 id="前提条件">前提条件<a class="doc-anchor" href="#前提条件">#</a></h2>
<p>使用 <code>sard-uniapp</code> 组件库的<code>uniapp</code> 项目需要通过命令行的方式创建。因为通过 <code>HBuilderX</code> 创建的项目，其依赖的很多软件包版本过低，在使用 <code>sard-uniapp</code> 的过程中可能会有错误。</p>
<p><code>uniapp</code>项目创建文档：
<a href="https://uniapp.dcloud.net.cn/quickstart-cli.html" target="_blank">https://uniapp.dcloud.net.cn/quickstart-cli.html</a></p>
<h2 id="安装">安装<a class="doc-anchor" href="#安装">#</a></h2>
<h3 id="NPM">NPM<a class="doc-anchor" href="#NPM">#</a></h3>
<h4 id="安装sass">安装 sass<a class="doc-anchor" href="#安装sass">#</a></h4>
<p><code>sard-uniapp</code> 依赖于 <code>sass</code> 来构建 <code>css</code>，因此使用前要先进行安装。</p>
<div class="doc-code-wrapper"><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> sass <span class="token parameter variable">-D</span>
</code></pre></div>
<h4 id="安装sard-uniapp">安装 sard-uniapp<a class="doc-anchor" href="#安装sard-uniapp">#</a></h4>
<div class="doc-code-wrapper"><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> sard-uniapp
</code></pre></div>
<h3 id="HBuilderX">HBuilderX<a class="doc-anchor" href="#HBuilderX">#</a></h3>
<h4 id="安装sass_1">安装 sass<a class="doc-anchor" href="#安装sass_1">#</a></h4>
<div class="doc-code-wrapper"><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> sass <span class="token parameter variable">-D</span>
</code></pre></div>
<h4 id="安装sard-uniapp_1">安装 sard-uniapp<a class="doc-anchor" href="#安装sard-uniapp_1">#</a></h4>
<p>使用 <code>HBuilderX</code> 开发的用户，可以在 <code>uni-app</code> 插件市场通过 <code>uni_modules</code> 的形式进行安装。</p>
<p>在 <code>uni-app</code> 插件市场右上角点击 <code>下载插件并导入HBuilderX</code> 按钮，导入到对应的项目中即可。</p>
<p>插件地址：<a href="https://ext.dcloud.net.cn/plugin?id=16001" target="_blank">https://ext.dcloud.net.cn/plugin?id=16001</a></p>
<h2 id="配置">配置<a class="doc-anchor" href="#配置">#</a></h2>
<h3 id="配置easycom">配置 easycom<a class="doc-anchor" href="#配置easycom">#</a></h3>
<p>建议使用 <code>easycom</code> 来简化组件的引入和注册。</p>
<h4 id="NPM_1">NPM<a class="doc-anchor" href="#NPM_1">#</a></h4>
<p><code>pages.json</code></p>
<div class="doc-code-wrapper"><pre class="language-json"><code class="language-json"><span class="token punctuation">&#123;</span>
  <span class="token property">"easycom"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token property">"custom"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token property">"^sar-(.*)"</span><span class="token operator">:</span> <span class="token string">"sard-uniapp/components/$1/$1.vue"</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h4 id="HBuilderX_1">HBuilderX<a class="doc-anchor" href="#HBuilderX_1">#</a></h4>
<p>如果你是通过插件市场导入到 <code>HBuilderX</code> 的，需要修改一下组件路径：</p>
<p><code>pages.json</code></p>
<div class="doc-code-wrapper"><pre class="language-json"><code class="language-json"><span class="token punctuation">&#123;</span>
  <span class="token property">"easycom"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token property">"custom"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token property">"^sar-(.*)"</span><span class="token operator">:</span> <span class="token string">"@/uni_modules/sard-uniapp/components/$1/$1.vue"</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="配置全局组件类型">配置全局组件类型<a class="doc-anchor" href="#配置全局组件类型">#</a></h3>
<p><code>tsconfig.json</code></p>
<div class="doc-code-wrapper"><pre class="language-json"><code class="language-json"><span class="token punctuation">&#123;</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token property">"types"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"sard-uniapp/global"</span><span class="token punctuation">]</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h2 id="引入全局样式">引入全局样式<a class="doc-anchor" href="#引入全局样式">#</a></h2>
<p>全局样式文件定义了所有组件共用的一些 <code>css</code> 变量。</p>
<h3 id="NPM_1_1">NPM<a class="doc-anchor" href="#NPM_1_1">#</a></h3>
<p><code>App.vue</code></p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'sard-uniapp/index.scss'</span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="HBuilderX_1_1">HBuilderX<a class="doc-anchor" href="#HBuilderX_1_1">#</a></h3>
<p>如果你是通过插件市场导入到 <code>HBuilderX</code> 的，需要修改一下组件路径：</p>
<p><code>App.vue</code></p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'@/uni_modules/sard-uniapp/index.scss'</span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="使用组件">使用组件<a class="doc-anchor" href="#使用组件">#</a></h2>
<h3 id="Button组件示例">Button 组件示例<a class="doc-anchor" href="#Button组件示例">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div>
`,u=s({__name:"quickstart",setup(o){return a(),(e,t)=>(p(),n("div",{class:"doc-content",innerHTML:c}))}});export{u as default};
