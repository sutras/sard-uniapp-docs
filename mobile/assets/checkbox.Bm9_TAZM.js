import{E as e,d as l,G as a,m as s,p as o,g as c,A as u,B as t,o as d,f as n,w as i,e as v,h as r,x as k,v as y,s as h,i as p,t as m,q as b,z as f,l as x}from"./index-DFwJ2Oj-.js";import{a as _,b as C,_ as q}from"./index.BDMDFAO9.js";import{a as z,u as B}from"./common.BM3Qp-Uy.js";const g={...e.checkbox,disabled:void 0,readonly:void 0},S=e.checkboxGroup,$=Symbol("checkbox-context"),j={square:["square","check-square-fill"],circle:["circle","check-circle-fill"]},E=q(l({options:{virtualHost:!0,styleIsolation:"shared"},__name:"checkbox",props:a({rootStyle:{},rootClass:{},checked:{type:Boolean},value:{},label:{},disabled:{type:Boolean},readonly:{type:Boolean},size:{},type:{},checkedColor:{},validateEvent:{type:Boolean}},g),emits:["click","update:checked"],setup(e,{emit:l}){const a=e,q=l,g=C("checkbox"),S=s($,null),E=z(),G=B(),I=o((()=>(null==E?void 0:E.disabled)??a.disabled??(null==S?void 0:S.disabled))),w=o((()=>(null==E?void 0:E.readonly)??a.readonly??(null==S?void 0:S.readonly))),A=c(S?S.value.includes(a.value):a.checked);S?u((()=>S.value),(()=>{A.value=S.value.includes(a.value)})):(u((()=>a.checked),(()=>{A.value=a.checked})),u(A,(()=>{a.validateEvent&&(null==G||G.onChange())})));const H=e=>{I.value||w.value||(S?S.toggle(a.value):(A.value=!A.value,q("update:checked",A.value))),q("click",e)};t($,null);const D=o((()=>b(g.b(),g.m("checked",A.value),g.m("disabled",I.value),g.m("readonly",w.value),a.rootClass))),F=o((()=>f(a.rootStyle))),J=o((()=>{const e=a.type??(null==S?void 0:S.type)??"square";return j[e][A.value?1:0]})),K=o((()=>A.value&&!I.value?a.checkedColor??(null==S?void 0:S.checkedColor):void 0)),L=o((()=>b(g.e("icon"),g.em("icon","checked",A.value)))),M=o((()=>f({fontSize:a.size??(null==S?void 0:S.size),color:K.value}))),N=o((()=>b(g.e("label"))));return(e,l)=>{const a=x;return d(),n(a,{class:r(D.value),style:k(F.value),onClick:H},{default:i((()=>[v(a,{class:r(L.value),style:k(M.value)},{default:i((()=>[y(e.$slots,"icon",{checked:A.value},(()=>[e.$slots.icon?h("",!0):(d(),n(_,{key:0,name:J.value},null,8,["name"]))]),!0)])),_:3},8,["class","style"]),e.$slots.default||e.label?(d(),n(a,{key:0,class:r(N.value)},{default:i((()=>[y(e.$slots,"default",{},(()=>[p(m(e.label),1)]),!0)])),_:3},8,["class"])):h("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-6f3c5df3"]]);export{E as _,S as a,$ as c};
