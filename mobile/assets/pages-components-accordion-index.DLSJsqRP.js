import{_ as e}from"./index.BI3vtXtd.js";import{d as a,m as l,p as t,o as s,f as o,w as u,e as d,h as i,u as n,q as r,i as c,t as m,s as _,v as p,x as f,y as v,z as y,l as b,g as V,A as x,B as j,C as g,D as h,r as C,a as I}from"./index-DFwJ2Oj-.js";import{_ as k}from"./index.NOUmFN7R.js";import{a as A,b as S,_ as w}from"./index.BDMDFAO9.js";import{_ as B}from"./collapse.Ik04VnTr.js";import"./dom.LPfVLj9J.js";const U=Symbol("accoridon-context"),D=w(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"accordion-item",props:{rootStyle:{},rootClass:{},title:{},value:{},name:{},disabled:{type:Boolean}},emits:["click"],setup(e,{emit:a}){const V=e,x=a,j=S("accordion-item"),g=l(U);if(!g)throw new Error("AccordionItem must be included in Accordion.");const h=e=>{V.disabled||v(V.name)||g.toggle(V.name),x("click",e)},C=t((()=>g.multiple?(g.value||[]).includes(V.name):g.value===V.name)),I=t((()=>C.value?"up":"down")),k=t((()=>r(j.b(),V.rootClass))),w=t((()=>y(V.rootStyle)));return(e,a)=>{const l=b;return s(),o(l,{class:i(k.value),style:f(w.value)},{default:u((()=>[d(l,{class:i(n(r)(n(j).e("header"),n(j).em("header","disabled",e.disabled))),onClick:h},{default:u((()=>[d(l,{class:i(n(j).e("title"))},{default:u((()=>[c(m(e.title),1)])),_:1},8,["class"]),e.value?(s(),o(l,{key:0,class:i(n(j).e("value"))},{default:u((()=>[c(m(e.value),1)])),_:1},8,["class"])):_("",!0),d(l,{class:i(n(j).e("icon"))},{default:u((()=>[d(A,{name:I.value},null,8,["name"])])),_:1},8,["class"])])),_:1},8,["class"]),d(B,{visible:C.value},{default:u((()=>[d(l,{class:i(n(j).e("body"))},{default:u((()=>[p(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])])),_:3},8,["visible"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-02a1ad13"]]),H=w(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"accordion",props:{rootStyle:{},rootClass:{},modelValue:{},multiple:{type:Boolean}},emits:["update:model-value"],setup(e,{emit:a}){const l=e,d=a,n=S("accordion"),c=V(l.modelValue);x((()=>l.modelValue),(()=>{c.value=l.modelValue||[]}));j(U,g({value:c,multiple:h(l,"multiple"),toggle:e=>{let a;l.multiple?(a=Array.isArray(c.value)?c.value:[],a=a.includes(e)?a.filter((a=>a!==e)):a.concat(e)):a=c.value===e?void 0:e,c.value=a,d("update:model-value",a)}}));const m=t((()=>r(n.b(),l.rootClass))),_=t((()=>y(l.rootStyle)));return(e,a)=>{const l=b;return s(),o(l,{class:i(m.value),style:f(_.value)},{default:u((()=>[p(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-115103b8"]]),$=a({__name:"Basic",setup(e){const a=V("1");return(e,l)=>{const t=C(I("sar-accordion-item"),D),i=C(I("sar-accordion"),H);return s(),o(i,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e)},{default:u((()=>[d(t,{title:"标题1",name:"1"},{default:u((()=>[c("内容1")])),_:1}),d(t,{title:"标题2",name:"2"},{default:u((()=>[c("内容2")])),_:1}),d(t,{title:"标题3",name:"3"},{default:u((()=>[c("内容3")])),_:1})])),_:1},8,["modelValue"])}}}),q=a({__name:"Multiple",setup(e){const a=V(["1"]);return(e,l)=>{const t=C(I("sar-accordion-item"),D),i=C(I("sar-accordion"),H);return s(),o(i,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),multiple:""},{default:u((()=>[d(t,{title:"标题1",name:"1"},{default:u((()=>[c("内容1")])),_:1}),d(t,{title:"标题2",name:"2"},{default:u((()=>[c("内容2")])),_:1}),d(t,{title:"标题3",name:"3"},{default:u((()=>[c("内容3")])),_:1})])),_:1},8,["modelValue"])}}}),z=a({__name:"Disabled",setup(e){const a=V("1");return(e,l)=>{const t=C(I("sar-accordion-item"),D),i=C(I("sar-accordion"),H);return s(),o(i,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e)},{default:u((()=>[d(t,{title:"标题1",name:"1"},{default:u((()=>[c("内容1")])),_:1}),d(t,{title:"标题2",name:"2",disabled:""},{default:u((()=>[c(" 内容2 ")])),_:1}),d(t,{title:"标题3",name:"3"},{default:u((()=>[c("内容3")])),_:1})])),_:1},8,["modelValue"])}}}),E=w(a({__name:"index",setup:a=>(a,l)=>{const t=C(I("doc-demo"),e),i=C(I("doc-page"),k);return s(),o(i,null,{default:u((()=>[d(t,{title:"基础使用",full:""},{default:u((()=>[d($)])),_:1}),d(t,{title:"展开多个",full:""},{default:u((()=>[d(q)])),_:1}),d(t,{title:"禁用",full:""},{default:u((()=>[d(z)])),_:1})])),_:1})}}),[["__scopeId","data-v-4a1ea74b"]]);export{E as default};