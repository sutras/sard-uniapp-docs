import{_ as a}from"./index.1d7a4681.js";import{d as e,g as l,o as t,f as r,w as s,e as o,u as i,r as n,a as d,G as u,y as m,i as p,t as c,l as _}from"./index-9377a170.js";import{_ as f}from"./index.913a9e45.js";import{C as v}from"./cascader.874a9160.js";import{_ as b,a as j}from"./list.36009550.js";import{g as x}from"./index.d41e015b.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";import"./index.fad96fb0.js";import"./tabs.211debfe.js";import"./dom.8f2393f5.js";const y=e({__name:"Basic",setup(a){const e=x(),u=l(150102);return(a,l)=>{const m=n(d("sar-cascader"),v),p=n(d("sar-list-item"),b),c=n(d("sar-list"),j);return t(),r(c,{card:""},{default:s((()=>[o(p,null,{default:s((()=>[o(m,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=a=>u.value=a),options:i(e),"field-names":{label:"name",value:"code"}},null,8,["modelValue","options"])])),_:1}),o(p,{title:"当前值：",value:String(u.value)},null,8,["value"]),o(p,{title:"设置为：440111 (广东省/广州市/白云区)",arrow:"",hover:"",onClick:l[1]||(l[1]=a=>u.value=440111)}),o(p,{title:"清空",arrow:"",hover:"",onClick:l[2]||(l[2]=a=>u.value=void 0)})])),_:1})}}}),h=e({__name:"Async",setup(a){const e=l(Array(10).fill(0).map(((a,e)=>({label:"label"+e,value:e,children:[]})))),i=(a,l)=>{var t;l<2&&0===(null==(t=a.children)?void 0:t.length)&&setTimeout((()=>{a.children=Array(10).fill(0).map(((e,t)=>({label:a.label+"-label"+t,value:a.value+"-"+t,children:l<1?[]:void 0}))),e.value=e.value.slice()}),1e3)},m=(a,e)=>{u(e.map((a=>a.label)).join("/"))};return(a,l)=>{const u=n(d("sar-cascader"),v),p=n(d("sar-list-item"),b),c=n(d("sar-list"),j);return t(),r(c,{card:""},{default:s((()=>[o(p,null,{default:s((()=>[o(u,{options:e.value,onSelect:i,"onUpdate:modelValue":m},null,8,["options"])])),_:1})])),_:1})}}}),V=e({__name:"OptionTop",setup(a){const e=x(),l=(a,e)=>{u(e.map((a=>a.name)).join("/"))};return(a,u)=>{const f=_,x=n(d("sar-cascader"),v),g=n(d("sar-list-item"),b),y=n(d("sar-list"),j);return t(),r(y,{card:""},{default:s((()=>[o(g,null,{default:s((()=>[o(x,{options:i(e),"field-names":{label:"name",value:"code"},"onUpdate:modelValue":l},{top:s((({tabIndex:a})=>[o(f,{style:m({padding:"16rpx 32rpx",backgroundColor:"rgba(var(--sar-primary-rgb), 0.1)",color:"var(--sar-primary)"})},{default:s((()=>[p(" 当前为第"+c(a+1)+"级 ",1)])),_:2},1032,["style"])])),_:1},8,["options"])])),_:1})])),_:1})}}}),$=e({__name:"Disabled",setup(a){const e=Array(10).fill(0).map(((a,e)=>({label:`label${e}`,value:`${e}`,disabled:e<3,children:Array(10).fill(0).map(((a,l)=>({label:`label${e}-label${l}`,value:`${e}-${l}`,disabled:l<3})))}))),l=(a,e)=>{u(e.map((a=>a.label)).join("/"))};return(a,u)=>{const m=n(d("sar-cascader"),v),p=n(d("sar-list-item"),b),c=n(d("sar-list"),j);return t(),r(c,{card:""},{default:s((()=>[o(p,null,{default:s((()=>[o(m,{options:i(e),"onUpdate:modelValue":l},null,8,["options"])])),_:1})])),_:1})}}}),A=g(e({__name:"index",setup:e=>(e,l)=>{const i=n(d("doc-demo"),a),u=n(d("doc-page"),f);return t(),r(u,null,{default:s((()=>[o(i,{title:"基础使用"},{default:s((()=>[o(y)])),_:1}),o(i,{title:"异步加载"},{default:s((()=>[o(h)])),_:1}),o(i,{title:"自定义面板上方内容"},{default:s((()=>[o(V)])),_:1}),o(i,{title:"禁选选项"},{default:s((()=>[o($)])),_:1})])),_:1})}}),[["__scopeId","data-v-2f94ccab"]]);export{A as default};
