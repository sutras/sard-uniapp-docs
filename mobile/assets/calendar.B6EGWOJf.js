import{E as e,d as a,p as t,o as l,f as s,w as r,h as n,i as u,t as o,s as m,e as d,c as v,F as i,b as c,x as y,z as p,q as h,l as f,G as b,V as D,g,A as _,u as k,W as w,X as x}from"./index-GlWSIXJ_.js";import{_ as M,a as S,b as F}from"./index.DZ-iMJGl.js";import{g as A,a as V,b as C,c as Y,d as j,t as O,m as T,e as N,_ as I,h as z,i as B}from"./datetime-picker.vue_vue_type_script_setup_true_lang.B1JHst6G.js";import{u as $}from"./index.D9XOTfsQ.js";import{_ as H}from"./button.BVtMR0R2.js";import{_ as U}from"./popout.Cy2JBc5u.js";const q=e.calendar,E=[0,1,2,3,4,5,6],G=M(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"calendar-month",props:{year:{},month:{},type:{},minDate:{},maxDate:{},currentDates:{},formatter:{},disabledDate:{},todayNumber:{},weekStartsOn:{},severalMonths:{type:Boolean},t:{},bem:{}},emits:["day-click"],setup(e,{emit:a}){const b=e,D=a,g=t((()=>A(b.year,b.month))),_=t((()=>V(C(b.year,b.month),b.weekStartsOn))),k=t((()=>{const e=Array(g.value).fill(0).map(((e,a)=>new Date(b.year,b.month,a+1)));if(b.severalMonths)return e;const a=Y(b.year,b.month,_.value),t=j(b.year,b.month,42-_.value-g.value);return[...a,...e,...t]}));const w={same:"same",start:"start",middle:"middle",end:"end",selected:"selected",normal:"normal"},x=t((()=>k.value.map(((e,a)=>{const t=O(e),l=function(e){return!!b.severalMonths||e>=_.value&&e<_.value+g.value}(a);let s=!1;l?(b.disabledDate&&(s=b.disabledDate(e)),(t<O(b.minDate)||t>O(b.maxDate))&&(s=!0)):s=!0;const r=l&&"range"!==b.type&&b.currentDates.some((e=>O(e)===t)),n=l&&"range"===b.type&&b.currentDates[0]&&O(b.currentDates[0])===t,u=l&&"range"===b.type&&b.currentDates[1]&&O(b.currentDates[1])===t,o=l&&"range"===b.type&&2===b.currentDates.length&&t>O(b.currentDates[0])&&t<O(b.currentDates[1]),m={date:e,disabled:s,top:"",text:e.getDate()+"",bottom:n&&u?`${b.t("start")}/${b.t("end")}`:n?b.t("start"):u?b.t("end"):"",type:n&&u?"same":n?"start":o?"middle":u?"end":r?"selected":"normal"};l&&b.formatter&&b.formatter(m);const d=w[m.type];return{day:m,style:p(m.style,{marginLeft:b.severalMonths&&0===a?_.value/7*100+"%":null}),className:h(b.bem.e("day"),b.bem.em("day",d,"normal"!==d),b.bem.em("day","without",!l),b.bem.em("day","disabled",s),b.bem.em("day","today",b.todayNumber===t),m.className)}}))));return(e,a)=>{const t=f;return l(),s(t,{class:n(e.bem.e("month"))},{default:r((()=>[e.severalMonths?(l(),s(t,{key:0,class:n(e.bem.e("month-title"))},{default:r((()=>[u(o(e.t("monthTitle",{year:e.year,month:e.month+1})),1)])),_:1},8,["class"])):m("",!0),d(t,{class:n(e.bem.e("days"))},{default:r((()=>[(l(!0),v(i,null,c(x.value,((a,d)=>(l(),s(t,{key:d,class:n(a.className),style:y(a.style),onClick:e=>{var t;(t=a.day).disabled||D("day-click",t.date)}},{default:r((()=>[a.day.top?(l(),s(t,{key:0,class:n(e.bem.e("top"))},{default:r((()=>[u(o(a.day.top),1)])),_:2},1032,["class"])):m("",!0),u(" "+o(a.day.text)+" ",1),a.day.bottom?(l(),s(t,{key:1,class:n(e.bem.e("bottom"))},{default:r((()=>[u(o(a.day.bottom),1)])),_:2},1032,["class"])):m("",!0)])),_:2},1032,["class","style","onClick"])))),128)),d(t,{class:n(e.bem.e("mark"))},{default:r((()=>[u(o(e.month+1),1)])),_:1},8,["class"])])),_:1},8,["class"])])),_:1},8,["class"])}}}),[["__scopeId","data-v-8d06f995"]]),L=M(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"calendar",props:b({rootStyle:{},rootClass:{},type:{},modelValue:{},min:{},max:{},currentDate:{},disabledDate:{type:Function},maxDays:{},overMaxDays:{type:Function},weekStartsOn:{},formatter:{type:Function},allowSameDay:{type:Boolean},severalMonths:{type:Boolean}},q),emits:["update:model-value"],setup(e,{emit:a}){const b=e,M=a,A=F("calendar"),{t:V}=D("calendar"),C=t((()=>b.min||(e=>{const a=new Date;return e?new Date(a.getFullYear(),a.getMonth(),1):new Date(a.getFullYear()-10,0,1)})(b.severalMonths))),Y=t((()=>{const e=b.max||(e=>{const a=new Date;return e?new Date(a.getFullYear(),a.getMonth()+3,0):new Date(a.getFullYear()+10,11,31)})(b.severalMonths);return e.getTime()<C.value.getTime()?new Date(C.value):e})),j=g(b.modelValue??("single"===b.type?void 0:[]));_((()=>b.modelValue),(()=>{j.value!==b.modelValue&&(j.value=b.modelValue??("single"===b.type?void 0:[]))}));const q=g((()=>{let e=new Date;const a=w(b.modelValue)[0];return a&&(e=a),b.currentDate&&(e=b.currentDate),T(e,C.value,Y.value)})());_((()=>b.currentDate),(()=>{q.value=T(b.currentDate||new Date,C.value,Y.value)})),_(j,(()=>{const e=Array.isArray(j.value)?1===j.value.length?j.value[0]:void 0:j.value;e&&N(e)!==N(q.value)&&(q.value=e)}));const L=g("range"===b.type&&Array.isArray(j.value)&&1===j.value.length?j.value[0]:void 0),W=()=>{q.value=z(q.value)},X=()=>{q.value=B(q.value)},J=g(!1),K=g(q.value),P=()=>{K.value=q.value,J.value=!0},Q=()=>{N(q.value)!==N(K.value)&&(q.value=K.value)},R=t((()=>E.slice(b.weekStartsOn).concat(E.slice(0,b.weekStartsOn)))),Z=t((()=>{if(!b.severalMonths)return[[q.value.getFullYear(),q.value.getMonth()]];const e=C.value.getFullYear(),a=C.value.getMonth(),t=Y.value.getFullYear(),l=Y.value.getMonth();return Array(12*(t-e)+(l-a+1)).fill(0).map(((t,l)=>[e+Math.floor((a+l)/12),(a+l)%12]))})),ee=O(new Date),ae=t((()=>{let e;return e="range"===b.type&&L.value?[L.value]:Array.isArray(j.value)?j.value:j.value?[j.value]:[],e})),te=e=>{var a,t;let l;if("single"===b.type)l=e;else if("multiple"===b.type){if(Array.isArray(j.value))if(j.value.some((a=>O(a)===O(e))))l=j.value.filter((a=>O(a)!==O(e)));else{if(j.value.length>=b.maxDays)return void(null==(a=b.overMaxDays)||a.call(b));l=j.value.concat(e).sort(((e,a)=>e.getTime()-a.getTime()))}}else if("range"===b.type){if(L.value){const a=O(L.value),s=O(e);if(!b.allowSameDay&&a===s)return;if(s<a)return void(L.value=e);let r=e;s-a+1>b.maxDays&&(null==(t=b.overMaxDays)||t.call(b),r=new Date(L.value),r.setDate(r.getDate()+(b.maxDays-1))),l=[L.value,r]}else l=[];L.value=L.value?void 0:e}void 0!==l&&(j.value=l,M("update:model-value",l))},le=$(),se=t((()=>le&&!b.severalMonths)),re=t((()=>h(A.b(),A.m("several",b.severalMonths),A.m("no-scroll",se.value),b.rootClass))),ne=t((()=>p(b.rootStyle)));return(e,a)=>{const t=f,p=x;return l(),v(i,null,[d(t,{class:n(re.value),style:y(ne.value)},{default:r((()=>[d(t,{class:n(k(A).e("header"))},{default:r((()=>[e.severalMonths?m("",!0):(l(),s(t,{key:0,class:n(k(A).e("toolbar"))},{default:r((()=>[d(t,{class:n(k(A).e("toolbar-inner"))},{default:r((()=>[d(H,{type:"pale-text",theme:"neutral",disabled:k(N)(q.value)<=k(N)(C.value),onClick:W},{default:r((()=>[d(S,{name:"left",size:"32rpx"})])),_:1},8,["disabled"]),d(H,{type:"pale-text",theme:"neutral",onClick:P},{default:r((()=>[u(o(k(V)("monthTitle",{year:q.value.getFullYear(),month:String(q.value.getMonth()+1).padStart(2,"0")})),1)])),_:1}),d(H,{type:"pale-text",theme:"neutral",disabled:k(N)(q.value)>=k(N)(Y.value),onClick:X},{default:r((()=>[d(S,{name:"right",size:"32rpx"})])),_:1},8,["disabled"])])),_:1},8,["class"])])),_:1},8,["class"])),d(t,{class:n(k(A).e("week"))},{default:r((()=>[(l(!0),v(i,null,c(R.value,((e,a)=>(l(),s(t,{key:a,class:n(k(A).e("week-item"))},{default:r((()=>[u(o(k(V)(`weeks.${e}`)),1)])),_:2},1032,["class"])))),128))])),_:1},8,["class"])])),_:1},8,["class"]),d(p,{"scroll-y":e.severalMonths,class:n(k(A).e("body"))},{default:r((()=>[(l(!0),v(i,null,c(Z.value,((a,t)=>(l(),s(G,{key:t,year:a[0],month:a[1],type:e.type,"min-date":C.value,"max-date":Y.value,"current-dates":ae.value,formatter:e.formatter,"disabled-date":e.disabledDate,"today-number":k(ee),"week-starts-on":e.weekStartsOn,"several-months":e.severalMonths,t:k(V),bem:k(A),onDayClick:te},null,8,["year","month","type","min-date","max-date","current-dates","formatter","disabled-date","today-number","week-starts-on","several-months","t","bem"])))),128))])),_:1},8,["scroll-y","class"])])),_:1},8,["class","style"]),e.severalMonths?m("",!0):(l(),s(U,{key:0,visible:J.value,"onUpdate:visible":a[1]||(a[1]=e=>J.value=e),type:"compact",onConfirm:Q},{default:r((()=>[d(I,{type:"yM",modelValue:K.value,"onUpdate:modelValue":a[0]||(a[0]=e=>K.value=e),min:C.value,max:Y.value},null,8,["modelValue","min","max"])])),_:1},8,["visible"]))],64)}}}),[["__scopeId","data-v-2afb49c4"]]);export{L as S};