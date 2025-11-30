import{_ as c,c as l,w as t,r as o,o as u,a as r,b as n,d as s}from"./index-Dhblos4L.js";const k={};function i(b,a){const e=o("SCMarkdown"),p=o("SCFrontMatterProvider");return u(),l(p,{"front-matter":"%7B%22nav%22%3A%22%E6%8C%87%E5%BC%95%22%2C%22title%22%3A%22%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE%22%2C%22order%22%3A2%2C%22group%22%3A%7B%22title%22%3A%22%E8%BF%9B%E9%98%B6%22%7D%7D"},{default:t(()=>[r(e,null,{default:t(()=>a[0]||(a[0]=[n("h2",{id:"介绍"},[s("介绍"),n("a",{class:"sc-anchor",href:"#介绍"},"#")],-1),n("p",null,[s("有些组件的属性设置了默认值，如果需要自定义这些默认值，可在入口文件中通过 "),n("code",null,"setConfig"),s(" 函数进行设置。")],-1),n("p",null,[s("例如，下面将按钮的默认类型设为 "),n("code",null,"outline"),s("：")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// main.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" setConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp'"),s(`

`),n("span",{class:"token function"},"setConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  button`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'outline'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h2",{id:"批量设置默认动画时长"},[s("批量设置默认动画时长"),n("a",{class:"sc-anchor",href:"#批量设置默认动画时长"},"#")],-1),n("p",null,[n("code",null,"ActionSheet"),s("、"),n("code",null,"Dialog"),s("、"),n("code",null,"Notify"),s(" 等这些组件都有一个进出场动画，通常默认动画时长为 "),n("code",null,"300"),s(" 毫秒，如果要自定义默认时长，除了一个个列出来进行设置之外，还可以通过 "),n("code",null,"getDurationConfig"),s(" 函数简化设置：")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// main.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" setConfig"),n("span",{class:"token punctuation"},","),s(" getDurationConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp'"),s(`

`),n("span",{class:"token function"},"setConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getDurationConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("p",null,[n("code",null,"getDurationConfig"),s(" 接收一个时长数值，返回 "),n("code",null,"setConfig"),s(" 参数配置对象。")],-1),n("p",null,[n("code",null,"setConfig"),s(" 可以接受任意个参数。例如，下面设置了除 "),n("code",null,"Toast"),s(" 组件外，其他组件的动画时长都为 0。")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token function"},"setConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getDurationConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  toast`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h2",{id:"完整默认配置"},[s("完整默认配置"),n("a",{class:"sc-anchor",href:"#完整默认配置"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" defaultConfig"),n("span",{class:"token operator"},":"),s(" RequiredConfigOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 全局初始 zIndex"),s(`
  initialZIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token comment"},`/**
   * 设置点击清除按钮后的值
   *
   * - 类型：() => any
   * - 默认值：() = undefined
   *
   * 支持以下组件：
   *
   * - CalendarInput
   * - DatetimePickerInput
   * - DatetimeRangePickerInput
   * - CascaderInput
   * - CheckboxInput
   * - PickerInput
   * - RadioInput
   */`),s(`
  valueOnClear`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},","),s(`

  actionSheet`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    overlayClosable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"250"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  alert`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    shape`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'circle'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  avatarGroup`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    coverage`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(`
    showRemain`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  backTop`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    visibleHeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  badge`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"99"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  button`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},","),s(`
    theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),s(`
    size`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'medium'"),n("span",{class:"token punctuation"},","),s(`
    hoverStopPropagation`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    lang`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'en'"),n("span",{class:"token punctuation"},","),s(`
    showMessageCard`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    block`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  calendar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'single'"),n("span",{class:"token punctuation"},","),s(`
    maxDays`),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"MAX_SAFE_INTEGER"),n("span",{class:"token punctuation"},","),s(`
    weekStartsOn`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  calendarInput`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    outletFormat`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  calendarPopout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    showConfirm`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  cascaderPopout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    showConfirm`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  cascaderInput`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    maxRows`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  checkbox`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  checkboxGroup`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    direction`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'vertical'"),n("span",{class:"token punctuation"},","),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  checkboxInput`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  checkboxPopout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    iconPosition`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  coolIcon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    shape`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'oval'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  countDown`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    time`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    autoStart`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    format`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'HH:mm:ss'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  countTo`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    precision`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    separatorDigit`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  cropImage`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),s(`
    cropScale`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1:1'"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'png'"),n("span",{class:"token punctuation"},","),s(`
    quality`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.92"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  cropImageAgent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'cropImage'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  datetimePicker`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yMd'"),n("span",{class:"token punctuation"},","),s(`
    calendar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'solar'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  datetimePickerInput`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  datetimePickerPopout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  datetimeRangePicker`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yMd'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  datetimeRangePickerInput`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  datetimeRangePickerPopout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  dialog`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    headed`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    buttonType`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'round'"),n("span",{class:"token punctuation"},","),s(`
    showCancel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    showConfirm`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    overlayClosable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  dialogAgent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'dialog'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  divider`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'solid'"),n("span",{class:"token punctuation"},","),s(`
    hairline`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  dropdown`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    direction`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'down'"),n("span",{class:"token punctuation"},","),s(`
    disabled`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    awayClosable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    overlayClosable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  empty`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'empty'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  fab`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    overlayClosable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    hideName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),s(`
    draggable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    axis`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'y'"),n("span",{class:"token punctuation"},","),s(`
    gapX`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
    gapY`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  floatingBubble`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    draggable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    axis`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'y'"),n("span",{class:"token punctuation"},","),s(`
    gapX`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
    gapY`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  floatingPanel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),s(`
    contentDraggable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    safeAreaInsetBottom`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  form`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    validateTrigger`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'change'"),n("span",{class:"token punctuation"},","),s(`
    validateOnRuleChange`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    direction`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'horizontal'"),n("span",{class:"token punctuation"},","),s(`
    labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'start'"),n("span",{class:"token punctuation"},","),s(`
    labelValign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
    starPosition`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
    contentPosition`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
    showError`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    scrollDuration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  formItem`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    showError`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  grid`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    columns`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    direction`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'vertical'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
    family`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sari'"),n("span",{class:"token punctuation"},","),s(`
    separate`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  image`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    mode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'aspectFill'"),n("span",{class:"token punctuation"},","),s(`
    shape`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'square'"),n("span",{class:"token punctuation"},","),s(`
    fade`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    loadingIcon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image'"),n("span",{class:"token punctuation"},","),s(`
    errorIcon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image-error'"),n("span",{class:"token punctuation"},","),s(`
    showMenuByLongpress`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    showLoading`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    showError`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  indexes`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    hintDuration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  input`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    enableNative`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    controlled`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"140"),n("span",{class:"token punctuation"},","),s(`
    adjustPosition`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    ignoreCompositionEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    showConfirmBar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    disableDefaultPadding`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    modelValue`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    cursorSpacing`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(`
    cursor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    selectionStart`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    selectionEnd`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    inputmode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'text'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  keyboard`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'number'"),n("span",{class:"token punctuation"},","),s(`
    mode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'chinese'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  listItem`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arrowDirection`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'right'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  loading`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'circular'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  marquee`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    direction`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'vertical'"),n("span",{class:"token punctuation"},","),s(`
    delay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
    speed`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  noticeBar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    delay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
    speed`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
    scrollable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'auto'"),n("span",{class:"token punctuation"},","),s(`
    visible`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  notify`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"250"),n("span",{class:"token punctuation"},","),s(`
    timeout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  notifyAgent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'notify'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  overlay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"250"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  pagination`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    total`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    pageSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
    current`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    pageButtonCount`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'multi'"),n("span",{class:"token punctuation"},","),s(`
    multiCount`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  passwordInput`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    length`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'border'"),n("span",{class:"token punctuation"},","),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  picker`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    immediateChange`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  pickerInput`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  pickerPopout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  popout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'loose'"),n("span",{class:"token punctuation"},","),s(`
    showConfirm`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    showClose`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    showFooter`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    overlay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    overlayClosable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"250"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  popoutInput`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arrow`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'caret-right'"),n("span",{class:"token punctuation"},","),s(`
    arrowFamily`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sari'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  popover`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bottom'"),n("span",{class:"token punctuation"},","),s(`
    direction`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'vertical'"),n("span",{class:"token punctuation"},","),s(`
    theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'light'"),n("span",{class:"token punctuation"},","),s(`
    refGap`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
    viewportGap`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
    transparent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  popup`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"250"),n("span",{class:"token punctuation"},","),s(`
    effect`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'fade'"),n("span",{class:"token punctuation"},","),s(`
    overlay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    overlayClosable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    lockScroll`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  progressBar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    percent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    showText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  progressCircle`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    percent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    thickness`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  pullDownRefresh`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    threshold`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
    headerHeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
    transitionDuration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),s(`
    doneDuration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  qrcode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ecl`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'M'"),n("span",{class:"token punctuation"},","),s(`
    size`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'320rpx'"),n("span",{class:"token punctuation"},","),s(`
    canvasSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"400"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'canvas'"),n("span",{class:"token punctuation"},","),s(`
    text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#000'"),n("span",{class:"token punctuation"},","),s(`
    bgColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
    quietZoneModules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  radioGroup`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    direction`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'vertical'"),n("span",{class:"token punctuation"},","),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  radioInput`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  radioPopout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'circle'"),n("span",{class:"token punctuation"},","),s(`
    iconPosition`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  rate`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    count`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
    icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'star-fill'"),n("span",{class:"token punctuation"},","),s(`
    voidIcon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'star'"),n("span",{class:"token punctuation"},","),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  readMore`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    maxHeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  resizeSensor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    threshold`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  result`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  search`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    shape`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'square'"),n("span",{class:"token punctuation"},","),s(`
    focus`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  segmented`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    size`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'middle'"),n("span",{class:"token punctuation"},","),s(`
    shape`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'square'"),n("span",{class:"token punctuation"},","),s(`
    direction`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'horizontal'"),n("span",{class:"token punctuation"},","),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  shareSheet`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    overlayClosable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"250"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  signature`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    lineWidth`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    fullScreen`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#000'"),n("span",{class:"token punctuation"},","),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'png'"),n("span",{class:"token punctuation"},","),s(`
    target`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'dataURL'"),n("span",{class:"token punctuation"},","),s(`
    quality`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.92"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  skeleton`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    rows`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    loading`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  slider`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    min`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
    step`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  space`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    direction`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'horizontal'"),n("span",{class:"token punctuation"},","),s(`
    size`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'middle'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  statusBar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  stepper`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    min`),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"MIN_SAFE_INTEGER"),n("span",{class:"token punctuation"},","),s(`
    max`),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"MAX_SAFE_INTEGER"),n("span",{class:"token punctuation"},","),s(`
    step`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    inputType`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'number'"),n("span",{class:"token punctuation"},","),s(`
    press`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    pressTime`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"350"),n("span",{class:"token punctuation"},","),s(`
    interval`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    size`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'medium'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  steps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    current`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    center`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function-variable function"},"itemList"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    direction`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'horizontal'"),n("span",{class:"token punctuation"},","),s(`
    finishIcon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'check-circle-fill'"),n("span",{class:"token punctuation"},","),s(`
    processIcon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'circle'"),n("span",{class:"token punctuation"},","),s(`
    waitIcon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'circle'"),n("span",{class:"token punctuation"},","),s(`
    errorIcon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'x-circle'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  swiperDot`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'dot'"),n("span",{class:"token punctuation"},","),s(`
    current`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    total`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token keyword"},"switch"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    checkedValue`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    uncheckedValue`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tabbar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    bordered`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  table`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    bordered`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    underline`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tabs`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'line'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tag`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},","),s(`
    size`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'medium'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  toast`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'text'"),n("span",{class:"token punctuation"},","),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
    overlay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    transparent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    timeout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1500"),n("span",{class:"token punctuation"},","),s(`
    duration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  toastAgent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'toast'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tree`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    defaultExpandAll`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    filterMode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'lenient'"),n("span",{class:"token punctuation"},","),s(`
    accordion`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  upload`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    accept`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function-variable function"},"sourceType"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'album'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'camera'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function-variable function"},"sizeType"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'original'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'compressed'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    maxDuration`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},","),s(`
    maxCount`),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"MAX_SAFE_INTEGER"),n("span",{class:"token punctuation"},","),s(`
    maxSize`),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"MAX_SAFE_INTEGER"),n("span",{class:"token punctuation"},","),s(`
    removable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    validateEvent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  uploadPreview`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'pending'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  waterfall`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    columns`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    columnGap`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    rowGap`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  watermark`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"64"),n("span",{class:"token punctuation"},","),s(`
    rotate`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),s(`
    zIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function-variable function"},"gap"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1)])),_:1})]),_:1})}const d=c(k,[["render",i]]);export{d as default};
