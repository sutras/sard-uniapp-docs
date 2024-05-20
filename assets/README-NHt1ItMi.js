import{u as s}from"./useCodeTool-CiOD5yvb.js";import{d as a,c as n,o as t}from"./index-Cbk_WT-7.js";const p=`<h1 id="ShareSheet分享面板">ShareSheet 分享面板<a class="doc-anchor" href="#ShareSheet分享面板">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>从底部向上弹出分享菜单。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> ShareSheet <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/share-sheet/share-sheet.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>v-model:visible</code> 属性控制显隐，使用 <code>itemList</code> 属性配置分享项。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>显示分享面板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-share-sheet</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span>
    <span class="token attr-name">:item-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>itemList<span class="token punctuation">"</span></span>
    <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
    <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSelect<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type ShareSheetItem <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> itemList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Wechat'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0bc15f'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'wechat-fill'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alipay'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1677ff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'alipay-fill'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Twitter'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1d9bf0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'twitter-fill'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Facebook'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1877f2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'facebook-circle-fill'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> ShareSheetItem</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">toast</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="多行">多行<a class="doc-anchor" href="#多行">#</a></h3>
<p><code>itemList</code> 属性值如果是二维数组则渲染成多行。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>显示分享面板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-share-sheet</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span>
    <span class="token attr-name">:item-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>itemList<span class="token punctuation">"</span></span>
    <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
    <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSelect<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type ShareSheetItem <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> itemList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Wechat'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0bc15f'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'wechat-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alipay'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1677ff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'alipay-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Twitter'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1d9bf0'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'twitter-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Facebook'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1877f2'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'facebook-circle-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Spotify'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1ed760'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'spotify-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Skype'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0b64a4'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'skype-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Youtube'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#ff0000'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'youtube-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Paypal'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0070ba'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'paypal-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Whatsapp'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#128c7e'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'whatsapp-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Telegram'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0088cc'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'telegram-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Snapchat'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#000'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#fffc00'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'snapchat-fill'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> ShareSheetItem</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">toast</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="标题和描述">标题和描述<a class="doc-anchor" href="#标题和描述">#</a></h3>
<p>使用 <code>title</code> 和 <code>description</code> 配置标题和描述。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>显示分享面板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-share-sheet</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span>
    <span class="token attr-name">:item-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>itemList<span class="token punctuation">"</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>分享到<span class="token punctuation">"</span></span>
    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>这是描述<span class="token punctuation">"</span></span>
    <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
    <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSelect<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type ShareSheetItem <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> itemList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Wechat'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0bc15f'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'wechat-fill'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alipay'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1677ff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'alipay-fill'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'这是描述这是描述'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Twitter'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1d9bf0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'twitter-fill'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Facebook'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1877f2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'facebook-circle-fill'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> ShareSheetItem</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">toast</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="图片类型图标">图片类型图标<a class="doc-anchor" href="#图片类型图标">#</a></h3>
<p><code>icon</code> 属性可以是图片路径。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>显示分享面板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-share-sheet</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span>
    <span class="token attr-name">:item-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>itemList<span class="token punctuation">"</span></span>
    <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
    <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSelect<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type ShareSheetItem <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> itemList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Sard'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'https://fastly.jsdelivr.net/npm/@sard/assets/pic1.jpg'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Wechat'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0bc15f'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'wechat-fill'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> ShareSheetItem</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">toast</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h3 id="禁用">禁用<a class="doc-anchor" href="#禁用">#</a></h3>
<p>禁用的选项不可点击。</p>
<div class="doc-code-wrapper"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>显示分享面板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sar-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sar-share-sheet</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span>
    <span class="token attr-name">:item-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>itemList<span class="token punctuation">"</span></span>
    <span class="token attr-name">cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
    <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSelect<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> toast<span class="token punctuation">,</span> type ShareSheetItem <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> itemList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Wechat'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#0bc15f'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'wechat-fill'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alipay'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1677ff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'alipay-fill'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iconFamily</span><span class="token operator">:</span> <span class="token string">'demo-icons'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> ShareSheetItem</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">toast</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="ShareSheetProps">ShareSheetProps<a class="doc-anchor" href="#ShareSheetProps">#</a></h3>
<p><code>ShareSheetProps</code> 继承 <code>PopupProps</code> 并拥有以下属性：</p>
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
<td>item-list</td>
<td>面板选项列表</td>
<td>ShareSheetItem[] | ShareSheetItem[][]</td>
<td>[]</td>
</tr>
<tr>
<td>title</td>
<td>面板标题</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>description</td>
<td>面板描述</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>cancel</td>
<td>取消按钮内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>visible (v-model)</td>
<td>面板是否可见</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>overlay-closable</td>
<td>点击遮罩后是否关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>before-close</td>
<td>关闭前的回调，返回 <code>false</code> 可阻止关闭，支持返回 <code>Promise</code></td>
<td>(type: 'close' | 'cancel' | 'select') =&gt; boolean | Promise<any></td>
<td>-</td>
</tr>
<tr>
<td>duration</td>
<td>显隐动画时长，单位 ms</td>
<td>number</td>
<td>300</td>
</tr>
</tbody>
</table></div>
<h3 id="ShareSheetEmits">ShareSheetEmits<a class="doc-anchor" href="#ShareSheetEmits">#</a></h3>
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
<td>update:visible</td>
<td>分享面板显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
</tr>
<tr>
<td>close</td>
<td>点击遮罩时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>cancel</td>
<td>点击取消按钮时触发</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>select</td>
<td>点击分享项时触发</td>
<td>(item: ShareSheetItem) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="ShareSheetItem">ShareSheetItem<a class="doc-anchor" href="#ShareSheetItem">#</a></h3>
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
<td>name</td>
<td>名称</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>description</td>
<td>标签</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>图标颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>background</td>
<td>图标背景颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>图标名称，可以是图片路径</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>iconFamily</td>
<td>图标字体</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-share-sheet-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-xl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-share-sheet-header-padding</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-share-sheet-title-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-share-sheet-description-margin-top</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-description-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-description-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-share-sheet-row-padding-y</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-row-padding-x</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-share-sheet-item-width</span><span class="token punctuation">:</span> 160rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-item-active-opacity</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-active-opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-share-sheet-icon-wrapper-size</span><span class="token punctuation">:</span> 96rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-icon-wrapper-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-full<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-share-sheet-icon-font-size</span><span class="token punctuation">:</span> 48rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-icon-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-icon-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-secondary-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-share-sheet-name-margin-top</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-name-padding-x</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-name-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-name-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-tertiary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-share-sheet-item-description-margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-item-description-padding-x</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-item-description-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-item-description-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-quaternary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-share-sheet-gap-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-body-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-gap-height</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-share-sheet-cancel-min-height</span><span class="token punctuation">:</span> 96rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-cancel-padding</span><span class="token punctuation">:</span> 16rpx 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-cancel-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-share-sheet-cancel-active-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-active-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,u=a({__name:"README",setup(o){return s(),(e,c)=>(t(),n("div",{class:"doc-content",innerHTML:p}))}});export{u as default};
