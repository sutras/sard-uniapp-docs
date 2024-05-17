import{S as e}from"./input.2uLEz9Cx.js";import{d as a,g as t,C as l,r as o,a as r,o as i,f as s,w as u,e as n,u as m,i as d,I as c}from"./index-DFwJ2Oj-.js";import{_ as p,a as g}from"./form.D0wWYwqT.js";import{_ as v}from"./picker-input.vue_vue_type_script_setup_true_lang.aIRoVlGW.js";import{_}from"./datetime-picker-input.vue_vue_type_script_setup_true_lang.CGIQMhnX.js";import{_ as f}from"./switch.-YXJ6ypM.js";import{_ as y}from"./checkbox.Bm9_TAZM.js";import{_ as b}from"./checkbox-group.iHz6frrg.js";import{_ as V,a as h}from"./radio-group.H3c3BP4a.js";import{_ as j}from"./button.6NBmS2yV.js";import{_ as k}from"./index.NOUmFN7R.js";import"./index.BDMDFAO9.js";import"./common.BM3Qp-Uy.js";import"./dom.LPfVLj9J.js";import"./popout-input.BJdVGvWw.js";import"./popout.Dm-B4gdJ.js";import"./picker.DHmeMfQj.js";import"./datetime-picker.vue_vue_type_script_setup_true_lang.DDcUBznL.js";const x=a({__name:"Validate",setup(a){const x=t(),A=l({name:"Hello",region:"",count:"",date1:void 0,date2:void 0,delivery:!1,type:[],resource:"",desc:""}),P=l({name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],count:[{required:!0,message:"Please select Activity count",trigger:"change"}],date1:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],date2:[{type:"date",required:!0,message:"Please pick a time",trigger:"change"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]}),q=Array.from({length:100}).map(((e,a)=>({value:`${a+1}`,label:`${a+1}`})));return(a,t)=>{const l=o(r("sar-input"),e),U=o(r("sar-form-item"),p),S=o(r("sar-picker-input"),v),w=o(r("sar-datetime-picker-input"),_),C=o(r("sar-switch"),f),O=o(r("sar-checkbox"),y),z=o(r("sar-checkbox-group"),b),I=o(r("sar-radio"),V),R=o(r("sar-radio-group"),h),L=o(r("sar-button"),j),Z=o(r("sar-form"),g),$=o(r("doc-page"),k);return i(),s($,null,{default:u((()=>[n(Z,{ref_key:"ruleFormRef",ref:x,model:A,rules:P},{default:u((()=>[n(U,{label:"Activity name",name:"name"},{default:u((()=>[n(l,{inlaid:"",modelValue:A.name,"onUpdate:modelValue":t[0]||(t[0]=e=>A.name=e),placeholder:"Activity name"},null,8,["modelValue"])])),_:1}),n(U,{label:"Activity zone",name:"region"},{default:u((()=>[n(S,{modelValue:A.region,"onUpdate:modelValue":t[1]||(t[1]=e=>A.region=e),placeholder:"Activity zone",columns:[{label:"Zone one",value:"shanghai"},{label:"Zone two",value:"beijing"}]},null,8,["modelValue"])])),_:1}),n(U,{label:"Activity count",name:"count"},{default:u((()=>[n(S,{modelValue:A.count,"onUpdate:modelValue":t[2]||(t[2]=e=>A.count=e),placeholder:"Activity count",columns:m(q)},null,8,["modelValue","columns"])])),_:1}),n(U,{label:"Activity time",required:"",name:"date1"},{default:u((()=>[n(w,{modelValue:A.date1,"onUpdate:modelValue":t[3]||(t[3]=e=>A.date1=e),type:"yMd",placeholder:"Pick a date"},null,8,["modelValue"])])),_:1}),n(U,{label:"","show-star":!1,name:"date2"},{default:u((()=>[n(w,{modelValue:A.date2,"onUpdate:modelValue":t[4]||(t[4]=e=>A.date2=e),type:"hms",placeholder:"Pick a time"},null,8,["modelValue"])])),_:1}),n(U,{label:"Instant delivery",name:"delivery"},{default:u((()=>[n(C,{modelValue:A.delivery,"onUpdate:modelValue":t[5]||(t[5]=e=>A.delivery=e)},null,8,["modelValue"])])),_:1}),n(U,{label:"Activity type",name:"type"},{default:u((()=>[n(z,{modelValue:A.type,"onUpdate:modelValue":t[6]||(t[6]=e=>A.type=e)},{default:u((()=>[n(O,{value:"Online activities",label:"Online activities"}),n(O,{value:"Promotion activities",label:"Promotion activities"}),n(O,{value:"Offline activities",label:"Offline activities"}),n(O,{value:"Simple brand exposure",label:"Simple brand exposure"})])),_:1},8,["modelValue"])])),_:1}),n(U,{label:"Resources",name:"resource"},{default:u((()=>[n(R,{modelValue:A.resource,"onUpdate:modelValue":t[7]||(t[7]=e=>A.resource=e)},{default:u((()=>[n(I,{label:"Sponsorship",value:"Sponsorship"}),n(I,{label:"Venue",value:"Venue"})])),_:1},8,["modelValue"])])),_:1}),n(U,{label:"Activity form",name:"desc"},{default:u((()=>[n(l,{modelValue:A.desc,"onUpdate:modelValue":t[8]||(t[8]=e=>A.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),n(U,null,{default:u((()=>[n(L,{onClick:t[9]||(t[9]=e=>{var a;(a=x.value)&&a.validate().then((()=>{c("Success!"),console.log("Success!")})).catch((e=>{console.log("error submit!",e)}))})},{default:u((()=>[d("Create")])),_:1}),n(L,{type:"outline",onClick:t[10]||(t[10]=e=>{var a;(a=x.value)&&a.reset()}),"root-style":"margin-top: 20rpx"},{default:u((()=>[d(" Reset ")])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1})}}});export{x as default};
