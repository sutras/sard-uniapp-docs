import{_ as e}from"./index.70abdba0.js";import{E as a,d as l,p as o,g as i,A as c,q as s,s as n,o as t,f as r,w as f,e as u,h as d,u as m,y as b,i as p,t as y,v,c as k,F as _,b as h,l as g,j as F,V as S,G as C,H as w,r as j,a as A}from"./index-158834fb.js";import{S as x,_ as W}from"./index.be0dc1e1.js";import{_ as T}from"./button.90fb394d.js";import{a as U,b as B,e as I,_ as P}from"./index.a84991b2.js";import"./common.26852cb0.js";const D=P(l({options:{virtualHost:!0,styleIsolation:"shared"},__name:"share-sheet",props:{rootStyle:[String,Object,Array],rootClass:String,itemList:Array,title:String,description:String,cancel:String,visible:Boolean,overlayClosable:{type:Boolean,default:a.shareSheet.overlayClosable},beforeClose:Function,duration:{type:Number,default:a.shareSheet.duration}},emits:["update:visible","close","cancel","select"],setup(e,{emit:a}){const l=e,w=B("share-sheet"),j=o((()=>{const e=l.itemList;return Array.isArray(e)?Array.isArray(e[0])?e:[e]:[]})),A=i(l.visible);c((()=>l.visible),(()=>{A.value=l.visible}));const W=e=>{if("function"==typeof l.beforeClose){const o=l.beforeClose(e);if(o instanceof Promise)return o.then((()=>{A.value=!1,a("update:visible",!1)})).catch(C);if(!1===o)return}A.value=!1,a("update:visible",!1)},T=()=>{a("close"),l.overlayClosable&&W("close")},P=()=>{a("cancel"),W("cancel")},D=o((()=>s(w.b(),w.m("titled",!!l.title),l.rootClass))),H=o((()=>n(l.rootStyle)));return(e,l)=>{const o=g,i=F,c=S;return t(),r(x,{effect:"slide-bottom",visible:A.value,duration:e.duration,onOverlayClick:T},{default:f((()=>[u(o,{class:d(m(D)),style:b(m(H))},{default:f((()=>[e.title||e.description?(t(),r(o,{key:0,class:d(m(w).e("header"))},{default:f((()=>[e.title?(t(),r(o,{key:0,class:d(m(w).e("title"))},{default:f((()=>[p(y(e.title),1)])),_:1},8,["class"])):v("",!0),e.description?(t(),r(o,{key:1,class:d(m(w).e("description"))},{default:f((()=>[p(y(e.description),1)])),_:1},8,["class"])):v("",!0)])),_:1},8,["class"])):v("",!0),u(o,{class:d(m(w).e("body"))},{default:f((()=>[(t(!0),k(_,null,h(m(j),((e,l)=>(t(),r(o,{key:l,class:d(m(w).e("row"))},{default:f((()=>[u(c,{"scroll-x":""},{default:f((()=>[u(o,{class:d(m(w).e("row-content"))},{default:f((()=>[(t(!0),k(_,null,h(e,((e,l)=>(t(),r(o,{key:l,class:d(m(s)(m(w).e("item"),m(w).em("item","disabled",e.disabled))),onClick:l=>(e=>{e.disabled||(a("select",e),W("select"))})(e)},{default:f((()=>[u(o,{class:d(m(w).e("icon-wrapper")),style:b(m(n)({backgroundColor:e.background,color:e.color}))},{default:f((()=>{return[(a=e.icon,"string"==typeof a&&I(a)?(t(),r(i,{key:0,src:e.icon,mode:"aspectFill",class:d(m(w).e("image"))},null,8,["src","class"])):(t(),r(U,{key:1,name:e.icon,family:e.iconFamily},null,8,["name","family"])))];var a})),_:2},1032,["class","style"]),u(o,{class:d(m(w).e("item-name"))},{default:f((()=>[p(y(e.name),1)])),_:2},1032,["class"]),u(o,{class:d(m(w).e("item-description"))},{default:f((()=>[p(y(e.description),1)])),_:2},1032,["class"])])),_:2},1032,["class","onClick"])))),128))])),_:2},1032,["class"])])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:1},8,["class"]),e.cancel?(t(),k(_,{key:1},[u(o,{class:d(m(w).e("gap"))},null,8,["class"]),u(o,{class:d(m(w).e("cancel")),onClick:P},{default:f((()=>[p(y(e.cancel),1)])),_:1},8,["class"])],64)):v("",!0)])),_:1},8,["class","style"])])),_:1},8,["visible","duration"])}}}),[["__scopeId","data-v-ef9298ae"]]),H=l({__name:"Basic",setup(e){const a=[{name:"Wechat",color:"#fff",background:"#0bc15f",icon:"wechat-fill",iconFamily:"demo-icons"},{name:"Alipay",color:"#fff",background:"#1677ff",icon:"alipay-fill",iconFamily:"demo-icons"},{name:"Twitter",color:"#fff",background:"#1d9bf0",icon:"twitter-fill",iconFamily:"demo-icons"},{name:"Facebook",color:"#fff",background:"#1877f2",icon:"facebook-circle-fill",iconFamily:"demo-icons"}],l=i(!1),o=e=>{w(e.name)};return(e,i)=>{const c=j(A("sar-button"),T),s=j(A("sar-share-sheet"),D);return t(),k(_,null,[u(c,{onClick:i[0]||(i[0]=e=>l.value=!0)},{default:f((()=>[p("显示分享面板")])),_:1}),u(s,{visible:l.value,"onUpdate:visible":i[1]||(i[1]=e=>l.value=e),"item-list":a,cancel:"取消",onSelect:o},null,8,["visible"])],64)}}}),L=l({__name:"MultipleRow",setup(e){const a=[[{name:"Wechat",color:"#fff",background:"#0bc15f",iconFamily:"demo-icons",icon:"wechat-fill"},{name:"Alipay",color:"#fff",background:"#1677ff",iconFamily:"demo-icons",icon:"alipay-fill"},{name:"Twitter",color:"#fff",background:"#1d9bf0",iconFamily:"demo-icons",icon:"twitter-fill"},{name:"Facebook",color:"#fff",background:"#1877f2",iconFamily:"demo-icons",icon:"facebook-circle-fill"}],[{name:"Spotify",color:"#fff",background:"#1ed760",iconFamily:"demo-icons",icon:"spotify-fill"},{name:"Skype",color:"#fff",background:"#0b64a4",iconFamily:"demo-icons",icon:"skype-fill"},{name:"Youtube",color:"#fff",background:"#ff0000",iconFamily:"demo-icons",icon:"youtube-fill"},{name:"Paypal",color:"#fff",background:"#0070ba",iconFamily:"demo-icons",icon:"paypal-fill"},{name:"Whatsapp",color:"#fff",background:"#128c7e",iconFamily:"demo-icons",icon:"whatsapp-fill"},{name:"Telegram",color:"#fff",background:"#0088cc",iconFamily:"demo-icons",icon:"telegram-fill"},{name:"Snapchat",color:"#000",background:"#fffc00",iconFamily:"demo-icons",icon:"snapchat-fill"}]],l=i(!1),o=e=>{w(e.name)};return(e,i)=>{const c=j(A("sar-button"),T),s=j(A("sar-share-sheet"),D);return t(),k(_,null,[u(c,{onClick:i[0]||(i[0]=e=>l.value=!0)},{default:f((()=>[p("显示分享面板")])),_:1}),u(s,{visible:l.value,"onUpdate:visible":i[1]||(i[1]=e=>l.value=e),"item-list":a,cancel:"取消",onSelect:o},null,8,["visible"])],64)}}}),O=l({__name:"TitleDescription",setup(e){const a=[{name:"Wechat",color:"#fff",background:"#0bc15f",iconFamily:"demo-icons",icon:"wechat-fill"},{name:"Alipay",color:"#fff",background:"#1677ff",iconFamily:"demo-icons",icon:"alipay-fill",description:"这是描述这是描述"},{name:"Twitter",color:"#fff",background:"#1d9bf0",iconFamily:"demo-icons",icon:"twitter-fill"},{name:"Facebook",color:"#fff",background:"#1877f2",iconFamily:"demo-icons",icon:"facebook-circle-fill"}],l=i(!1),o=e=>{w(e.name)};return(e,i)=>{const c=j(A("sar-button"),T),s=j(A("sar-share-sheet"),D);return t(),k(_,null,[u(c,{onClick:i[0]||(i[0]=e=>l.value=!0)},{default:f((()=>[p("显示分享面板")])),_:1}),u(s,{visible:l.value,"onUpdate:visible":i[1]||(i[1]=e=>l.value=e),"item-list":a,title:"分享到",description:"这是描述",cancel:"取消",onSelect:o},null,8,["visible"])],64)}}}),q=l({__name:"Picture",setup(e){const a=[{name:"Sard",icon:"https://fastly.jsdelivr.net/npm/@sard/assets/pic1.jpg"},{name:"Wechat",color:"#fff",background:"#0bc15f",iconFamily:"demo-icons",icon:"wechat-fill"}],l=i(!1),o=e=>{w(e.name)};return(e,i)=>{const c=j(A("sar-button"),T),s=j(A("sar-share-sheet"),D);return t(),k(_,null,[u(c,{onClick:i[0]||(i[0]=e=>l.value=!0)},{default:f((()=>[p("显示分享面板")])),_:1}),u(s,{visible:l.value,"onUpdate:visible":i[1]||(i[1]=e=>l.value=e),"item-list":a,cancel:"取消",onSelect:o},null,8,["visible"])],64)}}}),E=l({__name:"Disabled",setup(e){const a=[{name:"Wechat",color:"#fff",background:"#0bc15f",icon:"wechat-fill",iconFamily:"demo-icons",disabled:!0},{name:"Alipay",color:"#fff",background:"#1677ff",icon:"alipay-fill",iconFamily:"demo-icons"}],l=i(!1),o=e=>{w(e.name)};return(e,i)=>{const c=j(A("sar-button"),T),s=j(A("sar-share-sheet"),D);return t(),k(_,null,[u(c,{onClick:i[0]||(i[0]=e=>l.value=!0)},{default:f((()=>[p("显示分享面板")])),_:1}),u(s,{visible:l.value,"onUpdate:visible":i[1]||(i[1]=e=>l.value=e),"item-list":a,cancel:"取消",onSelect:o},null,8,["visible"])],64)}}}),G=P(l({__name:"index",setup:a=>(a,l)=>{const o=j(A("doc-demo"),e),i=j(A("doc-page"),W);return t(),r(i,null,{default:f((()=>[u(o,{title:"基础使用"},{default:f((()=>[u(H)])),_:1}),u(o,{title:"多行"},{default:f((()=>[u(L)])),_:1}),u(o,{title:"标题和描述"},{default:f((()=>[u(O)])),_:1}),u(o,{title:"图片类型图标"},{default:f((()=>[u(q)])),_:1}),u(o,{title:"禁用"},{default:f((()=>[u(E)])),_:1})])),_:1})}}),[["__scopeId","data-v-4cfdf822"]]);export{G as default};
