import{E as a,d as e,I as s,p as o,q as t,s as l,o as r,f as d,w as u,x as n,e as i,h as c,u as f,y as m,i as p,t as y,l as v}from"./index-6f8f5948.js";import{b as x,_ as b}from"./index.09d87181.js";const g=b(e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"badge",props:{rootStyle:[String,Object,Array],rootClass:String,value:{type:[Number,String],default:a.badge.value},max:{type:Number,default:a.badge.max},showZero:Boolean,color:String,textColor:String,dot:Boolean,fixed:Boolean},setup(a){const e=a,b=x("badge"),g=s(),_=o((()=>!e.dot&&0===e.value&&!e.showZero&&!g.value)),S=o((()=>e.dot?"":"number"==typeof e.value&&e.value>e.max?`${e.max}+`:e.value)),h=o((()=>t(b.b(),b.m("fixed",e.fixed||!!g.default),b.m("zero-hide",_.value),b.m("dot",e.dot),e.rootClass))),$=o((()=>l({background:e.color,color:e.textColor},e.rootStyle)));return(a,e)=>{const s=v;return a.$slots.default?(r(),d(s,{key:0,class:c(f(b).e("wrapper"))},{default:u((()=>[n(a.$slots,"default",{},void 0,!0),i(s,{class:c(f(h)),style:m(f($))},{default:u((()=>[n(a.$slots,"value",{},(()=>[p(y(f(S)),1)]),!0)])),_:3},8,["class","style"])])),_:3},8,["class"])):(r(),d(s,{key:1,class:c(f(h)),style:m(f($))},{default:u((()=>[n(a.$slots,"value",{},(()=>[p(y(f(S)),1)]),!0)])),_:3},8,["class","style"]))}}}),[["__scopeId","data-v-2f5eec58"]]);export{g as _};