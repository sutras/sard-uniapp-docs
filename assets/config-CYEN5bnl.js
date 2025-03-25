import{M as s}from"./index-CXw1bFST.js";import{d as a,c as p,o as t}from"./index-CxgpI3Gh.js";const o=`<h2 id="简介">简介<a class="doc-anchor" href="#简介">#</a></h2>
<p>有些组件的属性设置了默认值，如果需要自定义这些默认值，可在入口文件中通过 <code>setConfig</code> 函数进行设置。</p>
<p>例如，下面将按钮的默认类型设为 <code>outline</code>：</p>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> setConfig <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token function">setConfig</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  button<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'outline'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</code></pre>
</div><h2 id="批量设置默认动画时长">批量设置默认动画时长<a class="doc-anchor" href="#批量设置默认动画时长">#</a></h2>
<p><code>ActionSheet</code>、<code>Dialog</code>、<code>Notify</code> 等这些组件都有一个进出场动画，通常默认动画时长为 <code>300</code> 毫秒，如果要自定义默认时长，除了一个个列出来进行设置之外，还可以通过 <code>getDurationConfig</code> 函数简化设置：</p>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> setConfig<span class="token punctuation">,</span> getDurationConfig <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'sard-uniapp'</span>

<span class="token function">setConfig</span><span class="token punctuation">(</span><span class="token function">getDurationConfig</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>
</div><p><code>getDurationConfig</code> 接收一个时长数值，返回 <code>setConfig</code> 参数配置对象。</p>
<p><code>setConfig</code> 可以接受任意个参数。例如，下面设置了除 <code>Toast</code> 组件外，其他组件的动画时长都为 0。</p>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token function">setConfig</span><span class="token punctuation">(</span><span class="token function">getDurationConfig</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
  toast<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    duration<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</code></pre>
</div><h2 id="完整默认配置">完整默认配置<a class="doc-anchor" href="#完整默认配置">#</a></h2>
<div class="doc-code-wrapper"><pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">const</span> defaultConfig <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// 全局初始 zIndex</span>
  initialZIndex<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>

  actionSheet<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    overlayClosable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    duration<span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  alert<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'primary'</span> <span class="token keyword">as</span> AlertProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  avatar<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    shape<span class="token operator">:</span> <span class="token string">'circle'</span> <span class="token keyword">as</span> AvatarProps<span class="token punctuation">[</span><span class="token string">'shape'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  backTop<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    visibleHeight<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  badge<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    value<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    max<span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  button<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'default'</span> <span class="token keyword">as</span> ButtonProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    theme<span class="token operator">:</span> <span class="token string">'primary'</span> <span class="token keyword">as</span> ButtonProps<span class="token punctuation">[</span><span class="token string">'theme'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span> <span class="token string">'medium'</span> <span class="token keyword">as</span> ButtonProps<span class="token punctuation">[</span><span class="token string">'size'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    hoverStopPropagation<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    lang<span class="token operator">:</span> <span class="token string">'en'</span><span class="token punctuation">,</span>
    showMessageCard<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    block<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  calendar<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'single'</span> <span class="token keyword">as</span> CalendarProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    maxDays<span class="token operator">:</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">,</span>
    weekStartsOn<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  calendarInput<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    showConfirm<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    outletFormat<span class="token operator">:</span> <span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  cascaderInput<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    showConfirm<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  checkbox<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  checkboxGroup<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    direction<span class="token operator">:</span> <span class="token string">'vertical'</span> <span class="token keyword">as</span> CheckboxGroupProps<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  checkboxInput<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  countDown<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    time<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    autoStart<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    format<span class="token operator">:</span> <span class="token string">'HH:mm:ss'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  countTo<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    value<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    precision<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    separatorDigit<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    duration<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  cropImage<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    duration<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
    cropScale<span class="token operator">:</span> <span class="token string">'1:1'</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">'png'</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">,</span>
    quality<span class="token operator">:</span> <span class="token number">0.92</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  cropImageAgent<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    id<span class="token operator">:</span> <span class="token string">'cropImage'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  datetimePicker<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'yMd'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  datetimePickerInput<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  datetimeRangePicker<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'yMd'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  datetimeRangePickerInput<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  dialog<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    headed<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    buttonType<span class="token operator">:</span> <span class="token string">'round'</span> <span class="token keyword">as</span> DialogProps<span class="token punctuation">[</span><span class="token string">'buttonType'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    showCancel<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showConfirm<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    overlayClosable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    duration<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  dialogAgent<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    id<span class="token operator">:</span> <span class="token string">'dialog'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  dropdown<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    direction<span class="token operator">:</span> <span class="token string">'down'</span> <span class="token keyword">as</span> DropdownProps<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    disabled<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    awayClosable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    overlayClosable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    duration<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  empty<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    icon<span class="token operator">:</span> <span class="token string">'empty'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  fab<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    overlayClosable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    hideName<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    duration<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  floatingBubble<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    axis<span class="token operator">:</span> <span class="token string">'y'</span> <span class="token keyword">as</span> FloatingBubbleProps<span class="token punctuation">[</span><span class="token string">'axis'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    gapX<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    gapY<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  form<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    validateTrigger<span class="token operator">:</span> <span class="token string">'change'</span> <span class="token keyword">as</span> FormProps<span class="token punctuation">[</span><span class="token string">'validateTrigger'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    validateOnRuleChange<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    direction<span class="token operator">:</span> <span class="token string">'horizontal'</span> <span class="token keyword">as</span> FormProps<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    labelAlign<span class="token operator">:</span> <span class="token string">'start'</span> <span class="token keyword">as</span> FormProps<span class="token punctuation">[</span><span class="token string">'labelAlign'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    labelValign<span class="token operator">:</span> <span class="token string">'center'</span> <span class="token keyword">as</span> FormProps<span class="token punctuation">[</span><span class="token string">'labelValign'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    starPosition<span class="token operator">:</span> <span class="token string">'left'</span> <span class="token keyword">as</span> FormProps<span class="token punctuation">[</span><span class="token string">'starPosition'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    showError<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    scrollDuration<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    showError<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  grid<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    columns<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    direction<span class="token operator">:</span> <span class="token string">'vertical'</span> <span class="token keyword">as</span> GridProps<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    family<span class="token operator">:</span> <span class="token string">'sari'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  indexes<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    hintDuration<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  input<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    maxlength<span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span>
    adjustPosition<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    ignoreCompositionEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showConfirmBar<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    disableDefaultPadding<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    modelValue<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    cursorSpacing<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    confirmType<span class="token operator">:</span> <span class="token string">'done'</span> <span class="token keyword">as</span> InputProps<span class="token punctuation">[</span><span class="token string">'confirmType'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    cursor<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    selectionStart<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    selectionEnd<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    inputmode<span class="token operator">:</span> <span class="token string">'text'</span> <span class="token keyword">as</span> InputProps<span class="token punctuation">[</span><span class="token string">'inputmode'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  keyboard<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'number'</span> <span class="token keyword">as</span> KeyboardProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  listItem<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    arrowDirection<span class="token operator">:</span> <span class="token string">'right'</span> <span class="token keyword">as</span> ListItemProps<span class="token punctuation">[</span><span class="token string">'arrowDirection'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  loading<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'circular'</span> <span class="token keyword">as</span> LoadingProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  marquee<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    direction<span class="token operator">:</span> <span class="token string">'vertical'</span> <span class="token keyword">as</span> MarqueeProps<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    delay<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    speed<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  noticeBar<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    delay<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    speed<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    scrollable<span class="token operator">:</span> <span class="token string">'auto'</span> <span class="token keyword">as</span> NoticeBarProps<span class="token punctuation">[</span><span class="token string">'scrollable'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    visible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  notify<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'primary'</span> <span class="token keyword">as</span> NotifyProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    position<span class="token operator">:</span> <span class="token string">'top'</span> <span class="token keyword">as</span> NotifyProps<span class="token punctuation">[</span><span class="token string">'position'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    duration<span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>
    timeout<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  notifyAgent<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    id<span class="token operator">:</span> <span class="token string">'notify'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  overlay<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    duration<span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  pagination<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    total<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    pageSize<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    current<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    pageButtonCount<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">'multi'</span> <span class="token keyword">as</span> PaginationProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    multiCount<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  passwordInput<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    length<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">'border'</span> <span class="token keyword">as</span> PasswordInputProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  picker<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    immediateChange<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  pickerInput<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  popout<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'loose'</span> <span class="token keyword">as</span> PopoutProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    showConfirm<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showClose<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showFooter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    overlayClosable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    duration<span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  popover<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    position<span class="token operator">:</span> <span class="token string">'bottom'</span> <span class="token keyword">as</span> PopoverProps<span class="token punctuation">[</span><span class="token string">'position'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    direction<span class="token operator">:</span> <span class="token string">'vertical'</span> <span class="token keyword">as</span> PopoverProps<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    theme<span class="token operator">:</span> <span class="token string">'light'</span> <span class="token keyword">as</span> PopoverProps<span class="token punctuation">[</span><span class="token string">'theme'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    refGap<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    viewportGap<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    transparent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    duration<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  popup<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    duration<span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>
    effect<span class="token operator">:</span> <span class="token string">'fade'</span> <span class="token keyword">as</span> PopupProps<span class="token punctuation">[</span><span class="token string">'effect'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    overlay<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  progressBar<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    percent<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    showText<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  progressCircle<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    percent<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    thickness<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  pullDownRefresh<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    threshold<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    headerHeight<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    transitionDuration<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    doneDuration<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  qrcode<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    ecl<span class="token operator">:</span> <span class="token string">'M'</span> <span class="token keyword">as</span> QrcodeProps<span class="token punctuation">[</span><span class="token string">'ecl'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span> <span class="token string">'320rpx'</span><span class="token punctuation">,</span>
    canvasSize<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">'canvas'</span> <span class="token keyword">as</span> QrcodeProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    text<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">'#000'</span><span class="token punctuation">,</span>
    bgColor<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    quietZoneModules<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  radioGroup<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    direction<span class="token operator">:</span> <span class="token string">'vertical'</span> <span class="token keyword">as</span> RadioGroupProps<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  radioInput<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">'circle'</span> <span class="token keyword">as</span> RadioInputProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  rate<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    count<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">'star-fill'</span><span class="token punctuation">,</span>
    voidIcon<span class="token operator">:</span> <span class="token string">'star'</span><span class="token punctuation">,</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  result<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    status<span class="token operator">:</span> <span class="token string">'info'</span> <span class="token keyword">as</span> ResultProps<span class="token punctuation">[</span><span class="token string">'status'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  search<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    shape<span class="token operator">:</span> <span class="token string">'square'</span> <span class="token keyword">as</span> SearchProps<span class="token punctuation">[</span><span class="token string">'shape'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    focus<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  shareSheet<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    overlayClosable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    duration<span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  signature<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    lineWidth<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    fullScreen<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">'#000'</span><span class="token punctuation">,</span>
    duration<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">'png'</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">,</span>
    target<span class="token operator">:</span> <span class="token string">'dataURL'</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">,</span>
    quality<span class="token operator">:</span> <span class="token number">0.92</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  skeleton<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    rows<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    loading<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  slider<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    max<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    step<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  space<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    direction<span class="token operator">:</span> <span class="token string">'horizontal'</span> <span class="token keyword">as</span> SpaceProps<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span> <span class="token string">'middle'</span> <span class="token keyword">as</span> SpaceProps<span class="token punctuation">[</span><span class="token string">'size'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  statusBar<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    height<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  stepper<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    min<span class="token operator">:</span> Number<span class="token punctuation">.</span><span class="token constant">MIN_SAFE_INTEGER</span><span class="token punctuation">,</span>
    max<span class="token operator">:</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">,</span>
    step<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    inputType<span class="token operator">:</span> <span class="token string">'number'</span> <span class="token keyword">as</span> StepperProps<span class="token punctuation">[</span><span class="token string">'inputType'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    press<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    pressTime<span class="token operator">:</span> <span class="token number">350</span><span class="token punctuation">,</span>
    interval<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span> <span class="token string">'medium'</span> <span class="token keyword">as</span> StepperProps<span class="token punctuation">[</span><span class="token string">'size'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  steps<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    current<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    center<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    direction<span class="token operator">:</span> <span class="token string">'horizontal'</span> <span class="token keyword">as</span> StepsProps<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    finishIcon<span class="token operator">:</span> <span class="token string">'check-circle-fill'</span><span class="token punctuation">,</span>
    processIcon<span class="token operator">:</span> <span class="token string">'circle'</span><span class="token punctuation">,</span>
    waitIcon<span class="token operator">:</span> <span class="token string">'circle'</span><span class="token punctuation">,</span>
    errorIcon<span class="token operator">:</span> <span class="token string">'x-circle'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  swiperDot<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'dot'</span> <span class="token keyword">as</span> SwiperDotProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    current<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    total<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token string">'title'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token keyword">switch</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    checkedValue<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    uncheckedValue<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  tabbar<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    bordered<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  table<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    bordered<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    underline<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  tabs<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'line'</span> <span class="token keyword">as</span> TabsProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  tag<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    theme<span class="token operator">:</span> <span class="token string">'default'</span> <span class="token keyword">as</span> TagProps<span class="token punctuation">[</span><span class="token string">'theme'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span> <span class="token string">'medium'</span> <span class="token keyword">as</span> TagProps<span class="token punctuation">[</span><span class="token string">'size'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  toast<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">'text'</span> <span class="token keyword">as</span> ToastProps<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    position<span class="token operator">:</span> <span class="token string">'center'</span> <span class="token keyword">as</span> ToastProps<span class="token punctuation">[</span><span class="token string">'position'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    overlay<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    timeout<span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span>
    duration<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  toastAgent<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    id<span class="token operator">:</span> <span class="token string">'toast'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  tree<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    defaultExpandAll<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    filterMode<span class="token operator">:</span> <span class="token string">'lenient'</span> <span class="token keyword">as</span> TreeProps<span class="token punctuation">[</span><span class="token string">'filterMode'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    accordion<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  upload<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    accept<span class="token operator">:</span> <span class="token string">'image'</span> <span class="token keyword">as</span> UploadProps<span class="token punctuation">[</span><span class="token string">'accept'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function-variable function">sourceType</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token string">'album'</span><span class="token punctuation">,</span> <span class="token string">'camera'</span><span class="token punctuation">]</span> <span class="token keyword">as</span> UploadProps<span class="token punctuation">[</span><span class="token string">'sourceType'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function-variable function">sizeType</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token string">'original'</span><span class="token punctuation">,</span> <span class="token string">'compressed'</span><span class="token punctuation">]</span> <span class="token keyword">as</span> UploadProps<span class="token punctuation">[</span><span class="token string">'sizeType'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    maxDuration<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    maxCount<span class="token operator">:</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">,</span>
    maxSize<span class="token operator">:</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">,</span>
    removable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    validateEvent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  uploadPreview<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    status<span class="token operator">:</span> <span class="token string">'pending'</span> <span class="token keyword">as</span> UploadPreviewProps<span class="token punctuation">[</span><span class="token string">'status'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>
</code></pre>
</div>`,r=a({__name:"config",setup(e){const n={nav:"指引",title:"全局配置",order:2,group:{title:"进阶"}};return(c,l)=>(t(),p(s,{content:o,fm:n}))}});export{r as default};
