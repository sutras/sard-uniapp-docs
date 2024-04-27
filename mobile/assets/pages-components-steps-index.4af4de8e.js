import{_ as e}from"./index.70abdba0.js";import{E as t,d as a,p as s,q as r,s as l,o as n,f as i,w as u,c as o,F as c,b as d,h as v,u as m,e as p,i as f,t as _,v as h,y as w,l as y,g as C,r as k,a as S}from"./index-158834fb.js";import{_ as g}from"./index.be0dc1e1.js";import{_ as I,a as b}from"./list.28356688.js";import{a as x,b as j,_ as z}from"./index.a84991b2.js";const F=z(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"steps",props:{rootStyle:[String,Object,Array],rootClass:String,current:{type:Number,default:t.steps.current},itemList:Array,center:{type:Boolean,default:t.steps.center},direction:{type:String,default:t.steps.direction},status:String,iconFamily:String,iconSize:String,finishIcon:{type:String,default:t.steps.finishIcon},processIcon:{type:String,default:t.steps.processIcon},waitIcon:{type:String,default:t.steps.waitIcon},errorIcon:{type:String,default:t.steps.errorIcon}},setup(e){const t=e,a=(e,a)=>a<e?"finish":a===e?t.status??"process":"wait",C=j("steps"),k=s((()=>r(C.b(),C.m(t.direction),C.m("center",t.center),t.rootClass))),S=s((()=>l(t.rootStyle)));return(e,s)=>{const l=y;return n(),i(l,{class:v(m(k)),style:w(m(S))},{default:u((()=>[(n(!0),o(c,null,d(e.itemList,((s,o)=>{return n(),i(l,{key:o,class:v(m(r)(m(C).e("step"),m(C).em("step",s.status??a(e.current,o)),m(C).em("step",(c=e.current,d=o,d<c?"behind":c===d?"self":"front"))))},{default:u((()=>[p(l,{class:v(m(C).e("header"))},{default:u((()=>[p(l,{class:v(m(r)(m(C).e("line"),m(C).e("line-before")))},null,8,["class"]),p(l,{class:v(m(C).e("icon"))},{default:u((()=>{return[p(x,{name:(r=s.status??a(e.current,o),{finish:t.finishIcon,process:t.processIcon,wait:t.waitIcon,error:t.errorIcon}[r]),size:e.iconSize,family:e.iconFamily},null,8,["name","size","family"])];var r})),_:2},1032,["class"]),p(l,{class:v(m(r)(m(C).e("line"),m(C).e("line-after")))},null,8,["class"])])),_:2},1032,["class"]),p(l,{class:v(m(C).e("body"))},{default:u((()=>[p(l,{class:v(m(C).e("name"))},{default:u((()=>[f(_(s.name),1)])),_:2},1032,["class"]),s.description?(n(),i(l,{key:0,class:v(m(C).e("description"))},{default:u((()=>[f(_(s.description),1)])),_:2},1032,["class"])):h("",!0)])),_:2},1032,["class"])])),_:2},1032,["class"]);var c,d})),128))])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-4eccef3b"]]),A=a({__name:"Basic",setup(e){const t=C(1),a=[{name:"步骤1"},{name:"步骤2"},{name:"步骤3"}],s=()=>{t.value=t.value<=0?3:t.value-1},r=()=>{t.value=t.value>=3?0:t.value+1};return(e,l)=>{const o=k(S("sar-list-item"),I),c=k(S("sar-steps"),F),d=k(S("sar-list"),b);return n(),i(d,{card:""},{default:u((()=>[p(o,{title:"上一步",onClick:s,arrow:"",hover:""}),p(o,{title:"下一步",onClick:r,arrow:"",hover:""}),p(o,null,{default:u((()=>[p(c,{current:t.value,"item-list":a},null,8,["current"])])),_:1})])),_:1})}}}),B=a({__name:"Center",setup(e){const t=C(1),a=[{name:"步骤1"},{name:"步骤2"},{name:"步骤3"}],s=()=>{t.value=t.value<=0?3:t.value-1},r=()=>{t.value=t.value>=3?0:t.value+1};return(e,l)=>{const o=k(S("sar-list-item"),I),c=k(S("sar-steps"),F),d=k(S("sar-list"),b);return n(),i(d,{card:""},{default:u((()=>[p(o,{title:"上一步",onClick:s,arrow:"",hover:""}),p(o,{title:"下一步",onClick:r,arrow:"",hover:""}),p(o,null,{default:u((()=>[p(c,{current:t.value,center:"","item-list":a},null,8,["current"])])),_:1})])),_:1})}}}),E=a({__name:"Vertical",setup(e){const t=C(1),a=[{name:"步骤1",description:"这是描述"},{name:"步骤2",description:"这是描述"},{name:"步骤3",description:"这是描述"}],s=()=>{t.value=t.value<=0?3:t.value-1},r=()=>{t.value=t.value>=3?0:t.value+1};return(e,l)=>{const o=k(S("sar-list-item"),I),c=k(S("sar-steps"),F),d=k(S("sar-list"),b);return n(),i(d,{card:""},{default:u((()=>[p(o,{title:"上一步",onClick:s,arrow:"",hover:""}),p(o,{title:"下一步",onClick:r,arrow:"",hover:""}),p(o,null,{default:u((()=>[p(c,{current:t.value,"item-list":a,direction:"vertical"},null,8,["current"])])),_:1})])),_:1})}}}),L=a({__name:"VerticalCenter",setup(e){const t=C(1),a=[{name:"步骤1",description:"这是描述"},{name:"步骤2",description:"这是描述"},{name:"步骤3",description:"这是描述"}],s=()=>{t.value=t.value<=0?3:t.value-1},r=()=>{t.value=t.value>=3?0:t.value+1};return(e,l)=>{const o=k(S("sar-list-item"),I),c=k(S("sar-steps"),F),d=k(S("sar-list"),b);return n(),i(d,{card:""},{default:u((()=>[p(o,{title:"上一步",onClick:s,arrow:"",hover:""}),p(o,{title:"下一步",onClick:r,arrow:"",hover:""}),p(o,null,{default:u((()=>[p(c,{current:t.value,"item-list":a,direction:"vertical",center:""},null,8,["current"])])),_:1})])),_:1})}}}),V=a({__name:"Icon",setup(e){const t=C(1),a=[{name:"步骤1"},{name:"步骤2"},{name:"步骤3"}],s=()=>{t.value=t.value<=0?3:t.value-1},r=()=>{t.value=t.value>=3?0:t.value+1};return(e,l)=>{const o=k(S("sar-list-item"),I),c=k(S("sar-steps"),F),d=k(S("sar-list"),b);return n(),i(d,{card:""},{default:u((()=>[p(o,{title:"上一步",onClick:s,arrow:"",hover:""}),p(o,{title:"下一步",onClick:r,arrow:"",hover:""}),p(o,null,{default:u((()=>[p(c,{current:t.value,"item-list":a,center:"","finish-icon":"star-fill","process-icon":"star","wait-icon":"star","icon-size":"40rpx"},null,8,["current"])])),_:1})])),_:1})}}}),q=a({__name:"Color",setup(e){const t=C(1),a=[{name:"步骤1"},{name:"步骤2"},{name:"步骤3"}],s=()=>{t.value=t.value<=0?3:t.value-1},r=()=>{t.value=t.value>=3?0:t.value+1};return(e,l)=>{const o=k(S("sar-list-item"),I),c=k(S("sar-steps"),F),d=k(S("sar-list"),b);return n(),i(d,{card:""},{default:u((()=>[p(o,{title:"上一步",onClick:s,arrow:"",hover:""}),p(o,{title:"下一步",onClick:r,arrow:"",hover:""}),p(o,null,{default:u((()=>[p(c,{current:t.value,"item-list":a,center:"","root-style":"--sar-steps-icon-finish-color: var(--sar-orange);\n          --sar-steps-icon-process-color: var(--sar-orange);\n          --sar-steps-text-process-color: var(--sar-orange);\n          --sar-steps-line-active-color: var(--sar-orange)"},null,8,["current"])])),_:1})])),_:1})}}}),H=a({__name:"Status",setup(e){const t=C(1),a=[{name:"订单已提交",description:"01月01日 12:00"},{name:"正在处理中",description:"01月01日 12:05"},{name:"订单已完成",description:"01月01日 12:10"}],s=()=>{t.value=t.value<=-1?2:t.value-1},r=()=>{t.value=t.value>=2?-1:t.value+1};return(e,l)=>{const o=k(S("sar-list-item"),I),c=k(S("sar-steps"),F),d=k(S("sar-list"),b);return n(),i(d,{card:""},{default:u((()=>[p(o,{title:"上一步",onClick:s,arrow:"",hover:""}),p(o,{title:"下一步",onClick:r,arrow:"",hover:""}),p(o,null,{default:u((()=>[p(c,{current:t.value,"item-list":a,direction:"vertical",status:"finish"},null,8,["current"])])),_:1})])),_:1})}}}),N=a({__name:"ErrorStatus",setup(e){const t=C(1),a=[{name:"步骤1"},{name:"步骤2"},{name:"步骤3"}],s=()=>{t.value=t.value<=0?3:t.value-1},r=()=>{t.value=t.value>=3?0:t.value+1};return(e,l)=>{const o=k(S("sar-list-item"),I),c=k(S("sar-steps"),F),d=k(S("sar-list"),b);return n(),i(d,{card:""},{default:u((()=>[p(o,{title:"上一步",onClick:s,arrow:"",hover:""}),p(o,{title:"下一步",onClick:r,arrow:"",hover:""}),p(o,null,{default:u((()=>[p(c,{current:t.value,"item-list":a,center:"",status:"error"},null,8,["current"])])),_:1})])),_:1})}}}),O=a({__name:"StepStatus",setup(e){const t=[{name:"第1节",description:"已学习",status:"finish"},{name:"第2节",description:"学习中",status:"process"},{name:"第3节",description:"未学习",status:"wait"},{name:"第4节",description:"已学习",status:"finish"},{name:"第5节",description:"出错了",status:"error"}];return(e,a)=>{const s=k(S("sar-steps"),F),r=k(S("sar-list-item"),I),l=k(S("sar-list"),b);return n(),i(l,{card:""},{default:u((()=>[p(r,null,{default:u((()=>[p(s,{"item-list":t,direction:"vertical"})])),_:1})])),_:1})}}}),D=z(a({__name:"index",setup:t=>(t,a)=>{const s=k(S("doc-demo"),e),r=k(S("doc-page"),g);return n(),i(r,null,{default:u((()=>[p(s,{title:"基础使用"},{default:u((()=>[p(A)])),_:1}),p(s,{title:"居中"},{default:u((()=>[p(B)])),_:1}),p(s,{title:"垂直步骤条"},{default:u((()=>[p(E)])),_:1}),p(s,{title:"垂直居中"},{default:u((()=>[p(L)])),_:1}),p(s,{title:"自定义图标"},{default:u((()=>[p(V)])),_:1}),p(s,{title:"自定义颜色"},{default:u((()=>[p(q)])),_:1}),p(s,{title:"当前步骤状态"},{default:u((()=>[p(H)])),_:1}),p(s,{title:"错误步骤"},{default:u((()=>[p(N)])),_:1}),p(s,{title:"自定义各步骤状态"},{default:u((()=>[p(O)])),_:1})])),_:1})}}),[["__scopeId","data-v-196ea01f"]]);export{D as default};
