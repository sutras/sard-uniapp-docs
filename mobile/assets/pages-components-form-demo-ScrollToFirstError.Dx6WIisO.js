import{d as e,g as a,N as l,a1 as t,r as o,a as r,o as s,f as u,w as n,e as i,c as d,b as m,F as f,i as p,I as c,T as _,M as v,l as g}from"./index-DFwJ2Oj-.js";import{S as x}from"./input.2uLEz9Cx.js";import{_ as b,a as j}from"./form.D0wWYwqT.js";import{_ as h}from"./button.6NBmS2yV.js";import{_ as y,a as V}from"./row.CPzfUvAj.js";import{_ as k,a as w}from"./radio-group.H3c3BP4a.js";import{_ as I}from"./index.NOUmFN7R.js";import{_ as S}from"./index.BDMDFAO9.js";import"./common.BM3Qp-Uy.js";import"./dom.LPfVLj9J.js";const C=S(e({__name:"ScrollToFirstError",setup(e){const S=a(Array(10).fill(0).map(((e,a)=>({label:"Item"+a,name:"item"+a,value:"",key:a})))),C=a(),F=()=>{var e;null==(e=C.value)||e.validate().then((()=>{c("success"),console.log("formState: ",_(S))})).catch((e=>{console.log("Validate Failed:",e)}))},R=()=>{var e;null==(e=C.value)||e.reset()},U=a("nearest"),T=a(0),q=v();return l((()=>{t().in(q).select(".footer").boundingClientRect((e=>{T.value=e.height})).exec()})),(e,a)=>{const l=o(r("sar-input"),x),t=o(r("sar-form-item"),b),c=o(r("sar-form"),j),_=g,v=o(r("sar-button"),h),q=o(r("sar-col"),y),z=o(r("sar-row"),V),A=o(r("sar-radio"),k),E=o(r("sar-radio-group"),w),L=o(r("doc-page"),I);return s(),u(L,null,{default:n((()=>[i(c,{model:S.value,ref_key:"formRef",ref:C,"scroll-to-first-error":"","scroll-into-view-options":{endOffset:T.value,position:U.value}},{default:n((()=>[(s(!0),d(f,null,m(S.value,((e,a)=>(s(),u(t,{key:e.key,name:[a,"value"],label:e.label,required:""},{default:n((()=>[i(l,{type:"textarea","min-height":"300rpx",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["name","label"])))),128))])),_:1},8,["model","scroll-into-view-options"]),i(_,{style:{height:"160rpx"}}),i(_,{class:"footer"},{default:n((()=>[i(z,{gap:"20rpx"},{default:n((()=>[i(q,null,{default:n((()=>[i(v,{onClick:F},{default:n((()=>[p("Submit")])),_:1})])),_:1}),i(q,null,{default:n((()=>[i(v,{type:"outline",onClick:R},{default:n((()=>[p("reset")])),_:1})])),_:1})])),_:1}),i(_,{style:{padding:"20rpx 0"}},{default:n((()=>[i(E,{modelValue:U.value,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value=e),direction:"horizontal"},{default:n((()=>[i(A,{value:"start"},{default:n((()=>[p("start")])),_:1}),i(A,{value:"center"},{default:n((()=>[p("center")])),_:1}),i(A,{value:"end"},{default:n((()=>[p("end")])),_:1}),i(A,{value:"nearest"},{default:n((()=>[p("nearest")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-027660b4"]]);export{C as default};