import{_ as t}from"./index.5ae075dd.js";import{d as s,I as a,p as e,q as l,s as r,o,f as n,w as i,h as d,u,x as f,v as c,e as m,i as _,t as p,y,l as v,r as x,a as b,k as g}from"./index-6f8f5948.js";import{_ as h}from"./index.b4cc07cd.js";import{b as S,_ as j,a as k}from"./index.09d87181.js";import{S as $}from"./input.a4dc6f6c.js";import"./common.097e1cb5.js";const w={rootStyle:[String,Object,Array],rootClass:String,title:String,flow:Boolean},z={rootStyle:[String,Object,Array],rootClass:String},I=j(s({options:{virtualHost:!0,styleIsolation:"shared"},__name:"navbar",props:w,setup(t){const s=t,x=a(),b=S("navbar"),g=e((()=>l(b.b(),b.m("flow",s.flow),b.m("custom",!!x.default),s.rootClass))),h=e((()=>r(s.rootStyle)));return(t,s)=>{const a=v;return o(),n(a,{class:d(u(g)),style:y(u(h))},{default:i((()=>[t.$slots.left?(o(),n(a,{key:0,class:d(u(b).e("left"))},{default:i((()=>[f(t.$slots,"left",{},void 0,!0)])),_:3},8,["class"])):c("",!0),m(a,{class:d(u(b).e("content"))},{default:i((()=>[f(t.$slots,"default",{},(()=>[m(a,{class:d(u(b).e("title"))},{default:i((()=>[f(t.$slots,"title",{},(()=>[_(p(t.title),1)]),!0)])),_:3},8,["class"])]),!0)])),_:3},8,["class"]),t.$slots.right?(o(),n(a,{key:1,class:d(u(b).e("right"))},{default:i((()=>[f(t.$slots,"right",{},void 0,!0)])),_:3},8,["class"])):c("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-dd7370cd"]]);const C=j({},[["render",function(t,s){const a=x(b("sar-navbar"),I);return o(),n(a,{title:"标题"})}]]),A=j(s({options:{virtualHost:!0,styleIsolation:"shared"},__name:"navbar-item",props:z,emits:["click"],setup(t){const s=t,a=S("navbar"),c=e((()=>l(a.e("item"),s.rootClass))),m=e((()=>r(s.rootStyle)));return(t,s)=>{const a=v;return o(),n(a,{class:d(u(c)),style:y(u(m)),onClick:s[0]||(s[0]=s=>t.$emit("click",s))},{default:i((()=>[f(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-9552fc74"]]);const H=j({},[["render",function(t,s){const a=x(b("sar-icon"),k),e=x(b("sar-navbar-item"),A),l=x(b("sar-navbar"),I);return o(),n(l,{title:"标题"},{left:i((()=>[m(e,null,{default:i((()=>[m(a,{name:"left",size:"40rpx"})])),_:1})])),right:i((()=>[m(e,null,{default:i((()=>[m(a,{family:"demo-icons",name:"list-task",size:"40rpx"})])),_:1})])),_:1})}]]);const O=j({},[["render",function(t,s){const a=x(b("sar-icon"),k),e=x(b("sar-navbar-item"),A),l=x(b("sar-navbar"),I);return o(),n(l,{title:"发现",flow:""},{left:i((()=>[m(e,null,{default:i((()=>[m(a,{family:"demo-icons",name:"list-task",size:"40rpx"})])),_:1})])),right:i((()=>[m(e,null,{default:i((()=>[m(a,{family:"demo-icons",name:"share",size:"36rpx"})])),_:1}),m(e,null,{default:i((()=>[m(a,{family:"demo-icons",name:"star",size:"40rpx"})])),_:1}),m(e,null,{default:i((()=>[m(a,{family:"demo-icons",name:"heart",size:"36rpx"})])),_:1})])),_:1})}]]);const q=j({},[["render",function(t,s){const a=g,e=x(b("sar-icon"),k),l=x(b("sar-navbar-item"),A),r=x(b("sar-input"),$),d=x(b("sar-navbar"),I);return o(),n(d,{flow:""},{left:i((()=>[m(l,null,{default:i((()=>[m(a,{style:{"margin-right":"4rpx"}},{default:i((()=>[_("城市")])),_:1}),m(e,{name:"down",size:"32rpx"})])),_:1})])),right:i((()=>[m(l,null,{default:i((()=>[_("搜索")])),_:1})])),default:i((()=>[m(r,{placeholder:"请输入关键词","root-style":"border-radius: 9999px"})])),_:1})}]]),B=j(s({__name:"index",setup:s=>(s,a)=>{const e=x(b("doc-demo"),t),l=x(b("doc-page"),h);return o(),n(l,null,{default:i((()=>[m(e,{title:"基础使用",full:""},{default:i((()=>[m(C)])),_:1}),m(e,{title:"导航项",full:""},{default:i((()=>[m(H)])),_:1}),m(e,{title:"流动导航",full:""},{default:i((()=>[m(O)])),_:1}),m(e,{title:"自定义内容",full:""},{default:i((()=>[m(q)])),_:1})])),_:1})}}),[["__scopeId","data-v-1988447e"]]);export{B as default};