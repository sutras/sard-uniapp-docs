import{E as e,d as s,m as a,p as l,L as t,N as o,_ as r,P as i,o as u,f as n,w as c,v as d,i as v,t as m,h as p,x as b,u as y,q as f,z as _,l as w,M as h,G as x,g,A as C,B as k,C as S,e as $,c as j,F as I,b as T,s as B,W as E}from"./index-DFwJ2Oj-.js";import{b as H,_ as P}from"./index.BDMDFAO9.js";import{g as R}from"./dom.LPfVLj9J.js";import{c as q}from"./index.NOUmFN7R.js";const z=e.tabs,A=Symbol("tab-context"),D=P(s({options:{virtualHost:!0,styleIsolation:"shared"},__name:"tab",props:{rootStyle:{},rootClass:{},title:{},name:{},disabled:{type:Boolean}},emits:["click"],setup(e,{emit:s}){const x=e,g=s,C=H("tabs"),k=a(A);if(!k)throw new Error("Tab must be included in Tabs.");const S=h(),$=l((()=>k.current===x.name)),j=t(),I=()=>R(`#${j}`,S),T=()=>{k.select(x.name)},B=e=>{g("click",e),x.disabled||T()};o((()=>{k.register(x.name,{getRect:I}),$.value&&r((()=>{T()}))})),i((()=>{k.unregister(x.name)}));const E=l((()=>f(C.e("tab"),C.em("tab","current",$.value),C.em("tab","disabled",x.disabled),x.rootClass))),P=l((()=>_(x.rootStyle)));return(e,s)=>{const a=w;return u(),n(a,{class:p(E.value),style:b(P.value),id:y(j),onClick:B},{default:c((()=>[d(e.$slots,"default",{},(()=>[v(m(e.title),1)]),!0)])),_:3},8,["class","style","id"])}}}),[["__scopeId","data-v-437c384d"]]),F=P(s({options:{virtualHost:!0,styleIsolation:"shared"},__name:"tabs",props:x({rootStyle:{},rootClass:{},current:{},list:{},type:{},scrollable:{type:Boolean}},z),emits:["update:current"],setup(e,{emit:s}){const a=e,o=s,r=H("tabs"),i=g();C(i,(()=>{setTimeout((()=>{void 0!==i.value&&((async e=>{if(!M.value||!L[e])return;const[s,l,t]=await Promise.all([R(`#${x}`,m),R(`#${P}`,m),L[e].getRect()]);F.value=t.left-l.left-(s.width-t.width)/2,"line"===a.type&&(z.value=t.left-l.left+t.width/2),G.value||setTimeout((()=>{G.value=!0}),30)})(i.value),i.value=void 0)}),30)}));const v=g(a.current),m=h(),x=t(),P=t(),z=g(0),F=g(0),G=g(!1),L={},M=l((()=>"line"===a.type||"pill"===a.type&&a.scrollable));C((()=>a.current),(()=>{a.current!==v.value&&(v.value=a.current,i.value=v.value)})),C((()=>a.list),(()=>{i.value=v.value})),q((()=>{i.value=v.value})),k(A,S({current:v,register(e,s){L[e]=s},unregister(e){delete L[e]},select(e){v.value=e,o("update:current",e),i.value=e}}));const N=l((()=>f(r.b(),r.m(a.type),r.m("scrollable",a.scrollable),a.rootClass))),W=l((()=>_(a.rootStyle))),J=l((()=>_({left:z.value+"px",transitionDuration:G.value?null:"0s",opacity:G.value?null:0})));return(e,s)=>{const a=w,l=E;return u(),n(a,{class:p(N.value),style:b(W.value)},{default:c((()=>[$(l,{id:y(x),class:p(y(r).e("scroll")),"scroll-x":e.scrollable,"scroll-left":F.value,"scroll-with-animation":G.value},{default:c((()=>[$(a,{class:p(y(r).e("container"))},{default:c((()=>[$(a,{id:y(P),class:p(y(r).e("wrapper"))},{default:c((()=>[d(e.$slots,"default",{},(()=>[(u(!0),j(I,null,T(e.list,((e,s)=>(u(),n(D,{key:s,title:e.title,name:e.name??s,disabled:e.disabled,"root-style":e.rootStyle,"root-class":e.rootClass},null,8,["title","name","disabled","root-style","root-class"])))),128))]),!0),"line"===e.type?(u(),n(a,{key:0,class:p(y(r).e("line")),style:b(J.value)},null,8,["class","style"])):B("",!0)])),_:3},8,["id","class"])])),_:3},8,["class"])])),_:3},8,["id","class","scroll-x","scroll-left","scroll-with-animation"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-aa8f9fb8"]]);export{F as _,D as a};