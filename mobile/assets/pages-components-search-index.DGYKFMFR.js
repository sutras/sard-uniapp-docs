import{_ as e}from"./index.DbhGrFWx.js";import{E as a,d as t,G as l,g as s,A as r,p as o,o as n,f as d,w as c,h as p,u,v as i,s as m,e as h,i as f,t as _,x as y,q as x,z as g,l as v,r as b,a as k,I as C,c as z,F as j}from"./index-B7LoF5HM.js";import{_ as w}from"./index.XihPCky1.js";import{a as B,b as $,_ as S}from"./index.BtT18Zob.js";import{S as V}from"./input.DSa3VoZn.js";import{_ as I}from"./button.B4-Gq_Gx.js";import"./common.nGc6LDJR.js";const A=a.search,F=S(t({options:{virtualHost:!0,styleIsolation:"shared"},__name:"search",props:l({rootStyle:{},rootClass:{},modelValue:{},placeholder:{},shape:{},background:{},inputBackground:{},inputColor:{},readonly:{type:Boolean},disabled:{type:Boolean},align:{},cancel:{},search:{}},A),emits:["update:model-value","cancel","search"],setup(e,{emit:a}){const t=e,l=a,b=$("search"),k=s(t.modelValue??"");r((()=>t.modelValue),(()=>{k.value=t.modelValue??""}));const C=e=>{k.value=e,l("update:model-value",e)},z=()=>{l("search",k.value)},j=()=>{k.value="",l("cancel")},w=o((()=>x(b.b(),b.m("show-action",t.cancel||t.search),b.m("disabled",t.disabled),t.rootClass))),S=o((()=>g({backgroundColor:t.background},t.rootStyle))),A=o((()=>x(b.e("input"),b.em("input",t.shape)))),F=o((()=>g({textAlign:t.align,color:t.inputColor,backgroundColor:t.inputBackground})));return(e,a)=>{const t=v;return n(),d(t,{class:p(w.value),style:y(S.value)},{default:c((()=>[e.$slots.prepend?(n(),d(t,{key:0,class:p(u(b).e("prepend"))},{default:c((()=>[i(e.$slots,"prepend",{},void 0,!0)])),_:3},8,["class"])):m("",!0),h(t,{class:p(u(b).e("input-wrapper"))},{default:c((()=>[h(V,{"model-value":k.value,"onUpdate:modelValue":C,clearable:"","confirm-type":"search",showClearOnlyFocus:"",readonly:e.readonly,disabled:e.disabled,placeholder:e.placeholder,borderless:"","root-class":A.value,"root-style":F.value,onConfirm:z},{prepend:c((()=>[i(e.$slots,"input-prepend",{},(()=>[h(B,{name:"search","root-class":u(b).e("icon")},null,8,["root-class"])]),!0)])),append:c((()=>[i(e.$slots,"input-append",{},void 0,!0)])),_:3},8,["model-value","readonly","disabled","placeholder","root-class","root-style"])])),_:3},8,["class"]),e.cancel||e.search||e.$slots.append?(n(),d(t,{key:1,class:p(u(b).e("append"))},{default:c((()=>[e.cancel?(n(),d(I,{key:0,type:"pale-text","root-style":"height: auto",onClick:j},{default:c((()=>[f(_(e.cancel),1)])),_:1})):m("",!0),e.search?(n(),d(I,{key:1,type:"pale-text","root-style":"height: auto",onClick:z},{default:c((()=>[f(_(e.search),1)])),_:1})):m("",!0),i(e.$slots,"append",{},void 0,!0)])),_:3},8,["class"])):m("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-5c6440fa"]]);const q=S({},[["render",function(e,a){const t=b(k("sar-search"),F);return n(),d(t,{placeholder:"请输入关键词"})}]]),E=t({__name:"SearchButton",setup:e=>(e,a)=>{const t=b(k("sar-search"),F);return n(),d(t,{placeholder:"请输入关键词",search:"搜索",onSearch:a[0]||(a[0]=e=>u(C)(e))})}}),G=t({__name:"CancelButton",setup:e=>(e,a)=>{const t=b(k("sar-search"),F);return n(),d(t,{placeholder:"请输入关键词",cancel:"取消",onCancel:a[0]||(a[0]=e=>u(C)("取消"))})}});const H=S({},[["render",function(e,a){const t=b(k("sar-search"),F);return n(),d(t,{placeholder:"请输入关键词",shape:"round"})}]]);const O=S({},[["render",function(e,a){const t=b(k("sar-search"),F);return n(),d(t,{placeholder:"请输入关键词",align:"center"})}]]);const U=S({},[["render",function(e,a){const t=b(k("sar-search"),F);return n(),d(t,{placeholder:"请输入关键词",background:"var(--sar-red)","input-background":"var(--sar-white)","input-color":"var(--sar-black)",shape:"round"})}]]);const D=S({},[["render",function(e,a){const t=b(k("sar-search"),F);return n(),z(j,null,[h(t,{placeholder:"只读",readonly:""}),h(t,{placeholder:"禁用",disabled:"","root-style":"margin-top: 40rpx"})],64)}]]);const J=S({},[["render",function(e,a){const t=b(k("sar-icon"),B),l=b(k("sar-button"),I),s=b(k("sar-search"),F);return n(),z(j,null,[h(s,{placeholder:"请输入关键词",shape:"round","root-style":"padding-left: 8rpx"},{prepend:c((()=>[h(l,{type:"pale-text",size:"small",theme:"neutral","root-style":"margin-right: 8rpx"},{default:c((()=>[h(t,{name:"upc-scan",family:"demo-icons",size:"32rpx"})])),_:1})])),"input-prepend":c((()=>[h(l,{type:"pale-text",size:"mini",theme:"neutral"},{default:c((()=>[h(t,{name:"caret-down",size:"28rpx"})])),_:1})])),"input-append":c((()=>[h(l,{type:"pale-text",size:"mini",theme:"neutral"},{default:c((()=>[h(t,{name:"camera",family:"demo-icons",size:"36rpx"})])),_:1})])),_:1}),h(s,{placeholder:"请输入关键词",shape:"round","root-style":"margin-top: 40rpx; padding-left: 12rpx; padding-right: 8rpx"},{prepend:c((()=>[h(l,{type:"pale-text",size:"mini",theme:"neutral","root-style":"margin-right: 12rpx"},{default:c((()=>[h(t,{name:"left",size:"32rpx"})])),_:1})])),append:c((()=>[h(l,{type:"pale-text",size:"mini",theme:"neutral","root-style":"margin-left: 12rpx"},{default:c((()=>[h(t,{name:"list-task",family:"demo-icons",size:"40rpx"})])),_:1})])),_:1})],64)}]]),K=S(t({__name:"index",setup:a=>(a,t)=>{const l=b(k("doc-demo"),e),s=b(k("doc-page"),w);return n(),d(s,null,{default:c((()=>[h(l,{title:"基础使用",full:""},{default:c((()=>[h(q)])),_:1}),h(l,{title:"搜索按钮",full:""},{default:c((()=>[h(E)])),_:1}),h(l,{title:"取消按钮",full:""},{default:c((()=>[h(G)])),_:1}),h(l,{title:"形状",full:""},{default:c((()=>[h(H)])),_:1}),h(l,{title:"对齐",full:""},{default:c((()=>[h(O)])),_:1}),h(l,{title:"背景色",full:""},{default:c((()=>[h(U)])),_:1}),h(l,{title:"只读和禁用",full:""},{default:c((()=>[h(D)])),_:1}),h(l,{title:"插槽",full:""},{default:c((()=>[h(J)])),_:1})])),_:1})}}),[["__scopeId","data-v-f8ed96a8"]]);export{K as default};