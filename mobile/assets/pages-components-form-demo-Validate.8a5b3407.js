import{S as e}from"./input.a3626fe5.js";import{d as a,g as t,C as l,o,f as r,w as i,e as s,u,i as n,H as m,r as d,a as c}from"./index-aa8abc65.js";import{_ as p,a as g}from"./form.5d9d011d.js";import{_ as v}from"./picker-input.vue_vue_type_script_setup_true_lang.16e78e0d.js";import{_}from"./datetime-picker-input.vue_vue_type_script_setup_true_lang.8a58433d.js";import{_ as f}from"./switch.92a5eee1.js";import{_ as y}from"./checkbox.c7a502fc.js";import{_ as b}from"./checkbox-group.c69de0b4.js";import{_ as V,a as h}from"./radio-group.d4f4c904.js";import{_ as j}from"./button.21fa86db.js";import{_ as k}from"./index.5a4c2473.js";import"./index.776be883.js";import"./common.c6a791ea.js";import"./dom.06da4e90.js";import"./popout-input.451b6040.js";import"./popout.83744114.js";import"./picker.9ab593d4.js";import"./datetime-picker.vue_vue_type_script_setup_true_lang.f6e8ecb1.js";const x=a({__name:"Validate",setup(a){const x=t(),A=l({name:"Hello",region:"",count:"",date1:void 0,date2:void 0,delivery:!1,type:[],resource:"",desc:""}),P=l({name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],count:[{required:!0,message:"Please select Activity count",trigger:"change"}],date1:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],date2:[{type:"date",required:!0,message:"Please pick a time",trigger:"change"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]}),q=Array.from({length:100}).map(((e,a)=>({value:`${a+1}`,label:`${a+1}`})));return(a,t)=>{const l=d(c("sar-input"),e),U=d(c("sar-form-item"),p),S=d(c("sar-picker-input"),v),w=d(c("sar-datetime-picker-input"),_),C=d(c("sar-switch"),f),O=d(c("sar-checkbox"),y),z=d(c("sar-checkbox-group"),b),R=d(c("sar-radio"),V),H=d(c("sar-radio-group"),h),I=d(c("sar-button"),j),L=d(c("sar-form"),g),Z=d(c("doc-page"),k);return o(),r(Z,null,{default:i((()=>[s(L,{ref_key:"ruleFormRef",ref:x,model:A,rules:P},{default:i((()=>[s(U,{label:"Activity name",name:"name"},{default:i((()=>[s(l,{inlaid:"",modelValue:A.name,"onUpdate:modelValue":t[0]||(t[0]=e=>A.name=e),placeholder:"Activity name"},null,8,["modelValue"])])),_:1}),s(U,{label:"Activity zone",name:"region"},{default:i((()=>[s(S,{modelValue:A.region,"onUpdate:modelValue":t[1]||(t[1]=e=>A.region=e),placeholder:"Activity zone",columns:[{label:"Zone one",value:"shanghai"},{label:"Zone two",value:"beijing"}]},null,8,["modelValue"])])),_:1}),s(U,{label:"Activity count",name:"count"},{default:i((()=>[s(S,{modelValue:A.count,"onUpdate:modelValue":t[2]||(t[2]=e=>A.count=e),placeholder:"Activity count",columns:u(q)},null,8,["modelValue","columns"])])),_:1}),s(U,{label:"Activity time",required:"",name:"date1"},{default:i((()=>[s(w,{modelValue:A.date1,"onUpdate:modelValue":t[3]||(t[3]=e=>A.date1=e),type:"yMd",placeholder:"Pick a date"},null,8,["modelValue"])])),_:1}),s(U,{label:"","show-star":!1,name:"date2"},{default:i((()=>[s(w,{modelValue:A.date2,"onUpdate:modelValue":t[4]||(t[4]=e=>A.date2=e),type:"hms",placeholder:"Pick a time"},null,8,["modelValue"])])),_:1}),s(U,{label:"Instant delivery",name:"delivery"},{default:i((()=>[s(C,{modelValue:A.delivery,"onUpdate:modelValue":t[5]||(t[5]=e=>A.delivery=e)},null,8,["modelValue"])])),_:1}),s(U,{label:"Activity type",name:"type"},{default:i((()=>[s(z,{modelValue:A.type,"onUpdate:modelValue":t[6]||(t[6]=e=>A.type=e)},{default:i((()=>[s(O,{value:"Online activities",label:"Online activities"}),s(O,{value:"Promotion activities",label:"Promotion activities"}),s(O,{value:"Offline activities",label:"Offline activities"}),s(O,{value:"Simple brand exposure",label:"Simple brand exposure"})])),_:1},8,["modelValue"])])),_:1}),s(U,{label:"Resources",name:"resource"},{default:i((()=>[s(H,{modelValue:A.resource,"onUpdate:modelValue":t[7]||(t[7]=e=>A.resource=e)},{default:i((()=>[s(R,{label:"Sponsorship",value:"Sponsorship"}),s(R,{label:"Venue",value:"Venue"})])),_:1},8,["modelValue"])])),_:1}),s(U,{label:"Activity form",name:"desc"},{default:i((()=>[s(l,{modelValue:A.desc,"onUpdate:modelValue":t[8]||(t[8]=e=>A.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),s(U,null,{default:i((()=>[s(I,{onClick:t[9]||(t[9]=e=>{var a;(a=x.value)&&a.validate().then((()=>{m("Success!"),console.log("Success!")})).catch((e=>{console.log("error submit!",e)}))})},{default:i((()=>[n("Create")])),_:1}),s(I,{type:"outline",onClick:t[10]||(t[10]=e=>{var a;(a=x.value)&&a.reset()}),"root-style":"margin-top: 20rpx"},{default:i((()=>[n(" Reset ")])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1})}}});export{x as default};