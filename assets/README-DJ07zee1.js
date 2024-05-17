import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d,c as a,o as e}from"./index-CjTGEgwI.js";const o=`<h1 id="CalendarInput日历输入框">CalendarInput 日历输入框<a class="doc-anchor" href="#CalendarInput日历输入框">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>组合了日历、弹出框、输入框组件，实现了便捷快速的日历选择功能。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> CalendarInput <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/calendar-input/calendar-input.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>日历输入框组件接收日历组件相同的属性，另外可以通过 <code>title</code> 和 <code>placeholder</code> 属性设置弹出框标题和输入框占位文本。</p>
<p>在点击输入框后会显示包裹日历的弹出框。</p>
<h3 id="类型">类型<a class="doc-anchor" href="#类型">#</a></h3>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="CalendarInputProps">CalendarInputProps<a class="doc-anchor" href="#CalendarInputProps">#</a></h3>
<p>继承 <a href="./#/components/calendar#CalendarProps"><code>CalendarProps</code></a> 并有以下额外属性：</p>
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
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>只读状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>clearable</td>
<td>是否显示清空按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框占位符内容</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>visible (v-model)</td>
<td>是否显示弹出框</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>title</td>
<td>弹出框标题，不设置则取 <code>placeholder</code> 值</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>show-confirm</td>
<td>是否显示确定按钮，隐藏按钮可用于快捷选择</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>validate-event</td>
<td>是否触发表单验证</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3 id="CalendarInputEmits">CalendarInputEmits<a class="doc-anchor" href="#CalendarInputEmits">#</a></h3>
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
<td>日历输入组件值改变时触发</td>
<td>(value: Date | Date[] | undefined) =&gt; void</td>
</tr>
<tr>
<td>update:visible</td>
<td>弹出框显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
</tr>
</tbody>
</table></div>
`,h=d({__name:"README",setup(r){return t(),(n,s)=>(e(),a("div",{class:"doc-content",innerHTML:o}))}});export{h as default};
