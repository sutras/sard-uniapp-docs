import{E as e,d as l,g as a,A as o,p as s,o as t,c as i,e as n,w as d,f as u,x as r,v,F as p,z as m}from"./index-aa8abc65.js";import{p as c,_ as b}from"./popout-input.451b6040.js";import{c as f,d as y,S as h,g as C}from"./cascader.eaf466e3.js";import{_ as g}from"./popout.83744114.js";import{u as w}from"./common.c6a791ea.js";const V=l({options:{virtualHost:!0,styleIsolation:"shared"},__name:"cascader-input",props:{...c,...f,visible:Boolean,title:String,showConfirm:{type:Boolean,default:e.cascaderInput.showConfirm},validateEvent:{type:Boolean,default:e.cascaderInput.validateEvent}},emits:["update:visible","update:model-value","select"],setup(e,{emit:l}){const c=e,f=w(),V=a(c.modelValue);o((()=>c.modelValue),(()=>{V.value=c.modelValue,c.validateEvent&&(null==f||f.onChange())}));const j=a(c.modelValue);o(V,(()=>{j.value=V.value}));const _=()=>{V.value=j.value,l("update:model-value",j.value),I.value=E()},x=e=>{j.value=e,c.showConfirm||m(j.value)||(_(),B.value=!1)},I=a(""),k=s((()=>Object.assign({},y,c.fieldKeys)));function E(){return m(V.value)||!c.options?"":function(e,l,a){const o=C(e,l,a);return o?o.map((e=>e[a.label])).join("/"):""}(c.options,V.value,k.value)}o(V,(()=>{I.value=E()}),{immediate:!0}),o((()=>c.options),(()=>{I.value=E()}));const S=()=>{I.value="",V.value=void 0,l("update:model-value",void 0)},B=a(c.visible);o((()=>c.visible),(()=>{B.value=c.visible}));const U=e=>{B.value=e,l("update:visible",e)},K=()=>{B.value=!0,l("update:visible",!0)};return(e,l)=>(t(),i(p,null,[n(b,{modelValue:I.value,"onUpdate:modelValue":l[0]||(l[0]=e=>I.value=e),placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,clearable:e.clearable,onClear:S,onClick:K,loading:e.loading},null,8,["modelValue","placeholder","readonly","disabled","clearable","loading"]),n(g,{"root-class":e.rootClass,"root-style":e.rootStyle,visible:B.value,"onUpdate:visible":U,title:e.title??e.placeholder,"show-confirm":e.showConfirm,onConfirm:_},{visible:d((({already:a})=>[a?(t(),u(h,{key:0,"model-value":j.value,"onUpdate:modelValue":x,options:e.options,"field-keys":e.fieldKeys,placeholder:e.hintText,onSelect:l[1]||(l[1]=(l,a)=>e.$emit("select",l,a))},{top:d((({tabIndex:l})=>[r(e.$slots,"top",{tabIndex:l})])),_:3},8,["model-value","options","field-keys","placeholder"])):v("",!0)])),_:3},8,["root-class","root-style","visible","title","show-confirm"])],64))}});export{V as _};