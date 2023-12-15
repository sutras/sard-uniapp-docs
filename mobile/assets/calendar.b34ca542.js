import{d as e,p as a,s as t,q as l,o as s,f as r,w as n,h as u,i as o,t as m,v as d,e as i,c as y,F as v,b as c,u as p,y as b,l as h,S as f,g as D,A as g,T as _}from"./index-9377a170.js";import{_ as k,a as w}from"./index.fad96fb0.js";import{g as x,a as M,b as S,c as A,d as F,t as N,m as q,e as C,_ as j,h as O,i as T}from"./datetime-picker.vue_vue_type_script_setup_true_lang.176c8efc.js";import{_ as V}from"./button.65db1ec1.js";import{_ as Y}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as I}from"./popout.28d9c047.js";const B={rootStyle:[String,Object,Array],rootClass:String,type:{type:String,default:"single"},modelValue:[Date,Array],min:Date,max:Date,currentDate:Date,disabledDate:Function,maxDays:{type:Number,default:Number.MAX_SAFE_INTEGER},overMaxDays:Function,weekStartsOn:{type:Number,default:0},formatter:Function,allowSameDay:Boolean,severalMonths:Boolean},E={year:{type:Number,required:!0},month:{type:Number,required:!0},type:{type:String,required:!0},minDate:{type:Date,required:!0},maxDate:{type:Date,required:!0},currentDates:{type:Array,required:!0},formatter:Function,disabledDate:Function,todayNumber:{type:Number,required:!0},weekStartsOn:{type:Number,required:!0},severalMonths:Boolean,t:{type:Function,required:!0},bem:{type:Object,required:!0}},$=[0,1,2,3,4,5,6],z=Y(e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"month",props:E,emits:["day-click"],setup(e,{emit:f}){const D=e,g=a((()=>x(D.year,D.month))),_=a((()=>M(S(D.year,D.month),D.weekStartsOn))),k=a((()=>{const e=Array(g.value).fill(0).map(((e,a)=>new Date(D.year,D.month,a+1)));if(D.severalMonths)return e;const a=A(D.year,D.month,_.value),t=F(D.year,D.month,42-_.value-g.value);return[...a,...e,...t]}));const w={same:"same",start:"start",middle:"middle",end:"end",selected:"selected",normal:"normal"},q=a((()=>k.value.map(((e,a)=>{const s=N(e),r=function(e){return!!D.severalMonths||e>=_.value&&e<_.value+g.value}(a);let n=!1;r?(D.disabledDate&&(n=D.disabledDate(e)),(s<N(D.minDate)||s>N(D.maxDate))&&(n=!0)):n=!0;const u=r&&"range"!==D.type&&D.currentDates.some((e=>N(e)===s)),o=r&&"range"===D.type&&D.currentDates[0]&&N(D.currentDates[0])===s,m=r&&"range"===D.type&&D.currentDates[1]&&N(D.currentDates[1])===s,d=r&&"range"===D.type&&2===D.currentDates.length&&s>N(D.currentDates[0])&&s<N(D.currentDates[1]),i={date:e,disabled:n,top:"",text:e.getDate()+"",bottom:o&&m?`${D.t("start")}/${D.t("end")}`:o?D.t("start"):m?D.t("end"):"",type:o&&m?"same":o?"start":d?"middle":m?"end":u?"selected":"normal"};r&&D.formatter&&D.formatter(i);const y=w[i.type];return{day:i,style:t(i.style,{marginLeft:D.severalMonths&&0===a?_.value/7*100+"%":null}),className:l(D.bem.e("day"),D.bem.em("day",y,"normal"!==y),D.bem.em("day","without",!r),D.bem.em("day","disabled",n),D.bem.em("day","today",D.todayNumber===s),i.className)}}))));return(e,a)=>{const t=h;return s(),r(t,{class:u(e.bem.e("month"))},{default:n((()=>[e.severalMonths?(s(),r(t,{key:0,class:u(e.bem.e("month-title"))},{default:n((()=>[o(m(e.t("monthTitle",{year:e.year,month:e.month+1})),1)])),_:1},8,["class"])):d("",!0),i(t,{class:u(e.bem.e("days"))},{default:n((()=>[(s(!0),y(v,null,c(p(q),((a,l)=>(s(),r(t,{key:l,class:u(a.className),style:b(a.style),onClick:e=>{return t=a.day.date,void f("day-click",t);var t}},{default:n((()=>[a.day.top?(s(),r(t,{key:0,class:u(e.bem.e("top"))},{default:n((()=>[o(m(a.day.top),1)])),_:2},1032,["class"])):d("",!0),o(" "+m(a.day.text)+" ",1),a.day.bottom?(s(),r(t,{key:1,class:u(e.bem.e("bottom"))},{default:n((()=>[o(m(a.day.bottom),1)])),_:2},1032,["class"])):d("",!0)])),_:2},1032,["class","style","onClick"])))),128)),i(t,{class:u(e.bem.e("mark"))},{default:n((()=>[o(m(e.month+1),1)])),_:1},8,["class"])])),_:1},8,["class"])])),_:1},8,["class"])}}}),[["__scopeId","data-v-536ce0c1"]]),H=Y(e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"calendar",props:B,emits:["update:model-value"],setup(e,{emit:x}){const M=e,S=w("calendar"),{t:A}=f("calendar"),F=a((()=>M.min||(e=>{const a=new Date;return e?new Date(a.getFullYear(),a.getMonth(),1):new Date(a.getFullYear()-10,0,1)})(M.severalMonths))),Y=a((()=>{const e=M.max||(e=>{const a=new Date;return e?new Date(a.getFullYear(),a.getMonth()+3,1):new Date(a.getFullYear()+10,11,31)})(M.severalMonths);return e.getTime()<F.value.getTime()?new Date(F.value):e})),B=D(M.modelValue??("single"===M.type?void 0:[]));g((()=>M.modelValue),(()=>{B.value!==M.modelValue&&(B.value=M.modelValue??("single"===M.type?void 0:[]))}));const E=D(q(M.currentDate||new Date,F.value,Y.value));g((()=>M.currentDate),(()=>{E.value=q(M.currentDate||new Date,F.value,Y.value)})),g(B,(()=>{const e=Array.isArray(B.value)?1===B.value.length?B.value[0]:void 0:B.value;e&&C(e)!==C(E.value)&&(E.value=e)}));const H=D("range"===M.type&&Array.isArray(B.value)&&1===B.value.length?B.value[0]:void 0),U=()=>{E.value=O(E.value)},G=()=>{E.value=T(E.value)},L=D(!1),R=D(E.value),X=()=>{R.value=E.value,L.value=!0},J=()=>{C(E.value)!==C(R.value)&&(E.value=R.value)},K=a((()=>$.slice(M.weekStartsOn).concat($.slice(0,M.weekStartsOn)))),P=a((()=>{if(!M.severalMonths)return[[E.value.getFullYear(),E.value.getMonth()]];const e=F.value.getFullYear(),a=F.value.getMonth(),t=Y.value.getFullYear(),l=Y.value.getMonth();return Array(12*(t-e)+(l-a)).fill(0).map(((t,l)=>[e+Math.floor((a+l)/12),(a+l)%12]))})),Q=N(new Date),W=a((()=>{let e;return e="range"===M.type&&H.value?[H.value]:Array.isArray(B.value)?B.value:B.value?[B.value]:[],e})),Z=e=>{var a,t;let l;if("single"===M.type)l=e;else if("multiple"===M.type){if(Array.isArray(B.value))if(B.value.some((a=>N(a)===N(e))))l=B.value.filter((a=>N(a)!==N(e)));else{if(B.value.length>=M.maxDays)return void(null==(a=M.overMaxDays)||a.call(M));l=B.value.concat(e).sort(((e,a)=>e.getTime()-a.getTime()))}}else if("range"===M.type){if(H.value){const a=N(H.value),s=N(e);if(!M.allowSameDay&&a===s)return;if(s<a)return void(H.value=e);let r=e;s-a+1>M.maxDays&&(null==(t=M.overMaxDays)||t.call(M),r=new Date(H.value),r.setDate(r.getDate()+(M.maxDays-1))),l=[H.value,r]}else l=[];H.value=H.value?void 0:e}void 0!==l&&(B.value=l,x("update:model-value",l))},ee=a((()=>l(S.b(),S.m("several",M.severalMonths),M.rootClass))),ae=a((()=>t(M.rootStyle)));return(e,a)=>{const t=h,l=_;return s(),y(v,null,[i(t,{class:u(p(ee)),style:b(p(ae))},{default:n((()=>[i(t,{class:u(p(S).e("header"))},{default:n((()=>[e.severalMonths?d("",!0):(s(),r(t,{key:0,class:u(p(S).e("toolbar"))},{default:n((()=>[i(t,{class:u(p(S).e("toolbar-inner"))},{default:n((()=>[i(V,{type:"pale-text",theme:"body",disabled:p(C)(E.value)<=p(C)(p(F)),onClick:U},{default:n((()=>[i(k,{name:"left",size:"32rpx"})])),_:1},8,["disabled"]),i(V,{type:"pale-text",theme:"body",onClick:X},{default:n((()=>[o(m(p(A)("monthTitle",{year:E.value.getFullYear(),month:String(E.value.getMonth()+1).padStart(2,"0")})),1)])),_:1}),i(V,{type:"pale-text",theme:"body",disabled:p(C)(E.value)>=p(C)(p(Y)),onClick:G},{default:n((()=>[i(k,{name:"right",size:"32rpx"})])),_:1},8,["disabled"])])),_:1},8,["class"])])),_:1},8,["class"])),i(t,{class:u(p(S).e("week"))},{default:n((()=>[(s(!0),y(v,null,c(p(K),((e,a)=>(s(),r(t,{key:a,class:u(p(S).e("week-item"))},{default:n((()=>[o(m(p(A)(`weeks.${e}`)),1)])),_:2},1032,["class"])))),128))])),_:1},8,["class"])])),_:1},8,["class"]),i(l,{"scroll-y":e.severalMonths,class:u(p(S).e("body"))},{default:n((()=>[(s(!0),y(v,null,c(p(P),((a,t)=>(s(),r(z,{key:t,year:a[0],month:a[1],type:e.type,"min-date":p(F),"max-date":p(Y),"current-dates":p(W),formatter:e.formatter,"disabled-date":e.disabledDate,"today-number":p(Q),"week-starts-on":e.weekStartsOn,"several-months":e.severalMonths,t:p(A),bem:p(S),onDayClick:Z},null,8,["year","month","type","min-date","max-date","current-dates","formatter","disabled-date","today-number","week-starts-on","several-months","t","bem"])))),128))])),_:1},8,["scroll-y","class"])])),_:1},8,["class","style"]),e.severalMonths?d("",!0):(s(),r(I,{key:0,visible:L.value,"onUpdate:visible":a[1]||(a[1]=e=>L.value=e),type:"compact",onConfirm:J},{default:n((()=>[i(j,{type:"yM",modelValue:R.value,"onUpdate:modelValue":a[0]||(a[0]=e=>R.value=e),min:p(F),max:p(Y)},null,8,["modelValue","min","max"])])),_:1},8,["visible"]))],64)}}}),[["__scopeId","data-v-2d178a0b"]]);export{H as C,B as c};
