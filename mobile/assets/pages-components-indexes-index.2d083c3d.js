import{_ as e}from"./index.e7de6d2c.js";import{d as s,m as t,J as a,av as n,p as o,q as r,s as l,o as c,f as i,w as u,x as d,i as v,t as p,h as m,u as h,y as f,l as _,K as y,g as x,C as g,c as b,F as S,b as T,e as j,v as w,Q as I,ao as C,U as k,A,z as E,Z as L,L as $,B as H,T as N,r as O,a as q}from"./index-55845ce0.js";import{c as B,d as G,_ as Q}from"./index.f5b2fbd4.js";import{a as z}from"./index.f4d2668a.js";import{g as F,t as J,m as M}from"./dom.7fe67c3f.js";import{_ as P}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as R,a as Y}from"./list.0cde8376.js";import{_ as Z}from"./button.810661ff.js";import"./common.bcce75e7.js";const D={rootStyle:[String,Object,Array],rootClass:String,current:[String,Number]},K={rootStyle:[String,Object,Array],rootClass:String,name:{type:[String,Number],required:!0}},U={anchors:{type:Array,required:!0},current:[Number,String]},V=Symbol("indexes-context"),X=P(s({options:{virtualHost:!0,styleIsolation:"shared"},__name:"indexes-anchor",props:K,setup(e){const s=e,x=z("indexes"),g=t(V);if(!g)throw new Error("IndexesAnchor must be included in Indexes.");const b=a(),S=y(),T=()=>F(`#${b}`,S);n((()=>{g.register(s.name,{getRect:T,id:b})}));const j=o((()=>r(x.e("anchor"),s.rootClass))),w=o((()=>l(s.rootStyle)));return(e,s)=>{const t=_;return c(),i(t,{class:m(h(j)),style:f(h(w)),id:h(b)},{default:u((()=>[d(e.$slots,"default",{},(()=>[v(p(e.name),1)]),!0)])),_:3},8,["class","style","id"])}}}),[["__scopeId","data-v-eec816f6"]]),W=P(s({options:{virtualHost:!0,styleIsolation:"shared"},__name:"indexes-nav",props:U,emits:["select"],setup(e,{emit:s}){const t=e,n=z("indexes"),d=y(),A=a(),E=x(),L=x(!1);let $=null,H=!1;const{realVisible:N,transitionClass:O,onTransitionEnd:q}=B(g({visible:L,duration:300,prefix:n.em("hint","")})),G=o((()=>{let e=void 0!==t.current?t.anchors.indexOf(t.current):-1;return e<0&&(e=0),20*e+10+"px"})),Q=e=>{if(!E.value)return;const a=e.clientY-E.value.top,n=k(Math.floor(a/20),0,t.anchors.length-1);n!==$&&($=n,s("select",t.anchors[n]))},M=async e=>{L.value=!0,await(async()=>{E.value=await F(`#${A}`,d)})(),H||Q(e.touches[0])},P=e=>{H=!0,E.value&&Q(e.touches[0])},R=()=>{L.value=!1,H=!1,E.value=void 0,$=null},Y=e=>{const s=C();M(J(e,s.windowTop));const t=e=>{e.preventDefault(),P(J(e,s.windowTop))},a=()=>{R(),document.removeEventListener("mouseup",a),document.removeEventListener("mousemove",t)};document.addEventListener("mousemove",t),document.addEventListener("mouseup",a)},Z=o((()=>r(n.e("nav")))),D=o((()=>l({"--sar-indexes-nav-item-size":"20px"})));return(e,s)=>{const t=_;return c(),i(t,{class:m(h(Z)),style:f(h(D)),id:h(A),onTouchstart:M,onTouchmove:I(P,["stop","prevent"]),onTouchend:R,onTouchcancel:R,onMousedown:Y},{default:u((()=>[(c(!0),b(S,null,T(e.anchors,((s,a)=>(c(),i(t,{key:a,class:m(h(r)(h(n).e("nav-item"),h(n).em("nav-item","active",s===e.current)))},{default:u((()=>[v(p(s),1)])),_:2},1032,["class"])))),128)),h(N)?(c(),i(t,{key:0,class:m(h(r)(h(n).e("hint"),h(O))),style:f(h(l)({top:h(G)})),onTransitionend:h(q)},{default:u((()=>[j(t,{class:m(h(n).e("hint-text"))},{default:u((()=>[v(p(e.current),1)])),_:1},8,["class"])])),_:1},8,["class","style","onTransitionend"])):w("",!0)])),_:1},8,["class","style","id","onTouchmove"])}}}),[["__scopeId","data-v-fc777427"]]),ee=P(s({options:{virtualHost:!0,styleIsolation:"shared"},__name:"indexes",props:D,emits:["change"],setup(e,{expose:s,emit:t}){const n=e,v=z("indexes"),p=x(n.current);A((()=>n.current),(()=>{!E(n.current)&&Q.value.includes(n.current)&&(p.value=n.current,k(n.current))}));const g=y(),b=a(),S=x(),T=x(0),w=x(0);let I=!1;const[C]=G((()=>{I=!1})),k=e=>{if(!S.value)return;I=!0,C(150);const s=q.value.find((s=>s[0]===e));if(s){const e=s[1].top-S.value.top;T.value=void 0,L((()=>{T.value=e}))}};s({scrollTo:k});const O=e=>{w.value=e.detail.scrollTop,!I&&S.value&&M(q.value.map((e=>e[1])),(e=>{const s=q.value[e][0];s!==p.value&&(p.value=s,t("change",s))}),{offset:S.value.top+w.value})};$((()=>{F(`#${b}`,g).then((e=>{S.value=e}))}));const q=x([]),B=x({});H(V,{register(e,s){B.value[e]=s},unregister(e){delete B.value[e]}});$((()=>{L((()=>{(async()=>(await Promise.all(Object.keys(B.value).map((e=>{const{getRect:s}=B.value[e];return new Promise((t=>{s().then((s=>{t([e,s])}))}))})))).sort(((e,s)=>e[1].top-s[1].top)))().then((e=>{q.value=e,E(n.current)||k(n.current)}))}))}));const Q=o((()=>q.value.map((e=>e[0])))),J=e=>{p.value=e,k(e),t("change",e)},P=o((()=>r(v.b(),n.rootClass))),R=o((()=>l(n.rootStyle)));return(e,s)=>{const t=N,a=_;return c(),i(a,{class:m(h(P)),style:f(h(R))},{default:u((()=>[j(t,{class:m(h(v).e("scroll-view")),id:h(b),"scroll-y":"","scroll-top":T.value,onScroll:O},{default:u((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","id","scroll-top"]),j(W,{anchors:h(Q),current:p.value,onSelect:J},null,8,["anchors","current"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-c771474d"]]),se=s({__name:"Basic",setup(e){const s=[{anchor:"A",provinces:["安徽省","澳门特别行政区"]},{anchor:"B",provinces:["北京市"]},{anchor:"C",provinces:["重庆市"]},{anchor:"F",provinces:["福建省"]},{anchor:"G",provinces:["甘肃省","广东省","广西壮族自治区","贵州省"]},{anchor:"H",provinces:["海南省","河北省","河南省","黑龙江省","湖北省","湖南省"]},{anchor:"J",provinces:["吉林省","江苏省","江西省"]},{anchor:"L",provinces:["辽宁省"]},{anchor:"N",provinces:["内蒙古自治区","宁夏回族自治区"]},{anchor:"Q",provinces:["青海省"]},{anchor:"S",provinces:["山东省","山西省","陕西省","上海市","四川省"]},{anchor:"T",provinces:["台湾省","天津市"]},{anchor:"X",provinces:["西藏自治区","香港特别行政区","新疆维吾尔自治区"]},{anchor:"Y",provinces:["云南省"]},{anchor:"Z",provinces:["浙江省"]}],t=x("Q"),a=()=>{t.value=void 0,L((()=>{t.value="G"}))};return(e,n)=>{const o=O(q("sar-indexes-anchor"),X),r=O(q("sar-list-item"),R),l=O(q("sar-list"),Y),d=_,p=O(q("sar-indexes"),ee),m=O(q("sar-button"),Z);return c(),b(S,null,[j(p,{current:t.value,"root-style":"height: 640rpx"},{default:u((()=>[(c(),b(S,null,T(s,((e,s)=>j(d,{key:s},{default:u((()=>[j(o,{name:e.anchor},null,8,["name"]),j(l,null,{default:u((()=>[(c(!0),b(S,null,T(e.provinces,((e,s)=>(c(),i(r,{key:s,title:e},null,8,["title"])))),128))])),_:2},1024)])),_:2},1024))),64))])),_:1},8,["current"]),j(m,{onClick:a,"root-style":"margin: 100rpx 40rpx 0"},{default:u((()=>[v(" scrollTo G ")])),_:1})],64)}}}),te=P(s({__name:"index",setup:s=>(s,t)=>{const a=O(q("doc-demo"),e),n=O(q("doc-page"),Q);return c(),i(n,null,{default:u((()=>[j(a,{title:"基础使用",full:""},{default:u((()=>[j(se)])),_:1})])),_:1})}}),[["__scopeId","data-v-aaacb0fc"]]);export{te as default};