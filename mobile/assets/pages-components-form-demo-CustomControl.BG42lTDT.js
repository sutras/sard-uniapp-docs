import{_ as e,a}from"./form.CS9zZpFs.js";import{d as l,r,a as o,o as t,f as u,w as s,e as m,l as n,g as i,C as p,i as d,I as c,U as f}from"./index-GlWSIXJ_.js";import{_}from"./button.BVtMR0R2.js";import{_ as v}from"./index.D9XOTfsQ.js";import{S as b}from"./input.vRmeWNTY.js";import{_ as j}from"./picker-input.vue_vue_type_script_setup_true_lang.CnxqENVe.js";import{u as x}from"./common.B4tyeXSZ.js";import"./index.DZ-iMJGl.js";import"./dom.BhynX98V.js";import"./popout-input.CFbD8N3e.js";import"./popout.Cy2JBc5u.js";import"./picker.BPMfJgRP.js";const y=l({__name:"PriceInput",props:{modelValue:{}},emits:["update:model-value"],setup(e,{emit:a}){const l=e,i=a,p=x(),d=e=>{i("update:model-value",{...l.modelValue,...e}),p.onChange()},c=e=>{const a=parseInt(e||"0",10);d({number:a})},f=e=>{d({currency:e})};return(e,a)=>{const l=r(o("sar-input"),b),i=r(o("sar-picker-input"),j),p=n;return t(),u(p,{style:{display:"flex","flex-direction":"row","align-items":"center",gap:"20rpx"}},{default:s((()=>[m(l,{type:"text","model-value":e.modelValue.number,"onUpdate:modelValue":c,"validate-event":!1},null,8,["model-value"]),m(i,{"model-value":e.modelValue.currency,placeholder:"currency",columns:[{value:"rmb",label:"RMB"},{value:"dollar",label:"Dollar"}],"onUpdate:modelValue":f,"validate-event":!1},null,8,["model-value"])])),_:1})}}}),V=l({__name:"CustomControl",setup(l){const n=i(),b=p({price:{number:0,currency:"rmb"}}),j=()=>{var e;null==(e=n.value)||e.validate().then((()=>{c("Success"),console.log("Received values from form: ",f(b))})).catch((()=>{c("Fail")}))},x=e=>e.number>0||"Price must be greater than zero!";return(l,i)=>{const p=r(o("sar-form-item"),e),c=r(o("sar-button"),_),f=r(o("sar-form"),a),V=r(o("doc-page"),v);return t(),u(V,null,{default:s((()=>[m(f,{model:b,ref_key:"formRef",ref:n},{default:s((()=>[m(p,{name:"price",label:"Price",rules:[{validator:x}]},{default:s((()=>[m(y,{modelValue:b.price,"onUpdate:modelValue":i[0]||(i[0]=e=>b.price=e)},null,8,["modelValue"])])),_:1},8,["rules"]),m(p,null,{default:s((()=>[m(c,{onClick:j},{default:s((()=>[d("Submit")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})}}});export{V as default};
