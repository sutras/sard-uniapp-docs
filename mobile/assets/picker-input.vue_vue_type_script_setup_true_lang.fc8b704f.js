import{E as e,d as a,p as l,g as o,A as s,o as t,c as u,e as i,w as n,f as v,v as d,F as r,z as m,U as p}from"./index-158834fb.js";import{p as c,_ as b}from"./popout-input.e343ef0a.js";import{_ as y}from"./popout.9425df0e.js";import{p as f,d as h,_ as V,g,a as k,b as j,c as _}from"./picker.97ded675.js";import{u as C}from"./common.26852cb0.js";const E=a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"picker-input",props:{...c,...f,visible:Boolean,title:String,validateEvent:{type:Boolean,default:e.pickerInput.validateEvent}},emits:["update:visible","update:model-value"],setup(e,{emit:a}){const c=e,f=C(),E=l((()=>Object.assign({},h,c.optionKeys))),U=o(c.modelValue);s((()=>c.modelValue),(()=>{U.value=c.modelValue,c.validateEvent&&(null==f||f.onChange())}));const w=o(c.modelValue),x=e=>{w.value=e},B=e=>{"enter"!==e||m(U.value)||""===U.value||w.value===U.value||(w.value=U.value)},H=()=>{(m(w.value)||""===w.value)&&(w.value=g(c.columns,E.value)),U.value=w.value,a("update:model-value",w.value),I.value=K()},I=o("");function K(){return m(U.value)||""===U.value?"":function(e,a,l){const o=k(p(l),e||[],a);return j(o,e||[],a).map((e=>_(e,a.label))).join("/")}(c.columns,E.value,U.value)}s(U,(()=>{I.value=K()}),{immediate:!0});const S=()=>{I.value="",U.value=void 0,a("update:model-value",void 0)},z=o(c.visible);s((()=>c.visible),(()=>{z.value=c.visible}));const A=e=>{z.value=e,a("update:visible",e)},F=()=>{z.value=!0,a("update:visible",!0)};return(e,a)=>(t(),u(r,null,[i(b,{modelValue:I.value,"onUpdate:modelValue":a[0]||(a[0]=e=>I.value=e),placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,clearable:e.clearable,onClear:S,onClick:F},null,8,["modelValue","placeholder","readonly","disabled","clearable"]),i(y,{"root-class":e.rootClass,"root-style":e.rootStyle,visible:z.value,"onUpdate:visible":A,title:e.title??e.placeholder,onConfirm:H,onVisibleHook:B},{visible:n((({already:a})=>[a?(t(),v(V,{key:0,"model-value":w.value,"onUpdate:modelValue":x,columns:e.columns,"option-keys":e.optionKeys,"immediate-change":e.immediateChange},null,8,["model-value","columns","option-keys","immediate-change"])):d("",!0)])),_:1},8,["root-class","root-style","visible","title"])],64))}});export{E as _};
