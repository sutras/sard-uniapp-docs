import{_ as a}from"./index.70abdba0.js";import{d as e,g as l,o as t,f as s,w as r,e as o,u as i,r as n,a as d,H as u,y as m,i as c,t as p,l as _}from"./index-158834fb.js";import{_ as f}from"./index.be0dc1e1.js";import{S as v}from"./cascader.6d5dc14c.js";import{_ as b,a as j}from"./list.28356688.js";import{g as y}from"./index.d41e015b.js";import{_ as g}from"./index.a84991b2.js";import"./tabs.7a67b2be.js";import"./dom.607148e9.js";const x=e({__name:"Basic",setup(a){const e=y(),u=l(150102);return(a,l)=>{const m=n(d("sar-cascader"),v),c=n(d("sar-list-item"),b),p=n(d("sar-list"),j);return t(),s(p,{card:""},{default:r((()=>[o(c,null,{default:r((()=>[o(m,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=a=>u.value=a),options:i(e),"field-keys":{label:"name",value:"code"}},null,8,["modelValue","options"])])),_:1}),o(c,{title:"当前值：",value:String(u.value)},null,8,["value"]),o(c,{title:"设置为：440111 (广东省/广州市/白云区)",arrow:"",hover:"",onClick:l[1]||(l[1]=a=>u.value=440111)}),o(c,{title:"清空",arrow:"",hover:"",onClick:l[2]||(l[2]=a=>u.value=void 0)})])),_:1})}}}),h=e({__name:"Async",setup(a){const e=l(Array(10).fill(0).map(((a,e)=>({label:"label"+e,value:e,children:[]})))),i=(a,l)=>{var t;l<2&&0===(null==(t=a.children)?void 0:t.length)&&setTimeout((()=>{a.children=Array(10).fill(0).map(((e,t)=>({label:a.label+"-label"+t,value:a.value+"-"+t,children:l<1?[]:void 0}))),e.value=e.value.slice()}),1e3)},m=(a,e)=>{u(e.map((a=>a.label)).join("/"))};return(a,l)=>{const u=n(d("sar-cascader"),v),c=n(d("sar-list-item"),b),p=n(d("sar-list"),j);return t(),s(p,{card:""},{default:r((()=>[o(c,null,{default:r((()=>[o(u,{options:e.value,onSelect:i,"onUpdate:modelValue":m},null,8,["options"])])),_:1})])),_:1})}}}),k=e({__name:"OptionTop",setup(a){const e=y(),l=(a,e)=>{u(e.map((a=>a.name)).join("/"))};return(a,u)=>{const f=_,y=n(d("sar-cascader"),v),g=n(d("sar-list-item"),b),x=n(d("sar-list"),j);return t(),s(x,{card:""},{default:r((()=>[o(g,null,{default:r((()=>[o(y,{options:i(e),"field-keys":{label:"name",value:"code"},"onUpdate:modelValue":l},{top:r((({tabIndex:a})=>[o(f,{style:m({padding:"16rpx 32rpx",backgroundColor:"rgba(var(--sar-primary-rgb), 0.1)",color:"var(--sar-primary)"})},{default:r((()=>[c(" 当前为第"+p(a+1)+"级 ",1)])),_:2},1032,["style"])])),_:1},8,["options"])])),_:1})])),_:1})}}}),A=e({__name:"Disabled",setup(a){const e=Array(10).fill(0).map(((a,e)=>({label:`label${e}`,value:`${e}`,disabled:e<3,children:Array(10).fill(0).map(((a,l)=>({label:`label${e}-label${l}`,value:`${e}-${l}`,disabled:l<3})))}))),l=(a,e)=>{u(e.map((a=>a.label)).join("/"))};return(a,u)=>{const m=n(d("sar-cascader"),v),c=n(d("sar-list-item"),b),p=n(d("sar-list"),j);return t(),s(p,{card:""},{default:r((()=>[o(c,null,{default:r((()=>[o(m,{options:i(e),"onUpdate:modelValue":l},null,8,["options"])])),_:1})])),_:1})}}}),V=g(e({__name:"index",setup:e=>(e,l)=>{const i=n(d("doc-demo"),a),u=n(d("doc-page"),f);return t(),s(u,null,{default:r((()=>[o(i,{title:"基础使用"},{default:r((()=>[o(x)])),_:1}),o(i,{title:"异步加载"},{default:r((()=>[o(h)])),_:1}),o(i,{title:"自定义面板上方内容"},{default:r((()=>[o(k)])),_:1}),o(i,{title:"禁选选项"},{default:r((()=>[o(A)])),_:1})])),_:1})}}),[["__scopeId","data-v-2f94ccab"]]);export{V as default};
