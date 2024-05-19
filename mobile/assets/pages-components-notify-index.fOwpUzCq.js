import{d as e,G as t,p as o,g as a,A as s,o as i,f as r,w as l,e as n,h as u,x as c,i as d,t as v,aB as p,$ as m,q as _,z as b,l as f,O as y,aC as k,aD as h,r as g,a as C,aE as w}from"./index-cDBoG4Q4.js";import{b as x,_ as j}from"./index.DPvFFOke.js";import{e as H,S,_ as B}from"./index.BXD0v1E4.js";import{_ as I}from"./index.CA5jYfGe.js";import{_ as D,a as L}from"./list._aZjdIGr.js";const q=j(e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"notify",props:t({rootStyle:{},rootClass:{},type:{},message:{},color:{},background:{},visible:{type:Boolean},position:{},timeout:{},duration:{}},p),emits:["click","update:visible"],setup(e,{expose:t,emit:p}){const y=e,k=p,h=x("notify"),g=o((()=>({top:"slide-top",bottom:"slide-bottom"}[y.position]))),C=a(y.visible),[w,j]=H((()=>{C.value=!1,k("update:visible",!1)}));s((()=>y.visible),(()=>{C.value=y.visible,y.visible&&y.timeout>0&&w(y.timeout)})),t({reHideLater:()=>{j(),m((()=>{y.timeout>0&&w(y.timeout)}))},cancelHide:j});const B=o((()=>_(h.b(),h.m(y.type),h.m(y.position),y.rootClass))),I=o((()=>b({backgroundColor:y.background,color:y.color},y.rootStyle)));return(e,t)=>{const o=f;return i(),r(S,{visible:C.value,overlay:!1,effect:g.value,duration:e.duration},{default:l((()=>[n(o,{class:u(B.value),style:c(I.value)},{default:l((()=>[d(v(e.message),1)])),_:1},8,["class","style"])])),_:1},8,["visible","effect","duration"])}}}),[["__scopeId","data-v-10d31282"]]),z=e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"notify-agent",props:t({id:{},rootStyle:{},rootClass:{},type:{},message:{},color:{},background:{},visible:{type:Boolean},position:{},timeout:{},duration:{}},h),setup(e){const t=e,s=a({...t}),l=a();return y(k,{show(e){var o;s.value={...t,...e,visible:!0},null==(o=l.value)||o.reHideLater()},hide(){var e;s.value={...s.value,visible:!1},null==(e=l.value)||e.cancelHide()}},o((()=>s.value.id))),(e,t)=>(i(),r(q,{"root-style":s.value.rootStyle,"root-class":s.value.rootClass,visible:s.value.visible,"onUpdate:visible":t[0]||(t[0]=e=>s.value.visible=e),type:s.value.type,message:s.value.message,color:s.value.color,background:s.value.background,position:s.value.position,duration:s.value.duration,ref_key:"elRef",ref:l},null,8,["root-style","root-class","visible","type","message","color","background","position","duration"]))}}),A=e({__name:"Basic",setup(e){const t=()=>{w("这是一条通知")},o=()=>{w.hide()};return(e,a)=>{const s=g(C("sar-list-item"),D),u=g(C("sar-list"),L);return i(),r(u,{card:""},{default:l((()=>[n(s,{arrow:"",hover:"",title:"显示通知",onClick:t}),n(s,{arrow:"",hover:"",title:"隐藏通知",onClick:o})])),_:1})}}}),E=e({__name:"Type",setup(e){const t=()=>{w.success("这是一条通知")},o=()=>{w.warning("这是一条通知")},a=()=>{w.error("这是一条通知")},s=()=>w.hide();return(e,u)=>{const c=g(C("sar-list-item"),D),d=g(C("sar-list"),L);return i(),r(d,{card:""},{default:l((()=>[n(c,{arrow:"",hover:"",title:"成功通知",onClick:t}),n(c,{arrow:"",hover:"",title:"警告通知",onClick:o}),n(c,{arrow:"",hover:"",title:"错误通知",onClick:a}),n(c,{arrow:"",hover:"",title:"隐藏通知",onClick:s})])),_:1})}}}),G=e({__name:"Color",setup(e){const t=()=>{w("这是一条通知",{background:"var(--sar-orange)"})},o=()=>{w.hide()};return(e,a)=>{const s=g(C("sar-list-item"),D),u=g(C("sar-list"),L);return i(),r(u,{card:""},{default:l((()=>[n(s,{arrow:"",hover:"",title:"显示通知",onClick:t}),n(s,{arrow:"",hover:"",title:"隐藏通知",onClick:o})])),_:1})}}}),O=e({__name:"Duration",setup(e){const t=()=>{w("这是一条通知",{timeout:0})},o=()=>{w.hide()};return(e,a)=>{const s=g(C("sar-list-item"),D),u=g(C("sar-list"),L);return i(),r(u,{card:""},{default:l((()=>[n(s,{arrow:"",hover:"",title:"显示不会消失的通知",onClick:t}),n(s,{arrow:"",hover:"",title:"隐藏通知",onClick:o})])),_:1})}}}),P=e({__name:"Placement",setup(e){const t=()=>{w("这是一条通知",{position:"bottom"})},o=()=>{w.hide()};return(e,a)=>{const s=g(C("sar-list-item"),D),u=g(C("sar-list"),L);return i(),r(u,{card:""},{default:l((()=>[n(s,{arrow:"",hover:"",title:"在底部显示通知",onClick:t}),n(s,{arrow:"",hover:"",title:"隐藏通知",onClick:o})])),_:1})}}}),R=j(e({__name:"index",setup:e=>(e,t)=>{const o=g(C("sar-notify-agent"),z),a=g(C("doc-demo"),I),s=g(C("doc-page"),B);return i(),r(s,null,{default:l((()=>[n(o),n(a,{title:"基础使用"},{default:l((()=>[n(A)])),_:1}),n(a,{title:"类型"},{default:l((()=>[n(E)])),_:1}),n(a,{title:"自定义颜色"},{default:l((()=>[n(G)])),_:1}),n(a,{title:"自定义时长"},{default:l((()=>[n(O)])),_:1}),n(a,{title:"自定义位置"},{default:l((()=>[n(P)])),_:1})])),_:1})}}),[["__scopeId","data-v-eb321c40"]]);export{R as default};