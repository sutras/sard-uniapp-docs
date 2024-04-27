import{_ as e}from"./index.70abdba0.js";import{E as a,d as s,g as t,A as l,p as i,q as n,s as o,o as c,f as r,w as u,e as d,h as m,u as v,y as b,i as p,t as f,v as _,c as y,F as C,b as k,l as h,G as g,H as S,r as j,a as x}from"./index-158834fb.js";import{a as U,S as A,_ as B}from"./index.be0dc1e1.js";import{_ as I}from"./button.90fb394d.js";import{b as F,_ as H}from"./index.a84991b2.js";import"./common.26852cb0.js";const L=H(s({options:{virtualHost:!0,styleIsolation:"shared"},__name:"action-sheet",props:{rootStyle:[String,Object,Array],rootClass:String,description:String,itemList:Array,cancel:String,visible:Boolean,overlayClosable:{type:Boolean,default:a.actionSheet.overlayClosable},beforeClose:Function,duration:{type:Number,default:a.shareSheet.duration}},emits:["update:visible","close","cancel","select"],setup(e,{emit:a}){const s=e,S=F("action-sheet"),j=t(s.visible);l((()=>s.visible),(()=>{j.value=s.visible}));const x=e=>{if("function"==typeof s.beforeClose){const t=s.beforeClose(e);if(t instanceof Promise)return t.then((()=>{j.value=!1,a("update:visible",!1)})).catch(g);if(!1===t)return}j.value=!1,a("update:visible",!1)},B=()=>{a("close"),s.overlayClosable&&x("close")},I=()=>{a("cancel"),x("cancel")},H=i((()=>n(S.b(),S.m("headless",!s.description),s.rootClass))),L=i((()=>o(s.rootStyle)));return(e,s)=>{const t=h;return c(),r(A,{effect:"slide-bottom",visible:j.value,duration:e.duration,onOverlayClick:B},{default:u((()=>[d(t,{class:m(v(H)),style:b(v(L))},{default:u((()=>[e.description?(c(),r(t,{key:0,class:m(v(S).e("description"))},{default:u((()=>[p(f(e.description),1)])),_:1},8,["class"])):_("",!0),d(t,{class:m(v(S).e("content"))},{default:u((()=>[(c(!0),y(C,null,k(e.itemList,((e,s)=>(c(),r(t,{key:s,class:m(v(n)(v(S).e("item"),v(S).em("item","disabled",e.disabled),v(S).em("item","loading",e.loading))),style:b(v(o)({color:e.color})),onClick:t=>((e,s)=>{e.disabled||e.loading||(a("select",e,s),x("select"))})(e,s)},{default:u((()=>[e.loading?(c(),r(t,{key:1,class:m(v(S).e("loading"))},{default:u((()=>[d(U)])),_:1},8,["class"])):(c(),y(C,{key:0},[d(t,{class:m(v(S).e("item-name"))},{default:u((()=>[p(f(e.name),1)])),_:2},1032,["class"]),e.description?(c(),r(t,{key:0,class:m(v(S).e("item-description"))},{default:u((()=>[p(f(e.description),1)])),_:2},1032,["class"])):_("",!0)],64))])),_:2},1032,["class","style","onClick"])))),128))])),_:1},8,["class"]),e.cancel?(c(),y(C,{key:1},[d(t,{class:m(v(S).e("gap"))},null,8,["class"]),d(t,{class:m(v(S).e("cancel")),onClick:I},{default:u((()=>[p(f(e.cancel),1)])),_:1},8,["class"])],64)):_("",!0)])),_:1},8,["class","style"])])),_:1},8,["visible","duration"])}}}),[["__scopeId","data-v-5e66929e"]]),O=s({__name:"Basic",setup(e){const a=t(!1),s=t([{name:"选项1"},{name:"选项2"},{name:"选项3"}]),l=e=>{S(e.name)};return(e,t)=>{const i=j(x("sar-button"),I),n=j(x("sar-action-sheet"),L);return c(),y(C,null,[d(i,{onClick:t[0]||(t[0]=e=>a.value=!0)},{default:u((()=>[p("显示")])),_:1}),d(n,{visible:a.value,"onUpdate:visible":t[1]||(t[1]=e=>a.value=e),"item-list":s.value,onSelect:l},null,8,["visible","item-list"])],64)}}}),q=s({__name:"Cancel",setup(e){const a=t(!1),s=t([{name:"选项1"},{name:"选项2"},{name:"选项3"}]);return(e,t)=>{const l=j(x("sar-button"),I),i=j(x("sar-action-sheet"),L);return c(),y(C,null,[d(l,{onClick:t[0]||(t[0]=e=>a.value=!0)},{default:u((()=>[p("显示")])),_:1}),d(i,{visible:a.value,"onUpdate:visible":t[1]||(t[1]=e=>a.value=e),cancel:"取消","item-list":s.value},null,8,["visible","item-list"])],64)}}}),w=s({__name:"Description",setup(e){const a=t(!1),s=t([{name:"选项1"},{name:"选项2",description:"描述信息"},{name:"选项3"}]);return(e,t)=>{const l=j(x("sar-button"),I),i=j(x("sar-action-sheet"),L);return c(),y(C,null,[d(l,{onClick:t[0]||(t[0]=e=>a.value=!0)},{default:u((()=>[p("显示")])),_:1}),d(i,{visible:a.value,"onUpdate:visible":t[1]||(t[1]=e=>a.value=e),description:"这是一段很长很长的描述信息",cancel:"取消","item-list":s.value},null,8,["visible","item-list"])],64)}}}),D=s({__name:"Status",setup(e){const a=t(!1),s=t([{name:"选项1",color:"var(--sar-red)"},{name:"选项2",disabled:!0},{name:"选项3",loading:!0}]);return(e,t)=>{const l=j(x("sar-button"),I),i=j(x("sar-action-sheet"),L);return c(),y(C,null,[d(l,{onClick:t[0]||(t[0]=e=>a.value=!0)},{default:u((()=>[p("显示")])),_:1}),d(i,{visible:a.value,"onUpdate:visible":t[1]||(t[1]=e=>a.value=e),cancel:"取消","item-list":s.value},null,8,["visible","item-list"])],64)}}}),E=H(s({__name:"index",setup:a=>(a,s)=>{const t=j(x("doc-demo"),e),l=j(x("doc-page"),B);return c(),r(l,null,{default:u((()=>[d(t,{title:"基础使用"},{default:u((()=>[d(O)])),_:1}),d(t,{title:"取消按钮"},{default:u((()=>[d(q)])),_:1}),d(t,{title:"描述信息"},{default:u((()=>[d(w)])),_:1}),d(t,{title:"动作状态"},{default:u((()=>[d(D)])),_:1})])),_:1})}}),[["__scopeId","data-v-72d9aed4"]]);export{E as default};
