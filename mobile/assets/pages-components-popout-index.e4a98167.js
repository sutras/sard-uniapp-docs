import{_ as e}from"./index.5ae075dd.js";import{d as l,g as t,o as a,c as i,e as s,w as u,i as r,F as o,r as n,a as d,l as p,f}from"./index-6f8f5948.js";import{_}from"./index.b4cc07cd.js";import{_ as c,a as m}from"./list.8654b49f.js";import{_ as v}from"./popout.964827c0.js";import{_ as g}from"./index.09d87181.js";import"./button.8a95f6cb.js";import"./common.097e1cb5.js";const b=l({__name:"Basic",setup(e){const l=t(!1),f=t(!1);return(e,t)=>{const _=n(d("sar-list-item"),c),g=n(d("sar-list"),m),b=p,x=n(d("sar-popout"),v);return a(),i(o,null,[s(g,{card:""},{default:u((()=>[s(_,{hover:"",arrow:"",title:"默认弹出框",onClick:t[0]||(t[0]=e=>l.value=!0)}),s(_,{hover:"",arrow:"",title:"显示取消按钮",onClick:t[1]||(t[1]=e=>f.value=!0)})])),_:1}),s(x,{title:"标题",visible:l.value,"onUpdate:visible":t[2]||(t[2]=e=>l.value=e)},{default:u((()=>[s(b,{style:{"padding-left":"32rpx","padding-right":"32rpx"}},{default:u((()=>[s(b,null,{default:u((()=>[r("弹出框内容")])),_:1}),s(b,null,{default:u((()=>[r("弹出框内容")])),_:1}),s(b,null,{default:u((()=>[r("弹出框内容")])),_:1})])),_:1})])),_:1},8,["visible"]),s(x,{"show-cancel":"","show-close":!1,title:"标题",visible:f.value,"onUpdate:visible":t[3]||(t[3]=e=>f.value=e)},{default:u((()=>[s(b,{style:{"padding-left":"32rpx","padding-right":"32rpx"}},{default:u((()=>[s(b,null,{default:u((()=>[r("弹出框内容")])),_:1}),s(b,null,{default:u((()=>[r("弹出框内容")])),_:1}),s(b,null,{default:u((()=>[r("弹出框内容")])),_:1})])),_:1})])),_:1},8,["visible"])],64)}}}),x=l({__name:"Compact",setup(e){const l=t(!1);return(e,t)=>{const f=n(d("sar-list-item"),c),_=n(d("sar-list"),m),g=p,b=n(d("sar-popout"),v);return a(),i(o,null,[s(_,{card:""},{default:u((()=>[s(f,{hover:"",arrow:"",title:"弹出框",onClick:t[0]||(t[0]=e=>l.value=!0)})])),_:1}),s(b,{title:"标题",type:"compact",visible:l.value,"onUpdate:visible":t[1]||(t[1]=e=>l.value=e)},{default:u((()=>[s(g,{style:{"padding-left":"32rpx","padding-right":"32rpx"}},{default:u((()=>[s(g,null,{default:u((()=>[r("弹出框内容")])),_:1}),s(g,null,{default:u((()=>[r("弹出框内容")])),_:1}),s(g,null,{default:u((()=>[r("弹出框内容")])),_:1})])),_:1})])),_:1},8,["visible"])],64)}}}),h=l({__name:"BeforeClose",setup(e){const l=t(!1),f=e=>{if("confirm"===e)return new Promise((e=>setTimeout(e,1500)))};return(e,t)=>{const _=n(d("sar-list-item"),c),g=n(d("sar-list"),m),b=p,x=n(d("sar-popout"),v);return a(),i(o,null,[s(g,{card:""},{default:u((()=>[s(_,{hover:"",arrow:"",title:"弹出框",onClick:t[0]||(t[0]=e=>l.value=!0)})])),_:1}),s(x,{title:"标题",visible:l.value,"onUpdate:visible":t[1]||(t[1]=e=>l.value=e),"before-close":f},{default:u((()=>[s(b,{style:{"padding-left":"32rpx","padding-right":"32rpx"}},{default:u((()=>[s(b,null,{default:u((()=>[r("弹出框内容")])),_:1}),s(b,null,{default:u((()=>[r("弹出框内容")])),_:1}),s(b,null,{default:u((()=>[r("弹出框内容")])),_:1})])),_:1})])),_:1},8,["visible"])],64)}}}),j=g(l({__name:"index",setup:l=>(l,t)=>{const i=n(d("doc-demo"),e),r=n(d("doc-page"),_);return a(),f(r,null,{default:u((()=>[s(i,{title:"基础使用"},{default:u((()=>[s(b)])),_:1}),s(i,{title:"紧凑类型"},{default:u((()=>[s(x)])),_:1}),s(i,{title:"异步关闭"},{default:u((()=>[s(h)])),_:1})])),_:1})}}),[["__scopeId","data-v-631a696a"]]);export{j as default};