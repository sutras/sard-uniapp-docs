import{_ as e}from"./index.e7de6d2c.js";import{d as t,g as a,o,f as s,r as n,a as r,c as l,e as u,w as d,i,F as p}from"./index-55845ce0.js";import{_ as m}from"./index.f5b2fbd4.js";import{_ as c}from"./password-input.4f862c28.js";import{_}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as f}from"./index.d03001de.js";import{_ as v}from"./keyboard.0c6862e3.js";import"./index.f4d2668a.js";import"./common.bcce75e7.js";const x=t({__name:"Basic",setup(e){const t=a("");return(e,a)=>{const l=n(r("sar-password-input"),c);return o(),s(l,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e)},null,8,["modelValue"])}}});const y=_({},[["render",function(e,t){const a=n(r("sar-password-input"),c);return o(),s(a,{type:"underline"})}]]);const j=_({},[["render",function(e,t){const a=n(r("sar-password-input"),c);return o(),s(a,{gap:"0"})}]]);const b=_({},[["render",function(e,t){const a=n(r("sar-password-input"),c);return o(),s(a,{"plain-text":""})}]]);const g=_({},[["render",function(e,t){const a=n(r("doc-title"),f),s=n(r("sar-password-input"),c);return o(),l(p,null,[u(a,null,{default:d((()=>[i("只读")])),_:1}),u(s,{"model-value":"123456",readonly:""}),u(s,{"model-value":"123456",plainText:"",readonly:"","root-style":"margin-top: 20rpx"}),u(a,null,{default:d((()=>[i("禁用")])),_:1}),u(s,{"model-value":"123456",disabled:""}),u(s,{"model-value":"123456",plainText:"",disabled:"","root-style":"margin-top: 20rpx"})],64)}]]),w=t({__name:"CustomKeyboard",setup(e){const t=a("");return(e,a)=>{const s=n(r("sar-password-input"),c),d=n(r("sar-keyboard"),v);return o(),l(p,null,[u(s,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),type:"underline",customKeyboard:"",focused:"","root-style":"margin-bottom: 20rpx"},null,8,["modelValue"]),u(d,{onInput:a[1]||(a[1]=e=>t.value=(t.value+e).slice(0,6)),onDelete:a[2]||(a[2]=e=>t.value=t.value.slice(0,-1))})],64)}}}),V=_(t({__name:"index",setup:t=>(t,a)=>{const l=n(r("doc-demo"),e),i=n(r("doc-page"),m);return o(),s(i,{emphasis:""},{default:d((()=>[u(l,{title:"基础使用"},{default:d((()=>[u(x)])),_:1}),u(l,{title:"下划线类型"},{default:d((()=>[u(y)])),_:1}),u(l,{title:"间距"},{default:d((()=>[u(j)])),_:1}),u(l,{title:"明文显示"},{default:d((()=>[u(b)])),_:1}),u(l,{title:"只读和禁用"},{default:d((()=>[u(g)])),_:1}),u(l,{title:"使用自定义键盘"},{default:d((()=>[u(w)])),_:1})])),_:1})}}),[["__scopeId","data-v-fab55229"]]);export{V as default};