import{_ as e}from"./index.70abdba0.js";import{d as t,g as a,o as l,f as r,w as i,e as s,r as o,a as n,c as u,v,F as d,u as p,H as c}from"./index-158834fb.js";import{_ as m}from"./index.be0dc1e1.js";import{S as _}from"./calendar.677fb4f1.js";import{_ as b,a as y}from"./list.28356688.js";import{_ as f}from"./popout.9425df0e.js";import{_ as k}from"./index.a84991b2.js";import"./datetime-picker.vue_vue_type_script_setup_true_lang.83a26082.js";import"./picker.97ded675.js";import"./button.90fb394d.js";import"./common.26852cb0.js";const w=t({__name:"Basic",setup(e){const t=a(new Date);return(e,a)=>{const u=o(n("sar-calendar"),_),v=o(n("sar-list-item"),b),d=o(n("sar-list"),y);return l(),r(d,{card:""},{default:i((()=>{var e;return[s(v,null,{default:i((()=>[s(u,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e)},null,8,["modelValue"])])),_:1}),s(v,{title:"当前值：",value:null==(e=t.value)?void 0:e.toLocaleString()},null,8,["value"]),s(v,{title:"设置为今天",arrow:"",hover:"",onClick:a[1]||(a[1]=e=>t.value=new Date)}),s(v,{title:"清空",arrow:"",hover:"",onClick:a[2]||(a[2]=e=>t.value=void 0)})]})),_:1})}}}),g=t({__name:"Type",setup(e){const t=a(!1),p=a(!1),c=a(!1);return(e,a)=>{const m=o(n("sar-list-item"),b),k=o(n("sar-list"),y),w=o(n("sar-calendar"),_),g=o(n("sar-popout"),f);return l(),u(d,null,[s(k,{card:""},{default:i((()=>[s(m,{title:"单个日期",arrow:"",hover:"",onClick:a[0]||(a[0]=e=>t.value=!0)}),s(m,{title:"多个日期",arrow:"",hover:"",onClick:a[1]||(a[1]=e=>p.value=!0)}),s(m,{title:"范围选择",arrow:"",hover:"",onClick:a[2]||(a[2]=e=>c.value=!0)})])),_:1}),s(g,{visible:t.value,"onUpdate:visible":a[3]||(a[3]=e=>t.value=e),title:"单个日期"},{visible:i((({already:e})=>[e?(l(),r(w,{key:0})):v("",!0)])),_:1},8,["visible"]),s(g,{visible:p.value,"onUpdate:visible":a[4]||(a[4]=e=>p.value=e),title:"多个日期"},{visible:i((({already:e})=>[e?(l(),r(w,{key:0,type:"multiple"})):v("",!0)])),_:1},8,["visible"]),s(g,{visible:c.value,"onUpdate:visible":a[5]||(a[5]=e=>c.value=e),title:"范围选择"},{visible:i((({already:e})=>[e?(l(),r(w,{key:0,type:"range"})):v("",!0)])),_:1},8,["visible"])],64)}}}),x=t({__name:"MinMax",setup(e){const t=a(!1);return(e,a)=>{const p=o(n("sar-list-item"),b),c=o(n("sar-list"),y),m=o(n("sar-calendar"),_),k=o(n("sar-popout"),f);return l(),u(d,null,[s(c,{card:""},{default:i((()=>[s(p,{title:"请选择日期",arrow:"",hover:"",onClick:a[0]||(a[0]=e=>t.value=!0)})])),_:1}),s(k,{visible:t.value,"onUpdate:visible":a[1]||(a[1]=e=>t.value=e),title:"请选择日期"},{visible:i((({already:e})=>[e?(l(),r(m,{key:0,min:new Date(2e3,0,7),max:new Date(2e3,0,21)},null,8,["min","max"])):v("",!0)])),_:1},8,["visible"])],64)}}}),h=t({__name:"MaxDays",setup(e){const t=a(!1),m=a(!1);return(e,a)=>{const k=o(n("sar-list-item"),b),w=o(n("sar-list"),y),g=o(n("sar-calendar"),_),x=o(n("sar-popout"),f);return l(),u(d,null,[s(w,{card:""},{default:i((()=>[s(k,{title:"多个日期",arrow:"",hover:"",onClick:a[0]||(a[0]=e=>t.value=!0)}),s(k,{title:"范围选择",arrow:"",hover:"",onClick:a[1]||(a[1]=e=>m.value=!0)})])),_:1}),s(x,{visible:t.value,"onUpdate:visible":a[2]||(a[2]=e=>t.value=e),title:"多个日期"},{visible:i((({already:e})=>[e?(l(),r(g,{key:0,type:"multiple","max-days":3,"over-max-days":()=>p(c)("最多选择3天")},null,8,["over-max-days"])):v("",!0)])),_:1},8,["visible"]),s(x,{visible:m.value,"onUpdate:visible":a[3]||(a[3]=e=>m.value=e),title:"范围选择"},{visible:i((({already:e})=>[e?(l(),r(g,{key:0,type:"range","max-days":3,"over-max-days":()=>p(c)("最多选择3天")},null,8,["over-max-days"])):v("",!0)])),_:1},8,["visible"])],64)}}}),D=t({__name:"DisabledDate",setup(e){const t=a(!1),p=e=>/0|6/.test(String(e.getDay()));return(e,a)=>{const c=o(n("sar-list-item"),b),m=o(n("sar-list"),y),k=o(n("sar-calendar"),_),w=o(n("sar-popout"),f);return l(),u(d,null,[s(m,{card:""},{default:i((()=>[s(c,{title:"请选择日期",arrow:"",hover:"",onClick:a[0]||(a[0]=e=>t.value=!0)})])),_:1}),s(w,{visible:t.value,"onUpdate:visible":a[1]||(a[1]=e=>t.value=e),title:"请选择日期"},{visible:i((({already:e})=>[e?(l(),r(k,{key:0,"disabled-date":p})):v("",!0)])),_:1},8,["visible"])],64)}}}),j=t({__name:"WeekStartsOn",setup(e){const t=a(!1);return(e,a)=>{const p=o(n("sar-list-item"),b),c=o(n("sar-list"),y),m=o(n("sar-calendar"),_),k=o(n("sar-popout"),f);return l(),u(d,null,[s(c,{card:""},{default:i((()=>[s(p,{title:"请选择日期",arrow:"",hover:"",onClick:a[0]||(a[0]=e=>t.value=!0)})])),_:1}),s(k,{visible:t.value,"onUpdate:visible":a[1]||(a[1]=e=>t.value=e),title:"请选择日期"},{visible:i((({already:e})=>[e?(l(),r(m,{key:0,"week-starts-on":1})):v("",!0)])),_:1},8,["visible"])],64)}}}),C=t({__name:"Formatter",setup(e){const t=a(!1),p=e=>{const t=e.date.getFullYear(),a=e.date.getMonth()+1,l=e.date.getDate(),r=e.date.getDay();if(5===a&&(1===l&&(e.bottom="劳动节"),l<=3&&(e.top="休"),4===l&&(e.bottom="青年节"),0===r)){15-(new Date(t,a-1,1).getDay()||7)===l&&(e.bottom="母亲节")}"start"===e.type?e.bottom="入店":"end"===e.type&&(e.bottom="离店"),0!==r&&6!==r||(e.style={fontWeight:"bold",color:"var(--sar-red)"})};return(e,a)=>{const c=o(n("sar-list-item"),b),m=o(n("sar-list"),y),k=o(n("sar-calendar"),_),w=o(n("sar-popout"),f);return l(),u(d,null,[s(m,{card:""},{default:i((()=>[s(c,{title:"请选择日期",arrow:"",hover:"",onClick:a[0]||(a[0]=e=>t.value=!0)})])),_:1}),s(w,{visible:t.value,"onUpdate:visible":a[1]||(a[1]=e=>t.value=e),title:"请选择日期"},{visible:i((({already:e})=>[e?(l(),r(k,{key:0,formatter:p,"current-date":new Date((new Date).getFullYear(),4,1)},null,8,["current-date"])):v("",!0)])),_:1},8,["visible"])],64)}}}),U=t({__name:"Several",setup(e){const t=a(!1);return(e,a)=>{const p=o(n("sar-list-item"),b),c=o(n("sar-list"),y),m=o(n("sar-calendar"),_),k=o(n("sar-popout"),f);return l(),u(d,null,[s(c,{card:""},{default:i((()=>[s(p,{title:"请选择日期",arrow:"",hover:"",onClick:a[0]||(a[0]=e=>t.value=!0)})])),_:1}),s(k,{visible:t.value,"onUpdate:visible":a[1]||(a[1]=e=>t.value=e),title:"请选择日期"},{visible:i((({already:e})=>[e?(l(),r(m,{key:0,type:"range","several-months":""})):v("",!0)])),_:1},8,["visible"])],64)}}}),S=k(t({__name:"index",setup:t=>(t,a)=>{const u=o(n("doc-demo"),e),v=o(n("doc-page"),m);return l(),r(v,null,{default:i((()=>[s(u,{title:"基础使用"},{default:i((()=>[s(w)])),_:1}),s(u,{title:"类型"},{default:i((()=>[s(g)])),_:1}),s(u,{title:"自定义日期范围"},{default:i((()=>[s(x)])),_:1}),s(u,{title:"最多选择天数"},{default:i((()=>[s(h)])),_:1}),s(u,{title:"禁用日期"},{default:i((()=>[s(D)])),_:1}),s(u,{title:"自定义起始周"},{default:i((()=>[s(j)])),_:1}),s(u,{title:"格式化日期"},{default:i((()=>[s(C)])),_:1}),s(u,{title:"展示多个月"},{default:i((()=>[s(U)])),_:1})])),_:1})}}),[["__scopeId","data-v-766cc921"]]);export{S as default};
