import{_ as s}from"./index.BI3vtXtd.js";import{E as e,d as t,G as r,p as a,o as n,f as o,w as l,e as c,h as i,u,x as p,v as d,i as f,t as m,s as _,q as x,z as g,l as y,r as h,a as k,c as b,F as v}from"./index-DFwJ2Oj-.js";import{_ as w}from"./index.NOUmFN7R.js";import{a as C,b as j,_ as B}from"./index.BDMDFAO9.js";const I=e.progressBar,T=B(t({options:{virtualHost:!0,styleIsolation:"shared"},__name:"progress-bar",props:r({rootStyle:{},rootClass:{},percent:{},inside:{type:Boolean},color:{},trackColor:{},thickness:{},showText:{type:Boolean},striped:{type:Boolean},animated:{type:Boolean},status:{}},I),setup(s){const e=s,t=j("progress-bar"),r=a((()=>e.status?{success:"check-circle-fill",warning:"warning-fill",error:"x-circle-fill"}[e.status]:"")),h=a((()=>x(t.b(),t.m("inside",e.inside),t.m("striped",e.striped),t.m("animated",e.animated),t.m(e.status,e.status),e.rootClass))),k=a((()=>g(e.rootStyle))),b=a((()=>g({height:e.thickness,backgroundColor:e.trackColor}))),v=a((()=>g({width:`${e.percent}%`,backgroundColor:e.color})));return(s,e)=>{const a=y;return n(),o(a,{class:i(h.value),style:p(k.value)},{default:l((()=>[c(a,{class:i(u(t).e("track")),style:p(b.value)},{default:l((()=>[c(a,{class:i(u(t).e("piece")),style:p(v.value)},{default:l((()=>[s.showText&&s.inside?(n(),o(a,{key:0,class:i(u(t).e("text"))},{default:l((()=>[d(s.$slots,"default",{},(()=>[f(m(s.percent)+"%",1)]),!0)])),_:3},8,["class"])):_("",!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"]),!s.showText||s.inside||s.status?_("",!0):(n(),o(a,{key:0,class:i(u(t).e("text"))},{default:l((()=>[d(s.$slots,"default",{},(()=>[f(m(s.percent)+"%",1)]),!0)])),_:3},8,["class"])),s.status?(n(),o(a,{key:1,class:i(u(t).e("status"))},{default:l((()=>[c(C,{name:r.value},null,8,["name"])])),_:1},8,["class"])):_("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-62d97f52"]]);const $=B({},[["render",function(s,e){const t=h(k("sar-progress-bar"),T);return n(),o(t,{percent:50})}]]);const S=B({},[["render",function(s,e){const t=h(k("sar-progress-bar"),T);return n(),o(t,{percent:50,inside:""})}]]);const q=B({},[["render",function(s,e){const t=h(k("sar-progress-bar"),T);return n(),b(v,null,[c(t,{percent:50,"show-text":!1}),c(t,{percent:50,"show-text":!1,inside:"","root-style":"margin-top: 20rpx"})],64)}]]);const z=B({},[["render",function(s,e){const t=h(k("sar-progress-bar"),T);return n(),o(t,{percent:50,thickness:"20rpx"})}]]);const E=B({},[["render",function(s,e){const t=h(k("sar-progress-bar"),T);return n(),o(t,{percent:50,color:"var(--sar-red)"})}]]);const F=B({},[["render",function(s,e){const t=h(k("sar-progress-bar"),T);return n(),b(v,null,[c(t,{percent:50,striped:"",thickness:"20rpx"}),c(t,{percent:50,striped:"",animated:"",thickness:"20rpx","root-style":"margin-top: 10rpx"})],64)}]]);const G=B({},[["render",function(s,e){const t=h(k("sar-progress-bar"),T);return n(),b(v,null,[c(t,{percent:100,status:"success"}),c(t,{percent:50,status:"warning","root-style":"margin-top: 20rpx"}),c(t,{percent:50,status:"error","root-style":"margin-top: 20rpx"})],64)}]]),H=B(t({__name:"index",setup:e=>(e,t)=>{const r=h(k("doc-demo"),s),a=h(k("doc-page"),w);return n(),o(a,{emphasis:""},{default:l((()=>[c(r,{title:"基础使用"},{default:l((()=>[c($)])),_:1}),c(r,{title:"内部文本"},{default:l((()=>[c(S)])),_:1}),c(r,{title:"隐藏文本"},{default:l((()=>[c(q)])),_:1}),c(r,{title:"粗细"},{default:l((()=>[c(z)])),_:1}),c(r,{title:"颜色"},{default:l((()=>[c(E)])),_:1}),c(r,{title:"有条纹的"},{default:l((()=>[c(F)])),_:1}),c(r,{title:"状态"},{default:l((()=>[c(G)])),_:1})])),_:1})}}),[["__scopeId","data-v-798d74c7"]]);export{H as default};
