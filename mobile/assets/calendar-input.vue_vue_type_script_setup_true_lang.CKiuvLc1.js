import{E as e,d as a,G as l,g as o,A as t,p as s,U as r,o as n,c as i,e as d,w as u,f as m,s as v,F as p}from"./index-DFwJ2Oj-.js";import{_ as y}from"./popout-input.BJdVGvWw.js";import{S as c}from"./calendar.jXxBwBiP.js";import{_ as b}from"./popout.Dm-B4gdJ.js";import{f}from"./datetime-picker.vue_vue_type_script_setup_true_lang.DDcUBznL.js";import{u as h}from"./common.BM3Qp-Uy.js";const w={...e.calendarInput,...e.calendar},x="YYYY-MM-DD",D=a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"calendar-input",props:l({visible:{type:Boolean},title:{},showConfirm:{type:Boolean},validateEvent:{type:Boolean},rootStyle:{},rootClass:{},type:{},modelValue:{},min:{},max:{},currentDate:{},disabledDate:{type:Function},maxDays:{},overMaxDays:{type:Function},weekStartsOn:{},formatter:{type:Function},allowSameDay:{type:Boolean},severalMonths:{type:Boolean},placeholder:{},readonly:{type:Boolean},disabled:{type:Boolean},clearable:{type:Boolean}},w),emits:["update:visible","update:model-value"],setup(e,{emit:a}){const l=e,w=a,D=h(),_=o(l.modelValue);t((()=>l.modelValue),(()=>{_.value=l.modelValue,l.validateEvent&&(null==D||D.onChange())}));const C=o(l.modelValue);t(_,(()=>{C.value=_.value}));const V=s((()=>{const e=C.value;return!e||Array.isArray(e)&&0===e.length})),g=()=>{_.value=C.value,w("update:model-value",C.value),k.value=j()},B=e=>{C.value=e,l.showConfirm||V.value||(g(),A.value=!1)},k=o(""),{t:S}=r("calendar");function j(){return!_.value||Array.isArray(_.value)&&0===_.value.length?"":(e=_.value,"single"===(a=l.type)?f(e,x):"range"===a?`${f(e[0],x)} ${S("to")} ${f(e[1],x)}`:"multiple"===a?S("multipleOutlet",{count:e.length}):"");var e,a}t(_,(()=>{k.value=j()}),{immediate:!0});const M=()=>{k.value="",_.value=void 0,w("update:model-value",void 0)},A=o(l.visible);t((()=>l.visible),(()=>{A.value=l.visible}));const F=e=>{A.value=e,w("update:visible",e)},U=()=>{A.value=!0,w("update:visible",!0)};return(e,a)=>(n(),i(p,null,[d(y,{modelValue:k.value,"onUpdate:modelValue":a[0]||(a[0]=e=>k.value=e),placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,clearable:e.clearable,onClear:M,onClick:U},null,8,["modelValue","placeholder","readonly","disabled","clearable"]),d(b,{"root-class":e.rootClass,"root-style":e.rootStyle,visible:A.value,"onUpdate:visible":F,title:e.title??e.placeholder,"show-confirm":e.showConfirm,"confirm-disabled":V.value,onConfirm:g},{visible:u((({already:a})=>[a?(n(),m(c,{key:0,"model-value":C.value,"onUpdate:modelValue":B,type:e.type,min:e.min,max:e.max,"current-date":e.currentDate,"disabled-date":e.disabledDate,"max-days":e.maxDays,"over-max-days":e.overMaxDays,"week-starts-on":e.weekStartsOn,formatter:e.formatter,"allow-same-day":e.allowSameDay,"several-months":e.severalMonths},null,8,["model-value","type","min","max","current-date","disabled-date","max-days","over-max-days","week-starts-on","formatter","allow-same-day","several-months"])):v("",!0)])),_:1},8,["root-class","root-style","visible","title","show-confirm","confirm-disabled"])],64))}});export{D as _};
