import{S as e}from"./input.D0R8Wcol.js";import{d as a,g as s,C as c,A as l,r as n,a as o,o as m,f as r,w as u,e as t,i,U as d,I as k}from"./index-cDBoG4Q4.js";import{_ as f,a as p}from"./form.BQfQb6ue.js";import{_ as h}from"./checkbox.DJOlHk6p.js";import{_}from"./button.D0jjfd-b.js";import{_ as j}from"./index.BXD0v1E4.js";import"./index.DPvFFOke.js";import"./common.C5AqtFVf.js";import"./dom.v6hFRhZS.js";const N=a({__name:"DynamicValidate",setup(a){const N=s(),x=c({username:"",nickname:"",checkNick:!1});l((()=>x.checkNick),(()=>{var e;null==(e=N.value)||e.validate(["nickname"]).catch((()=>{}))}),{flush:"post"});const V=async()=>{var e;null==(e=N.value)||e.validate().then((()=>{console.log("Success:",d(x)),k("success")})).catch((e=>{console.log("Failed:",e)}))};return(a,s)=>{const c=n(o("sar-input"),e),l=n(o("sar-form-item"),f),d=n(o("sar-checkbox"),h),k=n(o("sar-button"),_),b=n(o("sar-form"),p),g=n(o("doc-page"),j);return m(),r(g,null,{default:u((()=>[t(b,{ref_key:"formRef",ref:N,model:x},{default:u((()=>[t(l,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},{default:u((()=>[t(c,{modelValue:x.username,"onUpdate:modelValue":s[0]||(s[0]=e=>x.username=e)},null,8,["modelValue"])])),_:1}),t(l,{label:"Nickname",name:"nickname",rules:[{required:x.checkNick,message:"Please input your nickname!"}]},{default:u((()=>[t(c,{modelValue:x.nickname,"onUpdate:modelValue":s[1]||(s[1]=e=>x.nickname=e)},null,8,["modelValue"])])),_:1},8,["rules"]),t(l,{name:"checkNick"},{default:u((()=>[t(d,{checked:x.checkNick,"onUpdate:checked":s[2]||(s[2]=e=>x.checkNick=e)},{default:u((()=>[i(" Nickname is required ")])),_:1},8,["checked"])])),_:1}),t(l,null,{default:u((()=>[t(k,{onClick:V},{default:u((()=>[i("Check")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})}}});export{N as default};