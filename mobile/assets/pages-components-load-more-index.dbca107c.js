import{_ as e}from"./index.70abdba0.js";import{d as t,T as a,p as l,q as o,s,o as r,f as n,w as i,x as u,i as d,t as m,u as p,e as c,v,h as g,y as f,l as _,g as x,c as y,b as h,F as T,r as j,a as S,H as b,M as k,V as w}from"./index-158834fb.js";import{a as C,_ as M}from"./index.be0dc1e1.js";import{b as R,_ as V}from"./index.a84991b2.js";import{_ as $,a as I}from"./radio-group.0af25655.js";import{_ as L,a as A}from"./list.28356688.js";import{_ as H}from"./pull-down-refresh.8c2a8cba.js";import"./common.26852cb0.js";import"./dom.607148e9.js";const q=V(t({options:{virtualHost:!0,styleIsolation:"shared"},__name:"load-more",props:{rootStyle:[String,Object,Array],rootClass:String,status:{type:String,default:"incomplete"},incompleteText:String,loadingText:String,completeText:String,errorText:String},emits:["load-more","reload"],setup(e,{emit:t}){const x=e,y=R("load-more"),{t:h}=a("loadMore"),T=()=>{"incomplete"===x.status?t("load-more"):"error"===x.status&&t("reload")},j=l((()=>o(y.b(),y.m(x.status),x.rootClass))),S=l((()=>s(x.rootStyle)));return(e,t)=>{const a=_;return r(),n(a,{class:g(p(j)),style:f(p(S)),onClick:T},{default:i((()=>["incomplete"===e.status?u(e.$slots,"incomplete",{key:0},(()=>[d(m(e.incompleteText||p(h)("incompleteText")),1)]),!0):"loading"===e.status?u(e.$slots,"loading",{key:1},(()=>[c(C,null,{default:i((()=>[d(m(e.loadingText||p(h)("loadingText")),1)])),_:1})]),!0):"complete"===e.status?u(e.$slots,"complete",{key:2},(()=>[d(m(e.completeText||p(h)("completeText")),1)]),!0):"error"===e.status?u(e.$slots,"error",{key:3},(()=>[d(m(e.errorText||p(h)("errorText")),1)]),!0):v("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-6676d586"]]),B=t({__name:"Basic",setup(e){const t=x("incomplete"),a=["incomplete","loading","complete","error"];return(e,l)=>{const o=j(S("sar-load-more"),q),s=j(S("sar-radio"),$),u=j(S("sar-list-item"),L),d=j(S("sar-list"),A),m=j(S("sar-radio-group"),I),v=_;return r(),n(v,null,{default:i((()=>[c(o,{status:t.value,onLoadMore:l[0]||(l[0]=e=>p(b)("加载更多")),onReload:l[1]||(l[1]=e=>p(b)("重新加载"))},null,8,["status"]),c(m,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=e=>t.value=e),"root-style":"margin-top: 40rpx"},{custom:i((({toggle:e})=>[c(d,{card:""},{default:i((()=>[(r(),y(T,null,h(a,((t,a)=>c(u,{key:a,title:t,hover:"",onClick:a=>e(t)},{icon:i((()=>[c(s,{readonly:"",value:t},null,8,["value"])])),_:2},1032,["title","onClick"]))),64))])),_:2},1024)])),_:1},8,["modelValue"])])),_:1})}}}),D=t({__name:"WithRefresh",setup(e){const t=x(1),a=x([]),l=e=>new Promise(((t,a)=>{setTimeout((()=>{Math.random()<.55?t({page:e,total:3,list:e>3?[]:Array(4).fill(0).map(((t,a)=>a+1+4*(e-1)))}):a()}),1e3)})),o=x(!1),s=x(),u=e=>{var t;null==(t=s.value)||t.setScrollTop(e.detail.scrollTop)},p=()=>{o.value=!0,l(1).then((e=>{t.value=1,a.value=e.list,v.value=e.page<e.total?"incomplete":"complete",b("刷新成功")})).catch((()=>{b("刷新失败")})).finally((()=>{o.value=!1}))},v=x("incomplete"),g=e=>{v.value="loading",l(e).then((e=>{a.value=[...a.value,...e.list],v.value=e.page<e.total?"incomplete":"complete"})).catch((()=>{v.value="error"}))},f=()=>{o.value||g(++t.value)},C=()=>{o.value||g(t.value)},M=()=>{o.value||"incomplete"!==v.value||g(++t.value)};return k((()=>{g(t.value)})),(e,t)=>{const l=_,g=j(S("sar-load-more"),q),x=j(S("sar-pull-down-refresh"),H),b=w;return r(),n(l,null,{default:i((()=>[c(b,{"scroll-y":"",style:{height:"300px",margin:"20rpx 0",border:"1px solid var(--sar-border-color)"},onScroll:u,onScrolltolower:M},{default:i((()=>[c(x,{loading:o.value,ref_key:"pullDownRefresh",ref:s,onRefresh:p,disabled:"loading"===v.value},{default:i((()=>[(r(!0),y(T,null,h(a.value,(e=>(r(),n(l,{key:e,style:{display:"flex","justify-content":"center","align-items":"center",margin:"10rpx 32rpx",height:"40px",border:"1px solid var(--sar-border-color)"}},{default:i((()=>[d(m(e),1)])),_:2},1024)))),128)),c(g,{status:v.value,onLoadMore:f,onReload:C},null,8,["status"])])),_:1},8,["loading","disabled"])])),_:1})])),_:1})}}}),F=V(t({__name:"index",setup:t=>(t,a)=>{const l=j(S("doc-demo"),e),o=j(S("doc-page"),M);return r(),n(o,null,{default:i((()=>[c(l,{title:"基础使用"},{default:i((()=>[c(B)])),_:1}),c(l,{title:"配合下拉刷新一起使用"},{default:i((()=>[c(D)])),_:1})])),_:1})}}),[["__scopeId","data-v-96b875d4"]]);export{F as default};
