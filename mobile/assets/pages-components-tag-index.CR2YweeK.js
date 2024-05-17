import{_ as e}from"./index.BI3vtXtd.js";import{E as a,d as t,G as r,p as l,o as s,f as o,w as n,v as i,h as d,e as u,s as c,x as m,q as f,z as p,l as _,r as y,a as h,c as g,i as v,F as k,I as b}from"./index-DFwJ2Oj-.js";import{_ as x}from"./index.NOUmFN7R.js";import{a as C,b as j,_ as w}from"./index.BDMDFAO9.js";const z=a.tag,B=w(t({options:{virtualHost:!0,styleIsolation:"shared"},__name:"tag",props:r({rootStyle:{},rootClass:{},theme:{},plain:{type:Boolean},round:{type:Boolean},mark:{type:Boolean},size:{},color:{},textColor:{},closable:{type:Boolean}},z),emits:["click","close"],setup(e){const a=e,t=j("tag"),r=l((()=>f(t.b(),t.m(a.theme),t.m("plain",a.plain),t.m(`${a.theme}-plain`,a.plain),t.m(a.size),t.m("round",a.round),t.m("mark",a.mark),a.rootClass))),y=l((()=>p({color:a.plain?a.color:a.textColor,borderColor:a.plain?a.color:null,backgroundColor:a.plain?null:a.color},a.rootStyle))),h=l((()=>f(t.e("close"))));return(e,a)=>{const t=_;return s(),o(t,{class:d(r.value),style:m(y.value),onClick:a[1]||(a[1]=a=>e.$emit("click",a))},{default:n((()=>[i(e.$slots,"default",{},void 0,!0),e.closable?(s(),o(t,{key:0,class:d(h.value),onClick:a[0]||(a[0]=a=>e.$emit("close",a))},{default:n((()=>[u(C,{name:"close"})])),_:1},8,["class"])):c("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-6b7894b3"]]);const I=w({},[["render",function(e,a){const t=y(h("sar-tag"),B);return s(),g(k,null,[u(t,{theme:"primary"},{default:n((()=>[v("primary")])),_:1}),u(t,{theme:"secondary"},{default:n((()=>[v("secondary")])),_:1}),u(t,{theme:"success"},{default:n((()=>[v("success")])),_:1}),u(t,{theme:"info"},{default:n((()=>[v("info")])),_:1}),u(t,{theme:"warning"},{default:n((()=>[v("warning")])),_:1}),u(t,{theme:"danger"},{default:n((()=>[v("danger")])),_:1})],64)}]]);const $=w({},[["render",function(e,a){const t=y(h("sar-tag"),B);return s(),g(k,null,[u(t,{plain:"",theme:"primary"},{default:n((()=>[v("primary")])),_:1}),u(t,{plain:"",theme:"secondary"},{default:n((()=>[v("secondary")])),_:1}),u(t,{plain:"",theme:"success"},{default:n((()=>[v("success")])),_:1}),u(t,{plain:"",theme:"info"},{default:n((()=>[v("info")])),_:1}),u(t,{plain:"",theme:"warning"},{default:n((()=>[v("warning")])),_:1}),u(t,{plain:"",theme:"danger"},{default:n((()=>[v("danger")])),_:1})],64)}]]);const S=w({},[["render",function(e,a){const t=y(h("sar-tag"),B);return s(),o(t,{theme:"primary",round:""},{default:n((()=>[v("标签")])),_:1})}]]);const q=w({},[["render",function(e,a){const t=y(h("sar-tag"),B);return s(),o(t,{theme:"primary",mark:""},{default:n((()=>[v("标签")])),_:1})}]]);const E=w({},[["render",function(e,a){const t=y(h("sar-tag"),B);return s(),g(k,null,[u(t,{theme:"primary",size:"small"},{default:n((()=>[v("标签")])),_:1}),u(t,{theme:"primary"},{default:n((()=>[v("标签")])),_:1}),u(t,{theme:"primary",size:"large"},{default:n((()=>[v("标签")])),_:1})],64)}]]);const F=w({},[["render",function(e,a){const t=y(h("sar-tag"),B);return s(),g(k,null,[u(t,{color:"var(--sar-red)"},{default:n((()=>[v("标签")])),_:1}),u(t,{color:"var(--sar-gray-300)","text-color":"var(--sar-red)"},{default:n((()=>[v(" 标签 ")])),_:1}),u(t,{plain:"",color:"var(--sar-red)"},{default:n((()=>[v("标签")])),_:1})],64)}]]),G=t({__name:"Closable",setup(e){const a=()=>{b("关闭")};return(e,t)=>{const r=y(h("sar-tag"),B);return s(),o(r,{theme:"primary",closable:"",onClose:a},{default:n((()=>[v("标签")])),_:1})}}}),H=w(t({__name:"index",setup:a=>(a,t)=>{const r=y(h("doc-demo"),e),l=y(h("doc-page"),x);return s(),o(l,{emphasis:""},{default:n((()=>[u(r,{title:"基础使用"},{default:n((()=>[u(I)])),_:1}),u(r,{title:"镂空"},{default:n((()=>[u($)])),_:1}),u(r,{title:"圆角"},{default:n((()=>[u(S)])),_:1}),u(r,{title:"标记样式（半圆角）"},{default:n((()=>[u(q)])),_:1}),u(r,{title:"尺寸"},{default:n((()=>[u(E)])),_:1}),u(r,{title:"自定义样式"},{default:n((()=>[u(F)])),_:1}),u(r,{title:"可关闭的"},{default:n((()=>[u(G)])),_:1})])),_:1})}}),[["__scopeId","data-v-ad43379c"]]);export{H as default};