import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d,c as a,o}from"./index-CjTGEgwI.js";const s=`<h1 id="Checkbox复选框">Checkbox 复选框<a class="doc-anchor" href="#Checkbox复选框">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>在一组可选项中进行任意选择。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Checkbox <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/checkbox/checkbox.vue'</span>
<span class="token keyword">import</span> CheckboxGroup <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/checkbox-group/checkbox-group.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="基础使用">基础使用<a class="doc-anchor" href="#基础使用">#</a></h3>
<p>使用 <code>checked</code> 属性控制是否选中。</p>
<h3 id="只读和禁用">只读和禁用<a class="doc-anchor" href="#只读和禁用">#</a></h3>
<p>只读或禁用后不可点击。</p>
<h3 id="图标大小">图标大小<a class="doc-anchor" href="#图标大小">#</a></h3>
<p>使用 <code>size</code> 属性设置图标大小。</p>
<h3 id="自定义颜色">自定义颜色<a class="doc-anchor" href="#自定义颜色">#</a></h3>
<p>使用 <code>checkedColor</code> 属性设置选中时的图标颜色。</p>
<h3 id="图标类型">图标类型<a class="doc-anchor" href="#图标类型">#</a></h3>
<p>设置 <code>type</code> 属性为 <code>circle</code> 可以使图标变为圆形。</p>
<h3 id="自定义图标">自定义图标<a class="doc-anchor" href="#自定义图标">#</a></h3>
<p>如果内置的图标不满足需求，可以使用 <code>icon</code> 插槽设置为任意的图标。
插槽接收<code>checked</code>属性表示当前的选中状态。</p>
<h3 id="复选框组">复选框组<a class="doc-anchor" href="#复选框组">#</a></h3>
<p>复选框组用于收集选中状态的复选框的值。</p>
<h3 id="自定义">自定义<a class="doc-anchor" href="#自定义">#</a></h3>
<p>利用复选框组的 <code>custom</code> 插槽可以将复选框和其他组件结合使用。
<code>custom</code> 插槽接收 <code>toggle</code> 方法来切换选中状态；
同时要给复选框组件添加 <code>readonly</code> 属性以便将点击操作交给其他组件。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="CheckboxProps">CheckboxProps<a class="doc-anchor" href="#CheckboxProps">#</a></h3>
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
<td>checked (v-model)</td>
<td>是否选中</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>value</td>
<td>复选框的值，配合复选框组一起使用</td>
<td>any</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>复选框标签</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>readonly</td>
<td>只读状态</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>图标的尺寸</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>图标类型</td>
<td>'square' | 'circle'</td>
<td>'square'</td>
</tr>
<tr>
<td>checked-color</td>
<td>选中时图标的颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>validate-event</td>
<td>是否触发表单验证</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3 id="CheckboxSlots">CheckboxSlots<a class="doc-anchor" href="#CheckboxSlots">#</a></h3>
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
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>自定义图标</td>
<td>&#123; checked: boolean &#125;</td>
</tr>
</tbody>
</table></div>
<h3 id="CheckboxEmits">CheckboxEmits<a class="doc-anchor" href="#CheckboxEmits">#</a></h3>
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
<td>click</td>
<td>点击时触发</td>
<td>(event: any) =&gt; void</td>
</tr>
<tr>
<td>update:checked</td>
<td>选中状态改变时触发</td>
<td>(checked: boolean) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="CheckboxGroupProps">CheckboxGroupProps<a class="doc-anchor" href="#CheckboxGroupProps">#</a></h3>
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
<td>model-value (v-model)</td>
<td>指定选中的选项</td>
<td>any[]</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用状态</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>readonly</td>
<td>只读状态</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>图标的尺寸</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>图标类型</td>
<td>'square' | 'circle'</td>
<td>'square'</td>
</tr>
<tr>
<td>checked-color</td>
<td>选中时图标的颜色</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>validate-event</td>
<td>是否触发表单验证</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3 id="CheckboxGroupSlots">CheckboxGroupSlots<a class="doc-anchor" href="#CheckboxGroupSlots">#</a></h3>
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
<td>-</td>
</tr>
<tr>
<td>custom</td>
<td>同默认插槽，额外可以接收 <code>toggle</code> 方法切换选中状态，用于自定义复选框结构和样式</td>
<td>&#123; toggle: (value: any) =&gt; void, value: any[] &#125;</td>
</tr>
</tbody>
</table></div>
<h3 id="CheckboxGroupEmits">CheckboxGroupEmits<a class="doc-anchor" href="#CheckboxGroupEmits">#</a></h3>
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
<td>复选框组值改变时触发</td>
<td>(value: any[]) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-checkbox-group-column-gap</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-checkbox-group-row-gap</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-checkbox-icon-font-size</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-checkbox-icon-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-quaternary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-checkbox-icon-checked-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-checkbox-icon-transition-duration</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-duration<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-checkbox-label-margin-left</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,h=d({__name:"README",setup(e){return t(),(c,n)=>(o(),a("div",{class:"doc-content",innerHTML:s}))}});export{h as default};
