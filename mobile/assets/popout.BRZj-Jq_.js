import{E as e,d as o,G as a,V as l,g as s,A as t,p as i,o as n,f as c,w as r,e as u,h as d,x as f,T as p,u as m,q as v,v as y,i as b,t as h,s as _,z as C,l as k,k as x,H as w}from"./index-cDBoG4Q4.js";import{a as g,b as B,_ as T}from"./index.DPvFFOke.js";import{b as $,S as j}from"./index.BXD0v1E4.js";import{_ as D}from"./button.D0jjfd-b.js";const F=e.popout,H=T(o({options:{virtualHost:!0,styleIsolation:"shared"},__name:"popout",props:a({rootStyle:{},rootClass:{},visible:{type:Boolean},duration:{},title:{},type:{},showCancel:{type:Boolean},cancelText:{},showConfirm:{type:Boolean},confirmText:{},confirmDisabled:{type:Boolean},showClose:{type:Boolean},showFooter:{type:Boolean},overlayClosable:{type:Boolean},beforeClose:{type:Function}},F),emits:["update:visible","close","cancel","confirm","visible-hook"],setup(e,{emit:o}){const a=e,T=o,F=B("popout"),{t:H}=l("popout"),S=s(a.visible);t((()=>a.visible),(()=>{S.value=a.visible}));const z=s(a.visible);t(S,(()=>{!z.value&&S.value&&(z.value=!0)}));const A=s(a.visible),E=()=>{A.value=!0},I=()=>{A.value=!1},V=$(),q=e=>{T("visible-hook",e),V(e)},G=s({cancel:!1,confirm:!1,close:!1}),L=e=>{if(T(e),"function"==typeof a.beforeClose){const o=a.beforeClose(e);if(o instanceof Promise)return G.value[e]=!0,o.then((()=>{S.value=!1,T("update:visible",!1)})).catch(w).finally((()=>{G.value[e]=!1}));if(!1===o)return}S.value=!1,T("update:visible",!1)},O=()=>{a.overlayClosable&&L("close")},P=()=>{L("close")},J=()=>{L("confirm")},K=()=>{L("cancel")},M=i((()=>v(F.b(),a.rootClass))),N=i((()=>C(a.rootStyle)));return(e,o)=>{const l=k,s=x;return n(),c(j,{effect:"slide-bottom",visible:e.visible,duration:e.duration,onOverlayClick:O,onBeforeEnter:E,onAfterLeave:I,onVisibleHook:q},{default:r((()=>[u(l,{class:d(M.value),style:f(N.value),onTransitionend:o[0]||(o[0]=p((()=>{}),["stop"]))},{default:r((()=>[u(l,{class:d(m(v)(m(F).e("header"),m(F).em("header",a.type)))},{default:r((()=>["compact"===e.type?(n(),c(l,{key:0,class:d(m(F).e("button-wrap"))},{default:r((()=>[u(D,{type:"pale-text",theme:"neutral","root-class":m(v)(m(F).e("header-cancel")),loading:G.value.cancel,onClick:K},{default:r((()=>[y(e.$slots,"cancel",{},(()=>[b(h(e.cancelText||m(H)("cancel")),1)]),!0)])),_:3},8,["root-class","loading"])])),_:3},8,["class"])):_("",!0),u(l,{class:d(m(F).e("title"))},{default:r((()=>[y(e.$slots,"title",{},(()=>[u(s,{class:d(m(F).e("title-text"))},{default:r((()=>[b(h(e.title),1)])),_:1},8,["class"])]),!0)])),_:3},8,["class"]),"compact"===e.type?(n(),c(l,{key:1,class:d(m(F).e("button-wrap"))},{default:r((()=>[u(D,{type:"pale-text",theme:"primary","root-class":m(v)(m(F).e("header-confirm")),loading:G.value.confirm,disabled:e.confirmDisabled,onClick:J},{default:r((()=>[y(e.$slots,"confirm",{},(()=>[b(h(e.confirmText||m(H)("confirm")),1)]),!0)])),_:3},8,["root-class","loading","disabled"])])),_:3},8,["class"])):_("",!0),"loose"===e.type&&e.showClose?(n(),c(l,{key:2,class:d(m(F).e("close")),onClick:P},{default:r((()=>[u(D,{type:"pale-text",theme:"neutral",size:"large"},{default:r((()=>[u(g,{name:"close"})])),_:1})])),_:1},8,["class"])):_("",!0)])),_:3},8,["class"]),y(e.$slots,"default",{},void 0,!0),y(e.$slots,"visible",{whole:A.value,already:z.value},void 0,!0),e.showFooter&&"loose"===e.type?(n(),c(l,{key:0,class:d(m(F).e("footer"))},{default:r((()=>[e.showCancel?(n(),c(D,{key:0,type:"pale",theme:"primary",round:"",loading:G.value.cancel,onClick:K},{default:r((()=>[y(e.$slots,"cancel",{},(()=>[b(h(e.cancelText||m(H)("cancel")),1)]),!0)])),_:3},8,["loading"])):_("",!0),e.showConfirm?(n(),c(D,{key:1,type:"default",theme:"primary",round:"",loading:G.value.confirm,disabled:e.confirmDisabled,onClick:J},{default:r((()=>[y(e.$slots,"confirm",{},(()=>[b(h(e.confirmText||m(H)("confirm")),1)]),!0)])),_:3},8,["loading","disabled"])):_("",!0)])),_:3},8,["class"])):_("",!0)])),_:3},8,["class","style"])])),_:3},8,["visible","duration"])}}}),[["__scopeId","data-v-c1b51731"]]);export{H as _};