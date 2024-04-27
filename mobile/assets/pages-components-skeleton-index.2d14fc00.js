import{_ as t}from"./index.70abdba0.js";import{E as e,d as a,p as o,q as s,s as n,o as r,f as l,h as i,u as d,y as u,l as c,w as p,c as m,F as h,b as f,v as _,e as g,x as y,r as k,a as v,g as w,i as x}from"./index-158834fb.js";import{_ as b}from"./index.be0dc1e1.js";import{b as S,_ as I,a as j}from"./index.a84991b2.js";import{_ as z}from"./switch.a485faa6.js";import{_ as B,a as C}from"./row.489fd1e3.js";import"./common.26852cb0.js";const H={rootStyle:[String,Object,Array],rootClass:String,rows:{type:Number,default:e.skeleton.rows},title:Boolean,avatar:Boolean,avatarSize:String,avatarRound:Boolean,round:Boolean,loading:{type:Boolean,default:e.skeleton.loading},animated:Boolean},R={rootStyle:[String,Object,Array],rootClass:String,animated:Boolean,round:Boolean,width:String,height:String},V={...R,size:String},A={...R,rows:Number},N=R,O=I(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"skeleton-block",props:R,setup(t){const e=t,a=S("skeleton"),p=o((()=>s(a.e("block"),a.m("animated",e.animated),a.m("round",e.round),e.rootClass))),m=o((()=>n({width:e.width,height:e.height},e.rootStyle)));return(t,e)=>{const a=c;return r(),l(a,{class:i(d(p)),style:u(d(m))},null,8,["class","style"])}}}),[["__scopeId","data-v-4a2ddff6"]]),q=I(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"skeleton-avatar",props:V,setup(t){const e=t,a=S("skeleton"),i=o((()=>s(a.e("avatar"),e.rootClass))),u=o((()=>n({width:e.size,height:e.size},e.rootStyle)));return(t,e)=>(r(),l(O,{"root-class":d(i),"root-style":d(u),animated:t.animated,round:t.round,width:t.width,height:t.height},null,8,["root-class","root-style","animated","round","width","height"]))}}),[["__scopeId","data-v-79eb9244"]]),E=I(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"skeleton-title",props:N,setup(t){const e=t,a=S("skeleton"),i=o((()=>s(a.e("title"),e.rootClass))),u=o((()=>n(e.rootStyle)));return(t,e)=>(r(),l(O,{"root-class":d(i),"root-style":d(u),animated:t.animated,round:t.round,width:t.width,height:t.height},null,8,["root-class","root-style","animated","round","width","height"]))}}),[["__scopeId","data-v-8e74044c"]]),F=I(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"skeleton-paragraph",props:A,setup(t){const e=t,a=S("skeleton"),_=o((()=>s(a.e("paragraph"),e.rootClass))),g=o((()=>n(e.rootStyle)));return(t,e)=>{const o=c;return r(),l(o,{class:i(d(_)),style:u(d(g))},{default:p((()=>[(r(!0),m(h,null,f(t.rows,(e=>(r(),l(O,{key:e,animated:t.animated,round:t.round,width:t.width,height:t.height,"root-class":d(a).e("row")},null,8,["animated","round","width","height","root-class"])))),128))])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-175b9ac8"]]),J=I(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"skeleton",props:H,setup(t){const e=t,a=S("skeleton"),m=o((()=>s(a.b(),e.rootClass))),h=o((()=>n(e.rootStyle)));return(t,e)=>{const o=c;return t.loading?(r(),l(o,{key:0,class:i(d(m)),style:u(d(h))},{default:p((()=>[t.avatar?(r(),l(q,{key:0,animated:t.animated,size:t.avatarSize,round:t.avatarRound},null,8,["animated","size","round"])):_("",!0),g(o,{class:i(d(a).e("content"))},{default:p((()=>[t.title?(r(),l(E,{key:0,animated:t.animated,round:t.round},null,8,["animated","round"])):_("",!0),g(F,{rows:t.rows,animated:t.animated,round:t.round},null,8,["rows","animated","round"])])),_:1},8,["class"])])),_:1},8,["class","style"])):y(t.$slots,"default",{key:1},void 0,!0)}}}),[["__scopeId","data-v-cbc9f4f7"]]);const U=I({},[["render",function(t,e){const a=k(v("sar-skeleton"),J);return r(),l(a)}]]);const $=I({},[["render",function(t,e){const a=k(v("sar-skeleton"),J);return r(),l(a,{title:""})}]]);const D=I({},[["render",function(t,e){const a=k(v("sar-skeleton"),J);return r(),l(a,{avatar:"",title:""})}]]);const G=I({},[["render",function(t,e){const a=k(v("sar-skeleton"),J);return r(),l(a,{avatar:"","avatar-round":"",title:""})}]]);const K=I({},[["render",function(t,e){const a=k(v("sar-skeleton"),J);return r(),l(a,{avatar:"",title:"",round:""})}]]);const L=I({},[["render",function(t,e){const a=k(v("sar-skeleton"),J);return r(),l(a,{avatar:"",title:"",animated:""})}]]),M=a({__name:"Contain",setup(t){const e=w(!1);return(t,a)=>{const o=k(v("sar-switch"),z),s=k(v("sar-icon"),j),n=c,l=k(v("sar-skeleton"),J);return r(),m(h,null,[g(o,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),"root-style":"margin-bottom: 20rpx;"},null,8,["modelValue"]),g(l,{avatar:"",title:"",animated:"",loading:e.value},{default:p((()=>[g(n,{style:{display:"flex",gap:"30rpx"}},{default:p((()=>[g(s,{name:"person",size:"64rpx"}),g(n,{style:{flex:"1"}},{default:p((()=>[g(n,{style:{"font-size":"var(--sar-text-lg)","margin-bottom":"20rpx"}},{default:p((()=>[x(" 我是一个标题 ")])),_:1}),g(n,null,{default:p((()=>[x(" 我是一个段落我是一个段落我是一个段落我是一个段落我是一个段落我是一个段落我是一个段落我是一个段落 ")])),_:1})])),_:1})])),_:1})])),_:1},8,["loading"])],64)}}});const P=I({},[["render",function(t,e){const a=k(v("sar-skeleton-block"),O),o=c,s=k(v("sar-col"),B),n=k(v("sar-row"),C),l=k(v("sar-skeleton-paragraph"),F);return r(),m(h,null,[g(n,{gap:"20rpx","root-style":"row-gap: 30rpx"},{default:p((()=>[(r(),m(h,null,f(8,(t=>g(s,{key:t,span:3},{default:p((()=>[g(o,{style:{display:"flex","flex-direction":"column","align-items":"center","row-gap":"16rpx"}},{default:p((()=>[g(a,{height:"120rpx",animated:""}),g(a,{animated:""})])),_:1})])),_:2},1024))),64))])),_:1}),g(o,{style:{display:"flex",gap:"40rpx","margin-top":"60rpx"}},{default:p((()=>[g(a,{width:"100px",height:"80px",animated:""}),g(o,{style:{display:"flex","flex-direction":"column",flex:"1"}},{default:p((()=>[g(l,{rows:2,animated:""}),g(a,{width:"120rpx",height:"60rpx","root-style":"margin-left: auto; margin-top: auto",animated:""})])),_:1})])),_:1})],64)}]]),Q=I(a({__name:"index",setup:e=>(e,a)=>{const o=k(v("doc-demo"),t),s=k(v("doc-page"),b);return r(),l(s,{emphasis:""},{default:p((()=>[g(o,{title:"基础使用"},{default:p((()=>[g(U)])),_:1}),g(o,{title:"显示标题"},{default:p((()=>[g($)])),_:1}),g(o,{title:"显示头像"},{default:p((()=>[g(D)])),_:1}),g(o,{title:"圆形头像"},{default:p((()=>[g(G)])),_:1}),g(o,{title:"圆角标题和段落"},{default:p((()=>[g(K)])),_:1}),g(o,{title:"动画效果"},{default:p((()=>[g(L)])),_:1}),g(o,{title:"包含子组件"},{default:p((()=>[g(M)])),_:1}),g(o,{title:"自定义"},{default:p((()=>[g(P)])),_:1})])),_:1})}}),[["__scopeId","data-v-321b7aab"]]);export{Q as default};
