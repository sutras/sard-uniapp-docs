import{_ as s}from"./index.BP8xHQyf.js";import{E as e,d as t,G as a,p as r,o as l,f as c,w as n,e as o,h as i,x as u,v as p,u as d,i as f,t as v,s as g,q as h,z as k,l as m,r as _,a as y,c as x,F as w}from"./index-GlWSIXJ_.js";import{_ as b}from"./index.D9XOTfsQ.js";import{a as C,b as j,_ as z}from"./index.DZ-iMJGl.js";const I=z(t({options:{virtualHost:!0,styleIsolation:"shared"},__name:"progress-circle",props:a({rootStyle:{},rootClass:{},percent:{},color:{},trackColor:{},thickness:{},size:{},status:{}},e.progressCircle),setup(s){const e=s,t=j("progress-circle"),a=r((()=>e.status?{success:"check-circle-fill",warning:"warning-fill",error:"x-circle-fill"}[e.status]:"")),_=r((()=>50-e.thickness/2)),y=r((()=>e.percent/100*360)),x=r((()=>y.value/180*Math.PI)),w=r((()=>`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3ccircle stroke='black' fill='none' stroke-width='${e.thickness}' cx='50' cy='50' r='${_.value}' /%3e%3c/svg%3e")`)),b=r((()=>h(t.b(),t.m(e.status,e.status),e.rootClass))),z=r((()=>k({width:e.size,height:e.size},e.rootStyle))),I=r((()=>h(t.e("track")))),$=r((()=>k({backgroundColor:e.trackColor,"-webkit-mask":w.value,mask:w.value}))),M=r((()=>h(t.e("piece")))),S=r((()=>k({color:e.color,backgroundImage:`conic-gradient(currentColor ${y.value}deg, transparent 0)`}))),q=r((()=>h(t.e("cap"),t.e("cap-start")))),B=r((()=>k({width:e.thickness+"%",height:e.thickness+"%"}))),E=r((()=>h(t.e("cap"),t.e("cap-end")))),F=r((()=>k({width:e.thickness+"%",height:e.thickness+"%",left:50+Math.sin(x.value)*_.value+"%",top:50-Math.cos(x.value)*_.value+"%"})));return(s,e)=>{const r=m;return l(),c(r,{class:i(b.value),style:u(z.value)},{default:n((()=>[o(r,{class:i(I.value),style:u($.value)},{default:n((()=>[o(r,{class:i(M.value),style:u(S.value)},{default:n((()=>[o(r,{class:i(q.value),style:u(B.value)},null,8,["class","style"]),o(r,{class:i(E.value),style:u(F.value)},null,8,["class","style"])])),_:1},8,["class","style"])])),_:1},8,["class","style"]),p(s.$slots,"default",{},(()=>[s.status?g("",!0):(l(),c(r,{key:0,class:i(d(t).e("text"))},{default:n((()=>[f(v(s.percent)+"%",1)])),_:1},8,["class"])),s.status?(l(),c(r,{key:1,class:i(d(t).e("status"))},{default:n((()=>[o(C,{name:a.value},null,8,["name"])])),_:1},8,["class"])):g("",!0)]),!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-8895cdc3"]]);const $=z({},[["render",function(s,e){const t=_(y("sar-progress-circle"),I);return l(),c(t,{percent:75})}]]);const M=z({},[["render",function(s,e){const t=_(y("sar-progress-circle"),I);return l(),c(t,{percent:50,thickness:10})}]]);const S=z({},[["render",function(s,e){const t=_(y("sar-progress-circle"),I);return l(),c(t,{percent:50,color:"var(--sar-red)"})}]]);const q=z({},[["render",function(s,e){const t=_(y("sar-progress-circle"),I);return l(),c(t,{percent:50,size:"144rpx",thickness:6})}]]);const B=z({},[["render",function(s,e){const t=_(y("sar-progress-circle"),I);return l(),x(w,null,[o(t,{percent:50,status:"success"}),o(t,{percent:50,status:"warning","root-style":"margin-top: 20rpx"}),o(t,{percent:50,status:"error","root-style":"margin-top: 20rpx"})],64)}]]),E=z(t({__name:"index",setup:e=>(e,t)=>{const a=_(y("doc-demo"),s),r=_(y("doc-page"),b);return l(),c(r,{emphasis:""},{default:n((()=>[o(a,{title:"基础使用"},{default:n((()=>[o($)])),_:1}),o(a,{title:"粗细"},{default:n((()=>[o(M)])),_:1}),o(a,{title:"颜色"},{default:n((()=>[o(S)])),_:1}),o(a,{title:"尺寸"},{default:n((()=>[o(q)])),_:1}),o(a,{title:"状态"},{default:n((()=>[o(B)])),_:1})])),_:1})}}),[["__scopeId","data-v-fb2345f7"]]);export{E as default};