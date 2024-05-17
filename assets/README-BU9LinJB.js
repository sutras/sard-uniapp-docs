import{u as t}from"./useCodeTool-MhyGaRwJ.js";import{d as a,c as s,o as d}from"./index-CjTGEgwI.js";const n=`<h1 id="Form表单">Form 表单<a class="doc-anchor" href="#Form表单">#</a></h1>
<h2 id="介绍">介绍<a class="doc-anchor" href="#介绍">#</a></h2>
<p>用于数据采集，由各种类型的表单域组成，可对数据进行校验、清除、重置、提交等操作。</p>
<h2 id="引入">引入<a class="doc-anchor" href="#引入">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> Form <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/form/form.vue'</span>
<span class="token keyword">import</span> FormItem <span class="token keyword">from</span> <span class="token string">'sard-uniapp/components/form-item/form-item.vue'</span>
</code></pre></div>
<h2 id="代码演示">代码演示<a class="doc-anchor" href="#代码演示">#</a></h2>
<h3 id="典型表单">典型表单<a class="doc-anchor" href="#典型表单">#</a></h3>
<p>最基础的表单包括各种输入表单项，比如 <code>input、picker-input、radio、checkbox</code> 等。</p>
<p>在每一个 <code>form</code> 组件中，你需要一个 <code>form-item</code> 字段作为输入项的容器，用于获取值与验证值。</p>
<h3 id="方向与对齐">方向与对齐<a class="doc-anchor" href="#方向与对齐">#</a></h3>
<p>使用 <code>direction</code> 设置表单域标签水平或垂直排列；
使用 <code>label-align</code> 或 <code>label-valign</code> 设置标签表单域标签水平或垂直方向的对齐方式；
使用 <code>star-position</code> 属性设置星号居左或居右。</p>
<h3 id="表单校验">表单校验<a class="doc-anchor" href="#表单校验">#</a></h3>
<p><code>Form</code> 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。</p>
<p><code>Form</code> 组件提供了表单验证的功能，只需为 <code>rules</code> 属性传入约定的验证规则，并将 <code>FormItem</code> 的 <code>name</code> 属性设置为需要验证的特殊键值即可。</p>
<h3 id="自定义校验规则">自定义校验规则<a class="doc-anchor" href="#自定义校验规则">#</a></h3>
<p>这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。</p>
<p>本例还使用 <code>validate</code> 插槽为输入框添加了表示校验中状态的反馈图标。</p>
<h3 id="添加删除表单项">添加/删除表单项<a class="doc-anchor" href="#添加删除表单项">#</a></h3>
<p>除了一次通过表单组件上的所有验证规则外. 您也可以动态地通过验证规则或删除单个表单字段的规则。</p>
<h3 id="简单登录框">简单登录框<a class="doc-anchor" href="#简单登录框">#</a></h3>
<p>基本的表单数据域控制展示，包含布局、初始化、验证、提交。</p>
<h3 id="Label宽度">Label 宽度<a class="doc-anchor" href="#Label宽度">#</a></h3>
<p>通过 <code>label-width</code> 属性设置标签宽度。</p>
<h3 id="表单只读和禁用">表单只读和禁用<a class="doc-anchor" href="#表单只读和禁用">#</a></h3>
<p>设置表单组件禁用或只读，仅对 <code>sard</code> 组件有效。</p>
<h3 id="登录框">登录框<a class="doc-anchor" href="#登录框">#</a></h3>
<p>下面实现了一个简单的登录框组件。</p>
<h3 id="嵌套结构与校验信息">嵌套结构与校验信息<a class="doc-anchor" href="#嵌套结构与校验信息">#</a></h3>
<p><code>name</code> 属性支持嵌套数据结构。</p>
<h3 id="自定义表单控件">自定义表单控件<a class="doc-anchor" href="#自定义表单控件">#</a></h3>
<p>自定义或第三方的表单控件，也可以与 <code>Form</code> 组件一起使用。只要该组件注入 <code>useFormItemContext</code> 并调用相应方法。</p>
<p><code>PriceInput</code> 组件：</p>
<h3 id="复杂的动态增减表单项">复杂的动态增减表单项<a class="doc-anchor" href="#复杂的动态增减表单项">#</a></h3>
<p>这个例子演示了一个表单中包含多个表单控件的情况。</p>
<h3 id="动态增减嵌套字段">动态增减嵌套字段<a class="doc-anchor" href="#动态增减嵌套字段">#</a></h3>
<p>通过数组 <code>name</code> 绑定嵌套字段。</p>
<h3 id="动态校验规则">动态校验规则<a class="doc-anchor" href="#动态校验规则">#</a></h3>
<p>根据不同情况执行不同的校验规则。</p>
<h3 id="多表单联动">多表单联动<a class="doc-anchor" href="#多表单联动">#</a></h3>
<p>把一个表单的数据添加到另一个表单。</p>
<h3 id="弹出层中的新建表单">弹出层中的新建表单<a class="doc-anchor" href="#弹出层中的新建表单">#</a></h3>
<p>当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用 <code>Dialog</code> 弹出一个表单，用户填写必要信息后创建新的项。</p>
<h3 id="滚动到第一个错误字段">滚动到第一个错误字段<a class="doc-anchor" href="#滚动到第一个错误字段">#</a></h3>
<p>当表单超过一屏，在验证失败后想要将验证错误的表单域定位到屏幕中，可以设置 <code>scroll-to-first-error</code> 属性。</p>
<h2 id="API">API<a class="doc-anchor" href="#API">#</a></h2>
<h3 id="FormProps">FormProps<a class="doc-anchor" href="#FormProps">#</a></h3>
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
<td>model</td>
<td>表单数据对象</td>
<td>Record&lt;string, any&gt;</td>
<td>-</td>
</tr>
<tr>
<td>rules</td>
<td>表单验证规则</td>
<td>FormRules</td>
<td>-</td>
</tr>
<tr>
<td>validate-trigger</td>
<td>设置字段校验的时机</td>
<td>TriggerType</td>
<td>change</td>
</tr>
<tr>
<td>validate-on-rule-change</td>
<td>是否在 <code>rules</code> 属性改变后立即触发一次验证</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>direction</td>
<td>表单排列方向</td>
<td>'horizontal' | 'vertical'</td>
<td>'horizontal'</td>
</tr>
<tr>
<td>label-width</td>
<td>标签宽度</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>label-align</td>
<td>标签水平对齐方式</td>
<td>'start' | 'center' | 'end'</td>
<td>'start'</td>
</tr>
<tr>
<td>label-valign</td>
<td>标签垂直对齐方式</td>
<td>'start' | 'center' | 'end'</td>
<td>'start'</td>
</tr>
<tr>
<td>star-position</td>
<td>必填星号在标签的左边或右边</td>
<td>'left' | 'right'</td>
<td>'left'</td>
</tr>
<tr>
<td>show-rrror</td>
<td>是否显示校验错误信息</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>scroll-to-first-error</td>
<td>当校验失败时，滚动到第一个错误表单项</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用该表单内的所有组件。 如果设置为 <code>true</code>, 它将覆盖内部组件的 <code>disabled</code> 属性</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>是否只读该表单内的所有组件。 如果设置为 <code>true</code>, 它将覆盖内部组件的 <code>readonly</code> 属性</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="FormSlots">FormSlots<a class="doc-anchor" href="#FormSlots">#</a></h3>
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
</tbody>
</table></div>
<h3 id="FormExpose">FormExpose<a class="doc-anchor" href="#FormExpose">#</a></h3>
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
<td>validate</td>
<td>对整个表单的内容进行验证。</td>
<td>(nameList?: FieldName[]) =&gt; Promise<void></td>
</tr>
<tr>
<td>reset</td>
<td>重置表单项，将其值重置为初始值，并移除校验结果。</td>
<td>(nameList?: FieldName[]) =&gt; Promise<void></td>
</tr>
<tr>
<td>clearValidate</td>
<td>清理指定字段的表单验证信息。</td>
<td>(nameList?: FieldName[]) =&gt; Promise<void></td>
</tr>
<tr>
<td>scrollToField</td>
<td>滚动到指定的字段</td>
<td>(name: FieldName) =&gt; void</td>
</tr>
</tbody>
</table></div>
<h3 id="FormItemProps">FormItemProps<a class="doc-anchor" href="#FormItemProps">#</a></h3>
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
<td>direction</td>
<td>表单排列方向</td>
<td>'horizontal' | 'vertical'</td>
<td>'horizontal'</td>
</tr>
<tr>
<td>label-width</td>
<td>标签宽度</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>label-align</td>
<td>标签水平对齐方式</td>
<td>'start' | 'center' | 'end'</td>
<td>'start'</td>
</tr>
<tr>
<td>label-valign</td>
<td>标签垂直对齐方式</td>
<td>'start' | 'center' | 'end'</td>
<td>'start'</td>
</tr>
<tr>
<td>star-position</td>
<td>必填星号在标签的左边或右边</td>
<td>'left' | 'right'</td>
<td>'left'</td>
</tr>
<tr>
<td>show-star</td>
<td>是否显示星号，会覆盖验证规则</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>标签文本</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>required</td>
<td>是否为必填项，如不设置，则会根据校验规则确认</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>表单域 <code>model</code> 字段，在使用 <code>validate、reset</code> 方法的情况下，该属性是必填的。</td>
<td>FieldName</td>
<td>-</td>
</tr>
<tr>
<td>rules</td>
<td>表单验证规则</td>
<td>Rule | Rule[]</td>
<td>-</td>
</tr>
<tr>
<td>validate-trigger</td>
<td>设置字段校验的时机</td>
<td>TriggerType</td>
<td>change</td>
</tr>
<tr>
<td>error</td>
<td>表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 <code>error</code>，并显示该错误信息。</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>show-error</td>
<td>是否显示校验错误信息</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>inlaid</td>
<td>去掉边框和内边距，用于嵌入到其他组件中</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3 id="FormItemSlots">FormItemSlots<a class="doc-anchor" href="#FormItemSlots">#</a></h3>
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
<td>label</td>
<td>自定义标签内容</td>
<td>-</td>
</tr>
<tr>
<td>validate</td>
<td>同默认插槽，额外接受当前验证状态属性</td>
<td>&#123; state: ValidateState &#125;</td>
</tr>
</tbody>
</table></div>
<h3 id="FormItemExpose">FormItemExpose<a class="doc-anchor" href="#FormItemExpose">#</a></h3>
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
<td>validate</td>
<td>对整个表单的内容进行验证。</td>
<td>(trigger?: string | string[]) =&gt; Promise<void></td>
</tr>
<tr>
<td>reset</td>
<td>重置该表单项，将其值重置为初始值，并移除校验结果。</td>
<td>() =&gt; Promise<void></td>
</tr>
<tr>
<td>clearValidate</td>
<td>清理指定字段的表单验证信息。</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>scrollToField</td>
<td>滚动到当前字段</td>
<td>() =&gt; void</td>
</tr>
<tr>
<td>validateMessage</td>
<td>当前验证信息</td>
<td>Ref<string></td>
</tr>
<tr>
<td>validateState</td>
<td>当前验证状态</td>
<td>Ref<ValidateState></td>
</tr>
</tbody>
</table></div>
<h3 id="FormRules">FormRules<a class="doc-anchor" href="#FormRules">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">FormRules</span> <span class="token punctuation">&#123;</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> PropertyKey<span class="token punctuation">]</span><span class="token operator">:</span> Rule <span class="token operator">|</span> Rule<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> FormRules
<span class="token punctuation">&#125;</span>
</code></pre></div>
<h3 id="TriggerType">TriggerType<a class="doc-anchor" href="#TriggerType">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">TriggerType</span> <span class="token operator">=</span> <span class="token string">'change'</span> <span class="token operator">|</span> <span class="token string">'blur'</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token string">'change'</span> <span class="token operator">|</span> <span class="token string">'blur'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre></div>
<h3 id="FieldName">FieldName<a class="doc-anchor" href="#FieldName">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">FieldName</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre></div>
<h3 id="ValidateState">ValidateState<a class="doc-anchor" href="#ValidateState">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">ValidateState</span> <span class="token operator">=</span> <span class="token string">''</span> <span class="token operator">|</span> <span class="token string">'success'</span> <span class="token operator">|</span> <span class="token string">'error'</span> <span class="token operator">|</span> <span class="token string">'validating'</span>
</code></pre></div>
<h3 id="Rule">Rule<a class="doc-anchor" href="#Rule">#</a></h3>
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
<td>validator</td>
<td>使用函数自定义验证，具体说明如下</td>
<td>(value: any, rule: Rule) =&gt; Promise&lt;void&gt; | boolean | string | undefined</td>
<td>-</td>
</tr>
<tr>
<td>pattern</td>
<td>通过正则来进行校验</td>
<td>RegExp</td>
<td>-</td>
</tr>
<tr>
<td>message</td>
<td>校验失败的反馈文案</td>
<td>string | (() =&gt; string)</td>
<td>-</td>
</tr>
<tr>
<td>trigger</td>
<td>触发校验的时机</td>
<td>string | string[]</td>
<td>-</td>
</tr>
<tr>
<td>transform</td>
<td>将值转换后再进行校验</td>
<td>(value: any) =&gt; any</td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>使用内置的校验规则</td>
<td>ValidatorType</td>
<td>'string'</td>
</tr>
<tr>
<td>enum</td>
<td>是否匹配枚举中的值（需要将 type 设置为 enum）</td>
<td>(string | number)[]</td>
<td>-</td>
</tr>
<tr>
<td>len</td>
<td>当 <code>type</code> 为字符串（字符串长度）、数值（等于数值）、数组（数组长度）时有效</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>min</td>
<td>当 <code>type</code> 为字符串（字符串最小长度）、数值（最小值）、数组（数组最小长度）时有效</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>max</td>
<td>当 <code>type</code> 为字符串（字符串最大长度）、数值（最大值）、数组（数组最大长度）时有效</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>required</td>
<td>是否为必选字段，当值为空值时 <code>'', [], false, undefined, null</code>，校验不通过</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>whitespace</td>
<td><code>type</code> 为 <code>'string'</code> 时，如果字段仅包含空格则校验不通过</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h4 id="Rulevalidator说明">Rule['validator'] 说明<a class="doc-anchor" href="#Rulevalidator说明">#</a></h4>
<p>当函数返回值为 <code>fulfilled</code> 状态的 <code>Promise</code> 或者 <code>true</code> 则验证通过，否则验证不通过；
<code>Promise.reject</code> 的参数或者返回的字符串会作为错误验证信息，如果返回的不是字符串，则取 <code>Rule['message']</code> 的配置作为错误信息。</p>
<h3 id="ValidatorType">ValidatorType<a class="doc-anchor" href="#ValidatorType">#</a></h3>
<div class="doc-table-responsive"><table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>string</td>
<td>必须为字符串</td>
</tr>
<tr>
<td>number</td>
<td>必须为数值</td>
</tr>
<tr>
<td>boolean</td>
<td>必须为布尔值</td>
</tr>
<tr>
<td>function</td>
<td>必须为函数</td>
</tr>
<tr>
<td>regexp</td>
<td>必须为 <code>RegExp</code> 类型，或者作为 <code>RegExp()</code> 参数被实例化不会报错的字符串</td>
</tr>
<tr>
<td>integer</td>
<td>必须为数值，且为整数</td>
</tr>
<tr>
<td>float</td>
<td>必须为数值，且为小数</td>
</tr>
<tr>
<td>array</td>
<td>必须为数组</td>
</tr>
<tr>
<td>object</td>
<td>必须为对象，且不为数组和 <code>null</code></td>
</tr>
<tr>
<td>enum</td>
<td>必须存在于 <code>Rule['enum']</code> 中</td>
</tr>
<tr>
<td>date</td>
<td>必须为 <code>Date</code> 类型</td>
</tr>
<tr>
<td>url</td>
<td>必须为 <code>url</code></td>
</tr>
<tr>
<td>hex</td>
<td>必须为 <code>hex</code></td>
</tr>
<tr>
<td>email</td>
<td>必须为邮件</td>
</tr>
</tbody>
</table></div>
<h2 id="主题定制">主题定制<a class="doc-anchor" href="#主题定制">#</a></h2>
<h3 id="CSS变量">CSS 变量<a class="doc-anchor" href="#CSS变量">#</a></h3>
<div class="doc-code-wrapper"><pre class="language-scss"><code class="language-scss"><span class="token selector">page </span><span class="token punctuation">&#123;</span>
  <span class="token property">--sar-form-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-emphasis-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-card-border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-rounded-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-form-item-padding-x</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-padding-y</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-form-item-label-width</span><span class="token punctuation">:</span> 176rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-label-margin-right</span><span class="token punctuation">:</span> 24rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-label-margin-bottom</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-label-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-label-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-snug<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--sar-form-item-star-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-star-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-snug<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-star-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-danger<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-star-gap</span><span class="token punctuation">:</span> 8rpx<span class="token punctuation">;</span>

  <span class="token property">--sar-form-item-error-margin-top</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-error-font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-text-sm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-error-line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-leading-tight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--sar-form-item-error-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--sar-danger<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code></pre></div>
`,l=a({__name:"README",setup(e){return t(),(o,r)=>(d(),s("div",{class:"doc-content",innerHTML:n}))}});export{l as default};
