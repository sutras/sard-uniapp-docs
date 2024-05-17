import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d,c as a,o as e}from"./index-CjTGEgwI.js";const o=`<h1 id="CascaderInput级联输入框">CascaderInput 级联输入框<a class="doc-anchor" href="#CascaderInput级联输入框">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>组合了级联选择、弹出框、输入框组件，实现了便捷快速的级联选择功能。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> CascaderInput <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/cascader-input/cascader-input.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>级联输入框组件接收级联选择组件相同的属性，另外可以通过 <code>title</code> 和 <code>placeholder</code> 属性设置弹出框标题和输入框占位文本。</p>
<p>在点击输入框后会显示包裹级联选择的弹出框。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="CascaderInputProps">CascaderInputProps<a class="doc-anchor" href="#CascaderInputProps">#</a></h3>
<p>继承 <a href="./#/components/cascader#CascaderProps"><code>CascaderProps</code></a> 并有以下额外属性：</p>
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
<td>loading</td>
<td>加载状态</td>
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
<td>false</td>
</tr>
<tr>
<td>validate-event</td>
<td>是否触发表单验证</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3 id="CascaderInputSlots">CascaderInputSlots<a class="doc-anchor" href="#CascaderInputSlots">#</a></h3>
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
<td>top</td>
<td>自定义级联组件面板上方内容</td>
<td>&#123; tabIndex: number &#125;</td>
</tr>
</tbody>
</table></div>
<h3 id="CascaderInputEmits">CascaderInputEmits<a class="doc-anchor" href="#CascaderInputEmits">#</a></h3>
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
<td>级联输入组件值改变时触发</td>
<td>(value: string | number, selectedOptions: CascaderOption[]) =&gt; void</td>
</tr>
<tr>
<td>update:visible</td>
<td>弹出框显隐时触发</td>
<td>(visible: boolean) =&gt; void</td>
</tr>
<tr>
<td>select</td>
<td>选择级联选择某一项时触发</td>
<td>(option: CascaderOption, tabIndex: number) =&gt; void</td>
</tr>
</tbody>
</table></div>
`,h=d({__name:"README",setup(r){return t(),(s,c)=>(e(),a("div",{class:"doc-content",innerHTML:o}))}});export{h as default};
