import{I as e}from"./input.0bbac4cd.js";import{d as a,g as s,C as t,o as r,f as l,w as o,e as u,v as i,i as n,G as m,r as d,a as p}from"./index-55845ce0.js";import{_ as c,a as g}from"./form.d4fb7392.js";import{a as f,_ as h}from"./index.f5b2fbd4.js";import{_}from"./button.810661ff.js";import"./index.f4d2668a.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./common.bcce75e7.js";import"./dom.7fe67c3f.js";const v=a({__name:"CustomValidate",setup(a){const v=s(),b=t({pass:"",checkPass:"",age:""}),P=t({pass:[{validator:e=>{if(""===e)return"Please input the password";if(""!==b.checkPass){if(!v.value)return!0;v.value.validate(["checkPass"]).catch((()=>{}))}return!0},trigger:"blur"}],checkPass:[{validator:e=>""===e?"Please input the password again":e===b.pass||"Two inputs don't match!",trigger:"blur"}],age:[{validator:e=>new Promise(((a,s)=>{if(!e)return s("Please input the age");setTimeout((()=>{Number.isInteger(Number(e))?e<18?s("Age must be greater than 18"):a():s("Please input digits")}),1e3)})),trigger:"blur"}]});return(a,s)=>{const t=d(p("sar-input"),e),k=d(p("sar-form-item"),c),j=d(p("sar-loading"),f),V=d(p("sar-button"),_),w=d(p("sar-form"),g),y=d(p("doc-page"),h);return r(),l(y,null,{default:o((()=>[u(w,{ref_key:"ruleFormRef",ref:v,model:b,rules:P},{default:o((()=>[u(k,{label:"Password",name:"pass"},{default:o((()=>[u(t,{modelValue:b.pass,"onUpdate:modelValue":s[0]||(s[0]=e=>b.pass=e),type:"password"},null,8,["modelValue"])])),_:1}),u(k,{label:"Confirm",name:"checkPass"},{default:o((()=>[u(t,{modelValue:b.checkPass,"onUpdate:modelValue":s[1]||(s[1]=e=>b.checkPass=e),type:"password"},null,8,["modelValue"])])),_:1}),u(k,{label:"Age",name:"age"},{validate:o((({state:e})=>[u(t,{modelValue:b.age,"onUpdate:modelValue":s[2]||(s[2]=e=>b.age=e)},{append:o((()=>["validating"===e?(r(),l(j,{key:0,color:"var(--sar-tertiary-color)"})):i("",!0)])),_:2},1032,["modelValue"])])),_:1}),u(k,null,{default:o((()=>[u(V,{onClick:s[3]||(s[3]=e=>{var a;(a=v.value)&&a.validate().then((()=>{m("Success!"),console.log("Success!")})).catch((()=>{console.log("error submit!")}))})},{default:o((()=>[n("Submit")])),_:1}),u(V,{type:"outline","root-style":"margin-top: 20rpx",onClick:s[4]||(s[4]=e=>{var a;(a=v.value)&&a.reset()})},{default:o((()=>[n(" Reset ")])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1})}}});export{v as default};