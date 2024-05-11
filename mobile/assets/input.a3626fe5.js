import{E as e,d as o,p as a,g as s,A as l,q as t,s as n,o as r,f as d,w as i,e as u,h as c,u as p,x as m,v as h,y as f,a7 as g,R as y,a8 as b,i as v,t as w,l as S,a9 as B,aa as C}from"./index-aa8abc65.js";import{a as P,b as x,_ as E}from"./index.776be883.js";import{a as k,u as H}from"./common.c6a791ea.js";const j=E(o({options:{virtualHost:!0,styleIsolation:"shared"},__name:"input",props:{placeholder:String,placeholderStyle:String,placeholderClass:String,disabled:Boolean,maxlength:{type:Number,default:e.input.maxlength},focus:Boolean,cursorSpacing:Number,cursor:Number,confirmType:String,confirmHold:Number,selectionStart:Number,selectionEnd:Number,adjustPosition:{type:Boolean,default:e.input.adjustPosition},holdKeyboard:Boolean,autoBlur:Boolean,ignoreCompositionEvent:{type:Boolean,default:e.input.ignoreCompositionEvent},inputmode:String,autoHeight:Boolean,fixed:Boolean,showConfirmBar:{type:Boolean,default:e.input.showConfirmBar},disableDefaultPadding:{type:Boolean,default:e.input.disableDefaultPadding},type:String,alwaysEmbed:Boolean,safePasswordCertPath:String,safePasswordLength:String,safePasswordTimeStamp:String,safePasswordNonce:String,safePasswordSalt:String,safePasswordCustomHash:String,randomNumber:Boolean,controlled:Boolean,alwaysSystem:Boolean,rootStyle:[String,Object,Array],rootClass:String,modelValue:{type:[String,Number],default:e.input.modelValue},clearable:Boolean,showClearOnlyFocus:Boolean,showCount:Boolean,inlaid:Boolean,borderless:Boolean,readonly:Boolean,focused:Boolean,minHeight:String,validateEvent:{type:Boolean,default:e.input.validateEvent}},emits:["update:model-value","clear","focus","blur","linechange","confirm","keyboardheightchange"],setup(e,{emit:o}){const E=e,j=x("input"),N=k(),_=H(),T=a((()=>(null==N?void 0:N.disabled)??E.disabled)),K=a((()=>(null==N?void 0:N.readonly)??E.readonly)),L=s(String(E.modelValue??"")),V=e=>{L.value=e,o("update:model-value",e)};l((()=>E.modelValue),(()=>{L.value=String(E.modelValue??""),E.validateEvent&&(null==_||_.onChange())}));const $=e=>{const o=e.detail.value;return V(o),o},F=s(E.focus||E.focused);l([()=>E.focus,()=>E.focused],(()=>{F.value=E.focus||E.focused}));const I=e=>{F.value=!0,o("focus",e)},D=e=>{F.value=!1,o("blur",e),E.validateEvent&&(null==_||_.onBlur())},O=a((()=>{const e=E.clearable&&L.value&&!T.value&&!K.value;return E.showClearOnlyFocus?A.value||F.value&&e:e})),A=s(!1),q=()=>{A.value=!0},M=()=>{A.value=!1},R=()=>{q();const e=()=>{M(),document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)},z=()=>{V(""),o("clear")},G=e=>{o("linechange",e)},J=e=>{o("confirm",e)},Q=e=>{o("keyboardheightchange",e)},U=a((()=>t(j.b(),j.m("inlaid",E.inlaid),j.m("borderless",E.borderless),j.m("disabled",T.value),j.m("readonly",K.value),j.m("focused",F.value),E.rootClass))),W=a((()=>n(E.rootStyle))),X=a((()=>n({minHeight:E.minHeight,height:!E.autoHeight&&E.minHeight})));return(e,o)=>{const a=S,s=B,l=C;return r(),d(a,{class:c(p(U)),style:f(p(W))},{default:i((()=>[u(a,{class:c(p(j).e("content"))},{default:i((()=>[e.$slots.prepend?(r(),d(a,{key:0,class:c(p(j).e("prepend"))},{default:i((()=>[m(e.$slots,"prepend",{},void 0,!0)])),_:3},8,["class"])):h("",!0),"textarea"===e.type?(r(),d(s,{key:1,class:c(p(t)(p(j).e("control"),p(j).em("control","textarea"))),value:L.value,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":p(t)(p(j).e("placeholder"),e.placeholderClass),disabled:p(T)||p(K),maxlength:e.maxlength,focus:e.focus,"cursor-spacing":e.cursorSpacing,cursor:e.cursor,"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"selection-start":e.selectionStart,"selection-end":e.selectionEnd,"adjust-position":e.adjustPosition,"hold-keyboard":e.holdKeyboard,"auto-blur":e.autoBlur,"ignore-composition-event":e.ignoreCompositionEvent,inputmode:e.inputmode,autocomplete:"off",fixed:e.fixed,"show-confirm-bar":e.showConfirmBar,"disable-default-padding":e.disableDefaultPadding,onInput:$,onFocus:I,onBlur:D,onLinechange:G,onConfirm:J,onKeyboardheightchange:Q,"auto-height":e.autoHeight,style:f(p(X))},null,8,["class","value","placeholder","placeholder-style","placeholder-class","disabled","maxlength","focus","cursor-spacing","cursor","confirm-type","confirm-hold","selection-start","selection-end","adjust-position","hold-keyboard","auto-blur","ignore-composition-event","inputmode","fixed","show-confirm-bar","disable-default-padding","auto-height","style"])):(r(),d(l,{key:2,class:c(p(t)(p(j).e("control"),p(j).em("control","input"))),value:L.value,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":p(t)(p(j).e("placeholder"),e.placeholderClass),disabled:p(T)||p(K),maxlength:e.maxlength,focus:e.focus,"cursor-spacing":e.cursorSpacing,cursor:e.cursor,"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"selection-start":e.selectionStart,"selection-end":e.selectionEnd,"adjust-position":e.adjustPosition,"hold-keyboard":e.holdKeyboard,"auto-blur":e.autoBlur,"ignore-composition-event":e.ignoreCompositionEvent,inputmode:e.inputmode,autocomplete:"off",onInput:$,onFocus:I,onBlur:D,onConfirm:J,onKeyboardheightchange:Q,type:e.type,password:"password"===e.type,"always-embed":e.alwaysEmbed,"safe-password-cert-path":e.safePasswordCertPath,"safe-password-length":e.safePasswordLength,"safe-password-time-stamp":e.safePasswordTimeStamp,"safe-password-nonce":e.safePasswordNonce,"safe-password-salt":e.safePasswordSalt,"safe-password-custom-hash":e.safePasswordCustomHash,"random-number":e.randomNumber,controlled:e.controlled,"always-system":e.alwaysSystem},null,8,["class","value","placeholder","placeholder-style","placeholder-class","disabled","maxlength","focus","cursor-spacing","cursor","confirm-type","confirm-hold","selection-start","selection-end","adjust-position","hold-keyboard","auto-blur","ignore-composition-event","inputmode","type","password","always-embed","safe-password-cert-path","safe-password-length","safe-password-time-stamp","safe-password-nonce","safe-password-salt","safe-password-custom-hash","random-number","controlled","always-system"])),g(u(a,{class:c(p(j).e("clear")),onClick:y(z,["stop"]),onMousedown:R,onTouchstart:q,onTouchend:M,onTouchcancel:M},{default:i((()=>[u(P,{name:"x-circle-fill"})])),_:1},8,["class","onClick"]),[[b,p(O)]]),e.$slots.append?(r(),d(a,{key:3,class:c(p(j).e("append"))},{default:i((()=>[m(e.$slots,"append",{},void 0,!0)])),_:3},8,["class"])):h("",!0),m(e.$slots,"addon",{},void 0,!0)])),_:3},8,["class"]),e.showCount?(r(),d(a,{key:0,class:c(p(j).e("count"))},{default:i((()=>[v(w(L.value.length)+" / "+w(e.maxlength),1)])),_:1},8,["class"])):h("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-3681c784"]]);export{j as S};