import{S as e}from"./input.2uLEz9Cx.js";import{d as a,g as s,C as r,r as o,a as m,o as l,f as u,w as t,e as d,i as n,I as i,T as p}from"./index-DFwJ2Oj-.js";import{_ as c,a as f}from"./form.D0wWYwqT.js";import{_}from"./checkbox.Bm9_TAZM.js";import{_ as b}from"./button.6NBmS2yV.js";import{_ as j}from"./index.NOUmFN7R.js";import"./index.BDMDFAO9.js";import"./common.BM3Qp-Uy.js";import"./dom.LPfVLj9J.js";const k=a({__name:"BasicLogin",setup(a){const k=s(),w=r({username:"",password:"",remember:!0}),g=()=>{var e;null==(e=k.value)||e.validate().then((()=>{i("Success!"),console.log("Success:",p(w))})).catch((e=>{console.log("Failed:",e)}))};return(a,s)=>{const r=o(m("sar-input"),e),i=o(m("sar-form-item"),c),p=o(m("sar-checkbox"),_),h=o(m("sar-button"),b),x=o(m("sar-form"),f),V=o(m("doc-page"),j);return l(),u(V,null,{default:t((()=>[d(x,{model:w,ref_key:"formRef",ref:k},{default:t((()=>[d(i,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},{default:t((()=>[d(r,{modelValue:w.username,"onUpdate:modelValue":s[0]||(s[0]=e=>w.username=e)},null,8,["modelValue"])])),_:1}),d(i,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},{default:t((()=>[d(r,{type:"password",modelValue:w.password,"onUpdate:modelValue":s[1]||(s[1]=e=>w.password=e)},null,8,["modelValue"])])),_:1}),d(i,{label:"",name:"remember"},{default:t((()=>[d(p,{checked:w.remember,"onUpdate:checked":s[2]||(s[2]=e=>w.remember=e)},{default:t((()=>[n(" Remember me ")])),_:1},8,["checked"])])),_:1}),d(i,null,{default:t((()=>[d(h,{onClick:g},{default:t((()=>[n("Submit")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})}}});export{k as default};
