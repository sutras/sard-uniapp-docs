import{_ as t}from"./index.BI3vtXtd.js";import{d as e,p as a,o,f as s,h as n,x as l,q as r,z as i,l as d,w as u,c as p,F as c,b as m,u as h,E as y,G as _,s as f,e as v,v as g,r as w,a as k,g as x,i as B}from"./index-DFwJ2Oj-.js";import{_ as b}from"./index.NOUmFN7R.js";import{b as S,_ as C,a as I}from"./index.BDMDFAO9.js";import{_ as z}from"./switch.-YXJ6ypM.js";import{_ as j,a as H}from"./row.CPzfUvAj.js";import"./common.BM3Qp-Uy.js";const R=C(e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"skeleton-block",props:{rootStyle:{},rootClass:{},animated:{type:Boolean},round:{type:Boolean},width:{},height:{}},setup(t){const e=t,u=S("skeleton"),p=a((()=>r(u.e("block"),u.m("animated",e.animated),u.m("round",e.round),e.rootClass))),c=a((()=>i({width:e.width,height:e.height},e.rootStyle)));return(t,e)=>{const a=d;return o(),s(a,{class:n(p.value),style:l(c.value)},null,8,["class","style"])}}}),[["__scopeId","data-v-90a1dcfa"]]),V=C(e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"skeleton-avatar",props:{size:{},rootStyle:{},rootClass:{},animated:{type:Boolean},round:{type:Boolean},width:{},height:{}},setup(t){const e=t,n=S("skeleton"),l=a((()=>r(n.e("avatar"),e.rootClass))),d=a((()=>i({width:e.size,height:e.size},e.rootStyle)));return(t,e)=>(o(),s(R,{"root-class":l.value,"root-style":d.value,animated:t.animated,round:t.round,width:t.width,height:t.height},null,8,["root-class","root-style","animated","round","width","height"]))}}),[["__scopeId","data-v-96046ba5"]]),q=C(e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"skeleton-title",props:{rootStyle:{},rootClass:{},animated:{type:Boolean},round:{type:Boolean},width:{},height:{}},setup(t){const e=t,n=S("skeleton"),l=a((()=>r(n.e("title"),e.rootClass))),d=a((()=>i(e.rootStyle)));return(t,e)=>(o(),s(R,{"root-class":l.value,"root-style":d.value,animated:t.animated,round:t.round,width:t.width,height:t.height},null,8,["root-class","root-style","animated","round","width","height"]))}}),[["__scopeId","data-v-080b6651"]]),E=C(e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"skeleton-paragraph",props:{rows:{},rootStyle:{},rootClass:{},animated:{type:Boolean},round:{type:Boolean},width:{},height:{}},setup(t){const e=t,y=S("skeleton"),_=a((()=>r(y.e("paragraph"),e.rootClass))),f=a((()=>i(e.rootStyle)));return(t,e)=>{const a=d;return o(),s(a,{class:n(_.value),style:l(f.value)},{default:u((()=>[(o(!0),p(c,null,m(t.rows,(e=>(o(),s(R,{key:e,animated:t.animated,round:t.round,width:t.width,height:t.height,"root-class":h(y).e("row")},null,8,["animated","round","width","height","root-class"])))),128))])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-c9afe4c1"]]),F=y.skeleton,G=C(e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"skeleton",props:_({rootStyle:{},rootClass:{},rows:{},title:{type:Boolean},avatar:{type:Boolean},avatarSize:{},avatarRound:{type:Boolean},round:{type:Boolean},loading:{type:Boolean},animated:{type:Boolean}},F),setup(t){const e=t,p=S("skeleton"),c=a((()=>r(p.b(),e.rootClass))),m=a((()=>i(e.rootStyle)));return(t,e)=>{const a=d;return t.loading?(o(),s(a,{key:0,class:n(c.value),style:l(m.value)},{default:u((()=>[t.avatar?(o(),s(V,{key:0,animated:t.animated,size:t.avatarSize,round:t.avatarRound},null,8,["animated","size","round"])):f("",!0),v(a,{class:n(h(p).e("content"))},{default:u((()=>[t.title?(o(),s(q,{key:0,animated:t.animated,round:t.round},null,8,["animated","round"])):f("",!0),v(E,{rows:t.rows,animated:t.animated,round:t.round},null,8,["rows","animated","round"])])),_:1},8,["class"])])),_:1},8,["class","style"])):g(t.$slots,"default",{key:1},void 0,!0)}}}),[["__scopeId","data-v-931dc88d"]]);const J=C({},[["render",function(t,e){const a=w(k("sar-skeleton"),G);return o(),s(a)}]]);const U=C({},[["render",function(t,e){const a=w(k("sar-skeleton"),G);return o(),s(a,{title:""})}]]);const $=C({},[["render",function(t,e){const a=w(k("sar-skeleton"),G);return o(),s(a,{avatar:"",title:""})}]]);const A=C({},[["render",function(t,e){const a=w(k("sar-skeleton"),G);return o(),s(a,{avatar:"","avatar-round":"",title:""})}]]);const D=C({},[["render",function(t,e){const a=w(k("sar-skeleton"),G);return o(),s(a,{avatar:"",title:"",round:""})}]]);const K=C({},[["render",function(t,e){const a=w(k("sar-skeleton"),G);return o(),s(a,{avatar:"",title:"",animated:""})}]]),L=e({__name:"Contain",setup(t){const e=x(!1);return(t,a)=>{const s=w(k("sar-switch"),z),n=w(k("sar-icon"),I),l=d,r=w(k("sar-skeleton"),G);return o(),p(c,null,[v(s,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),"root-style":"margin-bottom: 20rpx;"},null,8,["modelValue"]),v(r,{avatar:"",title:"",animated:"",loading:e.value},{default:u((()=>[v(l,{style:{display:"flex",gap:"30rpx"}},{default:u((()=>[v(n,{name:"person",size:"64rpx"}),v(l,{style:{flex:"1"}},{default:u((()=>[v(l,{style:{"font-size":"var(--sar-text-lg)","margin-bottom":"20rpx"}},{default:u((()=>[B(" 我是一个标题 ")])),_:1}),v(l,null,{default:u((()=>[B(" 我是一个段落我是一个段落我是一个段落我是一个段落我是一个段落我是一个段落我是一个段落我是一个段落 ")])),_:1})])),_:1})])),_:1})])),_:1},8,["loading"])],64)}}});const M=C({},[["render",function(t,e){const a=w(k("sar-skeleton-block"),R),s=d,n=w(k("sar-col"),j),l=w(k("sar-row"),H),r=w(k("sar-skeleton-paragraph"),E);return o(),p(c,null,[v(l,{gap:"20rpx","root-style":"row-gap: 30rpx"},{default:u((()=>[(o(),p(c,null,m(8,(t=>v(n,{key:t,span:3},{default:u((()=>[v(s,{style:{display:"flex","flex-direction":"column","align-items":"center","row-gap":"16rpx"}},{default:u((()=>[v(a,{height:"120rpx",animated:""}),v(a,{animated:""})])),_:1})])),_:2},1024))),64))])),_:1}),v(s,{style:{display:"flex",gap:"40rpx","margin-top":"60rpx"}},{default:u((()=>[v(a,{width:"100px",height:"80px",animated:""}),v(s,{style:{display:"flex","flex-direction":"column",flex:"1"}},{default:u((()=>[v(r,{rows:2,animated:""}),v(a,{width:"120rpx",height:"60rpx","root-style":"margin-left: auto; margin-top: auto",animated:""})])),_:1})])),_:1})],64)}]]),N=C(e({__name:"index",setup:e=>(e,a)=>{const n=w(k("doc-demo"),t),l=w(k("doc-page"),b);return o(),s(l,{emphasis:""},{default:u((()=>[v(n,{title:"基础使用"},{default:u((()=>[v(J)])),_:1}),v(n,{title:"显示标题"},{default:u((()=>[v(U)])),_:1}),v(n,{title:"显示头像"},{default:u((()=>[v($)])),_:1}),v(n,{title:"圆形头像"},{default:u((()=>[v(A)])),_:1}),v(n,{title:"圆角标题和段落"},{default:u((()=>[v(D)])),_:1}),v(n,{title:"动画效果"},{default:u((()=>[v(K)])),_:1}),v(n,{title:"包含子组件"},{default:u((()=>[v(L)])),_:1}),v(n,{title:"自定义"},{default:u((()=>[v(M)])),_:1})])),_:1})}}),[["__scopeId","data-v-321b7aab"]]);export{N as default};
