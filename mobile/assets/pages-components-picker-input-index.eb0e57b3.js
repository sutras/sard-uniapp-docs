import{_ as e}from"./index.5ae075dd.js";import{d as a,g as t,o as l,f as o,w as s,e as r,r as i,a as u}from"./index-6f8f5948.js";import{_ as p}from"./index.b4cc07cd.js";import{_ as m}from"./picker-input.vue_vue_type_script_setup_true_lang.56db3c18.js";import{_ as n,a as d}from"./list.8654b49f.js";import{_}from"./index.09d87181.js";import"./popout-input.51e07b6a.js";import"./input.a4dc6f6c.js";import"./common.097e1cb5.js";import"./popout.964827c0.js";import"./button.8a95f6cb.js";import"./picker.b82e6532.js";const c=a({__name:"Basic",setup(e){const a=t(),p=[{value:"male",label:"男性"},{value:"female",label:"女性"},{value:"others",label:"其他"}];return(e,t)=>{const _=i(u("sar-picker-input"),m),c=i(u("sar-list-item"),n),v=i(u("sar-list"),d);return l(),o(v,{card:""},{default:s((()=>[r(c,null,{default:s((()=>[r(_,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),title:"请选择性别",placeholder:"请选择性别",clearable:"",columns:p},null,8,["modelValue"])])),_:1}),r(c,{title:"当前值：",value:String(a.value)},null,8,["value"]),r(c,{title:"设置为：female (女性)",arrow:"",hover:"",onClick:t[1]||(t[1]=e=>a.value="female")}),r(c,{title:"清空",arrow:"",hover:"",onClick:t[2]||(t[2]=e=>a.value=void 0)})])),_:1})}}}),v=_(a({__name:"index",setup:a=>(a,t)=>{const m=i(u("doc-demo"),e),n=i(u("doc-page"),p);return l(),o(n,null,{default:s((()=>[r(m,{title:"基础使用"},{default:s((()=>[r(c)])),_:1})])),_:1})}}),[["__scopeId","data-v-9d6bd9e4"]]);export{v as default};