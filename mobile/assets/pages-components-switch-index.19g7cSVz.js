import{_ as e}from"./index.DbhGrFWx.js";import{d as l,g as a,r as t,a as o,o as u,f as s,c as n,e as r,w as d,i as m,t as i,F as c,l as _}from"./index-B7LoF5HM.js";import{_ as p}from"./index.XihPCky1.js";import{_ as f}from"./switch.COp6NyNa.js";import{_ as v}from"./index.CPiSTZI_.js";import{_ as V}from"./index.BtT18Zob.js";import"./common.nGc6LDJR.js";const h=l({__name:"Basic",setup(e){const l=a(!0);return(e,a)=>{const n=t(o("sar-switch"),f);return u(),s(n,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e)},null,8,["modelValue"])}}}),x=l({__name:"Size",setup(e){const l=a(!0);return(e,a)=>{const n=t(o("sar-switch"),f);return u(),s(n,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),size:"48rpx"},null,8,["modelValue"])}}}),w=l({__name:"Color",setup(e){const l=a(!0);return(e,a)=>{const n=t(o("sar-switch"),f);return u(),s(n,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),"checked-color":"var(--sar-red)"},null,8,["modelValue"])}}}),j=l({__name:"Value",setup(e){const l=a("on");return(e,a)=>{const s=t(o("sar-switch"),f),p=_;return u(),n(c,null,[r(s,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),"checked-value":"on","unchecked-value":"off"},null,8,["modelValue"]),r(p,null,{default:d((()=>[m(i(l.value),1)])),_:1})],64)}}});const g=V({},[["render",function(e,l){const a=t(o("doc-title"),v),s=t(o("sar-switch"),f);return u(),n(c,null,[r(a,null,{default:d((()=>[m("只读")])),_:1}),r(s,{readonly:""}),r(s,{"model-value":!0,readonly:"","root-style":"margin-top: 10rpx"}),r(a,null,{default:d((()=>[m("禁用")])),_:1}),r(s,{disabled:""}),r(s,{"model-value":!0,disabled:"","root-style":"margin-top: 10rpx"})],64)}]]),U=l({__name:"Loading",setup(e){const l=a(!0),n=e=>(console.log(e),new Promise((e=>{setTimeout(e,1e3)})));return(e,a)=>{const r=t(o("sar-switch"),f);return u(),s(r,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),"before-update":n},null,8,["modelValue"])}}}),k=V(l({__name:"index",setup:l=>(l,a)=>{const n=t(o("doc-demo"),e),m=t(o("doc-page"),p);return u(),s(m,{emphasis:""},{default:d((()=>[r(n,{title:"基础使用"},{default:d((()=>[r(h)])),_:1}),r(n,{title:"自定义尺寸"},{default:d((()=>[r(x)])),_:1}),r(n,{title:"自定义颜色"},{default:d((()=>[r(w)])),_:1}),r(n,{title:"不同状态的值"},{default:d((()=>[r(j)])),_:1}),r(n,{title:"只读和禁用"},{default:d((()=>[r(g)])),_:1}),r(n,{title:"加载状态"},{default:d((()=>[r(U)])),_:1})])),_:1})}}),[["__scopeId","data-v-97222ca8"]]);export{k as default};