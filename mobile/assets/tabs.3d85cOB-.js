import{E as e,d as s,m as a,p as l,L as t,N as o,$ as r,S as i,o as u,f as n,w as c,v as d,i as v,t as m,h as p,x as b,u as y,q as f,z as _,l as w,M as h,G as x,g,A as C,B as S,C as k,e as $,c as j,F as I,b as T,s as B,X as E}from"./index-cDBoG4Q4.js";import{b as H,_ as R}from"./index.DPvFFOke.js";import{g as q}from"./dom.v6hFRhZS.js";import{c as z}from"./index.BXD0v1E4.js";const A=e.tabs,D=Symbol("tab-context"),F=R(s({options:{virtualHost:!0,styleIsolation:"shared"},__name:"tab",props:{rootStyle:{},rootClass:{},title:{},name:{},disabled:{type:Boolean}},emits:["click"],setup(e,{emit:s}){const x=e,g=s,C=H("tabs"),S=a(D);if(!S)throw new Error("Tab must be included in Tabs.");const k=h(),$=l((()=>S.current===x.name)),j=t(),I=()=>q(`#${j}`,k),T=()=>{S.select(x.name)},B=e=>{g("click",e),x.disabled||T()};o((()=>{S.register(x.name,{getRect:I}),$.value&&r((()=>{T()}))})),i((()=>{S.unregister(x.name)}));const E=l((()=>f(C.e("tab"),C.em("tab","current",$.value),C.em("tab","disabled",x.disabled),x.rootClass))),R=l((()=>_(x.rootStyle)));return(e,s)=>{const a=w;return u(),n(a,{class:p(E.value),style:b(R.value),id:y(j),onClick:B},{default:c((()=>[d(e.$slots,"default",{},(()=>[v(m(e.title),1)]),!0)])),_:3},8,["class","style","id"])}}}),[["__scopeId","data-v-437c384d"]]),G=R(s({options:{virtualHost:!0,styleIsolation:"shared"},__name:"tabs",props:x({rootStyle:{},rootClass:{},current:{},list:{},type:{},scrollable:{type:Boolean}},A),emits:["update:current"],setup(e,{emit:s}){const a=e,o=s,r=H("tabs"),i=g();C(i,(()=>{setTimeout((()=>{void 0!==i.value&&((async e=>{if(!N.value||!M[e])return;const[s,l,t]=await Promise.all([q(`#${x}`,m),q(`#${R}`,m),M[e].getRect()]);G.value=t.left-l.left-(s.width-t.width)/2,"line"===a.type&&(A.value=t.left-l.left+t.width/2),L.value||setTimeout((()=>{L.value=!0}),30)})(i.value),i.value=void 0)}),30)}));const v=g(a.current),m=h(),x=t(),R=t(),A=g(0),G=g(0),L=g(!1),M={},N=l((()=>"line"===a.type||"pill"===a.type&&a.scrollable));C((()=>a.current),(()=>{a.current!==v.value&&(v.value=a.current,i.value=v.value)})),C((()=>a.list),(()=>{i.value=v.value})),z((()=>{i.value=v.value})),S(D,k({current:v,register(e,s){M[e]=s},unregister(e){delete M[e]},select(e){v.value=e,o("update:current",e),i.value=e}}));const P=l((()=>f(r.b(),r.m(a.type),r.m("scrollable",a.scrollable),a.rootClass))),X=l((()=>_(a.rootStyle))),J=l((()=>_({left:A.value+"px",transitionDuration:L.value?null:"0s",opacity:L.value?null:0})));return(e,s)=>{const a=w,l=E;return u(),n(a,{class:p(P.value),style:b(X.value)},{default:c((()=>[$(l,{id:y(x),class:p(y(r).e("scroll")),"scroll-x":e.scrollable,"scroll-left":G.value,"scroll-with-animation":L.value},{default:c((()=>[$(a,{class:p(y(r).e("container"))},{default:c((()=>[$(a,{id:y(R),class:p(y(r).e("wrapper"))},{default:c((()=>[d(e.$slots,"default",{},(()=>[(u(!0),j(I,null,T(e.list,((e,s)=>(u(),n(F,{key:s,title:e.title,name:e.name??s,disabled:e.disabled,"root-style":e.rootStyle,"root-class":e.rootClass},null,8,["title","name","disabled","root-style","root-class"])))),128))]),!0),"line"===e.type?(u(),n(a,{key:0,class:p(y(r).e("line")),style:b(J.value)},null,8,["class","style"])):B("",!0)])),_:3},8,["id","class"])])),_:3},8,["class"])])),_:3},8,["id","class","scroll-x","scroll-left","scroll-with-animation"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-aa8f9fb8"]]);export{G as _,F as a};