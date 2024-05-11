import{_ as e}from"./index.3d69d03d.js";import{E as t,d as a,m as o,p as n,q as l,s as r,o as i,f as s,w as c,x as u,e as m,h as d,u as f,v as b,i as _,t as p,y,l as v,g as x,A as g,B as S,C as h,D as C,r as j,a as I,k,H as z}from"./index-aa8abc65.js";import{_ as B}from"./index.5a4c2473.js";import{a as U,b as w,_ as A}from"./index.776be883.js";import{_ as H}from"./badge.30571ffb.js";const N={rootStyle:[String,Object,Array],rootClass:String,current:[Number,String],color:String,activeColor:String,bordered:{type:Boolean,default:t.tabbar.bordered}},$={rootStyle:[String,Object,Array],rootClass:String,name:[Number,String],icon:String,iconFamily:String,iconSize:String,badge:[Number,String],dot:Boolean,text:String},q=Symbol("tabbar-context"),E=A(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"tabbar-item",props:$,emits:["click"],setup(e,{emit:t}){const a=e,x=w("tabbar"),g=o(q);if(!g)throw new Error("TabbarItem must be included in Tabbar.");const S=n((()=>g.current===a.name)),h=e=>{void 0!==a.name&&g.select(a.name),t("click",e)},C=n((()=>l(x.e("item"),x.em("item","current",S.value),a.rootClass))),j=n((()=>r({color:S.value?g.activeColor:g.color},a.rootStyle)));return(e,t)=>{const a=v;return i(),s(a,{class:d(f(C)),style:y(f(j)),onClick:h},{default:c((()=>[u(e.$slots,"default",{},(()=>[m(a,{class:d(f(x).e("icon"))},{default:c((()=>[u(e.$slots,"icon",{},(()=>[m(U,{name:e.icon,family:e.iconFamily,size:e.iconSize},null,8,["name","family","size"])]),!0),e.badge||e.dot?(i(),s(H,{key:0,value:e.badge,dot:e.dot,fixed:""},null,8,["value","dot"])):b("",!0)])),_:3},8,["class"]),m(a,{class:d(f(x).e("text"))},{default:c((()=>[_(p(e.text),1)])),_:1},8,["class"])]),!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-c5e124f1"]]),F=A(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"tabbar",props:N,emits:["update:current"],setup(e,{emit:t}){const a=e,o=w("tabbar"),m=x(a.current);g((()=>a.current),(()=>{a.current!==m.value&&(m.value=a.current)}));S(q,h({color:C(a,"color"),activeColor:C(a,"activeColor"),current:m,select:e=>{m.value=e,t("update:current",e)}}));const b=n((()=>l(o.b(),o.m("bordered",a.bordered),a.rootClass))),_=n((()=>r(a.rootStyle)));return(e,t)=>{const a=v;return i(),s(a,{class:d(f(b)),style:y(f(_))},{default:c((()=>[u(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-a006aad0"]]),O=a({__name:"Basic",setup(e){const t=x(0);return(e,a)=>{const o=j(I("sar-tabbar-item"),E),n=j(I("sar-tabbar"),F);return i(),s(n,{current:t.value,"onUpdate:current":a[0]||(a[0]=e=>t.value=e)},{default:c((()=>[m(o,{name:0,icon:"house-door-fill","icon-family":"demo-icons",text:"首页"}),m(o,{name:1,icon:"cart-fill","icon-family":"demo-icons",text:"购物车"}),m(o,{name:2,icon:"chat-dots-fill","icon-family":"demo-icons",text:"消息"}),m(o,{name:3,icon:"person-fill","icon-family":"demo-icons",text:"我的"})])),_:1},8,["current"])}}}),T=a({__name:"Icon",setup(e){const t=x(0);return(e,a)=>{const o=j(I("sar-tabbar-item"),E),n=j(I("sar-tabbar"),F);return i(),s(n,{current:t.value,"onUpdate:current":a[0]||(a[0]=e=>t.value=e)},{default:c((()=>[m(o,{name:0,icon:0===t.value?"house-door-fill":"house-door","icon-family":"demo-icons",text:"首页"},null,8,["icon"]),m(o,{name:1,icon:1===t.value?"cart-fill":"cart","icon-family":"demo-icons",text:"购物车"},null,8,["icon"]),m(o,{name:2,icon:2===t.value?"chat-dots-fill":"chat-dots","icon-family":"demo-icons",text:"消息"},null,8,["icon"]),m(o,{name:3,icon:3===t.value?"person-fill":"person","icon-family":"demo-icons",text:"我的"},null,8,["icon"])])),_:1},8,["current"])}}}),D=a({__name:"Color",setup(e){const t=x(0);return(e,a)=>{const o=j(I("sar-tabbar-item"),E),n=j(I("sar-tabbar"),F);return i(),s(n,{current:t.value,"onUpdate:current":a[0]||(a[0]=e=>t.value=e),"active-color":"var(--sar-red)"},{default:c((()=>[m(o,{name:0,icon:"house-door-fill","icon-family":"demo-icons",text:"首页"}),m(o,{name:1,icon:"cart-fill","icon-family":"demo-icons",text:"购物车"}),m(o,{name:2,icon:"chat-dots-fill","icon-family":"demo-icons",text:"消息"}),m(o,{name:3,icon:"person-fill","icon-family":"demo-icons",text:"我的"})])),_:1},8,["current"])}}});const G=A({},[["render",function(e,t){const a=j(I("sar-tabbar-item"),E),o=j(I("sar-tabbar"),F);return i(),s(o,null,{default:c((()=>[m(a,{name:0,icon:"house-door-fill","icon-family":"demo-icons",text:"首页"}),m(a,{name:1,icon:"cart-fill","icon-family":"demo-icons",text:"购物车"}),m(a,{name:2,icon:"chat-dots-fill","icon-family":"demo-icons",badge:5,text:"消息"}),m(a,{name:3,icon:"person-fill","icon-family":"demo-icons",dot:"",text:"我的"})])),_:1})}]]),J=A(a({__name:"Bulge",setup(e){const t=x(0);return(e,a)=>{const o=j(I("sar-tabbar-item"),E),n=v,l=j(I("sar-icon"),U),r=k,u=j(I("sar-tabbar"),F);return i(),s(u,{current:t.value,"onUpdate:current":a[1]||(a[1]=e=>t.value=e)},{default:c((()=>[m(o,{name:0,icon:"house-door-fill","icon-family":"demo-icons",text:"首页"}),m(o,{name:1,icon:"cart-fill","icon-family":"demo-icons",text:"购物车"}),m(o,{onClick:a[0]||(a[0]=e=>f(z)("点击了添加按钮"))},{default:c((()=>[m(n,{class:"bulge"},{default:c((()=>[m(n,{class:"cover"}),m(n,{class:"button"},{default:c((()=>[m(l,{name:"plus",size:"96rpx"})])),_:1})])),_:1}),m(r,{class:"text"},{default:c((()=>[_("添加")])),_:1})])),_:1}),m(o,{name:2,icon:"chat-dots-fill","icon-family":"demo-icons",text:"消息"}),m(o,{name:3,icon:"person-fill","icon-family":"demo-icons",text:"我的"})])),_:1},8,["current"])}}}),[["__scopeId","data-v-f208697d"]]),K=A(a({__name:"index",setup:t=>(t,a)=>{const o=j(I("doc-demo"),e),n=j(I("doc-page"),B);return i(),s(n,null,{default:c((()=>[m(o,{title:"基础使用",full:""},{default:c((()=>[m(O)])),_:1}),m(o,{title:"自定义图标",full:""},{default:c((()=>[m(T)])),_:1}),m(o,{title:"自定义颜色",full:""},{default:c((()=>[m(D)])),_:1}),m(o,{title:"徽标",full:""},{default:c((()=>[m(G)])),_:1}),m(o,{title:"中间鼓起",full:""},{default:c((()=>[m(J)])),_:1})])),_:1})}}),[["__scopeId","data-v-ca8a1c7f"]]);export{K as default};