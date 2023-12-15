import{d as e,m as s,p as t,s as a,o as r,f as o,w as l,e as i,h as n,u as c,x as u,i as d,t as m,q as p,y as g,l as f,aa as y,B as _,C as S,D as v}from"./index-9377a170.js";import{_ as b,a as x}from"./index.fad96fb0.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";const C={rootStyle:[String,Object,Array],rootClass:String,columns:{type:Number,default:4},gap:String,bordered:Boolean,square:Boolean,clickable:Boolean,reverse:Boolean,direction:{type:String,default:"vertical"}},k={rootStyle:[String,Object,Array],rootClass:String,text:String,icon:String,iconSize:String,iconColor:String,iconFamily:String},w=Symbol("grid"),B=h(e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"grid-item",props:k,emits:["click"],setup(e,{emit:y}){const _=e,S=x("grid"),v=s(w);if(!v)throw new Error("GridItem must be included in Grid.");const h=e=>{y("click",e)},C=t((()=>{const e=1/v.columns*100+"%",s=v.gutter;return a(v.gap?{paddingLeft:s[0]+s[1],paddingRight:s[0]+s[1]}:null,{width:e,flexBasis:e},_.rootStyle)}));return(e,s)=>{const t=f;return r(),o(t,{class:n(c(p)(c(S).e("item"),e.rootClass)),style:g(c(C))},{default:l((()=>[i(t,{class:n(c(S).e("wrapper"))},{default:l((()=>[i(t,{class:n(c(S).e("content")),onClick:h},{default:l((()=>[u(e.$slots,"default",{},(()=>[i(t,{class:n(c(S).e("icon"))},{default:l((()=>[u(e.$slots,"icon",{},(()=>[i(b,{name:e.icon,color:e.iconColor,size:e.iconSize,family:e.iconFamily},null,8,["name","color","size","family"])]),!0)])),_:3},8,["class"]),i(t,{class:n(c(S).e("text"))},{default:l((()=>[u(e.$slots,"text",{},(()=>[d(m(e.text),1)]),!0)])),_:3},8,["class"])]),!0)])),_:3},8,["class"])])),_:3},8,["class"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-746ce96d"]]),j=h(e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"grid",props:C,setup(e){const s=e,i=x("grid"),d=t((()=>{if(s.gap){const e=y(s.gap);return[e[0]/2,e[1]||"rpx"]}return[0,"rpx"]}));_(w,S({columns:v(s,"columns"),gap:v(s,"gap"),gutter:d}));const m=t((()=>p(i.b(),i.m("bordered",s.bordered&&d.value[0]<=0),i.m("surround",s.bordered&&d.value[0]>0),i.m("square",s.square),i.m("clickable",s.clickable),i.m(s.direction),i.m("reverse",s.reverse),s.rootClass))),b=t((()=>a(s.gap?{marginLeft:-d.value[0]+d.value[1],marginRight:-d.value[0]+d.value[1]}:null,{rowGap:s.gap},s.rootStyle)));return(e,s)=>{const t=f;return r(),o(t,{class:n(c(m)),style:g(c(b))},{default:l((()=>[u(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-671ff6f8"]]);export{B as _,j as a};
