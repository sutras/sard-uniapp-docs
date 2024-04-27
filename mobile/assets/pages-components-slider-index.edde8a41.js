import{_ as e}from"./index.70abdba0.js";import{d as l,g as t,o as a,f as u,H as n,r as s,a as r,c as d,e as o,w as i,i as c,F as f,l as m,t as _}from"./index-158834fb.js";import{_ as v}from"./index.be0dc1e1.js";import{_ as p}from"./slider.b9a6de21.js";import{_ as h}from"./index.146b6f20.js";import{_ as g}from"./index.a84991b2.js";import"./dom.607148e9.js";import"./common.26852cb0.js";const x=l({__name:"Basic",setup(e){const l=t(50),d=e=>{n(e)};return(e,t)=>{const n=s(r("sar-slider"),p);return a(),u(n,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),onChange:d},null,8,["modelValue"])}}}),w=l({__name:"Range",setup(e){const l=t([20,80]);return(e,t)=>{const n=s(r("sar-slider"),p);return a(),u(n,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),range:""},null,8,["modelValue"])}}});const b=g({},[["render",function(e,l){const t=s(r("doc-title"),h),u=s(r("sar-slider"),p);return a(),d(f,null,[o(t,null,{default:i((()=>[c("单滑块")])),_:1}),o(u,{"model-value":50,"show-value":""}),o(t,null,{default:i((()=>[c("双滑块")])),_:1}),o(u,{"model-value":[20,80],range:"","show-value":""})],64)}]]);const j=g({},[["render",function(e,l){const t=s(r("doc-title"),h),u=s(r("sar-slider"),p);return a(),d(f,null,[o(t,null,{default:i((()=>[c("值的范围：[-50, 50]")])),_:1}),o(u,{"model-value":0,"show-value":"",min:-50,max:50}),o(t,null,{default:i((()=>[c("值的范围：[-50, 50]")])),_:1}),o(u,{"model-value":[0,20],"show-value":"",range:"",min:-50,max:50})],64)}]]);const y=g({},[["render",function(e,l){const t=s(r("doc-title"),h),n=s(r("sar-slider"),p),d=m;return a(),u(d,{style:{display:"flex","flex-direction":"row"}},{default:i((()=>[o(d,null,{default:i((()=>[o(t,null,{default:i((()=>[c("单值选择")])),_:1}),o(n,{"model-value":50,vertical:"","show-value":""})])),_:1}),o(d,{style:{"margin-left":"100rpx"}},{default:i((()=>[o(t,null,{default:i((()=>[c("范围选择")])),_:1}),o(n,{range:"","model-value":[20,80],vertical:"","show-value":""})])),_:1})])),_:1})}]]);const V=g({},[["render",function(e,l){const t=s(r("doc-title"),h),u=s(r("sar-slider"),p);return a(),d(f,null,[o(t,null,{default:i((()=>[c("步长：10")])),_:1}),o(u,{"model-value":50,"show-value":"",step:10}),o(t,null,{default:i((()=>[c("步长：12.3")])),_:1}),o(u,{range:"","model-value":[50,80],"show-value":"",step:12.3},null,8,["step"])],64)}]]);const z=g({},[["render",function(e,l){const t=s(r("doc-title"),h),u=s(r("sar-slider"),p),n=m;return a(),d(f,null,[o(t,null,{default:i((()=>[c("单滑块")])),_:1}),o(u,{"model-value":40,"show-scale":"",step:20}),o(t,null,{default:i((()=>[c("双滑块")])),_:1}),o(u,{range:"","model-value":[20,80],"show-scale":"",step:20}),o(t,null,{default:i((()=>[c("刻度显示在上面")])),_:1}),o(u,{"model-value":40,"show-scale":"","scale-position":"top",step:20}),o(t,null,{default:i((()=>[c("垂直刻度")])),_:1}),o(n,{style:{display:"flex","flex-direction":"row"}},{default:i((()=>[o(n,null,{default:i((()=>[o(t,null,{default:i((()=>[c("单滑块")])),_:1}),o(u,{"model-value":25,vertical:"","show-scale":"",step:25})])),_:1}),o(n,{style:{"margin-left":"100rpx"}},{default:i((()=>[o(t,null,{default:i((()=>[c("双滑块")])),_:1}),o(u,{range:"","model-value":[25,75],vertical:"","show-scale":"",step:25})])),_:1}),o(n,{style:{"margin-left":"100rpx"}},{default:i((()=>[o(t,null,{default:i((()=>[c("刻度显示在右边")])),_:1}),o(u,{"model-value":25,vertical:"","show-scale":"","scale-position":"right",step:25})])),_:1})])),_:1})],64)}]]);const k=g({},[["render",function(e,l){const t=s(r("doc-title"),h),u=s(r("sar-slider"),p);return a(),d(f,null,[o(t,null,{default:i((()=>[c("单值选择")])),_:1}),o(u,{"model-value":50,"piece-color":"var(--sar-orange)","thumb-color":"var(--sar-orange)"}),o(t,null,{default:i((()=>[c("范围选择")])),_:1}),o(u,{range:"","model-value":[20,80],"piece-color":"var(--sar-orange)","thumb-color":"var(--sar-orange)"})],64)}]]);const I=g({},[["render",function(e,l){const t=s(r("doc-title"),h),u=s(r("sar-slider"),p);return a(),d(f,null,[o(t,null,{default:i((()=>[c("单值选择")])),_:1}),o(u,{"model-value":50,"thumb-size":"48rpx","track-size":"20rpx"}),o(t,null,{default:i((()=>[c("范围选择")])),_:1}),o(u,{range:"","model-value":[20,80],"thumb-size":"48rpx","track-size":"20rpx"})],64)}]]);const U=g({},[["render",function(e,l){const t=s(r("doc-title"),h),u=s(r("sar-slider"),p);return a(),d(f,null,[o(t,null,{default:i((()=>[c("只读")])),_:1}),o(u,{"model-value":50,readonly:""}),o(t,null,{default:i((()=>[c("禁用")])),_:1}),o(u,{"model-value":50,disabled:""})],64)}]]);const B=g({},[["render",function(e,l){const t=s(r("doc-title"),h),u=m,n=s(r("sar-slider"),p);return a(),d(f,null,[o(t,null,{default:i((()=>[c("单值选择")])),_:1}),o(n,{"model-value":50},{"end-thumb":i((({value:e})=>[o(u,{class:"slider-thumb"},{default:i((()=>[c(_(e),1)])),_:2},1024)])),_:1}),o(t,null,{default:i((()=>[c("范围选择")])),_:1}),o(n,{range:"","model-value":[20,80]},{"start-thumb":i((({value:e})=>[o(u,{class:"slider-thumb"},{default:i((()=>[c(_(e),1)])),_:2},1024)])),"end-thumb":i((({value:e})=>[o(u,{class:"slider-thumb"},{default:i((()=>[c(_(e),1)])),_:2},1024)])),_:1})],64)}],["__scopeId","data-v-73b3f923"]]),C=g(l({__name:"index",setup:l=>(l,t)=>{const n=s(r("doc-demo"),e),d=s(r("doc-page"),v);return a(),u(d,{emphasis:""},{default:i((()=>[o(n,{title:"基础使用"},{default:i((()=>[o(x)])),_:1}),o(n,{title:"范围选择"},{default:i((()=>[o(w)])),_:1}),o(n,{title:"显示值"},{default:i((()=>[o(b)])),_:1}),o(n,{title:"最大最小值"},{default:i((()=>[o(j)])),_:1}),o(n,{title:"垂直"},{default:i((()=>[o(y)])),_:1}),o(n,{title:"步长"},{default:i((()=>[o(V)])),_:1}),o(n,{title:"显示刻度"},{default:i((()=>[o(z)])),_:1}),o(n,{title:"自定义颜色"},{default:i((()=>[o(k)])),_:1}),o(n,{title:"自定义尺寸"},{default:i((()=>[o(I)])),_:1}),o(n,{title:"只读和禁用"},{default:i((()=>[o(U)])),_:1}),o(n,{title:"自定义按钮插槽"},{default:i((()=>[o(B)])),_:1})])),_:1})}}),[["__scopeId","data-v-d318e32d"]]);export{C as default};
