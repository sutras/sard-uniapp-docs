import{E as e,d as l,G as a,p as o,g as s,A as t,o as i,c as u,e as n,w as d,f as v,s as p,F as r,y as m,V as c}from"./index-DFwJ2Oj-.js";import{_ as y}from"./popout-input.BJdVGvWw.js";import{_ as b}from"./popout.Dm-B4gdJ.js";import{p as h,_ as V,d as f,g,a as k,b as C,c as j}from"./picker.DHmeMfQj.js";import{u as B}from"./common.BM3Qp-Uy.js";const _={...h,...e.pickerInput},E=l({options:{virtualHost:!0,styleIsolation:"shared"},__name:"picker-input",props:a({visible:{type:Boolean},title:{},validateEvent:{type:Boolean},rootStyle:{},rootClass:{},columns:{},optionKeys:{},modelValue:{},immediateChange:{type:Boolean},placeholder:{},readonly:{type:Boolean},disabled:{type:Boolean},clearable:{type:Boolean},loading:{type:Boolean}},_),emits:["update:visible","update:model-value"],setup(e,{emit:l}){const a=e,h=l,_=B(),E=o((()=>Object.assign({},f,a.optionKeys))),K=s(a.modelValue);t((()=>a.modelValue),(()=>{K.value=a.modelValue,a.validateEvent&&(null==_||_.onChange())}));const U=s(a.modelValue),w=e=>{U.value=e},x=e=>{"enter"!==e||m(K.value)||""===K.value||U.value===K.value||(U.value=K.value)},H=()=>{(m(U.value)||""===U.value)&&(U.value=g(a.columns,E.value)),K.value=U.value,h("update:model-value",U.value),I.value=S()},I=s("");function S(){return m(K.value)||""===K.value?"":function(e,l,a){const o=k(c(a),e||[],l);return C(o,e||[],l).map((e=>j(e,l.label))).join("/")}(a.columns,E.value,K.value)}t(K,(()=>{I.value=S()}),{immediate:!0});const A=()=>{I.value="",K.value=void 0,h("update:model-value",void 0)},F=s(a.visible);t((()=>a.visible),(()=>{F.value=a.visible}));const G=e=>{F.value=e,h("update:visible",e)},O=()=>{F.value=!0,h("update:visible",!0)};return(e,l)=>(i(),u(r,null,[n(y,{modelValue:I.value,"onUpdate:modelValue":l[0]||(l[0]=e=>I.value=e),placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,clearable:e.clearable,onClear:A,onClick:O},null,8,["modelValue","placeholder","readonly","disabled","clearable"]),n(b,{"root-class":e.rootClass,"root-style":e.rootStyle,visible:F.value,"onUpdate:visible":G,title:e.title??e.placeholder,onConfirm:H,onVisibleHook:x},{visible:d((({already:l})=>[l?(i(),v(V,{key:0,"model-value":U.value,"onUpdate:modelValue":w,columns:e.columns,"option-keys":e.optionKeys,"immediate-change":e.immediateChange},null,8,["model-value","columns","option-keys","immediate-change"])):p("",!0)])),_:1},8,["root-class","root-style","visible","title"])],64))}});export{E as _};
