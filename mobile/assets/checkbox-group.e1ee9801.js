import{d as e,g as s,A as o,B as a,C as l,D as t,o as r,f as u,w as d,x as c,h as i,u as m,q as n,y as p,s as v,l as y}from"./index-9377a170.js";import{c as g,a as h}from"./checkbox.5b61e0fc.js";import{a as f}from"./index.fad96fb0.js";import{u as _}from"./common.802edc1c.js";import{_ as x}from"./_plugin-vue_export-helper.1b428a4d.js";const b=x(e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"checkbox-group",props:g,emits:["update:model-value"],setup(e,{emit:g}){const x=e,b=f("checkbox-group"),k=_(),j=s(x.modelValue||[]);o((()=>x.modelValue),(()=>{j.value=x.modelValue||[],x.validateEvent&&(null==k||k.onChange())}));const C=e=>{g("update:model-value",j.value.includes(e)?j.value.filter((s=>s!==e)):j.value.concat(e))};return a(h,l({disabled:t(x,"disabled"),readonly:t(x,"readonly"),size:t(x,"size"),type:t(x,"type"),checkedColor:t(x,"checkedColor"),value:j,toggle:C})),(e,s)=>{const o=y;return r(),u(o,{class:i(m(n)(m(b).b(),m(b).m(e.direction),e.rootClass)),style:p(m(v)(e.rootStyle))},{default:d((()=>[e.$slots.custom?c(e.$slots,"custom",{key:0,toggle:C,value:j.value},void 0,!0):c(e.$slots,"default",{key:1},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-2446b155"]]);export{b as _};
