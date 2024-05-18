import{g as e,B as t,C as a,m as l,A as s,E as o,p as n,N as i,S as r,d as u,G as v,D as c,u as p,o as d,f as y,w as f,v as m,h as b,x,T as _,s as g,q as k,z as C,l as S,c as $,e as h,F as T,b as B,Z as I,i as z,t as H,_ as V,$ as w,O as E,a0 as A,a1 as D,r as F,a as j}from"./index-B7LoF5HM.js";import{b as L,_ as M,a as q,c as G}from"./index.BtT18Zob.js";const N=o.popup,O=Symbol("popup-context");function R(){const l=e();return t(O,a({visibleState:l})),function(e){l.value=e}}function U(e){const t=l(O,null);t&&s((()=>t.visibleState),(()=>{"enter"===t.visibleState&&(null==e||e())}))}function W(){return!!l(O,null)}function Z(t={}){const a=n((()=>t.duration||0)),l=n((()=>t.enterFromClass||`${t.prefix}enter-from`)),o=n((()=>t.enterActiveClass||`${t.prefix}enter-active`)),u=n((()=>t.enterToClass||`${t.prefix}enter-to`)),v=n((()=>t.leaveFromClass||`${t.prefix}leave-from`)),c=n((()=>t.leaveActiveClass||`${t.prefix}leave-active`)),p=n((()=>t.leaveToClass||`${t.prefix}leave-to`)),d=e(!1),y=e("");let f,m,b="";function x(e){m=setTimeout((()=>{m=null,e()}),30)}function _(){m&&(clearTimeout(m),m=null),f&&(clearTimeout(f),f=null)}function g(e){var a;null==(a=t.onVisibleHook)||a.call(t,e)}function k(){_(),"leaving"===b&&g("leave-cancelled"),b="entering",d.value=!0,y.value=`${l.value} ${o.value}`,g("before-enter"),x((()=>{y.value=`${o.value} ${u.value}`,g("enter")})),f=setTimeout((()=>{f=null,"entering"===b&&t.visible&&C()}),a.value+30)}function C(){_(),b="entered",y.value="",g("after-enter")}function S(){_(),b="leaved",y.value="",d.value=!1,g("after-leave")}return i((()=>{t.visible&&k()})),r((()=>{f&&(clearTimeout(f),f=null),m&&(clearTimeout(m),m=null)})),s((()=>t.visible),(()=>{t.visible?k():(_(),"entering"===b&&g("enter-cancelled"),b="leaving",y.value=`${v.value} ${c.value}`,g("before-leave"),x((()=>{y.value=`${c.value} ${p.value}`,g("leave")})),f=setTimeout((()=>{f=null,"leaving"!==b||t.visible||S()}),a.value+30))})),{onTransitionEnd:function(){"entering"===b&&t.visible?C():"leaving"!==b||t.visible||S()},realVisible:d,transitionClass:y}}function J(e){let t;const a=()=>{t&&(clearTimeout(t),t=null)};return r((()=>{a()})),[l=>{a(),t=setTimeout((()=>{t=null,e()}),l)},a,()=>!!t]}let K=1e3;function P(){const t=e(K);return[t,function(){t.value=K+=1}]}const Q=o.overlay,X=M(u({options:{virtualHost:!0,styleIsolation:"shared"},__name:"overlay",props:v({rootStyle:{},rootClass:{},visible:{type:Boolean},zIndex:{},duration:{},background:{},transparent:{type:Boolean}},Q),emits:["click"],setup(e,{emit:t}){const l=e,s=t,o=L("overlay"),i=e=>{s("click",e)},{realVisible:r,transitionClass:u,onTransitionEnd:v}=Z(a({visible:c(l,"visible"),duration:c(l,"duration"),prefix:o.m("")})),$=n((()=>k(o.b(),o.m("transparent",l.transparent),u.value,l.rootClass))),h=n((()=>C({zIndex:l.zIndex,backgroundColor:l.background,transitionDuration:l.duration+"ms"},l.rootStyle)));return(e,t)=>{const a=S;return p(r)?(d(),y(a,{key:0,class:b($.value),style:x(h.value),onClick:i,onTransitionend:p(v),onTouchmove:t[0]||(t[0]=_((()=>{}),["stop","prevent"]))},{default:f((()=>[m(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onTransitionend"])):g("",!0)}}}),[["__scopeId","data-v-af9ce890"]]),Y=M(u({options:{virtualHost:!0,styleIsolation:"shared"},__name:"popup",props:v({rootStyle:{},rootClass:{},visible:{type:Boolean},duration:{},effect:{},overlay:{type:Boolean},overlayClass:{},overlayStyle:{},background:{},transparent:{type:Boolean}},N),emits:["overlay-click","before-enter","enter","after-enter","enter-cancelled","before-leave","leave","after-leave","leave-cancelled","visible-hook"],setup(e,{emit:t}){const l=e,s=t,o=L("popup"),[i,r]=P(),u=R(),{realVisible:v,transitionClass:_,onTransitionEnd:B}=Z(a({visible:c(l,"visible"),duration:c(l,"duration"),prefix:n((()=>o.m(l.effect)+"-")),onVisibleHook:e=>{u(e),s("visible-hook",e),s(e),"before-enter"===e&&r()}})),I=e=>{s("overlay-click",e)},z=n((()=>k(o.b(),o.m(l.effect),l.rootClass,_.value))),H=n((()=>C(l.rootStyle,{zIndex:i.value,display:v.value?"flex":"none",transitionDuration:l.duration+"ms"})));return(e,t)=>{const a=S;return d(),$(T,null,[e.overlay?(d(),y(X,{key:0,visible:e.visible,duration:e.duration,"z-index":p(i),background:e.background,transparent:e.transparent,"root-style":e.overlayStyle,"root-class":e.overlayClass,onClick:I},null,8,["visible","duration","z-index","background","transparent","root-style","root-class"])):g("",!0),h(a,{class:b(z.value),style:x(H.value),onTransitionend:p(B)},{default:f((()=>[m(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onTransitionend"])],64)}}}),[["__scopeId","data-v-c8d62366"]]),ee={...o.loading,animated:!0,progress:1},te=M(u({options:{virtualHost:!0,styleIsolation:"shared"},__name:"loading",props:v({rootStyle:{},rootClass:{},type:{},color:{},size:{},text:{},textColor:{},textSize:{},vertical:{type:Boolean},animated:{type:Boolean},progress:{}},ee),setup(e){const t=e,a=L("loading"),l=n((()=>Math.max(Math.floor(12*t.progress),1))),s=n((()=>k(a.b(),a.m("vertical",t.vertical)))),o=n((()=>k(a.e("icon"),a.em("icon",t.type),a.em("icon","animated",t.animated)))),i=n((()=>C({color:t.color,fontSize:t.size},"circular"!==t.type||t.animated?null:{transform:`rotate(${360*t.progress}deg)`},t.rootClass))),r=n((()=>C({color:t.textColor,fontSize:t.textSize},t.rootStyle)));return(e,n)=>{const u=S;return d(),y(u,{class:b(s.value)},{default:f((()=>[h(u,{class:b(o.value),style:x(i.value)},{default:f((()=>["circular"===e.type?m(e.$slots,"circular",{key:0},(()=>[h(u,{class:b(p(a).e("spinner"))},null,8,["class"])]),!0):"clock"===e.type?(d(),$(T,{key:1},B(12,(e=>h(u,{key:e,class:b(p(k)(p(a).e("scale"),p(a).em("scale",e),t.animated?null:{[p(a).em("scale","hidden")]:e>l.value}))},null,8,["class"]))),64)):g("",!0)])),_:3},8,["class","style"]),p(I)(e.$slots.default||e.text)?(d(),y(u,{key:0,class:b(p(a).e("text")),style:x(r.value)},{default:f((()=>[m(e.$slots,"default",{},(()=>[z(H(e.text),1)]),!0)])),_:3},8,["class","style"])):g("",!0)])),_:3},8,["class"])}}}),[["__scopeId","data-v-b89a0869"]]),ae=M(u({options:{virtualHost:!0,styleIsolation:"shared"},__name:"toast",props:v({rootStyle:{},rootClass:{},type:{},title:{},visible:{type:Boolean},position:{},overlay:{type:Boolean},transparent:{type:Boolean},timeout:{},duration:{}},V),emits:["update:visible"],setup(t,{expose:a,emit:l}){const o=t,i=l,r=L("toast"),u=e(o.visible),[v,c]=J((()=>{u.value=!1,i("update:visible",!1)}));s((()=>o.visible),(()=>{u.value=o.visible,o.visible&&"loading"!==o.type&&o.timeout>0&&v(o.timeout)})),a({reHideLater:()=>{c(),w((()=>{"loading"!==o.type&&o.timeout>0&&v(o.timeout)}))},cancelHide:c});const m=n((()=>k(r.b(),r.m("is-text","text"===o.type),r.m("not-text","text"!==o.type),o.rootClass))),_=n((()=>C(o.rootStyle))),$=n((()=>{const e={top:{top:"var(--sar-toast-top)",transform:"translate(-50%, 0)"},bottom:{top:"auto",bottom:"var(--sar-toast-bottom)",transform:"translate(-50%, 0)"},center:null}[o.position];return C({width:"max-content",maxWidth:"var(--sar-toast-text-max-width)",...e})})),T=n((()=>k(r.e("icon"),r.em("icon","loading","loading"===o.type))));return(e,t)=>{const a=S;return d(),y(Y,{visible:e.visible,overlay:e.overlay,duration:e.duration,transparent:e.transparent,"root-style":$.value,effect:"fade"},{default:f((()=>[h(a,{class:b(m.value),style:x(_.value)},{default:f((()=>["text"!==e.type?(d(),y(a,{key:0,class:b(T.value)},{default:f((()=>["loading"===e.type?(d(),y(te,{key:0})):(d(),y(q,{key:1,name:e.type},null,8,["name"]))])),_:1},8,["class"])):g("",!0),h(a,{class:b(p(r).e("title"))},{default:f((()=>[z(H(e.title),1)])),_:1},8,["class"])])),_:1},8,["class","style"])])),_:1},8,["visible","overlay","duration","transparent","root-style"])}}}),[["__scopeId","data-v-a0368f41"]]),le=u({options:{virtualHost:!0,styleIsolation:"shared"},__name:"toast-agent",props:v({id:{},rootStyle:{},rootClass:{},type:{},title:{},visible:{type:Boolean},position:{},overlay:{type:Boolean},transparent:{type:Boolean},timeout:{},duration:{}},D),setup(t){const a=t,l=e({...a}),s=e();return E(A,{show(e){var t;l.value={...a,...e,visible:!0},null==(t=s.value)||t.reHideLater()},hide(){var e;l.value={...l.value,visible:!1},null==(e=s.value)||e.cancelHide()}},n((()=>l.value.id))),(e,t)=>(d(),y(ae,{"root-style":l.value.rootStyle,"root-class":l.value.rootClass,type:l.value.type,title:l.value.title,visible:l.value.visible,"onUpdate:visible":t[0]||(t[0]=e=>l.value.visible=e),position:l.value.position,overlay:l.value.overlay,transparent:l.value.transparent,ref_key:"elRef",ref:s},null,8,["root-style","root-class","type","title","visible","position","overlay","transparent"]))}}),se=M(u({__name:"index",props:{emphasis:{type:Boolean}},setup(e){const t=G("page");return(e,a)=>{const l=F(j("sar-toast-agent"),le),s=S;return d(),$(T,null,[h(l),h(s,{class:b(p(k)(p(t).b(),p(t).m("emphasis",e.emphasis)))},{default:f((()=>[m(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])],64)}}}),[["__scopeId","data-v-fd1a29ab"]]);export{Y as S,se as _,te as a,R as b,U as c,Z as d,J as e,X as f,P as g,W as u};
