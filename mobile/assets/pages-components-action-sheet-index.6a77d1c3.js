import{_ as e}from"./index.1d7a4681.js";import{d as s,g as a,A as l,p as t,q as i,s as n,o,f as c,w as r,e as u,h as d,u as m,y as v,i as p,t as f,v as _,c as b,F as y,b as C,l as g,E as k,G as h,r as j,a as S}from"./index-9377a170.js";import{a as x,P as U,_ as A}from"./index.913a9e45.js";import{_ as B}from"./button.65db1ec1.js";import{a as I}from"./index.fad96fb0.js";import{_ as F}from"./_plugin-vue_export-helper.1b428a4d.js";import"./common.802edc1c.js";const L=F(s({options:{virtualHost:!0,styleIsolation:"shared"},__name:"action-sheet",props:{rootStyle:[String,Object,Array],rootClass:String,description:String,itemList:Array,cancel:String,visible:Boolean,overlayClosable:{type:Boolean,default:!0},beforeClose:Function},emits:["update:visible","close","cancel","select"],setup(e,{emit:s}){const h=e,j=I("action-sheet"),S=a(h.visible);l((()=>h.visible),(()=>{S.value=h.visible}));const A=e=>{if("function"==typeof h.beforeClose){const a=h.beforeClose(e);if(a instanceof Promise)return a.then((()=>{S.value=!1,s("update:visible",!1)})).catch(k);if(!1===a)return}S.value=!1,s("update:visible",!1)},B=()=>{s("close"),h.overlayClosable&&A("close")},F=()=>{s("cancel"),A("cancel")},L=t((()=>i(j.b(),j.m("headless",!h.description),h.rootClass))),O=t((()=>n(h.rootStyle)));return(e,a)=>{const l=g;return o(),c(U,{effect:"slide-bottom",visible:S.value,onOverlayClick:B},{default:r((()=>[u(l,{class:d(m(L)),style:v(m(O))},{default:r((()=>[e.description?(o(),c(l,{key:0,class:d(m(j).e("description"))},{default:r((()=>[p(f(e.description),1)])),_:1},8,["class"])):_("",!0),u(l,{class:d(m(j).e("content"))},{default:r((()=>[(o(!0),b(y,null,C(e.itemList,((e,a)=>(o(),c(l,{key:a,class:d(m(i)(m(j).e("item"),m(j).em("item","disabled",e.disabled),m(j).em("item","loading",e.loading))),style:v(m(n)({color:e.color})),onClick:l=>((e,a)=>{e.disabled||e.loading||(s("select",e,a),A("select"))})(e,a)},{default:r((()=>[e.loading?(o(),c(l,{key:1,class:d(m(j).e("loading"))},{default:r((()=>[u(x)])),_:1},8,["class"])):(o(),b(y,{key:0},[u(l,{class:d(m(j).e("item-name"))},{default:r((()=>[p(f(e.name),1)])),_:2},1032,["class"]),e.description?(o(),c(l,{key:0,class:d(m(j).e("item-description"))},{default:r((()=>[p(f(e.description),1)])),_:2},1032,["class"])):_("",!0)],64))])),_:2},1032,["class","style","onClick"])))),128))])),_:1},8,["class"]),e.cancel?(o(),b(y,{key:1},[u(l,{class:d(m(j).e("gap"))},null,8,["class"]),u(l,{class:d(m(j).e("cancel")),onClick:F},{default:r((()=>[p(f(e.cancel),1)])),_:1},8,["class"])],64)):_("",!0)])),_:1},8,["class","style"])])),_:1},8,["visible"])}}}),[["__scopeId","data-v-2feaf1c7"]]),O=s({__name:"Basic",setup(e){const s=a(!1),l=a([{name:"选项1"},{name:"选项2"},{name:"选项3"}]),t=e=>{h(e.name)};return(e,a)=>{const i=j(S("sar-button"),B),n=j(S("sar-action-sheet"),L);return o(),b(y,null,[u(i,{onClick:a[0]||(a[0]=e=>s.value=!0)},{default:r((()=>[p("显示")])),_:1}),u(n,{visible:s.value,"onUpdate:visible":a[1]||(a[1]=e=>s.value=e),"item-list":l.value,onSelect:t},null,8,["visible","item-list"])],64)}}}),P=s({__name:"Cancel",setup(e){const s=a(!1),l=a([{name:"选项1"},{name:"选项2"},{name:"选项3"}]);return(e,a)=>{const t=j(S("sar-button"),B),i=j(S("sar-action-sheet"),L);return o(),b(y,null,[u(t,{onClick:a[0]||(a[0]=e=>s.value=!0)},{default:r((()=>[p("显示")])),_:1}),u(i,{visible:s.value,"onUpdate:visible":a[1]||(a[1]=e=>s.value=e),cancel:"取消","item-list":l.value},null,8,["visible","item-list"])],64)}}}),q=s({__name:"Description",setup(e){const s=a(!1),l=a([{name:"选项1"},{name:"选项2",description:"描述信息"},{name:"选项3"}]);return(e,a)=>{const t=j(S("sar-button"),B),i=j(S("sar-action-sheet"),L);return o(),b(y,null,[u(t,{onClick:a[0]||(a[0]=e=>s.value=!0)},{default:r((()=>[p("显示")])),_:1}),u(i,{visible:s.value,"onUpdate:visible":a[1]||(a[1]=e=>s.value=e),description:"这是一段很长很长的描述信息",cancel:"取消","item-list":l.value},null,8,["visible","item-list"])],64)}}}),w=s({__name:"Status",setup(e){const s=a(!1),l=a([{name:"选项1",color:"var(--sar-red)"},{name:"选项2",disabled:!0},{name:"选项3",loading:!0}]);return(e,a)=>{const t=j(S("sar-button"),B),i=j(S("sar-action-sheet"),L);return o(),b(y,null,[u(t,{onClick:a[0]||(a[0]=e=>s.value=!0)},{default:r((()=>[p("显示")])),_:1}),u(i,{visible:s.value,"onUpdate:visible":a[1]||(a[1]=e=>s.value=e),cancel:"取消","item-list":l.value},null,8,["visible","item-list"])],64)}}}),D=F(s({__name:"index",setup:s=>(s,a)=>{const l=j(S("doc-demo"),e),t=j(S("doc-page"),A);return o(),c(t,null,{default:r((()=>[u(l,{title:"基础使用"},{default:r((()=>[u(O)])),_:1}),u(l,{title:"取消按钮"},{default:r((()=>[u(P)])),_:1}),u(l,{title:"描述信息"},{default:r((()=>[u(q)])),_:1}),u(l,{title:"动作状态"},{default:r((()=>[u(w)])),_:1})])),_:1})}}),[["__scopeId","data-v-72d9aed4"]]);export{D as default};
