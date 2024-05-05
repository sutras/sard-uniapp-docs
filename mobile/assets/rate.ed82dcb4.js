import{E as e,d as a,p as t,g as o,A as l,K as s,q as n,s as i,o as u,f as r,w as d,e as c,h as v,u as m,y,R as f,c as p,F as g,b as h,i as w,t as S,l as b,L as _}from"./index-6f8f5948.js";import{a as x,b as k,_ as E}from"./index.09d87181.js";import{g as C,t as T}from"./dom.f92aa117.js";import{a as j,u as B}from"./common.097e1cb5.js";const I=E(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"rate",props:{rootStyle:[String,Object,Array],rootClass:String,modelValue:Number,allowHalf:Boolean,clearable:Boolean,count:{type:Number,default:e.rate.count},size:String,gap:String,iconFamily:String,icon:{type:String,default:e.rate.icon},voidIcon:{type:String,default:e.rate.voidIcon},text:String,voidText:String,color:String,voidColor:String,disabled:Boolean,readonly:Boolean,validateEvent:{type:Boolean,default:e.rate.validateEvent}},emits:["update:model-value"],setup(e,{emit:a}){const E=e,I=k("rate"),L=j(),F=B(),H=t((()=>(null==L?void 0:L.disabled)??E.disabled)),V=t((()=>(null==L?void 0:L.readonly)??E.readonly)),$=o(E.modelValue??0);l((()=>E.modelValue),(()=>{$.value=E.modelValue??0,E.validateEvent&&(null==F||F.onChange())}));const z=s(),A=s(),N=_(),X=o(),q=o(),D=t((()=>Array(E.count).fill(0).map(((e,a)=>{const t=a+1-$.value;return{width:100*(t<=0?1:t>1?0:$.value%1)+"%"}})))),K=()=>{V.value||H.value||(C(`#${z}`,N).then((e=>{X.value=e})),C(`#${A}`,N).then((e=>{q.value=e})))},M=e=>{if(V.value||H.value)return;if(!X.value||!q.value)return;const{left:t,width:o}=X.value,{clientX:l}=e.touches[0],s=l-t;let n;if(s<0)n=0;else{const{width:e}=q.value,a=(o-E.count*e)/(E.count-1);for(let t=E.count-1;t>=0;t--){const o=t*(a+e);if(s>=o){n=t+(E.allowHalf&&s<=o+e/2?.5:1);break}}}void 0!==n&&n!==$.value&&($.value=n,a("update:model-value",n))},O=()=>{K();const e=e=>{e.preventDefault(),e.stopPropagation(),M(T(e))},a=()=>{document.removeEventListener("mouseup",a),document.removeEventListener("mousemove",e)};document.addEventListener("mousemove",e),document.addEventListener("mouseup",a)},P=t((()=>n(I.b(),I.m("disabled",H.value),I.m("readonly",V.value),E.rootClass))),R=t((()=>i(E.rootStyle))),G=t((()=>i({gap:E.gap})));return(e,t)=>{const o=b;return u(),r(o,{class:v(m(P)),style:y(m(R))},{default:d((()=>[c(o,{class:v(m(I).e("content")),style:y(m(G)),id:m(z),onTouchstart:K,onTouchmove:f(M,["stop","prevent"]),onMousedown:O},{default:d((()=>[(u(!0),p(g,null,h(m(D),((t,l)=>(u(),r(o,{key:l,class:v(m(I).e("item")),id:0===l?m(A):void 0,style:y(m(i)({fontSize:e.size})),onClick:e=>(async(e,t)=>{if(V.value||H.value)return;let o;if(E.allowHalf){const{left:a,width:l}=await C(`#${z}`,N),{width:s}=await C(`#${A}`,N),{clientX:n}="touches"in e?e.touches[0]:e;o=t+(n-a-t*(s+(l-E.count*s)/(E.count-1))<=s/2?.5:1)}else o=t+1;E.clearable&&o===$.value&&(o=0),void 0!==o&&o!==$.value&&($.value=o,a("update:model-value",o))})(e,l)},{default:d((()=>[c(o,{class:v(m(I).e("star-void")),style:y(m(i)({color:e.voidColor}))},{default:d((()=>[e.voidText?(u(),p(g,{key:0},[w(S(e.voidText),1)],64)):(u(),r(x,{key:1,name:e.voidIcon,family:e.iconFamily},null,8,["name","family"]))])),_:1},8,["class","style"]),c(o,{class:v(m(I).e("star")),style:y(m(i)({color:e.color,width:t.width}))},{default:d((()=>[e.text?(u(),p(g,{key:0},[w(S(e.text),1)],64)):(u(),r(x,{key:1,name:e.icon,family:e.iconFamily},null,8,["name","family"]))])),_:2},1032,["class","style"])])),_:2},1032,["class","id","style","onClick"])))),128))])),_:1},8,["class","style","id","onTouchmove"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-de7a6225"]]);export{I as _};