import{S as e}from"./input.2uLEz9Cx.js";import{d as l,C as a,r as t,a as o,o as i,f as r,w as u,e as s,i as d}from"./index-DFwJ2Oj-.js";import{_ as p,a as m}from"./form.D0wWYwqT.js";import{_ as n}from"./picker-input.vue_vue_type_script_setup_true_lang.aIRoVlGW.js";import{_ as c}from"./datetime-picker-input.vue_vue_type_script_setup_true_lang.CGIQMhnX.js";import{_}from"./switch.-YXJ6ypM.js";import{_ as f}from"./checkbox.Bm9_TAZM.js";import{_ as v}from"./checkbox-group.iHz6frrg.js";import{_ as b,a as y}from"./radio-group.H3c3BP4a.js";import{_ as V}from"./button.6NBmS2yV.js";import{_ as j}from"./index.NOUmFN7R.js";import"./index.BDMDFAO9.js";import"./common.BM3Qp-Uy.js";import"./dom.LPfVLj9J.js";import"./popout-input.BJdVGvWw.js";import"./popout.Dm-B4gdJ.js";import"./picker.DHmeMfQj.js";import"./datetime-picker.vue_vue_type_script_setup_true_lang.DDcUBznL.js";const g=l({__name:"Typical",setup(l){const g=a({name:"",region:"",date1:void 0,date2:void 0,delivery:!1,type:[],resource:"",desc:""}),h=()=>{console.log("submit!")};return(l,a)=>{const k=t(o("sar-input"),e),x=t(o("sar-form-item"),p),U=t(o("sar-picker-input"),n),w=t(o("sar-datetime-picker-input"),c),A=t(o("sar-switch"),_),P=t(o("sar-checkbox"),f),C=t(o("sar-checkbox-group"),v),S=t(o("sar-radio"),b),O=t(o("sar-radio-group"),y),z=t(o("sar-button"),V),I=t(o("sar-form"),m),Z=t(o("doc-page"),j);return i(),r(Z,null,{default:u((()=>[s(I,{model:g,"label-width":"240rpx"},{default:u((()=>[s(x,{label:"Activity name"},{default:u((()=>[s(k,{inlaid:"",modelValue:g.name,"onUpdate:modelValue":a[0]||(a[0]=e=>g.name=e),placeholder:"Please input Activity name"},null,8,["modelValue"])])),_:1}),s(x,{label:"Activity zone"},{default:u((()=>[s(U,{modelValue:g.region,"onUpdate:modelValue":a[1]||(a[1]=e=>g.region=e),placeholder:"please select your zone",title:"please select your zone",columns:[{label:"Zone one",value:"shanghai"},{label:"Zone two",value:"beijing"}]},null,8,["modelValue"])])),_:1}),s(x,{label:"Activity time"},{default:u((()=>[s(w,{modelValue:g.date1,"onUpdate:modelValue":a[2]||(a[2]=e=>g.date1=e),type:"yMd",placeholder:"Pick a date"},null,8,["modelValue"])])),_:1}),s(x,{label:""},{default:u((()=>[s(w,{modelValue:g.date2,"onUpdate:modelValue":a[3]||(a[3]=e=>g.date2=e),type:"hms",placeholder:"Pick a time"},null,8,["modelValue"])])),_:1}),s(x,{label:"Instant delivery"},{default:u((()=>[s(A,{modelValue:g.delivery,"onUpdate:modelValue":a[4]||(a[4]=e=>g.delivery=e)},null,8,["modelValue"])])),_:1}),s(x,{label:"Activity type"},{default:u((()=>[s(C,{modelValue:g.type,"onUpdate:modelValue":a[5]||(a[5]=e=>g.type=e)},{default:u((()=>[s(P,{value:"Online activities",label:"Online activities"}),s(P,{value:"Promotion activities",label:"Promotion activities"}),s(P,{value:"Offline activities",label:"Offline activities"}),s(P,{value:"Simple brand exposure",label:"Simple brand exposure"})])),_:1},8,["modelValue"])])),_:1}),s(x,{label:"Resources"},{default:u((()=>[s(O,{modelValue:g.resource,"onUpdate:modelValue":a[6]||(a[6]=e=>g.resource=e)},{default:u((()=>[s(S,{value:"Sponsor",label:"Sponsor"}),s(S,{value:"Venue",label:"Venue"})])),_:1},8,["modelValue"])])),_:1}),s(x,{label:"Activity form","label-valign":"start"},{default:u((()=>[s(k,{inlaid:"",modelValue:g.desc,"onUpdate:modelValue":a[7]||(a[7]=e=>g.desc=e),type:"textarea",placeholder:"Please input Activity form","show-count":""},null,8,["modelValue"])])),_:1}),s(x,null,{default:u((()=>[s(z,{onClick:h},{default:u((()=>[d("Create")])),_:1}),s(z,{"root-style":"margin-top: 20rpx",type:"outline"},{default:u((()=>[d(" Cancel ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})}}});export{g as default};
