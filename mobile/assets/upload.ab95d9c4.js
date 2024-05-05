import{E as e,d as a,p as l,K as s,g as t,aq as o,q as i,s as r,o as u,f as n,w as d,u as c,h as m,e as p,i as f,t as v,v as y,y as g,L as h,j as b,ar as x,l as S,as as _,U as z,at as k,A as F,c as T,F as C,b as w,x as R,G as B,au as I}from"./index-6f8f5948.js";import{i as P,d as j,a as E,b as V,_ as A,g as D}from"./index.09d87181.js";import{a as q}from"./index.b4cc07cd.js";import{a as N,u as O}from"./common.097e1cb5.js";const H={rootStyle:[String,Object,Array],rootClass:String,accept:{type:String,default:e.upload.accept},multiple:Boolean,sourceType:{type:Array,default:e.upload.sourceType},sizeType:{type:Array,default:e.upload.sizeType},maxDuration:{type:Number,default:e.upload.maxDuration},camera:String,modelValue:Array,maxCount:{type:Number,default:e.upload.maxCount},maxSize:{type:[Number,Function],default:e.upload.maxSize},overSize:Function,disabled:Boolean,readonly:Boolean,beforeRead:Function,afterRead:Function,removable:{type:Boolean,default:e.upload.removable},beforeRemove:Function,validateEvent:{type:Boolean,default:e.upload.validateEvent}},G=A(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"upload-preview",props:{rootStyle:[String,Object,Array],rootClass:String,file:Object,url:String,isImage:Boolean,isVideo:Boolean,status:{type:String,default:e.uploadPreview.status},name:String,message:String,removable:Boolean,beforeRemove:Function,index:{type:Number,required:!0},disabled:Boolean,readonly:Boolean},emits:["image-click","remove"],setup(e,{emit:a}){const _=e,z=V("upload"),k=l((()=>{var e;return _.isImage||"image"===(null==(e=_.file)?void 0:e.type)||_.url&&P(_.url)})),F=l((()=>{var e;return _.isVideo||"video"===(null==(e=_.file)?void 0:e.type)||_.url&&j(_.url)})),T=l((()=>{var e;return _.url||(null==(e=_.file)?void 0:e.path)||""})),C=()=>{a("image-click",_.index)},w=s(),R=h(),B=t(!1),I=o(w,R),A=e=>{e.detail.fullScreen?(I.play(),B.value=!0):(I.pause(),B.value=!1)},D=()=>{I.requestFullScreen({direction:0})},N=()=>{if(_.removable&&!_.disabled&&!_.readonly){if(_.beforeRemove){const a=_.beforeRemove(_.index);if(!a)return;if(a instanceof Promise)return void a.then((()=>{e()})).catch((()=>{}))}e()}function e(){a("remove",_.index)}},O=l((()=>i(z.e("preview"),z.em("preview","is-video",F.value),_.rootClass))),H=l((()=>r(_.rootStyle)));return(e,a)=>{const l=b,s=x,t=S;return u(),n(t,{class:m(c(O)),style:g(c(H))},{default:d((()=>[c(k)?(u(),n(l,{key:0,class:m(c(z).e("image")),mode:"aspectFill",src:c(T),onClick:C},null,8,["class","src"])):c(F)?(u(),n(t,{key:1,class:m(c(z).e("video-wrapper"))},{default:d((()=>[p(s,{class:m(c(z).e("video")),id:c(w),src:c(T),controls:B.value,"show-center-play-btn":!1,onFullscreenchange:A},null,8,["class","id","src","controls"]),p(t,{class:m(c(z).e("video-play")),onClick:D},{default:d((()=>[p(E,{name:"play",size:"80rpx"})])),_:1},8,["class"])])),_:1},8,["class"])):(u(),n(t,{key:2,class:m(c(z).e("file"))},{default:d((()=>[p(t,{class:m(c(z).e("file-icon"))},{default:d((()=>[p(E,{name:"file"})])),_:1},8,["class"]),p(t,{class:m(c(z).e("file-name"))},{default:d((()=>[f(v(e.name),1)])),_:1},8,["class"])])),_:1},8,["class"])),"uploading"===e.status||"failed"===e.status?(u(),n(t,{key:3,class:m(c(z).e("status"))},{default:d((()=>[p(t,{class:m(c(z).e("status-icon"))},{default:d((()=>["uploading"===e.status?(u(),n(q,{key:0})):"failed"===e.status?(u(),n(E,{key:1,name:"x-circle"})):y("",!0)])),_:1},8,["class"]),e.message?(u(),n(t,{key:0,class:m(c(z).e("status-message"))},{default:d((()=>[f(v(e.message),1)])),_:1},8,["class"])):y("",!0)])),_:1},8,["class"])):y("",!0),!e.removable||e.disabled||e.readonly||"uploading"===e.status?y("",!0):(u(),n(t,{key:4,class:m(c(z).e("remove")),onClick:N},{default:d((()=>[p(t,{class:m(c(z).e("close"))},{default:d((()=>[p(E,{name:"close"})])),_:1},8,["class"])])),_:1},8,["class"]))])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-514f7f04"]]);const K=A(a({options:{virtualHost:!0,styleIsolation:"shared"},__name:"upload",props:H,emits:["update:model-value","remove"],setup(e,{emit:a}){const s=e,o=V("upload"),f=N(),v=O(),h=l((()=>(null==f?void 0:f.disabled)??s.disabled)),b=l((()=>(null==f?void 0:f.readonly)??s.readonly)),x=t(s.modelValue||[]);F((()=>s.modelValue),(()=>{x.value=s.modelValue||[],s.validateEvent&&(null==v||v.onChange())}));const j=(e,a)=>{const l=s.maxCount-x.value.length;e.length>l&&(e=e.slice(0,l)),a(e)},A=(e,a)=>{Promise.allSettled(e.map((e=>new Promise(((a,l)=>{if(s.beforeRead){const t=s.beforeRead(e);if(!t)return void l();if(t instanceof Promise)return void t.then((l=>{a(l??e)})).catch((()=>{l()}))}a(e)}))))).then((e=>{const l=[];e.forEach((e=>{"fulfilled"===e.status&&l.push(e.value)})),a(l)}))},q=(e,a)=>{a(e.map((e=>({file:e,name:e.path&&D(e.path)}))))},H=(e,l)=>{var t;const o=[],i=[];e.forEach((e=>{const a=e.file;a&&("function"==typeof s.maxSize&&s.maxSize(a)||a.size&&"number"==typeof s.maxSize&&a.size>s.maxSize)?i.push(e):o.push(e)})),i.length&&(null==(t=s.overSize)||t.call(s,i)),o.length&&(x.value=[...x.value,...o],a("update:model-value",x.value),l(o))},K=e=>{z(e).forEach((e=>{var a;null==(a=s.afterRead)||a.call(s,e)}))};const L=()=>{h.value||b.value||x.value.length>=s.maxCount||function(e){const{count:a=9,mediaType:l="image",sourceType:s=["album","camera"],maxDuration:t=10,sizeType:o=["original","compressed"],camera:i="back",success:r,fail:u,complete:n}=e;"image"===l?_({count:a,sizeType:o,sourceType:s,success(e){null==r||r({type:"image",tempFiles:z(e.tempFiles).map((e=>({tempFilePath:e.path,size:e.size,duration:0,height:0,width:0,fileType:"image"})))})},fail:u,complete:n}):k({sourceType:s,compressed:o.includes("compressed"),maxDuration:t,camera:i,success(e){null==r||r({type:"video",tempFiles:[{tempFilePath:e.tempFilePath,size:e.size,duration:e.duration,height:e.height,width:e.width,fileType:"video"}]})},fail:u,complete:n})}({mediaType:s.accept,count:s.multiple?9999:1,sizeType:s.sizeType,sourceType:s.sourceType,maxDuration:s.maxDuration,camera:s.camera,success(e){var a;a=e.tempFiles.map((e=>({type:e.fileType,size:e.size,path:e.tempFilePath,duration:e.duration,width:e.width,height:e.height}))),[j,A,q,H,K].reduceRight(((e,a)=>l=>{a(l,e)}),(()=>{}))(a)},fail:B})},U=e=>{const a=x.value[e],l=x.value.filter((e=>{var a;return e.url&&P(e.url)||"image"===(null==(a=e.file)?void 0:a.type)})),s=l.findIndex((e=>e===a)),t=l.map((e=>{var a;return e.url||(null==(a=e.file)?void 0:a.path)}));I({urls:t,current:t[s]})},$=l((()=>i(o.b(),o.m("disabled",h.value),o.m("readonly",b.value),s.rootClass))),J=l((()=>r(s.rootStyle)));return(e,l)=>{const s=S;return u(),n(s,{class:m(c($)),style:g(c(J))},{default:d((()=>[p(s,{class:m(c(o).e("wrapper"))},{default:d((()=>[(u(!0),T(C,null,w(x.value,((l,s)=>(u(),n(G,{key:s,file:l.file,url:l.url,"is-image":l.isImage,"is-video":l.isVideo,status:l.status,name:l.name,message:l.message,removable:e.removable,"before-remove":e.beforeRemove,index:s,disabled:c(h),readonly:c(b),onRemove:e=>((e,l)=>{const s=x.value.filter(((a,l)=>l!==e));x.value=s,a("update:model-value",s),a("remove",e,l)})(s,l),onImageClick:U},null,8,["file","url","is-image","is-video","status","name","message","removable","before-remove","index","disabled","readonly","onRemove"])))),128)),x.value.length<e.maxCount?(u(),n(s,{key:0,class:m(c(o).e("select")),onClick:L},{default:d((()=>[R(e.$slots,"select",{},(()=>[p(s,{class:m(c(o).e("select-icon"))},{default:d((()=>[p(E,{name:"plus"})])),_:1},8,["class"])]),!0)])),_:3},8,["class"])):y("",!0)])),_:3},8,["class"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-29c6afb5"]]);export{K as _};
