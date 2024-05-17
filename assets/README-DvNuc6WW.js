import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d as e,c as a,o as d}from"./index-CjTGEgwI.js";const s=`<h1 id="DatetimePicker日期时间选择器">DatetimePicker 日期时间选择器<a class="doc-anchor" href="#DatetimePicker日期时间选择器">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>用于选择日期时间。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> DatetimePicker <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/datetime-picker/datetime-picker.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>通过 <code>v-model</code> 绑定当前值，通过 <code>type</code> 属性设置要展示的列类型。</p>
<h3 id="类型">类型<a class="doc-anchor" href="#类型">#</a></h3>
<p>可以使用 <code>yMdhms</code>（年月日时分秒）进行任意组合，每个字母对应一列。</p>
<h3 id="自定义日期时间范围">自定义日期时间范围<a class="doc-anchor" href="#自定义日期时间范围">#</a></h3>
<p>可以使用 <code>min</code> 和 <code>max</code> 属性限制可以选择的日期时间的范围。</p>
<h3 id="过滤器">过滤器<a class="doc-anchor" href="#过滤器">#</a></h3>
<p>可以使用 <code>filter</code> 属性来仅展示想要的内容，只有返回真的值才会展示。</p>
<h3 id="格式化">格式化<a class="doc-anchor" href="#格式化">#</a></h3>
<p>可以使用 <code>formatter</code> 属性格式化展示的内容。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="DatetimePickerProps">DatetimePickerProps<a class="doc-anchor" href="#DatetimePickerProps">#</a></h3>
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
<td>type</td>
<td>设置每一列要展示的数据类型，每个字母对应一列</td>
<td>string</td>
<td>'yMd'</td>
</tr>
<tr>
<td>min</td>
<td>可选的最小日期</td>
<td>Date</td>
<td>十年前</td>
</tr>
<tr>
<td>max</td>
<td>可选的最大日期</td>
<td>Date</td>
<td>十年后</td>
</tr>
<tr>
<td>model-value</td>
<td>当前选中的日期</td>
<td>Date</td>
<td>-</td>
</tr>
<tr>
<td>filter</td>
<td>选项的过滤函数</td>
<td>(letter: DatetimeLetter, value: number, date: Date, index: number) =&gt; boolean</td>
<td>-</td>
</tr>
<tr>
<td>formatter</td>
<td>选项的格式化函数</td>
<td>(letter: DatetimeLetter, option: DatetimeColumnOption, date: Date, index: number) =&gt; string | void |undefined</td>
<td>-</td>
</tr>
</tbody>
</table></div>
<h3 id="DatetimePickerEmits">DatetimePickerEmits<a class="doc-anchor" href="#DatetimePickerEmits">#</a></h3>
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
<td>选中的选项改变时触发</td>
<td>(date: Date) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="DatetimeLetter">DatetimeLetter<a class="doc-anchor" href="#DatetimeLetter">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">DatetimeLetter</span> <span class="token operator">=</span> <span class="token string">'y'</span> <span class="token operator">|</span> <span class="token string">'M'</span> <span class="token operator">|</span> <span class="token string">'d'</span> <span class="token operator">|</span> <span class="token string">'h'</span> <span class="token operator">|</span> <span class="token string">'m'</span> <span class="token operator">|</span> <span class="token string">'s'</span>
</code></pre></div>
<p>上面每个字母分别代表“年月日时分秒”。</p>
<h3 id="DatetimeColumnOption">DatetimeColumnOption<a class="doc-anchor" href="#DatetimeColumnOption">#</a></h3>
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
<td>value</td>
<td>选项值</td>
<td>number</td>
</tr>
<tr>
<td>label</td>
<td>展示的文本，默认中文会在值的后面加上“年月日时分秒”</td>
<td>string | number | boolean</td>
</tr>
<tr>
<td>zerofill</td>
<td>填充前置 0 后的选项值字符串，可在格式化时使用</td>
<td>string</td>
</tr>
</tbody>
</table></div>
`,p=e({__name:"README",setup(r){return t(),(o,n)=>(d(),a("div",{class:"doc-content",innerHTML:s}))}});export{p as default};
