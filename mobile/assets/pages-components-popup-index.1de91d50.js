import{_ as e}from"./index.5ae075dd.js";import{d as a,g as s,o as t,c as o,e as l,w as r,h as i,u as c,i as n,F as d,l as u,r as f,a as p,f as m}from"./index-6f8f5948.js";import{S as v,_}from"./index.b4cc07cd.js";import{_ as h,a as k}from"./list.8654b49f.js";import{c as w,_ as C}from"./index.09d87181.js";const j=C(a({__name:"Basic",setup(e){const a=w("popup"),m=s(!1),_=s("fade"),C=e=>{m.value=!0,_.value=e},j=()=>{m.value=!1};return(e,s)=>{const w=u,x=f(p("sar-popup"),v),b=f(p("sar-list-item"),h),g=f(p("sar-list"),k);return t(),o(d,null,[l(x,{visible:m.value,effect:_.value,onOverlayClick:j},{default:r((()=>[l(w,{class:i(c(a).e("content"))},{default:r((()=>[n("Popup")])),_:1},8,["class"])])),_:1},8,["visible","effect"]),l(g,{card:""},{default:r((()=>[l(b,{hover:"",arrow:"",title:"顶部划出",onClick:s[0]||(s[0]=e=>C("slide-top"))}),l(b,{hover:"",arrow:"",title:"右边划出",onClick:s[1]||(s[1]=e=>C("slide-right"))}),l(b,{hover:"",arrow:"",title:"底部划出",onClick:s[2]||(s[2]=e=>C("slide-bottom"))}),l(b,{hover:"",arrow:"",title:"左边划出",onClick:s[3]||(s[3]=e=>C("slide-left"))}),l(b,{hover:"",arrow:"",title:"缩放",onClick:s[4]||(s[4]=e=>C("zoom"))}),l(b,{hover:"",arrow:"",title:"淡入淡出",onClick:s[5]||(s[5]=e=>C("fade"))})])),_:1})],64)}}}),[["__scopeId","data-v-37cc552b"]]),x=a({__name:"index",setup:a=>(a,s)=>{const o=f(p("doc-demo"),e),i=f(p("doc-page"),_);return t(),m(i,null,{default:r((()=>[l(o,{title:"基础使用"},{default:r((()=>[l(j)])),_:1})])),_:1})}});export{x as default};