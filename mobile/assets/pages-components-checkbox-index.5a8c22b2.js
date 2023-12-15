import{_ as e}from"./index.1d7a4681.js";import{d as t,g as a,o as l,f as o,w as u,i as r,t as n,r as c,a as s,c as d,e as i,F as _,b as p,v as m}from"./index-9377a170.js";import{_ as f}from"./index.913a9e45.js";import{_ as v}from"./checkbox.5b61e0fc.js";import{_ as h}from"./index.e23b323d.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as x}from"./index.fad96fb0.js";import{_ as b}from"./checkbox-group.e1ee9801.js";import{_ as g,a as y}from"./list.36009550.js";import"./common.802edc1c.js";const V=t({__name:"Basic",setup(e){const t=a(!1);return(e,a)=>{const d=c(s("sar-checkbox"),v);return l(),o(d,{checked:t.value,"onUpdate:checked":a[0]||(a[0]=e=>t.value=e)},{default:u((()=>[r(n(t.value?"已选中":"未选中"),1)])),_:1},8,["checked"])}}});const j=k({},[["render",function(e,t){const a=c(s("doc-title"),h),o=c(s("sar-checkbox"),v);return l(),d(_,null,[i(a,null,{default:u((()=>[r("只读")])),_:1}),i(o,{readonly:""},{default:u((()=>[r("复选框")])),_:1}),i(o,{readonly:"",checked:"","root-style":"margin-top: 10rpx"},{default:u((()=>[r(" 复选框 ")])),_:1}),i(a,null,{default:u((()=>[r("禁用")])),_:1}),i(o,{disabled:""},{default:u((()=>[r("复选框")])),_:1}),i(o,{disabled:"",checked:"","root-style":"margin-top: 10rpx"},{default:u((()=>[r(" 复选框 ")])),_:1})],64)}]]);const C=k({},[["render",function(e,t){const a=c(s("sar-checkbox"),v);return l(),o(a,{size:"48rpx"},{default:u((()=>[r("复选框")])),_:1})}]]);const U=k({},[["render",function(e,t){const a=c(s("sar-checkbox"),v);return l(),o(a,{checked:"","checked-color":"var(--sar-red)"},{default:u((()=>[r("复选框")])),_:1})}]]);const z=k({},[["render",function(e,t){const a=c(s("sar-checkbox"),v);return l(),o(a,{checked:"",type:"circle"},{default:u((()=>[r("复选框")])),_:1})}]]);const B=k({},[["render",function(e,t){const a=c(s("sar-icon"),x),n=c(s("sar-checkbox"),v);return l(),o(n,{checked:""},{icon:u((({checked:e})=>[i(a,{family:"demo-icons",name:e?"heart-fill":"heart"},null,8,["name"])])),default:u((()=>[r(" 复选框 ")])),_:1})}]]),D=t({__name:"Group",setup(e){const t=a(["option2"]);return(e,a)=>{const n=c(s("sar-checkbox"),v),d=c(s("sar-checkbox-group"),b);return l(),o(d,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e)},{default:u((()=>[i(n,{value:"option1"},{default:u((()=>[r("选项1")])),_:1}),i(n,{value:"option2"},{default:u((()=>[r("选项2")])),_:1}),i(n,{value:"option3"},{default:u((()=>[r("选项3")])),_:1})])),_:1},8,["modelValue"])}}}),w=t({__name:"Direction",setup(e){const t=a(["option2"]);return(e,a)=>{const n=c(s("sar-checkbox"),v),d=c(s("sar-checkbox-group"),b);return l(),o(d,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),direction:"horizontal"},{default:u((()=>[i(n,{value:"option1"},{default:u((()=>[r("选项1")])),_:1}),i(n,{value:"option2"},{default:u((()=>[r("选项2")])),_:1}),i(n,{value:"option3"},{default:u((()=>[r("选项3")])),_:1})])),_:1},8,["modelValue"])}}}),F=t({__name:"Custom",setup(e){const t=a(["option2"]),r=[{value:"option1",label:"选项1"},{value:"option2",label:"选项2"},{value:"option3",label:"选项3"}];return(e,a)=>{const n=c(s("sar-checkbox"),v),f=c(s("sar-list-item"),g),h=c(s("sar-list"),y),k=c(s("sar-checkbox-group"),b),V=c(s("sar-icon"),x);return l(),d(_,null,[i(k,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e)},{custom:u((({toggle:e})=>[i(h,{card:""},{default:u((()=>[(l(),d(_,null,p(r,((t,a)=>i(f,{key:a,title:t.label,hover:"",onClick:a=>e(t.value)},{icon:u((()=>[i(n,{readonly:"",value:t.value},null,8,["value"])])),_:2},1032,["title","onClick"]))),64))])),_:2},1024)])),_:1},8,["modelValue"]),i(k,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),"root-style":"margin-top: 40rpx"},{custom:u((({toggle:e})=>[i(h,{card:""},{default:u((()=>[(l(),d(_,null,p(r,((t,a)=>i(f,{key:a,title:t.label,hover:"",onClick:a=>e(t.value)},{value:u((()=>[i(n,{readonly:"",value:t.value},{icon:u((({checked:e})=>[e?(l(),o(V,{key:0,color:"var(--sar-red)",size:"32rpx",name:"success"})):m("",!0)])),_:2},1032,["value"])])),_:2},1032,["title","onClick"]))),64))])),_:2},1024)])),_:1},8,["modelValue"])],64)}}}),G=k(t({__name:"index",setup:t=>(t,a)=>{const r=c(s("doc-demo"),e),n=c(s("doc-page"),f);return l(),o(n,null,{default:u((()=>[i(r,{title:"基础使用"},{default:u((()=>[i(V)])),_:1}),i(r,{title:"只读和禁用"},{default:u((()=>[i(j)])),_:1}),i(r,{title:"图标大小"},{default:u((()=>[i(C)])),_:1}),i(r,{title:"图标颜色"},{default:u((()=>[i(U)])),_:1}),i(r,{title:"图标类型"},{default:u((()=>[i(z)])),_:1}),i(r,{title:"自定义图标"},{default:u((()=>[i(B)])),_:1}),i(r,{title:"复选框组"},{default:u((()=>[i(D)])),_:1}),i(r,{title:"排列方向"},{default:u((()=>[i(w)])),_:1}),i(r,{title:"自定义"},{default:u((()=>[i(F)])),_:1})])),_:1})}}),[["__scopeId","data-v-f9a0e854"]]);export{G as default};
