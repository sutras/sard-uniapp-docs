import{d as e,g as l,o as r,f as a,w as o,e as s,i as t,c as n,b as i,F as u,H as d,r as c,a as f,l as p,V as m,t as h,aD as _}from"./index-aa8abc65.js";import{_ as v}from"./index.3d69d03d.js";import{_ as x}from"./pull-down-refresh.a3f369ee.js";import{a as g,_ as y}from"./index.5a4c2473.js";import{_ as w}from"./button.21fa86db.js";import{a as b}from"./index.776be883.js";import"./dom.06da4e90.js";import"./common.c6a791ea.js";const j=e({__name:"ScrollView",setup(e){const _=l(!1),v=l(),g=e=>{var l;null==(l=v.value)||l.enableToRefresh(0===e.detail.scrollTop)},y=()=>{var e;null==(e=v.value)||e.enableToRefresh(!0)},b=()=>{_.value=!0,new Promise((e=>{setTimeout((()=>{e()}),1e3)})).then((()=>{d("刷新成功")})).catch((()=>{d("刷新失败")})).finally((()=>{_.value=!1}))};return(e,l)=>{const d=c(f("sar-button"),w),j=p,T=c(f("sar-pull-down-refresh"),x),k=m;return r(),a(j,null,{default:o((()=>[s(d,{onClick:l[0]||(l[0]=e=>_.value=!_.value)},{default:o((()=>[t("toggle loading")])),_:1}),s(k,{"scroll-y":"",style:{height:"300px",margin:"20rpx 0",border:"1px solid var(--sar-border-color)"},throttle:!1,onScroll:g,onScrolltoupper:y},{default:o((()=>[s(T,{loading:_.value,ref_key:"pullDownRefresh",ref:v,onRefresh:b},{default:o((()=>[(r(),n(u,null,i(10,(e=>s(j,{key:e,style:{display:"flex","justify-content":"center","align-items":"center",margin:"10rpx 32rpx",height:"40px",border:"1px solid var(--sar-border-color)"}},{default:o((()=>[t(h(e),1)])),_:2},1024))),64))])),_:1},8,["loading"])])),_:1})])),_:1})}}}),T=e({__name:"Slot",setup(e){const d=l(!1),_=l(),v=e=>{var l;null==(l=_.value)||l.enableToRefresh(0===e.detail.scrollTop)},y=()=>{var e;null==(e=_.value)||e.enableToRefresh(!0)},w=l(""),j=()=>{d.value=!0,new Promise((e=>{setTimeout((()=>{e()}),1e3)})).then((()=>{w.value="刷新成功"})).catch((()=>{w.value="刷新失败"})).finally((()=>{d.value=!1}))};return(e,l)=>{const T=c(f("sar-icon"),b),k=c(f("sar-loading"),g),R=p,S=c(f("sar-pull-down-refresh"),x),D=m;return r(),a(R,null,{default:o((()=>[s(D,{"scroll-y":"",style:{height:"300px",margin:"20rpx 0",border:"1px solid var(--sar-border-color)"},throttle:!1,onScroll:v,onScrolltoupper:y},{default:o((()=>[s(S,{loading:d.value,ref_key:"pullDownRefresh",ref:_,"done-duration":500,onRefresh:j},{unready:o((({progress:e})=>[s(k,{size:"48rpx",animated:!1,progress:e},{circular:o((()=>[s(T,{family:"demo-icons",name:"arrow-clockwise"})])),default:o((()=>[t(" 下拉刷新 ")])),_:2},1032,["progress"])])),ready:o((()=>[s(k,{size:"48rpx",animated:!1},{circular:o((()=>[s(T,{family:"demo-icons",name:"arrow-clockwise"})])),default:o((()=>[t(" 释放刷新 ")])),_:1})])),loading:o((()=>[s(k,{size:"48rpx"},{circular:o((()=>[s(T,{family:"demo-icons",name:"arrow-clockwise"})])),default:o((()=>[t(" 加载中... ")])),_:1})])),done:o((()=>[t(h(w.value),1)])),default:o((()=>[(r(),n(u,null,i(10,(e=>s(R,{key:e,style:{display:"flex","justify-content":"center","align-items":"center",margin:"10rpx 32rpx",height:"40px",border:"1px solid var(--sar-border-color)"}},{default:o((()=>[t(h(e),1)])),_:2},1024))),64))])),_:1},8,["loading"])])),_:1})])),_:1})}}}),k=e({__name:"index",setup(e){const m=l(!1),g=l();_((({scrollTop:e})=>{var l;null==(l=g.value)||l.enableToRefresh(0===e)}));const w=()=>{m.value=!0,new Promise((e=>{setTimeout((()=>{e()}),1e3)})).then((()=>{d("刷新成功")})).catch((()=>{d("刷新失败")})).finally((()=>{m.value=!1}))};return(e,l)=>{const d=p,_=c(f("doc-demo"),v),b=c(f("sar-pull-down-refresh"),x),k=c(f("doc-page"),y);return r(),a(k,{emphasis:""},{default:o((()=>[s(_,{title:"基于页面的刷新",full:""},{default:o((()=>[s(b,{loading:m.value,ref_key:"pullDownRefresh",ref:g,onRefresh:w},{default:o((()=>[(r(),n(u,null,i(5,(e=>s(d,{key:e,style:{display:"flex","justify-content":"center","align-items":"center",margin:"0 32rpx 10rpx",height:"40px",border:"1px solid var(--sar-border-color)"}},{default:o((()=>[t(h(e),1)])),_:2},1024))),64)),s(_,{title:"基于 scroll-view 的刷新"},{default:o((()=>[s(j)])),_:1}),s(_,{title:"自定义插槽"},{default:o((()=>[s(T)])),_:1})])),_:1},8,["loading"])])),_:1})])),_:1})}}});export{k as default};
