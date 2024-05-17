import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d,c as o,o as e}from"./index-CjTGEgwI.js";const a=`<h1 id="CountDown倒计时">CountDown 倒计时<a class="doc-anchor" href="#CountDown倒计时">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>倒计时的展示 ，以便告知用户在一定时间后可以进行某些操作。</p>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> CountDown <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/count-down/count-down.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>time</code> 属性配置倒计时总时长（单位毫秒）。</p>
<h3 id="自定义格式">自定义格式<a class="doc-anchor" href="#自定义格式">#</a></h3>
<p>默认格式为 <code>HH:mm:ss</code> ，也可以使用 <code>format</code> 自定义人任意想要的格式。</p>
<h3 id="毫秒级别的渲染">毫秒级别的渲染<a class="doc-anchor" href="#毫秒级别的渲染">#</a></h3>
<p>默认每隔一秒渲染一次，使用 <code>millisecond</code> 属性可以设置毫秒级别渲染。</p>
<h3 id="自定义样式">自定义样式<a class="doc-anchor" href="#自定义样式">#</a></h3>
<p>如果想获取时分秒等数据分别渲染不同的样式，可以使用默认插槽提供的 <code>time</code> 属性来获取数据（<code>time</code> 类型为：<code>CountDownCurrentTime</code>）。</p>
<h3 id="手动控制">手动控制<a class="doc-anchor" href="#手动控制">#</a></h3>
<p>当倒计时结束时便会停止，通过组件提供的方法可以控制倒计时的开始、暂停或进行重置。</p>
<h3 id="验证码倒计时">验证码倒计时<a class="doc-anchor" href="#验证码倒计时">#</a></h3>
<p>下面代码演示了获取验证码需求中倒计时配合按钮的使用。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="CountDownProps">CountDownProps<a class="doc-anchor" href="#CountDownProps">#</a></h3>
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
<td>time</td>
<td>倒计时总时长，单位毫秒</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>auto-start</td>
<td>是否自动开始倒计时</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>format</td>
<td>时间格式</td>
<td>string</td>
<td>'HH:mm:ss'</td>
</tr>
<tr>
<td>millisecond</td>
<td>是否开启毫秒级别渲染</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="CountDownSlots">CountDownSlots<a class="doc-anchor" href="#CountDownSlots">#</a></h3>
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
<td>default</td>
<td>自定义默认内容</td>
<td>&#123; time: CountDownCurrentTime &#125;</td>
</tr>
</tbody>
</table></div>
<h3 id="CountDownEmits">CountDownEmits<a class="doc-anchor" href="#CountDownEmits">#</a></h3>
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
<td>change</td>
<td>倒计时变化时触发</td>
<td>(time: CountDownCurrentTime) =&gt; void</td>
</tr>
<tr>
<td>finish</td>
<td>倒计时结束时触发</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="CountDownExpose">CountDownExpose<a class="doc-anchor" href="#CountDownExpose">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>start</td>
<td>开始倒计时</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>pause</td>
<td>暂停倒计时</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>reset</td>
<td>重置倒计时</td>
<td>() =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="CountDownCurrentTime">CountDownCurrentTime<a class="doc-anchor" href="#CountDownCurrentTime">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>milliseconds</td>
<td>剩余毫秒</td>
<td>number</td>
</tr>
<tr>
<td>seconds</td>
<td>剩余秒数</td>
<td>number</td>
</tr>
<tr>
<td>minutes</td>
<td>剩余分钟</td>
<td>number</td>
</tr>
<tr>
<td>hours</td>
<td>剩余小时</td>
<td>number</td>
</tr>
<tr>
<td>days</td>
<td>剩余天数</td>
<td>number</td>
</tr>
<tr>
<td>total</td>
<td>剩余总时间（单位毫秒）</td>
<td>number</td>
</tr>
</tbody>
</table></div>
`,i=d({__name:"README",setup(r){return t(),(n,s)=>(e(),o("div",{class:"doc-content",innerHTML:a}))}});export{i as default};
