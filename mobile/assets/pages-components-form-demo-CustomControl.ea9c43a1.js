import{_ as e,a}from"./form.5d9d011d.js";import{d as l,o as r,f as o,w as t,e as u,r as s,a as m,l as n,g as i,C as p,i as d,H as c,S as f}from"./index-aa8abc65.js";import{_}from"./button.21fa86db.js";import{_ as v}from"./index.5a4c2473.js";import{S as b}from"./input.a3626fe5.js";import{_ as j}from"./picker-input.vue_vue_type_script_setup_true_lang.16e78e0d.js";import{u as x}from"./common.c6a791ea.js";import"./index.776be883.js";import"./dom.06da4e90.js";import"./popout-input.451b6040.js";import"./popout.83744114.js";import"./picker.9ab593d4.js";const y=l({__name:"PriceInput",props:{modelValue:null},emits:["update:model-value"],setup(e,{emit:a}){const l=e,i=x(),p=e=>{a("update:model-value",{...l.modelValue,...e}),i.onChange()},d=e=>{const a=parseInt(e||"0",10);p({number:a})},c=e=>{p({currency:e})};return(a,l)=>{const i=s(m("sar-input"),b),p=s(m("sar-picker-input"),j),f=n;return r(),o(f,{style:{display:"flex","flex-direction":"row","align-items":"center",gap:"20rpx"}},{default:t((()=>[u(i,{type:"text","model-value":e.modelValue.number,"onUpdate:modelValue":d,"validate-event":!1},null,8,["model-value"]),u(p,{"model-value":e.modelValue.currency,placeholder:"currency",columns:[{value:"rmb",label:"RMB"},{value:"dollar",label:"Dollar"}],"onUpdate:modelValue":c,"validate-event":!1},null,8,["model-value"])])),_:1})}}}),V=l({__name:"CustomControl",setup(l){const n=i(),b=p({price:{number:0,currency:"rmb"}}),j=()=>{var e;null==(e=n.value)||e.validate().then((()=>{c("Success"),console.log("Received values from form: ",f(b))})).catch((()=>{c("Fail")}))},x=e=>e.number>0||"Price must be greater than zero!";return(l,i)=>{const p=s(m("sar-form-item"),e),c=s(m("sar-button"),_),f=s(m("sar-form"),a),V=s(m("doc-page"),v);return r(),o(V,null,{default:t((()=>[u(f,{model:b,ref_key:"formRef",ref:n},{default:t((()=>[u(p,{name:"price",label:"Price",rules:[{validator:x}]},{default:t((()=>[u(y,{modelValue:b.price,"onUpdate:modelValue":i[0]||(i[0]=e=>b.price=e)},null,8,["modelValue"])])),_:1},8,["rules"]),u(p,null,{default:t((()=>[u(c,{onClick:j},{default:t((()=>[d("Submit")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})}}});export{V as default};