import{d as t,m as s,p as e,q as r,s as a,o,f as n,w as l,x as i,h as u,u as d,y as c,l as p,ab as f,B as g,C as y,D as m}from"./index-6f8f5948.js";import{b,_ as v}from"./index.09d87181.js";const S={rootStyle:[String,Object,Array],rootClass:String,gap:[Number,String],justify:String,align:String},_={rootStyle:[String,Object,Array],rootClass:String,span:[Number,String],offset:Number,order:Number},x=Symbol("row-context"),w={start:"flex-start",center:"center",end:"flex-end",around:"space-around",between:"space-between",evenly:"space-evenly"},h={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"},j=v(t({options:{virtualHost:!0,styleIsolation:"shared"},__name:"col",props:_,setup(t){const f=t,g=s(x);if(!g)throw new Error("Col must be included in Row.");const y=b("col"),m=e((()=>r(y.b(),y.m(f.span,void 0!==f.span),y.m(`offset-${f.offset}`,void 0!==f.offset),f.rootClass))),v=e((()=>{const t=g.gutter;return a(void 0!==f.order?{order:f.order}:null,g.gap?{paddingLeft:t[0]+t[1],paddingRight:t[0]+t[1]}:null,f.rootStyle)}));return(t,s)=>{const e=p;return o(),n(e,{class:u(d(m)),style:c(d(v))},{default:l((()=>[i(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-e2c8603d"]]),C=v(t({options:{virtualHost:!0,styleIsolation:"shared"},__name:"row",props:S,setup(t){const s=t,v=b("row"),S=e((()=>{if(s.gap){const t=f(s.gap);return[t[0]/2,t[1]||"rpx"]}return[0,"rpx"]}));g(x,y({gap:m(s,"gap"),gutter:S}));const _=e((()=>a({justifyContent:s.justify&&w[s.justify],alignItems:s.align&&h[s.align]},s.gap?{marginLeft:-S.value[0]+S.value[1],marginRight:-S.value[0]+S.value[1]}:null,s.rootStyle))),j=e((()=>r(v.b(),s.rootClass)));return(t,s)=>{const e=p;return o(),n(e,{class:u(d(j)),style:c(d(_))},{default:l((()=>[i(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-fcdf92b3"]]);export{j as _,C as a};